"use client";

import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Loader2, HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StackQuiz({ defaultVertical = 'hvac' }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState(defaultVertical);
  const [size, setSize] = useState('small');
  const [painPoint, setPainPoint] = useState('dispatch');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      // Push lead to Sequenzy via /api/newsletter
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tags: [`quiz-lead`, `industry-${industry}`, `size-${size}`, `pain-${painPoint}`],
          source: 'StackQuiz Lead Magnet'
        })
      });
    } catch (err) {
      console.error("Quiz submission error:", err);
    } finally {
      setLoading(false);
      // Route to guide page for the selected industry
      router.push(`/guides/${industry}`);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-lime-500/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden my-8">
      <div className="absolute top-0 right-0 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-extrabold uppercase tracking-wider mb-4 border border-lime-500/30">
          <Sparkles className="w-3.5 h-3.5" /> 60-Second Stack Quiz
        </div>

        {step === 1 && (
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Which Software Stack Fits Your Operation?
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Step 1 of 3: Select your industry to filter tested software stacks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                onClick={() => setIndustry('hvac')}
                className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                  industry === 'hvac'
                    ? 'bg-lime-500 text-zinc-950 font-bold border-lime-500'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-lime-500/50'
                }`}
              >
                <span className="text-2xl">🔧</span>
                <div className="text-left">
                  <div className="text-sm font-bold">HVAC & Field Service</div>
                  <div className="text-[10px] opacity-80">Techs, dispatch, quotes</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setIndustry('waste-management')}
                className={`p-4 rounded-xl border flex items-center gap-3 transition-all ${
                  industry === 'waste-management'
                    ? 'bg-lime-500 text-zinc-950 font-bold border-lime-500'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-lime-500/50'
                }`}
              >
                <span className="text-2xl">🗑️</span>
                <div className="text-left">
                  <div className="text-sm font-bold">Waste Management</div>
                  <div className="text-[10px] opacity-80">Haulers, routes, scale house</div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20"
            >
              Next Step &rarr;
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              What is your team's operational size?
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Step 2 of 3: Recommendations change completely based on truck/employee count.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { id: 'solo', label: 'Solo Operator (1 truck)' },
                { id: 'small', label: 'Small Team (2-5 employees)' },
                { id: 'growth', label: 'Growth Stage (5-15 employees)' },
                { id: 'enterprise', label: 'Enterprise (15+ trucks)' }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`p-3.5 rounded-xl border text-xs font-bold transition-all ${
                    size === s.id
                      ? 'bg-lime-500 text-zinc-950 border-lime-500'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-lime-500/50'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3.5 bg-zinc-800 text-zinc-300 font-semibold rounded-xl text-sm"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all text-sm flex items-center justify-center gap-2"
              >
                Next Step &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-white mb-2">
              Where should we send your Stack Recommendation?
            </h3>
            <p className="text-zinc-400 text-xs mb-6">
              Get immediate access to your tailored stack recommendation + 2026 PDF Playbook.
            </p>

            <input
              type="email"
              required
              placeholder="Enter your business email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-lime-500 mb-4 text-sm"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-lime-500 text-zinc-950 font-extrabold rounded-xl hover:bg-lime-400 transition-all text-base flex items-center justify-center gap-2 shadow-xl shadow-lime-500/20 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Unlocking Stack...
                </>
              ) : (
                <>
                  Unlock My Tailored Stack &rarr;
                </>
              )}
            </button>

            <p className="text-[10px] text-zinc-500 mt-3">
              🔒 Zero spam. Unsubscribe at any time. Powered by Sequenzy Email Intelligence.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
