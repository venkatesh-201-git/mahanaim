import React, { useState } from 'react';
import { ListFilter, Home, Compass, UserCheck, ShieldCheck, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const JesusLifeCultureObjects = () => {
  const { isTelugu } = useLanguage();

  const dailyLifeAspects = [
    {
      titleEn: "1. Homes & Architecture",
      titleTe: "1. గృహాలు & భవన నిర్మాణం",
      descEn: "Modest single-story dwellings built from rough basalt or limestone, with flat mud-and-straw roofs accessed by external steps (used for sleeping and prayer, e.g. Mark 2:4).",
      descTe: "రాతితో కట్టిన ఒకే అంతస్తు గృహాలు; మట్టి, గడ్డితో చేసిన చదునైన పైకప్పులు ప్రార్థనకై, విశ్రాంతికై ఉపయోగపడేవి (మార్కు 2:4)."
    },
    {
      titleEn: "2. Food & Diet",
      titleTe: "2. ఆహారపు అలవాట్లు & పానీయాలు",
      descEn: "Simple Mediterranean staples: barley bread, olives, olive oil, figs, pomegranates, lentils, cheese, seasonal vegetables, freshwater fish from Lake Kinneret, and wine.",
      descTe: "యవల రొట్టెలు, ఒలీవ నూనె, అంజూరములు, ద్రాక్షలు, పప్పుదినుసులు, గలిలయ సముద్రపు చేపలు మరియు స్వచ్ఛమైన ద్రాక్షారసం."
    },
    {
      titleEn: "3. Occupations & Economy",
      titleTe: "3. వృత్తులు & ఆర్థిక వ్యవస్థ",
      descEn: "Agrarian farming (wheat, olives, vineyards), freshwater fishing, craftsmanship (*tekton* / builders and carpenters), and sheep/goat herding under heavy Roman and Herodian taxation.",
      descTe: "వ్యవసాయం, చేపల వేట, వడ్రంగి/శిల్ప కళ (*టెక్టాన్*), గొఱ్ఱెల కాపరి వృత్తులు; రోమన్ మరియు హేరోదు పన్నుల భారం."
    },
    {
      titleEn: "4. Languages of the Land",
      titleTe: "4. మాట్లాడే భాషలు",
      descEn: "Galilean Aramaic (daily vernacular), Hebrew (synagogue liturgy and Torah scrolls), Koine Greek (commerce, administration, and Gentile trade), and Latin (Roman military and legal edicts).",
      descTe: "గలిలయ అరామిక్ (దైనందిన వ్యవహారిక భాష), హీబ్రూ (దేవాలయ/సమాజమందిర లేఖనాలు), కోయినే గ్రీకు (వాణిజ్య భాష) మరియు లాటిన్ (రోమన్ సైనిక పత్రాలు)."
    }
  ];

  const historicalObjects = [
    {
      nameEn: "The Galilee Fishing Boat (c. 50 BCE – 70 CE)",
      nameTe: "గలిలయ ప్రాచీన చెక్క పడవ",
      descEn: "Discovered in 1986 in the mud of Lake Kinneret. 27 feet long, crafted from cedar and oak, holding up to 13–15 men, exactly matching the Gospel fishing boats used by Jesus and the disciples.",
      status: "🟢 Authentic 1st-Century Artifact"
    },
    {
      nameEn: "Roman Denarius (Tribute Penny)",
      nameTe: "రోమన్ దేనారము (కైసరు నాణెం)",
      descEn: "Silver coin bearing the portrait of Emperor Tiberius Caesar (*Ti Caesar Divi Aug F Augustus*). The standard daily wage for an agricultural laborer, cited in Matthew 22:19–21.",
      status: "🟢 Inscriptional Numismatic Evidence"
    },
    {
      nameEn: "Clay Oil Lamps (Herodian Style)",
      nameTe: "మట్టి ప్రమిద దీపాలు (హేరోదు కాలపు శైలి)",
      descEn: "Wheel-made terracotta lamps burning olive oil with linen wicks, common in every 1st-century Jewish home and referenced in Jesus' parables (Matthew 25).",
      status: "🟢 Standard Archaeological Artifact"
    },
    {
      nameEn: "The Shroud of Turin",
      nameTe: "ట్యూరిన్ సమాధి వస్త్రం",
      descEn: "Venerated burial cloth bearing the faint image of a crucified man. Radiocarbon tested to the medieval era (1260–1390 CE), though origin debates continue; treated historically as a disputed relic.",
      status: "🔴 Disputed Relic / Christian Tradition"
    }
  ];

  return (
    <section id="culture" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <ListFilter className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'దైనందిన జీవనం & చారిత్రక వస్తువులు' : '1st-Century Culture & Artifacts'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'మొదటి శతాబ్దపు గలిలయ జీవనశైలి & చారిత్రక అవశేషాలు' : 'A Day in 1st-Century Galilee & Historical Objects'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'నాటి గృహాలు, ఆహారం, వృత్తులు, భాషలు, పురావస్తు నాణేలు, పడవలు మరియు యేసుక్రీస్తు భౌతిక రూపాన్ని గూర్చిన చారిత్రక విశ్లేషణ.'
            : 'Explore daily domestic life in Roman Galilee and inspect genuine 1st-century archaeological objects mentioned in the Gospels.'}
        </p>
      </div>

      {/* Part 1: Jesus' Appearance Scholarly Reconstruction */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-gold-500/30 shadow-sacred space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-midnight-800">
            <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400">
              Anthropological & Forensic Insight
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300">
              🟡 {isTelugu ? 'శాస్త్రీయ పునర్నిర్మాణం' : 'Scholarly Reconstruction'}
            </span>
          </div>

          <h3 className={`font-serif font-black text-xl sm:text-2xl text-midnight-950 dark:text-white ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {isTelugu ? 'యేసుక్రీస్తు రూపం — చారిత్రక వాస్తవికత vs కళాత్మక సంప్రదాయం' : 'The Physical Appearance of Jesus: History vs Art'}
          </h3>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            <p>
              {isTelugu
                ? 'యేసుక్రీస్తు సమకాలీన చిత్రపటాలు ఏవీ లభించలేదు. సువార్తలలో ఆయన శారీరక రూపాన్ని వర్ణించలేదు. అయితే మొదటి శతాబ్దపు యూదా సెమిటిక్ మానవ శాస్త్రం మరియు పురావస్తు ఆధారాల ప్రకారం:'
                : 'No authenticated contemporary portrait of Jesus exists. The canonical Gospels provide no physical description. However, forensic anthropology and 1st-century Semitic archaeological evidence indicate:'}
            </p>

            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>Complexion:</strong> Weathered olive-brown Middle Eastern skin from years of outdoor manual labor and walking.</li>
              <li><strong>Hair & Beard:</strong> Short, dark curly hair (consistent with 1 Corinthians 11:14 prohibiting long hair for men) with a traditional trimmed beard.</li>
              <li><strong>Clothing:</strong> Modest woven wool/linen tunic (*chitōn*), an outer mantle (*himation*) with four corner fringes (*tzitzit* per Numbers 15:38), and leather sandals.</li>
            </ul>

            <div className="p-3.5 rounded-xl bg-gold-500/10 text-xs italic text-stone-600 dark:text-stone-300 border-l-2 border-gold-500">
              * {isTelugu ? 'గమనిక: ఆధునిక యూరోపియన్ చిత్రపటాలు తర్వాతి సంప్రదాయ కళారూపాలే తప్ప చారిత్రక వాస్తవ ఛాయాచిత్రాలు కావు.' : 'Note: European Renaissance paintings of a fair-skinned, blue-eyed Jesus reflect later European artistic culture rather than 1st-century Levantine historical reality.'}
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Daily Life Aspects 4-Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {dailyLifeAspects.map((d, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/20 shadow-sm space-y-2">
            <h4 className={`font-serif font-bold text-lg text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
              {isTelugu ? d.titleTe : d.titleEn}
            </h4>
            <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
              {isTelugu ? d.descTe : d.descEn}
            </p>
          </div>
        ))}
      </div>

      {/* Part 3: Genuine 1st-Century Artifacts */}
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
          {isTelugu ? 'బైబిల్లో ప్రస్తావించబడిన చారిత్రక వస్తువులు & అవశేషాలు' : 'Archaeological Objects & Historical Artifacts'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {historicalObjects.map((obj, idx) => (
            <div key={idx} className="p-5 rounded-3xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className={`font-bold text-sm text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
                  {isTelugu ? obj.nameTe : obj.nameEn}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 dark:bg-midnight-800 text-stone-700 dark:text-stone-300">
                  {obj.status}
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {obj.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
