"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Target, BarChart, Users, CheckCircle, ArrowRight, Rocket, Megaphone, Search, MousePointerClick, Mail, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DigitalMarketing() {
    const services = [
        { title: 'Social Media Management', icon: <Megaphone /> },
        { title: 'SEO Optimization', icon: <Search /> },
        { title: 'PPC Advertising', icon: <MousePointerClick /> },
        { title: 'Email Campaigns', icon: <Mail /> },
        { title: 'Analytics & Reporting', icon: <LineChart /> },
        { title: 'Viral Content Strategy', icon: <Rocket /> },
    ];

    const benefits = [
        { icon: <Target />, title: 'Laser Precision', description: 'Stop wasting budget. We target your ideal customer profiles with surgical accuracy.' },
        { icon: <BarChart />, title: 'Measurable ROI', description: 'No guessing games. Track every click, lead, and sale with our real-time dashboards.' },
        { icon: <TrendingUp />, title: 'Explosive Growth', description: 'Strategies built for scale. We help you dominate your market share rapidly.' },
        { icon: <Users />, title: 'Community Building', description: 'Turn passive followers into raving fans and loyal brand ambassadors.' }
    ];

    const channels = [
        {
            name: 'Social Dominance',
            description: 'Build an unstoppable brand presence on Instagram, TikTok, LinkedIn, and Facebook.',
            metrics: ['+300% Engagement', 'Viral Reach', 'Brand Loyalty']
        },
        {
            name: 'Search Supremacy',
            description: 'Own the top spots on Google. Drive high-intent traffic that is ready to buy now.',
            metrics: ['#1 Rankings', 'High CTR', 'Qualified Leads']
        },
        {
            name: 'Conversion Engines',
            description: 'Turn traffic into revenue. High-converting landing pages and automated email funnels.',
            metrics: ['10x ROI', 'Auto-Revenue', 'Lifetime Value']
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-dark">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 overflow-hidden">
                    {/* Background Accents - Orange/Pink Growth Theme */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
                            className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px]"
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
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6"
                                >
                                    <Rocket className="w-4 h-4" /> Growth Acceleration
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                                >
                                    Dominate <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Your Market.</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="text-gray-400 text-xl leading-relaxed mb-8 max-w-lg"
                                >
                                    Data-driven strategies that scale. We turn clicks into customers and brands into market leaders.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <Link href="#start-growing" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                                        Start Growing
                                    </Link>
                                    <Link href="#channels" className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium py-4 px-8 rounded-lg transition-all">
                                        Our Channels
                                    </Link>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative"
                            >
                                {/* Animated Chart UI */}
                                <div className="relative z-10 bg-dark-1 border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-1 transition-all duration-500">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <div className="text-gray-400 text-sm mb-1">Monthly Revenue</div>
                                            <div className="text-3xl font-bold text-white">$124,500</div>
                                        </div>
                                        <div className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded text-sm font-bold">
                                            <TrendingUp className="w-3 h-3" /> +127%
                                        </div>
                                    </div>
                                    <div className="h-48 flex items-end justify-between gap-2">
                                        {[30, 45, 35, 60, 50, 75, 65, 90].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${height}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className="w-full bg-gradient-to-t from-orange-600 to-pink-600 rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-pink-600 opacity-20 blur-2xl -z-10 rounded-full"></div>
                                {/* Floating Metrics Cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -top-10 -right-10 bg-dark-2 border border-white/10 p-4 rounded-xl shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><MousePointerClick className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-xs text-gray-400">CTR</div>
                                            <div className="font-bold text-white">4.85%</div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute -bottom-5 -left-10 bg-dark-2 border border-white/10 p-4 rounded-xl shadow-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400"><Users className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-xs text-gray-400">New Leads</div>
                                            <div className="font-bold text-white">+854</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section id="channels" className="py-24 border-t border-white/5 bg-dark-1/50">
                    <div className="container max-w-6xl">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold text-white mb-4"
                            >
                                Complete Growth Stack
                            </motion.h2>
                            <p className="text-gray-400">Everything you need to scale online</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(249,115,22,0.5)" }}
                                    className="group bg-dark border border-white/5 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                                >
                                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                                        {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <div className="w-8 h-1 bg-orange-500/30 rounded group-hover:w-16 transition-all duration-300"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
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
                                    Results That <span className="text-orange-500">Matter</span>
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
                                            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 flex-shrink-0 border border-orange-500/20">
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
                                {/* Channel Cards UI */}
                                <div className="space-y-6">
                                    {channels.map((channel, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                            whileHover={{ x: -10 }}
                                            className="bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-orange-500/50 transition-all cursor-default"
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-50">
                                                <BarChart className="w-12 h-12 text-white/5 group-hover:text-orange-500/20 transition-colors" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>
                                            <p className="text-gray-400 text-sm mb-4 max-w-[90%]">{channel.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {channel.metrics.map((metric, idx) => (
                                                    <span key={idx} className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 text-orange-400 text-xs font-bold uppercase tracking-wider">
                                                        {metric}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section: Digital Marketing Form */}
                <section id="start-growing" className="py-24 border-t border-white/5 bg-dark relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                    <div className="container max-w-5xl relative z-10">
                        <div className="text-center mb-12">
                            <span className="text-orange-500 font-mono text-sm tracking-wider uppercase mb-2 block">Take The Leap</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ignite Your Growth
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                The only way to go is up. Fill out the form below to launch your next big campaign.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[800px] md:min-h-[1000px]">
                            {/* Digital Marketing Onboarding Form (101B) */}
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSd5Baz_5QVbjmEyxuoj5EGwLZekORa8wdehDQeLVBiuyvJ6gQ/viewform?embedded=true"
                                width="100%"
                                height="1200"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                className="w-full h-full min-h-[1200px]"
                                title="Digital Marketing Client Onboarding Form"
                            >
                                Loading…
                            </iframe>
                        </div>
                    </div>
                </section>
            </main>
                        <section className="py-20 border-t border-white/5 bg-dark-1/30">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to get started with digital marketing?</h2>
                    <p className="text-gray-400 text-lg mb-8">Book a free discovery call or pick a plan that fits. Most clients save 10-40+ hours per week.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] text-white font-bold rounded-lg transition-all">See Plans &amp; Pricing</Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-lg">Book a Free Call</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
