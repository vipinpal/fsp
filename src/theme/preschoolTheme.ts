import { SchoolThemeConfig } from './schoolTheme';
import { preschoolPalette } from '../config/preschoolTheme.palette';

export const preschoolThemeConfig: SchoolThemeConfig = {
  palette: {
    primary: preschoolPalette.coral,           // Coral #FF7A59
    primaryDark: '#E05A39',
    primaryLight: '#FFA088',
    primaryContrast: '#FFFFFF',
    secondary: preschoolPalette.primaryBlue,   // Sky Blue #55BCEB
    secondaryDark: '#3DA0CF',
    secondaryLight: preschoolPalette.sky,
    secondaryContrast: '#FFFFFF',
    accent: preschoolPalette.sunshine,         // Sunshine #FFD95A
    accentLight: preschoolPalette.sunshineLight,
    background: preschoolPalette.warmWhite,    // Warm White #FFFDF8
    backgroundAlt: preschoolPalette.cream,     // Cream #FFF9ED
    surface: '#FFFFFF',
    surfaceAlt: preschoolPalette.peachLight,
    textPrimary: preschoolPalette.text,        // Slate #30445A
    textSecondary: preschoolPalette.mutedText, // Muted Slate #64748B
    textMuted: '#94A3B8',
    border: preschoolPalette.borderLight,
    borderLight: '#F8F1E7',
    success: preschoolPalette.leafGreen,       // Leaf Green #73B95C
    warning: preschoolPalette.sunshine,
    error: preschoolPalette.coral,
    info: preschoolPalette.primaryBlue,
  },
  typography: {
    fontFamilyHeading: "'Fredoka', 'Quicksand', 'Outfit', sans-serif",
    fontFamilyBody: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    h1Size: '3.25rem',
    h2Size: '2.5rem',
    h3Size: '1.85rem',
    bodySize: '1.05rem',
  },
  borderRadius: {
    small: 14,
    medium: 22,
    large: 36,
    pill: 9999,
  },
  spacing: {
    sectionPadding: '96px 0',
    sectionPaddingMobile: '56px 0',
  },
  shadows: {
    card: '0 12px 32px -6px rgba(48, 68, 90, 0.06), 0 4px 12px rgba(85, 188, 235, 0.04)',
    cardHover: '0 24px 48px -6px rgba(255, 122, 89, 0.16), 0 12px 24px rgba(105, 215, 196, 0.12)',
    dropdown: '0 16px 48px rgba(48, 68, 90, 0.12)',
    hero: '0 24px 60px rgba(85, 188, 235, 0.18)',
  },
};
