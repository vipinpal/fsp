import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { ShieldCheck, Target, HeartHandshake, Compass } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { aboutContent } from '../../content/aboutContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const AboutOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { overview } = aboutContent;

  const pillarIcons = [ShieldCheck, Target, HeartHandshake, Compass];

  return (
    <Box component="main">
      <SEOHead title="About Our School & Legacy" canonicalPath="/about" />
      <PageHero
        title="Legacy of Excellence, Values & Vision"
        subtitle="Nurturing independent thinkers, compassionate innovators, and ethical leaders since 2010."
        eyebrow="About Green Valley"
        breadcrumbs={[{ label: 'About Us', href: '/about' }]}
        bgImage="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&auto=format&fit=crop&q=80"
                  alt="School Campus and Heritage"
                  aspectRatio="4/3"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  color: palette.primary,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  display: 'inline-block',
                  mb: 1,
                  px: 1.5,
                  py: 0.25,
                  borderRadius: 1,
                  backgroundColor: 'rgba(15, 61, 62, 0.08)',
                }}
              >
                {overview.eyebrow}
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {overview.title}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: palette.primary, fontWeight: 600, mb: 2.5, lineHeight: 1.6 }}>
                {overview.lead}
              </Typography>
              {overview.story.map((para, idx) => (
                <Typography key={idx} variant="body1" sx={{ color: palette.textSecondary, mb: 2, lineHeight: 1.75 }}>
                  {para}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pillars Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: palette.surfaceAlt }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Our Guiding Ethos"
            title="Core Pillars of a Green Valley Education"
            subtitle="Four fundamental commitments that underpin all curriculum, discipline, and community life."
          />
          <Grid container spacing={3.5}>
            {overview.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx % pillarIcons.length];
              return (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Card sx={{ height: '100%', p: 3, borderRadius: 3, border: `1px solid ${palette.borderLight}` }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 2,
                          backgroundColor: 'rgba(15, 61, 62, 0.08)',
                          color: palette.primary,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <IconComp size={26} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: palette.textPrimary }}>
                        {pillar.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65 }}>
                        {pillar.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutOverviewPage;
