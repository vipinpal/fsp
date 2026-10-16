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
    answer: 'Little Wings Care School offers Pre-Nursery, Nursery, LKG, and UKG. The stated criteria are Nursery: 3+ years, Junior KG (LKG): 4+ years, and Senior KG (UKG): 5+ years. Please contact the school about Pre-Nursery eligibility.',
    category: 'Admissions',
  },
  {
    id: 'faq-2',
    question: 'What facilities are available?',
    answer: 'Facilities include indoor and outdoor play zones with age-appropriate games, ventilated air-conditioned classrooms, and an audio-video activity room.',
    category: 'Timings',
  },
  {
    id: 'faq-3',
    question: 'Can parents schedule a personal visit to inspect the campus?',
    answer: 'Yes. Contact the school by phone or email to arrange a visit.',
    category: 'Campus Visit',
  },
  {
    id: 'faq-4',
    question: 'What is the teacher-student ratio?',
    answer: 'The teacher-student ratio is 1:10.',
    category: 'Safety',
  },
  {
    id: 'faq-5',
    question: 'Do students receive medical check-ups?',
    answer: 'Students receive medical check-ups by specialist doctors.',
    category: 'Transport',
  },
  {
    id: 'faq-6',
    question: 'Is counselling available for families?',
    answer: 'Counselling is available for parents and students.',
    category: 'Academics',
  },
];
