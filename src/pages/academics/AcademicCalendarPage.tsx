import React from 'react';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Calendar } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { academicsContent } from '../../content/academicsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const AcademicCalendarPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { academicCalendar } = academicsContent;

  return (
    <Box component="main">
      <SEOHead title="Academic Calendar 2026–27" canonicalPath="/academics/calendar" />
      <PageHero
        title="Annual Academic Calendar"
        subtitle="Schedule of terms, assessment cycles, school breaks, and co-curricular festivals."
        eyebrow="Year at a Glance"
        breadcrumbs={[
          { label: 'Academics', href: '/academics' },
          { label: 'Academic Calendar', href: '/academics/calendar' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="md">
          <SectionHeader
            title="Session 2026–27 Schedule"
            subtitle="Important dates and milestones for students, parents, and educators."
          />

          <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${palette.borderLight}`, borderRadius: 3, overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ backgroundColor: palette.primaryDark }}>
                <TableRow>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, width: '35%' }}>Month / Period</TableCell>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Key Events & Assessment Milestones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {academicCalendar.map((item, idx) => (
                  <TableRow key={idx} sx={{ '&:nth-of-type(even)': { backgroundColor: palette.surfaceAlt } }}>
                    <TableCell sx={{ fontWeight: 700, color: palette.primary }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Calendar size={16} color={palette.secondaryDark} />
                        {item.month}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: palette.textPrimary, fontWeight: 500 }}>
                      {item.event}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default AcademicCalendarPage;
