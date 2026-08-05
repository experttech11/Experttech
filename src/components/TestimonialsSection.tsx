import React from 'react';
import { Star, Quote, CheckCircle2, MapPin, Building2, User } from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/servicesData';

interface TestimonialsSectionProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Google Rating {COMPANY_INFO.googleRating} / 5.0 ({COMPANY_INFO.totalReviews} Reviews)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">650+ Clients</span> in Chhatrapati Sambhajinagar
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            See why homeowners, shop owners, apartment committees, and factories trust Expert Technologies for Solar and CCTV Security.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Header Rating & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="border-t border-slate-700/80 pt-4 mt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" title="Verified Customer" />
                      )}
                    </h3>
                    <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <User className="w-3 h-3 text-slate-500" />
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-lg">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span className="truncate max-w-[120px]">{item.location}</span>
                  </span>
                  <span className="text-blue-400 font-medium">{item.serviceUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/40 via-slate-800 to-slate-900 border border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">Join Our 650+ Happy Solar & CCTV Customers!</div>
              <div className="text-xs sm:text-sm text-slate-400">Get a free site survey & custom proposal anywhere in Chhatrapati Sambhajinagar.</div>
            </div>
          </div>

          <button
            onClick={() => onOpenQuoteModal('Solar + CCTV Combo')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/20 transition-all shrink-0"
          >
            Book Free Site Survey
          </button>
        </div>
      </div>
    </section>
  );
};
