import React from 'react';
import type { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = ({
  logoUrl = "/flamingalo-logo-text-2025-v1.png",
  logoAlt = "Flamingalo Burn Portugal"
}) => {
  return (
    <header id="site-header" className="site-header">
      <div className="header-inner">
        <div className="site-branding">
          <div className="site-logo">
            <a href="/" className="custom-logo-link" rel="home">
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

