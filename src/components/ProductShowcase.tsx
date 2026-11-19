import React, { useState } from 'react';
import { FEATURED_PRODUCTS } from '../data/content';
import { Product } from '../types';
import { Eye, ArrowUpRight } from 'lucide-react';
import { ProductModal } from './ProductModal';

interface ProductShowcaseProps {
  selectedCategoryFilter: string;
  onFilterChange: (category: string) => void;
  onInquire: (subject: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedCategoryFilter,
  onFilterChange,
  onInquire
}) => {
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  const categoriesList = [
    'All',
    'Tote Bags',
    'Shoulder Bags',
    'Handbags',
    'Crossbody Bags',
    'Fashion Bags',
    'Everyday Bags'
  ];

  const filteredProducts =
    selectedCategoryFilter === 'All'
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter(
          (p) => p.category.toLowerCase() === selectedCategoryFilter.toLowerCase()
        );

  return (
    <section id="showcase" className="py-24 sm:py-32 bg-luxury-cream text-luxury-dark relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-[1px] bg-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-luxury-taupe">
              Handbag Showcase
            </span>
            <div className="w-6 h-[1px] bg-luxury-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-luxury-dark">
            Made to Make a Statement.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-luxury-taupe font-light leading-relaxed">
            A curated selection of sample handbag silhouettes reflecting our manufacturing standards, ergonomic harmony, and uncompromising attention to detail.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categoriesList.map((cat) => {
              const isActive =
                selectedCategoryFilter.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => onFilterChange(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-300 font-medium ${
                    isActive
                      ? 'bg-luxury-espresso text-luxury-cream border-luxury-espresso shadow-md'
                      : 'bg-luxury-warmwhite text-luxury-charcoal hover:bg-luxury-sand/50 border border-luxury-sand'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-luxury-warmwhite border border-luxury-sand/80 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-luxury-gold/60"
            >
              {/* Product Image Frame with Click to Inspect */}
              <div
                onClick={() => setActiveProductModal(product)}
                className="relative aspect-[4/5] overflow-hidden bg-luxury-sand/20 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Subtle Overlay Tag */}
                <div className="absolute top-3 left-3 bg-luxury-dark/75 backdrop-blur-sm text-luxury-sand text-[9px] uppercase tracking-[0.2em] px-2.5 py-1">
                  {product.category}
                </div>

                {/* Hover Quick View Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 bg-luxury-cream text-luxury-dark px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-luxury-gold" />
                    <span>View Details</span>
                  </div>
                </div>
              </div>

              {/* Product Info Block */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-luxury-warmwhite">
                <div>
                  <h3
                    onClick={() => setActiveProductModal(product)}
                    className="font-serif text-xl sm:text-2xl font-normal text-luxury-dark tracking-wide cursor-pointer hover:text-luxury-brown transition-colors"
                  >
                    {product.name}
                  </h3>

                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-luxury-gold font-medium">
                    {product.category}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-luxury-charcoal/80 font-light leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-5 mt-5 border-t border-luxury-sand/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProductModal(product)}
                    className="text-xs uppercase tracking-[0.18em] font-medium text-luxury-espresso hover:text-luxury-gold transition-colors flex items-center gap-1 group-hover:underline"
                  >
                    <span>Inspect Silhouette</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-luxury-gold" />
                  </button>
                  <span className="text-[10px] uppercase tracking-wider text-luxury-taupe font-mono">
                    Showcase
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if category filter has no match */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-luxury-warmwhite border border-luxury-sand">
            <p className="font-serif text-xl text-luxury-dark">
              No sample designs currently categorized under &ldquo;{selectedCategoryFilter}&rdquo;.
            </p>
            <p className="text-xs text-luxury-taupe mt-2">
              We design and manufacture bespoke handbag collections across all categories upon consultation.
            </p>
            <button
              onClick={() => onFilterChange('All')}
              className="mt-5 px-6 py-2.5 bg-luxury-espresso text-luxury-cream text-xs uppercase tracking-[0.2em] font-medium"
            >
              Show All Designs
            </button>
          </div>
        )}

        {/* Informative Showcase Disclaimer Box */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-luxury-taupe font-medium">
            Strictly Informative Brand Showcase • Non-Ecommerce • Custom Manufacturing Inquiries Welcomed
          </p>
        </div>
      </div>

      {/* Modal View for Detailed Specifications */}
      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
