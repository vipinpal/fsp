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
  establishedYear: number;
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
  id: "green-valley-international",
  name: "Green Valley International School",
  shortName: "GVIS",
  tagline: "Learning Today. Leading Tomorrow.",
  establishedYear: 2010,
  board: "CBSE (Central Board of Secondary Education)",
  classes: "Pre-Nursery to Grade XII",
  mediumOfInstruction: "English",
  studentTeacherRatio: "18:1",
  schoolType: "Co-Educational Day-cum-Boarding School",
  logo: "/branding/logo.svg",
  favicon: "/branding/logo.svg",
  contact: {
    phone: "+91-11-2856-7890",
    phoneAlt: "+91-98765-43210",
    email: "info@greenvalley.edu.in",
    admissionEmail: "admissions@greenvalley.edu.in",
    principalEmail: "principal@greenvalley.edu.in",
    officeHours: "Monday to Saturday: 8:00 AM – 4:00 PM",
  },
  address: {
    line1: "Sector 14, Knowledge Parkway",
    line2: "Near Institutional Hub",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    postalCode: "110078",
    landmark: "Opposite Tech Innovation Center",
    googleMapsUrl: "https://maps.google.com/?q=Sector+14+Knowledge+Parkway+New+Delhi+110078",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Sector+14,+Knowledge+Parkway,+New+Delhi,+Delhi+110078,+India&output=embed&z=15",
  },
  social: {
    facebook: "https://facebook.com/GreenValleyInternationalSchool",
    instagram: "https://instagram.com/GreenValleySchool",
    youtube: "https://youtube.com/@GreenValleySchool",
    linkedin: "https://linkedin.com/company/green-valley-international-school",
    twitter: "https://twitter.com/GVISDelhi",
  },
  affiliation: {
    board: "CBSE, New Delhi",
    affiliationNumber: "CBSE/AFF/2130987",
    schoolCode: "84021",
    status: "Provisional Affiliation up to Senior Secondary Level",
    validUpto: "31/03/2029",
  },
  features: {
    enableAdmissionsMarquee: true,
    enableVirtualTour: false,
    enableOnlineEnquiry: true,
    enableFeeOnlinePortal: false,
  },
};
