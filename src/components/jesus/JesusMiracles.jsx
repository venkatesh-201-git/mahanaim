import React, { useState } from 'react';
import { Sparkles, Heart, Compass, ShieldCheck, Filter, ChevronRight, BookOpen, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { MIRACLES_DATA } from '../../data/jesusHistoricalData';

export const JesusMiracles = () => {
  const { isTelugu } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMiracle, setSelectedMiracle] = useState(MIRACLES_DATA[0]);

  const categories = [
    { id: 'all', labelEn: 'All Miracles', labelTe: 'అన్ని అద్భుతాలు' },
    { id: 'Healing', labelEn: 'Healings & Health', labelTe: 'రోగ స్వస్థతలు' },
    { id: 'Nature', labelEn: 'Nature Signs', labelTe: 'ప్రకృతి అద్భుతాలు' },
    { id: 'Raising the Dead', labelEn: 'Raising the Dead', labelTe: 'మృతుల పునరుత్థానం' },
  ];

  const filteredMiracles = MIRACLES_DATA.filter((m) => {
    if (activeCategory === 'all') return true;
    return m.category === activeCategory;
  });

  return (
    <section id="miracles" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Header */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'దైవిక అధికార సూచక్రియలు' : 'Signs of Divine Authority'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'యేసుక్రీస్తు చేసిన అద్భుతాలు & స్వస్థతలు' : 'The Miracles and Healings of Jesus'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'సువార్తలలో నమోదైన రోగ స్వస్థతలు, ప్రకృతి శక్తులపై ఆధిపత్యం మరియు మృతుల పునరుత్థానాల చారిత్రక & లేఖనాత్మక వివరణ.'
            : 'Explore the categories of Gospel miracles: physical healings, power over natural elements, and raising the dead.'}
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 max-w-lg mx-auto px-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === cat.id
                ? 'bg-gold-500 text-midnight-950 shadow-md font-extrabold'
                : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300 hover:bg-gold-500/15'
            } ${isTelugu ? 'font-telugu' : ''}`}
          >
            {isTelugu ? cat.labelTe : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Main Grid: Selection List & Detail Panel */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Miracle List */}
        <div className="lg:col-span-5 space-y-2 max-h-[550px] overflow-y-auto pr-1">
          {filteredMiracles.map((m) => {
            const isSel = selectedMiracle.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => setSelectedMiracle(m)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  isSel
                    ? 'bg-gold-500/15 border-gold-500 text-midnight-950 dark:text-white font-bold shadow-xs'
                    : 'bg-white dark:bg-midnight-900 border-stone-200 dark:border-midnight-800 hover:border-gold-500/40 text-stone-700 dark:text-stone-300'
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gold-500/15 text-gold-700 dark:text-gold-300">
                    {isTelugu ? m.categoryTe : m.category}
                  </span>
                  <h4 className={`text-sm font-bold ${isTelugu ? 'font-telugu' : ''}`}>
                    {isTelugu ? m.nameTe : m.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400">
                    {m.scripture}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 ${isSel ? 'text-gold-600' : 'text-stone-400'}`} />
              </div>
            );
          })}
        </div>

        {/* Miracle Detail Card */}
        <div className="lg:col-span-7 bg-white dark:bg-midnight-900 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-sacred space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-midnight-800">
            <div>
              <span className="text-xs font-mono font-semibold text-gold-600 dark:text-gold-400">
                {selectedMiracle.scripture}
              </span>
              <h3 className={`font-serif font-black text-xl sm:text-2xl text-midnight-950 dark:text-white ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {isTelugu ? selectedMiracle.nameTe : selectedMiracle.name}
              </h3>
            </div>
            <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-800 dark:text-gold-300 border border-gold-500/30 w-fit">
              {isTelugu ? selectedMiracle.status.badgeTe : selectedMiracle.status.badge}
            </span>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-600 dark:text-stone-400">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>{isTelugu ? selectedMiracle.locationTe : selectedMiracle.location}</span>
            </div>

            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100 block text-xs uppercase tracking-wider mb-1">
                {isTelugu ? 'అద్భుత వృత్తాంతం:' : 'Gospel Narrative:'}
              </span>
              <p className={`text-stone-700 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? selectedMiracle.narrative.te : selectedMiracle.narrative.en}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gold-500/10 border-l-4 border-gold-500 space-y-1">
              <span className="font-bold text-gold-800 dark:text-gold-300 text-xs uppercase tracking-wider block">
                {isTelugu ? 'దైవత్వ ప్రాముఖ్యత & సూచక్రియ:' : 'Significance & Theological Meaning:'}
              </span>
              <p className={`text-stone-700 dark:text-stone-300 text-xs leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? selectedMiracle.significance.te : selectedMiracle.significance.en}
              </p>
            </div>

            <div className="text-xs text-stone-500 dark:text-stone-400">
              <span className="font-bold">{isTelugu ? 'సంబంధిత వ్యక్తులు:' : 'People Involved:'} </span>
              {isTelugu ? selectedMiracle.peopleTe : selectedMiracle.people}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
