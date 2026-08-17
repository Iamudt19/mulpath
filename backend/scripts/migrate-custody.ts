import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function migrate() {
  console.log('Applying safe custody columns migration...');
  try {
    await prisma.$executeRawUnsafe(`
      ALTER TABLE "HerbBatch" 
      ADD COLUMN IF NOT EXISTS "assignedAggregatorId" INTEGER REFERENCES "User"(id),
      ADD COLUMN IF NOT EXISTS "assignedLabId" INTEGER REFERENCES "User"(id),
      ADD COLUMN IF NOT EXISTS "purchasedManufacturerId" INTEGER REFERENCES "User"(id);
    `);
    console.log('✅ Columns added successfully to HerbBatch table.');
  } catch (err) {
    console.error('Migration error:', err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

migrate();
