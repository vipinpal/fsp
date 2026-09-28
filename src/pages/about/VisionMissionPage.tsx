import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Eye, Compass, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { aboutContent } from '../../content/aboutContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const VisionMissionPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { visionMission } = aboutContent;

  return (
    <Box component="main">
      <SEOHead title="Vision & Mission" canonicalPath="/about/vision-mission" />
      <PageHero
        title="Vision, Mission & Core Values"
        subtitle="Empowering future generations with timeless ethical principles and progressive global competency."
        eyebrow="Our North Star"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Vision & Mission', href: '/about/vision-mission' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          {/* School Motto Banner */}
          <Card
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              backgroundColor: palette.primaryDark,
              color: '#FFFFFF',
              borderRadius: 4,
              mb: 8,
              border: `2px solid ${palette.secondary}`,
            }}
          >
            <Typography variant="overline" sx={{ color: palette.secondaryLight, letterSpacing: '0.15em', fontWeight: 700 }}>
              Our Sacred Motto
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#FFFFFF', my: 1.5, fontFamily: "'Outfit', sans-serif" }}>
              "{visionMission.motto.latinOrSanskrit}"
            </Typography>
            <Typography variant="h6" sx={{ color: palette.secondaryLight, fontWeight: 600, mb: 1 }}>
              ({visionMission.motto.translation})
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              Tagline: {visionMission.motto.englishTagline}
            </Typography>
          </Card>

          <Grid container spacing={5}>
            {/* Vision Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', p: 4, borderRadius: 3, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <Eye size={28} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: palette.textPrimary }}>
                      {visionMission.vision.title}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: palette.primary, mb: 3, lineHeight: 1.6 }}>
                    "{visionMission.vision.statement}"
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {visionMission.vision.points.map((pt, idx) => (
                      <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <CheckCircle2 size={18} color={palette.primary} style={{ marginTop: 3, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65 }}>
                          {pt}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Mission Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', p: 4, borderRadius: 3, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: palette.secondaryDark, color: '#FFFFFF' }}>
                      <Compass size={28} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: palette.textPrimary }}>
                      {visionMission.mission.title}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: palette.primary, mb: 3, lineHeight: 1.6 }}>
                    "{visionMission.mission.statement}"
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {visionMission.mission.points.map((pt, idx) => (
                      <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <CheckCircle2 size={18} color={palette.secondaryDark} style={{ marginTop: 3, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65 }}>
                          {pt}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default VisionMissionPage;
