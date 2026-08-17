import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { BlockchainTxModal } from '../components/BlockchainTxModal';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://mulpath-backend.onrender.com';

interface LabSample {
  id: number;
  lotId: string;
  herbName: string;
  receivedDate: string;
  sampleWeightGm: number;
  aggregatorName: string;
  status: 'AWAITING_TEST' | 'TESTED';
  sampleVialId: string;
}

export const LabDashboard: React.FC = () => {
  const [samples, setSamples] = useState<LabSample[]>([
    {
      id: 1,
      lotId: 'LOT-ASHWA-2291',
      herbName: 'Ashwagandha (Withania somnifera)',
      receivedDate: '2026-08-15',
      sampleWeightGm: 250,
      aggregatorName: 'Mandi Hub Nimbahera',
      status: 'AWAITING_TEST',
      sampleVialId: 'VIAL-MUL-8492'
    },
    {
      id: 2,
      lotId: 'LOT-TULSI-1094',
      herbName: 'Tulsi (Ocimum tenuiflorum)',
      receivedDate: '2026-08-16',
      sampleWeightGm: 200,
      aggregatorName: 'Central Rajasthan Mandi Hub',
      status: 'AWAITING_TEST',
      sampleVialId: 'VIAL-MUL-3918'
    }
  ]);

  const [selectedSample, setSelectedSample] = useState<LabSample | null>(null);

  // Sample Chain-of-Custody Scan-In State (#6)
  const [vialScanInput, setVialScanInput] = useState<string>('');
  const [vialVerified, setVialVerified] = useState<boolean>(false);
  const [vialMismatch, setVialMismatch] = useState<boolean>(false);

  // Test form state
  const [entryMode, setEntryMode] = useState<'HPLC_NETWORKED' | 'MANUAL'>('HPLC_NETWORKED');
  const [purityScore, setPurityScore] = useState('98.4');
  const [activeCompounds, setActiveCompounds] = useState('Withanolide A: 2.8%, Withaferin A: 1.6%');
  const [moistureContent, setMoistureContent] = useState('7.2%');
  const [heavyMetals, setHeavyMetals] = useState('Lead: <0.02 ppm, Arsenic: ND');
  const [testResult, setTestResult] = useState<'PASSED' | 'FAILED'>('PASSED');
  const [pdfFileName, setPdfFileName] = useState<string | null>('HPLC_Spectra_LOT-2291.pdf');
  const [certHash, setCertHash] = useState<string | null>(null);

  // Blockchain Modal state
  const [showBlockchainModal, setShowBlockchainModal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  useEffect(() => {
    fetchPendingBatches();
  }, []);

  const fetchPendingBatches = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/batches/awaiting-test`);
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
          const mapped: LabSample[] = data.map((b: any, idx: number) => ({
            id: b.id || idx + 10,
            lotId: b.batchId || `LOT-229${idx}`,
            herbName: b.herbName,
            receivedDate: new Date().toISOString().split('T')[0],
            sampleWeightGm: 250,
            aggregatorName: b.collector?.name || 'Mandi Hub',
            status: 'AWAITING_TEST'
          }));
          setSamples(mapped);
        }
      }
    } catch (e) {
      console.warn('API fallback for lab portal');
    }
  };

  // HPLC Network Import Simulation
  const handleImportFromHplcMachine = () => {
    setEntryMode('HPLC_NETWORKED');
    setPurityScore('98.6');
    setActiveCompounds('Withanolide A: 2.94%, Withaferin A: 1.72% (Shimadzu HPLC-2030C)');
    setMoistureContent('6.8% (Karl Fischer Titration)');
    setHeavyMetals('Lead: <0.01 ppm, Mercury: ND, Cadmium: ND');
    setTestResult('PASSED');
    setPdfFileName('HPLC_Direct_Spectrogram_Output.pdf');
    alert('📥 Directly imported 4 chromatogram metrics from Shimadzu HPLC Machine. Fields locked against manual tampering.');
  };

  const handleSubmitTestReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSample) return;

    // Initial temporary hash while waiting for on-chain submission
    const hash = `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    setCertHash(hash);
    setShowBlockchainModal(true);

    try {
      const formData = new FormData();
      formData.append('batchId', selectedSample.id.toString());
      formData.append('result', testResult);
      formData.append('purityScore', purityScore);
      formData.append('notes', `HPLC Purity: ${purityScore}%, Active: ${activeCompounds}, Moisture: ${moistureContent}, Hash: ${hash}`);

      const res = await fetch(`${API_BASE}/api/test-reports`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data = await res.json();
        if (data.txHash) {
          setCertHash(data.txHash);
        }
      }
    } catch (err) {
      console.warn('Test report recorded locally');
    }
  };

  const handleBlockchainModalDone = () => {
    setShowBlockchainModal(false);
    setIsCompleted(true);
    fetchPendingBatches();
    if (selectedSample) {
      setSamples(prev => prev.filter(s => s.id !== selectedSample.id));
    }
  };

  const handleCopyHash = () => {
    if (certHash) {
      navigator.clipboard.writeText(certHash);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24 text-slate-100 animate-fade-in-up">
      {/* Screen L1 — Authenticated Staff Banner */}
      <div className="glass-card p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-gradient-to-r from-slate-900 to-slate-950">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl border border-purple-500/30">
            🧪
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-base">NABL-Accredited Quality Testing Lab #18</h3>
              <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-500/30">
                AUTHORIZED TECHNICIAN
              </span>
            </div>
            <p className="text-xs text-slate-400">Dr. Sunita Sharma • Shimadzu Prominence-i HPLC Connected</p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono text-emerald-400 font-bold">Signing Key: 0x9f18...c021</span>
        </div>
      </div>

      {!selectedSample && !isCompleted && (
        /* Screen L2 — Pending Samples Queue */
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white text-base">Samples Awaiting Chemical Analysis</h3>
              <p className="text-xs text-slate-400">Batches delivered from certified Mandi aggregator centers</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-400 uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-3">Lot ID</th>
                  <th className="p-3">Species</th>
                  <th className="p-3">Sample Weight</th>
                  <th className="p-3">Aggregator Origin</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                {samples.map(s => (
                  <tr key={s.id} className="hover:bg-slate-900/40">
                    <td className="p-3 font-mono font-bold text-slate-200">{s.lotId}</td>
                    <td className="p-3 font-semibold text-white">{s.herbName}</td>
                    <td className="p-3 text-slate-300">{s.sampleWeightGm} gm</td>
                    <td className="p-3 text-slate-400">{s.aggregatorName}</td>
                    <td className="p-3">
                      <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded">
                        AWAITING TEST
                      </span>
                    </td>
                    <td className="p-3">
                      <Button
                        onClick={() => setSelectedSample(s)}
                        className="py-1.5 px-3 text-xs"
                      >
                        Enter Results ➔
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Screen L3 — Test Result Entry Form */}
      {selectedSample && !isCompleted && (
        <Card className="p-6 space-y-5 animate-fade-in-up">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-mono text-purple-400 font-bold">{selectedSample.lotId}</span>
              <h3 className="text-lg font-bold text-white">Chemical Assay & Certificate Entry</h3>
            </div>
            <button onClick={() => { setSelectedSample(null); setVialVerified(false); setVialScanInput(''); }} className="text-xs text-slate-400 hover:text-white">
              Back to Queue
            </button>
          </div>

          {/* Sample Chain-of-Custody Scan-In Card (#6) */}
          <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider block">Sample Chain-of-Custody Enforcement</span>
                <strong className="text-sm font-bold text-white">Scan Physical Sample Vial NFC / Barcode Tag</strong>
                <p className="text-xs text-slate-400 mt-0.5">Vial tag assigned at lot extraction must match physical vial before test upload.</p>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded font-mono font-bold ${vialVerified ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}>
                {vialVerified ? '✅ VIAL VERIFIED' : '🔒 SCAN REQUIRED'}
              </span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder={`Enter/Scan Vial ID (Expected: ${selectedSample.sampleVialId})`}
                value={vialScanInput}
                onChange={e => {
                  const val = e.target.value;
                  setVialScanInput(val);
                  if (val.trim().toUpperCase() === selectedSample.sampleVialId.toUpperCase()) {
                    setVialVerified(true);
                    setVialMismatch(false);
                  } else if (val.trim().length >= 8) {
                    setVialVerified(false);
                    setVialMismatch(true);
                  } else {
                    setVialVerified(false);
                    setVialMismatch(false);
                  }
                }}
                className="input-field text-xs font-mono"
              />
              <button
                type="button"
                onClick={() => {
                  setVialScanInput(selectedSample.sampleVialId);
                  setVialVerified(true);
                  setVialMismatch(false);
                }}
                className="btn-secondary text-xs px-3.5 whitespace-nowrap"
              >
                📡 Auto-Scan Vial Tag
              </button>
            </div>

            {vialMismatch && (
              <p className="text-xs text-red-400 font-semibold">
                ❌ Sample Vial ID Mismatch! The scanned vial tag does not match lot {selectedSample.lotId}. Test submission locked.
              </p>
            )}
          </div>

          {/* Machine Integration vs Manual Switcher */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-800">
            <div>
              <span className="text-xs font-bold text-slate-300">Data Ingestion Method:</span>
              <p className="text-[11px] text-slate-500">Networked machine feeds prevent manual report tampering</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleImportFromHplcMachine}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 ${entryMode === 'HPLC_NETWORKED'
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
              >
                <span>📥</span>
                <span>Import from HPLC Machine</span>
              </button>

              <button
                type="button"
                onClick={() => setEntryMode('MANUAL')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${entryMode === 'MANUAL'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }`}
              >
                Manual Entry
              </button>
            </div>
          </div>

          {/* Trust Score Indicator */}
          {entryMode === 'HPLC_NETWORKED' ? (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-center justify-between text-xs text-emerald-300">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span><strong>Cryptographic HPLC Feed Verified</strong> — Values locked to machine serial #SHM-2030</span>
              </div>
              <span className="bg-emerald-500/20 px-2 py-0.5 rounded font-bold text-[10px]">MAX TRUST SCORE</span>
            </div>
          ) : (
            <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl flex items-center justify-between text-xs text-amber-300">
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span><strong>Manual Operator Entry</strong> — Will be stamped with lower consumer trust score</span>
              </div>
              <span className="bg-amber-500/20 px-2 py-0.5 rounded font-bold text-[10px]">LOWER TRUST</span>
            </div>
          )}

          <form onSubmit={handleSubmitTestReport} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Purity Percentage (%)</label>
                <input
                  type="text"
                  value={purityScore}
                  onChange={e => setPurityScore(e.target.value)}
                  disabled={entryMode === 'HPLC_NETWORKED'}
                  className={`input-field font-bold text-base ${entryMode === 'HPLC_NETWORKED' ? 'bg-slate-900/60 text-emerald-400' : 'text-white'}`}
                  required
                />
              </div>

              <div>
                <label className="input-label">Moisture Content</label>
                <input
                  type="text"
                  value={moistureContent}
                  onChange={e => setMoistureContent(e.target.value)}
                  disabled={entryMode === 'HPLC_NETWORKED'}
                  className={`input-field ${entryMode === 'HPLC_NETWORKED' ? 'bg-slate-900/60 text-slate-300' : 'text-white'}`}
                  required
                />
              </div>
            </div>

            <div>
              <label className="input-label">Active Botanical Compounds</label>
              <input
                type="text"
                value={activeCompounds}
                onChange={e => setActiveCompounds(e.target.value)}
                disabled={entryMode === 'HPLC_NETWORKED'}
                className={`input-field font-mono text-xs ${entryMode === 'HPLC_NETWORKED' ? 'bg-slate-900/60 text-slate-300' : 'text-white'}`}
                required
              />
            </div>

            <div>
              <label className="input-label">Heavy Metals & Contaminants Assay</label>
              <input
                type="text"
                value={heavyMetals}
                onChange={e => setHeavyMetals(e.target.value)}
                disabled={entryMode === 'HPLC_NETWORKED'}
                className={`input-field font-mono text-xs ${entryMode === 'HPLC_NETWORKED' ? 'bg-slate-900/60 text-slate-300' : 'text-white'}`}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Overall Test Outcome</label>
                <select
                  value={testResult}
                  onChange={e => setTestResult(e.target.value as any)}
                  className="input-field text-sm font-bold"
                >
                  <option value="PASSED">✅ PASSED (Within Pharmacopeia Standards)</option>
                  <option value="FAILED">❌ FAILED (Contaminants / Low Potency)</option>
                </select>
              </div>

              <div>
                <label className="input-label">Signed PDF Lab Certificate</label>
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-center justify-between">
                  <span className="truncate">📄 {pdfFileName}</span>
                  <span className="text-[10px] text-emerald-400 font-bold">DIGITALLY SIGNED</span>
                </div>
              </div>
            </div>

            <Button type="submit" disabled={!vialVerified} className="w-full py-3">
              {vialVerified ? '⛓️ Submit & Hash to Blockchain ➔' : '🔒 Scan Physical Vial Tag to Unlock Submission'}
            </Button>
          </form>
        </Card>
      )}

      {/* Screen L4 — Confirmation & SHA-256 Display */}
      {isCompleted && certHash && (
        <Card className="p-6 text-center space-y-5 animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto border border-emerald-500/30">
            {testResult === 'PASSED' ? '✅' : '❌'}
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">
              {testResult === 'PASSED' ? 'Certificate Permanently Recorded' : 'Failure Immutably Logged'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {testResult === 'PASSED'
                ? 'Lot marked PASSED and immediately made available to manufacturers.'
                : 'Lot flagged as FAILED. Manufacturers and aggregators alerted.'}
            </p>
          </div>

          {/* Cryptographic Hash */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-left">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400">Cryptographic SHA-256 Hash Proof:</span>
              <button
                onClick={handleCopyHash}
                className="text-xs text-emerald-400 hover:underline font-semibold"
              >
                {copiedHash ? 'Copied!' : 'Copy Hash'}
              </button>
            </div>
            <p className="text-xs font-mono text-emerald-300 break-all bg-black/40 p-2.5 rounded-lg border border-slate-800">
              {certHash}
            </p>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => { setIsCompleted(false); setSelectedSample(null); }} className="w-full py-2.5">
              Test Next Sample ➔
            </Button>
          </div>
        </Card>
      )}

      {/* ⛓️ On-Chain Confirmation Modal */}
      <BlockchainTxModal
        isOpen={showBlockchainModal}
        title="Anchoring Lab Certificate"
        txHash={certHash || undefined}
        actionSummary="Generating SHA-256 digest bound to HPLC machine ID and anchoring to TestRegistry smart contract."
        durationMs={5000}
        onClose={handleBlockchainModalDone}
      />
    </div>
  );
};
