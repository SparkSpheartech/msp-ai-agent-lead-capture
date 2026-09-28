"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ArrowRight, Clock, Users, FileText, Calendar, Shield, MessageSquare, Bell, TrendingUp, Stethoscope, MapPin, BarChart3, Lock, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeHealthCareClient() {
  const challenges = [
    { icon: <Clock />, title: 'Staff Scheduling Complexity', desc: 'Managing home visits across wide geographic areas with shift coverage, travel time, and compliance requirements.' },
    { icon: <FileText />, title: 'Compliance Documentation', desc: 'Tracking visit documentation, care plans, regulatory reporting, and audit trails across multiple clients and staff.' },
    { icon: <Users />, title: 'Client Care Coordination', desc: 'Synchronizing care teams, families, and healthcare providers when multiple clinicians serve the same client.' },
    { icon: <MessageSquare />, title: 'Communication Gaps', desc: 'Missed handoffs between shifts, incomplete visit notes, and delayed critical updates between care teams.' },
    { icon: <Bell />, title: 'Missed Visits & No-Shows', desc: 'Late cancellations, staff shortages, and emergency coverage requests disrupting care continuity.' },
    { icon: <TrendingUp />, title: 'Revenue Cycle Leakage', desc: 'Incomplete documentation leading to denied claims, delayed billing, and lost reimbursement revenue.' },
  ];

  const capabilities = [
    { title: 'Smart Staff Scheduling', icon: <Calendar />, desc: 'Automated scheduling that accounts for travel routes, certification requirements, shift preferences, and real-time availability. Automated shift fill alerts when gaps appear.' },
    { title: 'Visit Documentation & Compliance', icon: <FileText />, desc: 'Digital visit checklists, e-signatures, encounter forms, and compliance tracking. Auto-generated visit summaries and audit-ready documentation.' },
    { title: 'Real-Time Care Alerts', icon: <Bell />, desc: 'Automated notifications for care plan changes, medication updates, emergency contacts, and critical health events. Push notifications for time-sensitive care actions.' },
    { title: 'Client & Family Portals', icon: <Users />, desc: 'Secure client and family portals for care plan access, visit scheduling, progress updates, and direct messaging with care coordinators.' },
    { title: 'Claims & Billing Automation', icon: <TrendingUp />, desc: 'Automated claim generation from visit documentation, eligibility verification, denial tracking, and payment follow-up workflows.' },
    { title: 'Regulatory Reporting', icon: <Shield />, desc: 'Automated compliance reports for state and federal requirements, quality metrics, incident reporting, and survey preparation.' },
    { title: 'GPS Location & Visit Verification', icon: <MapPin />, desc: 'Verified visit start/end times, location check-in/out, travel time tracking, and route optimization for field staff.' },
    { title: 'Incident & Risk Management', icon: <Lock />, desc: 'Automated incident reporting, risk assessment tracking, corrective action workflows, and regulatory breach notifications.' },
    { title: 'Analytics & Performance Dashboards', icon: <BarChart3 />, desc: 'Real-time dashboards for utilization, staff performance, client outcomes, revenue cycle metrics, and compliance status.' },
  ];

  const operatingModel = [
    { step: '01', title: 'Map the agency workflow', desc: 'Document current scheduling, visit, documentation, and billing processes.' },
    { step: '02', title: 'Identify pain points', desc: 'Pinpoint where staff time is wasted, errors occur, and revenue leaks happen.' },
    { step: '03', title: 'Define automation scope', desc: 'Specify which workflows to automate, what stays human-reviewed, and compliance requirements.' },
    { step: '04', title: 'Connect existing systems', desc: 'Integrate with EHR/EMR, payroll, scheduling, and billing platforms the agency already uses.' },
    { step: '05', title: 'Build & test workflows', desc: 'Develop and validate automation against real-world scenarios and compliance rules.' },
    { step: '06', title: 'Train staff & launch', desc: 'Roll out with training, support materials, and gradual adoption with human oversight.' },
    { step: '07', title: 'Monitor & optimize', desc: 'Track adoption, outcomes, and compliance; refine workflows based on agency feedback.' },
  ];

  const verticals = [
    {
      name: 'Home Health Agencies',
      agents: ['Patient intake & onboarding agent', 'Scheduling optimization agent', 'Visit documentation agent', 'Compliance tracking agent'],
    },
    {
      name: 'Personal Care Services',
      agents: ['Care plan update agent', 'Family notification agent', 'Shift coverage agent', 'Incident reporting agent'],
    },
    {
      name: 'Post-Acute Care',
      agents: ['Discharge coordination agent', 'Follow-up care agent', 'Medication reminder agent', 'Outcome tracking agent'],
    },
    {
      name: 'Hospice Care',
      agents: ['Family communication agent', 'Visit scheduling agent', 'Bereavement tracking agent', 'Care team coordination agent'],
    },
    {
      name: 'Pediatric Home Care',
      agents: ['Parent communication agent', 'Therapy session tracker', 'Medical alert agent', 'Care team sync agent'],
    },
    {
      name: 'Senior Home Care',
      agents: ['Wellness check agent', 'Medication adherence agent', 'Emergency response agent', 'Family update agent'],
    },
  ];

  const faqs = [
    { q: 'How does home health care automation handle compliance?', a: 'We build automation that respects HIPAA, state regulations, and payer requirements. Every automated action includes audit trails, access controls, and documentation that meets regulatory standards. We review your specific compliance requirements before implementation.' },
    { q: 'Can automation integrate with our existing EHR or scheduling system?', a: 'Often. We first confirm that your EHR, scheduling, or billing system supports a safe integration path through APIs, webhooks, or approved data exchanges. We do not promise compatibility before reviewing your environment.' },
    { q: 'How long does implementation take?', a: 'Timeline depends on your current systems, staffing needs, and compliance requirements. We begin with a workflow audit, map the processes, test the automation, and agree on a phased rollout before live deployment.' },
    { q: 'What happens if a system integration fails?', a: 'We build in human escalation paths. If an automated workflow fails, the issue is flagged to your care coordinator with clear next steps. No client care is disrupted by system failures.' },
    { q: 'How do you handle staff adoption?', a: 'We design automation to reduce staff burden, not add complexity. Training, support materials, and gradual rollout ensure your team adopts the tools. We track adoption metrics and adjust based on feedback.' },
    { q: 'Is client data kept secure?', a: 'Yes. We implement HIPAA-compliant data handling, encryption, access controls, and audit trails. Data retention and sharing follow your agency policies and regulatory requirements.' },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="min-h-screen bg-slate-50 dark:bg-zinc-950">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
              className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
              className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]"
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
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-6"
                >
                  <Heart className="w-4 h-4" /> Home Health Care Automation
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight"
                >
                  Automate the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Admin. Focus on Care.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-zinc-600 dark:text-gray-400 text-xl leading-relaxed mb-4 max-w-lg"
                >
                  We build workflow automation, AI agents, and connected systems for home health care agencies — reducing admin burden, improving compliance, and keeping care teams coordinated.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-teal-600 dark:text-teal-400 font-bold text-lg mb-8"
                >
                  Audit the System. Scale the Business.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/contact" className="bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    Book a Fit Call
                  </Link>
                  <Link href="/services" className="bg-transparent border border-zinc-300 dark:border-white/20 hover:bg-zinc-100/80 dark:hover:bg-white/5 text-zinc-900 dark:text-white font-medium py-4 px-8 rounded-lg transition-all">
                    View All Services
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
                  className="absolute -inset-10 border border-dashed border-teal-500/20 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl p-2 shadow-2xl"
                >
                  <div className="bg-slate-50 dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/5 aspect-[4/3] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <div className="absolute inset-0 bg-teal-500/20 blur-[50px] rounded-full"></div>
                      <Stethoscope className="w-24 h-24 text-teal-400 relative z-10" />
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,1)]"></div>
                      </motion.div>
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute inset-4">
                        <div className="absolute bottom-10 left-0 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-20 blur-2xl -z-10 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Challenges */}
        <section className="py-24 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/50">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4"
              >
                The Real Challenges Home Health Agencies Face
              </motion.h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                These are the operational gaps where automation and connected systems create real relief for agency owners and care coordinators.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:border-teal-500/30"
                >
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Capabilities */}
        <section id="solutions" className="py-24 bg-slate-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4"
              >
                Automation Built for Home Health Care
              </motion.h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                We connect your scheduling, documentation, billing, and communication workflows into a unified system that reduces admin burden and improves compliance.
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
                  className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:border-teal-500/30"
                >
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(cap.icon, { className: 'w-6 h-6' })}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{cap.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Automation Works */}
        <section className="py-24 bg-white dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                How We Implement Home Health <span className="text-teal-500 dark:text-teal-400">Automation</span>
              </h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Every implementation follows a structured process to ensure compliance, staff adoption, and measurable results.
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
                  className="bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-teal-500/30 transition-all"
                >
                  <div className="text-teal-500 font-mono text-sm font-bold mb-3">{item.step}</div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agent Use Cases by Care Type */}
        <section className="py-24 bg-slate-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                AI Agent Use Cases by Care Type
              </h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                These are example workflow patterns. Every implementation is scoped to the specific agency, tools, and care requirements.
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
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-teal-500/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">{vertical.name}</h3>
                  <ul className="space-y-2">
                    {vertical.agents.map((agent, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <Heart className="w-4 h-4 mt-0.5 text-teal-500 flex-shrink-0" />
                        <span>{agent}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Ready to reduce admin burden and improve compliance?</h2>
            <p className="text-teal-100 text-lg mb-8">Start with a Fit Call. We will scope automation around your agency, existing systems, and care requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-zinc-100 text-teal-700 font-bold rounded-lg transition-all shadow-lg">Book a Fit Call</Link>
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all">See Pricing</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-white/5">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950">
          <div className="container max-w-4xl text-center">
            <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">Ready to automate your agency workflow?</h2>
            <p className="text-zinc-600 dark:text-gray-400 text-lg mb-8">Start with a Fit Call. We will scope automation around your agency, existing systems, and care requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 shadow-lg shadow-teal-500/20 text-zinc-950 font-bold rounded-lg transition-all">Book a Fit Call</Link>
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-100/80 dark:bg-white/5 text-zinc-900 dark:text-white font-bold border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all rounded-lg">See Pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
