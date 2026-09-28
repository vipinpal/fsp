import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Alert } from '@mui/material';
import { Search, FileCheck } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const TransferCertificatePage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const [admissionNo, setAdmissionNo] = useState('');
  const [searched, setSearched] = useState(false);

  // Sample static TC database (browser-only demo search)
  const sampleTCs = [
    { admNo: 'GVIS-2022-104', studentName: 'Aarav Mehta', gradeLeft: 'Grade X', dateOfLeaving: 'March 2025', tcNumber: 'TC/2025/082', status: 'Issued & Cleared' },
    { admNo: 'GVIS-2020-058', studentName: 'Diya Sen', gradeLeft: 'Grade XII (Science)', dateOfLeaving: 'May 2025', tcNumber: 'TC/2025/119', status: 'Issued & Cleared' },
    { admNo: 'GVIS-2023-311', studentName: 'Rohan Gupta', gradeLeft: 'Grade VIII', dateOfLeaving: 'August 2025', tcNumber: 'TC/2025/144', status: 'Issued & Cleared' },
  ];

  const result = sampleTCs.find((tc) => tc.admNo.toLowerCase() === admissionNo.trim().toLowerCase());

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <Box component="main">
      <SEOHead title="Transfer Certificate (TC) Verification" canonicalPath="/resources/transfer-certificate" />
      <PageHero
        title="Transfer Certificate (TC) Public Portal"
        subtitle="Mandatory public verification portal in compliance with CBSE regulatory guidelines."
        eyebrow="Mandatory Disclosure"
        breadcrumbs={[{ label: 'Resources', href: '/resources/downloads' }, { label: 'Transfer Certificate', href: '/resources/transfer-certificate' }]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="md">
          <SectionHeader
            title="Search & Verify Issued TC"
            subtitle="Enter the student's School Admission Number (e.g. GVIS-2022-104 or GVIS-2020-058) to verify issued status."
          />

          <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, mb: 5 }}>
            <TextField
              fullWidth
              label="Enter Admission Number"
              placeholder="e.g. GVIS-2022-104"
              value={admissionNo}
              onChange={(e) => {
                setAdmissionNo(e.target.value);
                setSearched(false);
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<Search size={18} />}
              sx={{ px: 4, fontWeight: 700, flexShrink: 0 }}
            >
              Verify TC
            </Button>
          </Box>

          {searched && result && (
            <TableContainer component={Paper} sx={{ border: `1px solid ${palette.borderLight}`, borderRadius: 3, mb: 4, overflow: 'hidden' }}>
              <Table>
                <TableHead sx={{ backgroundColor: palette.primaryDark }}>
                  <TableRow>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>TC Certificate No</TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Student Name</TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Class Last Studied</TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Date of Leaving</TableCell>
                    <TableCell sx={{ color: '#FFFFFF', fontWeight: 700 }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, color: palette.primary }}>{result.tcNumber}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>{result.studentName}</TableCell>
                    <TableCell>{result.gradeLeft}</TableCell>
                    <TableCell>{result.dateOfLeaving}</TableCell>
                    <TableCell sx={{ color: palette.success, fontWeight: 700 }}>{result.status}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {searched && !result && (
            <Alert severity="warning" sx={{ mb: 4 }}>
              No issued Transfer Certificate found for admission number "{admissionNo}". Please re-check the number or contact the school administrative office.
            </Alert>
          )}

          <Typography variant="body2" sx={{ color: palette.textMuted, textAlign: 'center' }}>
            To request an official physical transfer certificate duplicate or withdrawal clearance, please contact the administrative counter during regular working hours.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default TransferCertificatePage;
