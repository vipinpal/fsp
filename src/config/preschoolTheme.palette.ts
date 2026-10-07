export const preschoolPalette = {
  sky: '#CFEFFF',
  skyLight: '#E8F6FF',
  primaryBlue: '#55BCEB',
  sunshine: '#FFD95A',
  sunshineLight: '#FFF6D6',
  coral: '#FF7A59',
  coralLight: '#FFEAE5',
  mint: '#69D7C4',
  mintLight: '#E6FAF6',
  leafGreen: '#73B95C',
  leafGreenLight: '#EEF8EB',
  lavender: '#A994E8',
  lavenderLight: '#F2EEFC',
  peach: '#FFD0B5',
  peachLight: '#FFF3EC',
  cream: '#FFF9ED',
  warmWhite: '#FFFDF8',
  text: '#30445A',
  mutedText: '#64748B',
  borderLight: '#F0E6D8',
};

export const sectionEnvironments = {
  hero: {
    bg: `linear-gradient(180deg, ${preschoolPalette.skyLight} 0%, ${preschoolPalette.cream} 60%, ${preschoolPalette.warmWhite} 100%)`,
    text: preschoolPalette.text,
    accent: preschoolPalette.sunshine,
    buttonBg: preschoolPalette.coral,
    buttonText: '#FFFFFF',
  },
  whyUs: {
    bg: preschoolPalette.cream,
    cardBg: preschoolPalette.mintLight,
    border: '#D0F2EC',
    accent: preschoolPalette.mint,
  },
  learningJourney: {
    bg: `linear-gradient(180deg, ${preschoolPalette.leafGreenLight} 0%, ${preschoolPalette.sunshineLight} 100%)`,
    accent: preschoolPalette.leafGreen,
    pathColor: preschoolPalette.sunshine,
  },
  programs: {
    bg: preschoolPalette.warmWhite,
    playgroup: { bg: preschoolPalette.coralLight, border: preschoolPalette.coral, text: '#D94D2B' },
    nursery: { bg: preschoolPalette.skyLight, border: preschoolPalette.primaryBlue, text: '#2B8BB6' },
    lkg: { bg: preschoolPalette.sunshineLight, border: preschoolPalette.sunshine, text: '#C79A00' },
    ukg: { bg: preschoolPalette.lavenderLight, border: preschoolPalette.lavender, text: '#765BC7' },
  },
  activities: {
    bg: `linear-gradient(180deg, ${preschoolPalette.peachLight} 0%, ${preschoolPalette.lavenderLight} 50%, ${preschoolPalette.mintLight} 100%)`,
    accent: preschoolPalette.lavender,
  },
  campus: {
    bg: preschoolPalette.skyLight,
    accent: preschoolPalette.leafGreen,
  },
  gallery: {
    bg: preschoolPalette.warmWhite,
    accent: preschoolPalette.primaryBlue,
  },
  testimonials: {
    bg: `linear-gradient(180deg, ${preschoolPalette.lavenderLight} 0%, ${preschoolPalette.cream} 100%)`,
    accent: preschoolPalette.lavender,
  },
  social: {
    bg: preschoolPalette.skyLight,
    accent: preschoolPalette.primaryBlue,
  },
  admission: {
    bg: `linear-gradient(135deg, ${preschoolPalette.coralLight} 0%, ${preschoolPalette.sunshineLight} 100%)`,
    cardBg: '#FFFFFF',
    accent: preschoolPalette.coral,
  },
  footer: {
    bg: preschoolPalette.text,
    accent: preschoolPalette.sunshine,
  },
};
