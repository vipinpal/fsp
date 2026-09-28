import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper } from '@mui/material';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

export const AdmissionCTA: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { admissionCTA } = homeContent;
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.2);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 10 },
        background: `linear-gradient(135deg, ${palette.primaryDark} 0%, ${palette.primary} 100%)`,
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              ...getAnimationStyles('slide-right', isVisible, reducedMotion),
            }}
          >
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, backgroundColor: 'rgba(212, 175, 55, 0.2)', px: 2, py: 0.5, borderRadius: 99, mb: 2 }}>
              <Sparkles size={16} color={palette.secondaryLight} />
              <Typography variant="caption" sx={{ fontWeight: 700, color: palette.secondaryLight, letterSpacing: '0.08em' }}>
                {admissionCTA.eyebrow}
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              {admissionCTA.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.65,
                mb: 4,
                maxWidth: '620px',
              }}
            >
              {admissionCTA.subtitle}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                component={RouterLink}
                to={admissionCTA.applyButton.href}
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowRight size={18} />}
                sx={{ py: 1.5, px: 3.5, fontWeight: 700 }}
              >
                {admissionCTA.applyButton.label}
              </Button>

              <Button
                component={RouterLink}
                to={admissionCTA.contactButton.href}
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  color: '#FFFFFF',
                  borderColor: 'rgba(255,255,255,0.4)',
                  '&:hover': { borderColor: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {admissionCTA.contactButton.label}
              </Button>
            </Box>
          </Grid>

          {/* 3 Step Pathway Card */}
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              ...getAnimationStyles('slide-left', isVisible, reducedMotion, 150),
            }}
          >
            <Paper
              sx={{
                p: { xs: 3, sm: 4 },
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: 4,
              }}
            >
              <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 3 }}>
                Simple 3-Step Admission Process
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {admissionCTA.steps.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: 2,
                        backgroundColor: palette.secondary,
                        color: palette.primaryDark,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '1rem',
                        flexShrink: 0,
                      }}
                    >
                      {item.step}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', mt: 0.25 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
