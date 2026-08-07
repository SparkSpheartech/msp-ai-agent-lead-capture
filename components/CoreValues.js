"use client";
import React from 'react';
import Link from 'next/link';
import { Shield, Users, TrendingUp, Award, Lightbulb, Heart } from 'lucide-react';

const CoreValues = () => {
 const values = [
 {
 icon: <Lightbulb className="w-12 h-12" />,
 title: "Practical Automation",
 description: "We build systems that save time and reduce costs, never technology for its own sake."
 },
 {
 icon: <Users className="w-12 h-12" />,
 title: "Direct Partnership",
 description: "You work directly with the founders and technical leads building your solution."
 },
 {
 icon: <Shield className="w-12 h-12" />,
 title: "Clear Communication",
 description: "No technobabble, no hidden charges. Just straight answers and clear scope."
 },
 {
 icon: <Award className="w-12 h-12" />,
 title: "Proven Results",
 description: "Every tool we deploy is tested for high reliability and measurable time savings."
 },
 {
 icon: <TrendingUp className="w-12 h-12" />,
 title: "Continuous Maintenance",
 description: "We monitor and update your workflows so your operations never break down."
 },
 {
 icon: <Heart className="w-12 h-12" />,
 title: "Client-Centric",
 description: "Proudly based in nationwide, offering responsive local support when you need it."
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
 className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 dark:bg-primary text-zinc-900 dark:text-white font-bold hover:bg-lime-400 dark:hover:bg-primary/90 transition-all duration-300 rounded-md"
 >
 Learn About Our Team
 </Link>
 </div>
 </div>
 </section>
 );
};

export default CoreValues;