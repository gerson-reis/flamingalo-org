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
  lang = 'en'
}) => {
  const t = useTranslations(lang);
  
  const finalDate = date || "May 27 – June 1";
  const finalLocation = location || t('hero.location');
  return (
    <div className="hero hero-2025">
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
      </div>
    </div>
  );
};

