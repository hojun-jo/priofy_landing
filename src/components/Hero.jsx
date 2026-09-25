import React from 'react';
import appIcon from '../assets/app_icon.png';
import appStoreBadge from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';
import { useLanguage } from '../i18n/useLanguage';

const APP_STORE_URL = 'https://apps.apple.com/kr/app/priofy/id6755681352?l=en-GB';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <img
          className="hero-icon"
          src={appIcon}
          alt={t('hero.iconAlt')}
          width="92"
          height="92"
        />
        <h1 id="hero-title">
          {t('hero.titleLead')}<br />
          <em>{t('hero.titleAccent')}</em>{t('hero.titleTail')}
        </h1>
        <p className="lede">{t('hero.subtitle')}</p>
        <div className="cta-row">
          <a
            className="app-store-badge-link"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('hero.appStoreAria')}
          >
            <img className="app-store-badge" src={appStoreBadge} alt="" />
          </a>
          <span className="paren">
            {t('hero.playLead')} <b>{t('hero.playStatus')}</b>
            <i className="soon-tag">{t('hero.comingSoon')}</i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
