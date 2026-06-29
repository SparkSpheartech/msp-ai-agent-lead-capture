"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Zap, ArrowRight, Star, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Essentials',
        setup: '$997',
        monthly: '$197/month',
        badge: null,
        accent: 'lime',
        btnText: 'Get Essentials',
        stripeUrl: 'https://buy.stripe.com/test_4gM00j4TT0YNgo47gFfYY00',
        features: [
            '5 Core Workflow Automations',
            'Basic AI Chatbots (2)',
            'Monthly Performance Report',
            'Email Support (24hr response)',
            'Standard Integrations',
            'Time saved: 10-15 hrs/week',
        ],
    },
    {
        name: 'Growth',
        setup: '$2,997',
        monthly: '$497/month',
        badge: 'Most Popular',
        accent: 'lime',
        btnText: 'Start Growing',
        stripeUrl: 'https://buy.stripe.com/test_4gM00j4TT0YNgo47gFfYY00',
        features: [
            '15 Workflow Automations',
            'Advanced AI Bots (5)',
            'Weekly Optimization Calls',
            'Priority Phone + Chat Support',
            'CRM Integration Included',
            'Time saved: 20-30 hrs/week',
            'ROI Tracking Dashboard',
        ],
    },
    {
        name: 'Enterprise',
        setup: '$7,997',
        monthly: '$997/month',
        badge: null,
        accent: 'lime',
        btnText: 'Scale Enterprise',
        stripeUrl: 'https://buy.stripe.com/test_4gM00j4TT0YNgo47gFfYY00',
        features: [
            'Unlimited Automations',
            'Custom AI Models',
            'Dedicated Account Manager',
            '24/7 Monitoring & Support',
            'SLA Guaranteed (99.9%)',
            'Time saved: 40+ hrs/week',
            'Full Tech Stack Assessment',
        ],
    },
];

const tierColors = {
    lime: {
        bg: 'bg-lime-500/10',
        border: 'border-lime-500/20',
        hoverBorder: 'hover:border-lime-500/50',
        text: 'text-lime-400',
        shadow: 'hover:shadow-[0_0_30px_rgba(132,204,22,0.15)]',
        btn: 'bg-lime-500 hover:bg-lime-400 text-zinc-950 shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30',
    },
};

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-950">
                {/* Hero */}
                <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-lime-600/10 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-lime-600/5 rounded-full blur-[100px]"></div>
                    </div>
                    <div className="container relative z-10 max-w-6xl">
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-bold uppercase tracking-wider mb-6"
                            >
                                <Zap className="w-4 h-4" /> Operational Efficiency Pricing
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                            >
                                One-time setup + affordable monthly.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                            >
                                Save <span className="text-white font-semibold">10-20 hours per week</span> per employee.
                                Pick the plan that fits your business.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-24 bg-zinc-950 relative">
                    <div className="container max-w-6xl relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            {plans.map((plan, index) => {
                                const colors = tierColors[plan.accent];
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className={`relative bg-zinc-900/50 border ${plan.badge ? 'border-lime-500/50' : colors.border} ${colors.hoverBorder} ${colors.shadow} rounded-2xl p-8 transition-all duration-300 flex flex-col ${plan.badge ? 'ring-2 ring-lime-500/30 scale-105 md:scale-110' : ''}`}
                                    >
                                        {plan.badge && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-lime-500 text-zinc-950 text-xs font-bold uppercase tracking-wider">
                                                <Star className="w-3 h-3" /> {plan.badge}
                                            </div>
                                        )}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl font-bold text-white">{plan.setup}</span>
                                                <span className="text-gray-400">setup</span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-2xl font-bold text-lime-400">{plan.monthly}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-8 flex-grow">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colors.text}`} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href={plan.stripeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center justify-center gap-2 w-full py-4 font-bold rounded-lg transition-all duration-300 ${plan.badge ? 'bg-lime-500 hover:bg-lime-400 text-zinc-950 shadow-lg shadow-lime-500/20' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'}`}
                                        >
                                            {plan.btnText}
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 border-t border-white/5">
                    <div className="container max-w-4xl text-center">
                        <h2 className="text-white text-3xl font-bold mb-4">
                            Not sure which plan?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            We'll help you calculate your savings. Start with a free discovery call.
                        </p>
                        <Link
                            href="/#contact-us"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime-500 text-zinc-950 font-bold hover:bg-lime-400 transition-all duration-300 rounded-lg shadow-lg shadow-lime-500/20"
                        >
                            Calculate Your Savings
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}