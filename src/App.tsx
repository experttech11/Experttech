import React, { useState } from 'react';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandsSection } from './components/BrandsSection';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SystemEstimator } from './components/SystemEstimator';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { InstallationProcessSection } from './components/InstallationProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FAQSection } from './components/FAQSection';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CallbackModal } from './components/CallbackModal';
import { AIChatAssistant } from './components/AIChatAssistant';
import { FloatingActions } from './components/FloatingActions';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState('Solar Rooftop System');
  const [modalCustomMessage, setModalCustomMessage] = useState('');

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setModalDefaultService(serviceTitle);
    }
    setModalCustomMessage('');
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteModalWithCustomData = (summaryText: string) => {
    setModalDefaultService('Solar + CCTV Combo');
    setModalCustomMessage(summaryText);
    setIsQuoteModalOpen(true);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const top = contactSection.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      {/* Dynamic SEO and Social Media Meta Tags with Schema Markup */}
      <SEO />

      {/* Sticky Header Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onContactClick={handleScrollToContact}
        />

        {/* Brand Equipment Partners */}
        <BrandsSection />

        {/* About Company */}
        <AboutUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Core Services Grid with Specs Modal */}
        <Services onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Solar & CCTV Cost Estimator */}
        <SystemEstimator
          onOpenQuoteModalWithCustomData={handleOpenQuoteModalWithCustomData}
        />

        {/* Standard Installation Process Workflow */}
        <InstallationProcessSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Verified Local Projects Showcase */}
        <ProjectsShowcase onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Choose Expert Technologies */}
        <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Customer Reviews & Google Rating */}
        <TestimonialsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* SEO Blog & Solar/CCTV Guides */}
        <BlogSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Local Service Areas & Google Maps NAP */}
        <ServiceAreasSection />

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Contact Form & Lead Generation Section */}
        <ContactUs
          initialService={modalDefaultService}
          initialMessage={modalCustomMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={modalDefaultService}
        customMessage={modalCustomMessage}
      />

      {/* Instant 15-Min Callback Request Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />

      {/* AI Lead Qualification Chat Advisor */}
      <AIChatAssistant
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating Action Bar (WhatsApp, Call, Callback, AI Advisor) */}
      <FloatingActions
        onOpenCallbackModal={() => setIsCallbackModalOpen(true)}
        onToggleAIChat={() => setIsAIChatOpen((prev) => !prev)}
        isAIChatOpen={isAIChatOpen}
      />

      {/* PWA Install Prompt Banner */}
      <PWAInstallPrompt />
    </div>
  );
}
