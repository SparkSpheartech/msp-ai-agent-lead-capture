import ContactClient from "./ContactClient";

export const metadata = {
  title: "Book a Fit Call for AI Agents | SPARKSPHEAR",
  description: "Book a 15-minute Fit Call to discuss your operational bottlenecks, review tool sprawl, and explore custom AI agent workflows.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/contact",
  },
  openGraph: {
    title: "Book a Fit Call for AI Agents | SPARKSPHEAR",
    description: "Book a 15-minute Fit Call to discuss your operational bottlenecks, review tool sprawl, and explore custom AI agent workflows.",
    url: "https://sparkspheartechsolutions.com/contact",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Book a Fit Call with SPARKSPHEAR",
      },
    ],
  },
};

export default function Page() {
  return <ContactClient />;
}
