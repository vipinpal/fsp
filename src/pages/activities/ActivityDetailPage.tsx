import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { activitiesContent } from '../../content/activitiesContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

interface ActivityDetailPageProps {
  activityId: string;
}

export const ActivityDetailPage: React.FC<ActivityDetailPageProps> = ({ activityId }) => {
  const { palette } = schoolThemeConfig;
  const activity = activitiesContent.categories.find((c) => c.id === activityId) || activitiesContent.categories[0];

  return (
    <Box component="main">
      <SEOHead title={`${activity.title} | Student Activities`} canonicalPath={`/activities/${activity.id}`} />
      <PageHero
        title={activity.title}
        subtitle={activity.description}
        eyebrow="Co-Curriculars"
        breadcrumbs={[
          { label: 'Activities', href: '/activities' },
          { label: activity.title, href: `/activities/${activity.id}` },
        ]}
        bgImage={activity.image}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  aspectRatio="16/10"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 2 }}>
                {activity.title}
              </Typography>
              <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                {activity.description}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 2 }}>
                Disciplines & Activities Offered:
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.5 }}>
                {activity.disciplines.map((d, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <CheckCircle2 size={18} color={palette.primary} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                      {d}
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

export default ActivityDetailPage;
