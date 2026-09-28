import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Trophy, Award, Medal } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { achievementsContent } from '../../content/achievementsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const AchievementsOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { academicAccolades, sportsAccolades, competitionAccolades } = achievementsContent;

  const sections = [
    { title: 'Academic Excellence & Board Toppers', icon: Award, list: academicAccolades },
    { title: 'National & State Sports Triumphs', icon: Trophy, list: sportsAccolades },
    { title: 'Inter-School & Olympiad Laurels', icon: Medal, list: competitionAccolades },
  ];

  return (
    <Box component="main">
      <SEOHead title="Student Achievements & Honors" canonicalPath="/achievements" />
      <PageHero
        title="Accolades & Student Laurels"
        subtitle="Celebrating outstanding milestones in CBSE board exams, sports podiums, and innovation conclaves."
        eyebrow="Hall of Fame"
        breadcrumbs={[{ label: 'Achievements', href: '/achievements' }]}
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          {sections.map((sec, sIdx) => {
            const IconComp = sec.icon;
            return (
              <Box key={sIdx} sx={{ mb: 8 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                    <IconComp size={24} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: palette.textPrimary }}>
                    {sec.title}
                  </Typography>
                </Box>

                <Grid container spacing={3.5}>
                  {sec.list.map((item, idx) => (
                    <Grid item xs={12} md={4} key={idx}>
                      <Card sx={{ height: '100%', p: 3.5, borderRadius: 3, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 700, color: palette.primary, backgroundColor: 'rgba(15, 61, 62, 0.08)', px: 1.25, py: 0.25, borderRadius: 1 }}>
                            {item.year}
                          </Typography>
                          <Typography variant="caption" sx={{ fontWeight: 700, color: palette.secondaryDark }}>
                            {item.highlight}
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65, mt: 'auto' }}>
                          {item.description}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            );
          })}
        </Container>
      </Box>
    </Box>
  );
};

export default AchievementsOverviewPage;
