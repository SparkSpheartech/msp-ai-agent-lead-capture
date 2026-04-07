"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('subscribing');

        // Simulate subscription (replace with actual API call)
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    return (
        <section className="newsletter-section py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            {/* Background Gradient similar to Hero */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950 -z-10" />
            <div className="container max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                        Stay <span className="text-primary">Connected</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Get tech tips, industry insights, and exclusive SPARKSPHEAR news delivered to your inbox
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <label htmlFor="newsletter-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 px-6 py-4 bg-dark-1 border-2 border-dark-2 rounded-md text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors w-full sm:w-auto"
                        />
                        <button
                            type="submit"
                            disabled={status === 'subscribing'}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-dark font-bold hover:bg-primary/90 transition-all duration-300 rounded-md disabled:opacity-50 w-full sm:w-auto"
                        >
                            {status === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
                            <Send size={18} />
                        </button>
                    </div>

                    {status === 'success' && (
                        <p className="mt-4 text-primary font-semibold">
                            ✓ Thanks for subscribing! Check your inbox.
                        </p>
                    )}
                </form>

                <p className="text-gray-500 text-sm mt-6">
                    We respect your privacy. Unsubscribe anytime. No spam, ever.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
