import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { BookOpen, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const AcademicsOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { overview } = academicsContent;

  const wings = [
    { title: 'Early Years & Kindergarten', path: '/academics/kindergarten', desc: 'Sensory-motor play, phonics, and socialization for ages 3 to 5.' },
    { title: 'Primary Wing (Grades I–V)', path: '/academics/primary', desc: 'Foundational literacy, numeracy sprints, and environmental inquiry.' },
    { title: 'Middle School (Grades VI–VIII)', path: '/academics/middle-school', desc: 'Laboratory science, foreign languages, and interdisciplinary problem-solving.' },
    { title: 'Secondary (Grades IX–X)', path: '/academics/secondary', desc: 'Rigorous preparation for CBSE board examinations and career discovery.' },
    { title: 'Senior Secondary (Grades XI–XII)', path: '/academics/senior-secondary', desc: 'Science, Commerce & Humanities streams with competitive entrance coaching.' },
    { title: 'Academic Calendar', path: '/academics/calendar', desc: 'Schedule of terms, assessment blocks, vacations, and annual events.' },
  ];

  return (
    <Box component="main">
      <SEOHead title="Academics & Pedagogical Framework" canonicalPath="/academics" />
      <PageHero
        title="Scholastic Rigor & Experiential Pedagogy"
        subtitle="Empowering inquisitive minds with conceptual depth, multidisciplinary inquiry, and CBSE excellence."
        eyebrow="Academic Framework"
        breadcrumbs={[{ label: 'Academics', href: '/academics' }]}
        bgImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Curriculum Pillars"
            title="NEP 2020 Aligned Holistic Education"
            subtitle="Bridging foundational knowledge with 21st-century problem solving."
          />

          {/* Highlights */}
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {overview.curriculumHighlights.map((hl, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ height: '100%', p: 3, borderRadius: 3, border: `1px solid ${palette.borderLight}` }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <CheckCircle size={22} color={palette.primary} style={{ flexShrink: 0, marginTop: 2 }} />
                    <Typography variant="body1" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                      {hl}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Wings Grid */}
          <SectionHeader
            title="Explore Academic Wings"
            subtitle="Tailored developmental stages from early childhood wonder to senior secondary specialization."
          />

          <Grid container spacing={3.5}>
            {wings.map((w, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ height: '100%', p: 4, borderRadius: 3, border: `1px solid ${palette.borderLight}`, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: 'rgba(15, 61, 62, 0.08)', color: palette.primary, width: 'fit-content', mb: 2 }}>
                    <BookOpen size={24} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 1 }}>
                    {w.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.textSecondary, mb: 3, flexGrow: 1, lineHeight: 1.65 }}>
                    {w.desc}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={w.path}
                    variant="text"
                    color="primary"
                    endIcon={<ArrowRight size={16} />}
                    sx={{ p: 0, justifyContent: 'flex-start', fontWeight: 700 }}
                  >
                    View Details
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AcademicsOverviewPage;
