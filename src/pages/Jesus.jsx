import React, { useState } from 'react';
import { Sparkles, Heart, Compass, Search, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/common/Button';

// Modular Jesus Components
import { JesusHero } from '../components/jesus/JesusHero';
import { JesusNavbar } from '../components/jesus/JesusNavbar';
import { JesusTimeline } from '../components/jesus/JesusTimeline';
import { JesusPeopleNetwork } from '../components/jesus/JesusPeopleNetwork';
import { JesusTeachingsParables } from '../components/jesus/JesusTeachingsParables';
import { JesusMiracles } from '../components/jesus/JesusMiracles';
import { JesusMapExplorer } from '../components/jesus/JesusMapExplorer';
import { JesusPassionAndTrial } from '../components/jesus/JesusPassionAndTrial';
import { JesusCrucifixionDeath } from '../components/jesus/JesusCrucifixionDeath';
import { JesusResurrectionAscension } from '../components/jesus/JesusResurrectionAscension';
import { JesusLifeCultureObjects } from '../components/jesus/JesusLifeCultureObjects';
import { JesusMythVsHistory } from '../components/jesus/JesusMythVsHistory';
import { JesusFactCards } from '../components/jesus/JesusFactCards';
import { JesusSourceSystem } from '../components/jesus/JesusSourceSystem';
import { JesusSearchModal } from '../components/jesus/JesusSearchModal';

export const Jesus = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('timeline');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-sacred-50 dark:bg-midnight-950 text-stone-900 dark:text-stone-100 transition-colors">
      
      {/* 1. Cinematic Hero Section */}
      <JesusHero 
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectSection={scrollToSection}
      />

      {/* 2. Fast Sticky Jesus Chapter Navigation */}
      <JesusNavbar 
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. Main Content Journey Container */}
      <div className="space-y-12 sm:space-y-16">
        
        {/* Module 1: 30 Chronological Chapters */}
        <JesusTimeline />

        {/* Module 2: People, Apostles, Women Disciples & Genealogies */}
        <div className="bg-white/60 dark:bg-midnight-900/50 py-4 border-y border-stone-200/60 dark:border-midnight-800">
          <JesusPeopleNetwork />
        </div>

        {/* Module 3: Teachings, Beatitudes & 6 Master Parables */}
        <JesusTeachingsParables />

        {/* Module 4: Miracles Gallery (Healings, Nature, Raising the Dead) */}
        <div className="bg-white/60 dark:bg-midnight-900/50 py-4 border-y border-stone-200/60 dark:border-midnight-800">
          <JesusMiracles />
        </div>

        {/* Module 5: 1st-Century Historical Map & Archaeological Sites */}
        <JesusMapExplorer />

        {/* Module 6: Passion Week, 5 Trials, Pilate & Judas Iscariot */}
        <div className="bg-white/60 dark:bg-midnight-900/50 py-4 border-y border-stone-200/60 dark:border-midnight-800">
          <JesusPassionAndTrial />
        </div>

        {/* Module 7: Roman Crucifixion & The Seven Sayings Reader */}
        <JesusCrucifixionDeath />

        {/* Module 8: Resurrection Accounts, Appearances, Ascension & Early Church */}
        <div className="bg-white/60 dark:bg-midnight-900/50 py-4 border-y border-stone-200/60 dark:border-midnight-800">
          <JesusResurrectionAscension />
        </div>

        {/* Module 9: 1st-Century Daily Life, Artifacts & Forensic Appearance Reality */}
        <JesusLifeCultureObjects />

        {/* Module 10: Myth, Tradition & History Comparative Matrix */}
        <div className="bg-white/60 dark:bg-midnight-900/50 py-4 border-y border-stone-200/60 dark:border-midnight-800">
          <JesusMythVsHistory />
        </div>

        {/* Module 11: "Did You Know?" Fact Cards */}
        <JesusFactCards />

        {/* Module 12: Transparent Source Bibliography & Evidence System */}
        <div className="bg-stone-100/70 dark:bg-midnight-900/90 py-4 border-t border-stone-200 dark:border-midnight-800">
          <JesusSourceSystem />
        </div>

        {/* 4. The Gospel Invitation & Sinner's Prayer Card */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="rounded-3xl bg-midnight-950 text-white p-8 sm:p-12 border border-gold-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
            
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 mx-auto flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              
              <h3 className={`font-serif font-bold text-2xl sm:text-3xl text-white ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? 'క్రీస్తు రక్షణ సువార్త ఆహ్వానం' : 'The Gospel of Grace & Salvation'}
              </h3>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl mx-auto">
                {isTelugu
                  ? 'యేసుక్రీస్తును మీ హృదయములోనికి ప్రభువుగా మరియు రక్షకునిగా ఆహ్వానించాలని ఆశిస్తున్నారా? మేము మీతో కలిసి ప్రార్థించడానికి సిద్ధంగా ఉన్నాము.'
                  : 'Would you like to invite Jesus Christ into your heart as Lord and Savior? We would love to stand with you in prayer and fellowship.'}
              </p>

              <div className="pt-2 flex items-center justify-center gap-4">
                <Button to="/prayer" variant="gold" size="lg" icon={Heart}>
                  {isTelugu ? 'ప్రార్థన విన్నపం పంపండి' : 'Request Prayer'}
                </Button>
                <Button to="/bible" variant="outline" size="lg">
                  {isTelugu ? 'పరిశుద్ధ బైబిల్ చదవండి' : 'Read Holy Bible'}
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 5. Global Search Modal */}
      <JesusSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={scrollToSection}
      />

    </div>
  );
};

export default Jesus;
