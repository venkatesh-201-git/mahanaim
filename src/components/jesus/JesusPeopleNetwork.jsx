import React, { useState } from 'react';
import { Users, User, ShieldCheck, Heart, Sparkles, BookOpen, Crown, ChevronRight, Info } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { APOSTLES_DATA, WOMEN_IN_MINISTRY, SOURCE_CONFIDENCE } from '../../data/jesusHistoricalData';

export const JesusPeopleNetwork = () => {
  const { isTelugu } = useLanguage();
  const [activeTab, setActiveTab] = useState('apostles');
  const [selectedPerson, setSelectedPerson] = useState(APOSTLES_DATA[0]);

  // Family & Genealogy data
  const genealogyInfo = {
    matthew: {
      titleEn: "Genealogy in Matthew 1:1–17 (The Royal Legal Line)",
      titleTe: "మత్తయి 1:1–17 వంశావళి (దావీదు రాజరిక క్రమం)",
      descEn: "Traces forward from Abraham through King David and Solomon to Joseph, the legal adoptive father of Jesus. Structured symmetrically in three groups of 14 generations. Uniquely includes five women of faith: Tamar, Rahab, Ruth, Bathsheba ('wife of Uriah'), and Mary.",
      descTe: "అబ్రాహాము నుండి దావీదు, సొలొమోనుల ద్వారా యేసుకు న్యాయపరమైన తండ్రియైన యోసేపు వరకు రికార్డు చేయబడింది. 14 తరాల చొప్పున మూడు భాగాలుగా విభజించబడింది. ఐదుగురు విశ్వాస స్త్రీలను (తామారు, రాహాబు, రూతు, బత్షెబ, మరియ) ప్రత్యేకంగా పేర్కొంటుంది."
    },
    luke: {
      titleEn: "Genealogy in Luke 3:23–38 (The Universal Biological Line)",
      titleTe: "లూకా 3:23–38 వంశావళి (సమస్త మానవాళి క్రమం)",
      descEn: "Traces backward from Jesus (supposedly the son of Joseph) through Nathan (son of David) all the way back to Adam, 'the son of God'. Emphasizes Jesus as the Savior of all humanity, not only the Jewish nation. Many scholars interpret this as Mary's ancestral line through Heli.",
      descTe: "యోసేపు నుండి దావీదు కుమారుడైన నాతాను ద్వారా సమస్త మానవాళి ఆద్యుడైన ఆదాము, దేవుని వరకు వెనుకకు తీసుకువెళ్తుంది. యేసు కేవలం యూదులకే కాక సమస్త మానవాళికి రక్షకుడని నొక్కిచెబుతుంది."
    }
  };

  return (
    <section id="people" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <Users className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'వ్యక్తులు & సంబంధాల జాలం' : 'Apostles, Women Disciples & Family'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'యేసు చుట్టూ ఉన్న ముఖ్య వ్యక్తులు' : 'The People Around Jesus of Nazareth'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'పన్నెండుమంది అపొస్తలులు, పరిచర్యలో తోడ్పడిన మహిళా శిష్యురాండ్రు, కుటుంబ బంధువులు మరియు దావీదు వంశావళి సంప్రదాయాల సమగ్ర వివరాలు.'
            : 'Detailed profiles of the Twelve Apostles, women in Jesus\' ministry, family connections, and scholarly interpretations of the New Testament genealogies.'}
        </p>
      </div>

      {/* Sub-Tabs: Apostles vs Women vs Genealogy */}
      <div className="flex items-center justify-center gap-2 max-w-md mx-auto px-4">
        <button
          onClick={() => setActiveTab('apostles')}
          className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'apostles'
              ? 'bg-gold-500 text-midnight-950 shadow-md'
              : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300'
          }`}
        >
          {isTelugu ? 'అపొస్తలులు (14)' : 'Twelve Apostles + Paul'}
        </button>
        <button
          onClick={() => setActiveTab('women')}
          className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'women'
              ? 'bg-gold-500 text-midnight-950 shadow-md'
              : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300'
          }`}
        >
          {isTelugu ? 'మహిళా శిష్యురాండ్రు' : 'Women in Ministry'}
        </button>
        <button
          onClick={() => setActiveTab('genealogy')}
          className={`flex-1 py-2.5 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'genealogy'
              ? 'bg-gold-500 text-midnight-950 shadow-md'
              : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300'
          }`}
        >
          {isTelugu ? 'వంశావళి & కుటుంబం' : 'Family & Genealogy'}
        </button>
      </div>

      {/* TAB 1: APOSTLES */}
      {activeTab === 'apostles' && (
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Apostles Selector List */}
          <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {APOSTLES_DATA.map((ap) => {
              const isSel = selectedPerson.id === ap.id;
              return (
                <div
                  key={ap.id}
                  onClick={() => setSelectedPerson(ap)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSel
                      ? 'bg-gold-500/15 border-gold-500 text-midnight-950 dark:text-white shadow-xs font-bold'
                      : 'bg-white dark:bg-midnight-900 border-stone-200 dark:border-midnight-800 hover:border-gold-500/40 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isSel ? 'bg-gold-500 text-midnight-950 font-bold' : 'bg-gold-500/10 text-gold-600 dark:text-gold-400'
                    }`}>
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isTelugu ? 'font-telugu' : ''}`}>
                        {isTelugu ? ap.nameTe : ap.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate max-w-[200px]">
                        {isTelugu ? ap.occupationTe : ap.occupation}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSel ? 'text-gold-600' : 'text-stone-400'}`} />
                </div>
              );
            })}
          </div>

          {/* Selected Apostle Full Biography Card */}
          <div className="lg:col-span-7 bg-white dark:bg-midnight-900 rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-sacred space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-stone-200 dark:border-midnight-800">
              <div>
                <span className="text-xs font-mono font-semibold text-gold-600 dark:text-gold-400">
                  {selectedPerson.greekName}
                </span>
                <h3 className={`font-serif font-black text-2xl sm:text-3xl text-midnight-950 dark:text-white ${
                  isTelugu ? 'font-telugu' : ''
                }`}>
                  {isTelugu ? selectedPerson.nameTe : selectedPerson.name}
                </h3>
              </div>
              <span className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full bg-gold-500/15 text-gold-800 dark:text-gold-300 border border-gold-500/30 w-fit">
                {isTelugu ? selectedPerson.historicalConfidence.badgeTe : selectedPerson.historicalConfidence.badge}
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100 block text-xs uppercase tracking-wider mb-1">
                  {isTelugu ? 'వృత్తి / నేపథ్యం:' : 'Occupation & Background:'}
                </span>
                <p className="text-stone-600 dark:text-stone-300">
                  {isTelugu ? selectedPerson.occupationTe : selectedPerson.occupation}
                </p>
              </div>

              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100 block text-xs uppercase tracking-wider mb-1">
                  {isTelugu ? 'యేసుతో అనుబంధం & పాత్ర:' : 'Role & Relationship with Jesus:'}
                </span>
                <p className="text-stone-600 dark:text-stone-300">
                  {isTelugu ? selectedPerson.roleTe : selectedPerson.role}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-1.5">
                <span className="font-bold text-gold-700 dark:text-gold-400 text-xs flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {isTelugu ? 'బైబిల్లో ప్రముఖ సంఘటనలు:' : 'Key Gospel Appearances:'}
                </span>
                <p className="text-stone-700 dark:text-stone-200 text-xs leading-relaxed">
                  {isTelugu ? selectedPerson.biblicalEventsTe : selectedPerson.biblicalEvents}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gold-500/10 border-l-4 border-gold-500 space-y-1.5">
                <span className="font-bold text-gold-800 dark:text-gold-300 text-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  {isTelugu ? 'తర్వాతి సంప్రదాయం & చారిత్రక అంశాలు:' : 'Later Tradition & Historical Context:'}
                </span>
                <p className="text-stone-700 dark:text-stone-300 text-xs leading-relaxed">
                  {isTelugu ? selectedPerson.laterTraditionTe : selectedPerson.laterTradition}
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: WOMEN IN MINISTRY */}
      {activeTab === 'women' && (
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WOMEN_IN_MINISTRY.map((w, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/25 shadow-sm space-y-4 hover:shadow-sacred transition-all">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-300 border border-gold-500/20">
                  {isTelugu ? w.status.badgeTe : w.status.badge}
                </span>
              </div>

              <div>
                <h3 className={`font-serif font-bold text-lg text-midnight-950 dark:text-white ${
                  isTelugu ? 'font-telugu' : ''
                }`}>
                  {isTelugu ? w.nameTe : w.name}
                </h3>
                <p className="text-[11px] text-gold-600 dark:text-gold-400 font-mono font-medium mt-0.5">
                  {w.scriptures}
                </p>
              </div>

              <p className={`text-xs text-stone-600 dark:text-stone-300 leading-relaxed ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {isTelugu ? w.roleTe : w.role}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: GENEALOGY & FAMILY */}
      {activeTab === 'genealogy' && (
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Matthew Genealogy Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/25 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-xs">
                <Crown className="w-4 h-4" />
                <span>Matthew 1:1–17</span>
              </div>
              <h3 className={`font-serif font-bold text-xl text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? genealogyInfo.matthew.titleTe : genealogyInfo.matthew.titleEn}
              </h3>
              <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? genealogyInfo.matthew.descTe : genealogyInfo.matthew.descEn}
              </p>
            </div>

            {/* Luke Genealogy Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/25 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-gold-600 dark:text-gold-400 font-bold text-xs">
                <BookOpen className="w-4 h-4" />
                <span>Luke 3:23–38</span>
              </div>
              <h3 className={`font-serif font-bold text-xl text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? genealogyInfo.luke.titleTe : genealogyInfo.luke.titleEn}
              </h3>
              <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? genealogyInfo.luke.descTe : genealogyInfo.luke.descEn}
              </p>
            </div>

          </div>

          {/* Scholarly Family Context Box */}
          <div className="p-6 rounded-3xl bg-gold-500/10 border border-gold-500/30 text-xs sm:text-sm space-y-3">
            <h4 className="font-bold text-midnight-950 dark:text-white flex items-center gap-2">
              <Info className="w-4 h-4 text-gold-500" />
              {isTelugu ? 'కుటుంబం మరియు తోబుట్టువుల ప్రస్తావనల చారిత్రక విశ్లేషణ:' : 'Family & Sibling References in Historical Scholarship:'}
            </h4>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              {isTelugu
                ? 'క్రొత్త నిబంధనలో యేసు సహోదరులుగా యాకోబు, యోసే, యూదా, సీమోను (మార్కు 6:3) మరియు సహోదరీల ప్రస్తావన ఉంది. ప్రారంభ క్రైస్తవ చరిత్రలో దీనిపై మూడు ప్రధాన వివరణలు ఉన్నాయి: (1) హెల్విడియన్ దృక్పథం: మరియ, యోసేపులకు యేసు తర్వాత జన్మించిన స్వంత తోబుట్టువులు; (2) ఎపిఫానియన్ దృక్పథం: యోసేపు పూర్వ వివాహపు పిల్లలు (సవతి తోబుట్టువులు); (3) జెరోమియన్ దృక్పథం: సెమిటిక్ భాషా సంప్రదాయంలో బంధువులు/కజిన్స్. యాకోబు (James the Just) తదనంతరం యెరూషలేము సంఘానికి ప్రముఖ నాయకుడిగా సేవలందించాడు (అపొ.కా. 15, గలతీ 1:19).'
                : 'The New Testament mentions brothers James, Joses, Judas, and Simon, along with sisters (Mark 6:3). Christian traditions have historically offered three scholarly perspectives: (1) Helvidian view: biological children of Mary and Joseph born after Jesus; (2) Epiphanian view: Joseph\'s children from a prior marriage (step-siblings); (3) Hieronymian view: cousins/close relatives in Semitic linguistic idiom. James became the prominent head of the Jerusalem church (Acts 15, Galatians 1:19) and was martyred c. 62 CE as documented by Josephus (Antiquities 20.9.1).'}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
