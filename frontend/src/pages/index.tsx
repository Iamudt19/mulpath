import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { AuthModal, type StakeholderRole } from '../components/AuthModal';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<StakeholderRole>('COLLECTOR');
  const [searchSerial, setSearchSerial] = useState('');

  const handleOpenAuth = (role: StakeholderRole) => {
    setSelectedRole(role);
    setAuthModalOpen(true);
  };

  const handleSearchVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchSerial.trim()) {
      navigate(`/verify/${searchSerial.trim()}`);
    } else {
      navigate('/verify');
    }
  };

  return (
    <div className="space-y-16 pb-24 max-w-7xl mx-auto">

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 1. GRAND CINEMATIC HERO SECTION */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 text-center space-y-8">
        
        {/* Glowing Protocol Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold text-emerald-300 tracking-wider uppercase">
            Live Botanical Provenance on Ethereum Sepolia
          </span>
        </div>

        {/* Hero Title with Metallic Silver & Emerald Gradients */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Restoring Absolute Trust in{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
              Ayurvedic Medicine.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Mūlpath connects wild forest collectors in India to global consumers through GPS geofenced harvesting, botanical AI vision, NABL HPLC testing, and instant fair-trade smart contract payouts.
          </p>
        </div>

        {/* Dual Primary Call-to-Actions & Fast Search Bar */}
        <div className="max-w-xl mx-auto space-y-4 pt-2">
          <form onSubmit={handleSearchVerify} className="flex gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/20 shadow-2xl backdrop-blur-xl">
            <input
              type="text"
              placeholder="Enter Formulation ID or Serial (e.g. 1)"
              value={searchSerial}
              onChange={e => setSearchSerial(e.target.value)}
              className="bg-transparent px-4 py-2.5 text-sm text-white font-mono placeholder:text-slate-500 focus:outline-none flex-1"
            />
            <Button type="submit" className="px-6 py-2.5 text-xs font-bold shadow-md">
              🔍 Verify Bottle ➔
            </Button>
          </form>

          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <Button
              onClick={() => handleOpenAuth('COLLECTOR')}
              className="px-6 py-3 text-xs font-extrabold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              🌿 Enter Stakeholder Workspace ➔
            </Button>
            <Link
              to="/verify"
              className="px-5 py-3 text-xs font-bold rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-md transition"
            >
              📱 Scan Consumer QR Code
            </Link>
          </div>
        </div>

        {/* Live Network Trust Ticker */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 text-left">
          <div className="glass-card p-4 border-white/10 space-y-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tracked Botanical</p>
            <p className="text-2xl font-black text-emerald-400 font-mono">2,840+ kg</p>
            <p className="text-[10px] text-slate-400">Pure Ashwagandha & Herbs</p>
          </div>
          <div className="glass-card p-4 border-white/10 space-y-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Farmer Payouts</p>
            <p className="text-2xl font-black text-white font-mono">₹4,20,000</p>
            <p className="text-[10px] text-emerald-400 font-mono">100% Settled on-chain</p>
          </div>
          <div className="glass-card p-4 border-white/10 space-y-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">AI Vision Accuracy</p>
            <p className="text-2xl font-black text-cyan-300 font-mono">99.8%</p>
            <p className="text-[10px] text-slate-400">PlantNet API Verified</p>
          </div>
          <div className="glass-card p-4 border-white/10 space-y-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Smart Registry</p>
            <p className="text-2xl font-black text-purple-300 font-mono">Sepolia</p>
            <p className="text-[10px] text-slate-400 font-mono">0xa5c3...0295D</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 2. INTERACTIVE STAKEHOLDER PORTAL GATEWAY */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white">Choose Your Workspace Portal</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Select your stakeholder role to log in with your mobile number and access your ERC-4337 smart wallet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Collector */}
          <div className="glass-card p-6 border-white/10 hover:border-emerald-500/50 transition-all group flex flex-col justify-between space-y-4 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/30 group-hover:scale-110 transition-transform">
                🌿
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                Botanical Harvester / Collector
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Log geo-tagged wild harvests in approved forest reserves, run camera species AI validation, and receive instant direct payments.
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2"><span>🛡️</span> <span>GPS Polygon Geofencing</span></li>
                <li className="flex items-center gap-2"><span>📸</span> <span>PlantNet Botanical Vision Match</span></li>
                <li className="flex items-center gap-2"><span>💳</span> <span>Instant Gasless UPI/Smart Payouts</span></li>
              </ul>
            </div>
            <Button
              onClick={() => handleOpenAuth('COLLECTOR')}
              className="w-full text-xs font-bold py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40"
            >
              Enter Collector Portal ➔
            </Button>
          </div>

          {/* Card 2: Aggregator */}
          <div className="glass-card p-6 border-white/10 hover:border-amber-500/50 transition-all group flex flex-col justify-between space-y-4 hover:shadow-2xl hover:shadow-amber-500/10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl border border-amber-500/30 group-hover:scale-110 transition-transform">
                🏭
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                Mandi Aggregator & Depot
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive collector shipments, verify hardware scale weights, manage temperature-controlled drying, and dispatch sample vials.
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2"><span>⚖️</span> <span>Anti-Adulteration Weight Verification</span></li>
                <li className="flex items-center gap-2"><span>🔥</span> <span>Drying & Milling Temperature Logs</span></li>
                <li className="flex items-center gap-2"><span>📦</span> <span>Targeted Lab Vial Handoff</span></li>
              </ul>
            </div>
            <Button
              onClick={() => handleOpenAuth('AGGREGATOR')}
              className="w-full text-xs font-bold py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40"
            >
              Enter Aggregator Portal ➔
            </Button>
          </div>

          {/* Card 3: Testing Lab */}
          <div className="glass-card p-6 border-white/10 hover:border-cyan-500/50 transition-all group flex flex-col justify-between space-y-4 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl border border-cyan-500/30 group-hover:scale-110 transition-transform">
                🧪
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                Quality Testing Laboratory
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive sealed test vials, perform HPLC chemical chromatography assays, and anchor SHA-256 certificates on Sepolia.
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2"><span>🔬</span> <span>Withanolide A & Potency Profiling</span></li>
                <li className="flex items-center gap-2"><span>📄</span> <span>SHA-256 PDF Certificate Anchoring</span></li>
                <li className="flex items-center gap-2"><span>🔒</span> <span>NABL Compliance Verification</span></li>
              </ul>
            </div>
            <Button
              onClick={() => handleOpenAuth('LAB')}
              className="w-full text-xs font-bold py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40"
            >
              Enter Quality Lab Portal ➔
            </Button>
          </div>

          {/* Card 4: Manufacturer */}
          <div className="glass-card p-6 border-white/10 hover:border-purple-500/50 transition-all group flex flex-col justify-between space-y-4 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                💊
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                Brand Manufacturer
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Acquire certified lots, blend multi-herb formulations, enforce fair-trade farmer percentages, and generate high-res QR serials.
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2"><span>🌱</span> <span>Exclusive Raw Lot Blending</span></li>
                <li className="flex items-center gap-2"><span>📊</span> <span>Fair-Trade Revenue Reconciler</span></li>
                <li className="flex items-center gap-2"><span>🏷️</span> <span>High-Res Scannable QR Serialization</span></li>
              </ul>
            </div>
            <Button
              onClick={() => handleOpenAuth('MANUFACTURER')}
              className="w-full text-xs font-bold py-2.5 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40"
            >
              Enter Manufacturer Portal ➔
            </Button>
          </div>

          {/* Card 5: Consumer Public Verification */}
          <div className="glass-card p-6 border-white/10 hover:border-teal-500/50 transition-all group flex flex-col justify-between space-y-4 hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-2xl border border-teal-500/30 group-hover:scale-110 transition-transform">
                🔍
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition">
                Consumer Public Verification
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open to the public. Scan retail QR codes or enter batch numbers to inspect the complete farm-to-bottle journey on-chain.
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2"><span>📜</span> <span>100% On-Chain Seed-to-Shelf Audit</span></li>
                <li className="flex items-center gap-2"><span>👨🏽‍🌾</span> <span>Direct Harvester Identity & Region</span></li>
                <li className="flex items-center gap-2"><span>🛡️</span> <span>Anti-Counterfeit Protection</span></li>
              </ul>
            </div>
            <Link
              to="/verify"
              className="w-full text-xs font-bold py-2.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 rounded-xl text-center block transition"
            >
              Open Public Scanner ➔
            </Link>
          </div>

          {/* Card 6: Admin Ops */}
          <div className="glass-card p-6 border-white/10 hover:border-red-500/50 transition-all group flex flex-col justify-between space-y-4 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center text-2xl border border-red-500/30 group-hover:scale-110 transition-transform">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition">
                Protocol Admin & Operations
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Manage global forest geofence boundaries, resolve anti-fraud review exceptions, and monitor network health.
              </p>
              <ul className="text-[11px] text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2"><span>🚨</span> <span>Human Anti-Fraud Review Queue</span></li>
                <li className="flex items-center gap-2"><span>🗺️</span> <span>Botanical Geofence Polygon Editor</span></li>
                <li className="flex items-center gap-2"><span>⛓️</span> <span>Smart Contract Telemetry</span></li>
              </ul>
            </div>
            <Button
              onClick={() => handleOpenAuth('ADMIN')}
              className="w-full text-xs font-bold py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40"
            >
              Enter Admin Portal ➔
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 3. FOUR-STAGE SEED-TO-SHELF PROVENANCE TIMELINE */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="space-y-8 bg-slate-950/60 p-6 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white">How Mūlpath Secures the Botanical Chain</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Every step is cryptographically attested, eliminating adulteration and middleman exploitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <span className="text-2xl">🌿</span>
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Step 1</p>
            <h4 className="font-bold text-white text-sm">Geofenced Field Harvest</h4>
            <p className="text-xs text-slate-400">
              Harvesters inside approved forest reserves capture photo & GPS coordinates. PlantNet AI verifies botanical identity before bag sealing.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <span className="text-2xl">🏭</span>
            <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Step 2</p>
            <h4 className="font-bold text-white text-sm">Targeted Mandi Intake</h4>
            <p className="text-xs text-slate-400">
              Assigned Aggregator verifies intake scale weight (&lt;5% variance) and logs temperature drying. Instant payment is released to the harvester's wallet.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <span className="text-2xl">🧪</span>
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Step 3</p>
            <h4 className="font-bold text-white text-sm">NABL HPLC Lab Assay</h4>
            <p className="text-xs text-slate-400">
              Designated testing lab assays Withanolide A potency and heavy metal purity. The SHA-256 report hash is permanently anchored on Sepolia.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <span className="text-2xl">💊</span>
            <p className="text-xs font-bold text-purple-400 uppercase tracking-wider">Step 4</p>
            <h4 className="font-bold text-white text-sm">Formulation & QR Serialization</h4>
            <p className="text-xs text-slate-400">
              Manufacturer blends tested lots into retail bottles, encoding fair-trade farmer percentages into scannable public QR codes.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
        <div className="space-y-3 text-xs">
          <Card title="❓ How does targeted stakeholder dispatch protect my data?">
            <p className="text-slate-300 leading-relaxed">
              When a harvester sends goods to Aggregator B, the shipment is tagged with Aggregator B's unique identity. Aggregator C cannot view, accept, or tamper with that shipment. The same recipient-level privacy applies when sample vials are dispatched to specific quality testing laboratories.
            </p>
          </Card>

          <Card title="❓ Do harvesters need cryptocurrency or gas tokens?">
            <p className="text-slate-300 leading-relaxed">
              No. Through ERC-4337 Account Abstraction and paymasters, all transaction gas fees on Ethereum Sepolia are sponsored by the protocol. Harvesters receive direct compensation in Indian Rupees (INR) or stablecoin liquidity with zero crypto knowledge required.
            </p>
          </Card>

          <Card title="❓ How is consumer fraud prevented?">
            <p className="text-slate-300 leading-relaxed">
              Every printed QR code resolves to an immutable on-chain record linked to actual laboratory HPLC assays and harvester geo-polygons. Fake or duplicate QR codes fail cryptographic validation immediately.
            </p>
          </Card>
        </div>
      </section>

      {/* Cross-Cutting Role Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialRole={selectedRole}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(role) => {
          if (role === 'COLLECTOR') navigate('/collector');
          else if (role === 'AGGREGATOR') navigate('/aggregator');
          else if (role === 'LAB') navigate('/lab');
          else if (role === 'MANUFACTURER') navigate('/manufacturer');
          else if (role === 'ADMIN') navigate('/admin');
          else if (role === 'CONSUMER') navigate('/verify');
        }}
      />
    </div>
  );
};

export { CollectorDashboard as Collector } from './CollectorDashboard';
export { AggregatorDashboard as Aggregator } from './AggregatorDashboard';
export { LabDashboard as Lab } from './LabDashboard';
export { ManufacturerDashboard as Manufacturer } from './ManufacturerDashboard';
export { VerifyPage as Verify } from './Verify';
export { AdminDashboard as Admin } from './AdminDashboard';
export { HomePage as Home };
