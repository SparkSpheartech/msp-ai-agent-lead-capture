"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plans = [
  {
    tier: "Starter",
    price: "$2,400",
    period: "/month",
    features: [
      "AI Chatbot Integration",
      "1 Core Workflow Automation",
      "Monthly audit & reporting",
      "Email support",
      "Best for small teams"
    ],
    cta: "Start with Starter"
  },
  {
    tier: "Growth",
    price: "$4,800",
    period: "/month",
    popular: true,
    features: [
      "Full AI Automation Suite",
      "5+ Workflow Automations",
      "HubSpot / CRM Integration",
      "Weekly optimization",
      "Priority phone + chat support",
      "Ideal for scaling operations"
    ],
    cta: "Get Started with Growth"
  },
  {
    tier: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited automations",
      "Custom AI model development",
      "Dedicated account manager",
      "On-site & remote support",
      "24/7 monitoring",
      "SLA + quarterly planning"
    ],
    cta: "Talk to Sales"
  }
];

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 bg-dark text-white">
        <div className="container max-w-6xl mx-auto px-6 pt-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-3">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-400">Flat monthly rates. No surprises. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div key={i} className={`border border-gray-800 bg-black/70 rounded-3xl p-8 flex flex-col ${plan.popular ? 'ring-2 ring-primary relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs tracking-widest bg-primary text-black px-3 py-0.5 rounded-full font-bold">POPULAR</div>
                )}
                <div>
                  <div className="text-3xl font-bold mb-1">{plan.tier}</div>
                  <div className="text-6xl font-bold tracking-tighter mt-3">
                    {plan.price} <span className="font-normal text-3xl align-super">{plan.period}</span>
                  </div>
                </div>
                <ul className="mt-8 mb-auto text-sm space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex gap-2"><span className="text-primary">●</span> {f}</li>
                  ))}
                </ul>
                <a href="/contact" className="block mt-9 bg-primary hover:bg-blue-600 py-3 text-center text-black font-bold rounded-xl transition">
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center text-gray-400 text-sm max-w-md mx-auto">
            All plans include discovery call, onboarding support, and 30-day money-back guarantee.<br />Need something between tiers? <a href="/contact" className="text-primary underline">Contact us</a>.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
