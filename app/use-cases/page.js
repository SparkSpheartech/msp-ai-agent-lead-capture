"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MessageCircle, Target, Package, Users, ArrowRight, Sparkles, Lock, Unlock } from 'lucide-react';
import { useCases } from '../../data/useCases';
import { useAuth } from '@/context/AuthContext';

const iconMap = {
    MessageCircle,
    Target,
    Package,
    Users,
    Sparkles
};

export default function UseCasesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    
    const categories = ['All', ...new Set(useCases.map(uc => uc.category))];
    
    const filteredCases = selectedCategory === 'All' 
        ? useCases 
        : useCases.filter(uc => uc.category === selectedCategory);

    // First use case is preview, rest are locked
    const handleCaseClick = (useCase, index) => {
        if (index === 0) {
            // First case is free preview
            return;
        }
        if (!isAuthenticated) {
            setShowLoginModal(true);
        }
    };

    const navigateToLogin = () => {
        router.push('/login');
    };

    return (
        <section className="pt-32 pb-20 bg-zinc-950 min-h-screen">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-lime-500 font-bold tracking-wider text-sm uppercase mb-4 block">What We Build</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Use Cases</h1>
                    <p className="text-gray-400 text-lg">
                        Real solutions we've built for real businesses. Each project showcases how AI and custom development drive measurable results.
                    </p>
                    {!isAuthenticated && (
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/30 rounded-full">
                            <Lock className="w-4 h-4 text-lime-500" />
                            <span className="text-lime-400 text-sm">Sign in to view all use cases</span>
                        </div>
                    )}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-lime-500 text-zinc-950'
                                    : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-800'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredCases.map((useCase, index) => {
                        const IconComponent = iconMap[useCase.icon] || Sparkles;
                        const isLocked = index !== 0 && !isAuthenticated;
                        
                        return (
                            <article 
                                key={useCase.id} 
                                className={`bg-zinc-900 rounded-2xl overflow-hidden border transition-all duration-300 group relative ${
                                    isLocked 
                                        ? 'border-zinc-800 opacity-75' 
                                        : 'border-zinc-800 hover:border-lime-500'
                                }`}
                                onClick={() => handleCaseClick(useCase, index)}
                            >
                                {/* Lock Overlay for locked items */}
                                {isLocked && (
                                    <div className="absolute inset-0 bg-zinc-950/50 backdrop-blur-[1px] z-10 rounded-2xl flex items-center justify-center">
                                        <div className="text-center">
                                            <Lock className="w-12 h-12 text-lime-500 mx-auto mb-3" />
                                            <p className="text-white font-semibold">Sign in to view</p>
                                            <p className="text-gray-400 text-sm mt-1">This use case is locked</p>
                                        </div>
                                    </div>
                                )}

                                {/* Preview Badge */}
                                {index === 0 && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-lime-500 text-zinc-950 text-xs font-bold rounded-full">
                                            <Unlock className="w-3 h-3" />
                                            Preview
                                        </span>
                                    </div>
                                )}

                                {/* Icon Header */}
                                <div className="p-8 border-b border-zinc-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-lime-500/10 text-lime-500 text-xs font-bold rounded-full">
                                            {useCase.category}
                                        </span>
                                        <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center">
                                            <IconComponent className="w-6 h-6 text-lime-500" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-500 transition-colors">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="p-8 pt-4">
                                    <h4 className="text-white font-semibold mb-4">Key Features</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {useCase.features.map((feature, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 bg-zinc-800 text-gray-300 text-sm rounded-lg"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="px-8 pb-8">
                                    <Link 
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-lime-500 font-semibold hover:gap-3 transition-all"
                                    >
                                        Discuss Similar Project <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredCases.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No use cases found in this category.</p>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-block p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                        <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
                        <p className="text-gray-400 mb-6">Let's discuss how we can help you achieve your goals.</p>
                        <Link 
                            href="/contact"
                            className="inline-block px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-md hover:bg-lime-400 transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            {showLoginModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-md w-full text-center">
                        <Lock className="w-16 h-16 text-lime-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Sign In Required</h3>
                        <p className="text-gray-400 mb-6">
                            Sign in to access all our use cases and see how we can help your business.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => setShowLoginModal(false)}
                                className="px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={navigateToLogin}
                                className="px-6 py-3 bg-lime-500 text-zinc-950 font-bold rounded-lg hover:bg-lime-400 transition-colors"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}