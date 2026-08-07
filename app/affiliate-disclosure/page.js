import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
 title: "Affiliate Disclosure | SparkSphear Tech",
 description: "Learn how we use affiliate links to support our free content and research.",
 alternates: {
 canonical: "https://sparkspheartechsolutions.com/affiliate-disclosure",
 },
};

export default function AffiliateDisclosurePage() {
 return (
 <div className="min-h-screen bg-white dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col">
 <Navbar />

 <main className="max-w-4xl mx-auto px-6 py-32 flex-grow w-full">
 <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Affiliate Disclosure</h1>
 
 <div className="prose prose-lg dark:prose-invert prose-lime max-w-none">
 <p className="lead text-xl text-gray-600 dark:text-gray-400 mb-8">
 In compliance with FTC guidelines, we want to be fully transparent about our relationship with the products and services we recommend.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-4">What Are Affiliate Links?</h2>
 <p className="mb-6 text-gray-700 dark:text-gray-300">
 Some of the links on this website (specifically within our Industry Guides) are affiliate links. This means that if you click on the link and purchase an item or sign up for a service, SparkSphear Tech Solutions may receive an affiliate commission.
 </p>
 <p className="mb-6 text-gray-700 dark:text-gray-300">
 <strong>This comes at absolutely no additional cost to you.</strong> In some cases, our affiliate links may actually provide you with a discount or bonus not available otherwise.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-4">Editorial Independence</h2>
 <p className="mb-6 text-gray-700 dark:text-gray-300">
 We only recommend products and services that we have thoroughly researched, tested, or believe will provide significant value to our clients. Our primary goal is to help businesses automate and grow. We never recommend subpar products solely for the purpose of earning a commission.
 </p>
 
 <h2 className="text-2xl font-bold mt-10 mb-4">Why Do We Use Affiliate Links?</h2>
 <p className="mb-6 text-gray-700 dark:text-gray-300">
 Researching, testing, and reviewing software takes a significant amount of time and resources. Affiliate commissions help support the ongoing maintenance of our website, the creation of free guides, and our ability to provide high-quality business advice without charging a consulting fee for every recommendation.
 </p>

 <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
 <p className="mb-6 text-gray-700 dark:text-gray-300">
 If you have any questions regarding this disclosure or any of the products we recommend, please feel free to <a href="/contact" className="text-lime-600 dark:text-lime-400 hover:underline">contact us</a>.
 </p>
 </div>
 </main>

 <Footer />
 </div>
 );
}
