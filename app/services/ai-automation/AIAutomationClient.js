"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bot, ArrowRight, Cpu, Network, Code2, PhoneCall, RefreshCw, BarChart3, ShieldCheck, FileText, Users, ClipboardCheck, MessageSquareText, Truck, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIAutomation() {
  const capabilities = [
    { title: 'Missed-Call & Inquiry Agents', icon: <PhoneCall />, desc: 'Respond to missed calls and inquiries with approved next steps and booking paths.' },
    { title: 'Chatbots & Customer Intake', icon: <MessageSquareText />, desc: 'Handle approved FAQs, capture lead information, and route inquiries to the right workflow.' },
    { title: 'Booking & Scheduling', icon: <Calendar />, desc: 'Connect to approved booking systems, manage appointment workflows, and send reminders.' },
    { title: 'Quote & Approval Workflows', icon: <ClipboardCheck />, desc: 'Automate quote delivery, customer approvals, and follow-up within defined business rules.' },
    { title: 'Dispatch & Routing', icon: <Truck />, desc: 'Coordinate job assignments, location-based routing, and escalation for field service teams.' },
    { title: 'Follow-Up & Retention', icon: <RefreshCw />, desc: 'Flag overdue clients using service-specific return windows and prepare owner-approved follow-up.' },
    { title: 'Document & Data Processing', icon: <FileText />, desc: 'Extract, validate, and route data from forms, tickets, inspections, and intake documents.' },
    { title: 'CRM, POS, Accounting & API Integrations', icon: <Network />, desc: 'Connect approved business systems after technical review to create unified workflows.' },
    { title: 'Reporting & Exception Management', icon: <BarChart3 />, desc: 'Generate operations summaries, flag exceptions, and surface the work that needs human attention.' },
    { title: 'Human Approval & Privacy Controls', icon: <ShieldCheck />, desc: 'Sensitive actions use permissions, escalation rules, and review points instead of unrestricted autonomy.' },
  ];

  const operatingModel = [
    { step: '01', title: 'Audit the system', desc: 'Map the operational workflow and identify where time and revenue are lost.' },
    { step: '02', title: 'Map the workflow', desc: 'Document each step, decision point, handoff, and exception in the process.' },
    { step: '03', title: 'Determine whether existing software is enough', desc: 'Review current tools and recommend existing solutions where they fit.' },
    { step: '04', title: 'Define agent scope', desc: 'Specify what the agent may do, what stays human-reviewed, and where escalation applies.' },
    { step: '05', title: 'Connect approved systems', desc: 'Integrate only the tools and data sources reviewed and approved for the workflow.' },
    { step: '06', title: 'Test against acceptance criteria', desc: 'Run test scenarios before live deployment to validate behavior and guardrails.' },
    { step: '07', title: 'Launch with human escalation', desc: 'Deploy with clear escalation paths and human review for high-risk actions.' },
    { step: '08', title: 'Review and improve', desc: 'Monitor performance, review exceptions, and optimize the workflow over time.' },
  ];

  const verticals = [
    {
      name: 'Barbershops & Salons',
      agents: ['Missed-call and booking agent', 'Rebooking and retention agent', 'Client intake chatbot', 'Owner operations summary'],
    },
    {
      name: 'HVAC & Field Service',
      agents: ['Lead intake agent', 'Quote follow-up agent', 'Dispatch coordination agent', 'Customer-status agent'],
    },
    {
      name: 'Waste Management',
      agents: ['Route-exception agent', 'Pickup notification agent', 'Scale-ticket extraction agent', 'Billing-data bridge'],
    },
    {
      name: 'Auto Repair',
      agents: ['Inspection approval agent', 'Customer-status chatbot', 'Estimate follow-up agent', 'Service reminder agent'],
    },
    {
      name: 'Daycare & Childcare',
      agents: ['Enrollment intake agent', 'Parent communication agent', 'Document collection workflow', 'Attendance exception summary'],
    },
    {
      name: 'Restaurants & Hospitality',
      agents: ['Reservation and inquiry agent', 'Catering intake agent', 'Direct-ordering chatbot', 'Review-request workflow'],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
              className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-lime-600/10 rounded-full blur-[100px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
              className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[100px]"
            />
          </div>

          <div className="container relative z-10 max-w-6xl">
            <Link href="/services" className="inline-flex items-center text-zinc-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors text-sm font-mono tracking-wider">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              BACK TO SERVICES
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-6"
                >
                  <Bot className="w-4 h-4" /> AI Agents & Agentic Automation
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight"
                >
                  Build the Agent <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Around the Problem.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-zinc-600 dark:text-gray-400 text-xl leading-relaxed mb-4 max-w-lg"
                >
                  We build controlled AI agents for the work your business repeats every day. Start with one pain point, connect the tools that fit, and expand only when the workflow proves useful.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-lime-600 dark:text-lime-400 font-bold text-lg mb-8"
                >
                  Audit the System. Scale the Business.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/pricing" className="bg-lime-500 hover:bg-lime-400 text-zinc-950 font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)]">
                    See Agent Packages
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-zinc-300 dark:border-white/20 hover:bg-zinc-100/80 dark:hover:bg-white/5 text-zinc-900 dark:text-white font-medium py-4 px-8 rounded-lg transition-all">
                    Book a Fit Call
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-10 border border-dashed border-lime-500/20 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl"
                >
                  <div className="bg-slate-50 dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/5 aspect-[4/3] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <div className="absolute inset-0 bg-lime-500/20 blur-[50px] rounded-full"></div>
                      <Cpu className="w-24 h-24 text-lime-400 relative z-10" />
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-3 h-3 bg-lime-500 rounded-full shadow-[0_0_10px_rgba(132,204,22,1)]"></div>
                      </motion.div>
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute inset-4">
                        <div className="absolute bottom-10 left-0 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,1)]"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -inset-4 bg-gradient-to-r from-lime-600 to-green-600 opacity-20 blur-2xl -z-10 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="solutions" className="py-24 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/50">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4"
              >
                Agent Capabilities Built Around Your Workflow
              </motion.h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                We do not sell an unrestricted chatbot. We map the work, connect approved tools, define what the agent may do, and keep sensitive actions behind human review.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,204,22,0.15)] hover:border-lime-500/30"
                >
                  <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center text-lime-600 dark:text-lime-400 mb-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(cap.icon, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{cap.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* How a Controlled Agent Executes Work */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 border border-lime-500/20 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-lime-300 mb-6">How a Controlled Agent Executes Work</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-lime-400 font-mono text-sm mb-2">01. CAPTURE & CLASSIFY</div>
                  <h4 className="text-xl font-semibold mb-2">Approved Inputs</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Approved calls, messages, forms, and system events are classified against your business rules. Unknown or sensitive requests are flagged instead of guessed.
                  </p>
                </div>
                <div>
                  <div className="text-lime-400 font-mono text-sm mb-2">02. APPLY RULES</div>
                  <h4 className="text-xl font-semibold mb-2">Workflow Guardrails</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The agent uses your approved FAQs, service intervals, business rules, and escalation paths to prepare the next action. It does not invent prices, policies, or commitments.
                  </p>
                </div>
                <div>
                  <div className="text-lime-400 font-mono text-sm mb-2">03. EXECUTE & RECORD</div>
                  <h4 className="text-xl font-semibold mb-2">Human-Visible Actions</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Approved actions can update connected systems and produce an audit trail. High-risk actions pause for owner approval, and exceptions stay visible for follow-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Model */}
        <section className="py-24 bg-slate-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                Audit the System. <span className="text-lime-500 dark:text-lime-400">Scale the Business.</span>
              </h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Every agent implementation follows the same operating model to ensure scope, guardrails, and human review are defined before launch.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {operatingModel.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-lime-500/30 transition-all"
                >
                  <div className="text-lime-500 font-mono text-sm font-bold mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Vertical Examples */}
        <section className="py-24 bg-white dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                Example Agent Workflows by Industry
              </h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                These are example workflow patterns, not verified client outcomes. Every implementation is scoped to the specific business, tools, and operating rules.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {verticals.map((vertical, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-lime-500/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">{vertical.name}</h3>
                  <ul className="space-y-2">
                    {vertical.agents.map((agent, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <Bot className="w-4 h-4 mt-0.5 text-lime-500 flex-shrink-0" />
                        <span>{agent}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">How long does agent deployment take?</h3>
                <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
                  Timeline depends on the workflow, tools, access, and approval requirements. We begin with a fit review, map the process, test the agent, and agree on a launch scope before live deployment.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Can agents integrate with our existing systems?</h3>
                <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
                  Often. We first confirm that the system supports a safe integration path, such as an API, webhook, export, or approved database connection. We do not promise compatibility before reviewing the environment.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">How is business data handled?</h3>
                <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
                  We configure approved providers and access controls for the agreed workflow. Exact data handling depends on the tools, providers, contracts, retention settings, and information you choose to connect. We review those boundaries before launch.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">What industries do you work with?</h3>
                <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
                  We work with service, local, and operations-heavy businesses. Barbershops, HVAC teams, waste operators, auto-repair shops, childcare providers, and restaurants are common starting points. The agent approach works wherever repetitive workflows, disconnected systems, or manual work create a real gap.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30">
          <div className="container max-w-4xl text-center">
            <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Ready to put one workflow on an agent?</h2>
            <p className="text-zinc-600 dark:text-gray-400 text-lg mb-8">Start with a Fit Call. We will scope the agent around your business, existing tools, and operating rules.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-lime-500 hover:bg-lime-400 shadow-lg shadow-lime-500/20 text-zinc-950 font-bold rounded-lg transition-all">See Agent Packages</Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-100/80 dark:bg-white/5 text-zinc-900 dark:text-white font-bold border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all rounded-lg">Book a Fit Call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
