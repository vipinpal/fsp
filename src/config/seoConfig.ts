export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
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
    foundingDate: string;
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
  defaultTitle: "Green Valley International School | CBSE World School New Delhi",
  titleTemplate: "%s | Green Valley International School",
  defaultDescription: "GVIS is a premier CBSE day and boarding school offering holistic academics, state-of-the-art sports facilities, smart classes, and values-driven pedagogy.",
  siteUrl: "https://www.greenvalley.edu.in",
  defaultOgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop&q=80",
  twitterHandle: "@GVISDelhi",
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Green Valley International School",
    alternateName: "GVIS Delhi",
    url: "https://www.greenvalley.edu.in",
    logo: "https://www.greenvalley.edu.in/branding/logo.svg",
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 14, Knowledge Parkway, Near Institutional Hub",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110078",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-11-2856-7890",
      contactType: "Admissions & General Information",
      email: "admissions@greenvalley.edu.in",
      availableLanguage: ["English", "Hindi"],
    },
  },
};
