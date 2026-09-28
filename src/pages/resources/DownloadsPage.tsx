import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { Download, FileText } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { downloadsData } from '../../data/downloadsData';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const DownloadsPage: React.FC = () => {
  const { palette } = schoolThemeConfig;

  return (
    <Box component="main">
      <SEOHead title="Document Downloads & Circulars" canonicalPath="/resources/downloads" />
      <PageHero
        title="Document Downloads & Forms"
        subtitle="Access school prospectuses, policy circulars, syllabi, and official transfer forms."
        eyebrow="Resources"
        breadcrumbs={[{ label: 'Resources', href: '/resources/downloads' }, { label: 'Downloads', href: '/resources/downloads' }]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="lg">
          <SectionHeader
            title="Official School Documents"
            subtitle="Download verified PDFs hosted publicly without needing sign-in credentials."
          />

          <Grid container spacing={3}>
            {downloadsData.map((doc) => (
              <Grid item xs={12} md={6} key={doc.id}>
                <Card sx={{ p: 3, borderRadius: 3, border: `1px solid ${palette.borderLight}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: 'rgba(15, 61, 62, 0.08)', color: palette.primary }}>
                      <FileText size={24} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        {doc.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: palette.textMuted }}>
                        {doc.category} • {doc.fileSize} • {doc.fileType}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    component="a"
                    href={doc.fileUrl}
                    download
                    variant="outlined"
                    color="primary"
                    startIcon={<Download size={16} />}
                    sx={{ flexShrink: 0, fontWeight: 700, ml: 2 }}
                  >
                    Download
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DownloadsPage;
