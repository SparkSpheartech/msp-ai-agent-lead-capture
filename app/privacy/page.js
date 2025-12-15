import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy Policy | SparkSphear Tech Solutions',
    description: 'Privacy Policy for SparkSphear Tech Solutions - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
                <section className="pt-32 pb-20">
                    <div className="container max-w-4xl">
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 mb-8">Last updated: December 2024</p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Introduction</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    SparkSphear Tech Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Information We Collect</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    We may collect information about you in a variety of ways, including:
                                </p>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, and business information you provide when contacting us or requesting services.</li>
                                    <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                                    <li><strong className="text-white">Device Information:</strong> Browser type, operating system, and IP address for analytics purposes.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">How We Use Your Information</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                                    <li>Provide, operate, and maintain our services</li>
                                    <li>Improve, personalize, and expand our offerings</li>
                                    <li>Communicate with you about inquiries, services, and updates</li>
                                    <li>Process transactions and send related information</li>
                                    <li>Analyze usage to improve our website and services</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Information Sharing</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Data Security</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Your Rights</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by contacting us directly.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    If you have questions about this Privacy Policy or our data practices, please contact us at:
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
