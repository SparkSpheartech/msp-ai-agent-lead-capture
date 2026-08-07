"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Camera, Monitor, ArrowRight, RefreshCcw, Briefcase, Loader2 } from 'lucide-react';

const ServiceWizard = () => {
 const [step, setStep] = useState('intro');
 const [history, setHistory] = useState([]);
 const [resultKey, setResultKey] = useState(null);
 const [formData, setFormData] = useState({ name: '', email: '' });
 const [isSubmitting, setIsSubmitting] = useState(false);

 // Replace this URL with your Make.com, Zapier, or n8n webhook URL
 const WEBHOOK_URL = "/api/wizard-lead"; // Or "https://hook.us1.make.com/..."

 // Service Data (Results)
 const services = {
 agency: {
 title: "Custom AI & Automations",
 icon: <Brain className="w-16 h-16 text-lime-600 dark:text-lime-400" />,
 description: "You need a 'Done-For-You' solution. Let our architects build custom AI agents and enterprise workflows that run your business on autopilot.",
 link: "/services/it-audits#start-audit",
 btnText: "Start Your Master Audit"
 },
 affiliate: {
 title: "Industry Software Guide",
 icon: <Briefcase className="w-16 h-16 text-blue-600 dark:text-blue-400" />,
 description: "You prefer to find the right tool and set it up yourself. We've reviewed and tested the best software for your specific industry.",
 link: "/markets",
 btnText: "Find Software"
 },
 web: {
 title: "Web Design & Media",
 icon: <Monitor className="w-16 h-16 text-orange-600 dark:text-orange-400" />,
 description: "You need a high-converting website paired with professional media to turn traffic into qualified leads.",
 link: "/services/web-design",
 btnText: "View Web Services"
 }
 };

 // Question Logic Tree
 const questions = {
 intro: {
 question: "What is your primary goal right now?",
 options: [
 { text: "I need to fix internal operations & save time", next: "operations" },
 { text: "I need more customers & visibility", next: "growth" }
 ]
 },
 operations: {
 question: "How do you prefer to solve this?",
 options: [
 { text: "I want to buy a software tool and set it up myself", result: "affiliate" },
 { text: "I want experts to build custom automations for me", result: "agency" }
 ]
 },
 growth: {
 question: "How do you want to grow?",
 options: [
 { text: "I need a better website or video content", result: "web" },
 { text: "I want AI to capture missed calls & mine leads automatically", result: "agency" }
 ]
 }
 };

 const handleOptionClick = (option) => {
 if (option.result) {
 setResultKey(option.result);
 setHistory([...history, step]);
 setStep('lead-capture');
 } else {
 setHistory([...history, step]);
 setStep(option.next);
 }
 };

 const handleFormSubmit = async (e) => {
 e.preventDefault();
 setIsSubmitting(true);

 try {
 // Webhook submission
 await fetch(WEBHOOK_URL, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({
 name: formData.name,
 email: formData.email,
 recommendedPath: resultKey,
 timestamp: new Date().toISOString()
 })
 });
 } catch (error) {
 console.error("Webhook failed to send, but proceeding to result.", error);
 }

 setIsSubmitting(false);
 setStep('result');
 };

 const handleBack = () => {
 if (history.length > 0) {
 const prevStep = history[history.length - 1];
 setHistory(history.slice(0, -1));
 setStep(prevStep);
 setResultKey(null);
 } else {
 setStep('intro');
 }
 };

 const handleRestart = () => {
 setStep('intro');
 setHistory([]);
 setResultKey(null);
 setFormData({ name: '', email: '' });
 };

 return (
 <section id="service-wizard" className="py-24 bg-gray-100 dark:bg-zinc-950 relative overflow-hidden text-gray-900 dark:text-white border-y border-gray-200 dark:border-white/10">
 {/* Background Accents */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-300/30 dark:bg-lime-600/10 rounded-full blur-3xl"></div>
 <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
 </div>

 <div className="container mx-auto px-4 relative z-10">
 <div className="text-center mb-12">
 <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-2 block">Discovery Engine</span>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
 Find Your <span className="text-lime-600 dark:text-lime-500">Path to Growth</span>
 </h2>
 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
 A quick diagnostic to point you to the exact software or service you need.
 </p>
 </div>

 <div className="max-w-3xl mx-auto">
 <div className="bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center items-center shadow-2xl">
 <AnimatePresence mode="wait">
 {step !== 'result' && step !== 'lead-capture' ? (
 <motion.div
 key={step}
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -20 }}
 transition={{ duration: 0.3 }}
 className="w-full text-center"
 >
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
 {questions[step]?.question}
 </h3>
 <div className="grid gap-4 max-w-lg mx-auto">
 {questions[step]?.options.map((option, idx) => (
 <button
 key={idx}
 onClick={() => handleOptionClick(option)}
 className="group relative overflow-hidden bg-gray-50 dark:bg-white/5 hover:bg-lime-100 dark:hover:bg-lime-600/20 border border-gray-200 dark:border-white/10 hover:border-lime-500 dark:hover:border-lime-400/50 p-6 rounded-xl text-left transition-all duration-300 shadow-lg hover:shadow-lime-500/10"
 >
 <div className="flex items-center justify-between">
 <span className="text-lg text-gray-700 dark:text-white font-medium group-hover:text-lime-700 dark:group-hover:text-lime-200 transition-colors">
 {option.text}
 </span>
 <ArrowRight className="w-5 h-5 text-zinc-600 dark:text-gray-400 dark:text-gray-500 group-hover:text-lime-600 dark:group-hover:text-lime-700 dark:text-lime-300 transform group-hover:translate-x-1 transition-all" />
 </div>
 </button>
 ))}
 </div>
 </motion.div>
 ) : step === 'lead-capture' ? (
 <motion.div
 key="lead"
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 className="w-full text-center max-w-md mx-auto"
 >
 <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
 We found the perfect solution.
 </h3>
 <p className="text-gray-600 dark:text-gray-400 mb-8">
 Enter your details to view your recommended strategy and get our free tech guides sent to your inbox.
 </p>
 <form onSubmit={handleFormSubmit} className="space-y-4">
 <input 
 type="text" 
 placeholder="Your Name" 
 required
 value={formData.name}
 onChange={e => setFormData({...formData, name: e.target.value})}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-lime-500 text-gray-900 dark:text-white"
 />
 <input 
 type="email" 
 placeholder="Work Email" 
 required
 value={formData.email}
 onChange={e => setFormData({...formData, email: e.target.value})}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-lime-500 text-gray-900 dark:text-white"
 />
 <button 
 type="submit" 
 disabled={isSubmitting}
 className="w-full py-4 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-bold rounded-xl transition-colors shadow-lg shadow-lime-500/20 flex items-center justify-center gap-2"
 >
 {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Reveal My Strategy'}
 </button>
 </form>
 </motion.div>
 ) : (
 <motion.div
 key="result"
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 className="w-full text-center"
 >
 <div className="inline-flex items-center justify-center p-6 bg-gray-100 dark:bg-white/5 rounded-full mb-6 border-2 border-gray-200 dark:border-white/10">
 {services[resultKey].icon}
 </div>
 <div className="mb-2 text-gray-500 dark:text-gray-400 font-mono text-sm uppercase tracking-wider">Recommended Strategy</div>
 <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
 {services[resultKey].title}
 </h3>
 <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
 {services[resultKey].description}
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 href={services[resultKey].link}
 className="px-8 py-4 bg-lime-500 text-zinc-950 font-extrabold rounded-lg hover:bg-lime-400 transition-all shadow-[0_0_20px_rgba(132,204,22,0.3)] flex items-center justify-center gap-2"
 >
 {services[resultKey].btnText} <ArrowRight className="w-4 h-4" />
 </Link>
 <button
 onClick={handleRestart}
 className="px-6 py-4 bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-100/80 dark:bg-white/5 transition-all flex items-center justify-center gap-2"
 >
 <RefreshCcw className="w-4 h-4" /> Start Over
 </button>
 </div>
 </motion.div>
 )}
 </AnimatePresence>

 {/* Navigation Footer */}
 <div className="absolute bottom-6 w-full px-12 flex justify-between text-zinc-600 dark:text-gray-400 dark:text-gray-500 text-sm">
 {history.length > 0 && step !== 'result' && (
 <button
 onClick={handleBack}
 className="hover:text-gray-700 dark:hover:text-zinc-900 dark:text-white transition-colors flex items-center gap-2"
 >
 ← Back
 </button>
 )}
 {step !== 'intro' && step !== 'result' && (
 <button
 onClick={handleRestart}
 className="ml-auto hover:text-gray-700 dark:hover:text-zinc-900 dark:text-white transition-colors flex items-center gap-2"
 >
 Reset <RefreshCcw className="w-3 h-3" />
 </button>
 )}
 </div>
 </div>
 </div>
 </div>
 </section>
 );
};

export default ServiceWizard;