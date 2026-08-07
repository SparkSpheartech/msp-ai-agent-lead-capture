"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, ChevronRight, CheckCircle2, Calendar, ArrowRight, Layers } from 'lucide-react';
import { getVertical, getProductsByVertical } from '@/data/affiliateProducts';
import ProductCard from '@/components/ProductCard';
import ComparisonTable from '@/components/ComparisonTable';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import VerticalStack from '@/components/VerticalStack';
import ReferralCTA from '@/components/ReferralCTA';
import TripwireCTA from '@/components/TripwireCTA';

export default function GuideClient({ slug, relatedPosts = [] }) {
  const vertical = getVertical(slug);
  const products = getProductsByVertical(slug);

  if (!vertical) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <header className="relative pt-36 pb-16 px-6 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/guides" className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-500 hover:text-lime-600 dark:text-lime-400 font-semibold text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to All Guides
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime-500/20 border border-lime-500/30 flex items-center justify-center text-lime-400 font-bold">
                {slug === 'hvac' ? <Sparkles className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase">
                Industry Guide & Ranked Stack
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Best AI & Automation Tools for {vertical.name}
            </h1>
            <p className="text-zinc-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
              {vertical.tagline} We've researched and ranked the top software solutions by operational scale.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 w-full flex-grow">
        <div className="mb-10">
          <AffiliateDisclosure />
        </div>

        {/* 1.2 WRAP PRODUCT LIST AS "THE [VERTICAL] STACK" + 1.4 SIMILARITY SIGNALS */}
        {products.length > 0 && (
          <VerticalStack vertical={vertical} />
        )}

        {/* 1.5 SHAKLEE ENDLESS CHAIN REFERRAL */}
        <ReferralCTA vertical={vertical} />

        {/* TRIPWIRE CROSS-SELL TO SIDE B */}
        <TripwireCTA verticalName={vertical.name} />

        {/* Top Picks Comparison */}
        {products.length > 0 && (
          <section className="mb-20">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                At a Glance: Top {Math.min(3, products.length)} Picks
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Compare the best features, pricing, and ratings for our top recommended tools.
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 rounded-2xl p-1 shadow-lg overflow-hidden">
              <ComparisonTable products={products} />
            </div>
          </section>
        )}

        {/* Full Detailed Product List */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Detailed Reviews & Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              A deep dive into every tool, who it's best for, and why we recommend it.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} rank={index + 1} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-200 dark:border-white/10">
              <p className="text-gray-500">We are currently curating the best tools for this industry. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Editorial Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-lime-500/5 via-transparent to-transparent border border-lime-500/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Automate Your {vertical.name} Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 dark:text-gray-300">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Eliminate Manual Entry:</strong> Stop spending hours typing data between different systems. Let software sync it automatically.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Improve Client Experience:</strong> Automated reminders, instant booking, and seamless payments make your business look highly professional.</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Reduce Costly Errors:</strong> AI and automation catch mistakes humans miss, from scheduling conflicts to missed invoices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Reclaim Your Time:</strong> Focus on growing your business and serving customers instead of being buried in administrative work.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-20">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                Strategic Insights for {vertical.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Read our latest articles on scaling and automating your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="bg-white dark:bg-zinc-900/80 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 border border-gray-200 dark:border-white/10 hover:border-lime-500 shadow-lg group h-full flex flex-col">
                    {post.coverImage && (
                      <div className="relative h-40 w-full overflow-hidden bg-white dark:bg-zinc-950">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-lime-600 dark:group-hover:text-lime-600 dark:text-lime-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                          <Calendar size={14} />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric'})}</span>
                        </div>
                        <div className="text-lime-600 dark:text-lime-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
