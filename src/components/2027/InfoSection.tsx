import React from 'react';
import { InfoCard } from './InfoCard';
import type { Language as LangType } from '../../i18n';
import { useTranslations } from '../../i18n/utils';

interface InfoSectionProps {
  lang?: LangType;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ lang = 'en' }) => {
  const t = useTranslations(lang);
  
  return (
    <section className="info-section">
      <div className="info-grid">
        <InfoCard emoji="✨">
          <p>
            {t('info2025.card1')} <strong>May 12 – 17, 2027</strong>.
          </p>
        </InfoCard>

        <InfoCard emoji="🗺">
          <p>
            {t('info2025.card2')}
          </p>
        </InfoCard>

        <InfoCard emoji="🪩">
          <p>
            {t('info2025.card3.part1')}{' '}
            <a 
              href="https://burningman.org/about/10-principles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('info2025.card3.link')}
            </a>
            {' '}{t('info2025.card3.part2')}
          </p>
        </InfoCard>

        <InfoCard emoji="🦩🐓">
          <p>
            {t('info2025.card4')}
          </p>
        </InfoCard>
      </div>
    </section>
  );
};

