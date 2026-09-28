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
  schoolEmail: "admissions@greenvalley.edu.in",
  defaultSubjectPrefix: "[GVIS Admission Enquiry 2026-27]",
  gradesList: [
    "Pre-Nursery",
    "Nursery",
    "Kindergarten (KG)",
    "Grade I",
    "Grade II",
    "Grade III",
    "Grade IV",
    "Grade V",
    "Grade VI",
    "Grade VII",
    "Grade VIII",
    "Grade IX",
    "Grade X",
    "Grade XI (Medical)",
    "Grade XI (Non-Medical)",
    "Grade XI (Commerce)",
    "Grade XI (Humanities)",
    "Grade XII",
  ],
  enquiryTypes: [
    "New Admission (Day Scholar)",
    "New Admission (Boarding)",
    "Campus Visit / School Tour",
    "Fee & Scholarship Query",
    "Transport & Bus Route Inquiry",
    "General Information",
  ],
};
