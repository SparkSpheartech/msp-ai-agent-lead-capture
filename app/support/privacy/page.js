"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-zinc-950 relative overflow-hidden">

                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-lime-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
                    <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
                </div>

                {/* Hero Section */}
                <section className="pt-40 pb-12 relative z-10">
                    <div className="container text-center">
                        <span className="text-lime-400 font-mono text-sm tracking-wider uppercase mb-4 block">LEGAL</span>
                        <h1 className="text-white text-5xl md:text-7xl font-bold mb-8">
                            Privacy <span className="text-lime-500">Policy</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                            Your privacy matters to us. Learn how SPARKSPHEAR Tech Solutions collects, uses, and protects your information.
                        </p>
                    </div>
                </section>

                {/* Policy Content */}
                <section className="pb-24 relative z-10">
                    <div className="container max-w-4xl mx-auto">
                        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">

                            <p className="text-gray-400 text-sm">Effective Date: April 4, 2026</p>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">1. Introduction</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    SPARKSPHEAR Tech Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing our website or services, you agree to the terms of this Privacy Policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">2. Information We Collect</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">We may collect the following types of information:</p>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span><strong className="text-white">Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms, submitting support tickets, or contacting us directly.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, browser type, device information, and referring URLs.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span><strong className="text-white">Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar technologies to enhance your experience and gather analytics data.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">We use the information we collect to:</p>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Provide, operate, and maintain our website and services</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Respond to your inquiries, support requests, and communications</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Send newsletters and marketing communications (with your consent)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Improve our website, services, and user experience</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Comply with legal obligations and protect our rights</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">4. Information Sharing</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">We do not sell your personal information. We may share your information only in the following circumstances:</p>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span><strong className="text-white">Service Providers:</strong> With trusted third-party vendors who assist in operating our website and delivering our services, subject to confidentiality obligations.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span><strong className="text-white">Legal Requirements:</strong> When required by law, subpoena, or other legal process, or to protect the safety and rights of our users and the public.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">5. Data Security</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
                                <ul className="space-y-3 text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Access, correct, or delete your personal information</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Opt out of marketing communications at any time</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Disable cookies through your browser settings</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-lime-500 mt-1">&#8226;</span>
                                        <span>Request a copy of the data we hold about you</span>
                                    </li>
                                </ul>
                                <p className="text-gray-400 leading-relaxed mt-4">
                                    To exercise any of these rights, please contact us using the information below.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">7. Third-Party Links</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review their privacy policies before providing any personal information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">8. Children&apos;s Privacy</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete it promptly.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-white text-2xl font-bold mb-4">10. Contact Us</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    If you have any questions or concerns about this Privacy Policy, please contact us:
                                </p>
                                <div className="text-gray-400 space-y-2">
                                    <p><strong className="text-white">SPARKSPHEAR Tech Solutions</strong></p>
                                    <p>Fort Wayne, IN</p>
                                    <p>Email: <a href="mailto:SparkSphear4me@gmail.com" className="text-lime-500 hover:text-lime-400 transition-colors">SparkSphear4me@gmail.com</a></p>
                                    <p>Phone: <a href="tel:2602670641" className="text-lime-500 hover:text-lime-400 transition-colors">(260) 267-0641</a></p>
                                </div>
                            </div>

                        </div>

                        {/* Back to Support Link */}
                        <div className="text-center mt-12">
                            <Link href="/support" className="text-lime-500 hover:text-lime-400 transition-colors font-medium">
                                &larr; Back to Support Center
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
