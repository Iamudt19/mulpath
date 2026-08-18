import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface BlockchainTxModalProps {
  isOpen: boolean;
  title: string;
  txHash?: string;
  contractAddress?: string;
  onComplete?: () => void;
  onClose?: () => void;
  actionSummary?: string;
  durationMs?: number; // Kept for backwards compatibility — controls confirming→recorded animation
}

export const BlockchainTxModal: React.FC<BlockchainTxModalProps> = ({
  isOpen,
  title,
  txHash,
  contractAddress = '0xa5c3D7BB4C52Ed17dCF5De132e01141b3cD0295D',
  onComplete,
  onClose,
  actionSummary = 'Writing cryptographic record to Ethereum Sepolia...',
  durationMs = 4000,
}) => {
  const [phase, setPhase] = useState<'submitting' | 'confirming' | 'recorded'>('submitting');
  const [progress, setProgress] = useState(0);
  const [confirmedHash, setConfirmedHash] = useState<string | null>(null);

  // When a real txHash arrives from parent, store it
  useEffect(() => {
    if (txHash && txHash.startsWith('0x')) {
      setConfirmedHash(txHash);
      setPhase('confirming');
    }
  }, [txHash]);

  // Reset and start auto-progress whenever modal opens
  useEffect(() => {
    if (!isOpen) {
      setPhase('submitting');
      setProgress(0);
      setConfirmedHash(null);
      return;
    }

    setPhase('submitting');
    setProgress(0);

    if (txHash && txHash.startsWith('0x')) {
      setConfirmedHash(txHash);
    } else {
      setConfirmedHash(null);
    }

    // After 1.2s in submitting phase, auto-transition to confirming phase
    const submitTimer = setTimeout(() => {
      setPhase('confirming');
    }, 1200);

    return () => clearTimeout(submitTimer);
  }, [isOpen, txHash]);

  // Progress bar animation in confirming phase
  useEffect(() => {
    if (phase !== 'confirming') return;
    setProgress(15);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(98, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);
      if (elapsed >= durationMs) {
        clearInterval(interval);
        setProgress(100);
        setPhase('recorded');
        onComplete?.();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [phase, durationMs, onComplete]);

  if (!isOpen) return null;

  const sepoliaUrl = confirmedHash
    ? `https://sepolia.etherscan.io/tx/${confirmedHash}`
    : null;

  return (
    <div className="modal-overlay" style={{ zIndex: 100 }}>
      <div className="modal-content max-w-md animate-fade-in-up border border-slate-700/60 bg-slate-950/95 text-slate-100 p-6 rounded-2xl shadow-2xl relative">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white text-xs z-10 w-7 h-7 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center"
          >
            ✕
          </button>
        )}

        {/* Phase: Submitting — waiting for backend to get txHash */}
        {phase === 'submitting' && (
          <div className="text-center space-y-5 py-3">
            <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin" />
              <span className="text-3xl">📡</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>
              <p className="text-xs text-amber-400 font-mono font-semibold mt-1 animate-pulse">
                Submitting transaction to Sepolia...
              </p>
              <p className="text-xs text-slate-400 mt-2">{actionSummary}</p>
            </div>
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-400 text-left space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Contract:</span>
                <span className="text-slate-300 font-bold">{contractAddress.slice(0, 10)}...{contractAddress.slice(-6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Function:</span>
                <span className="text-slate-300">registerHarvest()</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="text-amber-400 animate-pulse">⏳ Awaiting wallet signature...</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              Network: Ethereum Sepolia • Gas: Sponsored
            </p>
          </div>
        )}

        {/* Phase: Confirming — txHash received, waiting for block confirmations */}
        {phase === 'confirming' && (
          <div className="text-center space-y-5 py-3">
            <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin" />
              <span className="text-3xl animate-pulse">⛓️</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>
              <p className="text-xs text-emerald-400 font-mono font-semibold mt-1 animate-pulse">
                Transaction broadcast — awaiting block confirmations...
              </p>
              <p className="text-xs text-slate-400 mt-2">{actionSummary}</p>
            </div>
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Consensus Block Confirms</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700/50">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 transition-all duration-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            {confirmedHash && (
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-left space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Tx Hash:</span>
                  <a
                    href={sepoliaUrl!}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-[11px] underline font-semibold"
                  >
                    View on Sepolia ↗
                  </a>
                </div>
                <p className="text-[10px] text-slate-400 break-all bg-black/40 p-1.5 rounded border border-slate-800/80">
                  {confirmedHash}
                </p>
              </div>
            )}
            <p className="text-[11px] text-slate-500 italic">
              Network: Ethereum Sepolia • Sponsored by Paymaster (₹0 Gas)
            </p>
          </div>
        )}

        {/* Phase: Recorded — confirmed on chain */}
        {phase === 'recorded' && (
          <div className="text-center space-y-5 py-3 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl border border-emerald-500/40">
              ✅
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Cryptographically Recorded</h3>
              <p className="text-xs text-slate-400 mt-1">
                Harvest permanently sealed on Ethereum Sepolia.
              </p>
            </div>
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-left space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Transaction Proof:</span>
                {sepoliaUrl ? (
                  <a
                    href={sepoliaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-[11px] underline flex items-center gap-1 font-semibold"
                  >
                    View on Sepolia ↗
                  </a>
                ) : (
                  <span className="text-slate-500 text-[11px]">Pending indexing...</span>
                )}
              </div>
              {confirmedHash ? (
                <p className="text-[11px] text-slate-300 break-all bg-black/40 p-2 rounded border border-slate-800/80 font-mono">
                  {confirmedHash}
                </p>
              ) : (
                <p className="text-[11px] text-slate-500 italic">
                  Transaction hash will appear once indexed by Etherscan.
                </p>
              )}
              <div className="text-[10px] text-slate-500 flex justify-between pt-1 border-t border-slate-800">
                <span>Contract Address:</span>
                <span className="text-slate-400 font-bold">{contractAddress.slice(0, 12)}...{contractAddress.slice(-6)}</span>
              </div>
            </div>
            <Button onClick={onClose} className="w-full py-2.5">
              Done &amp; Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
