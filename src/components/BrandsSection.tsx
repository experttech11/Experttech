import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { BRAND_PARTNERS } from '../data/servicesData';

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>Authorised Tier-1 Partner Equipment</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Brands & Technologies We Deal With
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            100% genuine equipment with official manufacturer warranty, ALMM list approval, and BIS certification.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {BRAND_PARTNERS.map((brand) => (
            <div
              key={brand.id}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
            >
              <div className="text-sm font-black tracking-wider text-slate-800 group-hover:text-blue-600 transition-colors uppercase">
                {brand.logoText}
              </div>
              <span className="mt-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200/60 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                {brand.category}
              </span>
              <span className="mt-1 text-[11px] text-slate-500 line-clamp-1">{brand.tagline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
