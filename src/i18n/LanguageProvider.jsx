import React, { useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ko');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
