import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenInquiry: (initialSubject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', num: '01' },
    { name: 'About Us', href: '#about', num: '02' },
    { name: 'Collections', href: '#collections', num: '03' },
    { name: 'Showcase', href: '#showcase', num: '04' },
    { name: 'Manufacturing', href: '#manufacturing', num: '05' },
    { name: 'Quality', href: '#quality', num: '06' },
    { name: 'Visual Gallery', href: '#gallery', num: '07' },
    { name: 'Contact & Inquiries', href: '#contact', num: '08' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-cream/95 backdrop-blur-md py-3 sm:py-4 shadow-sm border-b border-luxury-sand/60'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Name / Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
          >
            {/* Logo Badge */}
            <div
              className={`transition-all duration-300 p-1 rounded-sm ${
                isScrolled
                  ? 'bg-transparent'
                  : 'bg-luxury-cream/95 shadow-md border border-luxury-gold/30'
              }`}
            >
              <img
                src="/images/logo.jpg"
                alt="Byte Bridges India Logo"
                className={`h-7 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'mix-blend-multiply' : ''
                }`}
              />
            </div>

            <div className="flex flex-col items-start">
              <span
                className={`font-serif tracking-[0.16em] sm:tracking-[0.2em] text-sm sm:text-lg md:text-xl font-semibold uppercase transition-colors duration-300 leading-tight ${
                  isScrolled ? 'text-luxury-dark group-hover:text-luxury-brown' : 'text-white'
                }`}
              >
                Byte Bridges India
              </span>
              <span
                className={`text-[7.5px] sm:text-[9px] tracking-[0.26em] uppercase font-sans font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-luxury-taupe' : 'text-luxury-sand/80'
                }`}
              >
                Handbags • Fashion • Elegance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 py-1 group ${
                  isScrolled ? 'text-luxury-charcoal hover:text-luxury-gold' : 'text-white/90 hover:text-luxury-lightgold'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-luxury-gold' : 'bg-luxury-lightgold'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Action / Business Inquiry */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => onOpenInquiry('Business Partnership & Manufacturing')}
              className={`text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 rounded-none border transition-all duration-300 flex items-center gap-1.5 ${
                isScrolled
                  ? 'border-luxury-brown text-luxury-brown hover:bg-luxury-brown hover:text-white'
                  : 'border-white/80 text-white hover:bg-white hover:text-luxury-dark'
              }`}
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className={`px-3 py-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 ${
                isScrolled
                  ? 'bg-luxury-espresso text-luxury-cream border-luxury-brown shadow-md'
                  : 'bg-black/60 text-white border-luxury-gold/50 backdrop-blur-md shadow-lg'
              }`}
            >
              <Menu className="w-4 h-4 text-luxury-gold" />
              <span className="text-[10px] tracking-widest uppercase font-semibold font-sans">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Crystal Clear Fullscreen Luxury Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#121212] text-white flex flex-col justify-between overflow-y-auto animate-fade-in">
          {/* Top Header of Mobile Drawer */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#181818]/90 sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="p-1 bg-luxury-cream rounded-sm border border-luxury-gold/40">
                <img
                  src="/images/logo.jpg"
                  alt="Byte Bridges Logo"
                  className="h-8 w-auto object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <span className="font-serif text-base tracking-[0.15em] font-semibold uppercase text-white block leading-none">
                  Byte Bridges India
                </span>
                <span className="text-[8px] tracking-[0.25em] text-luxury-lightgold uppercase font-sans mt-0.5 block">
                  Handbag Manufacturing
                </span>
              </div>
            </div>

            {/* Clear, High-Contrast Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="px-3.5 py-1.5 rounded-full border border-luxury-gold bg-luxury-gold text-luxury-dark font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1 shadow-lg hover:bg-white transition-colors"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="px-6 py-6 space-y-1 flex-grow">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-luxury-gold mb-3">
              Explore Atelier
            </p>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="group flex items-center justify-between py-3 border-b border-white/10 hover:border-luxury-gold transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-luxury-taupe group-hover:text-luxury-gold transition-colors">
                    {link.num}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-white group-hover:text-luxury-lightgold transition-colors tracking-wide">
                    {link.name}
                  </span>
                </div>
                <span className="text-luxury-gold text-base transform group-hover:translate-x-1.5 transition-transform">
                  →
                </span>
              </a>
            ))}

            {/* Direct Primary Action Button */}
            <div className="pt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry('Direct Mobile Consultation');
                }}
                className="w-full py-4 bg-luxury-gold hover:bg-luxury-lightgold text-luxury-dark text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl text-center"
              >
                Initiate Business Inquiry
              </button>
            </div>
          </div>

          {/* Bottom Quick Contact Bar */}
          <div className="p-6 bg-[#161514] border-t border-white/10 space-y-3">
            <div className="text-[10px] uppercase tracking-widest text-luxury-lightgold font-medium">
              Direct Contact &amp; Support
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-luxury-sand">
              <a
                href={`tel:+91${COMPANY_INFO.phoneRaw}`}
                className="p-2.5 bg-white/5 border border-white/10 rounded flex items-center gap-2 hover:border-luxury-gold transition-colors text-white"
              >
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <span className="font-medium">+91 {COMPANY_INFO.phoneRaw}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-2.5 bg-white/5 border border-white/10 rounded flex items-center gap-2 hover:border-luxury-gold transition-colors text-white truncate"
              >
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
            </div>

            <div className="flex items-start gap-2 pt-1 text-[11px] text-luxury-sand/60 leading-tight">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
              <span>House No. 451, Inder Enclave, Phase-2, New Delhi - 110086</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
