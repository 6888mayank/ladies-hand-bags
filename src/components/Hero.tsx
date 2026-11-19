import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreCollections: () => void;
  onAboutBrand: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollections, onAboutBrand }) => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-dark text-white">
      {/* Background Image with Slow Zoom & Luxury Grain */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2000&auto=format&fit=crop"
            alt="Byte Bridges India Luxury Handbag Campaign"
            className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05]"
          />
        </motion.div>

        {/* Sophisticated Dual Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/45 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/70 via-transparent to-luxury-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Decorative Luxury Lines & Frame Accents */}
      <div className="absolute inset-8 md:inset-12 border border-luxury-lightgold/15 pointer-events-none z-10 hidden sm:block" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Official Brand Logo Plaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <div className="p-2 sm:p-2.5 bg-luxury-cream/95 backdrop-blur-md border border-luxury-gold/50 shadow-2xl inline-block">
            <img
              src="/images/logo.jpg"
              alt="Byte Bridges India Official Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mix-blend-multiply"
            />
          </div>
        </motion.div>

        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-gold/40 bg-black/35 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-medium text-luxury-sand">
            Byte Bridges India • Handbag Manufacturing & Design
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight max-w-4xl mb-6 text-white"
        >
          Elegance Crafted for <br className="hidden sm:inline" />
          <span className="italic font-light text-luxury-lightgold font-serif">Everyday Life.</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-luxury-sand/90 font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Creating stylish, thoughtfully designed handbags that blend elegance, functionality and craftsmanship for the modern woman.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <button
            onClick={onExploreCollections}
            className="w-full sm:w-auto px-8 py-4 bg-luxury-cream text-luxury-dark hover:bg-luxury-gold hover:text-white transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-lg hover:shadow-xl"
          >
            Explore Our Collection
          </button>
          
          <button
            onClick={onAboutBrand}
            className="w-full sm:w-auto px-8 py-4 border border-white/60 text-white hover:bg-white/10 hover:border-white transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-sm"
          >
            About Our Brand
          </button>
        </motion.div>

        {/* Informative Showcase Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex items-center justify-center gap-6 text-[10px] tracking-[0.25em] text-luxury-sand/60 uppercase"
        >
          <span>Exclusive B2B Showcase</span>
          <span>•</span>
          <span>Bespoke Handbag Craftsmanship</span>
          <span>•</span>
          <span>Export-Grade Quality</span>
        </motion.div>
      </div>

      {/* Bottom Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
        onClick={onAboutBrand}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-luxury-sand/70 mb-2 group-hover:text-luxury-lightgold transition-colors">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-7 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-luxury-lightgold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
