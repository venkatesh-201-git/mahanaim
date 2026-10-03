// Deeply Researched Bilingual Historical Data for Jesus of Nazareth
// Conforms to Scholarly Historical Standards, Biblical Textual Accounts, and Early Christian Traditions.

export const SOURCE_CONFIDENCE = {
  STRONGLY_ATTESTED: {
    id: "strongly_attested",
    label: { en: "Historically Attested", te: "చరిత్రపూర్వకంగా ధృవీకరించబడినది" },
    badge: "🟢 Historically Attested",
    badgeTe: "🟢 చారిత్రక సాక్ష్యం",
    color: "emerald",
    desc: {
      en: "Supported by independent historical, archaeological, inscriptional, or documentary evidence (e.g. Tacitus, Josephus, Pilate stone).",
      te: "స్వతంత్ర చారిత్రక, పురావస్తు లేదా శాసన ఆధారాల ద్వారా ధృవీకరించబడిన సమాచారం."
    }
  },
  BIBLICAL_ACCOUNT: {
    id: "biblical_account",
    label: { en: "Biblical Account", te: "లేఖన / బైబిల్ వృత్తాంతం" },
    badge: "🔵 Biblical Account",
    badgeTe: "🔵 బైబిల్ వృత్తాంతం",
    color: "blue",
    desc: {
      en: "Information explicitly documented in the canonical New Testament texts.",
      te: "క్రొత్త నిబంధన లేఖనాలలో స్పష్టంగా నమోదు చేయబడిన వివరాలు."
    }
  },
  SCHOLARLY_RECONSTRUCTION: {
    id: "scholarly_reconstruction",
    label: { en: "Scholarly Reconstruction", te: "విద్వాంసుల పునర్నిర్మాణం" },
    badge: "🟡 Scholarly Reconstruction",
    badgeTe: "🟡 విద్వాంసుల పరిశోధన",
    color: "amber",
    desc: {
      en: "Reasonable scholarly reconstruction based on historical-critical analysis and 1st-century Levantine context.",
      te: "మొదటి శతాబ్దపు సామాజిక-రాజకీయ పరిస్థితుల ఆధారంగా చారిత్రక విద్వాంసుల అంచనా."
    }
  },
  CHRISTIAN_TRADITION: {
    id: "christian_tradition",
    label: { en: "Christian Tradition", te: "క్రైస్తవ సంప్రదాయం" },
    badge: "🟠 Christian Tradition",
    badgeTe: "🟠 ప్రాచీన సంప్రదాయం",
    color: "orange",
    desc: {
      en: "Traditions developed in the early church centuries (e.g. Church Fathers, liturgical memory).",
      te: "ప్రారంభ శతాబ్దాల క్రైస్తవ సంఘ పితరులు మరియు ఆచారాలలో వృద్ధి చెందిన సంప్రదాయాలు."
    }
  },
  UNCERTAIN_DISPUTED: {
    id: "uncertain_disputed",
    label: { en: "Uncertain / Disputed", te: "అనిశ్చిత / చర్చనీయాంశం" },
    badge: "🔴 Uncertain / Disputed",
    badgeTe: "🔴 అనిశ్చితం / భిన్నాభిప్రాయాలు",
    color: "rose",
    desc: {
      en: "Details where historical evidence is insufficient or scholars hold conflicting views.",
      te: "చారిత్రక సాక్ష్యాలు పరిమితంగా ఉన్న లేదా పరిశోధకులలో ఏకాభిప్రాయం లేని అంశాలు."
    }
  }
};

// 1. Etymology and Titles of Jesus
export const JESUS_TITLES = [
  {
    term: "Jesus",
    original: "ישוע (Yeshua) / Ἰησοῦς (Iēsous)",
    language: "Hebrew / Aramaic & Koine Greek",
    meaning: {
      en: "Derived from Hebrew Yehoshua (Joshua), meaning 'Yahweh is salvation' or 'Yahweh saves'. A common Jewish name in 1st-century Judea.",
      te: "హీబ్రూ 'యెహోషువ' నుండి వచ్చినది; అర్థం 'యెహోవాయే రక్షణ'. మొదటి శతాబ్దపు యూదయలో ఇది చాలా సాధారణమైన మరియు పవిత్రమైన పేరు."
    },
    category: "Personal Name",
    categoryTe: "వ్యక్తిగత నామము",
    status: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    term: "Christ / Messiah",
    original: "Μεσσίας (Messias) / Χριστός (Christos) / מָשִׁיחַ (Mashiach)",
    language: "Greek & Hebrew",
    meaning: {
      en: "Title meaning 'The Anointed One'. In ancient Israel, kings, priests, and prophets were consecrated by anointing with olive oil. In the New Testament, it denotes Jesus as the promised deliverer.",
      te: "'అభిషేకించబడినవాడు' అని అర్థమిచ్చే బిరుదు. ప్రాచీన ఇశ్రాయేలులో రాజులు, యాజకులు తైలాభిషేకం పొందేవారు. క్రొత్త నిబంధనలో ఇది యేసును వాగ్దానం చేయబడిన రక్షకునిగా సూచిస్తుంది."
    },
    category: "Royal / Theological Title",
    categoryTe: "రాజరిక / దైవత్వ బిరుదు",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    term: "Nazarene / Jesus of Nazareth",
    original: "Ναζωραῖος (Nazōraios) / Ναζαρηνός (Nazarēnos)",
    language: "Aramaic / Greek",
    meaning: {
      en: "Designates Jesus' hometown in lower Galilee. Distinguishes Him from others named Yeshua. Also evokes prophetic associations with 'Netzer' (branch/sprout, Isaiah 11:1).",
      te: "యేసు పెరిగిన గలిలయలోని 'నజరేతు' గ్రామాన్ని సూచిస్తుంది. 'నెట్జర్' (చిగురు - యెషయా 11:1) ప్రవచన సంబంధాన్ని కూడా లేఖనాలలో గుర్తుచేస్తుంది."
    },
    category: "Geographic Designation",
    categoryTe: "ప్రాంతీయ గుర్తింపు",
    status: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    term: "Son of Man",
    original: "בַּר אֱנָשׁ (Bar Enash / Aramaic) / ὁ υἱὸς τοῦ ἀνθρώπου",
    language: "Aramaic & Greek",
    meaning: {
      en: "Jesus' most frequent self-designation in the Gospels. Reflects both true humanity and the heavenly apocalyptic figure receiving an everlasting kingdom in Daniel 7:13–14.",
      te: "సువార్తలలో యేసు తనను తాను అత్యధికంగా పిలుచుకున్న నామము. మానవత్వాన్ని మరియు దానియేలు 7:13-14 లోని పరలోక రాజ్య న్యాయాధిపతిని సూచిస్తుంది."
    },
    category: "Self-Designation",
    categoryTe: "స్వయం నామకరణం",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    term: "Son of God",
    original: "υἱὸς τοῦ θεοῦ (Huios tou Theou)",
    language: "Greek",
    meaning: {
      en: "Signifies unique intimacy with God the Father, divine authority, and eternal sonship (Psalm 2:7, Matthew 16:16, John 1:14).",
      te: "తండ్రియైన దేవునితో అద్వితీయ సంబంధాన్ని, దివ్య అధికారాన్ని మరియు దైవత్వాన్ని తెలియజేస్తుంది (కీర్తన 2:7, మత్తయి 16:16)."
    },
    category: "Theological Title",
    categoryTe: "దైవత్వ బిరుదు",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    term: "Lord",
    original: "מָרֵי (Mari / Aramaic) / Κύριος (Kyrios / Greek)",
    language: "Aramaic & Greek",
    meaning: {
      en: "Used both as respectful address ('Sir/Master') and in early Christian proclamation as equivalent to the divine covenant name YHWH translated Kyrios in the Septuagint.",
      te: "గౌరవప్రదమైన సంబోధనగా మరియు ఆదిమ క్రైస్తవ ప్రకటనలో దైవిక సార్వభౌమత్వ నామముగా (సెప్టువాజింట్‌లో ప్రభువు) ఉపయోగించబడింది."
    },
    category: "Sovereign Title",
    categoryTe: "ప్రభుత్వ / సర్వాధికార నామము",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    term: "Rabbi / Rabbouni",
    original: "רַבִּי (Rabbi) / רַבּוּנִי (Rabbouni)",
    language: "Hebrew & Aramaic",
    meaning: {
      en: "Literally 'my master' or 'my teacher'. The title by which disciples and ordinary Jewish crowds addressed Jesus in his ministry.",
      te: "'నా బోధకుడా' లేదా 'నా గురువా' అని అర్థం. శిష్యులు మరియు ప్రజలు యేసును బోధకునిగా గౌరవించిన నామము."
    },
    category: "Honorific Address",
    categoryTe: "బోధక సంబోధన",
    status: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  }
];

