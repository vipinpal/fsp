import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const CurriculumPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { overview } = academicsContent;

  return (
    <Box component="main">
      <SEOHead title="Curriculum & Pedagogy" canonicalPath="/academics/curriculum" />
      <PageHero
        title="CBSE Integrated Curriculum"
        subtitle="Inquiry-based, multidisciplinary learning structured around national and global benchmarks."
        eyebrow="Pedagogy"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Curriculum', href: '/academics/curriculum' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Pedagogical Philosophy"
            subtitle={overview.lead}
          />

          <Card sx={{ p: 4, borderRadius: 3, mb: 6, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: palette.primary, mb: 2 }}>
              {overview.boardAffiliation}
            </Typography>
            <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.75, mb: 3 }}>
              Our academic model is framed upon the National Curriculum Framework (NCF) and NEP 2020. We transform traditional classroom instruction into interactive inquiry where learners construct knowledge through research, collaborative team projects, laboratory analysis, and expressive writing.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {overview.curriculumHighlights.map((hl, idx) => (
                <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <CheckCircle2 size={18} color={palette.primary} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                    {hl}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default CurriculumPage;
