import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Music, Flame, Smile, Heart, Compass, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { ministries } from '../../data/ministries';

export const MinistriesPreview = () => {
  const { lang, isTelugu, t } = useLanguage();

  const iconMap = {
    HeartHandshake,
    Music,
    Flame,
    Smile,
    Heart,
    Compass,
  };

  return (
    <section className="py-16 sm:py-24 bg-sacred-50 dark:bg-midnight-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('ministries.badge')}
          title={t('ministries.title')}
          subtitle={t('ministries.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ministries.slice(0, 6).map((ministry) => {
            const IconComponent = iconMap[ministry.icon] || HeartHandshake;
            return (
              <div
                key={ministry.id}
                className="glass-card rounded-3xl overflow-hidden hover:shadow-sacred-lg hover:border-gold-500/40 transition-all duration-300 flex flex-col group"
              >
                {/* Image header with category icon */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={isTelugu ? ministry.title.te : ministry.title.en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Icon Pill */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-gold-500 text-midnight-950 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className={`font-serif font-bold text-lg sm:text-xl text-midnight-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? ministry.title.te : ministry.title.en}
                    </h3>
                    <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-2 mb-4 leading-relaxed ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? ministry.shortDesc.te : ministry.shortDesc.en}
                    </p>
                  </div>

                  <Link
                    to={`/ministries`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold-600 dark:text-gold-400 group-hover:gap-2 transition-all mt-auto"
                  >
                    <span>{t('ministries.learnMore')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button to="/ministries" variant="primary" icon={ArrowRight} iconPosition="right">
            {t('ministries.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};
