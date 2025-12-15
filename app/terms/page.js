import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Terms of Service | SparkSphear Tech Solutions',
    description: 'Terms of Service for SparkSphear Tech Solutions - Review our terms and conditions for using our services.',
};

export default function TermsOfService() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                <section className="pt-32 pb-20">
                    <div className="container max-w-4xl">
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                            Terms of Service
                        </h1>
                        <p className="text-gray-400 mb-8">Last updated: December 2024</p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Agreement to Terms</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    By accessing or using the services provided by SparkSphear Tech Solutions ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Services</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    SparkSphear Tech Solutions provides technology services including but not limited to AI automation, web design and development, digital marketing, photography and videography, and IT infrastructure audits. Specific terms for individual services may be outlined in separate service agreements.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Intellectual Property</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    All content, features, and functionality on our website, including text, graphics, logos, and software, are owned by SparkSphear Tech Solutions and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Client Responsibilities</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    When engaging our services, you agree to:
                                </p>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li>Provide accurate and complete information as requested</li>
                                    <li>Respond to communications in a timely manner</li>
                                    <li>Pay for services as agreed upon in project proposals or contracts</li>
                                    <li>Respect intellectual property rights of delivered work</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Payment Terms</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Payment terms will be specified in individual service agreements or project proposals. Generally, a deposit may be required before work begins, with the balance due upon completion. Late payments may incur additional fees as outlined in your service agreement.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Limitation of Liability</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    To the fullest extent permitted by law, SparkSphear Tech Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee specific results from our services, though we are committed to delivering quality work and will work with you to address any concerns.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Termination</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Either party may terminate services with written notice as specified in individual service agreements. Upon termination, you will be responsible for payment of services rendered up to the termination date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Governing Law</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    These Terms of Service shall be governed by and construed in accordance with the laws of the State of Indiana, without regard to its conflict of law provisions.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Changes to Terms</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes constitutes acceptance of the modified terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    If you have questions about these Terms of Service, please contact us at:
                                </p>
                                <p className="text-gray-400 mt-4">
                                    <strong className="text-white">SparkSphear Tech Solutions</strong><br />
                                    Email: <a href="mailto:SparkSphear4me@gmail.com" className="text-primary hover:text-primary/80">SparkSphear4me@gmail.com</a><br />
                                    Phone: <a href="tel:2602670641" className="text-primary hover:text-primary/80">(260) 267-0641</a><br />
                                    Location: Fort Wayne, IN
                                </p>
                            </section>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
