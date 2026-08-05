import React, { useState } from 'react';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SystemEstimator } from './components/SystemEstimator';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState('Solar System Installation');
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
      {/* Dynamic SEO and Social Media Meta Tags */}
      <SEO />

      {/* Sticky Header Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onContactClick={handleScrollToContact}
        />

        {/* Section 2: About Us */}
        <AboutUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Section 3: Our Services */}
        <Services onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Solar & CCTV Estimator Widget */}
        <SystemEstimator
          onOpenQuoteModalWithCustomData={handleOpenQuoteModalWithCustomData}
        />

        {/* Project Showcase / Case Studies */}
        <ProjectsShowcase onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Section 5: Contact Us */}
        <ContactUs
          initialService={modalDefaultService}
          initialMessage={modalCustomMessage}
        />
      </main>

      {/* Section 6: Footer */}
      <Footer />

      {/* Quote Modal Popup */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultService={modalDefaultService}
        customMessage={modalCustomMessage}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
