import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { schoolConfig } from '../../config/schoolConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const ContactPage: React.FC = () => {
  const { palette } = schoolThemeConfig;

  return (
    <Box component="main">
      <SEOHead title="Contact Us & Campus Location" canonicalPath="/contact" />
      <PageHero
        title="Get in Touch With Us"
        subtitle="We invite parents, alumni, and visitors to connect with our campus community."
        eyebrow="Contact & Campus Tour"
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }}>
            {/* Form Column */}
            <Grid item xs={12} md={7.5}>
              <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: `1px solid ${palette.borderLight}`, boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1 }}>
                  Send an Inquiry
                </Typography>
                <Typography variant="body2" sx={{ color: palette.textSecondary, mb: 4 }}>
                  Fill in your details below and our team will get back to you promptly.
                </Typography>
                <EnquiryForm />
              </Card>
            </Grid>

            {/* Direct Details */}
            <Grid item xs={12} md={4.5}>
              <Card sx={{ p: 4, borderRadius: 4, backgroundColor: palette.surfaceAlt, border: `1px solid ${palette.borderLight}` }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: palette.primary, mb: 3 }}>
                  School Contact Details
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <MapPin size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Campus Address
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                        {schoolConfig.address.line1}, {schoolConfig.address.line2}, {schoolConfig.address.city}, {schoolConfig.address.state} - {schoolConfig.address.postalCode}
                      </Typography>
                      <Typography variant="caption" sx={{ color: palette.textMuted }}>
                        Landmark: {schoolConfig.address.landmark}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <Phone size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Telephone Numbers
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                        Main: {schoolConfig.contact.phone}
                      </Typography>
                      <Typography variant="caption" sx={{ color: palette.textMuted }}>
                        Helpline: {schoolConfig.contact.phoneAlt}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <Mail size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Email Communications
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                        General: {schoolConfig.contact.email}
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary }}>
                        Admissions: {schoolConfig.contact.admissionEmail}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box sx={{ p: 1.25, borderRadius: 2, backgroundColor: palette.primary, color: '#FFFFFF' }}>
                      <Clock size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                        Administration Office Hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }}>
                        {schoolConfig.contact.officeHours}
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

export default ContactPage;
