"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogClient({ allPosts }) {
 const [selectedIndustry, setSelectedIndustry] = useState('All');

 // Extract unique industries for filter tabs
 const industries = ['All', ...new Set(allPosts.map(post => post.industry).filter(Boolean))];

 const filteredPosts = selectedIndustry === 'All' 
 ? allPosts 
 : allPosts.filter(post => post.industry === selectedIndustry);

 return (
 <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col">
 <Navbar />
 
 {/* Hero Header */}
 <header className="relative pt-36 pb-16 px-6 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent pointer-events-none" />
 <div className="max-w-4xl mx-auto text-center relative z-10">
 <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
 <BookOpen className="w-4 h-4" /> Operations & Strategy
 </span>
 <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
 Automation <span className="text-lime-600 dark:text-lime-500">Insights</span>
 </h1>
 <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
 Industry-specific guides, teardowns, and strategies for scaling your business with automation and AI.
 </p>
 </div>
 </header>

 <main className="max-w-7xl mx-auto px-6 py-12 w-full flex-grow">
 {/* Industry Filter */}
 <div className="flex flex-wrap justify-center gap-3 mb-12">
 {industries.map(ind => (
 <button
 key={ind}
 onClick={() => setSelectedIndustry(ind)}
 className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
 selectedIndustry === ind 
 ? 'bg-lime-500 text-zinc-950 shadow-lg shadow-lime-500/20' 
 : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-lime-500/50 hover:text-lime-600 dark:text-lime-500'
 }`}
 >
 {ind === 'All' ? 'All Industries' : ind.toUpperCase()}
 </button>
 ))}
 </div>

 {/* Blog Grid */}
 {filteredPosts.length === 0 ? (
 <div className="text-center py-20 bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-200 dark:border-white/10">
 <p className="text-gray-500">No articles found for this category yet.</p>
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredPosts.map((post) => (
 <Link key={post.id} href={`/blog/${post.id}`}>
 <article className="bg-white dark:bg-zinc-900/80 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-200 dark:border-white/10 hover:border-lime-500 shadow-lg group h-full flex flex-col">
 {post.coverImage && (
 <div className="relative h-48 w-full overflow-hidden bg-white dark:bg-zinc-950">
 <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
 {post.industry && (
 <div className="absolute top-4 left-4">
 <span className="px-3 py-1 bg-white dark:bg-black/80 backdrop-blur-md border border-lime-500/40 text-lime-600 dark:text-lime-400 text-xs font-bold rounded-full uppercase">
 {post.industry}
 </span>
 </div>
 )}
 </div>
 )}
 <div className="p-6 flex flex-col flex-grow">
 {!post.coverImage && post.industry && (
 <span className="inline-block px-3 py-1 bg-lime-500/10 text-lime-600 dark:text-lime-400 text-xs font-bold rounded-full uppercase mb-4 self-start">
 {post.industry}
 </span>
 )}
 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-lime-600 dark:group-hover:text-lime-600 dark:text-lime-400 transition-colors">
 {post.title}
 </h3>
 <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
 {post.excerpt}
 </p>
 <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
 <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
 <Calendar size={14} />
 <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'})}</span>
 </div>
 <div className="text-lime-600 dark:text-lime-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
 Read <ArrowRight size={14} />
 </div>
 </div>
 </div>
 </article>
 </Link>
 ))}
 </div>
 )}
 </main>
 <Footer />
 </div>
 );
}
