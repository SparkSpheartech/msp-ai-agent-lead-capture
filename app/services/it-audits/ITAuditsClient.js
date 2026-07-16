"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Code, TrendingUp, Cpu, Camera, CheckCircle, ArrowRight, Activity, Search, AlertTriangle, Layers, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ITAudits() {
    // The 4 Pillars re-framed as Audit Modules
    const pillars = [
        {
            title: 'Digital Presence Audit',
            icon: <Code />,
            desc: 'We scan your website for broken code, slow load times, and poor UX that kills conversions.',
            status: 'Web Infrastructure'
        },
        {
            title: 'Growth Systems Audit',
            icon: <TrendingUp />,
            desc: 'We analyze your marketing funnels, ad spend efficiency, and lead retention rates.',
            status: 'Digital Marketing'
        },
        {
            title: 'Operational Logic Audit',
            icon: <Cpu />,
            desc: 'We identify manual bottlenecks in your workflow that should be automated with AI.',
            status: 'AI & Automation'
        },
        {
            title: 'Brand Consistency Audit',
            icon: <Camera />,
            desc: 'We review your visual identity across all platforms to ensure premium perception.',
            status: 'Visual Identity'
        },
    ];

    const benefits = [
        { icon: <Search />, title: 'Full-Spectrum Diagnosis', description: 'We don\'t just look at servers. We look at your business as a living ecosystem.' },
        { icon: <AlertTriangle />, title: 'Expose Hidden Leaks', description: 'Find where you are losing money—whether it\'s ad spend, server costs, or lost leads.' },
        { icon: <Layers />, title: 'Unified Strategy', description: 'Stop treating your tech stack as separate silos. Connect everything.' },
        { icon: <Shield />, title: 'Future-Proof Security', description: 'Lock down your data and infrastructure against modern threats.' }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-dark">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 overflow-hidden">
                    {/* Background Accents - Cyber Defense Theme (Blue/Gold) */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[100px]"
                        />
                    </div>

                    <div className="container relative z-10 max-w-6xl">
                        <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors text-sm font-mono tracking-wider">
                            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                            BACK TO SERVICES
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6"
                                >
                                    <Shield className="w-4 h-4" /> The Master Service
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                                >
                                    We Audit <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500">The Whole System.</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-gray-400 text-xl leading-relaxed mb-8 max-w-lg"
                                >
                                    Your business is an ecosystem. We scan your Code, your Growth, your Operations, and your Brand to find the truth.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <Link href="#start-audit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                        Initiate Master Audit
                                    </Link>
                                    <Link href="#pillars" className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium py-4 px-8 rounded-lg transition-all">
                                        View Scope
                                    </Link>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative"
                            >
                                {/* Animated Radar/Scanner UI - Central Hub Concept */}
                                <div className="relative z-10 bg-dark-1 border border-white/10 rounded-full p-2 shadow-2xl w-[400px] h-[400px] mx-auto flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-500/5 rounded-full"></div>
                                    <div className="absolute inset-10 border border-white/5 rounded-full"></div>
                                    <div className="absolute inset-24 border border-white/5 rounded-full"></div>

                                    {/* Rotating Radar Sweep */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-full"
                                        style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 50%)' }}
                                    />

                                    {/* Satellites - The 4 Other Services */}
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-green-500/20 border border-green-500 rounded-full flex items-center justify-center text-green-500"><Code className="w-4 h-4" /></div>
                                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center text-purple-500"><Cpu className="w-4 h-4" /></div>
                                        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-8 h-8 bg-orange-500/20 border border-orange-500 rounded-full flex items-center justify-center text-orange-500"><TrendingUp className="w-4 h-4" /></div>
                                        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-8 h-8 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-500"><Camera className="w-4 h-4" /></div>
                                    </motion.div>

                                    {/* Central Shield */}
                                    <div className="relative z-20 bg-dark border border-blue-500/30 p-6 rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                                        <Shield className="w-16 h-16 text-blue-400" />
                                    </div>
                                </div>
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-yellow-600 opacity-20 blur-2xl -z-10 rounded-full"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* The 4 Pillars */}
                <section id="pillars" className="py-24 border-t border-white/5 bg-dark-1/50">
                    <div className="container max-w-6xl">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-white mb-4"
                            >
                                4 Pillars of Analysis
                            </motion.h2>
                            <p className="text-gray-400">Our audit covers every vital organ of your business</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pillars.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.5)" }}
                                    className="group bg-dark border border-white/5 p-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="bg-white/5 p-3 rounded-lg text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                                            {React.cloneElement(pillar.icon, { className: 'w-8 h-8' })}
                                        </div>
                                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded">
                                            {pillar.status}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">{pillar.desc}</p>
                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-blue-500 to-yellow-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Audit? */}
                <section className="py-24 bg-dark">
                    <div className="container max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl md:text-5xl font-bold text-white mb-8"
                                >
                                    The <span className="text-blue-500">First Step</span> to Transformation.
                                </motion.h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    You can't fix what you can't see. Before we build a website, launch a campaign, or deploy AI, we must first diagnose the infrastructure it stands on.
                                </p>
                                <div className="flex flex-col gap-8">
                                    {benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                            className="flex gap-6"
                                        >
                                            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/20">
                                                {React.cloneElement(benefit.icon, { className: 'w-7 h-7' })}
                                            </div>
                                            <div>
                                                <h3 className="text-white text-xl font-bold mb-2">{benefit.title}</h3>
                                                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                {/* Dashboard/Metrics UI */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-dark-1 border border-white/10 rounded-2xl p-6 shadow-2xl"
                                >
                                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Shield className="w-6 h-6 text-yellow-500" />
                                            <span className="font-bold text-white">System Health Score</span>
                                        </div>
                                        <span className="text-3xl font-mono font-bold text-yellow-500">72/100</span>
                                    </div>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Web Performance', val: 85, color: 'bg-green-500' },
                                            { label: 'Security Protocols', val: 45, color: 'bg-red-500' },
                                            { label: 'SEO Authority', val: 62, color: 'bg-yellow-500' },
                                            { label: 'Automation Level', val: 30, color: 'bg-red-500' },
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-gray-300">{item.label}</span>
                                                    <span className="text-gray-500">{item.val}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.val}%` }}
                                                        transition={{ duration: 1.5, delay: 0.5 }}
                                                        className={`h-full ${item.color}`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-white/5 text-center">
                                        <p className="text-sm text-gray-500">
                                            <AlertTriangle className="w-4 h-4 inline mr-2 text-yellow-500" />
                                            2 Critical Vulnerabilities Detected
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section: General Onboarding Form */}
                <section id="start-audit" className="py-24 border-t border-white/5 bg-dark relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                    <div className="container max-w-5xl relative z-10">
                        <div className="text-center mb-12">
                            <span className="text-blue-500 font-mono text-sm tracking-wider uppercase mb-2 block">Begin The Diagnosis</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Apply for a Master Audit
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Let us scan your business infrastructure. We'll identify the gaps and prescribe the perfect solution stack.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[800px] md:min-h-[1000px]">
                            {/* General Client Onboarding Form - The "Entry Point" */}
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLScRDTfrCVE7Qt1AAFlvBOZGvFMkzeFiXIAJyFMFHlTvBUbS2Q/viewform?embedded=true"
                                width="100%"
                                height="1200"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className="w-full h-full min-h-[1200px]"
                                title="Master Audit Application Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </section>
            </main>
                        <section className="py-20 border-t border-white/5 bg-dark-1/30">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to get started with business audit?</h2>
                    <p className="text-gray-400 text-lg mb-8">Book a free discovery call or pick a plan that fits. Most clients save 10-40+ hours per week.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white font-bold rounded-lg transition-all">See Plans &amp; Pricing</Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-lg">Book a Free Call</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
