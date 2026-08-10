"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  IconSearch, 
  IconClipboardCheck, 
  IconRocket, 
  IconSettings, 
  IconTrendingUp, 
  IconHeadphones,
  IconArrowRight,
  IconPlayerPlay
} from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    value: 'discovery',
    name: 'Discovery',
    title: 'Discovery & Consultation',
    icon: IconSearch,
    description: 'We start by understanding your unique business needs, call workflows, and operational pain points.',
    details: [
      'Initial 15-minute Fit Call',
      'Business goals and revenue bottlenecks assessment',
      'Current software & CRM infrastructure review',
      'Operational friction point identification'
    ],
    ctaText: 'Book a Fit Call',
    ctaLink: '/contact'
  },
  {
    number: '02',
    value: 'planning',
    name: 'Planning',
    title: 'Strategic Planning',
    icon: IconClipboardCheck,
    description: 'Create a customized technology roadmap and automation architecture aligned with your objectives.',
    details: [
      'Master Business Audit & gap analysis',
      'Custom AI agent & integration architecture recommendations',
      'Cost-benefit and ROI timeline creation',
      'Implementation scope and milestones'
    ],
    ctaText: 'Explore Master Business Audit',
    ctaLink: '/services/it-audits'
  },
  {
    number: '03',
    value: 'onboarding',
    name: 'Onboarding',
    title: 'Onboarding & Setup',
    icon: IconRocket,
    description: 'Seamless integration of our services into your team operations with zero downtime.',
    details: [
      'Dedicated engineering team introduction',
      'API keys, CRM, and telematics access setup',
      'Direct Slack/Teams communication channels established',
      'Baseline operational performance benchmarking'
    ],
    ctaText: 'Start Client Onboarding',
    ctaLink: '/onboarding'
  },
  {
    number: '04',
    value: 'implementation',
    name: 'Implementation',
    title: 'Implementation & Build',
    icon: IconSettings,
    description: 'Execute the custom software bridges and AI agent workflows with minimal disruption to your business.',
    details: [
      'Phased AI dispatcher & workflow rollout approach',
      'Staff and dispatcher training sessions',
      'End-to-end quality assurance & edge-case testing',
      'Complete system documentation & handoff'
    ],
    ctaText: 'Explore AI Workflows',
    ctaLink: '/services/ai-automation'
  },
  {
    number: '05',
    value: 'optimization',
    name: 'Optimization',
    title: 'Optimization & Tuning',
    icon: IconTrendingUp,
    description: 'Continuous improvement and fine-tuning of your operational AI agents for peak throughput.',
    details: [
      'Real-time prompt and accuracy monitoring',
      'Regular agent model & API updates',
      'Workflow efficiency improvements',
      'Weekly ROI & time-saved analytics reporting'
    ],
    ctaText: 'View Web Architecture',
    ctaLink: '/services/web-design'
  },
  {
    number: '06',
    value: 'support',
    name: 'Support',
    title: 'Ongoing Support & SLA',
    icon: IconHeadphones,
    description: 'Proactive monitoring and 24/7 technical support to keep your systems running smoothly.',
    details: [
      '24/7 proactive AI agent monitoring',
      'Rapid SLA response to API or webhook issues',
      'Bi-weekly operational check-ins',
      'Strategic quarterly roadmap reviews'
    ],
    ctaText: 'Explore Support Plans',
    ctaLink: '/support'
  }
];

export default function Process() {
  const [activeTab, setActiveTab] = useState('discovery');
  const currentStep = steps.find(s => s.value === activeTab) || steps[0];

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-zinc-950 relative overflow-hidden">
      {/* Background Accent Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-lime-300/30 dark:bg-lime-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-lime-300/30 dark:bg-lime-900/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-lime-600 dark:text-lime-400 font-mono text-xs font-bold tracking-widest uppercase mb-3 block">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
            A Proven Path to <span className="text-lime-600 dark:text-lime-400">Success</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
            A clear, battle-tested 6-step framework designed to automate manual tasks and protect operational uptime.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all duration-300 shadow-lg shadow-lime-500/25 active:scale-[0.97]"
            >
              <IconPlayerPlay size={18} fill="currentColor" />
              Start Client Onboarding
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold rounded-xl hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-all duration-300 bg-white/50 dark:bg-zinc-900/50"
            >
              Book a Free Fit Call
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Tabs3 Style Navigation Pills */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="bg-white dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-md inline-flex items-center gap-1 sm:gap-2">
            {steps.map(({ icon: Icon, name, value, number }) => {
              const active = activeTab === value;
              return (
                <button
                  key={value}
                  onClick={() => setActiveTab(value)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-lime-500 text-zinc-950 shadow-md font-extrabold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  <Icon size={16} stroke={2.2} />
                  <span className="text-xs font-mono opacity-70 hidden sm:inline">{number}</span>
                  <span>{name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.value}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Number & Icon Badge + Heading */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-600 dark:text-lime-400 font-mono font-extrabold text-xl">
                    {currentStep.number}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-lime-600 dark:text-lime-400">
                    <currentStep.icon size={24} stroke={2} />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {currentStep.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
                  {currentStep.description}
                </p>

                <div className="pt-4">
                  <Link
                    href={currentStep.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-md shadow-lime-500/20 text-sm"
                  >
                    {currentStep.ctaText}
                    <IconArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Deliverables List */}
              <div className="lg:col-span-7 bg-slate-50 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 space-y-4">
                <h4 className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-widest">
                  Key Deliverables & Action Items
                </h4>

                <ul className="space-y-3">
                  {currentStep.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      <span className="text-lime-600 dark:text-lime-400 font-bold mt-0.5">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Callout */}
        <div className="text-center mt-14">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
            Ready to automate your operations and regain lost hours?
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lime-500 text-zinc-950 font-extrabold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20"
          >
            Start Client Onboarding
            <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}