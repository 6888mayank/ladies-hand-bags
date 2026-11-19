import React, { useEffect, useState } from 'react';
import { X, Sparkles, Layers, Box, CheckCircle2, ArrowRight, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onInquire: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onInquire }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      setActiveImage(product.image);
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  // Determine complementary views for the product
  const getAlternativeViews = () => {
    const views = [{ label: 'Primary View', img: product.image }];

    if (product.id.includes('tote')) {
      views.push({
        label: product.id.includes('tan') ? 'Midnight Black' : 'Cognac Tan',
        img: product.id.includes('tan') ? '/images/products/tote-black.jpg' : '/images/products/tote-tan.jpg'
      });
    }

    if (product.id.includes('quilted') || product.id.includes('fancy')) {
      views.push({
        label: '360° Internal & Rear View',
        img: '/images/products/quilted-multiangle.jpg'
      });

      if (product.id.includes('mauve')) {
        views.push({
          label: 'Midnight Black',
          img: product.id.includes('quilted') ? '/images/products/quilted-black.jpg' : '/images/products/satchel-black.jpg'
        });
      } else if (product.id.includes('black')) {
        views.push({
          label: 'Dusty Rose / Mauve',
          img: product.id.includes('quilted') ? '/images/products/quilted-mauve.jpg' : '/images/products/satchel-mauve.jpg'
        });
      }
    }

    return views;
  };

  const alternativeViews = getAlternativeViews();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md transition-opacity duration-300 overflow-y-auto">
      {/* Backdrop click area */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl bg-luxury-cream border border-luxury-gold/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col md:flex-row animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-luxury-dark/70 hover:bg-luxury-dark text-white hover:text-luxury-lightgold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Handbag Image Preview & Alternative View Switcher */}
        <div className="md:w-1/2 relative bg-luxury-sand/30 min-h-[340px] md:min-h-full flex flex-col justify-between overflow-hidden">
          <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden bg-black/5">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            <div className="absolute bottom-3 left-3 z-10 bg-luxury-dark/85 backdrop-blur-sm text-luxury-sand text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 border border-luxury-gold/30">
              Byte Bridges Inspection View
            </div>
          </div>

          {/* Alternative Angles / Colorway Thumbnails */}
          {alternativeViews.length > 1 && (
            <div className="p-3 bg-luxury-warmwhite border-t border-luxury-sand/70">
              <span className="text-[10px] uppercase tracking-[0.18em] text-luxury-taupe font-medium block mb-2 flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-luxury-gold" />
                <span>Perspective &amp; Color Variants</span>
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {alternativeViews.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(v.img)}
                    className={`flex items-center gap-2 p-1 border text-left transition-all ${
                      activeImage === v.img
                        ? 'border-luxury-gold bg-luxury-cream shadow-sm ring-1 ring-luxury-gold'
                        : 'border-luxury-sand hover:border-luxury-brown/50 bg-white/70'
                    }`}
                  >
                    <img src={v.img} alt={v.label} className="w-9 h-9 object-cover" />
                    <span className="text-[10px] text-luxury-dark font-medium whitespace-nowrap pr-1.5">
                      {v.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Handbag Details & Specifications */}
        <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-luxury-gold">
                {product.category}
              </span>
              <span className="text-luxury-sand">•</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-taupe">
                Byte Bridges India
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-luxury-dark tracking-tight">
              {product.name}
            </h3>

            <p className="mt-1 text-xs italic text-luxury-taupe font-serif">
              &ldquo;{product.tagline}&rdquo;
            </p>

            <p className="mt-4 text-xs sm:text-sm text-luxury-charcoal/85 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Specifications Matrix */}
            <div className="mt-6 pt-6 border-t border-luxury-sand/70 space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-luxury-dark uppercase tracking-wider text-[11px] block">
                    Material &amp; Hide:
                  </span>
                  <span className="text-luxury-taupe">{product.details.material}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-luxury-dark uppercase tracking-wider text-[11px] block">
                    Hardware Accents:
                  </span>
                  <span className="text-luxury-taupe">{product.details.hardware}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Box className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-luxury-dark uppercase tracking-wider text-[11px] block">
                    Lining &amp; Dimensions:
                  </span>
                  <span className="text-luxury-taupe">
                    {product.details.lining} — {product.details.dimensions}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Features List */}
            <div className="mt-6 pt-5 border-t border-luxury-sand/50">
              <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-luxury-dark mb-2.5">
                Craftsmanship Highlights
              </h4>
              <ul className="space-y-1.5">
                {product.details.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-luxury-charcoal/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action: Inquire for Manufacturing / Samples */}
          <div className="mt-8 pt-6 border-t border-luxury-sand">
            <button
              onClick={() => {
                onClose();
                onInquire(`Inquiry for design: ${product.name} (${product.category})`);
              }}
              className="w-full py-3.5 px-6 bg-luxury-espresso hover:bg-luxury-brown text-luxury-cream text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>Inquire About This Design</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-2 text-center text-[10px] text-luxury-taupe tracking-wider uppercase">
              Informative B2B showcase • Custom production &amp; private label available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
