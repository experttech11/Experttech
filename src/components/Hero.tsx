import React from 'react';
import { Sun, ShieldCheck, ArrowRight, PhoneCall, CheckCircle2, Shield, Zap, Sparkles, Building2, Home, Store, School, Factory } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface HeroProps {
  onOpenQuoteModal: (defaultService?: string) => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onContactClick }) => {
  const targetAudience = [
    { label: 'Homes', icon: Home },
    { label: 'Shops', icon: Store },
    { label: 'Offices', icon: Building2 },
    { label: 'Schools', icon: School },
    { label: 'Industries', icon: Factory },
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Glow & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Certified Solar & HD CCTV Security Experts</span>
            </div>

            {/* Main Heading & Subheading (Exactly as requested) */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Expert <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-green-400">Technologies</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Reliable Solar &amp; CCTV Solutions for Homes and Businesses.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-normal max-w-xl mx-auto lg:mx-0">
                Reduce electricity bills up to 80% with high-performance solar power plants and protect your premises 24/7 with smart 4K CCTV security monitoring.
              </p>
            </div>

            {/* Target Audience Tags */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Tailored Solutions For:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {targetAudience.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span 
                      key={item.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium hover:border-blue-500/50 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-green-400" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Buttons (Exactly requested: Get a Quote and Contact Us) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-get-quote-btn"
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-contact-us-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-blue-400" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>Tier-1 MNRE Panels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>4K Night-Vision CCTV</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Full Warranty & AMC</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container for Solar + CCTV Split Image Showcase */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl shadow-blue-950/80 group">
                
                {/* Solar Image Top Half */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src="/src/assets/images/solar_installation_1785527524771.jpg"
                    alt="Solar System Rooftop Installation by Expert Technologies"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>Solar Energy Solutions</span>
                  </div>
                </div>

                {/* CCTV Image Bottom Half */}
                <div className="relative h-48 sm:h-56 overflow-hidden border-t border-slate-700/60">
                  <img
                    src="/src/assets/images/cctv_security_1785527538569.jpg"
                    alt="CCTV Camera Surveillance System by Expert Technologies"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-blue-500/40 text-blue-300 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>CCTV Surveillance</span>
                  </div>
                </div>

                {/* Floating Overlay Badge: Guaranteed Performance */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-base shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="font-semibold text-white">Save Up to 90% Power</div>
                      <div className="text-slate-400 text-[11px]">Clean Solar + 24/7 HD Security</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0"
                  >
                    Inquire Now
                  </button>
                </div>

              </div>

              {/* Decorative Corner Floating Stat Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">650+ Projects</div>
                  <div className="text-xs text-slate-500 font-medium">Solar & CCTV Installed</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
