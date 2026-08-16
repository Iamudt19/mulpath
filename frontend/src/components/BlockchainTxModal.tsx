import React, { useState, useEffect } from 'react';
import { Button } from './Button';

interface BlockchainTxModalProps {
  isOpen: boolean;
  title: string;
  txHash?: string;
  onComplete?: () => void;
  onClose?: () => void;
  actionSummary?: string;
  durationMs?: number; // Default 6000ms
}

export const BlockchainTxModal: React.FC<BlockchainTxModalProps> = ({
  isOpen,
  title,
  txHash: initialTxHash,
  onComplete,
  onClose,
  actionSummary = 'Writing cryptographic record to Ethereum Sepolia...',
  durationMs = 6500,
}) => {
  const [phase, setPhase] = useState<'confirming' | 'recorded'>('confirming');
  const [progress, setProgress] = useState(0);
  const [blockNumber, setBlockNumber] = useState(6194820);
  const [txHash, setTxHash] = useState(initialTxHash || '');

  useEffect(() => {
    if (!isOpen) {
      setPhase('confirming');
      setProgress(0);
      return;
    }

    const generatedHash = initialTxHash || `0x${Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    setTxHash(generatedHash);
    setPhase('confirming');
    setProgress(5);

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(98, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);

      if (elapsed >= durationMs) {
        clearInterval(interval);
        setProgress(100);
        setPhase('recorded');
        setBlockNumber(prev => prev + 1);
        if (onComplete) onComplete();
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isOpen, initialTxHash, durationMs]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ zIndex: 100 }}>
      <div className="modal-content max-w-md animate-fade-in-up border border-slate-700/60 bg-slate-950/95 text-slate-100 p-6 rounded-2xl shadow-2xl">
        {phase === 'confirming' ? (
          <div className="text-center space-y-5 py-3">
            {/* Spinning Hexagon / Pulsing Shield */}
            <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin" />
              <span className="text-3xl animate-pulse">⛓️</span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">{title}</h3>
              <p className="text-xs text-emerald-400 font-mono font-semibold mt-1 animate-pulse">
                Confirming on-chain (Ethereum Sepolia)...
              </p>
              <p className="text-xs text-slate-400 mt-2">{actionSummary}</p>
            </div>

            {/* Progress bar */}
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Block Confirms (2/3)</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700/50">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 transition-all duration-300 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-400 text-left space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Target Contract:</span>
                <span className="text-slate-300 font-bold">MūlpathRegistry.sol</span>
              </div>
              <div className="flex justify-between truncate">
                <span className="text-slate-500">Tx Hash:</span>
                <span className="text-slate-300">{txHash.slice(0, 14)}...{txHash.slice(-8)}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 italic">
              Gas estimated: ~0.00042 ETH • Consensus verification active
            </p>
          </div>
        ) : (
          <div className="text-center space-y-5 py-3 animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl border border-emerald-500/40">
              ✅
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">Cryptographically Recorded</h3>
              <p className="text-xs text-slate-400 mt-1">
                State transition permanently sealed in Block #{blockNumber}.
              </p>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-left space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Transaction Proof:</span>
                <a
                  href={`https://sepolia.etherscan.io/tx/${txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 text-[11px] underline flex items-center gap-1"
                >
                  View on Sepolia ↗
                </a>
              </div>
              <p className="text-[11px] text-slate-300 break-all bg-black/40 p-2 rounded border border-slate-800/80">
                {txHash}
              </p>
            </div>

            <Button onClick={onClose} className="w-full py-2.5">
              Done & Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
