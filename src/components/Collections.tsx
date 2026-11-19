import React from 'react';
import { CATEGORIES } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface CollectionsProps {
  onSelectCategory: (categoryName: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-luxury-warmwhite text-luxury-dark border-t border-luxury-sand/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-luxury-sand">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-luxury-gold" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-luxury-taupe">
                Handbag Categories
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-luxury-dark">
              Discover Our Collection.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-luxury-taupe font-light max-w-xl">
              Designed to complement every occasion, every outfit and every moment.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <span className="text-xs tracking-[0.2em] uppercase text-luxury-taupe font-medium">
              {CATEGORIES.length} Signature Lines • B2B Showcase
            </span>
          </div>
        </div>

        {/* 8 Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              className="group relative bg-luxury-cream border border-luxury-sand/70 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-luxury-gold/50"
            >
              {/* Image Frame with Hover Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-luxury-sand/30">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.96]"
                  loading="lazy"
                />
                
                {/* Category Number Badge */}
                <div className="absolute top-4 left-4 z-10 bg-luxury-dark/80 backdrop-blur-sm text-luxury-sand text-[10px] font-mono px-2.5 py-1 tracking-widest uppercase">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text & Content Block */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-luxury-cream">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-luxury-dark tracking-wide group-hover:text-luxury-brown transition-colors">
                    {cat.name}
                  </h3>
                  
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-luxury-gold font-medium">
                    {cat.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-luxury-charcoal/80 font-light leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                {/* Action button */}
                <div className="pt-6 mt-4 border-t border-luxury-sand/50">
                  <button
                    onClick={() => onSelectCategory(cat.name)}
                    className="w-full py-2.5 px-4 bg-luxury-warmwhite hover:bg-luxury-espresso hover:text-luxury-cream text-luxury-dark text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 flex items-center justify-between border border-luxury-sand group-hover:border-luxury-brown"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collection Note */}
        <div className="mt-14 p-6 bg-luxury-cream border border-luxury-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
            <p className="text-xs sm:text-sm text-luxury-taupe font-light">
              Looking for custom manufacturing specs, private label finishes, or bespoke silhouette variations?
            </p>
          </div>
          <button
            onClick={() => onSelectCategory('All')}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-luxury-dark hover:text-luxury-gold transition-colors whitespace-nowrap"
          >
            View All Featured Designs ↓
          </button>
        </div>
      </div>
    </section>
  );
};
