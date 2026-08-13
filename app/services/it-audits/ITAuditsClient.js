"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Shield, CheckCircle, ArrowRight, Eye,
  Activity, Check, FileSpreadsheet, Loader2, Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const auditQuestions = [
  {
    id: 'size',
    title: 'How large is your current operation?',
    subtitle: 'This helps us gauge the scale of infrastructure and potential tool sprawl.',
    options: [
      { label: 'Founding Team (1–4 Employees)', icon: '🚀', desc: 'Focus on speed & low-cost tech stack' },
      { label: 'Growth Stage (5–15 Employees)', icon: '📈', desc: 'Experiencing bottlenecking in daily admin' },
      { label: 'Scaling Operation (16–50 Employees)', icon: '🏢', desc: 'Need strict system integrations' },
      { label: 'Enterprise (50+ Employees)', icon: '🌐', desc: 'Require custom architecture and workflows' }
    ]
  },
  {
    id: 'bottleneck',
    title: 'What is your biggest operational bottleneck right now?',
    subtitle: 'Identify where your team loses the most hours every single week.',
    options: [
      { label: 'Manual Lead Intake & Slow Follow-ups', icon: '⚡', desc: 'Losing prospective clients to faster competitors' },
      { label: 'Disconnected Tools & Manual Data Entry', icon: '🔄', desc: 'Copy-pasting data between CRM, sheets & email' },
      { label: 'Customer Support & Missed Phone Calls', icon: '📞', desc: 'Staff overwhelmed answering repetitive questions' },
      { label: 'Slow Client Onboarding & Signature Process', icon: '📝', desc: 'Contracts and intake taking days to complete' }
    ]
  },
  {
    id: 'stack',
    title: 'What best describes your current software tech stack?',
    subtitle: 'We evaluate tool sprawl to eliminate redundant subscriptions.',
    options: [
      { label: 'Basic (Email, Spreadsheets & Texting)', icon: '📄', desc: 'No central CRM or automated workflows yet' },
      { label: 'Fragmented SaaS (5+ Unconnected Subscriptions)', icon: '🧩', desc: 'Paying for software that doesn\'t talk to each other' },
      { label: 'Legacy On-Premise / Old Systems', icon: '🖥️', desc: 'Outdated databases needing modern cloud/AI bridge' },
      { label: 'Custom Enterprise / API-Heavy Stack', icon: '⚙️', desc: 'Need advanced AI agent integration' }
    ]
  },
  {
    id: 'website_role',
    title: 'What primary role does your website currently play?',
    subtitle: 'We evaluate whether your site is actively generating revenue or just a digital brochure.',
    options: [
      { label: 'Digital Brochure (Passive Info Only)', icon: '🌐', desc: 'Rarely generates direct qualified leads' },
      { label: 'Lead Generation Engine (Active Forms)', icon: '🎯', desc: 'Generates inquiries but lacks automated routing' },
      { label: 'E-Commerce / Self-Serve Booking', icon: '💳', desc: 'Processes transactions directly' },
      { label: 'Need a Complete Redesign & AI Overhaul', icon: '✨', desc: 'Want a high-converting, modern web application' }
    ]
  }
];

