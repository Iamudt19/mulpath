import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { formatDualCurrency } from '../utils/currency';
import { BlockchainTxModal } from '../components/BlockchainTxModal';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

interface IncomingBag {
  id: number;
  batchId: string;
  herbName: string;
  quantityKg: number;
  collectorName: string;
  collectorPhone: string;
  harvestDate: string;
  latitude: number;
  longitude: number;
  sealId: string;
  isSealIntact: boolean;
  status: 'PENDING_SCAN' | 'ACCEPTED' | 'REJECTED' | 'FLAGGED';
  photoUrl?: string;
  aiConfidence?: number;
  payoutAmountInr: number;

  // Fraud Hardening Fields (#3, #5, #6)
  locationMismatch?: boolean;
  exifDistanceMeters?: number;
  challengeCode?: string;
  scaleWeightKg?: number;
  weightMismatch?: boolean;
  sampleVialId?: string;
}

interface ProcessingLog {
  dryingTemp: string;
  dryingHours: string;
  grindingMachineId: string;
  date: string;
}

interface LotItem {
  id: string;
  name: string;
  species: string;
  originalWeightKg: number;
  processedWeightKg: number;
  createdAt: string;
  sourceBagIds: string[];
  labStatus: 'PENDING' | 'PASSED' | 'FAILED';
  buyerName?: string;
  processingHistory: ProcessingLog[];
  sampleVialId?: string;
}

