"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuButtonRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        const focusableSelector = [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ].join(', ');

        const menuElement = mobileMenuRef.current;
        const focusableElements = menuElement
            ? Array.from(menuElement.querySelectorAll(focusableSelector))
            : [];
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (firstFocusable) {
            firstFocusable.focus();
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeMenu();
                menuButtonRef.current?.focus();
                return;
            }

            if (event.key !== 'Tab' || focusableElements.length === 0) {
                return;
            }

            if (event.shiftKey && document.activeElement === firstFocusable) {
                event.preventDefault();
                lastFocusable.focus();
            } else if (!event.shiftKey && document.activeElement === lastFocusable) {
                event.preventDefault();
                firstFocusable.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-black/80 backdrop-blur-md border-b border-primary/20 shadow-lg shadow-primary/10'
                : 'bg-transparent'
                }`}
        >
            <div className="container flex justify-between items-center py-4">
                <Link href="/" className="logo flex items-center gap-2 transition-transform hover:scale-105" aria-label="Go to homepage">
                    <img src="/logo.png" alt="SPARKSPHEAR Logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex gap-8" aria-label="Primary navigation">
                        <Link href="/#what-we-do" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium">Services</Link>
                        <Link href="/#process" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium">Process</Link>
                        <Link href="/about" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium">About</Link>
                        <a href="https://sparkspheartechsolutions.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium">Blog</a>
                        <Link href="/support" className="text-gray-300 hover:text-primary transition-all duration-300 font-medium">Support</Link>
                    </nav>
                    <Link
                        href="/#book-meeting"
                        className="px-6 py-3 bg-primary text-black font-bold rounded-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                    >
                        Get Started →
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    ref={menuButtonRef}
                    className="lg:hidden text-white p-2 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation-menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div ref={mobileMenuRef} className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-primary/20 shadow-xl z-50 animate-fadeIn">
                        <nav id="mobile-navigation-menu" className="flex flex-col p-6 gap-4" aria-label="Mobile navigation">
                            <Link href="/#what-we-do" onClick={closeMenu} className="text-gray-300 hover:text-primary transition-colors py-3 block border-b border-gray-800">
                                Services
                            </Link>
                            <Link href="/#process" onClick={closeMenu} className="text-gray-300 hover:text-primary transition-colors py-3 block border-b border-gray-800">
                                Process
                            </Link>
                            <Link href="/about" onClick={closeMenu} className="text-gray-300 hover:text-primary transition-colors py-3 block border-b border-gray-800">
                                About
                            </Link>
                            <a href="https://sparkspheartechsolutions.blogspot.com/" onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors py-3 block border-b border-gray-800">
                                Blog
                            </a>
                            <Link href="/support" onClick={closeMenu} className="text-gray-300 hover:text-primary transition-colors py-3 block border-b border-gray-800">
                                Support
                            </Link>
                            <Link href="/#book-meeting" onClick={closeMenu} className="px-6 py-3 bg-primary text-black font-bold rounded-md hover:bg-primary/90 transition-all duration-300 mt-4 block text-center">
                                Get Started →
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
