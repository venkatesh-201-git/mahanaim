import React, { useState } from 'react';
import { 
  Compass, Users, BookOpen, Sparkles, MapPin, 
  Cross, Sun, Landmark, Search, ShieldCheck, HelpCircle, ChevronDown, ListFilter
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const JesusNavbar = ({ activeSection, onSelectSection, onOpenSearch }) => {
  const { isTelugu } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'timeline', labelEn: '30 Chapters', labelTe: '30 అధ్యాయాలు', icon: Compass },
    { id: 'people', labelEn: 'People & Apostles', labelTe: 'శిష్యులు & వ్యక్తులు', icon: Users },
    { id: 'teachings', labelEn: 'Teachings & Parables', labelTe: 'బోధనలు & ఉపమానాలు', icon: BookOpen },
    { id: 'miracles', labelEn: 'Miracles Gallery', labelTe: 'అద్భుతాల గ్యాలరీ', icon: Sparkles },
    { id: 'map', labelEn: '1st-Century Map', labelTe: 'చారిత్రక పటం', icon: MapPin },
    { id: 'passion', labelEn: 'Passion & Trials', labelTe: 'శ్రమలు & విచారణ', icon: Landmark },
    { id: 'crucifixion', labelEn: 'Crucifixion & 7 Sayings', labelTe: 'సిలువ & ఏడు మాటలు', icon: Cross },
    { id: 'resurrection', labelEn: 'Resurrection & Church', labelTe: 'పునరుత్థానం & సంఘం', icon: Sun },
    { id: 'culture', labelEn: 'Life & Artifacts', labelTe: 'జీవితం & వస్తువులు', icon: ListFilter },
    { id: 'myth-history', labelEn: 'Myth vs History', labelTe: 'చరిత్ర vs సంప్రదాయం', icon: HelpCircle },
    { id: 'sources', labelEn: 'Sources & Evidence', labelTe: 'ఆధారాలు & గ్రంథాలు', icon: ShieldCheck },
  ];

  const handleSelect = (id) => {
    onSelectSection(id);
    setMenuOpen(false);
  };

  const currentSection = sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <nav className="sticky top-16 sm:top-20 z-30 w-full bg-white/95 dark:bg-[#0c172b]/95 backdrop-blur-md border-b border-stone-200 dark:border-gold-500/25 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 h-14">
          
          {/* Section Indicator on Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-700 dark:text-gold-300 font-bold text-xs sm:text-sm"
            >
              <currentSection.icon className="w-4 h-4 text-gold-500" />
              <span>{isTelugu ? currentSection.labelTe : currentSection.labelEn}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Desktop Horizontal Scrollable Tab Menu */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto no-scrollbar py-1 text-xs xl:text-sm whitespace-nowrap">
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelect(sec.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
                    isActive
                      ? 'bg-gold-500 text-midnight-950 font-bold shadow-xs'
                      : 'text-stone-700 dark:text-stone-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-gold-500/10'
                  } ${isTelugu ? 'font-telugu' : ''}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-midnight-950' : 'text-gold-500'}`} />
                  <span>{isTelugu ? sec.labelTe : sec.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-midnight-800 hover:bg-gold-500/15 text-stone-700 dark:text-stone-200 hover:text-gold-600 dark:hover:text-gold-400 border border-stone-200 dark:border-midnight-700 text-xs sm:text-sm font-semibold transition-colors shrink-0"
            title="Search Jesus Journey"
          >
            <Search className="w-4 h-4 text-gold-500" />
            <span className="hidden sm:inline">{isTelugu ? 'వెతకండి' : 'Search'}</span>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {menuOpen && (
          <div className="lg:hidden py-3 border-t border-stone-200 dark:border-midnight-800 grid grid-cols-2 gap-1.5 animate-in fade-in zoom-in-95 duration-150">
            {sections.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelect(sec.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                    isActive
                      ? 'bg-gold-500/20 border-gold-500/50 text-gold-700 dark:text-gold-300'
                      : 'bg-stone-50 dark:bg-midnight-900 border-stone-200/60 dark:border-midnight-800 text-stone-800 dark:text-stone-200'
                  } ${isTelugu ? 'font-telugu' : ''}`}
                >
                  <Icon className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="truncate">{isTelugu ? sec.labelTe : sec.labelEn}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
