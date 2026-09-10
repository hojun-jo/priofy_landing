import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

const APP_STORE_URL = 'https://apps.apple.com/kr/app/priofy/id6755681352?l=en-GB';
const PRIVACY_POLICY_URL = 'https://etialmoon.notion.site/Privacy-Policy-2b5d6b2371ba800b9bcbd0561b1e7225?source=copy_link';
const CONTACT_EMAIL = 'etialmoon@gmail.com';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <a className="wordmark" href="#top" aria-label="Priofy 홈" style={{ fontSize: '0.95rem' }}>
          priofy<span aria-hidden="true">.</span>
        </a>
        <nav className="footer-links" aria-label={t('footer.navigationLabel')}>
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">{t('footer.privacy')}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{t('footer.contact')}</a>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">{t('footer.appStore')}</a>
        </nav>
        <span>© 2026 HOJUN</span>
      </div>
    </footer>
  );
};

export default Footer;
