import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { SectionHeader } from '../common/SectionHeader';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

export const AcademicsGrid: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { academicsPreview } = homeContent;
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.15);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: palette.surfaceAlt,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          eyebrow={academicsPreview.eyebrow}
          title={academicsPreview.title}
          subtitle={academicsPreview.subtitle}
        />

        <Grid container spacing={3.5}>
          {academicsPreview.wings.map((wing, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
              key={wing.id}
              sx={{
                ...getAnimationStyles('fade-up', isVisible, reducedMotion, idx * 90),
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 32px rgba(15, 61, 62, 0.12)',
                    '& .wing-img': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Box sx={{ overflow: 'hidden', position: 'relative', height: 200 }}>
                  <ImageWithFallback
                    src={wing.image}
                    alt={wing.title}
                    className="wing-img"
                    style={{ transition: 'transform 0.5s ease' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: palette.primaryDark,
                      color: palette.secondaryLight,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {wing.ageGroup}
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: palette.textPrimary,
                      mb: 1.5,
                    }}
                  >
                    {wing.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: palette.textSecondary,
                      lineHeight: 1.65,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    {wing.description}
                  </Typography>

                  <Button
                    component={RouterLink}
                    to={wing.href}
                    variant="text"
                    color="primary"
                    endIcon={<ArrowRight size={16} />}
                    sx={{
                      p: 0,
                      justifyContent: 'flex-start',
                      fontWeight: 700,
                      '&:hover': { backgroundColor: 'transparent', color: palette.secondaryDark },
                    }}
                  >
                    Explore Curriculum
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
