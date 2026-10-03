import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, BookOpen, Flame, Heart, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const MeaningOfMahanaim = () => {
  const { lang, isTelugu, t } = useLanguage();

  const pillars = [
    { key: 'prayer', icon: Flame, title: t('values.prayer.title'), desc: t('values.prayer.desc') },
    { key: 'word', icon: BookOpen, title: t('values.word.title'), desc: t('values.word.desc') },
    { key: 'grace', icon: Heart, title: t('values.grace.title'), desc: t('values.grace.desc') },
    { key: 'holiness', icon: Shield, title: t('values.holiness.title'), desc: t('values.holiness.desc') },
    { key: 'outreach', icon: Compass, title: t('values.outreach.title'), desc: t('values.outreach.desc') },
    { key: 'fellowship', icon: Sparkles, title: t('values.fellowship.title'), desc: t('values.fellowship.desc') },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-midnight-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout: Meaning Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Biblical Exposition & Visual Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/25">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              {t('aboutMahanaim.badge')}
            </span>

            <h2 className={`font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-midnight-900 dark:text-white leading-tight ${
              isTelugu ? 'font-telugu leading-snug' : ''
            }`}>
              {t('aboutMahanaim.title')}
            </h2>

            <div className="p-4 rounded-2xl bg-sacred-100/60 dark:bg-midnight-900/80 border-l-4 border-gold-500 text-sm sm:text-base italic text-stone-800 dark:text-stone-200">
              {t('aboutMahanaim.scriptureRef')}
            </div>

            <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed ${
              isTelugu ? 'font-telugu' : ''
            }`}>
              {t('aboutMahanaim.meaningDesc')}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-midnight-900 dark:text-white">
                    {t('aboutMahanaim.visionTitle')}
                  </h4>
                  <p className="text-sm text-stone-600 dark:text-stone-300">
                    {t('aboutMahanaim.visionDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-base font-bold text-midnight-900 dark:text-white">
                    {t('aboutMahanaim.missionTitle')}
                  </h4>
                  <p className="text-sm text-stone-600 dark:text-stone-300">
                    {t('aboutMahanaim.missionDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button to="/about" variant="primary" icon={ArrowRight} iconPosition="right">
                {t('aboutMahanaim.learnMore')}
              </Button>
            </div>
          </div>

          {/* Right Column: Layered Visual Graphic Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Background Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold-500/30 group">
                <img
                  src="https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80"
                  alt="Hosts of Angels at Mahanaim"
                  className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/40 to-transparent" />
                
                {/* Floating Overlay Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-midnight-900/90 backdrop-blur-md border border-gold-500/30 text-white">
                  <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold block mb-1">
                    Genesis 32:2 • מַחֲנַיִם
                  </span>
                  <p className="text-sm sm:text-base font-serif font-bold text-white">
                    {isTelugu ? 'దేవుని రక్షక దూతల సైన్యం దిగిన పవిత్ర స్థలము' : 'The Sacred Ground of God\'s Protecting Host'}
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    Kandlagunta, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* Decorative Floating Card */}
              <div className="hidden sm:block absolute -top-6 -right-6 p-4 rounded-2xl bg-white dark:bg-midnight-800 shadow-xl border border-gold-500/20 max-w-[200px] animate-float">
                <div className="w-8 h-8 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-500 mb-2">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-midnight-900 dark:text-white">
                  {isTelugu ? 'రెండు సేనలు' : 'Two Heavenly Hosts'}
                </p>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">
                  Divine Protection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="pt-10 border-t border-stone-200 dark:border-midnight-800">
          <SectionHeading
            badge="Foundations of Faith"
            title={t('values.title')}
            subtitle={t('values.subtitle')}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.key}
                  className="glass-card rounded-2xl p-6 hover:shadow-sacred hover:border-gold-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 dark:bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <PillarIcon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold text-midnight-900 dark:text-white mb-2 ${isTelugu ? 'font-telugu' : ''}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-sm text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
