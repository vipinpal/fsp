export interface MediaItem {
  id: string;
  title: string;
  category?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  alt: string;
  caption?: string;
  featured?: boolean;
}

export interface MediaConfig {
  provider: "demo" | "google-drive";
  fallbackImage: string;
  googleDrive: {
    folderId?: string;
    // Map specific category folders to public Google Drive folder IDs
    folders: {
      branding: string;
      hero: string;
      campus: string;
      gallery: string;
      events: string;
      achievements: string;
    };
  };
}

export const mediaConfig: MediaConfig = {
  provider: "demo", // "demo" uses curated Unsplash school photography; "google-drive" translates public drive links
  fallbackImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80",
  googleDrive: {
    folderId: "",
    folders: {
      branding: "",
      hero: "",
      campus: "",
      gallery: "",
      events: "",
      achievements: "",
    },
  },
};
