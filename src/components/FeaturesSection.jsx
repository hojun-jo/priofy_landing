import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

const features = [
  ['01', 'features.priority.title', 'features.priority.description'],
  ['02', 'features.category.title', 'features.category.description'],
  ['03', 'features.onDevice.title', 'features.onDevice.description'],
  ['04', 'features.privacy.title', 'features.privacy.description'],
];

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="wrap">
        <div className="features-head">
          <div>
            <p className="kicker">{t('features.kicker')}</p>
            <h2 id="features-title">{t('features.title')}</h2>
          </div>
          <p className="side">{t('features.intro')}</p>
        </div>

        <div className="feature-grid">
          {features.map(([number, title, description]) => (
            <article className="feature" key={number}>
              <span className="no" aria-hidden="true">{number}</span>
              <div>
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
