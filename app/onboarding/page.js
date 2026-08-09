import React, { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientOnboardingForm from "@/components/ClientOnboardingForm";

export const metadata = {
  title: "Client Onboarding & Strategic Intake",
  description: "Define your business goals, operational challenges, and growth vision with SPARKSPHEAR's strategic Client Onboarding Form.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/onboarding",
  },
  openGraph: {
    title: "Client Onboarding & Strategic Intake",
    description: "Define your business goals, operational challenges, and growth vision with SPARKSPHEAR.",
    url: "https://sparkspheartechsolutions.com/onboarding",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Client Onboarding",
      },
    ],
  },
};

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-zinc-900 dark:text-white tracking-tight">
          Client Onboarding & Strategic Intake
        </h1>
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
