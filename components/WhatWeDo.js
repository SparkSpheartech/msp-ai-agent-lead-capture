"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Search, Layout } from 'lucide-react';
import CardSwipe from './CardSwipe';

const WhatWeDo = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-lime-200/40 dark:bg-lime-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-600 dark:text-lime-400 font-mono text-xs font-bold tracking-widest uppercase mb-3 block">
            OUR IMPLEMENTATION PATHWAYS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Three Ways We Fix Small Business Bottlenecks
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            We map your operational workflows, build automated software bridges, and deploy modern digital front doors.
          </p>
        </div>

        {/* Interactive CardSwipe Component */}
        <div className="mb-16">
          <CardSwipe />
        </div>

        {/* 3 CORE SERVICE PATHWAY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* ROUTE 1: FIX OPERATIONS */}
          <Link href="/services/it-audits" className="group flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-lime-500" />
                </div>
                <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider block mb-2">
                  FIX OPERATIONS
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  Master Business Audit
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  We inspect your call intake, dispatching, CRM, and billing systems to map every manual data entry step and friction point.
                </p>
              </div>
              <div className="flex items-center text-lime-600 dark:text-lime-400 text-sm font-bold gap-2">
                Explore Business Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* ROUTE 2: AUTOMATE GROWTH */}
          <Link href="/services/ai-automation" className="group flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-lime-500" />
                </div>
                <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider block mb-2">
                  AUTOMATE GROWTH
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  AI & Agentic Workflows
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  We deploy automated call dispatchers, SMS customer re-engagement pipelines, and custom AI agents that execute repetitive tasks.
                </p>
              </div>
              <div className="flex items-center text-lime-600 dark:text-lime-400 text-sm font-bold gap-2">
                Explore AI Workflows <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* ROUTE 3: BUILD DIGITAL PRESENCE */}
          <Link href="/services/web-design" className="group flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6 text-lime-500" />
                </div>
                <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider block mb-2">
                  BUILD DIGITAL PRESENCE
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  Web Architecture & Portals
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  We build high-converting, lightning-fast web applications, booking portals, and mobile-friendly brand storefronts.
                </p>
              </div>
              <div className="flex items-center text-lime-600 dark:text-lime-400 text-sm font-bold gap-2">
                Explore Web Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
