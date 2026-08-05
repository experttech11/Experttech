import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

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
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Home');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState(customMessage);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultService) setService(defaultService);
    if (customMessage) setMessage(customMessage);
  }, [defaultService, customMessage]);

  if (!isOpen) return null;

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();

    if (!fullName.trim() || !phone.trim()) {
      alert("Please enter your full name and phone number.");
      return;
    }

    setLoading(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbx1uf78YnraMK2q2OqoYnJyrAd0jA6MYfvnxXL9VyVa_vQxa76H4OQ7nExcuMBP3KLWIg/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
          fullName,
          phoneNumber: phone,
          propertyType,
          service: service,
          notes: message
        }),
        headers: { "Content-Type": "application/json" }
      });
      alert("Inquiry submitted successfully!");
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong, please try WhatsApp option.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Expert Technologies,\n\nI would like to request a quote for *${service}* for my *${propertyType}*.\nName: ${fullName || 'Valued Customer'}\nPhone: ${phone}\nDetails: ${message || 'Please send price details and schedule a free site survey.'}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
        
        {/* Close button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Quotation Request Received!</h3>
            <p className="text-sm text-slate-600">
              Thank you {fullName}. An Expert Technologies technical representative will contact you shortly on <strong>{phone}</strong>.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Get a Free Instant Quote</h3>
                <p className="text-xs text-slate-500">Expert Technologies • Solar &amp; CCTV Solutions</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 95954 43387"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Property Type *
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                  >
                    <option value="Home">Home / Villa</option>
                    <option value="Shop">Shop / Retail Store</option>
                    <option value="Office">Office / Commercial</option>
                    <option value="School">School / Campus</option>
                    <option value="Industry">Factory / Industrial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Selected *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
                >
                  <option value="Solar System Installation">Solar System Installation</option>
                  <option value="On-Grid & Off-Grid Solar Systems">On-Grid &amp; Off-Grid Solar Systems</option>
                  <option value="CCTV Camera Installation">CCTV Camera Installation</option>
                  <option value="Security Surveillance Solutions">Security Surveillance Solutions</option>
                  <option value="Solar + CCTV Combo">Solar + CCTV Combo Package</option>
                  <option value="Maintenance & Support">Maintenance &amp; Support / AMC</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Message / Custom Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify kW capacity, number of cameras, or any specific requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? 'Submitting Request...' : 'Submit Inquiry'}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-2.5 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Chat Instead</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
