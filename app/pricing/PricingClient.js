"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap, Clock, BarChart3, Sparkles, Loader2, Calculator } from 'lucide-react';

export default function Pricing() {
 const [loading, setLoading] = useState(null);

 // Calculator State
 const [employees, setEmployees] = useState(5);
 const [hoursWasted, setHoursWasted] = useState(10);
 const [hourlyWage, setHourlyWage] = useState(25);

 // Calculations
 const totalWeeklyWasted = employees * hoursWasted;
 const totalMonthlyWasted = totalWeeklyWasted * 4;
 const monthlyLoss = totalMonthlyWasted * hourlyWage;
 const estimatedSavings = Math.round(monthlyLoss * 0.8); // Assuming 80% automation efficiency

 // Recommendation Logic
 let recommendedPlan = 'Growth';
 if (totalWeeklyWasted < 15) {
 recommendedPlan = 'Sovern AI';
 } else if (totalWeeklyWasted <= 40) {
 recommendedPlan = 'Essentials';
 } else if (totalWeeklyWasted <= 100) {
 recommendedPlan = 'Growth';
 } else {
 recommendedPlan = 'Enterprise';
 }

 const plans = [
 {
 tier: "Sovern AI",
 price: "$97",
 period: "/month",
 setup: "$497",
 features: [
 "2 Core Workflow Automations",
 "1 AI Chatbot (Starter)",
 "Sovereign Data Handling",
 "Email Support (48hr response)",
 "1 Standard Integration",
 "Time saved: 5-8 hrs/week"
 ],
 cta: "Get Sovern AI",
 icon: <Sparkles className="w-8 h-8 text-lime-600 dark:text-lime-400" />
 },
 {
 tier: "Essentials",
 price: "$197",
 period: "/month",
 setup: "$997",
 features: [
 "5 Core Workflow Automations",
 "Basic AI Chatbots (2)",
 "Monthly Performance Report",
 "Email Support (24hr response)",
 "Standard Integrations",
 "Time saved: 10-15 hrs/week"
 ],
 cta: "Get Essentials",
 icon: <Zap className="w-8 h-8 text-lime-600 dark:text-lime-400" />
 },
 {
 tier: "Growth",
 price: "$497",
 period: "/month",
 setup: "$2,997",
 features: [
 "15 Workflow Automations",
 "Advanced AI Bots (5)",
 "Weekly Optimization Calls",
 "Priority Phone + Chat Support",
 "CRM Integration Included",
 "Time saved: 20-30 hrs/week",
 "ROI Tracking Dashboard"
 ],
 cta: "Start Growing",
 stripeUrl: "https://buy.stripe.com/test_7sY6oH5XXazn3BifNbfYY01",
 icon: <BarChart3 className="w-8 h-8 text-lime-600 dark:text-lime-400" />
 },
 {
 tier: "Enterprise",
 price: "$997",
 period: "/month",
 setup: "$7,997",
 features: [
 "Unlimited Automations",
 "Custom AI Models",
 "Dedicated Account Manager",
 "24/7 Monitoring & Support",
 "SLA Guaranteed (99.9%)",
 "Time saved: 40+ hrs/week",
 "Full Tech Stack Assessment"
 ],
 cta: "Scale Enterprise",
 stripeUrl: "https://buy.stripe.com/test_cNi7sL5XX0YN5JqgRffYY02",
 icon: <Clock className="w-8 h-8 text-lime-600 dark:text-lime-400" />
 }
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
 alert(`Please contact us to get started with ${planName} plan.`);
 }
 } catch (error) {
 alert('Contact us to get started: SparkSphear4me@gmail.com');
 }
 setLoading(null);
 };

 return (
 <>
 <Navbar />
 <main className="min-h-screen pt-20 pb-16 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white">
 <div className="container max-w-6xl mx-auto px-6 pt-8">
 <div className="text-center mb-10">
 <h1 className="text-5xl font-bold mb-3">Operational Efficiency Pricing</h1>
 <p className="text-xl text-zinc-600 dark:text-gray-400">
 One-time setup + affordable monthly. Find your perfect plan using the calculator below.
 </p>
 </div>

 {/* ROI Calculator */}
 <div className="bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/60 border border-primary/20 rounded-3xl p-8 md:p-10 mb-16 max-w-4xl mx-auto flex flex-col md:flex-row gap-10 shadow-[0_0_40px_rgba(163,230,53,0.08)] backdrop-blur-sm">
 <div className="flex-1 space-y-8">
 <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
 <Calculator className="text-primary w-5 h-5"/>
 </div>
 Calculate Your Savings
 </h3>
 
 <div>
 <div className="flex justify-between mb-3">
 <label className="text-zinc-700 dark:text-gray-300 font-medium">Number of Employees</label>
 <span className="text-primary font-bold text-lg">{employees}</span>
 </div>
 <input type="range" min="1" max="50" value={employees} onChange={e => setEmployees(Number(e.target.value))} className="w-full accent-primary h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
 </div>
 
 <div>
 <div className="flex justify-between mb-3">
 <label className="text-zinc-700 dark:text-gray-300 font-medium">Hours Wasted <span className="text-gray-500 text-sm font-normal">(per employee/wk)</span></label>
 <span className="text-primary font-bold text-lg">{hoursWasted} hrs</span>
 </div>
 <input type="range" min="1" max="40" value={hoursWasted} onChange={e => setHoursWasted(Number(e.target.value))} className="w-full accent-primary h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
 </div>
 
 <div>
 <div className="flex justify-between mb-3">
 <label className="text-zinc-700 dark:text-gray-300 font-medium">Avg. Hourly Wage</label>
 <span className="text-primary font-bold text-lg">${hourlyWage}/hr</span>
 </div>
 <input type="range" min="15" max="150" step="1" value={hourlyWage} onChange={e => setHourlyWage(Number(e.target.value))} className="w-full accent-primary h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer" />
 </div>
 </div>

 <div className="flex-1 bg-white dark:bg-black/60 border border-zinc-200 dark:border-gray-800/80 rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
 <div className="text-zinc-600 dark:text-gray-400 font-medium mb-3">Estimated Monthly Savings</div>
 <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-300 to-lime-600 mb-8">${estimatedSavings.toLocaleString()}</div>
 
 <div className="w-full h-px bg-gray-800/60 mb-8"></div>
 
 <div className="text-zinc-600 dark:text-gray-400 font-medium mb-3">Recommended Plan</div>
 <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">{recommendedPlan}</div>
 <p className="text-sm text-gray-500 leading-relaxed">
 Based on {totalWeeklyWasted} manual hours wasted across your team every week.
 </p>
 </div>
 </div>

 {/* Pricing Grid */}
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
 {plans.map((plan, i) => {
 const isRecommended = plan.tier === recommendedPlan;
 return (
 <div 
 key={i} 
 className={`border rounded-3xl p-6 flex flex-col transition-all duration-500 ${
 isRecommended 
 ? 'border-primary bg-primary/5 ring-4 ring-primary/20 scale-[1.02] shadow-[0_0_30px_rgba(163,230,53,0.15)] z-20' 
 : 'border-zinc-200 dark:border-gray-800 bg-white dark:bg-black/70 opacity-70 hover:opacity-100'
 }`}
 >
 {isRecommended && (
 <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.2em] bg-primary text-black px-4 py-1.5 rounded-full font-black shadow-lg whitespace-nowrap">
 RECOMMENDED FOR YOU
 </div>
 )}
 <div>
 <div className="flex items-center gap-3 mb-4">
 {plan.icon}
 <span className="text-3xl font-bold">{plan.tier}</span>
 </div>
 
 <div className="text-zinc-600 dark:text-gray-400 text-sm mb-1 font-medium">One-time setup</div>
 <div className="text-3xl font-bold text-primary mb-4">{plan.setup}</div>
 
 <div className="text-6xl font-black tracking-tighter">
 {plan.price} <span className="font-normal text-2xl align-super text-gray-500">{plan.period}</span>
 </div>
 </div>
 
 <ul className="mt-8 mb-8 text-sm space-y-3 flex-1">
 {plan.features.map((f, idx) => (
 <li key={idx} className="flex gap-3 items-start font-medium text-zinc-800 dark:text-gray-200">
 <span className="text-primary mt-0.5">●</span> 
 <span className="leading-snug">{f}</span>
 </li>
 ))}
 </ul>
 
 <button 
 onClick={() => handleCheckout(plan.tier)}
 disabled={loading === plan.tier}
 className={`block w-full py-4 text-center font-bold rounded-xl transition disabled:opacity-50 ${
 isRecommended 
 ? 'bg-primary text-black hover:bg-lime-400 hover:shadow-lg hover:shadow-primary/30' 
 : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white hover:bg-zinc-700'
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

 <div className="mt-20 text-center text-zinc-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
 <p className="mb-3 font-medium">All plans include discovery call, onboarding, and 30-day satisfaction guarantee.</p>
 <p>Need something custom? <a href="/support" className="text-primary hover:underline font-bold">Let's talk</a> - we'll build the right package for your business.</p>
 </div>
 </div>
 </main>
 <Footer />
 </>
 );
}