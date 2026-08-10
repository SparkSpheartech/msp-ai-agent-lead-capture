"use client";

import React, { useId, useState } from 'react';
import {
  RiCheckboxCircleFill,
  RiMailSendFill,
} from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa6';
import { Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl opacity-20 pointer-events-none">
      <div className="grid h-full w-full grid-cols-12 grid-rows-6">
        {Array.from({ length: 72 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'border border-zinc-300 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/40 aspect-square transition-colors duration-300',
              index % 7 === 0 && 'bg-lime-500/10 dark:bg-lime-500/10'
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default function Newsletter({
  eyebrow = 'B2B Tech & Automation Insights',
  title = 'Bring The Spark To Your Business',
  description = 'Stop losing revenue to missed calls. Get 15-20 hrs/week back per employee on autopilot.',
  placeholder = 'your@company.com',
  buttonText = 'Join Subscriber List',
  reassurance = 'We respect your privacy. Unsubscribe anytime with 1 click. Zero spam, ever.',
  className,
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
  const [message, setMessage] = useState('');
  const inputId = useId();

  const handleSubmit = async (event) => {
    event.preventDefault();
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
          source: 'Homepage Newsletter5',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setMessage("Welcome aboard! You're now subscribed to SPARKSPHEAR insights.");
      setEmail('');

      setTimeout(() => {
        setStatus('');
        setMessage('');
      }, 6000);
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      className={cn(
        'bg-slate-50 dark:bg-zinc-950 flex items-center justify-center p-4 sm:p-8 py-20 relative overflow-hidden',
        className
      )}
    >
      <div className="relative w-full max-w-5xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden">
        <BackgroundGrid />

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-5 md:items-center">
          <div className="flex max-w-2xl flex-col justify-center gap-6 text-center md:col-span-3 md:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider">
                <RiMailSendFill className="w-4 h-4 text-lime-500" />
                {eyebrow}
              </div>

              <h2 className="text-zinc-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Bring The <span className="text-lime-600 dark:text-lime-400">Spark</span> To Your Business
              </h2>
              
              <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <form
              className="w-full max-w-xl space-y-4 mx-auto md:mx-0"
              onSubmit={handleSubmit}
            >
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  id={inputId}
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={placeholder}
                  required
                  className="w-full h-13 px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-lime-500 text-base shadow-sm"
                />
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto h-13 px-7 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      {buttonText}
                      <FaArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {message && (
                <p className={`font-semibold text-sm flex items-center gap-2 ${status === 'success' ? 'text-lime-600 dark:text-lime-400' : 'text-red-500'}`}>
                  {status === 'success' && <Check className="w-4 h-4" />}
                  {message}
                </p>
              )}

              <p className="text-zinc-500 dark:text-zinc-400 flex items-start gap-2 text-left text-xs leading-relaxed">
                <RiCheckboxCircleFill className="text-lime-500 mt-0.5 h-4 w-4 shrink-0" />
                <span>{reassurance}</span>
              </p>
            </form>
          </div>

          <div className="hidden md:flex md:col-span-2 items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-500 shadow-2xl">
              <RiMailSendFill size={72} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}