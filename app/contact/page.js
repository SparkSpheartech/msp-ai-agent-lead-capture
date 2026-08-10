import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us & Book Demo",
  description: "Book a 15-minute live demo directly on our founder's calendar or send us a message. Get a custom Done-For-You AI roadmap for your business.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us & Book Demo",
    description: "Book a 15-minute live demo directly on our founder's calendar or send us a message.",
    url: "https://sparkspheartechsolutions.com/contact",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact SPARKSPHEAR",
      },
    ],
  },
};

export default function Page() {
  return <ContactClient />;
}
