import React from 'react';
import { MessageSquare, Phone, Clock, ArrowUp, Bot } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { trackConversion } from '../utils/analytics';

interface FloatingActionsProps {
  onOpenCallbackModal?: () => void;
  onToggleAIChat?: () => void;
  isAIChatOpen?: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenCallbackModal,
  onToggleAIChat,
  isAIChatOpen,
}) => {
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
    <div className="fixed bottom-3 right-2.5 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2 items-end pointer-events-auto">
      {/* AI Assistant Button */}
      {onToggleAIChat && (
        <button
          onClick={onToggleAIChat}
          className={`h-10 px-3 rounded-full text-white shadow-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-700/80 cursor-pointer ${
            isAIChatOpen ? 'bg-blue-600 border-blue-400 ring-2 ring-blue-400/30' : 'bg-slate-900 hover:bg-slate-800'
          }`}
          title="Open AI Solar & CCTV Advisor"
          aria-label="Open AI Solar & CCTV Advisor"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-blue-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-bold whitespace-nowrap">AI Advisor</span>
        </button>
      )}

      {/* Callback Button (Desktop) */}
      {onOpenCallbackModal && (
        <button
          onClick={onOpenCallbackModal}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xl border border-slate-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Request a 15-Min Callback"
        >
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Request Callback</span>
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hi Expert Technologies, I need a Free Site Survey for Solar / CCTV in Chhatrapati Sambhajinagar.')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="h-10 px-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-white/30 flex items-center gap-1.5 shrink-0"
        aria-label="Chat on WhatsApp with Expert Technologies"
      >
        <MessageSquare className="w-4 h-4 animate-pulse shrink-0" />
        <span className="text-xs font-bold">WhatsApp</span>
      </a>

      {/* Floating Call Button on Mobile */}
      <a
        id="floating-phone-btn"
        href={`tel:${COMPANY_INFO.phone}`}
        onClick={handlePhoneClick}
        className="sm:hidden w-10 h-10 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95 border border-white/20 shrink-0"
        aria-label="Call Expert Technologies"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-md border border-slate-700/60 shrink-0 cursor-pointer"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
