export interface TestimonialItem {
  id: string;
  parentName: string;
  parentRole: string;
  childName: string;
  program: string;
  rating: number;
  avatar: string;
  quote: string;
}

export const testimonialsConfig: TestimonialItem[] = [
  {
    id: 't-1',
    parentName: 'Priya & Rahul Sharma',
    parentRole: 'Parents of Ananya',
    childName: 'Ananya',
    program: 'Nursery',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    quote: 'Our daughter wakes up excited for school every morning! The teachers treat each child like their own family. The growth in her confidence and vocabulary is truly remarkable.',
  },
  {
    id: 't-2',
    parentName: 'Vikram & Sneha Mehta',
    parentRole: 'Parents of Kabir',
    childName: 'Kabir',
    program: 'Playgroup',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'As working parents, safety and hygiene were our top concerns. The live updates, caring staff, and ultra-clean environment gave us complete peace of mind.',
  },
  {
    id: 't-3',
    parentName: 'Dr. Alok & Meera Kapoor',
    parentRole: 'Parents of Aarav',
    childName: 'Aarav',
    program: 'UKG',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'The play-based learning approach here is top notch. Aarav has developed strong math curiosity, stage confidence, and great handwriting before entering Grade 1.',
  },
];
