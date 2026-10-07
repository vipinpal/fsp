import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { Sparkles, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../../config/site.config';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../../common/BrandIcons';

export const PreschoolFooter: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#2C3E50', color: '#FFFFFF', pt: 8, pb: 6, position: 'relative' }}>
      {/* Wave SVG Top Divider */}
      <Box sx={{ position: 'absolute', top: -38, left: 0, right: 0, overflow: 'hidden', leading: 0 }}>
        <svg width="100%" height="40" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" fill="#2C3E50" />
        </svg>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Col 1: Logo & Tagline */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  bgcolor: '#FF6B6B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={22} color="#FFFFFF" />
              </Box>
              <Typography variant="h5" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#FFFFFF' }}>
                {siteConfig.shortName}
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, mb: 3 }}>
              {siteConfig.tagline}. A nurturing sanctuary where curiosity blooms into lifelong intelligence and confidence.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton component="a" href={siteConfig.social.facebook} target="_blank" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', '&:hover': { bgcolor: '#FF6B6B' } }}>
                <FacebookIcon size={18} color="#FFFFFF" />
              </IconButton>
              <IconButton component="a" href={siteConfig.social.instagram} target="_blank" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', '&:hover': { bgcolor: '#4ECDC4' } }}>
                <InstagramIcon size={18} color="#FFFFFF" />
              </IconButton>
              <IconButton component="a" href={siteConfig.social.youtube} target="_blank" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', '&:hover': { bgcolor: '#FF5252' } }}>
                <YoutubeIcon size={18} color="#FFFFFF" />
              </IconButton>
            </Box>
          </Grid>

          {/* Col 2: Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#FFE66D', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {['Home', 'Why Us', 'Programs', 'Activities', 'Campus', 'Gallery', 'Contact'].map((item) => (
                <Box
                  key={item}
                  component="a"
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.92rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#FF6B6B' },
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Col 3: Programs */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#4ECDC4', mb: 2 }}>
              Programs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {['Playgroup (2-3Y)', 'Nursery (3-4Y)', 'LKG (4-5Y)', 'UKG (5-6Y)', 'Day Care'].map((prog) => (
                <Box
                  key={prog}
                  component="a"
                  href="#programs"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.92rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#4ECDC4' },
                  }}
                >
                  {prog}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Col 4: Contact & Admissions */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#FF9F43', mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem' }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <MapPin size={18} color="#FF6B6B" />
                <span>{siteConfig.address.line1}, {siteConfig.address.city}</span>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone size={18} color="#4ECDC4" />
                <span>{siteConfig.phone}</span>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Mail size={18} color="#FFE66D" />
                <span>{siteConfig.email}</span>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', color: '#25D366', fontWeight: 700 }}>
                <MessageCircle size={18} />
                <span>WhatsApp: {siteConfig.whatsappPhone}</span>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            pt: 3,
            textAlign: 'center',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
};
