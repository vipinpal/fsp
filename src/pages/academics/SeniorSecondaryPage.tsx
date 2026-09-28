import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Award, Compass, BookOpen } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const SeniorSecondaryPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { seniorSecondary } = academicsContent.wings;

  const streamIcons = [Award, Compass, BookOpen];

  return (
    <Box component="main">
      <SEOHead title="Senior Secondary Wing (Grades XI–XII)" canonicalPath="/academics/senior-secondary" />
      <PageHero
        title={seniorSecondary.title}
        subtitle="Specialized Science, Commerce and Humanities streams preparing future leaders for global university success."
        eyebrow={seniorSecondary.ageSpan}
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Senior Secondary', href: '/academics/senior-secondary' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Career Scaffolding"
            title="Academic Streams Offered"
            subtitle="Taught by experienced post-graduate faculty with customized competitive exam coaching."
          />

          <Grid container spacing={4}>
            {seniorSecondary.streams?.map((st, idx) => {
              const IconComp = streamIcons[idx % streamIcons.length];
              return (
                <Grid item xs={12} md={4} key={idx}>
                  <Card sx={{ height: '100%', p: 4, borderRadius: 3, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF', width: 'fit-content', mb: 2 }}>
                      <IconComp size={26} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1.5 }}>
                      {st.name}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: palette.primary, textTransform: 'uppercase' }}>
                        Subject Combinations:
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                        {st.subjects}
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 'auto', pt: 2, borderTop: `1px solid ${palette.border}` }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: palette.secondaryDark, textTransform: 'uppercase' }}>
                        Career Pathways:
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                        {st.careers}
                      </Typography>
                    </Box>
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

export default SeniorSecondaryPage;
