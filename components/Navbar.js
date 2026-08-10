"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, UserCheck } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SignInModal from './SignInModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Check if user is signed in
    const storedEmail = localStorage.getItem("sparksphear_user_email");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSignInSuccess = (email) => {
    setUserEmail(email);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none' : 'bg-white/70 dark:bg-zinc-950/60 backdrop-blur-sm'}`}>
        <div className="container flex justify-between items-center py-3.5">
          <Link href="/" className="logo flex items-center">
            <img src="/logo.png" alt="SPARKSPHEAR" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-x-8 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <Link href="/services" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Services</Link>
            <Link href="/projects" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Projects</Link>
            <Link href="/tools" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Tools</Link>
            <a href="https://blog.sparkspheartechsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Blog</a>
            <Link href="/about" className="hover:text-lime-600 dark:hover:text-lime-400 transition">About</Link>
            <Link href="/support" className="hover:text-lime-600 dark:hover:text-lime-400 transition">Support</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            {userEmail ? (
              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-lime-500/30 text-lime-600 dark:text-lime-400 bg-lime-500/10 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-lime-500" /> Signed In
              </span>
            ) : (
              <button
                onClick={() => setIsSignInModalOpen(true)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition cursor-pointer"
              >
                Sign In
              </button>
            )}
            <Link href="/contact" className="px-5 py-2.5 rounded-lg text-sm font-bold bg-lime-500 text-zinc-950 hover:bg-lime-400 transition shadow-lg shadow-lime-500/20">
              Book a Fit Call
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
              <Link href="/services" onClick={closeMenu}>Services</Link>
              <Link href="/projects" onClick={closeMenu}>Projects</Link>
              <Link href="/tools" onClick={closeMenu}>Tools</Link>
              <a href="https://blog.sparkspheartechsolutions.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Blog</a>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <Link href="/support" onClick={closeMenu}>Support</Link>

              <div className="flex flex-col gap-3 mt-4">
                {!userEmail && (
                  <button
                    onClick={() => {
                      closeMenu();
                      setIsSignInModalOpen(true);
                    }}
                    className="px-6 py-3 rounded-lg text-sm font-semibold text-center border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 cursor-pointer"
                  >
                    Sign In
                  </button>
                )}
                <Link href="/contact" onClick={closeMenu} className="px-6 py-3 rounded-lg text-sm font-bold text-center bg-lime-500 text-zinc-950 shadow-lg shadow-lime-500/20">
                  Book a Fit Call
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Passwordless Sign In Modal */}
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        onSuccess={handleSignInSuccess}
      />
    </>
  );
};

export default Navbar;