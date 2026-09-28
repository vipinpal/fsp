import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const SecondaryPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { secondary } = academicsContent.wings;

  return (
    <Box component="main">
      <SEOHead title="Secondary Wing (Grades IX–X)" canonicalPath="/academics/secondary" />
      <PageHero
        title={secondary.title}
        subtitle="Rigorous preparation for CBSE All India Secondary School Examination."
        eyebrow={secondary.ageSpan}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Secondary Wing', href: '/academics/secondary' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
                  alt="Secondary Students"
                  aspectRatio="4/3"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: palette.primary, fontWeight: 700 }}>
                Focus: {secondary.focus}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: palette.textPrimary, my: 1.5 }}>
                Mastery, Rigor & Board Readiness
              </Typography>
              <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.8, mb: 3 }}>
                {secondary.description}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {secondary.keyFeatures.map((feat, idx) => (
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

export default SecondaryPage;
