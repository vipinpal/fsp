export type GalleryCategory = 'Classrooms' | 'Activities' | 'Events' | 'Playground' | 'Celebrations';

export interface GalleryMediaItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  caption: string;
}

const galleryCategoryByFolder: Record<string, GalleryCategory> = {
  classrooms: 'Classrooms',
  activities: 'Activities',
  events: 'Events',
  playground: 'Playground',
  celebrations: 'Celebrations',
};

const localGalleryImages = import.meta.glob<string>(
  '../../assets/preschool/gallery/**/*.{avif,gif,jpg,jpeg,png,webp}',
  { eager: true, import: 'default', query: '?url' },
);

const localGalleryItems: GalleryMediaItem[] = Object.entries(localGalleryImages)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
  .map(([path, imageUrl]) => {
    const [folder, filename] = path.split('/').slice(-2);
    const category = galleryCategoryByFolder[folder.toLowerCase()];
    if (!category) {
      throw new Error(`Unknown gallery category folder "${folder}" in ${path}`);
    }

    const imageName = filename.replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, '');
    const title = imageName
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

    return {
      id: path,
      title: title || 'School gallery photo',
      category,
      imageUrl,
      caption: '',
    };
  });

export const galleryConfig: GalleryMediaItem[] = localGalleryItems;
