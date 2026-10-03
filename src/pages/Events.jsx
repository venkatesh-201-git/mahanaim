import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Share2, Sparkles, Plus, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { events } from '../data/events';
import { churchInfo } from '../data/churchInfo';

export const Events = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('upcoming');

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
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            {t('events.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('events.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('events.subtitle')}
          </p>
        </div>

        {/* Regular Weekly Sanctuary Services Table/Grid */}
        <div>
          <SectionHeading
            badge="Weekly Altar"
            title={t('events.weeklyServices')}
            subtitle={isTelugu ? 'కండ్లగుంట మందిరంలో ప్రతివారం జరిగే ఆరాధనలు మరియు ప్రార్థనలు' : 'Regular weekly services held at the Mahanaim Sanctuary in Kandlagunta'}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churchInfo.weeklySchedule.map((service) => (
              <div
                key={service.id}
                className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-sacred ${
                  service.highlight
                    ? 'border-2 border-gold-500/40 bg-gradient-to-br from-white via-sacred-50 to-white dark:from-midnight-900 dark:via-midnight-950 dark:to-midnight-900'
                    : 'bg-white dark:bg-midnight-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30">
                      {service.day[lang]}
                    </span>
                    {service.highlight && (
                      <span className="text-[11px] uppercase font-bold text-gold-600 dark:text-gold-400">
                        ★ {isTelugu ? 'ముఖ్యమైనది' : 'Main Service'}
                      </span>
                    )}
                  </div>

                  <h3 className={`font-serif font-bold text-lg sm:text-xl text-midnight-900 dark:text-white mb-4 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {service.title[lang]}
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{service.time[lang]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="truncate">{service.location[lang]}</span>
                    </div>
                  </div>
                </div>

                <Button
                  href={churchInfo.address.directionsLink}
                  variant="outline"
                  size="sm"
                  className="w-full"
                  icon={MapPin}
                >
                  {t('events.directions')}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Special Gatherings & Conventions */}
        <div className="pt-8">
          <SectionHeading
            badge="Revival Gatherings"
            title={t('events.specialEvents')}
            subtitle="Upcoming spiritual conventions and celebrations"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="glass-card rounded-3xl overflow-hidden hover:shadow-sacred-lg border border-gold-500/30 transition-all flex flex-col group bg-white dark:bg-midnight-900"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={isTelugu ? event.title.te : event.title.en}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-midnight-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold border border-gold-500/30">
                    {isTelugu ? event.categoryTe : event.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-900 dark:text-white mb-4 ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? event.title.te : event.title.en}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>{isTelugu ? event.dayName.te : event.dayName.en}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>{isTelugu ? event.time.te : event.time.en}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>{isTelugu ? event.location.te : event.location.en}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <User className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>{isTelugu ? event.speaker.te : event.speaker.en}</span>
                      </div>
                    </div>

                    <p className={`text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6 ${
                      isTelugu ? 'font-telugu' : ''
                    }`}>
                      {isTelugu ? event.description.te : event.description.en}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 dark:border-midnight-800 flex items-center justify-between">
                    <button
                      onClick={() => handleShare(event)}
                      className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-gold-500"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{t('events.shareEvent')}</span>
                    </button>

                    <Button
                      href={churchInfo.address.directionsLink}
                      variant="gold"
                      size="sm"
                      icon={MapPin}
                    >
                      {t('events.directions')}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
