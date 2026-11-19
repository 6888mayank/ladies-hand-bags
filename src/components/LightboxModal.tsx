import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex !== null) {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight' && currentIndex !== null) {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in p-4 sm:p-8">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        aria-label="Previous Image"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        aria-label="Next Image"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Main Content */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border border-white/10"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-medium">
            Byte Bridges India • {currentItem.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-white mt-1">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-luxury-sand/80 mt-1 font-light">
            {currentItem.caption}
          </p>
          <div className="text-[10px] font-mono text-luxury-taupe mt-2 tracking-widest">
            {currentIndex + 1} OF {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
