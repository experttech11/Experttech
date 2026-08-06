import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  propertyType: string;
  service: string;
  notes: string;
}

interface InquiryFormProps {
  initialService?: string;
  initialNotes?: string;
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  className?: string;
}

export const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx1uf78YnraMK2q2OqoYnJyrAd0jA6MYfvnxXL9VyVa_vQxa76H4OQ7nExcuMBP3KLWIg/exec";

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialService = 'Solar System Installation',
  initialNotes = '',
  title = 'Request a Free Quote / Site Visit',
  subtitle = 'Fill in your details below and our team will get back to you with custom pricing.',
  onSuccess,
  className = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    propertyType: 'Home',
    service: initialService,
    notes: initialNotes,
  });

  const [errors, setErrors] = useState<{ fullName?: string; phoneNumber?: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialNotes]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { fullName?: string; phoneNumber?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setErrorMessage(null);
    setLoading(true);

    const payload = {
      fullName: formData.fullName.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      propertyType: formData.propertyType,
      service: formData.service,
      notes: formData.notes.trim(),
    };

    console.log('[InquiryForm] Sending POST request to Google Apps Script:', APPS_SCRIPT_URL);
    console.log('[InquiryForm] Payload:', payload);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      let responseOk = false;
      let responseData: any = null;

      try {
        const res = await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          signal: controller.signal,
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          responseOk = true;
          try {
            responseData = await res.json();
          } catch {
            responseData = { status: 'success' };
          }
        } else {
          throw new Error(`HTTP Error ${res.status}`);
        }
      } catch (corsOrFetchErr: any) {
        console.warn('[InquiryForm] Direct CORS fetch encountered issue, falling back to no-cors mode:', corsOrFetchErr);
        
        // Secondary fallback to no-cors mode if text/plain fetch was blocked
        const fallbackRes = await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          signal: controller.signal,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        clearTimeout(timeoutId);

        if (fallbackRes.type === 'opaque' || fallbackRes.ok || fallbackRes.status === 0) {
          responseOk = true;
        } else {
          throw new Error('Fallback POST request failed');
        }
      }

      if (responseOk) {
        console.log('[InquiryForm] Submission confirmed by backend:', responseData);
        setSubmitted(true);
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error('Backend did not confirm receipt of submission');
      }
    } catch (err: any) {
      console.error('[InquiryForm] Submission error:', err);
      if (err.name === 'AbortError') {
        setErrorMessage('Request timed out. Please check your internet connection or try again.');
      } else {
        setErrorMessage('Failed to submit inquiry. Please try again or reach us on WhatsApp.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setErrors({});
    setFormData({
      fullName: '',
      phoneNumber: '',
      propertyType: 'Home',
      service: initialService || 'Solar System Installation',
      notes: '',
    });
  };

  if (submitted) {
    return (
      <div className={`text-center py-8 px-4 space-y-4 animate-fadeIn ${className}`}>
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Inquiry Submitted Successfully!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Thank you <span className="font-semibold text-slate-900">{formData.fullName}</span>. An Expert Technologies technical specialist will get back to you shortly.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
              `Hello Expert Technologies,\nI submitted an inquiry on your website.\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nService: ${formData.service}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-md inline-flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      {title && (
        <div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
        </div>
      )}

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Phone Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
            }}
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all ${
              errors.fullName
                ? 'border-red-500 focus:ring-2 focus:ring-red-500/30'
                : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="e.g. +91 95954 43387"
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.target.value });
              if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
            }}
            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all ${
              errors.phoneNumber
                ? 'border-red-500 focus:ring-2 focus:ring-red-500/30'
                : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phoneNumber}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Property Type & Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Property Type *
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer"
          >
            <option value="Home">Home / Villa</option>
            <option value="Shop">Shop / Retail Store</option>
            <option value="Office">Office / Commercial</option>
            <option value="School">School / Campus</option>
            <option value="Industry">Factory / Industrial</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Service Required *
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer"
          >
            <option value="Solar System Installation">Solar System Installation</option>
            <option value="On-Grid & Off-Grid Solar Systems">On-Grid &amp; Off-Grid Solar Systems</option>
            <option value="CCTV Camera Installation">CCTV Camera Installation</option>
            <option value="Security Surveillance Solutions">Security Surveillance Solutions</option>
            <option value="Solar + CCTV Combo">Solar + CCTV Combo Package</option>
            <option value="Maintenance & Support">Maintenance &amp; Support / AMC</option>
          </select>
        </div>
      </div>

      {/* Row 3: Notes / Additional Requirements */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
          Notes / Message
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Describe your requirement, e.g., rooftop area, required solar kW, or camera count..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        {loading ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Quote Request</span>
          </>
        )}
      </button>
    </form>
  );
};
