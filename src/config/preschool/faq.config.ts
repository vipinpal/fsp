export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqConfig: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What age groups do you accept for preschool admissions?',
    answer: 'We admit children from 2 years old up to 6 years old across our Playgroup, Nursery, LKG, and UKG programs.',
    category: 'Admissions',
  },
  {
    id: 'faq-2',
    question: 'What are the school operating hours?',
    answer: 'Standard morning sessions run Monday to Friday from 9:00 AM to 12:30 PM for Playgroup & Nursery, and 9:00 AM to 1:30 PM for LKG & UKG. Extended daycare is available until 5:30 PM.',
    category: 'Timings',
  },
  {
    id: 'faq-3',
    question: 'Can parents schedule a personal visit to inspect the campus?',
    answer: 'Absolutedly! We invite parents for personalized campus tours Monday through Saturday between 9:00 AM and 3:00 PM. You can book a visit directly using our online enquiry form or WhatsApp.',
    category: 'Campus Visit',
  },
  {
    id: 'faq-4',
    question: 'How do you ensure child safety and security?',
    answer: 'We maintain 100% CCTV coverage, gated biometric entry, background-checked female support staff, soft rubberized playground surfacing, and zero sharp edges in classrooms.',
    category: 'Safety',
  },
  {
    id: 'faq-5',
    question: 'Is school transport available for toddlers?',
    answer: 'Yes, we operate GPS-tracked, air-conditioned mini vans equipped with female attendants and seat belts across all major neighborhood routes.',
    category: 'Transport',
  },
  {
    id: 'faq-6',
    question: 'What is the student-teacher ratio in classrooms?',
    answer: 'We maintain a strict 1:8 ratio (1 Teacher + 1 Assistant Caregiver for every 8 children) to guarantee individualized emotional care and academic support.',
    category: 'Academics',
  },
];
