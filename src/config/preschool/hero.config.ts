import { siteConfig } from '../site.config';

export interface HeroConfig {
  badgeText: string;
  headlineMain: string;
  headlineHighlight: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  whatsappMessage: string;
  stats: Array<{ label: string; value: string; icon: string }>;
}

export const heroConfig: HeroConfig = {
  badgeText: '☀️ Admissions Open for 2026–2027 Academic Year',
  headlineMain: 'Little Wings Care',
  headlineHighlight: 'Let your child fly',
  subtitle: 'A nurturing preschool in Amroha where young children learn through play, exploration, and caring guidance.',
  primaryCtaText: '🎒 Book a School Visit',
  primaryCtaLink: '/admissions/#admission-form',
  secondaryCtaText: '🎨 Explore Our Programs',
  secondaryCtaLink: '/programs/#programs',
  whatsappMessage: siteConfig.whatsappMessage,
  stats: [
    { label: 'Classes', value: '4', icon: 'Smile' },
    { label: 'Teacher-Student Ratio', value: '1:10', icon: 'Heart' },
    { label: 'Nursery Eligibility', value: '3+', icon: 'BookOpen' },
    { label: 'Learning', value: 'Activity Based', icon: 'Sparkles' },
  ],
};
