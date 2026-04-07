"use client";
import React from 'react';
import Link from 'next/link';

const Team = () => {
    return (
        <section className="section team animate-on-scroll bg-dark text-white py-24">
            <div className="container">
                <div className="section-header text-center mb-16">
                    <span className="tag text-lime-400">OUR TEAM</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Dedicated experts ready to serve you</h2>
                </div>
                <div className="team-grid stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/founder-new.png" alt="Portrait of the SPARKSPHEAR CEO and Tech Lead" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Expert Leader</h3>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">CEO, Tech Lead</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/executive-assistant.jpg" alt="Portrait of the SPARKSPHEAR Executive Assistant" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Executive Assistant</h3>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Operations</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/cto-new.jpg" alt="Portrait of the SPARKSPHEAR Chief Technology Officer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">CTO</h3>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Infrastructure</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/digital-marketing.jpg" alt="Portrait of the SPARKSPHEAR Digital Specialist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Digital Specialist</h3>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Marketing</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/devops-engineer.jpg" alt="Portrait of the SPARKSPHEAR DevOps Engineer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">DevOps Engineer</h3>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Hybrid Operations</p>
                    </div>
                </div>
                <div className="text-center mt-16">
                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 text-dark font-bold hover:bg-lime-400 transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(166,253,55,0.3)] hover:shadow-[0_0_30px_rgba(166,253,55,0.4)]"
                    >
                        Learn More About Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Team;
