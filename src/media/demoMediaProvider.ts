import { MediaItem } from './mediaConfig';
import { MediaProvider } from './mediaProvider';
import { demoMedia } from '../data/demoMedia';

export class DemoMediaProvider implements MediaProvider {
  getHeroImages(): MediaItem[] {
    return demoMedia.hero;
  }

  getGalleryImages(category?: string): MediaItem[] {
    if (!category || category === "All") {
      return demoMedia.gallery;
    }
    return demoMedia.gallery.filter(
      (img) => img.category?.toLowerCase() === category.toLowerCase()
    );
  }

  getCampusImages(): MediaItem[] {
    return demoMedia.campus;
  }

  getEventImages(_eventId?: string): MediaItem[] {
    return demoMedia.events;
  }

  getAchievementImages(): MediaItem[] {
    return demoMedia.achievements;
  }
}

export const demoMediaProvider = new DemoMediaProvider();
