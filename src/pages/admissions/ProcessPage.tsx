import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { admissionsContent } from '../../content/admissionsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const ProcessPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { steps } = admissionsContent;

  return (
    <Box component="main">
      <SEOHead title="Admission Process & Registration" canonicalPath="/admissions/process" />
      <PageHero
        title="Admission Process"
        subtitle="A transparent, step-by-step roadmap for prospective parents and students."
        eyebrow="Step-by-Step"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Admission Process', href: '/admissions/process' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="md">
          <SectionHeader
            title="How to Enroll at Green Valley"
            subtitle="Follow these four sequential phases to complete your child's enrollment."
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {steps.map((st) => (
              <Card key={st.step} sx={{ p: 4, borderRadius: 3, border: `1px solid ${palette.borderLight}` }}>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2,
                      backgroundColor: palette.primary,
                      color: palette.secondaryLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1.35rem',
                      flexShrink: 0,
                    }}
                  >
                    0{st.step}
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1 }}>
                      {st.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.7 }}>
                      {st.description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>

          <Box sx={{ mt: 5, p: 3, backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: 2, display: 'flex', gap: 2, alignItems: 'flex-start', border: `1px solid ${palette.secondaryLight}` }}>
            <AlertCircle size={24} color={palette.secondaryDark} style={{ flexShrink: 0, marginTop: 2 }} />
            <Typography variant="body2" sx={{ color: palette.textPrimary }}>
              <strong>Important Note:</strong> Admissions to Pre-Nursery to KG are granted on the basis of informal interaction and date of registration. For Grades IX and XI, admission is subject to academic records, an aptitude assessment, and stream availability.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProcessPage;
