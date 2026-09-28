import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import {
  BookOpen,
  Cpu,
  ShieldCheck,
  Trophy,
  Users,
  Globe,
  LucideIcon,
} from 'lucide-react';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { SectionHeader } from '../common/SectionHeader';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Cpu,
  ShieldCheck,
  Trophy,
  Users,
  Globe,
};

export const WhyChooseUs: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { whyChooseUs } = homeContent;
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.15);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: palette.background,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
        />

        <Grid container spacing={3.5}>
          {whyChooseUs.items.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || BookOpen;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={idx}
                sx={{
                  ...getAnimationStyles('fade-up', isVisible, reducedMotion, idx * 80),
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid ${palette.borderLight}`,
                    transition: 'all 0.35s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 36px rgba(15, 61, 62, 0.1)',
                      borderColor: palette.secondary,
                      '& .feature-icon-box': {
                        backgroundColor: palette.primary,
                        color: palette.secondaryLight,
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      className="feature-icon-box"
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2.5,
                        backgroundColor: 'rgba(15, 61, 62, 0.08)',
                        color: palette.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent size={28} />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: palette.textPrimary,
                        fontSize: '1.25rem',
                        mb: 1.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: palette.textSecondary,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
