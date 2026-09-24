import React from 'react';
import type { SocialCardProps } from '../types';

export const SocialCard: React.FC<SocialCardProps> = ({
  title,
  description,
  buttonText,
  buttonUrl
}) => {
  return (
    <div className="social-card">
      <h5 className="social-card-title">{title}</h5>
      <p className="social-card-description">{description}</p>
      <a 
        href={buttonUrl}
        className="button button--social"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};

