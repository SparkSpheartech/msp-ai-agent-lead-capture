"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Camera, Monitor, TrendingUp, ShieldCheck, ArrowRight, RefreshCcw } from 'lucide-react';

const ServiceWizard = () => {
    const [step, setStep] = useState('intro');
    const [history, setHistory] = useState([]);
    const [result, setResult] = useState(null);

    // Service Data
    const services = {
        ai: {
            title: "AI & Automation",
            icon: <Brain className="w-16 h-16 text-purple-600 dark:text-purple-400" />,
            description: "Leverage cutting-edge AI to automate workflows, enhance decision-making, and scale your operations efficiently.",
            link: "/services/ai-automation"
        },
        photo: {
            title: "Creative Visuals",
            icon: <Camera className="w-16 h-16 text-cyan-600 dark:text-cyan-400" />,
            description: "Premium photography and video to elevate your brand prestige.",
            link: "/services/photography-videography"
        },
        web: {
            title: "Web Design",
            icon: <Monitor className="w-16 h-16 text-green-600 dark:text-green-400" />,
            description: "Modern, high-converting websites built with stunning design and cutting-edge technology.",
            link: "/services/web-design"
        },
        marketing: {
            title: "Digital Growth",
            icon: <TrendingUp className="w-16 h-16 text-orange-600 dark:text-orange-400" />,
            description: "Data-driven marketing strategies to dominate your market share.",
            link: "/services/digital-marketing"
        },
        audit: {
            title: "IT Infrastructure Audit",
            icon: <ShieldCheck className="w-16 h-16 text-lime-600 dark:text-lime-400" />,
            description: "The first step for every serious business. A complete 360° analysis to build a unified roadmap for 10x growth.",
            link: "/services/it-audits"
        }
    };

    // Question Logic Tree
    const questions = {
        intro: {
            question: "What is your primary goal right now?",
            options: [
                { text: "I need to fix my internal operations", next: "operations" },
                { text: "I need more customers & visibility", next: "growth" },
                { text: "I'm honestly not sure where to start", result: "audit" } // Prioritize Audit
            ]
        },
        operations: {
            question: "What's the biggest bottleneck?",
            options: [
                { text: "Manual repetitive tasks", result: "ai" },
                { text: "My tech stack is a mess", result: "audit" }
            ]
        },
        growth: {
            question: "How do you want to grow?",
            options: [
                { text: "I need a better website", result: "web" },
                { text: "I need better content (Creative Visuals)", result: "photo" },
                { text: "I need more traffic & leads", result: "marketing" }
            ]
        }
    };

    const handleOptionClick = (option) => {
        if (option.result) {
            setResult(services[option.result]);
            setStep('result');
        } else {
            setHistory([...history, step]);
            setStep(option.next);
        }
    };

    const handleBack = () => {
        if (history.length > 0) {
            const prevStep = history[history.length - 1];
            setHistory(history.slice(0, -1));
            setStep(prevStep);
            setResult(null);
        } else {
            setStep('intro');
        }
    };

    const handleRestart = () => {
        setStep('intro');
        setHistory([]);
        setResult(null);
    };

    return (
        <section id="service-wizard" className="py-24 bg-gray-100 dark:bg-zinc-950 relative overflow-hidden text-gray-900 dark:text-white">
            {/* Background Accents - light/dark */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-300/30 dark:bg-lime-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-300/30 dark:bg-green-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-2 block">Discovery Engine</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Find Your <span className="text-lime-600 dark:text-lime-500">Path to Growth</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A quick diagnostic to point you in the right direction.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center items-center shadow-2xl">
                        <AnimatePresence mode="wait">
                            {step !== 'result' ? (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full text-center"
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                                        {questions[step]?.question}
                                    </h3>
                                    <div className="grid gap-4 max-w-lg mx-auto">
                                        {questions[step]?.options.map((option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(option)}
                                                className="group relative overflow-hidden bg-gray-50 dark:bg-white/5 hover:bg-lime-100 dark:hover:bg-lime-600/20 border border-gray-200 dark:border-white/10 hover:border-lime-500 dark:hover:border-lime-400/50 p-6 rounded-xl text-left transition-all duration-300 shadow-lg hover:shadow-lime-500/10"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lg text-gray-700 dark:text-white font-medium group-hover:text-lime-700 dark:group-hover:text-lime-200 transition-colors">
                                                        {option.text}
                                                    </span>
                                                    <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-lime-600 dark:group-hover:text-lime-300 transform group-hover:translate-x-1 transition-all" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="w-full text-center"
                                >
                                    <div className="inline-flex items-center justify-center p-6 bg-gray-100 dark:bg-white/5 rounded-full mb-6 border-2 border-gray-200 dark:border-white/10">
                                        {result.icon}
                                    </div>
                                    <div className="mb-2 text-gray-500 dark:text-gray-400 font-mono text-sm uppercase tracking-wider">Recommended Strategy</div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                        {result.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                                        {result.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href={`/onboarding?goal=${encodeURIComponent(result.title)}`}
                                            className="px-8 py-4 bg-gradient-to-r from-lime-500 to-green-500 text-zinc-950 font-extrabold rounded-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] flex items-center justify-center gap-2"
                                        >
                                            Start Client Onboarding <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href={result.link}
                                            className="px-8 py-4 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                        >
                                            View Solution
                                        </Link>
                                        <button
                                            onClick={handleRestart}
                                            className="px-6 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                                        >
                                            <RefreshCcw className="w-4 h-4" /> Start Over
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Footer */}
                        <div className="absolute bottom-6 w-full px-12 flex justify-between text-gray-400 dark:text-gray-500 text-sm">
                            {history.length > 0 && step !== 'result' && (
                                <button
                                    onClick={handleBack}
                                    className="hover:text-gray-700 dark:hover:text-white transition-colors flex items-center gap-2"
                                >
                                    ← Back
                                </button>
                            )}
                            {step !== 'intro' && step !== 'result' && (
                                <button
                                    onClick={handleRestart}
                                    className="ml-auto hover:text-gray-700 dark:hover:text-white transition-colors flex items-center gap-2"
                                >
                                    Reset <RefreshCcw className="w-3 h-3" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceWizard;