import AboutClient from "./AboutClient";

export const metadata = {
  title: "About SPARKSPHEAR | AI Agents and Workflow Systems",
  description: "Learn how SPARKSPHEAR audits repetitive operations, builds controlled AI agents, and creates digital systems for growing businesses.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/about",
  },
  openGraph: {
    title: "About SPARKSPHEAR | AI Agents and Workflow Systems",
    description: "Learn how SPARKSPHEAR audits repetitive operations, builds controlled AI agents, and creates digital systems for growing businesses.",
    url: "https://sparkspheartechsolutions.com/about",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR About Us",
      },
    ],
  },
};

export default function Page() {
  return <AboutClient />;
}
