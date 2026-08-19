import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const sessions = await prisma.otpSession.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  });
  console.log('--- RECENT OTP SESSIONS ---');
  sessions.forEach(s => {
    console.log(`Email: ${s.email} | OTP: ${s.otpCode} | Created: ${s.createdAt} | Verified: ${s.verified}`);
  });
  await pool.end();
}

main().catch(console.error);
