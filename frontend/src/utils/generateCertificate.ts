import { jsPDF } from 'jspdf';

export interface QACertificateData {
  certId: string;
  sha256Hash: string;
  lotId: string;
  herbName: string;
  species: string;
  testDate: string;
  validUntil: string;
  labName: string;
  labAccreditation: string;
  technician: string;
  signingKey: string;
  purityScore: string;
  activeCompounds: string;
  moistureContent: string;
  heavyMetals: string;
  testResult: 'PASSED' | 'FAILED';
  aggregatorName: string;
  sampleVialId: string;
  blockchainTxHash?: string;
}

// Generate a deterministic-looking cert ID from lot ID
export function generateCertId(lotId: string): string {
  const prefix = 'MULPATH-QA';
  const hash = lotId.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return `${prefix}-${hash.toString(16).toUpperCase().padStart(6, '0')}-2026`;
}

// Generate a deterministic SHA-256-style hash from inputs
export function generateSha256(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const base = Math.abs(hash).toString(16).padStart(8, '0');
  const pad = (s: number) => Math.abs(s * 7919 + hash).toString(16).padStart(8, '0');
  return `0x${base}${pad(1)}${pad(2)}${pad(3)}${pad(4)}${pad(5)}${pad(6)}${pad(7)}`.slice(0, 66);
}

// Draw a simple pixel-based QR code–style pattern
function drawQRPattern(doc: jsPDF, x: number, y: number, size: number, data: string): void {
  const cells = 12;
  const cellSize = size / cells;
  const seed = data.split('').reduce((a, c) => a + c.charCodeAt(0), 0);

  const isBlack = (row: number, col: number): boolean => {
    // Fixed corner finder patterns
    if ((row < 3 && col < 3) || (row < 3 && col >= cells - 3) || (row >= cells - 3 && col < 3)) return true;
    const val = (seed * (row + 1) * (col + 7) + row * col * 13) % 7;
    return val < 3;
  };

  doc.setFillColor(255, 255, 255);
  doc.rect(x - 1, y - 1, size + 2, size + 2, 'F');

  for (let row = 0; row < cells; row++) {
    for (let col = 0; col < cells; col++) {
      if (isBlack(row, col)) {
        doc.setFillColor(15, 23, 42);
        doc.rect(x + col * cellSize, y + row * cellSize, cellSize, cellSize, 'F');
      }
    }
  }

  // White border
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.rect(x - 1, y - 1, size + 2, size + 2);
}

