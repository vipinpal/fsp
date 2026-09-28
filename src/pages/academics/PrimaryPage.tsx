import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const PrimaryPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { primary } = academicsContent.wings;

  return (
    <Box component="main">
      <SEOHead title="Primary Wing (Grades I–V)" canonicalPath="/academics/primary" />
      <PageHero
        title={primary.title}
        subtitle="Inquiry-driven literacy, numeracy mastery, and hands-on environmental exploration."
        eyebrow={primary.ageSpan}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Primary Wing', href: '/academics/primary' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
                  alt="Primary Classrooms"
                  aspectRatio="4/3"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: palette.primary, fontWeight: 700 }}>
                Focus: {primary.focus}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: palette.textPrimary, my: 1.5 }}>
                Foundational Thinking Routines
              </Typography>
              <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.8, mb: 3 }}>
                {primary.description}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {primary.keyFeatures.map((feat, idx) => (
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

export default PrimaryPage;
