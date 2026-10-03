import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { DID_YOU_KNOW_FACTS } from '../../data/jesusHistoricalData';

export const JesusFactCards = () => {
  const { isTelugu } = useLanguage();

  return (
    <section className="py-12 sm:py-16 space-y-8 max-w-6xl mx-auto px-4">
      
      <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
        <div>
          <span className="text-xs uppercase font-mono font-bold text-gold-600 dark:text-gold-400">
            Factual Knowledge Cards
          </span>
          <h3 className={`font-serif font-bold text-xl sm:text-3xl text-midnight-950 dark:text-white ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {isTelugu ? 'మీకు తెలుసా? (Did You Know?) — చారిత్రక వాస్తవాలు' : 'Did You Know? — Verified Historical Facts'}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DID_YOU_KNOW_FACTS.map((fact) => (
          <div 
            key={fact.id}
            className="p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/20 shadow-sm space-y-3 hover:shadow-sacred transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-gold-500/15 text-gold-700 dark:text-gold-300 flex items-center justify-center font-bold text-xs">
                  #{fact.id}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300">
                  {isTelugu ? fact.sourceBadge.badgeTe : fact.sourceBadge.badge}
                </span>
              </div>

              <h4 className={`font-serif font-bold text-base text-midnight-950 dark:text-white ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {isTelugu ? fact.title.te : fact.title.en}
              </h4>

              <p className={`text-xs text-stone-600 dark:text-stone-300 leading-relaxed ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {isTelugu ? fact.fact.te : fact.fact.en}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
