import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function migrate() {
  console.log('Adding txHash column to Formulation table...');
  try {
    await prisma.$executeRawUnsafe(`
      ALTER TABLE "Formulation" 
      ADD COLUMN IF NOT EXISTS "txHash" TEXT;
    `);
    console.log('✅ Column txHash added to Formulation.');
  } catch (err) {
    console.error('Migration error:', err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

migrate();
