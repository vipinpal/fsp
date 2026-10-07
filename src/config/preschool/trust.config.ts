export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export const trustConfig: TrustPillar[] = [
  {
    id: 'cctv-safety',
    title: '100% CCTV & Secure Access',
    description: 'Real-time high-definition surveillance across all classrooms and play yards with strict gate pass control.',
    iconName: 'ShieldCheck',
    accentColor: '#FF6B6B',
  },
  {
    id: 'caring-educators',
    title: 'Certified Early Childhood Educators',
    description: 'Warm, background-verified teachers trained in child psychology, empathy, and positive reinforcement.',
    iconName: 'HeartHandshake',
    accentColor: '#4ECDC4',
  },
  {
    id: 'teacher-ratio',
    title: 'Low Teacher-Child Ratio (1:8)',
    description: 'Ensuring every toddler gets dedicated personal attention, encouragement, and emotional care.',
    iconName: 'Users',
    accentColor: '#FF9F43',
  },
  {
    id: 'hygiene-sanitation',
    title: 'Hospital-Grade Hygiene Protocol',
    description: 'Non-toxic toy sanitization, UV air purification, anti-bacterial flooring, and strict handwashing routines.',
    iconName: 'Sparkles',
    accentColor: '#6BCB77',
  },
  {
    id: 'first-aid',
    title: 'Pediatric First-Aid & On-Call Doctor',
    description: 'Fully trained pediatric first-responder staff and emergency medical partnerships.',
    iconName: 'Activity',
    accentColor: '#9B5DE5',
  },
  {
    id: 'organic-nutrition',
    title: 'Fresh & Hygienic Meals',
    description: 'Nutritionist-approved fresh fruit snacks, warm meals, and strict allergy management.',
    iconName: 'Utensils',
    accentColor: '#00CEC9',
  },
];
