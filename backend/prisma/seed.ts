import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Cleaning existing demo data...');
  // Clean up demo entities for idempotent re-runs
  await prisma.blockchainRecord.deleteMany({ where: { txHash: { in: ['0x123abc...', '0x456def...'] } } });
  await prisma.priceTransfer.deleteMany({ where: { amount: { in: [200, 80] } } });
  await prisma.testCertificate.deleteMany({ where: { certificateHash: 'CERT-DEMO-92' } });
  await prisma.processingEvent.deleteMany({ where: { eventType: 'SUN_DRYING' } });
  await prisma.herbBatch.deleteMany({ where: { batchId: 'DEMO-BATCH-001' } });
  await prisma.formulation.deleteMany({ where: { name: 'Immunity Booster Tablets' } });
  await prisma.approvedZone.deleteMany({ where: { species: 'Ashwagandha' } });

  console.log('Seeding database...');

  // 1. Create Users (Demo Collector, Aggregator, Lab, Manufacturer)
  const collector = await prisma.user.upsert({
    where: { email: 'ram.singh@mulpath.demo' },
    update: {},
    create: {
      phone: '9876543210',
      email: 'ram.singh@mulpath.demo',
      name: 'Ram Singh (Demo Collector)',
      role: 'COLLECTOR',
      walletAddress: '0x32BE5d84ceA924F758A6056214c15D01f46b5ea1',
    },
  });

  const aggregator = await prisma.user.upsert({
    where: { email: 'shakti.enterprises@mulpath.demo' },
    update: {},
    create: {
      phone: '9876543211',
      email: 'shakti.enterprises@mulpath.demo',
      name: 'Shakti Enterprises (Demo Aggregator)',
      role: 'AGGREGATOR',
    },
  });

  const lab = await prisma.user.upsert({
    where: { email: 'ayush.labs@mulpath.demo' },
    update: {},
    create: {
      phone: '9876543212',
      email: 'ayush.labs@mulpath.demo',
      name: 'Ayush Quality Labs (Demo Lab)',
      role: 'LAB',
    },
  });

  const manufacturer = await prisma.user.upsert({
    where: { email: 'vedic.pharma@mulpath.demo' },
    update: {},
    create: {
      phone: '9876543213',
      email: 'vedic.pharma@mulpath.demo',
      name: 'Vedic Pharma (Demo Manufacturer)',
      role: 'MANUFACTURER',
    },
  });

  // 2. Create Approved Zone for Ashwagandha (Mock bounding box over MP/Rajasthan)
  const zone = await prisma.approvedZone.create({
    data: {
      species: 'Ashwagandha',
      geoJsonPolygon: JSON.stringify({
        type: "Polygon",
        coordinates: [[[70.0, 20.0], [78.0, 20.0], [78.0, 28.0], [70.0, 28.0], [70.0, 20.0]]]
      })
    }
  });

  // 3. Create Herb Batch (Simulate the full lifecycle)
  const batch = await prisma.herbBatch.upsert({
    where: { batchId: 'DEMO-BATCH-001' },
    update: {},
    create: {
      batchId: 'DEMO-BATCH-001',
      herbName: 'Ashwagandha',
      quantityKg: 100,
      originLocation: 'Neemuch, Madhya Pradesh',
      latitude: 24.465,
      longitude: 74.869,
      zoneValidated: true,
      aiConfidence: 96,
      aiFlagged: false,
      harvestDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
      status: 'TESTED',
      collectorId: collector.id,
      notes: 'Premium root quality. Harvested early morning.',
      photoUrl: 'https://images.unsplash.com/photo-1621508654686-809f23efdabc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  });

  // 4. Create Processing Events
  await prisma.processingEvent.create({
    data: {
      eventType: 'SUN_DRYING',
      notes: 'Dried for 3 days under controlled shade netting.',
      batchId: batch.id,
    }
  });

  // 5. Create Test Certificate
  await prisma.testCertificate.create({
    data: {
      certificateHash: 'CERT-DEMO-92',
      testDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      result: 'PASSED',
      notes: 'Purity Score: 92%. Heavy metals below detectable limits. High Withanolide content (verified premium Ashwagandha extract).',
      herbBatchId: batch.id,
      labId: lab.id,
    }
  });

  // 6. Create Formulation
  const formulation = await prisma.formulation.create({
    data: {
      name: 'Immunity Booster Tablets',
      finalPriceInr: 500, // 500 INR retail price
      fairTradePercentage: 40.0, // 40% Fair Trade Share to Farmer
      qrCodeUrl: '/demo-qr.png',
    }
  });

  // Update Batch to be linked to formulation
  await prisma.herbBatch.update({
    where: { id: batch.id },
    data: {
      formulationId: formulation.id,
      status: 'DISTRIBUTED'
    }
  });

  // 7. Price Transfers (To show 40% fair trade)
  // Total retail price is 500. So farmer gets 200 INR (40% Fair Trade Share).
  await prisma.priceTransfer.create({
    data: {
      amount: 200,
      recipientId: collector.id,
      senderId: aggregator.id,
      herbBatchId: batch.id,
    }
  });

  await prisma.priceTransfer.create({
    data: {
      amount: 80, // Aggregator cut for drying and processing
      recipientId: aggregator.id,
      senderId: manufacturer.id,
      herbBatchId: batch.id,
    }
  });

  // 8. Blockchain Records for Traceability (Linked to live Sepolia deployment)
  await prisma.blockchainRecord.createMany({
    data: [
      {
        entityType: 'HerbBatch',
        entityId: batch.id,
        txHash: '0x131d2d3edEbbd0090fAd8DA80e2351A0C028236c',
        contractAddress: '0x131d2d3edEbbd0090fAd8DA80e2351A0C028236c',
      },
      {
        entityType: 'Formulation',
        entityId: formulation.id,
        txHash: '0x0718c9dAdb8094CbC8184e467D4c4186C306585B',
        contractAddress: '0x0718c9dAdb8094CbC8184e467D4c4186C306585B',
      }
    ]
  });

  console.log('Database seeded successfully with end-to-end Demo story!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
