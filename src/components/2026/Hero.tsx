import React from 'react';
import type { HeroProps } from '../../types';
import { useTranslations } from '../../i18n/utils';
import type { Language as LangType } from '../../i18n';

interface Hero2026Props extends HeroProps {
  lang?: LangType;
}

export const Hero: React.FC<Hero2026Props> = ({
  title = "Mundo Bizarro",
  date,
  location,
  ctaText,
  ctaLink = "https://docs.google.com/forms/d/e/1FAIpQLSdAFwvftKjstbdiJIUSDXiUs28g-QbH1EG5ldhXM1W4k78lig/viewform",
  lang = 'en'
}) => {
  const t = useTranslations(lang);
  
  const finalDate = date || "May 27 – 31";
  const finalLocation = location || t('hero.location');
  const finalCtaText = ctaText || t('hero.getTickets');
  return (
    <div className="hero">
      <h1 className="mundobizarro">
        <img 
          src="/mundo-bizarro-type-pink.png" 
          alt={title}
          width="500"
          height="140"
          loading="eager"
        />
      </h1>
      <div className="hero-inner">
        <h4><span>{finalDate}</span></h4>
        <h5 className="subtitle"><span>{finalLocation}</span></h5>
        <div className="highlight">
          <div className="highlight-inner">
            <p className="buttons">
              <a 
                href={ctaLink}
                className="button button--pink button--large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">{finalCtaText}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

