"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Loader2 } from 'lucide-react';

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                // Use Blogspot RSS feed
                const response = await fetch(
                    'https://blogger.googleusercontent.com/feeds/posts/default?alt=json&max-results=20'
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                
                const data = await response.json();
                const posts = data.feed.entry || [];
                
                const formattedPosts = posts.map((post) => {
                    const link = post.link.find(l => l.rel === 'alternate')?.href || '#';
                    const published = post.published ? new Date(post.published.$t).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }) : '';
                    
                    const category = post.category 
                        ? post.category.map(c => c.term).slice(0, 1).join('')
                        : 'Blog';
                    
                    return {
                        id: post.id.$t,
                        slug: link.split('/').pop(),
                        title: post.title.$t || 'Untitled',
                        excerpt: post.content?.$t?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || 'Click to read more...',
                        date: published,
                        author: post.author?.[0]?.name?.$t || 'SparkSphear Team',
                        category: category,
                        link: link,
                        content: post.content?.$t || ''
                    };
                });
                
                setBlogPosts(formattedPosts);
            } catch (err) {
                console.error('Error fetching blog posts:', err);
                setError('Unable to load blog posts');
                // Fallback to static posts if fetch fails
                setBlogPosts([
                    {
                        id: '1',
                        title: 'Loading from Blogspot...',
                        excerpt: 'Check our main blog at sparkspheartech.blogspot.com',
                        date: new Date().toLocaleDateString(),
                        category: 'Blog',
                        link: 'https://sparkspheartech.blogspot.com/'
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    if (loading) {
        return (
            <section className="pt-32 pb-20 bg-zinc-950 min-h-screen">
                <div className="container">
                    <div className="text-center">
                        <Loader2 className="w-12 h-12 text-lime-500 animate-spin mx-auto mb-4" />
                        <p className="text-gray-400">Loading latest posts...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="pt-32 pb-20 bg-zinc-950 min-h-screen">
            <div className="container">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-lime-500 font-bold tracking-wider text-sm uppercase mb-4 block">Our Insights</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest Industry News</h1>
                    <p className="text-gray-400 text-lg">
                        Expert perspectives on technology, security, and digital growth for forward-thinking businesses.
                    </p>
                </div>

                {error && (
                    <div className="text-center mb-8">
                        <p className="text-yellow-500 mb-4">{error}</p>
                        <a 
                            href="https://sparkspheartech.blogspot.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-lime-500 text-black font-bold rounded-md hover:bg-lime-400 transition-colors"
                        >
                            Visit Our Full Blog
                        </a>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-zinc-800 hover:border-lime-500 group">
                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-lime-500/10 text-lime-500 text-xs font-bold rounded-full mb-4">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-lime-500 transition-colors">
                                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read More <ArrowRight size={16} className="text-lime-500" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;