import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Chip } from '@mui/material';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { activitiesContent } from '../../content/activitiesContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const ActivitiesOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { overview, categories } = activitiesContent;

  return (
    <Box component="main">
      <SEOHead title="Co-Curricular Activities & Clubs" canonicalPath="/activities" />
      <PageHero
        title="Co-Curricular & Creative Life"
        subtitle="Unlocking passion in athletics, theatre, robotics, classical music, and fine arts."
        eyebrow="Beyond The Classroom"
        breadcrumbs={[{ label: 'Activities', href: '/activities' }]}
        bgImage="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow={overview.eyebrow}
            title={overview.title}
            subtitle={overview.lead}
          />

          <Grid container spacing={4}>
            {categories.map((cat) => (
              <Grid item xs={12} md={6} key={cat.id}>
                <Card sx={{ height: '100%', borderRadius: 4, overflow: 'hidden', border: `1px solid ${palette.borderLight}`, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ height: 240, overflow: 'hidden' }}>
                    <ImageWithFallback
                      src={cat.image}
                      alt={cat.title}
                      aspectRatio="16/9"
                    />
                  </Box>
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1.5 }}>
                      {cat.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.7, mb: 3 }}>
                      {cat.description}
                    </Typography>

                    <Typography variant="caption" sx={{ fontWeight: 700, color: palette.primary, textTransform: 'uppercase', mb: 1.5, display: 'block' }}>
                      Offered Disciplines:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {cat.disciplines.map((d, idx) => (
                        <Chip
                          key={idx}
                          label={d}
                          size="small"
                          sx={{
                            backgroundColor: palette.surfaceAlt,
                            color: palette.textPrimary,
                            fontWeight: 600,
                            borderRadius: 1.5,
                          }}
                        />
                      ))}
                    </Box>
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

export default ActivitiesOverviewPage;
