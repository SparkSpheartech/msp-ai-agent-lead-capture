"use client";

import React, { Suspense, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight, Lock, Mail, Loader2 } from 'lucide-react';
import Link from 'next/link';

function ProjectsContent() {
    const searchParams = useSearchParams();
    const market = searchParams.get('market') || 'All';

    // Placeholder projects data - The user can edit this or fetch from an API/CMS later
    const projects = [
        {
            id: 1,
            title: "HVAC Automated Dispatcher",
            market: "Market Strategy", // Matches the Blogger category for HVAC
            description: "An intelligent agent that automatically schedules and dispatches HVAC technicians based on location and skill set, saving 15 hours a week.",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
            link: "#"
        },
        {
            id: 2,
            title: "Lead Nurture AI",
            market: "Market Strategy",
            description: "A specialized AI agent that follows up with inbound leads within 5 minutes, boosting conversion rates by 35%.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            link: "#"
        },
        // Add more projects here
    ];

    const filteredProjects = market === 'All' 
        ? projects 
        : projects.filter(p => p.market === market);

    const [isUnlocked, setIsUnlocked] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check local storage so they don't have to enter it again on refresh
        const unlocked = localStorage.getItem('projects_unlocked');
        if (unlocked === 'true') {
            setIsUnlocked(true);
        }
    }, []);

    const handleUnlock = async (e) => {
        e.preventDefault();
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Send email to our newsletter/leads webhook
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'Projects Gate' })
            });

            if (res.ok) {
                localStorage.setItem('projects_unlocked', 'true');
                setIsUnlocked(true);
            } else {
                setError('Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to connect. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (!isUnlocked) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col">
                <Navbar />
                <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md w-full bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl text-center"
                    >
                        <div className="w-16 h-16 bg-lime-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-lime-500">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                            Unlock Our Portfolio
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm md:text-base">
                            Enter your email to view our exclusive {market !== 'All' ? market : ''} project case studies, Agentic workflows, and automated system demonstrations.
                        </p>

                        <form onSubmit={handleUnlock} className="flex flex-col gap-4">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input 
                                    type="email" 
                                    placeholder="Enter your work email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500 transition-colors"
                                    required
                                />
                            </div>
                            
                            {error && (
                                <p className="text-red-500 text-sm text-left">{error}</p>
                            )}

                            <button 
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all flex justify-center items-center gap-2"
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Gain Access'}
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">
                            We respect your privacy. No spam, ever.
                        </p>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col">
            <Navbar />

            {/* Hero Header */}
            <header className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-gray-50 dark:to-zinc-950 border-b border-lime-500/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent pointer-events-none" />
                
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
                            <FolderGit2 className="w-4 h-4" /> Portfolio & Case Studies
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            {market !== 'All' ? `${market} Projects` : 'Our Projects'}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Explore our latest Agentic systems and AI solutions. See how we transform operations into scalable automated workflows.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Projects Grid */}
            <main className="max-w-7xl mx-auto px-6 py-20 w-full flex-grow">
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-20 bg-white dark:bg-zinc-900/50 rounded-3xl border border-gray-200 dark:border-white/10 p-12">
                        <FolderGit2 className="w-16 h-16 text-lime-500 mx-auto mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Projects Coming Soon</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                            We are currently documenting our {market} projects. Check back soon for detailed case studies.
                        </p>
                        <Link 
                            href="/markets"
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-lime-500 text-zinc-950 font-bold rounded-lg hover:bg-lime-400 transition-all"
                        >
                            Back to Markets
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <motion.article 
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-all duration-300 flex flex-col shadow-lg group"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>
                                    <a 
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold text-sm hover:underline mt-auto"
                                    >
                                        View Case Study <ArrowRight size={14} />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center"><div className="w-12 h-12 border-4 border-lime-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <ProjectsContent />
        </Suspense>
    );
}
