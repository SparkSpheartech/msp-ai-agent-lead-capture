"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { kbArticles, kbCategories } from '@/data/kbArticles';
import { Search, BookOpen, ArrowRight } from 'lucide-react';

export default function KnowledgeBase() {
 // Group articles by category
 const articlesByCategory = kbCategories.reduce((acc, category) => {
 acc[category] = kbArticles.filter(article => article.category === category);
 return acc;
 }, {});

 return (
 <>
 <Navbar />
 <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
 {/* Hero */}
 <section className="pt-32 pb-16">
 <div className="container text-center">
 <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
 <h1 className="text-zinc-900 dark:text-white text-5xl font-bold mb-6">Knowledge Base</h1>
 <p className="text-zinc-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
 Find answers to common questions and learn best practices
 </p>

 {/* Search Bar (Placeholder) */}
 <div className="max-w-2xl mx-auto mt-10">
 <div className="relative">
 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
 <input
 type="text"
 placeholder="Search articles..."
 className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-900 border-2 border-dark-2 rounded-md text-zinc-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none"
 />
 </div>
 </div>
 </div>
 </section>

 {/* Articles by Category */}
 <section className="pb-20">
 <div className="container max-w-6xl">
 {kbCategories.map((category) => {
 const articles = articlesByCategory[category];
 if (!articles || articles.length === 0) return null;

 return (
 <div key={category} className="mb-16">
 <h2 className="text-zinc-900 dark:text-white text-3xl font-bold mb-8 border-b border-primary pb-4">
 {category}
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {articles.map((article) => (
 <Link
 key={article.id}
 href={`/support/kb/${article.slug}`}
 className="article-card bg-white dark:bg-zinc-900 border-2 border-dark-2 hover:border-primary rounded-lg p-6 transition-all duration-300 group"
 >
 <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-3 group-hover:text-primary transition-colors">
 {article.title}
 </h3>
 <p className="text-zinc-600 dark:text-gray-400 mb-4">{article.excerpt}</p>
 <div className="flex items-center text-primary font-semibold">
 Read more
 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
 </div>
 </Link>
 ))}
 </div>
 </div>
 );
 })}
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 border-t border-dark-2">
 <div className="container text-center">
 <h2 className="text-zinc-900 dark:text-white text-2xl font-bold mb-4">
 Can't find what you're looking for?
 </h2>
 <Link
 href="/support/ticket"
 className="inline-flex items-center justify-center px-8 py-4 bg-primary text-zinc-900 dark:text-white font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
 >
 Submit a Support Ticket
 </Link>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
