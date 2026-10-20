import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Copy, Check, Share2, ArrowRight, HeartHandshake, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { dailyVerses } from '../../data/bibleData';

export const DailyVerseSection = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Food charity images (img1.png & img2.png)
  const foodImages = [
    {
      src: "/img1.png",
      titleTe: "అన్నదాన సేవా మహోత్సవం — కండ్లగుంట (522603)",
      titleEn: "Community Food Blessing — Kandlagunta (522603)",
      descTe: "క్రీస్తు ప్రేమతో పేదలకు, విశ్వాసులకు పవిత్ర భోజన వితరణ.",
      descEn: "Sharing the love of Christ through free meals for the community."
    },
    {
      src: "/img2.png",
      titleTe: "ఆత్మీయ సహవాస భోజన పరిచర్య — కండ్లగుంట",
      titleEn: "Spiritual Fellowship & Charity Meals — Kandlagunta",
      descTe: "ఎల్లప్పుడూ ఆకలి తీర్చే దైవ కుటుంబం మరియు సేవా బృందం.",
      descEn: "Dedicated ministry serving nutritious food to all who come."
    }
  ];

  // Auto change image one by one every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % foodImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [foodImages.length]);

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
        
        {/* Daily Verse Card with siluvaa.webp background (Ultra-Clear Visibility) */}
        <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 overflow-hidden border-2 border-gold-400/60 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
          
          {/* Background Image: siluvaa.webp — Ultra-Clear, Sharp & High Visibility */}
          <div className="absolute inset-0 z-0">
            <img
              src="/siluvaa.webp"
              alt="ఈ నాటి వాక్యం - సిలువ నేపథ్యం"
              className="w-full h-full object-cover object-center brightness-110 contrast-105"
              loading="eager"
            />
            {/* Ultra-light subtle protective tint so siluvaa.webp background image is fully and clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge - Clean & Elegant */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-300 bg-black/50 border border-amber-400/50 backdrop-blur-md mb-5 shadow-md">
              {t('dailyVerse.badge')}
            </span>

            {/* Quote Text - Beautiful, Elegant, Non-Bold Typography */}
            <blockquote className={`font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
              isTelugu ? 'font-telugu-serif not-italic leading-relaxed font-normal' : ''
            }`}>
              "{verseText}"
            </blockquote>

            {/* Reference */}
            <cite className="font-sans font-medium text-base sm:text-lg text-amber-300 not-italic mb-8 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              — {verseRef}
            </cite>

            {/* Action Bar (Copy, Share, Explore Bible) */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md text-white hover:bg-gold-500 hover:text-midnight-950 border border-amber-400/40 transition-all shadow-md active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-gold-400" />}
                <span>{copied ? t('dailyVerse.copied') : t('dailyVerse.copy')}</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md text-white hover:bg-gold-500 hover:text-midnight-950 border border-amber-400/40 transition-all shadow-md active:scale-95"
              >
                <Share2 className="w-4 h-4 text-gold-400" />
                <span>{t('dailyVerse.share')}</span>
              </button>

              <Link
                to="/bible"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gold-500 text-midnight-950 hover:bg-gold-400 transition-all shadow-md active:scale-95"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t('dailyVerse.exploreBible')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Food Charity & Community Outreach Images (img1 & img2 with small borders changing one by one) */}
        <div className="mt-8 sm:mt-10">
          <div className="glass-card rounded-3xl p-4 sm:p-6 bg-white/90 dark:bg-midnight-900/90 border border-gold-500/30 shadow-sacred">
            
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gold-500/15 flex items-center justify-center text-gold-600 dark:text-gold-400">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-midnight-900 dark:text-white">
                  {isTelugu ? 'కండ్లగుంట (522603) అన్నదాన సేవా కార్యక్రమాలు' : 'Kandlagunta (522603) Community Food Outreach'}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-gold-600 dark:text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                {activeImgIndex + 1} / {foodImages.length}
              </span>
            </div>

            {/* Changing Image Showcase Container with Small Border */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-400/60 dark:border-gold-500/50 shadow-md bg-midnight-950 max-h-[360px] sm:max-h-[420px] aspect-[16/9]">
              <img
                key={activeImgIndex}
                src={foodImages[activeImgIndex].src}
                alt={isTelugu ? foodImages[activeImgIndex].titleTe : foodImages[activeImgIndex].titleEn}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-950/95 via-midnight-950/75 to-transparent p-4 sm:p-6">
                <p className="font-serif font-bold text-sm sm:text-base text-gold-300">
                  {isTelugu ? foodImages[activeImgIndex].titleTe : foodImages[activeImgIndex].titleEn}
                </p>
                <p className="text-xs sm:text-sm text-stone-200 mt-0.5">
                  {isTelugu ? foodImages[activeImgIndex].descTe : foodImages[activeImgIndex].descEn}
                </p>
              </div>

              {/* Left/Right Interactive Controls */}
              <button
                onClick={() => setActiveImgIndex((prev) => (prev === 0 ? foodImages.length - 1 : prev - 1))}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-midnight-950/70 text-white hover:bg-gold-500 hover:text-midnight-950 flex items-center justify-center backdrop-blur-sm border border-gold-500/40 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev + 1) % foodImages.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-midnight-950/70 text-white hover:bg-gold-500 hover:text-midnight-950 flex items-center justify-center backdrop-blur-sm border border-gold-500/40 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Selectors to change one by one */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {foodImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all ${
                    activeImgIndex === idx
                      ? 'border-gold-500 bg-gold-500/10 shadow-sm'
                      : 'border-stone-200 dark:border-midnight-700 hover:border-gold-400/50'
                  }`}
                >
                  <div className="w-12 h-10 rounded-lg overflow-hidden border border-gold-400/40 shrink-0">
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-stone-800 dark:text-stone-200 truncate">
                      {isTelugu ? img.titleTe : img.titleEn}
                    </p>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 truncate">
                      {isTelugu ? 'క్లిక్ చేసి చూడండి' : 'Click to view'}
                    </p>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
