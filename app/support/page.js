import SupportClient from "./SupportClient";

export const metadata = {
  title: "Client Support & Knowledge Base",
  description: "Find setup guides, software tutorials, submit a technical support ticket, or chat with our 24/7 AI assistant.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/support",
  },
  openGraph: {
    title: "Client Support & Knowledge Base",
    description: "Find setup guides, software tutorials, or submit a support ticket.",
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