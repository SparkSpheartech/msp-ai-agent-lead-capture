import PricingClient from "./PricingClient";

export const metadata = {
  title: "AI Agent Pricing & Agentic Automation | SPARKSPHEAR",
  description: "Controlled AI agents, chatbots, and workflow automation for repetitive business operations across service and operations-heavy industries.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/pricing",
  },
  openGraph: {
    title: "AI Agent Pricing & Agentic Automation | SPARKSPHEAR",
    description: "Controlled AI agents, chatbots, and workflow automation for repetitive business operations across service and operations-heavy industries.",
    url: "https://sparkspheartechsolutions.com/pricing",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR AI Agent Pricing",
      },
    ],
  },
};

export default function Page() {
  return <PricingClient />;
}
