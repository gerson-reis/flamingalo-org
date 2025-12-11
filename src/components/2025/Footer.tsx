import React from 'react';
import type { FooterProps } from '../../types';
import { useTranslations, type Language } from '../../i18n/utils';
import type { Language as LangType } from '../../i18n';

interface Footer2026Props extends FooterProps {
  lang?: LangType;
}

export const Footer: React.FC<Footer2026Props> = ({
  description,
  lang = 'en'
}) => {
  const t = useTranslations(lang);
  const finalDescription = description || "The pink-feathered Burning Man-inspired event in Portugal";
  
  return (
    <footer id="site-footer" className="site-footer">
      <div className="footer-inner">
        <div className="site-branding">
          <p className="site-description">{finalDescription}</p>
        </div>
      </div>
    </footer>
  );
};

