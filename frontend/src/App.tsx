import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import MainLayout from './layouts/MainLayout';
import { Home, Collector, Aggregator, Lab, Manufacturer, Verify, Admin } from './pages';
import { LanguageProvider } from './context/LanguageContext';
import { PWAInstallBanner, OfflineToast } from './components/PWAInstallBanner';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        {/* Global PWA UI — works on all pages */}
        <OfflineToast />
        <PWAInstallBanner />

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="collector" element={<Collector />} />
            <Route path="aggregator" element={<Aggregator />} />
            <Route path="lab" element={<Lab />} />
            <Route path="manufacturer" element={<Manufacturer />} />
            <Route path="verify" element={<Verify />} />
            <Route path="verify/:id" element={<Verify />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
        <Analytics />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

