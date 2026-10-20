import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, BookOpen, Flame, Heart, Compass, CheckCircle2, ArrowRight, Church } from 'lucide-react';
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
    <section className="py-10 sm:py-16 md:py-20 bg-white dark:bg-[#070F1E] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Editorial Split Layout: Meaning Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Biblical Exposition & Meaning */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* Badge */}
            <div className="flex items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                {t('aboutMahanaim.badge')}
              </span>
            </div>

            {/* Heading: Single straight line & small font weight as requested */}
            <h2 className={`text-[17px] xs:text-xl sm:text-2xl md:text-3xl font-medium sm:font-normal text-stone-900 dark:text-stone-100 whitespace-nowrap overflow-hidden text-ellipsis tracking-tight sm:tracking-normal ${
              isTelugu ? 'font-telugu leading-snug' : 'font-serif'
            }`}>
              {t('aboutMahanaim.title')}
            </h2>

            {/* Scripture Reference Quote Box */}
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/70 dark:bg-midnight-900/90 border-l-4 border-amber-500 dark:border-amber-400 border border-amber-200/60 dark:border-amber-500/20 shadow-xs">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-300">
                  {isTelugu ? 'ఆదికాండము 32:2' : 'Genesis 32:2'}
                </span>
              </div>
              <p className={`text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-normal italic leading-relaxed ${
                isTelugu ? 'font-telugu not-italic' : ''
              }`}>
                {t('aboutMahanaim.scriptureRef')}
              </p>
            </div>

            {/* Explanation paragraph: Clear, high contrast, readable */}
            <p className={`text-xs sm:text-sm md:text-base text-stone-700 dark:text-stone-300 font-normal leading-relaxed ${
              isTelugu ? 'font-telugu' : ''
            }`}>
              {t('aboutMahanaim.meaningDesc')}
            </p>

            {/* Vision & Mission Cards: Highly mobile friendly & clean */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {/* Vision Card */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50 dark:bg-midnight-900/70 border border-stone-200 dark:border-midnight-800 hover:border-amber-400/50 transition-colors flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h4 className={`text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 ${isTelugu ? 'font-telugu' : ''}`}>
                    {t('aboutMahanaim.visionTitle')}
                  </h4>
                  <p className={`text-[11px] sm:text-xs md:text-sm text-stone-600 dark:text-stone-300 font-normal mt-0.5 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                    {t('aboutMahanaim.visionDesc')}
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50 dark:bg-midnight-900/70 border border-stone-200 dark:border-midnight-800 hover:border-amber-400/50 transition-colors flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h4 className={`text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 ${isTelugu ? 'font-telugu' : ''}`}>
                    {t('aboutMahanaim.missionTitle')}
                  </h4>
                  <p className={`text-[11px] sm:text-xs md:text-sm text-stone-600 dark:text-stone-300 font-normal mt-0.5 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                    {t('aboutMahanaim.missionDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Learn More Button */}
            <div className="pt-2">
              <Button to="/about" variant="primary" size="sm" icon={ArrowRight} iconPosition="right" className="font-normal text-xs sm:text-sm">
                {t('aboutMahanaim.learnMore')}
              </Button>
            </div>
          </div>

          {/* Right Column: Natural Church Sanctuary Picture (Mobile Friendly & Optimized WebP) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Natural Church Photo Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 border-amber-400/40 dark:border-gold-500/30 group bg-stone-900">
                <img
                  src="/church-natural.webp"
                  alt="Mahanaim Prayer Sanctuary Church in Nature - Kandlagunta"
                  className="w-full h-64 xs:h-72 sm:h-96 lg:h-[430px] object-cover object-center transition-transform duration-700 group-hover:scale-102"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Subtle soft gradient at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Top Badge: Natural Sanctuary */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
                    <Church className="w-3.5 h-3.5 text-amber-300" />
                    <span>{isTelugu ? 'పవిత్ర ప్రార్థనా మందిరం' : 'Holy Prayer Sanctuary'}</span>
                  </span>
                </div>

                {/* Bottom Overlay Badge on Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/70 backdrop-blur-md border border-amber-400/40 text-white">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-300 font-semibold block mb-0.5">
                    Genesis 32:2 • מַחֲנַיִם
                  </span>
                  <p className="text-xs sm:text-sm md:text-base font-normal text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {isTelugu ? 'దేవుని రక్షక దూతల సైన్యం కావలి ఉన్న పవిత్ర స్థలము' : 'The Sacred Ground of God\'s Protecting Host'}
                  </p>
                  <p className="text-[10px] sm:text-xs text-stone-300 mt-0.5 font-light">
                    Kandlagunta (522603), Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Floating Pill (Hidden on small mobile, visible on tablet+) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-xl bg-white dark:bg-midnight-900 shadow-lg border border-amber-400/30 items-center gap-2.5 max-w-[200px]">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900 dark:text-white leading-tight">
                    {isTelugu ? 'రెండు సేనలు' : 'Two Hosts'}
                  </p>
                  <p className="text-[10px] text-stone-500 dark:text-stone-400 font-light">
                    Divine Protection
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Pillars Grid: Responsive & Clean */}
        <div className="pt-8 sm:pt-12 border-t border-stone-200 dark:border-midnight-800">
          <SectionHeading
            badge="Foundations of Faith"
            title={t('values.title')}
            subtitle={t('values.subtitle')}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 mt-6 sm:mt-8">
            {pillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.key}
                  className="rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-stone-50 dark:bg-midnight-900/60 border border-stone-200 dark:border-midnight-800 hover:border-amber-400/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <PillarIcon className="w-5 h-5 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className={`text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100 mb-1.5 ${isTelugu ? 'font-telugu' : ''}`}>
                    {pillar.title}
                  </h3>
                  <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-normal leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
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
