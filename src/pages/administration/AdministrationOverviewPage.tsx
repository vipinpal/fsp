import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Award, Users, BookOpen, GraduationCap } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { administrationContent } from '../../content/administrationContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const AdministrationOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { facultyStats, facultyHeads } = administrationContent;

  const statsList = [
    { icon: Users, label: 'Dedicated Faculty Members', val: `${facultyStats.totalTeachers}+` },
    { icon: GraduationCap, label: 'Post-Graduate Qualified', val: facultyStats.postGraduatesPercent },
    { icon: Award, label: 'Average Teaching Experience', val: `${facultyStats.averageExperienceYears} Yrs` },
    { icon: BookOpen, label: 'Teacher-Student Ratio', val: facultyStats.studentTeacherRatio },
  ];

  return (
    <Box component="main">
      <SEOHead title="School Administration & Leadership" canonicalPath="/administration" />
      <PageHero
        title="Leadership & Faculty"
        subtitle="Meet the seasoned educators and administrators guiding the academic and cultural life of GVIS."
        eyebrow="Governing Council"
        breadcrumbs={[{ label: 'Administration', href: '/administration' }]}
      />

      {/* Leadership Stats */}
      <Box sx={{ py: 6, backgroundColor: palette.surfaceAlt, borderBottom: `1px solid ${palette.borderLight}` }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {statsList.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <Grid item xs={6} md={3} key={idx}>
                  <Card sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: 3 }}>
                    <Box sx={{ display: 'inline-flex', p: 1.5, borderRadius: 2, backgroundColor: 'rgba(15, 61, 62, 0.08)', color: palette.primary, mb: 1.5 }}>
                      <IconComp size={24} />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: palette.primary, mb: 0.5 }}>
                      {st.val}
                    </Typography>
                    <Typography variant="body2" sx={{ color: palette.textSecondary, fontWeight: 600 }}>
                      {st.label}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Faculty Heads Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Key Deans & Mentors"
            title="Academic Leadership Team"
            subtitle="Distinguished subject specialists overseeing department rigor and student welfare."
          />

          <Grid container spacing={4}>
            {facultyHeads.map((f, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden', border: `1px solid ${palette.borderLight}` }}>
                  <Box
                    component="img"
                    src={f.image}
                    alt={f.name}
                    sx={{ width: '100%', height: 260, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 0.5 }}>
                      {f.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: palette.primary, fontWeight: 600, mb: 0.5 }}>
                      {f.role}
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', color: palette.textMuted }}>
                      {f.department} • {f.experience}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdministrationOverviewPage;
