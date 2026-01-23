"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import { BookOpen, Ticket, MessageCircle, Phone, Mail, Clock } from 'lucide-react';

export default function SupportCenter() {
    const supportOptions = [
        {
            icon: <BookOpen className="w-12 h-12" />,
            title: "Knowledge Base",
            description: "Browse articles, guides, and tutorials",
            link: "/support/kb",
            color: "primary"
        },
        {
            icon: <Ticket className="w-12 h-12" />,
            title: "Submit a Ticket",
            description: "Get help from our support team",
            link: "/support/ticket",
            color: "primary"
        },
        {
            icon: <MessageCircle className="w-12 h-12" />,
            title: "Live Chat",
            description: "Chat with support (Coming Soon)",
            link: "#",
            color: "gray",
            disabled: true
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-950 relative overflow-hidden">

                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-lime-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
                    <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                {/* Hero Section */}
                <section className="pt-40 pb-20 relative z-10">
                    <div className="container text-center">
                        <span className="text-lime-400 font-mono text-sm tracking-wider uppercase mb-4 block">SUPPORT CENTER</span>
                        <h1 className="text-white text-5xl md:text-7xl font-bold mb-8">
                            How Can We <span className="text-lime-500">Help?</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Find answers, submit tickets, or contact our dedicated support team directly. We're standing by.
                        </p>
                    </div>
                </section>

                {/* Support Options Grid */}
                <section className="pb-24 relative z-10">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {supportOptions.map((option, index) => (
                                option.disabled ? (
                                    <div
                                        key={index}
                                        className="support-card bg-zinc-900/50 border border-white/5 opacity-50 cursor-not-allowed rounded-2xl p-10 text-center"
                                    >
                                        <div className="text-gray-600 mb-6 flex justify-center">
                                            {option.icon}
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-3">{option.title}</h3>
                                        <p className="text-gray-500">{option.description}</p>
                                    </div>
                                ) : (
                                    <Link
                                        key={index}
                                        href={option.link}
                                        className="support-card bg-zinc-900/50 border border-white/10 hover:border-lime-500/50 rounded-2xl p-10 text-center transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10"
                                    >
                                        <div className="text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                            {option.icon}
                                        </div>
                                        <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-lime-400 transition-colors">{option.title}</h3>
                                        <p className="text-gray-400">{option.description}</p>
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ />

                {/* Contact Information */}
                <section className="py-24 border-t border-white/5 bg-black/20 relative z-10">
                    <div className="container max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-white text-3xl font-bold mb-4">
                                Other Ways to <span className="text-lime-500">Reach Us</span>
                            </h2>
                            <p className="text-gray-400">Can't find what you're looking for? Get in touch.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-lime-500/30 transition-all">
                                <div className="text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Phone</h3>
                                <p className="text-gray-400 hover:text-lime-400 transition-colors">
                                    <a href="tel:2602477775">(260) 247-7775</a>
                                </p>
                            </div>

                            <div className="text-center group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-lime-500/30 transition-all">
                                <div className="text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Email</h3>
                                <p className="text-gray-400 hover:text-lime-400 transition-colors">
                                    <a href="mailto:contact@sparkspheartechsolutions.com">contact@sparkspheartechsolutions.com</a>
                                </p>
                            </div>

                            <div className="text-center group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-lime-500/30 transition-all">
                                <div className="text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Business Hours</h3>
                                <p className="text-gray-400">Mon-Fri: 8AM-6PM EST</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
