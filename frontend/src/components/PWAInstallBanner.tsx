import React, { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWAInstallBanner: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [updateReady, setUpdateReady] = useState(false);
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem('pwa-banner-dismissed') === 'true'
  );

  useEffect(() => {
    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      if (!dismissed) setShowBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // App already installed
    window.addEventListener('appinstalled', () => {
      setInstalled(true);
      setShowBanner(false);
    });

    // Check if running as standalone (already installed)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
    }

    // Service worker update available
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(reg => {
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker?.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateReady(true);
            }
          });
        });
      });
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, [dismissed]);

  const handleInstall = async () => {
    if (!installPrompt) return;
    setInstalling(true);
    try {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstalled(true);
        setShowBanner(false);
      }
    } finally {
      setInstalling(false);
      setInstallPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setDismissed(true);
    localStorage.setItem('pwa-banner-dismissed', 'true');
  };

  const handleUpdate = () => {
    window.location.reload();
  };

  // Update notification
  if (updateReady) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 animate-fade-in-up">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/95 border border-emerald-500/50 shadow-2xl shadow-emerald-900/40 backdrop-blur-xl">
          <span className="text-2xl flex-shrink-0">🔄</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white font-sans">Update Available</p>
            <p className="text-[11px] text-emerald-300 font-sans">New version of Mūlpath is ready</p>
          </div>
          <button
            onClick={handleUpdate}
            className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold font-sans transition flex-shrink-0"
          >
            Update
          </button>
        </div>
      </div>
    );
  }

  // Install banner
  if (!showBanner || installed || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4 animate-fade-in-up">
      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-900/30 backdrop-blur-xl"
        style={{ background: 'linear-gradient(135deg, rgba(5,5,5,0.98) 0%, rgba(5,40,20,0.98) 100%)' }}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

        <div className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-emerald-500/20 flex-shrink-0">
              <img src="/pwa-192.png" alt="Mūlpath" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white font-sans leading-tight">Install Mūlpath</p>
              <p className="text-[11px] text-slate-400 font-sans mt-0.5 leading-relaxed">
                Add to home screen — works offline, no internet needed in the field
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="text-slate-600 hover:text-slate-300 text-lg leading-none flex-shrink-0 transition"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-1.5">
            {['🔌 Works Offline', '📸 Camera Access', '📍 GPS', '⛓️ Blockchain', '🌿 AI Plant ID'].map(feat => (
              <span key={feat} className="text-[10px] font-sans bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                {feat}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleInstall}
            disabled={installing}
            className="w-full py-3 rounded-xl font-bold text-sm text-white font-sans transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}
          >
            {installing ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Installing…</span>
              </>
            ) : (
              <>
                <span>📲</span>
                <span>Add to Home Screen</span>
              </>
            )}
          </button>

          <p className="text-center text-[10px] text-slate-600 font-sans">
            Free • No app store required • Works on Android & iOS
          </p>
        </div>
      </div>
    </div>
  );
};

// Hook to expose online/offline status app-wide
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const on = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); };
  }, []);

  return isOnline;
};

// Offline toast banner (shows when network is lost)
export const OfflineToast: React.FC = () => {
  const isOnline = useNetworkStatus();
  const [wasOffline, setWasOffline] = useState(false);
  const [showBackOnline, setShowBackOnline] = useState(false);

  useEffect(() => {
    if (!isOnline) setWasOffline(true);
    if (isOnline && wasOffline) {
      setShowBackOnline(true);
      setTimeout(() => setShowBackOnline(false), 3000);
    }
  }, [isOnline, wasOffline]);

  if (showBackOnline) {
    return (
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 text-black font-bold text-xs shadow-xl font-sans">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          Back online — syncing data…
        </div>
      </div>
    );
  }

  if (!isOnline) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-amber-500/95 text-black font-bold text-xs font-sans">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          Offline — AI plant identification still works · Harvest data queued for sync
        </div>
      </div>
    );
  }

  return null;
};