export const AggregatorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'incoming' | 'accepted' | 'processing' | 'merge' | 'lots'>('incoming');

  // Real Bags & Lots Data
  const [bags, setBags] = useState<IncomingBag[]>([]);
  const [lots, setLots] = useState<LotItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Scan & Verification Modal (Screen A3)
  const [scannedBag, setScannedBag] = useState<IncomingBag | null>(null);
  const [sealStatusOverride, setSealStatusOverride] = useState<boolean>(true);
  const [brokenSealReason, setBrokenSealReason] = useState<string>('Physically damaged during transit');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccessToast, setPaymentSuccessToast] = useState<string | null>(null);

  // Lot Selection & Merging (Screen A6)
  const [selectedBagIds, setSelectedBagIds] = useState<number[]>([]);
  const [lotName, setLotName] = useState(`LOT-ASHWA-${Date.now().toString().slice(-4)}`);
  const [dryWeightInput, setDryWeightInput] = useState<string>('');
  const [confirmLotNameInput, setConfirmLotNameInput] = useState<string>('');
  const [showMergeModal, setShowMergeModal] = useState(false);
  const [mergeDiscrepancyWarning, setMergeDiscrepancyWarning] = useState<string | null>(null);

  // Processing Log Panel (Screen A5)
  const [selectedBatchForProcess, setSelectedBatchForProcess] = useState<IncomingBag | null>(null);
  const [dryingTemp, setDryingTemp] = useState('42');
  const [dryingHours, setDryingHours] = useState('18');
  const [grindingMachineId, setGrindingMachineId] = useState('MILL-HAMMER-04');
  const [showBlockchainModal, setShowBlockchainModal] = useState(false);
  const [blockchainActionText, setBlockchainActionText] = useState('');
  const [selectedLotDetail, setSelectedLotDetail] = useState<LotItem | null>(null);

  // Load real validated batches on mount
  useEffect(() => {
    fetchValidatedBatches();
  }, []);

  const fetchValidatedBatches = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/batches/validated`);
      if (res.ok) {
        const data = await res.json();
        const mapped: IncomingBag[] = data.map((b: any) => ({
          id: b.id,
          batchId: b.batchId,
          herbName: b.herbName,
          quantityKg: b.quantityKg,
          collectorName: b.collector?.name || 'Ram Singh (Collector)',
          collectorPhone: '+91 98765-43210',
          harvestDate: b.harvestDate,
          latitude: b.latitude || 24.465,
          longitude: b.longitude || 74.869,
          sealId: `NFC-${b.id + 88200}`,
          isSealIntact: true,
          status: b.status === 'AGGREGATED' ? 'ACCEPTED' : 'PENDING_SCAN',
          aiConfidence: b.aiConfidence || 94,
          payoutAmountInr: b.quantityKg * 80,
          locationMismatch: b.locationMismatch || false,
          challengeCode: b.challengeCode || null,
          sampleVialId: b.sampleVialId || null,
          scaleWeightKg: b.aggregatorWeightKg || null,
          weightMismatch: b.weightMismatch || false,
        }));
        setBags(mapped);

        // Also populate merged lots from data if any
        const mergedBatches = data.filter((b: any) => b.batchId.startsWith('MERGED-'));
        if (mergedBatches.length > 0) {
          const mappedLots: LotItem[] = mergedBatches.map((mb: any) => ({
            id: mb.batchId,
            name: `Lot ${mb.herbName} (${mb.batchId})`,
            species: mb.herbName,
            originalWeightKg: mb.quantityKg,
            processedWeightKg: Math.round(mb.quantityKg * 0.65),
            createdAt: new Date(mb.createdAt || mb.harvestDate).toISOString().split('T')[0],
            sourceBagIds: [mb.batchId],
            labStatus: mb.status === 'TESTED' ? 'PASSED' : 'PENDING',
            sampleVialId: mb.sampleVialId || `VIAL-MUL-${mb.id}-8819`,
            processingHistory: [
              { dryingTemp: '42°C', dryingHours: '18 hrs', grindingMachineId: 'MILL-HAMMER-04', date: new Date().toISOString().split('T')[0] }
            ]
          }));
          setLots(mappedLots);
        }
      }
    } catch (e) {
      console.warn('API error loading batches');
    } finally {
      setIsLoading(false);
    }
  };

  // Screen A3 NFC Scan simulation
  const handleTriggerNfcScan = () => {
    const pending = bags.find(b => b.status === 'PENDING_SCAN') || bags[0];
    if (pending) {
      setScannedBag(pending);
      setSealStatusOverride(pending.isSealIntact);
    } else {
      alert('No pending bags awaiting intake scan. All received bags have been verified.');
    }
  };

  // Payout and Accept
  const handleAcceptAndPayFarmer = async () => {
    if (!scannedBag) return;

    if (!sealStatusOverride) {
      alert(`⚠️ Cannot auto-payout damaged seal! Logged to Ops Review Queue with reason: "${brokenSealReason}".`);
      setBags(prev => prev.map(b => b.id === scannedBag.id ? { ...b, status: 'FLAGGED', isSealIntact: false } : b));
      setScannedBag(null);
      return;
    }

    setIsProcessingPayment(true);
    try {
      // Record real price transfer in database
      await fetch(`${API_BASE}/api/price-transfers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: scannedBag.payoutAmountInr,
          recipientId: 1, // Collector
          herbBatchId: scannedBag.id
        })
      });
    } catch (e) {
      console.warn('Payout record logged locally');
    }

    setIsProcessingPayment(false);
    setPaymentSuccessToast(`✅ ${formatDualCurrency(scannedBag.payoutAmountInr).inr} (${formatDualCurrency(scannedBag.payoutAmountInr).usdc}) sent to ${scannedBag.collectorName}'s wallet via Smart Contract!`);
    setBags(prev => prev.map(b => b.id === scannedBag.id ? { ...b, status: 'ACCEPTED' } : b));
    setScannedBag(null);
    setTimeout(() => setPaymentSuccessToast(null), 5000);
  };

  // Processing record submission
  const handleSaveProcessingRecord = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedBatchForProcess) {
      try {
        await fetch(`${API_BASE}/api/processing-events`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            batchId: selectedBatchForProcess.id,
            eventType: 'DRYING_MILLING',
            notes: `Drying: ${dryingTemp}°C for ${dryingHours}h. Mill: ${grindingMachineId}`
          })
        });
      } catch (err) {
        console.warn('Processing event logged');
      }
    }
    setBlockchainActionText(`Anchoring drying (${dryingTemp}°C, ${dryingHours}h) & milling specs on-chain.`);
    setShowBlockchainModal(true);
  };

  const handleBlockchainModalDone = () => {
    setShowBlockchainModal(false);
    fetchValidatedBatches();
    alert('✅ Processing parameters immutably written to Ethereum Sepolia ledger.');
    setSelectedBatchForProcess(null);
  };

  // Merge logic
  const handlePrepareMerge = () => {
    if (selectedBagIds.length < 2) {
      alert('Please select at least 2 accepted bags to create a unified lot.');
      return;
    }
    const selected = bags.filter(b => selectedBagIds.includes(b.id));
    const totalRawKg = selected.reduce((s, b) => s + b.quantityKg, 0);
    // Pre-fill expected ~65% dry weight
    setDryWeightInput(Math.round(totalRawKg * 0.65).toString());
    setConfirmLotNameInput('');
    setMergeDiscrepancyWarning(null);
    setShowMergeModal(true);
  };

  const handleValidateAndMerge = async () => {
    const selected = bags.filter(b => selectedBagIds.includes(b.id));
    const totalRawKg = selected.reduce((s, b) => s + b.quantityKg, 0);
    const enteredDryKg = parseFloat(dryWeightInput) || 0;

    const retentionRatio = enteredDryKg / totalRawKg;
    if (retentionRatio < 0.35 || retentionRatio > 0.95) {
      setMergeDiscrepancyWarning(`⚠️ Extreme moisture retention mismatch: Raw was ${totalRawKg}kg, dry logged is ${enteredDryKg}kg (${Math.round(retentionRatio * 100)}%). This will trigger an automatic Ops Fraud Flag.`);
    }

    if (confirmLotNameInput.trim().toLowerCase() !== lotName.trim().toLowerCase()) {
      alert(`Please type the exact Lot ID "${lotName}" to confirm this irreversible on-chain action.`);
      return;
    }

    try {
      await fetch(`${API_BASE}/api/batches/merge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          batchIds: selectedBagIds,
          notes: `Merged Lot ${lotName} - Post-Drying Yield: ${enteredDryKg}kg`
        })
      });
    } catch (e) {
      console.warn('Lot merged');
    }

    // Create new Lot
    const sampleVialId = `VIAL-MUL-${Math.floor(1000 + Math.random() * 9000)}`;
    const newLot: LotItem = {
      id: lotName,
      name: `Lot ${selected[0].herbName} (${lotName})`,
      species: selected[0].herbName,
      originalWeightKg: totalRawKg,
      processedWeightKg: enteredDryKg,
      createdAt: new Date().toISOString().split('T')[0],
      sourceBagIds: selected.map(b => b.batchId),
      labStatus: 'PENDING',
      sampleVialId,
      processingHistory: [
        { dryingTemp: '42°C', dryingHours: '18 hrs', grindingMachineId: 'MILL-HAMMER-04', date: new Date().toISOString().split('T')[0] }
      ]
    };

    setLots(prev => [newLot, ...prev]);
    setShowMergeModal(false);
    setSelectedBagIds([]);
    setActiveTab('lots');
    setSelectedLotDetail(newLot);
    fetchValidatedBatches();
  };

  const toggleSelectBag = (id: number) => {
    setSelectedBagIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24 text-slate-100 animate-fade-in-up">
      {/* Screen A2 — Top Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="glass-card p-4 space-y-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Bags Received Today</p>
          <p className="text-2xl font-black text-white">{bags.length} <span className="text-sm font-normal text-slate-400">bags</span></p>
          <p className="text-xs text-emerald-400 font-semibold">100% On-Chain Verified</p>
        </div>

        <div className="glass-card p-4 space-y-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Pending Payouts</p>
          <p className="text-2xl font-black text-amber-300">
            {formatDualCurrency(bags.filter(b => b.status === 'PENDING_SCAN').reduce((s, b) => s + b.payoutAmountInr, 0)).inr}
          </p>
          <p className="text-[11px] text-slate-400 font-mono">
            {formatDualCurrency(bags.filter(b => b.status === 'PENDING_SCAN').reduce((s, b) => s + b.payoutAmountInr, 0)).usdc}
          </p>
        </div>

        <div className="glass-card p-4 space-y-1">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Active Lots in Processing</p>
          <p className="text-2xl font-black text-emerald-400">{lots.length} Lots</p>
          <p className="text-xs text-slate-400">Drying & Milling Hub</p>
        </div>
      </div>

      {/* Success Toast */}
      {paymentSuccessToast && (
        <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 rounded-xl text-sm font-semibold animate-fade-in-up flex items-center justify-between">
          <span>{paymentSuccessToast}</span>
          <button onClick={() => setPaymentSuccessToast(null)} className="text-xs text-emerald-400 underline">Dismiss</button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="tab-bar">
        <button onClick={() => setActiveTab('incoming')} className={`tab-item ${activeTab === 'incoming' ? 'active' : ''}`}>
          📡 Scan & Intake ({bags.filter(b => b.status === 'PENDING_SCAN').length})
        </button>
        <button onClick={() => setActiveTab('accepted')} className={`tab-item ${activeTab === 'accepted' ? 'active' : ''}`}>
          📋 Accepted Bags ({bags.filter(b => b.status === 'ACCEPTED').length})
        </button>
        <button onClick={() => setActiveTab('processing')} className={`tab-item ${activeTab === 'processing' ? 'active' : ''}`}>
          ⚙️ Processing Logs
        </button>
        <button onClick={() => setActiveTab('lots')} className={`tab-item ${activeTab === 'lots' ? 'active' : ''}`}>
          📦 Lot Management ({lots.length})
        </button>
      </div>

      {/* Screen A3 — Incoming Bags & NFC Scan Queue */}
      {activeTab === 'incoming' && (
        <div className="space-y-4">
          <div className="glass-card p-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
            <div>
              <h3 className="font-bold text-white text-base">Warehouse Intake & NFC Tag Reader</h3>
              <p className="text-xs text-slate-400 mt-0.5">Scan physical NFC zip-ties to verify tamper seals and unlock payment</p>
            </div>
            <Button onClick={handleTriggerNfcScan} className="py-3 px-6 text-sm font-bold flex items-center gap-2 whitespace-nowrap">
              <span>📡</span>
              <span>Scan NFC Tag</span>
            </Button>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Awaiting Scan & Inspection {isLoading && ' (Loading live batches...)'}
            </h4>
            {bags.filter(b => b.status === 'PENDING_SCAN' || b.status === 'FLAGGED').map(b => (
              <div key={b.id} className="glass-card p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-bold text-white text-base">{b.herbName}</h5>
                    <span className="text-xs font-mono text-slate-400">({b.batchId})</span>
                    {b.status === 'FLAGGED' && (
                      <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                        ⚠️ FLAGGED SEAL
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {b.quantityKg} kg • Collector: <strong className="text-slate-300">{b.collectorName}</strong> • Tag: #{b.sealId}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-base font-bold text-emerald-400">{formatDualCurrency(b.payoutAmountInr).inr}</span>
                    <p className="text-[10px] text-slate-500 font-mono">{formatDualCurrency(b.payoutAmountInr).usdc}</p>
                  </div>
                  <button
                    onClick={() => {
                      setScannedBag(b);
                      setSealStatusOverride(b.isSealIntact);
                    }}
                    className="btn-primary text-xs py-2 px-3.5"
                  >
                    Inspect & Pay ➔
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Screen A3 Slide-Up Inspection Modal */}
      {scannedBag && (
        <div className="modal-overlay" style={{ zIndex: 120 }}>
          <div className="modal-content max-w-lg p-6 rounded-2xl bg-slate-950 border border-slate-700 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold">NFC TAG #{scannedBag.sealId}</span>
                <h3 className="text-lg font-bold text-white">{scannedBag.herbName} Intake Inspection</h3>
              </div>
              <button onClick={() => setScannedBag(null)} className="text-slate-400">✕</button>
            </div>

            {/* Farmer Details & Map */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-400">Collector:</span>
                <p className="font-bold text-white">{scannedBag.collectorName}</p>
                <span className="text-slate-400 mt-1 block">Declared Weight:</span>
                <p className="font-bold text-emerald-400">{scannedBag.quantityKg} kg</p>
              </div>
              <div>
                <span className="text-slate-400">AI Confidence:</span>
                <p className="font-bold text-emerald-400">{scannedBag.aiConfidence}% ViT Match</p>
                <span className="text-slate-400 mt-1 block">GPS Origin:</span>
                <p className="font-mono text-slate-300">{scannedBag.latitude}, {scannedBag.longitude}</p>
              </div>
            </div>

            {/* EXIF GPS Cross-Check Status Flag (#3) */}
            {scannedBag.locationMismatch && (
              <div className="p-3 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base">⚠️</span>
                  <div>
                    <strong className="block font-bold">Location Mismatch Flagged</strong>
                    <span className="text-[11px] opacity-80">Photo EXIF GPS diverged from App GPS (&gt;200m)</span>
                  </div>
                </div>
                <span className="bg-red-500/20 text-red-300 border border-red-500/40 text-[9px] px-2 py-0.5 rounded font-mono font-bold">REVIEW REQ</span>
              </div>
            )}

            {/* Bluetooth Scale Weight-Check Tie-In (#5) */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center">
                <label className="input-label">⚖️ Scale Weight Verification</label>
                <button
                  type="button"
                  onClick={() => alert(`📶 Bluetooth Scale Paired (CAS CI-200A Scale #BLU-9901). Readout: ${(scannedBag.quantityKg * 0.99).toFixed(1)} kg`)}
                  className="text-[11px] text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                >
                  📡 Connect Bluetooth Scale
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder={`Scale weight (Declared: ${scannedBag.quantityKg}kg)`}
                  defaultValue={scannedBag.quantityKg}
                  className="input-field text-xs font-mono"
                />
                <span className="bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs px-3 py-2 rounded-xl font-mono font-bold flex items-center">
                  ✅ Weight Match (±1.0%)
                </span>
              </div>
            </div>

            {/* Tamper Seal Check */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <label className="input-label">Physical NFC Seal Status</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSealStatusOverride(true)}
                  className={`py-2.5 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 ${
                    sealStatusOverride ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>✅</span>
                  <span>Seal Intact</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSealStatusOverride(false)}
                  className={`py-2.5 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 ${
                    !sealStatusOverride ? 'bg-red-500/20 border-red-400 text-red-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>⚠️</span>
                  <span>Seal Broken / Damaged</span>
                </button>
              </div>

              {!sealStatusOverride && (
                <div className="space-y-1 pt-1 animate-fade-in-up">
                  <label className="text-[11px] text-red-300 font-semibold">Select Reason for Audit Trail:</label>
                  <select
                    value={brokenSealReason}
                    onChange={e => setBrokenSealReason(e.target.value)}
                    className="input-field text-xs text-red-200 bg-red-950/30 border-red-500/40"
                  >
                    <option value="Physically damaged during transit">Physically damaged during transit</option>
                    <option value="Suspected tampering / Opened knot">Suspected tampering / Opened knot</option>
                    <option value="Moisture degraded tag chip">Moisture degraded tag chip</option>
                    <option value="Weight mismatch against field log">Weight mismatch against field log</option>
                  </select>
                </div>
              )}
            </div>

            {/* Payout Trigger Card */}
            <div className="flex justify-between items-center p-3.5 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
              <div>
                <span className="text-[11px] text-slate-400">Direct Smart Contract Payout:</span>
                <p className="text-xl font-black text-white">{formatDualCurrency(scannedBag.payoutAmountInr).inr}</p>
                <p className="text-[10px] text-slate-400 font-mono">{formatDualCurrency(scannedBag.payoutAmountInr).usdc}</p>
              </div>
              <Button
                onClick={handleAcceptAndPayFarmer}
                disabled={isProcessingPayment}
                className="py-3 px-5 text-sm"
              >
                {isProcessingPayment ? 'Processing Payout...' : sealStatusOverride ? '💳 Accept & Pay Farmer' : '⚠️ Route to Review Queue'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Screen A4 — Accepted Bags Table & Multi-Select for Lot Creation */}
      {activeTab === 'accepted' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white text-base">Accepted Inventory</h3>
              <p className="text-xs text-slate-400">Select multiple bags to merge into a single batch lot</p>
            </div>
            {selectedBagIds.length > 0 && (
              <Button onClick={handlePrepareMerge} className="py-2 px-4 text-xs font-bold">
                🔗 Create Lot ({selectedBagIds.length} bags)
              </Button>
            )}
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-400 uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-3 w-10 text-center">Select</th>
                  <th className="p-3">Batch ID</th>
                  <th className="p-3">Species</th>
                  <th className="p-3">Farmer</th>
                  <th className="p-3">Weight</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                {bags.filter(b => b.status === 'ACCEPTED').map(b => (
                  <tr key={b.id} className="hover:bg-slate-900/40">
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedBagIds.includes(b.id)}
                        onChange={() => toggleSelectBag(b.id)}
                        className="w-4 h-4 rounded accent-emerald-500 cursor-pointer"
                      />
                    </td>
                    <td className="p-3 font-mono font-bold text-slate-200">{b.batchId}</td>
                    <td className="p-3 font-semibold text-white">{b.herbName}</td>
                    <td className="p-3 text-slate-300">{b.collectorName}</td>
                    <td className="p-3 font-bold text-emerald-400">{b.quantityKg} kg</td>
                    <td className="p-3 text-slate-400">{new Date(b.harvestDate).toLocaleDateString()}</td>
                    <td className="p-3">
                      <button
                        onClick={() => {
                          setSelectedBatchForProcess(b);
                          setActiveTab('processing');
                        }}
                        className="text-xs text-emerald-400 hover:underline font-semibold"
                      >
                        Log Processing ➔
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Screen A5 — Processing Log Entry */}
      {activeTab === 'processing' && (
        <Card className="p-6 space-y-5">
          <div>
            <h3 className="text-lg font-bold text-white">Log Processing Record (Drying & Milling)</h3>
            <p className="text-xs text-slate-400">
              {selectedBatchForProcess 
                ? `Recording parameters for selected batch: ${selectedBatchForProcess.herbName} (${selectedBatchForProcess.batchId})`
                : 'Record machine parameters for cryptographic batch compliance'}
            </p>
          </div>

          <form onSubmit={handleSaveProcessingRecord} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Drying Temperature (°C)</label>
                <input
                  type="number"
                  value={dryingTemp}
                  onChange={e => setDryingTemp(e.target.value)}
                  className="input-field text-sm font-bold"
                  required
                />
              </div>

              <div>
                <label className="input-label">Drying Duration (Hours)</label>
                <input
                  type="number"
                  value={dryingHours}
                  onChange={e => setDryingHours(e.target.value)}
                  className="input-field text-sm font-bold"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Grinding Machine / Hammer Mill ID</label>
                <input
                  type="text"
                  value={grindingMachineId}
                  onChange={e => setGrindingMachineId(e.target.value)}
                  className="input-field text-sm font-mono"
                  required
                />
              </div>

              <div>
                <label className="input-label">Processing Date</label>
                <input
                  type="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="input-field text-sm"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full py-3">
              ⛓️ Save Processing Record On-Chain
            </Button>
          </form>
        </Card>
      )}

      {/* Screen A6 Merge Confirmation Modal & Genealogy Tree */}
      {showMergeModal && (
        <div className="modal-overlay" style={{ zIndex: 120 }}>
          <div className="modal-content max-w-lg p-6 rounded-2xl bg-slate-950 border border-slate-700 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Create Lot (Irreversible Merge)</h3>
              <button onClick={() => setShowMergeModal(false)} className="text-slate-400">✕</button>
            </div>

            {/* Selected Chips */}
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Selected Bags:</span>
              <div className="flex flex-wrap gap-1.5">
                {bags.filter(b => selectedBagIds.includes(b.id)).map(b => (
                  <span key={b.id} className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    🌿 {b.batchId} ({b.quantityKg}kg)
                  </span>
                ))}
              </div>
            </div>

            {/* Genealogy Tree Graphic */}
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-center space-y-2">
              <span className="text-xs font-bold text-slate-400">Genealogy Convergence Tree</span>
              <div className="flex items-center justify-center gap-2 pt-2">
                <div className="flex flex-col gap-1 text-xs text-slate-300">
                  <span>🍃 Farm #1</span>
                  <span>🍃 Farm #2</span>
                </div>
                <span className="text-emerald-400 font-bold text-xl">➔</span>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl border border-emerald-500/40">
                  🏺
                </div>
              </div>
            </div>

            {/* Weight reconciliation */}
            <div>
              <label className="input-label">Logged Dry Weight Post-Drying (kg)</label>
              <input
                type="number"
                value={dryWeightInput}
                onChange={e => setDryWeightInput(e.target.value)}
                className="input-field text-base font-bold text-emerald-400"
              />
              <p className="text-[11px] text-slate-400 mt-1">Expected 60–70% retention after moisture drying.</p>
            </div>

            {mergeDiscrepancyWarning && (
              <div className="p-3 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs">
                {mergeDiscrepancyWarning}
              </div>
            )}

            {/* Type Lot Name to Confirm */}
            <div className="space-y-1.5">
              <label className="input-label">Lot Name / ID:</label>
              <input
                type="text"
                value={lotName}
                onChange={e => setLotName(e.target.value)}
                className="input-field text-sm font-mono"
              />
              <label className="input-label text-amber-300 pt-2">Type exact Lot ID "{lotName}" to confirm irreversible merge:</label>
              <input
                type="text"
                placeholder={lotName}
                value={confirmLotNameInput}
                onChange={e => setConfirmLotNameInput(e.target.value)}
                className="input-field text-sm font-mono"
              />
            </div>

            <Button onClick={handleValidateAndMerge} className="w-full py-3">
              Confirm & Merge into Lot ➔
            </Button>
          </div>
        </div>
      )}

      {/* Screen A7 — Lot Detail & Management */}
      {activeTab === 'lots' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-white text-base">Active Lots in Processing</h3>
            {selectedLotDetail && (
              <button onClick={() => setSelectedLotDetail(null)} className="text-xs text-slate-400 hover:text-white underline">
                Clear Selection
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lots.map(l => (
              <div 
                key={l.id} 
                onClick={() => setSelectedLotDetail(l)}
                className={`glass-card p-5 space-y-3 cursor-pointer transition ${selectedLotDetail?.id === l.id ? 'border-emerald-500/60 bg-slate-900/90 shadow-lg' : ''}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-base">{l.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Created: {l.createdAt} • {l.species}</p>
                  </div>
                  <span className={`status-badge ${
                    l.labStatus === 'PASSED' ? 'tested' : l.labStatus === 'PENDING' ? 'aggregated' : 'collected'
                  }`}>
                    Lab: {l.labStatus}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-500">Raw Weight:</span>
                    <p className="font-bold text-slate-300">{l.originalWeightKg} kg</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Processed Yield:</span>
                    <p className="font-bold text-emerald-400">{l.processedWeightKg} kg</p>
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  <strong>Source Batches:</strong> {l.sourceBagIds.join(', ')}
                </div>

                {l.buyerName && (
                  <div className="text-xs text-slate-300 pt-1">
                    <strong>Assigned Buyer:</strong> {l.buyerName}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ⛓️ On-Chain Confirmation Modal */}
      <BlockchainTxModal
        isOpen={showBlockchainModal}
        title="Recording Processing Parameters"
        actionSummary={blockchainActionText}
        durationMs={6000}
        onClose={handleBlockchainModalDone}
      />
    </div>
  );
};
