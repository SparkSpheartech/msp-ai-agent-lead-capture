"use client";

import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function OpsQuizSurvey() {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const problems = [
    {
      id: 'dispatch',
      icon: '🚨',
      title: 'Dispatch & Route Chaos',
      description: 'Missed calls, double-booked techs, inefficient driving routes.',
      recommendedTool: 'ServiceTitan / AMCS Platform',
      solutionText: 'AI Smart Dispatching automatically calculates fastest routes and assigns job orders.',
      guideSlug: 'hvac'
    },
    {
      id: 'invoicing',
      icon: '💸',
      title: 'Delayed Invoicing & Slow Cash',
      description: 'Paper receipts get lost in truck cabs, payments take weeks to collect.',
      recommendedTool: 'Jobber / Curb Waste',
      solutionText: 'Automated batch invoicing + client portal collects credit cards on-site instantly.',
      guideSlug: 'hvac'
    },
    {
      id: 'reviews',
      icon: '⭐',
      title: 'Zero Google Reviews / Weak Marketing',
      description: 'Competitors with worse service get all the leads because of 200+ reviews.',
      recommendedTool: 'Housecall Pro',
      solutionText: 'Automated SMS review requests sent immediately when job status marks completed.',
      guideSlug: 'hvac'
    },
    {
      id: 'agreements',
      icon: '📜',
      title: 'Losing Track of Service Contracts',
      description: 'Forgetting annual tune-ups, contract renewals, or recurring customer billing.',
      recommendedTool: 'FieldEdge / Trash Flow',
      solutionText: 'Automated service agreement renewals and recurring customer billing.',
      guideSlug: 'waste-management'
    }
  ];

  return (
    <section className="w-full my-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-xl">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" /> Operations Survey
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white mb-3">
          What Is Your #1 Operations Problem Right Now?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
          Select your biggest headache below to see the exact software feature that fixes it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
        {problems.map((p) => {
          const isSelected = selectedProblem?.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedProblem(p)}
              className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-lime-500/10 border-lime-500 ring-2 ring-lime-500/30'
                  : 'bg-slate-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 hover:border-lime-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{p.icon}</span>
                  {isSelected && <Check className="w-5 h-5 text-lime-600 dark:text-lime-400" />}
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                  {p.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedProblem && (
        <div className="bg-gradient-to-r from-zinc-900 to-black p-6 rounded-2xl border border-lime-500/40 max-w-2xl mx-auto text-left animate-in fade-in duration-300">
          <div className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-2">
            Suggested Solution & Tool
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            Use {selectedProblem.recommendedTool}
          </h4>
          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed mb-4">
            {selectedProblem.solutionText}
          </p>
          <Link
            href={`/guides/${selectedProblem.guideSlug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-lime-400 hover:underline"
          >
            See Full {selectedProblem.recommendedTool} Comparison in Guide <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </section>
  );
}
