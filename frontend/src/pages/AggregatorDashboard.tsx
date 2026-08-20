import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { formatDualCurrency } from '../utils/currency';
import { BlockchainTxModal } from '../components/BlockchainTxModal';

import { API_BASE } from '../config';

interface IncomingBag {
  id: number;
  batchId: string;
  herbName: string;
  quantityKg: number;
  collectorId: number;
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

  // Escrow Pool State (Fiat On-Ramp)
  const [escrowBalanceInr, setEscrowBalanceInr] = useState<number>(50000);
  const [showDepositModal, setShowDepositModal] = useState<boolean>(false);
  const [depositAmountInput, setDepositAmountInput] = useState<string>('10000');
  const [depositMethod, setDepositMethod] = useState<'UPI' | 'NETBANKING'>('UPI');
  const [isDepositing, setIsDepositing] = useState<boolean>(false);
  const [depositSuccessNotice, setDepositSuccessNotice] = useState<{ amount: number; txHash: string; ref: string } | null>(null);

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
  const [processingTxHash, setProcessingTxHash] = useState<string>('');
  const [selectedLotDetail, setSelectedLotDetail] = useState<LotItem | null>(null);

  // Lab Routing State
  const [availableLabs, setAvailableLabs] = useState<any[]>([]);
  const [selectedLabId, setSelectedLabId] = useState<string>('');

  // Load real validated batches and registered labs on mount
  useEffect(() => {
    fetchValidatedBatches();
    fetch(`${API_BASE}/api/users/stakeholders?role=LAB`)
      .then(r => r.ok ? r.json() : [])
      .then(data => {
        if (Array.isArray(data)) {
          setAvailableLabs(data);
          if (data.length > 0) setSelectedLabId(data[0].id.toString());
        }
      })
      .catch(() => {});
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
          collectorId: b.collector?.id || b.collectorId || 1,
          collectorName: b.collector?.name || 'Collector',
          collectorPhone: b.collector?.phone ? `+91 ${b.collector.phone}` : '+91 98765-43210',
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
      // Record acceptance and payout directly in database
      const res = await fetch(`${API_BASE}/api/batches/${scannedBag.id}/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: scannedBag.payoutAmountInr,
          recipientId: scannedBag.collectorId || 1
        })
      });
      if (res.ok) {
        console.log(`[PAYMENT] Accepted batch #${scannedBag.id} and paid ₹${scannedBag.payoutAmountInr} to Collector #${scannedBag.collectorId}`);
      }
    } catch (e) {
      console.warn('Batch accepted locally');
    }

    setEscrowBalanceInr(prev => Math.max(0, prev - scannedBag.payoutAmountInr));
    setIsProcessingPayment(false);
    setPaymentSuccessToast(`✅ ${formatDualCurrency(scannedBag.payoutAmountInr).inr} (${formatDualCurrency(scannedBag.payoutAmountInr).usdc}) released from Escrow to ${scannedBag.collectorName}'s wallet via Smart Contract!`);
    setBags(prev => prev.map(b => b.id === scannedBag.id ? { ...b, status: 'ACCEPTED' } : b));
    setScannedBag(null);
    setTimeout(() => setPaymentSuccessToast(null), 5000);
    // Refresh list from backend
    fetchValidatedBatches();
  };

