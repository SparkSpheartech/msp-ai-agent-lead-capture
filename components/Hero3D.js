'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity } from 'lucide-react';

const GlobeCanvas = dynamic(() => import('./GlobeCanvas'), { ssr: false });

export default function Hero3D() {
  const [is3DLoaded, setIs3DLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIs3DLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const titleWords = ["AI", "Agents", "for", "the", "Work", "Your", "Business", "Repeats", "Every", "Day."];
  
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };
  
  const titleWordVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(10px)', rotateX: 8 },
    show: {
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)', 
      rotateX: 0,
      transition: { type: 'spring', damping: 26, stiffness: 95, mass: 1.1 },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
    show: {
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 24, stiffness: 110, delay: 0.9 },
    },
  };

  const rightContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.6 },
    },
  };
  
  const rightItemVariants = {
    hidden: { opacity: 0, x: 20, filter: 'blur(5px)' },
    show: {
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 20, stiffness: 100, mass: 0.9 },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-zinc-950 font-sans antialiased">
      
      {/* Background Glow Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-100/50 dark:from-lime-950/30 via-slate-50 dark:via-zinc-950 to-slate-100 dark:to-black" />

      {/* 3D Globe Background Canvas */}
      {is3DLoaded ? (
        <div className="absolute inset-0 z-0 opacity-55">
          <GlobeCanvas />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-100 dark:from-zinc-900 via-slate-50 dark:via-zinc-950 to-slate-200 dark:to-black" />
      )}

      {/* Hero Content Area */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] w-full max-w-[1400px] flex-col justify-between px-6 py-16 md:px-12">
        
        {/* Top Eyebrow Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Activity className="w-3.5 h-3.5 text-lime-500" />
            AI Systems for Owner-Led Service Businesses
          </span>
        </motion.div>

        {/* Bottom Dual-Column Area */}
        <div className="flex flex-col items-end justify-between gap-12 pb-8 lg:flex-row">

          {/* Left Column: Word-by-word cascade H1 + Tagline */}
          <div className="flex w-full flex-col gap-10 lg:w-3/5" style={{ perspective: '800px' }}>
            <motion.h1
              variants={titleContainerVariants}
              initial="hidden"
              animate="show"
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-zinc-900 dark:text-white sm:text-6xl md:text-7xl xl:text-8xl"
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={titleWordVariants}
                  className={`mr-[0.22em] inline-block last:mr-0 ${
                    word === "Repeats" || word === "Every" || word === "Day." ? "text-lime-600 dark:text-lime-400" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Tagline */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate="show"
              className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80"
            >
              <p className="text-lg sm:text-xl font-bold text-lime-600 dark:text-lime-400 tracking-wide">
                Audit the System. Scale the Business.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Narrative + Dual Action CTAs */}
          <motion.div
            variants={rightContainerVariants}
            initial="hidden"
            animate="show"
            className="flex w-full flex-col items-start gap-8 lg:w-2/5"
          >
            <motion.p
              variants={rightItemVariants}
              className="text-base sm:text-lg leading-relaxed font-normal text-zinc-600 dark:text-zinc-300"
            >
              SPARKSPHEAR audits repetitive workflows, determines whether existing software is enough, and builds controlled AI agents when manual work or disconnected systems remain.
            </motion.p>

            <motion.div variants={rightItemVariants} className="flex flex-col sm:flex-row gap-4 w-full">
              <Link
                href="/contact"
                className="group flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-lime-500 px-7 py-3.5 text-base font-extrabold text-zinc-950 shadow-xl shadow-lime-500/25 transition-all hover:bg-lime-400 active:scale-[0.97]"
              >
                Book a Free 15-Minute Fit Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/60 px-6 py-3.5 text-base font-bold text-zinc-900 dark:text-white hover:border-lime-500 transition-all active:scale-[0.97]"
              >
                See How We Work
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Blend Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}