import React, { useState } from 'react';
import { MapPin, Compass, ShieldCheck, BookOpen, Layers, ExternalLink, Navigation } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { HISTORICAL_PLACES } from '../../data/jesusHistoricalData';

export const JesusMapExplorer = () => {
  const { isTelugu } = useLanguage();
  const [selectedPlace, setSelectedPlace] = useState(HISTORICAL_PLACES[0]);
  const [activeRegion, setActiveRegion] = useState('all');

  const regions = [
    { id: 'all', labelEn: 'All 10 Sites', labelTe: 'అన్ని స్థలాలు' },
    { id: 'Galilee', labelEn: 'Galilee (North)', labelTe: 'గలిలయ ప్రాంతం' },
    { id: 'Judea', labelEn: 'Judea & Jerusalem (South)', labelTe: 'యూదయ & యెరూషలేము' },
  ];

  const filteredPlaces = HISTORICAL_PLACES.filter((p) => {
    if (activeRegion === 'all') return true;
    if (activeRegion === 'Galilee') return p.region.includes('Galilee') || p.region.includes('Golan');
    if (activeRegion === 'Judea') return p.region.includes('Judea') || p.region.includes('Jerusalem') || p.region.includes('Kidron') || p.region.includes('Bethany');
    return true;
  });

  return (
    <section id="map" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <Navigation className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'మొదటి శతాబ్దపు భౌగోళిక పటం' : '1st-Century Historical Geography'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'యేసు నడిచిన పవిత్ర స్థలాలు & పురావస్తు ఆధారాలు' : 'Important Places of Jesus & Archaeological Evidence'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'నజరేతు, బెత్లెహేము, కపెర్నహూము, గలిలయ సముద్రం నుండి యెరూషలేము రెండవ దేవాలయం, గెత్సేమనే మరియు గొల్గొతా వరకు పురావస్తు త్రవ్వకాల సమాచారం.'
            : 'Explore key sites of Jesus\' ministry with modern archaeological findings, biblical references, and historical topography.'}
        </p>
      </div>

      {/* Region Filter */}
      <div className="flex items-center justify-center gap-2 max-w-md mx-auto px-4">
        {regions.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveRegion(r.id)}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeRegion === r.id
                ? 'bg-gold-500 text-midnight-950 shadow-md'
                : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300'
            } ${isTelugu ? 'font-telugu' : ''}`}
          >
            {isTelugu ? r.labelTe : r.labelEn}
          </button>
        ))}
      </div>

      {/* Interactive Map Layout */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Map Places Selector */}
        <div className="lg:col-span-5 space-y-2 max-h-[550px] overflow-y-auto pr-1">
          {filteredPlaces.map((pl) => {
            const isSel = selectedPlace.id === pl.id;
            return (
              <div
                key={pl.id}
                onClick={() => setSelectedPlace(pl)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  isSel
                    ? 'bg-gold-500/15 border-gold-500 text-midnight-950 dark:text-white font-bold shadow-xs'
                    : 'bg-white dark:bg-midnight-900 border-stone-200 dark:border-midnight-800 hover:border-gold-500/40 text-stone-700 dark:text-stone-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isSel ? 'bg-gold-500 text-midnight-950 font-bold' : 'bg-gold-500/10 text-gold-600 dark:text-gold-400'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isTelugu ? 'font-telugu' : ''}`}>
                      {isTelugu ? pl.nameTe : pl.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      {isTelugu ? pl.regionTe : pl.region}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-gold-600 dark:text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">
                  {pl.coordinates.lat.toFixed(2)}°N
                </span>
              </div>
            );
          })}
        </div>

        {/* Selected Location Full Detail Card */}
        <div className="lg:col-span-7 bg-white dark:bg-midnight-900 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-sacred space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-midnight-800">
            <div>
              <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400">
                {isTelugu ? selectedPlace.regionTe : selectedPlace.region}
              </span>
              <h3 className={`font-serif font-black text-2xl sm:text-3xl text-midnight-950 dark:text-white ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {isTelugu ? selectedPlace.nameTe : selectedPlace.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-stone-600 dark:text-stone-300 block">
                {selectedPlace.coordinates.lat}°N, {selectedPlace.coordinates.lng}°E
              </span>
              <span className="text-[10px] text-stone-400">{isTelugu ? 'భౌగోళిక నిరూపకాలు' : 'GPS Coordinates'}</span>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100 block text-xs uppercase tracking-wider mb-1">
                {isTelugu ? 'చారిత్రక & లేఖనాత్మక ప్రాముఖ్యత:' : 'Historical & Biblical Significance:'}
              </span>
              <p className={`text-stone-700 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? selectedPlace.significance.te : selectedPlace.significance.en}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-1.5">
              <span className="font-bold text-gold-700 dark:text-gold-400 text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                {isTelugu ? 'పురావస్తు శాస్త్ర ఆధారాలు & త్రవ్వకాలు:' : 'Modern Archaeology & Excavations:'}
              </span>
              <p className={`text-stone-600 dark:text-stone-300 text-xs leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? selectedPlace.archaeology.te : selectedPlace.archaeology.en}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-gold-500/10 border-l-4 border-gold-500 text-xs">
              <span className="font-bold text-gold-800 dark:text-gold-300 flex items-center gap-1.5 mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                {isTelugu ? 'ప్రముఖ లేఖనాలు:' : 'Key Scripture References:'}
              </span>
              <p className="text-stone-700 dark:text-stone-300 font-mono">
                {selectedPlace.scriptures}
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
