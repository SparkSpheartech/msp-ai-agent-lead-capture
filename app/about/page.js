import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us & Our Mission",
  description: "Learn about SPARKSPHEAR Tech Solutions — leading provider of AI services, custom automation, and managed IT for growing businesses.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/about",
  },
  openGraph: {
    title: "About Us & Our Mission",
    description: "Learn about SPARKSPHEAR Tech Solutions — leading provider of AI services, custom automation, and managed IT for growing businesses.",
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
  return (
    <>
      <h1 className="sr-only">About SPARKSPHEAR Tech Solutions & Our Mission</h1>
      <AboutClient />
    </>
  );
}
