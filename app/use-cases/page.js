"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Target, Package, Users, ArrowRight, Sparkles } from 'lucide-react';
import { useCases } from '../../data/useCases';

const iconMap = {
    MessageCircle,
    Target,
    Package,
    Users,
    Sparkles
};

export default function UseCasesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', ...new Set(useCases.map(uc => uc.category))];
    
    const filteredCases = selectedCategory === 'All' 
        ? useCases 
        : useCases.filter(uc => uc.category === selectedCategory);

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
                    {filteredCases.map((useCase) => {
                        const IconComponent = iconMap[useCase.icon] || Sparkles;
                        return (
                            <article 
                                key={useCase.id} 
                                className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-lime-500 transition-all duration-300 group"
                            >
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
                                        {useCase.features.map((feature, index) => (
                                            <span 
                                                key={index}
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
        </section>
    );
}