// 2. Complete 30-Chapter Chronological Journey
export const JESUS_CHRONOLOGY = [
  {
    chapter: 1,
    id: "historical-background-judea",
    period: "Late 1st Century BCE",
    periodTe: "క్రీ.పూ. 1వ శతాబ్దం చివర",
    dateRange: "c. 63 BCE – 4 BCE (Approximate / debated)",
    dateRangeTe: "సుమారు క్రీ.పూ. 63 – 4 (చారిత్రక అంచనా)",
    title: {
      en: "1. Historical Background of 1st-Century Judea & Galilee",
      te: "1. మొదటి శతాబ్దపు యూదయ మరియు గలిలయ చారిత్రక నేపథ్యం"
    },
    subtitle: {
      en: "Roman conquest, Herod the Great's client kingdom, and Jewish religious currents",
      te: "రోమన్ ఆధిపత్యం, హేరోదు మహారాజు పాలన మరియు యూదుల మత-రాజకీయ వాతావరణం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED,
    scriptureRefs: "Luke 1:5, Matthew 2:1, Josephus Antiquities 14-17",
    sources: ["Flavius Josephus (Antiquities of the Jews, Jewish War)", "Roman Historical Records", "Dead Sea Scrolls", "Luke 1:5"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Photorealistic cinematic historical reconstruction of 1st-century Jerusalem and Judean hill country at dawn, Roman outpost, stone architecture, natural morning light, documentary quality.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "In 63 BCE, Roman General Pompey conquered Jerusalem, ending Hasmonean Jewish autonomy. By 37 BCE, the Roman Senate appointed Herod the Great as 'King of the Jews', a client ruler known for massive architectural projects (including the expansion of the Second Temple) as well as ruthless political purges. Judean society was marked by heavy Roman taxation, Herodian surveillance, deep longing for Messianic redemption, and theological diversity across Pharisees, Sadducees, Essenes, and revolutionary movements.",
      te: "క్రీ.పూ. 63 లో రోమన్ సైన్యాధ్యక్షుడు పాంపే యెరూషలేమును స్వాధీనం చేసుకోవడంతో రోమన్ ఆధిపత్యం ప్రారంభమైంది. క్రీ.పూ. 37 లో రోమన్ సెనేట్ హేరోదు మహారాజును యూదులకు రాజగా నియమించింది. హేరోదు రెండవ దేవాలయ విస్తరణ వంటి అద్భుత నిర్మాణాలతో పాటు కఠిన పాలన సాగించాడు. అధిక రోమన్ పన్నుల భారం, మెస్సీయ రాకడకై ఎదురుచూపులు, పరిసయ్యులు, సద్దూకయ్యులు, ఎస్సీనులు మరియు విప్లవ గుంపుల విభజనతో యూదయ సమాజం ఉండేది."
    },
    historicalNotes: {
      en: "Archaeological excavations across Judea and Galilee (Sepphoris, Masada, Caesarea Maritima, Jerusalem) vividly confirm Herodian construction techniques and the strong presence of Roman civic administration.",
      te: "యూదయ, గలిలయ పురావస్తు త్రవ్వకాలు (సెఫోరిస్, మసాదా, కైసరయ, యెరూషలేము) హేరోదు నిర్మాణ శైలిని మరియు రోమన్ పరిపాలనను స్పష్టంగా ధృవీకరిస్తున్నాయి."
    }
  },
  {
    chapter: 2,
    id: "prophecies-genealogies",
    period: "Biblical Antiquity to 1st Century",
    periodTe: "పాత నిబంధన ప్రవచనాల నుండి 1వ శతాబ్దం",
    dateRange: "Biblical Tradition",
    dateRangeTe: "లేఖనాత్మక సంప్రదాయం",
    title: {
      en: "2. Prophecies and Genealogical Traditions",
      te: "2. మెస్సీయ ప్రవచనాలు మరియు వంశావళి సంప్రదాయాలు"
    },
    subtitle: {
      en: "The Davidic lineage, Abrahamic covenant, and comparison of Matthew 1 and Luke 3",
      te: "దావీదు సంతతి, అబ్రాహాము నిబంధన మరియు మత్తయి 1, లూకా 3 వంశావళుల తులనాత్మక వివరణ"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 1:1–17, Luke 3:23–38, Isaiah 7:14, Micah 5:2, 2 Samuel 7:12–16",
    sources: ["Gospel of Matthew 1", "Gospel of Luke 3", "Hebrew Bible / Septuagint Prophetic Corpus"],
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Ancient Hebrew parchment scroll of Isaiah open on a wooden table in warm candle light, authentic 1st-century Judean scribe environment.",
    imageType: "Historical Reconstruction",
    summary: {
      en: "The New Testament places Jesus firmly within the Hebrew Scriptures' covenant promises made to Abraham and David. Matthew 1 traces the royal legal lineage forward from Abraham through David and Solomon to Joseph. Luke 3 traces Jesus' ancestry backward from Joseph through Nathan (another son of David) all the way to Adam, emphasizing universal solidarity with humanity. Scholars note that ancient genealogies often served theological and covenantal functions rather than modern strict biometric archives.",
      te: "క్రొత్త నిబంధన యేసుక్రీస్తును అబ్రాహాము, దావీదులతో చేసిన దైవిక నిబంధనల నెరవేర్పుగా ప్రదర్శిస్తుంది. మత్తయి 1 లో అబ్రాహాము నుండి దావీదు, సొలొమోనుల ద్వారా యోసేపు వరకు రాజరిక వంశావళి రాయబడింది. లూకా 3 లో యోసేపు నుండి దావీదు కుమారుడైన నాతాను ద్వారా సమస్త మానవాళి తండ్రియైన ఆదాము వరకు వంశావళి చూపబడింది. ప్రాచీన కాలంలో వంశావళులు కేవలం పట్టికలు మాత్రమే కాక నిబంధనా ప్రాముఖ్యతను చాటేవిగా ఉండేవి."
    },
    historicalNotes: {
      en: "Differences between Matthew and Luke have been historically explained in various ways (e.g. legal royal line vs biological maternal line via Heli/Mary, or Levirate marriage). Historians note both traditions agree on Davidic lineage.",
      te: "మత్తయి మరియు లూకా వంశావళుల మధ్య వ్యత్యాసాలకు విద్వాంసులు వివిధ వివరణలు ఇస్తారు (రాజరిక న్యాయపరమైన క్రమం vs మరియ తండ్రి హేలీ ద్వారా వచ్చిన క్రమం, లేదా మరిది ధర్మ వివాహ పద్ధతి)."
    }
  },
  {
    chapter: 3,
    id: "annunciation-conception",
    period: "c. 6 – 4 BCE",
    periodTe: "సుమారు క్రీ.పూ. 6 – 4",
    dateRange: "Approximate / Gospel Text",
    dateRangeTe: "సుమారు / సువార్త ఆధారితం",
    title: {
      en: "3. The Annunciation to Mary & Angelic Visit to Joseph",
      te: "3. మరియకు మరియు యోసేపుకు దేవదూత దర్శనము (శుభవార్త ప్రకటన)"
    },
    subtitle: {
      en: "Nazareth of Galilee, the Virgin Mary, and the divine message",
      te: "గలిలయలోని నజరేతు గ్రామం, కన్యకయైన మరియ మరియు దైవిక సందేశం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Luke 1:26–38, Matthew 1:18–25",
    sources: ["Gospel of Luke (Annunciation to Mary)", "Gospel of Matthew (Angelic dream to Joseph)"],
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Photorealistic 1st-century Galilean modest stone house interior, young Jewish woman in authentic linen tunic, warm golden morning light streaming through doorway, serene and respectful documentary tone.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "In Luke's account, the angel Gabriel appears to Mary, a young Jewish woman betrothed to Joseph of the house of David in Nazareth, announcing that she would conceive by the Holy Spirit and bear the Son of the Most High. In Matthew's account, when Joseph learns of her pregnancy, an angel appears to him in a dream, confirming the divine origin of the child and directing him to name the son Yeshua ('for he will save his people from their sins').",
      te: "లూకా సువార్త ప్రకారం, గబ్రియేలు దూత నజరేతులోని దావీదు వంశస్థుడైన యోసేపుతో ప్రధానం చేయబడిన మరియకు ప్రత్యక్షమై, పరిశుద్ధాత్మ వలన గర్భం ధరించి సర్వోన్నతుని కుమారుని కంటావని ప్రకటించాడు. మత్తయి సువార్త ప్రకారం, యోసేపు ఆలోచించుచుండగా స్వప్నమందు దేవదూత ప్రత్యక్షమై, భయపడవద్దని, తన ప్రజలను వారి పాపముల నుండి రక్షించును గనుక ఆయనకు 'యేసు' అని పేరు పెట్టాలని ఆజ్ఞాపించాడు."
    },
    historicalNotes: {
      en: "Betrothal (*Erusin*) in 1st-century Judaism was legally binding. Dissolving a betrothal required a formal certificate of divorce (*Get*), explaining Joseph's initial quiet intention in Matthew 1:19.",
      te: "మొదటి శతాబ్దపు యూదుల ఆచారం ప్రకారం ప్రధానం (ఎరూసిన్) చట్టబద్ధమైన వివాహ బంధం లాంటిది. దానిని రద్దు చేయడానికి విడాకుల పత్రం అవసరమయ్యేది; అందుకే మత్తయి 1:19 లో యోసేపు రహస్యంగా విడిచిపెట్టాలని తలంచాడు."
    }
  },
  {
    chapter: 4,
    id: "birth-of-jesus",
    period: "c. 6 – 4 BCE (Scholarly Estimate)",
    periodTe: "సుమారు క్రీ.పూ. 6 – 4 (చారిత్రక అంచనా)",
    dateRange: "Exact day & month unknown historically",
    dateRangeTe: "ఖచ్చితమైన రోజు మరియు నెల చారిత్రకంగా తెలియదు",
    title: {
      en: "4. The Birth of Jesus in Bethlehem",
      te: "4. బెత్లెహేములో యేసుక్రీస్తు జననం"
    },
    subtitle: {
      en: "Journey from Nazareth, the manger, shepherds, and the visit of the Magi",
      te: "నజరేతు నుండి ప్రయాణం, పశువుల తొట్టి, గొఱ్ఱెల కాపరులు మరియు జ్ఞానుల రాకడ"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Luke 2:1–20, Matthew 2:1–12, Micah 5:2",
    sources: ["Gospel of Luke 2", "Gospel of Matthew 2"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Cinematic realistic 1st-century limestone dwelling/stable cave in Bethlehem hills, night sky with bright stars, modest swaddling clothes, simple oil lamp illumination, authentic Middle Eastern atmosphere.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Luke records that Caesar Augustus ordered a registration, prompting Joseph and pregnant Mary to travel south to Bethlehem, the ancestral city of David. There, Mary gave birth, wrapped her newborn in swaddling cloths, and placed him in an animal feeding trough (*phatnē* / manger) because there was no guest room (*katalyma*) available. Shepherds keeping watch in nearby fields received the angelic announcement. Matthew records the later arrival of Magi (wise men / astronomers) from the East following a star to offer gold, frankincense, and myrrh.",
      te: "లూకా సువార్త ప్రకారం అగస్టస్ కైసరు జనాభా లెక్కల ఆజ్ఞ వలన యోసేపు, మరియ గలిలయ నుండి దావీదు పట్టణమైన బెత్లెహేముకు వెళ్లారు. అక్కడ సత్రములో వారికి స్థలము లేనందున, ఆమె తన తొలిచూలు కుమారుని కని పొత్తిగుడ్డలతో చుట్టి పశువుల తొట్టిలో పరుండబెట్టెను. పొలములో కావలియున్న గొఱ్ఱెల కాపరులకు దేవదూతలు సువార్త ప్రకటించారు. మత్తయి సువార్త ప్రకారం తూర్పు దేశపు జ్ఞానులు నక్షత్రాన్ని చూచి వచ్చి బంగారం, సాంబ్రాణి, బోళములను కానుకలుగా సమర్పించారు."
    },
    historicalNotes: {
      en: "Historically, the exact year of Jesus' birth is placed between 6 and 4 BCE before the death of King Herod the Great in 4 BCE. The Greek word 'katalyma' (Luke 2:7) often designated a family upper guest room rather than a commercial roadside hotel.",
      te: "క్రీ.పూ. 4 లో హేరోదు మహారాజు మరణించడానికి పూర్వమే యేసు జననం జరిగిందని చరిత్రకారులు అంచనా వేస్తారు. గ్రీకు పదం 'కటలైమా' సాధారణంగా ఇంటి అతిథి గదిని సూచిస్తుంది."
    }
  },
  {
    chapter: 5,
    id: "childhood-infancy",
    period: "c. 4 BCE – 6 CE",
    periodTe: "సుమారు క్రీ.పూ. 4 – క్రీ.శ. 6",
    dateRange: "Biblical Narrative",
    dateRangeTe: "లేఖనాత్మక కాలము",
    title: {
      en: "5. Infancy, Circumcision, Temple Presentation & Flight to Egypt",
      te: "5. శైశవ దశ, సున్నతి, దేవాలయ సమర్పణ & ఐగుప్తు పారిపోవుట"
    },
    subtitle: {
      en: "Eighth-day circumcision, Simeon and Anna's blessings, and escape from Herod",
      te: "ఎనిమిదవ దినమున సున్నతి, షిమ్యోను-అన్నాల ప్రవచన దీవెనలు మరియు హేరోదు నుండి రక్షణ"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Luke 2:21–40, Matthew 2:13–23, Leviticus 12:8",
    sources: ["Gospel of Luke 2", "Gospel of Matthew 2"],
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Second Temple Court of Women, aged devout Jewish elder holding baby, limestone columns and incense haze, historical lighting.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "On the eighth day, the infant was circumcised and formally named Yeshua according to Jewish law. After Mary's purification period (40 days), the family presented Jesus at the Jerusalem Temple offering two turtledoves (the prescribed offering of the poor). The devout elders Simeon and the prophetess Anna recognized the child as God's salvation. In Matthew, warned of Herod's massacre of male infants in Bethlehem, Joseph fled with his family to Egypt until Herod's death, later resettling in Nazareth.",
      te: "ధర్మశాస్త్ర ప్రకారము ఎనిమిదవ దినమున సున్నతి చేసి 'యేసు' అని పేరు పెట్టారు. నలభై దినముల తర్వాత యెరూషలేము దేవాలయములో సమర్పించి పేదల అర్పణగా రెండు గువ్వలను అర్పించారు. వృద్ధుడైన షిమ్యోను మరియు అన్న ప్రవక్త్రి ఆయనను రక్షకునిగా స్తుతించారు. మత్తయి సువార్త ప్రకారం హేరోదు బెత్లెహేములోని పసిపిల్లలను చంపించగా, దూత హెచ్చరికతో యోసేపు కుటుంబాన్ని ఐగుప్తుకు తీసుకెళ్లి, హేరోదు మరణానంతరం నజరేతుకు తిరిగి వచ్చారు."
    },
    historicalNotes: {
      en: "The offering of two birds (Luke 2:24) reflects Leviticus 12:8 for families unable to afford a lamb, reflecting the modest economic status of Jesus' family.",
      te: "గొఱ్ఱెపిల్లను కొనుగోలు చేయలేని పేద కుటుంబాలు లేవీయకాండము 12:8 ప్రకారం రెండు పావురపు పిల్లలను సమర్పించేవి; ఇది యేసు కుటుంబపు సామాన్య స్థితిని సూచిస్తుంది."
    }
  },
  {
    chapter: 6,
    id: "temple-at-age-twelve",
    period: "c. 6 – 8 CE",
    periodTe: "సుమారు క్రీ.శ. 6 – 8",
    dateRange: "Luke 2:41–52",
    dateRangeTe: "లూకా 2:41–52 వృత్తాంతం",
    title: {
      en: "6. Jesus in the Jerusalem Temple at Age Twelve",
      te: "6. పన్నెండేండ్ల వయస్సులో యెరూషలేము దేవాలయములో యేసు"
    },
    subtitle: {
      en: "Passover pilgrimage, listening and asking questions among the teachers of the Law",
      te: "పస్కా పండుగ యాత్ర, దేవాలయములో పండితులతో లేఖన చర్చ మరియు జ్ఞాన వృద్ధి"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Luke 2:41–52",
    sources: ["Gospel of Luke 2:41–52 (Only canonical Gospel mentioning this event)"],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Jerusalem Temple colonnade/portico, 12-year-old Jewish boy in simple tunic sitting among bearded rabbis and Torah scholars with open scrolls, attentive expressions, documentary cinematic style.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Every year, Jesus' parents went to Jerusalem for the Feast of the Passover. When Jesus was twelve, after the feast concluded, his parents traveled a full day's journey before realizing he was not in the caravan. Returning to Jerusalem, after three days they found him in the Temple courts, sitting among the teachers, listening to them and asking questions. All who heard him were amazed at his understanding and answers. When Mary expressed their anguish, Jesus replied: 'Did you not know that I must be in my Father’s house?'",
      te: "ఆచార ప్రకారము పస్కా పండుగకు తల్లిదండ్రులతో కలిసి పన్నెండేండ్ల యేసు యెరూషలేము వెళ్లారు. పండుగ ముగిసిన పిమ్మట తిరిగి వెళ్తుండగా బాలుడైన యేసు దేవాలయములోనే ఉండిపోయెను. మూడు దినముల తర్వాత దేవాలయములో బోధకుల మధ్య కూర్చుండి, వారి మాటలను వింటూ, వారిని ప్రశ్నలడుగుతూ ఉండగా వారు కనుగొన్నారు. ఆయన వివేకమునకు, ప్రత్యుత్తరములకు అందరూ ఆశ్చర్యపడ్డారు. 'నేను నా తండ్రి కార్యములమీద ఉండవలెనని మీరెరుగరా?' అని సమాధానమిచ్చెను."
    },
    historicalNotes: {
      en: "Luke 2:52 summarizes Jesus' growth: 'And Jesus increased in wisdom and in stature and in favor with God and man.' No other canonical accounts exist for this period.",
      te: "లూకా 2:52 ఆయన ఎదుగుదలను సంక్షిప్తంగా తెలుపుతుంది: 'యేసు జ్ఞానమందును, వయస్సునందును, దేవుని దయయందును మనుష్యుల దయయందును వర్ధిల్లుచుండెను.' ఈ కాలానికి సంబంధించి బైబిల్లో మరే ఇతర వృత్తాంతం లేదు."
    }
  },
  {
    chapter: 7,
    id: "hidden-years-early-adulthood",
    period: "c. 8 – 27 CE",
    periodTe: "సుమారు క్రీ.శ. 8 – 27",
    dateRange: "c. 20 Years in Nazareth",
    dateRangeTe: "నజరేతులో సుమారు 20 సంవత్సరాలు",
    title: {
      en: "7. The Hidden Years & Life in 1st-Century Galilee",
      te: "7. అజ్ఞాత సంవత్సరాలు & గలిలయ గ్రామీణ జీవితం"
    },
    subtitle: {
      en: "Work as a craftsman (tekton), village family life, synagogue schooling, and language",
      te: "వడ్రంగి/శిల్పి (టెక్టాన్) పని, కుటుంబ బాధ్యతలు, సమాజమందిర లేఖన పఠనం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.SCHOLARLY_RECONSTRUCTION,
    scriptureRefs: "Mark 6:3, Matthew 13:55, Luke 4:16",
    sources: ["Gospel of Mark 6:3", "Archaeological surveys of Lower Galilee (Nazareth, Sepphoris)", "Mishnaic Jewish Cultural Records"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Galilean agricultural village workshop with wooden tools, stone masonry, rolling green hills of Lower Galilee in background, authentic Mediterranean lighting.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "For nearly two decades, Jesus lived in the small agrarian village of Nazareth (population estimated at a few hundred). He worked as a *tekton* (artisan/builder/carpenter working in wood and stone), learning the trade alongside Joseph. He attended the weekly synagogue, memorized Hebrew Scriptures, observed the Sabbath and Torah festivals, and spoke Galilean Aramaic while having conversational familiarity with Greek and liturgical Hebrew. Far-fetched later legends claiming Jesus traveled to India, Tibet, or Britain lack any historical evidence.",
      te: "సుమారు రెండు దశాబ్దాలు యేసు నజరేతు గ్రామంలో నివసించారు. ఆయన 'టెక్టాన్' (వడ్రంగి/భవన నిర్మాణ శిల్పి) గా పనిచేశారు. ప్రతి విశ్రాంతిదినమున సమాజమందిరానికి వెళ్లి హీబ్రూ లేఖనాలను చదవడం, ఆచారాలను పాటించడం చేశారు. ఆయన ప్రధానంగా గలిలయ అరామిక్ భాష మాట్లాడేవారు; వ్యాపారానికై గ్రీకు, లేఖనాలకై హీబ్రూ తెలిసేది. ఆయన భారతదేశం లేదా ఇతర ప్రాంతాలకు వెళ్లారనే తర్వాతి కథనాలకు ఎటువంటి చారిత్రక ఆధారాలు లేవు."
    },
    historicalNotes: {
      en: "The nearby royal city of Sepphoris (only 6 km from Nazareth) was being rebuilt by Herod Antipas during this era, providing abundant construction work for craftsmen of the region.",
      te: "నజరేతుకు 6 కిలోమీటర్ల దూరంలో ఉన్న సెఫోరిస్ నగరాన్ని హేరోదు అంతిపస్ పునర్నిర్మిస్తున్న సమయమిది; ఆ ప్రాంత కళాకారులకు ఇది మంచి పనిని అందించింది."
    }
  },
  {
    chapter: 8,
    id: "john-the-baptist",
    period: "c. 27 – 29 CE",
    periodTe: "సుమారు క్రీ.శ. 27 – 29",
    dateRange: "15th year of Emperor Tiberius (c. 28/29 CE)",
    dateRangeTe: "తిబెరియ కైసరు పాలనలో 15వ సంవత్సరం (క్రీ.శ. 28/29)",
    title: {
      en: "8. John the Baptist & the Wilderness Movement",
      te: "8. బాప్తిస్మమిచ్చు యోహాను & అరణ్య ప్రబోధ ఉద్యమం"
    },
    subtitle: {
      en: "Preaching repentance in the Judean wilderness and baptism for the remission of sins",
      te: "యూదయ అరణ్యములో మారుమనస్సు ప్రసంగం, పాపక్షమాపణ బాప్తిస్మము మరియు హేరోదుతో ఘర్షణ"
    },
    sourceConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED,
    scriptureRefs: "Luke 3:1–20, Matthew 3:1–12, Mark 1:1–8, John 1:19–34, Josephus Antiquities 18.5.2",
    sources: ["Gospels of Matthew, Mark, Luke, John", "Flavius Josephus (Antiquities 18.5.2 specifically documents John the Baptist's execution by Herod Antipas)"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Rugged Judean wilderness near Jordan River, prophetic figure with camel hair garment, crowds of 1st-century Judeans listening intently, dusty desert landscape, cinematic realism.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Born to the priest Zechariah and Elizabeth, John withdrew to the Judean desert as a prophetic ascetic figure dressed in camel's hair. He proclaimed a baptism of repentance in the Jordan River in preparation for the coming Reign of God, warning crowds and religious leaders not to rely merely on lineage. Jewish historian Flavius Josephus independently records John as a righteous man whose enormous public influence alarmed Tetrarch Herod Antipas, who later had John imprisoned at Machaerus fortress and executed.",
      te: "యాజకుడైన జెకర్యా, ఎలీసబెత్తుల కుమారుడైన యోహాను అరణ్యములో ఒంటె రోమముల వస్త్రము ధరించి దేవుని వాక్యమును ప్రకటించాడు. రాబోయే దేవుని రాజ్యము కొరకు మారుమనస్సు పొంది బాప్తిస్మము పొందాలని యొర్దాను నదిలో ప్రజలను పిలిచాడు. రోమన్-యూదు చరిత్రకారుడైన జోసెఫస్ కూడా యోహాను గొప్ప నీతిమంతుడని, ప్రజలలో ఆయనకున్న విశేష ఆదరణను చూచి హేరోదు అంతిపస్ ఆయనను బంధించి మఖేరస్ కోటలో శిరచ్ఛేదం చేయించాడని రాశాడు."
    },
    historicalNotes: {
      en: "Josephus confirms John's baptism and public acclaim in Antiquities 18.5.2, providing vital non-biblical corroboration of his historical existence and death.",
      te: "జోసెఫస్ తన 'యాంటిక్విటీస్' గ్రంథంలో యోహాను బాప్తిస్మమును, ప్రజలలో ఆయన ప్రభావమును మరియు మరణమును స్వతంత్రంగా ధృవీకరించాడు."
    }
  },
  {
    chapter: 9,
    id: "baptism-of-jesus",
    period: "c. 27 – 29 CE",
    periodTe: "సుమారు క్రీ.శ. 27 – 29",
    dateRange: "Beginning of Public Ministry",
    dateRangeTe: "బహిరంగ పరిచర్య ప్రారంభం",
    title: {
      en: "9. The Baptism of Jesus in the Jordan River",
      te: "9. యొర్దాను నదిలో యేసుక్రీస్తు బాప్తిస్మము"
    },
    subtitle: {
      en: "Fulfilling all righteousness, descent of the Holy Spirit, and the voice from heaven",
      te: "సమస్త నీతిని నెరవేర్చుట, పావురమువలె పరిశుద్ధాత్మ దిగివచ్చుట మరియు పరలోక స్వరము"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 3:13–17, Mark 1:9–11, Luke 3:21–22, John 1:29–34",
    sources: ["Gospel of Mark (earliest account)", "Gospel of Matthew", "Gospel of Luke", "Gospel of John (theological testimony)"],
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Jordan River waters surrounded by reeds, Jesus emerging from clear water, radiant heavenly light breaking through clouds, dove descending, cinematic sacred documentary lighting.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Jesus traveled from Galilee to the Jordan River to be baptized by John. When John hesitated, saying he needed to be baptized by Jesus, Jesus replied: 'Let it be so now; it is proper for us to do this to fulfill all righteousness.' As Jesus came up out of the water, the heavens opened, the Holy Spirit descended in the bodily form of a dove upon Him, and a voice from heaven declared: 'This is my beloved Son, in whom I am well pleased.' This event marked the divine public commissioning of Jesus' Messianic ministry.",
      te: "యేసు గలిలయ నుండి యొర్దాను నది వద్దకు వచ్చి యోహాను చేత బాప్తిస్మము పొందగోరెను. యోహాను అడ్డుచెప్పగా, 'ఇప్పటికి సెలవిమ్ము, సమస్త నీతిని నెరవేర్చుట మనకు తగియున్నది' అని యేసు సెలవిచ్చెను. బాప్తిస్మము పొంది నీళ్లలో నుండి పైకి రాగానే ఆకాశము తెరవబడెను; పరిశుద్ధాత్మ పావురమువలె దిగివచ్చెను. 'ఈయనే నా ప్రియకుమారుడు, ఈయనయందు నేను ఆనందించుచున్నాను' అని పరలోకము నుండి తండ్రి స్వరము పలికెను."
    },
    historicalNotes: {
      en: "Historians consider the baptism of Jesus one of the most securely attested historical facts about his life, using the historical 'criterion of embarrassment' (early Christians would not invent their leader submitting to a baptism of repentance by John).",
      te: "చరిత్రకారులు యేసు బాప్తిస్మమును అత్యంత ఖచ్చితమైన చారిత్రక సంఘటనగా భావిస్తారు, ఎందుకంటే ఆదిమ సంఘం తమ ప్రభువు యోహాను చేత బాప్తిస్మము పొందాడని అసత్యంగా సృష్టించే అవకాశం లేదు."
    }
  },
  {
    chapter: 10,
    id: "temptation-in-wilderness",
    period: "c. 28 CE",
    periodTe: "సుమారు క్రీ.శ. 28",
    dateRange: "40 Days in the Judean Desert",
    dateRangeTe: "యూదయ అరణ్యములో 40 దినములు",
    title: {
      en: "10. The Temptation in the Wilderness",
      te: "10. యూదయ అరణ్యములో శోధనలు & విజయం"
    },
    subtitle: {
      en: "Fasting 40 days, spiritual confrontation, and triumph using the Word of God",
      te: "40 దినముల ఉపవాసం, అపవాది శోధనలు మరియు దేవుని వాక్య ఖడ్గముతో విజయం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 4:1–11, Luke 4:1–13, Mark 1:12–13, Deuteronomy 8:3; 6:16; 6:13",
    sources: ["Gospel of Matthew 4", "Gospel of Luke 4", "Gospel of Mark 1"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Vast rocky cliffs of the Judean wilderness under stark desert sun, solitary contemplative figure of Jesus in dusty robe praying on limestone ridge, majestic and austere atmosphere.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Immediately following His baptism, the Spirit led Jesus into the rugged Judean wilderness, where He fasted for forty days and nights. The devil confronted Him with three distinct temptations: turning stones into bread to satisfy physical hunger, casting Himself from the Temple pinnacle to demand miraculous protection, and receiving all earthly kingdoms in exchange for worshipping the adversary. Jesus repelled each assault by quoting from the Book of Deuteronomy: 'Man shall not live by bread alone...', 'Do not put the Lord your God to the test', and 'Worship the Lord your God and serve him only.'",
      te: "బాప్తిస్మము పొందిన వెంటనే యేసు ఆత్మచేత యూదయ అరణ్యమునకు నడిపించబడి నలువది దినములు రాత్రింబగళ్ళు ఉపవాసముండెను. అపవాది ఆయనను మూడు విధాలుగా శోధించెను: రాళ్లను రొట్టెలుగా మార్చుకొనుట, దేవాలయ శిఖరము నుండి దూకుట, లోక రాజ్యముల కొరకు సాగిలపడుట. యేసు ద్వితీయోపదేశకాండములోని వాక్యములతో ('మనుష్యుడు రొట్టెవలన మాత్రమే కాదు...', 'నీ దేవుడైన ప్రభువును శోధింపవలదు', 'ప్రభువైన నీ దేవునికే మ్రొక్కి ఆయనను మాత్రమే సేవింపవలెను') ప్రతి శోధనను జయించెను."
    },
    historicalNotes: {
      en: "The forty days of fasting deeply mirror the forty years Israel spent in the wilderness and Moses' forty days on Mount Sinai (Exodus 34:28).",
      te: "ఈ 40 దినముల ఉపవాసం ఇశ్రాయేలీయుల 40 సంవత్సరాల అరణ్య ప్రయాణాన్ని మరియు సీనాయి కొండపై మోషే 40 దినముల ఉపవాసాన్ని (నిర్గమ 34:28) గుర్తుచేస్తుంది."
    }
  },
  {
    chapter: 11,
    id: "beginning-of-public-ministry",
    period: "c. 28 – 29 CE",
    periodTe: "సుమారు క్రీ.శ. 28 – 29",
    dateRange: "Galilee, Nazareth Synagogue & Capernaum",
    dateRangeTe: "గలిలయ, నజరేతు సమాజమందిరం & కపెర్నహూము",
    title: {
      en: "11. The Beginning of Public Ministry in Galilee",
      te: "11. గలిలయలో బహిరంగ పరిచర్య ప్రారంభం"
    },
    subtitle: {
      en: "The Nazareth manifesto (Isaiah 61), Capernaum as ministry base, and the Kingdom proclamation",
      te: "నజరేతు సమాజమందిరంలో యెషయా 61 లేఖన పఠనం, కపెర్నహూము ప్రధాన కేంద్రంగా పరిచర్య"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Luke 4:14–30, Matthew 4:12–17, Mark 1:14–15, Isaiah 61:1–2",
    sources: ["Gospel of Luke 4", "Gospel of Matthew 4", "Gospel of Mark 1"],
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Galilean limestone synagogue interior, Jesus standing with unrolled Isaiah parchment scroll reading to seated elders in prayer shawls, warm Mediterranean sunlight.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Returning in the power of the Spirit to Galilee, Jesus began teaching in synagogues. In Nazareth, He unrolled the scroll of Isaiah and read: 'The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor... to proclaim freedom for the prisoners and recovery of sight for the blind...' Declaring 'Today this scripture is fulfilled in your hearing,' He faced rejection from His hometown. He then established Capernaum on the northwestern shore of the Sea of Galilee as His operational center, declaring: 'Repent, for the kingdom of heaven is at hand.'",
      te: "ఆత్మ బలముతో యేసు గలిలయకు తిరిగి వచ్చి సమాజమందిరములలో బోధించసాగెను. నజరేతు సమాజమందిరములో యెషయా గ్రంథపు చుట్టను విప్పి 'ప్రభువు ఆత్మ నామీద ఉన్నది, బీదలకు సువార్త ప్రకటించుటకు నన్ను అభిషేకించెను...' అను భాగాన్ని చదివి 'నేడు ఈ లేఖనము మీ వినికిడిలో నెరవేరినది' అని ప్రకటించారు. స్వగ్రామస్థులు ఆశ్చర్యపడి ఆయనను త్రోసిపుచ్చగా, ఆయన గలిలయ సముద్ర తీరమున ఉన్న కపెర్నహూమును తన పరిచర్య కేంద్రముగా చేసుకుని 'మారుమనస్సు పొందుడి, పరలోక రాజ్యము సమీపించియున్నది' అని ప్రకటించెను."
    },
    historicalNotes: {
      en: "Excavations at Capernaum have uncovered 1st-century basalt residential foundations, including the traditional House of Peter beneath the 5th-century octagonal Byzantine church.",
      te: "కపెర్నహూము పురావస్తు త్రవ్వకాలలో 1వ శతాబ్దపు రాతి గృహాల పునాదులు మరియు పేతురు ఇంటిగా భావించే చారిత్రక అవశేషాలు లభ్యమయ్యాయి."
    }
  },
  {
    chapter: 12,
    id: "calling-of-the-twelve",
    period: "c. 28 – 29 CE",
    periodTe: "సుమారు క్రీ.శ. 28 – 29",
    dateRange: "Sea of Galilee Shoreline",
    dateRangeTe: "గలలీ సముద్ర తీరం",
    title: {
      en: "12. The Calling of the Twelve Apostles & Early Disciples",
      te: "12. పన్నెండుమంది అపొస్తలుల మరియు శిష్యుల పిలుపు"
    },
    subtitle: {
      en: "Fishermen, tax collectors, and zealots called to be fishers of people",
      te: "జాలరులు, సుంకరులు మరియు విప్లవకారులను మనుష్యులను పట్టు జాలరులుగా ఎన్నుకొనుట"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 4:18–22; 10:1–4, Mark 3:13–19, Luke 6:12–16, John 1:35–51",
    sources: ["Gospel of Mark 3", "Gospel of Matthew 10", "Gospel of Luke 6", "Gospel of John 1"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Morning on the Sea of Galilee, 1st-century wooden fishing boat near shore, fishermen mending hemp nets, Jesus calling to Peter and Andrew, natural realistic morning glow.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Along the Sea of Galilee, Jesus called working fishermen Simon (Peter), Andrew, James, and John son of Zebedee, saying: 'Follow me, and I will make you fishers of men.' He later called Matthew (Levi) from his tax collection booth in Capernaum. After a night in prayer on a mountainside, Jesus formally selected twelve apostles to accompany Him and be sent out with authority to preach and heal: Peter, Andrew, James, John, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot, and Judas Iscariot.",
      te: "గలలీ సముద్ర తీరాన చేపలు పట్టుకునే పేతురు, అంద్రెయ, యాకోబు, యోహానులను 'నా వెంబడి రండి, నేను మిమ్మును మనుష్యులను పట్టు జాలరులనుగా చేతును' అని పిలువగా వారు వలలను విడిచి అనుసరించారు. తరువాత కపెర్నహూములో సుంకం వసూలు చేస్తున్న మత్తయిని పిలిచారు. ఒక రాత్రి కొండపై ప్రార్థించి పన్నెండుమంది అపొస్తలులను నియమించారు: పేతురు, అంద్రెయ, యాకోబు, యోహాను, ఫిలిప్పు, బర్తొలొమయి, మత్తయి, తోమా, అల్ఫయి కుమారుడైన యాకోబు, తద్దయి, సీమోను జెలోతే, యూదా ఇస్కరియోతు."
    },
    historicalNotes: {
      en: "The number 12 intentionally symbolized the restoration and fulfillment of the twelve tribes of Israel in Jewish prophetic expectation.",
      te: "పన్నెండుమంది సంఖ్య ఇశ్రాయేలు పన్నెండు గోత్రాల పునరుద్ధరణను మరియు లేఖన నెరవేర్పును సూచిస్తుంది."
    }
  },
  {
    chapter: 13,
    id: "major-teachings-sermon-on-mount",
    period: "c. 28 – 30 CE",
    periodTe: "సుమారు క్రీ.శ. 28 – 30",
    dateRange: "Galilean Hills (Mount of Beatitudes)",
    dateRangeTe: "గలలీ కొండ ప్రాంతం (ధన్యతల పర్వతం)",
    title: {
      en: "13. Major Teachings: The Sermon on the Mount & Kingdom Ethics",
      te: "13. ముఖ్య బోధనలు: కొండమీది ప్రసంగము & పరలోక రాజ్య నీతి"
    },
    subtitle: {
      en: "The Beatitudes, salt and light, love for enemies, the Lord's Prayer, and the Golden Rule",
      te: "ధన్యతలు, ఉప్పు-వెలుగు, శత్రు ప్రేమ, పరలోక ప్రార్థన మరియు సువర్ణ నియమం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 5–7, Luke 6:20–49",
    sources: ["Gospel of Matthew 5–7", "Gospel of Luke 6 (Sermon on the Plain)"],
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Gentle green grassy hillside overlooking the sparkling Sea of Galilee, Jesus seated teaching a diverse crowd of 1st-century Galilean men, women, and children, cinematic warm lighting.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "In the Sermon on the Mount (Matthew 5–7), Jesus presented the constitutional heart of the Kingdom of God. Opening with the eight Beatitudes ('Blessed are the poor in spirit, for theirs is the kingdom of heaven...'), He redefined greatness. He instructed disciples to be the 'salt of the earth' and 'light of the world,' deepened Torah ethics beyond external action to internal motive (anger equates to murder, lust to adultery), commanded love of enemies, gave the Model Prayer ('Our Father in heaven...'), warned against storing treasures on earth or being anxious about food and clothing, and established the Golden Rule: 'Do to others what you would have them do to you.'",
      te: "కొండమీది ప్రసంగములో (మత్తయి 5-7) యేసు పరలోక రాజ్య సూత్రాలను బోధించారు. 'ఆత్మవిషయమై దీనులైనవారు ధన్యులు, పరలోకరాజ్యము వారిది...' అను ఎనిమిది ధన్యతలతో ప్రారంభించి, శిష్యులను లోకానికి ఉప్పుగా, వెలుగుగా ఉండమన్నారు. ధర్మశాస్త్ర భావాన్ని కేవలం బాహ్య ఆచరణకే కాక హృదయ ఆలోచనలకు వర్తింపజేశారు. శత్రువులను ప్రేమించమని, పరలోక ప్రార్థనను ('పరలోకమందున్న మా తండ్రీ...'), భూమిపై ధనము కూర్చుకొనవద్దని, దేవుని రాజ్యమును నీతిని మొదట వెదకమని, 'మనుష్యులు మీకు ఏమి చేయవలెనని మీరు కోరుదురో అలాగే మీరును వారికి చేయుడి' అను సువర్ణ నియమాన్ని ఉపదేశించారు."
    },
    historicalNotes: {
      en: "Jesus taught with personal authority ('You have heard that it was said... but I say to you'), contrasting with standard rabbinic practice of citing earlier authoritative sages.",
      te: "సాధారణ రబ్బీలు పూర్వ పండితుల పేర్లను ఉటంకించి బోధించగా, యేసు 'పూర్వీకులతో చెప్పబడిన మాట మీరు విన్నారు గదా, అయితే నేను మీతో చెప్పునదేమనగా...' అని స్వయం అధికారముతో బోధించారు."
    }
  },
  {
    chapter: 14,
    id: "parables-of-jesus",
    period: "c. 28 – 30 CE",
    periodTe: "సుమారు క్రీ.శ. 28 – 30",
    dateRange: "Throughout Galilee and Judea",
    dateRangeTe: "గలలీ మరియు యూదయ అంతటా",
    title: {
      en: "14. Parables of Jesus: Stories of the Kingdom",
      te: "14. యేసుక్రీస్తు ఉపమానములు: పరలోక రాజ్య సత్యాలు"
    },
    subtitle: {
      en: "The Good Samaritan, Prodigal Son, Sower, Mustard Seed, Lost Sheep, and Talents",
      te: "మంచి సమరయనుడు, తప్పిపోయిన కుమారుడు, విత్తువాని ఉపమానం, ఆవగింజ, తప్పిపోయిన గొఱ్ఱె"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Luke 10:25–37; 15:1–32, Matthew 13:1–52; 25:14–30, Mark 4:1–34",
    sources: ["Synoptic Gospels (Matthew, Mark, Luke)", "Cultural agrarian context of 1st-century Judea"],
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Galilean wheat field with path, rocky ground, and thorns; a farmer in simple tunic casting seeds by hand under warm golden sun, storytelling imagery.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Jesus used parables (*meshalim* in Hebrew/Aramaic)—everyday agricultural, domestic, and social stories with profound spiritual reversals. In the Parable of the Good Samaritan (Luke 10), a despised outsider demonstrates genuine neighborly love when religious leaders pass by. In the Prodigal Son (Luke 15), a father's extravagant forgiveness welcomes home a destitute rebel, confronting the self-righteous elder brother. In the Sower (Matthew 13), four types of soil represent varying human responses to God's Word. Other major parables include the Mustard Seed, the Lost Sheep, the Talents, the Pearl of Great Price, and the Rich Fool.",
      te: "యేసు రోజువారీ వ్యవసాయ, కుటుంబ, సామాజిక జీవిత దృష్టాంతాలతో 'ఉపమానాల' ద్వారా గంభీరమైన దైవ సత్యాలను బోధించారు. మంచి సమరయనుని ఉపమానములో (లూకా 10) యూదులచే అసహ్యించుకోబడిన సమరయనుడు పొరుగువాని ప్రేమను ఎలా చూపాడో వివరించారు. తప్పిపోయిన కుమారుని ఉపమానములో (లూకా 15) తండ్రి యొక్క అపరిమిత క్షమాగుణాన్ని ప్రత్యక్షపరిచారు. విత్తువాని ఉపమానములో (మత్తయి 13) నలుగురు రకాల హృదయ నేలలను వివరించారు."
    },
    historicalNotes: {
      en: "Parables were a recognized Jewish pedagogical genre, but Jesus' parables uniquely featured startling plot twists that challenged conventional socio-religious boundaries.",
      te: "యూదా బోధనలలో ఉపమానాలు సర్వసాధారణమే అయినప్పటికీ, యేసు చెప్పిన ఉపమానాలలో సాంప్రదాయ సామాజిక సరిహద్దులను సవాలు చేసే ఆశ్చర్యకరమైన మలుపులు ఉండేవి."
    }
  },
  {
    chapter: 15,
    id: "miracles-and-healings",
    period: "c. 28 – 30 CE",
    periodTe: "సుమారు క్రీ.శ. 28 – 30",
    dateRange: "Galilee, Decapolis, Samaria, Judea",
    dateRangeTe: "గలలీ, దెకపొలి, సమరయ, యూదయ",
    title: {
      en: "15. Miracles: Healings, Nature Signs & Raising the Dead",
      te: "15. అద్భుతాలు: రోగ స్వస్థతలు, ప్రకృతి శక్తులపై అధికారం & పునరుత్థానాలు"
    },
    subtitle: {
      en: "Cleansing lepers, calming the storm, feeding 5000, and raising Lazarus of Bethany",
      te: "కుష్ఠరోగుల శుద్ధీకరణ, సముద్ర తుఫాను నిమ్మళించుట, ఐదువేలమందికి ఆహారం మరియు లాజరు పునరుత్థానం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Mark 4:35–41; 5:1–43, Matthew 8–9; 14:13–21, John 2:1–11; 9:1–41; 11:1–44",
    sources: ["Gospels of Matthew, Mark, Luke, John", "Gospel Miracles Corpus"],
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Sea of Galilee during a storm, waves battering a 1st-century wooden fishing vessel, Jesus with hand outstretched calming the wind and waves, dramatic sky and cinematic light.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "The Gospels record over 35 distinct miracles performed by Jesus, classified into three categories: (1) Healings and Exorcisms: opening the eyes of the blind (Bartimaeus), restoring paralyzed limbs, cleansing ten lepers, healing the woman with the issue of blood, and casting out demons; (2) Nature Miracles: turning water into wine at Cana, calming the tempest on the Sea of Galilee, walking on water, and multiplying five loaves and two fish to feed 5,000 men; (3) Raising the Dead: Jairus' daughter (Mark 5), the son of the widow of Nain (Luke 7), and Lazarus of Bethany after four days in the tomb (John 11). In the Gospel theology, miracles are 'signs' (*sēmeia*) inaugurating God's healing reign.",
      te: "సువార్తలలో యేసు చేసిన 35 కంటే ఎక్కువ అద్భుతాలు నమోదు చేయబడ్డాయి: (1) స్వస్థతలు: గ్రుడ్డివారి కన్నులు తెరచుట, పక్షవాత రోగిని లేపుట, కుష్ఠరోగులను శుద్ధులను చేయుట, రక్తస్రావ రోగ స్త్రీని బాగుచేయుట, దయ్యములను వెళ్లగొట్టుట; (2) ప్రకృతి అద్భుతాలు: కానాలో నీటిని ద్రాక్షారసముగా మార్చుట, గలిలయ సముద్ర తుఫానును నిమ్మళింపజేయుట, నీటిపై నడుచుట, 5 రొట్టెలు 2 చేపలతో 5000 మందికి భోజనం పెట్టుట; (3) మృతుల పునరుత్థానం: యాయీరు కుమార్తె, నాయీను విధవరాలి కుమారుడు, సమాధిలో నాలుగు దినములున్న బేతనియ లాజరును లేపుట. ఇవన్నీ దేవుని రాజ్య రాకడకు సూచనలుగా ఉన్నాయి."
    },
    historicalNotes: {
      en: "Even non-Christian ancient sources like Flavius Josephus (Antiquities 18.3.3) and the Babylonian Talmud (Sanhedrin 43a) acknowledge that Jesus was known as a performer of astonishing deeds / 'sorcery', confirming his contemporary reputation as a healer and wonder-worker.",
      te: "క్రైస్తవేతర ప్రాచీన ఆధారాలైన జోసెఫస్ (యాంటిక్విటీస్ 18.3.3) మరియు యూదుల తాల్మూద్ కూడా యేసు ఆశ్చర్యకార్యాలు చేసిన వ్యక్తిగా ప్రసిద్ధి చెందాడని అంగీకరిస్తాయి."
    }
  },
  {
    chapter: 16,
    id: "journeys-and-geography",
    period: "c. 28 – 30 CE",
    periodTe: "సుమారు క్రీ.శ. 28 – 30",
    dateRange: "Galilee, Phoenicia (Tyre & Sidon), Decapolis, Perea, Samaria, Judea",
    dateRangeTe: "గలిలయ, ఫేనీకే (తూరు, సీదోను), దెకపొలి, సమరయ, యూదయ",
    title: {
      en: "16. Journeys & Important Locations of Ministry",
      te: "16. పరిచర్య ప్రయాణాలు మరియు ముఖ్య భౌగోళిక ప్రాంతాలు"
    },
    subtitle: {
      en: "From the northern borders of Caesarea Philippi to Jacob's Well in Sychar of Samaria",
      te: "ఉత్తరాన కైసరయ ఫిలిప్పి నుండి సమరయలోని సుఖారు యాకోబు బావి వరకు"
    },
    sourceConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED,
    scriptureRefs: "Matthew 16:13–20, John 4:1–42, Mark 7:24–37",
    sources: ["Gospel Geographies", "Archaeology of 1st-Century Roman Palestine", "Eusebius Onomasticon"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Ancient Jacob's Well near Mount Gerizim in Samaria, limestone masonry, Jesus seated talking with a Samaritan woman holding a water jar, midday Mediterranean light.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Jesus traveled extensively on foot across 1st-century Palestine. Key journeys included: (1) Samaria: conversing with the Samaritan woman at Jacob's Well near Mount Gerizim (John 4), breaking ethnic and gender taboos; (2) Caesarea Philippi: in the extreme north near Mount Hermon, Peter confessed 'You are the Christ, the Son of the living God' (Matthew 16); (3) Gentile regions of Tyre and Sidon (Phoenicia) and the Decapolis (Ten Greek Cities east of the Jordan), demonstrating the universal reach of His mission; (4) Pilgrimage journeys south through Jericho to Jerusalem for Passover, Sukkot (Tabernacles), and Hanukkah (Dedication).",
      te: "యేసు ఆనాటి పాలస్తీనా ప్రాంతమంతటా కాలినడకన పర్యటించారు: (1) సమరయ: గెరిజీము పర్వత సమీపంలోని సుఖారులో యాకోబు బావి యొద్ద సమరయ స్త్రీతో మాట్లాడి జాతి, లింగ వివక్షలను అధిగమించారు (యోహాను 4); (2) కైసరయ ఫిలిప్పి: హెర్మోను కొండ దిగువన పేతురు 'నీవు సజీవుడైన దేవుని కుమారుడవైన క్రీస్తువు' అని ఒప్పుకున్నాడు (మత్తయి 16); (3) అన్యుల ప్రాంతాలైన తూరు, సీదోను మరియు దెకపొలి నగరాలలో పర్యటనలు; (4) పస్కా, పర్ణశాలల పండుగలకై యెరికో మీదుగా యెరూషలేము యాత్రలు."
    },
    historicalNotes: {
      en: "Travel between Galilee and Judea typically took 3 to 4 days on foot along the Jordan Valley route or through the central Samarian highlands.",
      te: "గలిలయ నుండి యెరూషలేముకు కాలినడకన ప్రయాణించడానికి యొర్దాను లోయ మార్గం లేదా సమరయ కొండల మీదుగా 3 నుండి 4 రోజులు పట్టేది."
    }
  },
  {
    chapter: 17,
    id: "opposition-and-controversies",
    period: "c. 29 – 30 CE",
    periodTe: "సుమారు క్రీ.శ. 29 – 30",
    dateRange: "Galilean & Jerusalem Synagogues",
    dateRangeTe: "గలిలయ మరియు యెరూషలేము సమాజమందిరాలు",
    title: {
      en: "17. Opposition & Controversies with Religious Authorities",
      te: "17. మత పెద్దలతో విభేదాలు, విమర్శలు మరియు వివాదాలు"
    },
    subtitle: {
      en: "Sabbath healings, ritual purity, association with tax collectors, and authority disputes",
      te: "విశ్రాంతిదిన స్వస్థతలు, ఆచార శుద్ధీకరణ, సుంకరులు-పాపులతో సహవాసం మరియు అధికార ప్రశ్నలు"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Mark 2:1–3:6; 7:1–23, Matthew 23:1–39, John 5:1–18; 8:12–59",
    sources: ["Synoptic Gospels", "Gospel of John", "1st-century Halakhic debates (Mishnah Tractates Shabbat, Sanhedrin)"],
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century limestone synagogue courtyard, Pharisees in fringed robes debating intensely with Jesus, expressive facial details, historical realism.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "As Jesus' popularity surged, tensions with religious factions intensified around specific issues: (1) Sabbath Observance: Jesus healed the withered hand and the pool of Bethesda invalid on the Sabbath, asserting 'The Sabbath was made for man, not man for the Sabbath'; (2) Association with Outcasts: He ate with tax collectors and 'sinners,' declaring He came not to call the righteous but sinners to repentance; (3) Authority to Forgive Sins: forgiving the paralytic lowered through the roof provoked blasphemy accusations; (4) Temple & Traditions: critiquing human traditions that nullified God's commandment. In Matthew 23, Jesus delivered seven woes against hypocrisy while weeping over Jerusalem.",
      te: "యేసు పరిచర్య ప్రాచుర్యం పొందుతున్న కొద్దీ మత పెద్దలతో విభేదాలు పెరిగాయి: (1) విశ్రాంతిదిన ఆచరణ: విశ్రాంతిదినమున ఎండిన చెయ్యిగలవానిని, బేతెస్ద కోనేటి వద్ద రోగిని స్వస్థపరచి 'విశ్రాంతిదినము మనుష్యుల కొరకే నియమింపబడెను గాని మనుష్యుడు విశ్రాంతిదినము కొరకు నియమింపబడలేదు' అని ప్రకటించారు; (2) పాపులతో సహవాసం: సుంకరుల ఇండ్లలో భోజనం చేసి 'నీతిమంతులను కాదు గాని పాపులను పిలువవచ్చితిని' అన్నారు; (3) పాపక్షమాపణ అధికారం: పక్షవాత రోగికి పాపములు క్షమించినప్పుడు దైవదూషణగా భావించారు; (4) మత్తయి 23 లో కపట భక్తికి వ్యతిరేకంగా మాట్లాడి యెరూషలేము కొరకు విలపించారు."
    },
    historicalNotes: {
      en: "Scholars emphasize that these debates reflected internal 1st-century Jewish intra-religious discussions on Torah interpretation, not hostility toward Judaism itself (Jesus and his followers were thoroughly Jewish).",
      te: "ఈ వివాదాలు 1వ శతాబ్దపు యూదా సమాజంలో తోరాహ్ ధర్మశాస్త్ర వివరణలపై జరిగిన అంతర్గత చర్చలే తప్ప, యూదా మతానికి వ్యతిరేకమైనవి కావు (యేసు మరియు శిష్యులందరూ యూదులే)."
    }
  },
  {
    chapter: 18,
    id: "final-journey-to-jerusalem",
    period: "Spring, c. 30 or 33 CE",
    periodTe: "వసంత కాలం, సుమారు క్రీ.శ. 30 లేదా 33",
    dateRange: "Passover Season (Nisan)",
    dateRangeTe: "పస్కా పండుగ సమయం (నీసాను మాసం)",
    title: {
      en: "18. The Final Journey & Triumphal Entry into Jerusalem",
      te: "18. యెరూషలేమునకు తుది యాత్ర & మట్టల ఆదివారం జయోత్సాహ ప్రవేశం"
    },
    subtitle: {
      en: "Riding a donkey colt from the Mount of Olives, weeping over Jerusalem, and crowds shouting Hosanna",
      te: "ఒలీవల కొండ నుండి గాడిద పిల్లపై ప్రవేశం, యెరూషలేమును చూచి కన్నీరు మరియు హోసన్నా జయధ్వనులు"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 21:1–11, Mark 11:1–11, Luke 19:28–44, John 12:12–19, Zechariah 9:9",
    sources: ["All Four Canonical Gospels", "Zechariah 9:9 prophecy"],
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Panoramic view of 1st-century Jerusalem with Herod's magnificent white-and-gold Second Temple, Jesus on a young donkey descending the Mount of Olives, crowds spreading palm branches and cloaks, golden morning sun.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Knowing the fate awaiting Him, Jesus resolutely set His face toward Jerusalem. Approaching the city from Bethphage and Bethany on the Mount of Olives, He rode a young donkey colt in fulfillment of Zechariah 9:9: 'Behold, your King comes to you, righteous and victorious, lowly and riding on a donkey.' Great pilgrim crowds laid their cloaks and palm branches on the road, shouting: 'Hosanna! Blessed is he who comes in the name of the Lord! Blessed is the King of Israel!' As Jesus drew near and saw the city, He wept over it, foreseeing the Roman siege and destruction that would occur in 70 CE.",
      te: "రాబోయే శ్రమలను ఎరిగియున్నప్పటికీ యేసు దృఢసంకల్పముతో యెరూషలేమునకు ప్రయాణమయ్యారు. ఒలీవల కొండ సమీపంలోని బేత్పగే, బేతనియల నుండి జెకర్యా 9:9 ప్రవచన నెరవేర్పుగా గాడిద పిల్లపై ప్రవేశించారు. పస్కా యాత్రికులు తమ వస్త్రములను, ఖర్జూరపు మట్టలను మార్గములో పరిచి 'దావీదు కుమారునికి హోసన్నా! ప్రభువు పేరట వచ్చువాడు స్తుతింపబడును గాక!' అని జయధ్వనులు చేశారు. నగర సమీపానికి వచ్చినప్పుడు యేసు దాని రాబోయే వినాశనాన్ని (క్రీ.శ. 70 రోమన్ ముట్టడి) చూచి కన్నీరు కార్చారు."
    },
    historicalNotes: {
      en: "Passover pilgrim influx swelled Jerusalem's population from ~30,000 to over 200,000, creating high Roman security alerts under Governor Pontius Pilate.",
      te: "పస్కా పండుగ సమయంలో యెరూషలేము జనాభా సాధారణ 30,000 నుండి 2 లక్షల పైచిలుకు పెరిగేది; ఇది రోమన్ గవర్నర్ పొంతి పిలాతు సైనిక నిఘాను అత్యంత అప్రమత్తం చేసేది."
    }
  },
  {
    chapter: 19,
    id: "cleansing-of-the-temple",
    period: "Passover Week, c. 30 or 33 CE",
    periodTe: "పస్కా వారము, సుమారు క్రీ.శ. 30 లేదా 33",
    dateRange: "Herod's Temple Mount",
    dateRangeTe: "హేరోదు దేవాలయ ప్రాంగణం",
    title: {
      en: "19. The Cleansing of the Temple & Final Debates",
      te: "19. దేవాలయ శుద్ధీకరణ & ప్రధాన యాజకులతో చివరి చర్చలు"
    },
    subtitle: {
      en: "Overturning the moneychangers' tables in the Court of the Gentiles, and the Olivet Discourse",
      te: "అన్యజనుల ప్రాంగణంలో రూకలు మార్చువారి బల్లలను పడద్రోయుట మరియు ఒలీవల కొండ ప్రవచనం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Mark 11:15–19, Matthew 21:12–17; 24–25, Luke 19:45–48, John 2:13–22, Isaiah 56:7, Jeremiah 7:11",
    sources: ["Gospels of Matthew, Mark, Luke, John", "Temple Mount Archaeological Excavations"],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Magnificent Roman Corinthian colosseum-scale stone colonnade of the Second Temple Court of the Gentiles, overturned wooden tables with scattered bronze coins, doves flying, intense cinematic confrontation.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Entering the Temple courts, Jesus drove out those buying and selling sacrificial animals and overturned the tables of moneychangers who exchanged foreign currency for the half-shekel temple tax. Quoting Scripture, He declared: 'My house will be called a house of prayer for all nations, but you have made it a den of robbers.' This public confrontation directly threatened the financial and administrative authority of the Sadducean chief priestly aristocracy under High Priest Caiaphas, solidifying their determination to eliminate Him. Over the following days, Jesus taught in the Temple and delivered the Olivet Discourse (Matthew 24–25) on the Mount of Olives regarding the coming destruction of the Temple and the end of the age.",
      te: "దేవాలయ ప్రాంగణములోనికి ప్రవేశించి, బలుల పశువులను విక్రయించువారిని, రూకలు మార్చువారి బల్లలను యేసు పడద్రోసి: 'నా మందిరము సమస్త జనులకు ప్రార్థన మందిరమనబడును... అయితే మీరు దానిని దొంగల గుహగా చేసితిరి' అని గద్దించెను. ఈ చర్య ప్రధాన యాజకుడైన కయప మరియు సద్దూకయ్య పెద్దల ఆర్థిక, మత అధికారాలకు తీవ్ర సవాలుగా నిలిచింది. తరువాతి దినములలో దేవాలయములో ఉపదేశిస్తూ, ఒలీవల కొండపై దేవాలయ వినాశనమును, యుగాంతపు సూచనలను (మత్తయి 24-25) ప్రవచించారు."
    },
    historicalNotes: {
      en: "The Royal Stoa at the southern end of the Temple Mount, constructed with colossal columns, was the likely historical setting for commercial money-changing during Passover pilgrimages.",
      te: "దేవాలయ ప్రాంగణ దక్షిణ భాగంలోని రాజరిక స్తంభాల ప్రాంగణంలో (రాయల్ స్టోవా) పస్కా సమయంలో నాణేల మార్పిడి మరియు జంతువుల విక్రయాలు జరిగేవి."
    }
  },
  {
    chapter: 20,
    id: "the-last-supper",
    period: "Thursday Evening, Nisan 14/15",
    periodTe: "గురువారం సాయంత్రం, నీసాను 14/15",
    dateRange: "Upper Room, Jerusalem",
    dateRangeTe: "యెరూషలేము మేడగది",
    title: {
      en: "20. The Last Supper & Institution of the New Covenant",
      te: "20. పరిశుద్ధ రాత్రి భోజనం & క్రొత్త నిబంధన స్థాపన"
    },
    subtitle: {
      en: "Passover meal, washing the disciples' feet, prediction of Judas' betrayal, and the bread and cup",
      te: "పస్కా భోజనం, శిష్యుల పాదాలు కడుగుట, యూదా ద్రోహ ప్రకటన మరియు రొట్టె-ద్రాక్షారస నిబంధన"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 26:17–30, Mark 14:12–26, Luke 22:7–38, John 13–17, 1 Corinthians 11:23–26",
    sources: ["Synoptic Gospels", "Gospel of John (Foot-washing and Farewell Discourse)", "Pauline Epistles (1 Cor 11:23–26 earliest written account c. 54 CE)"],
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Jerusalem upper room, U-shaped low triclinium dining couch arrangement, clay oil lamps, unleavened bread and ceramic cup on low table, Jesus breaking bread with disciples, intimate warm golden candlelight.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Gathering in an upper room in Jerusalem on the evening before His crucifixion, Jesus reclined with the Twelve. In an astonishing display of servanthood, He wrapped a towel around His waist and washed the disciples' feet (John 13), commanding them to love one another. During the meal, He revealed that one of them—Judas Iscariot—would betray Him. Taking unleavened bread, He blessed, broke, and gave it to them, saying: 'This is my body given for you; do this in remembrance of me.' Likewise with the cup of wine: 'This cup is the new covenant in my blood, which is poured out for you for the forgiveness of sins.'",
      te: "సిలువ వేయబడటానికి ముందు రాత్రి యెరూషలేములోని ఒక మేడగదిలో పన్నెండుమంది శిష్యులతో కలిసి పస్కా భోజనానికి కూర్చున్నారు. యోహాను 13 ప్రకారం తువాలు నడుమునకు కట్టుకుని శిష్యుల పాదములు కడిగి పరస్పర ప్రేమకు మాదిరి చూపారు. భోజన సమయములో యూదా ఇస్కరియోతు ద్రోహాన్ని బయటపెట్టారు. రొట్టెను పట్టుకుని ఆశీర్వదించి విరిచి 'ఇది మీకొరకు ఇవ్వబడుచున్న నా శరీరము; నన్ను జ్ఞాపకము చేసికొనుటకై దీనిని చేయుడి' అని ఇచ్చారు. అలాగే ద్రాక్షారసపు పాత్రను ఇచ్చి 'ఈ గిన్నె మీకొరకు చిందింపబడుచున్న నా రక్తమువలననైన క్రొత్త నిబంధన' అని సెలవిచ్చారు."
    },
    historicalNotes: {
      en: "1 Corinthians 11:23–26 (written c. 54 CE by Paul) represents the earliest surviving written record of the words of institution, predating the written Gospels by over a decade.",
      te: "1 కొరింథీయులకు 11:23-26 లో పౌలు రాసిన రాత్రి భోజన వృత్తాంతం (సుమారు క్రీ.శ. 54) సువార్తలు రాయబడటానికి పూర్వమే లభించిన అత్యంత ప్రాచీన రాతపూర్వక సాక్ష్యం."
    }
  },
  {
    chapter: 21,
    id: "gethsemane-and-agony",
    period: "Thursday Night / Early Friday",
    periodTe: "గురువారం అర్ధరాత్రి / శుక్రవారం వేకువజాము",
    dateRange: "Garden of Gethsemane, Mount of Olives",
    dateRangeTe: "గెత్సేమనే తోట, ఒలీవల కొండ",
    title: {
      en: "21. Gethsemane: Agony, Prayer & Surrender",
      te: "21. గెత్సేమనే తోటలో ప్రార్థన, ఆత్మ వేదన & సంపూర్ణ సమర్పణ"
    },
    subtitle: {
      en: "'Not my will, but yours be done' — tears of agony and disciples sleeping",
      te: "'నా ఇష్టము కాదు, నీ చిత్తమే సిద్ధించును గాక' — కన్నీటి ప్రార్థన మరియు నిద్రపోతున్న శిష్యులు"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 26:36–46, Mark 14:32–42, Luke 22:39–46, Hebrews 5:7",
    sources: ["Gospels of Matthew, Mark, Luke", "Hebrews 5:7"],
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Ancient gnarled olive trees in Gethsemane at night, moonlit silver cast on ancient stones, Jesus kneeling in deep prayer, sweat drops like blood, atmospheric nocturnal cinematic mood.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Crossing the Kidron Valley, Jesus led His disciples to an olive grove called Gethsemane ('oil press'). Taking Peter, James, and John deeper into the garden, He became deeply sorrowful and distressed, saying: 'My soul is overwhelmed with sorrow to the point of death.' Falling with His face to the ground, He prayed repeatedly: 'Abba, Father, everything is possible for you. Take this cup from me. Yet not what I will, but what you will.' Luke records that His sweat became like great drops of blood falling to the ground. Returning three times, He found the exhausted disciples asleep.",
      te: "కిద్రోను వాగు దాటి ఒలీవల కొండ దిగువన ఉన్న గెత్సేమనే ('నూనె గానుగ') తోటకు వెళ్లారు. పేతురు, యాకోబు, యోహానులను వెంటబెట్టుకుని 'మరణమగునంతగా నా ప్రాణము బహు దుఃఖములో మునిగియున్నది' అని నేలపై సాగిలపడి ప్రార్థించారు: 'అబ్బా తండ్రీ, నీ చిత్తమైతే ఈ గిన్నె నాయొద్దనుండి తొలగించుము; అయినను నా యిష్టము కాదు, నీ చిత్తమే సిద్ధించును గాక.' లూకా సువార్త ప్రకారం ఆయన చెమట రక్తపు బిందువులవలె నేల రాలెను. మూడుసార్లు ప్రార్థించి తిరిగిరాగా శిష్యులు నిద్రపోవుచుండగా చూచారు."
    },
    historicalNotes: {
      en: "Gethsemane derives from Aramaic *Gat Shmane* (oil press). Centuries-old olive trees still stand in the traditional Gethsemane garden in Jerusalem today.",
      te: "గెత్సేమనే అను అరామిక్ పదానికి 'నూనె గానుగ' అని అర్థం. నేటికీ యెరూషలేములోని గెత్సేమనే తోటలో ప్రాచీన ఒలీవ వృక్షాలు దర్శనమిస్తాయి."
    }
  },
  {
    chapter: 22,
    id: "betrayal-and-arrest",
    period: "Midnight Thursday / 3:00 AM Friday",
    periodTe: "అర్ధరాత్రి నుండి తెల్లవారుజాము 3 గంటలు",
    dateRange: "Kidron Valley / Gethsemane",
    dateRangeTe: "కిద్రోను లోయ / గెత్సేమనే",
    title: {
      en: "22. The Betrayal with a Kiss & Arrest",
      te: "22. యూదా ముద్దుతో ద్రోహం & రాత్రివేళ బంధింపబడుట"
    },
    subtitle: {
      en: "Judas leads armed Temple guards, Peter cuts Malchus' ear, and disciples flee",
      te: "దివిటీలు, ఆయుధాలతో దేవాలయ కావలి సైన్యం, మల్కు చెవిని నరుకుట మరియు స్వస్థత"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 26:47–56, Mark 14:43–52, Luke 22:47–53, John 18:1–12",
    sources: ["All Four Canonical Gospels"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Night scene in olive grove, flickering torches and lanterns illuminating armed Roman cohort and Jewish temple guards, Judas stepping forward to greet Jesus, dramatic shadows and tension.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "While Jesus was still speaking to His disciples, Judas Iscariot arrived leading a detachment of Roman soldiers and Temple guards bearing torches, lanterns, and weapons. Judas approached Jesus and identified Him with a customary greeting kiss: 'Greetings, Rabbi!' When Peter drew a sword and severed the right ear of Malchus, the High Priest's servant, Jesus commanded: 'Put your sword back in its place, for all who draw the sword will die by the sword,' and touched the man's ear and healed him. Jesus willingly submitted to arrest, and all the disciples deserted Him and fled.",
      te: "యేసు శిష్యులతో మాట్లాడుచుండగానే, యూదా ఇస్కరియోతు దివిటీలు, లాంతర్లు, ఆయుధాలు ధరించిన రోమన్ సైనికులను మరియు దేవాలయ కావలివారిని వెంటబెట్టుకుని వచ్చెను. యూదా యేసు వద్దకు వచ్చి 'బోధకుడా, శుభము' అని ముద్దుపెట్టుకుని ఆయనను పట్టిచ్చెను. పేతురు ఖడ్గము దూసి ప్రధాన యాజకుని దాసుడైన మల్కు కుడిచెవిని నరకగా, యేసు 'నీ ఖడ్గమును ఒరయందుంచుము; ఖడ్గము పట్టుకొనువారందరు ఖడ్గముచేతనే నశింతురు' అని చెప్పి, వాని చెవిని ముట్టి స్వస్థపరచెను. యేసు తనను తాను అప్పగించుకోగా శిష్యులందరూ ఆయనను విడిచి పారిపోయారు."
    },
    historicalNotes: {
      en: "The detachment in John 18:3 included both a Roman cohort (*speira*, garrisoned at the Antonia Fortress) and Temple police under Sanhedrin command.",
      te: "యోహాను 18:3 లో ప్రస్తావించబడిన సైన్యం అంటోనియా కోటలోని రోమన్ దళాలను మరియు సన్హెద్రిన్ ఆధ్వర్యంలోని దేవాలయ కావలివారిని కలిగి ఉంది."
    }
  },
  {
    chapter: 23,
    id: "jewish-proceedings-sanhedrin",
    period: "Early Friday Morning (c. 3:00 – 6:00 AM)",
    periodTe: "శుక్రవారం తెల్లవారుజాము (సుమారు 3 నుండి 6 గంటలు)",
    dateRange: "Palace of Annas and Caiaphas, Jerusalem",
    dateRangeTe: "హన్నా మరియు కయప భవనములు, యెరూషలేము",
    title: {
      en: "23. Jewish Proceedings before Annas & Caiaphas (The Sanhedrin)",
      te: "23. హన్నా మరియు కయప (సన్హెద్రిన్ మహాసభ) ఎదుట విచారణ"
    },
    subtitle: {
      en: "Night interrogation, false witnesses, Peter's three denials, and the blasphemy charge",
      te: "రాత్రివేళ విచారణ, అబద్ధ సాక్ష్యాలు, పేతురు ముమ్మారు బొంకుట మరియు దైవదూషణ నేరారోపణ"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 26:57–75, Mark 14:53–72, Luke 22:54–71, John 18:13–27",
    sources: ["All Four Canonical Gospels", "Mishnah Sanhedrin legal procedures"],
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century palatial stone hall at night with braziers burning, High Priest Caiaphas tearing his garments, bound Jesus standing calmly, stone courtyard with Peter near a charcoal fire.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Jesus was bound and taken first to Annas (former High Priest) and then to the palace of reigning High Priest Joseph Caiaphas, where elders, scribes, and members of the Sanhedrin assembled. Conflicting false testimonies failed to agree. Finally, Caiaphas put Him under oath: 'Tell us if you are the Messiah, the Son of God.' Jesus responded: 'I am. And you will see the Son of Man sitting at the right hand of the Mighty One and coming on the clouds of heaven.' Caiaphas tore his robes, crying: 'Blasphemy! Why do we need any more witnesses?' They condemned Him as worthy of death and struck Him. In the courtyard below, Peter denied knowing Jesus three times before the rooster crowed.",
      te: "యేసును బంధించి ముందుగా మాజీ ప్రధాన యాజకుడైన హన్నా వద్దకు, ఆపై కయప భవనమునకు తీసుకువెళ్లారు. అక్కడ సన్హెద్రిన్ పెద్దలు, శాస్త్రులు సమావేశమయ్యారు. అబద్ధ సాక్ష్యములు సరిపోకపోగా, కయప లేచి: 'నీవు దేవుని కుమారుడవైన క్రీస్తువా? చెప్పుము' అని ప్రమాణపూర్వకంగా అడిగెను. యేసు 'నేనే; మీరు మనుష్యకుమారుడు సర్వశక్తుని కుడిపార్శ్వమున కూర్చుండుటయు, పరలోక మేఘారూఢుడై వచ్చుటయు చూతురు' అని సమాధానమిచ్చెను. కయప తన వస్త్రములు చింపుకొని 'దైవదూషణ చేసెను, ఇక సాక్షులతో మనకేమి పని?' అనగా వారు ఆయన మరణార్హుడని తీర్పు తీర్చారు. ప్రాంగణములో చలికాచుకొనుచున్న పేతురు కోడికూయక మునుపే మూడుసార్లు యేసును ఎరుగనని బొంకెను."
    },
    historicalNotes: {
      en: "Under Roman provincial administration (*ius gladii*), the Sanhedrin did not possess the legal authority to carry out capital punishment (John 18:31), necessitating transfer to the Roman governor.",
      te: "రోమన్ పాలనలో మరణశిక్ష విధించే చట్టబద్ధమైన అధికారం రోమన్ గవర్నర్‌కే ఉండేది (యోహాను 18:31); అందువలన యేసును పొంతి పిలాతు వద్దకు తరలించారు."
    }
  },
  {
    chapter: 24,
    id: "roman-trial-pontius-pilate",
    period: "Friday Morning (c. 6:00 – 9:00 AM)",
    periodTe: "శుక్రవారం ఉదయం (సుమారు 6 నుండి 9 గంటలు)",
    dateRange: "Praetorium (Antonia Fortress / Herod's Palace)",
    dateRangeTe: "ప్రైతోరియము (హేరోదు భవనం / అంటోనియా కోట)",
    title: {
      en: "24. The Roman Proceedings before Pontius Pilate & Herod Antipas",
      te: "24. పొంతి పిలాతు & హేరోదు అంతిపస్ ఎదుట రోమన్ విచారణ"
    },
    subtitle: {
      en: "Accusation of sedition against Caesar, 'What is truth?', Barabbas released, and scourging",
      te: "కైసరుకు పన్నులు చెల్లించవద్దనుట మరియు రాజనుట వంటి రాజకీయ నేరారోపణలు, బరబ్బా విడుదల, కొరడా దెబ్బలు"
    },
    sourceConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED,
    scriptureRefs: "Matthew 27:1–26, Mark 15:1–15, Luke 23:1–25, John 18:28–19:16, Tacitus Annals 15.44",
    sources: ["Gospels of Matthew, Mark, Luke, John", "Tacitus (Annals 15.44 confirms execution of 'Christus' by procurator Pontius Pilate)", "Philo of Alexandria", "Pilate Stone (Caesarea Maritima)"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Roman Praetorium stone judgment seat (Bema), Pontius Pilate in Roman equestrian toga on elevated seat, Roman legionaries with shields, Jesus in bound tunic, crowd in background.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "At dawn, the authorities led Jesus to the Roman Praetorium before Prefect Pontius Pilate, reframing the theological accusation into political treason: claiming to be a rival King and opposing tribute to Caesar. Interrogating Jesus privately, Pilate asked: 'Are you the King of the Jews?' Jesus replied: 'My kingdom is not of this world.' Finding no basis for a charge, Pilate sent Him to Herod Antipas (visiting Jerusalem for Passover), who mocked Jesus and sent Him back in a splendid robe. Seeking to satisfy the crowd, Pilate offered to release a prisoner according to custom; the crowd chose the insurrectionist Barabbas and demanded Jesus be crucified. Pilate ordered Jesus scourged (*flagellatio*), crowned with thorns by Roman soldiers, and handed over for execution.",
      te: "తెల్లవారగానే యేసును రోమన్ గవర్నర్ పొంతి పిలాతు ప్రైతోరియమునకు తీసుకువచ్చారు. 'కైసరుకు పన్ను చెల్లించవద్దని, తానే రాజైన క్రీస్తునని ప్రజలను తిరగబడజేస్తున్నాడు' అని ఆరోపించారు. పిలాతు యేసును విచారించగా, 'నా రాజ్యము ఈ లోక సంబంధమైనది కాదు' అని యేసు చెప్పెను. యేసులో ఏ దోషము కనబడక పిలాతు ఆయనను గలిలయ పాలకుడైన హేరోదు అంతిపస్ వద్దకు పంపగా, హేరోదు ఎగతాళి చేసి తిరిగి పంపెను. పండుగ ఆచార ప్రకారము ఒక ఖైదీని విడుదల చేయడానికి పిలాతు ప్రతిపాదించగా, ప్రజలు బరబ్బాను విడుదల చేయమని, యేసును సిలువ వేయమని కేకలు వేశారు. పిలాతు యేసును కొరడాలతో కొట్టించి, రోమన్ సైనికులు ముండ్లకిరీటం పెట్టి ఎగతాళి చేసిన పిమ్మట సిలువకు అప్పగించెను."
    },
    historicalNotes: {
      en: "Roman historian Tacitus explicitly records: 'Christus, the founder of the name, was put to death by Pontius Pilate, procurator of Judea in the reign of Tiberius' (Annals 15.44), providing foundational secular historical confirmation.",
      te: "రోమన్ చరిత్రకారుడైన టాసిటస్ తన 'ఆనల్స్' 15.44 లో తిబెరియస్ పాలనలో పొంతి పిలాతు చేత క్రీస్తు మరణశిక్ష పొందెనని స్వతంత్రంగా నమోదు చేశాడు."
    }
  },
  {
    chapter: 25,
    id: "the-crucifixion-at-golgotha",
    period: "Friday (c. 9:00 AM – 3:00 PM), Nisan 14/15",
    periodTe: "శుక్రవారం (ఉదయం 9 నుండి మధ్యాహ్నం 3 గంటలు)",
    dateRange: "Golgotha / Calvary, Outside Jerusalem Walls",
    dateRangeTe: "గొల్గొతా / కల్వరి, యెరూషలేము గోడల వెలుపల",
    title: {
      en: "25. The Crucifixion at Golgotha (Calvary)",
      te: "25. గొల్గొతా కల్వరి కొండపై రోమన్ సిలువ మరణం"
    },
    subtitle: {
      en: "Bearing the crossbeam, Simon of Cyrene, crucifixion between two criminals, and Roman titulus INRI",
      te: "సిలువ మోయుట, కురేనీయుడైన సీమోను, ఇద్దరు దొంగల మధ్య సిలువ మరియు 'యూదుల రాజు' నామఫలకం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED,
    scriptureRefs: "Matthew 27:27–44, Mark 15:16–32, Luke 23:26–43, John 19:16–27",
    sources: ["All Four Gospels", "Roman Judicial History (Crucifixion methodology)", "Archaeology of 1st-century Giv'at ha-Mivtar crucifixion victim Yehohanan"],
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Rugged rocky knoll outside ancient Jerusalem city walls at Golgotha, wooden cross erected under an overcast ominous sky, Roman centurion looking on, historical authenticity and solemn dignity.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "Forced to carry His crossbeam (*patibulum*), Jesus was assisted by Simon of Cyrene when His physical strength failed. They reached Golgotha ('Place of the Skull'), just outside the city walls. Roman soldiers stripped Him, hammered iron nails through His wrists and ankles, and hoisted the cross between two convicted criminals. Above His head, Pilate posted a trilingual inscription in Hebrew, Latin, and Greek: 'JESUS OF NAZARETH, THE KING OF THE JEWS' (INRI). Soldiers divided His garments by casting lots. Even in agony, Jesus prayed for His executioners and promised paradise to the repentant thief.",
      te: "సిలువను మోసుకొని వెళ్లుచుండగా బడలికను చూచి సైనికులు కురేనీయుడైన సీమోనుతో బలవంతముగా మోయించారు. యెరూషలేము గోడల వెలుపల ఉన్న గొల్గొతా ('కపాల స్థలము') వద్దకు చేరినప్పుడు, ఇనుప మేకులతో సిలువపై కొట్టి ఇద్దరు దొంగల మధ్య నిలబెట్టారు. పిలాతు హీబ్రూ, లాటిన్, గ్రీకు భాషలలో 'నజరేయుడైన యేసు యూదుల రాజు' అని నామఫలకమును సిలువపై ఉంచెను. సైనికులు ఆయన వస్త్రములను చీట్లు వేసి పంచుకున్నారు. ఆ సిలువ వేదనలో కూడా యేసు తనను హింసించినవారి కొరకు ప్రార్థించి, మారుమనస్సు పొందిన దొంగకు పరదేశి వాగ్దానమిచ్చారు."
    },
    historicalNotes: {
      en: "Crucifixion was the supreme Roman penalty reserved for rebels, pirates, and rebellious slaves, designed to maximize agony and public humiliation.",
      te: "రోమన్ చట్టంలో సిలువ శిక్ష అనేది దేశద్రోహులకు, తిరుగుబాటుదారులకు విధించే అత్యంత కఠినమైన బహిరంగ మరణశిక్ష."
    }
  },
  {
    chapter: 26,
    id: "the-seven-sayings-and-death",
    period: "Friday Afternoon (c. 12:00 PM – 3:00 PM)",
    periodTe: "శుక్రవారం మధ్యాహ్నం 12 నుండి 3 గంటలు",
    dateRange: "Exact minute unknown; Gospels record 3:00 PM (Ninth Hour)",
    dateRangeTe: "సువార్తల ప్రకారం మధ్యాహ్నం 3 గంటలు (తొమ్మిదవ గంట)",
    title: {
      en: "26. The Seven Sayings from the Cross & Jesus' Death",
      te: "26. సిలువపై పలికిన ఏడు మాటలు & ప్రాణార్పణ"
    },
    subtitle: {
      en: "Darkness over the land, the temple curtain torn, and the Centurion's declaration",
      te: "దేశమంతటా చీకటి, దేవాలయ తెర రెండుగా చిరుగుట మరియు శతాధిపతి సాక్ష్యం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 27:45–56, Mark 15:33–41, Luke 23:44–49, John 19:28–37, Psalm 22:1",
    sources: ["Gospels of Matthew, Mark, Luke, John"],
    image: "https://images.unsplash.com/photo-1510936111840-65e151473064?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Solemn historical scene at Golgotha around 3 PM, dark storm clouds breaking with a single shaft of light, Roman centurion gazing upward with awe, torn temple veil symbolism in distance.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "From the sixth hour until the ninth hour (12 PM to 3 PM), darkness fell over the land. Across the Gospel accounts, Jesus spoke seven profound sayings: (1) 'Father, forgive them, for they know not what they do' (Luke 23:34); (2) 'Truly I tell you, today you will be with me in paradise' (Luke 23:43); (3) 'Woman, behold your son... Behold your mother' (John 19:26–27); (4) 'Eloi, Eloi, lema sabachthani?' ('My God, my God, why have you forsaken me?' — Mark 15:34 / Psalm 22:1); (5) 'I thirst' (John 19:28); (6) 'It is finished' (*Tetelestai* — John 19:30); (7) 'Father, into your hands I commit my spirit' (Luke 23:46). With a final cry, He breathed His last. The curtain of the Temple tore in two from top to bottom, and the Roman centurion exclaimed: 'Truly this was the Son of God!'",
      te: "మధ్యాహ్నం 12 గంటల నుండి 3 గంటల వరకు దేశమంతటా చీకటి కమ్మెను. సువార్తలలో యేసు పలికిన ఏడు మాటలు నమోదయ్యాయి: (1) 'తండ్రీ, వీరేమి చేయుచున్నారో వీరెరుగరు గనుక వీరిని క్షమించుము' (లూకా 23:34); (2) 'నేడు నీవు నాతోకూడ పరదేశిలో ఉందువు' (లూకా 23:43); (3) 'అమ్మా, యిదిగో నీ కుమారుడు... ఇదిగో నీ తల్లి' (యోహాను 19:26-27); (4) 'ఎలోయీ, ఎలోయీ, లామా సబక్తానీ?' ('నా దేవా, నా దేవా, నన్నేల చెయ్యి విడిచితివి?' — మార్కు 15:34); (5) 'నేను దప్పిగొనుచున్నాను' (యోహాను 19:28); (6) 'సమాప్తమైనది' (యోహాను 19:30); (7) 'తండ్రీ, నీ చేతికి నా ఆత్మను అప్పగించుకొనుచున్నాను' (లూకా 23:46). కేకవేసి ప్రాణము విడవగానే దేవాలయపు తెర పైనుండి క్రిందివరకు రెండుగా చిరిగెను; రోమన్ శతాధిపతి 'నిజముగా ఈ మనుష్యుడు దేవుని కుమారుడే' అని సాక్ష్యమిచ్చెను."
    },
    historicalNotes: {
      en: "The exact historical time of Jesus' death is not known with modern astronomical certainty, but Gospel sources unanimously converge on a Friday afternoon before the onset of the Jewish Sabbath at sundown.",
      te: "యేసు మరణించిన ఖచ్చితమైన సమయం ఆధునిక కాలమాన ప్రకారం అనిశ్చితమే అయినప్పటికీ, యూదుల విశ్రాంతిదినం ప్రారంభమయ్యే శుక్రవారం సాయంత్రానికి ముందే ఇది జరిగిందని సువార్తలన్నీ ఏకాభిప్రాయంతో తెలుపుతున్నాయి."
    }
  },
  {
    chapter: 27,
    id: "burial-in-rock-hewn-tomb",
    period: "Friday Late Afternoon before Sundown",
    periodTe: "శుక్రవారం సూర్యాస్తమయానికి ముందు",
    dateRange: "Garden Tomb / Holy Sepulchre site",
    dateRangeTe: "సమాధి తోట / యెరూషలేము రాతి సమాధి",
    title: {
      en: "27. Burial in the Rock-Hewn Tomb of Joseph of Arimathea",
      te: "27. అరిమతయి యోసేపు నూతన రాతి సమాధిలో సమాధి చేయబడుట"
    },
    subtitle: {
      en: "Joseph of Arimathea, Nicodemus with spices, linen shroud, and rolling the stone",
      te: "అరిమతయి యోసేపు, నికోదేము తెచ్చిన సుగంధ ద్రవ్యాలు, నారబట్టల చుట్టు మరియు సమాధి ద్వారమున రాయి"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 27:57–66, Mark 15:42–47, Luke 23:50–56, John 19:38–42",
    sources: ["All Four Canonical Gospels", "1st-century Jewish Kokhim & Arcosolium burial archaeology"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century rock-cut garden tomb outside Jerusalem walls in the late afternoon shadows, large circular rolling stone near entrance, oil lamps, linen cloths, solemn and peaceful atmosphere.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "As evening approached before the Sabbath began at sundown, Joseph of Arimathea, a prominent and secret disciple from the Sanhedrin, boldly asked Pilate for Jesus' body. Pilate confirmed the death through the centurion and released the body. Joined by Nicodemus (who brought about 75 pounds of myrrh and aloes), they wrapped Jesus' body in clean linen cloths with spices in accordance with Jewish burial customs. They laid Him in Joseph's own new rock-cut tomb situated in a nearby garden and rolled a large stone across the entrance. Mary Magdalene and Mary the mother of Joses watched where He was laid.",
      te: "విశ్రాంతిదినం ప్రారంభమయ్యే సమయానికి, సన్హెద్రిన్ సభ్యుడు మరియు యేసు రహస్య శిష్యుడైన అరిమతయి యోసేపు ధైర్యముతో పిలాతు వద్దకు వెళ్లి యేసు దేహమును అడిగెను. పిలాతు శతాధిపతి ద్వారా మరణాన్ని నిర్ధారించుకుని అనుమతించెను. నికోదేము సుమారు 30 కిలోల బోళము, అగరుల మిశ్రమమును తీసుకురాగా, యూదుల సమాధి ఆచార ప్రకారము సుగంధ ద్రవ్యాలతో పరిశుద్ధమైన నారబట్టలతో చుట్టారు. సమీపంలోని తోటలో ఉన్న యోసేపు కొత్త రాతి సమాధిలో పరుండబెట్టి, ద్వారమునకు పెద్ద రాయిని దొర్లించారు. మగ్దలేనే మరియ మరియు ఇతర స్త్రీలు సమాధిని చూచారు."
    },
    historicalNotes: {
      en: "Archaeological excavations of 1st-century Jerusalem rock-cut tombs (such as those around the Church of the Holy Sepulchre and the Garden Tomb) precisely match the rolling-stone (*golal*) and bench burial layouts described in the Gospels.",
      te: "యెరూషలేములోని 1వ శతాబ్దపు రాతి సమాధుల పురావస్తు ఆధారాలు సువార్తలలో వర్ణించబడిన దొర్లించే రాతి ద్వారాల శైలిని నిర్ధారిస్తున్నాయి."
    }
  },
  {
    chapter: 28,
    id: "the-resurrection-accounts",
    period: "Sunday Dawn, Nisan 16/17 (c. 30 or 33 CE)",
    periodTe: "ఆదివారం వేకువజాము, నీసాను 16/17",
    dateRange: "The Third Day (Easter)",
    dateRangeTe: "మూడవ దినము (ఈస్టర్ పునరుత్థానం)",
    title: {
      en: "28. The Resurrection Accounts: The Empty Tomb & Appearances",
      te: "28. పునరుత్థాన వృత్తాంతాలు: ఖాళీ సమాధి & శిష్యులకు ప్రత్యక్షతలు"
    },
    subtitle: {
      en: "Mary Magdalene at dawn, angelic announcement, Road to Emmaus, Upper Room, and Thomas",
      te: "మగ్దలేనే మరియకు దేవదూత సందేశం, ఎమ్మాయు బాటసారులు, మేడగదిలో శిష్యులకు మరియు తోమాకు ప్రత్యక్షత"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 28:1–10, Mark 16:1–8, Luke 24:1–49, John 20:1–29, 1 Corinthians 15:3–8",
    sources: ["Gospels of Matthew, Mark, Luke, John", "1 Corinthians 15:3–8 (Earliest Christian Creed c. 50–55 CE)"],
    image: "https://images.unsplash.com/photo-1510936111840-65e151473064?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Inside the empty rock tomb at sunrise, golden morning rays piercing the darkness, neatly folded linen burial cloths on the stone bench, open doorway overlooking a blooming garden.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "On the first day of the week at dawn, Mary Magdalene and other women brought spices to the tomb. They found the stone rolled away and an angel announcing: 'Why do you look for the living among the dead? He is not here; he has risen!' Jesus appeared first to Mary Magdalene (who proclaimed it to the disciples), then to two disciples on the Road to Emmaus, to Peter, to the disciples gathered behind locked doors in the Upper Room (where He showed His hands and side), and eight days later to Thomas ('My Lord and my God!'). Paul in 1 Corinthians 15 preserves the earliest documented Christian creed: that Christ died for our sins, was buried, and was raised on the third day in accordance with the Scriptures.",
      te: "ఆదివారం తెల్లవారుజామున మగ్దలేనే మరియ మరియు ఇతర స్త్రీలు సుగంధ ద్రవ్యాలతో సమాధి వద్దకు రాగా, రాయి దొర్లించబడి ఖాళీగా ఉండెను. దేవదూత 'సజీవుడైనవానిని మీరెందుకు మృతులలో వెదకుచున్నారు? ఆయన ఇక్కడ లేడు, లేచియున్నాడు' అని ప్రకటించెను. పునరుత్థానుడైన యేసు మొదట మగ్దలేనే మరియకు, తరువాత ఎమ్మాయు మార్గములో ఇద్దరు శిష్యులకు, పేతురుకు, తలుపులు వేసియున్న మేడగదిలో శిష్యులకు, ఎనిమిది దినముల తర్వాత తోమాకు ('నా ప్రభువా, నా దేవా!') ప్రత్యక్షమయ్యారు. 1 కొరింథీ 15 లో పౌలు లేఖనముల ప్రకారము క్రీస్తు చనిపోయి, సమాధి చేయబడి, మూడవ దినమున లేచెనని అత్యంత ప్రాచీన విశ్వాస ప్రకటనను నమోదు చేశాడు."
    },
    historicalNotes: {
      en: "Historians note the remarkable historical detail that all four Gospels unanimously record women as the primary initial witnesses of the empty tomb—a feature unlikely to be invented in 1st-century patriarchal legal culture where women's testimony was generally not accepted in courts.",
      te: "మొదటి శతాబ్దపు న్యాయ సంస్కృతిలో స్త్రీల సాక్ష్యానికి ప్రాధాన్యత తక్కువగా ఉన్న కాలంలో, నాలుగు సువార్తలూ ఏకగ్రీవంగా స్త్రీలనే ఖాళీ సమాధి తొలి సాక్షులుగా పేర్కొనడం చారిత్రక విశ్వసనీయతకు బలమైన నిదర్శనంగా విద్వాంసులు భావిస్తారు."
    }
  },
  {
    chapter: 29,
    id: "the-ascension-and-great-commission",
    period: "40 Days Post-Resurrection",
    periodTe: "పునరుత్థానం తర్వాత 40 దినములు",
    dateRange: "Mount of Olives near Bethany",
    dateRangeTe: "ఒలీవల కొండ, బేతనియ సమీపం",
    title: {
      en: "29. The Great Commission & The Ascension into Heaven",
      te: "29. సర్వలోక సువార్త ఆజ్ఞ & పరలోకారారోహణ"
    },
    subtitle: {
      en: "'Go and make disciples of all nations' — ascension in a cloud and the promise of the Holy Spirit",
      te: "'మీరు వెళ్లి సర్వలోకమునకు సువార్తను ప్రకటించుడి' — మేఘారూఢుడై ఆరోహణమగుట మరియు పరిశుద్ధాత్మ వాగ్దానం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT,
    scriptureRefs: "Matthew 28:16–20, Luke 24:50–53, Acts 1:1–11, Mark 16:19–20",
    sources: ["Acts of the Apostles 1", "Gospel of Matthew 28", "Gospel of Luke 24"],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "Mount of Olives summit overlooking Jerusalem, Jesus with hands lifted in blessing ascending in radiant cloud of light, disciples looking upward with awe and worship, majestic expansive sky.",
    imageType: "Artistic Historical Reconstruction",
    summary: {
      en: "For forty days following His resurrection, Jesus appeared to His disciples, teaching them about the Kingdom of God and confirming His physical reality. On a mountain in Galilee, He delivered the Great Commission: 'All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit... And behold, I am with you always, to the end of the age.' Leading them to the Mount of Olives near Bethany, He commanded them to wait in Jerusalem for the promised Holy Spirit. As He blessed them, He was taken up before their eyes into heaven, and a cloud hid Him from their sight.",
      te: "పునరుత్థానానంతరం నలువది దినములు యేసు శిష్యులకు ప్రత్యక్షమవుతూ దేవుని రాజ్య విషయాలను బోధించారు. గలిలయ కొండపై సర్వలోక సువార్త ఆజ్ఞను ఇచ్చారు: 'పరలోకమందును భూమిమీదను సమస్తాధికారము నాకు ఇవ్వబడియున్నది. కాబట్టి మీరు వెళ్లి, సమస్త జనులను శిష్యులనుగా చేయుడి... ఇదిగో నేను యుగసమాప్తి వరకు సదాకాలము మీతో కూడ ఉన్నాను.' బేతనియ సమీపములోని ఒలీవల కొండపై వారిని ఆశీర్వదిస్తూ వారి కన్నుల ఎదుట పరలోకమునకు ఆరోహణమయ్యారు."
    },
    historicalNotes: {
      en: "The Ascension in Acts 1 marks the theological transition from the earthly historical ministry of Jesus to the apostolic mission of the Church empowered by the Holy Spirit at Pentecost.",
      te: "అపొస్తలుల కార్యములు 1 ప్రకారం పరలోకారారోహణ అనేది యేసు భూలోక పరిచర్య నుండి పెంతెకొస్తు పరిశుద్ధాత్మ ద్వారా సంఘ విశ్వవ్యాప్త పరిచర్యకు వారధిగా నిలిచింది."
    }
  },
  {
    chapter: 30,
    id: "early-church-and-global-legacy",
    period: "c. 30 – 325 CE & Beyond",
    periodTe: "క్రీ.శ. 30 – 325 & ఆధునిక యుగం వరకు",
    dateRange: "From Jerusalem to Antioch, Rome, and the Global World",
    dateRangeTe: "యెరూషలేము నుండి అంతియొకయ, రోమ్ మరియు ప్రపంచవ్యాప్తంగా",
    title: {
      en: "30. The Early Christian Movement & Global Historical Legacy",
      te: "30. ఆదిమ క్రైస్తవ ఉద్యమం & ప్రపంచ చరిత్రపై క్రీస్తు ప్రభావం"
    },
    subtitle: {
      en: "Pentecost, missionary expansion, preserving manuscripts, and shaping human history",
      te: "పెంతెకొస్తు, అపొస్తలుల మిషనరీ యాత్రలు, లేఖనాల భద్రత మరియు మానవ నాగరికతపై ప్రభావం"
    },
    sourceConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED,
    scriptureRefs: "Acts 2–28, Romans, Galatians, 1 Corinthians",
    sources: ["Acts of the Apostles", "Early Church Fathers (Clement, Ignatius, Polycarp, Irenaeus, Justin Martyr)", "Roman Imperial Edicts & Tacitus/Pliny letters", "Extensive Papyrus Manuscripts (P52, Chester Beatty, Bodmer)"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    imagePrompt: "1st-century Mediterranean port city with merchant ship departing, early Christian scrolls, olive branch and stone cross symbol, expansive sunrise over ancient world map.",
    imageType: "Historical Reconstruction",
    summary: {
      en: "At Pentecost in Jerusalem, the Holy Spirit descended upon the believers, birthing the Christian Church. Under the leadership of Peter, John, and James (the Lord's brother), the movement grew rapidly. Following Stephen's martyrdom, believers scattered across Judea, Samaria, Antioch, and Damascus. The dramatic conversion of Saul of Tarsus (Paul) propelled the message across the Greco-Roman world through three missionary journeys to Asia Minor, Greece, and Rome. Despite intense Roman persecutions under Nero, Domitian, and Diocletian, the message of Jesus transformed global human history—shaping ethics, human rights, charity, hospitals, education, literature, art, and the universal calendar.",
      te: "యెరూషలేములో పెంతెకొస్తు దినమున పరిశుద్ధాత్మ దిగిరావడంతో క్రైస్తవ సంఘం ఆవిర్భవించింది. పేతురు, యోహాను, యాకోబుల నాయకత్వంలో వేలమంది విశ్వాసములోనికి వచ్చారు. స్తెఫను అమరమరణం తర్వాత సువార్త సమరయ, అంతియొకయలకు వ్యాపించింది. పౌలు పరివర్తనతో సువార్త ఆసియా మైనర్, గ్రీస్, రోమ్ నగరాలకు విస్తరించింది. రోమన్ సామ్రాజ్య హింసలను తట్టుకుని క్రైస్తవ్యం ప్రపంచ చరిత్రను, మానవ హక్కులను, సేవా ధర్మాన్ని, విద్య, వైద్య రంగాలను మరియు కాలగణనను ప్రభావితం చేసింది."
    },
    historicalNotes: {
      en: "Over 5,800 Greek New Testament manuscripts survive today, making the historical text of the Gospels by far the best-attested document of ancient history.",
      te: "నేడు 5,800 కంటే ఎక్కువ గ్రీకు క్రొత్త నిబంధన చేతివ్రాత ప్రతులు భద్రపరచబడి ఉన్నాయి; ప్రాచీన ప్రపంచ చరిత్రలో మరే ఇతర గ్రంథానికీ ఇంత విస్తారమైన రాతపూర్వక సాక్ష్యాలు లేవు."
    }
  }
];

// 3. The Twelve Apostles + Matthias + Paul Profiles
export const APOSTLES_DATA = [
  {
    id: "peter",
    name: "Simon Peter",
    nameTe: "సీమోను పేతురు",
    greekName: "Σίμων Πέτρος / Cephas (Aramaic: Rock)",
    occupation: "Fisherman from Bethsaida / Capernaum",
    occupationTe: "బేత్సయిదా / కపెర్నహూము జాలరి",
    role: "Foremost among the Twelve; early leader of Jerusalem church",
    roleTe: "పన్నెండుమందిలో ప్రముఖుడు; ఆదిమ యెరూషలేము సంఘ నాయకుడు",
    biblicalEvents: "Confession at Caesarea Philippi; walking on water; denial and restoration; Pentecost sermon",
    biblicalEventsTe: "కైసరయ ఫిలిప్పిలో విశ్వాస ప్రకటన; నీటిపై నడచుట; ముమ్మారు బొంకుట మరియు పునరుద్ధరణ; పెంతెకొస్తు ప్రసంగం",
    laterTradition: "According to early tradition (Clement of Rome, Eusebius), martyred in Rome under Nero c. 64–67 CE by upside-down crucifixion.",
    laterTraditionTe: "నీరో చక్రవర్తి కాలంలో రోమ్ నగరంలో తలక్రిందులుగా సిలువ వేయబడి అమరమరణం పొందాడని ప్రాచీన సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: "andrew",
    name: "Andrew",
    nameTe: "అంద్రెయ",
    greekName: "Ἀνδρέας (Manly)",
    occupation: "Fisherman; brother of Simon Peter; former disciple of John the Baptist",
    occupationTe: "జాలరి; పేతురు సహోదరుడు; బాప్తిస్మమిచ్చు యోహాను పూర్వ శిష్యుడు",
    role: "First-called apostle; brought Peter and others to Jesus",
    roleTe: "మొదటిగా పిలువబడిన శిష్యుడు; పేతురును యేసు వద్దకు నడిపించాడు",
    biblicalEvents: "Feeding of the 5,000 (brought the boy with loaves and fish); introduction of Greek seekers to Jesus",
    biblicalEventsTe: "5000 మందికి భోజనం వద్ద రొట్టెలు గల బాలుని తెచ్చుట; గ్రీకు దేశస్థులను యేసు వద్దకు తెచ్చుట",
    laterTradition: "Tradition holds he preached in Greece and Scythia and was martyred on an X-shaped cross in Patras.",
    laterTraditionTe: "గ్రీస్, సిథియా ప్రాంతాలలో సువార్త ప్రకటించి X-ఆకారపు సిలువపై అమరుడయ్యాడని సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "james-zebedee",
    name: "James (Son of Zebedee)",
    nameTe: "యాకోబు (జెబెదయి కుమారుడు)",
    greekName: "Ἰάκωβος (Boanerges / Son of Thunder)",
    occupation: "Fisherman on the Sea of Galilee; brother of John",
    occupationTe: "గలిలయ సముద్ర జాలరి; యోహాను సహోదరుడు",
    role: "Inner circle with Peter and John; first apostle to be martyred",
    roleTe: "ముఖ్య శిష్య త్రయంలో ఒకడు; అపొస్తలులలో మొదటి అమరవీరుడు",
    biblicalEvents: "Transfiguration, Jairus' daughter healing, Gethsemane agony prayer",
    biblicalEventsTe: "రూపాంతర పర్వతం, యాయీరు కుమార్తె స్వస్థత, గెత్సేమనే ప్రార్థన",
    laterTradition: "Beheaded by King Herod Agrippa I in Jerusalem c. 44 CE (Acts 12:1–2). Historical fact documented in NT.",
    laterTraditionTe: "క్రీ.శ. 44 లో హేరోదు అగ్రిప్ప I చేత యెరూషలేములో ఖడ్గముతో చంపబడ్డాడు (అపొ.కా. 12:1-2).",
    historicalConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: "john",
    name: "John (Son of Zebedee)",
    nameTe: "యోహాను (జెబెదయి కుమారుడు)",
    greekName: "Ἰωάννης (Yahweh is gracious)",
    occupation: "Fisherman; 'the disciple whom Jesus loved'",
    occupationTe: "జాలరి; 'యేసు ప్రేమించిన శిష్యుడు'",
    role: "Pillar of early church; attributed author of Gospel, Epistles, Revelation",
    roleTe: "ఆదిమ సంఘ మూలస్తంభం; సువార్త, పత్రికలు, ప్రకటన గ్రంథ రచయిత",
    biblicalEvents: "At the cross with Mary; ran to empty tomb with Peter; Sea of Galilee restoration",
    biblicalEventsTe: "సిలువ యొద్ద మరియతో నిలుచుట; ఖాళీ సమాధి వద్దకు పరుగెత్తుట",
    laterTradition: "Exiled to Isle of Patmos; ministered in Ephesus into old age (Irenaeus).",
    laterTraditionTe: "పత్మాసు ద్వీపానికి బహిష్కరించబడి, ఎఫెసులో వృద్ధాప్యం వరకు జీవించాడని సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: "philip",
    name: "Philip",
    nameTe: "ఫిలిప్పు",
    greekName: "Φίλιππος (Lover of horses)",
    occupation: "From Bethsaida in Galilee",
    occupationTe: "గలిలయలోని బేత్సయిదా వాసి",
    role: "Brought Nathanael (Bartholomew) to Jesus",
    roleTe: "నతనయేలును యేసు వద్దకు నడిపించాడు",
    biblicalEvents: "Feeding of the 5,000 ('Where shall we buy bread?'); 'Show us the Father' in Upper Room",
    biblicalEventsTe: "5000 మందికి రొట్టెల ప్రశ్న; మేడగదిలో 'మాకు తండ్రిని కనుపరచుము' అనుట",
    laterTradition: "Later traditions associate his ministry with Hierapolis in Asia Minor.",
    laterTraditionTe: "ఆసియా మైనర్‌లోని హియరాపొలిస్‌లో పరిచర్య చేసి అమరుడయ్యాడని సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "bartholomew",
    name: "Bartholomew (Nathanael)",
    nameTe: "బర్తొలొమయి (నతనయేలు)",
    greekName: "Βαρθολομαῖος (Son of Talmai) / Ναθαναήλ",
    occupation: "From Cana in Galilee",
    occupationTe: "గలిలయలోని కానా వాసి",
    role: "Recognized as 'a true Israelite in whom there is no deceit'",
    roleTe: "'ఏ కపటమును లేని నిజమైన ఇశ్రాయేలీయుడు' అని యేసు చేత ప్రశంసించబడ్డాడు",
    biblicalEvents: "Called under the fig tree (John 1:45–51); post-resurrection fishing in Galilee (John 21)",
    biblicalEventsTe: "అంజూరపు చెట్టు క్రింద పిలుపు (యోహాను 1); గలిలయ చేపల వేట (యోహాను 21)",
    laterTradition: "Traditions associate his mission with Armenia and India.",
    laterTraditionTe: "ఆర్మేనియా మరియు భారతదేశంలో సువార్త ప్రకటించాడని ప్రాచీన సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "matthew",
    name: "Matthew (Levi)",
    nameTe: "మత్తయి (లేవి)",
    greekName: "Μαθθαῖος (Gift of Yahweh) / Λευί",
    occupation: "Tax collector (*telōnēs*) in Capernaum under Herod Antipas",
    occupationTe: "కపెర్నహూములోని సుంకరి (పన్ను వసూలుదారుడు)",
    role: "Left lucrative tax booth immediately; hosted banquet for Jesus",
    roleTe: "సుంకపు మెట్టును విడిచిపెట్టి వెంటనే యేసును అనుసరించాడు; గొప్ప విందు ఇచ్చాడు",
    biblicalEvents: "Calling from tax booth (Matthew 9:9); dinner with tax collectors and sinners",
    biblicalEventsTe: "సుంకపు మెట్టు వద్ద పిలుపు (మత్తయి 9:9); సుంకరులతో విందు",
    laterTradition: "Papias (c. 110 CE) associates Matthew with Hebrew/Aramaic oracles of the Lord.",
    laterTraditionTe: "హీబ్రూ/అరామిక్ భాషలో ప్రభువు మాటలను సేకరించాడని ప్రాచీన పితరుడు పాపియాస్ పేర్కొన్నాడు.",
    historicalConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: "thomas",
    name: "Thomas (Didymus)",
    nameTe: "తోమా (దిదుమస్)",
    greekName: "Θωμᾶς (Aramaic: Twin / Didymos)",
    occupation: "Galilean disciple",
    occupationTe: "గలిలయ శిష్యుడు",
    role: "Loyal disciple; famous for requiring tangible proof of resurrection",
    roleTe: "పునరుత్థాన ప్రత్యక్ష రుజువు కోరిన శిష్యుడు; 'నా ప్రభువా, నా దేవా' అని ఒప్పుకున్నాడు",
    biblicalEvents: "'Let us also go, that we may die with him' (John 11:16); resurrection confession (John 20:28)",
    biblicalEventsTe: "'మనం కూడా వెళ్లి ఆయనతో చనిపోదాం' (యోహాను 11); 'నా ప్రభువా, నా దేవా' (యోహాను 20)",
    laterTradition: "Strong early tradition (Acts of Thomas, Mar Thoma Christians) documents his journey to India (Malabar coast c. 52 CE) and martyrdom at Mylapore.",
    laterTraditionTe: "క్రీ.శ. 52 లో భారతదేశంలోని కేరళ మలబార్ తీరానికి వచ్చి సువార్త ప్రకటించి మైలాపూర్‌లో అమరుడయ్యాడని బలమైన ప్రాచీన సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.CHRISTIAN_TRADITION
  },
  {
    id: "james-alphaeus",
    name: "James (Son of Alphaeus)",
    nameTe: "యాకోబు (అల్ఫయి కుమారుడు)",
    greekName: "Ἰάκωβος ὁ τοῦ Ἀλφαίου (James the Less)",
    occupation: "Galilean disciple",
    occupationTe: "గలిలయ శిష్యుడు",
    role: "One of the Twelve; distinguished from James son of Zebedee",
    roleTe: "పన్నెండుమందిలో ఒకడు; జెబెదయి యాకోబు నుండి భిన్నుడు",
    biblicalEvents: "Listed in all four apostolic catalogs (Matthew 10, Mark 3, Luke 6, Acts 1)",
    biblicalEventsTe: "అన్ని అపొస్తలుల పట్టికలలో పేర్కొనబడ్డాడు",
    laterTradition: "Often identified with 'James the Younger' (Mark 15:40); little certain historical data survives.",
    laterTraditionTe: "ఈయన గురించిన తర్వాతి వివరాలు చాలా పరిమితంగా ఉన్నాయి.",
    historicalConfidence: SOURCE_CONFIDENCE.UNCERTAIN_DISPUTED
  },
  {
    id: "thaddaeus",
    name: "Thaddaeus / Judas (Son of James)",
    nameTe: "తద్దయి / యూదా (యాకోబు కుమారుడు)",
    greekName: "Θαδδαῖος / Ἰούδας Ἰακώβου (Lebbaeus)",
    occupation: "Galilean disciple",
    occupationTe: "గలిలయ శిష్యుడు",
    role: "One of the Twelve; distinct from Judas Iscariot",
    roleTe: "ఇస్కరియోతు యూదా కానటువంటి వేరొక యూదా",
    biblicalEvents: "Asked Jesus at the Last Supper: 'Lord, why do you intend to show yourself to us and not to the world?' (John 14:22)",
    biblicalEventsTe: "రాత్రి భోజనంలో 'ప్రభువా, లోకమునకు కాక మాకు మాత్రమే నిన్ను ప్రత్యక్షపరచుకొనుటకు ఏమి సంభవించెను?' అని అడిగెను (యోహాను 14:22)",
    laterTradition: "Associated with ministry in Syria and Edessa.",
    laterTraditionTe: "సిరియా మరియు ఎడెస్సా ప్రాంతాలలో సువార్త ప్రకటించాడని సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "simon-zealot",
    name: "Simon the Zealot",
    nameTe: "సీమోను (జెలోతే)",
    greekName: "Σίμων ὁ Ζηλωτής / Cananaean (Aramaic: Qan'ana)",
    occupation: "Member of Jewish nationalistic/zealot faction prior to following Jesus",
    occupationTe: "యేసును అనుసరించక మునుపు రోమన్లకు వ్యతిరేకమైన తీవ్ర జాతీయవాది",
    role: "Demonstrated the transforming unity of the kingdom alongside Matthew the Roman tax collector",
    roleTe: "రోమన్లకు పన్ను వసూలు చేసే మత్తయితో కలిసి ఒకే శిష్య బృందంలో పనిచేసి దేవుని సమాధానాన్ని చాటాడు",
    biblicalEvents: "Listed in the Twelve apostolic rosters",
    biblicalEventsTe: "అపొస్తలుల పట్టికలలో పేర్కొనబడ్డాడు",
    laterTradition: "Tradition connects him with missions in Egypt and Persia.",
    laterTraditionTe: "ఈజిప్ట్, పర్షియా ప్రాంతాలలో పరిచర్య చేశాడని సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "judas-iscariot",
    name: "Judas Iscariot",
    nameTe: "యూదా ఇస్కరియోతు",
    greekName: "Ἰούδας Ἰσκαριώτης (Man of Kerioth in Judea)",
    occupation: "Treasurer of the disciples' common purse",
    occupationTe: "శిష్యుల ధన సంచిని భద్రపరిచే కోశాధికారి",
    role: "Betrayed Jesus to the chief priests for thirty silver pieces",
    roleTe: "ముప్పది వెండి నాణేలకు ప్రధాన యాజకులకు యేసును పట్టించినవాడు",
    biblicalEvents: "Objected to Mary's perfume; betrayed Jesus with a kiss in Gethsemane; returned money in remorse; died by suicide (Matthew 27 vs Acts 1)",
    biblicalEventsTe: "బేతనియలో సుగంధ తైలంపై అభ్యంతరం; గెత్సేమనేలో ముద్దుతో ద్రోహం; పశ్చాత్తాపంతో వెండిని విసిరివేసి ఉరివేసుకొనుట (మత్తయి 27 vs అపొ.కా. 1)",
    laterTradition: "A tragic figure in history; Matthew 27:3–10 describes hanging himself, while Acts 1:18–19 describes falling headlong in the Field of Blood (*Akeldama*).",
    laterTraditionTe: "మత్తయి 27 లో ఉరివేసుకున్నట్లు, అపొ.కా. 1 లో రక్తపు పొలములో (అకెల్దమ) తలక్రిందులుగా పడి పగిలినట్లు రాయబడింది.",
    historicalConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: "matthias",
    name: "Matthias (Apostolic Successor)",
    nameTe: "మత్తీయ (యూదా స్థానంలో ఎన్నుకోబడిన అపొస్తలుడు)",
    greekName: "Μαθθίας",
    occupation: "Companion from John's baptism to the Ascension",
    occupationTe: "బాప్తిస్మమిచ్చు యోహాను కాలం నుండి పరలోకారారోహణ వరకు తోడున్న శిష్యుడు",
    role: "Elected by lot in Acts 1:15–26 to fill the vacant place of Judas Iscariot",
    roleTe: "అపొస్తలుల కార్యములు 1 లో యూదా స్థానంలో చీట్ల ద్వారా ఎన్నుకోబడ్డాడు",
    biblicalEvents: "Selected alongside Joseph Barsabbas (Justus)",
    biblicalEventsTe: "యోసేపు బర్సబ్బాతో పాటు ప్రతిపాదించబడి ఎన్నుకోబడ్డాడు",
    laterTradition: "Tradition places his ministry in Judea and Ethiopia.",
    laterTraditionTe: "యూదయ మరియు ఇథియోపియాలో సువార్త ప్రకటించాడని సంప్రదాయం.",
    historicalConfidence: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "paul",
    name: "Paul (Saul of Tarsus)",
    nameTe: "పౌలు (తార్సు సౌలు - అన్యజనులకు అపొస్తలుడు)",
    greekName: "Παῦλος / Σαῦλος (Apostle to the Gentiles)",
    occupation: "Pharisee, tentmaker, Roman citizen from Cilicia",
    occupationTe: "పరిసయ్యుడు, డేరాలు కుట్టేవాడు, రోమన్ పౌరసత్వం గల తార్సు వాసి",
    role: "Not of the original Twelve; called by the Risen Christ on Damascus Road",
    roleTe: "పన్నెండుమందిలో ఒకడు కాకపోయినా, పునరుత్థానుడైన క్రీస్తు చేత దమస్కు మార్గంలో ప్రత్యక్షంగా పిలువబడ్డాడు",
    biblicalEvents: "Conversion (Acts 9); 3 missionary journeys; Jerusalem Council (Acts 15); authored 13 NT epistles; trial before Caesar in Rome",
    biblicalEventsTe: "దమస్కు దర్శనం (అపొ.కా. 9); 3 గొప్ప మిషనరీ యాత్రలు; యెరూషలేము కౌన్సిల్; 13 పత్రికల రచన; రోమ్ లో విచారణ",
    laterTradition: "Martyred in Rome under Nero c. 64–67 CE by beheading (Clement of Rome, Eusebius).",
    laterTraditionTe: "క్రీ.శ. 64–67 లో నీరో చక్రవర్తి చేత రోమ్ నగరంలో శిరచ్ఛేదం చేయబడి అమరమరణం పొందాడని చారిత్రక ఆధారాలు.",
    historicalConfidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  }
];

// 4. Women in the Ministry of Jesus
export const WOMEN_IN_MINISTRY = [
  {
    name: "Mary (Mother of Jesus)",
    nameTe: "మరియ (యేసు తల్లి)",
    role: "Mother, disciple, present at the cross and in the Upper Room at Pentecost",
    roleTe: "యేసు తల్లి, ప్రథమ శిష్యురాలు, సిలువ యొద్ద మరియు పెంతెకొస్తు మేడగది ప్రార్థనలో పాలుపంచుకున్నది",
    scriptures: "Luke 1–2, John 2:1–11; 19:25–27, Acts 1:14",
    status: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    name: "Mary Magdalene",
    nameTe: "మగ్దలేనే మరియ",
    role: "Healed of seven demons; patron and supporter of ministry; primary witness to the Resurrection ('Apostle to the Apostles')",
    roleTe: "ఏడు దయ్యముల నుండి విడిపింపబడినది; పరిచర్యకు ఆర్థిక సహాయకురాలు; పునరుత్థాన తొలి సాక్షి ('అపొస్తలులకే అపొస్తలురాలు')",
    scriptures: "Luke 8:1–3, Matthew 27:56; 28:1–10, Mark 16:1–9, John 20:1–18",
    status: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    name: "Martha & Mary of Bethany",
    nameTe: "మార్త & బేతనియ మరియ",
    role: "Sisters of Lazarus; hosts of Jesus; Mary anointed Jesus' feet with expensive nard; Martha confessed Jesus as Christ and Resurrection",
    roleTe: "లాజరు సహోదరీలు; యేసుకు ఆతిథ్యమిచ్చినవారు; మరియ విలువైన అత్తరుతో పాదాలను అభిషేకించింది; మార్త యేసును పునరుత్థాన కర్తగా ఒప్పుకుంది",
    scriptures: "Luke 10:38–42, John 11:1–44; 12:1–8",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    name: "Joanna (Wife of Chuza)",
    nameTe: "యొహన్నా (హేరోదు గృహనిర్వాహకుడైన కూజా భార్య)",
    role: "Prominent court patron who funded Jesus' itinerant ministry out of her private means; witness to the empty tomb",
    roleTe: "హేరోదు అంతిపస్ ఆస్థాన అధికారి భార్య; తన స్వంత ఆస్తితో యేసు పరిచర్యకు పోషణ కల్పించింది; ఖాళీ సమాధి సాక్షి",
    scriptures: "Luke 8:3; 24:10",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    name: "Susanna & Other Women Supporters",
    nameTe: "శూసన్న & ఇతర మహిళా శిష్యురాండ్రు",
    role: "Faithful Galilean women who traveled with Jesus and supported the disciples financially and domestically",
    roleTe: "గలిలయ నుండి యేసును అనుసరించి పరిచర్యలో తోడ్పడిన భక్తిగల స్త్రీలు",
    scriptures: "Luke 8:3, Mark 15:40–41",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    name: "Salome (Mother of James & John)",
    nameTe: "సలోమే (జెబెదయి కుమారుల తల్లి)",
    role: "Follower from Galilee; present at the crucifixion and brought spices to the tomb on resurrection morning",
    roleTe: "గలిలయ అనుచరురాలు; కల్వరి సిలువ యొద్ద నిలబడినది మరియు పునరుత్థాన ఉదయాన సమాధి వద్దకు సుగంధ ద్రవ్యాలు తెచ్చినది",
    scriptures: "Mark 15:40; 16:1, Matthew 20:20–28",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    name: "The Samaritan Woman at the Well (Photini in tradition)",
    nameTe: "సమరయ స్త్రీ (యాకోబు బావి)",
    role: "Engaged in theological dialogue with Jesus on worship; became effective evangelist to her city Sychar",
    roleTe: "ఆరాధనపై యేసుతో లోతైన సంభాషణ జరిపినది; సుఖారు నగరమంతటికీ సువార్త ప్రకటించిన తొలి సువార్తికురాలు",
    scriptures: "John 4:1–42",
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  }
];

// 5. Parables of Jesus Explorer
export const PARABLES_DATA = [
  {
    id: "good-samaritan",
    title: { en: "The Good Samaritan", te: "మంచి సమరయనుని ఉపమానం" },
    source: "Luke 10:25–37",
    characters: "Wounded traveler, Priest, Levite, Samaritan innkeeper",
    charactersTe: "గాయపడిన ప్రయాణికుడు, యాజకుడు, లేవీయుడు, మంచి సమరయనుడు, సత్రపు యజమాని",
    context: {
      en: "Jews and Samaritans shared centuries of ethnic and religious hostility. Priests feared ritual impurity from corpses.",
      te: "యూదులకు, సమరయనులకు శతాబ్దాల జాతి వైరం ఉండేది. శవాన్ని ముట్టుకుంటే అపవిత్రత కలుగుతుందని యాజకుడు, లేవీయుడు తొలగిపోయారు."
    },
    story: {
      en: "A man beaten by bandits on the dangerous Jericho road is ignored by a priest and a Levite. A despised Samaritan bandages his wounds, puts him on his donkey, brings him to an inn, and pays for his care.",
      te: "యెరూషలేము నుండి యెరికోకు వెళ్తున్న ఒక వ్యక్తిని దొంగలు కొట్టి గాయపరచి వదిలివెళ్లారు. ఒక యాజకుడు, లేవీయుడు చూచి తొలగిపోయారు. అయితే అసహ్యించుకోబడిన సమరయనుడు కనికరపడి గాయాలు కట్టి, తన గాడిదపై సత్రమునకు తీసుకెళ్లి ఖర్చులు చెల్లించి పోషించాడు."
    },
    themes: {
      en: "Universal compassion; breaking racial/religious boundaries; active love of neighbor.",
      te: "సార్వత్రిక కనికరం; కుల, మత సరిహద్దులను అధిగమించుట; పొరుగువానిని ప్రాణసమానంగా ప్రేమించుట."
    }
  },
  {
    id: "prodigal-son",
    title: { en: "The Prodigal Son (The Loving Father)", te: "తప్పిపోయిన కుమారుని ఉపమానం" },
    source: "Luke 15:11–32",
    characters: "Father, Younger Son, Elder Son",
    charactersTe: "తండ్రి, చిన్న కుమారుడు, పెద్ద కుమారుడు",
    context: {
      en: "Demanding inheritance while the father lived was equivalent to wishing him dead. Feeding pigs was the ultimate degradation for a Jew.",
      te: "తండ్రి బ్రతికుండగానే ఆస్తిలో వాటా అడగడం తీవ్ర అవమానం. పందులను మేపడం యూదులకు అత్యంత అసహ్యకరమైన పరిస్థితి."
    },
    story: {
      en: "A younger son wastes his inheritance in reckless living and starves during a famine. He returns home hoping to be hired as a servant. The father runs, embraces him, and throws a celebration, while the dutiful elder brother harbors bitter resentment.",
      te: "చిన్న కుమారుడు తన ఆస్తిని దుర్వ్యాపారము వలన పాడుచేసి, కరవులో పందుల పొట్టు తినే స్థితికి దిగజారాడు. కూలివానిగా ఉండాలని తిరిగి రాగా, తండ్రి దూరమునుండి చూచి పరుగెత్తుకొని వచ్చి కౌగిలించుకుని ముద్దుపెట్టుకుని ఉత్తమ వస్త్రము, ఉంగరము ఇచ్చి విందు చేశాడు."
    },
    themes: {
      en: "Unconditional divine grace; joyous celebration of repentance; warning against legalistic self-righteousness.",
      te: "దేవుని ఉచిత కృప; పాపి మారుమనస్సు పొందినప్పుడు పరలోక ఆనందం; స్వనీతి గల పెద్దల కపటభక్తికి హెచ్చరిక."
    }
  },
  {
    id: "the-sower",
    title: { en: "The Sower and the Soils", te: "విత్తువాని ఉపమానం" },
    source: "Matthew 13:1–23, Mark 4:1–20, Luke 8:4–15",
    characters: "Sower, Seeds, Four types of soil",
    charactersTe: "విత్తువాడు, విత్తనములు, నాలుగు రకాల నేలలు",
    context: {
      en: "1st-century Galilean broadcast sowing often preceded plowing, so seeds fell on varied terrain.",
      te: "మొదటి శతాబ్దపు గలిలయ వ్యవసాయంలో విత్తనాలు వెదజల్లిన తర్వాత దున్నేవారు; కాబట్టి వివిధ నేలలపై విత్తనాలు పడేవి."
    },
    story: {
      en: "Seed falls along the path (eaten by birds), on rocky ground (withers without deep root), among thorns (choked by worldly cares), and on good soil (producing 30, 60, 100-fold harvest).",
      te: "విత్తనములు త్రోవ ప్రక్కన (పక్షులు తినివేసెను), రాతి నేలపై (వేరు లేక ఎండిపోయెను), ముండ్ల పొదలలో (ఐశ్వర్య భోగములచేత అణచివేయబడెను), మరియు మంచి నేలలో (ముప్పదంతలు, అరువదంతలు, నూరంతలుగా ఫలించెను)."
    },
    themes: {
      en: "Human heart readiness; hearing and obeying God's Word; spiritual fruitfulness.",
      te: "హృదయ స్థితి; దేవుని వాక్యమును గ్రహించి ఫలించుట; ఆత్మీయ సమృద్ధి."
    }
  },
  {
    id: "lost-sheep-and-coin",
    title: { en: "The Lost Sheep and Lost Coin", te: "తప్పిపోయిన గొఱ్ఱె & పోయిన వెండి నాణెం" },
    source: "Luke 15:1–10, Matthew 18:12–14",
    characters: "Shepherd, 100 sheep; Woman, 10 silver coins",
    charactersTe: "గొఱ్ఱెల కాపరి, 100 గొఱ్ఱెలు; స్త్రీ, 10 వెండి నాణెములు",
    context: {
      en: "Ten silver drachmas often constituted a Jewish bride's wedding dowry headdress (*semedi*).",
      te: "పది వెండి నాణెములు ఆ కాలంలో యూదా స్త్రీ వివాహ కట్నపు ఆభరణముగా ఉండేవి."
    },
    story: {
      en: "A shepherd leaves 99 sheep in the open pasture to search diligently for one lost sheep until he finds it. A woman lights a lamp and sweeps her house until she finds one lost coin, calling friends to celebrate.",
      te: "కాపరి 99 గొఱ్ఱెలను అరణ్యములో విడిచి తప్పిపోయిన ఒక గొఱ్ఱెను వెదకి భుజముపై వేసుకొని ఆనందించెను. స్త్రీ దీపము వెలిగించి ఇల్లు ఊడ్చి పోయిన నాణెమును కనుగొని ఇరుగుపొరుగువారితో సంతోషించెను."
    },
    themes: {
      en: "God actively pursues every lost individual; immense value of a single human soul.",
      te: "నశించిన ప్రతి ఆత్మను వెదకి రక్షించే దేవుని ప్రేమ; ఒక్క ఆత్మ మారుమనస్సు పొందినప్పుడు పరలోక ఆనందం."
    }
  },
  {
    id: "talents",
    title: { en: "The Talents (Pounds / Minas)", te: "తలాంతుల ఉపమానం" },
    source: "Matthew 25:14–30, Luke 19:11–27",
    characters: "Master, Three Servants (given 5, 2, and 1 talent)",
    charactersTe: "యజమాని, ముగ్గురు దాసులు (5, 2, 1 తలాంతులు పొందినవారు)",
    context: {
      en: "A single talent of silver weighed ~34 kg, equal to roughly 6,000 denarii (20 years of daily laborer wages).",
      te: "ఒక తలాంతు వెండి సుమారు 34 కిలోల బరువు; అది ఒక సామాన్య కూలివాని 20 సంవత్సరాల సంపాదనతో సమానం."
    },
    story: {
      en: "A master entrusts immense resources to three servants according to their ability. Two invest and double their funds. The third buries his talent out of fear and sloth, receiving severe condemnation upon the master's return.",
      te: "యజమాని తన దాసుల సామర్థ్యము చొప్పున 5, 2, 1 తలాంతులను ఇచ్చి దేశాంతరము వెళ్లెను. ఇద్దరు వ్యాపారము చేసి రెట్టింపు చేశారు. మూడవవాడు భయపడి నేలలో దాచిపెట్టగా, యజమాని వచ్చి సోమరియైన దాసుని గద్దించి దండించెను."
    },
    themes: {
      en: "Faithful stewardship of God-given gifts; accountability in the Kingdom of God.",
      te: "దేవుడిచ్చిన తలాంతులను నమ్మకంగా ఉపయోగించుట; అంత్య తీర్పులో లెక్క అప్పగించు బాధ్యత."
    }
  },
  {
    id: "pharisee-and-tax-collector",
    title: { en: "The Pharisee and the Tax Collector", te: "పరిసయ్యుడు మరియు సుంకరి ఉపమానం" },
    source: "Luke 18:9–14",
    characters: "Pharisee, Tax Collector in the Temple",
    charactersTe: "దేవాలయములో ప్రార్థించిన పరిసయ్యుడు మరియు సుంకరి",
    context: {
      en: "Pharisees were revered for strict piety; tax collectors were despised as traitorous Roman extortioners.",
      te: "పరిసయ్యులు సమాజంలో గౌరవనీయులు; సుంకరులు రోమన్ల తరపున పనిచేసే ద్రోహులుగా అసహ్యించుకోబడేవారు."
    },
    story: {
      en: "The Pharisee stood and prayed about his fasting and tithing, thanking God he was not like other sinners. The tax collector stood at a distance, beat his chest, and cried: 'God, have mercy on me, a sinner!' Jesus said the tax collector went home justified.",
      te: "పరిసయ్యుడు నిలబడి తాను ఉపవాసముండుట, దశమభాగము ఇచ్చుటను బట్టి గర్వించి ప్రార్థించెను. సుంకరి దూరముగా నిలబడి కన్నులెత్తుటకైనను ధైర్యము చాలక రొమ్ము కొట్టుకొనుచు: 'దేవా, పాపినైన నన్ను కరుణించుము' అని ప్రార్థించెను. ఈ సుంకరియే నీతిమంతుడిగా తీర్చబడి వెళ్లెనని యేసు సెలవిచ్చెను."
    },
    themes: {
      en: "Genuine humility before God; justification by grace through repentance, not self-merit.",
      te: "దేవుని సన్నిధిలో నిజమైన దీనత్వము; స్వనీతి వలన కాక పశ్చాత్తాపముతో కూడిన కృప ద్వారానే రక్షణ."
    }
  }
];

// 6. Miracles of Jesus Explorer
export const MIRACLES_DATA = [
  {
    id: "water-to-wine",
    name: "Turning Water into Wine at Cana",
    nameTe: "కానా వివాహములో నీటిని ద్రాక్షారసముగా మార్చుట",
    category: "Nature",
    categoryTe: "ప్రకృతి అద్భుతం",
    location: "Cana in Galilee (Khirbet Qana / Kafr Kanna)",
    locationTe: "గలిలయలోని కానా",
    scripture: "John 2:1–11",
    people: "Jesus, Mary, Disciples, Wedding Hosts, Servants",
    peopleTe: "యేసు, మరియ, శిష్యులు, పెండ్లి పెద్ద, దాసులు",
    narrative: {
      en: "At a village wedding feast in Cana, the wine ran out. Jesus instructed the servants to fill six massive stone jars used for ceremonial washing with water (each holding 20–30 gallons). When drawn, the water had become the finest vintage wine.",
      te: "కానాలో ఒక వివాహములో ద్రాక్షారసము అయిపోగా, యూదుల శుద్ధీకరణ కొరకు ఉంచిన ఆరు రాతి బానలలో నీళ్లు నింపమని యేసు దాసులకు ఆజ్ఞాపించారు. ముంచి పెండ్లి పెద్ద వద్దకు తీసుకువెళ్లగా అది శ్రేష్ఠమైన ద్రాక్షారసముగా మారెను."
    },
    significance: {
      en: "The first miraculous sign (*archē tōn sēmeiōn*) revealing His glory and inaugurating the Messianic wedding banquet of the New Covenant.",
      te: "యేసు తన మహిమను ప్రత్యక్షపరచిన మొదటి అద్భుత సూచక్రియ; మెస్సీయ రాకడ ద్వారా కలుగు నూతన నిబంధన ఆనందాన్ని సూచిస్తుంది."
    },
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "calming-the-storm",
    name: "Calming the Tempest on the Sea of Galilee",
    nameTe: "గలిలయ సముద్ర తుఫానును నిమ్మళింపజేయుట",
    category: "Nature",
    categoryTe: "ప్రకృతి అద్భుతం",
    location: "Sea of Galilee (Lake Kinneret)",
    locationTe: "గలిలయ సముద్రము",
    scripture: "Mark 4:35–41, Matthew 8:23–27, Luke 8:22–25",
    people: "Jesus, Disciples",
    peopleTe: "యేసు, శిష్యులు",
    narrative: {
      en: "A sudden violent squall swept down Mount Hermon into the basin of the Sea of Galilee, swamping the fishing boat while Jesus slept on a cushion. Woken by terrified disciples, Jesus rebuked the wind and waves: 'Quiet! Be still!' Instantly, dead calm fell.",
      te: "గలిలయ సముద్రములో పెనుతుఫాను రేగి పడవ మునిగిపోయే స్థితిలో ఉండగా యేసు నిద్రించుచుండెను. శిష్యులు భయపడి లేపగా, యేసు గాలిని, సముద్రమును గద్దించి 'నిశ్శబ్దమై ఊరకుండుము' అనగా గొప్ప నిమ్మళము కలిగెను."
    },
    significance: {
      en: "Demonstrates sovereign divine authority over chaotic nature, echoing Psalm 107:29 ('He stilled the storm to a whisper').",
      te: "కీర్తన 107:29 ప్రకారం సృష్టి శక్తులపై దైవిక సార్వభౌమాధికారమును ప్రత్యక్షపరచుట."
    },
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "feeding-5000",
    name: "Feeding the Five Thousand",
    nameTe: "ఐదు రొట్టెలు, రెండు చేపలతో ఐదువేలమందిని పోషించుట",
    category: "Nature",
    categoryTe: "ప్రకృతి అద్భుతం",
    location: "Bethsaida / Northeast Shore of Sea of Galilee",
    locationTe: "బేత్సయిదా సమీప మైదానం",
    scripture: "Matthew 14:13–21, Mark 6:30–44, Luke 9:10–17, John 6:1–15",
    people: "Jesus, Twelve Apostles, Boy with lunch, 5,000+ crowd",
    peopleTe: "యేసు, అపొస్తలులు, ఆహారము గల బాలుడు, 5000 మంది పురుషులు",
    narrative: {
      en: "In a remote location, evening came upon a massive crowd listening to Jesus. Taking five small barley loaves and two fish from a boy, Jesus blessed and broke them. The food multiplied to feed 5,000 men plus women and children, with 12 basketfuls left over.",
      te: "అరణ్య ప్రదేశములో ఉన్న అపార జనసమూహమును చూచి యేసు కనికరపడి, ఒక బాలుని వద్దనున్న ఐదు యవల రొట్టెలను, రెండు చేపలను ఆశీర్వదించి విరిచి ఇవ్వగా 5000 మంది పురుషులు కాక స్త్రీలు, పిల్లలు తిని తృప్తిపొందారు; మిగిలిన ముక్కలు 12 గంపలు ఎత్తారు."
    },
    significance: {
      en: "The only miracle recorded in all four canonical Gospels; portrays Jesus as the true Bread of Life and the Prophet greater than Moses feeding manna.",
      te: "నాలుగు సువార్తలలోనూ నమోదైన ఏకైక అద్భుతం; మోషే కాలపు మన్నా కంటే శ్రేష్ఠమైన పరలోక జీవాహారము తానేనని చాటుట."
    },
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "healing-the-blind-bartimaeus",
    name: "Healing of Blind Bartimaeus at Jericho",
    nameTe: "యెరికోలో గ్రుడ్డి బర్తిమయికి దృష్టినిచ్చుట",
    category: "Healing",
    categoryTe: "స్వస్థత అద్భుతం",
    location: "Jericho City Gate",
    locationTe: "యెరికో పట్టణ ద్వారం",
    scripture: "Mark 10:46–52, Luke 18:35–43",
    people: "Jesus, Bartimaeus, Crowds",
    peopleTe: "యేసు, బర్తిమయి, జనసమూహం",
    narrative: {
      en: "As Jesus left Jericho on His final journey to Jerusalem, a blind beggar named Bartimaeus shouted relentlessly: 'Jesus, Son of David, have mercy on me!' Casting off his cloak, he came to Jesus and asked to receive his sight. Jesus said: 'Go, your faith has healed you.'",
      te: "యెరికో నుండి యేసు వెళ్లుచుండగా త్రోవ ప్రక్కన భిక్షమెత్తుకొనుచున్న బర్తిమయి 'దావీదు కుమారుడా, యేసూ, నన్ను కరుణించుము' అని కేకలు వేసెను. యేసు పిలువగా తన పైవస్త్రమును పడవేసి వచ్చి 'ప్రభువా, నాకు దృష్టి కలుగునట్లు చేయుము' అనగా, యేసు 'నీ విశ్వాసము నిన్ను స్వస్థపరచెను' అని దృష్టిని అనుగ్రహించెను."
    },
    significance: {
      en: "Fulfills Isaiah 35:5 ('Then the eyes of the blind will be opened'); models persistence in faith.",
      te: "యెషయా 35:5 ప్రవచన నెరవేర్పు; ఆత్మీయ దృష్టి మరియు విశ్వాస పట్టుదలకు నిదర్శనం."
    },
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  },
  {
    id: "raising-lazarus",
    name: "Raising Lazarus of Bethany from the Dead",
    nameTe: "బేతనియలో నాలుగు దినములు సమాధిలో ఉన్న లాజరును లేపుట",
    category: "Raising the Dead",
    categoryTe: "పునరుత్థాన అద్భుతం",
    location: "Bethany (near Jerusalem)",
    locationTe: "బేతనియ గ్రామం",
    scripture: "John 11:1–44",
    people: "Jesus, Lazarus, Martha, Mary, Mourners, Disciples",
    peopleTe: "యేసు, లాజరు, మార్త, మరియ, యూదులు",
    narrative: {
      en: "Lazarus died and had been in a rock tomb for four days. Jesus wept with Martha and Mary, declared 'I am the resurrection and the life,' ordered the stone removed, and called with a loud voice: 'Lazarus, come out!' Lazarus emerged wrapped in grave cloths.",
      te: "లాజరు చనిపోయి సమాధిలో నాలుగు దినములైన తర్వాత యేసు బేతనియకు వచ్చి కన్నీరు కార్చారు. 'పునరుత్థానమును జీవమును నేనే' అని ప్రకటించి, రాయిని తీయించి 'లాజరూ, బయటికి రమ్ము' అని కేకవేయగా, సమాధి బట్టలతో కట్టబడిన లాజరు సజీవుడై బయటకు వచ్చెను."
    },
    significance: {
      en: "The climactic seventh sign in the Gospel of John, pointing directly to Jesus' own impending resurrection and sealing the authorities' resolve to execute Him.",
      te: "యోహాను సువార్తలోని ఏడవ పరాకాష్ట అద్భుత సూచక్రియ; యేసు తన స్వంత పునరుత్థానానికి పూర్వఛాయగా లాజరును లేపారు."
    },
    status: SOURCE_CONFIDENCE.BIBLICAL_ACCOUNT
  }
];

// 7. The Seven Sayings from the Cross
export const SEVEN_SAYINGS_DATA = [
  {
    order: 1,
    sayingEn: "Father, forgive them, for they know not what they do.",
    sayingTe: "తండ్రీ, వీరేమి చేయుచున్నారో వీరెరుగరు గనుక వీరిని క్షమించుము.",
    source: "Luke 23:34",
    sourceGospel: "Gospel of Luke only",
    sourceGospelTe: "లూకా సువార్త మాత్రమే",
    context: {
      en: "Spoken as Roman soldiers were driving the nails and casting lots for His seamless tunic.",
      te: "రోమన్ సైనికులు సిలువపై మేకులు కొడుతూ వస్త్రములపై చీట్లు వేస్తున్నప్పుడు పలికిన అద్వితీయ క్షమా ప్రార్థన."
    },
    theologicalDepth: {
      en: "Fulfills Isaiah 53:12 ('He made intercession for the transgressors') and embodies the highest command of loving enemies.",
      te: "యెషయా 53:12 లోని 'అతిక్రమము చేయువారి కొరకు ఆయన విజ్ఞాపనము చేసెను' అను లేఖన నెరవేర్పు; శత్రుప్రేమకు అత్యున్నత నిదర్శనం."
    }
  },
  {
    order: 2,
    sayingEn: "Truly I tell you, today you will be with me in paradise.",
    sayingTe: "నేడు నీవు నాతోకూడ పరదేశిలో ఉందువు అని నిశ్చయముగా నీతో చెప్పుచున్నాను.",
    source: "Luke 23:43",
    sourceGospel: "Gospel of Luke only",
    sourceGospelTe: "లూకా సువార్త మాత్రమే",
    context: {
      en: "Addressed to the repentant thief dying alongside Jesus who acknowledged Jesus' innocence and kingship.",
      te: "యేసుతో పాటు సిలువ వేయబడి తన తప్పును ఒప్పుకుని, యేసును రాజుగా విశ్వసించిన దొంగకు ఇచ్చిన రక్షణ వాగ్దానం."
    },
    theologicalDepth: {
      en: "Demonstrates that salvation is granted by grace through faith in the final moments of life without prior ritual works.",
      te: "జీవితపు చివరి క్షణాలలోనైనా నిజమైన పశ్చాత్తాపముతో విశ్వసించువారికి ఉచిత రక్షణ దొరుకుతుందని చాటుట."
    }
  },
  {
    order: 3,
    sayingEn: "Woman, behold your son... Behold your mother.",
    sayingTe: "అమ్మా, యిదిగో నీ కుమారుడు... ఇదిగో నీ తల్లి.",
    source: "John 19:26–27",
    sourceGospel: "Gospel of John only",
    sourceGospelTe: "యోహాను సువార్త మాత్రమే",
    context: {
      en: "Spoken to His grieving mother Mary and the beloved disciple John standing near the cross.",
      te: "సిలువ చెంత కన్నీటితో నిలబడిన తల్లియైన మరియకు మరియు ప్రియ శిష్యుడైన యోహానుకు పలికిన కుటుంబ బాధ్యతా వాక్యం."
    },
    theologicalDepth: {
      en: "Exemplifies filial duty and establishes the new spiritual family of God bound by faith rather than mere biology.",
      te: "కుటుంబ బాధ్యతను నెరవేర్చుట మరియు క్రీస్తు రక్తములో ఏర్పడే నూతన ఆత్మీయ కుటుంబ బంధాన్ని స్థాపించుట."
    }
  },
  {
    order: 4,
    sayingEn: "Eloi, Eloi, lema sabachthani? (My God, my God, why have you forsaken me?)",
    sayingTe: "ఎలోయీ, ఎలోయీ, లామా సబక్తానీ? (నా దేవా, నా దేవా, నన్నేల చెయ్యి విడిచితివి?)",
    source: "Mark 15:34, Matthew 27:46",
    sourceGospel: "Gospels of Matthew and Mark (Preserved in original Aramaic)",
    sourceGospelTe: "మత్తయి మరియు మార్కు సువార్తలు (అసలు అరామిక్ భాషలో భద్రపరచబడింది)",
    context: {
      en: "Cried with a loud voice at the ninth hour (3:00 PM) after three hours of supernatural darkness.",
      te: "మధ్యాహ్నం 12 నుండి 3 గంటల వరకు అంధకారము కమ్మిన తర్వాత, తొమ్మిదవ గంటకు తీవ్ర వేదనతో పలికిన కేక."
    },
    theologicalDepth: {
      en: "Direct citation of Psalm 22:1. Expresses the profound weight of bearing human sin (2 Cor 5:21) and the ultimate agony of separation.",
      te: "కీర్తన 22:1 లేఖన ప్రవచన నెరవేర్పు; సమస్త మానవాళి పాపభారాన్ని భరించినప్పుడు అనుభవించిన గంభీర వేదన."
    }
  },
  {
    order: 5,
    sayingEn: "I thirst.",
    sayingTe: "నేను దప్పిగొనుచున్నాను.",
    source: "John 19:28",
    sourceGospel: "Gospel of John only",
    sourceGospelTe: "యోహాను సువార్త మాత్రమే",
    context: {
      en: "Spoken knowing that Scripture was being fulfilled; a soldier offered a sponge soaked in sour wine (*posca*).",
      te: "లేఖనములు నెరవేరునట్లు పలికెను; సైనికులు చిరకతో నిండిన స్పంజిని హిస్సోపు కొమ్మకు తగిలించి నోటికి అందించారు."
    },
    theologicalDepth: {
      en: "Affirms genuine physical humanity and fulfills Psalm 69:21 ('They gave me vinegar for my thirst').",
      te: "యేసుక్రీస్తు యొక్క సంపూర్ణ మానవత్వాన్ని మరియు కీర్తన 69:21 ప్రవచన నెరవేర్పును సూచిస్తుంది."
    }
  },
  {
    order: 6,
    sayingEn: "It is finished. (Tetelestai)",
    sayingTe: "సమాప్తమైనది.",
    source: "John 19:30",
    sourceGospel: "Gospel of John only",
    sourceGospelTe: "యోహాను సువార్త మాత్రమే",
    context: {
      en: "A triumphant cry of completed redemption; Greek *tetelestai* was an ancient commercial term stamped on receipts meaning 'paid in full'.",
      te: "విజయవంతమైన రక్షణ కార్య సంపూర్తి ప్రకటన; గ్రీకు పదం 'టెటెలెస్టై' కి 'రుణము పూర్తిగా చెల్లించబడినది' అని అర్థం."
    },
    theologicalDepth: {
      en: "The atonement for sin and the fulfillment of all Old Testament sacrifices and prophecies are eternally accomplished.",
      te: "పాప విమోచన క్రయధనము సంపూర్ణముగా చెల్లించబడినది; పాత నిబంధన బలులన్నీ శాశ్వతంగా నెరవేర్చబడ్డాయి."
    }
  },
  {
    order: 7,
    sayingEn: "Father, into your hands I commit my spirit.",
    sayingTe: "తండ్రీ, నీ చేతికి నా ఆత్మను అప్పగించుకొనుచున్నాను.",
    source: "Luke 23:46",
    sourceGospel: "Gospel of Luke only",
    sourceGospelTe: "లూకా సువార్త మాత్రమే",
    context: {
      en: "Jesus' final breath before voluntarily giving up His spirit.",
      te: "ప్రాణము విడిచేముందు స్వచ్ఛందంగా తండ్రి చేతులకు తన ఆత్మను సమర్పించిన చివరి వాక్యం."
    },
    theologicalDepth: {
      en: "Quotes Psalm 31:5, the traditional bedtime prayer of Jewish children, expressing supreme peace, trust, and intimate communion with the Father.",
      te: "కీర్తన 31:5 ను ఉటంకిస్తూ, తండ్రిపై గల సంపూర్ణ విశ్వాసాన్ని, ఆత్మీయ శాంతిని ప్రత్యక్షపరచుట."
    }
  }
];

// 8. Interactive Historical Map & Important Locations
export const HISTORICAL_PLACES = [
  {
    id: "nazareth",
    name: "Nazareth",
    nameTe: "నజరేతు",
    region: "Lower Galilee",
    regionTe: "దిగువ గలిలయ",
    coordinates: { lat: 32.7019, lng: 35.2979 },
    significance: {
      en: "Hometown of Mary and Joseph; location of the Annunciation; where Jesus grew up from childhood to adulthood.",
      te: "మరియ, యోసేపుల స్వగ్రామం; గబ్రియేలు దూత ప్రత్యక్షత; యేసు బాల్యం నుండి యవ్వనం వరకు పెరిగిన స్థలం."
    },
    archaeology: {
      en: "Excavations reveal a small 1st-century agricultural hamlet of ~200–400 inhabitants, with stone terraced vineyards, rock-cut cisterns, and 1st-century courtyard dwellings.",
      te: "పురావస్తు త్రవ్వకాలలో 1వ శతాబ్దపు సుమారు 200–400 జనాభా గల రాతి గృహాలు, ద్రాక్షతోటలు మరియు నీటి తొట్టెలు బయల్పడ్డాయి."
    },
    scriptures: "Luke 1:26; 2:39; 4:16, Matthew 2:23; 13:54"
  },
  {
    id: "bethlehem",
    name: "Bethlehem of Judea",
    nameTe: "యూదయలోని బెత్లెహేము",
    region: "Judean Hill Country (6 miles south of Jerusalem)",
    regionTe: "యూదయ కొండ ప్రాంతం (యెరూషలేముకు దక్షిణాన 6 మైళ్లు)",
    coordinates: { lat: 31.7054, lng: 35.2024 },
    significance: {
      en: "Ancestral city of King David; birthplace of Jesus fulfilling Micah 5:2 prophecy.",
      te: "దావీదు మహారాజు స్వస్థలం; మీకా 5:2 ప్రవచన నెరవేర్పుగా యేసుక్రీస్తు జన్మించిన పవిత్ర స్థలం."
    },
    archaeology: {
      en: "The Church of the Nativity, originally commissioned by Emperor Constantine in 327 CE, covers the traditional limestone cave venerated since the 2nd century as the site of Jesus' birth.",
      te: "క్రీ.శ. 327 లో కాన్స్టాంటైన్ చక్రవర్తి నిర్మించిన నటవిటీ చర్చి ప్రాచీన గుహను కప్పియున్నది."
    },
    scriptures: "Micah 5:2, Matthew 2:1–12, Luke 2:1–20"
  },
  {
    id: "jerusalem-temple",
    name: "Jerusalem & Second Temple",
    nameTe: "యెరూషలేము & రెండవ దేవాలయం",
    region: "Judea",
    regionTe: "యూదయ",
    coordinates: { lat: 31.7777, lng: 35.2356 },
    significance: {
      en: "The spiritual and sacrificial heart of 1st-century Judaism; site of Jesus' presentation at 40 days, age-12 debates, Temple cleansing, and Passion Week confrontations.",
      te: "యూదుల మత, ఆరాధనా కేంద్రం; యేసు సమర్పణ, 12వ ఏట పండిత చర్చ, దేవాలయ శుద్ధీకరణ జరిగిన ప్రదేశం."
    },
    archaeology: {
      en: "Massive Herodian ashlar stones (Western Wall), the Southern Steps where Jesus walked, Robinson's Arch, and the warning inscription prohibiting Gentiles from inner courts.",
      te: "హేరోదు కాలపు పశ్చిమ గోడ, దక్షిణ మెట్లు, రాబిన్సన్ ఆర్చ్ మరియు అన్యజనుల ప్రవేశాన్ని నిషేధించే ప్రాచీన రాతి శాసనాలు నేటికీ ఉన్నాయి."
    },
    scriptures: "Luke 2:41–52; 19:45–48, John 2:13–22; 7:14, Matthew 24:1–2"
  },
  {
    id: "capernaum",
    name: "Capernaum (Kfar Nahum)",
    nameTe: "కపెర్నహూము",
    region: "Northwestern Shore of Sea of Galilee",
    regionTe: "గలిలయ సముద్రపు వాయువ్య తీరం",
    coordinates: { lat: 32.8814, lng: 35.5750 },
    significance: {
      en: "The operational center and 'home' city of Jesus' public ministry in Galilee; location of numerous miracles, healings, and the Bread of Life discourse.",
      te: "యేసు గలిలయ పరిచర్యకు ప్రధాన కేంద్రం ('ఆయన స్వపట్టణము'); అనేక అద్భుతాలు మరియు జీవాహార బోధ జరిగిన స్థలం."
    },
    archaeology: {
      en: "Extensive black basalt 1st-century domestic structures, the 1st-century foundation beneath the White Limestone Synagogue, and the octagonal Byzantine memorial over the traditional House of St. Peter.",
      te: "నల్లటి రాతితో కట్టిన 1వ శతాబ్దపు గృహాలు, తెల్లటి సమాజమందిర పునాదులు మరియు పేతురు ఇంటిపై కట్టబడిన చారిత్రక కట్టడాలు లభ్యమయ్యాయి."
    },
    scriptures: "Matthew 4:13; 8:5–17; 9:1–8, Mark 1:21–34; 2:1–12, John 6:24–59"
  },
  {
    id: "sea-of-galilee",
    name: "Sea of Galilee (Lake Kinneret / Tiberias)",
    nameTe: "గలలీ సముద్రము (కిన్నెరెత్ సరస్సు)",
    region: "Galilee / Jordan Rift Valley",
    regionTe: "గలిలయ లోయ",
    coordinates: { lat: 32.8225, lng: 35.5878 },
    significance: {
      en: "Freshwater lake where Jesus called fishermen disciples, walked on water, calmed storms, and taught from boats.",
      te: "యేసు జాలరులైన శిష్యులను పిలిచిన, తుఫానును నిమ్మళింపజేసిన మరియు నీటిపై నడిచిన మంచినీటి సరస్సు."
    },
    archaeology: {
      en: "In 1986, the 'Ancient Galilee Boat' (dated c. 50 BCE – 70 CE) was recovered from the lakebed near Ginosar, showing 1st-century nautical construction.",
      te: "1986 లో సరస్సు తీరంలో బయల్పడిన 1వ శతాబ్దపు ప్రాచీన చెక్క పడవ ('యేసు కాలపు పడవ') నాటి నిర్మాణ శైలిని రుజువు చేస్తోంది."
    },
    scriptures: "Matthew 4:18–22; 14:22–33, Mark 4:35–41, John 21:1–14"
  },
  {
    id: "jordan-river",
    name: "Jordan River (Al-Maghtas / Qasr al-Yahud)",
    nameTe: "యొర్దాను నది (బాప్తిస్మ స్థలం)",
    region: "Judea / Perea border near Jericho",
    regionTe: "యెరికో సమీప యూదయ సరిహద్దు",
    coordinates: { lat: 31.8386, lng: 35.5458 },
    significance: {
      en: "Where John the Baptist preached and baptized Jesus; site of the Holy Spirit's descent and the Father's voice.",
      te: "బాప్తిస్మమిచ్చు యోహాను పరిచర్య చేసిన మరియు యేసుక్రీస్తు బాప్తిస్మము పొందిన పవిత్ర నదీ తీరం."
    },
    archaeology: {
      en: "UNESCO World Heritage excavations on the eastern bank (Jordan) reveal 5th-century Byzantine baptismal pools, churches, and hermits' caves built on Roman-era pilgrimage foundations.",
      te: "యొర్దాను నది తూర్పు ఒడ్డున బైజాంటైన్ బాప్తిస్మ తొట్టెలు మరియు పురాతన తీర్థయాత్రా అవశేషాలు వెలుగుచూశాయి."
    },
    scriptures: "Matthew 3:13–17, Mark 1:9–11, Luke 3:21–22, John 1:28"
  },
  {
    id: "gethsemane",
    name: "Gethsemane & Mount of Olives",
    nameTe: "గెత్సేమనే తోట & ఒలీవల కొండ",
    region: "East of Jerusalem across Kidron Valley",
    regionTe: "యెరూషలేముకు తూర్పున కిద్రోను లోయ ఆవల",
    coordinates: { lat: 31.7794, lng: 35.2402 },
    significance: {
      en: "Site of Jesus' agony in prayer, betrayal by Judas with a kiss, arrest, weeping over Jerusalem, and the Ascension.",
      te: "యేసు ఆత్మవేదన ప్రార్థన, యూదా ద్రోహం, బంధింపబడుట మరియు పరలోకారారోహణ జరిగిన స్థలం."
    },
    archaeology: {
      en: "Ancient gnarled olive trees with root systems dating back centuries, adjacent to 1st-century olive press caves and Byzantine church mosaics (Church of All Nations).",
      te: "శతాబ్దాల నాటి ప్రాచీన ఒలీవ వృక్షాలు మరియు 1వ శతాబ్దపు గానుగ గుహల అవశేషాలు."
    },
    scriptures: "Matthew 26:36–56, Luke 22:39–53, Acts 1:9–12"
  },
  {
    id: "golgotha-calvary",
    name: "Golgotha / Calvary & Holy Sepulchre",
    nameTe: "గొల్గొతా / కల్వరి & సమాధి స్థలం",
    region: "Outside 1st-Century Northwest City Walls of Jerusalem",
    regionTe: "1వ శతాబ్దపు యెరూషలేము గోడల వెలుపల",
    coordinates: { lat: 31.7785, lng: 35.2296 },
    significance: {
      en: "Site of Jesus' Crucifixion, death, burial in Joseph of Arimathea's rock tomb, and glorious Resurrection.",
      te: "యేసు సిలువ వేయబడి మరణించిన, సమాధి చేయబడిన మరియు మూడవ దినమున లేచిన అత్యంత పవిత్ర స్థలం."
    },
    archaeology: {
      en: "The Church of the Holy Sepulchre contains an ancient limestone quarry, 1st-century rock-cut tombs (including Kokhim burial niches), and the rock spur of Golgotha.",
      te: "హోలీ సెపల్కర్ దేవాలయంలో 1వ శతాబ్దపు రాతి క్వారీ మరియు ప్రాచీన రాతి సమాధుల అవశేషాలు ఉన్నాయి."
    },
    scriptures: "Matthew 27:33–60; 28:1–10, John 19:17–42; 20:1–18"
  },
  {
    id: "caesarea-philippi",
    name: "Caesarea Philippi (Banias)",
    nameTe: "కైసరయ ఫిలిప్పి (బనియాస్)",
    region: "Northern Golan / Mount Hermon Foothills",
    regionTe: "ఉత్తర హెర్మోను కొండ దిగువ",
    coordinates: { lat: 33.2483, lng: 35.6933 },
    significance: {
      en: "Near pagan shrines to Pan, Peter made his foundational confession: 'You are the Christ, the Son of the living God.'",
      te: "పేతురు 'నీవు సజీవుడైన దేవుని కుమారుడవైన క్రీస్తువు' అని విశ్వాస ప్రకటన చేసిన స్థలం."
    },
    archaeology: {
      en: "Greco-Roman sanctuary cliffs of Pan, natural springs forming headwaters of the Jordan, and ruins of Herod Philip's royal administrative buildings.",
      te: "ప్రాచీన గ్రీకు-రోమన్ విగ్రహాల గుహలు మరియు హేరోదు ఫిలిప్పు రాజభవన అవశేషాలు."
    },
    scriptures: "Matthew 16:13–20, Mark 8:27–30"
  },
  {
    id: "bethany",
    name: "Bethany (Al-Eizariya)",
    nameTe: "బేతనియ",
    region: "Eastern slope of Mount of Olives (2 miles from Jerusalem)",
    regionTe: "ఒలీవల కొండ తూర్పు వైపు (యెరూషలేముకు 2 మైళ్లు)",
    coordinates: { lat: 31.7708, lng: 35.2597 },
    significance: {
      en: "Home of Mary, Martha, and Lazarus; site of the raising of Lazarus; where Mary anointed Jesus' feet with costly nard.",
      te: "మార్త, మరియ, లాజరుల గృహం; లాజరు పునరుత్థానం మరియు మరియ అత్తరుతో అభిషేకించిన స్థలం."
    },
    archaeology: {
      en: "The ancient Tomb of Lazarus cut into natural limestone with 24 stone steps down into the inner burial chamber.",
      te: "లాజరు ప్రాచీన రాతి సమాధి మరియు ప్రాచీన క్రైస్తవ ఆరాధనా మందిరాల అవశేషాలు."
    },
    scriptures: "John 11:1–44; 12:1–8, Luke 10:38–42"
  }
];

// 9. Myth, Tradition & History Comparative Matrix
export const MYTH_VS_HISTORY = [
  {
    topic: "Jesus' Physical Appearance",
    topicTe: "యేసుక్రీస్తు రూపం / ఛాయారూపం",
    biblicalText: {
      en: "The Gospels provide zero physical descriptions of Jesus' facial features, eye color, or height. Isaiah 53:2 prophetically states: 'He had no beauty or majesty to attract us to him.'",
      te: "సువార్తలలో యేసు ముఖ కవళికలు, కంటి రంగు లేదా ఎత్తు గురించి ఎలాంటి శారీరక వర్ణన లేదు. యెషయా 53:2 లో 'మనమతని చూచి ఆకర్షింపబడునట్లుగా అతడు సురూపమైనను సౌందర్యమైనను గలవాడు కాడు' అని ఉంది."
    },
    churchTradition: {
      en: "Later Byzantine and European art depicted Jesus with long flowing light brown/blond hair, blue/hazel eyes, pale skin, and European robes.",
      te: "తర్వాతి యూరోపియన్ మరియు బైజాంటైన్ చిత్రకళలో పొడవాటి జుట్టు, తెల్లటి చర్మం, నీలి కళ్లతో కూడిన రూపం ప్రాచుర్యం పొందింది."
    },
    historicalReality: {
      en: "As a 1st-century Semitic Galilean builder, Jesus likely had olive-brown Middle Eastern skin, dark brown eyes, short cropped dark hair (per 1 Cor 11:14), a trimmed beard, and a weathered, muscular physique from manual labor.",
      te: "1వ శతాబ్దపు యూదా శిల్పిగా యేసు మధ్యప్రాచ్య గోధుమరంగు చర్మం, నల్లని కళ్లు, పొట్టి జుట్టు (1 కొరింథీ 11:14 ప్రకారం), గడ్డం మరియు శారీరక కష్టం వలన బలమైన శరీరాకృతి కలిగి ఉండేవారు."
    },
    confidence: SOURCE_CONFIDENCE.SCHOLARLY_RECONSTRUCTION
  },
  {
    topic: "Date of Jesus' Birth (Christmas December 25)",
    topicTe: "యేసు జనన తేదీ (డిసెంబర్ 25)",
    biblicalText: {
      en: "The Gospels do not specify a calendar date or month. Luke mentions shepherds keeping watch in fields at night, which typically occurred between spring lambing and autumn.",
      te: "సువార్తలు ఖచ్చితమైన తేదీని లేదా నెలను పేర్కొనలేదు. లూకాలో గొఱ్ఱెల కాపరులు రాత్రివేళ పొలములో కావలియున్నారని ఉంది."
    },
    churchTradition: {
      en: "December 25 was officially adopted by the Roman Church under Emperor Constantine in the 4th century (c. 336 CE), possibly Christianizing the winter solstice or calculating nine months after the Annunciation (March 25).",
      te: "క్రీ.శ. 4వ శతాబ్దంలో కాన్స్టాంటైన్ కాలంలో డిసెంబర్ 25 ను అధికారికంగా దత్తత చేసుకున్నారు (మార్చి 25 ప్రకటన దినానికి 9 నెలల తర్వాత)."
    },
    historicalReality: {
      en: "The exact day is historically unknown. Historians place the year around 6–4 BCE based on the death of King Herod in 4 BCE and the census of Quirinius.",
      te: "ఖచ్చితమైన రోజు చారిత్రకంగా తెలియదు. హేరోదు మరణం (క్రీ.పూ. 4) ఆధారంగా క్రీ.పూ. 6 నుండి 4 మధ్య యేసు జననం జరిగిందని చరిత్రకారులు అంచనా వేస్తారు."
    },
    confidence: SOURCE_CONFIDENCE.UNCERTAIN_DISPUTED
  },
  {
    topic: "Travel to India / Tibet / Britain During 'Hidden Years'",
    topicTe: "అజ్ఞాత సంవత్సరాలలో భారతదేశం / విదేశీ ప్రయాణాల కథనాలు",
    biblicalText: {
      en: "The Gospels state that Jesus grew up in Nazareth (Luke 2:51–52) and was recognized locally as 'the carpenter, the son of Mary' (Mark 6:3) when He began His ministry.",
      te: "యేసు నజరేతులోనే తల్లిదండ్రులకు లోబడి పెరిగారని (లూకా 2:51-52), పరిచర్య ప్రారంభించినప్పుడు 'ఈయన మరియ కుమారుడైన వడ్రంగి కాడా?' (మార్కు 6:3) అని గ్రామస్థులు గుర్తించారని లేఖనాలు చెబుతున్నాయి."
    },
    churchTradition: {
      en: "19th-century speculative writings (e.g. Nicolas Notovitch) claimed Jesus traveled to Hemis monastery in Ladakh, India, or Glastonbury, England.",
      te: "19వ శతాబ్దంలో నికోలస్ నోటోవిచ్ వంటి రచయితలు యేసు లడఖ్ లేదా ఇంగ్లాండ్ వెళ్లారని ఊహాజనిత కథనాలు రాశారు."
    },
    historicalReality: {
      en: "Scholarly consensus firmly rejects these claims due to a total lack of 1st-century documentary or archaeological evidence and verified fraudulent origin of modern texts.",
      te: "ఎటువంటి 1వ శతాబ్దపు ఆధారాలు లేకపోవడంతో మరియు ఆధునిక పత్రాల మోసం నిరూపించబడటంతో విద్వాంసులు ఈ కథనాలను పూర్తిగా తోసిపుచ్చారు."
    },
    confidence: SOURCE_CONFIDENCE.UNCERTAIN_DISPUTED
  },
  {
    topic: "The Shroud of Turin (Burial Cloth)",
    topicTe: "ట్యూరిన్ సమాధి వస్త్రం (ష్రౌడ్ ఆఫ్ ట్యూరిన్)",
    biblicalText: {
      en: "John 20:6–7 mentions multiple pieces of linen: linen strips wrapping the body and a separate cloth (*soudarion*) rolled up by itself for the head.",
      te: "యోహాను 20:6-7 ప్రకారం యేసు దేహమును చుట్టిన నారబట్టలు మరియు తలమీద ఉంచిన రుమాలు వేర్వేరుగా సమాధిలో పడియున్నాయి."
    },
    churchTradition: {
      en: "Venerated since the 14th century in France and Italy as the miraculous full-length burial shroud bearing the negative photographic imprint of Jesus.",
      te: "14వ శతాబ్దం నుండి ఇటలీలోని ట్యూరిన్ నగరంలో యేసు శరీర ముద్ర గల పవిత్ర వస్త్రంగా భక్తులు గౌరవిస్తున్నారు."
    },
    historicalReality: {
      en: "Radiocarbon dating in 1988 dated the fabric to c. 1260–1390 CE. While subsequent debates continue regarding sample contamination and image formation mechanics, historians classify it as a disputed relic rather than verified 1st-century artifact.",
      te: "1988 లో జరిగిన కార్బన్ డేటింగ్ పరీక్షలలో ఇది క్రీ.శ. 1260–1390 మధ్య కాలానికి చెందినదని తేలింది. దీనిపై పరిశోధనలు కొనసాగుతున్నప్పటికీ ఇది వివాదాస్పద శేషముగానే వర్గీకరించబడింది."
    },
    confidence: SOURCE_CONFIDENCE.UNCERTAIN_DISPUTED
  },
  {
    topic: "Did Jesus Exist as a Real Historical Figure?",
    topicTe: "యేసుక్రీస్తు నిజంగా చరిత్రలో జీవించిన వ్యక్తియేనా?",
    biblicalText: {
      en: "The 27 New Testament books written between c. 50 CE and 95 CE document the historical life, teachings, death, and resurrection of Jesus.",
      te: "క్రీ.శ. 50 నుండి 95 మధ్య రాయబడిన 27 క్రొత్త నిబంధన గ్రంథాలు యేసు జీవితాన్ని, మరణాన్ని, పునరుత్థానాన్ని ధృవీకరిస్తున్నాయి."
    },
    churchTradition: {
      en: "Unbroken succession of early Christian writers (Ignatius c. 110 CE, Polycarp, Justin Martyr, Irenaeus) affirming His historical reality.",
      te: "ఆదిమ సంఘ పితరుల నుండి నిరంతరంగా కొనసాగుతున్న చారిత్రక సాక్ష్యం."
    },
    historicalReality: {
      en: "Virtually all modern academic historians and classicists (Christian, secular, and Jewish) agree that Jesus of Nazareth was a real 1st-century historical Jew who was baptized by John and crucified under Pontius Pilate, confirmed by non-Christian Roman (Tacitus, Suetonius, Pliny) and Jewish (Josephus) records.",
      te: "ప్రపంచ ప్రఖ్యాత లౌకిక, యూదా మరియు క్రైస్తవ చరిత్రకారులందరూ నజరేయుడైన యేసు 1వ శతాబ్దంలో నిజంగా జీవించిన వ్యక్తి అని, యోహాను చేత బాప్తిస్మము పొంది పొంతి పిలాతు చేత సిలువ వేయబడ్డాడని ఏకాభిప్రాయంతో అంగీకరిస్తున్నారు (టాసిటస్, జోసెఫస్ వంటి స్వతంత్ర ఆధారాల ద్వారా)."
    },
    confidence: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  }
];

// 10. "Did You Know?" Fact Cards
export const DID_YOU_KNOW_FACTS = [
  {
    id: 1,
    title: { en: "Jesus was Jewish", te: "యేసు యూదా జాతిలో జన్మించారు" },
    fact: {
      en: "Jesus was born into a Jewish family, circumcised according to Torah law, attended synagogue every Sabbath, wore traditional tzitzit (fringes) on his cloak, observed biblical feasts in Jerusalem, and debated Torah interpretation with fellow Jewish teachers.",
      te: "యేసు యూదా కుటుంబంలో జన్మించి, ధర్మశాస్త్ర ప్రకారం 8వ దినమున సున్నతి పొంది, విశ్రాంతిదినమున సమాజమందిరంలో ప్రార్థించి, పండుగలకు యెరూషలేము వెళ్లిన యూదుడు."
    },
    sourceBadge: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: 2,
    title: { en: "Jesus Spoke Aramaic", te: "యేసు ప్రధానంగా అరామిక్ భాష మాట్లాడేవారు" },
    fact: {
      en: "Jesus' daily mother tongue was Galilean Aramaic (a Semitic language closely related to Hebrew). The Gospels preserve several of his exact Aramaic phrases: 'Talitha cumi' (Little girl, get up!), 'Ephphatha' (Be opened!), 'Abba' (Father), and 'Eloi, Eloi, lema sabachthani'.",
      te: "యేసు దైనందిన మాతృభాష గలిలయ అరామిక్. సువార్తలలో ఆయన మాట్లాడిన అనేక అరామిక్ పదాలు ('తలితా కుమి', 'ఎఫాతా', 'అబ్బా', 'ఎలోయీ ఎలోయీ లామా సబక్తానీ') యథాతథంగా భద్రపరచబడ్డాయి."
    },
    sourceBadge: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: 3,
    title: { en: "Archaeology Confirmed Pontius Pilate", te: "పురావస్తు శాస్త్రం పొంతి పిలాతును ధృవీకరించింది" },
    fact: {
      en: "In 1961, Italian archaeologists excavating the Roman theatre in Caesarea Maritima uncovered a carved limestone slab bearing the Latin inscription: '...DIS AUGUSTIS TIBERIEUM ...PONTIUS PILATUS ...PRAEFECTUS IUDAEAE' ('Pontius Pilate, Prefect of Judea').",
      te: "1961 లో కైసరయలో బయల్పడిన పురాతన రాతి శాసనముపై 'పొంతి పిలాతు, యూదయ ప్రిఫెక్ట్ (గవర్నర్)' అను లాటిన్ అక్షరాలు చెక్కబడి చరిత్రను స్పష్టంగా ధృవీకరించాయి."
    },
    sourceBadge: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: 4,
    title: { en: "The Gospels Were Written in Koine Greek", te: "సువార్తలు కోయినే గ్రీకు భాషలో రాయబడ్డాయి" },
    fact: {
      en: "The entire New Testament was written in Koine (common) Greek, the international lingua franca of the 1st-century Mediterranean world, allowing the message of Jesus to spread rapidly across the Roman Empire.",
      te: "క్రొత్త నిబంధన అంతా నాటి అంతర్జాతీయ భాషయైన కోయినే గ్రీకులో రాయబడింది; దీనివలన సువార్త రోమన్ సామ్రాజ్యమంతటా వేగంగా విస్తరించింది."
    },
    sourceBadge: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: 5,
    title: { en: "Over 5,800 Greek Manuscripts Exist", te: "5,800 కంటే ఎక్కువ గ్రీకు చేతివ్రాత ప్రతులు కలవు" },
    fact: {
      en: "With over 5,800 ancient Greek manuscripts and more than 10,000 Latin translations, the New Testament has exponentially more textual manuscript evidence than any other document of ancient Greco-Roman or Indian antiquity.",
      te: "5,800 కి పైగా గ్రీకు చేతివ్రాత ప్రతులతో క్రొత్త నిబంధన ప్రాచీన ప్రపంచంలోనే అత్యంత బలమైన రాతపూర్వక సాక్ష్యాలు గల పవిత్ర గ్రంథంగా నిలిచింది."
    },
    sourceBadge: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  },
  {
    id: 6,
    title: { en: "The Caiaphas Ossuary was Discovered in 1990", te: "కయప ఎముకల పెట్టె 1990 లో కనుగొనబడింది" },
    fact: {
      en: "In south Jerusalem in 1990, workers uncovered a 1st-century limestone burial ossuary elaborately carved with the Aramaic inscription: 'Joseph, son of Caiaphas' (Yehosef bar Kayafa), matching the High Priest who presided over Jesus' trial.",
      te: "1990 లో యెరూషలేములో లభించిన సున్నపురాతి ఎముకల పెట్టెపై 'కయప కుమారుడైన యోసేపు' అను అరామిక్ శాసనం ఉంది; ఇది యేసును విచారించిన ప్రధాన యాజకుని సమాధిగా నిర్ధారించబడింది."
    },
    sourceBadge: SOURCE_CONFIDENCE.STRONGLY_ATTESTED
  }
];

// 11. Primary and Secondary Sources Bibliography
export const SOURCES_BIBLIOGRAPHY = [
  {
    category: "Biblical Canonical Texts",
    categoryTe: "క్రొత్త నిబంధన లేఖనాలు",
    items: [
      { author: "Gospel of Mark", date: "c. 65–70 CE", desc: "Earliest canonical Gospel; rapid, vivid narrative of Jesus as the Suffering Servant." },
      { author: "Gospel of Matthew", date: "c. 75–85 CE", desc: "Emphasizes Jesus as the Davidic King and fulfillment of Hebrew prophecies." },
      { author: "Gospel of Luke", date: "c. 80–90 CE", desc: "Historian's orderly investigation detailing Jesus' universal compassion for outcasts and women." },
      { author: "Gospel of John", date: "c. 90–100 CE", desc: "Theological testimony of the Incarnate Word of God and seven profound signs." },
      { author: "Pauline Epistles (Galatians, 1 Cor, Romans)", date: "c. 50–58 CE", desc: "Earliest written Christian records, including the 1 Cor 15:3–7 Resurrection Creed." },
      { author: "Acts of the Apostles", date: "c. 80–90 CE", desc: "History of the early Christian movement from Jerusalem to Rome." }
    ]
  },
  {
    category: "Non-Christian Ancient Historical Sources",
    categoryTe: "క్రైస్తవేతర ప్రాచీన చారిత్రక ఆధారాలు",
    items: [
      { author: "Flavius Josephus (Antiquities of the Jews 18.3.3 & 18.5.2 & 20.9.1)", date: "c. 93–94 CE", desc: "Jewish historian documenting Jesus (Testimonium Flavianum), John the Baptist's execution, and James the brother of Jesus." },
      { author: "Tacitus (Annals 15.44)", date: "c. 116 CE", desc: "Roman senator recording the execution of 'Christus' by procurator Pontius Pilate under Emperor Tiberius." },
      { author: "Pliny the Younger (Letters 10.96)", date: "c. 112 CE", desc: "Roman governor writing to Emperor Trajan describing Christians singing hymns to Christ 'as to a god'." },
      { author: "Suetonius (Life of Claudius 25.4)", date: "c. 121 CE", desc: "Roman historian recording Jewish expulsion from Rome over disturbances instigated by 'Chrestus'." },
      { author: "Babylonian Talmud (Sanhedrin 43a)", date: "Late Antiquity", desc: "Jewish rabbinic tradition mentioning 'Yeshu the Nazarene' on the eve of Passover." }
    ]
  },
  {
    category: "Archaeological Inscriptions & Discoveries",
    categoryTe: "పురావస్తు శాసనాలు & పరిశోధనలు",
    items: [
      { author: "The Pilate Stone", date: "1st Century CE (Discovered 1961)", desc: "Limestone slab from Caesarea Maritima bearing Pontius Pilate's name and title." },
      { author: "Caiaphas Family Ossuary", date: "1st Century CE (Discovered 1990)", desc: "Ornate limestone bone box inscribed with 'Yehosef bar Kayafa' in Jerusalem." },
      { author: "Ancient Sea of Galilee Boat", date: "c. 50 BCE – 70 CE (Discovered 1986)", desc: "1st-century fishing vessel preserved in mud near Ginosar." },
      { author: "Yehohanan Crucifixion Heel Bone", date: "1st Century CE (Discovered 1968)", desc: "First archaeological physical proof of Roman crucifixion nail driven through a heel bone in Giv'at ha-Mivtar, Jerusalem." }
    ]
  }
];
