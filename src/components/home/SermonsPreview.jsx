import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { sermons } from '../../data/sermons';

export const SermonsPreview = () => {
  const { lang, isTelugu, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-sacred-100/40 dark:bg-midnight-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('sermons.badge')}
          title={t('sermons.title')}
          subtitle={t('sermons.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sermons.slice(0, 3).map((sermon) => (
            <div
              key={sermon.id}
              className="glass-card rounded-3xl overflow-hidden hover:shadow-sacred hover:border-gold-500/40 transition-all duration-300 flex flex-col group bg-white dark:bg-midnight-900"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sermon.thumbnail}
                  alt={isTelugu ? sermon.title.te : sermon.title.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-midnight-950/40 flex items-center justify-center group-hover:bg-midnight-950/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-midnight-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-midnight-950/80 backdrop-blur-md text-stone-200 text-xs font-mono">
                  {sermon.duration}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isTelugu ? sermon.passage.te : sermon.passage.en}</span>
                  </div>

                  <h3 className={`font-serif font-bold text-lg sm:text-xl text-midnight-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? sermon.title.te : sermon.title.en}
                  </h3>

                  <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed mb-4 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? sermon.description.te : sermon.description.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-midnight-800 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold-500" />
                    <span className="truncate">{isTelugu ? sermon.speaker.te : sermon.speaker.en}</span>
                  </div>

                  <Link
                    to="/sermons"
                    className="font-semibold text-gold-600 dark:text-gold-400 hover:underline"
                  >
                    {t('sermons.watchNow')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/sermons" variant="primary" icon={ArrowRight} iconPosition="right">
            {t('sermons.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};
