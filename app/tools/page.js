import ToolsClient from "./ToolsClient";

export const metadata = {
  title: "Workflow Opportunity Calculator | SPARKSPHEAR",
  description: "Estimate the workflow opportunity, manual hours, and process improvements suitable for AI agent automation.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/tools",
  },
  openGraph: {
    title: "Workflow Opportunity Calculator | SPARKSPHEAR",
    description: "Estimate the workflow opportunity, manual hours, and process improvements suitable for AI agent automation.",
    url: "https://sparkspheartechsolutions.com/tools",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Workflow Opportunity Calculator",
      },
    ],
  },
};

export default function Page() {
  return <ToolsClient />;
}
