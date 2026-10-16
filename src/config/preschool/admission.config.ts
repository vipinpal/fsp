export interface AdmissionFormConfig {
  title: string;
  subtitle: string;
  ageOptions: string[];
  programOptions: string[];
  successTitle: string;
  successMessage: string;
}

export const admissionConfig: AdmissionFormConfig = {
  title: "Let's Start Their Little Adventure",
  subtitle: 'Contact us to enquire about admission or arrange a visit to Little Wings Care School.',
  ageOptions: ['Pre-Nursery (please enquire)', 'Nursery (3+ years)', 'Junior KG / LKG (4+ years)', 'Senior KG / UKG (5+ years)'],
  programOptions: ['Pre-Nursery', 'Nursery', 'LKG (Junior KG)', 'UKG (Senior KG)'],
  successTitle: '🎒 Enquiry Submitted Successfully!',
  successMessage: 'Thank you for contacting Little Wings Care School. We will get back to you soon.',
};
