export interface ProgramItem {
  id: string;
  title: string;
  age: string;
  tagline: string;
  description: string;
  iconName: string;
  themeColor: string;
  accentBg: string;
  textColor: string;
  features: string[];
  enabled: boolean;
}

export const programsConfig: ProgramItem[] = [
  {
    id: 'playgroup',
    title: 'Playgroup',
    age: '2 – 3 Years',
    tagline: 'Sensory Exploration & First Friendships',
    description: 'A gentle introduction to learning through tactile sensory play, nursery rhymes, motor skill exercises, and playful social interaction.',
    iconName: 'Baby',
    themeColor: '#FF6B6B',
    accentBg: '#FFF0F0',
    textColor: '#D32F2F',
    features: ['Sensory & Tactile Play', 'Nursery Rhymes & Music', 'Fine & Gross Motor Skills', 'Basic Social Habits'],
    enabled: true,
  },
  {
    id: 'nursery',
    title: 'Nursery',
    age: '3 – 4 Years',
    tagline: 'Language, Curiosity & Creative Expression',
    description: 'Encouraging phonics, basic counting, creative arts, and storytelling to foster early communication and confident curiosity.',
    iconName: 'Palette',
    themeColor: '#4ECDC4',
    accentBg: '#E8F8F7',
    textColor: '#00897B',
    features: ['Phonics & Vocal Sounding', 'Art, Clay & Crafting', 'Number Recognition', 'Guided Storytelling'],
    enabled: true,
  },
  {
    id: 'lkg',
    title: 'LKG (Lower Kindergarten)',
    age: '4 – 5 Years',
    tagline: 'Logical Discovery & Structured Early Literacy',
    description: 'Building early reading, structured math concepts, science curiosity, and collaborative group activities in a fun setting.',
    iconName: 'BookOpen',
    themeColor: '#FF9F43',
    accentBg: '#FFF5EB',
    textColor: '#E65100',
    features: ['Reading & Pre-Writing', 'Counting & Shapes', 'Little Scientist Lab', 'Stage Confidence'],
    enabled: true,
  },
  {
    id: 'ukg',
    title: 'UKG (Upper Kindergarten)',
    age: '5 – 6 Years',
    tagline: 'Primary School Readiness & Critical Thinking',
    description: 'Preparing children with solid literacy, math confidence, problem-solving skills, environmental awareness, and emotional independence.',
    iconName: 'GraduationCap',
    themeColor: '#9B5DE5',
    accentBg: '#F5EEFC',
    textColor: '#6A1B9A',
    features: ['Independent Writing', 'Basic Math Operations', 'EVS & World Awareness', 'Smooth Grade 1 Transition'],
    enabled: true,
  },
];
