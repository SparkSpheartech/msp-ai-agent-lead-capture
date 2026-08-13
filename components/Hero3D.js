'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Activity, ChevronUp, ChevronDown } from 'lucide-react';

const GlobeCanvas = dynamic(() => import('./GlobeCanvas'), { ssr: false });

const carouselItems = [
  {
    id: 1,
    title: "AI Agents for the Work Your Business Repeats Every Day.",
    tagline: "Audit the System. Scale the Business.",
    badge: "Operational Workflow Automation",
  },
  {
    id: 2,
    title: "Audit the System. Scale the Business.",
    tagline: "Practical AI Systems for Owner-Led Operations.",
    badge: "Systems Architecture & Auditing",
  },
  {
    id: 3,
    title: "Controlled Workflows Built for Real Business Work.",
    tagline: "Eliminate bottlenecked admin without adding overhead.",
    badge: "Custom Software Bridges",
  },
];

export default function Hero3D() {
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIs3DLoaded(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 4500);

    return () => clearInterval(autoPlay);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const currentItem = carouselItems[currentIndex];

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

        {/* Bottom Dual-Column Area with Vertical Carousel */}
        <div className="flex flex-col items-end justify-between gap-12 pb-8 lg:flex-row">

          {/* Left Column: Vertical Slide Carousel Heading */}
          <div className="flex w-full flex-col gap-6 lg:w-3/5">

            {/* Vertical Carousel Controls + Cards Container */}
            <div className="relative flex items-center gap-4">

              {/* Vertical Progress Indicators & Arrow Controls */}
              <div className="flex flex-col items-center gap-3 pr-2 border-r border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-lime-500 hover:text-zinc-950 transition-colors cursor-pointer text-zinc-700 dark:text-zinc-300"
                  aria-label="Previous Slide"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>

                <div className="flex flex-col gap-2 my-1">
                  {carouselItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                        idx === currentIndex
                          ? "h-8 bg-lime-500 shadow-md shadow-lime-500/40"
                          : "h-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-lime-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-lime-500 hover:text-zinc-950 transition-colors cursor-pointer text-zinc-700 dark:text-zinc-300"
                  aria-label="Next Slide"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Vertical Motion Carousel Text Display */}
              <div className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] w-full overflow-hidden flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, y: -45, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 45, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4"
                  >
                    <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 tracking-wider uppercase">
                      {currentItem.badge}
                    </span>

                    {/* H1 Main Heading */}
                    <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                      {currentItem.title}
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg sm:text-xl font-bold text-lime-600 dark:text-lime-400 tracking-wide">
                      {currentItem.tagline}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative + Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col items-start gap-8 lg:w-2/5"
          >
            <p className="text-base sm:text-lg leading-relaxed font-normal text-zinc-600 dark:text-zinc-300">
              SPARKSPHEAR audits repetitive workflows, determines whether existing software is enough, and builds controlled AI agents when manual work or disconnected systems remain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
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
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Blend Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}