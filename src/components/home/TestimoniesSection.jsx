import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { testimonies } from '../../data/testimonies';

export const TestimoniesSection = () => {
  const { lang, isTelugu, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-midnight-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('testimonies.badge')}
          title={t('testimonies.title')}
          subtitle={t('testimonies.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonies.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-8 relative flex flex-col justify-between hover:shadow-sacred-lg hover:border-gold-500/40 transition-all duration-300 group bg-sacred-50/50 dark:bg-midnight-900/60"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5" />
              </div>

              {/* Quote Content */}
              <p className={`text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed italic mb-8 ${
                isTelugu ? 'font-telugu-serif not-italic' : ''
              }`}>
                "{isTelugu ? item.quote.te : item.quote.en}"
              </p>

              {/* Author & Category Footer */}
              <div className="pt-4 border-t border-stone-200 dark:border-midnight-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-midnight-900 dark:text-white">
                    {isTelugu ? item.author.te : item.author.en}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {isTelugu ? item.location.te : item.location.en}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30">
                  {isTelugu ? item.category.te : item.category.en}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Button to="/testimonies" variant="primary" icon={ArrowRight} iconPosition="right">
            {t('testimonies.badge')}
          </Button>

          <Button to="/prayer" variant="gold" icon={HeartHandshake}>
            {t('testimonies.shareTestimony')}
          </Button>
        </div>
      </div>
    </section>
  );
};
