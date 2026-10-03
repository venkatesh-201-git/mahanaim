import { en } from './en';
import { te } from './te';

export const translations = {
  en,
  te,
};

export const getTranslation = (lang = 'en', path = '') => {
  const dict = translations[lang] || translations.en;
  if (!path) return dict;
  
  const keys = path.split('.');
  let current = dict;
  for (const key of keys) {
    if (current && current[key] !== undefined) {
      current = current[key];
    } else {
      // Fallback to English if translation is missing in Telugu
      let fallback = translations.en;
      for (const fKey of keys) {
        if (fallback && fallback[fKey] !== undefined) {
          fallback = fallback[fKey];
        } else {
          return path;
        }
      }
      return fallback;
    }
  }
  return current;
};
