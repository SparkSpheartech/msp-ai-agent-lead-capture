import PricingClient from "./PricingClient";

export const metadata = {
  title: "Transparent Pricing & Plans",
  description: "One-time setup plus affordable monthly plans. Essentials, Growth, and Enterprise plans that save 10-40+ hours per week.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/pricing",
  },
  openGraph: {
    title: "Transparent Pricing & Plans",
    description: "One-time setup plus affordable monthly plans that save 10-40+ hours per week.",
    url: "https://sparkspheartechsolutions.com/pricing",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Pricing",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Transparent AI Services & Automation Pricing</h1>
      <PricingClient />
    </>
  );
}
