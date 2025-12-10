import React from 'react';
import type { HeroProps } from '../types';

export const Hero: React.FC<HeroProps> = ({
  title = "Mundo Bizarro",
  date = "May 27 – June 1",
  location = "Alentejo, Portugal",
  ctaText = "Get Ticket",
  ctaLink = "https://docs.google.com/forms/d/e/1FAIpQLScs8aI-l4wNJsx-DzniUFuuZE5TOFTVsRtmzK8fiW-8_zx-qw/viewform?usp=header"
}) => {
  return (
    <div className="hero">
      <h1 className="mundobizarro">
        <img 
          src="/mundo-bizarro-type-pink.png" 
          alt={title}
          width="500"
          height="140"
          loading="eager"
        />
      </h1>
      <div className="hero-inner">
        <h4><span>{date}</span></h4>
        <h5 className="subtitle"><span>{location}</span></h5>
        <div className="highlight">
          <div className="highlight-inner">
            <p className="buttons">
              <a 
                href={ctaLink}
                className="button button--pink button--large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text">{ctaText}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

