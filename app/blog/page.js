"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const BlogPage = () => {
    return (
        <>
            <Navbar />
            <section className="pt-32 pb-20 bg-dark min-h-screen">
            <div className="container">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[#a6fd37] font-bold tracking-wider text-sm uppercase mb-4 block">Our Insights</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Industry News</h1>
                    <p className="text-gray-400 text-lg">
                        Expert perspectives on technology, security, and digital growth for Forward-thinking businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-[#2a2a2a] rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-800 hover:border-[#a6fd37] group">
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-[#a6fd37]/10 text-[#a6fd37] text-xs font-bold rounded-full mb-4">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-[#a6fd37] transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read More <ArrowRight size={16} className="text-[#a6fd37]" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
            <Footer />
        </>
    );
};

export default BlogPage;
