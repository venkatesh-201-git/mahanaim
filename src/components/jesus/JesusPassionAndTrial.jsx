import React, { useState } from 'react';
import { Landmark, ShieldCheck, Scale, BookOpen, AlertCircle, User, Info, FileText } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { SOURCE_CONFIDENCE } from '../../data/jesusHistoricalData';

export const JesusPassionAndTrial = () => {
  const { isTelugu } = useLanguage();
  const [activeTab, setActiveTab] = useState('trials');

  const trialsData = [
    {
      stage: 1,
      titleEn: "1. Preliminary Hearing before Annas",
      titleTe: "1. మాజీ ప్రధాన యాజకుడైన హన్నా ఎదుట ప్రాథమిక విచారణ",
      authority: "Former High Priest (Patriarch of the Priestly Dynasty)",
      authorityTe: "యాజక వంశ పితామహుడు",
      location: "Palace of Annas, Jerusalem",
      scripture: "John 18:12–24",
      summaryEn: "Annas, wielding immense informal power, questioned Jesus regarding His disciples and His teachings. Jesus responded that He had always spoken openly in synagogues and the Temple. A temple officer struck Jesus on the face.",
      summaryTe: "హన్నా యేసును శిష్యుల గురించి, బోధన గురించి ప్రశ్నించగా; తాను ఎల్లప్పుడూ సమాజమందిరములలో, దేవాలయములో బహిరంగముగానే బోధించానని యేసు సమాధానమిచ్చెను. ఒక కావలివాడు యేసును చెంపమీద కొట్టెను."
    },
    {
      stage: 2,
      titleEn: "2. Night Trial before Caiaphas & the Sanhedrin",
      titleTe: "2. కయప మరియు సన్హెద్రిన్ మహాసభ ఎదుట రాత్రి విచారణ",
      authority: "Reigning High Priest Joseph Caiaphas & Sanhedrin Council",
      authorityTe: "ప్రధాన యాజకుడైన కయప మరియు పెద్దలు",
      location: "Palace of Caiaphas",
      scripture: "Matthew 26:57–68, Mark 14:53–65, Luke 22:54–65",
      summaryEn: "False witnesses contradicted one another. Caiaphas adjured Jesus by the living God to state if He was the Christ. Jesus affirmed His identity and Messianic enthronement (Daniel 7:13). Caiaphas tore his robes, declaring blasphemy.",
      summaryTe: "అబద్ధ సాక్ష్యాలు సరిపోకపోగా, కయప లేచి: 'నీవు దేవుని కుమారుడవైన క్రీస్తువా?' అని అడిగెను. యేసు 'నేనే' అని దానియేలు 7:13 లేఖనాన్ని ఉటంకించెను. కయప తన వస్త్రములు చింపుకొని దైవదూషణ అని తీర్పు తీర్చెను."
    },
    {
      stage: 3,
      titleEn: "3. First Roman Interrogation before Pontius Pilate",
      titleTe: "3. రోమన్ గవర్నర్ పొంతి పిలాతు ఎదుట మొదటి విచారణ",
      authority: "Roman Prefect of Judea (26–36 CE)",
      authorityTe: "యూదయ రోమన్ గవర్నర్",
      location: "Praetorium (Herod's Palace / Antonia Fortress)",
      scripture: "Luke 23:1–5, John 18:28–38",
      summaryEn: "The religious leaders charged Jesus with political sedition (forbidding tax to Caesar and claiming kingship). Pilate questioned Jesus privately: 'Are you the King of the Jews?' Jesus clarified: 'My kingdom is not of this world.' Pilate declared: 'I find no basis for a charge against this man.'",
      summaryTe: "రాజకీయ తిరుగుబాటుదారుడని ఆరోపించగా, పిలాతు 'నీవు యూదుల రాజువా?' అని అడిగెను. యేసు 'నా రాజ్యము ఈ లోక సంబంధమైనది కాదు' అని వివరించెను. పిలాతు 'నాకు ఈ మనుష్యునియందు ఏ దోషమును కనబడలేదు' అని ప్రకటించెను."
    },
    {
      stage: 4,
      titleEn: "4. Hearing before Herod Antipas",
      titleTe: "4. గలిలయ పాలకుడైన హేరోదు అంతిపస్ ఎదుట విచారణ",
      authority: "Tetrarch of Galilee and Perea",
      authorityTe: "గలిలయ చతుర్థాధిపతి",
      location: "Hasmonaean Palace, Jerusalem",
      scripture: "Luke 23:6–12 (Recorded exclusively in Luke)",
      summaryEn: "Learning Jesus was from Galilee, Pilate sent Him to Herod Antipas (who executed John the Baptist). Herod hoped to see a miracle. When Jesus offered no answer, Herod and his soldiers mocked Him, dressed Him in an elegant robe, and sent Him back to Pilate.",
      summaryTe: "యేసు గలిలయ వాసి అని తెలిసి పిలాతు హేరోదు వద్దకు పంపెను. హేరోదు అద్భుతం చూడాలని ఆశించగా, యేసు మౌనంగా ఉండెను. హేరోదు మరియు సైనికులు ఆయనను ఎగతాళి చేసి ప్రకాశమానమైన వస్త్రము తొడిగించి తిరిగి పిలాతు వద్దకు పంపారు."
    },
    {
      stage: 5,
      titleEn: "5. Final Roman Judgment, Scourging & Barabbas",
      titleTe: "5. తుది రోమన్ తీర్పు, బరబ్బా విడుదల & కొరడా దెబ్బలు",
      authority: "Pontius Pilate on the Judgment Seat (*Bēma*)",
      authorityTe: "పిలాతు న్యాయపీఠము",
      location: "The Stone Pavement (*Gabbatha*)",
      scripture: "Matthew 27:15–26, Mark 15:6–15, John 19:1–16",
      summaryEn: "Pilate proposed releasing Jesus for the Passover amnesty. The crowd demanded the release of insurrectionist Barabbas and shouted for Jesus' crucifixion. Pilate had Jesus scourged with lead-tipped leather whips (*flagrum*), crowned with thorns by Roman soldiers, and handed Him over to be crucified.",
      summaryTe: "పస్కా ఆచారముగా యేసును విడుదల చేయడానికి పిలాతు ప్రయత్నించగా, ప్రజలు బరబ్బాను విడుదల చేయమని, యేసును సిలువ వేయమని కేకలు వేశారు. పిలాతు యేసును కొరడాలతో కొట్టించి, సైనికులు ముండ్లకిరీటం పెట్టి ఎగతాళి చేసిన తర్వాత సిలువ వేయుటకు అప్పగించెను."
    }
  ];

  return (
    <section id="passion" className="py-12 sm:py-16 space-y-12">
      
      {/* Module Title */}
      <div className="text-center max-w-4xl mx-auto px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30">
          <Landmark className="w-3.5 h-3.5 text-gold-500" />
          {isTelugu ? 'శ్రమల వారము & న్యాయ విచారణలు' : 'Passion Week & Legal Proceedings'}
        </span>

        <h2 className={`font-serif font-black text-2xl sm:text-4xl md:text-5xl text-midnight-950 dark:text-white ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu ? 'యూదా & రోమన్ విచారణలు, పిలాతు మరియు యూదా ఇస్కరియోతు' : 'The Trials, Pontius Pilate & Judas Iscariot'}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto ${
          isTelugu ? 'font-telugu' : ''
        }`}>
          {isTelugu
            ? 'హన్నా, కయప, సన్హెద్రిన్, పొంతి పిలాతు మరియు హేరోదు అంతిపస్ ఎదుట జరిగిన ఐదు దశల విచారణల సమగ్ర చారిత్రక విశ్లేషణ.'
            : 'Detailed historical and legal examination of the five proceedings before Jewish and Roman authorities.'}
        </p>
      </div>

      {/* Sub-Tabs: Trials vs Pilate Profile vs Judas Profile */}
      <div className="flex items-center justify-center gap-2 max-w-md mx-auto px-4">
        <button
          onClick={() => setActiveTab('trials')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'trials'
              ? 'bg-gold-500 text-midnight-950 shadow-md'
              : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300'
          }`}
        >
          {isTelugu ? '5 దశల విచారణలు' : 'The 5 Trial Stages'}
        </button>
        <button
          onClick={() => setActiveTab('pilate')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'pilate'
              ? 'bg-gold-500 text-midnight-950 shadow-md'
              : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300'
          }`}
        >
          {isTelugu ? 'పొంతి పిలాతు ప్రొఫైల్' : 'Pontius Pilate'}
        </button>
        <button
          onClick={() => setActiveTab('judas')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'judas'
              ? 'bg-gold-500 text-midnight-950 shadow-md'
              : 'bg-stone-100 dark:bg-midnight-900 text-stone-700 dark:text-stone-300'
          }`}
        >
          {isTelugu ? 'యూదా ఇస్కరియోతు' : 'Judas Iscariot'}
        </button>
      </div>

      {/* CRUCIAL HISTORICAL ACCURACY ALERT */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-800 dark:text-amber-300 block">
              {isTelugu ? 'చారిత్రక సూత్రం & స్పష్టత (Historical Clarification):' : 'Historical Clarification on Legal Responsibility:'}
            </span>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              {isTelugu
                ? 'యేసు, ఆయన తల్లిదండ్రులు, పన్నెండుమంది అపొస్తలులు మరియు తొలి క్రైస్తవ సమాజమంతా యూదులే. యేసు మరణానికి సంపూర్ణ జాతిని బాధ్యులుగా పరిగణించడం చారిత్రకంగా మరియు లేఖనాత్మకంగా పూర్తిగా తప్పు. మరణశిక్ష అమలు చేయు అధికారం కేవలం రోమన్ గవర్నర్ పొంతి పిలాతు అధికార పరిధిలోని రోమన్ చట్టానికి మాత్రమే ఉండేది.'
                : 'Crucifixion was exclusively a Roman method of execution carried out under Roman imperial authority by Governor Pontius Pilate. Jesus, His family, the Twelve Apostles, and the earliest Christian church were all Jewish. Responsibility must never be generalized to an entire ethnic or religious population.'}
            </p>
          </div>
        </div>
      </div>

      {/* TAB 1: 5 TRIAL STAGES */}
      {activeTab === 'trials' && (
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          {trialsData.map((tr) => (
            <div 
              key={tr.stage}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-midnight-900 border border-stone-200 dark:border-gold-500/25 shadow-sm space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-100 dark:border-midnight-800">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono font-bold text-gold-600 dark:text-gold-400">
                    Stage {tr.stage} • {tr.scripture}
                  </span>
                  <h3 className={`font-serif font-bold text-lg text-midnight-950 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
                    {isTelugu ? tr.titleTe : tr.titleEn}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-midnight-800 text-stone-600 dark:text-stone-300 w-fit">
                  {isTelugu ? tr.authorityTe : tr.authority}
                </span>
              </div>

              <p className={`text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
                {isTelugu ? tr.summaryTe : tr.summaryEn}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: PONTIUS PILATE PROFILE */}
      {activeTab === 'pilate' && (
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-gold-500/30 shadow-sacred space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-midnight-800">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400 uppercase">
                  Historical Roman Profile
                </span>
                <h3 className="font-serif font-black text-2xl text-midnight-950 dark:text-white">
                  Pontius Pilate (Prefect of Judea, 26–36 CE)
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30">
                🟢 {isTelugu ? 'పురావస్తు శాస్త్ర ధృవీకరణ' : 'Historically Documented'}
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                {isTelugu
                  ? 'పొంతి పిలాతు క్రీ.శ. 26 నుండి 36 వరకు తిబెరియస్ చక్రవర్తి ఆధ్వర్యంలో యూదయ రోమన్ ప్రిఫెక్ట్ (గవర్నర్) గా పనిచేశాడు. యూదు చరిత్రకారుడైన జోసెఫస్ మరియు అలెక్సాండ్రియా తత్వవేత్త ఫిలో ప్రకారం, పిలాతు కఠినమైన, రాజీపడని రోమన్ అధికారి.'
                  : 'Pontius Pilate was the 5th Roman prefect of the province of Judea from 26 to 36 CE under Emperor Tiberius. Non-Christian ancient writers Flavius Josephus and Philo of Alexandria portray Pilate as a stern, pragmatic Roman administrator sensitive to maintaining imperial order during volatile religious festivals.'}
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-midnight-950 border border-stone-200 dark:border-midnight-800 space-y-2">
                <span className="font-bold text-gold-700 dark:text-gold-400 block">
                  {isTelugu ? 'బాహ్య చారిత్రక సాక్ష్యాలు (External Evidence):' : 'Key External Historical Sources:'}
                </span>
                <ul className="list-disc list-inside space-y-1 text-xs">
                  <li><strong>The Pilate Stone (1961):</strong> Limestone inscription in Caesarea Maritima reading *Pontius Pilatus, Praefectus Iudaeae*.</li>
                  <li><strong>Cornelius Tacitus (Annals 15.44):</strong> Mentions *Christus* was executed under Pontius Pilate during the reign of Tiberius.</li>
                  <li><strong>Flavius Josephus (Antiquities 18.3.3):</strong> Records Pilate sentencing Jesus to the cross.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: JUDAS ISCARIOT PROFILE */}
      {activeTab === 'judas' && (
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-midnight-900 border border-gold-500/30 shadow-sacred space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-midnight-800">
              <div>
                <span className="text-xs font-mono font-bold text-gold-600 dark:text-gold-400 uppercase">
                  Neutral Historical Profile
                </span>
                <h3 className="font-serif font-black text-2xl text-midnight-950 dark:text-white">
                  Judas Iscariot (Ἰούδας Ἰσκαριώτης)
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/15 text-blue-800 dark:text-blue-300 border border-blue-500/30">
                🔵 {isTelugu ? 'సువార్త సమాచారం' : 'Gospel Record'}
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                {isTelugu
                  ? 'యూదా ఇస్కరియోతు పన్నెండుమంది అపొస్తలులలో ఒకడు మరియు శిష్యుల ధన సంచికి కోశాధికారిగా ఉండేవాడు. ప్రధాన యాజకులతో ముప్పది వెండి నాణేలకు ఒప్పందం కుదుర్చుకుని, గెత్సేమనే తోటలో ముద్దుతో యేసును పట్టిచ్చాడు. తదనంతరం పశ్చాత్తాపపడి వెండిని దేవాలయములో విసిరివేసి ఆత్మహత్య చేసుకున్నాడు.'
                  : 'Judas Iscariot was one of the original Twelve Apostles and served as treasurer of the group\'s communal purse. The Gospels record that he negotiated with chief priests for thirty silver pieces and identified Jesus in Gethsemane with a customary greeting kiss. Overcome by remorse, he returned the blood money to the Temple and died by suicide.'}
              </p>

              <div className="p-4 rounded-2xl bg-gold-500/10 border-l-4 border-gold-500 space-y-2">
                <span className="font-bold text-gold-800 dark:text-gold-300 block">
                  {isTelugu ? 'మత్తయి 27 vs అపొస్తలుల కార్యములు 1 మరణ వృత్తాంతాలు:' : 'Matthew 27 vs Acts 1 Death Accounts:'}
                </span>
                <p className="text-xs">
                  {isTelugu
                    ? 'మత్తయి 27:3–10 లో యూదా ఉరివేసుకున్నట్లు నమోదు చేయబడింది. అపొస్తలుల కార్యములు 1:18–19 లో పేతురు రక్తపు పొలములో (అకెల్దమ) అతడు తలక్రిందులుగా పడి పగిలినట్లు ప్రస్తావించాడు. ప్రాచీన పండితులు ఉరితాడ తెగి రాళ్లపై పడటం వలన ఇవి రెండు ఒకే సంఘటనకు చెందిన వివరాలని సమన్వయం చేస్తారు.'
                    : 'Matthew 27:5 records that Judas hanged himself in despair. Acts 1:18 records Peter saying he bought a field with the reward of iniquity, fell headlong, and burst open in the Field of Blood (*Akeldama*). Ancient commentators historically harmonized the accounts by noting the rope breaking over the rocky ravine.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
