import React from 'react';
import appIcon from '../assets/app_icon.png';
import { useLanguage } from '../i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="container">
        <div className="animate-fade-in" style={{ marginBottom: '2rem' }}>
          <img src={appIcon} alt="Priofy App Icon" style={{ width: '120px', height: '120px', borderRadius: '28px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} />
        </div>
        <h1 className="animate-fade-in delay-100 gradient-text-primary" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem', whiteSpace: 'pre-line' }}>
          {t('hero.title')}
        </h1>
        <p className="animate-fade-in delay-200" style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', whiteSpace: 'pre-line' }}>
          {t('hero.subtitle')}
        </p>
        <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn" style={{ background: '#000', color: 'white', border: '1px solid #333', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0.5rem 1.2rem', borderRadius: '12px', minWidth: '160px' }}>
            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>{t('hero.downloadOn')}</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t('hero.appStore')}</span>
          </button>
          <button className="btn" style={{ background: '#000', color: 'white', border: '1px solid #333', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0.5rem 1.2rem', borderRadius: '12px', minWidth: '160px' }}>
            <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>{t('hero.getItOn')}</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t('hero.playStore')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
