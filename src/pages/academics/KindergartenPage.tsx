import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const KindergartenPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { kindergarten } = academicsContent.wings;

  return (
    <Box component="main">
      <SEOHead title="Early Childhood & Kindergarten" canonicalPath="/academics/kindergarten" />
      <PageHero
        title={kindergarten.title}
        subtitle="A joyful sanctuary for playful discovery, sensory exploration, and emotional security."
        eyebrow={kindergarten.ageSpan}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Kindergarten', href: '/academics/kindergarten' },
        ]}
        bgImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80"
                  alt="Early Years Learners"
                  aspectRatio="4/3"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: palette.primary, fontWeight: 700, letterSpacing: '0.1em' }}>
                Primary Focus: {kindergarten.focus}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: palette.textPrimary, my: 1.5 }}>
                Wonder, Play & Foundations
              </Typography>
              <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.8, mb: 3 }}>
                {kindergarten.description}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {kindergarten.keyFeatures.map((feat, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <CheckCircle2 size={18} color={palette.primary} style={{ marginTop: 2, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                      {feat}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default KindergartenPage;
