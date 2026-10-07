import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { MapPin, ExternalLink } from 'lucide-react';
import { schoolConfig } from '../../config/schoolConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

interface GoogleMapEmbedProps {
  /** Override embed URL */
  src?: string;
  /** Custom map title */
  title?: string;
  /** Override height (default: 450px) */
  height?: number | string;
  /** Show the "View Larger Map" action button */
  showExternalLink?: boolean;
  /** Additional MUI sx props for the outer Box */
  sx?: object;
  /** Custom address override for label */
  locationLabel?: string;
  /** Custom external link override */
  externalUrl?: string;
}

/**
 * Embeds Google Maps as a public <iframe> — zero API key, zero backend.
 * Falls back to a styled placeholder if no embed URL is configured.
 */
export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  src,
  title,
  height = 450,
  showExternalLink = true,
  sx = {},
  locationLabel,
  externalUrl: externalUrlProp,
}) => {
  const { palette } = schoolThemeConfig;
  const { address } = schoolConfig;
  const embedUrl = src ?? address.googleMapsEmbedUrl;
  const externalUrl = externalUrlProp ?? address.googleMapsUrl ?? 'https://maps.google.com';
  const label = locationLabel ?? `${address.line1}, ${address.city}`;

  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        border: `1px solid ${palette.borderLight}`,
        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: height,
        '&:hover': {
          boxShadow: '0 16px 60px rgba(0,0,0,0.12)',
        },
        ...sx,
      }}
    >
      {/* ── Decorative header bar ─────────────────────────────── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 1.75,
          background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.primaryDark ?? palette.primary} 100%)`,
          color: '#FFFFFF',
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0, pr: 1 }}>
          <MapPin size={18} style={{ flexShrink: 0 }} />
          <Typography
            variant="subtitle2"
            noWrap
            sx={{ fontWeight: 700, letterSpacing: 0.3 }}
          >
            {label}
          </Typography>
        </Box>

        {showExternalLink && (
          <Button
            component="a"
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            endIcon={<ExternalLink size={14} />}
            sx={{
              color: '#FFFFFF',
              borderColor: 'rgba(255,255,255,0.5)',
              border: '1px solid',
              borderRadius: 2,
              px: 1.5,
              py: 0.5,
              fontSize: '0.72rem',
              fontWeight: 600,
              textTransform: 'none',
              flexShrink: 0,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderColor: '#FFFFFF',
              },
            }}
          >
            Open in Maps
          </Button>
        )}
      </Box>

      {/* ── Map iframe / fallback ─────────────────────────────── */}
      {embedUrl ? (
        <Box
          component="iframe"
          src={embedUrl}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title ?? `Map of ${schoolConfig.name}`}
          sx={{
            display: 'block',
            border: 'none',
            flexGrow: 1,
            minHeight: typeof height === 'number' ? `${height - 56}px` : height,
          }}
        />
      ) : (
        /* Graceful fallback when no embed URL is set */
        <Box
          sx={{
            height,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: palette.surfaceAlt,
            gap: 2,
            flexGrow: 1,
          }}
        >
          <MapPin size={40} color={palette.primary} />
          <Typography variant="body2" sx={{ color: palette.textSecondary, textAlign: 'center' }}>
            {address.line1}, {address.line2}
            <br />
            {address.city}, {address.state} – {address.postalCode}
          </Typography>
          <Button
            component="a"
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="small"
            endIcon={<ExternalLink size={14} />}
            sx={{ textTransform: 'none' }}
          >
            View on Google Maps
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GoogleMapEmbed;
