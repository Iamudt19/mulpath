import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { PaymentModal } from '../components/PaymentModal';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

export const LabDashboard = () => {
  const [batches, setBatches] = useState<any[]>([]);
  const [selectedBatchId, setSelectedBatchId] = useState<number | ''>('');
  const [result, setResult] = useState('PASSED');
  const [purityScore, setPurityScore] = useState('');
  const [reportFile, setReportFile] = useState<File | null>(null);
  const [msg, setMsg] = useState<{ text: string; success: boolean } | null>(null);
  const [paymentBatchId, setPaymentBatchId] = useState<number | undefined>();
  const [showPayment, setShowPayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { fetchBatches(); }, []);

  const fetchBatches = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_BASE}/api/batches/awaiting-test`);
      if (res.ok) {
        setBatches(await res.json());
      } else {
        throw new Error('Failed to fetch batches');
      }
    } catch (e) {
      setError('Could not connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  const handleUploadReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBatchId) return;

    setIsSubmitting(true);
    setMsg(null);
    const formData = new FormData();
    formData.append('batchId', selectedBatchId.toString());
    formData.append('result', result);
    formData.append('notes', `Purity Score: ${purityScore}%`);
    if (reportFile) {
      formData.append('report', reportFile);
    }

    try {
      const res = await fetch(`${API_BASE}/api/test-reports`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setMsg({ text: data.success ? 'Test report uploaded!' : 'Failed.', success: !!data.success });
      if (data.success) {
        fetchBatches();
        setSelectedBatchId('');
        setPurityScore('');
        setReportFile(null);
      }
    } catch (err) {
      setMsg({ text: 'Error uploading report.', success: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-24">
      {msg && (
        <div className={msg.success ? 'alert-success' : 'alert-error'}>
          {msg.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-700">🧪 Batches Awaiting Testing</h3>
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
              <div className="empty-state-icon">🧪</div>
              <p className="empty-state-title">No batches awaiting tests.</p>
              <p className="empty-state-subtitle">Wait for collectors and aggregators to submit batches.</p>
            </div>
          )}
          {!loading && !error && batches.map((b, i) => (
            <Card key={b.id} className={`animate-fade-in-up stagger-${Math.min(i + 1, 5)}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg text-slate-800">{b.herbName} <span className="text-sm font-normal text-slate-400">({b.batchId})</span></h4>
                  <p className="text-sm text-slate-500 mt-1">{b.quantityKg} kg</p>
                  <span className={`status-badge mt-2 ${b.status === 'AGGREGATED' ? 'aggregated' : 'collected'}`}>{b.status}</span>
                  {b.aiConfidence !== null && b.aiConfidence !== undefined && (
                    <div className="mt-2">
                      <span className={`status-badge ${b.aiFlagged ? 'tested' : 'collected'}`}>
                        AI: {b.aiConfidence}% {b.aiFlagged ? '⚠️' : '✅'}
                      </span>
                    </div>
                  )}
                </div>
                <Button variant="secondary" onClick={() => { setPaymentBatchId(b.id); setShowPayment(true); }}>💳 Pay</Button>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <Card title="Upload Test Report" className="animate-fade-in-up sticky top-4">
            {batches.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">📋</div>
                <p className="empty-state-title">No batches available for testing.</p>
                <p className="empty-state-subtitle">Wait for batches to be aggregated.</p>
              </div>
            ) : (
              <form onSubmit={handleUploadReport} className="space-y-4">
                <div>
                  <label className="input-label">Select Batch</label>
                  <select className="input-field" 
                    value={selectedBatchId} onChange={e => setSelectedBatchId(parseInt(e.target.value) || '')} required>
                    <option value="">-- Select a batch --</option>
                    {batches.map(b => <option key={b.id} value={b.id}>{b.herbName} ({b.batchId})</option>)}
                  </select>
                </div>
                
                <div>
                  <label className="input-label">Report File (PDF/Image)</label>
                  <input type="file" className="input-field file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-white/5 file:text-white hover:file:bg-white/10 file:cursor-pointer"
                    onChange={e => setReportFile(e.target.files?.[0] || null)} />
                </div>

                <div>
                  <label className="input-label">Purity Score (%)</label>
                  <input type="number" min="0" max="100" step="0.1" className="input-field" 
                    value={purityScore} onChange={e => setPurityScore(e.target.value)} required placeholder="e.g. 98.5" />
                </div>

                <div>
                  <label className="input-label">Test Result</label>
                  <select className="input-field" 
                    value={result} onChange={e => setResult(e.target.value)}>
                    <option value="PASSED">✅ PASSED</option>
                    <option value="FAILED">❌ FAILED</option>
                  </select>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : '📋 Submit Report'}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>

      {showPayment && <PaymentModal batchId={paymentBatchId} onClose={() => setShowPayment(false)} onSuccess={fetchBatches} />}
    </div>
  );
};
