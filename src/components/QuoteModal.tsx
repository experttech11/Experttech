import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  customMessage?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Solar System Installation',
  customMessage = ''
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
        
        {/* Close button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-3 pr-8">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Get a Free Instant Quote</h3>
              <p className="text-xs text-slate-500">Expert Technologies • Solar &amp; CCTV Solutions</p>
            </div>
          </div>

          <InquiryForm
            title=""
            subtitle=""
            initialService={defaultService}
            initialNotes={customMessage}
          />
        </div>

      </div>
    </div>
  );
};

