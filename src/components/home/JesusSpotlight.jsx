import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Cross, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../common/Button';

export const JesusSpotlight = () => {
  const { lang, isTelugu, t } = useLanguage();

  const gospelTruths = [
    { en: "God's Unconditional Love for You (John 3:16)", te: "మీ పట్ల దేవుని అపారమైన ప్రేమ (యోహాను 3:16)" },
    { en: "Full Forgiveness of Sins through the Cross", te: "సిలువ బలియాగం ద్వారా సంపూర్ణ పాపక్షమాపణ" },
    { en: "Victory over Death & Fear through Resurrection", te: "పునరుత్థానం ద్వారా మరణ భయంపై విజయం" },
    { en: "Gift of Eternal Life & Peace in the Holy Spirit", te: "పరిశుద్ధాత్మ ద్వారా నిత్యజీవం మరియు సమాధానం" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-midnight-950 text-white relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gradient from-gold-500/10 via-transparent to-transparent pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-midnight-900 via-midnight-900/90 to-midnight-950 border border-gold-500/30 p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Content Col */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-300 bg-gold-500/20 border border-gold-400/30">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                {t('jesus.badge')}
              </span>

              <h2 className={`font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight ${
                isTelugu ? 'font-telugu leading-snug' : ''
              }`}>
                {t('jesus.title')}
              </h2>

              <p className="text-gold-300 italic text-base sm:text-lg border-l-2 border-gold-500 pl-4 py-1">
                {t('jesus.subtitle')}
              </p>

              <p className={`text-stone-300 text-sm sm:text-base leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {t('jesus.intro')}
              </p>

              {/* Gospel Truths List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {gospelTruths.map((truth, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-200">
                    <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{isTelugu ? truth.te : truth.en}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  to="/jesus"
                  variant="gold"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {t('jesus.exploreTimeline')}
                </Button>

                <Button
                  to="/prayer"
                  variant="outline"
                  size="md"
                  icon={Heart}
                >
                  {t('jesus.gospelMessage')}
                </Button>
              </div>
            </div>

            {/* Visual Col: High-end image with cross overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30">
                <img
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80"
                  alt="Jesus Christ the Savior"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-midnight-900/90 backdrop-blur-md border border-white/10 text-center">
                  <p className="font-serif text-gold-400 text-sm sm:text-base font-bold">
                    "I am the Way, the Truth, and the Life"
                  </p>
                  <p className="text-xs text-stone-300">
                    John 14:6 • యోహాను 14:6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
