"use client";
import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
    return (
        <section id="contact-us" className="section cta-final animate-on-scroll">
            <div className="container">
                <h2>Ready to scale your vision? Drop us a line</h2>
                <Link href="mailto:contact@sparkspheartechsolutions.com" className="btn btn-primary" style={{ marginTop: '20px' }}>
                    Contact Us
                </Link>
                <p style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: '500' }}>
                    Or call us at: (260) 267-0641
                </p>
            </div>
        </section>
    );
};

export default CallToAction;
