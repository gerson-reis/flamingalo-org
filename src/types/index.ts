// Tipos compartilhados entre componentes

export interface SocialLink {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface HeroProps {
  title?: string;
  date?: string;
  location?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface HeaderProps {
  logoUrl?: string;
  logoAlt?: string;
}

export interface FooterProps {
  description?: string;
}

export interface InfoCardProps {
  emoji: string;
  children: React.ReactNode;
}

export interface SocialCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface SurvivalGuideProps {
  guideUrl?: string;
}

