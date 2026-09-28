import React, { useEffect } from 'react';
import { seoConfig } from '../../config/seoConfig';
import { schoolConfig } from '../../config/schoolConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = seoConfig.defaultDescription,
  canonicalPath = '',
  ogImage = seoConfig.defaultOgImage,
}) => {
  const fullTitle = title
    ? `${title} | ${schoolConfig.name}`
    : seoConfig.defaultTitle;
  const canonicalUrl = `${seoConfig.siteUrl}${canonicalPath}`;

  useEffect(() => {
    // Dynamically update document head tags in browser
    document.title = fullTitle;

    // Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OpenGraph Title
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', fullTitle);

    // OpenGraph Description
    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // OpenGraph Image
    let ogImgTag = document.querySelector("meta[property='og:image']");
    if (!ogImgTag) {
      ogImgTag = document.createElement('meta');
      ogImgTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImgTag);
    }
    ogImgTag.setAttribute('content', ogImage);

    // Canonical link
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Structured Data JSON-LD
    let scriptTag = document.querySelector("script[type='application/ld+json']");
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(seoConfig.organizationSchema);
  }, [fullTitle, description, canonicalUrl, ogImage]);

  return null;
};
