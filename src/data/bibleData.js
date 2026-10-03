export const dailyVerses = [
  {
    id: 1,
    reference: { en: "Genesis 32:2", te: "ఆదికాండము 32:2" },
    text: {
      en: "And when Jacob saw them, he said, This is God's host: and he called the name of that place Mahanaim.",
      te: "యాకోబు వారిని చూచి—ఇది దేవుని సేన అని చెప్పి ఆ స్థలమునకు మహనయీము అను పేరు పెట్టెను."
    },
    theme: { en: "Angel Protection & Presence", te: "దైవదూతల సంరక్షణ & సన్నిధి" }
  },
  {
    id: 2,
    reference: { en: "John 3:16", te: "యోహాను 3:16" },
    text: {
      en: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
      te: "దేవుడు లోకమును ఎంతో ప్రేమించెను. కాగా ఆయన తన అద్వితీయకుమారునిగా పుట్టిన వానియందు విశ్వాసముంచు ప్రతివాడును నశింపక నిత్యజీవము పొందునట్లు ఆయనను అనుగ్రహించెను."
    },
    theme: { en: "Salvation & Love", te: "రక్షణ & దైవ ప్రేమ" }
  },
  {
    id: 3,
    reference: { en: "Philippians 4:13", te: "ఫిలిప్పీయులకు 4:13" },
    text: {
      en: "I can do all things through Christ which strengtheneth me.",
      te: "నన్ను బలపరచువానియందే నేను సమస్తమును చేయగలను."
    },
    theme: { en: "Strength & Faith", te: "బలం & విశ్వాసం" }
  },
  {
    id: 4,
    reference: { en: "Psalm 23:1", te: "కీర్తనలు 23:1" },
    text: {
      en: "The LORD is my shepherd; I shall not want.",
      te: "యెహోవా నా కాపరి; నాకు లేమి కలుగదు."
    },
    theme: { en: "Provision & Care", te: "పోషణ & కాపుదల" }
  },
  {
    id: 5,
    reference: { en: "Jeremiah 29:11", te: "యిర్మీయా 29:11" },
    text: {
      en: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
      te: "నేను మిమ్మునుగూర్చి ఉద్దేశించిన తలంపులను నేనెరుగుదును, అవి సమాధానకరమైన తలంపులేగాని హానికరమైనవి కావు; మీకు భావికాలమందు నిరీక్షణ కలుగునట్లుగా నేనున్నాను."
    },
    theme: { en: "Hope & Future", te: "నిరీక్షణ & భవిష్యత్తు" }
  },
  {
    id: 6,
    reference: { en: "Matthew 11:28", te: "మత్తయి 11:28" },
    text: {
      en: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
      te: "ప్రయాసపడి భారము మోసికొనుచున్న సమస్త జనులారా, నాయొద్దకు రండి; నేను మీకు విశ్రాంతి కలుగజేతును."
    },
    theme: { en: "Rest & Peace", te: "విశ్రాంతి & శాంతి" }
  },
  {
    id: 7,
    reference: { en: "Romans 8:28", te: "రోమీయులకు 8:28" },
    text: {
      en: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      te: "దేవుని ప్రేమించువారికి, అనగా ఆయన సంకల్పముచొప్పున పిలువబడినవారికి, సమస్తమును సమకూడి మేలుకొరకై జరుగుచున్నవని యెరుగుదుము."
    },
    theme: { en: "God's Sovereign Purpose", te: "దేవుని మేలు సంకల్పం" }
  }
];

