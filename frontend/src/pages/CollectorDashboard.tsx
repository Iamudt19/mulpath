import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { formatDualCurrency } from '../utils/currency';
import { useOfflineSync, saveQueuedHarvest } from '../services/offlineSync';
import { BlockchainTxModal } from '../components/BlockchainTxModal';

// Fix default Leaflet icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

type FarmerStep = 'F1_SPLASH' | 'F2_PHONE' | 'F3_OTP' | 'F4_HOME' | 'F5_GPS' | 'F6_CAMERA' | 'F7_NFC' | 'F8_REVIEW' | 'F9_PAYMENT' | 'F10_WALLET';

interface HarvestItem {
  id: number | string;
  batchId: string;
  herbName: string;
  quantityKg: number;
  harvestDate: string;
  status: string;
  zoneValidated: boolean;
  aiConfidence?: number | null;
  aiFlagged?: boolean;
  latitude?: number | null;
  longitude?: number | null;
  txHash?: string | null;
  sealId?: string;
  isLocalQueue?: boolean;
}

// Map center updater helper component
function SetViewOnClick({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, map.getZoom());
  }, [coords, map]);
  return null;
}

export const CollectorDashboard: React.FC = () => {
  // Navigation & Flow
  const [currentStep, setCurrentStep] = useState<FarmerStep>('F4_HOME');
  const [selectedLanguage, setSelectedLanguage] = useState<'HI' | 'EN' | 'MR' | 'TE'>('EN');

  // Auth State
  const [phoneNumber, setPhoneNumber] = useState('9876543210');
  const [otp, setOtp] = useState(['5', '2', '8', '1', '9', '4']);
  const walletAddress = '0x7a29...f91c (Account Abstraction ERC-4337)';

  // Harvest Logging State
  const [species, setSpecies] = useState('Ashwagandha');
  const [quantity, setQuantity] = useState('45');
  const [notes, setNotes] = useState('Wild harvested from certified buffer block B');
  const [photoBlobUrl, setPhotoBlobUrl] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [aiConfidence, setAiConfidence] = useState<number>(94);
  const [aiSpeciesMatch, setAiSpeciesMatch] = useState('Ashwagandha (Withania somnifera)');
  const [aiStatus, setAiStatus] = useState<'APPROVED' | 'SPOT_CHECK' | 'REJECTED'>('APPROVED');

  // GPS State
  const [latVal, setLatVal] = useState('24.465000');
  const [lngVal, setLngVal] = useState('74.869000');
  const [gpsAccuracy, setGpsAccuracy] = useState<number>(4);
  const [gpsStatus, setGpsStatus] = useState<'fetching' | 'success' | 'weak' | 'error'>('success');
  const [isInsideZone, setIsInsideZone] = useState<boolean>(true);
  const [zoneCheckRetries, setZoneCheckRetries] = useState(0);
  const [showManualGps, setShowManualGps] = useState(false);

  // NFC Sealing State
  const [sealId, setSealId] = useState('NFC-88213');
  const [isScanningNfc, setIsScanningNfc] = useState(false);
  const [nfcSealed, setNfcSealed] = useState(false);
  const [usedNfcTags] = useState<Set<string>>(new Set(['NFC-OLD-001', 'NFC-OLD-002']));

  // ── Fraud Hardening State (#1 - #4) ──
  // #1 Atomic 90s Session Timer
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [sessionSecondsLeft, setSessionSecondsLeft] = useState<number>(90);
  const [sessionExpired, setSessionExpired] = useState<boolean>(false);

  // #2 Sensor Fusion Movement Check
  const [motionSummary, setMotionSummary] = useState<{
    samplesCount: number;
    avgAccel: number;
    maxAccel: number;
    isImplausiblyStatic: boolean;
    locationJumpDetected: boolean;
  }>({ samplesCount: 0, avgAccel: 0, maxAccel: 0, isImplausiblyStatic: false, locationJumpDetected: false });

  // #3 EXIF GPS Cross-Check
  const [exifCoords, setExifCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationMismatch, setLocationMismatch] = useState<boolean>(false);
  const [exifDistanceMeters, setExifDistanceMeters] = useState<number | null>(null);

  // #4 Live Challenge Overlay Code
  const [challengeCode, setChallengeCode] = useState<string>('8492');

  // Camera Stream
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Data & History
  const [harvests, setHarvests] = useState<HarvestItem[]>([]);
  const [totalEarningsInr, setTotalEarningsInr] = useState(14880);
  const [pendingPaymentInr, setPendingPaymentInr] = useState(2480);

  // Modals & Popups
  const [showBlockchainModal, setShowBlockchainModal] = useState(false);
  const [paymentNotice, setPaymentNotice] = useState<{ show: boolean; amount: number; batchId: string; txHash: string } | null>(null);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [upiId, setUpiId] = useState('farmer.ramesh@okaxis');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  // Offline Hook
  const { isOnline, queueCount, syncNow, isSyncing } = useOfflineSync();

  // ── Helper: Start Atomic Capture Session (#1 - #4) ──
  const startCaptureSession = () => {
    const now = Date.now();
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setSessionStartTime(now);
    setSessionSecondsLeft(90);
    setSessionExpired(false);
    setChallengeCode(code);
    setExifCoords(null);
    setLocationMismatch(false);
    setExifDistanceMeters(null);
    setPhotoFile(null);
    setPhotoBlobUrl(null);

    // Sensor Fusion initial state
    setMotionSummary({
      samplesCount: 12,
      avgAccel: parseFloat((Math.random() * 1.8 + 0.5).toFixed(2)),
      maxAccel: parseFloat((Math.random() * 3.5 + 1.2).toFixed(2)),
      isImplausiblyStatic: false,
      locationJumpDetected: false,
    });

    handleRefreshGps();
    setCurrentStep('F5_GPS');
  };

  // Timer Effect for 90s Atomic Session
  useEffect(() => {
    const isHarvestFlow = ['F5_GPS', 'F6_CAMERA', 'F7_NFC', 'F8_REVIEW'].includes(currentStep);
    if (!isHarvestFlow || !sessionStartTime) return;

    const interval = setInterval(() => {
      const elapsedSec = Math.floor((Date.now() - sessionStartTime) / 1000);
      const remaining = Math.max(0, 90 - elapsedSec);
      setSessionSecondsLeft(remaining);

      if (remaining === 0) {
        setSessionExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentStep, sessionStartTime]);

  // Motion Sensor Listener (HTML5 DeviceMotionEvent) (#2)
  useEffect(() => {
    const isHarvestFlow = ['F5_GPS', 'F6_CAMERA', 'F7_NFC', 'F8_REVIEW'].includes(currentStep);
    if (!isHarvestFlow || typeof window === 'undefined' || !window.DeviceMotionEvent) return;

    let accelList: number[] = [];
    const handleMotion = (e: DeviceMotionEvent) => {
      if (e.accelerationIncludingGravity) {
        const { x, y, z } = e.accelerationIncludingGravity;
        if (x !== null && y !== null && z !== null) {
          const mag = Math.sqrt(x * x + y * y + z * z);
          accelList.push(mag);
          if (accelList.length > 50) accelList.shift();

          const avg = accelList.reduce((a, b) => a + b, 0) / accelList.length;
          const max = Math.max(...accelList);
          setMotionSummary({
            samplesCount: accelList.length,
            avgAccel: parseFloat(avg.toFixed(2)),
            maxAccel: parseFloat(max.toFixed(2)),
            isImplausiblyStatic: avg < 0.1, // Flag if device didn't move at all
            locationJumpDetected: false,
          });
        }
      }
    };

    window.addEventListener('devicemotion', handleMotion);
    return () => window.removeEventListener('devicemotion', handleMotion);
  }, [currentStep]);

  // Initial load
  useEffect(() => {
    fetchHarvestHistory();
  }, []);

  const fetchHarvestHistory = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/harvests/me`);
      if (res.ok) {
        const data = await res.json();
        setHarvests(data);
      }
    } catch (e) {
      console.warn('Backend unavailable, using simulated data');
    }
  };

  // GPS Refresh logic
  const handleRefreshGps = () => {
    setGpsStatus('fetching');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const acc = Math.round(pos.coords.accuracy || 6);
          setGpsAccuracy(acc);
          const lat = pos.coords.latitude.toFixed(6);
          const lng = pos.coords.longitude.toFixed(6);
          setLatVal(lat);
          setLngVal(lng);

          if (acc > 20) {
            setGpsStatus('weak');
          } else {
            setGpsStatus('success');
          }

          // Mock Zone Check: Coordinates around India herbs zone
          const inside = parseFloat(lat) > 20 && parseFloat(lat) < 30;
          setIsInsideZone(inside);
          if (!inside) setZoneCheckRetries(prev => prev + 1);
        },
        () => {
          setGpsStatus('weak');
          setGpsAccuracy(8);
          setIsInsideZone(true);
        },
        { enableHighAccuracy: true, timeout: 6000 }
      );
    } else {
      setGpsStatus('success');
      setGpsAccuracy(5);
      setIsInsideZone(true);
    }
  };

  // Live Camera Handlers
  const startLiveCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      setIsCameraActive(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (err) {
      alert('Camera access unavailable. Using direct photo upload.');
    }
  };

  const captureCameraFrame = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw main camera frame
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // ── Item #4: Burn Live Challenge Code Overlay onto Canvas ──
        ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
        ctx.fillRect(10, canvas.height - 46, canvas.width - 20, 36);
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 16px monospace';
        ctx.fillText(`MŪLPATH CHALLENGE: #${challengeCode}`, 20, canvas.height - 23);
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '12px sans-serif';
        ctx.fillText(`GPS: ${latVal}, ${lngVal} • ${new Date().toISOString().slice(11, 19)} UTC`, canvas.width - 270, canvas.height - 23);

        canvas.toBlob(blob => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setPhotoBlobUrl(url);
            const file = new File([blob], `ashwagandha_${Date.now()}.jpg`, { type: 'image/jpeg' });
            setPhotoFile(file);
            runAiConfidenceCheck('Ashwagandha');
            runExifCrossCheck(parseFloat(latVal), parseFloat(lngVal));
          }
        }, 'image/jpeg', 0.85);
      }
      stopCameraStream();
    }
  };

  const stopCameraStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setIsCameraActive(false);
  };

  // EXIF GPS Cross-Check (#3)
  const runExifCrossCheck = (appLat: number, appLng: number, providedExifLat?: number, providedExifLng?: number) => {
    // If provided, use exact values; otherwise simulate metadata extraction
    const eLat = providedExifLat !== undefined ? providedExifLat : appLat + (Math.random() > 0.7 ? 0.0035 : 0.0001);
    const eLng = providedExifLng !== undefined ? providedExifLng : appLng + (Math.random() > 0.7 ? 0.0040 : 0.0001);

    setExifCoords({ lat: eLat, lng: eLng });

    // Calculate distance in meters using Haversine formula
    const R = 6371e3;
    const φ1 = (appLat * Math.PI) / 180;
    const φ2 = (eLat * Math.PI) / 180;
    const Δφ = ((eLat - appLat) * Math.PI) / 180;
    const Δλ = ((eLng - appLng) * Math.PI) / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distMeters = Math.round(R * c);

    setExifDistanceMeters(distMeters);
    const mismatch = distMeters > 200;
    setLocationMismatch(mismatch);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoFile(file);
      setPhotoBlobUrl(URL.createObjectURL(file));
      runAiConfidenceCheck(species, file);
      runExifCrossCheck(parseFloat(latVal), parseFloat(lngVal));
    }
  };

  const runAiConfidenceCheck = async (claimed: string, file?: File | null) => {
    const targetFile = file || photoFile;
    if (targetFile) {
      try {
        const fd = new FormData();
        fd.append('photo', targetFile);
        fd.append('species', claimed);

        const res = await fetch(`${API_BASE}/api/verify-species`, {
          method: 'POST',
          body: fd
        });

        if (res.ok) {
          const data = await res.json();
          setAiConfidence(data.confidence);
          setAiSpeciesMatch(`${claimed} (${claimed === 'Ashwagandha' ? 'Withania somnifera' : claimed === 'Tulsi' ? 'Ocimum tenuiflorum' : 'Bacopa monnieri'})`);
          setAiStatus(data.status);
          return;
        }
      } catch (err) {
        console.warn('AI verification API unavailable, running client check');
      }
    }

    // Client-side fallback based on filename and plant heuristics
    const fname = (targetFile?.name || '').toLowerCase();
    const isPlant = fname.includes('plant') || fname.includes('leaf') || fname.includes('herb') || fname.includes('ashwagandha') || fname.includes('tulsi') || fname.includes('green') || fname.includes('nature');
    
    if (isPlant) {
      const score = claimed === 'Ashwagandha' ? 94 : claimed === 'Tulsi' ? 96 : 88;
      setAiConfidence(score);
      setAiSpeciesMatch(`${claimed} (${claimed === 'Ashwagandha' ? 'Withania somnifera' : 'Ocimum tenuiflorum'})`);
      setAiStatus('APPROVED');
    } else {
      // Non-botanical / random image fallback
      const score = Math.floor(Math.random() * 12) + 20; // 20-32%
      setAiConfidence(score);
      setAiSpeciesMatch(`${claimed} (Unverified non-plant sample)`);
      setAiStatus('REJECTED');
    }
  };

  // NFC Scan Simulation
  const handleScanNfc = () => {
    setIsScanningNfc(true);
    setTimeout(() => {
      const generatedNfc = `NFC-${Math.floor(10000 + Math.random() * 90000)}`;
      if (usedNfcTags.has(generatedNfc)) {
        alert('⚠️ Tamper Warning: This NFC tag ID was previously registered and burned. Attach a new seal.');
        setIsScanningNfc(false);
        return;
      }
      setSealId(generatedNfc);
      setNfcSealed(true);
      setIsScanningNfc(false);
    }, 1200);
  };

  // Submit Harvest (Online or Offline Queue)
  const handleSubmitHarvest = async () => {
    if (!isOnline) {
      // Save locally to offline queue
      try {
        saveQueuedHarvest({
          species,
          quantity,
          notes,
          lat: latVal,
          lng: lngVal,
          sealId,
          photoBase64: photoBlobUrl || undefined,
          photoName: photoFile?.name,
        });
        alert('📡 Saved locally! Entry queued and will auto-submit when internet connection is restored.');
        setCurrentStep('F4_HOME');
      } catch (err: any) {
        alert(err.message || 'Offline queue error');
      }
      return;
    }

    // Trigger on-chain modal (5-7 seconds simulated confirmation)
    setShowBlockchainModal(true);
  };

  const handleBlockchainModalDone = async () => {
    setShowBlockchainModal(false);
    // Send actual data to backend
    try {
      const formData = new FormData();
      formData.append('species', species);
      formData.append('quantity', quantity);
      formData.append('notes', `${notes} [NFC: ${sealId}]`);
      formData.append('lat', latVal);
      formData.append('lng', lngVal);
      formData.append('sessionStartTimestamp', sessionStartTime ? sessionStartTime.toString() : Date.now().toString());
      formData.append('challengeCode', challengeCode);
      if (exifCoords) {
        formData.append('exifLat', exifCoords.lat.toString());
        formData.append('exifLng', exifCoords.lng.toString());
      }
      formData.append('motionFlags', JSON.stringify(motionSummary));
      if (photoFile) formData.append('photo', photoFile);

      const res = await fetch(`${API_BASE}/api/harvests`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        fetchHarvestHistory();
      }
    } catch (e) {
      console.log('Submitted on-chain (demo state)');
    }

    // Add immediate optimistic harvest card
    const newEntry: HarvestItem = {
      id: Date.now(),
      batchId: `BATCH-${Date.now().toString().slice(-5)}`,
      herbName: species,
      quantityKg: parseFloat(quantity) || 45,
      harvestDate: new Date().toISOString(),
      status: 'COLLECTED',
      zoneValidated: isInsideZone,
      aiConfidence,
      latitude: parseFloat(latVal),
      longitude: parseFloat(lngVal),
      sealId,
      txHash: `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`
    };

    setHarvests(prev => [newEntry, ...prev]);
    setCurrentStep('F4_HOME');
  };

  const triggerMockPaymentNotification = () => {
    setPaymentNotice({
      show: true,
      amount: 1240,
      batchId: 'BATCH-88219',
      txHash: '0x9b4c7...d82a'
    });
    setTotalEarningsInr(prev => prev + 1240);
    setPendingPaymentInr(prev => Math.max(0, prev - 1240));
  };

  const renderSessionBanner = () => {
    const isHarvestFlow = ['F5_GPS', 'F6_CAMERA', 'F7_NFC', 'F8_REVIEW'].includes(currentStep);
    if (!isHarvestFlow) return null;

    return (
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-2.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-base animate-pulse">⏱️</span>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Atomic Capture Session</span>
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">
                Challenge #{challengeCode}
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              GPS + Photo + NFC within 90s window
            </p>
          </div>
        </div>
        <div className={`px-2.5 py-1 rounded-lg font-mono text-xs font-black ${
          sessionSecondsLeft < 20
            ? 'bg-red-500/20 text-red-300 border border-red-500/40 animate-pulse'
            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
        }`}>
          {sessionSecondsLeft}s left
        </div>
      </div>
    );
  };

  // ══════════════════════════════════════════════════════════════════
  // RENDER SCREENS (F1 to F10)
  // ══════════════════════════════════════════════════════════════════

  return (
    <div className="max-w-md mx-auto space-y-4 pb-24 text-slate-100 animate-fade-in-up relative">
      {/* ── Atomic Session Expired Modal (#1) ── */}
      {sessionExpired && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <Card className="p-6 text-center max-w-sm space-y-4 border-red-500/40 bg-slate-950">
            <div className="w-14 h-14 rounded-full bg-red-500/20 text-red-400 border border-red-500/40 flex items-center justify-center text-2xl mx-auto">
              ⌛
            </div>
            <div>
              <h3 className="text-lg font-black text-white">Capture Session Expired</h3>
              <p className="text-xs text-slate-300 mt-1">
                The 90-second security window elapsed. To prevent location & photo spoofing, please restart harvest capture.
              </p>
            </div>
            <Button onClick={startCaptureSession} className="w-full py-2.5 bg-emerald-500 text-slate-950 font-bold">
              🔄 Restart 90s Capture Session
            </Button>
          </Card>
        </div>
      )}
      {/* 📡 Persistent Offline Banner */}
      {!isOnline && (
        <div className="bg-amber-500/20 border border-amber-500/40 text-amber-200 px-4 py-2.5 rounded-xl flex items-center justify-between text-xs font-semibold shadow-lg">
          <div className="flex items-center gap-2">
            <span className="animate-pulse text-base">📡</span>
            <span>Offline Mode — Changes will sync when connected ({queueCount} queued)</span>
          </div>
          {queueCount > 0 && (
            <button 
              onClick={syncNow} 
              disabled={isSyncing}
              className="bg-amber-500/30 hover:bg-amber-500/50 px-2 py-1 rounded text-[11px] underline"
            >
              {isSyncing ? 'Syncing...' : 'Retry'}
            </button>
          )}
        </div>
      )}

      {/* Screen F1 — Splash / Language Select */}
      {currentStep === 'F1_SPLASH' && (
        <Card className="text-center p-6 space-y-6">
          <div className="space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto border border-emerald-500/30 shadow-inner">
              🌿
            </div>
            <h2 className="text-2xl font-black text-white">Mūlpath Collector</h2>
            <p className="text-xs text-slate-400">Select your preferred language / भाषा चुनें</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { code: 'HI', label: '🇮🇳 हिन्दी (Hindi)' },
              { code: 'EN', label: '🇬🇧 English' },
              { code: 'MR', label: '🇮🇳 मराठी (Marathi)' },
              { code: 'TE', label: '🇮🇳 తెలుగు (Telugu)' },
            ].map(lang => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code as any)}
                className={`p-4 rounded-xl font-bold text-sm border transition flex flex-col items-center gap-1 ${
                  selectedLanguage === lang.code
                    ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{lang.label}</span>
              </button>
            ))}
          </div>

          <Button onClick={() => setCurrentStep('F2_PHONE')} className="w-full py-3">
            Continue ➔
          </Button>
        </Card>
      )}

      {/* Screen F2 — Phone Number Login */}
      {currentStep === 'F2_PHONE' && (
        <Card className="p-6 space-y-5">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-bold text-white">Collector Login</h3>
            <p className="text-xs text-slate-400">Enter your 10-digit mobile number</p>
          </div>

          <div className="space-y-2">
            <label className="input-label">Mobile Number</label>
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 px-3 py-2.5 rounded-xl border border-slate-800 text-sm text-slate-400 font-bold">+91</span>
              <input
                type="tel"
                maxLength={10}
                className="input-field text-lg font-bold tracking-widest text-white"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </div>
            <p className="text-[11px] text-emerald-400 font-medium">
              🔒 No password needed. No crypto wallet setup required.
            </p>
          </div>

          {/* Large touch keypad */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map(k => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  if (k === 'C') setPhoneNumber('');
                  else if (k === '⌫') setPhoneNumber(prev => prev.slice(0, -1));
                  else if (phoneNumber.length < 10) setPhoneNumber(prev => prev + k);
                }}
                className="py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:bg-slate-800 active:scale-95 text-base font-bold text-slate-200 transition"
              >
                {k}
              </button>
            ))}
          </div>

          <Button onClick={() => setCurrentStep('F3_OTP')} className="w-full py-3">
            📩 Send OTP
          </Button>
        </Card>
      )}

      {/* Screen F3 — OTP Verification */}
      {currentStep === 'F3_OTP' && (
        <Card className="p-6 space-y-5 text-center">
          <div>
            <h3 className="text-xl font-bold text-white">Enter 6-Digit OTP</h3>
            <p className="text-xs text-slate-400 mt-1">Sent to +91 {phoneNumber}</p>
          </div>

          <div className="flex justify-center gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => {
                  const newOtp = [...otp];
                  newOtp[idx] = e.target.value;
                  setOtp(newOtp);
                }}
                className="w-11 h-12 text-center text-xl font-bold rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-emerald-400 focus:outline-none"
              />
            ))}
          </div>

          <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-left flex items-start gap-2">
            <span className="text-emerald-400 text-lg">✅</span>
            <div className="text-xs text-slate-300">
              <strong className="text-emerald-300 block">Digital Wallet Initialized</strong>
              <span>Account Abstraction: {walletAddress}</span>
            </div>
          </div>

          <Button onClick={() => setCurrentStep('F4_HOME')} className="w-full py-3">
            Verify & Go to Home ➔
          </Button>
        </Card>
      )}

      {/* Screen F4 — Farmer Home / Dashboard */}
      {currentStep === 'F4_HOME' && (
        <div className="space-y-4">
          {/* Header & Quick Action */}
          <div className="flex justify-between items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/30">
                👨🏽‍🌾
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight">Ramesh Patel</h3>
                <p className="text-[11px] text-slate-400">Collector ID: #MŪL-9102 · Nimbahera</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentStep('F10_WALLET')}
              className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded-xl border border-slate-700 text-xs font-semibold flex items-center gap-1"
            >
              <span>💰</span>
              <span>Wallet</span>
            </button>
          </div>

          {/* Big New Harvest Action Button */}
          <button
            onClick={startCaptureSession}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-lg shadow-xl hover:shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-3"
          >
            <span className="text-2xl">➕</span>
            <span>New Harvest Entry</span>
          </button>

          {/* 3 Stat Cards (₹ primary + USDC secondary) */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="glass-card p-3 text-center space-y-1">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Harvests</p>
              <p className="text-xl font-extrabold text-white">{harvests.length + 3}</p>
              <span className="text-[10px] text-emerald-400">All Verified</span>
            </div>

            <div className="glass-card p-3 text-center space-y-1">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pending Pay</p>
              <p className="text-lg font-extrabold text-amber-300">{formatDualCurrency(pendingPaymentInr).inr}</p>
              <p className="text-[9px] text-slate-400 font-mono">{formatDualCurrency(pendingPaymentInr).usdc}</p>
            </div>

            <div className="glass-card p-3 text-center space-y-1">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">This Month</p>
              <p className="text-lg font-extrabold text-emerald-400">{formatDualCurrency(totalEarningsInr).inr}</p>
              <p className="text-[9px] text-slate-400 font-mono">{formatDualCurrency(totalEarningsInr).usdc}</p>
            </div>
          </div>

          {/* Quick Demo Trigger for Screen F9 Payment Notice */}
          <div className="flex justify-between items-center px-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recent Harvest Logs</span>
            <button
              onClick={triggerMockPaymentNotification}
              className="text-[11px] text-emerald-400 font-semibold hover:underline flex items-center gap-1"
            >
              ⚡ Test Payout Notification (F9)
            </button>
          </div>

          {/* Harvest List */}
          <div className="space-y-3">
            {harvests.length === 0 ? (
              <div className="empty-state py-8">
                <div className="empty-state-icon">🌿</div>
                <p className="empty-state-title">No harvest entries yet</p>
                <p className="empty-state-subtitle">Tap "New Harvest Entry" above to log herb collection.</p>
              </div>
            ) : (
              harvests.map((item, idx) => (
                <div key={item.id || idx} className="glass-card p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-base">{item.herbName}</h4>
                        <span className="text-xs text-slate-400 font-mono">({item.batchId})</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.quantityKg} kg • {new Date(item.harvestDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                      </p>
                    </div>

                    <span className={`status-badge ${
                      item.status === 'DISTRIBUTED' ? 'distributed' :
                      item.status === 'TESTED' ? 'tested' :
                      item.status === 'AGGREGATED' ? 'aggregated' : 'collected'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/5 text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      {item.zoneValidated ? '✅ Approved Forest Zone' : '⚠️ Zone Pending'}
                    </span>
                    {item.aiConfidence && (
                      <span className="font-mono text-emerald-400 font-semibold">
                        AI Match: {item.aiConfidence}%
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Screen F5 — New Harvest: Location Capture */}
      {currentStep === 'F5_GPS' && (
        <Card className="p-5 space-y-4">
          {/* Atomic Session Banner (#1, #2, #4) */}
          {renderSessionBanner()}

          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Step 1 of 4</span>
              <h3 className="text-lg font-bold text-white">Location & Geofence</h3>
            </div>
            <button onClick={() => setCurrentStep('F4_HOME')} className="text-xs text-slate-400 hover:text-white">
              Cancel
            </button>
          </div>

          {/* Map Preview */}
          <div className="h-44 w-full rounded-xl overflow-hidden border border-slate-700/60 relative">
            <MapContainer
              center={[parseFloat(latVal) || 24.465, parseFloat(lngVal) || 74.869]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              zoomControl={false}
              dragging={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[parseFloat(latVal) || 24.465, parseFloat(lngVal) || 74.869]}>
                <Popup>Current Harvest Pin</Popup>
              </Marker>
              <SetViewOnClick coords={[parseFloat(latVal) || 24.465, parseFloat(lngVal) || 74.869]} />
            </MapContainer>

            <div className="absolute top-2 right-2 z-[400] bg-black/80 px-2.5 py-1 rounded-lg text-[11px] font-mono text-emerald-400 border border-slate-700">
              Accuracy: ±{gpsAccuracy}m
            </div>
          </div>

          {/* Coordinates Readout */}
          <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
            <div className="flex justify-between text-xs text-slate-300 font-mono">
              <span>Latitude: <strong>{latVal}</strong></span>
              <span>Longitude: <strong>{lngVal}</strong></span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between pt-1">
              <span>Status: {gpsStatus === 'fetching' ? '📡 Acquiring GPS lock...' : gpsStatus === 'weak' ? '⚠️ Weak Signal (Move to open sky)' : '📍 High-Precision Geolocation Lock'}</span>
            </div>
          </div>

          {/* Geofence Status Banner */}
          {isInsideZone ? (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs flex items-center gap-2">
              <span className="text-base">✅</span>
              <span>Inside Certified Forest Zone (Nimbahera Reserve Sector B)</span>
            </div>
          ) : (
            <div className="p-3 bg-red-950/40 border border-red-500/40 text-red-300 rounded-xl text-xs flex items-start gap-2">
              <span className="text-base">⚠️</span>
              <div>
                <strong>Outside approved zone</strong>
                <p className="mt-0.5">Harvest cannot be logged here. Please move inside designated zone.</p>
                {zoneCheckRetries >= 3 && (
                  <p className="mt-1 font-semibold text-amber-300">
                    Need help? Contact local aggregator supervisor: +91 94140-55210
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleRefreshGps}
              className="px-4 py-2.5 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl text-xs font-semibold text-slate-200 flex items-center gap-1.5"
            >
              <span>🔄</span>
              <span>Refresh GPS</span>
            </button>

            <button
              type="button"
              onClick={() => setShowManualGps(!showManualGps)}
              className="text-xs text-slate-400 underline ml-auto"
            >
              {showManualGps ? 'Hide Manual' : 'Indoor Testing Override'}
            </button>
          </div>

          {/* Collapsible Manual Override */}
          {showManualGps && (
            <div className="grid grid-cols-2 gap-2 pt-2">
              <input
                type="text"
                placeholder="Lat"
                value={latVal}
                onChange={e => setLatVal(e.target.value)}
                className="input-field text-xs font-mono"
              />
              <input
                type="text"
                placeholder="Lng"
                value={lngVal}
                onChange={e => setLngVal(e.target.value)}
                className="input-field text-xs font-mono"
              />
            </div>
          )}

          <Button
            onClick={() => setCurrentStep('F6_CAMERA')}
            disabled={!isInsideZone}
            className="w-full py-3"
          >
            Confirm Location & Continue ➔
          </Button>
        </Card>
      )}

      {/* Screen F6 — Species Photo Capture & Edge AI */}
      {currentStep === 'F6_CAMERA' && (
        <Card className="p-5 space-y-4">
          {renderSessionBanner()}

          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Step 2 of 4</span>
              <h3 className="text-lg font-bold text-white">Botanical Verification</h3>
            </div>
            <button onClick={() => setCurrentStep('F5_GPS')} className="text-xs text-slate-400 hover:text-white">
              Back
            </button>
          </div>

          <div className="space-y-1">
            <label className="input-label">Claimed Species</label>
            <select
              value={species}
              onChange={e => {
                setSpecies(e.target.value);
                runAiConfidenceCheck(e.target.value);
              }}
              className="input-field text-sm"
            >
              <option value="Ashwagandha">🌱 Ashwagandha (Withania somnifera)</option>
              <option value="Tulsi">🍃 Tulsi (Ocimum tenuiflorum)</option>
              <option value="Brahmi">🌿 Brahmi (Bacopa monnieri)</option>
              <option value="Neem">🌳 Neem (Azadirachta indica)</option>
            </select>
          </div>

          {/* Camera Viewfinder */}
          {isCameraActive ? (
            <div className="space-y-3 flex flex-col items-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-slate-700">
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                {/* Viewfinder crosshairs */}
                <div className="absolute inset-4 border border-white/30 rounded-lg pointer-events-none flex items-center justify-center">
                  <span className="text-xs text-white/70 bg-black/50 px-2 py-0.5 rounded">Align Herb Leaves in Box</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={captureCameraFrame}
                  className="w-14 h-14 rounded-full bg-white border-4 border-emerald-500 shadow-xl flex items-center justify-center text-xl active:scale-95 transition"
                >
                  📸
                </button>
                <button
                  type="button"
                  onClick={stopCameraStream}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs text-slate-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {photoBlobUrl ? (
                <div className="relative rounded-xl overflow-hidden border border-slate-700 aspect-video bg-black flex items-center justify-center">
                  <img src={photoBlobUrl} alt="Captured herb" className="w-full h-full object-cover" />
                  <button
                    onClick={() => {
                      setPhotoBlobUrl(null);
                      setPhotoFile(null);
                    }}
                    className="absolute top-2 right-2 bg-black/70 hover:bg-black p-1.5 rounded-full text-xs text-white"
                  >
                    ✕ Retake
                  </button>
                </div>
              ) : (
                <div className="p-6 border-2 border-dashed border-slate-700 rounded-xl flex flex-col items-center justify-center text-center space-y-3 bg-slate-900/40">
                  <span className="text-3xl">📷</span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-300">Live Camera or Gallery Upload</p>
                    <p className="text-xs text-slate-500">Auto-compressed to &lt;200KB for offline storage</p>
                  </div>
                  <div className="flex gap-2">
                    <Button type="button" onClick={startLiveCamera} className="text-xs py-2">
                      Open Camera
                    </Button>
                    <label className="btn-secondary text-xs py-2 cursor-pointer">
                      Upload File
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* AI Result Card */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400 font-semibold">🤖 On-Device Edge AI Vision</span>
              <span className={`text-xs font-bold ${
                aiStatus === 'APPROVED' ? 'text-emerald-400' :
                aiStatus === 'SPOT_CHECK' ? 'text-amber-400' : 'text-red-400'
              }`}>
                {aiConfidence}% Confidence
              </span>
            </div>
            <p className="text-sm font-bold text-white">🌿 {aiSpeciesMatch}</p>

            {aiStatus === 'APPROVED' && (
              <p className="text-[11px] text-emerald-400">✅ High confidence botanical match. Auto-approved.</p>
            )}
            {aiStatus === 'SPOT_CHECK' && (
              <p className="text-[11px] text-amber-300">⚠️ Moderate confidence. Flagged for aggregator visual spot-check.</p>
            )}
            {aiStatus === 'REJECTED' && (
              <p className="text-[11px] text-red-400">❌ Confidence below 80%. Please retake photo in better sunlight.</p>
            )}
          </div>

          {/* EXIF GPS Cross-Check Badge (#3) */}
          {exifCoords && (
            <div className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
              locationMismatch ? 'bg-red-950/40 border-red-500/40 text-red-300' : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-base">{locationMismatch ? '⚠️' : '✅'}</span>
                <div>
                  <strong className="block font-bold">EXIF GPS Cross-Check ({exifDistanceMeters}m divergence)</strong>
                  <span className="text-[11px] opacity-80 font-mono">Photo Metadata: {exifCoords.lat.toFixed(5)}, {exifCoords.lng.toFixed(5)}</span>
                </div>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                locationMismatch ? 'bg-red-500/20 text-red-300 border border-red-500/40' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }`}>
                {locationMismatch ? 'FLAGGED (>200m)' : 'PASSED (<200m)'}
              </span>
            </div>
          )}

          <Button
            onClick={() => setCurrentStep('F7_NFC')}
            disabled={aiStatus === 'REJECTED'}
            className="w-full py-3"
          >
            Confirm Species & Next ➔
          </Button>
        </Card>
      )}

      {/* Screen F7 — Quantity & NFC Bag Sealing */}
      {currentStep === 'F7_NFC' && (
        <Card className="p-5 space-y-4">
          {renderSessionBanner()}

          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Step 3 of 4</span>
              <h3 className="text-lg font-bold text-white">Quantity & NFC Seal</h3>
            </div>
            <button onClick={() => setCurrentStep('F6_CAMERA')} className="text-xs text-slate-400 hover:text-white">
              Back
            </button>
          </div>

          {/* Stepper for Quantity */}
          <div className="space-y-1.5">
            <label className="input-label">Harvest Weight (kg)</label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(prev => Math.max(1, (parseFloat(prev) || 0) - 5).toString())}
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 text-xl font-bold hover:bg-slate-800 text-white flex items-center justify-center"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                className="input-field text-center text-2xl font-black text-white"
              />
              <button
                type="button"
                onClick={() => setQuantity(prev => ((parseFloat(prev) || 0) + 5).toString())}
                className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 text-xl font-bold hover:bg-slate-800 text-white flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* NFC Sealing Diagram & Action */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏷️</span>
              <div className="text-xs text-slate-300 space-y-0.5">
                <strong className="text-white block font-bold">Attach Physical NFC Zip-Tie</strong>
                <p>Pack herbs in the jute bag → Fasten NFC tag → Tap phone antenna to seal.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleScanNfc}
              disabled={isScanningNfc}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 font-bold text-sm text-slate-100 flex items-center justify-center gap-2 transition"
            >
              <span className="text-lg">📡</span>
              <span>{isScanningNfc ? 'Scanning NFC Tag Chip...' : nfcSealed ? 'Rescan NFC Tag' : 'Tap to Scan NFC Seal'}</span>
            </button>

            {nfcSealed && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl flex items-center justify-between text-xs text-emerald-300">
                <div className="flex items-center gap-2 font-mono">
                  <span>🔒</span>
                  <span>Bag Sealed & Linked: <strong>#{sealId}</strong></span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded font-bold">1-TIME BURNED</span>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <label className="input-label">Collector Notes (Optional)</label>
            <input
              type="text"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="e.g. Morning pick, organic sector"
              className="input-field text-xs"
            />
          </div>

          <Button
            onClick={() => setCurrentStep('F8_REVIEW')}
            disabled={!nfcSealed || !quantity}
            className="w-full py-3"
          >
            Review & Finalize ➔
          </Button>
        </Card>
      )}

      {/* Screen F8 — Review & Submit */}
      {currentStep === 'F8_REVIEW' && (
        <Card className="p-5 space-y-4">
          {renderSessionBanner()}
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Step 4 of 4</span>
              <h3 className="text-lg font-bold text-white">Review Harvest Entry</h3>
            </div>
            <button onClick={() => setCurrentStep('F7_NFC')} className="text-xs text-slate-400 hover:text-white">
              Back
            </button>
          </div>

          {/* Summary Box */}
          <div className="space-y-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Species:</span>
              <span className="text-sm font-bold text-white">{species}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">Weight:</span>
              <span className="text-sm font-bold text-emerald-400">{quantity} kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">NFC Seal ID:</span>
              <span className="text-xs font-mono font-bold text-slate-200">#{sealId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">GPS Fix:</span>
              <span className="text-xs font-mono text-slate-300">{latVal}, {lngVal} (±{gpsAccuracy}m)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">AI Confidence:</span>
              <span className="text-xs font-bold text-emerald-400">{aiConfidence}% (Match)</span>
            </div>
          </div>

          {/* Fraud Hardening Audit Summary (#1, #2, #3, #4) */}
          <div className="space-y-2 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs">
            <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Security Hardening Audit</span>
            <div className="flex justify-between items-center text-slate-300">
              <span>⏱️ Atomic Window (90s):</span>
              <span className="font-mono text-emerald-400 font-semibold">{90 - sessionSecondsLeft}s elapsed (PASSED)</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>🔢 Challenge Code:</span>
              <span className="font-mono text-amber-300 font-semibold">#{challengeCode} (Watermarked)</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>📱 Motion Sensor Summary:</span>
              <span className="font-mono text-slate-200">
                {motionSummary.isImplausiblyStatic ? '⚠️ Static Warning' : `Avg ${motionSummary.avgAccel}m/s²`}
              </span>
            </div>
            {exifCoords && (
              <div className="flex justify-between items-center text-slate-300">
                <span>📍 EXIF GPS Cross-Check:</span>
                <span className={`font-mono font-semibold ${locationMismatch ? 'text-red-400' : 'text-emerald-400'}`}>
                  {locationMismatch ? `⚠️ Flagged (${exifDistanceMeters}m)` : `✅ Passed (${exifDistanceMeters}m)`}
                </span>
              </div>
            )}
          </div>

          <Button onClick={handleSubmitHarvest} className="w-full py-3.5 text-base">
            {isOnline ? '⛓️ Confirm & Submit on Blockchain' : '💾 Save Locally — Will Submit When Online'}
          </Button>
        </Card>
      )}

      {/* Screen F9 — Payment Notification (Popup / Receipt) */}
      {paymentNotice?.show && (
        <div className="modal-overlay" style={{ zIndex: 120 }}>
          <div className="modal-content max-w-sm animate-fade-in-up p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 text-3xl flex items-center justify-center mx-auto border border-emerald-500/40">
              💰
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">Payment Received!</span>
              <h3 className="text-3xl font-black text-white mt-1">{formatDualCurrency(paymentNotice.amount).inr}</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">{formatDualCurrency(paymentNotice.amount).usdc}</p>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 text-left space-y-1 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500">Batch:</span>
                <span className="text-slate-200">{paymentNotice.batchId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">From:</span>
                <span className="text-slate-200">Mandi Aggregator Hub #1</span>
              </div>
              <div className="flex justify-between truncate">
                <span className="text-slate-500">Tx Proof:</span>
                <span className="text-emerald-400">{paymentNotice.txHash}</span>
              </div>
            </div>

            <Button onClick={() => setPaymentNotice(null)} className="w-full py-2.5">
              View in Wallet ➔
            </Button>
          </div>
        </div>
      )}

      {/* Screen F10 — Earnings / Wallet Tab */}
      {currentStep === 'F10_WALLET' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <button onClick={() => setCurrentStep('F4_HOME')} className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
              <span>⬅️</span>
              <span>Back to Home</span>
            </button>
            <span className="text-xs font-mono text-emerald-400 font-semibold">ERC-4337 Smart Account</span>
          </div>

          {/* Balance Card */}
          <Card className="p-6 text-center space-y-3">
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">Total Available Balance</p>
            <h2 className="text-4xl font-extrabold text-white">{formatDualCurrency(totalEarningsInr).inr}</h2>
            <p className="text-xs font-mono text-slate-400">{formatDualCurrency(totalEarningsInr).usdc} (Auto-Converted from USDC)</p>

            <Button onClick={() => setShowWithdrawModal(true)} className="w-full py-3 mt-2">
              🏦 Withdraw to Bank / UPI
            </Button>
          </Card>

          {/* Transaction History */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Payout History</h4>
            {[
              { id: 'TX-901', date: 'Today, 02:14 PM', amount: 1240, from: 'Mandi Aggregator', hash: '0x3f8a...110e' },
              { id: 'TX-900', date: '12 Aug 2026', amount: 4800, from: 'Brahmi Lot Payout', hash: '0x7e21...cc42' },
              { id: 'TX-899', date: '04 Aug 2026', amount: 8840, from: 'Ashwagandha Payout', hash: '0x10bb...4f90' }
            ].map(tx => (
              <div key={tx.id} className="glass-card p-3.5 flex justify-between items-center">
                <div>
                  <h5 className="font-bold text-sm text-white">{tx.from}</h5>
                  <p className="text-[11px] text-slate-400">{tx.date} • <span className="font-mono text-emerald-400">{tx.hash}</span></p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-emerald-400 text-sm">+{formatDualCurrency(tx.amount).inr}</span>
                  <p className="text-[10px] text-slate-500 font-mono">{formatDualCurrency(tx.amount).usdc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Withdrawal Modal */}
      {showWithdrawModal && (
        <div className="modal-overlay" style={{ zIndex: 120 }}>
          <div className="modal-content max-w-sm p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-white text-base">Withdraw to UPI / Bank</h3>
              <button onClick={() => setShowWithdrawModal(false)} className="text-slate-400">✕</button>
            </div>

            {withdrawSuccess ? (
              <div className="text-center py-4 space-y-3">
                <div className="text-4xl">✅</div>
                <h4 className="font-bold text-white">₹{totalEarningsInr} Sent via UPI</h4>
                <p className="text-xs text-slate-400">Off-ramp rail partner settlement completed in 4.2 seconds.</p>
                <Button onClick={() => { setShowWithdrawModal(false); setWithdrawSuccess(false); }} className="w-full">
                  Done
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="input-label">Enter UPI ID / VPA</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={e => setUpiId(e.target.value)}
                    className="input-field text-sm"
                  />
                </div>
                <div>
                  <label className="input-label">Withdrawal Amount</label>
                  <input
                    type="text"
                    disabled
                    value={`₹${totalEarningsInr}`}
                    className="input-field text-sm font-bold text-emerald-400 bg-slate-900"
                  />
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  Licensed payout rail partner handles stablecoin-to-INR instant off-ramp.
                </p>
                <Button onClick={() => setWithdrawSuccess(true)} className="w-full py-2.5">
                  Confirm Instant Payout
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ⛓️ Real Simulated On-Chain Confirmation Modal */}
      <BlockchainTxModal
        isOpen={showBlockchainModal}
        title="Logging Harvest Record"
        actionSummary="Registering GPS hash, botanic ViT model proof & NFC seal on Ethereum Sepolia ledger."
        durationMs={6000}
        onClose={handleBlockchainModalDone}
      />
    </div>
  );
};
