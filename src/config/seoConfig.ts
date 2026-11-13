export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  defaultOgImage: string;
  twitterHandle: string;
  organizationSchema: {
    "@context": string;
    "@type": string | string[];
    name: string;
    alternateName: string;
    url: string;
    logo: string;
    sameAs?: string[];
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    contactPoint: {
      "@type": string;
      telephone: string;
      contactType: string;
      email: string;
      availableLanguage: string[];
    };
  };
}

export const seoConfig: SEOConfig = {
  defaultTitle: "Little Wings Care School | Play School in Amroha",
  titleTemplate: "%s | Little Wings Care School",
  defaultDescription: "Looking for a play school in Amroha? Little Wings Care School offers Pre-Nursery, Nursery, LKG and UKG with activity-based learning. Contact us for admission enquiries and school visits.",
  siteUrl: "https://littlewingscareplayschool.com",
  defaultOgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop&q=80",
  twitterHandle: "",
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "Preschool"],
    name: "Little Wings Care School",
    alternateName: "LECS",
    url: "https://littlewingscareplayschool.com",
    logo: "https://littlewingscareplayschool.com/branding/little_wings_care_school_emblem.webp",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61587504522692",
      "https://www.instagram.com/little.wings.care.school/",
      "https://www.youtube.com/@Littlewingscareschool1"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Joya Road, Opp. Jeevan Jyoti Hospital",
      addressLocality: "Amroha",
      addressRegion: "Uttar Pradesh",
      postalCode: "244221",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-94585-25278",
      contactType: "Admissions & General Information",
      email: "littlewingsamroha@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
  },
};
