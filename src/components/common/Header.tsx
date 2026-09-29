import React, { useState } from 'react';
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
  Collapse,
  Menu,
  MenuItem,
  useScrollTrigger,
} from '@mui/material';
import {
  Menu as MenuIcon,
  X as CloseIcon,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { schoolConfig } from '../../config/schoolConfig';
import { navigationConfig, NavItem } from '../../config/navigationConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const Header: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const location = useLocation();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  // Desktop dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  const handleOpenDropdown = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setActiveDropdownId(id);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setActiveDropdownId(null);
  };

  const toggleMobileSubmenu = (id: string) => {
    setMobileExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeNavItem = navigationConfig.find((item) => item.id === activeDropdownId);

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <Box
        sx={{
          backgroundColor: palette.primaryDark,
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '0.8rem',
          py: 0.75,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <Phone size={13} color={palette.secondary} />
              <span>{schoolConfig.contact.phone}</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <Mail size={13} color={palette.secondary} />
              <span>{schoolConfig.contact.email}</span>
            </Box>
            <Typography variant="caption" sx={{ color: palette.secondaryLight, fontWeight: 600 }}>
              CBSE Affiliation No: {schoolConfig.affiliation.affiliationNumber}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 'auto' }}>
            <Button
              component={RouterLink}
              to="/admissions/enquiry"
              size="small"
              sx={{
                color: palette.secondaryContrast,
                backgroundColor: palette.secondary,
                py: 0.25,
                px: 1.5,
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: 1,
                '&:hover': { backgroundColor: palette.secondaryDark, color: '#fff' },
              }}
            >
              Admissions 2026–27 Open
            </Button>
            <Typography
              component={RouterLink}
              to="/resources/downloads"
              sx={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontSize: '0.75rem',
                display: { xs: 'none', sm: 'inline-block' },
                '&:hover': { color: palette.secondaryLight },
              }}
            >
              Mandatory Disclosure
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar
        position={trigger ? 'sticky' : 'relative'}
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: '#FFFFFF',
          color: palette.textPrimary,
          borderBottom: trigger ? 'none' : `1px solid ${palette.borderLight}`,
          transition: 'all 0.3s ease',
          top: 0,
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 70, md: 80 }, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                gap: 1.5,
              }}
            >
              <Box
                component="img"
                src={schoolConfig.logo}
                alt={schoolConfig.name}
                sx={{ height: { xs: 46, sm: 54 }, width: 'auto' }}
              />
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navigationConfig.map((item: NavItem) => {
                const isSelected =
                  location.pathname === item.href ||
                  (item.children && item.children.some((c) => location.pathname === c.href));

                if (item.children && item.children.length > 0) {
                  return (
                    <Box key={item.id}>
                      <Button
                        onClick={(e) => handleOpenDropdown(e, item.id)}
                        endIcon={<ChevronDown size={14} />}
                        sx={{
                          color: isSelected ? palette.primary : palette.textPrimary,
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.9rem',
                          px: 1.5,
                          py: 1,
                          borderRadius: 1.5,
                          '&:hover': {
                            backgroundColor: 'rgba(15, 61, 62, 0.05)',
                            color: palette.primary,
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </Box>
                  );
                }

                return (
                  <Button
                    key={item.id}
                    component={RouterLink}
                    to={item.href}
                    sx={{
                      color: isSelected ? palette.primary : palette.textPrimary,
                      fontWeight: isSelected ? 700 : 500,
                      fontSize: '0.9rem',
                      px: 1.5,
                      py: 1,
                      borderRadius: 1.5,
                      '&:hover': {
                        backgroundColor: 'rgba(15, 61, 62, 0.05)',
                        color: palette.primary,
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}

              {/* Primary Call to Action */}
              <Button
                component={RouterLink}
                to="/admissions/enquiry"
                variant="contained"
                color="primary"
                startIcon={<GraduationCap size={16} />}
                sx={{
                  ml: 1.5,
                  px: 2.5,
                  py: 1,
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}
              >
                Apply Now
              </Button>
            </Box>

            {/* Mobile Menu Hamburger Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { lg: 'none' }, color: palette.primary }}
            >
              <MenuIcon size={28} />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Desktop Menu Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseDropdown}
          MenuListProps={{
            onMouseLeave: handleCloseDropdown,
            sx: { py: 1, minWidth: 260 },
          }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              boxShadow: '0 12px 32px rgba(15, 61, 62, 0.12)',
              border: `1px solid ${palette.borderLight}`,
            },
          }}
        >
          {activeNavItem?.children?.map((sub) => (
            <MenuItem
              key={sub.href}
              component={RouterLink}
              to={sub.href}
              onClick={handleCloseDropdown}
              sx={{
                py: 1.25,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                '&:hover': { backgroundColor: 'rgba(15, 61, 62, 0.04)' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: palette.textPrimary }}>
                  {sub.label}
                </Typography>
                {sub.badge && (
                  <Box
                    component="span"
                    sx={{
                      backgroundColor: palette.secondaryLight,
                      color: palette.secondaryDark,
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      px: 0.75,
                      py: 0.1,
                      borderRadius: 1,
                      ml: 1,
                    }}
                  >
                    {sub.badge}
                  </Box>
                )}
              </Box>
              {sub.description && (
                <Typography variant="caption" sx={{ color: palette.textMuted, mt: 0.25 }}>
                  {sub.description}
                </Typography>
              )}
            </MenuItem>
          ))}
        </Menu>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: '85%', maxWidth: 360, p: 2, backgroundColor: '#FFFFFF' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2, borderBottom: `1px solid ${palette.borderLight}` }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.primary }}>
            {schoolConfig.shortName} Navigation
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="close menu">
            <CloseIcon size={24} />
          </IconButton>
        </Box>

        <List sx={{ pt: 1 }}>
          {navigationConfig.map((item) => (
            <React.Fragment key={item.id}>
              {item.children && item.children.length > 0 ? (
                <>
                  <ListItemButton
                    onClick={() => toggleMobileSubmenu(item.id)}
                    sx={{ py: 1.25, borderRadius: 1.5 }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '0.95rem' }}
                    />
                    {mobileExpanded[item.id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </ListItemButton>
                  <Collapse in={Boolean(mobileExpanded[item.id])} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 2, borderLeft: `2px solid ${palette.secondaryLight}` }}>
                      {item.children.map((sub) => (
                        <ListItemButton
                          key={sub.href}
                          component={RouterLink}
                          to={sub.href}
                          onClick={() => setMobileOpen(false)}
                          sx={{ py: 0.75, borderRadius: 1 }}
                        >
                          <ListItemText
                            primary={sub.label}
                            primaryTypographyProps={{ fontSize: '0.875rem', color: palette.textSecondary }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  component={RouterLink}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{ py: 1.25, borderRadius: 1.5 }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: 600, fontSize: '0.95rem' }}
                  />
                </ListItemButton>
              )}
            </React.Fragment>
          ))}
        </List>

        <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid ${palette.borderLight}` }}>
          <Button
            component={RouterLink}
            to="/admissions/enquiry"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setMobileOpen(false)}
            sx={{ py: 1.25, fontWeight: 700 }}
          >
            Apply for Admission
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
