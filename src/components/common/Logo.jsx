import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const Logo = ({ lightModeOnly = false }) => {
  const { lang, isTelugu } = useLanguage();

  return (
    <Link 
      to="/" 
      className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-500/50 rounded-lg p-0.5 select-none shrink-0"
    >
      {/* Main Website Official Logo */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
        <img
          src="/logo.png"
          alt="Mahanaim Prayer Ministries Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3-Tier Typography */}
      <div className="flex flex-col text-left justify-center leading-tight">
        {/* Line 1: MAHANAIM / మహనయీము */}
        <span className={`font-serif font-black tracking-wider transition-colors whitespace-nowrap text-base sm:text-lg ${
          lightModeOnly 
            ? 'text-white' 
            : 'text-black dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400'
        } ${isTelugu ? 'font-telugu font-bold text-[15px] sm:text-base' : ''}`}>
          {isTelugu ? 'మహనయీము' : 'MAHANAIM'}
        </span>

        {/* Line 2: PRAYER MINISTRIES / ప్రార్థన మినిస్ట్రీస్ */}
        <span className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap -mt-0.5 ${
          lightModeOnly ? 'text-gold-300' : 'text-black dark:text-gold-400'
        } ${isTelugu ? 'font-telugu font-semibold text-[11px] tracking-normal' : 'font-sans'}`}>
          {isTelugu ? 'ప్రార్థన మినిస్ట్రీస్' : 'PRAYER MINISTRIES'}
        </span>

        {/* Line 3: Kandlagunta, AP - 522603 */}
        <span className={`text-[8.5px] sm:text-[9.5px] font-semibold tracking-wide whitespace-nowrap text-stone-800 dark:text-stone-300 ${
          isTelugu ? 'font-telugu text-[8.5px] sm:text-[9.5px]' : ''
        }`}>
          {isTelugu ? 'కండ్లగుంట, AP - 522603' : 'Kandlagunta, AP - 522603'}
        </span>
      </div>
    </Link>
  );
};
