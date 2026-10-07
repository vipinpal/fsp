import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, X as CloseIcon, Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '../../../config/site.config';

export const PreschoolHeader: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Programs', href: '#programs' },
    { label: 'Learning Play', href: '#activities' },
    { label: 'Campus', href: '#campus' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Parents', href: '#testimonials' },
    { label: 'Contact', href: '#visit-us' },
  ];

  return (
    <>
      {/* Top Mini Contact Bar */}
      <Box
        sx={{
          bgcolor: '#FFF5E6',
          color: '#2C3E50',
          py: 0.75,
          px: 2,
          fontSize: '0.85rem',
          fontWeight: 600,
          borderBottom: '1px solid #FFE4E1',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <MapPin size={15} color="#FF6B6B" />
                <span>{siteConfig.address.line1}, {siteConfig.address.city}</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <Phone size={15} color="#4ECDC4" />
                <span>{siteConfig.phone}</span>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box
                component="a"
                href={`https://wa.me/${siteConfig.whatsappPhone}`}
                target="_blank"
                rel="noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.6,
                  color: '#25D366',
                  textDecoration: 'none',
                  fontWeight: 700,
                  '&:hover': { opacity: 0.85 },
                }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp Admissions</span>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Sticky Preschool AppBar */}
      <AppBar
        position="sticky"
        elevation={isScrolled ? 3 : 0}
        sx={{
          bgcolor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFDF9',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: '1px solid #FFEAEB',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Preschool Logo */}
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
              }}
            >
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  bgcolor: '#FF6B6B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 16px rgba(255, 107, 107, 0.3)',
                  transform: 'rotate(-5deg)',
                }}
              >
                <Sparkles size={24} color="#FFFFFF" />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 700,
                    color: '#FF6B6B',
                    lineHeight: 1.1,
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                  }}
                >
                  Little Learners
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    color: '#4ECDC4',
                    letterSpacing: '0.05em',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Preschool & Early World
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {navLinks.map((link) => (
                  <Box
                    key={link.label}
                    component="a"
                    href={link.href}
                    sx={{
                      color: '#2C3E50',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      fontFamily: "'Fredoka', sans-serif",
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#FF6B6B',
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                ))}

                <Button
                  component="a"
                  href="#admission-form"
                  variant="contained"
                  sx={{
                    bgcolor: '#FF6B6B',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontFamily: "'Fredoka', sans-serif",
                    px: 3,
                    py: 1.2,
                    boxShadow: '0 8px 20px rgba(255, 107, 107, 0.35)',
                    '&:hover': {
                      bgcolor: '#FF5252',
                    },
                  }}
                >
                  🎒 Book a Visit
                </Button>
              </Box>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{
                  color: '#FF6B6B',
                  bgcolor: '#FFF0F0',
                  borderRadius: '12px',
                  p: 1.2,
                }}
              >
                <MenuIcon size={26} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '82%',
            maxWidth: 320,
            bgcolor: '#FFFDF9',
            p: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontFamily: "'Fredoka', sans-serif", color: '#FF6B6B', fontWeight: 700 }}>
            Navigation
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseIcon size={24} color="#2C3E50" />
          </IconButton>
        </Box>

        <List sx={{ mb: 3 }}>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setMobileOpen(false)}
                sx={{ borderRadius: '12px', py: 1.2 }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#2C3E50',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Button
          component="a"
          href="#admission-form"
          fullWidth
          variant="contained"
          onClick={() => setMobileOpen(false)}
          sx={{
            bgcolor: '#FF6B6B',
            color: '#FFFFFF',
            fontWeight: 700,
            fontFamily: "'Fredoka', sans-serif",
            py: 1.5,
            borderRadius: '9999px',
          }}
        >
          🎒 Book a Visit
        </Button>
      </Drawer>
    </>
  );
};
