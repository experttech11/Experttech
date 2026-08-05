import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/servicesData';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = `${COMPANY_INFO.name} - Solar & CCTV Solutions`,
  description = `${COMPANY_INFO.name} - Premier Solar Rooftop Power Systems & High-Definition CCTV Security Solutions in Chh. Sambhajinagar. Save electricity, lower energy bills & secure homes, offices, schools, and industrial sites.`,
  canonicalUrl = 'https://experttechnologies.in',
  ogImage = 'https://experttechnologies.in/og-image.jpg',
  ogType = 'website',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.tagline,
    url: canonicalUrl,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: 'Chh. Sambhajinagar',
      postalCode: '431001',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Sa 09:00-19:00',
    sameAs: [COMPANY_INFO.facebookUrl, COMPANY_INFO.instagramUrl, COMPANY_INFO.linkedin, COMPANY_INFO.youtube],
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Solar Panel Installation, CCTV Camera Installation, Security System, Solar Power Solutions, Solar Rooftop, Chh Sambhajinagar, Expert Technologies, Surveillance Cameras, CCTV Maintenance" />
      <meta name="author" content={COMPANY_INFO.name} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};
