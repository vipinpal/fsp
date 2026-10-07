import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { schoolThemeConfig, SchoolThemeConfig } from './schoolTheme';
import { preschoolThemeConfig } from './preschoolTheme';
import { siteConfig } from '../config/site.config';

export const createAppTheme = (config: SchoolThemeConfig = siteConfig.siteType === 'preschool' ? preschoolThemeConfig : schoolThemeConfig) => {
  const { palette, typography, borderRadius, shadows } = config;

  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: palette.primary,
        dark: palette.primaryDark,
        light: palette.primaryLight,
        contrastText: palette.primaryContrast,
      },
      secondary: {
        main: palette.secondary,
        dark: palette.secondaryDark,
        light: palette.secondaryLight,
        contrastText: palette.secondaryContrast,
      },
      background: {
        default: palette.background,
        paper: palette.surface,
      },
      text: {
        primary: palette.textPrimary,
        secondary: palette.textSecondary,
      },
      divider: palette.border,
      success: { main: palette.success },
      warning: { main: palette.warning },
      error: { main: palette.error },
      info: { main: palette.info },
    },
    typography: {
      fontFamily: typography.fontFamilyBody,
      h1: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 800,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
      },
      h2: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 700,
        letterSpacing: '-0.015em',
        lineHeight: 1.25,
      },
      h3: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 700,
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
      },
      h4: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 600,
        lineHeight: 1.35,
      },
      h5: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontFamily: typography.fontFamilyHeading,
        fontWeight: 600,
        lineHeight: 1.45,
      },
      subtitle1: {
        fontSize: '1.125rem',
        lineHeight: 1.6,
        color: palette.textSecondary,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
        color: palette.textSecondary,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.65,
        color: palette.textSecondary,
      },
      button: {
        textTransform: 'none',
        fontWeight: 700,
        fontFamily: typography.fontFamilyHeading,
      },
    },
    shape: {
      borderRadius: borderRadius.medium,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.pill,
            padding: '12px 28px',
            boxShadow: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&:hover': {
              boxShadow: shadows.cardHover,
              transform: 'translateY(-2px) scale(1.02)',
            },
          },
          containedPrimary: {
            backgroundColor: palette.primary,
            color: palette.primaryContrast,
            '&:hover': {
              backgroundColor: palette.primaryDark,
            },
          },
          containedSecondary: {
            backgroundColor: palette.secondary,
            color: palette.secondaryContrast,
            fontWeight: 700,
            '&:hover': {
              backgroundColor: palette.secondaryDark,
              color: '#FFFFFF',
            },
          },
          outlined: {
            borderWidth: '2px',
            '&:hover': {
              borderWidth: '2px',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.large,
            boxShadow: shadows.card,
            border: `1.5px solid ${palette.border}`,
            transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&:hover': {
              boxShadow: shadows.cardHover,
              transform: 'translateY(-4px)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: palette.surface,
            color: palette.textPrimary,
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 700,
            borderRadius: borderRadius.pill,
          },
        },
      },
    },
  });
};

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = React.useMemo(() => createAppTheme(), []);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
