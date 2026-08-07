import SupportClient from "./SupportClient";

export const metadata = {
  title: "Support & Knowledge Base | SPARKSPHEAR Tech Solutions",
  description: "Find setup guides, software tutorials, submit a technical support ticket, or chat with our 24/7 AI assistant.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/support",
  },
  openGraph: {
    title: "Support & Knowledge Base | SPARKSPHEAR Tech Solutions",
    description: "Find setup guides, software tutorials, submit a technical support ticket, or chat with our 24/7 AI assistant.",
    url: "https://sparkspheartechsolutions.com/support",
  },
};

export default function Page() {
  return <SupportClient />;
}