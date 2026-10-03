import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center', // 'center', 'left', 'right'
  className = '',
  lightModeOnly = false,
}) => {
  const { isTelugu } = useLanguage();

  const alignmentClasses = {
    center: 'text-center items-center mx-auto',
    left: 'text-left items-start',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-10 sm:mb-14 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 border shadow-sm ${
          lightModeOnly
            ? 'bg-gold-500/20 text-gold-300 border-gold-400/30'
            : 'bg-gold-500/10 text-gold-700 dark:text-gold-300 border-gold-500/25'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
          {badge}
        </span>
      )}

      <h2 className={`font-serif font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight mb-4 ${
        lightModeOnly
          ? 'text-white'
          : 'text-midnight-900 dark:text-white'
      } ${isTelugu ? 'font-telugu leading-snug' : ''}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          lightModeOnly
            ? 'text-stone-200'
            : 'text-stone-600 dark:text-stone-300'
        } ${isTelugu ? 'font-telugu text-sm sm:text-base' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Sacred Accent Divider */}
      <div className={`mt-4 flex items-center gap-2 ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="w-2 h-2 rotate-45 border border-gold-500 bg-gold-400/40" />
        <div className="w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </div>
    </div>
  );
};
