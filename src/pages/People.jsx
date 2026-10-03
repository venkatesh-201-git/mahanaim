import React from 'react';
import { User, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { christianPeople } from '../data/people';

export const People = () => {
  const { lang, isTelugu, t } = useLanguage();

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <User className="w-3.5 h-3.5 text-gold-500" />
            {t('people.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('people.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('people.subtitle')}
          </p>
        </div>

        {/* Pioneers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {christianPeople.map((person) => (
            <div
              key={person.id}
              className="glass-card rounded-3xl overflow-hidden border border-gold-500/25 bg-white dark:bg-midnight-900 shadow-sacred hover:shadow-sacred-lg transition-all flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 h-56 sm:h-auto relative overflow-hidden shrink-0">
                <img
                  src={person.image}
                  alt={isTelugu ? person.name.te : person.name.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-midnight-950/80 text-gold-400 font-mono text-xs">
                  {isTelugu ? person.period.te : person.period.en}
                </div>
              </div>

              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-900 dark:text-white mb-1 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? person.name.te : person.name.en}
                  </h3>
                  <span className="text-xs uppercase font-semibold text-gold-600 dark:text-gold-400 block mb-3">
                    {isTelugu ? person.role.te : person.role.en}
                  </span>
                  <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? person.bio.te : person.bio.en}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gold-500/10 border-l-2 border-gold-500 text-xs italic text-stone-800 dark:text-stone-200">
                  {isTelugu ? person.keyVerse.te : person.keyVerse.en}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
