import React from 'react';
import { HeartHandshake, BookOpen, ShieldCheck, Flame, MapPin, Sparkles, Phone, Award, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { churchInfo } from '../../data/churchInfo';

export const FounderSpotlight = () => {
  const { isTelugu } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-sacred-50 via-white to-sacred-50 dark:from-midnight-950 dark:via-midnight-900 dark:to-midnight-950 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gold-500/10 dark:bg-gold-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-amber-500/10 dark:bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/15 border border-gold-500/35 mb-3 sm:mb-4 shadow-sm">
            <Award className="w-4 h-4 text-gold-500 shrink-0" />
            <span>{isTelugu ? 'అభిషిక్త దైవజనులు • వ్యవస్థాపకులు' : 'Ordained Minister of God • Founder'}</span>
          </div>
          <h2 className="font-serif font-black text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-midnight-900 dark:text-white tracking-tight leading-tight">
            {isTelugu ? 'రెవ. సి. హెచ్. డేవిడ్ రాజు గారు' : 'Rev. Ch. David Raju Garu'}
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gold-600 dark:text-gold-400 font-semibold tracking-wide flex items-center justify-center gap-1.5 flex-wrap">
            <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
            <span>{isTelugu ? 'వ్యవస్థాపకులు — మహనయీము ప్రార్థన మినిస్ట్రీస్ • కండ్లగుంట (PIN: 522603)' : 'Founder & Senior Pastor — Mahanaim Prayer Ministries • Kandlagunta (PIN: 522603)'}</span>
          </p>
        </div>

        {/* Main Founder Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Dignified Founder Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] group">
              {/* Outer Golden Aura Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-500/30 via-amber-400/20 to-gold-600/30 rounded-3xl blur-lg group-hover:opacity-100 opacity-75 transition-opacity" />
              
              {/* Image Frame with Small Sacred Gold Border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/80 dark:border-gold-500/70 shadow-sacred-lg bg-midnight-900 aspect-[4/5] flex items-center justify-center">
                <img
                  src="/preist.png"
                  alt="Rev. Ch. David Raju Garu"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Ordained Minister Golden Badge Top-Right */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-midnight-950/90 text-gold-300 border border-gold-400/50 text-[10px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-md flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>{isTelugu ? 'పవిత్ర అభిషేకం (Ordained)' : 'Ordained Minister'}</span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-950 via-midnight-950/85 to-transparent p-4 sm:p-5 text-center">
                  <span className="text-xs uppercase font-bold tracking-widest text-gold-400 block mb-0.5">
                    {isTelugu ? 'వ్యవస్థాపకులు' : 'Founder'}
                  </span>
                  <p className="font-serif font-bold text-base sm:text-lg text-white">
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
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Mission & Ordination Statement Box */}
            <div className="glass-card rounded-2xl p-5 sm:p-7 bg-white/95 dark:bg-midnight-900/95 border border-gold-500/30 shadow-sacred">
              <div className="flex items-center gap-2 mb-2.5">
                <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />
                <h3 className="font-serif font-bold text-base sm:text-lg text-midnight-900 dark:text-white">
                  {isTelugu ? 'దైవిక అభిషేకం & ఆత్మీయ ప్రతిష్ఠాపన' : 'Holy Ordination & Pastoral Calling'}
                </h3>
              </div>
              <p className="text-stone-700 dark:text-stone-300 text-xs sm:text-sm sm:leading-relaxed">
                {isTelugu 
                  ? 'కండ్లగుంట (PIN: 522603) కేంద్రంగా ప్రారంభమైన మహనయీము ప్రార్థన మినిస్ట్రీస్‌కు రెవ. సి. హెచ్. డేవిడ్ రాజు గారు పవిత్ర అభిషేకం (Holy Ordination) పొంది, దేవుని మహిమాన్విత పిలుపుతో పరిచర్య చేస్తున్నారు. ఎడతెగని 24/7 విజ్ఞాపన ప్రార్థన, స్వస్థతలు, లేఖన సత్యాల బోధన మరియు నిరుపేదలకు క్రీస్తు ప్రేమతో అన్నదానం చేస్తూ అనేక కుటుంబాలకు ఆత్మీయ వెలుగుగా నిలుస్తున్నారు.'
                  : 'Ordained with holy pastoral calling, Rev. Ch. David Raju Garu founded Mahanaim Prayer Ministries in Kandlagunta (PIN: 522603). Standing as a consecrated servant of God, he dedicates his life to 24/7 intercessory prayer, prophetic biblical preaching, spiritual deliverance, and extensive charity food outreach for the rural poor.'
                }
              </p>
            </div>

            {/* 4 Powerful Ministry Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              
              {/* Pillar 1: Unceasing Prayer */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? '24/7 విజ్ఞాపన ప్రార్థన' : 'Unceasing Prayer'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'కుటుంబాల క్షేమం, వ్యాధిగ్రస్తుల స్వస్థత కొరకు కన్నీటితో నిరంతర ప్రార్థన.' : 'Dedicated day & night intercession for broken families and the sick.'}
                  </p>
                </div>
              </div>

              {/* Pillar 2: Pure Bible Teaching */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? 'పరిశుద్ధ వాక్య పరిచర్య' : 'Sound Biblical Preaching'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'లేఖన సత్యాలను శక్తివంతంగా బోధిస్తూ ఆత్మీయ క్రమశిక్షణ నేర్పించుట.' : 'Proclaiming Christ with scriptural depth and practical spiritual guidance.'}
                  </p>
                </div>
              </div>

              {/* Pillar 3: Compassion & Food Distribution */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? 'అన్నదాన & సేవా కార్యక్రమాలు' : 'Charity & Food Outreach'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'కండ్లగుంట (522603) పరిసర గ్రామీణ పేదలకు నిరంతర ఆకలి తీర్చే అన్నదానం.' : 'Free food and essentials distribution for underprivileged rural families.'}
                  </p>
                </div>
              </div>

              {/* Pillar 4: Spiritual Guidance & Counseling */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-midnight-800/80 border border-gold-500/20 shadow-sm flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-400">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-midnight-900 dark:text-white">
                    {isTelugu ? 'వ్యక్తిగత ఆత్మీయ ఆదరణ' : 'Pastoral Prayer Care'}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 dark:text-stone-300 mt-1 leading-normal">
                    {isTelugu ? 'ప్రతి విశ్వాసికి వ్యక్తిగత ప్రార్థన, సలహాలు, సమాధానం అందించే దైవిక మార్గదర్శకత్వం.' : 'Compassionate personal prayer counsel and spiritual pastoral care.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Contact & WhatsApp Action Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gold-500/15 via-amber-400/10 to-gold-500/15 border border-gold-500/35 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                    {isTelugu ? 'ప్రార్థన విన్నపాలు & సంప్రదింపులు:' : 'Direct Prayer Contact & Helpline:'}
                  </p>
                  <p className="text-xs sm:text-sm font-mono font-black text-gold-700 dark:text-gold-300 tracking-wide">
                    +91 78423 65349
                  </p>
                </div>
              </div>

              {/* Call & WhatsApp Quick Buttons */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="tel:+917842365349"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold-500 text-midnight-950 hover:bg-gold-400 font-bold text-xs transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isTelugu ? 'ఫోన్ చేయండి' : 'Call Now'}</span>
                </a>
                <a
                  href="https://wa.me/917842365349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 font-bold text-xs transition-all shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
