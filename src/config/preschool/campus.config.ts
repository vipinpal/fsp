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
    title: 'Bright Smart Classrooms',
    subtitle: 'Ergonomic, colorful & safe',
    description: 'Rounded soft furniture, natural sunlight, interactive touch boards, and child-height learning shelves.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    badge: 'Classrooms',
  },
  {
    id: 'outdoor-turf',
    title: 'Padded Play Arena',
    subtitle: 'Anti-injury rubberized flooring',
    description: 'Custom mini climbs, spring balance bridges, sandbox zones, and shaded splash areas.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80',
    badge: 'Playground',
  },
  {
    id: 'story-castle',
    title: 'Story Castle Library',
    subtitle: 'Cozy cushions & plush toys',
    description: 'Over 1,000 tactile board books, audio headsets, puppet theater, and reading nooks.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    badge: 'Library',
  },
  {
    id: 'creative-studio',
    title: 'Little Picasso Art Lab',
    subtitle: 'Unleashing imagination',
    description: 'Easels, washable non-toxic paints, clay wheel tables, and display galleries.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    badge: 'Art Studio',
  },
];
