import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects & Client Case Studies",
  description: "Explore our real-world B2B case studies, custom AI implementations, web applications, and market breakdowns for growing businesses.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/projects",
  },
  openGraph: {
    title: "Projects & Client Case Studies",
    description: "Explore our real-world B2B case studies, custom AI implementations, web applications, and market breakdowns.",
    url: "https://sparkspheartechsolutions.com/projects",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Projects & Case Studies",
      },
    ],
  },
};

export default function Page() {
  return <ProjectsClient />;
}
