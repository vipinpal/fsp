export interface JourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badgeColor: string;
  nodeBg: string;
}

export const journeyConfig: JourneyStep[] = [
  {
    stepNumber: 1,
    title: 'Create',
    subtitle: 'Tactile Arts & Expression',
    description: 'Children express imagination through paints, clay work, music, and colorful crafting.',
    icon: 'Palette',
    badgeColor: '#FF6B6B',
    nodeBg: '#FFEAEB',
  },
  {
    stepNumber: 2,
    title: 'Explore',
    subtitle: 'Puzzles & Problem Solving',
    description: 'Hands-on discovery through building blocks, STEM toys, and interactive sensory stations.',
    icon: 'Puzzle',
    badgeColor: '#4ECDC4',
    nodeBg: '#E6FAF7',
  },
  {
    stepNumber: 3,
    title: 'Discover',
    subtitle: 'Story Time & Literacy',
    description: 'Fostering a love for reading, phonics, puppet theater, and rich imaginative tales.',
    icon: 'BookOpen',
    badgeColor: '#FFE66D',
    nodeBg: '#FFFBEA',
  },
  {
    stepNumber: 4,
    title: 'Express',
    subtitle: 'Music, Movement & Nature',
    description: 'Rhythmic dancing, outdoor play, garden exploration, and confident peer communication.',
    icon: 'Music',
    badgeColor: '#6BCB77',
    nodeBg: '#EEFBEF',
  },
];
