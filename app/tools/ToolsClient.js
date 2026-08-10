"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Users, DollarSign, Clock, Mail, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ToolsClient() {
  const [employees, setEmployees] = useState(5);
  const [hoursWasted, setHoursWasted] = useState(10);
  const [hourlyWage, setHourlyWage] = useState(30);

  // Email modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const calculateLosses = () => {
    const weeklyLossPerEmp = hoursWasted * hourlyWage;
    const monthlyLossPerEmp = weeklyLossPerEmp * 4.33;
    const totalMonthlyLoss = monthlyLossPerEmp * employees;
    const totalAnnualLoss = totalMonthlyLoss * 12;
    const totalWeeklyHours = hoursWasted * employees;

    return {
      monthlyLoss: Math.round(totalMonthlyLoss),
      annualLoss: Math.round(totalAnnualLoss),
      totalWeeklyHours,
    };
  };

  const calculations = calculateLosses();

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  const handleReportRequest = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company,
          tags: ['calculator-lead', 'agency-lead', `team-${employees}`, `savings-${calculations.monthlyLoss}`],
          source: 'Operations Savings Calculator',
        }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitted(false);
        setEmail('');
        setCompany('');
      }, 4000);
    } catch (err) {
      console.error('Report request error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex flex-col transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <header className="relative pt-36 pb-16 px-6 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-200/40 dark:from-lime-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <Calculator className="w-4 h-4" /> Operations Audit Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
              Operations Savings Calculator
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Calculate exact hours and payroll lost to repetitive manual dispatching, phone tag, and data entry.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Input Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-lime-500" />
              </div>
              Your Team Metrics
            </h2>

            {/* Number of Employees */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Field Techs / Staff</label>
                <span className="text-xl font-extrabold text-lime-600 dark:text-lime-400">{employees}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={employees} 
                onChange={(e) => setEmployees(Number(e.target.value))} 
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-200 dark:bg-zinc-800 accent-lime-500" 
              />
            </div>

            {/* Hours Wasted per Employee */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Manual Hours Lost/Wk</label>
                <span className="text-xl font-extrabold text-lime-600 dark:text-lime-400">{hoursWasted} hrs</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="40" 
                value={hoursWasted} 
                onChange={(e) => setHoursWasted(Number(e.target.value))} 
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-200 dark:bg-zinc-800 accent-lime-500" 
              />
            </div>

            {/* Hourly Wage */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Avg Hourly Wage</label>
                <span className="text-xl font-extrabold text-lime-600 dark:text-lime-400">${hourlyWage}/hr</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="150" 
                value={hourlyWage} 
                onChange={(e) => setHourlyWage(Number(e.target.value))} 
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-200 dark:bg-zinc-800 accent-lime-500" 
              />
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              *Calculations based on 4.33 working weeks per month. Estimates reflect direct payroll loss before accounting for missed call opportunity revenue.
            </div>
          </motion.div>

          {/* Results Output */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            <div className="bg-gradient-to-br from-lime-500/10 via-white to-slate-50 dark:via-zinc-900 dark:to-zinc-900 border border-lime-500/30 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm font-bold uppercase tracking-wider mb-4">
                  <TrendingUp className="w-4 h-4" /> Operational Loss Summary
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/80 dark:bg-zinc-950/80 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Monthly Loss</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                      {formatCurrency(calculations.monthlyLoss)}
                    </div>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-zinc-950/80 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">Annual Loss</div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-lime-600 dark:text-lime-400">
                      {formatCurrency(calculations.annualLoss)}
                    </div>
                  </div>
                </div>

                <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed mb-8">
                  Your business is currently losing <strong className="text-zinc-900 dark:text-white">{calculations.totalWeeklyHours.toLocaleString()} manual hours</strong> every single week to repetitive data entry, call logging, and manual dispatch.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="flex-1 py-4 px-6 bg-lime-500 text-zinc-950 rounded-xl font-extrabold text-center hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 inline-flex items-center justify-center gap-2 text-base"
                  >
                    Book a Free 15-Minute Fit Call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 py-4 px-6 border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white rounded-xl font-bold hover:border-lime-500 transition-all text-center inline-flex items-center justify-center gap-2 text-base cursor-pointer"
                  >
                    Get Personalized Operations Report <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Audit Next Steps */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">How We Fix These Bottlenecks</h3>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              Our <strong>Master Business Audit</strong> inspects your exact software stack, call intake pipelines, and data handoffs. We map the friction points, prioritize the automation opportunities, and build custom AI agent bridges that return 15+ hours weekly per technician.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/services/it-audits"
                className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold hover:underline"
              >
                Learn More About the Master Business Audit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Personalized Report Email Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Get Your Personalized Report
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              We will send your complete operational breakdown, priority automation roadmap, and custom ROI calculations.
            </p>

            {submitted ? (
              <div className="p-6 bg-lime-500/10 border border-lime-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-lime-500 mx-auto" />
                <p className="font-bold text-zinc-900 dark:text-white">Report Sent!</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Check your inbox for your personalized savings report.</p>
              </div>
            ) : (
              <form onSubmit={handleReportRequest} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-zinc-500 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Field Services"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:border-lime-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-zinc-500 mb-1">Business Email</label>
                  <input 
                    type="email" 
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:border-lime-500 text-sm"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-semibold hover:border-zinc-400 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-1 py-3 bg-lime-500 text-zinc-950 font-bold rounded-xl text-sm hover:bg-lime-400 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Report'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
