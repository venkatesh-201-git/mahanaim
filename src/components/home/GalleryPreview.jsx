import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, Maximize2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Lightbox } from '../common/Lightbox';
import { galleryPhotos } from '../../data/gallery';

export const GalleryPreview = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const previewPhotos = galleryPhotos.slice(0, 6);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-sacred-50 dark:bg-midnight-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
          align="center"
        />

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {previewPhotos.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-44 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-sacred-lg border border-gold-500/20 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={isTelugu ? item.title.te : item.title.en}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-midnight-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {isTelugu ? item.categoryLabel.te : item.categoryLabel.en}
                </span>
                <p className="text-xs sm:text-sm font-serif font-bold text-white line-clamp-1">
                  {isTelugu ? item.title.te : item.title.en}
                </p>
                <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/gallery" variant="primary" icon={ArrowRight} iconPosition="right">
            {t('gallery.viewAll')}
          </Button>
        </div>
      </div>

      <Lightbox
        images={previewPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % previewPhotos.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + previewPhotos.length) % previewPhotos.length)}
      />
    </section>
  );
};
