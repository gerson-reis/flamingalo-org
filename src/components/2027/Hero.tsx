import React from 'react';
import type { HeroProps } from '../../types';
import { useTranslations } from '../../i18n/utils';
import type { Language as LangType } from '../../i18n';

interface Hero2027Props extends HeroProps {
  lang?: LangType;
}

export const Hero: React.FC<Hero2027Props> = ({
  title = "Flamingalo 2027",
  date,
  location,
  lang = 'en'
}) => {
  const t = useTranslations(lang);
  
  const finalDate = date || "May 12 – 17, 2027";
  const finalLocation = location || t('hero.location');
  return (
    <div className="hero hero-2027">
      <h1 className="hero-title-2027">{title}</h1>
      <div className="hero-inner">
        <h4><span>{finalDate}</span></h4>
        <h5 className="subtitle"><span>{finalLocation}</span></h5>
      </div>
    </div>
  );
};

