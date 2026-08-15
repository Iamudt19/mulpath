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

  return (
    <div className="flex h-screen overflow-hidden relative" style={{ pointerEvents: 'none' }}>
      {/* 🌐 Interactive Spinning Globe / Particle Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.28,
        mixBlendMode: 'screen'
      }}>
        <iframe 
          src={currentPath === '/' ? "/hero-globe/index.html" : "/normal-globe/index.html"} 
          title="Interactive Background Globe"
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none', 
            pointerEvents: 'auto',
            transform: currentPath === '/' ? 'none' : 'scale(1.35)',
            transformOrigin: 'center center'
          }} 
          scrolling="no" 
        />
      </div>

      {/* Sidebar */}
      <aside className="sidebar" style={{ zIndex: 10, pointerEvents: 'auto' }}>
        <div className="sidebar-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '16px 20px' }}>
          <img src="/logo.jpg" alt="Mūlpath Logo" style={{ width: '100%', maxWidth: '140px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
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
              >
                <span className="sidebar-link-icon">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ 
            padding: '12px 14px', 
            background: 'rgba(255, 255, 255, 0.04)', 
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600, marginBottom: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Network
            </p>
            <p style={{ fontSize: '13px', color: '#f8fafc', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 6px rgba(255,255,255,0.6)' }}></span>
              Sepolia Testnet
            </p>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden" style={{ zIndex: 10, pointerEvents: 'none' }}>
        <header className="app-header" style={{ pointerEvents: 'auto' }}>
          <h1 className="app-header-title">{getPageTitle()}</h1>
          <span className="app-header-breadcrumb">{currentPath === '/' ? 'Home' : currentPath.slice(1).split('/')[0]}</span>
          
          {/* Persona / Role Selector */}
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">View As:</span>
            <select 
              value={activeRole} 
              onChange={e => setActiveRole(e.target.value as Role)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer hover:border-slate-300 transition-colors"
            >
              <option value="ALL">👑 Demo Mode (All Portals)</option>
              <option value="COLLECTOR">👨🏽‍🌾 Collector / Farmer</option>
              <option value="AGGREGATOR">🏭 Aggregator</option>
              <option value="LAB">🧪 Quality Lab</option>
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
