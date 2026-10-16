export interface EnquiryConfig {
  enabled: boolean;
  provider: "external-form" | "mailto";
  endpoint: string; // Public browser-friendly form webhook (e.g., Formspree, Web3Forms, Google Forms webhook)
  schoolEmail: string;
  defaultSubjectPrefix: string;
  gradesList: string[];
  enquiryTypes: string[];
}

export const enquiryConfig: EnquiryConfig = {
  enabled: true,
  provider: "mailto", // Defaults to reliable zero-dependency mailto; change to 'external-form' when endpoint is set
  endpoint: "https://formspree.io/f/example-endpoint", // Optional public static form endpoint
  schoolEmail: "littlewingsamroha@gmail.com",
  defaultSubjectPrefix: "[Little Wings Care School Admission Enquiry]",
  gradesList: [
    "Pre-Nursery",
    "Nursery",
    "LKG (Junior KG)",
    "UKG (Senior KG)",
  ],
  enquiryTypes: [
    "New Preschool Admission",
    "Campus Visit / School Tour",
    "General Information",
  ],
};
