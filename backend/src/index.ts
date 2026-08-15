import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

import cors from 'cors';

dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/health', async (req: Request, res: Response) => {
  try {
    // Check DB connection
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(503).json({ status: 'error', database: 'disconnected', error });
  }
});

import multer from 'multer';
import * as turf from '@turf/turf';

const upload = multer({ dest: 'uploads/' });

// Ensure uploads directory exists
import fs from 'fs';
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}
if (!fs.existsSync('uploads/reports')) {
  fs.mkdirSync('uploads/reports', { recursive: true });
}

import { ethers } from 'ethers';

// Load contract addresses (will be created by deploy script)
let contractAddresses: any = {};
try {
  contractAddresses = JSON.parse(fs.readFileSync('./src/contractAddresses.json', 'utf-8'));
} catch (e) {
  console.warn("contractAddresses.json not found. Run deployment script first.");
}

const rpcUrl = process.env.RPC_URL || "http://127.0.0.1:8545";
const privateKey = process.env.PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; 
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

const harvestRegistryAbi = [
  "function registerHarvest(string _batchId, string _species, string _gpsHash, bool _zoneValidated) external"
];
const formulationRegistryAbi = [
  "function registerFormulation(uint256 _formulationId, string _name, string[] _sourceBatchIds, string _qrCodeUrl) external"
];
const geoFenceValidatorAbi = [
  "function getApprovedZone(string _species) external view returns (string)"
];

const harvestRegistry = new ethers.Contract(contractAddresses.HarvestRegistry || ethers.ZeroAddress, harvestRegistryAbi, wallet);
const formulationRegistry = new ethers.Contract(contractAddresses.FormulationRegistry || ethers.ZeroAddress, formulationRegistryAbi, wallet);
const geoFenceValidator = new ethers.Contract(contractAddresses.GeoFenceValidator || ethers.ZeroAddress, geoFenceValidatorAbi, wallet);

// AI species verification function
// Uses HuggingFace Vision API if HUGGINGFACE_API_KEY is available, otherwise falls back to mock
async function verifySpeciesAI(photoFile: Express.Multer.File | undefined, claimedSpecies: string): Promise<{ confidence: number, flagged: boolean }> {
  if (!photoFile) return { confidence: 0, flagged: true };
  
  const filename = photoFile.originalname ? photoFile.originalname.toLowerCase() : '';
  const speciesLower = claimedSpecies.toLowerCase();

  // If using HuggingFace API and online
  if (process.env.HUGGINGFACE_API_KEY) {
    try {
      const imageBuffer = fs.readFileSync(photoFile.path);
      const response = await fetch(
        "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
        {
          headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/octet-stream",
          },
          method: "POST",
          body: imageBuffer,
        }
      );
      
      if (response.ok) {
        const result: any = await response.json();
        if (Array.isArray(result)) {
          // If the model identifies the specific claimed species in the labels
          const specificMatch = result.find((r: any) => 
            r.label && r.label.toLowerCase().includes(speciesLower)
          );
          
          if (specificMatch) {
            const score = Math.min(99, Math.max(85, Math.round(specificMatch.score * 100)));
            return { confidence: score, flagged: false };
          }
          
          // If it matches generic plant terms but not the claimed species specifically
          const genericMatch = result.find((r: any) => 
            r.label && (
              r.label.toLowerCase().includes('plant') || 
              r.label.toLowerCase().includes('leaf') ||
              r.label.toLowerCase().includes('flower') ||
              r.label.toLowerCase().includes('herb')
            )
          );
          
          if (genericMatch) {
            // It's a plant, but maybe not the correct species. Give it a medium score and flag it for manual review.
            return { confidence: 65, flagged: true };
          }
          
          // No plant match at all (e.g., a car or a dog)
          return { confidence: 25, flagged: true };
        }
      }
    } catch (e) {
      console.warn("HuggingFace API failed or offline, using smart fallback logic.");
    }
  }

  // Smart Demo Fallback / Mock
  // If the filename contains the claimed species (e.g., "ashwagandha.png")
  if (filename.includes(speciesLower)) {
    const score = Math.floor(Math.random() * 8) + 90; // 90-97%
    return { confidence: score, flagged: false };
  }

  // If the filename contains generic plant keywords
  const genericKeywords = ['plant', 'leaf', 'flower', 'herb', 'green', 'root', 'extract', 'nature', 'tree'];
  if (genericKeywords.some(keyword => filename.includes(keyword))) {
    // If it's a generic plant image but doesn't match the species name, flag it for manual review
    return { confidence: 62, flagged: true };
  }

  // If the filename contains non-plant keywords or doesn't match at all
  // e.g. "car.png", "dog.jpg", "wrong.png", "Gemini_Generated_Image..."
  const score = Math.floor(Math.random() * 20) + 15; // 15-35%
  return { confidence: score, flagged: true };
}

