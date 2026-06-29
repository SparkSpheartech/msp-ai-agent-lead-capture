"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap, Clock, BarChart3, Loader2 } from 'lucide-react';

export default function Pricing() {
  const [loading, setLoading] = useState(null);

  const plans = [
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
      icon: <Zap className="w-8 h-8 text-lime-400" />
    },
    {
      tier: "Growth",
            price: "$497",
            period: "/month",
            setup: "$2,997",
            popular: true,
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
      icon: <BarChart3 className="w-8 h-8 text-lime-400" />
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
            icon: <Clock className="w-8 h-8 text-lime-400" />
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
      <main className="min-h-screen pt-20 pb-16 bg-dark text-white">
        <div className="container max-w-6xl mx-auto px-6 pt-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-3">Operational Efficiency Pricing</h1>
            <p className="text-xl text-gray-400">
              One-time setup + affordable monthly. Save 10-20 hours per week per employee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`border border-gray-800 bg-black/70 rounded-3xl p-8 flex flex-col ${plan.popular ? 'ring-2 ring-primary relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs tracking-widest bg-primary text-black px-3 py-0.5 rounded-full font-bold">MOST POPULAR</div>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {plan.icon}
                    <span className="text-3xl font-bold">{plan.tier}</span>
                  </div>
                  
                  <div className="text-gray-400 text-sm mb-1">One-time setup</div>
                  <div className="text-3xl font-bold text-primary mb-3">{plan.setup}</div>
                  
                  <div className="text-6xl font-bold tracking-tighter">
                    {plan.price} <span className="font-normal text-3xl align-super">{plan.period}</span>
                  </div>
                </div>
                <ul className="mt-8 mb-auto text-sm space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2"><span className="text-primary">●</span> {f}</li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleCheckout(plan.tier)}
                  disabled={loading === plan.tier}
                  className="block mt-9 bg-primary hover:bg-lime-400 py-3 text-center text-black font-bold rounded-xl transition disabled:opacity-50"
                >
                  {loading === plan.tier ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                    </span>
                  ) : plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center text-gray-400 text-sm max-w-2xl mx-auto">
            <p className="mb-3">All plans include discovery call, onboarding, and 30-day satisfaction guarantee.</p>
            <p>Need something custom? <a href="/contact" className="text-primary underline">Let's talk</a> - we'll build the right package for your business.</p>
          </div>

          <div className="mt-16 bg-zinc-900/50 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Not sure which plan?</h3>
            <p className="text-gray-400 mb-4">
              Most businesses save $2,400+ per month with our automation. Use our ROI calculator to see your potential time/cost savings.
            </p>
            <a href="/tools/roi-calculator" className="inline-block px-6 py-2 bg-primary text-black font-bold rounded-md hover:bg-primary/90 transition">
              Calculate Your Savings
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}