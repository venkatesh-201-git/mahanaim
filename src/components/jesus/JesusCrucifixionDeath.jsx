import React, { useState } from 'react';
import { Cross, BookOpen, ShieldCheck, Heart, Sparkles, ChevronRight, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SEVEN_SAYINGS_DATA } from '../../data/jesusHistoricalData';

export const JesusCrucifixionDeath = () => {
  const { isTelugu } = useLanguage();
  const [selectedSaying, setSelectedSaying] = useState(SEVEN_SAYINGS_DATA[0]);

  return (
    <section id="crucifixion" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-500/10 border border-rose-500/30">
          <Cross className="w-3.5 h-3.5 text-rose-500" />
          {isTelugu ? 'కల్వరి సిలువ & ఏడు మాటలు' : 'The Cross at Golgotha & The 7 Sayings'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'రోమన్ సిలువ మరణం & సిలువపై పలికిన 7 దివ్య వాక్కులు' : 'The Crucifixion & The Seven Sayings from the Cross'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'రోమన్ సిలువ శిక్షా పద్ధతి, గొల్గొతా కపాల స్థలం, సమాప్తమైన విమోచన యాగం మరియు సువార్తలలో నమోదైన ఏడు మాటల సమగ్ర లేఖనాత్మక విశ్లేషణ.'
            : 'Explore Roman execution practices, the trilingual inscription, and the seven final statements recorded across the four Gospels.'}
        </p>
      </div>

      {/* Historical Facts on Roman Crucifixion */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-midnight-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>{isTelugu ? 'చారిత్రక వాస్తవాలు:' : 'Historical Reality of Roman Crucifixion:'}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-1">
              <span className="font-bold text-stone-900 dark:text-stone-100 block">
                {isTelugu ? '1. బహిరంగ అవమాన శిక్ష' : '1. Supreme Public Penalty'}
              </span>
              <p className="text-stone-600 dark:text-stone-300">
                {isTelugu
                  ? 'రోమన్ పౌరులకు ఈ శిక్ష విధించబడదు; తిరుగుబాటుదారులకు, బానిసలకు మాత్రమే విధించే అత్యంత క్రూరమైన బహిరంగ మరణశిక్ష.'
                  : 'Reserved for rebels, treason, and violent outlaws to deter rebellion against Rome.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-1">
              <span className="font-bold text-stone-900 dark:text-stone-100 block">
                {isTelugu ? '2. త్రిభాషా నామఫలకం (INRI)' : '2. Trilingual Titulus'}
              </span>
              <p className="text-stone-600 dark:text-stone-300">
                {isTelugu
                  ? 'హీబ్రూ, లాటిన్, గ్రీకు భాషలలో "నజరేయుడైన యేసు యూదుల రాజు" అని సిలువపై బోర్డు ఉంచబడింది.'
                  : 'Posted above Jesus\' head in Hebrew, Latin, and Greek: "Jesus the Nazarene, King of the Jews".'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-1">
              <span className="font-bold text-stone-900 dark:text-stone-100 block">
                {isTelugu ? '3. సమయం & నిశ్చయత' : '3. Approximate Timing'}
              </span>
              <p className="text-stone-600 dark:text-stone-300">
                {isTelugu
                  ? 'సువార్తల ప్రకారం శుక్రవారం ఉదయం 9 నుండి మధ్యాహ్నం 3 గంటల వరకు; సూర్యాస్తమయానికి ముందే సమాధి చేయబడెను.'
                  : 'The exact historical time is not known with certainty; Gospels record 9:00 AM to 3:00 PM on Friday.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Seven Sayings Explorer */}
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-gold-600 dark:text-gold-400">
              Interactive Scripture Reader
            </span>
            <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-950 dark:text-white ${
              isTelugu ? 'font-telugu' : ''
            }`}>
              {isTelugu ? 'సిలువపై పలికిన ఏడు మాటలు (The Seven Sayings)' : 'The Seven Last Sayings from the Cross'}
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-semibold hidden sm:inline">
            {isTelugu ? 'లూకా, యోహాను, మత్తయి/మార్కు సువార్తలు' : 'Luke, John & Matthew/Mark Sources'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sayings 1 to 7 Selector */}
          <div className="lg:col-span-5 space-y-2">
            {SEVEN_SAYINGS_DATA.map((say) => {
              const isSel = selectedSaying.order === say.order;
              return (
                <div
                  key={say.order}
                  onClick={() => setSelectedSaying(say)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSel
                      ? 'bg-gold-500 text-midnight-950 border-gold-600 font-bold shadow-sacred'
                      : 'bg-white dark:bg-midnight-900 border-stone-200 dark:border-midnight-800 hover:border-gold-500/40 text-stone-800 dark:text-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSel ? 'bg-midnight-950 text-gold-400' : 'bg-gold-500/15 text-gold-700 dark:text-gold-300'
                    }`}>
                      #{say.order}
                    </span>
                    <div className="truncate max-w-[240px]">
                      <p className={`text-xs font-bold truncate ${isTelugu ? 'font-telugu' : ''}`}>
                        {isTelugu ? say.sayingTe : say.sayingEn}
                      </p>
                      <span className={`text-[10px] font-mono ${isSel ? 'text-midnight-900' : 'text-stone-500 dark:text-stone-400'}`}>
                        {say.source}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSel ? 'text-midnight-950' : 'text-stone-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Selected Saying Full Deep Dive Card */}
          <div className="lg:col-span-7 bg-white dark:bg-midnight-900 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-sacred space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-midnight-800">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 dark:text-gold-300">
                Word #{selectedSaying.order} • {selectedSaying.source}
              </span>
              <span className="text-xs text-stone-500 font-medium">
                {isTelugu ? selectedSaying.sourceGospelTe : selectedSaying.sourceGospel}
              </span>
            </div>

            {/* Saying Bilingual Quotes */}
            <div className="space-y-3">
              <blockquote className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border-l-4 border-gold-500 font-serif text-base sm:text-lg text-midnight-950 dark:text-white font-bold italic leading-relaxed">
                "{selectedSaying.sayingEn}"
              </blockquote>

              <blockquote className="p-4 rounded-2xl bg-gold-500/10 border-l-4 border-gold-500 font-telugu text-base sm:text-lg text-gold-950 dark:text-gold-200 font-bold leading-relaxed">
                "{selectedSaying.sayingTe}"
              </blockquote>
            </div>

            {/* Context & Theological Depth */}
            <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100 block text-xs uppercase tracking-wider mb-1">
                  {isTelugu ? 'సందర్భము:' : 'Context & Historical Circumstance:'}
                </span>
                <p>{isTelugu ? selectedSaying.context.te : selectedSaying.context.en}</p>
              </div>

              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100 block text-xs uppercase tracking-wider mb-1">
                  {isTelugu ? 'ఆత్మీయ & లేఖనాత్మక ప్రాముఖ్యత:' : 'Theological Depth & Prophetic Fulfillment:'}
                </span>
                <p>{isTelugu ? selectedSaying.theologicalDepth.te : selectedSaying.theologicalDepth.en}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
