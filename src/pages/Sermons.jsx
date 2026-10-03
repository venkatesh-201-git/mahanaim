import React, { useState } from 'react';
import { Play, BookOpen, Clock, User, Search, Sparkles, Filter, X, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { sermons } from '../data/sermons';

export const Sermons = () => {
  const { lang, isTelugu, t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideoSermon, setActiveVideoSermon] = useState(null);

  const topics = ['All', 'Prayer', 'Protection', 'Grace', 'Family'];

  const filteredSermons = sermons.filter((s) => {
    const matchesTopic = selectedTopic === 'All' || s.topic.toLowerCase() === selectedTopic.toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q || 
      s.title.en.toLowerCase().includes(q) ||
      s.title.te.includes(q) ||
      s.passage.en.toLowerCase().includes(q) ||
      s.passage.te.includes(q);
    return matchesTopic && matchesQuery;
  });

  return (
    <div className="py-12 sm:py-20 bg-sacred-50 dark:bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300 bg-gold-500/10 border border-gold-500/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            {t('sermons.badge')}
          </span>
          <h1 className={`font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-midnight-900 dark:text-white leading-tight mb-6 ${
            isTelugu ? 'font-telugu' : ''
          }`}>
            {t('sermons.title')}
          </h1>
          <p className={`text-base sm:text-lg text-stone-600 dark:text-stone-300 ${isTelugu ? 'font-telugu' : ''}`}>
            {t('sermons.subtitle')}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-card p-4 rounded-2xl bg-white dark:bg-midnight-900">
          {/* Topic Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedTopic === topic
                    ? 'bg-gold-500 text-midnight-950 shadow-sm'
                    : 'bg-stone-100 dark:bg-midnight-800 text-stone-600 dark:text-stone-300 hover:bg-gold-500/15'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gold-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('sermons.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-100 dark:bg-midnight-800 text-xs sm:text-sm text-midnight-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-gold-500"
            />
          </div>
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="glass-card rounded-3xl overflow-hidden hover:shadow-sacred-lg hover:border-gold-500/40 transition-all duration-300 flex flex-col group bg-white dark:bg-midnight-900"
            >
              {/* Thumbnail & Video Trigger */}
              <div 
                onClick={() => setActiveVideoSermon(sermon)}
                className="relative h-48 sm:h-52 overflow-hidden cursor-pointer"
              >
                <img
                  src={sermon.thumbnail}
                  alt={isTelugu ? sermon.title.te : sermon.title.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-midnight-950/40 flex items-center justify-center group-hover:bg-midnight-950/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-midnight-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-midnight-950/80 backdrop-blur-md text-stone-200 text-xs font-mono">
                  {sermon.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-600 dark:text-gold-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isTelugu ? sermon.passage.te : sermon.passage.en}</span>
                  </div>

                  <h3 className={`font-serif font-bold text-lg sm:text-xl text-midnight-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? sermon.title.te : sermon.title.en}
                  </h3>

                  <p className={`text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed mb-4 ${
                    isTelugu ? 'font-telugu' : ''
                  }`}>
                    {isTelugu ? sermon.description.te : sermon.description.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-midnight-800 flex items-center justify-between">
                  <span className="text-xs text-stone-500 truncate">
                    {isTelugu ? sermon.speaker.te : sermon.speaker.en}
                  </span>

                  <button
                    onClick={() => setActiveVideoSermon(sermon)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 dark:text-gold-400 hover:underline"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{t('sermons.watchNow')}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video / Sermon Modal */}
      {activeVideoSermon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-midnight-900 rounded-3xl overflow-hidden border border-gold-500/30 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif font-bold text-xl text-gold-400">
                {isTelugu ? activeVideoSermon.title.te : activeVideoSermon.title.en}
              </h3>
              <button
                onClick={() => setActiveVideoSermon(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-gold-500 hover:text-midnight-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Placeholder / Frame */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-6 border border-white/10 flex items-center justify-center">
              <img
                src={activeVideoSermon.thumbnail}
                alt={activeVideoSermon.title.en}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-gold-500 text-midnight-950 flex items-center justify-center shadow-glow-gold mb-3 animate-pulse">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <p className="text-sm font-semibold text-white">
                  {isTelugu ? 'సందేశం ప్రసారమవుతోంది' : 'Streaming Sermon Message'}
                </p>
                <p className="text-xs text-stone-300">
                  {isTelugu ? activeVideoSermon.passage.te : activeVideoSermon.passage.en}
                </p>
              </div>
            </div>

            {/* Key Sermon Points */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-xs uppercase font-semibold text-gold-400 tracking-wider">
                {isTelugu ? 'ప్రధాన వాక్య సారాంశం:' : 'Key Message Points:'}
              </h4>
              <ul className="list-disc list-inside text-xs sm:text-sm text-stone-300 space-y-1">
                {(isTelugu ? activeVideoSermon.keyPoints.te : activeVideoSermon.keyPoints.en).map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
