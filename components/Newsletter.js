"use client";

import React, { useState } from 'react';
import { Send, Check, Loader2, Sparkles } from 'lucide-react';

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
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'Homepage Footer Newsletter'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setMessage("Welcome aboard! You're now connected to SPARKSPHEAR's automation & growth insights.");
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
    <section className="newsletter-section py-24 bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 dark:from-zinc-900/50 via-white dark:via-zinc-950 to-white dark:to-zinc-950 -z-10" />
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> B2B Tech & Automation Insights
          </span>
          <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Bring The <span className="text-lime-600 dark:text-lime-500">Spark</span> To Your Business
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Stop losing revenue to missed calls. Get 15-20 hrs/week back per employee on autopilot.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@company.com"
              required
              className="flex-1 px-6 py-4 bg-slate-50 dark:bg-zinc-900 border-2 border-gray-300 dark:border-zinc-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-lime-500 focus:outline-none transition-colors w-full sm:w-auto shadow-sm"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime-500 text-zinc-950 font-bold hover:bg-lime-400 transition-all duration-300 rounded-xl disabled:opacity-50 w-full sm:w-auto shadow-lg shadow-lime-500/20 whitespace-nowrap"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  Join Subscriber List
                  <Send size={18} />
                </>
              )}
            </button>
          </div>

          {message && (
            <p className={`mt-4 font-semibold text-sm ${status === 'success' ? 'text-lime-600 dark:text-lime-400' : 'text-red-500'}`}>
              {status === 'success' ? <Check className="inline w-4 h-4 mr-2" /> : null}
              {message}
            </p>
          )}
        </form>

        <p className="text-gray-500 dark:text-gray-500 text-xs mt-6">
          We respect your privacy. Unsubscribe anytime with 1 click. Zero spam, ever.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;