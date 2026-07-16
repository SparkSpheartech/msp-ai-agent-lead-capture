"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Zap, Bot, TrendingUp, CheckCircle, ArrowRight, Cpu, Network, Workflow, MessageSquareCode, Database, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIAutomation() {
    const services = [
        { title: 'Workflow Automation', icon: <Workflow /> },
        { title: 'AI Chatbot Development', icon: <MessageSquareCode /> },
        { title: 'Data Processing', icon: <Database /> },
        { title: 'Custom AI Models', icon: <Brain /> },
        { title: 'CRM Integration', icon: <Network /> },
        { title: 'API Development', icon: <Code2 /> },
    ];

    const benefits = [
        { icon: <Zap />, title: 'Hyper-Efficiency', description: 'Eliminate manual bottlenecks. We build systems that work 24/7, instantly freeing up your team.' },
        { icon: <TrendingUp />, title: 'Scalable Growth', description: 'Processes that grow with you. Handle 10x the volume without hiring 10x the staff.' },
        { icon: <Brain />, title: 'Intelligent Insights', description: 'Turn raw data into actionable gold. Our AI models reveal patterns humans might miss.' },
        { icon: <Bot />, title: 'Custom Solutions', description: 'No cookie-cutter bots. We train AI on *your* specific business logic and brand voice.' }
    ];

    const useCases = [
        {
            title: 'Customer Service AI',
            description: 'Intelligent chatbots that handle 80% of support queries instantly, routing only complex issues to humans.',
            stat: '70% Cost Reduction'
        },
        {
            title: 'Marketing Autopilot',
            description: 'Systems that nurture leads, personalize emails, and optimize ad spend in real-time.',
            stat: '3x Conversion Rate'
        },
        {
            title: 'Smart Data Processing',
            description: 'Automated extraction of data from invoices, forms, and emails directly into your database.',
            stat: '99% Accuracy'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-dark">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 overflow-hidden">
                    {/* Background Accents - Purple/Violet Future Tech Theme */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]"
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
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-wider mb-6"
                                >
                                    <Bot className="w-4 h-4" /> Intelligent Automation
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                                >
                                    Work Smarter, <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Not Harder.</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-gray-400 text-xl leading-relaxed mb-8 max-w-lg"
                                >
                                    Harness the power of AI to automate workflows, predict trends, and scale your business without the growing pains.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <Link href="#automate" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                                        Start Automating
                                    </Link>
                                    <Link href="#solutions" className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium py-4 px-8 rounded-lg transition-all">
                                        Explore Solutions
                                    </Link>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative"
                            >
                                {/* Abstract AI Brain UI */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-10 border border-dashed border-violet-500/20 rounded-full"
                                />
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 bg-dark-1 border border-white/10 rounded-2xl p-2 shadow-2xl"
                                >
                                    <div className="bg-dark rounded-xl overflow-hidden border border-white/5 aspect-[4/3] flex items-center justify-center relative">
                                        {/* Network/Nodes */}
                                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                                        <div className="relative w-48 h-48 flex items-center justify-center">
                                            <div className="absolute inset-0 bg-violet-500/20 blur-[50px] rounded-full"></div>
                                            <Cpu className="w-24 h-24 text-violet-400 relative z-10" />
                                            {/* Orbiting 'satellites' */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0"
                                            >
                                                <div className="absolute top-0 right-0 w-3 h-3 bg-fuchsia-500 rounded-full shadow-[0_0_10px_rgba(217,70,239,1)]"></div>
                                            </motion.div>
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-4"
                                            >
                                                <div className="absolute bottom-10 left-0 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-20 blur-2xl -z-10 rounded-full"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Capabilities Grid */}
                <section id="solutions" className="py-24 border-t border-white/5 bg-dark-1/50">
                    <div className="container max-w-6xl">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-white mb-4"
                            >
                                Our Tech Stack
                            </motion.h2>
                            <p className="text-gray-400">Cutting-edge tools for modern problems</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.5)" }}
                                    className="group bg-dark border border-white/5 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                                        {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <div className="w-8 h-1 bg-violet-500/30 rounded group-hover:w-16 transition-all duration-300"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why AI? */}
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
                                    Why <span className="text-violet-400">Automate?</span>
                                </motion.h2>
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
                                            <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0 border border-violet-500/20">
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
                                {/* Holographic Cards UI */}
                                <div className="space-y-6">
                                    {useCases.map((useCase, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                            whileHover={{ x: -10 }}
                                            className="bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-violet-500/50 transition-all cursor-default"
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                                <Cpu className="w-12 h-12 text-white/5 group-hover:text-violet-500/20 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4 max-w-[90%]">{useCase.description}</p>
                                            <div className="inline-flex items-center gap-2 bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/30">
                                                <TrendingUp className="w-3 h-3 text-violet-400" />
                                                <span className="text-violet-200 text-xs font-bold uppercase tracking-wider">{useCase.stat}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section: General Onboarding Form */}
                <section id="automate" className="py-24 border-t border-white/5 bg-dark relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                    <div className="container max-w-5xl relative z-10">
                        <div className="text-center mb-12">
                            <span className="text-violet-400 font-mono text-sm tracking-wider uppercase mb-2 block">Build The Future</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Start Your Automation Journey
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Ready to scale? Fill out our intake form and let's identify the highest-impact automation opportunities for your business.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[800px] md:min-h-[1000px]">
                            {/* General Onboarding Form */}
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLScRDTfrCVE7Qt1AAFlvBOZGvFMkzeFiXIAJyFMFHlTvBUbS2Q/viewform?embedded=true"
                                width="100%"
                                height="1200"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className="w-full h-full min-h-[1200px]"
                                title="General Client Onboarding Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </section>
            </main>
                        <section className="py-20 border-t border-white/5 bg-dark-1/30">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to get started with AI automation?</h2>
                    <p className="text-gray-400 text-lg mb-8">Book a free discovery call or pick a plan that fits. Most clients save 10-40+ hours per week.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white font-bold rounded-lg transition-all">See Plans &amp; Pricing</Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-lg">Book a Free Call</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
