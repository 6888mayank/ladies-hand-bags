import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { Maximize2 } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'detail' | 'craft' | 'lifestyle' | 'hardware'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { label: 'All Perspectives', value: 'all' },
    { label: 'Craft & Atelier', value: 'craft' },
    { label: 'Material & Texture', value: 'detail' },
    { label: 'Hardware Accents', value: 'hardware' },
    { label: 'Lifestyle in Motion', value: 'lifestyle' },
  ];

  const filteredItems =
    selectedFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-luxury-warmwhite text-luxury-dark border-t border-luxury-sand">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-[1px] bg-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-luxury-taupe">
              Visual Archives
            </span>
            <div className="w-6 h-[1px] bg-luxury-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-luxury-dark">
            A Closer Look.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-luxury-taupe font-light leading-relaxed">
            Examine our leather grain selections, precision machine and hand saddle stitching, anti-tarnish hardware components, and finished creations.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value as any)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 font-medium ${
                  selectedFilter === tab.value
                    ? 'bg-luxury-espresso text-luxury-cream border border-luxury-espresso shadow'
                    : 'bg-luxury-cream text-luxury-charcoal hover:bg-luxury-sand/40 border border-luxury-sand/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry-Inspired Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => {
            const isTall = idx % 3 === 0;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden bg-luxury-sand/20 border border-luxury-sand cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-luxury-gold ${
                  isTall ? 'sm:row-span-2 aspect-[3/4] sm:aspect-auto' : 'aspect-[4/3] sm:aspect-[4/5]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

                {/* Hover Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-luxury-lightgold font-semibold">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl text-white mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-luxury-sand/80 mt-1 line-clamp-2 font-light">
                      {item.caption}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-luxury-lightgold">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand View</span>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-luxury-sand text-[9px] font-mono px-2 py-0.5 opacity-80 group-hover:opacity-0 transition-opacity">
                  {item.category.toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Lightbox Modal */}
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      </div>
    </section>
  );
};
