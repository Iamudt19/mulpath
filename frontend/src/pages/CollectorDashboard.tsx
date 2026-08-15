import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { SpeechInput } from '../components/SpeechInput';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001';

export const CollectorDashboard = () => {
  const [activeTab, setActiveTab] = useState<'log' | 'history' | 'earnings'>('log');

  // Form State
  const [species, setSpecies] = useState('Ashwagandha');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean, msg: string } | null>(null);

  // GPS Coordinates State
  const [latVal, setLatVal] = useState('24.465');
  const [lngVal, setLngVal] = useState('74.869');
  const [gpsStatus, setGpsStatus] = useState<'idle' | 'fetching' | 'success' | 'error'>('idle');

  // Camera State
  const [useCamera, setUseCamera] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  // Earnings & Harvests State
  const [harvests, setHarvests] = useState<any[]>([]);
  const [earnings, setEarnings] = useState(0);

  const [loadingHistory, setLoadingHistory] = useState(true);
  const [errorHistory, setErrorHistory] = useState<string | null>(null);

  // Auto-fetch GPS on load
  useEffect(() => {
    fetchGpsLocation();
  }, []);

  const fetchGpsLocation = () => {
    if (navigator.geolocation) {
      setGpsStatus('fetching');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatVal(position.coords.latitude.toFixed(6));
          setLngVal(position.coords.longitude.toFixed(6));
          setGpsStatus('success');
        },
        (err) => {
          console.error("GPS error", err);
          setGpsStatus('error');
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
    } else {
      setGpsStatus('error');
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setCameraStream(stream);
      setUseCamera(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (err) {
      alert("Could not access camera. Please upload file instead.");
    }
  };

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setUseCamera(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `camera_capture_${Date.now()}.png`, { type: "image/png" });
            setPhoto(file);
            stopCamera();
          }
        }, 'image/png');
      }
    }
  };

  useEffect(() => {
    if (activeTab === 'history') fetchHarvests();
    if (activeTab === 'earnings') fetchEarnings();
  }, [activeTab]);

  const fetchHarvests = async () => {
    try {
      setLoadingHistory(true); setErrorHistory(null);
      const res = await fetch(`${API_BASE}/api/harvests/me`);
      if (res.ok) {
        const data = await res.json();
        setHarvests(data);
      } else throw new Error('Failed');
    } catch (e) {
      setErrorHistory('Could not connect to the server.');
    } finally {
      setLoadingHistory(false);
    }
  };

  const [loadingEarnings, setLoadingEarnings] = useState(true);
  const [errorEarnings, setErrorEarnings] = useState<string | null>(null);

  const fetchEarnings = async () => {
    try {
      setLoadingEarnings(true); setErrorEarnings(null);
      const res = await fetch(`${API_BASE}/api/earnings/me`);
      if (res.ok) {
        const data = await res.json();
        setEarnings(data.total);
      } else throw new Error('Failed');
    } catch (e) {
      setErrorEarnings('Could not load earnings.');
    } finally {
      setLoadingEarnings(false);
    }
  };

  const verifyOnChain = async (type: string, id: number) => {
    try {
      const res = await fetch(`${API_BASE}/api/blockchain-record/${type}/${id}`);
      if (res.ok) {
        const record = await res.json();
        const txUrl = record.txHash?.startsWith('http') 
          ? record.txHash 
          : `https://sepolia.etherscan.io/tx/${record.txHash}`;
        window.open(txUrl, '_blank');
      } else {
        alert('Record not yet verified on blockchain (Transaction might still be pending).');
      }
    } catch (e) {
      alert('Error fetching blockchain record.');
    }
  };

  const sendHarvestData = async () => {
    const parsedLat = parseFloat(latVal);
    const parsedLng = parseFloat(lngVal);

    const formData = new FormData();
    formData.append('species', species);
    formData.append('quantity', quantity);
    formData.append('notes', notes);
    formData.append('lat', isNaN(parsedLat) ? '24.465' : parsedLat.toString());
    formData.append('lng', isNaN(parsedLng) ? '74.869' : parsedLng.toString());
    if (photo) formData.append('photo', photo);

    try {
      const res = await fetch(`${API_BASE}/api/harvests`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitResult({ 
          success: true, 
          msg: `Harvest logged successfully! Zone Validated: ${data.batch.zoneValidated ? 'Yes ✅' : 'No ❌'}`
        });
        setQuantity('');
        setNotes('');
        setPhoto(null);
      } else {
        setSubmitResult({ success: false, msg: data.error || 'Failed to log harvest.' });
      }
    } catch (e) {
      setSubmitResult({ success: false, msg: 'Network error connecting to backend API.' });
    }
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    sendHarvestData();
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'COLLECTED': return 'collected';
      case 'AGGREGATED': return 'aggregated';
      case 'TESTED': return 'tested';
      case 'DISTRIBUTED': return 'distributed';
      default: return 'collected';
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24">
      {/* Premium Tab Bar */}
      <div className="tab-bar">
        <button onClick={() => setActiveTab('log')} className={`tab-item ${activeTab === 'log' ? 'active' : ''}`}>
          🌿 Log Harvest
        </button>
        <button onClick={() => setActiveTab('history')} className={`tab-item ${activeTab === 'history' ? 'active' : ''}`}>
          📋 My History
        </button>
        <button onClick={() => setActiveTab('earnings')} className={`tab-item ${activeTab === 'earnings' ? 'active' : ''}`}>
          💰 Earnings
        </button>
      </div>

      {/* Log Harvest Tab */}
      {activeTab === 'log' && (
        <Card title="Log New Harvest" className="animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col space-y-1">
              <label className="input-label">Species</label>
              <select 
                className="input-field"
                value={species} onChange={e => setSpecies(e.target.value)}
              >
                <option value="Ashwagandha">🌱 Ashwagandha</option>
                <option value="Tulsi">🍃 Tulsi</option>
                <option value="Brahmi">🌿 Brahmi</option>
                <option value="Neem">🌳 Neem</option>
              </select>
            </div>

            <SpeechInput 
              label="Quantity (kg)" 
              placeholder="e.g. 50" 
              type="text"
              value={quantity}
              onValueChange={setQuantity}
            />

            <div className="flex flex-col space-y-2">
              <label className="input-label">Photo Verification</label>
              
              {useCamera ? (
                <div className="space-y-3 border border-slate-200/60 rounded-xl p-4 bg-slate-50 flex flex-col items-center">
                  <video ref={videoRef} autoPlay playsInline className="w-full max-w-sm rounded-lg border border-slate-300 bg-black shadow-inner" style={{ transform: 'scaleX(-1)' }} />
                  <div className="flex gap-2">
                    <Button type="button" onClick={capturePhoto}>📸 Capture Frame</Button>
                    <Button type="button" variant="secondary" onClick={stopCamera}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={e => setPhoto(e.target.files ? e.target.files[0] : null)}
                    className="input-field file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-white/5 file:text-white hover:file:bg-white/10 file:cursor-pointer flex-1"
                  />
                  <Button type="button" variant="secondary" onClick={startCamera} className="whitespace-nowrap">📷 Live Camera</Button>
                </div>
              )}
              
              {photo && (
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-1 font-semibold">
                  ✅ {photo.name} ({Math.round(photo.size / 1024)} KB)
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="input-label">Latitude</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={latVal} 
                    onChange={e => setLatVal(e.target.value)} 
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="input-label">Longitude</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={lngVal} 
                    onChange={e => setLngVal(e.target.value)} 
                    required
                  />
                </div>
              </div>
              <button 
                type="button" 
                onClick={fetchGpsLocation}
                className="text-xs text-slate-300 font-semibold hover:underline mt-1 flex items-center gap-1.5"
              >
                🔄 {gpsStatus === 'fetching' ? '📡 Fetching Exact GPS coordinates...' : '📍 Refresh Geolocation fix'}
              </button>
            </div>

            <SpeechInput 
              label="Notes" 
              placeholder="Any details..." 
              value={notes}
              onValueChange={setNotes}
            />

            <Button type="submit" className="w-full py-3 text-base mt-2" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="spinner" style={{ width: 18, height: 18, borderWidth: 2 }}></span>
                  Capturing GPS & Saving...
                </span>
              ) : '🌿 Submit Harvest'}
            </Button>

            {submitResult && (
              <div className={submitResult.success ? 'alert-success' : 'alert-error'}>
                {submitResult.msg}
              </div>
            )}
          </form>
        </Card>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          {loadingHistory && (
            <div className="flex justify-center items-center py-16">
              <div className="spinner"></div>
            </div>
          )}
          {errorHistory && (
            <div className="alert-error text-center">
              <p>{errorHistory}</p>
              <Button variant="secondary" onClick={fetchHarvests} className="mt-3">Retry</Button>
            </div>
          )}
          {!loadingHistory && !errorHistory && harvests.length === 0 && (
            <div className="empty-state">
              <div className="empty-state-icon">🌱</div>
              <p className="empty-state-title">No harvests yet.</p>
              <p className="empty-state-subtitle">Log your first harvest to see it here.</p>
            </div>
          )}
          {!loadingHistory && !errorHistory && harvests.map((h, i) => (
            <Card key={h.id} className={`relative animate-fade-in-up stagger-${Math.min(i + 1, 5)}`}>
              <div className="absolute top-4 right-4">
                <span className={`status-badge ${getStatusClass(h.status)}`}>
                  {h.status}
                </span>
              </div>
              <h4 className="font-bold text-lg text-slate-800">{h.herbName}</h4>
              <p className="text-sm text-slate-500 mt-1">{h.quantityKg} kg • {new Date(h.harvestDate).toLocaleDateString()}</p>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4 mb-4">
                <div className="space-y-1">
                  <p className="text-sm text-slate-400">
                    Zone Validated: {h.zoneValidated 
                      ? <span className="text-white font-semibold">✅ Yes</span> 
                      : <span className="text-red-500 font-semibold">❌ No</span>}
                  </p>
                  {h.aiConfidence !== null && h.aiConfidence !== undefined && (
                    <p className="text-sm text-slate-400">
                      AI Species: <span className="font-semibold text-white">{h.aiConfidence}%</span>
                      {h.aiFlagged ? ' ⚠️ Review' : ' ✅'}
                    </p>
                  )}
                </div>
                <button 
                  onClick={() => verifyOnChain('HerbBatch', h.id)}
                  className="btn-chain"
                >
                  🔗 Verify On-Chain
                </button>
              </div>
              
              {h.latitude && h.longitude && (
                <div className="h-32 w-full rounded-xl overflow-hidden border border-white/10">
                  <MapContainer center={[h.latitude, h.longitude]} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false} dragging={false}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[h.latitude, h.longitude]}>
                      <Popup>{h.herbName}</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Earnings Tab */}
      {activeTab === 'earnings' && (
        <Card title="My Earnings" className="animate-fade-in-up">
          {loadingEarnings ? (
            <div className="flex justify-center items-center py-16">
              <div className="spinner"></div>
            </div>
          ) : errorEarnings ? (
            <div className="alert-error text-center">
              <p>{errorEarnings}</p>
              <Button variant="secondary" onClick={fetchEarnings} className="mt-3">Retry</Button>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-3">Total Earned</p>
              <p className="text-5xl font-extrabold text-white">₹{earnings}</p>
              {earnings === 0 && (
                <p className="text-slate-400 text-sm mt-6">Payments will appear here once processed by aggregators.</p>
              )}
            </div>
          )}
        </Card>
      )}
    </div>
  );
};
