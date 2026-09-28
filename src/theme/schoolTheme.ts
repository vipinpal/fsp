export interface PaletteConfig {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primaryContrast: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  secondaryContrast: string;
  accent: string;
  accentLight: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  surfaceAlt: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderLight: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface TypographyConfig {
  fontFamilyHeading: string;
  fontFamilyBody: string;
  h1Size: string;
  h2Size: string;
  h3Size: string;
  bodySize: string;
}

export interface SchoolThemeConfig {
  palette: PaletteConfig;
  typography: TypographyConfig;
  borderRadius: {
    small: number;
    medium: number;
    large: number;
    pill: number;
  };
  spacing: {
    sectionPadding: string;
    sectionPaddingMobile: string;
  };
  shadows: {
    card: string;
    cardHover: string;
    dropdown: string;
    hero: string;
  };
}

export const schoolThemeConfig: SchoolThemeConfig = {
  palette: {
    primary: "#0F3D3E",          // Deep Emerald / British Racing Green
    primaryDark: "#082425",      // Dark Forest
    primaryLight: "#1D5D5E",     // Balanced Teal-Green
    primaryContrast: "#FFFFFF",
    secondary: "#D4AF37",        // Royal Gold / Warm Champagne
    secondaryDark: "#AA8C2C",    // Deep Antique Gold
    secondaryLight: "#F3E5AB",   // Warm Gold Glow
    secondaryContrast: "#0F3D3E",
    accent: "#E26D5C",           // Terracotta Warm Accent
    accentLight: "#FAD4CE",
    background: "#FFFFFF",
    backgroundAlt: "#F8FAF9",    // Soft Off-White Greenish Tint
    surface: "#FFFFFF",
    surfaceAlt: "#EDF2F0",       // Subtle container surface
    textPrimary: "#111827",      // Crisp Deep Charcoal
    textSecondary: "#4B5563",    // Muted Gray
    textMuted: "#6B7280",
    border: "#E5E7EB",
    borderLight: "#F3F4F6",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },
  typography: {
    fontFamilyHeading: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    fontFamilyBody: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1Size: "3rem",
    h2Size: "2.25rem",
    h3Size: "1.75rem",
    bodySize: "1rem",
  },
  borderRadius: {
    small: 6,
    medium: 12,
    large: 20,
    pill: 9999,
  },
  spacing: {
    sectionPadding: "80px 0",
    sectionPaddingMobile: "48px 0",
  },
  shadows: {
    card: "0 4px 20px -2px rgba(15, 61, 62, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
    cardHover: "0 20px 30px -4px rgba(15, 61, 62, 0.12), 0 8px 16px -2px rgba(0, 0, 0, 0.06)",
    dropdown: "0 10px 38px rgba(15, 61, 62, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08)",
    hero: "0 20px 40px rgba(0, 0, 0, 0.25)",
  },
};
