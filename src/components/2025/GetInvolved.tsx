import React from 'react';
import { SocialCard } from './SocialCard';
import { SOCIAL_LINKS } from '../../constants/2025/social-links';
import type { Language as LangType } from '../../i18n';
import { useTranslations } from '../../i18n/utils';

interface GetInvolvedProps {
  lang?: LangType;
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({ lang = 'en' }) => {
  const t = useTranslations(lang);

  return (
    <section className="get-involved-section">
      <div className="section-content">
        <h2 className="section-title">{t('getInvolved.title')}</h2>
        <div className="section-text">
          <p>
            {t('getInvolved.paragraph1')}
          </p>
          <p>
            {t('getInvolved.paragraph2.2025')}
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