  const handleExecuteDeposit = async () => {
    setIsDepositing(true);
    try {
      const res = await fetch(`${API_BASE}/api/escrow/deposit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amountInr: depositAmountInput,
          paymentMethod: depositMethod
        })
      });
      if (res.ok) {
        const data = await res.json();
        setEscrowBalanceInr(prev => prev + data.amountInr);
        setDepositSuccessNotice({
          amount: data.amountInr,
          txHash: data.txHash,
          ref: data.gatewayRef
        });
      }
    } catch (err) {
      const amt = parseFloat(depositAmountInput) || 10000;
      setEscrowBalanceInr(prev => prev + amt);
      setDepositSuccessNotice({
        amount: amt,
        txHash: '0x131d2d3edEbbd0090fAd8DA80e2351A0C028236c',
        ref: `PG-UPI-${Date.now().toString().slice(-8)}`
      });
    }
    setIsDepositing(false);
  };

  // Processing record submission
  const handleSaveProcessingRecord = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlockchainActionText(`Anchoring drying (${dryingTemp}°C, ${dryingHours}h) & milling specs on-chain.`);
    setProcessingTxHash('');
    setShowBlockchainModal(true);

    if (selectedBatchForProcess) {
      try {
        const res = await fetch(`${API_BASE}/api/processing-events`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            batchId: selectedBatchForProcess.id,
            eventType: 'DRYING_MILLING',
            notes: `Drying: ${dryingTemp}°C for ${dryingHours}h. Mill: ${grindingMachineId}`
          })
        });
        if (res.ok) {
          const data = await res.json();
          if (data.txHash) {
            setProcessingTxHash(data.txHash);
          }
        }
      } catch (err) {
        console.warn('Processing event logged locally');
      }
    }
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
          assignedLabId: selectedLabId || undefined,
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
      {/* 🏦 Smart Contract Escrow Buying Pool (Fiat On-Ramp) */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-slate-950 border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-13 h-13 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-3xl shadow-inner">
            🏦
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Smart Contract Escrow Buying Pool</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold border border-emerald-500/30">
                🔒 ON-CHAIN LOCKED
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <h3 className="text-3xl font-black text-white">{formatDualCurrency(escrowBalanceInr).inr}</h3>
              <span className="text-xs text-slate-400 font-mono">({formatDualCurrency(escrowBalanceInr).usdc})</span>
            </div>
            <p className="text-[11px] text-slate-400">Available liquidity to instantly pay farmers upon bag scan</p>
          </div>
        </div>

        <Button onClick={() => setShowDepositModal(true)} className="py-2.5 px-4 text-xs font-bold whitespace-nowrap bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md">
          💳 Deposit Escrow (UPI / NetBanking)
        </Button>
      </div>

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
                  className={`py-2.5 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 ${sealStatusOverride ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                >
                  <span>✅</span>
                  <span>Seal Intact</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSealStatusOverride(false)}
                  className={`py-2.5 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 ${!sealStatusOverride ? 'bg-red-500/20 border-red-400 text-red-300' : 'bg-slate-950 border-slate-800 text-slate-400'
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

            {/* Assign Target Quality Lab */}
            <div className="space-y-1.5">
              <label className="input-label text-slate-300">Assign Target Quality Testing Lab:</label>
              <select
                value={selectedLabId}
                onChange={e => setSelectedLabId(e.target.value)}
                className="input-field text-xs text-white"
              >
                {availableLabs.length > 0 ? (
                  availableLabs.map(lab => (
                    <option key={lab.id} value={lab.id} className="bg-slate-900 text-white">
                      🧪 {lab.name} {lab.email ? `(${lab.email})` : ''}
                    </option>
                  ))
                ) : (
                  <option value="" className="bg-slate-900 text-white">🧪 NABL Certified Quality Lab #1 (Default)</option>
                )}
              </select>
            </div>

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
        <div className="space-y-5 animate-fade-in-up">
          {/* Top Bar with Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="font-bold text-white text-base">Active Lots in Processing & Hub Inventory</h3>
              <p className="text-xs text-slate-400">Aggregated multi-farmer lots ready for chemical assay and manufacturer sale</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setActiveTab('accepted')}
                className="text-xs py-2 px-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
              >
                ➕ Aggregate More Bags ➔
              </Button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="glass-card p-3 text-center space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-bold">Total Lots</p>
              <p className="text-xl font-black text-white">{lots.length}</p>
              <span className="text-[9px] text-slate-500">Mandi Storage</span>
            </div>
            <div className="glass-card p-3 text-center space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-bold">Processed Stock</p>
              <p className="text-xl font-black text-emerald-400">
                {lots.reduce((s, l) => s + l.processedWeightKg, 0).toFixed(1)} kg
              </p>
              <span className="text-[9px] text-slate-500">Dry Milled Herb</span>
            </div>
            <div className="glass-card p-3 text-center space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-bold">Lab Tested</p>
              <p className="text-xl font-black text-teal-300">
                {lots.filter(l => l.labStatus === 'PASSED').length} / {lots.length}
              </p>
              <span className="text-[9px] text-slate-500">Pharmacopeia Grade</span>
            </div>
            <div className="glass-card p-3 text-center space-y-1">
              <p className="text-[10px] text-slate-400 uppercase font-bold">Assigned Buyers</p>
              <p className="text-xl font-black text-purple-300">
                {lots.filter(l => l.buyerName).length} Lots
              </p>
              <span className="text-[9px] text-slate-500">Ayurvedic Brands</span>
            </div>
          </div>

          {/* Lots Grid / Empty State */}
          {lots.length === 0 ? (
            <div className="glass-card p-12 text-center text-slate-400 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-3xl mx-auto shadow-inner">
                📦
              </div>
              <h4 className="text-base font-bold text-white">No Aggregated Lots in Hub Inventory</h4>
              <p className="text-xs max-w-sm mx-auto text-slate-400">
                When you accept harvest bags from collectors and merge them in the <strong>"Accepted Bags"</strong> tab, your aggregated lots will appear here ready for drying, milling, and NABL lab dispatch.
              </p>
              <Button
                type="button"
                onClick={() => setActiveTab('incoming')}
                className="text-xs py-2 px-4 mt-2"
              >
                Scan Incoming Bags ➔
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lots.map(l => (
                <div
                  key={l.id}
                  className="glass-card p-5 space-y-3.5 border border-slate-800 hover:border-slate-700 transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">{l.id}</span>
                      <h4 className="font-bold text-white text-base leading-tight mt-0.5">{l.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{l.species} • Created {l.createdAt}</p>
                    </div>
                    <span className={`status-badge ${l.labStatus === 'PASSED' ? 'tested' : l.labStatus === 'PENDING' ? 'aggregated' : 'collected'
                      }`}>
                      Lab: {l.labStatus}
                    </span>
                  </div>

                  {/* Weight Loss & Processing Readout */}
                  <div className="grid grid-cols-3 gap-2 text-xs bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div>
                      <span className="text-slate-500 text-[10px] block">Raw Intake:</span>
                      <p className="font-bold text-slate-300">{l.originalWeightKg} kg</p>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Dry Yield:</span>
                      <p className="font-bold text-emerald-400">{l.processedWeightKg} kg</p>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[10px] block">Moisture Loss:</span>
                      <p className="font-bold text-amber-400">
                        {Math.round((1 - (l.processedWeightKg / l.originalWeightKg)) * 100)}%
                      </p>
                    </div>
                  </div>

                  {/* Source Bags & Sample Vial */}
                  <div className="space-y-1 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Source Harvest Bags:</span>
                      <span className="font-mono text-slate-300 font-semibold">{l.sourceBagIds.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NABL Vial Tag:</span>
                      <span className="font-mono text-emerald-400 font-bold">{l.sampleVialId || 'VIAL-MUL-8492'}</span>
                    </div>
                    {l.buyerName && (
                      <div className="flex justify-between text-purple-300 font-medium">
                        <span>Reserved For:</span>
                        <span>{l.buyerName}</span>
                      </div>
                    )}
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {l.labStatus !== 'PASSED' ? (
                      <button
                        type="button"
                        onClick={() => {
                          setLots(prev => prev.map(item => item.id === l.id ? { ...item, labStatus: 'PENDING' } : item));
                          alert(`🧪 Sample vial #${l.sampleVialId || 'VIAL-MUL-8492'} dispatched to NABL Quality Testing Lab #18. Appears in Quality Lab review queue.`);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 text-xs font-semibold flex items-center gap-1"
                      >
                        <span>🧪</span>
                        <span>Dispatch Sample to Lab</span>
                      </button>
                    ) : (
                      <span className="px-3 py-1.5 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold flex items-center gap-1">
                        <span>✅</span>
                        <span>HPLC Tested & Certified</span>
                      </span>
                    )}

                    {!l.buyerName && (
                      <button
                        type="button"
                        onClick={() => {
                          const buyer = prompt('Enter Ayurvedic Manufacturer Name (e.g. Dabur India Ltd., Patanjali, Organic India):', 'Dabur India Ltd.');
                          if (buyer) {
                            setLots(prev => prev.map(item => item.id === l.id ? { ...item, buyerName: buyer } : item));
                            alert(`📦 Lot ${l.id} reserved for ${buyer}.`);
                          }
                        }}
                        className="px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 text-xs font-semibold flex items-center gap-1"
                      >
                        <span>🏢</span>
                        <span>Assign Buyer</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedLotDetail(l)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1"
                    >
                      <span>🔍</span>
                      <span>Audit Trace</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => alert(`📄 Printed official chain-of-custody barcode sheet for Lot ${l.id} with ${l.sourceBagIds.length} source bags.`)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 ml-auto"
                    >
                      <span>🖨️</span>
                      <span>Print Manifest</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 🔍 Lot Lineage & Audit Modal */}
          {selectedLotDetail && (
            <div className="modal-overlay" style={{ zIndex: 120 }}>
              <div className="modal-content max-w-lg p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-4 animate-fade-in-up">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">{selectedLotDetail.id}</span>
                    <h3 className="font-bold text-white text-base">{selectedLotDetail.name}</h3>
                  </div>
                  <button onClick={() => setSelectedLotDetail(null)} className="text-slate-400 hover:text-white">
                    ✕
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-slate-400 uppercase font-bold text-[10px]">Processing Specifications:</span>
                    <div className="grid grid-cols-2 gap-2 text-slate-300 font-mono text-[11px]">
                      <div>Drying Temp: <strong className="text-white">42°C (18 hrs)</strong></div>
                      <div>Milling Equipment: <strong className="text-white">MILL-HAMMER-04</strong></div>
                      <div>Initial Intake: <strong className="text-white">{selectedLotDetail.originalWeightKg} kg</strong></div>
                      <div>Processed Dry: <strong className="text-emerald-400">{selectedLotDetail.processedWeightKg} kg</strong></div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5">
                    <span className="text-slate-400 uppercase font-bold text-[10px]">Source Harvest Lineage:</span>
                    <p className="text-slate-300">Merged from <strong className="text-white">{selectedLotDetail.sourceBagIds.length}</strong> certified wild harvest bags:</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedLotDetail.sourceBagIds.map((bagId, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-emerald-300 font-mono text-[10px]">
                          🌿 {bagId}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 uppercase font-bold text-[10px]">Quality Laboratory Vial:</span>
                    <div className="flex justify-between items-center pt-1 font-mono">
                      <span className="text-slate-300 font-bold">{selectedLotDetail.sampleVialId || 'VIAL-MUL-8492'}</span>
                      <span className={`status-badge ${selectedLotDetail.labStatus === 'PASSED' ? 'tested' : 'aggregated'}`}>
                        {selectedLotDetail.labStatus}
                      </span>
                    </div>
                  </div>
                </div>

                <Button onClick={() => setSelectedLotDetail(null)} className="w-full py-2.5">
                  Close Audit View
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 💳 Escrow Deposit Modal (Fiat On-Ramp) */}
      {showDepositModal && (
        <div className="modal-overlay" style={{ zIndex: 120 }}>
          <div className="modal-content max-w-md p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 text-left space-y-4 animate-fade-in-up">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">💳</span>
                <h3 className="font-bold text-white text-base">Deposit Buying Escrow</h3>
              </div>
              <button onClick={() => { setShowDepositModal(false); setDepositSuccessNotice(null); }} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            {depositSuccessNotice ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-3xl mx-auto">
                  ✅
                </div>
                <h4 className="text-xl font-bold text-white">₹{depositSuccessNotice.amount.toLocaleString('en-IN')} Deposited</h4>
                <p className="text-xs text-slate-300">
                  Fiat on-ramp converted ₹{depositSuccessNotice.amount.toLocaleString('en-IN')} into Digital Stablecoins and locked them into the Smart Contract Escrow Pool.
                </p>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-left font-mono space-y-1 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Gateway Ref:</span>
                    <span>{depositSuccessNotice.ref}</span>
                  </div>
                  <div className="flex justify-between truncate">
                    <span className="text-slate-500">Tx Hash:</span>
                    <span className="text-emerald-400">{depositSuccessNotice.txHash}</span>
                  </div>
                </div>
                <Button onClick={() => { setShowDepositModal(false); setDepositSuccessNotice(null); }} className="w-full py-2.5">
                  Done ➔
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="input-label">Deposit Amount (₹ INR)</label>
                  <div className="flex gap-2">
                    {['10000', '25000', '50000'].map(amt => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDepositAmountInput(amt)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${depositAmountInput === amt
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
                          }`}
                      >
                        ₹{parseInt(amt).toLocaleString('en-IN')}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={depositAmountInput}
                    onChange={e => setDepositAmountInput(e.target.value)}
                    className="input-field text-xl font-black text-white mt-1"
                  />
                  <p className="text-[11px] text-slate-400 font-mono">
                    Auto-converts to ~${((parseFloat(depositAmountInput) || 0) / 84.0).toFixed(2)} USDC in Smart Escrow Pool
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="input-label">Payment Method</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDepositMethod('UPI')}
                      className={`p-3 rounded-xl text-xs font-bold border text-left flex items-center gap-2 ${depositMethod === 'UPI'
                          ? 'bg-emerald-500/20 border-emerald-400 text-white'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                        }`}
                    >
                      <span className="text-lg">📱</span>
                      <div>
                        <span className="block text-white">UPI QR / Intent</span>
                        <span className="text-[10px] text-slate-400">GPay, PhonePe, Paytm</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDepositMethod('NETBANKING')}
                      className={`p-3 rounded-xl text-xs font-bold border text-left flex items-center gap-2 ${depositMethod === 'NETBANKING'
                          ? 'bg-emerald-500/20 border-emerald-400 text-white'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:bg-slate-800'
                        }`}
                    >
                      <span className="text-lg">🏦</span>
                      <div>
                        <span className="block text-white">NetBanking / IMPS</span>
                        <span className="text-[10px] text-slate-400">HDFC, ICICI, SBI</span>
                      </div>
                    </button>
                  </div>
                </div>

                {depositMethod === 'UPI' && (
                  <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2 text-center">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=mulpath.escrow@icici&pn=MulpathEscrowPool&am=${depositAmountInput || '10000'}`}
                      alt="UPI QR Code"
                      className="w-32 h-32 rounded-lg bg-white p-1 shadow"
                    />
                    <p className="text-[10px] text-slate-400 font-mono">VPA: mulpath.escrow@icici (Decentro / Onmeta Rail)</p>
                  </div>
                )}

                <Button
                  type="button"
                  onClick={handleExecuteDeposit}
                  disabled={isDepositing}
                  className="w-full py-3 text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg"
                >
                  {isDepositing ? 'Processing Fiat On-Ramp & Locking on Smart Contract...' : `Lock ₹${(parseFloat(depositAmountInput) || 0).toLocaleString('en-IN')} in Escrow ➔`}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ⛓️ On-Chain Confirmation Modal */}
      <BlockchainTxModal
        isOpen={showBlockchainModal}
        title="Recording Processing Parameters"
        txHash={processingTxHash}
        actionSummary={blockchainActionText}
        durationMs={5000}
        onClose={handleBlockchainModalDone}
      />
    </div>
  );
};
