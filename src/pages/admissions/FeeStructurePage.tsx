import React from 'react';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Card, CardContent } from '@mui/material';
import { ShieldCheck, Info } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { admissionsContent } from '../../content/admissionsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const FeeStructurePage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { feeStructure } = admissionsContent;

  return (
    <Box component="main">
      <SEOHead title="Fee Structure & Policy 2026–27" canonicalPath="/admissions/fee-structure" />
      <PageHero
        title="Fee Structure & Guidelines"
        subtitle="Transparent, regulated fee schedule for the Academic Session 2026–27."
        eyebrow="Financial Information"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Fee Structure', href: '/admissions/fee-structure' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Schedule of School Fees (Quarterly)"
            subtitle={feeStructure.note}
          />

          <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${palette.borderLight}`, borderRadius: 3, mb: 6, overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ backgroundColor: palette.primaryDark }}>
                <TableRow>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Wing / Grade Span</TableCell>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Tuition Fee (Quarterly)</TableCell>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Annual Development Charges</TableCell>
                  <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Activity & Sports Fee (Quarterly)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feeStructure.tiers.map((t, idx) => (
                  <TableRow key={idx} sx={{ '&:nth-of-type(even)': { backgroundColor: palette.surfaceAlt } }}>
                    <TableCell sx={{ fontWeight: 700, color: palette.textPrimary }}>{t.gradeRange}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: palette.primary }}>{t.tuitionQuarterly}</TableCell>
                    <TableCell sx={{ color: palette.textSecondary }}>{t.annualCharges}</TableCell>
                    <TableCell sx={{ color: palette.textSecondary }}>{t.activityFeeQuarterly}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* One time charges summary */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <Card sx={{ p: 3, borderRadius: 3, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <ShieldCheck size={28} color={palette.primary} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                    One-Time Admission Fee
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                    {feeStructure.oneTimeAdmissionFee}
                  </Typography>
                </Box>
              </Box>
            </Card>

            <Card sx={{ p: 3, borderRadius: 3, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Info size={28} color={palette.secondaryDark} />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                    Refundable Caution Money
                  </Typography>
                  <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                    {feeStructure.cautionMoneyRefundable}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FeeStructurePage;
