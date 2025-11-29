import React from 'react';
import appIcon from '../assets/app_icon.png';
import appStoreBadge from '../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';
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
        <div className="animate-fade-in delay-300" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* App Store Button - Official Badge */}
          <a
            href="https://apps.apple.com/kr/app/priofy/id6755681352?l=en-GB"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'transform 0.2s ease, opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              style={{ height: '54px', width: 'auto' }}
            />
          </a>

          {/* Play Store Button - Coming Soon */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              disabled
              className="btn"
              style={{
                background: '#000',
                color: 'white',
                border: '1px solid #333',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0.5rem 1.2rem',
                borderRadius: '12px',
                minWidth: '160px',
                opacity: 0.4,
                cursor: 'not-allowed',
                filter: 'grayscale(0.5)'
              }}
            >
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>{t('hero.getItOn')}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t('hero.playStore')}</span>
            </button>
            <span
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 'bold',
                padding: '0.25rem 0.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                whiteSpace: 'nowrap'
              }}
            >
              {t('hero.comingSoon')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
