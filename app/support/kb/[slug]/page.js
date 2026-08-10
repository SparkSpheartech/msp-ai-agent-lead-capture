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
  if (!article) return { title: 'Article Not Found | SPARKSPHEAR' };

  return {
    title: article.metaTitle || `${article.title} | SPARKSPHEAR`,
    description: article.excerpt,
    alternates: {
      canonical: `https://sparkspheartechsolutions.com/support/kb/${params.slug}`,
    },
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
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white pt-32 pb-20">
        <article className="container max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/support/kb"
              className="inline-flex items-center text-lime-600 dark:text-lime-400 hover:underline text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Knowledge Base
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-1.5 mb-4">
              <BookOpen className="w-4 h-4 text-lime-600 dark:text-lime-400 mr-2" />
              <span className="text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider">{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {article.title}
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg">{article.excerpt}</p>
          </div>

          {/* Article Content */}
          <div className="prose dark:prose-invert max-w-none">
            <div
              className="article-content text-zinc-800 dark:text-zinc-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* Help Section */}
          <div className="mt-16 p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Need personalized implementation help?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              If you need direct assistance setting up AI agents, system integrations, or network security, our team is here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/support/ticket"
                className="inline-flex items-center justify-center px-6 py-3 bg-lime-500 text-zinc-950 font-bold hover:bg-lime-400 transition-all rounded-xl"
              >
                Submit a Ticket
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white font-semibold hover:border-lime-500 transition-all rounded-xl"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
