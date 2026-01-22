"use client";
import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";

// Dynamically import Hero3D with SSR disabled (Canvas requires browser WebGL context)
const Hero3D = dynamic(() => import("@/components/Hero3D"), {
    ssr: false,
    loading: () => (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-zinc-950">
            <div className="text-lime-400 text-xl animate-pulse">Loading...</div>
        </div>
    ),
});

import WhatWeDo from "@/components/WhatWeDo";
import ServiceWizard from "@/components/ServiceWizard";
import Features from "@/components/Features";
import Process from "@/components/Process";
import CoreValues from "@/components/CoreValues";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import HubSpotMeeting from "@/components/HubSpotMeeting";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero3D /> {/* Replaced Hero with Hero3D */}
            <WhatWeDo />
            <ServiceWizard />
            <Features />
            <Process />
            <CoreValues />
            <Stats />
            <Team />
            <Testimonials />
            <Newsletter />
            <FAQ />
            <ContactForm />
            <HubSpotMeeting />
            <Footer />
        </main>
    );
}
