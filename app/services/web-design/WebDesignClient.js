"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Smartphone, Zap, TrendingUp, CheckCircle, ArrowRight, MousePointer2, Layers, Code2, Gamepad2, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WebDesign() {
 const services = [
 { title: 'Custom Website Design', icon: <MousePointer2 /> },
 { title: 'E-Commerce Development', icon: <TrendingUp /> },
 { title: 'Landing Page Optimization', icon: <Zap /> },
 { title: 'Website Redesign', icon: <Layers /> },
 { title: 'Mobile-First Development', icon: <Smartphone /> },
 { title: 'Modern Tech Stack', icon: <Code2 /> },
 ];

 const benefits = [
 { icon: <Monitor />, title: 'Modern Design', description: 'Beautiful, on-brand websites that make a lasting impression and build credibility.' },
 { icon: <Smartphone />, title: 'Mobile Responsive', description: 'Flawless experience across all devices and screen sizes, ensuring you never miss a customer.' },
 { icon: <Zap />, title: 'Lightning Fast', description: 'Optimized for speed and performance. Google loves fast sites, and so do your visitors.' },
 { icon: <TrendingUp />, title: 'Conversion Focused', description: 'Strategically designed user flows that turn passive visitors into paying customers.' }
 ];

 const process = [
 { step: '01', title: 'Discovery', description: 'We dive deep to understand your goals, audience, and unique brand voice.' },
 { step: '02', title: 'Design', description: 'We create visually stunning mockups and interactive prototypes.' },
 { step: '03', title: 'Development', description: 'We build your site using clean code and modern, scalable technology.' },
 { step: '04', title: 'Launch', description: 'We handle the deployment, testing, and optimization for peak performance.' },
 { step: '05', title: 'Support', description: 'We provide ongoing maintenance to keep your site secure and up-to-date.' }
 ];

 return (
 <>
 <Navbar />
 <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
 {/* Hero Section */}
 <section className="relative pt-40 pb-20 overflow-hidden">
 {/* Background Accents */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
 <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
 <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
 </div>

 <div className="container relative z-10 max-w-6xl">
 <Link href="/services" className="inline-flex items-center text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:text-white mb-8 transition-colors text-sm font-mono tracking-wider">
 <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
 BACK TO SERVICES
 </Link>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
 <Monitor className="w-4 h-4" /> Web Design & Development
 </div>
 <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
 Digital Experiences <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">That Convert.</span>
 </h1>
 <p className="text-zinc-600 dark:text-gray-400 text-xl leading-relaxed mb-8 max-w-lg">
 We build high-performance websites that look stunning and work hard for your business. Fast, responsive, and designed to grow.
 </p>
 <div className="flex flex-wrap gap-4">
 <Link href="#start-project" className="bg-primary hover:bg-primary/90 text-zinc-900 dark:text-white font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
 Start Your Project
 </Link>
 <Link href="#our-process" className="bg-transparent border border-zinc-300 dark:border-white/20 hover:bg-zinc-100/80 dark:bg-white/5 text-zinc-900 dark:text-white font-medium py-4 px-8 rounded-lg transition-all">
 How We Work
 </Link>
 </div>
 </div>
 <div className="relative">
 {/* Abstract UI Mockup */}
 <div className="relative z-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl transform rotate-3 hover:rotate-1 transition-all duration-500">
 <div className="bg-slate-50 dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/5 aspect-[4/3] flex items-center justify-center relative">
 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
 <div className="text-center">
 <Code2 className="w-24 h-24 text-primary/20 mx-auto mb-4" />
 <div className="h-4 w-32 bg-zinc-200 dark:bg-white/10 rounded mx-auto mb-2"></div>
 <div className="h-3 w-48 bg-zinc-100/80 dark:bg-white/5 rounded mx-auto"></div>
 </div>
 </div>
 </div>
 <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl -z-10 rounded-full"></div>
 </div>
 </div>
 </div>
 </section>

  {/* What We Build (Capabilities) */}
  <section className="py-24 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/50">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Conversion-First Web Engineering</h2>
        <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          We combine modern JavaScript frameworks (Next.js, React, Tailwind CSS) with user-behavior psychology to build fast, secure web applications that rank on Google and convert visitors.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => (
          <div key={index} className="group bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 hover:border-emerald-500/50 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <div className="w-12 h-12 bg-zinc-100/80 dark:bg-white/5 rounded-lg flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-zinc-600 dark:text-gray-400 text-sm mb-3">
              Engineered with clean SSR architecture, sub-second page loads, and schema-rich metadata for maximum search performance.
            </p>
            <div className="w-8 h-1 bg-emerald-500/30 rounded group-hover:w-16 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Enterprise Web Standards */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 border border-emerald-500/20 shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-emerald-300 mb-6">Our 4 Core Web Performance Guarantees</h3>
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-emerald-400 font-mono font-bold mb-1">CORE WEB VITALS</div>
            <p className="text-zinc-400">Targeting 90+ performance scores on mobile and desktop with zero layout shifts.</p>
          </div>
          <div>
            <div className="text-emerald-400 font-mono font-bold mb-1">SEMANTIC SEO</div>
            <p className="text-zinc-400">Strict HTML5 semantic hierarchy, JSON-LD structured data, and dynamic OpenGraph assets.</p>
          </div>
          <div>
            <div className="text-emerald-400 font-mono font-bold mb-1">HEADLESS STACK</div>
            <p className="text-zinc-400">Built on Next.js 14 App Router, Vercel edge deployment, and modular CMS backends.</p>
          </div>
          <div>
            <div className="text-emerald-400 font-mono font-bold mb-1">SECURITY & SSL</div>
            <p className="text-zinc-400">Automated SSL certification, DDoS mitigation, and encrypted API form routing.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Frequently Asked Questions */}
  <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/40">
    <div className="container max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div className="bg-slate-50 dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">How long does a website design and development project take?</h3>
          <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
            Standard custom business sites take between 2 to 4 weeks from discovery to final deployment. E-commerce platforms or custom web applications with API integrations typically take 4 to 6 weeks.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Will our team be able to update site content after launch?</h3>
          <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
            Absolutely. We pair custom frontends with friendly headless CMS solutions (or Markdown content repositories) so your team can publish blog posts, update product pricing, or add team members in seconds.
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Is search engine optimization (SEO) included in the web build?</h3>
          <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
            Yes. Every website we build includes foundational technical SEO—canonical URLs, optimized meta tags, XML sitemap generation, structured schema markup, fast image loading, and clean semantic H1-H3 heading tags.
          </p>
        </div>
      </div>
    </div>
  </section>

 {/* Why Our Websites Win */}
 <section className="py-24 bg-slate-50 dark:bg-zinc-950">
 <div className="container max-w-6xl">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div>
 <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
 Why Our Websites <span className="text-primary">Win</span>
 </h2>
 <div className="flex flex-col gap-8">
 {benefits.map((benefit, index) => (
 <div key={index} className="flex gap-6">
 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 border border-primary/20">
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
 <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full"></div>
 <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl p-8">
 <div className="space-y-6">
 <div className="flex items-center justify-between p-4 bg-zinc-100/80 dark:bg-white/5 rounded-lg border border-zinc-200 dark:border-white/5">
 <span className="text-zinc-700 dark:text-gray-300">Performance Score</span>
 <span className="text-primary font-mono font-bold">98/100</span>
 </div>
 <div className="flex items-center justify-between p-4 bg-zinc-100/80 dark:bg-white/5 rounded-lg border border-zinc-200 dark:border-white/5">
 <span className="text-zinc-700 dark:text-gray-300">SEO Rating</span>
 <span className="text-primary font-mono font-bold">100/100</span>
 </div>
 <div className="flex items-center justify-between p-4 bg-zinc-100/80 dark:bg-white/5 rounded-lg border border-zinc-200 dark:border-white/5">
 <span className="text-zinc-700 dark:text-gray-300">Accessibility</span>
 <span className="text-primary font-mono font-bold">100/100</span>
 </div>
 <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
 <p className="text-primary text-sm font-bold uppercase tracking-wider">Google Core Vitals Passed</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Portfolio / Recent Work */}
 <section className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-white/5">
 <div className="container max-w-6xl">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Recent Work</h2>
 <p className="text-zinc-600 dark:text-gray-400">See what we've built for our partners</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {/* Project 1: Pakito's Taqueria */}
 <Link href="https://pakitos-taqueria-demo.surge.sh/" target="_blank" className="group relative block bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
 <div className="aspect-video bg-gray-800 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-700 transition-colors">
 {/* Placeholder styling for project - normally would be an image */}
 <div className="text-center">
 <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
 <TrendingUp className="w-8 h-8" />
 </div>
 <span className="text-gray-500 font-mono text-sm uppercase">Live Demo</span>
 </div>
 {/* Overlay */}
 <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
 <span className="text-zinc-900 dark:text-white font-bold text-lg flex items-center gap-2">
 View Project <ArrowRight className="w-5 h-5" />
 </span>
 </div>
 </div>
 <div className="p-8">
 <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Pakito's Taqueria</h3>
 <p className="text-zinc-600 dark:text-gray-400 mb-4">
 A high-performance restaurant website featuring an interactive menu, location services, and vibrant brand aesthetics.
 </p>
 <div className="flex flex-wrap gap-2">
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">React</span>
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">Tailwind</span>
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">Responsive</span>
 </div>
 </div>
 </Link>

 {/* Project 2: MC Racing Sim */}
 <Link href="https://mcracingsim-fw.surge.sh/" target="_blank" className="group relative block bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
 <div className="aspect-video bg-gray-800 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-700 transition-colors">
 <div className="text-center">
 <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
 <Gamepad2 className="w-8 h-8" />
 </div>
 <span className="text-gray-500 font-mono text-sm uppercase">Live Demo</span>
 </div>
 <div className="absolute inset-0 bg-emerald-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
 <span className="text-zinc-900 dark:text-white font-bold text-lg flex items-center gap-2">
 View Project <ArrowRight className="w-5 h-5" />
 </span>
 </div>
 </div>
 <div className="p-8">
 <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">MC Racing Sim</h3>
 <p className="text-zinc-600 dark:text-gray-400 mb-4">
 Immersive landing page for a high-end racing simulator arcade, featuring booking integrations and dynamic visuals.
 </p>
 <div className="flex flex-wrap gap-2">
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">Gaming</span>
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">UI/UX</span>
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">Animation</span>
 </div>
 </div>
 </Link>

 {/* Project 3: Wildman Tatoopa */}
 <Link href="https://wildmantatoopa.surge.sh/" target="_blank" className="group relative block bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
 <div className="aspect-video bg-gray-800 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-700 transition-colors">
 <div className="text-center">
 <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-500">
 <Palette className="w-8 h-8" />
 </div>
 <span className="text-gray-500 font-mono text-sm uppercase">Live Demo</span>
 </div>
 <div className="absolute inset-0 bg-purple-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
 <span className="text-zinc-900 dark:text-white font-bold text-lg flex items-center gap-2">
 View Project <ArrowRight className="w-5 h-5" />
 </span>
 </div>
 </div>
 <div className="p-8">
 <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors">Wildman Tatoopa</h3>
 <p className="text-zinc-600 dark:text-gray-400 mb-4">
 A bold, artist-focused portfolio site designed to showcase creative work with unique style and attitude.
 </p>
 <div className="flex flex-wrap gap-2">
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">Art/Portfolio</span>
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">Branding</span>
 <span className="px-3 py-1 bg-zinc-100/80 dark:bg-white/5 rounded-full text-xs text-zinc-700 dark:text-gray-300 border border-zinc-200 dark:border-white/10">Gallery</span>
 </div>
 </div>
 </Link>
 </div>
 </div>
 </section>

 {/* Integration Section: Google Form */}
 <section id="start-project" className="py-24 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900 relative">
 <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
 <div className="container max-w-5xl relative z-10">
 <div className="text-center mb-12">
 <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Let's Build Something Great</span>
 <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
 Start Your Project
 </h2>
 <p className="text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto">
 Tell us a bit about what you're looking for, and we'll get back to you with a custom strategy.
 </p>
 </div>

 <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[800px] md:min-h-[1000px]">
 <iframe
 src="https://docs.google.com/forms/d/e/1FAIpQLScRDTfrCVE7Qt1AAFlvBOZGvFMkzeFiXIAJyFMFHlTvBUbS2Q/viewform?embedded=true"
 width="100%"
 height="1200"
 frameBorder="0"
 marginHeight="0"
 marginWidth="0"
 className="w-full h-full min-h-[1200px]"
 title="Client Onboarding Form"
 >
 Loading…
 </iframe>
 </div>
 </div>
 </section>
 </main>
 <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30">
 <div className="container max-w-4xl text-center">
 <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Ready to get started with web design?</h2>
 <p className="text-zinc-600 dark:text-gray-400 text-lg mb-8">Book a free discovery call or pick a plan that fits. Most clients save 10-40+ hours per week.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] text-zinc-900 dark:text-white font-bold rounded-lg transition-all">See Plans &amp; Pricing</Link>
 <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-100/80 dark:bg-white/5 text-zinc-900 dark:text-white font-bold border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:bg-white/10 hover:border-zinc-300 dark:border-white/20 transition-all rounded-lg">Book a Free Call</Link>
 </div>
 </div>
 </section>

 <Footer />
 </>
 );
}
