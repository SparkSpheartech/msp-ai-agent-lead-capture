"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Award, Target, Heart, Play, Sparkles, Cpu, Zap } from 'lucide-react';

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
    description: 'Manages our secure hosting and backend systems. He makes sure the tools and automations we deploy stay reliable and secure around the clock.'
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
      description: 'We don\'t hide the tools we use. We teach you exactly what software works, and let you decide if you want to build it yourself or hire us.'
    },
    {
      icon: <Award />,
      title: 'Engineering Quality',
      description: 'We don\'t just string apps together. We build durable, secure systems that can handle real business volume.'
    },
    {
      icon: <Heart />,
      title: 'Hands-On Mission',
      description: 'We bring the spark to small business owners — combining smart technology with hands-on service to help them work faster, save money, and grow.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
        
        {/* Mission Statement Anchor Hero Banner */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-black dark:via-zinc-950 dark:to-zinc-950 border-b border-zinc-200 dark:border-lime-500/20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              <span className="text-lime-600 dark:text-lime-400 text-xs md:text-sm font-semibold tracking-wider uppercase">OUR MISSION STATEMENT</span>
            </span>
            <blockquote className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 leading-tight tracking-tight italic">
              "We bring the spark to small business owners — combining smart technology with hands-on service to help them work faster, save money, and grow."
            </blockquote>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              At SPARKSPHEAR, we exist to bridge the gap between enterprise-grade AI automation and the real daily needs of growing businesses.
            </p>
          </div>
        </section>

        {/* Team Bios Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-1.5 mb-4">
                <span className="text-lime-600 dark:text-lime-400 text-xs font-semibold tracking-wider uppercase">AUTOMATION ARCHITECTS & TECH CURATORS</span>
              </span>
              <h2 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-4">
                The Minds Behind <span className="text-lime-600 dark:text-lime-500">SPARKSPHEAR</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We don't just build software. We test, break, and review hundreds of B2B tools every year to find the absolute best solutions for our clients.
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

        {/* Software Review Methodology */}
        <section className="py-20 border-t border-zinc-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950 relative overflow-hidden">
          <div className="container max-w-5xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                  Our <span className="text-lime-600 dark:text-lime-500">Methodology</span>
                </h2>
                <h3 className="text-xl text-zinc-900 dark:text-white font-semibold mb-4">Why trust our Industry Guides?</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Unlike standard affiliate directories that list every software under the sun, we approach software as engineers and architects. We combine smart technology with hands-on testing to make sure every recommendation actually saves you money.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-lime-600 dark:text-lime-500 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-900 dark:text-white block mb-1">Independent Testing</strong>
                      <span className="text-zinc-600 dark:text-zinc-400 text-sm">We personally test the UI, automation rules, and integrations before recommending anything.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-lime-600 dark:text-lime-500 flex-shrink-0" />
                    <div>
                      <strong className="text-zinc-900 dark:text-white block mb-1">Curated Excellence</strong>
                      <span className="text-zinc-600 dark:text-zinc-400 text-sm">We only recommend the top 3-5 tools per industry, not 50.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Ready to Automate?</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
                  Let us audit your operational tech stack. We'll find the leaks, recommend the exact tools, and build out custom automations for your team.
                </p>
                <Link href="/services/it-audits" className="w-full py-4 bg-lime-500 text-zinc-950 rounded-xl font-bold text-center block hover:bg-lime-400 transition-colors shadow-lg shadow-lime-500/20">
                  Start Your Master Audit &rarr;
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
