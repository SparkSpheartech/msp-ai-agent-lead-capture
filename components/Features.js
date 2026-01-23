"use client";
import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <section id="features" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Blob Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-lime-900/10 rounded-full blur-3xl mix-blend-screen"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-lime-400 font-mono text-sm tracking-wider uppercase mb-3 block">WHY CHOOSE US</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">We care about your growth and success</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl hover:border-lime-500/30 transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-white mb-4">Local Expertise</h3>
                        <p className="text-gray-400 leading-relaxed">Proudly serving the Greater Fort Wayne area with personalized, local support.</p>
                    </div>
                    <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl hover:border-lime-500/30 transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-white mb-4">24/7 Availability</h3>
                        <p className="text-gray-400 leading-relaxed">We are always here to ensure your technology never lets you down.</p>
                    </div>
                    <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl hover:border-lime-500/30 transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-white mb-4">Comprehensive Solutions</h3>
                        <p className="text-gray-400 leading-relaxed">One partner for IT, Marketing, and Creative needs, simplifying your vendor management.</p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="#contact-us"
                        className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 text-zinc-950 font-bold hover:bg-lime-400 transition-all duration-300 rounded-lg shadow-lg shadow-lime-500/20"
                    >
                        Get Started Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Features;
