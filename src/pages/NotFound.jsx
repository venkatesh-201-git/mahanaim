import React from 'react';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  const { isTelugu, t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-sacred-50 dark:bg-midnight-950 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-gold-500/20 text-gold-500 mx-auto flex items-center justify-center border border-gold-500/30 shadow-glow-gold">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <h1 className="font-serif font-bold text-6xl sm:text-7xl text-gold-500">
          404
        </h1>

        <h2 className={`font-serif font-bold text-2xl text-midnight-900 dark:text-white ${isTelugu ? 'font-telugu' : ''}`}>
          {t('common.notFoundTitle')}
        </h2>

        <p className={`text-stone-600 dark:text-stone-300 text-sm leading-relaxed ${isTelugu ? 'font-telugu' : ''}`}>
          {t('common.notFoundDesc')}
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Button to="/" variant="gold" icon={Home}>
            {t('common.backToHome')}
          </Button>
        </div>
      </div>
    </div>
  );
};
