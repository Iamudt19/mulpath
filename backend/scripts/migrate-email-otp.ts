import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function migrate() {
  console.log('Adding email column to OtpSession table...');
  try {
    await prisma.$executeRawUnsafe(`
      ALTER TABLE "OtpSession" 
      ADD COLUMN IF NOT EXISTS "email" TEXT;
      
      ALTER TABLE "OtpSession"
      ALTER COLUMN "phone" DROP NOT NULL;
    `);
    console.log('✅ Column email added to OtpSession, phone made nullable.');
  } catch (err) {
    console.error('Migration error:', err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

migrate();
