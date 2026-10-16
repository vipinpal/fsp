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
    title: 'Pre-Nursery',
    age: 'Please enquire',
    tagline: 'A Gentle First Step into Learning',
    description: 'A welcoming first school experience where children can explore, play, and become comfortable in a learning environment.',
    iconName: 'Baby',
    themeColor: '#FF6B6B',
    accentBg: '#FFF0F0',
    textColor: '#D32F2F',
    features: ['Play-based exploration', 'Music and movement', 'Social interaction', 'Age-appropriate activities'],
    enabled: true,
  },
  {
    id: 'nursery',
    title: 'Nursery',
    age: '3+ Years',
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
    age: '4+ Years',
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
    age: '5+ Years',
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
