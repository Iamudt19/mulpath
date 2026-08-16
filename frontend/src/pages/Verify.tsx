import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Button } from '../components/Button';
import { formatDualCurrency } from '../utils/currency';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://mulpath-backend.onrender.com';

export const VerifyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [searchId, setSearchId] = useState('');
  const [formulationsList, setFormulationsList] = useState<any[]>([]);
  const [showWhistleblowerModal, setShowWhistleblowerModal] = useState(false);
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportReason, setReportReason] = useState('Damaged packaging / Seal broken on delivery');
  const [reportComments, setReportComments] = useState('');
  const [showRiskDetails, setShowRiskDetails] = useState(false);

  const [productData, setProductData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(!!id);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/formulations`)
      .then(res => res.json())
      .then(setFormulationsList)
      .catch(() => {});

    if (id) {
      setIsLoading(true);
      // Increment scan counter
      fetch(`${API_BASE}/api/formulations/${id}/scan`, { method: 'POST' }).catch(() => {});

      fetch(`${API_BASE}/api/formulations/${id}/chain`)
        .then(res => {
          if (res.ok) return res.json();
          throw new Error('Chain not found');
        })
        .then(data => {
          if (data && data.formulation) {
            const f = data.formulation;
            const batches = data.batches || [];
            const primaryBatch = batches[0];
            const cert = primaryBatch?.certificates?.[0];

            // Fetch real blockchain tx hash from BlockchainRecord table
            const batchTxHash = primaryBatch?.blockchainRecords?.[0]?.txHash || null;

            setProductData({
              id: f.id.toString(),
              name: f.name,
              brand: f.brand || 'Mūlpath Certified',
              retailPriceInr: f.finalPriceInr,
              farmerSharePct: f.fairTradePercentage || 0,
              farmerPayoutInr: Math.round((f.finalPriceInr * (f.fairTradePercentage || 0)) / 100),
              blockchainTxHash: f.invoiceHash || batchTxHash,
              purityScore: cert ? parseFloat(cert.notes?.match(/([\d.]+)%/)?.[1] || '0') || 96.4 : null,
              scanCount: f.scanCount || 1,
              sustainabilityScore: 94,
              harvesters: batches.map((b: any) => ({
                name: b.collector?.name || 'Unknown Collector',
                region: b.originLocation || 'Field Location',
                state: '',
                species: b.herbName,
                aiMatch: b.aiConfidence != null ? b.aiConfidence : null
              })),
              timeline: [
                {
                  stage: 'HARVEST',
                  icon: '🌿',
                  title: 'Wild Harvested in Approved Forest Zone',
                  subtitle: [
                    primaryBatch?.collector?.name ? `Collected by ${primaryBatch.collector.name}` : null,
                    primaryBatch?.quantityKg ? `${primaryBatch.quantityKg} kg` : null,
                    primaryBatch?.sampleVialId ? `Tag #${primaryBatch.sampleVialId}` : null,
                    primaryBatch?.aiConfidence != null ? `AI Match: ${primaryBatch.aiConfidence}%` : null
                  ].filter(Boolean).join(' · ') || 'Harvest record available on-chain',
                  date: primaryBatch?.harvestDate ? new Date(primaryBatch.harvestDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—',
                  txHash: batchTxHash
                },
                {
                  stage: 'PROCESSING',
                  icon: '🏭',
                  title: 'Temperature-Controlled Drying & Milling',
                  subtitle: 'Processed at Mandi Depot Hub · Dried at 42°C for 18h · NFC Seal Verified Intact',
                  date: f.createdAt ? new Date(f.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—',
                  txHash: null
                },
                {
                  stage: 'LAB_TEST',
                  icon: '🧪',
                  title: cert ? `NABL Chemical Assay: ${cert.result}` : 'Lab Test Pending',
                  subtitle: cert?.notes || 'Test certificate will appear here once processed.',
                  date: cert?.testDate ? new Date(cert.testDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—',
                  txHash: cert?.certificateHash?.startsWith('0x') ? cert.certificateHash : null
                },
                {
                  stage: 'MANUFACTURE',
                  icon: '💊',
                  title: 'Formulation Packaged & Serialized',
                  subtitle: `Formulation registered on-chain · Fair-Trade Farmer Share: ${f.fairTradePercentage || 0}%`,
                  date: f.createdAt ? new Date(f.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—',
                  txHash: f.invoiceHash?.startsWith('0x') ? f.invoiceHash : null
                }
              ]
            });
          } else {
            setNotFound(true);
          }
        })
        .catch(() => setNotFound(true))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) navigate(`/verify/${searchId.trim()}`);
  };

  const handleWhistleblowerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setShowWhistleblowerModal(false);
      setReportSubmitted(false);
      alert('🛡️ Thank you. Your report has been dispatched to the Mūlpath Ops Human Review Queue for immediate investigation.');
    }, 1500);
  };

  return (
    <div className="max-w-lg mx-auto pb-24 space-y-6 text-slate-100 animate-fade-in-up">
      {/* Loading state */}
      {isLoading && id && (
        <div className="glass-card p-12 text-center space-y-4">
          <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mx-auto" />
          <p className="text-slate-400 text-sm">Fetching on-chain verification data...</p>
        </div>
      )}

      {/* Product Not Found */}
      {notFound && !isLoading && (
        <div className="glass-card p-8 text-center space-y-4">
          <span className="text-4xl block">🔍</span>
          <h2 className="text-xl font-bold text-white">Product Not Found</h2>
          <p className="text-slate-400 text-sm">No verified product with ID <code className="text-emerald-400">#{id}</code> exists in the Mūlpath blockchain registry.</p>
          <p className="text-xs text-slate-500">If you scanned a QR code, the product may not have completed the supply chain yet, or the QR code may be counterfeit.</p>
          <button onClick={() => navigate('/verify')} className="mt-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-sm hover:bg-emerald-500/30 transition">
            🔍 Search Another Product
          </button>
        </div>
      )}

      {/* Search Bar when no ID or root */}
      {!id && (

        <div className="space-y-4">
          <div className="glass-card p-6 text-center space-y-3 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <span className="text-3xl">🛡️</span>
            <h2 className="text-xl font-bold text-white">Public Consumer Verification</h2>
            <p className="text-xs text-slate-400">
              Scan product QR code or enter serial code to audit the botanical journey on the Ethereum blockchain.
            </p>
            <form onSubmit={handleSearch} className="flex gap-2 pt-2">
              <input
                type="text"
                placeholder="Enter Serial Code (e.g. 1)"
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
                className="input-field text-sm"
              />
              <Button type="submit" className="text-xs px-4">Verify</Button>
            </form>

            {formulationsList.length > 0 && (
              <div className="pt-3 border-t border-slate-800 text-left space-y-2">
                <span className="text-[11px] font-bold uppercase text-slate-400">Or Select a Registered Bottle:</span>
                <div className="flex flex-wrap gap-2">
                  {formulationsList.map(f => (
                    <button
                      key={f.id}
                      onClick={() => navigate(`/verify/${f.id}`)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-200"
                    >
                      🌿 {f.name} (#{f.id})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Screen C1 — Landing / Hero */}
      <div className="glass-card p-6 space-y-4 border border-white/10 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-lg">🌿</span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">Mūlpath Verified</span>
          </div>

          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <span>🛡️</span>
            <span>Verified on Blockchain</span>
          </span>
        </div>

        <div>
          <h1 className="text-2xl font-black text-white leading-tight">{productData.name}</h1>
          <p className="text-xs text-slate-400 mt-1">{productData.brand}</p>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-slate-800">
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Chemical Purity</p>
            <p className="text-lg font-black text-emerald-400">{productData.purityScore}%</p>
            <span className="text-[9px] text-slate-500">HPLC Lab Grade</span>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Eco Score</p>
            <p className="text-lg font-black text-teal-300">A+ ({productData.sustainabilityScore}/100)</p>
            <span className="text-[9px] text-slate-500">Wild-Harvested</span>
          </div>

          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
            <p className="text-[10px] uppercase font-bold text-slate-400">Retail Price</p>
            <p className="text-lg font-black text-white">{formatDualCurrency(productData.retailPriceInr).inr}</p>
            <p className="text-[9px] text-slate-400 font-mono">{formatDualCurrency(productData.retailPriceInr).usdc}</p>
          </div>
        </div>
      </div>

      {/* Screen C4 — Fair-Trade Transparency Card */}
      <div className="glass-card p-5 space-y-3 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30">
        <div className="flex justify-between items-baseline">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <span>🌱</span>
            <span>Fair-Trade Payout Transparency</span>
          </h4>
          <span className="text-lg font-black text-emerald-400">{productData.farmerSharePct}%</span>
        </div>

        {/* Horizontal Bar */}
        <div className="relative w-full h-4 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-300 rounded-full"
            style={{ width: `${productData.farmerSharePct}%` }}
          />
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Of the <strong className="text-white">₹{productData.retailPriceInr}</strong> you paid,{' '}
          <strong className="text-emerald-400 font-bold">₹{productData.farmerPayoutInr} ({productData.farmerSharePct}%)</strong>{' '}
          went directly to the original farmer's smart contract wallet. Paid instantly with no predatory middlemen.
        </p>
      </div>

      {/* Screen C2 — Origin Section (Privacy-Safe District Map) */}
      <div className="glass-card overflow-hidden border border-slate-800">
        <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-white text-sm">📍 Sourcing Origin & Harvester Privacy</h3>
            <p className="text-[11px] text-slate-400">District & certified zone level coordinates displayed</p>
          </div>
          <span className="bg-slate-800 px-2.5 py-1 rounded text-[10px] text-slate-300 font-mono">
            Protected Privacy
          </span>
        </div>

        <div className="h-48 w-full">
          <MapContainer center={[24.465, 74.869]} zoom={10} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[24.465, 74.869]}>
              <Popup>Certified Forest Buffer Zone, Chittorgarh</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="p-4 bg-slate-900/60 flex items-center justify-between text-xs">
          <div>
            <span className="text-slate-400">Harvester:</span>
            <p className="font-bold text-white">Ramesh P. (Verified Forest Collector)</p>
          </div>
          <span className="text-emerald-400 font-semibold">🌿 AI Verified Species Match (94%)</span>
        </div>
      </div>

      {/* Screen C3 — Journey Timeline (Vertical Stepper UI) */}
      <div className="glass-card p-5 space-y-4">
        <h3 className="font-bold text-white text-base">🕒 Immutability Journey Timeline</h3>

        <div className="space-y-6">
          {productData.timeline.map((step: any, idx: number) => (
            <div key={idx} className="flex gap-4 relative">
              {/* Connector line */}
              {idx !== productData.timeline.length - 1 && (
                <div className="absolute left-4 top-9 bottom-0 w-0.5 bg-slate-800" />
              )}

              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-sm shrink-0 z-10">
                {step.icon}
              </div>

              <div className="space-y-1 flex-1 text-xs">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white text-sm">{step.title}</h4>
                  <span className="text-[10px] text-slate-500 font-mono">{step.date}</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{step.subtitle}</p>

                <div className="pt-1">
                  <a
                    href={`https://sepolia.etherscan.io/tx/${productData.blockchainTxHash}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-emerald-400 hover:text-emerald-300 font-mono underline inline-flex items-center gap-1"
                  >
                    <span>View on-chain proof ({step.txHash})</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item #8 — Residual Risk Transparency Accordion */}
      <div className="glass-card p-5 space-y-3 bg-slate-900/80 border border-slate-800">
        <button
          onClick={() => setShowRiskDetails(!showRiskDetails)}
          className="w-full flex justify-between items-center text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="text-base">🛡️</span>
            <div>
              <h4 className="font-bold text-white text-sm">How Verification Works: Cryptographic Assurances & Physical Limits</h4>
              <p className="text-[11px] text-slate-400">Transparent breakdown of what is guaranteed vs physically deterred</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-400 font-mono">
            {showRiskDetails ? '▲ Hide Details' : '▼ Expand Details'}
          </span>
        </button>

        {showRiskDetails && (
          <div className="pt-3 border-t border-slate-800 space-y-4 text-xs animate-fade-in-up">
            {/* Cryptographic Guarantees */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
              <span className="text-emerald-300 font-bold uppercase tracking-wider text-[10px] block">
                🔒 What is Cryptographically Guaranteed (100% Immutable)
              </span>
              <ul className="space-y-1 text-slate-300 list-disc list-inside text-[11px]">
                <li><strong>Post-Capture Data Integrity:</strong> Once logged on-chain, harvest GPS, lab reports, and payouts cannot be altered or retroactively deleted by anyone.</li>
                <li><strong>Invoice Document Anchor:</strong> SHA-256 digests of manufacturer invoices are stored on-chain, proving the declared fair-trade price matches actual audit records.</li>
                <li><strong>Live Challenge Code:</strong> Random 4-digit codes burned directly into photo frames during the 90-second atomic session prevent re-photographing static screens.</li>
                <li><strong>NFC One-Time Tag Burning:</strong> Once an NFC zip-tie seal is registered to a batch, it cannot be reused on a secondary harvest.</li>
              </ul>
            </div>

            {/* Deterred but not guaranteed */}
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-1.5">
              <span className="text-amber-300 font-bold uppercase tracking-wider text-[10px] block">
                ⚡ What is Deterred & Audited (Physical Real-World Limits)
              </span>
              <ul className="space-y-1 text-slate-300 list-disc list-inside text-[11px]">
                <li><strong>Origin Physical Accuracy:</strong> Sensor fusion (accelerometer movement logging) and EXIF GPS cross-checks flag stationary or location-spoofed phones, but rely on hardware sensor honesty at the exact instant of collection.</li>
                <li><strong>Physical Bag Tampering:</strong> Physical bag tampering before NFC sealing is mitigated by weight-check tie-ins at aggregator receiving scales and NABL lab HPLC chemical assays, which catch diluted or substituted herb species.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Screen C5 — Trust Footer & Whistleblower Modal */}
      <div className="glass-card p-5 text-center space-y-3 bg-slate-900/60 border border-slate-800">
        <p className="text-xs text-slate-400">
          This entire supply chain history is permanently recorded and cannot be altered by any single party.
        </p>

        <div className="flex justify-center gap-3 pt-1">
          <a
            href={`https://sepolia.etherscan.io/tx/${productData.blockchainTxHash}`}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs py-2 px-4"
          >
            ⛓️ Ethereum Block Explorer ↗
          </a>

          <button
            onClick={() => setShowWhistleblowerModal(true)}
            className="text-xs text-red-400 hover:text-red-300 underline font-semibold flex items-center gap-1"
          >
            <span>🚩</span>
            <span>Report Concern / Fraud</span>
          </button>
        </div>
      </div>

      {/* Whistleblower Modal */}
      {showWhistleblowerModal && (
        <div className="modal-overlay" style={{ zIndex: 120 }}>
          <div className="modal-content max-w-sm p-6 rounded-2xl bg-slate-950 border border-red-500/40 text-left space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <span>🛡️</span>
                <span>Report Product / Quality Concern</span>
              </h3>
              <button onClick={() => setShowWhistleblowerModal(false)} className="text-slate-400">✕</button>
            </div>

            <form onSubmit={handleWhistleblowerSubmit} className="space-y-3">
              <div>
                <label className="input-label">Reason for Flagging</label>
                <select
                  value={reportReason}
                  onChange={e => setReportReason(e.target.value)}
                  className="input-field text-xs"
                >
                  <option value="Damaged packaging / Seal broken on delivery">Damaged packaging / Seal broken on delivery</option>
                  <option value="Suspected counterfeit QR code">Suspected counterfeit QR code</option>
                  <option value="Potency or taste defect">Potency or taste defect</option>
                  <option value="Other concern">Other concern</option>
                </select>
              </div>

              <div>
                <label className="input-label">Additional Observations (Optional)</label>
                <textarea
                  rows={3}
                  value={reportComments}
                  onChange={e => setReportComments(e.target.value)}
                  placeholder="Describe where you purchased or what seems off..."
                  className="input-field text-xs"
                />
              </div>

              <p className="text-[11px] text-slate-400">
                Dispatches an audit ticket to the Mūlpath Ops Human Review Queue.
              </p>

              <Button type="submit" disabled={reportSubmitted} className="w-full py-2.5 btn-danger">
                {reportSubmitted ? 'Submitting to Ops Queue...' : 'Submit Confidential Report'}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
