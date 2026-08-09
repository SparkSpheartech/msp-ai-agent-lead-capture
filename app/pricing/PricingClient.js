"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap, Clock, BarChart3, Sparkles, Loader2, Calculator, ShieldCheck, Check, Layers, AlertCircle, ArrowRight } from 'lucide-react';
import { TestimonialStrip } from '@/components/Testimonials';

export default function Pricing() {
  const [loading, setLoading] = useState(null);
  const [showStackReveal, setShowStackReveal] = useState(true);

  // Calculator State
  const [employees, setEmployees] = useState(5);
  const [hoursWasted, setHoursWasted] = useState(10);
  const [hourlyWage, setHourlyWage] = useState(25);

  // Calculations
  const totalWeeklyWasted = employees * hoursWasted;
  const totalMonthlyWasted = totalWeeklyWasted * 4;
  const monthlyLoss = totalMonthlyWasted * hourlyWage;
  const estimatedSavings = Math.round(monthlyLoss * 0.8);

  // Outcome Recommendation Logic (Task 1.2)
  let recommendedPlan = 'Revenue Operations Engine';
  if (totalWeeklyWasted < 15) {
    recommendedPlan = 'Missed-Call Recovery System';
  } else if (totalWeeklyWasted <= 40) {
    recommendedPlan = 'Admin Elimination Package';
  } else if (totalWeeklyWasted <= 100) {
    recommendedPlan = 'Revenue Operations Engine';
  } else {
    recommendedPlan = 'Full CNS Deployment';
  }

  // Common Bonus Stack for every tier (Task 1.6)
  const commonBonuses = [
    "🎁 FREE: 'Missed-Call Recovery Playbook' PDF ($297 Value)",
    "🎁 FREE: 30-min Monthly Strategy Call ($150 Value)",
    "🎁 FREE: Existing-Tools Efficiency Audit ($497 Value)"
  ];

  // Outcome-based Pricing Tiers (Task 1.2, 1.3, 1.6)
  const plans = [
    {
      tier: "Missed-Call Recovery System",
      price: "$97",
      period: "/month",
      originalSetup: "$497",
      setupBadge: "FREE $497 Onboarding (Waived)",
      features: [
        "2 Core Workflow Automations",
        "24/7 Missed-Call & Text Auto-Responder",
        "Sovereign Data Protection",
        "Email Support (24hr response)",
        "Time saved: 5-8 hrs/week",
        ...commonBonuses
      ],
      cta: "Get Missed-Call Recovery",
      icon: <Sparkles className="w-7 h-7 text-lime-600 dark:text-lime-400" />
    },
    {
      tier: "Admin Elimination Package",
      price: "$197",
      period: "/month",
      originalSetup: "$997",
      setupBadge: "FREE $997 Onboarding (Waived)",
      features: [
        "5 Core Workflow Automations",
        "AI Customer Intake & Dispatch Bots (2)",
        "Monthly Performance & Revenue Report",
        "Email + Chat Support (12hr response)",
        "Time saved: 10-15 hrs/week",
        ...commonBonuses
      ],
      cta: "Get Admin Elimination",
      icon: <Zap className="w-7 h-7 text-lime-600 dark:text-lime-400" />
    },
    {
      tier: "Revenue Operations Engine",
      price: "$497",
      period: "/month",
      originalSetup: "$2,997",
      setupBadge: "FREE $2,997 Onboarding (Waived)",
      features: [
        "15 Full-Suite Workflow Automations",
        "Advanced AI Dispatch & Quoting Bots (5)",
        "Weekly Optimization & Strategy Calls",
        "Priority Phone + Instant Slack/Chat Support",
        "CRM & Accounting Integration Included",
        "Time saved: 20-30 hrs/week",
        "Real-Time ROI Tracking Dashboard",
        ...commonBonuses
      ],
      cta: "Start Revenue Engine",
      stripeUrl: "https://buy.stripe.com/test_7sY6oH5XXazn3BifNbfYY01",
      icon: <BarChart3 className="w-7 h-7 text-lime-600 dark:text-lime-400" />
    },
    {
      tier: "Full CNS Deployment",
      price: "$997",
      period: "/month",
      originalSetup: "$7,997",
      setupBadge: "FREE $7,997 Onboarding (Waived)",
      features: [
        "Unlimited Custom Automations",
        "Custom-Trained Autonomous AI Agents",
        "Dedicated Chief Automation Engineer",
        "24/7 Active System Monitoring & Support",
        "99.9% Uptime SLA Guaranteed",
        "Time saved: 40+ hrs/week",
        "Full Enterprise Architecture Assessment",
        ...commonBonuses
      ],
      cta: "Scale Full CNS",
      stripeUrl: "https://buy.stripe.com/test_cNi7sL5XX0YN5JqgRffYY02",
      icon: <Clock className="w-7 h-7 text-lime-600 dark:text-lime-400" />
    }
  ];

  // Stack Components
  const stackItems = [
    { title: "24/7 AI Missed-Call & Text Receptionist", value: "$1,497/mo value" },
    { title: "Automated Quoting & Dispatch Workflows", value: "$1,997 value" },
    { title: "CRM & Accounting API Integrations", value: "$750 value" },
    { title: "Weekly Revenue Optimization Strategy Calls", value: "$450/mo value" },
    { title: "Bonus: 'Missed-Call Recovery Playbook' PDF", value: "$297 value" },
    { title: "Bonus: Full Tech Stack Efficiency Audit", value: "$497 value" },
  ];

  const handleCheckout = async (planName) => {
    setLoading(planName);
    try {
      const response = await fetch('/api/stripe-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planName, email: '' }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else if (data.devMessage) {
        alert(`Please contact us to get started with the ${planName} package.`);
      }
    } catch (error) {
      alert('Contact us to get started: SparkSphear4me@gmail.com');
    }
    setLoading(null);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
        <div className="container max-w-6xl mx-auto px-6 pt-4">

          {/* SCARCITY & URGENCY BANNER (Task 1.7) */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-8 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm font-semibold text-amber-900 dark:text-amber-300">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span><strong>SCARCITY WARNING:</strong> We onboard only 5 new clients/month to protect service quality. <strong>Only 2 spots remaining this month.</strong></span>
            </div>
            <span className="bg-amber-500 text-zinc-950 px-3 py-1 rounded-full text-xs font-black uppercase whitespace-nowrap">
              $2,997 Onboarding Fee Waived
            </span>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Operational Outcome Pricing
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              No long-term contracts. No upfront setup fees. Zero risk with our 90-day outcome guarantee.
            </p>
          </div>

          {/* ROI Calculator */}
          <div className="bg-white dark:bg-zinc-900 border border-lime-500/20 rounded-3xl p-8 md:p-10 mb-16 max-w-4xl mx-auto flex flex-col md:flex-row gap-10 shadow-xl">
            <div className="flex-1 space-y-8">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime-500/10 flex items-center justify-center">
                  <Calculator className="text-lime-600 dark:text-lime-400 w-5 h-5"/>
                </div>
                Calculate Your Monthly Loss
              </h3>
              
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm">Number of Employees</label>
                  <span className="text-lime-600 dark:text-lime-400 font-extrabold text-lg">{employees}</span>
                </div>
                <input type="range" min="1" max="50" value={employees} onChange={e => setEmployees(Number(e.target.value))} className="w-full accent-lime-500 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
              </div>
              
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm">Hours Wasted <span className="text-zinc-500 text-xs font-normal">(per employee/wk)</span></label>
                  <span className="text-lime-600 dark:text-lime-400 font-extrabold text-lg">{hoursWasted} hrs</span>
                </div>
                <input type="range" min="1" max="40" value={hoursWasted} onChange={e => setHoursWasted(Number(e.target.value))} className="w-full accent-lime-500 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
              </div>
              
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-zinc-700 dark:text-zinc-300 font-semibold text-sm">Avg. Hourly Wage</label>
                  <span className="text-lime-600 dark:text-lime-400 font-extrabold text-lg">${hourlyWage}/hr</span>
                </div>
                <input type="range" min="15" max="150" step="1" value={hourlyWage} onChange={e => setHourlyWage(Number(e.target.value))} className="w-full accent-lime-500 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>

            <div className="flex-1 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="text-red-400 font-semibold text-xs uppercase tracking-wider mb-2">You Are Losing</div>
              <div className="text-5xl font-black text-white mb-6">${monthlyLoss.toLocaleString()} <span className="text-sm font-normal text-zinc-400">/mo</span></div>
              
              <div className="w-full h-px bg-zinc-800 mb-6" />
              
              <div className="text-lime-400 text-xs font-mono uppercase tracking-wider mb-2">Recommended Solution</div>
              <div className="text-xl font-extrabold text-white mb-2">{recommendedPlan}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Based on {totalWeeklyWasted} manual hours wasted across your team every week.
              </p>
            </div>
          </div>

          {/* BRUNSON'S "THE STACK" REVEAL (Task 1.10) */}
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-lime-500/40 rounded-3xl p-8 md:p-10 mb-12 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-extrabold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" /> What You Get (The Total Value Stack)
              </div>
              <span className="text-xs text-lime-400 font-bold font-mono">
                Total Value: $5,488+
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Here's Everything Included In Your Engine:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {stackItems.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between text-xs md:text-sm text-zinc-200 font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-lime-400 flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-lime-400 font-mono font-bold text-[11px] bg-lime-500/10 px-2 py-0.5 rounded ml-2 whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left text-xs text-zinc-400">
                <span className="text-white font-bold block text-sm">Combined Perceived Value: $5,488</span>
                <span>You pay zero onboarding fees. Choose your monthly outcome tier below:</span>
              </div>
              <a href="#pricing-grid" className="px-6 py-3 bg-lime-500 text-zinc-950 font-bold rounded-xl text-xs hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 whitespace-nowrap">
                See Monthly Tiers &rarr;
              </a>
            </div>
          </div>

          {/* TESTIMONIAL STRIP (Task 1.4) */}
          <TestimonialStrip />

          {/* Pricing Grid */}
          <div id="pricing-grid" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 my-12">
            {plans.map((plan, i) => {
              const isRecommended = plan.tier === recommendedPlan;
              return (
                <div 
                  key={i} 
                  className={`border rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 ${
                    isRecommended 
                      ? 'border-lime-500 bg-lime-500/5 ring-4 ring-lime-500/20 scale-[1.02] shadow-2xl z-20' 
                      : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90'
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.15em] bg-lime-500 text-zinc-950 px-4 py-1 rounded-full font-black shadow-lg whitespace-nowrap uppercase">
                      RECOMMENDED FOR YOUR SCALE
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {plan.icon}
                      <h3 className="text-lg font-bold leading-tight">{plan.tier}</h3>
                    </div>
                    
                    {/* Setup Fee Framed As Free Bonus (Task 1.3) */}
                    <div className="mb-4">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-[11px] font-extrabold">
                        {plan.setupBadge}
                      </span>
                    </div>

                    <div className="text-5xl font-black tracking-tight mb-6">
                      {plan.price} <span className="font-normal text-lg text-zinc-500">{plan.period}</span>
                    </div>

                    <ul className="text-xs space-y-2.5 mb-6">
                      {plan.features.map((f, idx) => {
                        const isBonus = f.startsWith("🎁");
                        return (
                          <li key={idx} className={`flex gap-2 items-start ${isBonus ? 'text-lime-600 dark:text-lime-400 font-bold bg-lime-500/5 p-1.5 rounded' : 'text-zinc-700 dark:text-zinc-300'}`}>
                            <span className="text-lime-500 font-bold">✓</span> 
                            <span className="leading-snug">{f}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleCheckout(plan.tier)}
                    disabled={loading === plan.tier}
                    className={`w-full py-3.5 text-center font-extrabold text-xs rounded-xl transition disabled:opacity-50 shadow-lg ${
                      isRecommended 
                        ? 'bg-lime-500 text-zinc-950 hover:bg-lime-400 shadow-lime-500/20' 
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-700'
                    }`}
                  >
                    {loading === plan.tier ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                      </span>
                    ) : plan.cta}
                  </button>
                </div>
              );
            })}
          </div>

          {/* 90-DAY DREAM OUTCOME GUARANTEE (Task 1.5) */}
          <div className="mt-16 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border-2 border-lime-500/50 rounded-3xl p-8 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <ShieldCheck className="w-12 h-12 text-lime-400 mx-auto mb-3" />
            <h3 className="text-2xl font-extrabold text-white mb-2">
              90-Day Dream Outcome Guarantee
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4">
              If our AI systems don't recover at least <strong>10 hours/week</strong> (or $1,000/mo in lost revenue) for your business in the first 90 days, you don't pay. We assume 100% of the operational risk.
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              All plans include discovery call, staff onboarding, and ongoing 24/7 system monitoring.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}