import React from 'react';
import { useLanguage } from '../i18n/useLanguage';

const StorySection = () => {
  const { t } = useLanguage();

  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="wrap">
        <p className="kicker">{t('story.kicker')}</p>
        <blockquote id="story-title">
          {t('story.quoteLead')}<br />
          <em>{t('story.quoteAccent')}</em><br />
          {t('story.quoteTail')}
        </blockquote>
        <p className="attr">{t('story.attribution')}</p>
        <p className="quiet">{t('story.quietLead')} <i>{t('story.quietAccent')}</i></p>
      </div>
    </section>
  );
};

export default StorySection;
