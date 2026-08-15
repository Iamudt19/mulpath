import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/collector', label: 'Collector', icon: '🌿' },
  { path: '/aggregator', label: 'Aggregator', icon: '🏭' },
  { path: '/lab', label: 'Lab', icon: '🧪' },
  { path: '/manufacturer', label: 'Manufacturer', icon: '💊' },
  { path: '/verify', label: 'Verify', icon: '🛡️' },
];

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/collector': 'Collector Dashboard',
  '/aggregator': 'Aggregator Dashboard',
  '/lab': 'Quality Lab',
  '/manufacturer': 'Manufacturer Portal',
  '/verify': 'Chain Verification',
};

type Role = 'ALL' | 'COLLECTOR' | 'AGGREGATOR' | 'LAB' | 'MANUFACTURER' | 'CONSUMER';

export default function MainLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeRole, setActiveRole] = useState<Role>('ALL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getPageTitle = () => {
    if (currentPath.startsWith('/verify/')) return 'Chain Verification';
    return pageTitles[currentPath] || 'Dashboard';
  };

  const filteredNavItems = navItems.filter(item => {
    if (activeRole === 'ALL') return true;
    if (item.path === '/' || item.path.startsWith('/verify')) return true;
    if (activeRole === 'COLLECTOR' && item.path === '/collector') return true;
    if (activeRole === 'AGGREGATOR' && item.path === '/aggregator') return true;
    if (activeRole === 'LAB' && item.path === '/lab') return true;
    if (activeRole === 'MANUFACTURER' && item.path === '/manufacturer') return true;
    return false;
  });

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
          {filteredNavItems.map((item) => {
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
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Network</p>
            <p style={{ fontSize: '13px', color: '#f8fafc', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 6px rgba(255,255,255,0.6)', flexShrink: 0 }}></span>
              Sepolia Testnet
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

          <div className="ml-auto flex items-center gap-2" style={{ pointerEvents: 'auto' }}>
            <span className="text-xs font-semibold text-slate-400 hidden-mobile">View As:</span>
            <select
              value={activeRole}
              onChange={e => setActiveRole(e.target.value as Role)}
              className="role-select"
            >
              <option value="ALL">👑 Demo Mode</option>
              <option value="COLLECTOR">👨🏽‍🌾 Collector</option>
              <option value="AGGREGATOR">🏭 Aggregator</option>
              <option value="LAB">🧪 Lab</option>
              <option value="MANUFACTURER">💊 Manufacturer</option>
              <option value="CONSUMER">🛡️ Consumer</option>
            </select>
          </div>
        </header>

        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
