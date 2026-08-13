import MarketsClient from "@/components/MarketsClient";

export const metadata = {
  title: "Markets & Workflow Opportunities | SPARKSPHEAR",
  description: "Explore market opportunities, industry briefs, and AI agent workflows across HVAC, waste management, childcare, barbershops, auto repair, and hospitality.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/markets",
  },
  openGraph: {
    title: "Markets & Workflow Opportunities | SPARKSPHEAR",
    description: "Explore market opportunities, industry briefs, and AI agent workflows across service and operations-heavy industries.",
    url: "https://sparkspheartechsolutions.com/markets",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Markets & Workflow Opportunities",
      },
    ],
  },
};

export default function Page() {
  return <MarketsClient />;
}
