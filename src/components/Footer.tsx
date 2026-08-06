import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube, MessageSquare, ArrowUp, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Company Name & Intro */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-emerald-500 text-white font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Expert <span className="text-blue-500">Technologies</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Certified Solar Rooftop & 4K CCTV Security Systems Installation in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. Authorized dealer for Hikvision, Dahua, CP Plus, Tata Power Solar & Waaree.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Google Rated 4.9 / 5.0 (320+ Local Reviews)</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                Follow &amp; Connect With Us
              </div>
              <div className="flex items-center gap-2">
                <a
                  id="footer-social-whatsapp"
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-facebook"
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-instagram"
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-linkedin"
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/50 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="footer-social-youtube"
                  href={COMPANY_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-red-400 hover:border-red-500/50 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Our Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">All Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">CCTV Camera Installation (4K IP)</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">CCTV AMC & Repair Service</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Solar Rooftop Power Plants</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Networking & Structured LAN</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Biometric Attendance & Access</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Video Door Phone & Smart Locks</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Combined Solar + CCTV AMC</a></li>
            </ul>
          </div>

          {/* Col 3: Key Localities */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#location" className="hover:text-blue-400 transition-colors">Garkheda Parisar (Head Office)</a></li>
              <li><a href="#location" className="hover:text-blue-400 transition-colors">CIDCO N-1 to N-12</a></li>
              <li><a href="#location" className="hover:text-blue-400 transition-colors">Waluj MIDC Industrial Area</a></li>
              <li><a href="#location" className="hover:text-blue-400 transition-colors">Shendra DMIC Zone</a></li>
              <li><a href="#location" className="hover:text-blue-400 transition-colors">Beed Bypass & Jalna Road</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Details (NAP)</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <span className="text-slate-300 font-semibold">{COMPANY_INFO.name}</span>. All rights reserved. Chhatrapati Sambhajinagar, Maharashtra.
          </div>

          <div className="flex items-center gap-4">
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
