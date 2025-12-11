import React from 'react';
import type { HeaderProps } from '../../types';
import { getLocalizedPath, type Language } from '../../i18n/utils';
import type { Language as LangType } from '../../i18n';

interface Header2026Props extends HeaderProps {
  lang?: LangType;
}

export const Header: React.FC<Header2026Props> = ({
  logoUrl = "/flamingalo-logo-text-2025-v1.png",
  logoAlt = "Flamingalo Burn Portugal",
  lang = 'en'
}) => {
  const homeUrl = lang === 'en' ? '/' : `/${lang}`;
  
  return (
    <header id="site-header" className="site-header">
      <div className="header-inner">
        <div className="site-branding">
          <div className="site-logo">
            <a href={homeUrl} className="custom-logo-link" rel="home">
              <img 
                src={logoUrl}
                className="custom-logo"
                alt={logoAlt}
                width="1160"
                height="256"
                loading="eager"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

