import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Navigation, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/servicesData';

export const ServiceAreasSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState(SERVICE_AREAS[0]);

  return (
    <section id="location" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold mb-4">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Local SEO & Service Coverage Area</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Serving All Key Areas of <span className="text-blue-600">Chhatrapati Sambhajinagar</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            Prompt, doorstep Solar & CCTV installation services, site surveys, and emergency repair calls across Chhatrapati Sambhajinagar (Aurangabad) & MIDC zones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Area Selector Pills */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center justify-between">
              <span>Select Your Locality</span>
              <span className="text-xs font-normal text-slate-500">10 Key Neighborhoods</span>
            </h3>

            <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
              {SERVICE_AREAS.map((area) => {
                const isSelected = selectedArea.name === area.name;
                return (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area)}
                    className={`w-full text-left p-3.5 rounded-xl transition-all flex items-start justify-between border ${
                      isSelected
                        ? 'bg-blue-50 border-blue-500 shadow-sm text-blue-900 font-bold'
                        : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 text-slate-700 font-medium'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold flex items-center gap-1.5">
                        <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                        <span>{area.name}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 pl-5">Pincode: {area.pincode}</div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />}
                  </button>
                );
              })}
            </div>

            {/* Selected Area Highlight Detail */}
            <div className="mt-6 pt-6 border-t border-slate-200 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <h4 className="text-sm font-bold text-blue-950 mb-1">{selectedArea.locality}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedArea.description}</p>
              <div className="mt-2 text-[11px] font-semibold text-blue-700 bg-white p-2 rounded border border-blue-200">
                ⭐ Track Record: {selectedArea.popularProjects}
              </div>
            </div>
          </div>

          {/* Embedded Google Maps & Office NAP */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Official Head Office</div>
                <h3 className="text-lg font-bold text-slate-900">{COMPANY_INFO.name}</h3>
                <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </p>
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-sm shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner my-2">
              <iframe
                title="Expert Technologies Location Map"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* NAP Info Bar */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div>
                <span className="font-semibold block text-slate-900">Phone & WhatsApp</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-600 font-medium hover:underline">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Working Hours</span>
                <span className="text-slate-600">Mon - Sat: 9 AM - 7 PM</span>
              </div>
              <div>
                <span className="font-semibold block text-slate-900">Emergency Callout</span>
                <span className="text-emerald-600 font-medium">Sunday On-Call Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
