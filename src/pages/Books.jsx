import React, { useState } from 'react';
import { Book, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { christianBooks } from '../data/books';

export const Books = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Hymnody', 'Prayer', 'Christian Living', 'Devotional'];

  const filteredBooks = selectedCategory === 'All'
    ? christianBooks
    : christianBooks.filter(b => b.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <Book className="w-3.5 h-3.5 text-gold-500" />
            {t('books.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('books.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('books.subtitle')}
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-midnight-950 shadow-sm'
                  : 'bg-white dark:bg-midnight-800 text-stone-600 dark:text-stone-300 hover:bg-gold-500/15 border border-stone-200 dark:border-midnight-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="glass-card rounded-3xl overflow-hidden border border-gold-500/25 bg-white dark:bg-midnight-900 shadow-sacred hover:shadow-sacred-lg transition-all flex flex-col group"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={book.image}
                  alt={isTelugu ? book.title.te : book.title.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-midnight-950/80 backdrop-blur-md text-gold-400 text-[11px] font-semibold">
                  {isTelugu ? book.categoryTe : book.category}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`font-serif font-bold text-base sm:text-lg text-midnight-900 dark:text-white mb-1 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? book.title.te : book.title.en}
                  </h3>
                  <p className="text-xs text-gold-600 dark:text-gold-400 font-medium mb-3">
                    {isTelugu ? book.author.te : book.author.en}
                  </p>
                  <p className={`text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed mb-4 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? book.description.te : book.description.en}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-midnight-800 flex flex-wrap gap-1">
                  {book.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] bg-stone-100 dark:bg-midnight-800 text-stone-500 dark:text-stone-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
