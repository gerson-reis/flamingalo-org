import React from 'react';
import { SocialCard } from './SocialCard';
import { SOCIAL_LINKS } from '../../constants/2025/social-links';

export const GetInvolved: React.FC = () => {

  return (
    <section className="get-involved-section">
      <div className="section-content">
        <h2 className="section-title">Get Involved</h2>
        <div className="section-text">
          <p>
            Join us to hatch this wonderling of co-creation from a nest of fire and see it take flight.
          </p>
          <p>
            To get involved with making Flamingalo 2025 happen, join our Telegram and participate in the bi-weekly meetings.
          </p>
        </div>
        <div className="social-grid">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialCard
              key={index}
              title={link.title}
              description={link.description}
              buttonText={link.buttonText}
              buttonUrl={link.buttonUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

