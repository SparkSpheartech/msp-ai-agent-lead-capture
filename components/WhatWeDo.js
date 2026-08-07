"use client";
import React from 'react';
import Link from 'next/link';
import { Globe, Camera, Database, ArrowRight, Brain, Briefcase } from 'lucide-react';

const WhatWeDo = () => {
 return (
 <section id="what-we-do" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
 {/* Background Blob Effects matching Hero/Wizard */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
 <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-lime-200/50 dark:bg-lime-900/20 rounded-full blur-3xl mix-blend-screen"></div>
 <div className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl mix-blend-screen"></div>
 </div>

 <div className="container relative z-10 mx-auto px-4">
 <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-3 block">OUR APPROACH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">We Don't Guess. We Architect.</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">We bring the spark to small business owners — combining smart technology with hands-on service to help you work faster, save money, and grow.</p>
        </div>

 <div className="grid grid-cols-1 gap-8 mb-8">
 {/* FLAGSHIP FEATURE CARD */}
 <Link href="/services/ai-automation" className="group">
 <div className="relative overflow-hidden bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/50 border border-zinc-200 dark:border-white/10 hover:border-lime-500/50 rounded-2xl p-8 md:p-12 transition-all duration-300 shadow-xl hover:shadow-lime-500/10">
 <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-lime-500/10 transition-all"></div>

 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
 <div>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 dark:text-lime-400 text-sm font-bold uppercase tracking-wider mb-4">
 <Brain className="w-4 h-4" /> The Master Service
 </div>
 <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-lime-600 dark:group-hover:text-lime-700 dark:text-lime-300 transition-colors">Custom AI & Agentic Systems</h3>
 <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
 Stop losing revenue to missed calls and manual admin. We build custom AI agents and enterprise workflows that function as the <strong>Central Nervous System</strong> of your operations.
 </p>
 </div>
 <div className="bg-lime-500 text-black p-4 rounded-full transition-all group-hover:scale-110 shadow-lg shadow-lime-500/20">
 <ArrowRight className="w-6 h-6" />
 </div>
 </div>
 </div>
 </Link>
 </div>

 {/* TARGETED SOLUTIONS GRID */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <Link href="/markets">
 <div className="h-full bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/50 border border-zinc-200 dark:border-white/10 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 group">
 <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
 <Briefcase className="w-6 h-6 text-blue-400" />
 </div>
 <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-300 transition-colors">Software Curation</h3>
 <p className="text-zinc-600 dark:text-gray-400">We rigorously test and review hundreds of B2B tools so you only buy software that actually scales your specific industry.</p>
 </div>
 </Link>
 <Link href="/services/web-design">
 <div className="h-full bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/50 border border-zinc-200 dark:border-white/10 hover:border-orange-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 group">
 <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
 <Globe className="w-6 h-6 text-orange-400" />
 </div>
 <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-orange-300 transition-colors">Web Design</h3>
 <p className="text-zinc-600 dark:text-gray-400">High-converting, stunning websites engineered to turn your visitors into qualified leads.</p>
 </div>
 </Link>
 <Link href="/services/photography-videography">
 <div className="h-full bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/50 border border-zinc-200 dark:border-white/10 hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 group">
 <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
 <Camera className="w-6 h-6 text-cyan-400" />
 </div>
 <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-cyan-300 transition-colors">Commercial Media</h3>
 <p className="text-zinc-600 dark:text-gray-400">Professional photography and video production for your fleet, team, and client promos to elevate brand prestige.</p>
 </div>
 </Link>
 </div>
 </div>
 </section>
 );
};

export default WhatWeDo;
