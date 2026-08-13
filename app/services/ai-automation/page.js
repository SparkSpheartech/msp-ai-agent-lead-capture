import AIAutomationClient from "./AIAutomationClient";

export const metadata = {
  title: "AI Agents & Agentic Automation for Business Workflows | SPARKSPHEAR",
  description: "SPARKSPHEAR builds controlled AI agents, chatbots, integrations, and workflow automation for repetitive business operations.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/ai-automation",
  },
  openGraph: {
    title: "AI Agents & Agentic Automation for Business Workflows | SPARKSPHEAR",
    description: "SPARKSPHEAR builds controlled AI agents, chatbots, integrations, and workflow automation for repetitive business operations.",
    url: "https://sparkspheartechsolutions.com/services/ai-automation",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Agents & Agentic Automation",
      },
    ],
  },
};

export default function Page() {
  return <AIAutomationClient />;
}
