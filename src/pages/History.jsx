import React from 'react';
import { History as HistoryIcon, Sparkles, MapPin, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { christianHistoryTimeline } from '../data/history';

export const History = () => {
  const { lang, isTelugu, t } = useLanguage();

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <HistoryIcon className="w-3.5 h-3.5 text-gold-500" />
            {t('history.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('history.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
            {t('history.subtitle')}
          </p>
        </div>

        {/* Chronological History Timeline */}
        <div className="relative border-l-2 border-gold-500/30 ml-4 sm:ml-8 md:ml-24 space-y-12">
          {christianHistoryTimeline.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10">
              {/* Timeline Marker */}
              <div className="absolute -left-[13px] top-6 w-6 h-6 rounded-full bg-gold-500 border-4 border-white dark:border-midnight-950 shadow-md" />

              <div className="glass-card rounded-3xl overflow-hidden border border-gold-500/25 bg-white dark:bg-midnight-900 shadow-sacred hover:shadow-sacred-lg transition-all">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Image (5 cols) */}
                  <div className="md:col-span-5 h-48 sm:h-full min-h-[200px] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={isTelugu ? item.title.te : item.title.en}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/70 via-transparent to-transparent md:hidden" />
                    
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-midnight-950/90 text-gold-400 font-mono text-xs font-bold border border-gold-500/30">
                      {item.era}
                    </div>
                  </div>

                  {/* Text Content (7 cols) */}
                  <div className="p-6 md:col-span-7 space-y-3">
                    <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-900 dark:text-white ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? item.title.te : item.title.en}
                    </h3>

                    <div className="space-y-1 text-xs text-stone-500 dark:text-stone-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        <span>{isTelugu ? item.location.te : item.location.en}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        <span>{isTelugu ? item.keyFigures.te : item.keyFigures.en}</span>
                      </div>
                    </div>

                    <p className={`text-sm text-stone-600 dark:text-stone-300 leading-relaxed ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? item.description.te : item.description.en}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
