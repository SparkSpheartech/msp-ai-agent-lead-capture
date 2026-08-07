"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', business: '', message: '' });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-36 pb-16 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Calendar className="w-3.5 h-3.5" /> Direct Scheduling
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Let's Talk Business</h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Ready to automate operations, eliminate manual bottlenecks, and grow? Book a 15-minute demo directly below or send us a message.
            </p>
          </div>

          {/* CALENDLY SPOTLIGHT BANNER */}
          <div className="mb-12 bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-lime-500/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-lime-400 font-mono text-xs uppercase font-bold mb-2">
                <Clock className="w-4 h-4 text-lime-400" /> INSTANT 15-MINUTE DEMO
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Book Directly On Our Founder's Calendar
              </h2>
              <p className="text-zinc-300 text-sm max-w-xl">
                Skip the back-and-forth emails. Pick a 15-minute slot that works for you to review your current tech stack and explore custom AI automations.
              </p>
            </div>
            <a
              href="https://calendly.com/sparksphear4me/15-min-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all text-center text-base shadow-lg shadow-lime-500/20 whitespace-nowrap flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" /> Book 15-Min Demo &rarr;
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Contact Form */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Or Send Us A Direct Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500"
                    placeholder="(260) 267-0641"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-lime-500"
                    placeholder="Tell us about your operational bottlenecks..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-lime-500 hover:bg-lime-400 text-zinc-950 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-lime-500/20 text-sm"
                >
                  {submitted ? "Message Sent! We'll reply within 2 hours." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Direct Info */}
            <div className="space-y-8 flex flex-col justify-between">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone Support
                  </h3>
                  <div className="text-2xl font-extrabold text-zinc-900 dark:text-white font-mono">(260) 267-0641</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Mon–Fri 8:00 AM – 6:00 PM EST</div>
                </div>

                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Enquiries
                  </h3>
                  <div className="text-zinc-900 dark:text-white font-medium text-sm">SparkSphear4me@gmail.com</div>
                </div>

                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400 mb-3">What Happens Next?</h3>
                  <ul className="space-y-2.5 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" /> Book a 15-minute live demo call
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" /> We analyze your current software & tool sprawl
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" /> Receive a custom Done-For-You AI roadmap
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
