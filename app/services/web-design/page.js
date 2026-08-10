import WebDesignClient from "./WebDesignClient";

export const metadata = {
  title: "Web Design & Development",
  description: "High-performance websites that convert visitors into customers. Custom design, e-commerce, and SEO-ready builds.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/web-design",
  },
  openGraph: {
    title: "Web Design & Development",
    description: "High-performance websites that convert visitors into customers. Custom design, e-commerce, and SEO-ready builds.",
    url: "https://sparkspheartechsolutions.com/services/web-design",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Web Design & Development",
      },
    ],
  },
};

export default function Page() {
  return <WebDesignClient />;
}
