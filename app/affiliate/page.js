import AffiliateClient from "./AffiliateClient";

export const metadata = {
  title: "The Business That Starts With You | SparkSphear Affiliate AI Tools",
  description: "Every industry needs AI to scale. Select your business model below to discover the exact AI tools and automated workflows built for your operations.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/affiliate",
  },
  openGraph: {
    title: "The Business That Starts With You | SparkSphear Affiliate AI Tools",
    description: "Every industry needs AI to scale. Select your business model below to discover the exact AI tools and automated workflows built for your operations.",
    url: "https://sparkspheartechsolutions.com/affiliate",
  },
};

export default function Page() {
  return <AffiliateClient />;
}
