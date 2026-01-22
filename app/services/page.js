"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Camera, Monitor, TrendingUp, Shield, ArrowRight, CheckCircle, Smartphone, Globe, Search, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesOverview() {
    const individualServices = [
        {
            slug: 'web-design',
            icon: <Monitor />,
            title: 'Web Design & Dev',
            description: 'High-performance websites that convert visitors into customers.',
            color: 'text-green-400',
            bg: 'bg-green-500/10',
            border: 'border-green-500/20',
            hoverBorder: 'hover:border-green-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]',
            btn: 'text-green-400',
            features: ['Custom Design', 'E-Commerce', 'SEO Ready']
        },
        {
            slug: 'digital-marketing',
            icon: <TrendingUp />,
            title: 'Digital Marketing',
            description: 'Data-driven campaigns to dominate your market share.',
            color: 'text-orange-400',
            bg: 'bg-orange-500/10',
            border: 'border-orange-500/20',
            hoverBorder: 'hover:border-orange-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
            btn: 'text-orange-400',
            features: ['Social Media', 'PPC Ads', 'Content Strategy']
        },
        {
            slug: 'ai-automation',
            icon: <Brain />,
            title: 'AI & Automation',
            description: 'Eliminate manual work with intelligent workflow automation.',
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/20',
            hoverBorder: 'hover:border-purple-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
            btn: 'text-purple-400',
            features: ['Chatbots', 'Workflow Auto', 'Data Processing']
        },
        {
            slug: 'photography-videography',
            icon: <Camera />,
            title: 'Creative Media',
            description: 'Premium visual content to elevate your brand perception.',
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10',
            border: 'border-cyan-500/20',
            hoverBorder: 'hover:border-cyan-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
            btn: 'text-cyan-400',
            features: ['Brand Photos', 'Commercial Video', 'Event Coverage']
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-dark">

                {/* 1. THE FLAGSHIP: MASTER AUDIT HERO */}
                <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
                    {/* Background Accents - Cyber Defense Theme */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[100px]"
                        />
                    </div>

                    <div className="container relative z-10 max-w-6xl">
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6"
                            >
                                <Shield className="w-4 h-4" /> The Flagship Service
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                            >
                                The Master <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-yellow-500">Business Audit.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                            >
                                You don't need random services. You need a unified strategy.
                                Our comprehensive infrastructure audit scans your <span className="text-white">Web</span>, <span className="text-white">Marketing</span>, <span className="text-white">AI</span>, and <span className="text-white">Brand</span> systems to identify the exact levers for growth.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link
                                    href="/services/it-audits"
                                    className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-5 px-10 rounded-full transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]"
                                >
                                    <Shield className="w-6 h-6" />
                                    <span>Initiate Master Diagnosis</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <p className="text-gray-500 text-sm mt-4">Includes analysis of all 4 service areas below</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 2. THE MODULES: A LA CARTE SERVICES */}
                <section className="py-24 bg-dark-1/50 relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                    <div className="container max-w-6xl relative z-10">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-white mb-2"
                            >
                                Or Choose a Targeted Solution
                            </motion.h2>
                            <p className="text-gray-400">Specific modules to plug into your existing infrastructure</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {individualServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className={`block bg-dark border-2 ${service.border} ${service.hoverBorder} ${service.shadow} rounded-xl p-8 transition-all duration-300 group h-full`}
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={`${service.bg} p-4 rounded-xl ${service.color} group-hover:scale-110 transition-transform`}>
                                                {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                                            </div>
                                            <div className={`p-2 rounded-full border ${service.border} opacity-0 group-hover:opacity-100 transition-opacity`}>
                                                <ArrowRight className={`w-4 h-4 ${service.color}`} />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                                        <div className="space-y-3 pt-6 border-t border-white/5">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-400">
                                                    <CheckCircle className={`w-4 h-4 mr-2 ${service.btn}`} />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. CTA FOOTER */}
                <section className="py-24 border-t border-white/5">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-6">
                            Not sure where to start?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Most businesses don't need a new website. They need a system. <br />
                            Start with the audit to find out exactly what's holding you back.
                        </p>
                        <Link
                            href="/services/it-audits"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-lg"
                        >
                            Explore the Master Audit
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
