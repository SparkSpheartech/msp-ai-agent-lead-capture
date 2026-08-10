"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllIndustryBriefs } from '@/data/industryBriefs';
import { ArrowRight, BookOpen, ExternalLink, ShieldAlert, Cpu, CheckCircle2, Layers } from 'lucide-react';

export default function GuidesIndex() {
  const briefs = getAllIndustryBriefs();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBriefs = briefs.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300 pt-36 pb-20">
        
        {/* Masthead */}
        <section className="container max-w-6xl mx-auto px-4 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" /> Operational Briefs Hub
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            Industry Operations Briefs
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Lightweight operational briefings for small business owners. Identify your core bottleneck, evaluate software requirements, and link directly to full research on our blog.
          </p>

          {/* Search Filter */}
          <div className="max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search by industry or operational problem..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500 shadow-sm"
            />
          </div>
        </section>

        {/* Briefs Grid */}
        <section className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBriefs.map((brief) => (
              <div 
                key={brief.slug}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-lime-500/50 transition-all group"
              >
                <div>
                  <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-800">
                    <img 
                      src={brief.heroImage} 
                      alt={brief.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider block mb-2">
                    Operations Brief
                  </span>

                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                    {brief.name}
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    {brief.summary}
                  </p>

                  <div className="bg-slate-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 mb-6 space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        <strong>Problem:</strong> {brief.problem}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-lime-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        <strong>Outcome:</strong> {brief.outcome}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <Link 
                    href={`/guides/${brief.slug}`}
                    className="w-full py-2.5 px-4 bg-lime-500 text-zinc-950 rounded-lg text-sm font-bold hover:bg-lime-400 transition-all flex items-center justify-center gap-2"
                  >
                    Read Operations Brief <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href={brief.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-semibold hover:border-lime-500 flex items-center justify-center gap-1.5 transition-all"
                  >
                    Full Research on Blog <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
