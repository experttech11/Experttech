import React, { useState, useEffect } from 'react';
import { Sun, ShieldCheck, Phone, Mail, Menu, X, MessageSquare, ArrowRight, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface NavbarProps {
  onOpenQuoteModal: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'why-us', 'estimator', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Our Services', href: '#services', id: 'services' },
    { name: 'Why Choose Us', href: '#why-us', id: 'why-us' },
    { name: 'Instant Estimator', href: '#estimator', id: 'estimator' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar for quick contact */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              id="top-bar-phone"
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <a 
              id="top-bar-email"
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-green-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-green-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 border-r border-slate-800 pr-3">
              <a
                id="top-bar-facebook"
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                title="Facebook Page"
                aria-label="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                id="top-bar-instagram"
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded text-slate-400 hover:text-pink-400 hover:bg-slate-800 transition-colors"
                title="Instagram Page"
                aria-label="Instagram Page"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
            <span className="hidden md:inline-block text-slate-400 text-xs">
              Mon - Sat: 9:00 AM - 7:00 PM
            </span>
            <a
              id="top-bar-whatsapp"
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Expert Technologies, I would like to inquire about Solar & CCTV solutions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-green-600 hover:bg-green-700 text-white font-medium text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg border-b border-slate-200/80 py-3' 
            : 'border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            id="brand-logo"
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-green-500 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight flex items-center gap-1">
                Expert <span className="text-blue-600">Technologies</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-green-600 tracking-wider">
                Solar & CCTV Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-get-quote-btn"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold shadow-md shadow-blue-600/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-get-quote-mobile-sm"
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Get Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white text-center font-semibold text-sm shadow-md"
              >
                Get a Free Quote
              </button>
              <a
                id="mobile-drawer-contact-btn"
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 text-center font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Call {COMPANY_INFO.phoneFormatted}
              </a>
              
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <a
                  id="mobile-drawer-facebook"
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold flex items-center justify-center gap-2 border border-blue-200"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  id="mobile-drawer-instagram"
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-pink-50 text-pink-700 text-xs font-semibold flex items-center justify-center gap-2 border border-pink-200"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
