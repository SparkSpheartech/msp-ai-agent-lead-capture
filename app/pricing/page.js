import PricingClient from "./PricingClient";

export const metadata = {
  title: "Pricing | AI Automation Plans | SparkSphear Tech",
  description: "One-time setup plus affordable monthly. Sovern AI, Essentials, Growth, and Enterprise plans that save 10-40+ hours per week.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/pricing",
  },
  openGraph: {
    title: "Pricing | AI Automation Plans | SparkSphear Tech",
    description: "One-time setup plus affordable monthly. Sovern AI, Essentials, Growth, and Enterprise plans that save 10-40+ hours per week.",
    url: "https://sparkspheartechsolutions.com/pricing",
  },
};

export default function Page() {
  return <PricingClient />;
}
