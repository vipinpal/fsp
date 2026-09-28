import React from 'react';
import { Breadcrumbs, Link as MuiLink, Typography, Box } from '@mui/material';
import { ChevronRight, Home } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[];
  contrast?: boolean;
}

export const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ items, contrast = false }) => {
  const { palette } = schoolThemeConfig;
  const textColor = contrast ? 'rgba(255, 255, 255, 0.7)' : palette.textSecondary;
  const activeColor = contrast ? '#FFFFFF' : palette.primary;

  return (
    <Box sx={{ py: 1.5 }}>
      <Breadcrumbs
        separator={<ChevronRight size={14} color={textColor} />}
        aria-label="breadcrumb"
      >
        <MuiLink
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: textColor,
            textDecoration: 'none',
            fontSize: '0.875rem',
            '&:hover': { color: activeColor, textDecoration: 'underline' },
          }}
        >
          <Home size={15} style={{ marginRight: 4 }} />
          Home
        </MuiLink>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return isLast || !item.href ? (
            <Typography
              key={index}
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: activeColor,
              }}
            >
              {item.label}
            </Typography>
          ) : (
            <MuiLink
              key={index}
              component={RouterLink}
              to={item.href}
              sx={{
                color: textColor,
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: activeColor, textDecoration: 'underline' },
              }}
            >
              {item.label}
            </MuiLink>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};
