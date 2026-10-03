import React, { useState, useEffect } from 'react';
import { Search, X, Compass, Users, MapPin, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  JESUS_CHRONOLOGY, APOSTLES_DATA, HISTORICAL_PLACES, 
  PARABLES_DATA, MIRACLES_DATA, DID_YOU_KNOW_FACTS 
} from '../../data/jesusHistoricalData';

export const JesusSearchModal = ({ isOpen, onClose, onSelectResult }) => {
  const { isTelugu } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = searchTerm.toLowerCase().trim();

  // Filter Chapters
  const matchedChapters = q ? JESUS_CHRONOLOGY.filter(c => 
    c.title.en.toLowerCase().includes(q) || 
    c.title.te.toLowerCase().includes(q) ||
    c.summary.en.toLowerCase().includes(q) ||
    c.summary.te.toLowerCase().includes(q)
  ) : [];

  // Filter Apostles
  const matchedPeople = q ? APOSTLES_DATA.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.nameTe.toLowerCase().includes(q) ||
    p.role.toLowerCase().includes(q)
  ) : [];

  // Filter Places
  const matchedPlaces = q ? HISTORICAL_PLACES.filter(pl => 
    pl.name.toLowerCase().includes(q) ||
    pl.nameTe.toLowerCase().includes(q) ||
    pl.region.toLowerCase().includes(q)
  ) : [];

  // Filter Parables
  const matchedParables = q ? PARABLES_DATA.filter(pb => 
    pb.title.en.toLowerCase().includes(q) ||
    pb.title.te.toLowerCase().includes(q) ||
    pb.story.en.toLowerCase().includes(q)
  ) : [];

  // Filter Miracles
  const matchedMiracles = q ? MIRACLES_DATA.filter(m => 
    m.name.toLowerCase().includes(q) ||
    m.nameTe.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q)
  ) : [];

  const hasResults = matchedChapters.length > 0 || matchedPeople.length > 0 || matchedPlaces.length > 0 || matchedParables.length > 0 || matchedMiracles.length > 0;

  const handleItemClick = (sectionId) => {
    onSelectResult(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      
      <div 
        className="w-full max-w-2xl bg-white dark:bg-midnight-900 rounded-3xl border border-stone-200 dark:border-gold-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-midnight-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-gold-500 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isTelugu ? "యేసు, పేతురు, గలిలయ, అద్భుతాలు, సిలువ శోధించండి..." : "Search Jesus, Peter, Galilee, miracles, parables, trials..."}
            className={`w-full bg-transparent text-midnight-950 dark:text-white placeholder:text-stone-400 focus:outline-none text-base sm:text-lg font-medium ${
              isTelugu ? 'font-telugu' : ''
            }`}
            autoFocus
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-100 dark:bg-midnight-800 text-stone-500 dark:text-stone-400 hover:bg-gold-500/20 hover:text-gold-600 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {!q && (
            <div className="text-center py-8 space-y-3">
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                {isTelugu ? 'ఏదైనా పేరు, ప్రాంతం, బోధ లేదా ఘట్టాన్ని టైప్ చేయండి.' : 'Type any name, place, miracle, parable or keyword to search across the entire Jesus historical journey.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['Nazareth', 'Peter', 'Parables', 'Miracles', 'Pontius Pilate', 'Gethsemane', 'Resurrection'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-xs px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-300 hover:bg-gold-500/20 font-medium"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && !hasResults && (
            <div className="text-center py-10 space-y-2">
              <p className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                {isTelugu ? `"${searchTerm}" కు సరిపోలే ఫలితాలు కనుగొనబడలేదు` : `No matches found for "${searchTerm}"`}
              </p>
              <p className="text-xs text-stone-400">
                {isTelugu ? 'దయచేసి వేరొక పదాన్ని ప్రయత్నించండి.' : 'Try checking spelling or using broader search terms.'}
              </p>
            </div>
          )}

          {/* Chapters Results */}
          {matchedChapters.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {isTelugu ? 'కాలక్రమ అధ్యాయాలు' : 'Chronological Chapters'} ({matchedChapters.length})
              </span>
              <div className="space-y-1.5">
                {matchedChapters.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => handleItemClick('timeline')}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-midnight-950/80 hover:bg-gold-500/15 border border-stone-200/60 dark:border-midnight-800 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-midnight-950 dark:text-white">
                        {isTelugu ? c.title.te : c.title.en}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">{c.scriptureRefs}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* People Results */}
          {matchedPeople.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                {isTelugu ? 'శిష్యులు & వ్యక్తులు' : 'People & Apostles'} ({matchedPeople.length})
              </span>
              <div className="space-y-1.5">
                {matchedPeople.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleItemClick('people')}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-midnight-950/80 hover:bg-gold-500/15 border border-stone-200/60 dark:border-midnight-800 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-midnight-950 dark:text-white">
                        {isTelugu ? p.nameTe : p.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">{isTelugu ? p.occupationTe : p.occupation}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Places Results */}
          {matchedPlaces.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {isTelugu ? 'ప్రాంతాలు & స్థలాలు' : 'Historical Places'} ({matchedPlaces.length})
              </span>
              <div className="space-y-1.5">
                {matchedPlaces.map((pl) => (
                  <div
                    key={pl.id}
                    onClick={() => handleItemClick('map')}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-midnight-950/80 hover:bg-gold-500/15 border border-stone-200/60 dark:border-midnight-800 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-midnight-950 dark:text-white">
                        {isTelugu ? pl.nameTe : pl.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">{isTelugu ? pl.regionTe : pl.region}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Parables Results */}
          {matchedParables.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {isTelugu ? 'ఉపమానాలు' : 'Parables'} ({matchedParables.length})
              </span>
              <div className="space-y-1.5">
                {matchedParables.map((pb) => (
                  <div
                    key={pb.id}
                    onClick={() => handleItemClick('teachings')}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-midnight-950/80 hover:bg-gold-500/15 border border-stone-200/60 dark:border-midnight-800 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-midnight-950 dark:text-white">
                        {isTelugu ? pb.title.te : pb.title.en}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">{pb.source}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Miracles Results */}
          {matchedMiracles.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 dark:text-gold-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {isTelugu ? 'అద్భుతాలు' : 'Miracles'} ({matchedMiracles.length})
              </span>
              <div className="space-y-1.5">
                {matchedMiracles.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => handleItemClick('miracles')}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-midnight-950/80 hover:bg-gold-500/15 border border-stone-200/60 dark:border-midnight-800 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-midnight-950 dark:text-white">
                        {isTelugu ? m.nameTe : m.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">{m.scripture}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
