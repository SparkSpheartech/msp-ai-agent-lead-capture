import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us & Book 15-Min Demo | SPARKSPHEAR Tech Solutions",
  description: "Book a 15-minute live demo directly on our founder's calendar or send us a message. Get a custom Done-For-You AI roadmap for your business.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us & Book 15-Min Demo | SPARKSPHEAR Tech Solutions",
    description: "Book a 15-minute live demo directly on our founder's calendar or send us a message.",
    url: "https://sparkspheartechsolutions.com/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
