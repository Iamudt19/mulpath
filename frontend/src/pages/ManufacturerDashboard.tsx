import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { PaymentModal } from '../components/PaymentModal';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

export const ManufacturerDashboard = () => {
  const [activeTab, setActiveTab] = useState<'batches' | 'formulations' | 'chain'>('batches');
  const [batches, setBatches] = useState<any[]>([]);
  const [formulations, setFormulations] = useState<any[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  
  const [formulationName, setFormulationName] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  
  const [chainData, setChainData] = useState<any | null>(null);
  
  const [msg, setMsg] = useState<{ text: string; success: boolean } | null>(null);
  const [paymentBatchId, setPaymentBatchId] = useState<number | undefined>();
  const [showPayment, setShowPayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === 'batches') fetchBatches();
    if (activeTab === 'formulations') fetchFormulations();
  }, [activeTab]);

  const fetchBatches = async () => {
    try {
      setLoading(true); setError(null);
      const res = await fetch(`${API_BASE}/api/batches/tested`);
      if (res.ok) setBatches(await res.json());
      else throw new Error('Failed to fetch batches');
    } catch (e) {
      setError('Could not connect to the server.');
    } finally { setLoading(false); }
  };

  const fetchFormulations = async () => {
    try {
      setLoading(true); setError(null);
      const res = await fetch(`${API_BASE}/api/formulations`);
      if (res.ok) setFormulations(await res.json());
      else throw new Error('Failed to fetch formulations');
    } catch (e) {
      setError('Could not connect to the server.');
    } finally { setLoading(false); }
  };

  const fetchChainOfCustody = async (id: number) => {
    const res = await fetch(`${API_BASE}/api/formulations/${id}/chain`);
    if (res.ok) {
      setChainData(await res.json());
      setActiveTab('chain');
    }
  };

  const verifyOnChain = async (type: string, id: number) => {
    try {
      const res = await fetch(`${API_BASE}/api/blockchain-record/${type}/${id}`);
      if (res.ok) {
        const record = await res.json();
        window.open(`https://sepolia.etherscan.io/tx/${record.txHash}`, '_blank');
      } else {
        alert('Record not yet verified on blockchain (Transaction might still be pending).');
      }
    } catch (e) {
      alert('Error fetching blockchain record.');
    }
  };

  const handleCreateFormulation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIds.length === 0) {
      setMsg({ text: 'Select at least 1 batch.', success: false });
      return;
    }

    setIsSubmitting(true);
    setMsg(null);
    try {
      const res = await fetch(`${API_BASE}/api/formulations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formulationName,
          finalPriceInr: finalPrice,
          batchIds: selectedIds
        })
      });
      const data = await res.json();
      setMsg({ text: data.success ? 'Formulation created!' : 'Failed.', success: !!data.success });
      if (data.success) {
        setSelectedIds([]);
        setFormulationName('');
        setFinalPrice('');
        fetchBatches();
      }
    } catch (err) {
      setMsg({ text: 'Error creating formulation.', success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleId = (id: number) => setSelectedIds(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24">
      {/* Premium Tab Bar */}
      <div className="tab-bar">
        {(['batches', 'formulations', 'chain'] as const).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}>
            {tab === 'batches' ? '💊 Tested Batches' : tab === 'formulations' ? '🧪 Formulations' : '🔗 Chain of Custody'}
          </button>
        ))}
      </div>

      {msg && (
        <div className={msg.success ? 'alert-success' : 'alert-error'}>
          {msg.text}
        </div>
      )}

      {activeTab === 'batches' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-700">📋 Available Tested Batches</h3>
            {loading && (
              <div className="flex justify-center items-center py-16">
                <div className="spinner"></div>
              </div>
            )}
            {error && (
              <div className="alert-error text-center">
                <p>{error}</p>
                <Button variant="secondary" onClick={fetchBatches} className="mt-3">Retry</Button>
              </div>
            )}
            {!loading && !error && batches.length === 0 && (
              <div className="empty-state">
                <div className="empty-state-icon">📭</div>
                <p className="empty-state-title">No tested batches available.</p>
                <p className="empty-state-subtitle">Wait for the lab to test and approve batches.</p>
              </div>
            )}
            {!loading && !error && batches.map((b, i) => (
              <Card key={b.id} className={`animate-fade-in-up stagger-${Math.min(i + 1, 5)}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input type="checkbox" className="mt-1.5 w-4 h-4 rounded accent-white" checked={selectedIds.includes(b.id)} onChange={() => toggleId(b.id)} />
                      <div>
                        <h4 className="font-bold text-lg text-slate-200">{b.herbName} <span className="text-sm font-normal text-slate-400">({b.batchId})</span></h4>
                        <p className="text-sm text-slate-500 mt-1">{b.quantityKg} kg · Collector: {b.collector?.name}</p>
                        <span className="status-badge mt-2 collected">{b.status}</span>
                      </div>
                    </label>
                  </div>
                  <Button variant="secondary" onClick={() => { setPaymentBatchId(b.id); setShowPayment(true); }}>💳 Pay</Button>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <Card title="Create Formulation" className="animate-fade-in-up sticky top-4">
              {!loading && !error && batches.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">🧪</div>
                  <p className="empty-state-title">No tested batches available.</p>
                  <p className="empty-state-subtitle">Wait for the lab to test and approve batches.</p>
                </div>
              ) : (
                <form onSubmit={handleCreateFormulation} className="space-y-4">
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl text-sm text-white font-semibold">
                    Selected Batches: {selectedIds.length}
                  </div>

                  <div>
                    <label className="input-label">Formulation Name</label>
                    <input type="text" className="input-field" 
                      value={formulationName} onChange={e => setFormulationName(e.target.value)} required placeholder="e.g. Ashwagandha Extract" />
                  </div>

                  <div>
                    <label className="input-label">Final Consumer Price (INR)</label>
                    <input type="number" min="0" step="1" className="input-field" 
                      value={finalPrice} onChange={e => setFinalPrice(e.target.value)} required placeholder="e.g. 1500" />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Creating...' : '💊 Create Formulation'}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'formulations' && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-700">📦 All Formulations</h3>
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="spinner"></div>
            </div>
          )}
          {error && (
            <div className="alert-error text-center">
              <p>{error}</p>
              <Button variant="secondary" onClick={fetchFormulations} className="mt-3">Retry</Button>
            </div>
          )}
          {!loading && !error && formulations.length === 0 && (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <p className="empty-state-title">No formulations created yet.</p>
              <p className="empty-state-subtitle">Select tested batches and formulate supplements above.</p>
            </div>
          )}
          {!loading && !error && formulations.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {formulations.map((f, i) => (
                <Card key={f.id} className={`animate-fade-in-up stagger-${Math.min(i + 1, 5)}`}>
                  <h4 className="font-bold text-lg text-slate-200">{f.name}</h4>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-slate-400">Price: <span className="font-semibold text-slate-200">₹{f.finalPriceInr}</span></p>
                    <p className="text-sm text-slate-400">Fair-Trade: <span className="font-semibold text-white">{f.fairTradePercentage?.toFixed(1)}%</span></p>
                  </div>
                  <div className="mt-3 p-2 bg-white/5 rounded-lg border border-white/5 text-xs text-slate-400">
                    Batches: <span className="font-medium">{f.batches.map((b: any) => b.herbName).join(', ')}</span>
                  </div>
                  <div className="mt-4 flex flex-col space-y-2">
                    <Button variant="secondary" className="w-full text-xs" onClick={() => fetchChainOfCustody(f.id)}>🔍 View Chain</Button>
                    <button 
                      onClick={() => verifyOnChain('Formulation', f.id)}
                      className="btn-chain w-full justify-center text-xs"
                    >
                      🔗 Verify On-Chain
                    </button>
                    {f.qrCodeUrl && (
                      <a href={`${API_BASE}${f.qrCodeUrl}`} target="_blank" rel="noopener noreferrer" className="text-center text-xs text-slate-300 hover:text-white font-semibold hover:underline mt-2 inline-block">
                        📥 Download QR Code
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'chain' && chainData && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="flex justify-between items-center">
             <h3 className="text-xl font-bold text-slate-200">Chain of Custody: {chainData.name}</h3>
             <Button variant="secondary" onClick={() => setActiveTab('formulations')}>Back to Formulations</Button>
          </div>
          
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
               <div className="space-y-1 text-center md:text-left">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Final Price</p>
                  <p className="text-2xl font-extrabold text-white">₹{chainData.finalPriceInr}</p>
               </div>
               <div className="space-y-1 text-center md:text-left">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Fair-Trade Share</p>
                  <p className="text-2xl font-extrabold text-white">{chainData.fairTradePercentage?.toFixed(2)}%</p>
               </div>
               {chainData.qrCodeUrl && (
                 <div className="flex justify-center md:justify-end">
                    <img src={`${API_BASE}${chainData.qrCodeUrl}`} alt="QR Code" className="w-24 h-24 border border-white/10 rounded-lg p-1 bg-white" />
                 </div>
               )}
            </div>
          </Card>

          <h4 className="text-lg font-bold text-slate-700 mt-6">Source Batches</h4>
          <div className="space-y-4">
            {chainData.batches.map((b: any) => (
              <Card key={b.id} className="border-l-4 border-l-emerald-500">
                <h5 className="font-bold text-lg text-slate-800">{b.herbName} ({b.batchId})</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm text-slate-500">
                  <p>🗓️ Harvested: <span className="font-medium text-slate-700">{new Date(b.harvestDate).toLocaleDateString()}</span> by <span className="font-medium text-slate-700">{b.collector?.name}</span></p>
                  <p>📍 Location: <span className="font-medium text-slate-700">{b.originLocation}</span></p>
                </div>
                
                {b.processingEvents?.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h6 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Processing Events</h6>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {b.processingEvents.map((pe: any) => (
                        <li key={pe.id} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          <span>{pe.eventType} - {new Date(pe.createdAt).toLocaleDateString()} {pe.notes && `(${pe.notes})`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {b.certificates?.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h6 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Test Certificates</h6>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {b.certificates.map((cert: any) => (
                        <li key={cert.id} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span>{cert.result} - {cert.notes} by {cert.lab?.name || 'Lab'}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {b.priceTransfers?.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h6 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Fair-Trade Payments</h6>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {b.priceTransfers.map((pt: any) => (
                        <li key={pt.id} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span>₹{pt.amount} to {pt.recipient?.name} ({pt.recipient?.role})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {showPayment && <PaymentModal batchId={paymentBatchId} onClose={() => setShowPayment(false)} onSuccess={fetchBatches} />}
    </div>
  );
};
