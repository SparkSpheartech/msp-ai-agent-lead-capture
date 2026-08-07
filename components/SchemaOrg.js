import React from 'react';

export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "name": "SPARKSPHEAR Tech Solutions",
    "url": "https://sparkspheartechsolutions.com",
    "logo": "https://sparkspheartechsolutions.com/logo.png",
    "image": "https://sparkspheartechsolutions.com/logo.png",
    "description": "Nationwide B2B AI Automation Architecture, Custom Agentic Workflows, and Tech Curation Platform for Small Businesses.",
    "telephone": "(260) 267-0641",
    "email": "SparkSphear4me@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/sparkspheartech",
      "https://twitter.com/sparksphear"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sparkspheartechsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industry Guides",
        "item": "https://sparkspheartechsolutions.com/guides"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Master Audit",
        "item": "https://sparkspheartechsolutions.com/services/it-audits"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Pricing",
        "item": "https://sparkspheartechsolutions.com/pricing"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI & Business Workflow Automation",
    "provider": {
      "@type": "Organization",
      "name": "SPARKSPHEAR Tech Solutions"
    },
    "areaServed": "United States",
    "description": "Custom AI Agentic Systems, Workflow Automation, and Infrastructure Audits for Small & Medium Operations."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
