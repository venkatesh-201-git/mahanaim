import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Lightbox = ({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
}) => {
  const { isTelugu } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <span className="text-xs font-mono text-stone-400">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-midnight-950 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-midnight-950 transition-colors disabled:opacity-30"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-gold-500 hover:text-midnight-950 transition-colors disabled:opacity-30"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div 
        className="max-w-5xl max-h-[85vh] p-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImg.image}
          alt={isTelugu ? currentImg.title.te : currentImg.title.en}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        <div className="mt-4 text-center max-w-2xl text-white">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-gold-400">
            {isTelugu ? currentImg.title.te : currentImg.title.en}
          </h3>
          {currentImg.caption && (
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {isTelugu ? currentImg.caption.te : currentImg.caption.en}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
