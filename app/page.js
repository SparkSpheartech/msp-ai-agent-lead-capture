"use client";
import dynamic from 'next/dynamic';
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
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

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

            <ContactForm />
            <HubSpotMeeting />
            <Footer />
        </main>
    );
}
