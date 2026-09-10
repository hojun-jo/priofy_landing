import React, { useEffect, useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ko');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
