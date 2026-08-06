import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { QuoteFormData } from '../types';

interface ContactUsProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactUs: React.FC<ContactUsProps> = ({ initialService, initialMessage }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Home',
    serviceRequired: (initialService as any) || 'Solar System Installation',
    city: '',
    message: initialMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { fullName?: string; phone?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbx1uf78YnraMK2q2OqoYnJyrAd0jA6MYfvnxXL9VyVa_vQxa76H4OQ7nExcuMBP3KLWIg/exec";
    
    const payload = {
      fullName: formData.fullName,
      phoneNumber: formData.phone,
      propertyType: formData.propertyType,
      service: formData.serviceRequired,
      notes: formData.city ? `City: ${formData.city}. ${formData.message}` : formData.message
    };

    console.log('[ContactUs] Initiating form submission request to Google Apps Script...');
    console.log('[ContactUs] Payload data:', payload);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        signal: controller.signal,
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" }
      });

      clearTimeout(timeoutId);

      console.log('[ContactUs] Fetch response received:', response);
      alert("Inquiry submitted successfully!");
      setSubmitted(true);
    } catch (error) {
      console.error("[ContactUs] Submission error encountered:", error);
      alert("Failed to submit inquiry. Please try our WhatsApp button instead.");
    } finally {
      console.log('[ContactUs] Finalizing form submission lifecycle and resetting form.');
      setLoading(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        propertyType: 'Home',
        serviceRequired: 'Solar System Installation',
        city: '',
        message: '',
      });
      setErrors({});
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      propertyType: 'Home',
      serviceRequired: 'Solar System Installation',
      city: '',
      message: '',
    });
  };

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
          
          {/* Left Column: Direct Contact Info (Phone, WhatsApp, Email, Address as requested) */}
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

          {/* Right Column: Contact Form (Requested Contact Form) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thank You for Your Inquiry!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We have received your request. An Expert Technologies specialist will call you back within 2 business hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Expert Technologies, I submitted a form inquiry on your website.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-sm shadow-md inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium text-sm hover:bg-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Request a Free Quote / Site Visit</h3>
                  <p className="text-xs text-slate-500 mt-1">Fill in your details below and our team will get back to you with custom pricing.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
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
                      placeholder="e.g. +91 95954 43387"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 text-sm outline-none transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500/30'
                          : 'border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. City Center, Sector 5"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer"
                    >
                      <option value="Home">Home / Villa</option>
                      <option value="Shop">Shop / Retail Store</option>
                      <option value="Office">Office / Commercial Complex</option>
                      <option value="School">School / Educational Campus</option>
                      <option value="Industry">Factory / Industrial Mill</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer"
                    >
                      <option value="Solar System Installation">Solar System Installation</option>
                      <option value="On-Grid & Off-Grid Solar">On-Grid &amp; Off-Grid Solar Systems</option>
                      <option value="CCTV Camera Installation">CCTV Camera Installation</option>
                      <option value="Security Surveillance Solutions">Security Surveillance Solutions</option>
                      <option value="Solar + CCTV Combo">Solar + CCTV Combo Package</option>
                      <option value="Maintenance & Support">Maintenance &amp; Support / AMC</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your requirement, e.g. rooftop area available, required solar kW capacity, or number of cameras needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
