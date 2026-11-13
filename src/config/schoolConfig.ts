export interface SchoolContact {
  phone: string;
  phoneAlt?: string;
  email: string;
  admissionEmail: string;
  principalEmail?: string;
  officeHours: string;
}

export interface SchoolAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string;
  landmark?: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
  twitter?: string;
}

export interface SchoolAffiliation {
  board: string;
  affiliationNumber: string;
  schoolCode: string;
  status: string;
  validUpto: string;
}

export interface SchoolConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  establishedYear?: number;
  board: string;
  classes: string;
  mediumOfInstruction: string;
  studentTeacherRatio: string;
  schoolType: string;
  logo: string;
  favicon: string;
  contact: SchoolContact;
  address: SchoolAddress;
  social: SocialLinks;
  affiliation: SchoolAffiliation;
  features: {
    enableAdmissionsMarquee: boolean;
    enableVirtualTour: boolean;
    enableOnlineEnquiry: boolean;
    enableFeeOnlinePortal: boolean;
  };
}

export const schoolConfig: SchoolConfig = {
  id: "little-wings-care-school",
  name: "Little Wings Care School",
  shortName: "Little Wings Care School",
  tagline: "Let your child fly",
  board: "Preschool",
  classes: "Pre-Nursery, Nursery, LKG, UKG",
  mediumOfInstruction: "English",
  studentTeacherRatio: "1:10",
  schoolType: "Preschool",
  logo: "/branding/little_wings_care_school_emblem.webp",
  favicon: "/branding/little-wings-care-school-favicon.ico",
  contact: {
    phone: "+91-94585-25278",
    phoneAlt: "+91-76176-87708",
    email: "littlewingsamroha@gmail.com",
    admissionEmail: "littlewingsamroha@gmail.com",
    officeHours: "Please contact the school for timings",
  },
  address: {
    line1: "Joya Road",
    line2: "Opp. Jeevan Jyoti Hospital",
    city: "Amroha",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "244221",
    landmark: "Opp. Jeevan Jyoti Hospital",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.87444843597763%2C78.47188174719916",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=28.87444843597763,78.47188174719916&output=embed&z=17",
  },
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    twitter: "",
  },
  affiliation: {
    board: "Not applicable",
    affiliationNumber: "Not applicable",
    schoolCode: "Not applicable",
    status: "Preschool",
    validUpto: "Not applicable",
  },
  features: {
    enableAdmissionsMarquee: true,
    enableVirtualTour: false,
    enableOnlineEnquiry: true,
    enableFeeOnlinePortal: false,
  },
};
