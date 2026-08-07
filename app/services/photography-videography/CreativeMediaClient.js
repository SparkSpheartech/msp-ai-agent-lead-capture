"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Video, Image as ImageIcon, Award, CheckCircle, ArrowRight, Aperture, Film, Users, Zap, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PhotographyVideography() {
 const services = [
 { title: 'Corporate Photography', icon: <Users /> },
 { title: 'Product Photography', icon: <ImageIcon /> },
 { title: 'Event Coverage', icon: <Camera /> },
 { title: 'Promotional Videos', icon: <Film /> },
 { title: 'Brand Storytelling', icon: <Zap /> },
 { title: 'Social Media Content', icon: <Play /> },
 ];

 const benefits = [
 { icon: <Camera />, title: 'Professional Quality', description: 'Studio-grade equipment (Sony/Canon Cinema lines) and expert lighting techniques for cinematic results.' },
 { icon: <Video />, title: 'Engaging Content', description: 'Visual stories designed to stop the scroll, captivate your audience, and drive real engagement.' },
 { icon: <ImageIcon />, title: 'Brand Consistency', description: 'We ensure a cohesive visual identity across all your marketing materials, from web to print.' },
 { icon: <Award />, title: 'Fast Turnaround', description: 'Quick delivery of high-res assets without compromising on quality. We know speed matters.' }
 ];

 const packages = [
 {
 name: 'Essential',
 price: 'Starter',
 description: 'Perfect for small projects and social media content updates.',
 features: [
 '2-hour onsite session',
 '20 professionally edited photos',
 'Basic color correction',
 'Digital delivery (Web & High Res)',
 '2 week turnaround'
 ]
 },
 {
 name: 'Professional',
 price: 'Most Popular',
 description: 'Ideal for corporate events, product launches, and brand overhauls.',
 features: [
 'Half-day coverage (4 hours)',
 '50+ professionally edited photos',
 'Advanced retouching',
 '1 Promotional Video (30-60s)',
 'Social media cutdowns',
 '1 week turnaround'
 ],
 popular: true
 },
 {
 name: 'Premium',
 price: 'Enterprise',
 description: 'Comprehensive coverage for major campaigns and commercial productions.',
 features: [
 'Full day coverage (8 hours)',
 'Unlimited edited photos',
 'Full Video Production Crew',
 'Drone/Aerial footage',
 'Priority 72-hour turnaround',
 'Dedicated Creative Director'
 ]
 }
 ];

 return (
 <>
 <Navbar />
 <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
 {/* Hero Section */}
 <section className="relative pt-40 pb-20 overflow-hidden">
 {/* Background Accents - Cyan/Blue Theme */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
 <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
 <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
 </div>

 <div className="container relative z-10 max-w-6xl">
 <Link href="/services" className="inline-flex items-center text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:text-white mb-8 transition-colors text-sm font-mono tracking-wider">
 <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
 BACK TO SERVICES
 </Link>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
 <Aperture className="w-4 h-4" /> Visual Production
 </div>
 <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
 Capture Your <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Brand Story.</span>
 </h1>
 <p className="text-zinc-600 dark:text-gray-400 text-xl leading-relaxed mb-8 max-w-lg">
 Professional photography and videography that elevates your brand. We create stunning visual content that commands attention.
 </p>
 <div className="flex flex-wrap gap-4">
 <Link href="#book-session" className="bg-cyan-500 hover:bg-cyan-400 text-zinc-900 dark:text-white font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
 Book A Session
 </Link>
 </div>
 </div>
 <div className="relative">
 {/* Abstract Camera Lens UI */}
 <div className="relative z-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl transform -rotate-2 hover:rotate-1 transition-all duration-500">
 <div className="bg-slate-50 dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/5 aspect-[4/3] flex items-center justify-center relative">
 {/* Lens Elements */}
 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
 <div className="relative w-48 h-48 rounded-full border-2 border-cyan-500/30 flex items-center justify-center">
 <div className="w-32 h-32 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100/80 dark:bg-white/5 flex items-center justify-center backdrop-blur-sm">
 <div className="w-16 h-16 rounded-full bg-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.5)]"></div>
 </div>
 <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-3 bg-cyan-500/50"></div>
 <div className="absolute bottom-0 left-1/2 -ml-0.5 w-1 h-3 bg-cyan-500/50"></div>
 <div className="absolute left-0 top-1/2 -mt-0.5 h-1 w-3 bg-cyan-500/50"></div>
 <div className="absolute right-0 top-1/2 -mt-0.5 h-1 w-3 bg-cyan-500/50"></div>
 </div>
 </div>
 </div>
 <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-20 blur-2xl -z-10 rounded-full"></div>
 </div>
 </div>
 </div>
 </section>

 {/* Services Grid */}
 <section className="py-24 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/50">
 <div className="container max-w-6xl">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">What We Capture</h2>
 <p className="text-zinc-600 dark:text-gray-400">Complete visual solutions for modern businesses</p>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.map((service, index) => (
 <div key={index} className="group bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 hover:border-cyan-500/50 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
 <div className="w-12 h-12 bg-zinc-100/80 dark:bg-white/5 rounded-lg flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
 {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
 </div>
 <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
 <div className="w-8 h-1 bg-cyan-500/30 rounded group-hover:w-16 transition-all duration-300"></div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why Choose Us */}
 <section className="py-24 bg-slate-50 dark:bg-zinc-950">
 <div className="container max-w-6xl">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
 Cinematic <span className="text-cyan-400">Excellence</span>
 </h2>
 <div className="flex flex-col gap-8">
 {benefits.map((benefit, index) => (
 <div key={index} className="flex gap-6">
 <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0 border border-cyan-500/20">
 {React.cloneElement(benefit.icon, { className: 'w-7 h-7' })}
 </div>
 <div>
 <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-2">{benefit.title}</h3>
 <p className="text-zinc-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <div className="relative">
 {/* Visual placeholder/graphic could go here, keeping it simple for now */}
 <div className="grid grid-cols-2 gap-4">
 <div className="aspect-[3/4] bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-white/5 overflow-hidden relative">
 <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
 <ImageIcon className="absolute bottom-6 left-6 w-8 h-8 text-zinc-900 dark:text-white/20" />
 </div>
 <div className="aspect-[3/4] bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-white/5 overflow-hidden relative mt-12">
 <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
 <Video className="absolute bottom-6 left-6 w-8 h-8 text-zinc-900 dark:text-white/20" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Integration Section: Google Form */}
 <section id="book-session" className="py-24 border-t border-zinc-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950 relative">
 <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
 <div className="container max-w-5xl relative z-10">
 <div className="text-center mb-12">
 <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-2 block">Let's Create Together</span>
 <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
 Book Your Session
 </h2>
 <p className="text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto">
 Fill out the form below to get started. Tell us your vision, and we'll handle the rest.
 </p>
 </div>

 <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[800px] md:min-h-[1000px]">
 <iframe
 src="https://docs.google.com/forms/d/e/1FAIpQLSd5Baz_5QVbjmEyxuoj5EGwLZekORa8wdehDQeLVBiuyvJ6gQ/viewform?embedded=true"
 width="100%"
 height="1200"
 frameBorder="0"
 marginHeight="0"
 marginWidth="0"
 className="w-full h-full min-h-[1200px]"
 title="Photography Session Booking Form"
 >
 Loading…
 </iframe>
 </div>
 </div>
 </section>
 </main>
 <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30">
 <div className="container max-w-4xl text-center">
 <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Ready to get started with creative media?</h2>
 <p className="text-zinc-600 dark:text-gray-400 text-lg mb-8">Book a free discovery call or pick a plan that fits. Most clients save 10-40+ hours per week.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] text-zinc-900 dark:text-white font-bold rounded-lg transition-all">See Plans &amp; Pricing</Link>
 <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-100/80 dark:bg-white/5 text-zinc-900 dark:text-white font-bold border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:bg-white/10 hover:border-zinc-300 dark:border-white/20 transition-all rounded-lg">Book a Free Call</Link>
 </div>
 </div>
 </section>

 <Footer />
 </>
 );
}
