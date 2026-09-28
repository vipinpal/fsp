import React from 'react';
import { Box, Typography } from '@mui/material';
import { schoolThemeConfig } from '../../theme/schoolTheme';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  contrast?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  contrast = false,
}) => {
  const { palette } = schoolThemeConfig;

  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 4, md: 6 },
        maxWidth: align === 'center' ? '760px' : '100%',
        mx: align === 'center' ? 'auto' : 0,
      }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{
            display: 'inline-block',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: contrast ? palette.secondary : palette.primary,
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            mb: 1,
            px: 1.5,
            py: 0.25,
            borderRadius: 1,
            backgroundColor: contrast
              ? 'rgba(212, 175, 55, 0.15)'
              : 'rgba(15, 61, 62, 0.08)',
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.75rem' },
          fontWeight: 800,
          color: contrast ? '#FFFFFF' : palette.textPrimary,
          lineHeight: 1.2,
          mt: 0.5,
          mb: subtitle ? 2 : 0,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: contrast ? 'rgba(255, 255, 255, 0.8)' : palette.textSecondary,
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
