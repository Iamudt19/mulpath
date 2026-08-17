import React, { useState, useEffect } from 'react';
import { Button } from './Button';

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://mulpath.onrender.com';

export type StakeholderRole = 'COLLECTOR' | 'AGGREGATOR' | 'LAB' | 'MANUFACTURER' | 'ADMIN' | 'CONSUMER';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: StakeholderRole;
  onSuccess?: (role: StakeholderRole, user: any, token: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'COLLECTOR',
  onSuccess
}) => {
  const [selectedRole, setSelectedRole] = useState<StakeholderRole>(initialRole);
  const [step, setStep] = useState<'ROLE_SELECT' | 'PHONE' | 'OTP'>('ROLE_SELECT');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialRole && isOpen) {
      setSelectedRole(initialRole);
    }
  }, [initialRole, isOpen]);

  useEffect(() => {
    let interval: any;
    if (resendTimer > 0) {
      interval = setInterval(() => setResendTimer(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  if (!isOpen) return null;

  const roleDetails: Record<StakeholderRole, { title: string; icon: string; desc: string; defaultPhone: string; defaultName: string }> = {
    COLLECTOR: {
      title: 'Botanical Collector / Harvester',
      icon: '🌿',
      desc: 'Log GPS field harvests, camera AI species scans, and receive instant direct payments to your smart wallet.',
      defaultPhone: '9876543210',
      defaultName: 'Ramesh Patel (Chittorgarh Forest Reserve)'
    },
    AGGREGATOR: {
      title: 'Mandi Aggregator & Depot Hub',
      icon: '🏭',
      desc: 'Verify gross scale weights, manage temperature-controlled drying/grinding, and dispatch sealed sample vials.',
      defaultPhone: '9829012345',
      defaultName: 'Shakti Enterprises (Chittorgarh Mandi)'
    },
    LAB: {
      title: 'Quality Testing Laboratory',
      icon: '🧪',
      desc: 'Conduct HPLC chromatography assays, verify active potency (Withanolide A), and anchor SHA-256 certs on Sepolia.',
      defaultPhone: '9829099887',
      defaultName: 'Ayush National Quality HPLC Lab'
    },
    MANUFACTURER: {
      title: 'Ayurvedic Brand Manufacturer',
      icon: '💊',
      desc: 'Acquire certified lots, blend formulations, calculate farmer revenue shares, and print serialized consumer QR codes.',
      defaultPhone: '9829077665',
      defaultName: 'Mūlpath Certified Organic Labs'
    },
    ADMIN: {
      title: 'Protocol Operations & Auditor',
      icon: '🛡️',
      desc: 'Global supply chain telemetry, geofence boundary editor, smart contract state audit, and anti-fraud operations.',
      defaultPhone: '9829000001',
      defaultName: 'Protocol Security Auditor'
    },
    CONSUMER: {
      title: 'Consumer Public Verification',
      icon: '🔍',
      desc: 'Instant cryptographic passport audit without login.',
      defaultPhone: '',
      defaultName: 'Guest'
    }
  };

  const handleRoleSelect = (role: StakeholderRole) => {
    setSelectedRole(role);
    if (role === 'CONSUMER') {
      onClose();
      return;
    }
    // Set typical stakeholder phone
    setPhone(roleDetails[role].defaultPhone);
    setStep('PHONE');
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch(`${API_BASE}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, name: roleDetails[selectedRole].defaultName, role: selectedRole })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStep('OTP');
        setResendTimer(30);
      } else {
        setErrorMessage(data.error || 'Failed to send OTP code.');
      }
    } catch (err: any) {
      setErrorMessage('Network error connecting to auth server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
    setOtp(newOtp);

    // Auto-advance
    if (val && index < 5) {
      const nextInput = document.getElementById(`modal-otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setErrorMessage('Please enter all 6 digits of the OTP.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp: otpCode, role: selectedRole })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        // Save to localStorage for persistent multi-tenant session
        localStorage.setItem('mulpath_token', data.token);
        localStorage.setItem('mulpath_user', JSON.stringify(data.user));
        localStorage.setItem('mulpath_role', selectedRole);

        if (onSuccess) {
          onSuccess(selectedRole, data.user, data.token);
        }
        onClose();
      } else {
        setErrorMessage(data.error || 'Invalid OTP code.');
      }
    } catch (err) {
      setErrorMessage('Verification failed. Please check connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-backdrop z-50">
      <div className="modal-content max-w-xl p-6 sm:p-8 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white text-lg font-bold w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800"
        >
          ✕
        </button>

        {/* ── STEP 1: ROLE SELECTION ── */}
        {step === 'ROLE_SELECT' && (
          <div className="space-y-5">
            <div className="text-center space-y-1.5">
              <span className="text-3xl block">🌐</span>
              <h3 className="text-2xl font-black text-white">Select Stakeholder Portal</h3>
              <p className="text-xs text-slate-400">
                Choose your role in the Ayurvedic supply chain to access your cryptographic workspace.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {(Object.keys(roleDetails) as StakeholderRole[]).filter(r => r !== 'CONSUMER').map(roleKey => {
                const r = roleDetails[roleKey];
                return (
                  <button
                    key={roleKey}
                    onClick={() => handleRoleSelect(roleKey)}
                    className={`p-4 rounded-2xl border text-left transition space-y-2 group ${
                      selectedRole === roleKey
                        ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{r.icon}</span>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-400 font-bold opacity-0 group-hover:opacity-100 transition">
                        Select ➔
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
                        {r.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 text-center">
              <p className="text-xs text-slate-400">
                Consumer verifying a product bottle?{' '}
                <a href="/verify" onClick={(e) => { e.preventDefault(); window.location.href = '/verify'; }} className="text-emerald-400 font-semibold hover:underline">
                  Open Public Scanner (No login required) ➔
                </a>
              </p>
            </div>
          </div>
        )}

        {/* ── STEP 2: PHONE INPUT ── */}
        {step === 'PHONE' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <span className="text-3xl">{roleDetails[selectedRole].icon}</span>
              <div>
                <h3 className="text-lg font-bold text-white">{roleDetails[selectedRole].title}</h3>
                <p className="text-xs text-slate-400">Authenticate with your mobile number</p>
              </div>
              <button
                onClick={() => setStep('ROLE_SELECT')}
                className="ml-auto text-xs text-slate-400 hover:text-white underline font-semibold"
              >
                Change Role
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300 text-xs">
                ⚠️ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="input-label">Mobile Number</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-slate-400 font-mono text-sm">🇮🇳 +91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="9876543210"
                    className="input-field pl-16 font-mono text-sm tracking-wider"
                    required
                    autoFocus
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  A 6-digit cryptographic authentication code will be dispatched.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="secondary" onClick={() => setStep('ROLE_SELECT')} type="button" className="w-1/3">
                  Back
                </Button>
                <Button type="submit" disabled={isLoading || phone.length < 10} className="w-2/3">
                  {isLoading ? 'Sending Code...' : 'Send OTP Code ➔'}
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* ── STEP 3: OTP VERIFICATION ── */}
        {step === 'OTP' && (
          <div className="space-y-5">
            <div className="text-center space-y-1">
              <span className="text-3xl block">🔐</span>
              <h3 className="text-xl font-bold text-white">Enter 6-Digit Code</h3>
              <p className="text-xs text-slate-400">
                Code sent to <span className="text-emerald-400 font-mono font-bold">+91 {phone}</span>
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300 text-xs text-center">
                ⚠️ {errorMessage}
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div className="flex justify-center gap-2 sm:gap-3">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`modal-otp-${idx}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={e => handleOtpChange(idx, e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Backspace' && !digit && idx > 0) {
                        document.getElementById(`modal-otp-${idx - 1}`)?.focus();
                      }
                    }}
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-mono font-bold bg-slate-900 border border-slate-700 rounded-xl text-white focus:border-emerald-500 focus:outline-none shadow-inner"
                    autoFocus={idx === 0}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center text-xs">
                <button
                  type="button"
                  onClick={() => setStep('PHONE')}
                  className="text-slate-400 hover:text-white underline"
                >
                  Edit Mobile Number
                </button>
                {resendTimer > 0 ? (
                  <span className="text-slate-500 font-mono">Resend in {resendTimer}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="text-emerald-400 hover:underline font-semibold"
                  >
                    Resend Code
                  </button>
                )}
              </div>

              <Button type="submit" disabled={isLoading || otp.join('').length !== 6} className="w-full py-3 text-sm font-bold">
                {isLoading ? 'Verifying & Provisioning Wallet...' : 'Authorize & Enter Workspace ➔'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
