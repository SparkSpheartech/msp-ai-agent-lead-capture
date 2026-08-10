import GuidesIndex from "./GuidesIndex";

export const metadata = {
  title: "Industry Operations Briefs",
  description: "Lightweight operational briefings for small business owners. Evaluate software requirements and explore implementation pathways.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/guides",
  },
  openGraph: {
    title: "Industry Operations Briefs",
    description: "Lightweight operational briefings for small business owners.",
    url: "https://sparkspheartechsolutions.com/guides",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Industry Operations Briefs",
      },
    ],
  },
};

export default function Page() {
  return <GuidesIndex />;
}
