import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

export const AboutSection: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { aboutPreview } = homeContent;
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.2);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: palette.background,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Image & Experience Badge Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              ...getAnimationStyles('slide-right', isVisible, reducedMotion),
            }}
          >
            <Box sx={{ position: 'relative', px: { xs: 1, sm: 2 } }}>
              {/* Decorative background border frame */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -16,
                  left: -16,
                  width: '80%',
                  height: '80%',
                  border: `3px solid ${palette.secondaryLight}`,
                  borderRadius: 4,
                  zIndex: 0,
                  display: { xs: 'none', sm: 'block' },
                }}
              />

              {/* Main Image */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px -15px rgba(15, 61, 62, 0.25)',
                }}
              >
                <ImageWithFallback
                  src={aboutPreview.image}
                  alt={aboutPreview.title}
                  aspectRatio="4/3"
                />
              </Box>

              {/* Years of Experience Floating Card */}
              <Paper
                elevation={6}
                sx={{
                  position: 'absolute',
                  bottom: -24,
                  right: { xs: 16, sm: -10 },
                  zIndex: 2,
                  backgroundColor: palette.primary,
                  color: '#FFFFFF',
                  p: { xs: 2, sm: 3 },
                  borderRadius: 3,
                  maxWidth: '220px',
                  boxShadow: '0 12px 30px rgba(15, 61, 62, 0.3)',
                  border: `2px solid ${palette.secondary}`,
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 800, color: palette.secondaryLight, lineHeight: 1 }}>
                  {aboutPreview.experienceYears}+
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#FFFFFF', mt: 0.5 }}>
                  Years of Scholastic & Ethical Excellence
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Text Content Column */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              ...getAnimationStyles('slide-left', isVisible, reducedMotion, 150),
            }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: palette.primary,
                  textTransform: 'uppercase',
                  fontSize: '0.85rem',
                  display: 'inline-block',
                  mb: 1,
                  px: 1.5,
                  py: 0.25,
                  borderRadius: 1,
                  backgroundColor: 'rgba(15, 61, 62, 0.08)',
                }}
              >
                {aboutPreview.eyebrow}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '2.85rem' },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  color: palette.textPrimary,
                  mb: 2.5,
                }}
              >
                {aboutPreview.title}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: palette.primary,
                  lineHeight: 1.6,
                  mb: 2,
                }}
              >
                {aboutPreview.lead}
              </Typography>

              {aboutPreview.paragraphs.map((p, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: palette.textSecondary,
                    lineHeight: 1.75,
                    mb: 2,
                  }}
                >
                  {p}
                </Typography>
              ))}

              {/* Checklist highlights */}
              <Box sx={{ mt: 3, mb: 4, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {aboutPreview.features.map((feature, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <CheckCircle2 size={20} color={palette.primary} style={{ marginTop: 2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                component={RouterLink}
                to={aboutPreview.cta.href}
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowRight size={18} />}
                sx={{ py: 1.5, px: 3.5, fontWeight: 700 }}
              >
                {aboutPreview.cta.label}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
