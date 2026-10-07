export interface SocialFeedItem {
  id: string;
  platform: 'Instagram' | 'Facebook';
  mediaType: 'image' | 'video' | 'carousel';
  mediaUrl: string;
  caption: string;
  likes: number;
  commentsCount: number;
  postUrl: string;
  date: string;
}

export const socialConfig: SocialFeedItem[] = [
  {
    id: 'soc-1',
    platform: 'Instagram',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    caption: '🎨 Colorful morning! Our Nursery explorers created vibrant butterfly canvases using organic finger paints. #LittleMinds #PreschoolArt',
    likes: 184,
    commentsCount: 22,
    postUrl: 'https://instagram.com',
    date: '2 hours ago',
  },
  {
    id: 'soc-2',
    platform: 'Facebook',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80',
    caption: '☀️ Sunshine Splash & Tricycle Relay Day! LKG & UKG champions building balance and teamwork on our soft play turf.',
    likes: 240,
    commentsCount: 31,
    postUrl: 'https://facebook.com',
    date: 'Yesterday',
  },
  {
    id: 'soc-3',
    platform: 'Instagram',
    mediaType: 'carousel',
    mediaUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    caption: '📚 Storytelling Magic with Principal Ma’am! Puppet theater and interactive fairytale reading in the library castle.',
    likes: 312,
    commentsCount: 45,
    postUrl: 'https://instagram.com',
    date: '3 days ago',
  },
  {
    id: 'soc-4',
    platform: 'Instagram',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    caption: '🌱 Organic Plant Care: Our young botanists watering their tiny sunflower pots today!',
    likes: 198,
    commentsCount: 18,
    postUrl: 'https://instagram.com',
    date: '4 days ago',
  },
];
