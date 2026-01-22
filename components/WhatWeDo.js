"use client";
import React from 'react';
import Link from 'next/link';
import { Globe, ShieldCheck, Camera, Database, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="section what-we-do animate-on-scroll section-with-blobs">
            <div className="container">
                {/* Floating decorative blobs */}
                <div className="bg-blob bg-blob-primary bg-blob-lg" style={{ top: '10%', left: '5%' }}></div>
                <div className="bg-blob bg-blob-secondary bg-blob-md" style={{ bottom: '15%', right: '10%' }}></div>

                <div className="section-header">
                    <span className="tag">THE MASTER STRATEGY</span>
                    <h2>We Don't Guess. We Scan.</h2>
                    <p>Stop fixing symptoms. Our 360° Infrastructure Audit identifies the root cause of your growth bottlenecks—whether it's code, copy, or compliance.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mb-8">
                    {/* FLAGSHIP FEATURE CARD */}
                    <Link href="/services/it-audits" className="group">
                        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-dark-1 border-2 border-blue-500/30 hover:border-blue-400 rounded-2xl p-8 md:p-12 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold uppercase tracking-wider mb-4">
                                        <ShieldCheck className="w-4 h-4" /> The Master Service
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">IT Infrastructure Audit</h3>
                                    <p className="text-gray-300 text-lg max-w-2xl">
                                        The first step for every serious business. We analyze your <strong>Web</strong>, <strong>Marketing</strong>, <strong>AI</strong>, and <strong>Brand</strong> systems to build a unified roadmap for 10x growth.
                                    </p>
                                </div>
                                <div className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-all group-hover:scale-110 shadow-lg">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* TARGETED SOLUTIONS GRID */}
                <div className="features-grid stagger-grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link href="/services/digital-marketing">
                        <div className="feature-card cursor-pointer transition-transform hover:scale-105 border border-white/5 hover:border-orange-500/30 h-full">
                            <Globe className="text-orange-400" />
                            <h3>Digital Growth</h3>
                            <p>Data-driven marketing strategies to dominate your market share.</p>
                        </div>
                    </Link>
                    <Link href="/services/ai-automation">
                        <div className="feature-card cursor-pointer transition-transform hover:scale-105 border border-white/5 hover:border-purple-500/30 h-full">
                            <Database className="text-purple-400" />
                            <h3>AI Automation</h3>
                            <p>Eliminate manual work with intelligent workflow automation.</p>
                        </div>
                    </Link>
                    <Link href="/services/photography-videography">
                        <div className="feature-card cursor-pointer transition-transform hover:scale-105 border border-white/5 hover:border-cyan-500/30 h-full">
                            <Camera className="text-cyan-400" />
                            <h3>Creative Visuals</h3>
                            <p>Premium photography and video to elevate your brand prestige.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
