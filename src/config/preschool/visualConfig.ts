// src/config/preschool/visualConfig.ts

/**
 * Central visual configuration for the Preschool site.
 * Provides paths to character assets, scene backgrounds, and floating objects.
 * All assets live under `public/assets/preschool/`.
 */

export type CharacterPose = "idle" | "wave" | "jump" | "read" | "play";
export type CharacterName = "mia" | "avi" | "milo" | "tara";

export interface CharacterAsset {
  name: CharacterName;
  poses: Record<CharacterPose, string>;
}

export const characters: Record<CharacterName, CharacterAsset> = {
  mia: {
    name: "mia",
    poses: {
      idle: "/assets/preschool/characters/mia/idle.svg",
      wave: "/assets/preschool/characters/mia/wave.svg",
      jump: "/assets/preschool/characters/mia/jump.svg",
      read: "/assets/preschool/characters/mia/read.svg",
      play: "/assets/preschool/characters/mia/play.svg",
    },
  },
  avi: {
    name: "avi",
    poses: {
      idle: "/assets/preschool/characters/avi/idle.svg",
      wave: "/assets/preschool/characters/avi/wave.svg",
      jump: "/assets/preschool/characters/avi/jump.svg",
      read: "/assets/preschool/characters/avi/read.svg",
      play: "/assets/preschool/characters/avi/play.svg",
    },
  },
  milo: {
    name: "milo",
    poses: {
      idle: "/assets/preschool/characters/milo/idle.svg",
      wave: "/assets/preschool/characters/milo/wave.svg",
      jump: "/assets/preschool/characters/milo/jump.svg",
      read: "/assets/preschool/characters/milo/read.svg",
      play: "/assets/preschool/characters/milo/play.svg",
    },
  },
  tara: {
    name: "tara",
    poses: {
      idle: "/assets/preschool/characters/tara/idle.svg",
      wave: "/assets/preschool/characters/tara/wave.svg",
      jump: "/assets/preschool/characters/tara/jump.svg",
      read: "/assets/preschool/characters/tara/read.svg",
      play: "/assets/preschool/characters/tara/play.svg",
    },
  },
};

// Scene backgrounds
export const scenes: Record<string, string> = {
  hero: "/assets/preschool/scenes/hero.svg",
  journey: "/assets/preschool/scenes/journey.svg",
  programs: "/assets/preschool/scenes/programs.svg",
  activities: "/assets/preschool/scenes/activities.svg",
  campus: "/assets/preschool/scenes/campus.svg",
  admission: "/assets/preschool/scenes/admission.svg",
};

// Decorative floating objects
export const floatingObjects: Record<string, string> = {
  balloon: "/assets/preschool/objects/balloon.svg",
  kite: "/assets/preschool/objects/kite.svg",
  alphabetA: "/assets/preschool/objects/alphabetA.svg",
  alphabetB: "/assets/preschool/objects/alphabetB.svg",
  paperPlane: "/assets/preschool/objects/paperPlane.svg",
};

export const visualConfig = {
  characters,
  scenes,
  floatingObjects,
};
