import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from '@mui/material';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { schoolConfig } from '../../config/schoolConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

// Inline SVGs for social platforms
const FacebookIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: palette.primaryDark,
        color: 'rgba(255, 255, 255, 0.85)',
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: `4px solid ${palette.secondary}`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {/* School Identity Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2.5 }}>
              <Box
                component="img"
                src={schoolConfig.logo}
                alt={schoolConfig.name}
                sx={{
                  height: 58,
                  width: 'auto',
                  filter: 'brightness(0) invert(1)',
                  mb: 1.5,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.7,
                  mb: 3,
                  pr: { md: 4 },
                }}
              >
                {schoolConfig.name} is dedicated to fostering intellectual distinction, moral courage, and compassionate global citizenship in a modern 15-acre green campus.
              </Typography>

              {/* Social icons */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {schoolConfig.social.facebook && (
                  <IconButton
                    component="a"
                    href={schoolConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', '&:hover': { backgroundColor: palette.secondary, color: palette.primaryDark } }}
                  >
                    <FacebookIcon />
                  </IconButton>
                )}
                {schoolConfig.social.instagram && (
                  <IconButton
                    component="a"
                    href={schoolConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', '&:hover': { backgroundColor: palette.secondary, color: palette.primaryDark } }}
                  >
                    <InstagramIcon />
                  </IconButton>
                )}
                {schoolConfig.social.youtube && (
                  <IconButton
                    component="a"
                    href={schoolConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', '&:hover': { backgroundColor: palette.secondary, color: palette.primaryDark } }}
                  >
                    <YoutubeIcon />
                  </IconButton>
                )}
                {schoolConfig.social.linkedin && (
                  <IconButton
                    component="a"
                    href={schoolConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', '&:hover': { backgroundColor: palette.secondary, color: palette.primaryDark } }}
                  >
                    <LinkedinIcon />
                  </IconButton>
                )}
                {schoolConfig.social.twitter && (
                  <IconButton
                    component="a"
                    href={schoolConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.08)', '&:hover': { backgroundColor: palette.secondary, color: palette.primaryDark } }}
                  >
                    <TwitterIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid item xs={6} sm={6} md={2.5}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2.5, fontSize: '1.05rem' }}>
              Quick Navigation
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                { label: 'About School', href: '/about' },
                { label: 'Admissions 2026–27', href: '/admissions' },
                { label: 'Academic Curriculum', href: '/academics/curriculum' },
                { label: 'Campus Infrastructure', href: '/campus/infrastructure' },
                { label: 'Student Achievements', href: '/achievements' },
                { label: 'Photo & Video Gallery', href: '/gallery' },
                { label: 'School Calendar', href: '/academics/calendar' },
              ].map((link, idx) => (
                <Box component="li" key={idx} sx={{ mb: 1.25 }}>
                  <MuiLink
                    component={RouterLink}
                    to={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      transition: 'color 0.2s ease',
                      '&:hover': { color: palette.secondaryLight },
                    }}
                  >
                    <ArrowRight size={13} color={palette.secondary} />
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Important Disclosures */}
          <Grid item xs={6} sm={6} md={2.5}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2.5, fontSize: '1.05rem' }}>
              Student & Parent
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {[
                { label: 'Mandatory Public Disclosure', href: '/resources/downloads' },
                { label: 'Transfer Certificate (TC)', href: '/resources/transfer-certificate' },
                { label: 'Fee Structure & Policy', href: '/admissions/fee-structure' },
                { label: 'School Prospectus (PDF)', href: '/resources/prospectus' },
                { label: 'Parents’ Corner & PTA', href: '/community/parents' },
                { label: 'House System', href: '/community/houses' },
                { label: 'Faculty Careers', href: '/careers' },
                { label: 'FAQ', href: '/resources/faq' },
              ].map((link, idx) => (
                <Box component="li" key={idx} sx={{ mb: 1.25 }}>
                  <MuiLink
                    component={RouterLink}
                    to={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      transition: 'color 0.2s ease',
                      '&:hover': { color: palette.secondaryLight },
                    }}
                  >
                    <ArrowRight size={13} color={palette.secondary} />
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Details Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700, mb: 2.5, fontSize: '1.05rem' }}>
              Contact Campus
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <MapPin size={20} color={palette.secondary} style={{ marginTop: 2, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                  {schoolConfig.address.line1}, {schoolConfig.address.line2}, {schoolConfig.address.city}, {schoolConfig.address.state} - {schoolConfig.address.postalCode}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone size={18} color={palette.secondary} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                  {schoolConfig.contact.phone}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Mail size={18} color={palette.secondary} style={{ flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                  {schoolConfig.contact.admissionEmail}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <Clock size={18} color={palette.secondary} style={{ marginTop: 2, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                  {schoolConfig.contact.officeHours}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom copyright line */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <Typography variant="caption">
            © {currentYear} {schoolConfig.name}. All rights reserved. Affiliated to {schoolConfig.affiliation.board}.
          </Typography>

          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            100% Pure Static Architecture • Zero-Backend Platform
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
