import PricingClient from "./PricingClient";

export const metadata = {
  title: "Transparent Pricing & Plans",
  description: "One-time setup plus affordable monthly plans. Essentials, Growth, and Enterprise plans tailored for your business.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/pricing",
  },
  openGraph: {
    title: "Transparent Pricing & Plans",
    description: "One-time setup plus affordable monthly plans tailored for your business.",
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
  return <PricingClient />;
}