app.post('/api/harvests', upload.single('photo'), async (req: Request, res: Response): Promise<any> => {
  try {
    const { species, quantity, lat, lng, notes } = req.body;
    let latitude = parseFloat(lat);
    let longitude = parseFloat(lng);
    let quantityKg = parseFloat(quantity);

    if (isNaN(quantityKg) || quantityKg <= 0) {
      return res.status(400).json({ success: false, error: 'Please enter a valid numeric quantity in kg (e.g. 50)' });
    }

    if (isNaN(latitude) || isNaN(longitude)) {
      latitude = 24.465;
      longitude = 74.869;
    }

    let zoneValidated = false;

    // 1. Check if point is in an approved zone
    if (species) {
      const zone = await prisma.approvedZone.findFirst({
        where: { species }
      });
      
      if (zone && zone.geoJsonPolygon) {
        try {
          const polygon = JSON.parse(zone.geoJsonPolygon);
          const point = turf.point([longitude, latitude]);
          zoneValidated = turf.booleanPointInPolygon(point, polygon);
        } catch (e) {
          console.error("Invalid GeoJSON in DB for zone", e);
        }
      }
    }

    // 2. Create the Harvest Batch
    const photoUrl = req.file ? `/uploads/${req.file.filename}` : null;
    
    // AI Species Verification
    const aiResult = await verifySpeciesAI(req.file, species);
    
    // Hardcoding collectorId to 1 for scaffolding
    const batchId = `BATCH-${Date.now()}`;
    
    const batch = await prisma.herbBatch.create({
      data: {
        batchId,
        herbName: species,
        quantityKg,
        latitude,
        longitude,
        notes,
        photoUrl,
        zoneValidated,
        aiConfidence: aiResult.confidence,
        aiFlagged: aiResult.flagged,
        originLocation: `${latitude}, ${longitude}`,
        harvestDate: new Date(),
        collectorId: 1, // Dummy collector ID
        status: 'COLLECTED'
      }
    });

    // Write to blockchain
    try {
      if (contractAddresses.HarvestRegistry) {
        const gpsHash = ethers.keccak256(ethers.toUtf8Bytes(`${latitude},${longitude}`));
        const tx = await (harvestRegistry as any).registerHarvest(batchId, species, gpsHash, zoneValidated);
        
        await prisma.blockchainRecord.create({
          data: {
            entityType: 'HerbBatch',
            entityId: batch.id,
            txHash: tx.hash,
            contractAddress: contractAddresses.HarvestRegistry
          }
        });
      }
    } catch (bcError) {
      console.error("Blockchain writing failed:", bcError);
      // We don't fail the whole request for hackathon demo purposes if BC fails
    }

    return res.status(201).json({ success: true, batch });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Failed to log harvest' });
  }
});

