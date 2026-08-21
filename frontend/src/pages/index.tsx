import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Home = () => {
  const navigate = useNavigate();

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [inquiryType, setInquiryType] = useState('brand');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      alert('Thank you! Our integration team will contact you within 24 hours.');
    }, 1500);
  };

  const faqs = [
    {
      q: 'How does the AI verify the botanical species in the field?',
      a: 'Collectors take a photo of the fresh plant through the Mūlpath app. The app runs an on-device Vision Transformer (ViT) classification model. It checks details like leaf vein structures, margins, and root node clusters to confirm species (e.g., Ashwagandha) and filters out roadside weeds.'
    },
    {
      q: 'Why is blockchain required for lab purity reports?',
      a: 'Paper lab certificates are easily edited or forged by bad actors. Mūlpath directly integrates with laboratory HPLC (chromatography) equipment via API. The machine calculates the chemical purity and uploads a PDF report along with its unique SHA-256 digital fingerprint directly to the blockchain. If anyone edits the PDF report later, the hash fails, invalidating the product.'
    },
    {
      q: 'How are farmer payouts tracked and verified?',
      a: 'Every time an aggregator receives a batch, they transfer stablecoins or digital INR to the farmer\'s Smart Wallet (ERC-4337). This transaction is logged on-chain. When a consumer scans the QR code, Mūlpath computes the final consumer price against the farmer payment receipts to show the exact Fair-Trade percentage.'
    },
    {
      q: 'What network is Mūlpath deployed on?',
      a: 'For this demonstration, our smart contracts are deployed on the Ethereum Sepolia Testnet. In production, we deploy on low-cost Layer 2 sidechains like Polygon PoS or Base to keep transaction costs under ₹0.50 (less than 1 Paisa per retail bottle).'
    }
  ];

  return (
    <div className="space-y-20 pb-20 max-w-6xl mx-auto px-4">
      {/* Floating Glassmorphic Hero Layout */}
      <div className="space-y-6 mt-4">
        {/* Div 1: Logo & Protocol Badge */}
        <div className="glass-card max-w-sm mx-auto p-4 flex flex-col items-center gap-3 text-center animate-fade-in-up">
          <img src="/logo.jpg" alt="Mūlpath Logo" className="h-12 rounded-xl shadow-lg border border-white/10" />
          <span className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-[10px] font-bold tracking-widest border border-white/10 uppercase flex items-center gap-1.5">
            ✨ Botanical Authenticity Protocol
          </span>
        </div>

        {/* Div 2: Main Copy Panel */}
        <div className="glass-card max-w-3xl mx-auto p-8 md:p-12 text-center space-y-5 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Restoring Absolute Trust in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Ayurveda</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Traditional organic labels are easily forged. Mūlpath secures the botanical supply chain from forest floor to retail shelf using on-device Vision AI, GPS Geofencing, and immutable Smart Contracts.
          </p>
        </div>

        {/* Div 3: Primary CTA — Get Started as Collector */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up">
          {/* Main hero CTA */}
          <button
            onClick={() => navigate('/collector')}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white overflow-hidden shadow-2xl shadow-emerald-900/40 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
            }}
          >
            {/* Shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="text-xl">👨🏽‍🌾</span>
            <span>Get Started — Collector Field Portal</span>
            <span className="text-lg opacity-80 group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Caption */}
          <p className="text-[11px] text-slate-500 font-sans flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            Field harvest logging · GPS verification · AI species detection · Blockchain recording
          </p>

          {/* Secondary actions */}
          <div className="glass-card max-w-md w-full p-3 flex justify-center gap-3">
            <Button onClick={() => navigate('/verify')} className="px-5 py-2.5 font-bold text-xs">✨ Verify a Product</Button>
            <Button variant="secondary" onClick={() => {
              const el = document.getElementById('portals');
              el?.scrollIntoView({ behavior: 'smooth' });
            }} className="px-5 py-2.5 font-semibold text-xs">Explore All Portals</Button>
          </div>
        </div>

      </div>

      {/* Trust Stats Ticker Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up stagger-1">
        <div className="glass-card p-6 text-center shadow-sm">
          <p className="text-3xl font-extrabold text-white">24,582</p>
          <p className="text-xs font-semibold text-slate-400 uppercase mt-1 tracking-wider">kg Botanical Roots Tracked</p>
        </div>
        <div className="glass-card p-6 text-center shadow-sm">
          <p className="text-3xl font-extrabold text-white">99.82%</p>
          <p className="text-xs font-semibold text-slate-400 uppercase mt-1 tracking-wider">AI Species Accuracy</p>
        </div>
        <div className="glass-card p-6 text-center shadow-sm">
          <p className="text-3xl font-extrabold text-white">1,248</p>
          <p className="text-xs font-semibold text-slate-400 uppercase mt-1 tracking-wider">Immutable Blockchain Logs</p>
        </div>
        <div className="glass-card p-6 text-center shadow-sm">
          <p className="text-3xl font-extrabold text-white">₹4.2M</p>
          <p className="text-xs font-semibold text-slate-400 uppercase mt-1 tracking-wider">Direct Payouts Verified</p>
        </div>
      </section>

      {/* How it Works / 3 Steps */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">How Mūlpath Works</h2>
          <p className="text-slate-400 mt-2 text-sm max-w-md mx-auto">Connecting forest collectors to conscious consumers through open cryptographic networks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 -z-10 -translate-y-8" />

          {/* Step 1 */}
          <div className="glass-card p-8 text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-white/5 text-white border border-white/10 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-inner">🌿</div>
            <h3 className="text-lg font-bold text-slate-200">1. Collect & Geofence</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Collectors log harvests directly in the field. <strong>GPS Geofencing</strong> validates organic sourcing zones, while <strong>Vision AI</strong> checks species purity to eliminate cheap weed adulteration.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card p-8 text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-white/5 text-white border border-white/10 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-inner">🔬</div>
            <h3 className="text-lg font-bold text-slate-200">2. HPLC Lab Testing</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Quality Labs test active compounds (Withanolides) on HPLC machinery. PDF test sheets and metrics are anchored directly to the <strong>Sepolia Ledger</strong> via secure APIs, locking the batch details.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="glass-card p-8 text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-white/5 text-white border border-white/10 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-inner">🛡️</div>
            <h3 className="text-lg font-bold text-slate-200">3. Purchase Trust</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Manufacturers serialize individual retail bottles with unique QR codes. When scanned, shoppers see the entire verified timeline, laboratory chromatography logs, and direct farmer payout rates.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Portals */}
      <section id="portals" className="glass-card py-12 px-6 md:px-12 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Stakeholder Portals</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">Select a stakeholder dashboard from the menu at the top right to access your role-specific supply chain portal.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-left space-y-3">
            <span className="text-3xl block">👨🏽‍🌾</span>
            <span className="font-bold text-base text-slate-200 block">Collector</span>
            <span className="text-xs text-slate-400 leading-tight block">Field app to capture camera snaps, GPS coordinates, and log fresh harvests.</span>
          </div>
          
          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-left space-y-3">
            <span className="text-3xl block">🏭</span>
            <span className="font-bold text-base text-slate-200 block">Aggregator</span>
            <span className="text-xs text-slate-400 leading-tight block">Receive bags, trigger payments, log drying/grinding steps, and merge lots.</span>
          </div>

          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-left space-y-3">
            <span className="text-3xl block">🧪</span>
            <span className="font-bold text-base text-slate-200 block">Quality Lab</span>
            <span className="text-xs text-slate-400 leading-tight block">Test active compound potency (Withanolides) and upload secure HPLC logs.</span>
          </div>

          <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-left space-y-3">
            <span className="text-3xl block">💊</span>
            <span className="font-bold text-base text-slate-200 block">Manufacturer</span>
            <span className="text-xs text-slate-400 leading-tight block">Verify raw lots on-chain, formulate products, and serialize retail QR labels.</span>
          </div>
        </div>
      </section>

      {/* Interactive FAQ / Knowledge Accordion */}
      <section className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm">Everything you need to know about Mūlpath supply chain mechanics.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-xl glass-card overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-200 hover:bg-white/5 transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform text-lg ${openFaq === idx ? 'rotate-180 text-white' : 'text-slate-400'}`}>▼</span>
              </button>
              {openFaq === idx && (
                <div className="p-5 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 bg-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Partner Form */}
      <section className="max-w-xl mx-auto">
        <Card title="📩 Get in Touch / Request Pilot">
          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <div>
              <label className="input-label">I am a...</label>
              <select 
                value={inquiryType} 
                onChange={e => setInquiryType(e.target.value)}
                className="input-field"
              >
                <option value="brand">💊 Supplement Brand / Manufacturer</option>
                <option value="supplier">🏭 Raw Herb Aggregator</option>
                <option value="investor">💼 Investor / Partner</option>
                <option value="academic">🔬 Researcher / Botanist</option>
              </select>
            </div>
            <div>
              <label className="input-label">Full Name</label>
              <input 
                type="text" 
                className="input-field" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
                placeholder="Rama Rao" 
              />
            </div>
            <div>
              <label className="input-label">Business Email</label>
              <input 
                type="email" 
                className="input-field" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                placeholder="rama@organicayush.com" 
              />
            </div>
            <div>
              <label className="input-label">Inquiry Details</label>
              <textarea 
                className="input-field" 
                rows={3} 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                required 
                placeholder="Tell us about your brand volume or testing requirements..."
              />
            </div>
            <Button type="submit" className="w-full py-3" disabled={submitted}>
              {submitted ? 'Sending Inquiry...' : 'Submit Inquiry'}
            </Button>
          </form>
        </Card>
      </section>

      {/* Professional Footer */}
      <footer className="border-t border-slate-200 pt-8 text-center space-y-3">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Mūlpath Inc. All rights reserved. Deployed on Ethereum Sepolia Testnet.
        </p>
        <div className="flex justify-center gap-6 text-xs font-semibold text-emerald-600">
          <a href="#" onClick={e => e.preventDefault()} className="hover:underline">Privacy Policy</a>
          <a href="#" onClick={e => e.preventDefault()} className="hover:underline">Terms of Service</a>
          <a href="https://sepolia.etherscan.io/" target="_blank" rel="noreferrer" className="hover:underline">Sepolia Explorer</a>
        </div>
      </footer>
    </div>
  );
};

export { CollectorDashboard as Collector } from './CollectorDashboard';
export { AggregatorDashboard as Aggregator } from './AggregatorDashboard';
export { LabDashboard as Lab } from './LabDashboard';
export { ManufacturerDashboard as Manufacturer } from './ManufacturerDashboard';
export { VerifyPage as Verify } from './Verify';
export { AdminDashboard as Admin } from './AdminDashboard';
