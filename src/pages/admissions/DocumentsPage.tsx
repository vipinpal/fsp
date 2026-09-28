import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { FileCheck, AlertCircle } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { admissionsContent } from '../../content/admissionsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const DocumentsPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { documentsRequired } = admissionsContent;

  return (
    <Box component="main">
      <SEOHead title="Required Documents for Admission" canonicalPath="/admissions/documents" />
      <PageHero
        title="Required Documents Checklist"
        subtitle="Mandatory verification paperwork to be presented during the admission confirmation phase."
        eyebrow="Verification"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Required Documents', href: '/admissions/documents' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="md">
          <SectionHeader
            title="Documentation Checklist"
            subtitle="Please prepare self-attested photocopies alongside original certificates for physical verification."
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            {documentsRequired.map((doc, idx) => (
              <Card key={idx} sx={{ p: 2.5, borderRadius: 2.5, border: `1px solid ${palette.borderLight}` }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ p: 1, borderRadius: 1.5, backgroundColor: 'rgba(15, 61, 62, 0.08)', color: palette.primary, flexShrink: 0 }}>
                    <FileCheck size={22} />
                  </Box>
                  <Typography variant="body1" sx={{ color: palette.textPrimary, fontWeight: 600, pt: 0.5 }}>
                    {doc}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Box>

          <Box sx={{ mt: 5, p: 3, backgroundColor: palette.surfaceAlt, borderRadius: 3, border: `1px solid ${palette.border}` }}>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 1 }}>
              <AlertCircle size={20} color={palette.primary} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.primary }}>
                Special Notice for Interstate & Transfer Students
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65 }}>
              Original Transfer Certificate (TC) must be countersigned by the District Education Officer (DEO) or relevant Regional CBSE Officer if transferring from outside the state or from non-CBSE affiliated boards.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DocumentsPage;
