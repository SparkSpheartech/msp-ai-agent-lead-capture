import ToolsClient from "./ToolsClient";

export const metadata = {
  title: "ROI & Savings Calculator",
  description: "Calculate how much your business can save with AI automation. See estimated monthly savings and get a personalized plan recommendation.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/tools",
  },
  openGraph: {
    title: "ROI & Savings Calculator",
    description: "Calculate how much your business can save with AI automation.",
    url: "https://sparkspheartechsolutions.com/tools",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Savings Calculator",
      },
    ],
  },
};

export default function Page() {
  return <ToolsClient />;
}
