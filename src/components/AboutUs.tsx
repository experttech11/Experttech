import React from 'react';
import { Sun, ShieldCheck, Wrench, Headphones, CheckCircle2, Award, Users, ShieldAlert, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface AboutUsProps {
  onOpenQuoteModal: (defaultService?: string) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuoteModal }) => {
  const highlights = [
    {
      icon: Sun,
      color: 'text-amber-500 bg-amber-50 border-amber-200',
      title: 'Solar Power Excellence',
      desc: 'Tier-1 high-efficiency solar systems engineered to maximize energy output and slash electricity costs.'
    },
    {
      icon: ShieldCheck,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      title: 'CCTV Security Solutions',
      desc: 'Smart 4K IP cameras and surveillance setups with remote phone viewing and AI motion alerts.'
    },
    {
      icon: Wrench,
      color: 'text-green-600 bg-green-50 border-green-200',
      title: 'Professional Installation',
      desc: 'Certified technicians ensuring safe, neat conduit wiring and structural anchorage for long-term durability.'
    },
    {
      icon: Headphones,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      title: 'Dedicated Customer Support',
      desc: 'Prompt after-sales assistance, proactive maintenance audits, and long-term warranty management.'
    },
  ];

  const targetSectors = [
    { name: 'Residential Homes', desc: 'Roof-top solar & villa security camera systems.' },
    { name: 'Shops & Retail Stores', desc: 'Commercial solar & anti-theft CCTV monitoring.' },
    { name: 'Offices & IT Hubs', desc: 'Uninterrupted power & multi-floor surveillance.' },
    { name: 'Educational Institutions', desc: 'Campus safety cameras & green solar power.' },
    { name: 'Industrial Factories', desc: 'Heavy load solar power plants & perimeter security.' },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Empowering Your Space with Clean Energy & Total Security
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
        </div>

        {/* Main Grid: Description & Image / Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (Requested short introduction) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-slate max-w-none space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed font-normal">
                At <strong className="text-slate-900 font-bold">Expert Technologies</strong>, we offer quality solar energy and CCTV security solutions with professional installation and comprehensive customer support.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you are looking to eliminate rising electricity bills through clean solar power or secure your premises with 24/7 high-definition CCTV surveillance, our expert team delivers reliable turnkey installations engineered for performance and peace of mind.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                From initial site evaluation and customized system design to seamless installation and responsive maintenance support, we serve residential homes, retail shops, corporate offices, schools, and large industrial facilities.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">650+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Successful Installations</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">99%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Customer Satisfaction</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">25 Yrs</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Solar Performance Warranty</div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                id="about-us-inquire-btn"
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Request a Free Site Survey</span>
                <ArrowRight className="w-4 h-4 text-green-400" />
              </button>
            </div>

          </div>

          {/* Right Column: Key Pillars Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Sector Coverage Bar */}
            <div className="p-4 rounded-2xl bg-blue-900 text-white space-y-3 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-200 uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Serving Diverse Sectors</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {targetSectors.map((sector) => (
                  <span
                    key={sector.name}
                    className="px-2.5 py-1 rounded-md bg-blue-800/80 text-blue-100 font-medium border border-blue-700/60"
                  >
                    ✓ {sector.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
