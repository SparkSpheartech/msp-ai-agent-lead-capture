import Hero3D from "@/components/Hero3D";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";
import Features from "@/components/Features";
import Process from "@/components/Process";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Agents for Repetitive Business Workflows | SPARKSPHEAR",
  description: "SPARKSPHEAR builds controlled AI agents, chatbots, integrations, and workflow automation for repetitive business operations.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com",
  },
  openGraph: {
    title: "AI Agents for Repetitive Business Workflows | SPARKSPHEAR",
    description: "SPARKSPHEAR builds controlled AI agents, chatbots, integrations, and workflow automation for repetitive business operations.",
    url: "https://sparkspheartechsolutions.com",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR AI Agents",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <Navbar />
      <Hero3D />
      <WhatWeDo />
      <Features />
      <Process />
      <CoreValues />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}