"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products, verticals } from '@/data/affiliateProducts';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Users, DollarSign, Clock, ExternalLink, Sparkles, Briefcase, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ToolsClient() {
  const [selectedIndustry, setSelectedIndustry] = useState('hvac');
  const [employees, setEmployees] = useState(5);
  const [hoursWasted, setHoursWasted] = useState(10);
  const [hourlyWage, setHourlyWage] = useState(30);

  const verticalsList = Object.values(verticals || {});
  const industryData = verticals[selectedIndustry] || verticalsList[0];
  const recommendedProducts = (products || []).filter(p => p.vertical === selectedIndustry).slice(0, 3);

  const calculateLosses = () => {
    const weeklyLossPerEmp = hoursWasted * hourlyWage;
    const monthlyLossPerEmp = weeklyLossPerEmp * 4.33;
    const totalMonthlyLoss = monthlyLossPerEmp * employees;
    const totalWeeklyHours = hoursWasted * employees;

    let recommendedPlan = "Essentials";
    let planSetup = "$997";
    let planMonthly = "$197";
    let planSaved = "10–15 hrs/wk";
    let planBorder = "border-lime-500/30";

    if (employees > 15 || totalWeeklyHours > 100) {
      recommendedPlan = "Enterprise";
      planSetup = "$7,997";
      planMonthly = "$997";
      planSaved = "40+ hrs/wk";
      planBorder = "border-amber-500/30";
    } else if (employees > 5 || totalWeeklyHours > 40) {
      recommendedPlan = "Growth";
      planSetup = "$2,997";
      planMonthly = "$497";
      planSaved = "20–30 hrs/wk";
      planBorder = "border-emerald-500/30";
    }

    return {
      monthlyLoss: Math.round(totalMonthlyLoss),
      totalWeeklyHours,
      recommendedPlan,
      planSetup,
      planMonthly,
      planSaved,
      planBorder
    };
  };

  const calculations = calculateLosses();

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
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
              <Calculator className="w-4 h-4" /> Operational Efficiency Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
              Calculate Your Savings
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Find out how much time and money you are losing to manual tasks, and discover the exact tools to fix it.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 w-full flex-grow">

        {/* Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Input Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-lime-600 dark:text-lime-500" />
              </div>
              Your Business Details
            </h2>

            {/* Industry Selection */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-3">
                <Briefcase size={16} /> Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:border-lime-500 font-medium transition-colors"
              >
                {verticalsList.map(v => (
                  <option key={v.slug} value={v.slug}>{v.name} {v.emoji}</option>
                ))}
              </select>
            </div>

            {/* Number of Employees */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Employees</label>
                <span className="text-xl font-extrabold text-lime-600 dark:text-lime-500">{employees}</span>
              </div>
              <input type="range" min="1" max="100" value={employees} onChange={(e) => setEmployees(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-200 dark:bg-zinc-800 accent-lime-500" />
            </div>

            {/* Hours Wasted */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Hours Wasted/Wk</label>
                <span className="text-xl font-extrabold text-lime-600 dark:text-lime-500">{hoursWasted} hrs</span>
              </div>
              <input type="range" min="1" max="40" value={hoursWasted} onChange={(e) => setHoursWasted(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-200 dark:bg-zinc-800 accent-lime-500" />
            </div>

            {/* Hourly Wage */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">Avg. Wage</label>
                <span className="text-xl font-extrabold text-lime-600 dark:text-lime-500">${hourlyWage}/hr</span>
              </div>
              <input type="range" min="10" max="150" value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} className="w-full h-2 rounded-full appearance-none cursor-pointer bg-zinc-200 dark:bg-zinc-800 accent-lime-500" />
            </div>
          </motion.div>

          {/* Results Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Savings Card */}
            <div className="bg-gradient-to-br from-lime-500/10 via-white to-slate-50 dark:via-zinc-900 dark:to-zinc-900 border border-lime-500/30 rounded-3xl p-8 md:p-10 flex-1 flex flex-col justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 dark:bg-lime-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm font-semibold uppercase tracking-wider mb-3">
                <TrendingUp className="w-4 h-4" /> The Cost of Inaction
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
                Losing {formatCurrency(calculations.monthlyLoss)} <span className="text-2xl text-zinc-600 dark:text-zinc-400 font-normal">/mo</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                Based on <strong className="text-zinc-900 dark:text-white">{calculations.totalWeeklyHours.toLocaleString()} manual hours</strong> wasted across your team every week. Here are two ways to stop the bleeding today:
              </p>
            </div>

            {/* Two Paths */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Path 1: DIY (Affiliate) */}
              <div className="bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 rounded-2xl p-6 shadow-lg flex flex-col">
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Path 1: Do It Yourself</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  Top Tools for {industryData?.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-5 flex-grow">
                  Implement these industry-leading tools yourself to start automating workflows immediately.
                </p>
                
                <div className="flex flex-col gap-3 mb-6">
                  {recommendedProducts.map(product => (
                    <a key={product.id} href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 hover:border-lime-500/30 transition-colors group">
                      <img src={product.logo} alt={product.name} className="w-6 h-6 object-contain rounded" onError={(e) => e.target.style.display='none'} />
                      <div className="flex-grow">
                        <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 flex items-center gap-2">
                          {product.name} {product.isTopPick && <Crown size={12} className="text-lime-600 dark:text-lime-500" />}
                        </div>
                      </div>
                      <ExternalLink size={14} className="text-zinc-500 dark:text-zinc-400 group-hover:text-lime-600 dark:group-hover:text-lime-500" />
                    </a>
                  ))}
                </div>
                
                <Link href={`/guides/${selectedIndustry}`} className="text-lime-600 dark:text-lime-400 font-bold text-sm text-center hover:underline mt-auto">
                  View Full {industryData?.name} Guide &rarr;
                </Link>
              </div>

              {/* Path 2: Done For You (Agency) */}
              <div className={`bg-white dark:bg-zinc-900/80 border ${calculations.planBorder} rounded-2xl p-6 shadow-lg flex flex-col`}>
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-2">Path 2: Done For You</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                  Custom AI Build
                </h3>
                <div className="text-sm text-lime-600 dark:text-lime-400 font-bold mb-3 flex items-center justify-between">
                  <span>Recommended: {calculations.recommendedPlan} Plan</span>
                </div>

                {/* Price Breakdown Badge */}
                <div className="bg-slate-50 dark:bg-zinc-950 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-4 text-xs font-mono">
                  <div className="flex justify-between text-zinc-900 dark:text-white font-bold text-sm mb-1">
                    <span>Setup Fee:</span>
                    <span className="text-lime-600 dark:text-lime-400">{calculations.planSetup} one-time</span>
                  </div>
                  <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                    <span>Monthly Upkeep:</span>
                    <span>{calculations.planMonthly}/mo</span>
                  </div>
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Don't have time to set up software? We'll architect, build, and deploy a custom system for your team.
                </p>

                <ul className="space-y-2 mb-6 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-lime-600 dark:text-lime-500" /> Time saved: {calculations.planSaved}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-lime-600 dark:text-lime-500" /> Custom AI Workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-lime-600 dark:text-lime-500" /> Dedicated Architecture Team
                  </li>
                </ul>

                <Link href="/services/it-audits" className="w-full py-3 bg-lime-500 text-zinc-950 rounded-xl font-bold text-sm text-center hover:bg-lime-400 transition-colors shadow-lg shadow-lime-500/20 mt-auto">
                  Start Master Audit For {calculations.recommendedPlan} &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
