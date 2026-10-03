import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Share2, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { events } from '../../data/events';

export const UpcomingEventsSection = () => {
  const { lang, isTelugu, t } = useLanguage();

  const handleShare = (event) => {
    const title = isTelugu ? event.title.te : event.title.en;
    const time = isTelugu ? event.time.te : event.time.en;
    const text = `Join us for ${title} at Mahanaim Prayer Ministries, Kandlagunta (${time}).`;
    if (navigator.share) {
      navigator.share({ title, text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title} - ${time} @ Mahanaim Kandlagunta`);
      alert("Event details copied to clipboard!");
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-midnight-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('events.badge')}
          title={t('events.title')}
          subtitle={t('events.subtitle')}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.slice(0, 3).map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-3xl overflow-hidden hover:shadow-sacred hover:border-gold-500/40 transition-all duration-300 flex flex-col group bg-white/70 dark:bg-midnight-900/70"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={isTelugu ? event.title.te : event.title.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-midnight-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold border border-gold-500/30">
                  {isTelugu ? event.categoryTe : event.category}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`font-serif font-bold text-lg sm:text-xl text-midnight-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? event.title.te : event.title.en}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{isTelugu ? event.dayName.te : event.dayName.en} ({event.date})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{isTelugu ? event.time.te : event.time.en}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="truncate">{isTelugu ? event.location.te : event.location.en}</span>
                    </div>
                  </div>

                  <p className={`text-xs text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed mb-4 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? event.description.te : event.description.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-midnight-800 flex items-center justify-between">
                  <button
                    onClick={() => handleShare(event)}
                    className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-gold-500 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{t('events.shareEvent')}</span>
                  </button>

                  <Link
                    to="/events"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 dark:text-gold-400 hover:gap-1.5 transition-all"
                  >
                    <span>{t('common.learnMore')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/events" variant="primary" icon={ArrowRight} iconPosition="right">
            {t('events.allServices')}
          </Button>
        </div>
      </div>
    </section>
  );
};
