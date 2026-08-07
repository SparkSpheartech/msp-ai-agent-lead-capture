import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Case Studies & Portfolio | SPARKSPHEAR Tech Solutions",
  description: "Explore our real-world B2B case studies, custom AI implementations, web applications, and market breakdowns for field service, waste management, and local business operations.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/projects",
  },
  openGraph: {
    title: "Case Studies & Portfolio | SPARKSPHEAR Tech Solutions",
    description: "Explore our real-world B2B case studies, custom AI implementations, web applications, and market breakdowns.",
    url: "https://sparkspheartechsolutions.com/projects",
  },
};

export default function Page() {
  return <ProjectsClient />;
}
