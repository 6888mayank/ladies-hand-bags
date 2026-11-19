import React from 'react';
import { Compass, ShieldCheck, Sparkles, Eye, Check } from 'lucide-react';
import { WHY_US_PILLARS } from '../data/content';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-luxury-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-luxury-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-luxury-gold" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-luxury-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-luxury-gold" />;
    }
  };

  return (
    <section id="quality" className="py-24 sm:py-32 bg-luxury-cream text-luxury-dark relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-[1px] bg-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-luxury-taupe">
              Our Core Principles
            </span>
            <div className="w-6 h-[1px] bg-luxury-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-luxury-dark">
            What Defines Our Approach.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-luxury-taupe font-light leading-relaxed">
            Four guiding pillars that guide every sketch, leather cut, and finished handbag leaving Byte Bridges India.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="group relative bg-luxury-warmwhite p-8 border border-luxury-sand/80 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-luxury-gold/70 hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Icon + Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-luxury-cream border border-luxury-sand rounded-none shadow-sm group-hover:border-luxury-gold transition-colors">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="font-mono text-xs text-luxury-taupe/60 tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-luxury-dark group-hover:text-luxury-brown transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-luxury-gold font-medium">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-luxury-charcoal/80 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-luxury-sand/50 flex items-center justify-between text-[11px] text-luxury-taupe">
                <span className="uppercase tracking-widest font-mono">Byte Bridges Standard</span>
                <Check className="w-3.5 h-3.5 text-luxury-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="mt-16 bg-luxury-sand/30 border-l-2 border-luxury-gold p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-serif italic text-lg sm:text-xl text-luxury-espresso text-center sm:text-left leading-relaxed">
            &ldquo;Craftsmanship is not merely an assembly process; it is our respect for the material and the woman who carries it.&rdquo;
          </p>
          <div className="shrink-0 text-center sm:text-right">
            <span className="block text-xs uppercase tracking-[0.2em] font-semibold text-luxury-dark">
              Byte Bridges India
            </span>
            <span className="block text-[11px] text-luxury-taupe uppercase tracking-widest">
              Design &amp; Atelier Team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
