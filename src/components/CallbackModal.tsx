import React, { useState } from 'react';
import { X, Phone, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { trackConversion } from '../utils/analytics';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Immediate / As soon as possible');
  const [service, setService] = useState('Solar Power Consultation');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackConversion.submitCallbackRequest(phone, service);

    // Dispatch WhatsApp request
    const msg = `Hi Expert Technologies, I requested a Call Back!\nName: ${fullName}\nPhone: ${phone}\nService: ${service}\nPreferred Time: ${preferredTime}\nCity: Chhatrapati Sambhajinagar`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Fast 15-Minute Local Callback</span>
          </div>

          <h3 className="text-xl font-bold text-white">Request a Instant Call Back</h3>
          <p className="text-xs text-slate-300 mt-1">
            Leave your phone number and our engineering team in Chhatrapati Sambhajinagar will call you back shortly.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Callback Request Received!</h4>
              <p className="text-xs text-slate-600">
                Our technician will call you on <strong>{phone}</strong> shortly. Thank you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile / Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="Solar Power Consultation">Solar Power Rooftop & Subsidy</option>
                  <option value="CCTV Security Installation">4K CCTV Camera System</option>
                  <option value="CCTV & Solar AMC Repair">CCTV Repair / Annual Maintenance (AMC)</option>
                  <option value="Networking & Biometrics">Networking or Biometric Attendance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Callback Time</label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  <option value="Immediate / As soon as possible">Immediate (Within 15 Mins)</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="Evening (4 PM - 7 PM)">Evening (4:00 PM - 7:00 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Callback Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
