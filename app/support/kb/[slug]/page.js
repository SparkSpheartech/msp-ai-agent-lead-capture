import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { kbArticles } from '@/data/kbArticles';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
 return kbArticles.map((article) => ({
 slug: article.slug,
 }));
}

export async function generateMetadata({ params }) {
 const article = kbArticles.find((a) => a.slug === params.slug);
 if (!article) return { title: 'Article Not Found' };

 return {
 title: `${article.title} | SPARKSPHEAR Knowledge Base`,
 description: article.excerpt,
 };
}

export default function KBArticle({ params }) {
 const article = kbArticles.find((a) => a.slug === params.slug);

 if (!article) {
 notFound();
 }

 return (
 <>
 <Navbar />
 <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
 <article className="pt-32 pb-20">
 <div className="container max-w-4xl">
 {/* Breadcrumb */}
 <div className="mb-8">
 <Link
 href="/support/kb"
 className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
 >
 <ArrowLeft className="w-4 h-4 mr-2" />
 Back to Knowledge Base
 </Link>
 </div>

 {/* Article Header */}
 <div className="mb-12">
 <div className="inline-flex items-center bg-primary/10 border border-primary rounded-full px-4 py-2 mb-4">
 <BookOpen className="w-4 h-4 text-primary mr-2" />
 <span className="text-primary text-sm font-semibold">{article.category}</span>
 </div>
 <h1 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-4">
 {article.title}
 </h1>
 <p className="text-zinc-600 dark:text-gray-400 text-xl">{article.excerpt}</p>
 </div>

 {/* Article Content */}
 <div className="prose prose-invert prose-lg max-w-none">
 <div
 className="article-content text-zinc-700 dark:text-gray-300 leading-relaxed"
 dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
 />
 </div>

 {/* Help Section */}
 <div className="mt-16 p-8 bg-white dark:bg-zinc-900 border-2 border-primary/30 rounded-lg">
 <h3 className="text-zinc-900 dark:text-white text-2xl font-bold mb-4">Was this article helpful?</h3>
 <p className="text-zinc-600 dark:text-gray-400 mb-6">
 If you still need assistance, our support team is here to help.
 </p>
 <div className="flex gap-4">
 <Link
 href="/support/ticket"
 className="inline-flex items-center justify-center px-6 py-3 bg-primary text-zinc-900 dark:text-white font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
 >
 Submit a Ticket
 </Link>
 <Link
 href="/support"
 className="inline-flex items-center justify-center px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold hover:bg-zinc-100 dark:bg-zinc-800/80 transition-all duration-300 rounded-md border-2 border-dark-2 hover:border-primary"
 >
 Contact Support
 </Link>
 </div>
 </div>
 </div>
 </article>
 </main>
 <Footer />
 </>
 );
}
