import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="lang" role="group" aria-label={t('header.languageLabel')}>
      <button
        type="button"
        aria-pressed={language === 'ko'}
        aria-label={t('header.koreanLabel')}
        onClick={() => setLanguage('ko')}
      >
        KO
      </button>
      <button
        type="button"
        aria-pressed={language === 'en'}
        aria-label={t('header.englishLabel')}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
