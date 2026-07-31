import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end">
      
      {/* Floating Call Button on mobile */}
      <a
        id="floating-phone-btn"
        href={`tel:${COMPANY_INFO.phone}`}
        className="sm:hidden w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95"
        aria-label="Call Expert Technologies"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Expert Technologies, I would like to inquire about Solar & CCTV solutions.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-xs shadow-2xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/20"
      >
        <MessageSquare className="w-5 h-5 animate-bounce" />
        <span className="hidden md:inline-block">Chat on WhatsApp</span>
      </a>

    </div>
  );
};
