import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PaymentModal } from '../components/PaymentModal';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

export const AggregatorDashboard = () => {
  const [activeTab, setActiveTab] = useState<'incoming' | 'process' | 'merge'>('incoming');
  const [batches, setBatches] = useState<any[]>([]);
  const [selectedBatch, setSelectedBatch] = useState<any | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [eventType, setEventType] = useState('DRYING');
  const [eventNotes, setEventNotes] = useState('');
  const [mergeNotes, setMergeNotes] = useState('');
  const [paymentBatchId, setPaymentBatchId] = useState<number | undefined>();
  const [showPayment, setShowPayment] = useState(false);
  const [msg, setMsg] = useState<{ text: string; success: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { fetchBatches(); }, []);

  const fetchBatches = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_BASE}/api/batches/validated`);
      if (res.ok) {
        setBatches(await res.json());
      } else {
        throw new Error('Failed to fetch batches');
      }
    } catch (e) {
      setError('Could not connect to the server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBatch) return;
    setMsg(null);
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/processing-events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batchId: selectedBatch.id, eventType, notes: eventNotes })
      });
      const data = await res.json();
      setMsg({ text: data.success ? 'Processing event added!' : 'Failed.', success: !!data.success });
      if (data.success) { fetchBatches(); setEventNotes(''); }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMerge = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIds.length < 2) { setMsg({ text: 'Select at least 2 batches to merge.', success: false }); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/batches/merge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batchIds: selectedIds, notes: mergeNotes })
      });
      const data = await res.json();
      setMsg({ text: data.success ? 'Batches merged into new lot!' : 'Failed.', success: !!data.success });
      if (data.success) { fetchBatches(); setSelectedIds([]); setMergeNotes(''); }
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleId = (id: number) => setSelectedIds(prev =>
    prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-24">
      {/* Premium Tab Bar */}
      <div className="tab-bar">
        {(['incoming', 'process', 'merge'] as const).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}>
            {tab === 'incoming' ? '📦 Incoming' : tab === 'process' ? '⚙️ Process' : '🔗 Merge'}
          </button>
        ))}
      </div>

      {msg && (
        <div className={msg.success ? 'alert-success' : 'alert-error'}>
          {msg.text}
        </div>
      )}

      {activeTab === 'incoming' && (
        <div className="space-y-4">
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
              <p className="empty-state-title">No incoming batches</p>
              <p className="empty-state-subtitle">Waiting for collectors to log new validated harvests.</p>
            </div>
          )}
          {!loading && !error && batches.map((b, i) => (
            <Card key={b.id} className={`animate-fade-in-up stagger-${Math.min(i + 1, 5)}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg text-slate-800">{b.herbName}</h4>
                  <p className="text-sm text-slate-500 mt-1">{b.quantityKg} kg · Collector: {b.collector?.name}</p>
                  <p className="text-xs text-slate-400 mt-1">Events: {b.processingEvents?.length || 0}</p>
                  <span className={`status-badge mt-2 ${b.status === 'AGGREGATED' ? 'aggregated' : 'collected'}`}>{b.status}</span>
                </div>
                <Button variant="secondary" onClick={() => { setPaymentBatchId(b.id); setShowPayment(true); }}>💳 Pay</Button>
              </div>
              {b.latitude && b.longitude && (
                <div className="h-28 w-full rounded-xl overflow-hidden mt-3 border border-slate-200/50">
                  <MapContainer center={[b.latitude, b.longitude]} zoom={11} style={{ height: '100%', width: '100%' }} zoomControl={false} dragging={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[b.latitude, b.longitude]}><Popup>{b.herbName}</Popup></Marker>
                  </MapContainer>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'process' && (
        <Card title="Add Processing Event" className="animate-fade-in-up">
          {batches.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">⚙️</div>
              <p className="empty-state-title">No batches to process.</p>
              <p className="empty-state-subtitle">Wait for new incoming validated batches.</p>
            </div>
          ) : (
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label className="input-label">Select Batch</label>
                <select className="input-field"
                  onChange={e => setSelectedBatch(batches.find(b => b.id === parseInt(e.target.value)) || null)} required>
                  <option value="">-- Select a batch --</option>
                  {batches.map(b => <option key={b.id} value={b.id}>{b.herbName} · {b.batchId}</option>)}
                </select>
              </div>
              <div>
                <label className="input-label">Event Type</label>
                <select className="input-field" value={eventType} onChange={e => setEventType(e.target.value)}>
                  <option value="DRYING">🌡️ Drying</option>
                  <option value="GRINDING">⚙️ Grinding</option>
                  <option value="STORAGE">📦 Storage</option>
                </select>
              </div>
              <div>
                <label className="input-label">Notes</label>
                <textarea className="input-field" rows={3}
                  value={eventNotes} onChange={e => setEventNotes(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : '⚙️ Add Processing Event'}
              </Button>
            </form>
          )}
        </Card>
      )}

      {activeTab === 'merge' && (
        <Card title="Merge Batches into Lot" className="animate-fade-in-up">
          {batches.length < 2 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🔗</div>
              <p className="empty-state-title">Not enough batches</p>
              <p className="empty-state-subtitle">You need at least 2 batches available to merge.</p>
            </div>
          ) : (
            <form onSubmit={handleMerge} className="space-y-4">
              <p className="text-sm text-slate-400">Select 2+ batches to merge into a combined lot:</p>
              <div className="space-y-2 max-h-60 overflow-y-auto border border-white/5 rounded-xl p-3">
                {batches.map(b => (
                  <label key={b.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded accent-white" checked={selectedIds.includes(b.id)} onChange={() => toggleId(b.id)} />
                    <span className="text-sm text-slate-200">{b.herbName} — {b.quantityKg}kg ({b.batchId})</span>
                  </label>
                ))}
              </div>
              <div>
                <label className="input-label">Notes</label>
                <textarea className="input-field" rows={2} value={mergeNotes} onChange={e => setMergeNotes(e.target.value)} />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Merging...' : `🔗 Merge Selected (${selectedIds.length})`}
              </Button>
            </form>
          )}
        </Card>
      )}

      {showPayment && <PaymentModal batchId={paymentBatchId} onClose={() => setShowPayment(false)} onSuccess={fetchBatches} />}
    </div>
  );
};
