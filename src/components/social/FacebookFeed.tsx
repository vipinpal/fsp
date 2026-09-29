import React, { useEffect, useRef, useCallback } from 'react';
import { Box, Skeleton } from '@mui/material';
import { useFacebookSDK } from '../../hooks/useFacebookSDK';
import { FacebookFallback } from './FacebookFallback';
import type { FacebookConfig } from '../../config/socialConfig';

interface FacebookFeedProps {
  config: FacebookConfig;
}

/**
 * FacebookFeed — Official Facebook Page Plugin embed.
 *
 * ─── Technical notes ────────────────────────────────────────────────────────
 *
 * The Facebook Page Plugin (fb-page XFBML element) renders a self-contained
 * iframe managed entirely by Facebook. It does NOT expose individual posts as
 * controllable DOM nodes — therefore:
 *
 *   ✓  We embed the plugin with official data-* attributes.
 *   ✓  We call FB.XFBML.parse() after mount and on pageUrl change.
 *   ✗  We do NOT scrape Facebook's DOM.
 *   ✗  We do NOT use undocumented Facebook endpoints.
 *   ✗  We do NOT manipulate the plugin's internal iframe.
 *
 * The `maxPosts` config value is stored in socialConfig but intentionally not
 * forwarded to the plugin because the Page Plugin API does not support it.
 * See: https://developers.facebook.com/docs/plugins/page-plugin
 *
 * ────────────────────────────────────────────────────────────────────────────
 */
export const FacebookFeed: React.FC<FacebookFeedProps> = ({ config }) => {
  const { sdkReady, error } = useFacebookSDK();
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive width: clamp between 280 and 500 pixels per Facebook's limits.
  // We use a ref to calculate width after mount.
  const getPluginWidth = useCallback((): number => {
    if (!containerRef.current) return 380;
    const w = containerRef.current.offsetWidth;
    return Math.min(500, Math.max(280, w));
  }, []);

  // Parse the XFBML element once the SDK is ready and the container is mounted.
  useEffect(() => {
    if (!sdkReady || !containerRef.current) return;

    // Small tick to ensure the fb-page div is fully in the DOM.
    const timer = setTimeout(() => {
      if (containerRef.current && window.FB?.XFBML) {
        window.FB.XFBML.parse(containerRef.current);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [sdkReady, config.pageUrl]);

  // ── Error state ─────────────────────────────────────────────────────────
  if (error) {
    return <FacebookFallback pageUrl={config.pageUrl} reason="error" />;
  }

  // ── Loading state ───────────────────────────────────────────────────────
  if (!sdkReady) {
    return (
      <Box
        aria-busy="true"
        aria-label="Loading latest Facebook updates…"
        sx={{
          width: '100%',
          maxWidth: 500,
          mx: 'auto',
        }}
      >
        {/* Mimic the plugin's rough shape with skeletons */}
        <Skeleton
          variant="rectangular"
          height={52}
          sx={{ borderRadius: '8px 8px 0 0', mb: 0.5, bgcolor: 'rgba(255,255,255,0.12)' }}
        />
        {[1, 2, 3].map((i) => (
          <Box key={i} sx={{ p: 1.5 }}>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 1 }}>
              <Skeleton variant="circular" width={36} height={36} sx={{ bgcolor: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
              <Box sx={{ flex: 1 }}>
                <Skeleton variant="text" width="55%" sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
                <Skeleton variant="text" width="30%" sx={{ bgcolor: 'rgba(255,255,255,0.10)' }} />
              </Box>
            </Box>
            <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 1, bgcolor: 'rgba(255,255,255,0.10)', mb: 1 }} />
            <Skeleton variant="text" width="90%" sx={{ bgcolor: 'rgba(255,255,255,0.08)' }} />
            <Skeleton variant="text" width="70%" sx={{ bgcolor: 'rgba(255,255,255,0.08)' }} />
          </Box>
        ))}
      </Box>
    );
  }

  // ── SDK ready — render the official Page Plugin ─────────────────────────
  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        maxWidth: 500,
        mx: 'auto',
        // Ensure the iframe from Facebook fills correctly.
        '& > .fb-page, & > .fb-page > span, & > .fb-page > span > iframe': {
          width: '100% !important',
          maxWidth: '500px !important',
        },
      }}
    >
      {/*
       * Official Facebook Page Plugin XFBML element.
       * See: https://developers.facebook.com/docs/plugins/page-plugin
       *
       * data-href        — Page URL (from config, never hard-coded)
       * data-tabs        — "timeline" shows the page's post feed
       * data-width       — Calculated responsively; FB limits: 280–500 px
       * data-height      — Controlled via config.pluginHeight
       * data-small-header — Compact header to save vertical space
       * data-adapt-container-width — Let FB fill the container
       * data-hide-cover  — Remove cover photo (cleaner embed look)
       * data-show-facepile — Show follower avatars
       */}
      <div
        className="fb-page"
        data-href={config.pageUrl}
        data-tabs="timeline"
        data-width={String(getPluginWidth())}
        data-height={String(config.pluginHeight ?? 500)}
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      />
    </Box>
  );
};

export default FacebookFeed;
