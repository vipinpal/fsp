export interface CampusZone {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export const campusConfig: CampusZone[] = [
  {
    id: 'interactive-classroom',
    title: 'Well-Ventilated AC Classrooms',
    subtitle: 'Designed for fresh air circulation',
    description: 'Air-conditioned classrooms with windows that allow fresh air to circulate.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    badge: 'Classrooms',
  },
  {
    id: 'outdoor-turf',
    title: 'Indoor & Outdoor Play Zones',
    subtitle: 'Age-appropriate games',
    description: 'Structured play zones with games selected for children’s ages and stages.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80',
    badge: 'Playground',
  },
  {
    id: 'story-castle',
    title: 'AV Activity Room',
    subtitle: 'Audio-visual activities',
    description: 'An activity room with audio-visual resources to support young learners.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    badge: 'Library',
  },
  {
    id: 'creative-studio',
    title: 'Health Check-Ups & Counselling',
    subtitle: 'Care for children and families',
    description: 'Students receive medical check-ups by specialist doctors, with counselling for parents and students.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    badge: 'Wellbeing',
  },
];
