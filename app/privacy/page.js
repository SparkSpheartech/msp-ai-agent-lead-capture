"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-950">
                <section className="pt-32 pb-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 mb-6">
                                <span className="text-lime-400 text-sm font-semibold tracking-wider">LEGAL</span>
                            </span>
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                                Privacy <span className="text-lime-500">Policy</span>
                            </h1>
                            <p className="text-gray-400 text-lg">
                                Last updated: April 4, 2026
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-none space-y-10">
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Introduction</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    SPARKSPHEAR Tech Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By using our website, you consent to the practices described herein.
                                </p>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Information We Collect</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">We may collect the following types of information:</p>
                                <h3 className="text-white text-lg font-semibold mb-2">Personal Information</h3>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside mb-4">
                                    <li>Name, email address, phone number, and company name when you fill out a contact form or request a consultation</li>
                                    <li>Billing and payment details when you purchase our services</li>
                                    <li>Any other information you voluntarily provide through our website or in direct communications</li>
                                </ul>
                                <h3 className="text-white text-lg font-semibold mb-2">Automatically Collected Information</h3>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li>IP address, browser type, operating system, and device information</li>
                                    <li>Pages visited, time spent on pages, and referring URLs</li>
                                    <li>Cookies and similar tracking technologies (see Cookies section below)</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">How We Use Your Information</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">We use the information we collect to:</p>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Respond to your inquiries and fulfill your requests</li>
                                    <li>Send you newsletters, marketing communications, and service updates (with your consent)</li>
                                    <li>Analyze website usage to improve user experience</li>
                                    <li>Protect against fraud and unauthorized access</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Our website may use cookies and similar technologies to enhance your browsing experience. Cookies are small data files stored on your device. We use:
                                </p>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li><span className="text-white font-medium">Essential cookies:</span> Required for the website to function properly</li>
                                    <li><span className="text-white font-medium">Analytics cookies:</span> Help us understand how visitors interact with our website</li>
                                    <li><span className="text-white font-medium">Marketing cookies:</span> Used to deliver relevant advertisements and track campaign performance</li>
                                </ul>
                                <p className="text-gray-400 leading-relaxed mt-4">
                                    You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
                                </p>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    We do not sell your personal information. We may share your information with:
                                </p>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li><span className="text-white font-medium">Service providers:</span> Trusted third parties who assist us in operating our website and conducting business (e.g., hosting, analytics, payment processing)</li>
                                    <li><span className="text-white font-medium">Legal requirements:</span> When required by law, regulation, or legal process</li>
                                    <li><span className="text-white font-medium">Business transfers:</span> In connection with a merger, acquisition, or sale of assets</li>
                                </ul>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Data Security</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
                                </p>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Your Rights</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li>Access, correct, or delete your personal information</li>
                                    <li>Opt out of marketing communications at any time</li>
                                    <li>Request a copy of the data we hold about you</li>
                                    <li>Withdraw consent where processing is based on consent</li>
                                </ul>
                                <p className="text-gray-400 leading-relaxed mt-4">
                                    To exercise any of these rights, please contact us using the information below.
                                </p>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Third-Party Links</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any external sites you visit.
                                </p>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us so we can promptly delete it.
                                </p>
                            </div>

                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Changes to This Policy</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically to stay informed about how we protect your information.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-lime-500/10 to-lime-500/5 border-2 border-lime-500/30 rounded-2xl p-8">
                                <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <ul className="text-gray-400 space-y-2">
                                    <li><span className="text-white font-medium">Company:</span> SPARKSPHEAR Tech Solutions</li>
                                    <li><span className="text-white font-medium">Location:</span> Fort Wayne, IN</li>
                                    <li><span className="text-white font-medium">Phone:</span> <a href="tel:2602670641" className="text-lime-400 hover:underline">(260) 267-0641</a></li>
                                    <li><span className="text-white font-medium">Email:</span> <a href="mailto:SparkSphear4me@gmail.com" className="text-lime-400 hover:underline">SPARKSPHEAR4me@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
