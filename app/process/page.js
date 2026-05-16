"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "15-minute call to understand your operations, systems, pain points, and growth goals.",
  },
  {
    number: "02",
    title: "Master Audit",
    description: "We dive into your current workflows, tools, and automation gaps. You receive a custom roadmap with actionable recommendations.",
  },
  {
    number: "03",
    title: "Proposal & Pricing",
    description: "Transparent scope and pricing — usually flat-rate monthly for ongoing work or project-based for audits and builds.",
  },
  {
    number: "04",
    title: "Build & Deploy",
    description: "We implement AI agents, automations, integrations, and reporting. You go live fast with measurable results.",
  },
  {
    number: "05",
    title: "Ongoing Partnership",
    description: "Weekly reviews, proactive improvements, and 24/7 monitoring. We stay in the loop so you can focus on your business.",
  },
];

export default function Process() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16 bg-dark text-white">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Our Proven 5-Step Process</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We don't guess. We diagnose, map, build, and scale your business with AI + automation.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-black/60 border border-gray-800 rounded-2xl p-8 flex gap-6">
                <div className="text-4xl font-mono text-primary/90">{step.number}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/contact" className="inline-block px-10 py-4 rounded-lg bg-primary font-bold text-black text-lg">Start Your Discovery Call</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