export const bibleBooks = {
  oldTestament: [
    { id: "gen", en: "Genesis", te: "ఆదికాండము", chapters: 50, group: "Law" },
    { id: "exo", en: "Exodus", te: "నిర్గమకాండము", chapters: 40, group: "Law" },
    { id: "lev", en: "Leviticus", te: "లేవీయకాండము", chapters: 27, group: "Law" },
    { id: "num", en: "Numbers", te: "సంఖ్యాకాండము", chapters: 36, group: "Law" },
    { id: "deu", en: "Deuteronomy", te: "ద్వితీయోపదేశకాండము", chapters: 34, group: "Law" },
    { id: "jos", en: "Joshua", te: "యెహోషువ", chapters: 24, group: "History" },
    { id: "jud", en: "Judges", te: "న్యాయాధిపతులు", chapters: 21, group: "History" },
    { id: "rut", en: "Ruth", te: "రూతు", chapters: 4, group: "History" },
    { id: "1sa", en: "1 Samuel", te: "1 సమూయేలు", chapters: 31, group: "History" },
    { id: "2sa", en: "2 Samuel", te: "2 సమూయేలు", chapters: 24, group: "History" },
    { id: "1ki", en: "1 Kings", te: "1 రాజులు", chapters: 22, group: "History" },
    { id: "2ki", en: "2 Kings", te: "2 రాజులు", chapters: 25, group: "History" },
    { id: "1ch", en: "1 Chronicles", te: "1 దినవృత్తాంతములు", chapters: 29, group: "History" },
    { id: "2ch", en: "2 Chronicles", te: "2 దినవృత్తాంతములు", chapters: 36, group: "History" },
    { id: "ezr", en: "Ezra", te: "ఎజ్రా", chapters: 10, group: "History" },
    { id: "neh", en: "Nehemiah", te: "నెహెమ్యా", chapters: 13, group: "History" },
    { id: "est", en: "Esther", te: "ఎస్తేరు", chapters: 10, group: "History" },
    { id: "job", en: "Job", te: "యోబు", chapters: 42, group: "Poetry" },
    { id: "psa", en: "Psalms", te: "కీర్తనలు", chapters: 150, group: "Poetry" },
    { id: "pro", en: "Proverbs", te: "సామెతలు", chapters: 31, group: "Poetry" },
    { id: "ecc", en: "Ecclesiastes", te: "ప్రసంగి", chapters: 12, group: "Poetry" },
    { id: "sng", en: "Song of Solomon", te: "పరమగీతము", chapters: 8, group: "Poetry" },
    { id: "isa", en: "Isaiah", te: "యెషయా", chapters: 66, group: "Major Prophets" },
    { id: "jer", en: "Jeremiah", te: "యిర్మీయా", chapters: 52, group: "Major Prophets" },
    { id: "lam", en: "Lamentations", te: "విలాపవాక్యములు", chapters: 5, group: "Major Prophets" },
    { id: "ezk", en: "Ezekiel", te: "యెహెజ్కేలు", chapters: 48, group: "Major Prophets" },
    { id: "dan", en: "Daniel", te: "దానియేలు", chapters: 12, group: "Major Prophets" },
    { id: "hos", en: "Hosea", te: "హోషేయ", chapters: 14, group: "Minor Prophets" },
    { id: "jol", en: "Joel", te: "యోవేలు", chapters: 3, group: "Minor Prophets" },
    { id: "amo", en: "Amos", te: "ఆమోసు", chapters: 9, group: "Minor Prophets" },
    { id: "oba", en: "Obadiah", te: "ఓబద్యా", chapters: 1, group: "Minor Prophets" },
    { id: "jon", en: "Jonah", te: "యోనా", chapters: 4, group: "Minor Prophets" },
    { id: "mic", en: "Micah", te: "మీకా", chapters: 7, group: "Minor Prophets" },
    { id: "nah", en: "Nahum", te: "నహూము", chapters: 3, group: "Minor Prophets" },
    { id: "hab", en: "Habakkuk", te: "హబక్కూకు", chapters: 3, group: "Minor Prophets" },
    { id: "zep", en: "Zephaniah", te: "జెఫన్యా", chapters: 3, group: "Minor Prophets" },
    { id: "hag", en: "Haggai", te: "హగ్గయి", chapters: 2, group: "Minor Prophets" },
    { id: "zec", en: "Zechariah", te: "జెకర్యా", chapters: 14, group: "Minor Prophets" },
    { id: "mal", en: "Malachi", te: "మలాకీ", chapters: 4, group: "Minor Prophets" },
  ],
  newTestament: [
    { id: "mat", en: "Matthew", te: "మత్తయి", chapters: 28, group: "Gospel" },
    { id: "mrk", en: "Mark", te: "మార్కు", chapters: 16, group: "Gospel" },
    { id: "luk", en: "Luke", te: "లూకా", chapters: 24, group: "Gospel" },
    { id: "jhn", en: "John", te: "యోహాను", chapters: 21, group: "Gospel" },
    { id: "act", en: "Acts", te: "అపొస్తలుల కార్యములు", chapters: 28, group: "History" },
    { id: "rom", en: "Romans", te: "రోమీయులకు", chapters: 16, group: "Epistles" },
    { id: "1co", en: "1 Corinthians", te: "1 కొరింథీయులకు", chapters: 16, group: "Epistles" },
    { id: "2co", en: "2 Corinthians", te: "2 కొరింథీయులకు", chapters: 13, group: "Epistles" },
    { id: "gal", en: "Galatians", te: "గలతీయులకు", chapters: 6, group: "Epistles" },
    { id: "eph", en: "Ephesians", te: "ఎఫెసీయులకు", chapters: 6, group: "Epistles" },
    { id: "php", en: "Philippians", te: "ఫిలిప్పీయులకు", chapters: 4, group: "Epistles" },
    { id: "col", en: "Colossians", te: "కొలొస్సయులకు", chapters: 4, group: "Epistles" },
    { id: "1th", en: "1 Thessalonians", te: "1 థెస్సలొనీకయులకు", chapters: 5, group: "Epistles" },
    { id: "2th", en: "2 Thessalonians", te: "2 థెస్సలొనీకయులకు", chapters: 3, group: "Epistles" },
    { id: "1ti", en: "1 Timothy", te: "1 తిమోతికి", chapters: 6, group: "Epistles" },
    { id: "2ti", en: "2 Timothy", te: "2 తిమోతికి", chapters: 4, group: "Epistles" },
    { id: "tit", en: "Titus", te: "తీతుకు", chapters: 3, group: "Epistles" },
    { id: "phm", en: "Philemon", te: "ఫిలేమోనుకు", chapters: 1, group: "Epistles" },
    { id: "heb", en: "Hebrews", te: "హెబ్రీయులకు", chapters: 13, group: "General" },
    { id: "jas", en: "James", te: "యాకోబు", chapters: 5, group: "General" },
    { id: "1pe", en: "1 Peter", te: "1 పేతురు", chapters: 5, group: "General" },
    { id: "2pe", en: "2 Peter", te: "2 పేతురు", chapters: 3, group: "General" },
    { id: "1jn", en: "1 John", te: "1 యోహాను", chapters: 5, group: "General" },
    { id: "2jn", en: "2 John", te: "2 యోహాను", chapters: 1, group: "General" },
    { id: "3jn", en: "3 John", te: "3 యోహాను", chapters: 1, group: "General" },
    { id: "jud", en: "Jude", te: "యూదా", chapters: 1, group: "General" },
    { id: "rev", en: "Revelation", te: "ప్రకటన గ్రంథము", chapters: 22, group: "Prophecy" },
  ]
};

