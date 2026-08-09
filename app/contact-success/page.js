import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: "Message Received",
  description: "Thank you for contacting SPARKSPHEAR Tech Solutions. Our team will be in touch shortly.",
  alternates: {
    canonical: "https://sparkspheartechsolutions.com/contact-success",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Message Received",
    description: "Thank you for contacting SPARKSPHEAR Tech Solutions.",
    url: "https://sparkspheartechsolutions.com/contact-success",
    siteName: "SPARKSPHEAR",
    images: [
      {
        url: "https://sparkspheartechsolutions.com/logo.png",
        width: 1200,
        height: 630,
        alt: "SPARKSPHEAR Message Received",
      },
    ],
  },
};

export default function ContactSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-36 pb-20 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
          <div className="w-20 h-20 bg-lime-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-lime-600 dark:text-lime-400 border border-lime-500/30">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Message Received!
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
            Thank you for reaching out to SPARKSPHEAR. A member of our engineering team will review your details and respond within 2 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3.5 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-bold rounded-xl transition-all shadow-lg shadow-lime-500/20 text-sm inline-flex items-center justify-center gap-2"
            >
              Back to Homepage
            </Link>
            <a
              href="https://calendly.com/sparksphear4me/15-min-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white font-bold rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all text-sm inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              Book 15-Min Demo Direct <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
