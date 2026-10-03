import React, { useState } from 'react';
import { 
  BookOpen, ChevronDown, ChevronUp, Clock, MapPin, 
  Sparkles, ShieldCheck, Filter, ExternalLink, Info, Image as ImageIcon
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { JESUS_CHRONOLOGY, SOURCE_CONFIDENCE, JESUS_TITLES } from '../../data/jesusHistoricalData';

export const JesusTimeline = ({ searchQuery = '' }) => {
  const { isTelugu } = useLanguage();
  const [expandedChapter, setExpandedChapter] = useState(1);
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedConfidence, setSelectedConfidence] = useState('all');

  const eras = [
    { id: 'all', labelEn: 'All 30 Chapters', labelTe: 'అన్ని 30 అధ్యాయాలు' },
    { id: 'early', labelEn: '1. Background & Birth (Ch 1–6)', labelTe: '1. నేపథ్యం & జననం (1–6)' },
    { id: 'prep', labelEn: '2. Preparation & Youth (Ch 7–10)', labelTe: '2. సిద్ధపాటు & బాప్తిస్మం (7–10)' },
    { id: 'ministry', labelEn: '3. Galilee Ministry (Ch 11–17)', labelTe: '3. గలిలయ పరిచర్య (11–17)' },
    { id: 'passion', labelEn: '4. Jerusalem & Trials (Ch 18–24)', labelTe: '4. యెరూషలేము & విచారణ (18–24)' },
    { id: 'cross', labelEn: '5. Crucifixion & Tomb (Ch 25–27)', labelTe: '5. సిలువ & సమాధి (25–27)' },
    { id: 'resurrection', labelEn: '6. Resurrection & Beyond (Ch 28–30)', labelTe: '6. పునరుత్థానం & సంఘం (28–30)' },
  ];

  // Filtering logic
  const filteredChapters = JESUS_CHRONOLOGY.filter((item) => {
    // Era filter
    if (selectedEra === 'early' && !(item.chapter >= 1 && item.chapter <= 6)) return false;
    if (selectedEra === 'prep' && !(item.chapter >= 7 && item.chapter <= 10)) return false;
    if (selectedEra === 'ministry' && !(item.chapter >= 11 && item.chapter <= 17)) return false;
    if (selectedEra === 'passion' && !(item.chapter >= 18 && item.chapter <= 24)) return false;
    if (selectedEra === 'cross' && !(item.chapter >= 25 && item.chapter <= 27)) return false;
    if (selectedEra === 'resurrection' && !(item.chapter >= 28 && item.chapter <= 30)) return false;

    // Confidence filter
    if (selectedConfidence !== 'all' && item.sourceConfidence.id !== selectedConfidence) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchEn = (item.title.en + ' ' + item.subtitle.en + ' ' + item.summary.en + ' ' + item.scriptureRefs).toLowerCase();
      const matchTe = (item.title.te + ' ' + item.subtitle.te + ' ' + item.summary.te).toLowerCase();
      return matchEn.includes(q) || matchTe.includes(q);
    }

    return true;
  });

  return (
    <section id="timeline" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Header */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <Clock className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'లేఖనాత్మక & చారిత్రక కాలక్రమ యాత్ర' : 'Chronological Historical Epic'}
        </span>
        
        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? '30 అధ్యాయాల సమగ్ర జీవిత చరిత్ర' : 'The 30 Chronological Chapters of Jesus'}
        </h2>
        
        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'మొదటి శతాబ్దపు రోమన్-యూదయ నేపథ్యం నుండి క్రీస్తు జననం, బాల్యం, పరిచర్య, బోధనలు, ఉపమానాలు, అద్భుతాలు, సిలువ శ్రమలు, పునరుత్థానం మరియు ఆదిమ క్రైస్తవ ఉద్యమం వరకు ప్రతి అధ్యాయం లేఖనాలు మరియు చారిత్రక ఆధారాలతో వివరించబడింది.'
            : 'Each chapter is classified with transparent historical confidence badges, Scripture citations (Book → Chapter → Verse), archaeological context, and scholarly reconstructions.'}
        </p>
      </div>

      {/* Name & Titles of Jesus Quick Explainer Card */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-br from-gold-500/10 via-stone-100 to-amber-500/10 dark:from-midnight-900 dark:via-midnight-950 dark:to-midnight-900 border border-gold-500/30 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gold-500/20">
            <div>
              <span className="text-xs uppercase font-bold text-gold-600 dark:text-gold-400 tracking-wider">
                {isTelugu ? 'భాషా వ్యుత్పత్తి & నామ వివరణ' : 'Linguistic Etymology & Sacred Titles'}
              </span>
              <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-950 dark:text-white mt-1 ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {isTelugu ? 'యేసు / యెషూవ మరియు బిరుదుల అర్థం' : 'The Name of Jesus & Historical Titles'}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-gold-500/20 text-gold-700 dark:text-gold-300 text-xs font-semibold">
              <Info className="w-4 h-4 text-gold-500" />
              <span>{isTelugu ? 'వ్యక్తిగత పేరు vs బిరుదులు' : 'Personal Name vs Royal Titles'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JESUS_TITLES.map((t, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-midnight-900/90 border border-stone-200 dark:border-midnight-700 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-midnight-950 dark:text-white">{t.term}</span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-gold-500/15 text-gold-700 dark:text-gold-300">
                    {t.original}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                  {isTelugu ? t.categoryTe : t.category} • {t.language}
                </p>
                <p className={`text-xs text-stone-700 dark:text-stone-300 leading-relaxed ${
                  isTelugu ? 'font-telugu' : ''
                }`}>
                  {isTelugu ? t.meaning.te : t.meaning.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        {/* Era Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedEra === era.id
                  ? 'bg-gold-500 text-midnight-950 shadow-md font-bold'
                  : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300 hover:bg-gold-500/15'
              } ${isTelugu ? 'font-telugu' : ''}`}
            >
              {isTelugu ? era.labelTe : era.labelEn}
            </button>
          ))}
        </div>

        {/* Confidence Badges Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-stone-500 dark:text-stone-400 font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-gold-500" />
            {isTelugu ? 'ఆధార స్థాయి:' : 'Filter by Evidence:'}
          </span>
          <button
            onClick={() => setSelectedConfidence('all')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
              selectedConfidence === 'all' ? 'bg-midnight-950 text-white dark:bg-white dark:text-midnight-950' : 'bg-stone-200 dark:bg-midnight-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            {isTelugu ? 'అన్నీ' : 'All Types'}
          </button>
          {Object.values(SOURCE_CONFIDENCE).map((badge) => (
            <button
              key={badge.id}
              onClick={() => setSelectedConfidence(badge.id)}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                selectedConfidence === badge.id
                  ? 'bg-gold-500 text-midnight-950 font-bold'
                  : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300 hover:bg-gold-500/10'
              }`}
            >
              {isTelugu ? badge.badgeTe : badge.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chronological Timeline Display */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative border-l-2 border-gold-500/35 ml-4 sm:ml-8 md:ml-12 space-y-8">
          {filteredChapters.map((item) => {
            const isExpanded = expandedChapter === item.chapter;

            return (
              <div key={item.id} className="relative pl-6 sm:pl-10">
                
                {/* Step Circle Badge */}
                <div 
                  onClick={() => setExpandedChapter(isExpanded ? null : item.chapter)}
                  className={`absolute -left-[18px] top-4 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs cursor-pointer shadow-md transition-transform hover:scale-110 ${
                    isExpanded 
                      ? 'bg-gold-500 text-midnight-950 ring-4 ring-gold-500/30 font-black' 
                      : 'bg-midnight-950 text-gold-400 border-2 border-gold-500'
                  }`}
                >
                  {item.chapter}
                </div>

                {/* Chapter Card */}
                <div className={`rounded-3xl border transition-all duration-200 overflow-hidden shadow-sm ${
                  isExpanded
                    ? 'bg-white dark:bg-midnight-900 border-gold-500/50 shadow-sacred'
                    : 'bg-white/80 dark:bg-midnight-900/70 border-stone-200 dark:border-midnight-800 hover:border-gold-500/30'
                }`}>
                  
                  {/* Card Header (Always Visible) */}
                  <div 
                    onClick={() => setExpandedChapter(isExpanded ? null : item.chapter)}
                    className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 select-none"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400">
                          {isTelugu ? item.periodTe : item.period}
                        </span>
                        <span className="text-stone-300 dark:text-stone-600">•</span>
                        <span className="text-[11px] text-stone-500 dark:text-stone-400 font-medium">
                          {isTelugu ? item.dateRangeTe : item.dateRange}
                        </span>
                        {/* Evidence Badge */}
                        <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-800 dark:text-gold-300 border border-gold-500/30">
                          {isTelugu ? item.sourceConfidence.badgeTe : item.sourceConfidence.badge}
                        </span>
                      </div>

                      <h3 className={`font-serif font-bold text-lg sm:text-2xl text-midnight-950 dark:text-white ${
                        isTelugu ? 'font-telugu leading-snug' : ''
                      }`}>
                        {isTelugu ? item.title.te : item.title.en}
                      </h3>

                      <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 ${
                        isTelugu ? 'font-telugu' : ''
                      }`}>
                        {isTelugu ? item.subtitle.te : item.subtitle.en}
                      </p>
                    </div>

                    <button
                      className="p-2 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 hover:bg-gold-500/20 transition-colors shrink-0 mt-1"
                      aria-label="Toggle chapter details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Expandable Chapter Deep Dive */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-100 dark:border-midnight-800 animate-in fade-in duration-200 space-y-6">
                      
                      {/* Image + Summary Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        
                        {/* Visual Image */}
                        <div className="lg:col-span-5 space-y-2">
                          <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 dark:border-midnight-700 relative group">
                            <img
                              src={item.image}
                              alt={isTelugu ? item.title.te : item.title.en}
                              className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5">
                              <span className="text-[10px] text-gold-300 font-semibold uppercase tracking-wider flex items-center gap-1">
                                <ImageIcon className="w-3 h-3 text-gold-400" />
                                {item.imageType}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-[10px] text-stone-500 dark:text-stone-400 italic">
                            * {isTelugu ? 'చారిత్రక నైరూప్య దృష్టాంతం — ఆధునిక కల్పన కాదు.' : 'Historically informed artistic reconstruction.'}
                          </p>
                        </div>

                        {/* Detailed Text & Biblical Records */}
                        <div className="lg:col-span-7 space-y-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-gold-700 dark:text-gold-400">
                            <BookOpen className="w-4 h-4 text-gold-500" />
                            <span>{item.scriptureRefs}</span>
                          </div>

                          <p className={`text-sm text-stone-700 dark:text-stone-200 leading-relaxed ${
                            isTelugu ? 'font-telugu' : ''
                          }`}>
                            {isTelugu ? item.summary.te : item.summary.en}
                          </p>

                          {/* Historical & Archaeological Insights Box */}
                          <div className="p-4 rounded-2xl bg-stone-100 dark:bg-midnight-950 border-l-4 border-gold-500 text-xs space-y-1.5">
                            <div className="flex items-center gap-1.5 font-bold text-gold-700 dark:text-gold-300">
                              <ShieldCheck className="w-4 h-4 text-gold-500" />
                              <span>{isTelugu ? 'పురావస్తు & చారిత్రక ఆధారాలు:' : 'Archaeology & Historical Context:'}</span>
                            </div>
                            <p className={`text-stone-600 dark:text-stone-300 leading-relaxed ${
                              isTelugu ? 'font-telugu' : ''
                            }`}>
                              {isTelugu ? item.historicalNotes.te : item.historicalNotes.en}
                            </p>
                          </div>

                          {/* Primary Sources Tag List */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="text-[11px] text-stone-500 font-bold">{isTelugu ? 'మూల పత్రాలు:' : 'Primary Sources:'}</span>
                            {item.sources.map((src, sIdx) => (
                              <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-200 dark:bg-midnight-800 text-stone-700 dark:text-stone-300 font-medium">
                                {src}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
