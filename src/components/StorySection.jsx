import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

const StorySection = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div className="glass-card" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            {t('story.title')}
          </h2>
          <div style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
            <p style={{ whiteSpace: 'pre-line' }}>{t('story.part1')}</p>
            <p style={{ marginTop: '1rem', marginBottom: '3rem', whiteSpace: 'pre-line' }}>{t('story.part2')}</p>
            <p style={{ marginBottom: '2rem', whiteSpace: 'pre-line' }}>{t('story.part3')}</p>
            <p style={{ color: 'var(--color-text)', whiteSpace: 'pre-line' }}>{t('story.part4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
