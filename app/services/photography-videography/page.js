import CreativeMediaClient from "./CreativeMediaClient";

export const metadata = {
  title: "Creative Media & Brand Video",
  description: "Premium brand photography, commercial video production, and event coverage that elevates brand authority.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/photography-videography",
  },
  openGraph: {
    title: "Creative Media & Brand Video",
    description: "Premium brand photography, commercial video production, and event coverage.",
    url: "https://sparkspheartechsolutions.com/services/photography-videography",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Creative Media & Brand Video",
      },
    ],
  },
};

export default function Page() {
  return <CreativeMediaClient />;
}
