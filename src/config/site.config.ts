export type SiteType = 'preschool' | 'school';

export interface SiteConfig {
  siteType: SiteType;
  tenantId: string;
  name: string;
  shortName: string;
  tagline: string;
  logo: string;
  favicon: string;
  phone: string;
  phoneAlt?: string;
  whatsappPhone: string;
  email: string;
  admissionEmail: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    twitter?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteType: 'preschool', // Default to Preschool experience! Toggle to 'school' to test original higher-school.
  tenantId: 'abc-little-learners',
  name: 'Little Learners Preschool & Early Learning Centre',
  shortName: 'Little Learners',
  tagline: 'Where Little Minds Grow, Play & Explore',
  logo: '/branding/logo.svg',
  favicon: '/branding/logo.svg',
  phone: '+91-98765-43210',
  phoneAlt: '+91-11-2856-7890',
  whatsappPhone: '+919876543210',
  email: 'hello@littlelearners.edu.in',
  admissionEmail: 'admissions@littlelearners.edu.in',
  address: {
    line1: 'Plot 42, Sunshine Boulevard, Joya Road',
    line2: 'Near Children Green Park',
    city: 'Amroha',
    state: 'Uttar Pradesh',
    postalCode: '244221',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Joya+Road,+Amroha,+Uttar+Pradesh&output=embed&z=15',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Joya+Road+Amroha',
  },
  social: {
    facebook: 'https://facebook.com/LittleLearnersPreschool',
    instagram: 'https://instagram.com/LittleLearnersPreschool',
    youtube: 'https://youtube.com/@LittleLearnersPreschool',
  },
};
