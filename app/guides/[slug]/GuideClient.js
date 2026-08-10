"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaOrg from '@/components/SchemaOrg';
import { ArrowRight, CheckCircle2, ShieldAlert, Cpu, ExternalLink, Calendar, Layers } from 'lucide-react';

export default function GuideClient({ brief }) {
  if (!brief) return null;

  return (
    <>
      <SchemaOrg 
        breadcrumbs={[
          { name: 'Home', url: 'https://sparkspheartechsolutions.com' },
          { name: 'Industry Briefs', url: 'https://sparkspheartechsolutions.com/guides' },
          { name: brief.name, url: `https://sparkspheartechsolutions.com/guides/${brief.slug}` }
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300 pt-32 pb-20">
        
        {/* Header Section */}
        <section className="container max-w-4xl mx-auto px-4 mb-12">
          <Link 
            href="/guides" 
            className="inline-flex items-center text-lime-600 dark:text-lime-400 hover:underline mb-6 text-sm font-semibold tracking-wide"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            BACK TO INDUSTRY BRIEFS
          </Link>
          
          <div className="inline-block px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
            Industry Brief
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            {brief.name} Operations Brief
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
            {brief.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href={brief.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-lime-500 text-zinc-950 rounded-lg font-bold hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 inline-flex items-center gap-2"
            >
              Read Full Research on Blog <ExternalLink className="w-4 h-4" />
            </a>
            <Link 
              href="/services/it-audits"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white rounded-lg font-semibold hover:border-lime-500 transition-all inline-flex items-center gap-2"
            >
              Book a 15-Minute Audit <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Hero Image Section */}
        {brief.heroImage && (
          <section className="container max-w-4xl mx-auto px-4 mb-16">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl max-h-[400px]">
              <img 
                src={brief.heroImage} 
                alt={`${brief.name} Operations Brief`} 
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        )}

        {/* Brief Content Body */}
        <section className="container max-w-4xl mx-auto px-4 space-y-12">
          
          {/* Target Audience */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-3">
              <Layers className="w-6 h-6 text-lime-500" />
              Who This Brief Is For
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {brief.whoIsItFor}
            </p>
          </div>

          {/* The Operational Problem */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-500" />
              The Core Operational Bottleneck
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
              {brief.problem}
            </p>
          </div>

          {/* Evaluation Criteria */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-lime-500" />
              What to Evaluate Before Buying Software
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
              {brief.whatToEvaluate}
            </p>
          </div>

          {/* What SPARKSPHEAR Builds */}
          <div className="bg-lime-500/10 border border-lime-500/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-lime-500" />
              What SPARKSPHEAR Builds for {brief.name}
            </h2>
            <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-base mb-6">
              {brief.whatWeBuild}
            </p>
            <Link 
              href={brief.serviceRoute}
              className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold hover:underline"
            >
              Explore {brief.name} Implementation Pathways <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Final Call to Action */}
          <div className="text-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Need In-Depth Research & Software Rankings?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-lg mx-auto">
              Our Side A editorial team publishes full software comparisons, deep-dive teardowns, and implementation playbooks on our research blog.
            </p>
            <a 
              href={brief.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-xl shadow-lime-500/20 inline-flex items-center gap-2 text-base"
            >
              Read Full {brief.name} Research on Blog <ExternalLink className="w-5 h-5" />
            </a>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
