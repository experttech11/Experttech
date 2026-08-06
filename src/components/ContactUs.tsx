import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { InquiryForm } from './InquiryForm';

interface ContactUsProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({ initialService, initialMessage }) => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch with Our Expert Team
          </h2>
          <p className="text-base text-slate-600">
            Have questions or want a free site evaluation? Call us, chat on WhatsApp, or send us an inquiry form below.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl relative overflow-hidden">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                <p className="text-sm text-slate-300">
                  We respond promptly to all inquiries during business hours.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Phone Number */}
                <a
                  id="contact-info-phone"
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone Number (Call Us)</div>
                    <div className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {COMPANY_INFO.phoneFormatted}
                    </div>
                    <div className="text-[11px] text-green-400 font-medium">Click to dial directly</div>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <a
                  id="contact-info-whatsapp"
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Expert Technologies, I would like to inquire about your Solar & CCTV solutions.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-600/20 text-green-400 border border-green-500/30 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">WhatsApp Support</div>
                    <div className="text-base font-bold text-white group-hover:text-green-300 transition-colors">
                      Chat on WhatsApp
                    </div>
                    <div className="text-[11px] text-slate-400">Instant response during business hours</div>
                  </div>
                </a>

                {/* Email Address */}
                <a
                  id="contact-info-email"
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors break-all">
                      {COMPANY_INFO.email}
                    </div>
                    <div className="text-[11px] text-slate-400">24/7 inbox monitoring</div>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-4 p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Office Address</div>
                    <div className="text-xs text-slate-200 font-medium leading-relaxed mt-0.5">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>

                {/* Social Pages Links */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="text-xs text-slate-400 font-medium mb-2">Connect with Us Socially:</div>
                  <div className="flex items-center gap-3">
                    <a
                      id="contact-social-facebook"
                      href={COMPANY_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-semibold transition-all group"
                    >
                      <Facebook className="w-4 h-4 text-blue-400 group-hover:text-white" />
                      <span>Facebook Page</span>
                    </a>
                    <a
                      id="contact-social-instagram"
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-pink-600/20 hover:bg-pink-600 border border-pink-500/30 text-pink-300 hover:text-white text-xs font-semibold transition-all group"
                    >
                      <Instagram className="w-4 h-4 text-pink-400 group-hover:text-white" />
                      <span>Instagram Page</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Unified Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <InquiryForm
              initialService={initialService}
              initialNotes={initialMessage}
              title="Request a Free Quote / Site Visit"
              subtitle="Fill in your details below and our team will get back to you with custom pricing."
            />
          </div>

        </div>

      </div>
    </section>
  );
};

