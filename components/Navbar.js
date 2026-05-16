"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    const phone = "(260) 267-0641";
    const phoneRaw = "2602670641";
    const email = "contact@sparkspheartechsolutions.com";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-primary/20' : 'bg-black/60'}`}>
            <div className="container flex justify-between items-center py-3.5">
                <Link href="/" className="logo flex items-center">
                    <img src="/logo.png" alt="SPARKSPHEAR" className="h-11 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-x-9 text-sm font-medium">
                    <Link href="/#what-we-do" className="hover:text-primary transition">Services</Link>
                    <Link href="/process" className="hover:text-primary transition">Process</Link>
                    <Link href="/pricing" className="hover:text-primary transition">Pricing</Link>
                    <Link href="/about" className="hover:text-primary transition">About</Link>
                    <Link href="/support" className="hover:text-primary transition">Support</Link>
                    <a href="https://sparkspheartech.blogspot.com/" target="_blank" rel="noopener" className="hover:text-primary transition">Blog</a>
                </div>

                {/* Desktop CTA + Phone */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href={`tel:${phoneRaw}`} className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-primary transition">
                        <Phone size={16} /> {phone}
                    </a>
                    <Link href="/contact" className="btn-primary px-6 py-2.5 rounded-lg text-sm font-bold bg-primary text-black hover:bg-primary/90 transition">
                        Book 15-min Call
                    </Link>
                </div>

                {/* Mobile Nav Icon */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2" aria-label="Menu">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black/98 border-t border-gray-800 px-5 py-8 text-[15px]">
                    <nav className="flex flex-col gap-y-5 text-gray-200">
                        <Link href="/#what-we-do" onClick={closeMenu}>Services</Link>
                        <Link href="/process" onClick={closeMenu}>Process</Link>
                        <Link href="/pricing" onClick={closeMenu}>Pricing</Link>
                        <Link href="/about" onClick={closeMenu}>About</Link>
                        <Link href="/support" onClick={closeMenu}>Support</Link>
                        <a href="https://sparkspheartech.blogspot.com/" onClick={closeMenu} target="_blank">Blog</a>

                        <div className="pt-4 border-t border-gray-800 space-y-4">
                            <a href={`tel:${phoneRaw}`} className="flex items-center gap-2 font-medium text-primary">📞 {phone}</a>
                            <Link href="/contact" onClick={closeMenu} className="btn-primary block text-center py-3 bg-primary text-black rounded-lg font-bold">
                                Book 15-min Call
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
