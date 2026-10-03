import React, { useState } from 'react';
import { BookOpen, Sparkles, Heart, Compass, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PARABLES_DATA } from '../../data/jesusHistoricalData';

export const JesusTeachingsParables = () => {
  const { isTelugu } = useLanguage();
  const [selectedParable, setSelectedParable] = useState(PARABLES_DATA[0]);

  const beatitudes = [
    {
      en: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
      te: "ఆత్మవిషయమై దీనులైనవారు ధన్యులు, పరలోకరాజ్యము వారిది.",
      verse: "Matthew 5:3",
      meaningEn: "Recognizing one's spiritual poverty and complete reliance on God's grace.",
      meaningTe: "స్వనీతిని కాక దేవుని కృపపై సంపూర్ణముగా ఆధారపడు దీనత్వము."
    },
    {
      en: "Blessed are those who mourn, for they shall be comforted.",
      te: "దుఃఖపడువారు ధన్యులు, వారు ఓదార్చబడుదురు.",
      verse: "Matthew 5:4",
      meaningEn: "Grieving over personal sin and the brokenness of the world.",
      meaningTe: "పాపమును బట్టి మరియు లోకపు వేదనను బట్టి పశ్చాత్తాపపడువారు."
    },
    {
      en: "Blessed are the meek, for they shall inherit the earth.",
      te: "సాత్వికులు ధన్యులు, వారు భూలోకమును స్వతంత్రించుకొందురు.",
      verse: "Matthew 5:5",
      meaningEn: "Gentle humility, strength under control rather than arrogant force.",
      meaningTe: "కోపమును అణచుకొని శాంతముతో, వినయముతో జీవించుట."
    },
    {
      en: "Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.",
      te: "నీతికొరకు ఆకలిదప్పులు గలవారు ధన్యులు, వారు తృప్తిపరచబడుదురు.",
      verse: "Matthew 5:6",
      meaningEn: "Deep passion for God's justice, moral purity, and kingdom will.",
      meaningTe: "దేవుని నీతి మరియు పరిశుద్ధత కొరకు నిరంతర ఆత్మీయ దాహం."
    },
    {
      en: "Blessed are the merciful, for they shall obtain mercy.",
      te: "కనికరముగలవారు ధన్యులు, వారు కనికరము పొందుదురు.",
      verse: "Matthew 5:7",
      meaningEn: "Active compassion, generous forgiveness, and practical aid to the needy.",
      meaningTe: "క్షమాగుణముతో దీనులకు, బాధితులకు సహాయము చేయు కనికర హృదయము."
    },
    {
      en: "Blessed are the pure in heart, for they shall see God.",
      te: "హృదయశుద్ధి గలవారు ధన్యులు, వారు దేవుని చూచెదరు.",
      verse: "Matthew 5:8",
      meaningEn: "Undivided devotion, integrity, and sincerity free from hypocrisy.",
      meaningTe: "కపటము లేని నిష్కల్మషమైన పరిశుద్ధ హృదయము."
    },
    {
      en: "Blessed are the peacemakers, for they shall be called sons of God.",
      te: "సమాధానపరచువారు ధన్యులు, వారు దేవుని కుమారులనబడుదురు.",
      verse: "Matthew 5:9",
      meaningEn: "Actively reconciling conflicts and fostering godly reconciliation.",
      meaningTe: "వైరములను తొలగించి దైవిక సమాధానమును స్థాపించువారు."
    },
    {
      en: "Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.",
      te: "నీతినిమిత్తము హింసింపబడువారు ధన్యులు, పరలోకరాజ్యము వారిది.",
      verse: "Matthew 5:10",
      meaningEn: "Remaining steadfast in faith despite social mockery or severe opposition.",
      meaningTe: "సత్యము కొరకు, క్రీస్తు నిమిత్తము శ్రమలను సహించు విశ్వాస వీరులు."
    }
  ];

  return (
    <section id="teachings" className="py-12 sm:py-16 space-y-16">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <BookOpen className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'పరలోక రాజ్య నీతి & ఉపదేశాలు' : 'Kingdom Ethics & Teachings'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'కొండమీది ప్రసంగము & ప్రఖ్యాత ఉపమానాలు' : 'The Sermon on the Mount & Parables of the Kingdom'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'ధన్యతలు, సువర్ణ నియమం, శత్రుప్రేమ, పరలోక ప్రార్థన మరియు మొదటి శతాబ్దపు సామాజిక-వ్యవసాయ నేపథ్యంతో కూడిన ఉపమాన కథల సమగ్ర విశ్లేషణ.'
            : 'The constitutional ethics of God\'s reign: the Beatitudes, the Golden Rule, enemy love, prayer, and the master parables.'}
        </p>
      </div>

      {/* Part 1: The 8 Beatitudes Grid */}
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-gold-600 dark:text-gold-400">
              Matthew 5:3–12
            </span>
            <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-950 dark:text-white ${
              isTelugu ? 'font-telugu' : ''
            }`}>
              {isTelugu ? 'ఎనిమిది ధన్యతలు (The 8 Beatitudes)' : 'The Eight Beatitudes (Matthew 5)'}
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-semibold hidden sm:inline">
            {isTelugu ? 'పరలోక రాజ్య సూత్రాలు' : 'Kingdom Core Values'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {beatitudes.map((b, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/20 shadow-sm space-y-3 hover:border-gold-500/50 hover:shadow-sacred transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-gold-600 dark:text-gold-400 block">
                  #{idx + 1} • {b.verse}
                </span>
                <p className={`font-serif font-bold text-sm text-midnight-950 dark:text-white leading-snug ${
                  isTelugu ? 'font-telugu' : ''
                }`}>
                  {isTelugu ? b.te : b.en}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 dark:border-midnight-800">
                <p className={`text-[11px] text-stone-600 dark:text-stone-300 leading-relaxed ${
                  isTelugu ? 'font-telugu' : ''
                }`}>
                  {isTelugu ? b.meaningTe : b.meaningEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Interactive Parables Explorer */}
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-gold-600 dark:text-gold-400">
              Interactive Story Cards
            </span>
            <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-950 dark:text-white ${
              isTelugu ? 'font-telugu' : ''
            }`}>
              {isTelugu ? 'యేసు ఉపమానాల విశ్లేషణ' : 'Master Parables of Jesus'}
            </h3>
          </div>
          <span className="text-xs text-stone-500 font-semibold hidden sm:inline">
            {isTelugu ? 'చారిత్రక & ఆత్మీయ వివరణ' : 'Historical & Theological Context'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Parable Selection Pill List */}
          <div className="lg:col-span-4 space-y-2">
            {PARABLES_DATA.map((p) => {
              const isSel = selectedParable.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedParable(p)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSel
                      ? 'bg-gold-500 text-midnight-950 border-gold-600 font-bold shadow-sacred'
                      : 'bg-white dark:bg-midnight-900 border-stone-200 dark:border-midnight-800 hover:border-gold-500/40 text-stone-800 dark:text-stone-200'
                  }`}
                >
                  <div>
                    <h4 className={`text-sm font-bold ${isTelugu ? 'font-telugu' : ''}`}>
                      {isTelugu ? p.title.te : p.title.en}
                    </h4>
                    <p className={`text-[11px] font-mono ${isSel ? 'text-midnight-900' : 'text-gold-600 dark:text-gold-400'}`}>
                      {p.source}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSel ? 'text-midnight-950' : 'text-stone-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Parable Deep Dive Card */}
          <div className="lg:col-span-8 bg-white dark:bg-midnight-900 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-sacred space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-midnight-800">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400">
                  {selectedParable.source}
                </span>
                <h3 className={`font-serif font-black text-2xl text-midnight-950 dark:text-white ${
                  isTelugu ? 'font-telugu' : ''
                }`}>
                  {isTelugu ? selectedParable.title.te : selectedParable.title.en}
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-300 border border-gold-500/20 w-fit">
                {isTelugu ? 'లేఖన కథనం' : 'Biblical Parable'}
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100 block text-xs uppercase tracking-wider mb-1">
                  {isTelugu ? 'కథా సారాంశం:' : 'The Narrative Story:'}
                </span>
                <p className={`text-stone-700 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                  {isTelugu ? selectedParable.story.te : selectedParable.story.en}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-1">
                <span className="font-bold text-gold-700 dark:text-gold-400 text-xs uppercase tracking-wider block">
                  {isTelugu ? 'మొదటి శతాబ్దపు సామాజిక-చారిత్రక నేపథ్యం:' : '1st-Century Historical & Social Context:'}
                </span>
                <p className={`text-stone-600 dark:text-stone-300 text-xs leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                  {isTelugu ? selectedParable.context.te : selectedParable.context.en}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gold-500/10 border-l-4 border-gold-500 space-y-1">
                <span className="font-bold text-gold-800 dark:text-gold-300 text-xs uppercase tracking-wider block">
                  {isTelugu ? 'ప్రధాన ఆత్మీయ సత్యాలు:' : 'Key Themes & Spiritual Meaning:'}
                </span>
                <p className={`text-stone-700 dark:text-stone-300 text-xs leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                  {isTelugu ? selectedParable.themes.te : selectedParable.themes.en}
                </p>
              </div>

              <div className="text-xs text-stone-500 dark:text-stone-400">
                <span className="font-bold">{isTelugu ? 'పాత్రలు:' : 'Key Figures:'} </span>
                {isTelugu ? selectedParable.charactersTe : selectedParable.characters}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
