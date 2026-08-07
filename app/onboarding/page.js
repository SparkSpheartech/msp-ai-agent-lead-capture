import React, { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientOnboardingForm from "@/components/ClientOnboardingForm";

export const metadata = {
 title: "Client Onboarding & Strategic Intake | SPARKSPHEAR Tech Solutions",
 description: "Define your business goals, operational challenges, and growth vision with SPARKSPHEAR's 10-section Client Onboarding Form.",
};

export default function OnboardingPage() {
 return (
 <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white">
 <Navbar />
 <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
 <Suspense fallback={
 <div className="text-center py-20 text-gray-500 dark:text-gray-400 font-mono">
 Loading Client Onboarding Form...
 </div>
 }>
 <ClientOnboardingForm />
 </Suspense>
 </div>
 <Footer />
 </main>
 );
}
