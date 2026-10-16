export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export const trustConfig: TrustPillar[] = [
  {
    id: 'cctv-safety',
    title: 'Indoor & Outdoor Play Zones',
    description: 'Structured play zones offer games appropriate to children’s ages.',
    iconName: 'ShieldCheck',
    accentColor: '#FF6B6B',
  },
  {
    id: 'caring-educators',
    title: 'Activity-Based Learning',
    description: 'Children learn through engaging activities, exploration, and play.',
    iconName: 'HeartHandshake',
    accentColor: '#4ECDC4',
  },
  {
    id: 'teacher-ratio',
    title: '1:10 Teacher-Student Ratio',
    description: 'A teacher-student ratio of 1:10.',
    iconName: 'Users',
    accentColor: '#FF9F43',
  },
  {
    id: 'hygiene-sanitation',
    title: 'Ventilated AC Classrooms',
    description: 'Air-conditioned classrooms are designed with windows for fresh air circulation.',
    iconName: 'Sparkles',
    accentColor: '#6BCB77',
  },
  {
    id: 'first-aid',
    title: 'Medical Check-Ups',
    description: 'Students receive medical check-ups by specialist doctors.',
    iconName: 'Activity',
    accentColor: '#9B5DE5',
  },
  {
    id: 'organic-nutrition',
    title: 'Parent & Student Counselling',
    description: 'Counselling is available for parents and students.',
    iconName: 'Utensils',
    accentColor: '#00CEC9',
  },
];

export const curriculumFeatureConfig: TrustPillar[] = [
  {
    id: 'weekly-planner',
    title: 'Weekly Planner',
    description: 'A weekly overview helps parents follow upcoming classroom themes, activities, and learning experiences.',
    iconName: 'CalendarDays',
    accentColor: '#FF6B6B',
  },
  {
    id: 'school-home-communique',
    title: 'School-Home Communique',
    description: 'Regular communication bridges school and home, keeping families connected to each child’s learning journey.',
    iconName: 'MessageSquareText',
    accentColor: '#4ECDC4',
  },
  {
    id: 'flow-of-the-day',
    title: 'Flow of the Day',
    description: 'A clear daily rhythm helps children feel settled and know what to expect throughout their school day.',
    iconName: 'ListOrdered',
    accentColor: '#FF9F43',
  },
  {
    id: 'digital-gallery',
    title: 'Digital Gallery & Social Media',
    description: 'A digital gallery and social updates let families share in classroom moments and school celebrations.',
    iconName: 'Images',
    accentColor: '#6BCB77',
  },
  {
    id: 'online-hybrid-learning',
    title: 'Online & Hybrid Learning',
    description: 'Online and hybrid learning models help children stay connected to learning in different circumstances.',
    iconName: 'Laptop',
    accentColor: '#9B5DE5',
  },
  {
    id: 'parent-participation',
    title: 'Parent Participation Programme',
    description: 'Parents are invited to take part in school activities and contribute to their child’s learning journey.',
    iconName: 'UsersRound',
    accentColor: '#00CEC9',
  },
  {
    id: 'student-assessments',
    title: 'Student Assessments & Reports',
    description: 'Assessments and reports help families understand each child’s progress and next learning steps.',
    iconName: 'ClipboardCheck',
    accentColor: '#FF9F43',
  },
  {
    id: 'class-presentations',
    title: 'Class Presentations',
    description: 'Presentations give children opportunities to share ideas, practice speaking, and grow in confidence.',
    iconName: 'Presentation',
    accentColor: '#55BCEB',
  },
];
