import React from 'react';
import { HeartHandshake, Music, Flame, Smile, Heart, Compass, CheckCircle2, BookOpen, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ministries } from '../data/ministries';

export const Ministries = () => {
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
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-gold-500" />
            {t('ministries.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('ministries.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('ministries.subtitle')}
          </p>
        </div>

        {/* Detailed Ministries List */}
        <div className="space-y-12">
          {ministries.map((m, idx) => {
            const Icon = iconMap[m.icon] || HeartHandshake;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={m.id}
                className="glass-card rounded-3xl overflow-hidden border border-gold-500/30 p-6 sm:p-10 bg-white dark:bg-midnight-900 shadow-sacred hover:shadow-sacred-lg transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Image (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gold-500/20 group">
                      <img
                        src={m.image}
                        alt={isTelugu ? m.title.te : m.title.en}
                        className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-gold-500 text-midnight-950 flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content (7 cols) */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className={`font-serif font-bold text-2xl sm:text-3xl text-midnight-900 dark:text-white ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? m.title.te : m.title.en}
                    </h3>

                    <div className="p-3.5 rounded-xl bg-gold-500/10 border-l-4 border-gold-500 text-xs sm:text-sm italic text-stone-800 dark:text-stone-200">
                      {isTelugu ? m.scripture.te : m.scripture.en}
                    </div>

                    <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? m.longDesc.te : m.longDesc.en}
                    </p>

                    {/* Key Activities List */}
                    <div className="pt-2">
                      <span className="text-xs uppercase font-semibold text-gold-600 dark:text-gold-400 tracking-wider block mb-2">
                        {isTelugu ? 'ముఖ్య కార్యకలాపాలు:' : 'Key Ministry Activities:'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(isTelugu ? m.activities.te : m.activities.en).map((act, aIdx) => (
                          <div key={aIdx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                            <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Button to="/prayer" variant="gold" size="sm" icon={HeartHandshake}>
                        {t('prayerRequest.badge')}
                      </Button>
                      <Button to="/contact" variant="outline" size="sm">
                        {t('nav.contact')}
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
