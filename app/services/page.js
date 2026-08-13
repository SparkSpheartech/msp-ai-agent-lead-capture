"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Camera, Monitor, Shield, ArrowRight, CheckCircle, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesOverview() {
  const primaryServices = [
    {
      slug: 'it-audits',
      icon: <Search />,
      title: 'Workflow Audit',
      description: 'Map the work, identify bottlenecks, review existing tools, and define the right first implementation.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]',
      btn: 'text-blue-400',
      features: ['Workflow Mapping', 'Bottleneck Analysis', 'Tool Review']
    },
    {
      slug: 'ai-automation',
      icon: <Brain />,
      title: 'AI Agents & Agentic Automation',
      description: 'Build controlled agents for inquiry handling, booking, intake, quoting, routing, follow-up, document work, and reporting.',
      color: 'text-lime-400',
      bg: 'bg-lime-500/10',
      border: 'border-lime-500/20',
      hoverBorder: 'hover:border-lime-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(132,204,22,0.2)]',
      btn: 'text-lime-400',
      features: ['AI Agents', 'Workflow Automation', 'Integrations']
    },
    {
      slug: 'web-design',
      icon: <Monitor />,
      title: 'Digital Systems & Portals',
      description: 'Build websites, forms, portals, and digital experiences that support the workflow and customer journey.',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      hoverBorder: 'hover:border-green-500/50',
      shadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]',
      btn: 'text-green-400',
      features: ['Custom Websites', 'Booking Portals', 'Connected Forms']
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950">

        {/* Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden border-b border-zinc-200 dark:border-white/5">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 5 }}
              className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-lime-600/10 rounded-full blur-[100px]"
            />
          </div>

          <div className="container relative z-10 max-w-6xl">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-600 dark:text-lime-400 text-sm font-bold uppercase tracking-wider mb-6"
              >
                <Shield className="w-4 h-4" /> Audit the System. Scale the Business.
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight"
              >
                Services Built <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">Around the Workflow.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-zinc-600 dark:text-zinc-400 text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
              >
                We start with the workflow, not a preset package. The audit shows where existing tools are enough and where a custom agent or connected system may help.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-400 text-zinc-950 text-lg font-extrabold py-5 px-10 rounded-full transition-all shadow-[0_0_40px_rgba(132,204,22,0.4)] hover:shadow-[0_0_60px_rgba(132,204,22,0.6)]"
                >
                  <Shield className="w-6 h-6" />
                  <span>Book a Fit Call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Primary Service Cards */}
        <section className="py-24 bg-white dark:bg-zinc-900/50 relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="container max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-zinc-900 dark:text-white mb-2"
              >
                Choose the Route That Matches the Problem
              </motion.h2>
              <p className="text-zinc-600 dark:text-gray-400">Diagnose the operation, build an agent, or create the digital system around it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {primaryServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className={`block bg-slate-50 dark:bg-zinc-950 border-2 ${service.border} ${service.hoverBorder} ${service.shadow} rounded-xl p-8 transition-all duration-300 group h-full`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className={`${service.bg} p-4 rounded-xl ${service.color} group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                      </div>
                      <div className={`p-2 rounded-full border ${service.border} opacity-0 group-hover:opacity-100 transition-opacity`}>
                        <ArrowRight className={`w-4 h-4 ${service.color}`} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{service.title}</h3>
                    <p className="text-zinc-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3 pt-6 border-t border-zinc-200 dark:border-white/5">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zinc-600 dark:text-gray-400">
                          <CheckCircle className={`w-4 h-4 mr-2 ${service.btn}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Creative Media - Supporting */}
            <div className="mt-8">
              <Link
                href="/services/photography-videography"
                className="block bg-slate-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/30 rounded-xl p-6 transition-all group max-w-md mx-auto text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Camera className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Creative Media</h3>
                </div>
                <p className="text-zinc-500 text-sm">Supporting visual content for brand and digital presence.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-zinc-200 dark:border-white/5">
          <div className="container max-w-4xl text-center">
            <h2 className="text-zinc-900 dark:text-white text-3xl font-bold mb-6">
              Not sure where to start?
            </h2>
            <p className="text-zinc-600 dark:text-gray-400 text-lg mb-8">
              Book a free Fit Call and we will identify the workflow worth automating first.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-bold rounded-lg transition-all shadow-lg shadow-lime-500/20"
            >
              Book a Fit Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
