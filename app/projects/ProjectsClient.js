"use client";

import React, { Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight, Download, Mail, Loader2, CheckCircle2, Cpu } from 'lucide-react';
import Link from 'next/link';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const market = searchParams.get('market') || 'All';

  // Modal State for Blueprint Download
  const [selectedProject, setSelectedProject] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projects = [
    {
      id: 1,
      title: "HVAC Automated Dispatcher & AI Voice Agent",
      market: "HVAC",
      client: "Midwest Heating & Cooling",
      metrics: "Saved 18.5 hrs/wk per technician",
      description: "An intelligent agentic dispatcher that parses inbound emergency service calls, evaluates technician location via GPS telematics, and dispatches job cards directly into CRM without human intervention.",
      category: "AI & Dispatch Automation",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
      serviceLink: "/services/ai-automation"
    },
    {
      id: 2,
      title: "Circle Logistics AI Freight Gateway",
      market: "Logistics",
      client: "Circle Logistics Network",
      metrics: "90% manual data entry reduction",
      description: "Custom AI document intelligence gateway that ingests freight rate confirmations, extracts load numbers and pay rates, and syncs status directly into transport management software.",
      category: "Document Intelligence API",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      serviceLink: "/services/ai-automation"
    },
    {
      id: 3,
      title: "GigaPulse Real-Time NOC Telemetry Platform",
      market: "IT Operations",
      client: "GigaPulse Networks",
      metrics: "24/7 automated alert escalation",
      description: "Enterprise Network Operations Center (NOC) dashboard providing real-time telemetry, automated failure prediction, and SMS escalation protocols for distributed hardware infrastructure.",
      category: "Web Architecture & Telemetry",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      serviceLink: "/services/it-audits"
    },
    {
      id: 4,
      title: "PHP Healthcare EDI Claims Engine",
      market: "Healthcare",
      client: "PHP Commercial Claims Group",
      metrics: "Zero manual claims re-entry",
      description: "Automated healthcare EDI claims automation pipeline that parses 837 claim files, validates medical billing codes against clearinghouse rules, and reconciles 835 payment advice automatically.",
      category: "Operational Software Bridges",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      serviceLink: "/services/it-audits"
    },
    {
      id: 5,
      title: "Pakito's Taqueria Cloud POS & QR System",
      market: "Hospitality",
      client: "Pakito's Hospitality Group",
      metrics: "Accelerated order processing",
      description: "A fast, modern web ordering platform integrated with Cloud POS. Allows diners to scan QR codes at tables, order directly from digital menus, and process payments instantly.",
      category: "Digital Front Doors & Portals",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      serviceLink: "/services/web-design"
    },
    {
      id: 6,
      title: "Salon Waitlist AI & Deposit Automation",
      market: "Beauty & Wellness",
      client: "Aura Luxury Spa & Salon",
      metrics: "Eliminated deposit no-shows",
      description: "A specialized AI receptionist agent that handles inbound waitlist requests 24/7, collects card-on-file deposits, and sends dynamic SMS appointment confirmations.",
      category: "AI Customer Re-engagement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      serviceLink: "/services/ai-automation"
    }
  ];

  const filteredProjects = market === 'All' 
    ? projects 
    : projects.filter(p => p.market.toLowerCase().includes(market.toLowerCase()));

  const handleBlueprintDownload = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tags: ['blueprint-download', 'agency-lead', `project-${selectedProject.id}`],
          source: `Blueprint Download: ${selectedProject.title}`
        })
      });

      setSubmitted(true);
      setTimeout(() => {
        setSelectedProject(null);
        setSubmitted(false);
        setEmail('');
      }, 4000);
    } catch (err) {
      console.error('Blueprint download error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex flex-col transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <header className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <FolderGit2 className="w-4 h-4" /> Client Implementation Case Studies
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Systems We Have Built
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore public case studies of automated call dispatchers, API data bridges, and custom web portals built for growing companies.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-lime-500/50 transition-all duration-300 flex flex-col shadow-lg group"
            >
              <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-lime-500/40 text-lime-400 text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h2>
                  <div className="text-xs font-mono text-lime-600 dark:text-lime-400 font-bold mb-4">
                    {project.metrics}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 bg-slate-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl text-xs font-bold hover:bg-lime-500 hover:text-zinc-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Implementation Blueprint
                  </button>

                  <Link 
                    href={project.serviceLink}
                    className="text-xs font-bold text-lime-600 dark:text-lime-400 hover:underline flex items-center justify-center gap-1 py-1"
                  >
                    Explore Relevant Service Pathway <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Agency CTA Section */}
        <section className="bg-gradient-to-br from-lime-500/10 via-white to-slate-50 dark:via-zinc-900 dark:to-zinc-900 border border-lime-500/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-4">
            Need a Custom System Built for Your Operations?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            We map your call intake, dispatching, CRM, and reporting workflows, then deploy custom AI agents that eliminate repetitive manual steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-lime-500 text-zinc-950 font-extrabold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 text-center"
            >
              Book a Free 15-Minute Fit Call
            </Link>
            <Link 
              href="/services/it-audits"
              className="px-8 py-4 border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white font-bold rounded-xl hover:border-lime-500 transition-all text-center"
            >
              Explore Master Business Audit
            </Link>
          </div>
        </section>
      </main>

      {/* Blueprint Download Email Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              System Blueprint Download
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              Enter your email to receive the technical architecture diagram and implementation sequence for <strong>{selectedProject.title}</strong>.
            </p>

            {submitted ? (
              <div className="p-6 bg-lime-500/10 border border-lime-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-lime-500 mx-auto" />
                <p className="font-bold text-zinc-900 dark:text-white">Blueprint Delivered!</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Check your email inbox for your technical implementation blueprint.</p>
              </div>
            ) : (
              <form onSubmit={handleBlueprintDownload} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-zinc-500 mb-1">Business Email</label>
                  <input 
                    type="email" 
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white focus:outline-none focus:border-lime-500 text-sm"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-semibold hover:border-zinc-400 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="flex-1 py-3 bg-lime-500 text-zinc-950 font-bold rounded-xl text-sm hover:bg-lime-400 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Get Blueprint'}
                  </button>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight text-center mt-3">
                  © 2026 SPARKSPHEAR Tech Solutions. Provided for individual evaluation only. By requesting, you agree to our <Link href="/privacy" className="underline hover:text-lime-500">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function ProjectsClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex items-center justify-center"><div className="w-12 h-12 border-4 border-lime-500 border-t-transparent rounded-full animate-spin" /></div>}>
      <ProjectsContent />
    </Suspense>
  );
}
