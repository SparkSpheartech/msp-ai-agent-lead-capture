"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Award, Target, Heart, Play, Sparkles } from 'lucide-react';

const teamMembers = [
  {
    name: 'Shazaly Musa',
    role: 'Founder',
    subtitle: 'Automation Architect',
    image: '/founder-new.webp',
    video: '/videos/founder.mp4',
    description: 'Builds the technical foundations that help businesses scale. He focuses on connecting different systems together so owners can step away from manual admin work.'
  },
  {
    name: 'Daisy',
    role: 'COO',
    subtitle: 'Client Operations',
    image: '/executive-assistant.webp',
    video: '/videos/executive-assistant.mp4',
    description: 'The operational backbone of the team. She manages client communications and makes sure every automation project gets delivered on schedule.'
  },
  {
    name: 'Travis',
    role: 'CIO',
    subtitle: 'Infrastructure',
    image: '/cto-new.webp',
    video: '/videos/cto.mp4',
    description: 'Manages our secure hosting and backend systems. He makes sure the tools and automations we deploy stay reliable and secure within agreed SLA boundaries.'
  },
  {
    name: 'Eissa',
    role: 'CFO',
    subtitle: 'Finance & Legal',
    image: '/devops-engineer.webp',
    video: '/videos/devops-engineer.mp4',
    description: 'Oversees financial operations, compliance, and legal structures to support rapid scaling.'
  },
  {
    name: 'Shima',
    role: 'GTM',
    subtitle: 'Software Curation & Marketing',
    image: '/digital-marketing.webp',
    video: '/videos/digital-specialist.mp4',
    description: 'Tests and reviews the software we recommend to clients. She also handles the digital strategies that help businesses get noticed online.'
  },
];

function TeamCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden group hover:border-lime-500/50 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-[4/5] relative overflow-hidden">
        {/* Static Image */}
        <img 
          src={member.image} 
          alt={member.name} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
        />
        {/* Video on Hover */}
        <video
          ref={videoRef}
          src={member.video}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">{member.subtitle}</p>
        </div>
        {/* Play indicator */}
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-lime-500/80 flex items-center justify-center transition-opacity ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <Play className="w-4 h-4 text-zinc-950 ml-1" />
        </div>
      </div>
      <div className="p-6 pt-4">
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const values = [
    {
      icon: <Target />,
      title: 'Radical Transparency',
      description: 'We don\'t hide the tools we use. We evaluate existing software first and recommend custom agents only where manual work or disconnected systems remain.'
    },
    {
      icon: <Award />,
      title: 'Engineering Quality',
      description: 'We don\'t just string apps together. We build durable, secure AI agent workflows and digital systems tailored to your operating rules.'
    },
    {
      icon: <Heart />,
      title: 'Practical AI Mission',
      description: 'We bring practical AI systems to owner-led businesses — combining smart technology with hands-on service to audit, automate, and scale operations.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
        
        {/* Hero Banner */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              <span className="text-lime-600 dark:text-lime-400 text-xs md:text-sm font-semibold tracking-wider uppercase">OUR MISSION STATEMENT</span>
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight tracking-tight italic">
              "Practical AI Systems for Real Business Work."
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              SPARKSPHEAR Tech Solutions builds controlled AI agents, chatbots, and digital systems for repetitive business workflows across service and operations-heavy industries.
            </p>
            <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-2xl mx-auto text-left text-sm text-zinc-600 dark:text-zinc-400">
              <h2 className="font-bold text-zinc-900 dark:text-white mb-2">Our Two Divisions</h2>
              <p className="mb-2">
                <strong>Side A — SPARKSPHEAR Field Notes:</strong> Our independent editorial research blog where we review software tools, publish software rankings, and write industry tear-downs.
              </p>
              <p>
                <strong>Side B — SPARKSPHEAR Tech Solutions:</strong> Our core agency implementation website where we audit business workflows, build controlled AI agents, and deliver custom digital systems.
              </p>
            </div>
          </div>
        </section>

        {/* Team Bios Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-1.5 mb-4">
                <span className="text-lime-600 dark:text-lime-400 text-xs font-semibold tracking-wider uppercase">AUTOMATION ARCHITECTS & SYSTEMS ENGINEERS</span>
              </span>
              <h2 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-4">
                The Team Behind <span className="text-lime-600 dark:text-lime-500">SPARKSPHEAR</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We audit operational bottlenecks, design agent workflows, and build the custom software bridges that connect your business tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-2 block">GUIDING PRINCIPLES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Why Businesses Trust Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-lime-500/10 text-lime-600 dark:text-lime-400 flex items-center justify-center mb-6">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{v.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Assessment Methodology */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950 relative overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                  Our <span className="text-lime-600 dark:text-lime-500">Methodology</span>
                </h2>
                <h3 className="text-xl text-zinc-900 dark:text-white font-semibold mb-4">Audit the System. Scale the Business.</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  We approach workflow automation as systems engineers. We start with a Workflow Audit to map your process, evaluate existing tools, and design controlled AI agents that operate within strict business rules.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 dark:text-lime-500 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-900 dark:text-white block mb-1">Workflow Mapping</strong>
                      <span className="text-zinc-600 dark:text-zinc-400 text-sm">We map every input, step, decision point, and exception before writing a single line of code.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-lime-600 dark:text-lime-500 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-900 dark:text-white block mb-1">Controlled Execution</strong>
                      <span className="text-zinc-600 dark:text-zinc-400 text-sm">Sensitive actions stay behind permissions, escalation rules, and human review points.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Ready to Automate?</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
                  Let us audit your operational workflow. We'll identify bottlenecks, evaluate existing tools, and design the right first agent implementation for your team.
                </p>
                <Link href="/services/it-audits" className="w-full py-4 bg-lime-500 text-zinc-950 rounded-xl font-bold text-center block hover:bg-lime-400 transition-colors shadow-lg shadow-lime-500/20">
                  Explore Workflow Audit &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
