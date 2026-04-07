"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Linkedin, Mail, Award, Target, Heart } from 'lucide-react';

export default function About() {
    const values = [
        {
            icon: <Award />,
            title: 'Excellence',
            description: 'Committed to delivering the highest quality solutions and service'
        },
        {
            icon: <Target />,
            title: 'Innovation',
            description: 'Always pursuing the latest technologies to give clients a competitive edge'
        },
        {
            icon: <Heart />,
            title: 'Community',
            description: 'Dedicated to empowering local Fort Wayne businesses to thrive'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-950">
                {/* Hero Section */}
                {/* Team Bios Section */}
                <section className="pt-32 pb-16">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 mb-6">
                                <span className="text-lime-400 text-sm font-semibold tracking-wider">MEET THE EXPERTS</span>
                            </span>
                            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
                                The Minds Behind <span className="text-lime-500">SPARKSPHEAR</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                                We are a diverse team of specialists united by a single mission: to empower your business with technology that actually works.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {/* CEO / Tech Lead */}
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-lime-500/50 transition-all duration-300">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img src="/founder-new.png" alt="Portrait of the SPARKSPHEAR CEO and Tech Lead" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6">
                                        <p className="text-2xl font-bold text-white mb-1">CEO / Tech Lead</p>
                                        <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">Start & Scale</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Visionary leader with a passion for integrating complex tech stacks into seamless business solutions. Dedicated to driving growth for local enterprises.
                                    </p>
                                </div>
                            </div>

                            {/* Executive Assistant */}
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-lime-500/50 transition-all duration-300">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img src="/executive-assistant.jpg" alt="Portrait of the SPARKSPHEAR Executive Assistant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6">
                                        <p className="text-2xl font-bold text-white mb-1">Executive Assistant</p>
                                        <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">Operations</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        The organizational backbone ensuring smooth operations and client communication. She makes sure every project stays on track and on time.
                                    </p>
                                </div>
                            </div>

                            {/* CTO */}
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-lime-500/50 transition-all duration-300">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img src="/cto-new.jpg" alt="Portrait of the SPARKSPHEAR Chief Technology Officer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6">
                                        <p className="text-2xl font-bold text-white mb-1">CTO</p>
                                        <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">Infrastructure</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Architect of our robust infrastructure, ensuring security and scalability for every client. He transforms technical complexity into reliable stability.
                                    </p>
                                </div>
                            </div>

                            {/* Digital Specialist */}
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-lime-500/50 transition-all duration-300 lg:col-start-1 lg:justify-self-end">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img src="/digital-marketing.jpg" alt="Portrait of the SPARKSPHEAR Digital Specialist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6">
                                        <p className="text-2xl font-bold text-white mb-1">Digital Specialist</p>
                                        <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">Marketing</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Strategies that turn clicks into customers. She masters the art of digital presence to ensure your brand gets the attention it deserves.
                                    </p>
                                </div>
                            </div>

                            {/* DevOps Engineer */}
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden group hover:border-lime-500/50 transition-all duration-300 lg:col-start-2 lg:justify-self-start">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <img src="/devops-engineer.jpg" alt="Portrait of the SPARKSPHEAR DevOps Engineer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6">
                                        <p className="text-2xl font-bold text-white mb-1">DevOps Engineer</p>
                                        <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">Hybrid Operations</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        Bridging the gap between development and operations for continuous, reliable delivery. He ensures your systems are always available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                                What Drives <span className="text-primary">Me</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                The principles that guide everything we do at SPARKSPHEAR
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-dark-1 border-2 border-dark-2 hover:border-primary rounded-lg p-8 text-center transition-all duration-300 group"
                                >
                                    <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                        {React.cloneElement(value.icon, { className: 'w-12 h-12' })}
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-4xl">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl p-12 text-center">
                            <h2 className="text-white text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-300 text-xl leading-relaxed">
                                "To empower businesses with innovative technology solutions that drive growth, efficiency, and success—delivered with integrity, expertise, and a personal touch."
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 border-t border-dark-2">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Ready to Work Together?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss how SPARKSPHEAR can help your business thrive
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#book-meeting"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
                            >
                                Schedule a Consultation
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-dark-2 text-white font-bold border-2 border-dark-2 hover:border-primary transition-all duration-300 rounded-md"
                            >
                                View Our Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
