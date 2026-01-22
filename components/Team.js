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
                <div className="team-grid stagger-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="https://placehold.co/400x400/1b1b1b/a6fd37?text=Leader" alt="Team Leader" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Expert Leader</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">CEO, Tech Lead</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="https://placehold.co/400x400/1b1b1b/a6fd37?text=Creative" alt="Creative Director" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Creative Director</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Design & Media</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="https://placehold.co/400x400/1b1b1b/a6fd37?text=Support" alt="Support Specialist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Support Specialist</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">IT Operations</p>
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
