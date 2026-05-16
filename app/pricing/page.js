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
        <div className="container text-center mb-14">
          <h1 className="text-5xl font-black mb-3">Transparent Pricing</h1>
          <p className="text-xl text-gray-400">Flat monthly rates. No surprises. Results you can measure.</p>
        </div>

        <div className="container grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {plans.map((plan, idx) => (
            <div key={idx} className={`rounded-3xl p-9 border flex flex-col ${plan.popular ? "border-primary bg-primary/5 scale-[1.02]" : "border-gray-800"}`}>
              <div className="mb-8">
                <div className="uppercase font-bold text-sm tracking-widest text-primary mb-2">{plan.tier}</div>
                <div className="text-6xl font-black tabular-nums tracking-tighter">{plan.price}<span className="text-xl font-normal align-super">{plan.period}</span></div>
              </div>

              <ul className="space-y-3 mb-auto text-lg">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">✓ {feature}</li>
                ))}
              </ul>

              <a href="/contact" className={`mt-10 block text-center py-4 font-bold text-lg rounded-xl transition ${plan.popular ? "bg-primary text-black hover:bg-white" : "bg-gray-800 hover:bg-gray-700"}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 container px-6">
          <p className="text-gray-500 text-sm">All plans include a full discovery audit after the first month. Cancel anytime with 30-day notice.</p>
          <a href="/contact" className="mt-6 inline-block text-primary underline">Need a custom quote or Master Audit? Contact us →</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
