import React from 'react';
import { HeartHandshake, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';
import { churchInfo } from '../../data/churchInfo';

export const PrayerCTASection = () => {
  const { lang, isTelugu, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-midnight-950 via-midnight-900 to-midnight-950 text-white relative overflow-hidden">
      {/* Decorative Gold Light Ray */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-300 bg-gold-500/20 border border-gold-400/30 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          {t('prayerRequest.badge')}
        </span>

        <h2 className={`font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6 ${
          isTelugu ? 'font-telugu leading-snug' : ''
        }`}>
          {t('prayerRequest.title')}
        </h2>

        <p className={`text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10 ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {t('prayerRequest.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            to="/prayer"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto"
            icon={HeartHandshake}
          >
            {t('prayerRequest.submitBtn')}
          </Button>

          <Button
            href={`tel:${churchInfo.contact.phonePrimary.replace(/[^0-9+]/g, '')}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            icon={Phone}
          >
            {t('prayerRequest.helplineTitle')}
          </Button>
        </div>

        {/* Confidentiality Notice */}
        <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
          <ShieldCheck className="w-4 h-4 text-gold-400" />
          <span>{isTelugu ? 'మీ ప్రార్థన విన్నపం అత్యంత గోప్యంగా ఉంచబడుతుంది.' : 'All prayer requests are treated with utmost spiritual confidentiality and faith.'}</span>
        </div>
      </div>
    </section>
  );
};
