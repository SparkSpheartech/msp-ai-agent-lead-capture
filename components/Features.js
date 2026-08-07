"use client";
import React from 'react';
import Link from 'next/link';

const Features = () => {
 return (
 <section id="features" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
 {/* Background Blob Effects */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
 <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-lime-900/10 rounded-full blur-3xl mix-blend-screen"></div>
 </div>

 <div className="container mx-auto px-4 relative z-10">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-3 block">WHY CHOOSE US</span>
 <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Stop losing revenue to missed calls. Get 15-20 hrs/week back.</h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-lime-500 dark:hover:border-lime-500/30 transition-all duration-300 hover:-translate-y-1">
 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Built to Scale</h3>
 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Workflows designed to handle expanding call volume, customer intake, and daily transactions without adding headcount.</p>
 </div>
 <div className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-lime-500 dark:hover:border-lime-500/30 transition-all duration-300 hover:-translate-y-1">
 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Security & Stability</h3>
 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Your client records, billing data, and internal credentials remain protected with strict security standards.</p>
 </div>
 <div className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 p-8 rounded-2xl hover:border-lime-500 dark:hover:border-lime-500/30 transition-all duration-300 hover:-translate-y-1">
 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connected Tools</h3>
 <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We connect your CRM, dispatch software, spreadsheets, and phone lines so data updates everywhere automatically.</p>
 </div>
 </div>

 <div className="text-center mt-12">
 <Link
 href="/contact"
 className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 text-zinc-950 font-bold hover:bg-lime-400 transition-all duration-300 rounded-lg shadow-lg shadow-lime-500/20"
 >
 Get Started Today
 </Link>
 </div>
 </div>
 </section>
 );
};

export default Features;
