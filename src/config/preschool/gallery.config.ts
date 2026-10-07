export interface GalleryMediaItem {
  id: string;
  title: string;
  category: 'All' | 'Classrooms' | 'Activities' | 'Events' | 'Playground' | 'Celebrations';
  imageUrl: string;
  caption: string;
}

export const galleryConfig: GalleryMediaItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Annual Carnival',
    category: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    caption: 'Little ones performing on stage during our annual cultural splash event.',
  },
  {
    id: 'gal-2',
    title: 'Clay & Finger Painting Session',
    category: 'Activities',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    caption: 'Tactile sensory painting and clay crafting in the Picasso studio.',
  },
  {
    id: 'gal-3',
    title: 'Outdoor Splash & Race Day',
    category: 'Playground',
    imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80',
    caption: 'Healthy physical games and mini obstacle courses under teacher care.',
  },
  {
    id: 'gal-4',
    title: 'Storytelling Circle',
    category: 'Classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    caption: 'Puppet theatre and interactive reading in our cozy library corner.',
  },
  {
    id: 'gal-5',
    title: 'Grandparents Day Celebration',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    caption: 'Welcoming grandparents for traditional songs and gift making.',
  },
  {
    id: 'gal-6',
    title: 'Junior Chef Salad Workshop',
    category: 'Activities',
    imageUrl: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80',
    caption: 'Learning healthy eating habits with flame-free fruit arrangements.',
  },
];
