import React from 'react';
import type { InfoCardProps } from '../types';

export const InfoCard: React.FC<InfoCardProps> = ({ emoji, children }) => {
  return (
    <div className="info-card">
      <div className="info-card-emoji">
        <span>{emoji}</span>
      </div>
      <div className="info-card-content">
        {children}
      </div>
    </div>
  );
};

