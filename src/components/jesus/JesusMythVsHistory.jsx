import React, { useState } from 'react';
import { HelpCircle, ShieldCheck, BookOpen, Clock, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { MYTH_VS_HISTORY } from '../../data/jesusHistoricalData';

export const JesusMythVsHistory = () => {
  const { isTelugu } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="myth-history" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <HelpCircle className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'శాస్త్రీయ విశ్లేషణ & సరిపోలిక' : 'Critical Comparative Matrix'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'చరిత్ర, లేఖనాలు, సంప్రదాయాలు & ఆధునిక అపోహలు' : 'Scripture, Tradition, History & Popular Myths'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'విశ్వాసాన్ని గౌరవిస్తూనే, బైబిల్ లేఖనాలు, తర్వాతి క్రైస్తవ సంప్రదాయాలు, లౌకిక చారిత్రక ఆధారాలు మరియు నిరాధార కథనాల మధ్య స్పష్టమైన తేడాను తెలియజేయు సమగ్ర విభాగం.'
            : 'A respectful comparative guide distinguishing canonical Scripture from later church traditions, verified historical evidence, and unverified modern folklore.'}
        </p>
      </div>

      {/* Comparative Accordion List */}
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {MYTH_VS_HISTORY.map((item, idx) => {
          const isExp = expandedIndex === idx;

          return (
            <div 
              key={idx}
              className={`rounded-3xl border transition-all overflow-hidden ${
                isExp
                  ? 'bg-white dark:bg-midnight-900 border-gold-500/40 shadow-sacred'
                  : 'bg-white/80 dark:bg-midnight-900/60 border-stone-200 dark:border-midnight-800'
              }`}
            >
              {/* Card Header */}
              <div 
                onClick={() => setExpandedIndex(isExp ? null : idx)}
                className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isExp ? 'bg-gold-500 text-midnight-950' : 'bg-gold-500/15 text-gold-700 dark:text-gold-300'
                  }`}>
                    #{idx + 1}
                  </div>
                  <h3 className={`font-serif font-bold text-base sm:text-xl text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
                    {isTelugu ? item.topicTe : item.topic}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-800 dark:text-gold-300">
                    {isTelugu ? item.confidence.badgeTe : item.confidence.badge}
                  </span>
                  <button className="p-1.5 rounded-lg bg-stone-100 dark:bg-midnight-800 text-stone-600 dark:text-stone-300">
                    {isExp ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Card Body Matrix */}
              {isExp && (
                <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 dark:border-midnight-800 space-y-4 animate-in fade-in duration-150">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs">
                    
                    {/* 1. Biblical Account */}
                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-1.5">
                      <span className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {isTelugu ? 'బైబిల్ లేఖనాలు ఏమి చెబుతున్నాయి?' : 'What Canonical Scripture Says:'}
                      </span>
                      <p className={`text-stone-700 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                        {isTelugu ? item.biblicalText.te : item.biblicalText.en}
                      </p>
                    </div>

                    {/* 2. Church Tradition */}
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                      <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {isTelugu ? 'తర్వాతి సంప్రదాయాలు ఏమిటి?' : 'What Later Tradition Developed:'}
                      </span>
                      <p className={`text-stone-700 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                        {isTelugu ? item.churchTradition.te : item.churchTradition.en}
                      </p>
                    </div>

                    {/* 3. Historical Reality */}
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                      <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {isTelugu ? 'చరిత్రకారులు ఏమి నిర్ధారిస్తున్నారు?' : 'What Academic Historians Establish:'}
                      </span>
                      <p className={`text-stone-700 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                        {isTelugu ? item.historicalReality.te : item.historicalReality.en}
                      </p>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
