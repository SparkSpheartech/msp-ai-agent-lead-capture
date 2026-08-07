"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ClipboardCheck, Rocket, Cog, TrendingUp, HeadphonesIcon, ArrowRight, Play } from 'lucide-react';

const Process = () => {
 const [activeStep, setActiveStep] = useState(null);

 const steps = [
 {
 number: 1,
 title: "Discovery & Consultation",
 icon: <Search className="w-8 h-8" />,
 description: "We start by understanding your unique business needs and challenges",
 details: [
 "Initial consultation call",
 "Business goals assessment",
 "Current IT infrastructure review",
 "Pain points identification"
 ],
 ctaText: "Schedule Consultation",
 ctaLink: "https://docs.google.com/forms/d/1eYMjWkzKncACWYoB0RpXuOU0eaSFu-EoeywYNdttLIw/edit"
 },
 {
 number: 2,
 title: "Strategic Planning",
 icon: <ClipboardCheck className="w-8 h-8" />,
 description: "Create a customized technology roadmap aligned with your objectives",
 details: [
 "Gap analysis of current systems",
 "Technology recommendations",
 "Cost-benefit analysis",
 "Implementation timeline creation"
 ],
 ctaText: "Learn About Planning",
 ctaLink: "/services/it-audits"
 },
 {
 number: 3,
 title: "Onboarding & Setup",
 icon: <Rocket className="w-8 h-8" />,
 description: "Seamless integration of our services into your operations",
 details: [
 "Team introduction and roles",
 "Access and permissions setup",
 "Communication channels established",
 "Initial baseline assessment"
 ],
 ctaText: "See How We Onboard",
 ctaLink: "/services/it-audits"
 },
 {
 number: 4,
 title: "Implementation",
 icon: <Cog className="w-8 h-8" />,
 description: "Execute the plan with minimal disruption to your business",
 details: [
 "Phased rollout approach",
 "Team training and support",
 "Quality assurance testing",
 "Documentation and handoff"
 ],
 ctaText: "View Implementation",
 ctaLink: "/services/it-audits"
 },
 {
 number: 5,
 title: "Optimization",
 icon: <TrendingUp className="w-8 h-8" />,
 description: "Continuous improvement and fine-tuning of systems",
 details: [
 "Performance monitoring",
 "Regular system updates",
 "Efficiency improvements",
 "ROI tracking and reporting"
 ],
 ctaText: "See Optimization",
 ctaLink: "/services/it-audits"
 },
 {
 number: 6,
 title: "Ongoing Support",
 icon: <HeadphonesIcon className="w-8 h-8" />,
 description: "24/7 monitoring and support to keep your systems running smoothly",
 details: [
 "Proactive monitoring",
 "Rapid response to issues",
 "Regular check-ins",
 "Strategic quarterly reviews"
 ],
 ctaText: "Explore Support Plans",
 ctaLink: "/support"
 }
 ];

 return (
 <section id="process" className="section process-section py-20 bg-gray-100 dark:bg-zinc-950 relative overflow-hidden">
 {/* Background decoration */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
 <div className="absolute top-1/4 left-0 w-64 h-64 bg-lime-200 dark:bg-lime-900/20 rounded-full blur-3xl"></div>
 <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-lime-200 dark:bg-lime-900/20 rounded-full blur-3xl"></div>
 </div>

 <div className="container relative z-10">
 <div className="section-header text-center mb-16">
 <span className="tag text-lime-600 dark:text-primary">OUR PROCESS</span>
 <h2 className="text-gray-900 dark:text-white text-4xl md:text-5xl font-bold mb-4">
 A Proven Path to <span className="text-lime-600 dark:text-primary">Success</span>
 </h2>
 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
 A clear, battle-tested 6-step framework designed to automate manual tasks and protect operational uptime.
 </p>
 
 {/* CTA to start the process */}
 <div className="inline-flex flex-col sm:flex-row items-center gap-4 justify-center">
 <Link
 href="/onboarding"
 className="inline-flex items-center gap-3 px-8 py-5 bg-lime-500 text-zinc-950 font-bold text-lg rounded-full hover:bg-lime-400 transition-all duration-300 shadow-lg shadow-lime-500/30 hover:shadow-lime-500/50 hover:scale-105"
 >
 <Play className="w-5 h-5 fill-current" />
 Start Client Onboarding
 </Link>
 <Link
 href="#service-wizard"
 className="inline-flex items-center gap-2 px-6 py-4 border-2 border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-lime-500 dark:hover:border-primary hover:text-lime-600 dark:hover:text-primary transition-all duration-300"
 >
 Find Your Path
 <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>

 <div className="process-timeline relative max-w-5xl mx-auto">
 {/* Vertical Timeline Line */}
 <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500/50 via-lime-500/30 to-lime-500/10 hidden md:block transform -translate-x-1/2"></div>

 {steps.map((step, index) => (
 <div
 key={index}
 className={`process-step relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:flex md:justify-end'}`}
 >
 <div
 className={`process-card bg-white dark:bg-zinc-900 border-2 ${
 activeStep === index 
 ? 'border-lime-500 dark:border-primary' 
 : 'border-gray-200 dark:border-zinc-800'
 } rounded-2xl p-8 hover:border-lime-500 dark:hover:border-primary transition-all duration-300 cursor-pointer max-w-lg ${
 activeStep === index ? 'shadow-lg shadow-lime-500/20 dark:shadow-primary/20' : ''
 }`}
 onClick={() => setActiveStep(activeStep === index ? null : index)}
 >
 {/* Number Badge */}
 <div className="flex items-center gap-4 mb-4">
 <div className="flex-shrink-0 w-16 h-16 bg-lime-100 dark:bg-primary/10 rounded-full flex items-center justify-center border-2 border-lime-500 dark:border-primary">
 <span className="text-lime-600 dark:text-primary font-bold text-2xl">{step.number}</span>
 </div>
 <div className="text-lime-600 dark:text-primary">
 {step.icon}
 </div>
 </div>

 {/* Content */}
 <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-3">{step.title}</h3>
 <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>

 {/* Expandable Details */}
 {activeStep === index && (
 <>
 <ul className="mt-6 space-y-2 border-t border-lime-200 dark:border-primary/20 pt-4">
 {step.details.map((detail, idx) => (
 <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
 <span className="text-lime-600 dark:text-primary text-lg">→</span>
 <span>{detail}</span>
 </li>
 ))}
 </ul>
 
 {/* Action Button - Show when expanded */}
 {index === 0 ? (
 <a
 href={step.ctaLink}
 target="_blank"
 rel="noopener noreferrer"
 className="mt-6 inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-lime-500 text-zinc-950 font-bold rounded-lg hover:bg-lime-400 transition-all duration-300"
 >
 {step.ctaText}
 <ArrowRight className="w-4 h-4" />
 </a>
 ) : (
 <Link
 href={step.ctaLink}
 className="mt-6 inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-lime-500 dark:border-primary text-lime-600 dark:text-primary font-bold rounded-lg hover:bg-lime-500 hover:text-zinc-950 dark:hover:text-zinc-950 transition-all duration-300"
 >
 {step.ctaText}
 <ArrowRight className="w-4 h-4" />
 </Link>
 )}
 </>
 )}

 {/* Click indicator */}
 <div className="mt-4 text-lime-600 dark:text-primary text-sm font-semibold flex items-center gap-2">
 {activeStep === index ? (
 <>
 <span>- Click to collapse</span>
 </>
 ) : (
 <>
 <span>+ Click to expand</span>
 </>
 )}
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* Bottom CTA */}
 <div className="text-center mt-16">
 <p className="text-gray-600 dark:text-gray-400 mb-4">Ready to automate your operations?</p>
 <Link
 href="/onboarding"
 className="inline-flex items-center gap-2 px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-lg hover:bg-lime-400 transition-all duration-300"
 >
 Start Client Onboarding
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </div>
 </section>
 );
};

export default Process;