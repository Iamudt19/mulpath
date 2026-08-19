import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: process.env.GMAIL_USER?.trim(), 
    pass: (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '') 
  }
});

async function main() {
  console.log(`Testing email dispatch from: ${process.env.GMAIL_USER}...`);
  const info = await transporter.sendMail({
    from: `"Mūlpath Traceability" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: '🌿 749201 is your Mūlpath verification code',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 540px; margin: auto; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 16px; border: 1px solid rgba(16, 185, 129, 0.3);">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #10b981; margin: 0; font-size: 24px;">🌿 Mūlpath</h1>
          <p style="color: #94a3b8; font-size: 13px; margin-top: 4px;">Ayurvedic Botanical Traceability Network</p>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
          <p style="font-size: 14px; color: #cbd5e1; margin-bottom: 12px;">Use the verification code below to authenticate your stakeholder account:</p>
          <div style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #34d399; font-family: monospace; padding: 12px; background: #0f172a; border-radius: 8px; display: inline-block;">
            749201
          </div>
          <p style="font-size: 11px; color: #94a3b8; margin-top: 12px;">Valid for 10 minutes. Never share this code with anyone.</p>
        </div>
        <p style="font-size: 12px; color: #64748b; text-align: center; margin: 0;">Securing transparent medicinal herb supply chains from forest to consumer.</p>
      </div>
    `
  });
  console.log('🎉 EMAIL SENT SUCCESSFULLY TO YOUR INBOX!');
  console.log('Message ID:', info.messageId);
}

main().catch(err => {
  console.error('Email error:', err);
});
