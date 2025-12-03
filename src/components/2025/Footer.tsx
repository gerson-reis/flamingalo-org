import React from 'react';
import type { FooterProps } from '../types';

export const Footer: React.FC<FooterProps> = ({
  description = "The pink-feathered Burning Man-inspired event in Portugal"
}) => {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="footer-inner">
        <div className="site-branding">
          <p className="site-description">{description}</p>
        </div>
      </div>
    </footer>
  );
};

