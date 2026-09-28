import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const MiddleSchoolPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { middle } = academicsContent.wings;

  return (
    <Box component="main">
      <SEOHead title="Middle School Wing (Grades VI–VIII)" canonicalPath="/academics/middle-school" />
      <PageHero
        title={middle.title}
        subtitle="Analytical reasoning, experimental science labs, and multidisciplinary project work."
        eyebrow={middle.ageSpan}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Middle School', href: '/academics/middle-school' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80"
                  alt="Middle School Labs"
                  aspectRatio="4/3"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: palette.primary, fontWeight: 700 }}>
                Focus: {middle.focus}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: palette.textPrimary, my: 1.5 }}>
                Transition to Independent Inquiry
              </Typography>
              <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.8, mb: 3 }}>
                {middle.description}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {middle.keyFeatures.map((feat, idx) => (
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

export default MiddleSchoolPage;
