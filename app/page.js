"use client";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D"; // Updated to use new 3D Hero
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
