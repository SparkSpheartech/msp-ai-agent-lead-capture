"use client";
import React from 'react';
import Link from 'next/link';
import { Globe, ShieldCheck, Camera, Database, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
    return (

        <section id="what-we-do" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Blob Effects matching Hero/Wizard */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-lime-900/20 rounded-full blur-3xl mix-blend-screen"></div>
                <div className="absolute bottom-[15%] right-[10%] w-96 h-96 bg-blue-900/10 rounded-full blur-3xl mix-blend-screen"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-lime-400 font-mono text-sm tracking-wider uppercase mb-3 block">THE MASTER STRATEGY</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">We Don't Guess. We Scan.</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">Stop fixing symptoms. Our 360° Infrastructure Audit identifies the root cause of your growth bottlenecks—whether it's code, copy, or compliance.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mb-8">
                    {/* FLAGSHIP FEATURE CARD */}
                    <Link href="/services/it-audits" className="group">
                        <div className="relative overflow-hidden bg-zinc-900/50 border border-white/10 hover:border-lime-500/50 rounded-2xl p-8 md:p-12 transition-all duration-300 shadow-xl hover:shadow-lime-500/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-lime-500/10 transition-all"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-bold uppercase tracking-wider mb-4">
                                        <ShieldCheck className="w-4 h-4" /> The Master Service
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition-colors">IT Infrastructure Audit</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                                        The definitive first step for enterprise and public sector partners. We conduct a <strong>Security</strong>, <strong>Compliance</strong>, and <strong>Efficiency</strong> analysis to build a roadmap for scalable, mission-critical operations.
                                    </p>
                                </div>
                                <div className="bg-lime-500 text-black p-4 rounded-full transition-all group-hover:scale-110 shadow-lg shadow-lime-500/20">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* TARGETED SOLUTIONS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/services/digital-marketing">
                        <div className="h-full bg-zinc-900/50 border border-white/10 hover:border-orange-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 group">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Digital Growth</h3>
                            <p className="text-gray-400">Data-driven marketing strategies to dominate your market share.</p>
                        </div>
                    </Link>
                    <Link href="/services/ai-automation">
                        <div className="h-full bg-zinc-900/50 border border-white/10 hover:border-purple-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 group">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">AI Automation</h3>
                            <p className="text-gray-400">Eliminate manual work with intelligent workflow automation.</p>
                        </div>
                    </Link>
                    <Link href="/services/photography-videography">
                        <div className="h-full bg-zinc-900/50 border border-white/10 hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 group">
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Camera className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Creative Visuals</h3>
                            <p className="text-gray-400">Premium photography and video to elevate your brand prestige.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
