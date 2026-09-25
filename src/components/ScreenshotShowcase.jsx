import React from 'react';
import darkKoreanList from '../assets/dark kr 1.png';
import darkKoreanDetail from '../assets/dark kr 2.png';
import darkEnglishList from '../assets/dark en 1.png';
import darkEnglishDetail from '../assets/dark en 2.png';
import { useLanguage } from '../i18n/useLanguage';

const screenshotsByLanguage = {
  ko: [darkKoreanList, darkKoreanDetail],
  en: [darkEnglishList, darkEnglishDetail],
};

const screenshotCopy = [
  { title: 'screenshots.firstTitle', description: 'screenshots.firstDescription', alt: 'screenshots.firstAlt' },
  { title: 'screenshots.secondTitle', description: 'screenshots.secondDescription', alt: 'screenshots.secondAlt' },
];

const ScreenshotShowcase = () => {
  const { language, t } = useLanguage();
  const screenshots = screenshotsByLanguage[language] ?? screenshotsByLanguage.ko;

  return (
    <section className="shots" id="shots" aria-labelledby="shots-title">
      <div className="wrap">
        <p className="kicker">{t('screenshots.kicker')}</p>
        <h2 id="shots-title">
          {t('screenshots.titleLead')}<br />{t('screenshots.titleTail')}
        </h2>
        <div className="shot-row">
          {screenshots.map((image, index) => (
            <figure className="shot" key={image}>
              <div className="frame">
                <img
                  src={image}
                  alt={t(screenshotCopy[index].alt)}
                  loading="lazy"
                  decoding="async"
                  width="1206"
                  height="2622"
                />
              </div>
              <figcaption>
                <b>{['①', '②'][index]} {t(screenshotCopy[index].title)}</b>
                {t(screenshotCopy[index].description)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
