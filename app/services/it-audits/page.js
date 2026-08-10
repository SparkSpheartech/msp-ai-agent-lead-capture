import ITAuditsClient from "./ITAuditsClient";

export const metadata = {
  title: "Master Business & Infrastructure Audit",
  description: "A unified infrastructure audit of your web, marketing, AI, and operations systems. Identify exact levers for growth.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/it-audits",
  },
  openGraph: {
    title: "Master Business & Infrastructure Audit",
    description: "A unified infrastructure audit of your web, marketing, AI, and operations systems.",
    url: "https://sparkspheartechsolutions.com/services/it-audits",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Master Business Audit",
      },
    ],
  },
};

export default function Page() {
  return <ITAuditsClient />;
}
