import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Shield } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { communityContent } from '../../content/communityContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const HouseSystemPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { houseSystem } = communityContent;

  return (
    <Box component="main">
      <SEOHead title="House System & Student Leadership" canonicalPath="/community/houses" />
      <PageHero
        title={houseSystem.title}
        subtitle={houseSystem.lead}
        eyebrow="Student Brotherhood & Sisterhood"
        breadcrumbs={[{ label: 'Community', href: '/community/parents' }, { label: 'House System', href: '/community/houses' }]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            title="The Four Pillars of Character"
            subtitle="Fostering teamwork, competitive spirit, and ethical stewardship through inter-house tournaments."
          />

          <Grid container spacing={4}>
            {houseSystem.houses.map((h, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: 4,
                    border: `2px solid ${h.color}`,
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: h.color,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <Shield size={32} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: h.color, mb: 1 }}>
                    {h.name}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: palette.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', mb: 2 }}>
                    "{h.motto}"
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65 }}>
                    {h.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HouseSystemPage;
