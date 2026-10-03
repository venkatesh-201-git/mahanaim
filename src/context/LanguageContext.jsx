import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation, translations } from '../i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('mahanaim_lang');
      return saved === 'te' ? 'te' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang) => {
    const validLang = newLang === 'te' ? 'te' : 'en';
    setLangState(validLang);
    try {
      localStorage.setItem('mahanaim_lang', validLang);
      document.documentElement.lang = validLang;
    } catch (e) {
      console.error('Failed to save language preference', e);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => getTranslation(lang, path);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isTelugu: lang === 'te' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
