import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Sparkles, HeartHandshake, Activity, Shield, Flame, Copy, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { dailyVerses, bibleBooks, topicalVerses } from '../data/bibleData';

export const Bible = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'ot', 'nt', 'topical'
  const [copiedId, setCopiedId] = useState(null);

  const filterBooks = (books) => {
    if (!searchQuery.trim()) return books;
    const q = searchQuery.toLowerCase();
    return books.filter(b => 
      b.en.toLowerCase().includes(q) || 
      b.te.includes(q) ||
      b.group.toLowerCase().includes(q)
    );
  };

  const handleCopy = (id, text, ref) => {
    navigator.clipboard.writeText(`"${text}" — ${ref}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const otBooks = filterBooks(bibleBooks.oldTestament);
  const ntBooks = filterBooks(bibleBooks.newTestament);

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            {t('bible.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('bible.title')}
          </h1>
          <p className="text-gold-600 dark:text-gold-400 italic text-base sm:text-lg mb-8">
            {t('bible.subtitle')}
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gold-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('bible.searchPlaceholder')}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-midnight-900 border border-gold-500/30 text-midnight-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-sm text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 border-b border-stone-200 dark:border-midnight-800 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-gold-500 text-midnight-950 shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            {t('bible.totalBooks')}
          </button>
          <button
            onClick={() => setActiveTab('ot')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'ot'
                ? 'bg-gold-500 text-midnight-950 shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            {isTelugu ? 'పాత నిబంధన (39)' : 'Old Testament (39)'}
          </button>
          <button
            onClick={() => setActiveTab('nt')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'nt'
                ? 'bg-gold-500 text-midnight-950 shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            {isTelugu ? 'క్రొత్త నిబంధన (27)' : 'New Testament (27)'}
          </button>
          <button
            onClick={() => setActiveTab('topical')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'topical'
                ? 'bg-gold-500 text-midnight-950 shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            {t('bible.popularTopics')}
          </button>
        </div>

        {/* Bible Books Browser */}
        {(activeTab === 'all' || activeTab === 'ot' || activeTab === 'nt') && (
          <div className="space-y-12">
            {/* Old Testament */}
            {(activeTab === 'all' || activeTab === 'ot') && (
              <div>
                <h3 className="font-serif font-bold text-2xl text-midnight-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gold-500" />
                  <span>{t('bible.oldTestament')}</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {otBooks.map((book) => (
                    <Link
                      key={book.id}
                      to={`/bible/${book.id}`}
                      className="glass-card p-4 rounded-2xl hover:shadow-sacred hover:border-gold-500/50 transition-all flex flex-col justify-between group bg-white dark:bg-midnight-900"
                    >
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 block mb-1">
                          {book.group}
                        </span>
                        <h4 className={`font-serif font-bold text-sm sm:text-base text-midnight-900 dark:text-white group-hover:text-gold-500 transition-colors ${
                          isTelugu ? 'font-telugu' : ''
                        }`}>
                          {isTelugu ? book.te : book.en}
                        </h4>
                      </div>
                      <span className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                        {book.chapters} {isTelugu ? 'అధ్యాయాలు' : 'Chapters'}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* New Testament */}
            {(activeTab === 'all' || activeTab === 'nt') && (
              <div>
                <h3 className="font-serif font-bold text-2xl text-midnight-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-gold-500" />
                  <span>{t('bible.newTestament')}</span>
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {ntBooks.map((book) => (
                    <Link
                      key={book.id}
                      to={`/bible/${book.id}`}
                      className="glass-card p-4 rounded-2xl hover:shadow-sacred hover:border-gold-500/50 transition-all flex flex-col justify-between group bg-white dark:bg-midnight-900"
                    >
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gold-600 dark:text-gold-400 block mb-1">
                          {book.group}
                        </span>
                        <h4 className={`font-serif font-bold text-sm sm:text-base text-midnight-900 dark:text-white group-hover:text-gold-500 transition-colors ${
                          isTelugu ? 'font-telugu' : ''
                        }`}>
                          {isTelugu ? book.te : book.en}
                        </h4>
                      </div>
                      <span className="text-xs text-stone-500 dark:text-stone-400 mt-2">
                        {book.chapters} {isTelugu ? 'అధ్యాయాలు' : 'Chapters'}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Topical Scripture Meditation */}
        {(activeTab === 'all' || activeTab === 'topical') && (
          <div className="pt-8 space-y-8">
            <SectionHeading
              badge="Scripture by Need"
              title={t('bible.popularTopics')}
              subtitle="Promises of God for comfort, healing, protection, and faith"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {topicalVerses.map((category, idx) => (
                <div key={idx} className="glass-card rounded-3xl p-6 sm:p-8 bg-white dark:bg-midnight-900 border-gold-500/20">
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-gold-600 dark:text-gold-400 mb-4 pb-2 border-b border-stone-200 dark:border-midnight-800">
                    {isTelugu ? category.category.te : category.category.en}
                  </h4>

                  <div className="space-y-4">
                    {category.verses.map((v, vIdx) => {
                      const vId = `${idx}-${vIdx}`;
                      const text = isTelugu ? v.text.te : v.text.en;
                      const ref = isTelugu ? v.ref.te : v.ref.en;
                      const isCopied = copiedId === vId;

                      return (
                        <div key={vIdx} className="p-4 rounded-2xl bg-sacred-50/80 dark:bg-midnight-950/60 border border-stone-200/50 dark:border-midnight-800">
                          <p className={`text-sm sm:text-base text-stone-800 dark:text-stone-200 italic mb-3 ${
                            isTelugu ? 'font-telugu-serif not-italic' : ''
                          }`}>
                            "{text}"
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs sm:text-sm text-gold-600 dark:text-gold-400">
                              {ref}
                            </span>
                            <button
                              onClick={() => handleCopy(vId, text, ref)}
                              className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-gold-500"
                            >
                              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
