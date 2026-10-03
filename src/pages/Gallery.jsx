import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Lightbox } from '../components/common/Lightbox';
import { galleryPhotos } from '../data/gallery';

export const Gallery = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories = [
    { id: 'all', en: 'All Moments', te: 'అన్ని చిత్రాలు' },
    { id: 'worship', en: 'Worship', te: 'ఆరాధన' },
    { id: 'prayer', en: 'Prayer Gatherings', te: 'ప్రార్థన' },
    { id: 'youth', en: 'Youth & Kids', te: 'యూత్ & సండే స్కూల్' },
    { id: 'outreach', en: 'Gospel Outreach', te: 'సువార్త మినిస్ట్రీ' },
    { id: 'conventions', en: 'Conventions', te: 'మహాసభలు' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-gold-500" />
            {t('gallery.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('gallery.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gold-500 text-midnight-950 shadow-sm font-bold'
                  : 'bg-white dark:bg-midnight-900 text-stone-600 dark:text-stone-300 hover:bg-gold-500/15 border border-stone-200 dark:border-midnight-800'
              }`}
            >
              {isTelugu ? cat.te : cat.en}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-sacred-lg border border-gold-500/20 transition-all duration-300"
            >
              <img
                src={photo.image}
                alt={isTelugu ? photo.title.te : photo.title.en}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 via-midnight-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400 mb-1">
                  {isTelugu ? photo.categoryLabel.te : photo.categoryLabel.en}
                </span>
                <p className="text-sm font-serif font-bold text-white mb-1">
                  {isTelugu ? photo.title.te : photo.title.en}
                </p>
                <p className="text-xs text-stone-300 line-clamp-2">
                  {isTelugu ? photo.caption.te : photo.caption.en}
                </p>
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Lightbox
        images={filteredPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)}
      />
    </div>
  );
};
