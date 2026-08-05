import React from 'react';
import { MessageSquare, Phone, Clock, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { trackConversion } from '../utils/analytics';

interface FloatingActionsProps {
  onOpenCallbackModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenCallbackModal }) => {
  const handleWhatsAppClick = () => {
    trackConversion.clickWhatsApp('floating_action_btn');
  };

  const handlePhoneClick = () => {
    trackConversion.clickPhoneCall('floating_action_btn');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col gap-2.5 items-end">
      {/* Callback Button */}
      {onOpenCallbackModal && (
        <button
          onClick={onOpenCallbackModal}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xl border border-slate-700 transition-all hover:scale-105 active:scale-95"
          title="Request a 15-Min Callback"
        >
          <Clock className="w-4 h-4 text-amber-400" />
          <span>Request Callback</span>
        </button>
      )}

      {/* Floating Call Button on Mobile */}
      <a
        id="floating-phone-btn"
        href={`tel:${COMPANY_INFO.phone}`}
        onClick={handlePhoneClick}
        className="sm:hidden w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Call Expert Technologies"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hi Expert Technologies, I need a Free Site Survey for Solar / CCTV in Chhatrapati Sambhajinagar.')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-2xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/30"
        aria-label="Chat on WhatsApp with Expert Technologies"
      >
        <MessageSquare className="w-5 h-5 animate-pulse" />
        <span className="hidden md:inline-block">Chat on WhatsApp</span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};
