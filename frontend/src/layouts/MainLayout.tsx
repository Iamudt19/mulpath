import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { ReviewQueueModal } from '../components/ReviewQueueModal';
import { AuthModal, type StakeholderRole } from '../components/AuthModal';

const navItems = [
  { path: '/', label: 'Overview', icon: '🏠' },
  { path: '/collector', label: 'Collector', icon: '🌿', role: 'COLLECTOR' },
  { path: '/aggregator', label: 'Aggregator', icon: '🏭', role: 'AGGREGATOR' },
  { path: '/lab', label: 'Quality Lab', icon: '🧪', role: 'LAB' },
  { path: '/manufacturer', label: 'Manufacturer', icon: '💊', role: 'MANUFACTURER' },
  { path: '/verify', label: 'Verify Bottle', icon: '🔍', role: 'CONSUMER' },
  { path: '/admin', label: 'Admin Ops', icon: '🛡️', role: 'ADMIN' },
];

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showReviewQueue, setShowReviewQueue] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authRoleTarget, setAuthRoleTarget] = useState<StakeholderRole>('COLLECTOR');

  // Multi-tenant authenticated user state from localStorage
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [activeRole, setActiveRole] = useState<string>('GUEST');

  useEffect(() => {
    const syncUser = () => {
      try {
        const u = localStorage.getItem('mulpath_user');
        const r = localStorage.getItem('mulpath_role');
        if (u) setCurrentUser(JSON.parse(u));
        if (r) setActiveRole(r);
      } catch (e) { /* ignore */ }
    };
    syncUser();
    window.addEventListener('storage', syncUser);
    return () => window.removeEventListener('storage', syncUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('mulpath_token');
    localStorage.removeItem('mulpath_user');
    localStorage.removeItem('mulpath_role');
    setCurrentUser(null);
    setActiveRole('GUEST');
    navigate('/');
  };

  const openAuth = (role: StakeholderRole = 'COLLECTOR') => {
    setAuthRoleTarget(role);
    setShowAuthModal(true);
    setMobileMenuOpen(false);
  };

  const handleAuthSuccess = (role: StakeholderRole, user: any) => {
    setCurrentUser(user);
    setActiveRole(role);
    if (role === 'COLLECTOR') navigate('/collector');
    else if (role === 'AGGREGATOR') navigate('/aggregator');
    else if (role === 'LAB') navigate('/lab');
    else if (role === 'MANUFACTURER') navigate('/manufacturer');
    else if (role === 'ADMIN') navigate('/admin');
    else if (role === 'CONSUMER') navigate('/verify');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 relative flex flex-col selection:bg-emerald-500 selection:text-black">
      
      {/* 🌐 Interactive Background Globe Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
        <iframe
          src={currentPath === '/' ? '/hero-globe/index.html' : '/normal-globe/index.html'}
          title="Interactive Background Globe"
          className="w-full h-full border-none pointer-events-auto"
          scrolling="no"
        />
      </div>

      {/* ── Top Floating Glassmorphic Navigation Bar ── */}
      <header className="sticky top-0 z-40 w-full bg-[#050505]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          
          {/* Logo & Protocol Live Pulse */}
          <div className="flex items-center gap-3.5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 to-white/5 p-0.5 border border-white/20 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="Mūlpath"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-black tracking-wider text-white group-hover:text-emerald-300 transition">
                    MŪLPATH
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-white/10 text-white border border-white/15">
                    PROD
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:inline">
                  Botanical Provenance Protocol
                </span>
              </div>
            </Link>

            {/* Sepolia Pulse */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-white/10 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Sepolia Testnet</span>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-white/15 text-white shadow-inner border border-white/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Ribbon: Profile / Sign-in / Review Queue */}
          <div className="flex items-center gap-2.5">
            {/* Ops Review Queue Counter */}
            <button
              onClick={() => setShowReviewQueue(true)}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
              title="Ops Human Review Queue for anti-fraud exceptions"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="hidden sm:inline">Review Queue</span>
            </button>

            {/* Authenticated Stakeholder Pill or Gateway Button */}
            {currentUser && activeRole !== 'GUEST' ? (
              <div className="flex items-center gap-2 bg-slate-900/90 border border-white/15 p-1.5 pl-3 rounded-2xl shadow-md">
                <div className="text-left hidden sm:block">
                  <p className="text-[11px] font-bold text-white leading-none">
                    {currentUser.name || 'Stakeholder'}
                  </p>
                  <p className="text-[9px] text-emerald-400 font-mono mt-0.5">
                    {activeRole} · ₹{currentUser.walletBalance || 0}
                  </p>
                </div>
                <button
                  onClick={() => openAuth(activeRole as StakeholderRole)}
                  className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition"
                  title="Switch Stakeholder Role"
                >
                  Switch 🔄
                </button>
                <button
                  onClick={handleLogout}
                  className="px-2 py-1 bg-red-950/40 hover:bg-red-900/60 text-red-300 rounded-xl text-xs font-semibold transition"
                  title="Logout"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => openAuth('COLLECTOR')}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-1.5 transform active:scale-95"
              >
                <span>⚡ Access Portals</span>
                <span>➔</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 border border-white/10 text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* ── Mobile Nav Dropdown ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-white/10 px-4 py-4 space-y-2 backdrop-blur-2xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-sm font-semibold text-white transition"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
              <button
                onClick={() => openAuth('COLLECTOR')}
                className="w-full py-2.5 bg-emerald-500 text-slate-950 rounded-xl font-bold text-xs text-center"
              >
                ⚡ Open Role Gateway & Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Main Content Container ── */}
      <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      {/* ── Minimalist Clean Footer ── */}
      <footer className="relative z-10 border-t border-white/5 py-6 text-center text-xs text-slate-500 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Mūlpath Protocol. Decentralized Botanical Traceability & Fair-Trade Settlement.</p>
          <div className="flex gap-4 font-mono text-[11px] text-slate-400">
            <a href="https://sepolia.etherscan.io/address/0xa5c3D7BB4C52Ed17dCF5De132e01141b3cD0295D" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
              Sepolia Contract ↗
            </a>
            <a href="/verify" className="hover:text-emerald-400">Public Consumer Audit ↗</a>
          </div>
        </div>
      </footer>

      {/* Cross-Cutting Modals */}
      <ReviewQueueModal
        isOpen={showReviewQueue}
        onClose={() => setShowReviewQueue(false)}
      />

      <AuthModal
        isOpen={showAuthModal}
        initialRole={authRoleTarget}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
