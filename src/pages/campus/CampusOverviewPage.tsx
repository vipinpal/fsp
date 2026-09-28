import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { campusContent } from '../../content/campusContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const CampusOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { overview, facilities } = campusContent;

  return (
    <Box component="main">
      <SEOHead title="Campus & Infrastructure" canonicalPath="/campus" />
      <PageHero
        title="15-Acre Eco-Friendly Campus"
        subtitle="Designed to foster creativity, physical vitality, scientific curiosity, and emotional serenity."
        eyebrow="Campus Life"
        breadcrumbs={[{ label: 'Campus', href: '/campus' }]}
        bgImage="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow={overview.eyebrow}
            title={overview.title}
            subtitle={overview.lead}
          />

          <Grid container spacing={4}>
            {facilities.map((fac) => (
              <Grid item xs={12} md={6} key={fac.id}>
                <Card sx={{ height: '100%', borderRadius: 4, overflow: 'hidden', border: `1px solid ${palette.borderLight}`, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ height: 260, overflow: 'hidden' }}>
                    <ImageWithFallback
                      src={fac.image}
                      alt={fac.title}
                      aspectRatio="16/9"
                    />
                  </Box>
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="overline" sx={{ color: palette.primary, fontWeight: 700, letterSpacing: '0.08em' }}>
                      {fac.eyebrow}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1.5 }}>
                      {fac.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.7, mb: 3 }}>
                      {fac.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3, flexGrow: 1 }}>
                      {fac.highlights.map((hl, idx) => (
                        <Box key={idx} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                          <CheckCircle2 size={16} color={palette.primary} />
                          <Typography variant="caption" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                            {hl}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Button
                      component={RouterLink}
                      to={`/campus/${fac.id}`}
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowRight size={16} />}
                      sx={{ alignSelf: 'flex-start', fontWeight: 700 }}
                    >
                      View Feature
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CampusOverviewPage;
