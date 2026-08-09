import TicketClient from "./TicketClient";

export const metadata = {
  title: "Submit a Support Ticket",
  description: "Submit a technical support or inquiry ticket directly to the SPARKSPHEAR Tech Solutions engineering team.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/support/ticket",
  },
  openGraph: {
    title: "Submit a Support Ticket",
    description: "Submit a technical support or inquiry ticket directly to the SPARKSPHEAR Tech Solutions engineering team.",
    url: "https://sparkspheartechsolutions.com/support/ticket",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Submit Support Ticket",
      },
    ],
  },
};

export default function Page() {
  return <TicketClient />;
}
