'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, getLocalizedPath, type Language } from '../../i18n/utils';
import type { Language as LangType } from '../../i18n';

interface MenuItem {
  label: string;
  href: string;
}

interface MenuProps {
  lang?: LangType;
}

export const Menu: React.FC<MenuProps> = ({ lang = 'en' }) => {
  const t = useTranslations(lang);
  
  const menuItems: MenuItem[] = [
    {
      label: t('nav.blog'),
      href: getLocalizedPath('/blog', lang)
    },
    {
      label: t('nav.guide'),
      href: getLocalizedPath('/collaboration-guide', lang)
    },
    {
      label: t('nav.2026'),
      href: getLocalizedPath('/2026', lang)
    },
    {
      label: t('nav.2025'),
      href: getLocalizedPath('/2025', lang)
    }
  ];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    console.log('Toggle menu clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        className="menu-button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className={`menu-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a 
                  href={item.href}
                  className="menu-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

