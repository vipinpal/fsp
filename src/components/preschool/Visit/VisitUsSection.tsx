import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { siteConfig } from '../../../config/site.config';
import { GoogleMapEmbed } from '../../common/GoogleMapEmbed';

export const VisitUsSection: React.FC = () => {
  return (
    <Box id="visit-us" sx={{ py: { xs: 8, md: 14 }, bgcolor: '#FFFDF9' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 7, maxWidth: 720, mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: '#FF6B6B',
              letterSpacing: '0.12em',
              fontSize: '0.95rem',
            }}
          >
            📍 COME VISIT US
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: '#2C3E50',
              mt: 1,
              fontSize: { xs: '2rem', md: '2.8rem' },
            }}
          >
            Come Visit Our Little World
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#546E7A',
              mt: 1.5,
              fontSize: '1.1rem',
            }}
          >
            We would love to welcome you and your child for a personal walkthrough of our classrooms and play areas.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left: School Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3.5, sm: 4.5 },
                borderRadius: '32px',
                bgcolor: '#FFF0F0',
                border: '2px solid #FFD1D1',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 700,
                    color: '#FF6B6B',
                    mb: 3,
                  }}
                >
                  School Campus Info
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ p: 1.2, borderRadius: '14px', bgcolor: '#FFFFFF', color: '#FF6B6B' }}>
                      <MapPin size={24} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50' }}>
                        Address
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#546E7A' }}>
                        {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.postalCode}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ p: 1.2, borderRadius: '14px', bgcolor: '#FFFFFF', color: '#4ECDC4' }}>
                      <Phone size={24} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50' }}>
                        Admissions Phone
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#546E7A' }}>
                        {siteConfig.phone} / {siteConfig.phoneAlt}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ p: 1.2, borderRadius: '14px', bgcolor: '#FFFFFF', color: '#9B5DE5' }}>
                      <Mail size={24} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50' }}>
                        Email Enquiries
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#546E7A' }}>
                        {siteConfig.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ p: 1.2, borderRadius: '14px', bgcolor: '#FFFFFF', color: '#FF9F43' }}>
                      <Clock size={24} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50' }}>
                        Visiting Hours
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#546E7A' }}>
                        Mon – Sat: 8:30 AM – 3:30 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Button
                component="a"
                href={siteConfig.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                startIcon={<Navigation size={20} />}
                sx={{
                  bgcolor: '#FF6B6B',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontFamily: "'Fredoka', sans-serif",
                  py: 1.5,
                  mt: 4,
                  borderRadius: '9999px',
                  boxShadow: '0 8px 20px rgba(255, 107, 107, 0.3)',
                  '&:hover': { bgcolor: '#FF5252' },
                }}
              >
                Get Google Maps Directions
              </Button>
            </Paper>
          </Grid>

          {/* Right: Google Maps Embed */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: '32px',
                overflow: 'hidden',
                height: '100%',
                minHeight: 400,
                border: '3px solid #FFFFFF',
                boxShadow: '0 24px 48px rgba(44, 62, 80, 0.1)',
              }}
            >
              <GoogleMapEmbed
                src={siteConfig.address.googleMapsEmbedUrl}
                title="Little Learners Preschool Location"
                height="100%"
                locationLabel={`${siteConfig.address.line1}, ${siteConfig.address.city}`}
                externalUrl={siteConfig.address.googleMapsDirectionsUrl}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
