import GuidesIndex from "./GuidesIndex";

export const metadata = {
  title: "Industry Software Guides & Stacks",
  description: "Curated AI and automation intelligence for field service, waste management, barbershops, and trades. Ranked tools and custom build guides.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/guides",
  },
  openGraph: {
    title: "Industry Software Guides & Stacks",
    description: "Curated AI and automation intelligence for field service, waste management, barbershops, and trades.",
    url: "https://sparkspheartechsolutions.com/guides",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Industry Guides",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">SPARKSPHEAR Industry Software Guides & Ranked Stacks</h1>
      <GuidesIndex />
    </>
  );
}
