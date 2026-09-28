import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { Briefcase, CheckCircle2, Send, X } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { careersContent } from '../../content/careersContent';
import { schoolConfig } from '../../config/schoolConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const CareersPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { overview, perks, openings } = careersContent;
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleApply = (title: string) => {
    // Zero backend fallback: launches preformatted mailto application
    const subject = encodeURIComponent(`[Job Application] ${title}`);
    const body = encodeURIComponent(
      `Dear Hiring Team at ${schoolConfig.name},\n\n` +
      `I am writing to express my strong interest in the ${title} position.\n\n` +
      `Candidate Name: \n` +
      `Contact Phone: \n` +
      `Highest Educational Qualification: \n` +
      `Years of Relevant Experience: \n` +
      `Brief Introduction / Cover Note: \n\n` +
      `I have attached my updated CV/Resume for your review.\n\n` +
      `Best regards,\n`
    );
    window.location.href = `mailto:${schoolConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Box component="main">
      <SEOHead title="Careers & Faculty Recruitment" canonicalPath="/careers" />
      <PageHero
        title="Faculty & Staff Careers"
        subtitle="Join an inspiring team of mentors dedicated to academic rigor, innovation, and character building."
        eyebrow="Work With Us"
        breadcrumbs={[{ label: 'Careers', href: '/careers' }]}
        bgImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&auto=format&fit=crop&q=80"
      />

      {/* Perks */}
      <Box sx={{ py: 6, backgroundColor: palette.surfaceAlt, borderBottom: `1px solid ${palette.borderLight}` }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {perks.map((p, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{ p: 3, height: '100%', borderRadius: 3, border: `1px solid ${palette.borderLight}` }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: palette.primary, mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.6 }}>
                    {p.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Job Openings */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Open Vacancies"
            title="Current Job Opportunities"
            subtitle="Explore active openings for educators, sports trainers, and school administrators."
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {openings.map((job) => (
              <Card key={job.id} sx={{ p: 4, borderRadius: 3, border: `1px solid ${palette.borderLight}`, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 3 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: palette.textPrimary }}>
                      {job.title}
                    </Typography>
                    <Chip label={job.type} size="small" sx={{ backgroundColor: 'rgba(15, 61, 62, 0.08)', color: palette.primary, fontWeight: 700 }} />
                  </Box>
                  <Typography variant="subtitle2" sx={{ color: palette.primary, fontWeight: 600, mb: 1 }}>
                    {job.department}
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.textSecondary, mb: 0.5 }}>
                    <strong>Qualification:</strong> {job.qualification}
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.textSecondary }}>
                    <strong>Experience:</strong> {job.experience}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleApply(job.title)}
                  startIcon={<Send size={16} />}
                  sx={{ flexShrink: 0, px: 3.5, py: 1.25, fontWeight: 700 }}
                >
                  Apply via Email
                </Button>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CareersPage;
