"use client";

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, ArrowRight, Cpu, Zap, Sparkles, Calendar, User, 
  Search, Star, ShieldCheck, Flame, Layers, Clock, Award, CheckCircle2, X, Check 
} from 'lucide-react';
import { getAllVerticals, products } from '@/data/affiliateProducts';
import { blogPosts } from '@/data/blogPosts';

export default function GuidesIndex() {
  const verticals = getAllVerticals();
  
  // State for Live Search, Filtering, and Hybrid Tab
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('diy'); // 'diy' or 'custom'

  // Categories list for quick chips
  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'hvac', label: 'HVAC & Field Service 🔧' },
    { id: 'waste-management', label: 'Waste Management & Sanitation 🗑️' },
  ];

  // Top Pick of the Month (Spotlight Tool)
  const spotlightTool = useMemo(() => {
    return products.find(p => p.isTopPick) || products[0];
  }, []);

  // Filtered Verticals (Industry Stacks)
  const filteredVerticals = useMemo(() => {
    return verticals.filter(v => {
      const matchesCategory = selectedCategory === 'all' || v.slug === selectedCategory;
      const matchesQuery = searchQuery === '' || 
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        v.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.slug.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [verticals, selectedCategory, searchQuery]);

  // Filtered Articles
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesQuery = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesQuery;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex flex-col transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <header className="relative pt-36 pb-16 px-6 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-200/40 dark:from-lime-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <BookOpen className="w-4 h-4" /> B2B Tech Curation & AI Guides
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
              Tools That Run Your Business
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              We test, curate, and architect software & AI solutions for every trade. Find off-the-shelf software or request a custom build.
            </p>

            {/* LIVE SEARCH BAR */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search by industry or tool (e.g. HVAC, Waste Management, ServiceTitan, AMCS)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-4 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 rounded-2xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-lime-500 shadow-xl text-sm md:text-base font-medium transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* VERIFIED IMPACT STATS BAR */}
      <section className="bg-white dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 py-4">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span><strong>20+</strong> Tools Evaluated</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span><strong>15.4 hrs/wk</strong> Avg. Saved</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span><strong>100%</strong> Independent Testing</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span><strong>2026</strong> AI Workflows</span>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 w-full flex-grow">

        {/* SPOTLIGHT: TOP SOFTWARE PICK OF THE MONTH */}
        {spotlightTool && !searchQuery && (
          <section className="mb-14">
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-lime-500/40 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-extrabold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" /> Editor's Choice Tool of the Month
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    {spotlightTool.name}
                    <span className="flex items-center text-amber-400 text-sm font-semibold gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.9 / 5.0
                    </span>
                  </h2>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4 max-w-2xl">
                    {spotlightTool.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-lime-400">
                    <span className="bg-lime-500/10 border border-lime-500/30 px-2.5 py-1 rounded-md">⚡ Saves 10+ hrs/wk</span>
                    <span className="bg-lime-500/10 border border-lime-500/30 px-2.5 py-1 rounded-md">🔒 Verified API & Security</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
                  <a
                    href={spotlightTool.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="px-6 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all text-center text-sm shadow-lg shadow-lime-500/20"
                  >
                    Try {spotlightTool.name} Free &rarr;
                  </a>
                  <Link
                    href={`/guides/${spotlightTool.vertical}`}
                    className="px-6 py-3.5 bg-white/10 text-white border border-white/10 font-medium rounded-xl hover:bg-white/20 transition-all text-center text-sm"
                  >
                    View Industry Guide
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* HYBRID PATH SWITCHER (DIY VS CUSTOM BUILD) */}
        <div className="flex justify-center mb-10">
          <div className="bg-zinc-200 dark:bg-zinc-900 p-1.5 rounded-2xl inline-flex gap-2 border border-zinc-300 dark:border-zinc-800">
            <button
              onClick={() => setActiveTab('diy')}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${activeTab === 'diy' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-md' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'}`}
            >
              🛠️ Industry Software Guides (DIY)
            </button>
            <button
              onClick={() => setActiveTab('custom')}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${activeTab === 'custom' ? 'bg-lime-500 text-zinc-950 shadow-md shadow-lime-500/20' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'}`}
            >
              ⚡ Custom AI Builds (Done-For-You)
            </button>
          </div>
        </div>

        {/* TAB 1: DIY SOFTWARE GUIDES */}
        {activeTab === 'diy' ? (
          <>
            {/* ARTICLES & BLOG SECTION AT THE VERY TOP */}
            {filteredPosts.length > 0 && (
              <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase block mb-1">FRESH INSIGHTS</span>
                    <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white flex items-center gap-3">
                      <Flame className="w-7 h-7 text-lime-600 dark:text-lime-400" /> Latest Articles & Guides
                    </h2>
                  </div>
                  <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold text-sm hover:underline">
                    View All Posts <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, i) => {
                    const isNew = post.isNew || i === 0;

                    return (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="relative group"
                      >
                        {/* ANIMATED GLOWING HALO RING AROUND NEW ARTICLES */}
                        {isNew && (
                          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-lime-500 via-emerald-400 to-lime-500 opacity-75 blur-md animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        )}

                        <div className={`relative h-full flex flex-col justify-between bg-white dark:bg-zinc-900/90 border ${isNew ? 'border-lime-500 shadow-xl shadow-lime-500/15' : 'border-zinc-200 dark:border-white/10'} rounded-2xl p-7 transition-all duration-300`}>
                          
                          {/* BOUNCING "NEW" BADGE FOR FRESH ARTICLES */}
                          {isNew && (
                            <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500 text-zinc-950 font-extrabold text-xs tracking-wider uppercase shadow-lg animate-bounce z-20">
                              <Sparkles className="w-3.5 h-3.5" /> NEW ARTICLE
                            </div>
                          )}

                          <div>
                            <div className="flex items-center gap-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3">
                              <span className="px-2.5 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 dark:text-lime-400 font-mono">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar size={13} /> {post.date}
                              </span>
                            </div>

                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors leading-snug">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>

                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                              <User size={13} /> {post.author}
                            </span>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex items-center gap-1.5 text-lime-600 dark:text-lime-400 font-bold text-sm group-hover:translate-x-1 transition-all"
                            >
                              Read Article <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* CATEGORY FILTER CHIPS */}
            <div className="mb-8 flex flex-wrap gap-2 items-center justify-between">
              <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                Choose Your Industry Software Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${selectedCategory === cat.id ? 'bg-lime-500 text-zinc-950 font-bold shadow-md shadow-lime-500/20' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* INDUSTRY CARDS GRID */}
            {filteredVerticals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {filteredVerticals.map((vertical, i) => (
                  <motion.div
                    key={vertical.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={`/guides/${vertical.slug}`}
                      className="group block bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-all duration-300 shadow-lg hover:shadow-lime-500/10 h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-zinc-950">
                          <img
                            src={vertical.heroImage}
                            alt={vertical.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          <div className="absolute top-4 right-4 bg-lime-500 text-zinc-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                            4.9 ★ Rated Stacks
                          </div>
                          <div className="absolute bottom-4 left-6">
                            <span className="text-3xl mr-3">{vertical.emoji}</span>
                            <span className="text-xl font-bold text-white">{vertical.name}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-4">
                            {vertical.tagline}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80 mt-auto">
                        <span className="text-xs font-semibold text-lime-600 dark:text-lime-400">
                          Saves 10–15 hrs/wk
                        </span>
                        <span className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold text-sm group-hover:gap-3 transition-all">
                          View Guide <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl mb-16">
                <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-4">No guides match your search "{searchQuery}".</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="px-6 py-2.5 bg-lime-500 text-zinc-950 font-bold rounded-xl text-sm"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        ) : (
          /* TAB 2: DONE-FOR-YOU CUSTOM AI BUILDS */
          <section className="mb-16">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <Zap className="w-4 h-4" /> Hands-Off Custom Automation
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4">
                  Let Our Engineers Build Your AI System
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  Don't have time to set up software yourself? We architect, build, and deploy custom AI agents and enterprise workflows that run your business on autopilot.
                </p>
              </div>

              {/* AGENCY PRICING PACKAGES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    name: "Essentials",
                    setup: "$997",
                    monthly: "$197/mo",
                    time: "10–15 hrs/wk",
                    desc: "5 Core Workflows + 2 AI Chatbots",
                    highlight: false
                  },
                  {
                    name: "Growth",
                    setup: "$2,997",
                    monthly: "$497/mo",
                    time: "20–30 hrs/wk",
                    desc: "15 Workflows + 5 AI Bots + CRM Integration",
                    highlight: true
                  },
                  {
                    name: "Enterprise",
                    setup: "$7,997",
                    monthly: "$997/mo",
                    time: "40+ hrs/wk",
                    desc: "Unlimited Workflows + Custom LLM Models",
                    highlight: false
                  }
                ].map((pkg, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between ${pkg.highlight ? 'bg-lime-500/10 border-lime-500 shadow-lg shadow-lime-500/10' : 'bg-slate-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800'}`}>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{pkg.name}</h3>
                        {pkg.highlight && <span className="bg-lime-500 text-zinc-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">MOST POPULAR</span>}
                      </div>
                      <div className="text-2xl font-extrabold text-lime-600 dark:text-lime-400 mb-1">{pkg.setup} <span className="text-xs text-zinc-500 font-normal">setup</span></div>
                      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-4">+ {pkg.monthly} upkeep</div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4">{pkg.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 text-xs font-bold text-lime-600 dark:text-lime-400 flex items-center justify-between">
                      <span>Time saved: {pkg.time}</span>
                      <CheckCircle2 size={14} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/services/it-audits"
                  className="px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 inline-flex items-center gap-2 text-base"
                >
                  Start Your Master Audit Discovery Engine <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM CTA */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-lime-500/30 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <Sparkles className="w-12 h-12 text-lime-600 dark:text-lime-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto mb-8">
            We can research and curate a custom AI & automation toolkit for any business type. Let us know what you need.
          </p>
          <Link
            href="/services/it-audits"
            className="px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 inline-flex items-center gap-2"
          >
            Start Your Master Audit <ArrowRight size={18} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
