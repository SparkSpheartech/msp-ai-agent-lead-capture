"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer bg-dark pt-20 pb-10 border-t border-gray-800">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="footer-col md:col-span-1">
                        <Link href="/" className="logo text-2xl font-bold text-white mb-6 inline-block">
                            SPARKSPHEAR
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Your trusted AI and technology partner in the Greater Fort Wayne area. Empowering businesses with smarter AI solutions and real results.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#what-we-do" className="text-gray-400 hover:text-[#a6fd37] transition-colors">What we do</Link></li>
                            <li><Link href="#our-services" className="text-gray-400 hover:text-[#a6fd37] transition-colors">Our Services</Link></li>
                            <li><Link href="#features" className="text-gray-400 hover:text-[#a6fd37] transition-colors">Features</Link></li>
                            {/* Updated Blog Link to External */}
                            <li><a href="https://sparkspheartech.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#a6fd37] transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="tel:2602670641" className="hover:text-[#a6fd37] transition-colors">(260) 267-0641</a></li>
                            <li><a href="mailto:SparkSphear4me@gmail.com" className="hover:text-[#a6fd37] transition-colors">SPARKSPHEAR4me@gmail.com</a></li>
                            <li>Fort Wayne, IN</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="text-white font-bold mb-6">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#a6fd37] hover:text-dark transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#a6fd37] hover:text-dark transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#a6fd37] hover:text-dark transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} SPARKSPHEAR Tech Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
