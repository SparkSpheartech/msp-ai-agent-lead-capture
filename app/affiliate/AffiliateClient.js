"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Wrench, Building2, ShoppingCart, ExternalLink, Zap } from 'lucide-react';
import Link from 'next/link';

const industries = [
  { id: 'hvac', name: 'HVAC & Field Services', icon: <Wrench size={20} /> },
  { id: 'real-estate', name: 'Real Estate (Coming Soon)', icon: <Building2 size={20} />, disabled: true },
  { id: 'ecommerce', name: 'E-commerce (Coming Soon)', icon: <ShoppingCart size={20} />, disabled: true },
];

const hvacTools = [
  {
    id: 1,
    name: "AI Dispatch & Routing Engine",
    description: "Automate scheduling, predict job durations, and instantly route technicians based on real-time traffic and skillsets. Save 15 hours a week in dispatch logistics.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    affiliateLink: "#",
    tag: "Operations"
  },
  {
    id: 2,
    name: "Smart HVAC CRM Hub",
    description: "Consolidate customer data, automate review generation, and instantly follow up with quotes. A central hub tailored for high-volume service contractors.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    affiliateLink: "#",
    tag: "Growth"
  },
  {
    id: 3,
    name: "24/7 Lead Capture Voice Bot",
    description: "Never miss an emergency AC repair call again. AI voice agents answer calls, qualify leads, and book appointments directly into your calendar.",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800&q=80",
    affiliateLink: "#",
    tag: "Sales"
  }
];

export default function AffiliateClient() {
  const [activeIndustry, setActiveIndustry] = useState('hvac');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedIndustryObj = industries.find(i => i.id === activeIndustry);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark text-white pt-24 pb-20">
        {/* Hero Section */}
        <section className="container max-w-5xl mx-auto px-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-semibold text-sm tracking-wide">
              <Zap size={16} /> THE BUSINESS THAT STARTS WITH YOU
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              Every Industry Needs AI.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
                Find The Tools For Yours.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              AI isn't one-size-fits-all. We curate and provide the exact specialized AI agents, automation workflows, and software stacks designed specifically for your business model.
            </p>
          </motion.div>

          {/* Industry Selector */}
          <div className="relative max-w-md mx-auto z-30">
            <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Select Your Business Model</label>
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between bg-zinc-900 border-2 border-gray-800 hover:border-primary/50 text-white p-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <span className="flex items-center gap-3">
                  {selectedIndustryObj?.icon}
                  {selectedIndustryObj?.name}
                </span>
                <ChevronDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-primary' : 'text-gray-500'}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {industries.map((ind) => (
                      <button
                        key={ind.id}
                        disabled={ind.disabled}
                        onClick={() => {
                          setActiveIndustry(ind.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-4 text-left transition-colors ${
                          ind.disabled 
                            ? 'opacity-40 cursor-not-allowed' 
                            : 'hover:bg-primary/10 hover:text-primary text-white'
                        } ${activeIndustry === ind.id ? 'bg-primary/5 text-primary border-l-4 border-primary' : 'border-l-4 border-transparent'}`}
                      >
                        {ind.icon}
                        <span className="font-semibold">{ind.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Dynamic Content Section */}
        <div className="container max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {activeIndustry === 'hvac' && (
              <motion.div
                key="hvac-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-16"
              >
                {/* Blog Integration Feature */}
                <section className="bg-gradient-to-br from-zinc-900 to-black border border-primary/20 rounded-3xl p-1 md:p-2 overflow-hidden shadow-[0_0_50px_rgba(163,230,53,0.05)]">
                  <div className="bg-black rounded-[1.25rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-6">
                      <div className="text-primary font-bold tracking-widest text-sm uppercase">Industry Intelligence</div>
                      <h2 className="text-3xl md:text-4xl font-bold leading-tight">Beyond the Wrench: How AI is Quietly Building $100k-a-Month HVAC Empires</h2>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        The HVAC industry is plagued by a structural paradox often referred to as the "entrepreneurial seizure." Discover how the top 1% of service businesses are escaping the technical trap using specialized AI agents.
                      </p>
                      <a 
                        href="https://sparkspheartech.blogspot.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-gray-700 hover:border-primary/50 text-white px-6 py-3 rounded-lg font-bold transition-all"
                      >
                        Read Full Market Analysis <ExternalLink size={18} />
                      </a>
                    </div>
                    <div className="flex-1 w-full relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
                          alt="HVAC Tech using tablet" 
                          className="relative rounded-2xl object-cover w-full h-[300px] border border-gray-800"
                        />
                    </div>
                  </div>
                </section>

                {/* AI Tools Grid */}
                <section>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Recommended HVAC AI Stack</h3>
                      <p className="text-gray-400">The core tools required to automate dispatch, sales, and operations.</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {hvacTools.map((tool) => (
                      <div key={tool.id} className="bg-zinc-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(163,230,53,0.1)] flex flex-col">
                        <div className="h-48 relative overflow-hidden">
                          <img src={tool.image} alt={tool.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/30">
                            {tool.tag}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h4 className="text-xl font-bold mb-3">{tool.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                            {tool.description}
                          </p>
                          <a 
                            href={tool.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-lime-400 text-black font-bold py-3 rounded-xl transition-colors"
                          >
                            Explore Solution <ArrowRight size={18} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
