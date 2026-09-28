import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Quote } from 'lucide-react';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { SectionHeader } from '../common/SectionHeader';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

export const TestimonialsSection: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { testimonials } = homeContent;
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.2);

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
          eyebrow="Community Voices"
          title="What Parents & Alumni Say"
          subtitle="Real stories of transformation, academic support, and lifelong bonds forged at Green Valley."
        />

        <Grid container spacing={4}>
          {testimonials.map((item, idx) => (
            <Grid
              item
              xs={12}
              md={4}
              key={item.id}
              sx={{
                ...getAnimationStyles('fade-up', isVisible, reducedMotion, idx * 100),
              }}
            >
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  backgroundColor: '#FFFFFF',
                  border: `1px solid ${palette.borderLight}`,
                  position: 'relative',
                  boxShadow: '0 8px 24px rgba(15, 61, 62, 0.05)',
                }}
              >
                <Box sx={{ color: palette.secondary, mb: 2 }}>
                  <Quote size={36} />
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    color: palette.textPrimary,
                    lineHeight: 1.7,
                    mb: 4,
                    flexGrow: 1,
                  }}
                >
                  "{item.quote}"
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 2, borderTop: `1px solid ${palette.borderLight}` }}>
                  <Avatar
                    src={item.image}
                    alt={item.author}
                    sx={{ width: 52, height: 52, border: `2px solid ${palette.secondary}` }}
                  />
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                      {item.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: palette.textMuted }}>
                      {item.relation}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
