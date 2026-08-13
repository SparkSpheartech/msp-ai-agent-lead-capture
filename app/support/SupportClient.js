"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import AIChat from '@/components/AIChat';
import { BookOpen, Ticket, Phone, Mail, Clock, Bot, Lightbulb } from 'lucide-react';

export default function SupportClient() {
  const supportOptions = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Tool Setup & Troubleshooting",
      description: "Guides and tutorials for setting up the software we recommend",
      link: "/support/kb",
      color: "lime"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Get Software Advice",
      description: "Not sure which tool to pick? Book a quick consultation",
      link: "/onboarding",
      color: "lime"
    },
    {
      icon: <Ticket className="w-12 h-12" />,
      title: "Submit a Ticket",
      description: "Get technical support from our engineering team",
      link: "/support/ticket",
      color: "lime"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-zinc-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-lime-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
        </div>

        {/* Hero Section */}
        <section className="pt-40 pb-20 relative z-10">
          <div className="container text-center">
            <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-4 block">SUPPORT & CONSULTATION</span>
            <h1 className="text-zinc-900 dark:text-white text-5xl md:text-7xl font-bold mb-8">
              How Can We <span className="text-lime-600 dark:text-lime-500">Help?</span>
            </h1>
            <p className="text-zinc-600 dark:text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Find answers, book a software consultation, or submit a technical ticket. We're here to help you scale.
            </p>
          </div>
        </section>

        {/* Support Options Grid */}
        <section className="pb-24 relative z-10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supportOptions.map((option, index) => (
                <Link
                  key={index}
                  href={option.link}
                  className="support-card bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/50 border border-zinc-200 dark:border-white/10 hover:border-lime-500/50 rounded-2xl p-10 text-center transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-500/10"
                >
                  <div className="text-lime-600 dark:text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-zinc-900 dark:text-white text-2xl font-bold mb-3 group-hover:text-lime-600 dark:text-lime-400 transition-colors">{option.title}</h3>
                  <p className="text-zinc-600 dark:text-gray-400">{option.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI Chat Preview Section */}
        <section className="pb-16 relative z-10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-lime-500/10 border border-lime-500/30 rounded-full mb-8">
                <Bot className="w-5 h-5 text-lime-600 dark:text-lime-500" />
                <span className="text-lime-600 dark:text-lime-400 font-semibold">AI Assistant Available</span>
              </div>
              <h2 className="text-zinc-900 dark:text-white text-3xl md:text-4xl font-bold mb-6">
                Have Questions? <span className="text-lime-600 dark:text-lime-500">Chat with Our AI</span>
              </h2>
              <p className="text-zinc-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Our AI assistant can help answer your questions, guide you through our services, and provide instant support. Look for the chat button in the bottom right corner!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Information */}
        <section className="py-24 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-black/20 relative z-10">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-zinc-900 dark:text-white text-3xl font-bold mb-4">
                Other Ways to <span className="text-lime-600 dark:text-lime-500">Reach Us</span>
              </h2>
              <p className="text-zinc-600 dark:text-gray-400">Can't find what you're looking for? Get in touch.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group p-8 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/30 border border-zinc-200 dark:border-white/5 hover:border-lime-500/30 transition-all">
                <div className="text-lime-600 dark:text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">Phone</h3>
                <p className="text-zinc-600 dark:text-gray-400 hover:text-lime-600 dark:text-lime-400 transition-colors">
                  <a href="tel:2602670641">(260) 267-0641</a>
                </p>
              </div>

              <div className="text-center group p-8 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/30 border border-zinc-200 dark:border-white/5 hover:border-lime-500/30 transition-all">
                <div className="text-lime-600 dark:text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">Email</h3>
                <p className="text-zinc-600 dark:text-gray-400 hover:text-lime-600 dark:text-lime-400 transition-colors">
                  <a href="mailto:SparkSphear4me@gmail.com">SparkSphear4me@gmail.com</a>
                </p>
              </div>

              <div className="text-center group p-8 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/30 border border-zinc-200 dark:border-white/5 hover:border-lime-500/30 transition-all">
                <div className="text-lime-600 dark:text-lime-500 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-zinc-900 dark:text-white font-bold mb-2">Business Hours</h3>
                <p className="text-zinc-600 dark:text-gray-400">Mon-Fri: 8AM-6PM EST</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* AI Chat Widget - Shows on all pages */}
      <AIChat />
    </>
  );
}
