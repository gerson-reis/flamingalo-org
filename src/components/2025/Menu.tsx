'use client';

import React, { useState, useEffect } from 'react';

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    label: 'Flamingalo 2025',
    href: '/2025'
  },
  {
    label: 'Flamingalo 2026',
    href: '/2026'
  },
  {
    label: 'Blog Posts',
    href: '/blog'
  },
  {
    label: 'Collaboration Guide',
    href: '/collaboration-guide'
  }
];

export const Menu: React.FC = () => {
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

