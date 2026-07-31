import React from 'react';
import { WHY_CHOOSE_US } from '../data/servicesData';
import { Award, UserCheck, DollarSign, Shield, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: (defaultService?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'UserCheck': return UserCheck;
      case 'DollarSign': return DollarSign;
      case 'Shield': return Shield;
      case 'Headphones': return Headphones;
      default: return Shield;
    }
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            The Expert Technologies Advantage
          </h2>
          <p className="text-base text-slate-300">
            We combine high-grade Tier-1 engineering, skilled workmanship, and responsive customer care to ensure high returns on solar and total security protection.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto rounded-full" />
        </div>

        {/* 5 Pillars Grid (Exact 5 required items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = getIcon(item.iconName);
            
            return (
              <div
                key={item.id}
                className={`p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800 hover:-translate-y-1 shadow-lg flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs text-blue-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Guaranteed Standards &amp; Quality</span>
                </div>
              </div>
            );
          })}

          {/* Special CTA Card as 6th block in grid */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 border border-blue-500/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                Instant Quote
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">
                Ready to Upgrade Your Power &amp; Security?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Contact our expert team today for a free site consultation, customized load analysis, and competitive pricing.
              </p>
            </div>

            <div className="pt-6">
              <button
                id="why-us-quote-btn"
                onClick={() => onOpenQuoteModal()}
                className="w-full py-3 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Brands / Hardware Reliability Bar */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
            We Install World-Class Certified Component Brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 font-medium">
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700">Tier-1 Mono PERC Solar Panels</span>
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700">On-Grid &amp; Off-Grid Inverters</span>
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700">4K Ultra-HD IP Cameras</span>
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700">Lithium-Ion / Tubular Batteries</span>
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700">Hot-Dip Galvanized Mounting Structures</span>
          </div>
        </div>

      </div>
    </section>
  );
};
