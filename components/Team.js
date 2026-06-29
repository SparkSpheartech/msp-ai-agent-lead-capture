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
<<<<<<< Updated upstream
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/founder-new.png" alt="Team Leader" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Expert Leader</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">CEO, Tech Lead</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/executive-assistant.jpg" alt="Executive Assistant" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Executive Assistant</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Operations</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/cto-new.jpg" alt="CTO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">CTO</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Infrastructure</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/digital-marketing.jpg" alt="Digital Marketing" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">Digital Specialist</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Marketing</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-white/10 group-hover:border-lime-500/50 transition-colors">
                            <img src="/devops-engineer.jpg" alt="DevOps Engineer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">DevOps Engineer</h4>
                        <p className="text-gray-500 uppercase text-sm tracking-wider">Hybrid Operations</p>
=======
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-gray-200 dark:border-white/10 group-hover:border-lime-500 dark:group-hover:border-lime-500/50 transition-colors">
                            <img src="/images/team/shazaly.jpg" alt="Shazaly Musa" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Shazaly Musa</h4>
                        <p className="text-gray-500 dark:text-gray-500 uppercase text-sm tracking-wider">Founder & CEO</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-gray-200 dark:border-white/10 group-hover:border-lime-500 dark:group-hover:border-lime-500/50 transition-colors">
                            <img src="/images/team/onyx.jpg" alt="Onyx" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Onyx</h4>
                        <p className="text-gray-500 dark:text-gray-500 uppercase text-sm tracking-wider">Business Architect (AI)</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-gray-200 dark:border-white/10 group-hover:border-lime-500 dark:group-hover:border-lime-500/50 transition-colors">
                            <img src="/images/team/daisy.jpg" alt="Daisy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Daisy</h4>
                        <p className="text-gray-500 dark:text-gray-500 uppercase text-sm tracking-wider">Operations Lead (AI)</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-gray-200 dark:border-white/10 group-hover:border-lime-500 dark:group-hover:border-lime-500/50 transition-colors">
                            <img src="/images/team/eissa.jpg" alt="Eissa" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Eissa</h4>
                        <p className="text-gray-500 dark:text-gray-500 uppercase text-sm tracking-wider">Finance & Legal (AI)</p>
                    </div>
                    <div className="team-member group">
                        <div className="member-image relative overflow-hidden rounded-xl aspect-square mb-6 border border-gray-200 dark:border-white/10 group-hover:border-lime-500 dark:group-hover:border-lime-500/50 transition-colors">
                            <img src="/images/team/shima.jpg" alt="Shima" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark to-transparent opacity-60"></div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">Shima</h4>
                        <p className="text-gray-500 dark:text-gray-500 uppercase text-sm tracking-wider">Marketing Lead (AI)</p>
>>>>>>> Stashed changes
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
