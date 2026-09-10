import React from 'react';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './i18n/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageSwitcher />
        <Hero />

        <ScreenshotShowcase />

        <FeaturesSection />

        <StorySection />

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
