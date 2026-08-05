import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO, FAQS_LIST, SERVICES_LIST } from '../data/servicesData';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: { name: string; item: string }[];
  isBlogPost?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = `${COMPANY_INFO.name} - Solar & CCTV Solutions in Chhatrapati Sambhajinagar`,
  description = `Expert Technologies - Top-rated Solar Rooftop Power Systems & High-Definition 4K CCTV Security Camera Installation in Chhatrapati Sambhajinagar (Aurangabad). Save up to 90% electricity bill with PM Surya Ghar subsidy. Call +91 95954 43387.`,
  canonicalUrl = 'https://experttechnologies.in',
  ogImage = 'https://experttechnologies.in/og-image.jpg',
  ogType = 'website',
  breadcrumbs,
  isBlogPost = false,
}) => {
  // 1. LocalBusiness / Security & Solar Contractor Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SolarEnergyContractor', 'SecuritySystemsContractor'],
    '@id': 'https://experttechnologies.in/#organization',
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.name,
    url: canonicalUrl,
    logo: 'https://experttechnologies.in/logo.png',
    image: 'https://experttechnologies.in/og-image.jpg',
    description: COMPANY_INFO.shortDesc,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      addressLocality: COMPANY_INFO.city,
      addressRegion: COMPANY_INFO.state,
      postalCode: COMPANY_INFO.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.8654',
      longitude: '75.3521',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Chhatrapati Sambhajinagar (Aurangabad)',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Maharashtra',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: COMPANY_INFO.googleRating,
      reviewCount: '320',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Solar & CCTV Services Catalog',
      itemListElement: SERVICES_LIST.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDesc,
        },
        position: index + 1,
      })),
    },
    sameAs: [COMPANY_INFO.facebookUrl, COMPANY_INFO.instagramUrl, COMPANY_INFO.linkedin, COMPANY_INFO.youtube],
  };

  // 2. FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_LIST.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // 3. Breadcrumb Schema
  const breadcrumbList = breadcrumbs || [
    { name: 'Home', item: 'https://experttechnologies.in/' },
    { name: 'Services', item: 'https://experttechnologies.in/#services' },
    { name: 'Solar Rooftop', item: 'https://experttechnologies.in/#solar-installation' },
    { name: 'CCTV Security', item: 'https://experttechnologies.in/#cctv-installation' },
    { name: 'Contact Us', item: 'https://experttechnologies.in/#contact' },
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Solar Installation Chhatrapati Sambhajinagar, CCTV Camera Installation Aurangabad, Solar Panel Subsidy PM Surya Ghar, CCTV AMC Service Garkheda, Biometric Attendance System CIDCO, Video Door Phone Beed Bypass, Solar Rooftop Power Plant Waluj MIDC, Expert Technologies"
      />
      <meta name="author" content={COMPANY_INFO.name} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Mobile & Theme */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="apple-mobile-web-app-title" content="Expert Tech" />
      <meta name="application-name" content="Expert Technologies" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : ogType} />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${COMPANY_INFO.name} Solar & CCTV Installation`} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data Scripts */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};
