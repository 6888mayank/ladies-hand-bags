import React, { useState } from 'react';
import { ArrowUp, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; content: string[] } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPrivacy = () => {
    setLegalModalContent({
      title: 'Privacy Policy — Byte Bridges India',
      content: [
        'Byte Bridges India respects your privacy regarding any business inquiry or technical communication sent through this platform.',
        '1. Information Collection: We only collect contact credentials (name, email, telephone, company notes) voluntarily submitted for business inquiry or manufacturing discussions.',
        '2. Use of Information: Collected details are solely utilized to respond to your product requirements, formulate manufacturing quotes, or furnish requested showcase catalogs.',
        '3. Non-Disclosure & IP Protection: All private design sketches, tech packs, brand assets, and custom silhouette requests remain strictly confidential.',
        '4. Third-Party Policy: We do not sell, rent, or trade your contact information to external marketing agencies or unauthorized third parties.',
        'For inquiries regarding data records, reach our compliance team at privacy@bytebridgesindia.com.'
      ]
    });
  };

  const openTerms = () => {
    setLegalModalContent({
      title: 'Terms & Conditions — Byte Bridges India',
      content: [
        'Welcome to the official brand showcase of Byte Bridges India.',
        '1. Informative Showcase Nature: This website is purely informative and designed to exhibit our handbag manufacturing prowess, craftsmanship standards, and silhouette categories. It does not operate as an online store, nor does it conduct retail consumer transactions.',
        '2. Intellectual Property: All handbag designs, photographic assets, text content, logos, and brand marks displayed are the intellectual property of Byte Bridges India or presented under authorized commercial license.',
        '3. Commercial Inquiries: Commercial manufacturing agreements, minimum order quantities (MOQs), delivery lead times, and fabrication specifications are formalized through customized commercial agreements.',
        '4. Accuracy of Information: While we endeavor to ensure all manufacturing descriptions accurately reflect our atelier capabilities, technical specifications may evolve with continuous material refinement.'
      ]
    });
  };

  return (
    <footer className="bg-luxury-dark text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block p-2.5 bg-luxury-cream border border-luxury-gold/40 shadow-lg">
              <img
                src="/images/logo.jpg"
                alt="Byte Bridges India Logo"
                className="h-12 sm:h-14 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.18em] uppercase text-white">
              Byte Bridges India
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-luxury-lightgold font-sans font-medium">
              Women&apos;s Handbag Manufacturing &amp; Atelier
            </p>
            <p className="text-xs sm:text-sm text-luxury-sand/80 font-light leading-relaxed max-w-sm pt-2">
              Designing, manufacturing and showcasing women&apos;s handbags that combine contemporary fashion, functionality, and thoughtful craftsmanship for modern women worldwide.
            </p>
            <div className="pt-2 text-xs text-luxury-sand/80 space-y-0.5">
              <span className="block font-medium text-white">{COMPANY_INFO.addressLine1}</span>
              <span className="block text-luxury-sand/70">{COMPANY_INFO.addressLine2}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-luxury-lightgold mb-4">
              Explore Atelier
            </h4>
            <ul className="space-y-2 text-xs text-luxury-sand/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Brand
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Handbag Collections
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  Signature Showcase
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-white transition-colors">
                  Manufacturing Journey
                </a>
              </li>
              <li>
                <a href="#quality" className="hover:text-white transition-colors">
                  Craftsmanship Quality
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Social Relations */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] font-medium text-luxury-lightgold mb-4">
              Business Connections
            </h4>
            <p className="text-xs text-luxury-sand/80 font-light leading-relaxed">
              We welcome dialogue with international retail buyers, luxury fashion houses, and boutique entrepreneurs.
            </p>

            <div className="pt-1 text-xs text-luxury-sand/80 space-y-1">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-luxury-lightgold block">Direct Email:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-luxury-lightgold transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-luxury-lightgold block">Phone / WhatsApp:</span>
                <a href={`tel:+91${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-luxury-lightgold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-block px-5 py-2.5 border border-luxury-gold/60 text-luxury-lightgold hover:bg-luxury-gold hover:text-luxury-dark text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300"
              >
                Inquire For Manufacturing
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-luxury-sand/60">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} BYTE BRIDGES INDIA. All Rights Reserved.
            </span>
            <div className="flex items-center space-x-4">
              <button
                onClick={openPrivacy}
                className="hover:text-luxury-lightgold transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={openTerms}
                className="hover:text-luxury-lightgold transition-colors underline-offset-4 hover:underline"
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-widest uppercase text-luxury-sand/50 hidden lg:inline">
              Informative Brand Showcase
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 bg-luxury-charcoal border border-white/15 hover:border-luxury-gold text-luxury-sand hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] uppercase tracking-wider font-mono">TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-xl w-full bg-luxury-cream text-luxury-dark p-8 border border-luxury-sand shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 p-2 text-luxury-dark hover:text-luxury-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl text-luxury-dark mb-4 pr-8">
              {legalModalContent.title}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-luxury-charcoal/85 leading-relaxed font-light">
              {legalModalContent.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-luxury-sand text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-5 py-2 bg-luxury-espresso text-luxury-cream text-xs uppercase tracking-widest font-medium"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
