"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

export default function Success() {
 return (
 <>
 <Navbar />
 <main className="min-h-screen pt-20 pb-16 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex items-center justify-center">
 <div className="container max-w-2xl mx-auto px-6 text-center">
 <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
 <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
 <p className="text-xl text-zinc-600 dark:text-gray-400 mb-8">
 Thank you for choosing SparkSphear. We'll contact you within 24 hours to schedule your onboarding call.
 </p>
 <a href="/" className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-md hover:bg-primary/90 transition">
 Back to Home
 </a>
 </div>
 </main>
 <Footer />
 </>
 );
}