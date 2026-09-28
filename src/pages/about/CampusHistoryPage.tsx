import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Calendar } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { aboutContent } from '../../content/aboutContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const CampusHistoryPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { campusHistory } = aboutContent;

  return (
    <Box component="main">
      <SEOHead title="Campus History & Milestones" canonicalPath="/about/campus" />
      <PageHero
        title="Our Growth & Milestones"
        subtitle="Tracing the fifteen-year trajectory of Green Valley from foundation to national distinction."
        eyebrow="Milestones"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Campus History', href: '/about/campus' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="md">
          <SectionHeader
            title={campusHistory.title}
            subtitle={campusHistory.subtitle}
          />

          <Box sx={{ position: 'relative', mt: 6 }}>
            {/* Central Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: { xs: 20, sm: '50%' },
                width: 3,
                backgroundColor: palette.secondaryLight,
                transform: { sm: 'translateX(-50%)' },
              }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {campusHistory.milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <Box
                    key={idx}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: isEven ? 'row-reverse' : 'row' },
                      alignItems: { sm: 'center' },
                      pl: { xs: 6, sm: 0 },
                      position: 'relative',
                    }}
                  >
                    {/* Circle Node */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: 8, sm: '50%' },
                        transform: { sm: 'translateX(-50%)' },
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: palette.primary,
                        border: `4px solid ${palette.secondary}`,
                        zIndex: 2,
                      }}
                    />

                    {/* Content Box */}
                    <Box sx={{ width: { sm: '45%' }, ml: { sm: isEven ? 0 : 'auto' }, mr: { sm: isEven ? 'auto' : 0 } }}>
                      <Card sx={{ p: 3, borderRadius: 3, border: `1px solid ${palette.borderLight}` }}>
                        <CardContent sx={{ p: 0 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: palette.primary, mb: 1 }}>
                            <Calendar size={18} color={palette.secondary} />
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                              {m.year}
                            </Typography>
                          </Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 1 }}>
                            {m.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.6 }}>
                            {m.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CampusHistoryPage;
