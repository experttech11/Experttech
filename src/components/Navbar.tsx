import React, { useState, useEffect } from 'react';
import { Sun, ShieldCheck, Phone, Mail, Menu, X, Facebook, Instagram } from 'lucide-react';
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

      const sections = ['hero', 'about', 'services', 'why-us', 'estimator', 'projects', 'testimonials', 'blog', 'location', 'faq', 'contact'];
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
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Estimator', href: '#estimator', id: 'estimator' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Service Areas', href: '#location', id: 'location' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
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
              className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="hidden xl:inline-block text-slate-400 text-xs">
              📍 Garkheda Parisar, Chhatrapati Sambhajinagar
            </span>
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
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled 
            ? 'shadow-lg border-b border-slate-200/80 py-2.5' 
            : 'border-b border-slate-100 py-3.5'
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
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-emerald-500 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight flex items-center gap-1">
                Expert <span className="text-blue-600">Technologies</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
                Solar & CCTV • Chh. Sambhajinagar
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSection === link.id
                    ? 'text-blue-600 bg-blue-50/80 font-semibold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
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
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
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
              <a
                id="mobile-drawer-contact-btn"
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2 rounded-xl border border-slate-300 text-slate-700 text-center font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Call {COMPANY_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
