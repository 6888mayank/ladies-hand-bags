import React from 'react';
import { Scissors, Sparkles, Feather, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onLearnMore?: () => void;
  onExploreCraft: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreCraft }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-luxury-cream text-luxury-dark relative overflow-hidden">
      {/* Subtle decorative background watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 select-none pointer-events-none opacity-[0.03] font-serif text-[280px] leading-none text-luxury-brown font-light">
        BYTE
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-luxury-gold" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-luxury-taupe">
            About Byte Bridges India
          </span>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Narrative, Features */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-[1.15] text-luxury-dark">
              A Vision of Style, Design &amp; <br />
              <span className="italic font-light text-luxury-brown">Craftsmanship.</span>
            </h2>

            <div className="space-y-5 text-luxury-charcoal/85 text-base sm:text-lg leading-relaxed font-light">
              <p>
                <strong className="font-medium text-luxury-dark">Byte Bridges India</strong> is focused on designing and manufacturing stylish women&apos;s handbags that combine contemporary fashion, functionality and thoughtful craftsmanship. Our vision is to create products that complement the lifestyle of modern women through elegant design, practical usability and attention to detail.
              </p>
              <p className="text-sm sm:text-base text-luxury-taupe/95">
                From structural concept sketches to precision leather skiving, our integrated manufacturing atelier merges classical bench-craft with modern production consistency. Each silhouette reflects a disciplined study in proportion, comfortable weight distribution, and tactile luxury.
              </p>
            </div>

            {/* Core Values Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-luxury-sand/70">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-none bg-luxury-warmwhite border border-luxury-sand text-luxury-brown">
                  <Scissors className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-luxury-dark tracking-wide">
                    Artisanal Benchwork
                  </h4>
                  <p className="text-xs text-luxury-taupe mt-1 leading-relaxed">
                    Hand-painted edge coatings, saddle stitching, and reinforced gussets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-none bg-luxury-warmwhite border border-luxury-sand text-luxury-brown">
                  <Sparkles className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-luxury-dark tracking-wide">
                    Modern Silhouettes
                  </h4>
                  <p className="text-xs text-luxury-taupe mt-1 leading-relaxed">
                    Ergonomic drops and interior architecture tailored for contemporary routines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-none bg-luxury-warmwhite border border-luxury-sand text-luxury-brown">
                  <Feather className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-luxury-dark tracking-wide">
                    Sensory Materials
                  </h4>
                  <p className="text-xs text-luxury-taupe mt-1 leading-relaxed">
                    Carefully curated full-grain hides, vegetable leathers, and soft micro-suedes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-none bg-luxury-warmwhite border border-luxury-sand text-luxury-brown">
                  <ShieldCheck className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-luxury-dark tracking-wide">
                    Manufacturing Integrity
                  </h4>
                  <p className="text-xs text-luxury-taupe mt-1 leading-relaxed">
                    Rigorous multi-stage inspection ensuring flawless dimensional tolerances.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <button
                onClick={onExploreCraft}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-luxury-espresso hover:text-luxury-gold transition-colors pb-1 border-b border-luxury-brown/40 hover:border-luxury-gold"
              >
                <span>Discover Our Manufacturing Process</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Multi-Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Handbag Lifestyle */}
              <div className="relative z-10 overflow-hidden shadow-2xl border border-luxury-sand">
                <img
                  src="/images/products/quilted-black.jpg"
                  alt="Byte Bridges India Handbag Craftsmanship"
                  className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-lightgold">
                    Atelier Craft
                  </span>
                  <p className="font-serif text-lg text-white mt-1">
                    Sculptural silhouettes tailored for everyday poise.
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Inset: Artisan Hands / Manufacturing Detail */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 z-20 w-52 sm:w-60 overflow-hidden border-4 border-luxury-cream shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
                  alt="Handbag stitching and production detail"
                  className="w-full h-44 object-cover"
                />
                <div className="bg-luxury-espresso p-3 text-luxury-sand">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
                    Stitching &amp; Finishing
                  </p>
                  <p className="text-xs font-serif text-white">
                    Precision benchwork execution
                  </p>
                </div>
              </div>

              {/* Floating Aesthetic Logo Badge */}
              <div className="absolute -top-6 -right-6 z-20 bg-luxury-cream border border-luxury-gold/50 p-4 shadow-xl hidden sm:block text-center max-w-[170px]">
                <img
                  src="/images/logo.jpg"
                  alt="Byte Bridges India Brand Mark"
                  className="h-12 w-auto object-contain mx-auto mix-blend-multiply mb-1"
                />
                <span className="block text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-medium">
                  Official Atelier
                </span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-luxury-taupe mt-0.5">
                  Est. India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
