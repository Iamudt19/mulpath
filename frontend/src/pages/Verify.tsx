import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Button } from '../components/Button';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ──────────────────────────────────────
// Types
// ──────────────────────────────────────
interface ChainData {
  id: number;
  name: string;
  finalPriceInr: number;
  fairTradePercentage: number | null;
  qrCodeUrl: string | null;
  txHash: string | null;
  createdAt: string;
  batches: BatchData[];
}

interface BatchData {
  id: number;
  batchId: string;
  herbName: string;
  quantityKg: number;
  originLocation: string;
  latitude: number | null;
  longitude: number | null;
  zoneValidated: boolean;
  aiConfidence?: number | null;
  aiFlagged?: boolean;
  harvestDate: string;
  status: string;
  txHash: string | null;
  collector: { name: string; email?: string };
  certificates: CertData[];
  processingEvents: ProcEvent[];
  priceTransfers: Transfer[];
  sourceBatches: any[];
}

interface CertData {
  id: number;
  certificateHash: string;
  result: string;
  notes: string | null;
  testDate: string;
  lab: { name: string };
}

interface ProcEvent {
  id: number;
  eventType: string;
  notes: string | null;
  createdAt: string;
}

interface Transfer {
  id: number;
  amount: number;
  recipient: { name: string; role: string };
  sender: { name: string; role: string } | null;
}

// ──────────────────────────────────────
// Sub-components
// ──────────────────────────────────────

/** Verified / Shield badge */
/** Verified / Shield badge */
const VerifiedBadge: React.FC<{ passed: boolean }> = ({ passed }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-sm ${
    passed
      ? 'bg-gradient-to-r from-slate-200 via-white to-slate-300 text-black border border-white/20'
      : 'bg-gradient-to-r from-red-600 to-rose-600 text-white'
  }`}>
    {passed ? '🛡️' : '⚠️'}
    <span>{passed ? 'Quality Verified' : 'Quality Not Verified'}</span>
  </div>
);

/** AI Species Verified Badge */
const AICheckedBadge: React.FC<{ passed: boolean }> = ({ passed }) => (
  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${
    passed
      ? 'bg-gradient-to-r from-slate-100 to-slate-300 text-black border border-white/10'
      : 'bg-gradient-to-r from-slate-600 to-slate-800 text-white'
  }`}>
    <span>🤖</span>
    <span>{passed ? 'AI Species Match' : 'Manual Species Review'}</span>
  </div>
);

/** Purity score ring */
const PurityRing: React.FC<{ score: number }> = ({ score }) => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 80 ? '#ffffff' : score >= 50 ? '#94a3b8' : '#7f1d1d';

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#222" strokeWidth="8" />
        <circle
          cx="50" cy="50" r="40" fill="none"
          stroke={color} strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="central"
              className="text-xl font-bold" fill={color} fontSize="22">
          {score}
        </text>
      </svg>
      <p className="text-xs text-slate-400 mt-1 font-medium">Purity Score</p>
    </div>
  );
};

/** Fair-trade progress bar */
const FairTradeBar: React.FC<{ percentage: number }> = ({ percentage }) => {
  const clamped = Math.min(100, Math.max(0, percentage));
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <h4 className="text-sm font-semibold text-slate-300">Fair-Trade Transparency</h4>
        <span className="text-lg font-bold text-white">{clamped.toFixed(1)}%</span>
      </div>
      <div className="relative w-full h-4 bg-white/5 border border-white/5 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${clamped}%`,
            background: 'linear-gradient(90deg, #94a3b8, #ffffff)',
            transition: 'width 1.2s ease-in-out',
          }}
        />
      </div>
      <p className="text-xs text-slate-400">
        <span className="font-medium text-white">{clamped.toFixed(1)}%</span> of what you paid reached the original farmer.
      </p>
    </div>
  );
};

/**
 * Sustainability / carbon score badge.
 */
const computeSustainabilityScore = (batches: BatchData[], fairTrade: number): number => {
  let score = 70;
  if (batches.every(b => b.zoneValidated)) score += 10;
  const uniqueSpecies = new Set(batches.map(b => b.herbName)).size;
  score += Math.min(uniqueSpecies * 5, 15);
  if (fairTrade >= 30) score += 5;
  return Math.min(score, 100);
};