app.get('/api/harvests/me', async (req: Request, res: Response): Promise<any> => {
  try {
    const batches = await prisma.herbBatch.findMany({
      where: { collectorId: 1 }, // Dummy collector ID
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(batches);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch harvests' });
  }
});

app.get('/api/earnings/me', async (req: Request, res: Response): Promise<any> => {
  try {
    const transfers = await prisma.priceTransfer.findMany({
      where: { recipientId: 1 } // Dummy collector ID
    });
    const total = transfers.reduce((sum, t) => sum + t.amount, 0);
    return res.status(200).json({ total, transfers });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch earnings' });
  }
});

// ─────────────────────────────────────────────
// STAGE 3 ROUTES
// ─────────────────────────────────────────────
import QRCode from 'qrcode';
import path from 'path';

// GET all validated batches (for Aggregator)
app.get('/api/batches/validated', async (req: Request, res: Response): Promise<any> => {
  try {
    const batches = await prisma.herbBatch.findMany({
      where: { zoneValidated: true, formulationId: null },
      include: { collector: { select: { name: true } }, processingEvents: true },
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(batches);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch batches' });
  }
});

// POST: Add processing event to a batch
app.post('/api/processing-events', async (req: Request, res: Response): Promise<any> => {
  try {
    const { batchId, eventType, notes } = req.body;
    const event = await prisma.processingEvent.create({
      data: { batchId: parseInt(batchId), eventType, notes }
    });
    // Update batch status
    await prisma.herbBatch.update({
      where: { id: parseInt(batchId) },
      data: { status: 'AGGREGATED' }
    });
    return res.status(201).json({ success: true, event });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to add processing event' });
  }
});

// POST: Merge multiple batches into a new combined batch
app.post('/api/batches/merge', async (req: Request, res: Response): Promise<any> => {
  try {
    const { batchIds, notes } = req.body;
    const ids: number[] = batchIds.map((id: string) => parseInt(id));
    const sources = await prisma.herbBatch.findMany({ where: { id: { in: ids } } });
    const totalKg = sources.reduce((s, b) => s + b.quantityKg, 0);
    const newBatch = await prisma.herbBatch.create({
      data: {
        batchId: `MERGED-${Date.now()}`,
        herbName: sources.map(s => s.herbName).join('+'),
        quantityKg: totalKg,
        originLocation: 'Merged',
        harvestDate: new Date(),
        collectorId: 1, // Dummy
        status: 'AGGREGATED',
        notes,
        zoneValidated: true,
        sourceBatches: { connect: ids.map(id => ({ id })) }
      }
    });
    return res.status(201).json({ success: true, batch: newBatch });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to merge batches' });
  }
});

// GET: Batches awaiting testing (for Lab)
app.get('/api/batches/awaiting-test', async (req: Request, res: Response): Promise<any> => {
  try {
    const batches = await prisma.herbBatch.findMany({
      where: { status: { in: ['COLLECTED', 'AGGREGATED'] } },
      include: { collector: { select: { name: true } } },
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(batches);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch batches' });
  }
});

// POST: Upload test report (Lab)
const testUpload = multer({ dest: 'uploads/reports/' });
app.post('/api/test-reports', testUpload.single('report'), async (req: Request, res: Response): Promise<any> => {
  try {
    const { batchId, result, purityScore, notes } = req.body;
    const certificateHash = `CERT-${Date.now()}`;
    const reportUrl = req.file ? `/uploads/reports/${req.file.filename}` : null;
    const cert = await prisma.testCertificate.create({
      data: {
        certificateHash,
        testDate: new Date(),
        result,
        notes: notes || (reportUrl ? `Report: ${reportUrl}` : undefined),
        herbBatchId: parseInt(batchId),
        labId: 1 // Dummy lab user ID
      }
    });
    await prisma.herbBatch.update({
      where: { id: parseInt(batchId) },
      data: { status: result === 'PASSED' ? 'TESTED' : 'COLLECTED' }
    });
    return res.status(201).json({ success: true, certificate: cert });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to upload test report' });
  }
});

// POST: Log a PriceTransfer
app.post('/api/price-transfers', async (req: Request, res: Response): Promise<any> => {
  try {
    const { amount, recipientId, senderId, herbBatchId } = req.body;
    const transferData: any = {
      amount: parseFloat(amount),
      recipientId: parseInt(recipientId)
    };
    if (senderId) transferData.senderId = parseInt(senderId);
    if (herbBatchId) transferData.herbBatchId = parseInt(herbBatchId);

    const transfer = await prisma.priceTransfer.create({
      data: transferData
    });
    return res.status(201).json({ success: true, transfer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to log payment' });
  }
});

// GET: Tested/passed batches for Manufacturer
app.get('/api/batches/tested', async (req: Request, res: Response): Promise<any> => {
  try {
    const batches = await prisma.herbBatch.findMany({
      where: { status: 'TESTED', formulationId: null },
      include: {
        collector: { select: { name: true } },
        certificates: true,
        priceTransfers: true
      },
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(batches);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch tested batches' });
  }
});

// POST: Create Formulation (Manufacturer)
if (!fs.existsSync('uploads/qr')) fs.mkdirSync('uploads/qr', { recursive: true });

app.post('/api/formulations', async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, finalPriceInr, batchIds } = req.body;
    const ids: number[] = batchIds.map((id: string | number) => parseInt(id as string));
    const priceInr = parseFloat(finalPriceInr);

    // Calculate fair-trade %
    const batches = await prisma.herbBatch.findMany({
      where: { id: { in: ids } },
      include: { priceTransfers: true }
    });
    const totalPaid = batches.flatMap(b => b.priceTransfers).reduce((s, t) => s + t.amount, 0);
    const fairTradePercentage = priceInr > 0 ? (totalPaid / priceInr) * 100 : 0;

    // Create formulation
    const formulation = await prisma.formulation.create({
      data: { name, finalPriceInr: priceInr, fairTradePercentage }
    });

    // Generate QR code
    const verifyUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/verify/${formulation.id}`;
    const qrPath = path.join('uploads/qr', `formulation-${formulation.id}.png`);
    await QRCode.toFile(qrPath, verifyUrl);

    // Update formulation with QR code URL
    const updated = await prisma.formulation.update({
      where: { id: formulation.id },
      data: { qrCodeUrl: `/uploads/qr/formulation-${formulation.id}.png` }
    });

    // Link batches to formulation
    await prisma.herbBatch.updateMany({
      where: { id: { in: ids } },
      data: { formulationId: formulation.id, status: 'DISTRIBUTED' }
    });

    // Write to blockchain
    try {
      if (contractAddresses.FormulationRegistry) {
        // Convert IDs to strings for the smart contract
        const stringIds = ids.map(id => id.toString());
        const tx = await (formulationRegistry as any).registerFormulation(formulation.id, name, stringIds, `/uploads/qr/formulation-${formulation.id}.png`);
        
        await prisma.blockchainRecord.create({
          data: {
            entityType: 'Formulation',
            entityId: formulation.id,
            txHash: tx.hash,
            contractAddress: contractAddresses.FormulationRegistry
          }
        });
      }
    } catch (bcError) {
      console.error("Blockchain formulation writing failed:", bcError);
    }

    return res.status(201).json({ success: true, formulation: updated });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create formulation' });
  }
});

// GET: Chain of Custody for a formulation
app.get('/api/formulations/:id/chain', async (req: Request, res: Response): Promise<any> => {
  try {
    const paramId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const formulation = await prisma.formulation.findUnique({
      where: { id: parseInt(paramId || '0') },
      include: {
        batches: {
          include: {
            collector: { select: { name: true, email: true } },
            certificates: { include: { lab: { select: { name: true } } } },
            processingEvents: true,
            priceTransfers: {
              include: {
                recipient: { select: { name: true, role: true } },
                sender: { select: { name: true, role: true } }
              }
            },
            sourceBatches: { include: { collector: { select: { name: true } } } }
          }
        }
      }
    });
    if (!formulation) return res.status(404).json({ error: 'Formulation not found' });

    // Fetch blockchain records
    const formulationRecord = await prisma.blockchainRecord.findFirst({
      where: { entityType: 'Formulation', entityId: formulation.id }
    });

    const batchIds = formulation.batches.map(b => b.id);
    const batchRecords = await prisma.blockchainRecord.findMany({
      where: { entityType: 'HerbBatch', entityId: { in: batchIds } }
    });

    const recordMap = new Map(batchRecords.map(r => [r.entityId, r.txHash]));

    const responseData = {
      ...formulation,
      txHash: formulationRecord?.txHash || null,
      batches: formulation.batches.map(b => ({
        ...b,
        txHash: recordMap.get(b.id) || null
      }))
    };

    return res.status(200).json(responseData);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch chain of custody' });
  }
});

// GET: All formulations
app.get('/api/formulations', async (req: Request, res: Response): Promise<any> => {
  try {
    const formulations = await prisma.formulation.findMany({
      include: { batches: { select: { herbName: true, quantityKg: true } } },
      orderBy: { createdAt: 'desc' }
    });
    return res.status(200).json(formulations);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch formulations' });
  }
});

// GET: Blockchain Record
app.get('/api/blockchain-record/:type/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const paramType = Array.isArray(req.params.type) ? req.params.type[0] : req.params.type;
    const paramId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const record = await prisma.blockchainRecord.findFirst({
      where: { 
        entityType: paramType,
        entityId: parseInt(paramId || '0')
      }
    });
    
    if (!record) return res.status(404).json({ error: 'Blockchain record not found' });
    return res.status(200).json(record);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch blockchain record' });
  }
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

server.on('error', (err) => {
  console.error('EXPRESS SERVER ERROR EVENT:', err);
});
