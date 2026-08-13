import ITAuditsClient from "./ITAuditsClient";

export const metadata = {
  title: "Workflow Audit & Master Business Audit | SPARKSPHEAR",
  description: "Map your operational workflows, identify bottlenecks, review existing tools, and define the right first agent implementation.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/it-audits",
  },
  openGraph: {
    title: "Workflow Audit & Master Business Audit | SPARKSPHEAR",
    description: "Map your operational workflows, identify bottlenecks, review existing tools, and define the right first agent implementation.",
    url: "https://sparkspheartechsolutions.com/services/it-audits",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Workflow Audit",
      },
    ],
  },
};

export default function Page() {
  return <ITAuditsClient />;
}
