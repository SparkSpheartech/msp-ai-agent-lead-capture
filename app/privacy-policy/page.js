"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-950 pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                        Privacy Policy
                    </h1>
                    
                    <div className="prose prose-invert prose-lime max-w-none text-gray-300 space-y-6">
                        <p className="text-sm text-gray-400">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                            <p>
                                At SPARKSPHEAR Tech Solutions ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our IT and digital marketing services.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
                            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>
                                    <strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you contact us, register for our services, or schedule a consultation.
                                </li>
                                <li>
                                    <strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
                                </li>
                                <li>
                                    <strong className="text-white">Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.
                                </li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Your Information</h2>
                            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site or our services to:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Create and manage your account.</li>
                                <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the site to you.</li>
                                <li>Email you regarding your account or order.</li>
                                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the site and our services.</li>
                                <li>Provide IT support and troubleshoot issues.</li>
                                <li>Increase the efficiency and operation of the site.</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Disclosure of Your Information</h2>
                            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>
                                    <strong className="text-white">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                                </li>
                                <li>
                                    <strong className="text-white">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                                </li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
                            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                            <div className="mt-4 bg-zinc-900/50 p-6 rounded-lg border border-white/10">
                                <p className="font-semibold text-white mb-2">SPARKSPHEAR Tech Solutions</p>
                                <p>Fort Wayne, IN</p>
                                <p>Email: <a href="mailto:SparkSphear4me@gmail.com" className="text-lime-500 hover:text-lime-400">SparkSphear4me@gmail.com</a></p>
                                <p>Phone: (260) 267-0641</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
