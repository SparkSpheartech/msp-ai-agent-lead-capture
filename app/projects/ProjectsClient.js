"use client";

import React, { Suspense, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight, Lock, Mail, Loader2, Layers } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/data/affiliateProducts';
import StackQuiz from '@/components/StackQuiz';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const market = searchParams.get('market') || 'All';

  // Find full product data for tech stacks
  const getProduct = (id) => products.find(p => p.id === id) || null;

  const projects = [
    {
      id: 1,
      title: "HVAC Automated Dispatcher & AI Voice Agent",
      market: "HVAC", 
      client: "Midwest Heating & Cooling",
      metrics: "18.5 hrs/wk saved per tech • 2,400+ calls routed • 99.4% accuracy",
      description: "An intelligent agentic dispatcher that parses inbound emergency service calls, evaluates technician location via GPS telematics, and dispatches job cards directly into ServiceTitan and Jobber without human intervention.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
      link: "/services/ai-automation",
      techStack: ["servicetitan", "jobber"]
    },
    {
      id: 2,
      title: "Circle Logistics AI Freight Gateway",
      market: "General",
      client: "Circle Logistics Network",
      metrics: "90% manual data entry reduction • <3 sec rate-con parsing",
      description: "Custom AI document intelligence gateway that ingests freight rate confirmations, extracts load numbers and pay rates, and syncs status directly into transport management software via automated EDI 204/214 pipelines.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      link: "/services/ai-automation",
      techStack: []
    },
    {
      id: 3,
      title: "GigaPulse Real-Time NOC Telemetry Platform",
      market: "General",
      client: "GigaPulse Networks",
      metrics: "24/7 automated alert escalation • 40+ node locations monitored",
      description: "Enterprise Network Operations Center (NOC) dashboard providing real-time telemetry, automated failure prediction, and SMS escalation protocols for distributed cloud and hardware infrastructure.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      link: "/services/it-audits",
      techStack: []
    },
    {
      id: 4,
      title: "PHP Healthcare EDI 837/835 Claims Engine",
      market: "General",
      client: "PHP Commercial Claims Group",
      metrics: "Zero manual claims re-entry • 100% HIPAA compliance",
      description: "Automated healthcare EDI claims automation pipeline that parses 837 claim files, validates medical billing codes against clearinghouse rules, and reconciles 835 payment advice automatically.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      link: "/services/it-audits",
      techStack: []
    },
    {
      id: 5,
      title: "Pakito's Taqueria Cloud POS & QR System",
      market: "Restaurant",
      client: "Pakito's Hospitality Group",
      metrics: "22% faster table turnover • $0 third-party delivery fees",
      description: "A fast, modern web ordering platform integrated with Toast Cloud POS. Allows diners to scan QR codes at tables, order directly from digital menus, and process payments instantly.",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
      link: "https://pakitos-taqueria-demo.surge.sh",
      techStack: ["toast"]
    },
    {
      id: 6,
      title: "Salon Waitlist AI & Deposit Automation",
      market: "Salon",
      client: "Aura Luxury Spa & Salon",
      metrics: "35% boost in client retention • 0% no-show rate on deposits",
      description: "A specialized AI receptionist agent that handles inbound waitlist requests 24/7, collects card-on-file deposits via Boulevard and Vagaro, and sends dynamic SMS appointment confirmations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/services/ai-automation",
      techStack: ["boulevard"]
    }
  ];

  const filteredProjects = market === 'All' 
    ? projects 
    : projects.filter(p => p.market === market);

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('sparksphear_user_email');
    const unlocked = localStorage.getItem('projects_unlocked');
    if (userEmail || unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = async (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Projects Gate' })
      });

      if (res.ok) {
        localStorage.setItem('sparksphear_user_email', email.trim().toLowerCase());
        localStorage.setItem('projects_unlocked', 'true');
        setIsUnlocked(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg w-full bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl text-center"
          >
            <div className="w-16 h-16 bg-lime-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-lime-600 dark:text-lime-500 border border-lime-500/30">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
              Featured Projects & Case Studies
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
              Enter your business email to unlock full B2B case studies, system blueprints, and saved software stacks.
            </p>

            <form onSubmit={handleUnlock} className="flex flex-col gap-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 dark:text-gray-400" />
                <input 
                  type="email" 
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500 transition-colors"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm text-left">{error}</p>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-lime-500 text-zinc-950 font-extrabold uppercase tracking-wider rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 flex justify-center items-center gap-2 cursor-pointer"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Unlock Access'}
              </button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <header className="relative pt-36 pb-20 px-6 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <FolderGit2 className="w-4 h-4" /> Portfolio & Success Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight">
              {market !== 'All' ? `${market} Case Studies` : 'Featured B2B Projects & Case Studies'}
            </h1>
            <p className="text-zinc-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              See how we transform operations into scalable automated workflows, using the same tools we recommend in our guides.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Projects Grid & System Blueprints */}
      <main className="max-w-7xl mx-auto px-6 py-12 w-full flex-grow">
        {/* Customized Industry Software Stack Blueprint Generator */}
        <div className="mb-12">
          <StackQuiz />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-zinc-900/50 rounded-3xl border border-gray-200 dark:border-white/10 p-12">
            <FolderGit2 className="w-16 h-16 text-lime-600 dark:text-lime-500 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Projects Coming Soon</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
              We are currently documenting our {market} projects. Check back soon for detailed case studies.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.article 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-lime-500/50 transition-all duration-300 flex flex-col shadow-lg group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-white dark:bg-zinc-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {project.market !== 'General' && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white dark:bg-black/80 backdrop-blur-md border border-lime-500/40 text-lime-600 dark:text-lime-400 text-xs font-bold rounded-full">
                        {project.market}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-600 dark:text-lime-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Rendering (Affiliate Links) */}
                  {project.techStack?.length > 0 && (
                    <div className="mb-6 pt-4 border-t border-gray-100 dark:border-white/5">
                      <div className="text-xs text-zinc-600 dark:text-gray-400 font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Layers size={12} /> Tech Stack Used
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(id => {
                          const prod = getProduct(id);
                          if (!prod) return null;
                          return (
                            <a 
                              key={prod.id} 
                              href={prod.affiliateUrl} 
                              target="_blank" 
                              rel="noopener noreferrer sponsored"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-lime-500 hover:text-lime-600 dark:text-lime-500 transition-colors"
                            >
                              <img src={prod.logo} alt={prod.name} className="w-3.5 h-3.5 rounded-sm object-contain bg-white" />
                              {prod.name}
                            </a>
                          );
                        })}
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-lime-500/10 border border-lime-500/20 rounded-lg text-xs font-bold text-lime-600 dark:text-lime-400">
                          + Custom Code
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="mt-auto">
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-bold text-sm hover:underline"
                    >
                      View Details <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function ProjectsClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center"><div className="w-12 h-12 border-4 border-lime-500 border-t-transparent rounded-full animate-spin" /></div>}>
      <ProjectsContent />
    </Suspense>
  );
}
