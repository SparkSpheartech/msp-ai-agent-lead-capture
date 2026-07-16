import AIAutomationClient from "./AIAutomationClient";

export const metadata = {
  title: "AI & Automation Services | SparkSphear Tech",
  description:
    "Eliminate manual work with intelligent workflow automation, AI chatbots, and data processing. SparkSphear builds custom AI systems that save 10-40+ hours per week.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Services | SparkSphear Tech",
    description:
      "Custom AI chatbots, workflow automation, and intelligent data processing that scale with your business.",
    url: "https://sparkspheartechsolutions.com/services/ai-automation",
  },
};

export default function Page() {
  return <AIAutomationClient />;
}
