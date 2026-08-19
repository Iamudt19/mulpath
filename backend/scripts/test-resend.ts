import dotenv from 'dotenv';
dotenv.config();

const RESEND_API_KEY = process.env.RESEND_API_KEY;

async function main() {
  const targetEmail = process.argv[2] || 'iamudt19@gmail.com';
  console.log(`Testing Resend HTTPS dispatch to ${targetEmail}...`);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Mūlpath Traceability <onboarding@resend.dev>',
      to: targetEmail,
      subject: '🌿 649201 is your Mūlpath verification code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 540px; margin: auto; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 16px; border: 1px solid rgba(16, 185, 129, 0.3);">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #10b981; margin: 0; font-size: 24px;">🌿 Mūlpath</h1>
            <p style="color: #94a3b8; font-size: 13px; margin-top: 4px;">Ayurvedic Botanical Traceability Network</p>
          </div>
          <div style="background: #1e293b; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
            <p style="font-size: 14px; color: #cbd5e1; margin-bottom: 12px;">Use the verification code below to authenticate your stakeholder account:</p>
            <div style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #34d399; font-family: monospace; padding: 12px; background: #0f172a; border-radius: 8px; display: inline-block;">
              649201
            </div>
            <p style="font-size: 11px; color: #94a3b8; margin-top: 12px;">Valid for 10 minutes. Never share this code with anyone.</p>
          </div>
          <p style="font-size: 12px; color: #64748b; text-align: center; margin: 0;">Securing transparent medicinal herb supply chains from forest to consumer.</p>
        </div>
      `
    })
  });

  const data = await res.json();
  console.log('HTTP Status:', res.status);
  console.log('Resend Response:', data);
  if (res.ok) {
    console.log('🎉 RESEND DELIVERED REAL OTP EMAIL TO INBOX SUCCESSFULLY!');
  } else {
    console.error('❌ Resend API returned an error:', data);
  }
}

main().catch(console.error);