const SustainabilityBadge: React.FC<{ score: number }> = ({ score }) => {
  const label = score >= 90 ? 'A+' : score >= 80 ? 'A' : score >= 70 ? 'B+' : score >= 60 ? 'B' : 'C';
  const gradient = score >= 80
    ? 'from-slate-200 via-white to-slate-400 text-black'
    : score >= 60
      ? 'from-slate-400 to-slate-600 text-white'
      : 'from-slate-700 to-slate-900 text-slate-300';

  return (
    <div className="flex flex-col items-center">
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg border border-white/10`}>
        <span className="font-extrabold text-xl">{label}</span>
      </div>
      <p className="text-xs text-slate-500 mt-2 font-medium">Eco Score</p>
      <p className="text-[10px] text-slate-400">{score}/100</p>
    </div>
  );
};

/** Timeline stage */
const TimelineStage: React.FC<{
  icon: string;
  title: string;
  subtitle: string;
  date: string;
  isLast?: boolean;
  color?: string;
}> = ({ icon, title, subtitle, date, isLast = false, color = 'bg-emerald-500' }) => (
  <div className="flex gap-4">
    {/* connector line + dot */}
    <div className="flex flex-col items-center">
      <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-base shadow-md`}>
        {icon}
      </div>
      {!isLast && <div className="w-0.5 flex-1 bg-slate-200 my-1" />}
    </div>
    {/* content */}
    <div className={`pb-6 ${isLast ? '' : ''}`}>
      <p className="font-semibold text-slate-800 text-sm leading-tight">{title}</p>
      <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
      <p className="text-[10px] text-slate-400 mt-0.5">{new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
    </div>
  </div>
);

/** Blockchain tx row */
const TxRow: React.FC<{ label: string; txHash: string | null }> = ({ label, txHash }) => {
  const explorerUrl = (import.meta as any).env?.VITE_EXPLORER_URL || 'https://sepolia.etherscan.io/tx/';
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm text-slate-600">{label}</span>
      {txHash ? (
        <a
          href={txHash.startsWith('http') ? txHash : `${explorerUrl}${txHash}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono bg-slate-50 px-2 py-1 rounded text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors max-w-[200px] truncate"
        >
          {txHash.slice(0, 10)}…{txHash.slice(-8)}
        </a>
      ) : (
        <span className="text-xs text-slate-400 italic">pending</span>
      )}
    </div>
  );
};

// ──────────────────────────────────────

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

// ──────────────────────────────────────
// Main Page Component
// ──────────────────────────────────────
export const VerifyPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<ChainData | null>(null);
  const [loading, setLoading] = useState(id ? true : false);
  const [error, setError] = useState<string | null>(null);
  const [formulationsList, setFormulationsList] = useState<any[]>([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    if (!id) {
      // Fetch all formulations for the list
      fetch(`${API_BASE}/api/formulations`)
        .then(res => res.json())
        .then(setFormulationsList)
        .catch(console.error);
      return;
    }
    
    setLoading(true);
    setError(null);
    fetch(`${API_BASE}/api/formulations/${id}/chain`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) {
      navigate(`/verify/${searchId.trim()}`);
    }
  };

  // ── No ID specified (Search / Select formulation page) ──
  if (!id) {
    return (
      <div className="max-w-md mx-auto space-y-6 pb-24 animate-fade-in-up">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 border border-white/10 shadow-xl text-center">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">Mūlpath Traceability</p>
          <h1 className="text-2xl font-extrabold leading-tight">Verify Product Authenticity</h1>
          <p className="text-xs text-slate-300 mt-2 max-w-xs mx-auto">
            Scan a QR code or select a registered batch to verify botanical purity, fair-trade payouts, and blockchain records.
          </p>
        </div>

        <div className="glass-card p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-200 text-sm">🔍 Enter Verification Code</h3>
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input 
              type="text" 
              placeholder="e.g. 1" 
              className="input-field" 
              value={searchId}
              onChange={e => setSearchId(e.target.value)}
              required
            />
            <Button type="submit">Verify</Button>
          </form>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-300 text-sm">🌿 Or Select a Registered Formulation</h3>
          {formulationsList.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <p className="empty-state-title">No formulations found</p>
              <p className="empty-state-subtitle">Create a formulation in the Manufacturer Portal first.</p>
            </div>
          ) : (
            formulationsList.map((f) => (
              <button 
                key={f.id} 
                onClick={() => navigate(`/verify/${f.id}`)}
                className="w-full text-left glass-card p-4 flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors">{f.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">ID: #{f.id} • Price: ₹{f.finalPriceInr}</p>
                </div>
                <span className="text-slate-400 group-hover:translate-x-1 transition-transform">➡️</span>
              </button>
            ))
          )}
        </div>
      </div>
    );
  }

  // ── Loading / Error states ──
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="spinner" />
          <p className="text-slate-500 text-sm">Loading product data…</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] animate-fade-in-up">
        <div className="text-center space-y-4">
          <div className="text-5xl">🔍</div>
          <h2 className="text-xl font-bold text-slate-800">Product Not Found</h2>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">
            We couldn't find a product with this verification code. The QR code may be invalid or the product hasn't been registered yet.
          </p>
          <Button onClick={() => navigate('/verify')} variant="secondary">Go Back</Button>
        </div>
      </div>
    );
  }

  // ── Derived data ──
  const allCerts = data.batches.flatMap(b => b.certificates);
  const passed = allCerts.length > 0 && allCerts.every(c => c.result === 'PASSED');

  // Extract purity score from test notes (e.g. "Purity: 92" or just use a default)
  let purityScore = 0;
  if (allCerts.length > 0) {
    const noteWithPurity = allCerts.find(c => c.notes && /purity/i.test(c.notes));
    if (noteWithPurity?.notes) {
      const match = noteWithPurity.notes.match(/(\d+)/);
      purityScore = match ? parseInt(match[1]) : (passed ? 95 : 40);
    } else {
      purityScore = passed ? 95 : 40;
    }
  }

  const fairTrade = data.fairTradePercentage ?? 0;
  const sustainabilityScore = computeSustainabilityScore(data.batches, fairTrade);
  
  // AI Check passed if at least one batch has AI check, and none are flagged
  const hasAiChecks = data.batches.some(b => b.aiConfidence !== null && b.aiConfidence !== undefined);
  const aiPassed = hasAiChecks && data.batches.every(b => !b.aiFlagged);

  // Map markers
  const markers = data.batches
    .filter(b => b.latitude && b.longitude)
    .map(b => ({
      id: b.id,
      lat: b.latitude!,
      lng: b.longitude!,
      label: `${b.herbName} — ${b.collector?.name || 'Collector'}`,
    }));

  const mapCenter: [number, number] = markers.length > 0
    ? [markers[0].lat, markers[0].lng]
    : [20.5937, 78.9629]; // India center fallback

  // Build timeline events
  const timelineEvents: { icon: string; title: string; subtitle: string; date: string; color: string }[] = [];

  data.batches.forEach(b => {
    // Generate a mock NFC chip ID based on the batch database ID
    const nfcId = `NFC-SEC-${b.batchId.slice(-4)}-${1000 + b.id}`;
    
    // Check AI Species check details
    const aiText = b.aiConfidence !== null && b.aiConfidence !== undefined
      ? ` · 🤖 AI ViT Match: ${b.aiConfidence}% (${b.aiFlagged ? '⚠️ Manual Review Required' : '✅ Verified Species'})`
      : '';

    timelineEvents.push({
      icon: '🌿',
      title: `Harvested: ${b.herbName}`,
      subtitle: `Collected by ${b.collector?.name || 'Farmer'} · ${b.quantityKg} kg · Zone: ${b.zoneValidated ? 'Organic Approved ✅' : 'Unverified'} · 🏷️ NFC Tag: ${nfcId}${aiText}`,
      date: b.harvestDate,
      color: 'bg-emerald-500',
    });

    b.processingEvents.forEach(pe => {
      timelineEvents.push({
        icon: '⚙️',
        title: `Processed: ${pe.eventType}`,
        subtitle: `${pe.notes || 'Batch dryed/ground'} · 🌡️ Temp Controlled: 42°C · 🏷️ NFC Seal Intact`,
        date: pe.createdAt,
        color: 'bg-blue-500',
      });
    });

    b.certificates.forEach(cert => {
      timelineEvents.push({
        icon: '🔬',
        title: `Chemical Analysis: ${cert.result}`,
        subtitle: `HPLC Machine Direct Log: ${cert.notes || 'Purity verified'} · Tested by ${cert.lab?.name || 'Lab'} · 📄 Cert SHA-256 Hash: ${cert.certificateHash.slice(0, 16)}...`,
        date: cert.testDate,
        color: cert.result === 'PASSED' ? 'bg-green-500' : 'bg-red-500',
      });
    });
  });

  timelineEvents.push({
    icon: '📦',
    title: `Manufactured Supplement Lot`,
    subtitle: `Formulation batch: ${data.name} · Finished product registered · Price: ₹${data.finalPriceInr} · 💰 Fair-Trade Share: ${fairTrade.toFixed(2)}%`,
    date: data.createdAt,
    color: 'bg-purple-500',
  });

  // Sort by date
  timelineEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Collect all tx hashes
  const txEntries: { label: string; txHash: string | null }[] = [];
  data.batches.forEach(b => {
    txEntries.push({ label: `Harvest Anchor (${b.batchId.slice(0, 10)}...)`, txHash: b.txHash });
  });
  txEntries.push({ label: `Formulation Anchor (${data.name})`, txHash: data.txHash });

  return (
    <div className="max-w-lg mx-auto pb-16 space-y-6">
      {/* ── Hero with Dynamic Background ── */}
      <div className="glass-card relative overflow-hidden p-6 shadow-xl">
        
        <div className="relative z-10 space-y-3 text-left">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Mūlpath Logo" className="h-6 rounded shadow border border-white/5" />
            <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Mūlpath Verified Product</p>
          </div>
          <h1 className="text-2xl font-extrabold leading-tight">{data.name}</h1>
          <div className="flex items-center gap-3 flex-wrap">
            <VerifiedBadge passed={passed} />
            {hasAiChecks && <AICheckedBadge passed={aiPassed} />}
            <span className="text-xs text-slate-300">
              {data.batches.length} herb{data.batches.length !== 1 ? 's' : ''} · {data.batches.reduce((s, b) => s + b.quantityKg, 0)} kg total
            </span>
          </div>
        </div>
      </div>

      {/* ── Trust Badges Row ── */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass-card p-4 flex flex-col items-center shadow-sm">
          <PurityRing score={purityScore} />
        </div>
        <div className="glass-card p-4 flex flex-col items-center justify-center shadow-sm">
          <SustainabilityBadge score={sustainabilityScore} />
        </div>
        <div className="glass-card p-4 flex flex-col items-center justify-center shadow-sm">
          <div className="text-2xl font-extrabold text-white">₹{data.finalPriceInr}</div>
          <p className="text-xs text-slate-400 mt-1 font-medium">Retail Price</p>
        </div>
      </div>

      {/* ── Fair-Trade Bar ── */}
      <div className="glass-card p-5 shadow-sm">
        <FairTradeBar percentage={fairTrade} />
      </div>

      {/* ── Origin Map ── */}
      {markers.length > 0 && (
        <div className="glass-card overflow-hidden">
          <div className="px-5 py-3 border-b border-white/5 bg-white/5">
            <h3 className="font-semibold text-slate-200 text-sm">📍 Origin Map</h3>
          </div>
          <div className="h-56">
            <MapContainer
              center={mapCenter}
              zoom={markers.length === 1 ? 10 : 5}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap'
              />
              {markers.map(m => (
                <Marker key={m.id} position={[m.lat, m.lng]}>
                  <Popup>{m.label}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      )}

      {/* ── Traceability Timeline ── */}
      <div className="glass-card p-5">
        <h3 className="font-semibold text-slate-200 text-sm mb-4">🕒 Traceability Timeline</h3>
        <div>
          {timelineEvents.map((ev, i) => (
            <TimelineStage
              key={i}
              icon={ev.icon}
              title={ev.title}
              subtitle={ev.subtitle}
              date={ev.date}
              color={ev.color}
              isLast={i === timelineEvents.length - 1}
            />
          ))}
        </div>
      </div>

      {/* ── Test Certificates ── */}
      {allCerts.length > 0 && (
        <div className="glass-card p-5">
          <h3 className="font-semibold text-slate-200 text-sm mb-3">🧪 Lab Certificates</h3>
          <div className="space-y-3">
            {allCerts.map(cert => (
              <div key={cert.id} className={`flex items-center justify-between p-3 rounded-lg border ${
                cert.result === 'PASSED' ? 'bg-white/5 border-white/10 text-white' : 'bg-red-950/20 border-red-500/20 text-red-400'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cert.result === 'PASSED' ? '✅' : '❌'}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{cert.result}</p>
                    <p className="text-xs text-slate-400">by {cert.lab?.name || 'Lab'} · {new Date(cert.testDate).toLocaleDateString('en-IN')}</p>
                  </div>
                </div>
                {cert.notes && <span className="text-xs text-slate-400 max-w-[120px] truncate">{cert.notes}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Blockchain Verification ── */}
      <div className="glass-card p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">⛓️</span>
          <h3 className="font-semibold text-slate-200 text-sm">Blockchain Verification</h3>
        </div>
        <p className="text-xs text-slate-400 mb-3">
          Each step has been immutably recorded on the Ethereum Sepolia blockchain. Click a transaction to verify independently.
        </p>
        <div>
          {txEntries.map((entry, i) => (
            <TxRow key={i} label={entry.label} txHash={entry.txHash} />
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="text-center pt-4 pb-8">
        <p className="text-xs text-slate-500">
          Powered by <span className="font-semibold text-white">Mūlpath</span> · Blockchain-backed botanical traceability
        </p>
      </div>
    </div>
  );
};
