import React, { useState, useEffect } from 'react';
import { languages, type Language } from '../i18n';
import { removeLocaleFromPath, getLocalizedPath } from '../i18n/utils';

interface LanguageSwitcherProps {
  currentLang: Language;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang }) => {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    const basePath = removeLocaleFromPath(currentPath);
    const newPath = getLocalizedPath(basePath, newLang);
    window.location.href = newPath;
  };

  return (
    <div className="language-switcher">
      {Object.entries(languages).map(([code, name]) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code as Language)}
          className={`lang-button ${currentLang === code ? 'active' : ''}`}
          aria-label={`Switch to ${name}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};




