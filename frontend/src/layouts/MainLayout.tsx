import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { ReviewQueueModal } from '../components/ReviewQueueModal';
import { AuthModal, type UserRole } from '../components/AuthModal';
import { useLanguage, LANGUAGES } from '../context/LanguageContext';

const navItems = [
  { path: '/', key: 'nav.home', defaultLabel: 'Home', icon: '🏠' },
  { path: '/collector', key: 'nav.collector', defaultLabel: 'Collector', icon: '🌿' },
  { path: '/aggregator', key: 'nav.aggregator', defaultLabel: 'Aggregator', icon: '🏭' },
  { path: '/lab', key: 'nav.lab', defaultLabel: 'Quality Lab', icon: '🧪' },
  { path: '/manufacturer', key: 'nav.manufacturer', defaultLabel: 'Manufacturer', icon: '💊' },
  { path: '/verify', key: 'nav.verify', defaultLabel: 'Verify', icon: '🔍' },
  { path: '/admin', key: 'nav.admin', defaultLabel: 'Admin & Ops', icon: '🛡️' },
];

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showReviewQueue, setShowReviewQueue] = useState(false);

  // Auth State
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [targetAuthRole, setTargetAuthRole] = useState<UserRole>('COLLECTOR');

  const loadUser = () => {
    try {
      const stored = localStorage.getItem('mulpath_user');
      if (stored) {
        setCurrentUser(JSON.parse(stored));
      } else {
        setCurrentUser(null);
      }
    } catch (e) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    loadUser();
    window.addEventListener('auth-change', loadUser);
    window.addEventListener('storage', loadUser);
    return () => {
      window.removeEventListener('auth-change', loadUser);
      window.removeEventListener('storage', loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('mulpath_token');
    localStorage.removeItem('mulpath_user');
    setCurrentUser(null);
    window.dispatchEvent(new Event('auth-change'));
  };

  const openLoginFor = (role: UserRole) => {
    setTargetAuthRole(role);
    setAuthModalOpen(true);
  };

  const getPageTitle = () => {
    if (currentPath.startsWith('/verify')) return t('title.verify', 'Chain Verification');
    if (currentPath.startsWith('/collector')) return t('title.collector', 'Collector Field Portal');
    if (currentPath.startsWith('/aggregator')) return t('title.aggregator', 'Aggregator Mandi Hub');
    if (currentPath.startsWith('/lab')) return t('title.lab', 'Quality Lab');
    if (currentPath.startsWith('/manufacturer')) return t('title.manufacturer', 'Manufacturer Portal');
    if (currentPath.startsWith('/admin')) return t('title.admin', 'Protocol Operations & Admin');
    return t('title.home', 'Overview');
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="app-root" style={{ pointerEvents: 'none' }}>

      {/* 🌐 Interactive Background Animation */}
      <div className="bg-animation-layer">
        <iframe
          src={currentPath === '/' ? '/hero-globe/index.html' : '/normal-globe/index.html'}
          title="Interactive Background Globe"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            pointerEvents: 'auto',
            touchAction: 'none',
            transform: currentPath === '/' ? 'none' : 'scale(1.35)',
            transformOrigin: 'center center',
          }}
          scrolling="no"
        />
      </div>

      {/* ── Mobile overlay backdrop ── */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMobileMenu}
          style={{ pointerEvents: 'auto' }}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`sidebar ${mobileMenuOpen ? 'sidebar-open' : ''}`}
        style={{ zIndex: 30, pointerEvents: 'auto' }}
      >
        <div className="sidebar-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '16px 20px' }}>
          <img
            src="/logo.jpg"
            alt="Mūlpath Logo"
            style={{ width: '100%', maxWidth: '140px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <span className="sidebar-logo-badge" style={{ marginTop: '2px' }}>BETA</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const isActive = item.path === '/'
              ? currentPath === '/'
              : currentPath.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="sidebar-link-icon">{item.icon}</span>
                <span>{t(item.key, item.defaultLabel)}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {t('nav.network', 'Network')}
            </p>
            <p style={{ fontSize: '13px', color: '#f8fafc', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 6px rgba(255,255,255,0.6)', flexShrink: 0 }}></span>
              {t('nav.sepolia', 'Sepolia Testnet')}
            </p>
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="app-main" style={{ pointerEvents: 'none' }}>
        <header className="app-header" style={{ pointerEvents: 'auto' }}>
          {/* Hamburger button — mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <h1 className="app-header-title">{getPageTitle()}</h1>
          <span className="app-header-breadcrumb hidden-mobile">{currentPath === '/' ? 'Home' : currentPath.slice(1).split('/')[0]}</span>

          <div className="ml-auto flex items-center gap-2.5" style={{ pointerEvents: 'auto' }}>
            {/* Global Language Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-700/80 rounded-xl px-2.5 py-1 text-xs shadow-inner">
              <span className="text-sm">🌐</span>
              <select
                value={language}
                onChange={e => setLanguage(e.target.value as any)}
                className="bg-transparent text-white font-semibold text-xs outline-none cursor-pointer pr-1"
                aria-label="Select Language"
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code} className="bg-slate-900 text-white">
                    {l.flag} {l.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setShowReviewQueue(true)}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 px-2.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
              title="Ops Human Review Queue for anti-fraud exceptions"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="hidden sm:inline">{t('nav.review_queue', 'Review Queue')}</span>
            </button>

            {/* Stakeholder Profile or Login Button */}
            {currentUser ? (
              <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 rounded-xl px-2.5 py-1.5 text-xs">
                <span className="text-sm">
                  {currentUser.role === 'COLLECTOR' ? '🌿' : currentUser.role === 'AGGREGATOR' ? '🏭' : currentUser.role === 'LAB' ? '🧪' : currentUser.role === 'MANUFACTURER' ? '💊' : '🛡️'}
                </span>
                <div className="hidden sm:block text-left leading-none space-y-0.5">
                  <p className="font-bold text-white text-[11px] truncate max-w-[120px]">{currentUser.name}</p>
                  <p className="text-[9px] text-emerald-400 font-mono font-semibold">{currentUser.role}</p>
                </div>
                <button
                  onClick={() => openLoginFor((currentUser.role as UserRole) || 'COLLECTOR')}
                  className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded-lg border border-slate-700 font-semibold transition ml-1"
                  title="Switch Active Stakeholder"
                >
                  {t('nav.switch', 'Switch')}
                </button>
                <button
                  onClick={handleLogout}
                  className="text-[10px] text-red-400 hover:text-red-300 font-bold px-1 transition"
                  title="Logout"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => openLoginFor('COLLECTOR')}
                className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm"
              >
                <span>🔑</span>
                <span>{t('nav.login', 'Stakeholder Login')}</span>
              </button>
            )}
          </div>
        </header>

        <div className="main-content">
          <Outlet />
        </div>
      </main>

      {/* Unified Role Gateway Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        initialRole={targetAuthRole}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(user) => {
          setAuthModalOpen(false);
          loadUser();
          if (user.role === 'COLLECTOR') navigate('/collector');
          else if (user.role === 'AGGREGATOR') navigate('/aggregator');
          else if (user.role === 'LAB') navigate('/lab');
          else if (user.role === 'MANUFACTURER') navigate('/manufacturer');
          else if (user.role === 'ADMIN') navigate('/admin');
        }}
      />

      {/* Cross-Cutting Ops Review Queue Modal */}
      <ReviewQueueModal
        isOpen={showReviewQueue}
        onClose={() => setShowReviewQueue(false)}
      />
    </div>
  );
}
