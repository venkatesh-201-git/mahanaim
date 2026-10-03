import React from 'react';
import { ShieldCheck, BookOpen, ExternalLink, Scroll, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SOURCES_BIBLIOGRAPHY, SOURCE_CONFIDENCE } from '../../data/jesusHistoricalData';

export const JesusSourceSystem = () => {
  const { isTelugu } = useLanguage();

  return (
    <section id="sources" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          {isTelugu ? 'ప్రాథమిక ఆధారాలు & గ్రంథ సూచిక' : 'Sources & Further Reading'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'చారిత్రక ఆధారాలు, శాసనాలు & మూల గ్రంథాలు' : 'Transparent Historical Evidence & Bibliography'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'రోమన్ చరిత్రకారులైన టాసిటస్, ప్లినీ, సుయెటోనియస్ మరియు యూదు చరిత్రకారుడైన జోసెఫస్ రచనలు, పురావస్తు శాసనాలు మరియు బైబిల్ లేఖనాల సమగ్ర సూచిక.'
            : 'Explore non-Christian ancient Roman and Jewish sources, archaeological inscriptions, and New Testament canonical documents.'}
        </p>
      </div>

      {/* Confidence System Guide Banner */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/25 shadow-sm space-y-4">
          <h3 className={`font-serif font-bold text-lg text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
            {isTelugu ? 'ఆధార వర్గీకరణ పద్ధతి (Source Confidence System):' : 'Our Source Confidence System:'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {Object.values(SOURCE_CONFIDENCE).map((conf) => (
              <div key={conf.id} className="p-3.5 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-1">
                <span className="font-bold text-midnight-950 dark:text-white block">
                  {isTelugu ? conf.badgeTe : conf.badge}
                </span>
                <p className="text-stone-600 dark:text-stone-400 text-[11px] leading-relaxed">
                  {isTelugu ? conf.desc.te : conf.desc.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bibliography Groups */}
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {SOURCES_BIBLIOGRAPHY.map((group, gIdx) => (
          <div key={gIdx} className="space-y-4">
            <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-sm uppercase tracking-wider pb-2 border-b border-gold-500/20">
              <Scroll className="w-4 h-4" />
              <span>{isTelugu ? group.categoryTe : group.category}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((item, iIdx) => (
                <div key={iIdx} className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-midnight-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-midnight-950 dark:text-white">{item.author}</h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-gold-500/10 text-gold-700 dark:text-gold-300">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
