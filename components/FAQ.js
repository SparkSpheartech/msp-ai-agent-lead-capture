"use client";
import React from 'react';

const FAQ = () => {
    return (
        <section id="faq" className="section faq animate-on-scroll bg-zinc-950 py-24 border-t border-white/5">
            <div className="container">
                <div className="section-header text-center mb-16">
                    <span className="tag text-lime-400">FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Common Questions</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to know about our IT services.</p>
                </div>

                <div className="faq-list max-w-3xl mx-auto space-y-4">
                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-lime-500/30">
                            <span className="text-white text-lg">What areas do you serve?</span>
                            <span className="text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-content px-6 pb-6 pt-2 text-gray-400 bg-white/5 border-x border-b border-white/5 rounded-b-xl -mt-2">
                            <p>We primarily serve the Greater Fort Wayne area and surrounding communities in Northeast Indiana, providing both on-site and remote support.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-lime-500/30">
                            <span className="text-white text-lg">Do you offer 24/7 support?</span>
                            <span className="text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-content px-6 pb-6 pt-2 text-gray-400 bg-white/5 border-x border-b border-white/5 rounded-b-xl -mt-2">
                            <p>Yes, our Managed IT packages include round-the-clock monitoring and emergency support to ensure your business never stops running.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-lime-500/30">
                            <span className="text-white text-lg">How does your pricing work?</span>
                            <span className="text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-content px-6 pb-6 pt-2 text-gray-400 bg-white/5 border-x border-b border-white/5 rounded-b-xl -mt-2">
                            <p>We offer flexible flat-rate monthly packages for Managed Services, so you have a predictable budget. Project work (like web design) is quoted upfront.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-lime-500/30">
                            <span className="text-white text-lg">Can you help with cybersecurity compliance?</span>
                            <span className="text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-content px-6 pb-6 pt-2 text-gray-400 bg-white/5 border-x border-b border-white/5 rounded-b-xl -mt-2">
                            <p>Absolutely. We help businesses meet industry standards (like HIPAA or PCI-DSS) through rigorous security audits and protocol implementation.</p>
                        </div>
                    </details>

                    <details className="faq-item group">
                        <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5 hover:border-lime-500/30">
                            <span className="text-white text-lg">How fast is your response time?</span>
                            <span className="text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <div className="faq-content px-6 pb-6 pt-2 text-gray-400 bg-white/5 border-x border-b border-white/5 rounded-b-xl -mt-2">
                            <p>For critical issues, our average response time is under 15 minutes. We prioritize keeping your operations moving.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
