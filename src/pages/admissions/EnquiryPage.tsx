import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { schoolConfig } from '../../config/schoolConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const EnquiryPage: React.FC = () => {
  const { palette } = schoolThemeConfig;

  return (
    <Box component="main">
      <SEOHead title="Online Admission Enquiry" canonicalPath="/admissions/enquiry" />
      <PageHero
        title="Online Admission Enquiry Form"
        subtitle="Submit your inquiry for the 2026–27 session. Our admissions counselor will connect with you promptly."
        eyebrow="Admissions Open"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Online Enquiry', href: '/admissions/enquiry' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }}>
            {/* Form Column */}
            <Grid item xs={12} md={7.5}>
              <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: `1px solid ${palette.borderLight}`, boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1 }}>
                  Submit Student Details
                </Typography>
                <Typography variant="body2" sx={{ color: palette.textSecondary, mb: 4 }}>
                  Please fill in the required details below. All fields marked with * are compulsory.
                </Typography>
                <EnquiryForm />
              </Card>
            </Grid>

            {/* Admissions Office Help Card */}
            <Grid item xs={12} md={4.5}>
              <Card sx={{ p: 4, borderRadius: 4, backgroundColor: palette.surfaceAlt, border: `1px solid ${palette.borderLight}` }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: palette.primary, mb: 3 }}>
                  Admissions Helpdesk
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <Phone size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Direct Helpline
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary }}>
                        {schoolConfig.contact.phone}
                      </Typography>
                      <Typography variant="caption" sx={{ color: palette.textMuted }}>
                        Alt: {schoolConfig.contact.phoneAlt}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <Mail size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Admissions Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary }}>
                        {schoolConfig.contact.admissionEmail}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <Clock size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Office Visiting Hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary }}>
                        {schoolConfig.contact.officeHours}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <MapPin size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Campus Location
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary }}>
                        {schoolConfig.address.line1}, {schoolConfig.address.city}, {schoolConfig.address.state} - {schoolConfig.address.postalCode}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default EnquiryPage;
