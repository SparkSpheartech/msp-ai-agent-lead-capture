"use client";
import React from 'react';
import Link from 'next/link';
import { Shield, Users, TrendingUp, Award, Lightbulb, Heart } from 'lucide-react';

const CoreValues = () => {
    const values = [
        {
            icon: <Lightbulb className="w-12 h-12" />,
            title: "Innovation First",
            description: "Always seeking cutting-edge solutions that give our clients a competitive advantage"
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "Client Partnership",
            description: "Your success is our success. We're in this together for the long haul"
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Transparency",
            description: "Clear communication at every step. No hidden fees, no surprises"
        },
        {
            icon: <Award className="w-12 h-12" />,
            title: "Excellence",
            description: "Quality over quantity, always. We take pride in delivering exceptional results"
        },
        {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Continuous Learning",
            description: "Staying ahead of tech trends so you don't have to worry about falling behind"
        },
        {
            icon: <Heart className="w-12 h-12" />,
            title: "Local Commitment",
            description: "Proud to serve Fort Wayne businesses with personalized, face-to-face support"
        }
    ];

    return (
        <section id="core-values" className="section py-20 bg-gray-200 dark:bg-zinc-900">
            <div className="container">
                <div className="section-header text-center mb-16">
                    <span className="tag text-lime-600 dark:text-primary">CORE VALUES</span>
                    <h2 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-bold mb-4">
                        What Drives <span className="text-lime-600 dark:text-primary">SPARKSPHEAR</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        These principles guide everything we do, from how we work with clients to how we approach challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="value-card bg-white dark:bg-zinc-800 border-2 border-gray-300 dark:border-zinc-700 rounded-lg p-8 hover:border-lime-500 dark:hover:border-primary transition-all duration-300 group"
                        >
                            <div className="text-lime-600 dark:text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-4">{value.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 dark:bg-primary text-dark font-bold hover:bg-lime-400 dark:hover:bg-primary/90 transition-all duration-300 rounded-md"
                    >
                        Learn About Our Team
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;