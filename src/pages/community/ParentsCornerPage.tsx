import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Users, Smartphone, MessageSquare, HeartHandshake } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { communityContent } from '../../content/communityContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const ParentsCornerPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { parents } = communityContent;

  const icons = [MessageSquare, Smartphone, HeartHandshake];

  return (
    <Box component="main">
      <SEOHead title="Parents' Corner & PTA" canonicalPath="/community/parents" />
      <PageHero
        title={parents.title}
        subtitle={parents.lead}
        eyebrow="Community"
        breadcrumbs={[{ label: 'Community', href: '/community/parents' }, { label: "Parents' Corner", href: '/community/parents' }]}
        bgImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Partners in Your Child's Growth"
            subtitle="Clear channels of communication, feedback, and collaborative school events."
          />

          <Grid container spacing={4}>
            {parents.guidelines.map((g, idx) => {
              const IconComp = icons[idx % icons.length];
              return (
                <Grid item xs={12} md={4} key={idx}>
                  <Card sx={{ height: '100%', p: 4, borderRadius: 3, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF', width: 'fit-content', mb: 2.5 }}>
                      <IconComp size={24} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1.5 }}>
                      {g.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.7 }}>
                      {g.description}
                    </Typography>
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

export default ParentsCornerPage;
