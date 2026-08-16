import React, { useState } from 'react';
import { Button } from './Button';

export interface FlaggedItem {
  id: string;
  type: 'AI_CONFIDENCE' | 'SEAL_BROKEN' | 'WEIGHT_MISMATCH' | 'GPS_MISMATCH' | 'LAB_FAILED';
  title: string;
  severity: 'high' | 'medium' | 'low';
  details: string;
  sourceId: string;
  reporter: string;
  timestamp: string;
  status: 'PENDING' | 'RESOLVED' | 'REJECTED';
}

const INITIAL_FLAGS: FlaggedItem[] = [
  {
    id: 'FLG-1049',
    type: 'SEAL_BROKEN',
    severity: 'high',
    title: 'Damaged NFC Zip-Tie on Herb Intake',
    details: 'Bag #NFC-7712 scanned at Mandi Aggregator Hub with physical tear. Suspected tampering or transport damage.',
    sourceId: 'BATCH-88319',
    reporter: 'Mandi Depot Hub #4',
    timestamp: '15 mins ago',
    status: 'PENDING'
  },
  {
    id: 'FLG-1048',
    type: 'AI_CONFIDENCE',
    severity: 'medium',
    title: 'Species Confidence 68% (Pending Spot-Check)',
    details: 'Visual camera photo showed partial shade. Auto-classified as Ashwagandha with 68% confidence. Needs expert review.',
    sourceId: 'BATCH-88312',
    reporter: 'Edge Vision AI v2.1',
    timestamp: '1 hour ago',
    status: 'PENDING'
  },
  {
    id: 'FLG-1047',
    type: 'WEIGHT_MISMATCH',
    severity: 'high',
    title: 'Herb Moisture Retention Anomaly',
    details: 'Pre-drying total was 100kg, post-drying yield only 28kg (Expected 60-70kg for Brahmi). Potential filler or skimming.',
    sourceId: 'LOT-2291',
    reporter: 'Warehouse Scale System #2',
    timestamp: '3 hours ago',
    status: 'PENDING'
  },
  {
    id: 'FLG-1046',
    type: 'GPS_MISMATCH',
    severity: 'low',
    title: 'GPS Drift Outside Certified Zone (±22m)',
    details: 'Coordinates located 18 meters past the certified forest polygon border in Wayanad Reserve.',
    sourceId: 'BATCH-88290',
    reporter: 'GeoFenceValidator.sol',
    timestamp: '5 hours ago',
    status: 'PENDING'
  }
];

export const ReviewQueueModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState<FlaggedItem[]>(INITIAL_FLAGS);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'PENDING' | 'RESOLVED'>('ALL');

  if (!isOpen) return null;

  const handleResolve = (id: string, newStatus: 'RESOLVED' | 'REJECTED') => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  const filtered = items.filter(item => {
    if (activeFilter === 'ALL') return true;
    return item.status === activeFilter;
  });

  const getSeverityBadge = (sev: string) => {
    switch (sev) {
      case 'high': return <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[11px] font-bold">CRITICAL</span>;
      case 'medium': return <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded text-[11px] font-bold">REVIEW</span>;
      default: return <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded text-[11px] font-bold">INFO</span>;
    }
  };

  return (
    <div className="modal-overlay" style={{ zIndex: 110 }}>
      <div className="modal-content max-w-2xl animate-fade-in-up border border-slate-700/60 bg-slate-950/95 text-slate-100 p-6 rounded-2xl shadow-2xl space-y-5">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            <div>
              <h3 className="text-lg font-bold text-white">Mūlpath Ops Human Review Queue</h3>
              <p className="text-xs text-slate-400">Anti-fraud exceptions, sensor mismatches & AI spot checks</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white text-lg font-bold p-1 rounded hover:bg-slate-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          {(['ALL', 'PENDING', 'RESOLVED'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                activeFilter === tab 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {tab === 'ALL' ? `All (${items.length})` : tab === 'PENDING' ? `Pending (${items.filter(i => i.status === 'PENDING').length})` : 'Resolved'}
            </button>
          ))}
        </div>

        {/* Items List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              ✨ No items matching the filter. All integrity checks cleared!
            </div>
          ) : (
            filtered.map(item => (
              <div key={item.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {getSeverityBadge(item.severity)}
                    <span className="text-xs font-mono text-slate-400 font-bold">{item.id}</span>
                    <span className="text-xs text-slate-500">• {item.timestamp}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                    item.status === 'PENDING' ? 'bg-amber-400/10 text-amber-400' :
                    item.status === 'RESOLVED' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h4 className="font-semibold text-sm text-slate-200">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.details}</p>

                <div className="flex justify-between items-center pt-2 text-[11px] text-slate-400 border-t border-slate-800/60">
                  <span>Source: <strong className="text-slate-300">{item.sourceId}</strong> ({item.reporter})</span>
                  {item.status === 'PENDING' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleResolve(item.id, 'RESOLVED')}
                        className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-medium transition"
                      >
                        Approve Exception
                      </button>
                      <button
                        onClick={() => handleResolve(item.id, 'REJECTED')}
                        className="px-2.5 py-1 rounded bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/40 text-xs font-medium transition"
                      >
                        Reject & Flag
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
