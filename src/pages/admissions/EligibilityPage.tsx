import React from 'react';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { admissionsContent } from '../../content/admissionsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const EligibilityPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { eligibility } = admissionsContent;

  return (
    <Box component="main">
      <SEOHead title="Eligibility Criteria" canonicalPath="/admissions/eligibility" />
      <PageHero
        title="Eligibility Criteria & Age Guidelines"
        subtitle="Official age guidelines in adherence with CBSE norms and the Directorate of Education."
        eyebrow="Guidelines"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Eligibility', href: '/admissions/eligibility' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="md">
          <SectionHeader
            title="Class-wise Age Specifications"
            subtitle="Calculated as of 31st March of the prospective academic admission session."
          />

          <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${palette.borderLight}`, borderRadius: 3, overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ backgroundColor: palette.primaryDark }}>
                <TableRow>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>Class / Grade</TableCell>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>Minimum Age</TableCell>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>Upper Age / Prerequisite</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eligibility.map((row, idx) => (
                  <TableRow key={idx} sx={{ '&:nth-of-type(even)': { backgroundColor: palette.surfaceAlt } }}>
                    <TableCell sx={{ fontWeight: 600, color: palette.textPrimary }}>{row.grade}</TableCell>
                    <TableCell sx={{ color: palette.textSecondary }}>{row.minAge}</TableCell>
                    <TableCell sx={{ color: palette.textSecondary }}>{row.maxAge}</TableCell>
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

export default EligibilityPage;
