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
            Three Routes to Fix Business Bottlenecks
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            Audit the System. Scale the Business. Choose the route that matches the problem: diagnose the operation, build an agent, or create the digital system around it.
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
                  Workflow Audit
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Workflow audit, system review, bottleneck mapping. We identify where existing tools are enough and where custom agents may help.
                </p>
              </div>
              <div className="flex items-center text-lime-600 dark:text-lime-400 text-sm font-bold gap-2">
                Explore Workflow Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* ROUTE 2: AUTOMATE WORKFLOWS */}
          <Link href="/services/ai-automation" className="group flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-lime-500" />
                </div>
                <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider block mb-2">
                  AUTOMATE WORKFLOWS
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  AI Agents & Agentic Automation
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  AI agents, chatbots, intake, booking, routing, follow-up, and reporting. Build controlled agents for the work your business repeats every day.
                </p>
              </div>
              <div className="flex items-center text-lime-600 dark:text-lime-400 text-sm font-bold gap-2">
                Explore AI Agents <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* ROUTE 3: BUILD DIGITAL SYSTEMS */}
          <Link href="/services/web-design" className="group flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6 text-lime-500" />
                </div>
                <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider block mb-2">
                  BUILD DIGITAL SYSTEMS
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  Digital Systems & Portals
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Websites, portals, forms, and connected digital experiences that support the workflow and customer journey.
                </p>
              </div>
              <div className="flex items-center text-lime-600 dark:text-lime-400 text-sm font-bold gap-2">
                Explore Digital Systems <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
