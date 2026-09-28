import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { Quote } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { administrationContent } from '../../content/administrationContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const PrincipalMessagePage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { principal } = administrationContent;

  return (
    <Box component="main">
      <SEOHead title="Principal's Message" canonicalPath="/administration/principal-message" />
      <PageHero
        title="Message from the Principal"
        subtitle="A commitment to holistic development, collaborative discovery, and compassionate mentorship."
        eyebrow="Head of School"
        breadcrumbs={[
          { label: 'Administration', href: '/administration' },
          { label: "Principal's Message", href: '/administration/principal-message' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
            <Grid item xs={12} md={4.5}>
              <Card sx={{ p: 2, borderRadius: 4, border: `1px solid ${palette.borderLight}` }}>
                <Box sx={{ borderRadius: 3, overflow: 'hidden' }}>
                  <ImageWithFallback
                    src={principal.image}
                    alt={principal.name}
                    aspectRatio="1/1"
                  />
                </Box>
                <Box sx={{ pt: 3, pb: 1, px: 2, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: palette.textPrimary }}>
                    {principal.name}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: palette.primary, fontWeight: 700, mt: 0.5 }}>
                    {principal.role}
                  </Typography>
                  <Typography variant="caption" sx={{ color: palette.textMuted, display: 'block', mt: 0.5 }}>
                    {principal.qualifications}
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={7.5}>
              <Box sx={{ color: palette.secondary, mb: 3 }}>
                <Quote size={48} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 3 }}>
                "In our classrooms, every child is seen, heard, and supported in unlocking their highest potential."
              </Typography>
              {principal.message.map((para, idx) => (
                <Typography key={idx} variant="body1" sx={{ color: palette.textSecondary, mb: 2.5, lineHeight: 1.8, fontSize: '1.05rem' }}>
                  {para}
                </Typography>
              ))}
              <Box sx={{ mt: 4, pt: 3, borderTop: `2px dashed ${palette.borderLight}` }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.primary }}>
                  {principal.signatureText}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default PrincipalMessagePage;
