"use client";
import React from 'react';

const FAQ = () => {
 return (
 <section id="faq" className="section faq animate-on-scroll bg-white dark:bg-zinc-950 py-24 border-t border-zinc-200 dark:border-white/5">
 <div className="container">
 <div className="section-header text-center mb-16">
 <span className="tag text-lime-600 dark:text-lime-400">FAQ</span>
 <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Common Questions</h2>
 <p className="text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to know about our IT services.</p>
 </div>

 <div className="faq-list max-w-3xl mx-auto space-y-4">
 <details className="faq-item group">
 <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-zinc-100/80 dark:bg-white/5 rounded-xl hover:bg-zinc-200 dark:bg-white/10 transition-colors border border-zinc-200 dark:border-white/5 hover:border-lime-500/30">
 <span className="text-zinc-900 dark:text-white text-lg">What areas do you serve?</span>
 <span className="text-lime-600 dark:text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
 </summary>
 <div className="faq-content px-6 pb-6 pt-2 text-zinc-600 dark:text-gray-400 bg-zinc-100/80 dark:bg-white/5 border-x border-b border-zinc-200 dark:border-white/5 rounded-b-xl -mt-2">
 <p>We are based in Fort Wayne, IN and serve trade & service businesses nationwide with 100% remote deployment and dedicated engineering support.</p>
 </div>
 </details>

  <details className="faq-item group">
  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-zinc-100/80 dark:bg-white/5 rounded-xl hover:bg-zinc-200 dark:bg-white/10 transition-colors border border-zinc-200 dark:border-white/5 hover:border-lime-500/30">
  <span className="text-zinc-900 dark:text-white text-lg">How do you evaluate if an agent is right for my business?</span>
  <span className="text-lime-600 dark:text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
  </summary>
  <div className="faq-content px-6 pb-6 pt-2 text-zinc-600 dark:text-gray-400 bg-zinc-100/80 dark:bg-white/5 border-x border-b border-zinc-200 dark:border-white/5 rounded-b-xl -mt-2">
  <p>We start with a <strong>Workflow Audit</strong> ($297) to map your operational workflow, review existing software tools, and identify specific automation opportunities before any agent is built.</p>
  </div>
  </details>

  <details className="faq-item group">
  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-zinc-100/80 dark:bg-white/5 rounded-xl hover:bg-zinc-200 dark:bg-white/10 transition-colors border border-zinc-200 dark:border-white/5 hover:border-lime-500/30">
  <span className="text-zinc-900 dark:text-white text-lg">What support hours do you provide?</span>
  <span className="text-lime-600 dark:text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
  </summary>
  <div className="faq-content px-6 pb-6 pt-2 text-zinc-600 dark:text-gray-400 bg-zinc-100/80 dark:bg-white/5 border-x border-b border-zinc-200 dark:border-white/5 rounded-b-xl -mt-2">
  <p>We provide ongoing technical support and agent workflow monitoring within agreed SLA boundaries and published business hours (Mon-Fri 8am-6pm EST).</p>
  </div>
  </details>

  <details className="faq-item group">
  <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-zinc-100/80 dark:bg-white/5 rounded-xl hover:bg-zinc-200 dark:bg-white/10 transition-colors border border-zinc-200 dark:border-white/5 hover:border-lime-500/30">
  <span className="text-zinc-900 dark:text-white text-lg">How does your pricing work?</span>
  <span className="text-lime-600 dark:text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
  </summary>
  <div className="faq-content px-6 pb-6 pt-2 text-zinc-600 dark:text-gray-400 bg-zinc-100/80 dark:bg-white/5 border-x border-b border-zinc-200 dark:border-white/5 rounded-b-xl -mt-2">
  <p>We offer four distinct monthly plans (SIGNAL START $297/mo, FLOW CONTROL $697/mo, SYSTEM LIFT $1,497/mo, and SCALE CONTROL $2,997/mo+) with explicit one-time implementation fees separate from monthly management.</p>
  </div>
  </details>

 <details className="faq-item group">
 <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-zinc-100/80 dark:bg-white/5 rounded-xl hover:bg-zinc-200 dark:bg-white/10 transition-colors border border-zinc-200 dark:border-white/5 hover:border-lime-500/30">
 <span className="text-zinc-900 dark:text-white text-lg">Can you help with cybersecurity compliance?</span>
 <span className="text-lime-600 dark:text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
 </summary>
 <div className="faq-content px-6 pb-6 pt-2 text-zinc-600 dark:text-gray-400 bg-zinc-100/80 dark:bg-white/5 border-x border-b border-zinc-200 dark:border-white/5 rounded-b-xl -mt-2">
 <p>Absolutely. We help businesses meet industry standards (like HIPAA or PCI-DSS) through rigorous security audits and protocol implementation.</p>
 </div>
 </details>

 <details className="faq-item group">
 <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 bg-zinc-100/80 dark:bg-white/5 rounded-xl hover:bg-zinc-200 dark:bg-white/10 transition-colors border border-zinc-200 dark:border-white/5 hover:border-lime-500/30">
 <span className="text-zinc-900 dark:text-white text-lg">How fast is your response time?</span>
 <span className="text-lime-600 dark:text-lime-500 text-2xl font-bold group-open:rotate-45 transition-transform">+</span>
 </summary>
 <div className="faq-content px-6 pb-6 pt-2 text-zinc-600 dark:text-gray-400 bg-zinc-100/80 dark:bg-white/5 border-x border-b border-zinc-200 dark:border-white/5 rounded-b-xl -mt-2">
 <p>For critical issues, our average response time is under 15 minutes. We prioritize keeping your operations moving.</p>
 </div>
 </details>
 </div>
 </div>
 </section>
 );
};

export default FAQ;
