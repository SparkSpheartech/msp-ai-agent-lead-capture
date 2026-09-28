import HomeHealthCareClient from "./HomeHealthCareClient";

export const metadata = {
  title: "Home Health Care Automation & Workflow Systems | SPARKSPHEAR",
  description: "SPARKSPHEAR builds workflow automation, AI agents, and connected digital systems for home health care agencies — scheduling, compliance tracking, staff coordination, and client care workflows.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/services/home-health-care",
  },
  openGraph: {
    title: "Home Health Care Automation & Workflow Systems | SPARKSPHEAR",
    description: "AI agents, workflow automation, and connected systems for home health care agencies.",
    url: "https://sparkspheartechsolutions.com/services/home-health-care",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Home Health Care Automation",
      },
    ],
  },
};

export default function Page() {
  return <HomeHealthCareClient />;
}
