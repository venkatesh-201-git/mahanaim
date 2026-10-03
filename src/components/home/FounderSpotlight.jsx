import React from 'react';
import { HeartHandshake, BookOpen, ShieldCheck, Flame, MapPin, Sparkles, Phone, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { churchInfo } from '../../data/churchInfo';

export const FounderSpotlight = () => {
  const { isTelugu } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-sacred-50 via-white to-sacred-50 dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-950 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/10 dark:bg-gold-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/15 border border-gold-500/35 mb-4 shadow-sm">
            <Award className="w-4 h-4 text-gold-500" />
            {isTelugu ? 'దైవజనులు • వ్యవస్థాపకులు' : 'Spiritual Leadership & Founder'}
          </span>
          <h2 className="font-serif font-black text-2xl sm:text-4xl lg:text-5xl text-midnight-900 dark:text-white tracking-tight leading-tight">
            {isTelugu ? 'రెవ. సి. హెచ్. డేవిడ్ రాజు గారు' : 'Rev. Ch. David Raju Garu'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gold-600 dark:text-gold-400 font-semibold tracking-wide flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
            <span>{isTelugu ? 'వ్యవస్థాపకులు — మహనయీము ప్రార్థన మినిస్ట్రీస్ • కండ్లగుంట (PIN: 522603)' : 'Founder & Senior Servant — Mahanaim Prayer Ministries • Kandlagunta (PIN: 522603)'}</span>
          </p>
        </div>

        {/* Main Founder Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Dignified Founder Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] group">
              {/* Outer Golden Aura Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-500/30 via-amber-400/20 to-gold-600/30 rounded-3xl blur-lg group-hover:opacity-100 opacity-75 transition-opacity" />
              
              {/* Image Frame with Small Sacred Gold Border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/70 dark:border-gold-500/60 shadow-sacred-lg bg-midnight-900 aspect-[4/5] flex items-center justify-center">
                <img
                  src="/preist.png"
                  alt="Rev. Ch. David Raju Garu"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Title on Image */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-950 via-midnight-950/80 to-transparent p-4 sm:p-6 text-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-gold-400 block mb-1">
                    {isTelugu ? 'వ్యవస్థాపకులు' : 'Founder'}
                  </span>
                  <p className="font-serif font-bold text-lg sm:text-xl text-white">
                    {isTelugu ? 'రెవ. సి. హెచ్. డేవిడ్ రాజు గారు' : 'Rev. Ch. David Raju Garu'}
                  </p>
                  <p className="text-[11px] text-stone-300 mt-0.5">
                    {isTelugu ? 'కండ్లగుంట, పల్నాడు జిల్లా (522603)' : 'Kandlagunta, Palnadu Dist (522603)'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Powerful Spiritual Details & Legacy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mission Statement Box */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 bg-white/90 dark:bg-midnight-900/90 border border-gold-500/30 shadow-sacred">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-midnight-900 dark:text-white mb-3 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-gold-500" />
                <span>{isTelugu ? 'ఆత్మీయ దర్శనం & సేవా అంకితభావం' : 'Divine Vision & Dedicated Service'}</span>
              </h3>
              <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                {isTelugu 
                  ? 'కండ్లగుంట (PIN: 522603) కేంద్రంగా ప్రారంభమైన మహనయీము ప్రార్థన మినిస్ట్రీస్‌కు రెవ. సి. హెచ్. డేవిడ్ రాజు గారు దేవుని కృపతో ఆత్మీయ పునాది వేసి, వేలాది కుటుంబాలకు ప్రార్థనా వెలుగును అందించారు. ఎడతెగని విజ్ఞాపన ప్రార్థన, బైబిల్ వాక్య బోధన, మరియు పేదసాదల పట్ల క్రీస్తు ప్రేమతో సమాజాన్ని ఆదరిస్తూ దైవజనులుగా నిరంతరం పరిచర్య చేస్తున్నారు.'
                  : 'Founded by Rev. Ch. David Raju Garu in Kandlagunta (PIN: 522603), Mahanaim Prayer Ministries stands as a beacon of unceasing prayer, spiritual transformation, and biblical truth. With profound burden for souls and compassionate service toward the underprivileged, Rev. Ch. David Raju Garu faithfully shepherds believers into the grace of Jesus Christ.'
                }
              </p>
            </div>

            {/* 4 Powerful Ministry Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Pillar 1: Unceasing Prayer */}
              <div className="p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? '24/7 విజ్ఞాపన ప్రార్థన' : 'Unceasing Prayer'}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'కుటుంబాల క్షేమం, వ్యాధిగ్రస్తుల స్వస్థత కొరకు కన్నీటితో నిరంతర ప్రార్థన.' : 'Dedicated day & night intercession for broken families and the sick.'}
                  </p>
                </div>
              </div>

              {/* Pillar 2: Pure Bible Teaching */}
              <div className="p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? 'పరిశుద్ధ వాక్య పరిచర్య' : 'Sound Biblical Preaching'}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'లేఖన సత్యాలను శక్తివంతంగా బోధిస్తూ ఆత్మీయ క్రమశిక్షణ నేర్పించుట.' : 'Proclaiming Christ with scriptural depth and practical spiritual guidance.'}
                  </p>
                </div>
              </div>

              {/* Pillar 3: Compassion & Food Distribution */}
              <div className="p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? 'అన్నదాన & సేవా కార్యక్రమాలు' : 'Charity & Food Outreach'}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'కండ్లగుంట (522603) పరిసర గ్రామీణ పేదలకు నిరంతర ఆకలి తీర్చే అన్నదానం.' : 'Free food and essentials distribution for underprivileged rural families.'}
                  </p>
                </div>
              </div>

              {/* Pillar 4: Spiritual Guidance & Counseling */}
              <div className="p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? 'వ్యక్తిగత ఆత్మీయ ఆదరణ' : 'Spiritual Pastoral Care'}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'ప్రతి విశ్వాసికి వ్యక్తిగత ప్రార్థన, సలహాలు, సమాధానం అందించే దైవిక మార్గదర్శకత్వం.' : 'Compassionate personal prayer counsel and spiritual pastoral care.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Helpline Quick Contact Strip */}
            <div className="p-4 rounded-2xl bg-gold-500/10 dark:bg-gold-500/10 border border-gold-500/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-600 dark:text-gold-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">
                  {isTelugu ? 'ప్రార్థన విన్నపాల కొరకు సంప్రదించండి:' : 'For Prayer Requests & Ministry Guidance:'}
                </span>
              </div>
              <span className="font-bold text-sm text-gold-700 dark:text-gold-300 font-mono">
                {churchInfo.contact.phonePrimary}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
