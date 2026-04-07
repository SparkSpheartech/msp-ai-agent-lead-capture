import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../../../data/blogPosts';

// This function is REQUIRED for Static Export to know which paths to build
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return <div className="text-center py-40 text-white">Post not found</div>;
    }

    return (
        <article className="pt-32 pb-20 bg-dark min-h-screen">
            <div className="container max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={18} /> Back to Insights
                </Link>

                <header className="mb-12">
                    <div className="flex flex-wrap gap-4 items-center mb-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full text-white">
                            <Tag size={14} className="text-[#a6fd37]" /> {post.category}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={14} /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <User size={14} /> {post.author}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#a6fd37]
                    prose-strong:text-white prose-li:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-20 pt-10 border-t border-gray-800">
                    <h2 className="text-white font-bold mb-6">Related Topics</h2>
                    <div className="flex gap-4 flex-wrap">
                        {post.keywords.map((keyword, index) => (
                            <span key={index} className="px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 hover:bg-[#a6fd37] hover:text-dark transition-colors cursor-default">
                                #{keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
