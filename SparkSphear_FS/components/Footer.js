"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-col">
                        <Link href="#" className="logo">
                            SparkSphearTechSolutions
                        </Link>
                        <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.7)' }}>
                            Your trusted AI Services partner in the Greater Fort Wayne area.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="#what-we-do">What we do</Link></li>
                            <li><Link href="#our-services">Our Services</Link></li>
                            <li><Link href="#features">Features</Link></li>
                            <li><Link href="#contact-us">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link href="#faq">FAQ</Link></li>
                            <li><Link href="#">Terms of Use</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <div className="social-links">
                            {/* Social Icons would go here */}
                        </div>
                        <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.7)' }}>
                            (260) 267-0641
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                            SparkSphear4me@gmail.com
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} SparkSphearTechSolutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
