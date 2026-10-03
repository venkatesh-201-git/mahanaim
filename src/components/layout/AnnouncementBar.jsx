import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const AnnouncementBar = () => {
  const { t, isTelugu } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-midnight-950 via-midnight-900 to-midnight-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-gold-500/20 relative z-40 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-semibold text-[11px] border border-gold-500/30 shrink-0">
            <Sparkles className="w-3 h-3 text-gold-400" />
            {t('announcement.badge')}
          </span>
          <span className={`text-stone-300 truncate ${isTelugu ? 'font-telugu' : ''}`}>
            {t('announcement.text')}
          </span>
        </div>

        <Link
          to="/events"
          className="hidden sm:inline-flex items-center gap-1 font-medium text-gold-400 hover:text-gold-300 transition-colors shrink-0 text-xs"
        >
          <span>{t('announcement.action')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
