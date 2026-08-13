"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Search, ExternalLink, ArrowRight, Sparkles, Calendar, User, Tag } from 'lucide-react';

export default function MarketsClient({ initialPosts = [] }) {
 const [posts, setPosts] = useState(initialPosts);
 const [loading, setLoading] = useState(initialPosts.length === 0);
 const [searchQuery, setSearchQuery] = useState('');
 const [selectedCategory, setSelectedCategory] = useState('All');

 useEffect(() => {
 if (initialPosts.length === 0) {
 async function fetchBloggerFeed() {
 try {
 const res = await fetch('https://sparkspheartech.blogspot.com/feeds/posts/default?alt=json');
 if (!res.ok) throw new Error('Failed to fetch blogspot feed');
 const data = await res.json();
 
 const entries = data.feed?.entry || [];
 const formatted = entries.map(entry => {
 const title = entry.title?.$t || 'Market Strategy Insight';
 const rawContent = entry.content?.$t || '';
 
 // Extract first image from HTML content
 const imgMatch = rawContent.match(/<img[^>]+src="([^">]+)"/);
 let imageUrl = imgMatch ? imgMatch[1] : null;
 if (!imageUrl && entry.media$thumbnail) {
 imageUrl = entry.media$thumbnail.url.replace('/s72-c/', '/s1600/');
 }
 if (!imageUrl) {
 imageUrl = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
 }

 // Clean text excerpt
 const cleanExcerpt = rawContent
 .replace(/<[^>]+>/g, ' ')
 .replace(/\s+/g, ' ')
 .trim()
 .substring(0, 180) + '...';

 // Extract Link
 const linkObj = entry.link?.find(l => l.rel === 'alternate');
 const link = linkObj ? linkObj.href : 'https://sparkspheartech.blogspot.com/';

 // Published date
 const publishedDate = entry.published?.$t 
 ? new Date(entry.published.$t).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
 : 'Recent Post';

 // Categories / Labels
 const categories = entry.category?.map(c => c.term) || ['Market Strategy'];

 return {
 id: entry.id?.$t || Math.random().toString(),
 title,
 excerpt: cleanExcerpt,
 content: rawContent,
 imageUrl,
 link,
 publishedDate,
 author: entry.author?.[0]?.name?.$t || 'SPARKSPHEAR Tech Solutions',
 categories
 };
 });

 setPosts(formatted);
 } catch (err) {
 console.error('Error loading Blogger feed:', err);
 } finally {
 setLoading(false);
 }
 }

 fetchBloggerFeed();
 }
 }, [initialPosts]);

 // Extract unique category tags
 const allCategories = ['All', ...new Set(posts.flatMap(p => p.categories))];

 // Filter posts
 const filteredPosts = posts.filter(post => {
 const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
 post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
 const matchesCategory = selectedCategory === 'All' || post.categories.includes(selectedCategory);
 return matchesSearch && matchesCategory;
 });

 return (
 <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col justify-between">
 <Navbar />

 {/* Hero Header */}
 <header className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent pointer-events-none" />
 
 <div className="max-w-6xl mx-auto text-center relative z-10">
 <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
  <Building2 className="w-4 h-4" /> Industry Intelligence & Market Opportunities
  </span>
  <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
  Markets and Workflow Opportunities
  </h1>
  <p className="text-zinc-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
  Explore how SPARKSPHEAR builds controlled AI agents and workflow automations across HVAC, waste management, childcare, auto repair, barbershops, salons, and restaurants.
  </p>
 </motion.div>

 {/* Search & Category Filter */}
 <div className="mt-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4">
 <div className="relative w-full">
 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 dark:text-gray-400" />
 <input 
 type="text"
 placeholder="Search markets, industries, or operational strategies..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full pl-12 pr-4 py-3.5 bg-zinc-200 dark:bg-white/10 dark:bg-zinc-900/90 border border-zinc-300 dark:border-white/20 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lime-500 transition-all backdrop-blur-md"
 />
 </div>

  <Link 
    href="/guides" 
    className="w-full md:w-auto px-6 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-lime-500/20"
  >
    See The Industry Stack <ArrowRight size={16} />
  </Link>
 </div>
 </div>
 </header>

 {/* Main Content Section */}
 <main className="max-w-7xl mx-auto px-6 py-16 w-full flex-grow">
 {/* Category Filters */}
 {allCategories.length > 1 && (
 <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
 {allCategories.map(category => (
 <button
 key={category}
 onClick={() => setSelectedCategory(category)}
 className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
 selectedCategory === category
 ? 'bg-lime-500 text-zinc-950 font-bold shadow-md shadow-lime-500/20'
 : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-500'
 }`}
 >
 {category}
 </button>
 ))}
 </div>
 )}

 {/* Loading State */}
 {loading ? (
 <div className="text-center py-20">
 <div className="w-12 h-12 border-4 border-lime-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
 <p className="text-gray-500 dark:text-gray-400 text-lg">Fetching live market posts from Blogspot...</p>
 </div>
 ) : filteredPosts.length === 0 ? (
 <div className="text-center py-20 bg-white dark:bg-zinc-900/50 rounded-3xl border border-gray-200 dark:border-white/10 p-12">
 <Building2 className="w-16 h-16 text-lime-600 dark:text-lime-500 mx-auto mb-4 opacity-80" />
 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Market Posts Found</h3>
 <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
 No blog posts matched your search criteria. Check back soon as new industry analyses are added directly from Blogspot.
 </p>
 <button 
 onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
 className="px-6 py-2.5 bg-lime-500 text-zinc-950 font-bold rounded-lg hover:bg-lime-400 transition-all"
 >
 Reset Filters
 </button>
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredPosts.map((post) => (
 <motion.article 
 key={post.id}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4 }}
 className="bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-lime-500/10 group"
 >
 <div>
 {/* Featured Image */}
 <div className="relative h-56 w-full overflow-hidden bg-white dark:bg-zinc-950">
 <img 
 src={post.imageUrl} 
 alt={post.title} 
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
 />
 <div className="absolute top-4 left-4 flex gap-2">
 {post.categories.slice(0, 2).map((cat, i) => (
 <span key={i} className="px-3 py-1 bg-white dark:bg-black/80 backdrop-blur-md border border-lime-500/40 text-lime-600 dark:text-lime-400 text-xs font-bold rounded-full">
 {cat}
 </span>
 ))}
 </div>
 </div>

 {/* Article Body */}
 <div className="p-6">
 <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
 <span className="flex items-center gap-1"><Calendar size={13} /> {post.publishedDate}</span>
 <span className="flex items-center gap-1"><User size={13} /> {post.author}</span>
 </div>

 <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-600 dark:text-lime-400 transition-colors line-clamp-2">
 <a href={post.link} target="_blank" rel="noopener noreferrer">
 {post.title}
 </a>
 </h2>

 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
 {post.excerpt}
 </p>
 </div>
 </div>

 {/* Article Footer Action */}
 <div className="p-6 pt-0 border-t border-gray-100 dark:border-white/5 mt-auto flex items-center justify-between">
 <a 
 href={post.link} 
 target="_blank" 
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold text-sm hover:underline"
 >
 Read Full Market Analysis <ExternalLink size={14} />
 </a>
 </div>
 </motion.article>
 ))}
 </div>
 )}

 {/* Bottom CTA Banner */}
 <div className="mt-20 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-lime-500/30 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
 <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
 <Sparkles className="w-12 h-12 text-lime-600 dark:text-lime-400 mx-auto mb-4" />
 <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4">
 Don't See Your Specific Market?
 </h2>
 <p className="text-zinc-700 dark:text-gray-300 text-lg max-w-xl mx-auto mb-8">
 We build custom Agentic systems and specialized AI agents for any high-volume service business or enterprise operation nationwide.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link 
 href="/onboarding" 
 className="px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20"
 >
 Start Market Onboarding <ArrowRight className="inline ml-1" size={18} />
 </Link>
  <Link 
    href="/guides" 
    className="px-8 py-4 border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white font-semibold rounded-xl hover:bg-zinc-200 dark:bg-white/10 transition-all"
  >
    Browse Industry Stacks
  </Link>
 </div>
 </div>
 </main>

 <Footer />
 </div>
 );
}
