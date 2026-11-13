export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  badgeColor: string;
  image: string;
}

export const activitiesConfig: ActivityItem[] = [
  {
    id: 'art-craft',
    title: 'Social and Environmental Science',
    category: 'Concept-Based Learning',
    description: 'Age-appropriate activities introduce children to themselves, their community, and the environment around them.',
    icon: 'Palette',
    badgeColor: '#FF6B6B',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
  },
  // {
  //   id: 'music-dance',
  //   title: 'Nature Walks',
  //   category: 'Concept-Based Learning',
  //   description: 'Children observe and talk about nature through guided walks and outdoor exploration.',
  //   icon: 'Music',
  //   badgeColor: '#4ECDC4',
  //   image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  // },
  {
    id: 'story-time',
    title: 'Numeracy',
    category: 'Concept-Based Learning',
    description: 'Hands-on activities help children notice numbers, quantities, and patterns.',
    icon: 'BookOpen',
    badgeColor: '#9B5DE5',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'puzzles-stem',
    title: 'Matching, Naming & Classifying',
    category: 'Concept-Based Learning',
    description: 'Children build language and observation skills by matching, naming, and grouping familiar objects.',
    icon: 'Puzzle',
    badgeColor: '#FF9F43',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nature-garden',
    title: 'Identifying & Sequencing',
    category: 'Concept-Based Learning',
    description: 'Guided activities help children recognize objects and arrange events, images, or ideas in sequence.',
    icon: 'Sprout',
    badgeColor: '#6BCB77',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'outdoor-play',
    title: 'Puzzles, Riddles & Mazes',
    category: 'Concept-Based Learning',
    description: 'Playful puzzles, riddles, and mazes encourage children to think, explore, and find solutions.',
    icon: 'Gamepad2',
    badgeColor: '#00CEC9',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'music-dance',
    title: 'Music & Dance',
    category: 'Creative Activities',
    description: 'Music and dance activities give children opportunities to express themselves through rhythm and movement.',
    icon: 'Music',
    badgeColor: '#00CEC9',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  },
];
