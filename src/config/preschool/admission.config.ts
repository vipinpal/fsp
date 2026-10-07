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
  subtitle: 'Fill out this quick form to schedule a campus tour or receive our 2026–2027 preschool prospectus.',
  ageOptions: ['1.5 – 2 Years', '2 – 3 Years (Playgroup)', '3 – 4 Years (Nursery)', '4 – 5 Years (LKG)', '5 – 6 Years (UKG)'],
  programOptions: ['Playgroup', 'Nursery', 'LKG (Lower Kindergarten)', 'UKG (Upper Kindergarten)', 'Day Care & After School'],
  successTitle: '🎒 Enquiry Submitted Successfully!',
  successMessage: 'Thank you! Our admissions coordinator will reach out within 2 hours to confirm your school visit.',
};
