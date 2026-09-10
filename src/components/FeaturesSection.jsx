import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

const FeatureItem = ({ title, description, icon }) => (
  <div className="glass-card animate-fade-in" style={{ padding: '2rem', flex: '1 1 300px', textAlign: 'left' }}>
    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{title}</h3>
    <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{description}</p>
  </div>
);

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', whiteSpace: 'pre-line' }}>
            {t('features.intro')}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <FeatureItem
            icon="🤖"
            title={t('features.aiPriority.title')}
            description={t('features.aiPriority.description')}
          />
          <FeatureItem
            icon="📂"
            title={t('features.autoCategory.title')}
            description={t('features.autoCategory.description')}
          />
          <FeatureItem
            icon="⚡️"
            title={t('features.onDevice.title')}
            description={t('features.onDevice.description')}
          />
          <FeatureItem
            icon="🔒"
            title={t('features.privacy.title')}
            description={t('features.privacy.description')}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
