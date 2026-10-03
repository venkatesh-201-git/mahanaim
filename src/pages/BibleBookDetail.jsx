import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Sparkles, Check, Copy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { bibleBooks } from '../data/bibleData';
import { Button } from '../components/common/Button';

export const BibleBookDetail = () => {
  const { book: bookId } = useParams();
  const { lang, isTelugu, t } = useLanguage();
  const [selectedChapter, setSelectedChapter] = useState(1);

  const allBooks = [...bibleBooks.oldTestament, ...bibleBooks.newTestament];
  const currentBook = allBooks.find(b => b.id.toLowerCase() === bookId?.toLowerCase()) || bibleBooks.oldTestament[0];

  const chaptersArray = Array.from({ length: currentBook.chapters }, (_, i) => i + 1);

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Back Link */}
        <Link
          to="/bible"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold-600 dark:text-gold-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isTelugu ? 'బైబిల్ గ్రంథాల జాబితాకు తిరిగి వెళ్లండి' : 'Back to Bible Books Index'}</span>
        </Link>

        {/* Book Header Card */}
        <div className="rounded-3xl bg-white dark:bg-midnight-900 p-8 border border-gold-500/30 shadow-sacred-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 font-semibold block mb-1">
                {currentBook.group} • {currentBook.chapters} {isTelugu ? 'అధ్యాయాలు' : 'Chapters'}
              </span>
              <h1 className={`font-serif font-bold text-3xl sm:text-4xl text-midnight-900 dark:text-white ${
                isTelugu ? 'font-telugu' : ''
              }`}>
                {isTelugu ? currentBook.te : currentBook.en}
              </h1>
            </div>

            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30">
              {isTelugu ? 'పరిశుద్ధ బైబిల్ గ్రంథం' : 'The Holy Bible'}
            </span>
          </div>
        </div>

        {/* Chapter Selector Grid */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 bg-white dark:bg-midnight-900">
          <h3 className="font-serif font-bold text-lg text-midnight-900 dark:text-white mb-4">
            {isTelugu ? 'అధ్యాయాన్ని ఎంచుకోండి:' : 'Select Chapter:'}
          </h3>

          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {chaptersArray.map((ch) => (
              <button
                key={ch}
                onClick={() => setSelectedChapter(ch)}
                className={`w-full aspect-square rounded-xl text-sm font-semibold flex items-center justify-center transition-all ${
                  selectedChapter === ch
                    ? 'bg-gold-500 text-midnight-950 shadow-md font-bold'
                    : 'bg-stone-100 dark:bg-midnight-800 text-stone-700 dark:text-stone-300 hover:bg-gold-500/20'
                }`}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Reader Card / Placeholder note */}
        <div className="glass-card rounded-3xl p-8 bg-white dark:bg-midnight-900 border-gold-500/20">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-midnight-800 mb-6">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-midnight-900 dark:text-white">
              {isTelugu ? `${currentBook.te} ${selectedChapter}-వ అధ్యాయం` : `${currentBook.en} Chapter ${selectedChapter}`}
            </h2>
            <span className="text-xs text-stone-400 font-mono">Public Domain / KJV / Telugu BSI Reference</span>
          </div>

          <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-6 italic">
            {isTelugu
              ? `ప్రభువైన యేసుక్రీస్తు నామములో ${currentBook.te} ${selectedChapter}-వ అధ్యాయమును ధ్యానించండి. దేవుని వాక్యము మీ హృదయములో జీవజలపు ఊటగా ప్రవహించును గాక.`
              : `Meditate upon the Holy Scriptures in ${currentBook.en} Chapter ${selectedChapter}. God's living Word illuminates our path with peace, wisdom, and eternal truth.`}
          </p>

          <div className="p-4 rounded-2xl bg-sacred-100/50 dark:bg-midnight-950/80 border border-gold-500/20 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
            <strong>{isTelugu ? 'గమనిక:' : 'Note:'}</strong> {isTelugu ? 'త్వరలో పూర్తి బైబిల్ లేఖనాలు మరియు అనువాదాలు అందుబాటులోకి రానున్నాయి.' : 'The full searchable chapter verse-by-verse engine will connect to the future MERN backend API.'}
          </div>
        </div>

      </div>
    </div>
  );
};
