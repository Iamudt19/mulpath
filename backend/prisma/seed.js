import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    console.log('Seeding database...');
    // 1. Create Users (Demo Collector, Aggregator, Lab, Manufacturer)
    const collector = await prisma.user.upsert({
        where: { email: 'ram.singh@mulpath.demo' },
        update: {},
        create: {
            email: 'ram.singh@mulpath.demo',
            passwordHash: 'dummyhash',
            name: 'Ram Singh (Demo Collector)',
            role: 'COLLECTOR',
            walletAddress: '0xabc123...',
        },
    });
    const aggregator = await prisma.user.upsert({
        where: { email: 'shakti.enterprises@mulpath.demo' },
        update: {},
        create: {
            email: 'shakti.enterprises@mulpath.demo',
            passwordHash: 'dummyhash',
            name: 'Shakti Enterprises (Demo Aggregator)',
            role: 'AGGREGATOR',
        },
    });
    const lab = await prisma.user.upsert({
        where: { email: 'ayush.labs@mulpath.demo' },
        update: {},
        create: {
            email: 'ayush.labs@mulpath.demo',
            passwordHash: 'dummyhash',
            name: 'Ayush Quality Labs (Demo Lab)',
            role: 'LAB',
        },
    });
    const manufacturer = await prisma.user.upsert({
        where: { email: 'vedic.pharma@mulpath.demo' },
        update: {},
        create: {
            email: 'vedic.pharma@mulpath.demo',
            passwordHash: 'dummyhash',
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
            status: 'TESTED', // Since it's fully processed before formulation
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
            notes: 'Purity Score: 92%. Heavy metals below detectable limits. High Withanolide content.',
            herbBatchId: batch.id,
            labId: lab.id,
        }
    });
    // 6. Create Formulation
    const formulation = await prisma.formulation.create({
        data: {
            name: 'Ashwagandha Immunity Booster Tablets (Demo)',
            finalPriceInr: 500, // 500 INR retail price
            fairTradePercentage: 40.0, // 40%
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
    // Total retail price is 500. So farmer should get 200 INR.
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
            amount: 80, // Aggregator cut
            recipientId: aggregator.id,
            senderId: manufacturer.id,
            herbBatchId: batch.id,
        }
    });
    // 8. Blockchain Records for Traceability
    await prisma.blockchainRecord.createMany({
        data: [
            {
                entityType: 'HerbBatch',
                entityId: batch.id,
                txHash: '0x123abc...',
                contractAddress: '0xHarvestRegistry...',
            },
            {
                entityType: 'Formulation',
                entityId: formulation.id,
                txHash: '0x456def...',
                contractAddress: '0xFormulationRegistry...',
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
