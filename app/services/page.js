import { Suspense } from 'react';
import ServicesOverviewClient from './ServicesOverviewClient';

export const metadata = {
  title: "AI Services & Workflow Automation",
  description: "SPARKSPHEAR offers workflow audits, AI agent automation, digital systems, and creative media to transform business operations.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services",
  },
  openGraph: {
    title: "AI Services & Workflow Automation | SPARKSPHEAR",
    description: "SPARKSPHEAR offers workflow audits, AI agent automation, digital systems, and creative media to transform business operations.",
    url: "https://sparkspheartechsolutions.com/services",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex items-center justify-center">Loading...</div>}>
      <ServicesOverviewClient />
    </Suspense>
  );
}
