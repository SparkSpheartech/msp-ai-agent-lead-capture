"use client";
import React from 'react';
import Link from 'next/link';
import { PhoneCall, RefreshCw, Bot, ShieldCheck, ArrowRight, FileText, BarChart3 } from 'lucide-react';

const agentExamples = [
  { icon: <PhoneCall />, title: 'Missed-call & inquiry handling', text: 'Respond to missed calls and inquiries with approved next steps. Route bookings, capture leads, and escalate exceptions.' },
  { icon: <Bot />, title: 'Chatbots & customer intake', text: 'Handle approved FAQs, collect inquiry details, and route customers to the right workflow or contact path.' },
  { icon: <RefreshCw />, title: 'Follow-up & retention', text: 'Flag overdue clients using service-specific return windows. Prepare owner-approved rebooking and re-engagement messages.' },
  { icon: <FileText />, title: 'Document & data processing', text: 'Extract, validate, and route data from forms, inspections, tickets, and intake documents.' },
  { icon: <BarChart3 />, title: 'Reporting & exception management', text: 'Generate operations summaries, flag exceptions, and surface the work that needs human attention.' },
  { icon: <ShieldCheck />, title: 'Human approval controls', text: 'Sensitive actions stay behind permissions, escalation rules, and human review points.' },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lime-600 dark:text-lime-400 font-mono text-xs font-bold tracking-widest uppercase mb-3 block">
            CROSS-VERTICAL AGENT EXAMPLES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Agents Built for the Work Behind the Business
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            Barbershops, HVAC teams, waste operators, auto-repair shops, childcare providers, and restaurants can start with one workflow and expand only when the system proves useful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {agentExamples.map((example, index) => (
            <div key={index} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-lime-500/30 transition-all">
              <div className="w-11 h-11 bg-lime-500/10 rounded-xl flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4">
                {React.cloneElement(example.icon, { className: 'w-5 h-5' })}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{example.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{example.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services/ai-automation" className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold hover:underline">
            Explore All Agent Capabilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
