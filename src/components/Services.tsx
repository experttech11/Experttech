import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceItem } from '../types';
import { Sun, Zap, Camera, ShieldCheck, Wrench, Check, ArrowRight, Sparkles, ChevronRight, X } from 'lucide-react';

interface ServicesProps {
  onOpenQuoteModal: (defaultService?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'solar' | 'cctv' | 'maintenance'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES_LIST.filter(service => {
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
      default: return Sun;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Solar &amp; Security Solutions
          </h2>
          <p className="text-base text-slate-600">
            End-to-end design, high-quality hardware procurement, professional installation, and lifelong maintenance support.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'solar', label: 'Solar Systems' },
            { id: 'cctv', label: 'CCTV & Security' },
            { id: 'maintenance', label: 'Maintenance & AMC' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`service-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
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
                        : 'bg-green-600 text-white shadow-green-600/20'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isSolar 
                        ? 'bg-amber-100 text-amber-800' 
                        : service.category === 'cctv'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {service.category === 'solar' ? 'Solar Energy' : service.category === 'cctv' ? 'CCTV Security' : 'Support'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
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
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    id={`get-quote-service-${service.id}`}
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal view if service selected */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  {React.createElement(getIcon(selectedService.iconName), { className: 'w-7 h-7' })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedService.title}</h3>
                  <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Expert Technologies Solutions</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">Included Features &amp; Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 p-2 rounded bg-slate-50 border border-slate-100">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">Key Customer Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 p-2 rounded bg-blue-50/50 border border-blue-100/50">
                        <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider text-xs">Ideal Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.idealFor.map((app, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    const svcTitle = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteModal(svcTitle);
                  }}
                  className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md text-center transition-colors"
                >
                  Request Quote for {selectedService.title}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-6 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