export const topicalVerses = [
  {
    category: { en: "Peace & Comfort", te: "శాంతి & ఆదరణ" },
    icon: "HeartHandshake",
    verses: [
      {
        ref: { en: "John 14:27", te: "యోహాను 14:27" },
        text: {
          en: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
          te: "శాంతి మీకనుగ్రహించి వెళ్లుచున్నాను; నా శాంతినే మీకనుగ్రహించుచున్నాను. లోకమిచ్చునట్టుగా నేను మీకనుగ్రహించుటలేదు; మీ హృదయమును కలవరపడనియ్యకుడి, వెరవనియ్యకుడి."
        }
      },
      {
        ref: { en: "Psalm 46:1", te: "కీర్తనలు 46:1" },
        text: {
          en: "God is our refuge and strength, a very present help in trouble.",
          te: "దేవుడు మనకు ఆశ్రయమును దుర్గమునై యున్నాడు; ఆపత్కాలములో ఆయన నమ్ముకొనదగిన సహాయకుడు."
        }
      }
    ]
  },
  {
    category: { en: "Healing & Restoration", te: "స్వస్థత & పునరుద్ధరణ" },
    icon: "Activity",
    verses: [
      {
        ref: { en: "Isaiah 53:5", te: "యెషయా 53:5" },
        text: {
          en: "But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
          te: "మన యతిక్రమక్రియలనుబట్టి అతడు గాయపరచబడెను, మన దోషములనుబట్టి నలుగగొట్టబడెను; మన సమాధానార్థమైన శిక్ష అతనిమీద పడెను, అతడు పొందిన దెబ్బలచేత మనకు స్వస్థత కలుగుచున్నది."
        }
      },
      {
        ref: { en: "Jeremiah 17:14", te: "యిర్మీయా 17:14" },
        text: {
          en: "Heal me, O LORD, and I shall be healed; save me, and I shall be saved: for thou art my praise.",
          te: "యెహోవా, నన్ను స్వస్థపరచుము, నేను స్వస్థతనొందుదును; నన్ను రక్షించుము, నేను రక్షింపబడుదును; నేనతిశయించుటకు నీవే కారణము."
        }
      }
    ]
  },
  {
    category: { en: "Protection & Deliverance", te: "రక్షణ & కాపుదల" },
    icon: "Shield",
    verses: [
      {
        ref: { en: "Psalm 91:1-2", te: "కీర్తనలు 91:1-2" },
        text: {
          en: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the LORD, He is my refuge and my fortress: my God; in him will I trust.",
          te: "మహోన్నతుని చాటున వసించువాడే సర్వశక్తుని నీడను విశ్రమించువాడు. ఆయన నా ఆశ్రయము, నా కోట, నేను నమ్ముకొను నా దేవుడని నేను యెహోవానుగూర్చి చెప్పుచున్నాను."
        }
      },
      {
        ref: { en: "Psalm 121:7-8", te: "కీర్తనలు 121:7-8" },
        text: {
          en: "The LORD shall preserve thee from all evil: he shall preserve thy soul. The LORD shall preserve thy going out and thy coming in from this time forth, and even for evermore.",
          te: "ఏ అపాయమును రాకుండా యెహోవా నిన్ను కాపాడును; ఆయన నీ ప్రాణమును కాపాడును. ఇది మొదలుకొని నిరంతరము నీ రాకపోకలయందు యెహోవా నిన్ను కాపాడును."
        }
      }
    ]
  },
  {
    category: { en: "Faith & Overcoming", te: "విశ్వాసం & జయ జీవితం" },
    icon: "Flame",
    verses: [
      {
        ref: { en: "Hebrews 11:1", te: "హెబ్రీయులకు 11:1" },
        text: {
          en: "Now faith is the substance of things hoped for, the evidence of things not seen.",
          te: "విశ్వాసమనునది నిరీక్షింపబడువాటియొక్క నిజస్వరూపమును, అదృశ్యమైన సంగతులు ఉన్నవనుటకు రుజువునై యున్నది."
        }
      },
      {
        ref: { en: "Mark 11:24", te: "మార్కు 11:24" },
        text: {
          en: "Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.",
          te: "అందుచేత ప్రార్థనచేసి మీరు అడుగుచున్న వాటినన్నిటిని పొందియున్నామని నమ్ముడి; అప్పుడు అవి మీకు కలుగునని మీతో చెప్పుచున్నాను."
        }
      }
    ]
  }
];
