import React from 'react';
import { Sparkles, Compass, Clock, BookOpen, Search, MapPin, Scroll, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const JesusHero = ({ onOpenSearch, onSelectSection }) => {
  const { isTelugu } = useLanguage();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-midnight-950 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-gold-500/30">
      {/* Cinematic Golden Atmospheric Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=85')`
        }}
      />
      {/* Radial Gradient Vignette for Epic Documentary Feel */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-midnight-950/80 via-midnight-950/90 to-midnight-950" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-gold-300 bg-gold-500/15 border border-gold-500/40 backdrop-blur-md shadow-glow-gold">
            <Sparkles className="w-4 h-4 text-gold-400" />
            {isTelugu ? 'చారిత్రక & లేఖనాత్మక మహాయాత్ర' : 'Cinematic Bilingual Historical Odyssey'}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            {isTelugu ? '30 అధ్యాయాలు • ఆధారాలు & విద్వాంస పరిశోధన' : '30 Chronological Chapters • Source-Verified'}
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4">
          <h1 className={`font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-lg ${
            isTelugu ? 'font-telugu leading-tight' : ''
          }`}>
            {isTelugu ? (
              <>
                <span className="block text-gold-400 font-telugu-serif text-3xl sm:text-5xl md:text-6xl mb-2 font-normal">నజరేతు</span>
                <span className="sacred-gradient-text">యేసుక్రీస్తు</span>
              </>
            ) : (
              <>
                <span className="block text-stone-300 text-2xl sm:text-4xl md:text-5xl font-normal font-sans tracking-widest uppercase mb-1">
                  Jesus of Nazareth
                </span>
                <span className="sacred-gradient-text">THE HISTORICAL JOURNEY</span>
              </>
            )}
          </h1>

          <p className={`font-serif italic text-lg sm:text-2xl text-gold-200/90 max-w-3xl mx-auto leading-relaxed ${
            isTelugu ? 'font-telugu not-italic' : ''
          }`}>
            {isTelugu
              ? 'చరిత్ర, లేఖనాలు మరియు సంప్రదాయాల ద్వారా ఒక ప్రామాణిక ప్రయాణం'
              : 'A Journey Through History, Scripture, and 1st-Century Tradition'}
          </p>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            {isTelugu
              ? 'మొదటి శతాబ్దపు యూదయ, గలిలయ సామాజిక-రాజకీయ నేపథ్యం నుండి జననం, పరిచర్య, ఉపమానాలు, అద్భుతాలు, సిలువ మరణం, పునరుత్థానం మరియు ప్రారంభ క్రైస్తవ ఉద్యమం వరకు సమగ్ర చారిత్రక సమాచారం.'
              : 'Explore the complete chronological life of Jesus Christ with transparent source citations, archaeological context, and scholarly distinctions between Biblical texts, historical evidence, and ancient traditions.'}
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <button
            onClick={() => onSelectSection('timeline')}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-midnight-950 font-bold text-sm sm:text-base shadow-sacred hover:shadow-glow-gold transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <Compass className="w-5 h-5" />
            <span>{isTelugu ? 'ప్రయాణాన్ని ప్రారంభించండి' : 'Begin the Journey'}</span>
          </button>

          <button
            onClick={() => onSelectSection('map')}
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-midnight-900/90 hover:bg-midnight-800 text-gold-300 hover:text-white border border-gold-500/40 text-sm sm:text-base font-semibold transition-all backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>{isTelugu ? 'చారిత్రక పటం' : 'Explore 1st-Century Map'}</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white border border-white/20 text-sm sm:text-base font-medium transition-all backdrop-blur-sm"
          >
            <Search className="w-4 h-4 text-gold-400" />
            <span>{isTelugu ? 'శోధన (Search)' : 'Search All Modules'}</span>
          </button>
        </div>

        {/* Quick Stats Strip */}
        <div className="pt-8 border-t border-gold-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-midnight-900/60 border border-gold-500/20 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{isTelugu ? 'కాలక్రమం' : 'Timeline'}</span>
            </div>
            <p className="text-white font-bold text-lg">30 {isTelugu ? 'అధ్యాయాలు' : 'Chapters'}</p>
            <p className="text-[11px] text-stone-400">{isTelugu ? 'జననం నుండి ప్రపంచ ప్రభావం వరకు' : 'Birth to Global Legacy'}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-midnight-900/60 border border-gold-500/20 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{isTelugu ? 'బోధలు & అద్భుతాలు' : 'Teachings'}</span>
            </div>
            <p className="text-white font-bold text-lg">45+ {isTelugu ? 'అంశాలు' : 'Modules'}</p>
            <p className="text-[11px] text-stone-400">{isTelugu ? 'ఉపమానాలు, స్వస్థతలు & ఆచారాలు' : 'Parables, Miracles & Ethics'}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-midnight-900/60 border border-gold-500/20 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <Scroll className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{isTelugu ? 'ఆధారాలు' : 'Evidence'}</span>
            </div>
            <p className="text-white font-bold text-lg">{isTelugu ? 'ధృవీకరించబడినవి' : 'Documented'}</p>
            <p className="text-[11px] text-stone-400">{isTelugu ? 'జోసెఫస్, టాసిటస్, పురావస్తు ఆధారాలు' : 'Josephus, Tacitus, Inscriptions'}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-midnight-900/60 border border-gold-500/20 backdrop-blur-xs">
            <div className="flex items-center gap-2 text-gold-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{isTelugu ? 'స్థలాలు' : 'Geography'}</span>
            </div>
            <p className="text-white font-bold text-lg">20+ {isTelugu ? 'ప్రాంతాలు' : 'Locations'}</p>
            <p className="text-[11px] text-stone-400">{isTelugu ? 'గలిలయ, సమరయ, యెరూషలేము' : 'Galilee, Samaria & Judea'}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
