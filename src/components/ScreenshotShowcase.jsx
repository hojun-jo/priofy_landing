import React from 'react';
import screen1 from '../assets/IMG_0248.PNG';
import screen2 from '../assets/IMG_0256.PNG';
import screen3 from '../assets/IMG_0257.PNG';
import { useLanguage } from '../i18n/useLanguage';

const screenshots = [
  { image: screen1, title: 'screenshots.firstTitle', description: 'screenshots.firstDescription', alt: 'screenshots.firstAlt' },
  { image: screen2, title: 'screenshots.secondTitle', description: 'screenshots.secondDescription', alt: 'screenshots.secondAlt' },
  { image: screen3, title: 'screenshots.thirdTitle', description: 'screenshots.thirdDescription', alt: 'screenshots.thirdAlt' },
];

const ScreenshotShowcase = () => {
  const { t } = useLanguage();

  return (
    <section className="shots" id="shots" aria-labelledby="shots-title">
      <div className="wrap">
        <p className="kicker">{t('screenshots.kicker')}</p>
        <h2 id="shots-title">
          {t('screenshots.titleLead')}<br />{t('screenshots.titleTail')}
        </h2>
        <div className="shot-row">
          {screenshots.map((screenshot, index) => (
            <figure className="shot" key={screenshot.image}>
              <div className="frame">
                <img
                  src={screenshot.image}
                  alt={t(screenshot.alt)}
                  loading="lazy"
                  decoding="async"
                  width="1206"
                  height="2622"
                />
              </div>
              <figcaption>
                <b>{['①', '②', '③'][index]} {t(screenshot.title)}</b>
                {t(screenshot.description)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
