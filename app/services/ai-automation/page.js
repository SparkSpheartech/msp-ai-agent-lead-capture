import AIAutomationClient from "./AIAutomationClient";

export const metadata = {
  title: "AI & Workflow Automation Services",
  description: "Eliminate manual work with intelligent workflow automation, AI chatbots, and data processing. Save 10-40+ hours per week.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/ai-automation",
  },
  openGraph: {
    title: "AI & Workflow Automation Services",
    description: "Custom AI chatbots, workflow automation, and intelligent data processing.",
    url: "https://sparkspheartechsolutions.com/services/ai-automation",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI & Automation Services",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">AI & Workflow Automation Services</h1>
      <AIAutomationClient />
    </>
  );
}
