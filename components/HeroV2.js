"use client";
import React from 'react';
import Link from 'next/link';
import { Play, Zap } from 'lucide-react';

const HeroV2 = () => {
    return (
        <section className="relative bg-dark pt-40 pb-20 overflow-hidden min-h-screen flex items-center" style={{ background: '#0a0a0a' }}>
            {/* Background Video - keep if exists, optional */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                    poster="/images/video-poster.jpg"
                >
                    <source src="/videos/tech-background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
            </div>

            <div className="container relative z-10 text-center">
                <div className="hero-content max-w-4xl mx-auto">
                    {/* Main Heading - your branding */}
                    <h1 className="text-white font-bold mb-6 text-4xl md:text-6xl leading-tight">
                        Your Vision,<br />
                        Structured to <span className="italic font-light text-primary">Scale</span>
                    </h1>
                    
                    {/* Adjusted subline with AI focus */}
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Empowering small businesses in the Greater Fort Wayne area. We deliver personalized AI automation, 
                        optimized IT services, digital marketing, and creative solutions that eliminate 10-20 hours of 
                        manual work per week.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
                        <Link href="/services/ai-automation" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 min-w-[200px] rounded-md shadow-lg shadow-primary/20">
                            <Zap className="w-5 h-5 mr-2" />
                            AI Automation
                        </Link>
                        <button className="group inline-flex items-center gap-3 text-white font-semibold hover:text-primary transition-colors duration-300">
                            <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                                <Play size={14} fill="currentColor" className="text-dark ml-1" />
                            </span>
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Stats Grid - Efficiency focused */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
                    <div className="stat-item text-center p-6 rounded-lg bg-dark-1/50 backdrop-blur-sm border border-primary/20">
                        <h3 className="text-4xl font-bold text-primary mb-2">10-20hrs</h3>
                        <p className="text-gray-400">Saved per employee weekly</p>
                    </div>
                    <div className="stat-item text-center p-6 rounded-lg bg-dark-1/50 backdrop-blur-sm border border-primary/20">
                        <h3 className="text-4xl font-bold text-primary mb-2">85%</h3>
                        <p className="text-gray-400">Manual tasks eliminated</p>
                    </div>
                    <div className="stat-item text-center p-6 rounded-lg bg-dark-1/50 backdrop-blur-sm border border-primary/20">
                        <h3 className="text-4xl font-bold text-primary mb-2">Local</h3>
                        <p className="text-gray-400">Fort Wayne Based</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroV2;