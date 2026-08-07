"use client";
import React from 'react';
import Link from 'next/link';
import { Brain, Camera, Monitor, TrendingUp, Database, Zap } from 'lucide-react';

const Services = () => {
 const services = [
 {
 icon: <Zap className="w-12 h-12" />,
 title: "AI Automation",
 description: "Eliminate 10-20 hours of manual work weekly. We build intelligent workflows that scale your business without adding headcount.",
 link: "/services/ai-automation",
 highlight: "Most Popular"
 },
 {
 icon: <Database className="w-12 h-12" />,
 title: "IT Infrastructure Audits",
 description: "Identify bottlenecks, streamline systems, and create unified tech roadmaps for 10x growth.",
 link: "/services/it-audits"
 },
 {
 icon: <Monitor className="w-12 h-12" />,
 title: "Web Design",
 description: "Modern, high-converting websites built with stunning design and cutting-edge technology.",
 link: "/services/web-design"
 },
 {
 icon: <TrendingUp className="w-12 h-12" />,
 title: "Digital Marketing",
 description: "Data-driven strategies to grow your online presence and drive measurable business results.",
 link: "/services/digital-marketing"
 },
 {
 icon: <Camera className="w-12 h-12" />,
 title: "Photography & Videography",
 description: "Professional visual content that tells your brand story and captivates your audience.",
 link: "/services/photography-videography"
 }
 ];

 return (
 <section id="our-services" className="services section" style={{ background: 'var(--color-gray-50)' }}>
 <div className="container">
 <div className="section-header">
 <span className="tag">WHAT WE DO</span>
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 Strategic Services for <span className="text-primary">Modern Businesses</span>
 </h2>
 <p className="text-gray-600">
 From AI-powered automation to stunning visual content, we provide operational solutions that reduce costs and scale your business.
 </p>
 </div>

 <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {services.slice(0, 3).map((service, index) => (
 <div
 key={index}
 className="service-card bg-white border-2 border-gray-200 hover:border-primary rounded-xl p-8 transition-all duration-300"
 >
 <div className="text-primary mb-6">
 {service.icon}
 </div>
 {service.highlight && (
 <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-3">
 {service.highlight}
 </div>
 )}
 <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
 <p className="text-gray-600 mb-6">{service.description}</p>
 <Link
 href={service.link}
 className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
 >
 Learn More →
 </Link>
 </div>
 ))}
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
 {services.slice(3).map((service, index) => (
 <div
 key={index}
 className="service-card bg-white border-2 border-gray-200 hover:border-primary rounded-xl p-8 transition-all duration-300"
 >
 <div className="text-primary mb-6">
 {service.icon}
 </div>
 {service.highlight && (
 <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-3">
 {service.highlight}
 </div>
 )}
 <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
 <p className="text-gray-600 mb-6">{service.description}</p>
 <Link
 href={service.link}
 className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
 >
 Learn More →
 </Link>
 </div>
 ))}
 </div>

 <div className="text-center mt-12">
 <Link
 href="/services"
 className="inline-flex items-center justify-center px-8 py-4 bg-primary text-zinc-900 dark:text-white font-bold hover:bg-primary/90 transition-all duration-300 rounded-md"
 >
 View All Services
 </Link>
 </div>
 </div>
 </section>
 );
};

export default Services;