export default function ITAuditsClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleOptionSelect = (questionId, optionLabel) => {
    const updatedAnswers = { ...answers, [questionId]: optionLabel };
    setAnswers(updatedAnswers);
    if (step < auditQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(auditQuestions.length);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      source: 'workflow-audit-diagnostic',
      contact: formData,
      diagnostics: answers,
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error("Webhook failed to send, but proceeding to result.", error);
    }

    setIsSubmitting(false);
    setIsComplete(true);
  };

  const resetAudit = () => {
    setStep(0);
    setAnswers({});
    setFormData({ name: '', email: '', phone: '', company: '' });
    setIsComplete(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
          <div className="container relative z-10 max-w-6xl mx-auto px-4">
            <Link href="/services" className="inline-flex items-center text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white mb-8 transition-colors text-sm font-mono tracking-wider uppercase">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              BACK TO SERVICES
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <Shield className="w-4 h-4" /> Workflow Audit
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                  Audit the System <br />
                  <span className="text-lime-600 dark:text-lime-500">Before You Automate It.</span>
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-xl mb-8 leading-relaxed">
                  We map your operational workflow, review existing tools, identify bottlenecks, and determine the right first implementation — before selling a package.
                </p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-lime-600 dark:text-lime-400" /> Workflow Mapping
                  </div>
                  <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-lime-600 dark:text-lime-400" /> Bottleneck Analysis
                  </div>
                  <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <CheckCircle className="w-4 h-4 text-lime-600 dark:text-lime-400" /> Agent Suitability
                  </div>
                </div>
              </motion.div>

              {/* Discovery Engine Box */}
              <motion.div id="start-audit" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 blur-3xl rounded-full pointer-events-none" />

                {!isComplete ? (
                  step < auditQuestions.length ? (
                    <div>
                      <div className="flex justify-between items-center mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                        <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-widest">
                          STEP 0{step + 1} OF 0{auditQuestions.length}
                        </span>
                        <div className="flex gap-1.5">
                          {auditQuestions.map((_, idx) => (
                            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === step ? 'w-6 bg-lime-500' : 'w-2 bg-zinc-200 dark:bg-zinc-800'}`} />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                        {auditQuestions[step].title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-6">
                        {auditQuestions[step].subtitle}
                      </p>

                      <div className="space-y-3">
                        {auditQuestions[step].options.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionSelect(auditQuestions[step].id, opt.label)}
                            className="w-full text-left p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-lime-500 transition-all flex items-start gap-3 group"
                          >
                            <span className="text-xl">{opt.icon}</span>
                            <div>
                              <div className="font-bold text-zinc-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors text-sm">
                                {opt.label}
                              </div>
                              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                                {opt.desc}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-center mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500/10 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase mb-2">
                          <CheckCircle className="w-3.5 h-3.5" /> Diagnostic Complete
                        </span>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                          Request Your Workflow Audit
                        </h3>
                        <p className="text-zinc-500 text-xs mt-2">
                          We will review your diagnostic answers and follow up with next steps.
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <input type="text" placeholder="Your Full Name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500" />
                        <input type="email" placeholder="Work Email Address" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500" />
                        <input type="text" placeholder="Company Name" required value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500" />
                        <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-bold rounded-xl transition-all shadow-lg shadow-lime-500/20 flex items-center justify-center gap-2 text-sm">
                          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit Audit Request'}
                        </button>
                      </form>
                    </div>
                  )
                ) : (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-lime-500/10 rounded-full mb-4 border border-lime-500/30">
                      <CheckCircle className="w-8 h-8 text-lime-600 dark:text-lime-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Audit Request Received</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                      We will review your answers and reach out with next steps. Want to schedule a Fit Call?
                    </p>

                    <Link
                      href="/contact"
                      className="w-full py-4 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-bold rounded-xl transition-all shadow-lg shadow-lime-500/20 flex items-center justify-center gap-2 text-sm mb-4"
                    >
                      <Calendar className="w-4 h-4" /> Book a Fit Call &rarr;
                    </Link>

                    <button onClick={resetAudit} className="px-6 py-2 bg-slate-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-xs rounded-xl hover:bg-slate-200 dark:hover:bg-zinc-700">
                      Submit Another Diagnostic
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Audit Details */}
        <section className="py-20 bg-slate-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-2 block">WHAT THE AUDIT COVERS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                Workflow Audit <span className="text-lime-600 dark:text-lime-500">Starting at $297</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">
                We do not start by selling the biggest package. We start by auditing the workflow and identifying the smallest useful agent.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                'Current workflow map',
                'Bottleneck analysis',
                'Existing-tool review',
                'Data and access requirements',
                'Agent suitability assessment',
                'Three prioritized automation opportunities',
                'Recommended first agent',
                'Implementation scope',
                'Measurement and acceptance plan',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm">
                  <Check className="w-5 h-5 text-lime-500 mt-0.5 flex-shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Free vs Paid distinction */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 text-center">Free Fit Call vs. Paid Workflow Audit</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-zinc-950 rounded-xl p-5 border border-zinc-200 dark:border-zinc-800">
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Free Fit Call</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    A 15-minute qualification call to discuss the business, confirm the workflow pain point, and decide if a Workflow Audit makes sense.
                  </p>
                </div>
                <div className="bg-lime-500/5 rounded-xl p-5 border border-lime-500/20">
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Workflow Audit — $297</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    A paid diagnostic that maps the workflow, reviews tools, identifies bottlenecks, and delivers a recommended first implementation.
                  </p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-lime-500 text-zinc-950 font-bold text-sm rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20">
                  Book a Fit Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
