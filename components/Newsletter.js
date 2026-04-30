"use client";
import React, { useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) return;
        
        setStatus('loading');
        setMessage('');

        try {
            // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
            // See instructions below to create it
            const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
            
            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `email=${encodeURIComponent(email)}`
            });

            setStatus('success');
            setMessage('Thanks for subscribing! You\'re now connected.');
            setEmail('');
            
            setTimeout(() => {
                setStatus('');
                setMessage('');
            }, 5000);
            
        } catch (error) {
            console.error('Subscription error:', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="newsletter-section py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            {/* Background Gradient similar to Hero */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950 -z-10" />
            <div className="container max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                        Stay <span className="text-lime-500">Connected</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Get tech tips, industry insights, and exclusive SPARKSPHEAR news delivered to your inbox
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 px-6 py-4 bg-zinc-900 border-2 border-zinc-800 rounded-md text-white placeholder-gray-500 focus:border-lime-500 focus:outline-none transition-colors w-full sm:w-auto"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-lime-500 text-zinc-950 font-bold hover:bg-lime-400 transition-all duration-300 rounded-md disabled:opacity-50 w-full sm:w-auto"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Subscribing...
                                </>
                            ) : (
                                <>
                                    Subscribe
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </div>

                    {message && (
                        <p className={`mt-4 font-semibold ${status === 'success' ? 'text-lime-500' : 'text-red-500'}`}>
                            {status === 'success' ? <Check className="inline w-4 h-4 mr-2" /> : null}
                            {message}
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