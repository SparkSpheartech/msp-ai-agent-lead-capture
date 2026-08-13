import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Selected Workflow & Agent Projects | SPARKSPHEAR",
  description: "Public implementation case studies of automated call dispatchers, API data bridges, and custom web portals built for growing companies.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/projects",
  },
  openGraph: {
    title: "Selected Workflow & Agent Projects | SPARKSPHEAR",
    description: "Public implementation case studies of automated call dispatchers, API data bridges, and custom web portals built for growing companies.",
    url: "https://sparkspheartechsolutions.com/projects",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Selected Workflow Projects",
      },
    ],
  },
};

export default function Page() {
  return <ProjectsClient />;
}
