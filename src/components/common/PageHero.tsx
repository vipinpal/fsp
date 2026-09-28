import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { BreadcrumbsNav, BreadcrumbItem } from './BreadcrumbsNav';
import { schoolThemeConfig } from '../../theme/schoolTheme';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  bgImage,
}) => {
  const { palette } = schoolThemeConfig;
  const defaultBg = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop&q=80';
  const heroBg = bgImage || defaultBg;

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: palette.primaryDark,
        color: '#FFFFFF',
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 10 },
        overflow: 'hidden',
        backgroundImage: `linear-gradient(135deg, rgba(8, 36, 37, 0.92) 0%, rgba(15, 61, 62, 0.82) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative accent wave */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '16px',
          background: `linear-gradient(90deg, ${palette.secondary} 0%, ${palette.secondaryLight} 50%, ${palette.secondaryDark} 100%)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {breadcrumbs && <BreadcrumbsNav items={breadcrumbs} contrast />}

        {eyebrow && (
          <Typography
            variant="overline"
            sx={{
              display: 'inline-block',
              color: palette.secondaryLight,
              fontWeight: 700,
              letterSpacing: '0.15em',
              fontSize: '0.85rem',
              mt: 1,
              mb: 0.5,
            }}
          >
            {eyebrow}
          </Typography>
        )}

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.15,
            maxWidth: '850px',
            mt: 0.5,
            mb: subtitle ? 2 : 0,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: '1.05rem', md: '1.25rem' },
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '720px',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
};
