import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { churchInfo } from '../../data/churchInfo';

export const MapAndLocationSection = () => {
  const { lang, isTelugu, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-midnight-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t('map.badge')}
          title={t('map.title')}
          subtitle={`${churchInfo.address.village[lang]}, PIN ${churchInfo.address.pincode}, ${churchInfo.address.district[lang]}, ${churchInfo.address.state[lang]}`}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card (5 Cols) */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sacred bg-sacred-50/60 dark:bg-midnight-900/80 border border-gold-500/25">
            <div className="space-y-6">
              {/* Address Box */}
              <div>
                <span className="text-xs uppercase font-semibold text-gold-600 dark:text-gold-400 tracking-wider block mb-2">
                  {t('map.addressTitle')}
                </span>
                <div className="flex items-start gap-3 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <p>
                    <strong className="block text-midnight-900 dark:text-white font-serif font-bold text-base sm:text-lg">
                      {churchInfo.name[lang]}
                    </strong>
                    {churchInfo.address.street[lang]}, {churchInfo.address.village[lang]}, PIN {churchInfo.address.pincode}<br />
                    {churchInfo.address.district[lang]}, {churchInfo.address.state[lang]}
                  </p>
                </div>
              </div>

              {/* Weekly Service Hours */}
              <div className="pt-4 border-t border-stone-200 dark:border-midnight-800">
                <span className="text-xs uppercase font-semibold text-gold-600 dark:text-gold-400 tracking-wider block mb-3">
                  {t('map.serviceTimingTitle')}
                </span>
                
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300">
                    <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{t('map.sundayService')}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300">
                    <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{t('map.fridayPrayer')}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-stone-700 dark:text-stone-300">
                    <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{t('map.cottagePrayer')}</span>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="pt-4 border-t border-stone-200 dark:border-midnight-800 space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>{churchInfo.contact.phonePrimary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold-500" />
                  <span>{churchInfo.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-6 mt-6 border-t border-stone-200 dark:border-midnight-800">
              <Button
                href={churchInfo.address.directionsLink}
                variant="gold"
                size="md"
                className="w-full"
                icon={Navigation}
              >
                {t('map.directionsBtn')}
              </Button>
            </div>
          </div>

          {/* Interactive Google Map Embed (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-sacred-lg border border-gold-500/30 h-[380px] lg:h-auto min-h-[350px] relative bg-stone-100 dark:bg-midnight-900">
            <iframe
              title="Mahanaim Prayer Ministries Location Map - Kandlagunta"
              src={churchInfo.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
            />

            {/* Floating Location Pill on Map */}
            <div className="absolute top-4 left-4 p-3 rounded-2xl bg-midnight-950/90 text-white backdrop-blur-md border border-gold-500/30 text-xs shadow-lg hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 animate-bounce" />
              <div>
                <p className="font-bold text-white">{churchInfo.name[lang]}</p>
                <p className="text-stone-300 text-[11px]">Kandlagunta, 522603</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
