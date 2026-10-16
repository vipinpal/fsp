export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  keywords: string[];
  siteUrl: string;
  defaultOgImage: string;
  twitterHandle: string;
  organizationSchema: {
    "@context": string;
    "@type": string;
    name: string;
    alternateName: string;
    url: string;
    logo: string;
    foundingDate?: string;
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
  defaultDescription: "Little Wings Care School (LECS) is a play school in Amroha for Pre-Nursery, Nursery, LKG, and UKG, with activity-based learning, caring teachers, and family engagement.",
  keywords: [
    "play school in Amroha",
    "preschool in Amroha",
    "best preschool in Amroha",
    "nursery school in Amroha",
    "nursery admission Amroha",
    "Pre-Nursery in Amroha",
    "LKG admission Amroha",
    "UKG school in Amroha",
    "kindergarten in Amroha",
    "early childhood education Amroha",
    "activity-based learning Amroha",
    "Little Wings Care School",
    "LECS Amroha",
    "LECS play school",
    "LECS preschool Amroha",
    "Little Wings Care School LECS",
    "play school near Joya Road Amroha",
    "preschool near Jeevan Jyoti Hospital Amroha",
    "play school admission Amroha",
    "Nursery LKG UKG admission Amroha",
    "activity-based preschool Amroha",
  ],
  siteUrl: "",
  defaultOgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop&q=80",
  twitterHandle: "",
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Little Wings Care School",
    alternateName: "LECS",
    url: "",
    logo: "",
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
