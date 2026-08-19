import React, { useState, useEffect } from 'react';
import { Button } from './Button';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://mulpath.onrender.com';

export type UserRole = 'COLLECTOR' | 'AGGREGATOR' | 'LAB' | 'MANUFACTURER' | 'ADMIN';

interface AuthModalProps {
  isOpen: boolean;
  initialRole?: UserRole;
  onClose: () => void;
  onSuccess: (user: any) => void;
}

const roleDescriptions: Record<UserRole, { title: string; icon: string; desc: string; sampleName: string; defaultEmail: string }> = {
  COLLECTOR: {
    title: 'Botanical Harvester',
    icon: '🌿',
    desc: 'Log wild harvests with GPS geofencing, PlantNet AI vision, and receive instant ERC-4337 payouts.',
    sampleName: 'Ramesh Patel',
    defaultEmail: 'farmer.ramesh@mulpath.com'
  },
  AGGREGATOR: {
    title: 'Mandi Depot Aggregator',
    icon: '🏭',
    desc: 'Receive assigned field bags, verify scale weights, and dispatch NFC sealed vials to testing labs.',
    sampleName: 'Shakti Enterprises Mandi',
    defaultEmail: 'shakti.mandi@mulpath.com'
  },
  LAB: {
    title: 'NABL Quality Lab',
    icon: '🧪',
    desc: 'Receive assigned sample vials, perform HPLC chemical purity assays, and anchor certificates on-chain.',
    sampleName: 'Ayush Analytical Labs',
    defaultEmail: 'qa.lab@mulpath.com'
  },
  MANUFACTURER: {
    title: 'Herbal Manufacturer',
    icon: '💊',
    desc: 'Purchase certified lots, formulate retail blends, and generate tamper-proof consumer QR codes.',
    sampleName: 'Dabur Organic Formulations',
    defaultEmail: 'manufacturing@dabur-organic.com'
  },
  ADMIN: {
    title: 'Protocol Operations & Admin',
    icon: '🛡️',
    desc: 'Global supply chain telemetry, anti-fraud queue resolution, and Ethereum Sepolia contracts audit.',
    sampleName: 'Mūlpath Protocol Auditor',
    defaultEmail: 'admin@mulpath.com'
  }
};

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialRole = 'COLLECTOR',
  onClose,
  onSuccess
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(initialRole === 'ADMIN' ? 'COLLECTOR' : initialRole);
  const [step, setStep] = useState<'INPUT' | 'OTP'>('INPUT');
  const [email, setEmail] = useState(roleDescriptions[initialRole].defaultEmail);
  const [userName, setUserName] = useState(roleDescriptions[initialRole].sampleName);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    if (initialRole && initialRole !== 'ADMIN') {
      setSelectedRole(initialRole);
      setEmail(roleDescriptions[initialRole].defaultEmail);
      setUserName(roleDescriptions[initialRole].sampleName);
    }
  }, [initialRole, isOpen]);

  useEffect(() => {
    let timer: any;
    if (step === 'OTP' && resendTimer > 0) {
      timer = setInterval(() => setResendTimer(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [step, resendTimer]);

  if (!isOpen) return null;

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setEmail(roleDescriptions[role].defaultEmail);
    setUserName(roleDescriptions[role].sampleName);
    setErrorMsg('');
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanEmail = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }

      setStep('OTP');
      setResendTimer(30);
      setOtp(['', '', '', '', '', '']);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error connecting to authentication server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
    setOtp(newOtp);

    if (val && index < 5) {
      const nextInput = document.getElementById(`modal-otp-digit-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`modal-otp-digit-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted) {
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pasted[i] || '';
      }
      setOtp(newOtp);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const fullOtp = otp.join('');
    if (fullOtp.length !== 6) {
      setErrorMsg('Please enter all 6 digits of your verification code.');
      return;
    }

    setIsLoading(true);
    try {
      const payload: any = {
        otp: fullOtp,
        email: email.trim().toLowerCase(),
        name: userName,
        role: selectedRole
      };

      const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid OTP code.');
      }

      if (data.token) {
        localStorage.setItem('mulpath_token', data.token);
      }
      if (data.user) {
        localStorage.setItem('mulpath_user', JSON.stringify(data.user));
        window.dispatchEvent(new Event('auth-change'));
        onSuccess(data.user);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Verification failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-950/95 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white text-lg w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 transition"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="space-y-1 text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto border border-emerald-500/30">
            {roleDescriptions[selectedRole].icon}
          </div>
          <h3 className="text-xl font-black text-white tracking-tight">
            Stakeholder Gateway & Email Login
          </h3>
          <p className="text-xs text-slate-400">
            Enter your email address to receive your instant verification code.
          </p>
        </div>

        {/* Role Selection Tabs */}
        {step === 'INPUT' && (
          <div className="space-y-3">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              1. Select Your Stakeholder Role:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['COLLECTOR', 'AGGREGATOR', 'LAB', 'MANUFACTURER'] as UserRole[]).map((r) => {
                const info = roleDescriptions[r];
                const isSel = selectedRole === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => handleRoleSelect(r)}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition ${
                      isSel
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-xl">{info.icon}</span>
                    <div className="overflow-hidden">
                      <p className="font-bold text-xs truncate leading-tight">{info.title}</p>
                      <p className="text-[9px] text-slate-400 truncate">{r}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300">
              <span className="text-emerald-400 font-bold">{roleDescriptions[selectedRole].title}: </span>
              <span>{roleDescriptions[selectedRole].desc}</span>
            </div>
          </div>
        )}

        {/* Form Inputs */}
        {step === 'INPUT' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Stakeholder / Organization Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="input-field text-sm"
                  placeholder="e.g. Ramesh Patel"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Stakeholder Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-slate-400 text-sm">✉️</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field text-sm font-mono pl-9"
                    placeholder="stakeholder@ayush.org"
                    required
                  />
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-xs text-red-300 font-semibold">
                ⚠️ {errorMsg}
              </div>
            )}

            <Button type="submit" disabled={isLoading} className="w-full py-3 text-sm font-bold shadow-lg">
              {isLoading ? 'Requesting Code...' : 'Send Email Verification Code ➔'}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="text-center space-y-1">
              <p className="text-xs text-slate-400">
                Enter the 6-digit verification code sent to:
              </p>
              <p className="font-mono text-sm font-bold text-emerald-400">
                {email}
                <button
                  type="button"
                  onClick={() => setStep('INPUT')}
                  className="text-xs text-slate-400 hover:text-white underline ml-2"
                >
                  Edit
                </button>
              </p>
            </div>

            <div className="flex justify-center gap-2 py-2" onPaste={handleOtpPaste}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  id={`modal-otp-digit-${idx}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                  className="w-11 h-13 text-center text-xl font-bold font-mono rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none"
                  autoFocus={idx === 0}
                />
              ))}
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-xs text-red-300 font-semibold">
                ⚠️ {errorMsg}
              </div>
            )}

            <div className="flex justify-between items-center text-xs text-slate-400 px-1">
              <span>Didn't receive code?</span>
              {resendTimer > 0 ? (
                <span className="font-mono text-slate-500">Resend in {resendTimer}s</span>
              ) : (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  Resend Code
                </button>
              )}
            </div>

            <Button type="submit" disabled={isLoading} className="w-full py-3 text-sm font-bold shadow-lg">
              {isLoading ? 'Verifying...' : `Access ${roleDescriptions[selectedRole].title} Workspace ➔`}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
