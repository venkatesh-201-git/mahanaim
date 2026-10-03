import React from 'react';
import { Shield, Sparkles, BookOpen, Flame, Heart, Compass, CheckCircle2, MapPin, Users, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { churchInfo } from '../data/churchInfo';

export const About = () => {
  const { lang, isTelugu, t } = useLanguage();

  const values = [
    { key: 'prayer', icon: Flame, title: t('values.prayer.title'), desc: t('values.prayer.desc') },
    { key: 'word', icon: BookOpen, title: t('values.word.title'), desc: t('values.word.desc') },
    { key: 'grace', icon: Heart, title: t('values.grace.title'), desc: t('values.grace.desc') },
    { key: 'holiness', icon: Shield, title: t('values.holiness.title'), desc: t('values.holiness.desc') },
    { key: 'outreach', icon: Compass, title: t('values.outreach.title'), desc: t('values.outreach.desc') },
    { key: 'fellowship', icon: Users, title: t('values.fellowship.title'), desc: t('values.fellowship.desc') },
  ];

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            {t('nav.about')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {churchInfo.name[lang]}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {churchInfo.tagline[lang]}
          </p>
        </div>

        {/* Biblical Meaning Section: Genesis 32:2 */}
        <div className="rounded-3xl bg-white dark:bg-midnight-900 p-8 sm:p-12 border border-gold-500/25 shadow-sacred-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-semibold tracking-wider text-gold-600 dark:text-gold-400">
                {t('aboutMahanaim.badge')}
              </span>
              <h2 className={`font-serif font-bold text-2xl sm:text-4xl text-midnight-900 dark:text-white ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {t('aboutMahanaim.meaningTitle')}
              </h2>
              <div className="p-4 rounded-xl bg-gold-500/10 border-l-4 border-gold-500 text-stone-800 dark:text-stone-200 italic">
                {t('aboutMahanaim.scriptureRef')}
              </div>
              <p className={`text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {t('aboutMahanaim.meaningDesc')}
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-gold-500/20">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                alt="Sanctuary and Mountain of Prayer"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-8 border-gold-500/30">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className={`font-serif font-bold text-2xl text-midnight-900 dark:text-white mb-4 ${
              isTelugu ? 'font-telugu' : ''
            }`}>
              {t('aboutMahanaim.visionTitle')}
            </h3>
            <p className={`text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
              {t('aboutMahanaim.visionDesc')}
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 border-gold-500/30">
            <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-600 dark:text-gold-400 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className={`font-serif font-bold text-2xl text-midnight-900 dark:text-white mb-4 ${
              isTelugu ? 'font-telugu' : ''
            }`}>
              {t('aboutMahanaim.missionTitle')}
            </h3>
            <p className={`text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
              {t('aboutMahanaim.missionDesc')}
            </p>
          </div>
        </div>

        {/* Ministry Core Pillars */}
        <div>
          <SectionHeading
            badge="Divine Pillars"
            title={t('values.title')}
            subtitle={t('values.subtitle')}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.key} className="glass-card rounded-2xl p-6 hover:shadow-sacred group transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className={`font-bold text-lg text-midnight-900 dark:text-white mb-2 ${isTelugu ? 'font-telugu' : ''}`}>
                    {v.title}
                  </h4>
                  <p className={`text-sm text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Kandlagunta Roots */}
        <div className="rounded-3xl bg-midnight-950 text-white p-8 sm:p-12 border border-gold-500/30 text-center max-w-4xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 mx-auto flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
            {churchInfo.address.village[lang]} — Sanctuary of Grace
          </h3>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {isTelugu
              ? 'కండ్లగుంట గ్రామంలో వెలసిన మహనయీము ప్రార్థన పరిచర్య పరిసర గ్రామాల ప్రజలకు, ఆత్మీయ ఆదరణ కోరే ప్రతి ఒక్కరికీ వెలుగు దీపముగా నిలుస్తోంది.'
              : 'Located in Kandlagunta (PIN 522603), Palnadu / Guntur region, Mahanaim Prayer Ministries serves as a spiritual beacon and house of prayer for all people.'}
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="gold" icon={HeartHandshake}>
              {t('nav.contact')}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
