import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Sun, Zap, Camera, ShieldCheck, Wrench, Check, ArrowRight, Sparkles, ChevronRight, Network, Fingerprint, Smartphone } from 'lucide-react';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesProps {
  onOpenQuoteModal: (defaultService?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'solar' | 'cctv' | 'networking' | 'biometric' | 'vdp' | 'maintenance'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (activeTab === 'all') return true;
    return service.category === activeTab;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return Sun;
      case 'Zap': return Zap;
      case 'Camera': return Camera;
      case 'ShieldCheck': return ShieldCheck;
      case 'Wrench': return Wrench;
      case 'Network': return Network;
      case 'Fingerprint': return Fingerprint;
      case 'Smartphone': return Smartphone;
      default: return Sun;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200">
            Our Key Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Turnkey Solar, CCTV &amp; Security <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-base text-slate-600">
            End-to-end design, Tier-1 hardware procurement, neat conduit installation, and prompt local AMC support across Chhatrapati Sambhajinagar.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'solar', label: 'Solar Rooftop' },
            { id: 'cctv', label: 'CCTV Installation & AMC' },
            { id: 'networking', label: 'Networking & LAN' },
            { id: 'biometric', label: 'Biometric Attendance' },
            { id: 'vdp', label: 'Video Door Phone' },
            { id: 'maintenance', label: 'AMC & Maintenance' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`service-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = getIcon(service.iconName);
            const isSolar = service.category === 'solar';

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
                      isSolar 
                        ? 'bg-amber-500 text-white shadow-amber-500/20' 
                        : service.category === 'cctv'
                        ? 'bg-blue-600 text-white shadow-blue-600/20'
                        : 'bg-emerald-600 text-white shadow-emerald-600/20'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isSolar 
                        ? 'bg-amber-100 text-amber-900' 
                        : service.category === 'cctv'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-emerald-100 text-emerald-900'
                    }`}>
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Buttons inside card */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    id={`view-details-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    <span>View Specs & Details</span>
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                  </button>

                  <button
                    id={`get-quote-service-${service.id}`}
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal View */}
        <ServiceDetailModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          onOpenQuoteModal={onOpenQuoteModal}
        />

      </div>
    </section>
  );
};
