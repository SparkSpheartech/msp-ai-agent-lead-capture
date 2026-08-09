"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

// Dynamically import Hero3D with SSR disabled (Canvas requires browser WebGL context)
const Hero3D = dynamic(() => import("@/components/Hero3D"), {
 ssr: false,
});
import WhatWeDo from "@/components/WhatWeDo";
import ServiceWizard from "@/components/ServiceWizard";
import Features from "@/components/Features";
import Process from "@/components/Process";
import CoreValues from "@/components/CoreValues";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
 return (
 <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
 <Navbar />
 <h1 className="sr-only">AI Automation & Software Stacks for Your Business - SPARKSPHEAR</h1>
 <Hero3D />
 <WhatWeDo />
 <ServiceWizard />
 <Features />
 <Process />
 <CoreValues />
 <Team />
 <Testimonials />
 <Newsletter />
 <Footer />
 </main>
 );
}