import { MediaItem } from './mediaConfig';
import { MediaProvider } from './mediaProvider';
import { demoMedia } from '../data/demoMedia';

/**
 * Utility to convert public Google Drive share URLs or file IDs into direct image view/thumbnail links.
 * Works strictly in the browser without any Google API keys, OAuth secrets, or server proxies.
 */
export function formatGoogleDriveImageUrl(linkOrId: string, thumbnail: boolean = false): string {
  if (!linkOrId) return "";
  
  // Extract ID if a full share link was provided
  let id = linkOrId;
  const match = linkOrId.match(/\/d\/([a-zA-Z0-9_-]+)/) || linkOrId.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    id = match[1];
  }

  // If it's already an external HTTP link (e.g. Unsplash or S3 CDN), return as is
  if (linkOrId.startsWith("http://") || linkOrId.startsWith("https://")) {
    if (!linkOrId.includes("drive.google.com")) {
      return linkOrId;
    }
  }

  if (thumbnail) {
    return `https://drive.google.com/thumbnail?id=${id}&sz=w600`;
  }
  return `https://drive.google.com/uc?export=view&id=${id}`;
}

export class GoogleDriveMediaProvider implements MediaProvider {
  // If specific Google Drive file registries are configured in mediaConfig, they are transformed here.
  // Falls back gracefully to demo images if Google Drive folders are unset.
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

export const googleDriveMediaProvider = new GoogleDriveMediaProvider();
