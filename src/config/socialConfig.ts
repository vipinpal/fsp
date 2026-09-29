// ─────────────────────────────────────────────────────────────────────────────
// Social Media Configuration
//
// To reuse this website for a different school, only change the values below.
// No component code needs to change.
// ─────────────────────────────────────────────────────────────────────────────

export interface FacebookConfig {
  /** Set to false to hide the Facebook section entirely */
  enabled: boolean;
  /** Full URL to the Facebook Page, e.g. "https://www.facebook.com/yourschool" */
  pageUrl: string;
  /**
   * NOTE: The official Facebook Page Plugin (fb-page XFBML element) does NOT
   * support a "maxPosts" attribute. This value is stored here for config
   * completeness and future-proofing if Facebook adds the capability. It is
   * intentionally NOT used to scrape or manipulate Facebook's internal DOM.
   */
  maxPosts?: number;
  /** Whether the section should auto-rotate/highlight (cosmetic section behaviour only) */
  autoRotate?: boolean;
  /** Auto-rotate interval in milliseconds (default: 5000) */
  rotationInterval?: number;
  /** Height of the embedded Page Plugin in pixels */
  pluginHeight?: number;
}

export interface SocialConfig {
  facebook: FacebookConfig;
}

export const socialConfig: SocialConfig = {
  facebook: {
    enabled: true,
    // ── Change ONLY this URL when reusing for a different school ──────────────
    pageUrl: "https://www.facebook.com/imdb",
    // ─────────────────────────────────────────────────────────────────────────
    maxPosts: 20,        // config-only — not sent to Facebook API (see note above)
    autoRotate: true,
    rotationInterval: 5000,
    pluginHeight: 500,
  },
};
