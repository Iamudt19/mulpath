import React, { useState } from 'react';
import { Button } from './Button';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://mulpath.onrender.com';

interface PaymentModalProps {
  batchId?: number;
  onClose: () => void;
  onSuccess?: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ batchId, onClose, onSuccess }) => {
  const [amount, setAmount] = useState('');
  const [recipientId, setRecipientId] = useState('1');
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/price-transfers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, recipientId, senderId: 2, herbBatchId: batchId })
      });
      const data = await res.json();
      if (data.success) {
        setMsg('Payment logged successfully!');
        onSuccess?.();
        setTimeout(onClose, 1500);
      } else {
        setMsg('Failed to log payment.');
      }
    } catch {
      setMsg('Network error.');
    }
    setSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card p-6 w-full max-w-sm mx-4">
        <h3 className="text-lg font-bold text-slate-200 mb-4">Log Payment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="input-label">Amount (₹)</label>
            <input
              type="number"
              className="input-field"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="e.g. 500"
              required
            />
          </div>
          <div>
            <label className="input-label">Recipient User ID</label>
            <input
              type="number"
              className="input-field"
              value={recipientId}
              onChange={e => setRecipientId(e.target.value)}
              required
            />
          </div>
          {msg && <p className="text-sm text-slate-300">{msg}</p>}
          <div className="flex space-x-3">
            <Button type="submit" disabled={submitting} className="flex-1">
              {submitting ? 'Saving...' : 'Log Payment'}
            </Button>
            <Button type="button" variant="secondary" onClick={onClose} className="flex-1">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
