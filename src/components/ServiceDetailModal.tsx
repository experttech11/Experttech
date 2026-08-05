import React from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, DollarSign, Phone, MessageSquare, ArrowRight, FileText, Wrench, Award } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO, IMAGES } from '../data/servicesData';
import { trackConversion } from '../utils/analytics';
import { OptimizedImage } from './OptimizedImage';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!isOpen || !service) return null;

  const handleWhatsApp = () => {
    trackConversion.clickWhatsApp('service_modal_detail', service.title);
    const msg = `Hi Expert Technologies, I want to know more details and pricing for ${service.title} in Chhatrapati Sambhajinagar.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const serviceImg = service.category === 'solar' ? IMAGES.solar : IMAGES.cctv;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8">
        {/* Modal Header Bar */}
        <div className="relative bg-slate-900 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close detail modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Verified Local Service • Chhatrapati Sambhajinagar</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{service.title}</h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">{service.shortDesc}</p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
            {service.pricingStarting && (
              <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Starting From: <strong className="text-white">{service.pricingStarting}</strong></span>
              </div>
            )}
            {service.warrantyPeriod && (
              <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Warranty: <strong className="text-white">{service.warrantyPeriod}</strong></span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-8">
          {/* Detailed Image Banner & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative rounded-xl overflow-hidden group shadow-md border border-slate-200 aspect-video md:aspect-auto h-56">
              <OptimizedImage
                src={serviceImg}
                alt={`${service.title} in Chhatrapati Sambhajinagar by Expert Technologies`}
                preset="modalBanner"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                wrapperClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4 pointer-events-none z-10">
                <span className="text-xs text-white font-medium bg-blue-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                  100% Guaranteed Installation
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Service Overview
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.fullDesc}</p>

              <div className="mt-4 bg-blue-50/70 border border-blue-100 rounded-xl p-3.5">
                <div className="text-xs font-semibold text-blue-900 mb-1">Ideal Applications & Clients:</div>
                <div className="flex flex-wrap gap-1.5">
                  {service.idealFor.map((item, idx) => (
                    <span key={idx} className="inline-block px-2.5 py-0.5 rounded-md bg-white border border-blue-200 text-slate-700 text-xs font-medium">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Features & Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5">
              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                Key Features Included
              </h4>
              <ul className="space-y-2.5">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5">
              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                Technical Specifications
              </h4>
              {service.specs && service.specs.length > 0 ? (
                <ul className="space-y-2.5">
                  {service.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2 rounded-lg border border-slate-200">
                      <Wrench className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• Tier-1 MNRE & BIS Certified Equipment</li>
                  <li>• Heavy-Duty Conduit Cable Wiring</li>
                  <li>• Complete Surge & Electrical Protection</li>
                  <li>• Smartphone App Live Monitoring Setup</li>
                </ul>
              )}
            </div>
          </div>

          {/* FAQs for this Service */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-base font-bold text-slate-900 mb-3">Frequently Asked Questions</h4>
              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-blue-50/40 border border-blue-100 rounded-xl p-4">
                    <div className="font-semibold text-slate-900 text-sm">{faq.question}</div>
                    <div className="text-xs sm:text-sm text-slate-600 mt-1">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA Bar */}
        <div className="bg-slate-100 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Need an exact estimate for your property in Chhatrapati Sambhajinagar?
            <span className="block font-semibold text-slate-800">100% Free On-Site Inspection & Instant Proposal</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(service.title);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
