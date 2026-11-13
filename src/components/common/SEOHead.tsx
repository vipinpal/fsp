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
    ? title.includes(schoolConfig.name)
      ? title
      : `${title} | ${schoolConfig.name}`
    : seoConfig.defaultTitle;
  const siteUrl = seoConfig.siteUrl || window.location.origin;
  const canonicalUrl = new URL(canonicalPath || window.location.pathname, siteUrl).toString();
  useEffect(() => {
    document.title = fullTitle;

    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    const existingKeywords = document.querySelector("meta[name='keywords']");
    if (existingKeywords) {
      existingKeywords.remove();
    }

    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector("meta[property='og:description']");
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector("meta[property='og:url']");
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);

    let twitterTitle = document.querySelector("meta[name='twitter:title']");
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', fullTitle);

    let twitterDescription = document.querySelector("meta[name='twitter:description']");
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', description);

    let ogImgTag = document.querySelector("meta[property='og:image']");
    if (!ogImgTag) {
      ogImgTag = document.createElement('meta');
      ogImgTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImgTag);
    }
    ogImgTag.setAttribute('content', ogImage);

    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'EducationalOrganization', 'Preschool'],
      '@id': `${siteUrl}/#school`,
      name: schoolConfig.name,
      alternateName: schoolConfig.shortName,
      url: `${siteUrl}/`,
      logo: new URL(schoolConfig.logo, siteUrl).toString(),
      image: ogImage,
      telephone: schoolConfig.contact.phone,
      email: schoolConfig.contact.email,
      sameAs: [
        schoolConfig.social.facebook,
        schoolConfig.social.instagram,
        schoolConfig.social.youtube
      ].filter(Boolean),
      address: {
        '@type': 'PostalAddress',
        streetAddress: [schoolConfig.address.line1, schoolConfig.address.line2].filter(Boolean).join(', '),
        addressLocality: schoolConfig.address.city,
        addressRegion: schoolConfig.address.state,
        postalCode: schoolConfig.address.postalCode,
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: schoolConfig.contact.phone,
        contactType: 'Admissions & General Information',
        email: schoolConfig.contact.email,
        availableLanguage: ['English', 'Hindi'],
      },
      areaServed: {
        '@type': 'City',
        name: `${schoolConfig.address.city}, ${schoolConfig.address.state}`,
      },
      description,
    };

    let scriptTag = document.querySelector("script[type='application/ld+json']");
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  }, [fullTitle, description, canonicalUrl, ogImage]);

  return null;
};
