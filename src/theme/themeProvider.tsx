import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { schoolThemeConfig } from './schoolTheme';

export const createAppTheme = () => {
  const { palette, typography, borderRadius, shadows } = schoolThemeConfig;

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
        fontWeight: 600,
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
            borderRadius: borderRadius.small,
            padding: '10px 24px',
            boxShadow: 'none',
            fontSize: '0.95rem',
            transition: 'all 0.25s ease-in-out',
            '&:hover': {
              boxShadow: '0 6px 16px rgba(15, 61, 62, 0.2)',
              transform: 'translateY(-1px)',
            },
          },
          containedPrimary: {
            backgroundColor: palette.primary,
            color: palette.primaryContrast,
            '&:hover': {
              backgroundColor: palette.primaryLight,
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
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: borderRadius.medium,
            boxShadow: shadows.card,
            border: `1px solid ${palette.borderLight}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: shadows.cardHover,
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: palette.surface,
            color: palette.textPrimary,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
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
