import React from 'react';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './i18n/LanguageProvider';
import { useLanguage } from './i18n/useLanguage';

function PageContent() {
  const { t } = useLanguage();
  const runningItems = t('runningLine');

  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        {t('accessibility.skipToContent')}
      </a>

      <header className="site-header">
        <div className="wrap header-row">
          <a className="wordmark" href="#top" aria-label="Priofy 홈">
            priofy<span aria-hidden="true">.</span>
          </a>

          <div className="header-actions">
            <nav className="header-nav" aria-label={t('header.navigationLabel')}>
              <a className="header-link" href="#features">{t('header.features')}</a>
              <a className="header-link" href="#story">{t('header.story')}</a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main id="main-content">
        <Hero />
        <div className="running-line" aria-hidden="true">
          <div className="running-line-track">
            {Array.from({ length: 8 }, (_, groupIndex) => (
              <React.Fragment key={`running-group-${groupIndex}`}>
                {runningItems.map((item, itemIndex) => (
                  <span className="running-item" key={`${groupIndex}-${item}-${itemIndex}`}>
                    {item}
                    <i aria-hidden="true">✎</i>
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        <ScreenshotShowcase />
        <FeaturesSection />
        <StorySection />

        <section className="final" id="download" aria-labelledby="final-title">
          <div className="wrap">
            <h2 id="final-title">
              {t('final.titleLead')} <em>{t('final.titleAccent')}</em> {t('final.titleTail')}
            </h2>
            <div className="cta-row">
              <a
                className="btn-ink"
                href="https://apps.apple.com/kr/app/priofy/id6755681352?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('hero.appStoreAria')}
              >
                <span className="apple-mark" aria-hidden="true"></span>
                {t('hero.download')}
              </a>
              <span className="paren">{t('final.play')}</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}

export default App;
