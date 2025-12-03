import React from 'react';
import type { SurvivalGuideProps } from '../types';

export const SurvivalGuide: React.FC<SurvivalGuideProps> = ({
  guideUrl = "https://drive.google.com/file/d/1vd2aHBn61nMJj_PD7GqsoHOPr73e7DNK/view?usp=sharing"
}) => {
  return (
    <section className="survival-guide-section">
      <div className="section-content">
        <h2 className="section-title">Survival Guide</h2>
        <div className="section-text">
          <p>
            Flamingalo is a co-created event. Nothing exists unless we come together and make it happen! The core organization has already found the land, ordered toilets, and are setting up basic support structures like First Aid and Welfare. But all the rest is up to you!
          </p>
          <p>
            Learn how to survive and thrive by downloading the Survival Guide below, it tells you all the information you need to enjoy Flamingalo to the fullest.
          </p>
        </div>
        <div className="section-cta">
          <a 
            href={guideUrl}
            className="button button--download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              className="button-icon" 
              viewBox="0 0 512 512"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z" />
            </svg>
            <span>Survival Guide 2025</span>
          </a>
        </div>
      </div>
    </section>
  );
};

