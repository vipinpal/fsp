import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { Download, BookOpen } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { schoolConfig } from '../../config/schoolConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const ProspectusPage: React.FC = () => {
  const { palette } = schoolThemeConfig;

  return (
    <Box component="main">
      <SEOHead title="School Prospectus 2026–27" canonicalPath="/resources/prospectus" />
      <PageHero
        title="School Prospectus & Brochure"
        subtitle="A comprehensive walkthrough of our ethos, curriculum pathways, campus facilities, and admission policies."
        eyebrow="Official Publication"
        breadcrumbs={[{ label: 'Resources', href: '/resources/downloads' }, { label: 'Prospectus', href: '/resources/prospectus' }]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80"
                  alt="Prospectus Brochure"
                  aspectRatio="3/4"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography variant="overline" sx={{ color: palette.primary, fontWeight: 700 }}>
                Session 2026–27 Edition
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: palette.textPrimary, my: 1.5 }}>
                {schoolConfig.name} Information Guide
              </Typography>
              <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}>
                Discover our academic methodology, faculty leadership, co-curricular sports infrastructure, boarding life, and detailed fee guidelines within this comprehensive official publication.
              </Typography>

              <Button
                component="a"
                href="/branding/logo.svg"
                download="GVIS-Prospectus-2026.pdf"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<Download size={20} />}
                sx={{ py: 1.6, px: 4, fontWeight: 700 }}
              >
                Download Official Prospectus (PDF)
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ProspectusPage;