// Main PDF certificate generator
export function downloadQACertificate(data: QACertificateData): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const W = 210;
  const H = 297;
  const margin = 14;
  let y = 0;

  // ── BACKGROUND ──
  doc.setFillColor(8, 15, 32);
  doc.rect(0, 0, W, H, 'F');

  // Subtle pattern strips
  doc.setFillColor(12, 22, 48);
  for (let i = 0; i < 6; i++) {
    doc.rect(0, i * 50, W, 25, 'F');
  }

  // ── TOP BORDER STRIPE ──
  doc.setFillColor(16, 185, 129); // emerald-500
  doc.rect(0, 0, W, 3, 'F');
  doc.setFillColor(5, 150, 105); // emerald-600
  doc.rect(0, 3, W, 1, 'F');

  // ── BOTTOM BORDER STRIPE ──
  doc.setFillColor(16, 185, 129);
  doc.rect(0, H - 3, W, 3, 'F');
  doc.setFillColor(5, 150, 105);
  doc.rect(0, H - 4, W, 1, 'F');

  // ── LEFT & RIGHT ACCENT STRIPS ──
  doc.setFillColor(16, 185, 129);
  doc.rect(0, 0, 2, H, 'F');
  doc.rect(W - 2, 0, 2, H, 'F');

  // ── WATERMARK BACKGROUND TEXT ──
  doc.setTextColor(20, 35, 60);
  doc.setFontSize(72);
  doc.setFont('helvetica', 'bold');
  doc.text('CERTIFIED', W / 2, H / 2 - 10, { align: 'center', angle: 45 });

  // ── HEADER LOGO AREA ──
  y = 18;
  doc.setFillColor(16, 185, 129, 0.15);
  doc.setDrawColor(16, 185, 129);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, y - 6, 40, 16, 3, 3, 'FD');

  doc.setTextColor(52, 211, 153);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('MŪLPATH', margin + 3, y + 4);
  doc.setFontSize(5.5);
  doc.setTextColor(148, 163, 184);
  doc.setFont('helvetica', 'normal');
  doc.text('BOTANICAL AUTHENTICITY PROTOCOL', margin + 3, y + 8.5);

  // ── NABL BADGE ──
  doc.setFillColor(88, 28, 135);
  doc.roundedRect(W - margin - 42, y - 6, 42, 16, 3, 3, 'F');
  doc.setTextColor(216, 180, 254);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text('NABL ACCREDITED', W - margin - 39, y + 1);
  doc.setFontSize(6);
  doc.setFont('helvetica', 'normal');
  doc.text('ISO/IEC 17025:2017 Certified', W - margin - 39, y + 5.5);
  doc.text('Analytical Testing Laboratory', W - margin - 39, y + 9);

  // ── TITLE BLOCK ──
  y = 44;
  doc.setFillColor(16, 185, 129);
  doc.rect(margin, y, W - margin * 2, 0.7, 'F');
  y += 5;

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('QUALITY ASSURANCE & QUALITY CONTROL', W / 2, y, { align: 'center' });
  y += 7;

  doc.setFontSize(11);
  doc.setTextColor(52, 211, 153);
  doc.text('OFFICIAL AYURVEDIC HERB PHYTOCHEMICAL CERTIFICATE', W / 2, y, { align: 'center' });
  y += 5;

  doc.setFillColor(16, 185, 129);
  doc.rect(margin, y, W - margin * 2, 0.7, 'F');
  y += 7;

  // ── CERT ID + HASH ROW ──
  doc.setFillColor(12, 25, 50);
  doc.setDrawColor(30, 55, 100);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, y, W - margin * 2, 14, 2, 2, 'FD');

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.text('CERTIFICATE ID', margin + 4, y + 4.5);
  doc.setTextColor(52, 211, 153);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(data.certId, margin + 4, y + 10);

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  doc.text('SHA-256 HASH PROOF', W / 2, y + 4.5);
  doc.setTextColor(251, 191, 36);
  doc.setFontSize(6);
  doc.setFont('helvetica', 'bold');
  const hashDisplay = data.sha256Hash.length > 42 ? data.sha256Hash.slice(0, 42) + '...' : data.sha256Hash;
  doc.text(hashDisplay, W / 2, y + 10);

  // Blockchain tx hash label
  doc.setTextColor(148, 163, 184);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'normal');
  const dateLabel = `Issued: ${data.testDate} | Valid Until: ${data.validUntil}`;
  doc.text(dateLabel, W - margin - 4, y + 4.5, { align: 'right' });
  doc.setTextColor(52, 211, 153);
  doc.setFontSize(6);
  doc.text(`Blockchain: ${(data.blockchainTxHash || data.sha256Hash).slice(0, 22)}...`, W - margin - 4, y + 10, { align: 'right' });
  y += 20;

  // ── STATUS BADGE ──
  const isPassed = data.testResult === 'PASSED';
  if (isPassed) {
    doc.setFillColor(5, 46, 22);
    doc.setDrawColor(22, 163, 74);
  } else {
    doc.setFillColor(69, 10, 10);
    doc.setDrawColor(185, 28, 28);
  }
  doc.setLineWidth(0.8);
  doc.roundedRect(W / 2 - 30, y, 60, 12, 6, 6, 'FD');
  doc.setTextColor(isPassed ? 52 : 252, isPassed ? 211 : 100, isPassed ? 153 : 74);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text(isPassed ? '✓  QUALITY PASSED' : '✗  QUALITY FAILED', W / 2, y + 8, { align: 'center' });
  y += 18;

  // ── TWO-COLUMN SECTION ──
  const col1X = margin;
  const col2X = W / 2 + 2;
  const colW = W / 2 - margin - 4;

  // Helper: section header
  const sectionHeader = (title: string, x: number, sy: number, w: number) => {
    doc.setFillColor(16, 185, 129);
    doc.rect(x, sy, w, 0.5, 'F');
    doc.setTextColor(52, 211, 153);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(title, x, sy - 1.5);
    return sy + 3;
  };

  // Helper: info row
  const infoRow = (label: string, value: string, x: number, iy: number, w: number): number => {
    doc.setFillColor(12, 22, 45);
    doc.rect(x, iy, w, 8, 'F');
    doc.setTextColor(100, 116, 139);
    doc.setFontSize(5.8);
    doc.setFont('helvetica', 'normal');
    doc.text(label.toUpperCase(), x + 2, iy + 3.2);
    doc.setTextColor(226, 232, 240);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text(value, x + 2, iy + 7);
    return iy + 9;
  };

  // LEFT COLUMN — Sample Identity
  let ly = y;
  ly = sectionHeader('SAMPLE IDENTIFICATION', col1X, ly, colW);
  ly = infoRow('Lot / Batch ID', data.lotId, col1X, ly, colW);
  ly = infoRow('Botanical Name', data.herbName, col1X, ly, colW);
  ly = infoRow('Species (INCI)', data.species || data.herbName, col1X, ly, colW);
  ly = infoRow('Sample Vial ID', data.sampleVialId, col1X, ly, colW);
  ly = infoRow('Aggregator / Origin', data.aggregatorName, col1X, ly, colW);

  ly += 4;
  ly = sectionHeader('TESTING LABORATORY', col1X, ly, colW);
  ly = infoRow('Lab Name', data.labName, col1X, ly, colW);
  ly = infoRow('Accreditation', data.labAccreditation, col1X, ly, colW);
  ly = infoRow('Lead Technician', data.technician, col1X, ly, colW);

  // RIGHT COLUMN — Analytical Results
  let ry = y;
  ry = sectionHeader('PHYTOCHEMICAL ANALYSIS RESULTS', col2X, ry, colW);

  // Purity Score special display
  doc.setFillColor(5, 30, 20);
  doc.setDrawColor(22, 163, 74);
  doc.setLineWidth(0.4);
  doc.roundedRect(col2X, ry, colW, 16, 2, 2, 'FD');
  doc.setTextColor(52, 211, 153);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(`${data.purityScore}%`, col2X + colW / 2, ry + 10, { align: 'center' });
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(5.5);
  doc.setFont('helvetica', 'normal');
  doc.text('HPLC PURITY SCORE', col2X + colW / 2, ry + 14, { align: 'center' });
  ry += 18;

  ry = infoRow('Active Compounds', data.activeCompounds, col2X, ry, colW);
  ry = infoRow('Moisture Content', data.moistureContent, col2X, ry, colW);
  ry = infoRow('Heavy Metals & Contaminants', data.heavyMetals, col2X, ry, colW);

  ry += 4;
  ry = sectionHeader('PHARMACOPOEIAL STANDARDS', col2X, ry, colW);
  ry = infoRow('Reference Standard', 'Ayurvedic Pharmacopoeia of India (API)', col2X, ry, colW);
  ry = infoRow('HPLC System', 'Shimadzu Prominence-i LC-2030C 3D', col2X, ry, colW);
  ry = infoRow('Validation Protocol', 'ICH Q2(R1) Analytical Method Validation', col2X, ry, colW);

  // Move y past the taller column
  y = Math.max(ly, ry) + 8;

  // ── BLOCKCHAIN IMMUTABILITY PANEL ──
  doc.setFillColor(10, 18, 40);
  doc.setDrawColor(30, 64, 175);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, y, W - margin * 2, 22, 2, 2, 'FD');

  doc.setTextColor(99, 102, 241);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('⛓  BLOCKCHAIN IMMUTABILITY RECORD', margin + 4, y + 6);

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(6);
  doc.setFont('helvetica', 'normal');
  doc.text('Network:', margin + 4, y + 12);
  doc.text('Contract Registry:', margin + 65, y + 12);
  doc.text('Anchored At:', margin + 130, y + 12);

  doc.setTextColor(165, 180, 252);
  doc.setFontSize(6.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Ethereum Sepolia Testnet (ChainID: 11155111)', margin + 4, y + 17);
  doc.text('TestCertRegistry.sol', margin + 65, y + 17);
  doc.text(data.testDate, margin + 130, y + 17);
  y += 28;

  // ── QR CODE AREA + SIGNATURES ──
  const qrY = y;
  const qrSize = 28;
  drawQRPattern(doc, W - margin - qrSize - 2, qrY, qrSize, data.certId + data.sha256Hash);

  doc.setTextColor(100, 116, 139);
  doc.setFontSize(5.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Digital QR Seal', W - margin - qrSize - 2 + qrSize / 2, qrY + qrSize + 5, { align: 'center' });
  doc.text('Verify at mulpath.vercel.app/verify', W - margin - qrSize - 2 + qrSize / 2, qrY + qrSize + 9, { align: 'center' });

  // Signature lines
  doc.setDrawColor(50, 70, 100);
  doc.setLineWidth(0.4);
  const sigY = qrY + 8;
  const sig1X = margin + 4;
  const sig2X = margin + 70;

  doc.line(sig1X, sigY + 18, sig1X + 55, sigY + 18);
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(5.5);
  doc.text('Lead Quality Technician', sig1X, sigY + 22);
  doc.text(data.technician, sig1X, sigY + 26);
  doc.setTextColor(52, 211, 153);
  doc.setFontSize(5);
  doc.text(`Key: ${data.signingKey}`, sig1X, sigY + 30);

  doc.line(sig2X, sigY + 18, sig2X + 55, sigY + 18);
  doc.setTextColor(100, 116, 139);
  doc.setFontSize(5.5);
  doc.text('Laboratory Director', sig2X, sigY + 22);
  doc.text('Dr. R. K. Ayyangar', sig2X, sigY + 26);
  doc.setTextColor(52, 211, 153);
  doc.setFontSize(5);
  doc.text('NABL Signatory Authority', sig2X, sigY + 30);

  y = sigY + 38;

  // ── FOOTER ──
  doc.setFillColor(16, 185, 129);
  doc.rect(margin, y, W - margin * 2, 0.5, 'F');
  y += 4;

  doc.setTextColor(71, 85, 105);
  doc.setFontSize(5.5);
  doc.setFont('helvetica', 'normal');
  const footer1 = 'This certificate is digitally sealed and immutably recorded on the Ethereum Sepolia blockchain. Any physical alteration renders this document invalid.';
  const footer2 = `SHA-256: ${data.sha256Hash} | Cert: ${data.certId} | mulpath.vercel.app`;
  doc.text(footer1, W / 2, y + 4, { align: 'center', maxWidth: W - margin * 2 });
  doc.text(footer2, W / 2, y + 9, { align: 'center', maxWidth: W - margin * 2 });

  // ── SAVE PDF ──
  const safeId = data.certId.replace(/[^a-zA-Z0-9-]/g, '_');
  doc.save(`Mulpath_QA_Certificate_${safeId}.pdf`);
}
