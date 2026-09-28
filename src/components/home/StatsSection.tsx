import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

export const StatsSection: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { stats } = homeContent;
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.2);

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: palette.surfaceAlt,
        py: { xs: 6, md: 8 },
        borderTop: `1px solid ${palette.border}`,
        borderBottom: `1px solid ${palette.border}`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, idx) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={2.4}
              key={idx}
              sx={{
                ...getAnimationStyles('fade-up', isVisible, reducedMotion, idx * 80),
              }}
            >
              <Card
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(15, 61, 62, 0.05)',
                  border: '1px solid rgba(15, 61, 62, 0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(15, 61, 62, 0.1)',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: palette.primary,
                    fontSize: { xs: '2rem', sm: '2.4rem' },
                    lineHeight: 1.1,
                    mb: 0.5,
                  }}
                >
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 700,
                    color: palette.textPrimary,
                    fontSize: '0.95rem',
                    mb: 0.25,
                  }}
                >
                  {stat.label}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: palette.textMuted,
                    fontSize: '0.8rem',
                  }}
                >
                  {stat.detail}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
