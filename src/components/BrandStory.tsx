import React from 'react';
import { motion } from 'framer-motion';

interface BrandStoryProps {
  onInquire: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onInquire }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-dark text-white">
      {/* Background Campaign Imagery */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 6, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop"
            alt="Byte Bridges India Visual Fashion Brand Story"
            className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.1]"
          />
        </motion.div>

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/40 to-luxury-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/70 via-transparent to-luxury-dark/60" />
      </div>

      {/* Editorial Frame Border */}
      <div className="absolute inset-6 sm:inset-12 border border-luxury-sand/20 pointer-events-none z-10" />

      {/* Editorial Centerpiece */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-luxury-lightgold" />
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-luxury-lightgold">
            Editorial Brand Campaign
          </span>
          <div className="w-8 h-[1px] bg-luxury-lightgold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight mb-8 text-white"
        >
          Style Is in <br />
          <span className="italic font-light text-luxury-lightgold font-serif">Every Detail.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl text-luxury-sand font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          From the choice of materials to the final finishing touches, our approach reflects a passion for handbags, design and everyday elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={onInquire}
            className="px-8 py-4 bg-luxury-lightgold hover:bg-white text-luxury-dark font-sans text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-2xl"
          >
            Connect With Our Atelier
          </button>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/15 flex flex-wrap justify-center items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-luxury-sand/70">
          <span>Curated Leathers</span>
          <span>•</span>
          <span>Bespoke Hardware</span>
          <span>•</span>
          <span>Modern Functional Architecture</span>
        </div>
      </div>
    </section>
  );
};
