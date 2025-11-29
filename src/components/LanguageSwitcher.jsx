import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '0.5rem 1rem',
        color: 'var(--color-text)',
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }}
    >
      {language === 'ko' ? 'EN' : 'KO'}
    </button>
  );
};

export default LanguageSwitcher;
