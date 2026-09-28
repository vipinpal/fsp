import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { ArrowRight, CheckCircle2, FileText, HelpCircle, PhoneCall } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { admissionsContent } from '../../content/admissionsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const AdmissionsOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { overview, steps } = admissionsContent;

  const quickLinks = [
    { title: 'Step-by-Step Process', icon: CheckCircle2, href: '/admissions/process', desc: '4-stage admissions guideline' },
    { title: 'Eligibility Criteria', icon: HelpCircle, href: '/admissions/eligibility', desc: 'Age requirements per grade' },
    { title: 'Required Documents', icon: FileText, href: '/admissions/documents', desc: 'Checklist for verification' },
    { title: 'Fee Structure', icon: ArrowRight, href: '/admissions/fee-structure', desc: 'Transparent fee schedule' },
  ];

  return (
    <Box component="main">
      <SEOHead title="Admissions Overview 2026–27" canonicalPath="/admissions" />
      <PageHero
        title="Admissions Session 2026–27"
        subtitle="Embark on a voyage of discovery, intellectual mastery, and moral integrity at Green Valley."
        eyebrow="Join Our Family"
        breadcrumbs={[{ label: 'Admissions', href: '/admissions' }]}
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Quick Nav Cards */}
      <Box sx={{ py: 6, backgroundColor: palette.surfaceAlt, borderBottom: `1px solid ${palette.borderLight}` }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {quickLinks.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Card
                    component={RouterLink}
                    to={item.href}
                    sx={{
                      p: 3,
                      display: 'block',
                      textDecoration: 'none',
                      height: '100%',
                      borderRadius: 3,
                      border: `1px solid ${palette.borderLight}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(15, 61, 62, 0.1)',
                        borderColor: palette.primary,
                      },
                    }}
                  >
                    <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: 2, backgroundColor: 'rgba(15, 61, 62, 0.08)', color: palette.primary, mb: 1.5 }}>
                      <IconComp size={24} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.textSecondary }}>
                      {item.desc}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 4 Steps Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Structured Pathway"
            title="How Admission Works"
            subtitle="Clear, parent-friendly steps designed to provide a smooth, stress-free enrollment experience."
          />

          <Grid container spacing={4}>
            {steps.map((st) => (
              <Grid item xs={12} sm={6} md={3} key={st.step}>
                <Card sx={{ height: '100%', p: 3.5, borderRadius: 3, border: `1px solid ${palette.borderLight}` }}>
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: palette.primary,
                        color: palette.secondaryLight,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '1.25rem',
                        mb: 2,
                      }}
                    >
                      0{st.step}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 1.5 }}>
                      {st.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65 }}>
                      {st.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA Banner */}
          <Box
            sx={{
              mt: 8,
              p: { xs: 4, md: 6 },
              backgroundColor: palette.primaryDark,
              color: '#FFFFFF',
              borderRadius: 4,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 1.5 }}>
              Ready to Secure Your Child's Seat?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: '650px', mb: 3 }}>
              Inquire today to schedule an in-person campus walkthrough and meet our academic mentors.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                component={RouterLink}
                to="/admissions/enquiry"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<PhoneCall size={18} />}
                sx={{ py: 1.5, px: 4, fontWeight: 700 }}
              >
                Submit Online Enquiry
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AdmissionsOverviewPage;
