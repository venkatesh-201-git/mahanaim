import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Calendar, Video, HeartHandshake, History, User, Book, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { sermons } from '../../data/sermons';
import { events } from '../../data/events';
import { dailyVerses, topicalVerses, bibleBooks } from '../../data/bibleData';
import { ministries } from '../../data/ministries';
import { christianHistoryTimeline } from '../../data/history';
import { christianPeople } from '../../data/people';
import { christianBooks } from '../../data/books';

export const SearchModal = ({ isOpen, onClose }) => {
  const { lang, isTelugu, t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Keyboard shortcut listener (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search filter
  const matchedSermons = q
    ? sermons.filter(s => 
        s.title.en.toLowerCase().includes(q) || 
        s.title.te.includes(q) ||
        s.topic.toLowerCase().includes(q) ||
        s.topicTe.includes(q) ||
        s.passage.en.toLowerCase().includes(q)
      )
    : [];

  const matchedEvents = q
    ? events.filter(e =>
        e.title.en.toLowerCase().includes(q) ||
        e.title.te.includes(q) ||
        e.description.en.toLowerCase().includes(q) ||
        e.description.te.includes(q)
      )
    : [];

  const matchedMinistries = q
    ? ministries.filter(m =>
        m.title.en.toLowerCase().includes(q) ||
        m.title.te.includes(q) ||
        m.shortDesc.en.toLowerCase().includes(q) ||
        m.shortDesc.te.includes(q)
      )
    : [];

  const matchedVerses = q
    ? dailyVerses.filter(v =>
        v.reference.en.toLowerCase().includes(q) ||
        v.reference.te.includes(q) ||
        v.text.en.toLowerCase().includes(q) ||
        v.text.te.includes(q)
      )
    : [];

  const matchedHistory = q
    ? christianHistoryTimeline.filter(h =>
        h.title.en.toLowerCase().includes(q) ||
        h.title.te.includes(q) ||
        h.era.toLowerCase().includes(q)
      )
    : [];

  const matchedPeople = q
    ? christianPeople.filter(p =>
        p.name.en.toLowerCase().includes(q) ||
        p.name.te.includes(q) ||
        p.role.en.toLowerCase().includes(q)
      )
    : [];

  const matchedBooks = q
    ? christianBooks.filter(b =>
        b.title.en.toLowerCase().includes(q) ||
        b.title.te.includes(q) ||
        b.author.en.toLowerCase().includes(q)
      )
    : [];

  const totalResults = matchedSermons.length + matchedEvents.length + matchedMinistries.length + matchedVerses.length + matchedHistory.length + matchedPeople.length + matchedBooks.length;

  const handleSelect = (url) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-midnight-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-midnight-900 rounded-2xl shadow-2xl border border-gold-500/30 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-200 dark:border-midnight-700 bg-stone-50/50 dark:bg-midnight-950/50">
          <Search className="w-5 h-5 text-gold-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchModal.placeholder')}
            className="w-full bg-transparent text-midnight-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-500 text-base sm:text-lg focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-stone-200 dark:bg-midnight-800 text-stone-600 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-midnight-700"
          >
            ESC
          </button>
        </div>

        {/* Search Results / Quick Links */}
        <div className="p-4 overflow-y-auto divide-y divide-stone-100 dark:divide-midnight-800 space-y-4">
          {!q && (
            <div className="py-6 text-center">
              <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
                {isTelugu ? 'ముఖ్యమైన విభాగాలు:' : 'Quick shortcuts:'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button onClick={() => handleSelect('/bible')} className="px-3 py-1.5 rounded-lg text-xs bg-gold-500/10 text-gold-700 dark:text-gold-300 hover:bg-gold-500/20 border border-gold-500/30">
                  {t('nav.bible')}
                </button>
                <button onClick={() => handleSelect('/sermons')} className="px-3 py-1.5 rounded-lg text-xs bg-gold-500/10 text-gold-700 dark:text-gold-300 hover:bg-gold-500/20 border border-gold-500/30">
                  {t('nav.sermons')}
                </button>
                <button onClick={() => handleSelect('/events')} className="px-3 py-1.5 rounded-lg text-xs bg-gold-500/10 text-gold-700 dark:text-gold-300 hover:bg-gold-500/20 border border-gold-500/30">
                  {t('nav.events')}
                </button>
                <button onClick={() => handleSelect('/prayer')} className="px-3 py-1.5 rounded-lg text-xs bg-gold-500/10 text-gold-700 dark:text-gold-300 hover:bg-gold-500/20 border border-gold-500/30">
                  {t('nav.prayer')}
                </button>
                <button onClick={() => handleSelect('/jesus')} className="px-3 py-1.5 rounded-lg text-xs bg-gold-500/10 text-gold-700 dark:text-gold-300 hover:bg-gold-500/20 border border-gold-500/30">
                  {t('nav.jesus')}
                </button>
              </div>
            </div>
          )}

          {q && totalResults === 0 && (
            <div className="py-12 text-center text-stone-500 dark:text-stone-400">
              <p className="text-base">{t('searchModal.noResults')}</p>
            </div>
          )}

          {/* Matched Sermons */}
          {matchedSermons.length > 0 && (
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase text-gold-600 dark:text-gold-400 tracking-wider mb-2 block">
                {t('searchModal.sections.sermons')} ({matchedSermons.length})
              </span>
              <div className="space-y-1">
                {matchedSermons.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleSelect('/sermons')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-midnight-800 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Video className="w-4 h-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-midnight-900 dark:text-white group-hover:text-gold-500">
                          {isTelugu ? s.title.te : s.title.en}
                        </p>
                        <p className="text-xs text-stone-500 dark:text-stone-400">
                          {isTelugu ? s.passage.te : s.passage.en} • {s.topic}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Events */}
          {matchedEvents.length > 0 && (
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase text-gold-600 dark:text-gold-400 tracking-wider mb-2 block">
                {t('searchModal.sections.events')} ({matchedEvents.length})
              </span>
              <div className="space-y-1">
                {matchedEvents.map(e => (
                  <button
                    key={e.id}
                    onClick={() => handleSelect('/events')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-midnight-800 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-midnight-900 dark:text-white group-hover:text-gold-500">
                          {isTelugu ? e.title.te : e.title.en}
                        </p>
                        <p className="text-xs text-stone-500 dark:text-stone-400">
                          {isTelugu ? e.time.te : e.time.en}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Ministries */}
          {matchedMinistries.length > 0 && (
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase text-gold-600 dark:text-gold-400 tracking-wider mb-2 block">
                {t('searchModal.sections.ministries')} ({matchedMinistries.length})
              </span>
              <div className="space-y-1">
                {matchedMinistries.map(m => (
                  <button
                    key={m.id}
                    onClick={() => handleSelect(`/ministries`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-midnight-800 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <HeartHandshake className="w-4 h-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-midnight-900 dark:text-white group-hover:text-gold-500">
                          {isTelugu ? m.title.te : m.title.en}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Bible Verses */}
          {matchedVerses.length > 0 && (
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase text-gold-600 dark:text-gold-400 tracking-wider mb-2 block">
                {t('searchModal.sections.bible')} ({matchedVerses.length})
              </span>
              <div className="space-y-1">
                {matchedVerses.map(v => (
                  <button
                    key={v.id}
                    onClick={() => handleSelect('/bible')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-midnight-800 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-midnight-900 dark:text-white group-hover:text-gold-500">
                          {isTelugu ? v.reference.te : v.reference.en}
                        </p>
                        <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                          {isTelugu ? v.text.te : v.text.en}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched History & People */}
          {(matchedHistory.length > 0 || matchedPeople.length > 0 || matchedBooks.length > 0) && (
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase text-gold-600 dark:text-gold-400 tracking-wider mb-2 block">
                {isTelugu ? 'చరిత్ర & వనరులు' : 'History & Resources'}
              </span>
              <div className="space-y-1">
                {matchedHistory.map((h, i) => (
                  <button
                    key={`hist-${i}`}
                    onClick={() => handleSelect('/history')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-midnight-800 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <History className="w-4 h-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-midnight-900 dark:text-white group-hover:text-gold-500">
                          {isTelugu ? h.title.te : h.title.en}
                        </p>
                        <p className="text-xs text-stone-400">{h.era}</p>
                      </div>
                    </div>
                  </button>
                ))}
                {matchedPeople.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect('/people')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-midnight-800 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-midnight-900 dark:text-white group-hover:text-gold-500">
                          {isTelugu ? p.name.te : p.name.en}
                        </p>
                        <p className="text-xs text-stone-400">{isTelugu ? p.role.te : p.role.en}</p>
                      </div>
                    </div>
                  </button>
                ))}
                {matchedBooks.map(b => (
                  <button
                    key={b.id}
                    onClick={() => handleSelect('/books')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-stone-100 dark:hover:bg-midnight-800 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Book className="w-4 h-4 text-gold-500 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-midnight-900 dark:text-white group-hover:text-gold-500">
                          {isTelugu ? b.title.te : b.title.en}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
