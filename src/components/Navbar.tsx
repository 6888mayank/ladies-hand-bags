import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-luxury-cream/95 backdrop-blur-md py-4 shadow-sm border-b border-luxury-sand/60'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Name / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-3 focus:outline-none"
        >
          {/* Logo Badge */}
          <div
            className={`transition-all duration-300 p-1 ${
              isScrolled
                ? 'bg-transparent'
                : 'bg-luxury-cream/95 shadow-md border border-luxury-gold/30'
            }`}
          >
            <img
              src="/images/logo.jpg"
              alt="Byte Bridges India Logo"
              className={`h-8 sm:h-10 w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'mix-blend-multiply' : ''
              }`}
            />
          </div>

          <div className="flex flex-col items-start">
            <span
              className={`font-serif tracking-[0.2em] text-base sm:text-lg md:text-xl font-semibold uppercase transition-colors duration-300 leading-tight ${
                isScrolled ? 'text-luxury-dark group-hover:text-luxury-brown' : 'text-white'
              }`}
            >
              Byte Bridges India
            </span>
            <span
              className={`text-[8px] sm:text-[9px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-300 ${
                isScrolled ? 'text-luxury-taupe' : 'text-luxury-sand/80'
              }`}
            >
              Handbags • Fashion • Elegance
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
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

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`p-2 transition-colors ${
              isScrolled ? 'text-luxury-dark' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-luxury-cream/98 backdrop-blur-xl border-b border-luxury-sand/70 shadow-2xl py-8 px-6 animate-fade-in transition-all">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-luxury-dark text-base uppercase tracking-[0.2em] font-serif py-2 border-b border-luxury-sand/40 hover:text-luxury-gold transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-luxury-taupe font-sans tracking-widest">→</span>
              </a>
            ))}

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry('Manufacturing Consultation');
                }}
                className="w-full text-center py-3.5 bg-luxury-espresso text-luxury-cream uppercase tracking-[0.2em] text-xs font-semibold hover:bg-luxury-brown transition-colors shadow-sm"
              >
                Initiate Business Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
