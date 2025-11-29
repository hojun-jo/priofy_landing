import React from 'react';
import screen1 from '../assets/IMG_0248.PNG';
import screen2 from '../assets/IMG_0256.PNG';
import screen3 from '../assets/IMG_0257.PNG';

const ScreenshotShowcase = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          padding: '2rem 0'
        }}>
          {[screen1, screen2, screen3].map((src, index) => (
            <div key={index} className="glass-card animate-fade-in" style={{
              padding: '1rem',
              animationDelay: `${index * 0.2}s`,
              transform: 'rotate(-5deg)',
              marginTop: index % 2 === 0 ? '0' : '4rem'
            }}>
              <img
                src={src}
                alt={`App Screen ${index + 1}`}
                style={{
                  borderRadius: '16px',
                  maxWidth: '280px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
