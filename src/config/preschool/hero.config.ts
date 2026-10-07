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
  headlineMain: 'Where Little Minds',
  headlineHighlight: 'Grow, Play & Explore',
  subtitle: 'A warm, safe, and joyful haven where curiosity blooms through play-based learning, compassionate mentorship, and creative discovery.',
  primaryCtaText: '🎒 Book a School Visit',
  primaryCtaLink: '#admission-form',
  secondaryCtaText: '🎨 Explore Our Programs',
  secondaryCtaLink: '#programs',
  whatsappMessage: 'Hello Little Learners! I would like to book a campus tour and inquire about preschool admissions.',
  stats: [
    { label: 'Happy Learners', value: '1,200+', icon: 'Smile' },
    { label: 'Caring Teachers', value: '45+', icon: 'Heart' },
    { label: 'Safety Index', value: '100%', icon: 'ShieldCheck' },
    { label: 'Play & Creative Zones', value: '12+', icon: 'Sparkles' },
  ],
};
