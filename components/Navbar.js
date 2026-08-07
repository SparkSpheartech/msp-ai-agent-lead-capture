"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
 const handleScroll = () => setScrolled(window.scrollY > 20);
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const closeMenu = () => setIsMenuOpen(false);

 return (
 <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none' : 'bg-white/70 dark:bg-zinc-950/60 backdrop-blur-sm'}`}>
 <div className="container flex justify-between items-center py-3.5">
 <Link href="/" className="logo flex items-center">
 <img src="/logo.png" alt="SPARKSPHEAR" className="h-10 w-auto" />
 </Link>

 {/* Desktop Nav */}
 <div className="hidden lg:flex items-center gap-x-8 text-sm font-medium text-zinc-700 dark:text-zinc-300">
 <Link href="/guides" className="text-lime-600 dark:text-lime-400 font-semibold hover:opacity-80 transition">Industry Guides</Link>
 <Link href="/projects" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Case Studies</Link>
 <Link href="/tools" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Tools</Link>
 <Link href="/about" className="hover:text-lime-600 dark:hover:text-lime-400 transition">About</Link>
 <Link href="/support" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Support</Link>
 </div>

 {/* Desktop CTA */}
 <div className="hidden lg:flex items-center gap-4">
 <ThemeToggle />
 <Link href="/services/it-audits" className="px-5 py-2.5 rounded-lg text-sm font-bold bg-lime-500 text-zinc-950 hover:bg-lime-400 transition shadow-lg shadow-lime-500/20">
 Get a System Audit
 </Link>
 </div>

 {/* Mobile Nav Icon */}
 <div className="lg:hidden flex items-center gap-3">
 <ThemeToggle />
 <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-800 dark:text-white p-2" aria-label="Menu">
 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>

 {/* Mobile Menu */}
 {isMenuOpen && (
 <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-5 py-8 text-[15px] shadow-xl">
 <nav className="flex flex-col gap-y-5 text-zinc-800 dark:text-zinc-200">
 <Link href="/guides" onClick={closeMenu} className="text-lime-600 dark:text-lime-400 font-semibold">Industry Guides</Link>
 <Link href="/projects" onClick={closeMenu}>Case Studies</Link>
 <Link href="/tools" onClick={closeMenu}>Tools</Link>
 <Link href="/about" onClick={closeMenu}>About</Link>
 <Link href="/support" onClick={closeMenu}>Support</Link>

 <Link href="/services/it-audits" onClick={closeMenu} className="px-6 py-3 rounded-lg text-sm font-bold text-center bg-lime-500 text-zinc-950 mt-4 shadow-lg shadow-lime-500/20">
 Get a System Audit
 </Link>
 </nav>
 </div>
 )}
 </header>
 );
};

export default Navbar;