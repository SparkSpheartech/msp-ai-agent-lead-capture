import SupportClient from "./SupportClient";

export const metadata = {
  title: "Client Support & Knowledge Base | SPARKSPHEAR",
  description: "Find setup guides, software tutorials, submit a technical support ticket, or chat with our AI assistant.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/support",
  },
  openGraph: {
    title: "Client Support & Knowledge Base | SPARKSPHEAR",
    description: "Find setup guides, software tutorials, submit a technical support ticket, or chat with our AI assistant.",
    url: "https://sparkspheartechsolutions.com/support",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Client Support",
      },
    ],
  },
};

export default function Page() {
  return <SupportClient />;
}