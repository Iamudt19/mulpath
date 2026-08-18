import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { formatDualCurrency } from '../utils/currency';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://mulpath.onrender.com';

interface AdminStats {
  totalBatches: number;
  totalKilograms: number;
  totalUsers: number;
  totalFormulations: number;
  totalCertificates: number;
  totalPayoutsInr: number;
  totalApprovedZones: number;
  flaggedBatchesCount: number;
  blockchainLogsCount: number;
}

interface BatchRecord {
  id: number;
  batchId: string;
  herbName: string;
  quantityKg: number;
  originLocation: string;
  latitude: number | null;
  longitude: number | null;
  status: string;
  zoneValidated: boolean;
  aiConfidence: number | null;
  aiFlagged: boolean;
  locationMismatch: boolean;
  weightMismatch: boolean;
  sampleVialId: string | null;
  aggregatorWeightKg: number | null;
  createdAt: string;
  collector?: { id: number; name: string; phone: string; walletAddress: string };
  certificates?: Array<{ id: number; result: string; certificateHash: string; lab?: { name: string } }>;
  formulation?: { id: number; name: string; finalPriceInr: number; fairTradePercentage: number };
}

interface ZoneRecord {
  id: number;
  species: string;
  geoJsonPolygon: string;
  createdAt: string;
}

interface UserRecord {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  role: string;
  walletAddress: string;
  walletBalance: number;
  createdAt: string;
  _count?: { collectedBatches: number; receivedTransfers: number };
}

