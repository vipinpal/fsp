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
    threads?: string;
    twitter?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteType: 'preschool', // Default to Preschool experience! Toggle to 'school' to test original higher-school.
  tenantId: 'Little Wings Care School',
  name: 'Little Wings Care School',
  shortName: 'LWCS',
  tagline: 'The Rising Sun',
  logo: '/branding/little_wings_care_school_emblem.webp',
  favicon: '/branding/little-wings-care-school-favicon.ico',
  phone: '+91-94585-25278',
  phoneAlt: '+91-76176-87708',
  whatsappPhone: '919458525278',
  email: 'littlewingsamroha@gmail.com',
  admissionEmail: 'littlewingsamroha@gmail.com',
  address: {
    line1: 'Joya Road',
    line2: 'Opp. Jeevan Jyoti Hospital',
    city: 'Amroha',
    state: 'Uttar Pradesh',
    postalCode: '244221',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=28.87444843597763,78.47188174719916&output=embed&z=17',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=28.87444843597763%2C78.47188174719916',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61587504522692',
    instagram: 'https://www.instagram.com/little.wings.care.school/',
    youtube: 'https://www.youtube.com/@Littlewingscareschool1',
    threads: 'https://www.threads.com/@little.wings.care.school',
  },
};
