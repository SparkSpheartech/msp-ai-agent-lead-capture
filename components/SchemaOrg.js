import React from 'react';

export default function SchemaOrg({ breadcrumbs, service, article, faq }) {
  const schemas = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url.startsWith('http') ? crumb.url : `https://sparkspheartechsolutions.com${crumb.url}`
      }))
    });
  }

  if (service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "serviceType": service.serviceType || service.name,
      "provider": {
        "@type": "Organization",
        "name": "SPARKSPHEAR Tech Solutions",
        "url": "https://sparkspheartechsolutions.com"
      },
      "areaServed": "United States",
      "description": service.description
    });
  }

  if (article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "author": {
        "@type": "Person",
        "name": article.author || "SPARKSPHEAR Tech Solutions"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SPARKSPHEAR Tech Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sparkspheartechsolutions.com/logo.png"
        }
      },
      "datePublished": article.datePublished,
      "mainEntityOfPage": article.url
    });
  }

  if (faq && faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  if (schemas.length === 0) return null;

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

