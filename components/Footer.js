"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
 return (
 <footer className="bg-slate-100 dark:bg-zinc-950 pt-20 pb-10 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
 <div className="container max-w-6xl mx-auto px-4">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
 <div className="md:col-span-1">
 <Link href="/" className="logo text-2xl font-bold text-zinc-900 dark:text-white mb-6 inline-block">
 SPARKSPHEAR
 </Link>
 <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
 Controlled AI agents for repetitive business workflows. Audit the system. Scale the business.
 </p>
 </div>

 <div>
 <h4 className="text-zinc-900 dark:text-white font-bold mb-6">Services</h4>
 <ul className="space-y-4">
 <li><Link href="/services" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">All Services</Link></li>
 <li><Link href="/pricing" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">Pricing</Link></li>
 <li><Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">Projects</Link></li>
 <li><Link href="/tools" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">Tools</Link></li>
 </ul>
 </div>

 <div>
 <h4 className="text-zinc-900 dark:text-white font-bold mb-6">Resources</h4>
 <ul className="space-y-4">
 <li><Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">About</Link></li>
 <li><a href="https://blog.sparkspheartechsolutions.com" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">Blog</a></li>
 <li><Link href="/markets" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">Industry Briefs</Link></li>
 <li><Link href="/support" className="text-zinc-600 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm">Support</Link></li>
 </ul>
 </div>

 <div>
 <h4 className="text-zinc-900 dark:text-white font-bold mb-6">Contact</h4>
 <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm">
 <li><a href="tel:2602670641" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">(260) 267-0641</a></li>
 <li><a href="mailto:contact@sparkspheartechsolutions.com" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">contact@sparkspheartechsolutions.com</a></li>
 </ul>
 <div className="flex gap-4 mt-6">
 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-white hover:bg-lime-500 hover:text-zinc-950 transition-all">
 <Linkedin size={18} />
 </a>
 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-white hover:bg-lime-500 hover:text-zinc-950 transition-all">
 <Facebook size={18} />
 </a>
 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-white hover:bg-lime-500 hover:text-zinc-950 transition-all">
 <Instagram size={18} />
 </a>
 <a href="https://www.youtube.com/@SparkSphearVisionaries" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-white hover:bg-lime-500 hover:text-zinc-950 transition-all">
 <Youtube size={18} />
 </a>
 </div>
 </div>
 </div>

 <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
 <p className="text-zinc-500 dark:text-zinc-500 text-sm">
 &copy; {new Date().getFullYear()} SPARKSPHEAR Tech Solutions. All rights reserved.
 </p>
 <div className="flex gap-6">
 <Link href="/privacy" className="text-zinc-500 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 text-sm">Privacy Policy</Link>
 <Link href="/affiliate-disclosure" className="text-zinc-500 dark:text-zinc-400 hover:text-lime-600 dark:hover:text-lime-400 text-sm">Affiliate Disclosure</Link>
 </div>
 </div>
 </div>
 </footer>
 );
};

export default Footer;