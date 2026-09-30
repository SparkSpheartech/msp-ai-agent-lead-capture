"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
        <nav className="hidden lg:flex items-center gap-x-6 text-sm font-medium text-zinc-700 dark:text-zinc-300" aria-label="Main navigation">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-lime-600 dark:hover:text-lime-400 transition"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {/* Dropdown Panel */}
            <div className={`absolute top-full left-0 pt-3 transition-all duration-200 pointer-events-none ${servicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
              <div className="w-72 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl pointer-events-auto overflow-hidden">
                <Link href="/services" className="block px-5 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">All Services</Link>
                <Link href="/services/it-audits" className="block px-5 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">Workflow Audit</Link>
                <Link href="/services/ai-automation" className="block px-5 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">AI Agents & Agentic Automation</Link>
                <Link href="/services/web-design" className="block px-5 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">Digital Systems & Portals</Link>
                <Link href="/services/photography-videography" className="block px-5 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">Creative Media</Link>
                <Link href="/services/home-health-care" className="block px-5 py-3 text-zinc-700 dark:text-zinc-300 hover:bg-lime-500/10 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-sm border-b border-zinc-100 dark:border-zinc-800 last:border-b-0">Health Care Services</Link>
              </div>
            </div>
          </div>

          <Link href="/pricing" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Pricing</Link>
          <Link href="/projects" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Projects</Link>
          <Link href="/tools" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Tools</Link>
          <a href="https://blog.sparkspheartechsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Blog</a>
          <Link href="/about" className="hover:text-lime-600 dark:hover:text-lime-400 transition">About</Link>
          <Link href="/support" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Support</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-bold bg-lime-500 text-zinc-950 hover:bg-lime-400 transition shadow-lg shadow-lime-500/20">
            Book a Fit Call
          </Link>
        </div>

        {/* Mobile Nav Icon */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-800 dark:text-white p-2" aria-label="Open menu" aria-expanded={!isMenuOpen}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-5 py-8 text-[15px] shadow-xl" aria-label="Mobile navigation">
          <div className="flex flex-col gap-y-5 text-zinc-800 dark:text-zinc-200">
            <Link href="/services" onClick={closeMenu}>Services</Link>
            <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
            <Link href="/projects" onClick={closeMenu}>Projects</Link>
            <Link href="/tools" onClick={closeMenu}>Tools</Link>
            <a href="https://blog.sparkspheartechsolutions.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Blog</a>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/support" onClick={closeMenu}>Support</Link>

            <div className="flex flex-col gap-3 mt-4">
              <Link href="/contact" onClick={closeMenu} className="px-6 py-3 rounded-lg text-sm font-bold text-center bg-lime-500 text-zinc-950 shadow-lg shadow-lime-500/20">
                Book a Fit Call
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;