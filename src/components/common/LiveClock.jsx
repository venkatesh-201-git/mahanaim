import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const LiveClock = ({ compact = false }) => {
  const { lang, isTelugu, t } = useLanguage();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysTe = ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'];

  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthsTe = ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'];

  const dayOfWeek = isTelugu ? daysTe[time.getDay()] : daysEn[time.getDay()];
  const dateNum = time.getDate();
  const monthName = isTelugu ? monthsTe[time.getMonth()] : monthsEn[time.getMonth()];
  const year = time.getFullYear();

  // 12-hour format with AM/PM
  let hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? (isTelugu ? 'సాయం/రాత్రి' : 'PM') : (isTelugu ? 'ఉదయం' : 'AM');
  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, '0');

  if (compact) {
    return (
      <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-gold-500/10 text-gold-700 dark:text-gold-300 border border-gold-500/20">
        <Clock className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
        <span>{dayOfWeek}, {dateNum} {monthName} • {formattedHours}:{minutes}:{seconds} {ampm}</span>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-4 sm:p-5 shadow-sacred border border-gold-500/20 bg-white/80 dark:bg-midnight-900/80 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Date Box */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-12 h-12 rounded-xl bg-gold-500/15 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 border border-gold-500/30">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium block">
              {t('clock.todayIs')}
            </span>
            <p className="text-base sm:text-lg font-serif font-bold text-midnight-900 dark:text-white">
              {dayOfWeek}, {dateNum} {monthName} {year}
            </p>
          </div>
        </div>

        {/* Live Digital Clock */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 sm:border-l border-gold-500/15 pt-3 sm:pt-0 sm:pl-5">
          <div className="w-10 h-10 rounded-xl bg-midnight-900/10 dark:bg-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
            <Clock className="w-5 h-5 animate-pulse" />
          </div>
          <div className="text-right">
            <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-midnight-900 dark:text-gold-400 flex items-baseline gap-1">
              <span>{formattedHours}:{minutes}</span>
              <span className="text-xs font-normal opacity-80">:{seconds}</span>
              <span className="text-xs ml-1 font-sans uppercase font-semibold text-stone-600 dark:text-stone-300">{ampm}</span>
            </div>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 block">
              {t('clock.liveTime')} (IST)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
