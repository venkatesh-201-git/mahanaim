import React, { useState } from 'react';
import { Sun, Sparkles, ShieldCheck, BookOpen, Compass, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SOURCE_CONFIDENCE } from '../../data/jesusHistoricalData';

export const JesusResurrectionAscension = () => {
  const { isTelugu } = useLanguage();

  const appearances = [
    {
      to: "Mary Magdalene at the Garden Tomb",
      toTe: "సమాధి తోటలో మగ్దలేనే మరియకు",
      scripture: "John 20:11–18, Mark 16:9",
      summaryEn: "Mary stood weeping outside the tomb. Jesus appeared and called her name: 'Mary!' She recognized Him, exclaiming 'Rabboni!' and became the first apostle to announce the Risen Lord to the disciples.",
      summaryTe: "సమాధి వద్ద ఏడుస్తున్న మరియను 'మరియా!' అని పిలువగా ఆమె గుర్తించి 'రబ్బూనీ!' అని పలికెను. పునరుత్థాన సువార్తను శిష్యులకు ప్రకటించిన ప్రథమ సాక్షిగా నిలిచింది."
    },
    {
      to: "Two Disciples on the Road to Emmaus",
      toTe: "ఎమ్మాయు మార్గములో ఇద్దరు శిష్యులకు",
      scripture: "Luke 24:13–35",
      summaryEn: "Walking with Cleopas and another disciple, Jesus expounded Moses and all the Prophets concerning Himself. Their eyes were opened when He blessed and broke the bread.",
      summaryTe: "క్లెయోపా మరియు మరొక శిష్యునితో నడుస్తూ లేఖనాలన్నింటినీ వివరించారు. రొట్టె విరిచినప్పుడు వారి కన్నులు తెరవబడి ఆయనను గుర్తించారు."
    },
    {
      to: "Ten Disciples in the Locked Upper Room",
      toTe: "మేడగదిలో తలుపులు వేసియున్న పదిమంది శిష్యులకు",
      scripture: "Luke 24:36–49, John 20:19–23",
      summaryEn: "Appearing in their midst despite locked doors, Jesus said: 'Peace be with you!' He showed His hands and side, ate broiled fish to demonstrate bodily reality, and breathed on them the Holy Spirit.",
      summaryTe: "తలుపులు మూసియుండగా మధ్యలో నిలిచి 'మీకు సమాధానము కలుగును గాక' అని తన చేతులను, ప్రక్కను చూపించి, కాల్చిన చేప ముక్కను తిని శారీరక పునరుత్థానాన్ని నిరూపించారు."
    },
    {
      to: "Thomas with the Apostles (Eight Days Later)",
      toTe: "ఎనిమిది దినముల తర్వాత తోమా ఎదుట",
      scripture: "John 20:24–29",
      summaryEn: "Jesus invited Thomas to touch the nail marks in His hands and side. Thomas confessed: 'My Lord and my God!' Jesus said: 'Blessed are those who have not seen and yet have believed.'",
      summaryTe: "తోమాను తన గాయములను తాకమని ఆహ్వానించగా, తోమా 'నా ప్రభువా, నా దేవా!' అని అత్యున్నత విశ్వాస ప్రకటన చేసెను."
    },
    {
      to: "Seven Disciples at the Sea of Galilee",
      toTe: "గలలీ సముద్ర తీరాన ఏడుగురు శిష్యులకు",
      scripture: "John 21:1–19",
      summaryEn: "Following a miraculous catch of 153 large fish, Jesus prepared breakfast of fish and bread on the shore and reinstated Peter three times ('Feed my lambs').",
      summaryTe: "153 చేపల అద్భుత వేట తర్వాత తీరాన అల్పాహారం సిద్ధం చేసి, పేతురును ముమ్మారు పునరుద్ధరించారు ('నా గొఱ్ఱెలను మేపుము')."
    },
    {
      to: "Over 500 Brethren, James & All Apostles",
      toTe: "ఐదువందలమందికి పైగా సహోదరులకు & యాకోబుకు",
      scripture: "1 Corinthians 15:6–7, Matthew 28:16–20",
      summaryEn: "Recorded by Paul in the earliest written creed c. 54 CE, where the majority of witnesses were still alive to be cross-examined at the time of writing.",
      summaryTe: "క్రీ.శ. 54 లో పౌలు రాసిన ప్రాచీన విశ్వాస ప్రకటనలో 500 మందికి పైగా ప్రత్యక్షమైనట్లు, వారిలో ఎక్కువమంది ఆ సమయంలో సజీవంగానే ఉన్నట్లు నమోదు చేయబడింది."
    }
  ];

  const churchMilestones = [
    { year: "c. 30/33 CE", eventEn: "Pentecost in Jerusalem; birth of the Church (Acts 2)", eventTe: "యెరూషలేములో పెంతెకొస్తు పరిశుద్ధాత్మ వర్షం; సంఘ ఆవిర్భావం" },
    { year: "c. 34–36 CE", eventEn: "Martyrdom of Stephen; Damascus Road conversion of Saul/Paul", eventTe: "స్తెఫను అమరమరణం; దమస్కు మార్గములో సౌలు/పౌలు పరివర్తన" },
    { year: "c. 49 CE", eventEn: "Council of Jerusalem decides Gentiles enter without circumcision (Acts 15)", eventTe: "యెరూషలేము కౌన్సిల్: అన్యులకు సువార్త ద్వారాలు తెరవబడుట" },
    { year: "c. 50–65 CE", eventEn: "Pauline Epistles written; earliest Gospel manuscripts circulate", eventTe: "పౌలు పత్రికల రచన; తొలి సువార్త ప్రతుల వ్యాప్తి" },
    { year: "c. 64–67 CE", eventEn: "Nero's persecutions in Rome; martyrdom of Peter and Paul", eventTe: "రోమ్ నగరంలో నీరో హింసలు; పేతురు, పౌలుల అమరమరణం" },
    { year: "70 CE", eventEn: "Roman destruction of Jerusalem and the Second Temple under Titus", eventTe: "తీతు సైన్యాధ్యక్షుని చేత యెరూషలేము రెండవ దేవాలయ వినాశనం" },
    { year: "325 CE", eventEn: "Council of Nicaea affirms the Nicene Creed across the Roman world", eventTe: "నైసియా కౌన్సిల్: నైసీన్ విశ్వాస ప్రకటన ఆమోదం" }
  ];

  return (
    <section id="resurrection" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30">
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          {isTelugu ? 'పునరుత్థానం, పరలోకారారోహణ & సంఘం' : 'Resurrection, Ascension & Early Church'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'మహిమాన్విత పునరుత్థానం & ఆదిమ సంఘ ప్రయాణం' : 'The Resurrection Accounts & Apostolic Spread'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'ఖాళీ సమాధి, పునరుత్థాన ప్రత్యక్షతలు, 1 కొరింథీ 15 లోని ప్రాచీన విశ్వాస ప్రకటన, పరలోకారారోహణ మరియు క్రీ.శ. 325 వరకు సంఘ విస్తరణ చరిత్ర.'
            : 'Explore the documented post-resurrection appearances, the Great Commission, Ascension, and early Christian historical timeline.'}
        </p>
      </div>

      {/* 1 Corinthians 15:3–7 Ancient Creed Banner */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-gradient-to-r from-gold-500/15 via-stone-100 to-gold-500/15 dark:from-midnight-900 dark:via-midnight-950 dark:to-midnight-900 border border-gold-500/35 p-6 sm:p-8 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400">
              1 Corinthians 15:3–7 (Documented c. 50–55 CE)
            </span>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
              🟢 {isTelugu ? 'అత్యంత ప్రాచీన చేతివ్రాత ఆధారాలు' : 'Earliest Written Creed'}
            </span>
          </div>

          <p className="font-serif italic text-sm sm:text-base text-stone-800 dark:text-stone-100 leading-relaxed">
            "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures, and that he appeared to Cephas, then to the Twelve. Then he appeared to more than five hundred brothers at one time..."
          </p>

          <p className="font-telugu text-sm text-gold-900 dark:text-gold-200 leading-relaxed pt-1">
            "నాకు అప్పగింపబడినదానిని మొదట మీకు అప్పగించితిని; అదేమనగా, లేఖనముల ప్రకారము క్రీస్తు మన పాపములకొరకు చనిపోయెను, సమాధి చేయబడెను, లేఖనముల ప్రకారము మూడవ దినమున లేపబడెను; ఆయన కేఫాకును, తరువాత పన్నెండుమందికిని కనబడెను. అటుపిమ్మట ఐదువందలకంటె ఎక్కువైన సహోదరులకు ఒక్కసమయమందే కనబడెను..."
          </p>
        </div>
      </div>

      {/* Post-Resurrection Appearances Grid */}
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-gold-600 dark:text-gold-400">
              New Testament Records
            </span>
            <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
              {isTelugu ? 'పునరుత్థాన ప్రత్యక్షతలు (6 ప్రధాన సందర్భాలు)' : 'The 6 Major Post-Resurrection Appearances'}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appearances.map((app, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/25 shadow-sm space-y-3 hover:shadow-sacred transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-gold-600 dark:text-gold-400 block">
                  #{idx + 1} • {app.scripture}
                </span>
                <h4 className={`font-serif font-bold text-base text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
                  {isTelugu ? app.toTe : app.to}
                </h4>
                <p className={`text-xs text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                  {isTelugu ? app.summaryTe : app.summaryEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Early Church Historical Milestones */}
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-gold-500/20">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-gold-600 dark:text-gold-400">
              From Jerusalem to Global Movement
            </span>
            <h3 className={`font-serif font-bold text-xl sm:text-2xl text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
              {isTelugu ? 'ఆదిమ క్రైస్తవ చరిత్ర కాలక్రమం (క్రీ.శ. 30 – 325)' : 'Early Church Historical Milestones (30 – 325 CE)'}
            </h3>
          </div>
        </div>

        <div className="space-y-3">
          {churchMilestones.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-midnight-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-20 sm:w-28 text-xs font-mono font-bold text-gold-600 dark:text-gold-400 shrink-0">
                  {m.year}
                </span>
                <p className={`text-xs sm:text-sm text-stone-700 dark:text-stone-200 font-medium ${isTelugu ? 'font-telugu' : ''}`}>
                  {isTelugu ? m.eventTe : m.eventEn}
                </p>
              </div>
              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 hidden sm:inline" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