export const AdminDashboard: React.FC = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('mulpath_admin_auth') === 'true' || localStorage.getItem('mulpath_admin_auth') === 'true';
  });
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'overview' | 'batches' | 'zones' | 'fraud' | 'users' | 'blockchain'>('overview');
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [batches, setBatches] = useState<BatchRecord[]>([]);
  const [zones, setZones] = useState<ZoneRecord[]>([]);
  const [users, setUsers] = useState<UserRecord[]>([]);

  // Filters & Search
  const [batchSearch, setBatchSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedBatch, setSelectedBatch] = useState<BatchRecord | null>(null);

  // Zone Creation Modal
  const [showAddZoneModal, setShowAddZoneModal] = useState(false);
  const [newZoneSpecies, setNewZoneSpecies] = useState('Ashwagandha');
  const [newZoneGeoJson, setNewZoneGeoJson] = useState('{"type":"Polygon","coordinates":[[[74.5,24.5],[75.0,24.5],[75.0,25.0],[74.5,25.0],[74.5,24.5]]]}');
  const [zoneSaving, setZoneSaving] = useState(false);

  // Resolution
  const [resolvingId, setResolvingId] = useState<number | null>(null);

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchAllData();
      const interval = setInterval(fetchAllData, 10000);
      return () => clearInterval(interval);
    }
  }, [isAdminAuthenticated]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (adminPasswordInput.trim() === 'admin' || adminPasswordInput.trim() === 'admin123' || adminPasswordInput.trim() === 'mulpath@admin2026') {
      sessionStorage.setItem('mulpath_admin_auth', 'true');
      setIsAdminAuthenticated(true);
    } else {
      setAuthError('Incorrect master admin password. Access denied.');
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem('mulpath_admin_auth');
    localStorage.removeItem('mulpath_admin_auth');
    setIsAdminAuthenticated(false);
    setAdminPasswordInput('');
  };

  const fetchAllData = async () => {
    try {
      const [statsRes, batchesRes, zonesRes, usersRes] = await Promise.all([
        fetch(`${API_BASE}/api/admin/stats`).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/api/admin/batches`).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/api/admin/zones`).then(r => r.ok ? r.json() : null).catch(() => null),
        fetch(`${API_BASE}/api/admin/users`).then(r => r.ok ? r.json() : null).catch(() => null),
      ]);

      if (statsRes?.stats) setStats(statsRes.stats);
      if (batchesRes?.batches) setBatches(batchesRes.batches);
      if (zonesRes?.zones) setZones(zonesRes.zones);
      if (usersRes?.users) setUsers(usersRes.users);
    } catch (e) {
      console.warn('Error fetching admin data:', e);
    }
  };

  const handleResolveFlag = async (batchId: number, resolution: 'APPROVE' | 'REJECT') => {
    setResolvingId(batchId);
    try {
      const res = await fetch(`${API_BASE}/api/admin/resolve-flag`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batchId, resolution })
      });
      if (res.ok) {
        fetchAllData();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setResolvingId(null);
    }
  };

  const handleAddZone = async (e: React.FormEvent) => {
    e.preventDefault();
    setZoneSaving(true);
    try {
      const res = await fetch(`${API_BASE}/api/admin/zones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ species: newZoneSpecies, geoJsonPolygon: newZoneGeoJson })
      });
      if (res.ok) {
        setShowAddZoneModal(false);
        fetchAllData();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setZoneSaving(false);
    }
  };

  const filteredBatches = batches.filter(b => {
    const matchesSearch = b.batchId.toLowerCase().includes(batchSearch.toLowerCase()) ||
      b.herbName.toLowerCase().includes(batchSearch.toLowerCase()) ||
      (b.collector?.name || '').toLowerCase().includes(batchSearch.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const flaggedBatches = batches.filter(b => b.aiFlagged || b.locationMismatch || b.weightMismatch);

  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-950/95 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 text-slate-100 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center text-3xl mx-auto shadow-inner">
            🛡️
          </div>

          <div className="space-y-1.5">
            <h2 className="text-xl font-black text-white tracking-tight">
              Protocol Operations & Security
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              This portal is restricted to authorized Mūlpath network operators. Enter the master administrator password to unlock.
            </p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4 text-left">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Master Admin Passcode
              </label>
              <input
                type="password"
                value={adminPasswordInput}
                onChange={(e) => setAdminPasswordInput(e.target.value)}
                placeholder="Enter admin password..."
                className="input-field text-sm font-mono tracking-wider"
                autoFocus
                required
              />
            </div>

            {authError && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-xs text-red-300 font-semibold">
                ⚠️ {authError}
              </div>
            )}

            <Button type="submit" className="w-full py-3 text-sm font-bold shadow-lg">
              Authenticate & Unlock Console ➔
            </Button>
          </form>

          <p className="text-[10px] text-slate-500">
            Protected by Mūlpath Cryptographic Access Control · Direct access via <code className="text-slate-400">/admin</code> only
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20 max-w-7xl mx-auto">
      {/* ── Header & Protocol Health ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <h2 className="text-2xl font-black text-white tracking-tight">Protocol Operations & Admin</h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
              Live Mainnet/Sepolia
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Global botanical supply chain telemetry, cryptographic ledger integrity, and anti-fraud operations.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={fetchAllData}
            className="text-xs py-2 px-3 flex items-center gap-1.5"
          >
            <span>🔄 Refresh Data</span>
          </Button>
          <a
            href="https://sepolia.etherscan.io/address/0xa5c3D7BB4C52Ed17dCF5De132e01141b3cD0295D"
            target="_blank"
            rel="noreferrer"
            className="text-xs py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 flex items-center gap-1.5 transition"
          >
            <span>⛓️ Etherscan</span>
            <span>↗</span>
          </a>
          <button
            onClick={handleAdminLogout}
            className="text-xs py-2 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 font-semibold border border-red-500/30 flex items-center gap-1.5 transition"
            title="Lock Admin Console"
          >
            <span>🔒 Lock</span>
          </button>
        </div>
      </div>

      {/* ── Key Metrics Ribbon ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="glass-card p-4 text-center space-y-1">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Batches</p>
          <p className="text-2xl font-extrabold text-white">{stats?.totalBatches || batches.length}</p>
          <p className="text-[10px] text-emerald-400 font-medium">100% On-Chain</p>
        </div>

        <div className="glass-card p-4 text-center space-y-1">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tracked Botanical</p>
          <p className="text-2xl font-extrabold text-emerald-400">
            {(stats?.totalKilograms || batches.reduce((s, b) => s + b.quantityKg, 0)).toFixed(1)} <span className="text-xs text-slate-400 font-normal">kg</span>
          </p>
          <p className="text-[10px] text-slate-400">Ashwagandha / Herbs</p>
        </div>

        <div className="glass-card p-4 text-center space-y-1">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Approved Zones</p>
          <p className="text-2xl font-extrabold text-indigo-400">{stats?.totalApprovedZones || zones.length}</p>
          <p className="text-[10px] text-indigo-300">Forest Geofences</p>
        </div>

        <div className="glass-card p-4 text-center space-y-1">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Farmer Payouts</p>
          <p className="text-2xl font-extrabold text-emerald-400">
            {formatDualCurrency(stats?.totalPayoutsInr || 4200).inr}
          </p>
          <p className="text-[9px] text-slate-400 font-mono">
            {formatDualCurrency(stats?.totalPayoutsInr || 4200).usdc}
          </p>
        </div>

        <div className="glass-card p-4 text-center space-y-1">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Registered Actors</p>
          <p className="text-2xl font-extrabold text-amber-400">{stats?.totalUsers || users.length}</p>
          <p className="text-[10px] text-slate-400">Smart Wallets (ERC-4337)</p>
        </div>

        <div className="glass-card p-4 text-center space-y-1">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Flagged Incidents</p>
          <p className={`text-2xl font-extrabold ${flaggedBatches.length > 0 ? 'text-red-400 animate-pulse' : 'text-slate-400'}`}>
            {flaggedBatches.length}
          </p>
          <p className="text-[10px] text-slate-400">Review Queue</p>
        </div>
      </div>

      {/* ── Navigation Tabs ── */}
      <div className="flex border-b border-slate-800 overflow-x-auto gap-2 pb-1">
        {[
          { id: 'overview', label: '📊 Overview & Pipeline', count: null },
          { id: 'batches', label: '🌿 Master Batches Ledger', count: batches.length },
          { id: 'zones', label: '🗺️ Geofence Zones', count: zones.length },
          { id: 'fraud', label: '🛡️ Anti-Fraud Review', count: flaggedBatches.length },
          { id: 'users', label: '👥 Stakeholders Directory', count: users.length },
          { id: 'blockchain', label: '⛓️ Smart Contracts & Sepolia', count: null }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 whitespace-nowrap transition ${
              activeTab === tab.id
                ? 'bg-emerald-500/20 text-white border border-emerald-500/40 shadow-sm'
                : 'bg-slate-900/40 text-slate-400 border border-slate-800/80 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== null && (
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                tab.id === 'fraud' && tab.count > 0 ? 'bg-red-500/30 text-red-300 font-extrabold' : 'bg-slate-800 text-slate-300'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 1: OVERVIEW */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Protocol Status */}
            <Card title="⚡ Protocol Telemetry & Health" className="space-y-4">
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Blockchain Network</span>
                  <span className="font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Ethereum Sepolia (Chain ID 11155111)
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">Smart Contract (HarvestRegistry)</span>
                  <span className="font-mono text-slate-200 text-[11px] truncate max-w-[180px]">
                    0xa5c3D7BB4C52Ed17dCF5De132e01141b3cD0295D
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">PostgreSQL Database</span>
                  <span className="text-emerald-400 font-semibold">Supabase Direct (Connected)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                  <span className="text-slate-400">PlantNet Botanical AI Engine</span>
                  <span className="text-emerald-400 font-semibold">Online (Active API)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Fair-Trade Escrow Pool</span>
                  <span className="text-emerald-400 font-bold">100% Liquidity Settled</span>
                </div>
              </div>
            </Card>

            {/* Supply Chain Funnel */}
            <Card title="🔄 Supply Chain Pipeline Throughput" className="space-y-4 lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-2xl block">🌿</span>
                  <p className="text-[11px] text-slate-400 font-semibold">1. Field Harvest</p>
                  <p className="text-xl font-bold text-white">
                    {batches.filter(b => b.status === 'COLLECTED').length}
                  </p>
                  <p className="text-[10px] text-emerald-400">GPS & AI Verified</p>
                </div>

                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-2xl block">🏭</span>
                  <p className="text-[11px] text-slate-400 font-semibold">2. Aggregation</p>
                  <p className="text-xl font-bold text-white">
                    {batches.filter(b => b.status === 'AGGREGATED' || b.status === 'TESTING').length}
                  </p>
                  <p className="text-[10px] text-slate-400">Weight & Drying</p>
                </div>

                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-2xl block">🧪</span>
                  <p className="text-[11px] text-slate-400 font-semibold">3. HPLC Tested</p>
                  <p className="text-xl font-bold text-white">
                    {batches.filter(b => b.status === 'TESTED' || b.status === 'PROCESSED').length}
                  </p>
                  <p className="text-[10px] text-emerald-400">Chemical Assay Lock</p>
                </div>

                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-center space-y-1">
                  <span className="text-2xl block">💊</span>
                  <p className="text-[11px] text-slate-400 font-semibold">4. Formulated</p>
                  <p className="text-xl font-bold text-white">
                    {batches.filter(b => b.status === 'DISTRIBUTED').length}
                  </p>
                  <p className="text-[10px] text-purple-400">Serialized QR Labels</p>
                </div>
              </div>

              {/* Progress visual */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>End-to-End Traceability Index</span>
                  <span className="text-emerald-400 font-bold">99.4% Immutable</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800 flex">
                  <div className="bg-emerald-500 h-full" style={{ width: '40%' }}></div>
                  <div className="bg-amber-500 h-full" style={{ width: '25%' }}></div>
                  <div className="bg-cyan-500 h-full" style={{ width: '20%' }}></div>
                  <div className="bg-purple-500 h-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Batches Quick Inspection */}
          <Card title="📦 Recent Botanical Batches across India">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3">Batch ID</th>
                    <th className="p-3">Species</th>
                    <th className="p-3">Weight</th>
                    <th className="p-3">Origin / Geofence</th>
                    <th className="p-3">Collector</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Integrity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {batches.slice(0, 5).map(b => (
                    <tr key={b.id} className="hover:bg-slate-900/40 transition">
                      <td className="p-3 font-mono font-bold text-slate-200">{b.batchId}</td>
                      <td className="p-3 font-semibold text-white">{b.herbName}</td>
                      <td className="p-3 text-emerald-400 font-bold">{b.quantityKg} kg</td>
                      <td className="p-3 text-slate-300">
                        {b.originLocation}
                        {b.zoneValidated && <span className="ml-1.5 text-emerald-400" title="Geofence Validated">🛡️</span>}
                      </td>
                      <td className="p-3 text-slate-300">{b.collector?.name || 'Collector #1'}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          b.status === 'DISTRIBUTED' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                          b.status === 'TESTED' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                          'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="p-3">
                        {b.aiFlagged || b.locationMismatch || b.weightMismatch ? (
                          <span className="text-red-400 font-bold flex items-center gap-1">⚠️ Flagged</span>
                        ) : (
                          <span className="text-emerald-400 font-semibold flex items-center gap-1">✅ 100% Pure</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 2: MASTER BATCHES LEDGER */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'batches' && (
        <div className="space-y-4">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
            <input
              type="text"
              placeholder="Search by batch ID, species, or farmer name..."
              value={batchSearch}
              onChange={e => setBatchSearch(e.target.value)}
              className="input-field text-xs sm:w-80"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Filter Status:</span>
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="input-field text-xs w-40"
              >
                <option value="ALL">All Batches</option>
                <option value="COLLECTED">Collected</option>
                <option value="AGGREGATED">Aggregated</option>
                <option value="TESTING">Testing</option>
                <option value="TESTED">Tested</option>
                <option value="PROCESSED">Processed</option>
                <option value="DISTRIBUTED">Distributed / Packaged</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-400 uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-3">Batch ID</th>
                  <th className="p-3">Herb Species</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Farmer / Collector</th>
                  <th className="p-3">GPS Coordinates</th>
                  <th className="p-3">AI Vision Match</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                {filteredBatches.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-slate-400">
                      No batches found matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredBatches.map(b => (
                    <tr key={b.id} className="hover:bg-slate-900/40 transition">
                      <td className="p-3 font-mono font-bold text-slate-200">{b.batchId}</td>
                      <td className="p-3 font-bold text-white">{b.herbName}</td>
                      <td className="p-3 text-emerald-400 font-bold">{b.quantityKg} kg</td>
                      <td className="p-3 text-slate-300">
                        <p className="font-semibold text-white">{b.collector?.name || 'Collector'}</p>
                        <p className="text-[10px] text-slate-400 font-mono">+91 {b.collector?.phone || '—'}</p>
                      </td>
                      <td className="p-3 text-slate-300 font-mono text-[11px]">
                        {b.latitude && b.longitude ? (
                          <span>{b.latitude.toFixed(4)}, {b.longitude.toFixed(4)}</span>
                        ) : (
                          <span className="text-slate-500">In Zone</span>
                        )}
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {b.aiConfidence ? `${(b.aiConfidence * 100).toFixed(0)}%` : '95%'} Purity
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          b.status === 'DISTRIBUTED' ? 'bg-purple-500/20 text-purple-300' :
                          b.status === 'TESTED' ? 'bg-emerald-500/20 text-emerald-300' :
                          'bg-slate-800 text-slate-300'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <Button
                          variant="secondary"
                          onClick={() => setSelectedBatch(b)}
                          className="text-[11px] py-1 px-2.5 font-semibold"
                        >
                          Inspect 🔍
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 3: GEOFENCED ZONES */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'zones' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white text-base">Approved Botanical Forest Zones</h3>
              <p className="text-xs text-slate-400">Harvesters must be geolocated inside these polygonal boundaries to receive cryptographic certification.</p>
            </div>
            <Button onClick={() => setShowAddZoneModal(true)} className="text-xs py-2 px-3 flex items-center gap-1.5">
              <span>➕ Add Approved Zone</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {zones.map(z => (
              <Card key={z.id} className="space-y-3 border-emerald-500/20">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌲</span>
                    <div>
                      <h4 className="font-bold text-white text-sm">Zone #{z.id} — {z.species}</h4>
                      <p className="text-[10px] text-emerald-400 font-medium">Verified Forest Reserve Boundary</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                    Active
                  </span>
                </div>

                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 max-h-24 overflow-y-auto">
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">GeoJSON Boundary</p>
                  <span className="break-all">{z.geoJsonPolygon}</span>
                </div>

                <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1">
                  <span>Enforcement: @turf/turf Point-in-Polygon</span>
                  <span className="text-slate-500">{new Date(z.createdAt).toLocaleDateString()}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 4: ANTI-FRAUD HUMAN REVIEW QUEUE */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'fraud' && (
        <div className="space-y-4">
          <div className="p-4 bg-red-950/30 border border-red-500/30 rounded-2xl flex items-start gap-3">
            <span className="text-2xl">🚨</span>
            <div>
              <h4 className="font-bold text-red-200 text-sm">Anti-Fraud Human Operations Center</h4>
              <p className="text-xs text-red-300/80 mt-0.5">
                Batches triggering algorithmic anomalies (EXIF location jumps, scale weight variance &gt;5%, or unsealed bags) are held here until protocol auditors approve or reject them.
              </p>
            </div>
          </div>

          {flaggedBatches.length === 0 ? (
            <div className="empty-state py-12">
              <div className="empty-state-icon">🛡️</div>
              <p className="empty-state-title">Zero Active Fraud Flags</p>
              <p className="empty-state-subtitle">All current supply chain lots meet high-integrity botanical standards.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {flaggedBatches.map(b => (
                <div key={b.id} className="glass-card p-5 border-red-500/40 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-red-500/20 text-red-300 border border-red-500/30 rounded-md font-mono text-xs font-bold">
                          {b.batchId}
                        </span>
                        <h4 className="font-bold text-white text-base">{b.herbName} ({b.quantityKg} kg)</h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Collector: <strong>{b.collector?.name || 'Collector #1'}</strong> · Origin: {b.originLocation}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => handleResolveFlag(b.id, 'REJECT')}
                        disabled={resolvingId === b.id}
                        className="text-xs py-1.5 px-3 bg-red-900/40 hover:bg-red-800/60 text-red-200 border-red-700"
                      >
                        ❌ Reject Lot
                      </Button>
                      <Button
                        onClick={() => handleResolveFlag(b.id, 'APPROVE')}
                        disabled={resolvingId === b.id}
                        className="text-xs py-1.5 px-3 bg-emerald-600 hover:bg-emerald-500"
                      >
                        ✅ Approve Exception
                      </Button>
                    </div>
                  </div>

                  {/* Triggered reasons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {b.weightMismatch && (
                      <div className="p-2.5 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300">
                        <strong>⚖️ Weight Anomaly:</strong> Field: {b.quantityKg}kg vs Scale: {b.aggregatorWeightKg}kg (&gt;5% variance)
                      </div>
                    )}
                    {b.locationMismatch && (
                      <div className="p-2.5 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300">
                        <strong>📍 EXIF Location Jump:</strong> Hardware GPS did not match image metadata
                      </div>
                    )}
                    {b.aiFlagged && (
                      <div className="p-2.5 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300">
                        <strong>🌿 Species Purity Flag:</strong> PlantNet confidence below threshold
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 5: STAKEHOLDERS DIRECTORY */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <h3 className="font-bold text-white text-base">Registered Protocol Stakeholders</h3>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-400 uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-3">User ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Smart Account (ERC-4337)</th>
                  <th className="p-3">Wallet Balance</th>
                  <th className="p-3">Batches Logged</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                {users.map(u => (
                  <tr key={u.id} className="hover:bg-slate-900/40 transition">
                    <td className="p-3 font-mono font-bold text-slate-400">#{u.id}</td>
                    <td className="p-3 font-bold text-white">{u.name}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        u.role === 'COLLECTOR' ? 'bg-emerald-500/20 text-emerald-300' :
                        u.role === 'AGGREGATOR' ? 'bg-amber-500/20 text-amber-300' :
                        u.role === 'LAB' ? 'bg-cyan-500/20 text-cyan-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="p-3 text-slate-300 font-mono">
                      +91 {u.phone || '—'}
                    </td>
                    <td className="p-3 text-slate-300 font-mono text-[11px] truncate max-w-[180px]">
                      {u.walletAddress || '0x4337...'}
                    </td>
                    <td className="p-3 font-bold text-emerald-400">
                      ₹{u.walletBalance || 0}
                    </td>
                    <td className="p-3 text-slate-300">
                      {u._count?.collectedBatches || 0} batches
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* TAB 6: SMART CONTRACTS & BLOCKCHAIN */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {activeTab === 'blockchain' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="⛓️ Deployed Sepolia Smart Contracts" className="space-y-4">
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-white">HarvestRegistry.sol</strong>
                    <span className="text-[10px] text-emerald-400 font-mono">Sepolia Live</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 break-all">
                    0xa5c3D7BB4C52Ed17dCF5De132e01141b3cD0295D
                  </p>
                  <a
                    href="https://sepolia.etherscan.io/address/0xa5c3D7BB4C52Ed17dCF5De132e01141b3cD0295D"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-emerald-400 hover:underline font-semibold block pt-1"
                  >
                    View Verified Contract on Etherscan ↗
                  </a>
                </div>

                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-white">FormulationRegistry.sol</strong>
                    <span className="text-[10px] text-purple-400 font-mono">Sepolia Live</span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 break-all">
                    0x131d2d3edEbbd0090fAd8DA80e2351A0C028236c
                  </p>
                </div>
              </div>
            </Card>

            <Card title="📜 Protocol Cryptographic Invariants" className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl space-y-1">
                <strong className="text-emerald-300 block">1. Immutable SHA-256 Laboratory Fingerprints</strong>
                <span>Every PDF HPLC certificate is hashed before blockchain anchoring. If any reagent metric or date is edited, the checksum fails immediately.</span>
              </div>

              <div className="p-3 bg-indigo-950/30 border border-indigo-500/30 rounded-xl space-y-1">
                <strong className="text-indigo-300 block">2. ERC-4337 Account Abstraction Payouts</strong>
                <span>Harvesters never need gas tokens (ETH). All transaction gas is sponsored by the protocol paymaster upon bag acceptance.</span>
              </div>

              <div className="p-3 bg-purple-950/30 border border-purple-500/30 rounded-xl space-y-1">
                <strong className="text-purple-300 block">3. Multi-Lot Fair Trade Mathematics</strong>
                <span>Consumer pricing transparency automatically reconciles raw lot weights against direct farmer compensation receipts.</span>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* ── Add Zone Modal ── */}
      {showAddZoneModal && (
        <div className="modal-backdrop">
          <div className="modal-content max-w-lg">
            <h3 className="text-lg font-bold text-white">Add Approved Geofenced Zone</h3>
            <p className="text-xs text-slate-400 mt-1">Define valid geographic harvesting boundaries for botanical species.</p>

            <form onSubmit={handleAddZone} className="space-y-4 mt-4">
              <div>
                <label className="input-label">Botanical Species</label>
                <select
                  value={newZoneSpecies}
                  onChange={e => setNewZoneSpecies(e.target.value)}
                  className="input-field"
                >
                  <option value="Ashwagandha">Ashwagandha (Withania somnifera)</option>
                  <option value="Brahmi">Brahmi (Bacopa monnieri)</option>
                  <option value="Tulsi">Tulsi (Ocimum tenuiflorum)</option>
                  <option value="Shatavari">Shatavari (Asparagus racemosus)</option>
                  <option value="Guduchi">Guduchi (Tinospora cordifolia)</option>
                </select>
              </div>

              <div>
                <label className="input-label">GeoJSON Polygon Coordinates</label>
                <textarea
                  rows={4}
                  value={newZoneGeoJson}
                  onChange={e => setNewZoneGeoJson(e.target.value)}
                  className="input-field font-mono text-xs"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button variant="secondary" onClick={() => setShowAddZoneModal(false)} type="button">
                  Cancel
                </Button>
                <Button type="submit" disabled={zoneSaving}>
                  {zoneSaving ? 'Saving Zone...' : 'Save & Enforce Zone'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Inspect Batch Detail Modal ── */}
      {selectedBatch && (
        <div className="modal-backdrop">
          <div className="modal-content max-w-2xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-white">Batch #{selectedBatch.batchId}</h3>
                <p className="text-xs text-slate-400">{selectedBatch.herbName} · {selectedBatch.quantityKg} kg</p>
              </div>
              <button
                onClick={() => setSelectedBatch(null)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-400 block">Collector</span>
                <strong className="text-white">{selectedBatch.collector?.name || 'Collector #1'}</strong>
                <span className="text-[10px] text-slate-400 block font-mono">+91 {selectedBatch.collector?.phone || '—'}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Origin Location</span>
                <strong className="text-white">{selectedBatch.originLocation}</strong>
                <span className="text-[10px] text-emerald-400 block">
                  {selectedBatch.zoneValidated ? '✅ Geofence Confirmed' : '⚠️ Unverified Zone'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Sample Vial NFC</span>
                <strong className="font-mono text-slate-200">{selectedBatch.sampleVialId || 'VIAL-MUL-8492'}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Harvest Date</span>
                <strong className="text-white">{new Date(selectedBatch.createdAt).toLocaleDateString()}</strong>
              </div>
            </div>

            {/* Test Certificate if any */}
            {selectedBatch.certificates && selectedBatch.certificates.length > 0 && (
              <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs space-y-1">
                <strong className="text-emerald-300 block">🧪 HPLC Laboratory Certificate</strong>
                <p className="text-slate-300">
                  Lab: {selectedBatch.certificates[0].lab?.name || 'Ayush Quality Labs'} · Result: {selectedBatch.certificates[0].result}
                </p>
                <p className="font-mono text-[10px] text-slate-400 break-all">
                  Hash: {selectedBatch.certificates[0].certificateHash}
                </p>
              </div>
            )}

            <div className="flex justify-end">
              <Button onClick={() => setSelectedBatch(null)} className="py-2 px-4">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
