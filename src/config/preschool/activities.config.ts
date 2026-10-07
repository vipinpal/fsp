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
    title: 'Art & Finger Painting',
    category: 'Creative Arts',
    description: 'Messy play, canvas painting, and color-mixing activities designed to blossom creative expression.',
    icon: 'Palette',
    badgeColor: '#FF6B6B',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'music-dance',
    title: 'Music & Movement',
    category: 'Performing Arts',
    description: 'Rhythm instruments, sing-alongs, and fun dance routines to develop coordination and auditory skills.',
    icon: 'Music',
    badgeColor: '#4ECDC4',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'story-time',
    title: 'Storytelling & Puppetry',
    category: 'Literacy',
    description: 'Immersive story sessions in our cozy reading corner featuring puppets, giant picture books, and roleplay.',
    icon: 'BookOpen',
    badgeColor: '#9B5DE5',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'puzzles-stem',
    title: 'Puzzles & Smart Blocks',
    category: 'Cognitive',
    description: 'Shape sorting, block engineering, and logical puzzles that ignite young critical thinking minds.',
    icon: 'Puzzle',
    badgeColor: '#FF9F43',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nature-garden',
    title: 'Little Botanists Garden',
    category: 'Nature',
    description: 'Hands-on seed planting, bug watching, and outdoor sensory walks in our private green courtyard.',
    icon: 'Sprout',
    badgeColor: '#6BCB77',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'outdoor-play',
    title: 'Safe Splash & Outdoor Fun',
    category: 'Physical',
    description: 'Soft padded play zones, mini slides, tricycles, and splash play for healthy physical growth.',
    icon: 'Gamepad2',
    badgeColor: '#00CEC9',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80',
  },
];
