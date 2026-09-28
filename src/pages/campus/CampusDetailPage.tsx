import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { campusContent } from '../../content/campusContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

interface CampusDetailPageProps {
  facilityId: string;
}

export const CampusDetailPage: React.FC<CampusDetailPageProps> = ({ facilityId }) => {
  const { palette } = schoolThemeConfig;
  const facility = campusContent.facilities.find((f) => f.id === facilityId) || campusContent.facilities[0];

  return (
    <Box component="main">
      <SEOHead title={`${facility.title} | Infrastructure`} canonicalPath={`/campus/${facility.id}`} />
      <PageHero
        title={facility.title}
        subtitle={facility.description}
        eyebrow={facility.eyebrow}
        breadcrumbs={[
          { label: 'Campus', href: '/campus' },
          { label: facility.title, href: `/campus/${facility.id}` },
        ]}
        bgImage={facility.image}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  aspectRatio="16/10"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ color: palette.primary, fontWeight: 700, letterSpacing: '0.1em' }}>
                {facility.eyebrow}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: palette.textPrimary, my: 1.5 }}>
                {facility.title}
              </Typography>
              <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                {facility.description}
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 2 }}>
                Key Technical & Architectural Highlights:
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {facility.highlights.map((hl, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <CheckCircle2 size={20} color={palette.primary} />
                    <Typography variant="body1" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                      {hl}
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

export default CampusDetailPage;
