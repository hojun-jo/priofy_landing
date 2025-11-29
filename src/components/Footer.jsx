import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section" style={{ textAlign: 'center', paddingBottom: '4rem', paddingTop: '0' }}>
      <div className="container">
        <div style={{ opacity: 0.5, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
