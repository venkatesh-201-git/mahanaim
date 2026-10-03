import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Copy, Check, Share2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { dailyVerses } from '../../data/bibleData';

export const DailyVerseSection = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Pick verse based on current day of the year
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const verse = dailyVerses[dayOfYear % dailyVerses.length];

  const verseText = isTelugu ? verse.text.te : verse.text.en;
  const verseRef = isTelugu ? verse.reference.te : verse.reference.en;

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${verseText}" — ${verseRef}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Daily Bible Verse - Mahanaim Prayer Ministries",
        text: `"${verseText}" — ${verseRef}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      handleCopy();
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-sacred-100/50 dark:bg-midnight-900/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden bg-gradient-to-br from-white via-sacred-50 to-sacred-100 dark:from-midnight-900 dark:via-midnight-950 dark:to-midnight-900 border border-gold-500/30 shadow-sacred-lg">
          
          {/* Subtle watermarked open Bible SVG background */}
          <div className="absolute right-4 bottom-4 text-gold-500/5 dark:text-gold-400/5 pointer-events-none">
            <BookOpen className="w-48 h-48 sm:w-64 sm:h-64" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-5">
              {t('dailyVerse.badge')}
            </span>

            {/* Quote Text */}
            <blockquote className={`font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-3xl text-midnight-900 dark:text-stone-100 leading-relaxed max-w-3xl mb-6 ${
              isTelugu ? 'font-telugu-serif not-italic leading-relaxed' : ''
            }`}>
              "{verseText}"
            </blockquote>

            {/* Reference */}
            <cite className="font-sans font-bold text-base sm:text-lg text-gold-600 dark:text-gold-400 not-italic mb-8">
              — {verseRef}
            </cite>

            {/* Action Bar (Copy, Share, Explore Bible) */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-midnight-800 text-stone-700 dark:text-stone-200 hover:bg-gold-500/10 hover:text-gold-600 border border-stone-200 dark:border-midnight-700 transition-colors shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-gold-500" />}
                <span>{copied ? t('dailyVerse.copied') : t('dailyVerse.copy')}</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-midnight-800 text-stone-700 dark:text-stone-200 hover:bg-gold-500/10 hover:text-gold-600 border border-stone-200 dark:border-midnight-700 transition-colors shadow-sm"
              >
                <Share2 className="w-4 h-4 text-gold-500" />
                <span>{t('dailyVerse.share')}</span>
              </button>

              <Link
                to="/bible"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-midnight-900 text-white hover:bg-midnight-800 dark:bg-gold-500 dark:text-midnight-950 dark:hover:bg-gold-400 transition-colors shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t('dailyVerse.exploreBible')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
