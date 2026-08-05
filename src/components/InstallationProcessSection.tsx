import React from 'react';
import { MapPin, FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { INSTALLATION_STEPS } from '../data/servicesData';

interface InstallationProcessSectionProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const InstallationProcessSection: React.FC<InstallationProcessSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-blue-600" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Smooth 4-Step Turnkey Execution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Standard <span className="text-blue-600">Installation Process</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            From initial free site inspection to final net-metering & mobile app configuration, we handle everything hassle-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTALLATION_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50 border border-slate-200/80 hover:border-blue-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/80 border border-blue-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(step.iconName)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 text-[11px] font-semibold text-blue-600 flex items-center gap-1">
                <span>Verified Standard</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenQuoteModal('Solar System Installation')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>Start Step 1: Request Free Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
