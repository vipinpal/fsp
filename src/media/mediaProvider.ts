import { MediaItem } from './mediaConfig';

export interface MediaProvider {
  getHeroImages(): MediaItem[];
  getGalleryImages(category?: string): MediaItem[];
  getCampusImages(): MediaItem[];
  getEventImages(eventId?: string): MediaItem[];
  getAchievementImages(): MediaItem[];
}
