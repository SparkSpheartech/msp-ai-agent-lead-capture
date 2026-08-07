"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
 User, Building2, Briefcase, Mail, Phone, Globe, 
 AlertCircle, Target, Sparkles, Wrench, Calendar, 
 DollarSign, CheckCircle2, ArrowRight, ArrowLeft, Send, Check
} from 'lucide-react';

export default function ClientOnboardingForm() {
 const searchParams = useSearchParams();
 const [currentStep, setCurrentStep] = useState(1);
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [errorMsg, setErrorMsg] = useState('');

 const [formData, setFormData] = useState({
 // Section 1
 fullName: '',
 companyName: '',
 roleTitle: '',
 email: '',
 phone: '',
 website: '',
 
 // Section 2
 businessDescription: '',
 industry: '',
 companySize: '',
 annualRevenue: '',
 locationsCount: '',
 leadSource: '',

 // Section 3
 promptedReasons: [],
 promptedOther: '',
 biggestBottleneck: '',
 weeklyMissedCalls: '',
 currentResponseTime: '',

 // Section 4
 primaryGoals: [],
 personalSuccessDefinition: '',

 // Section 5
 servicesOfInterest: [],
 visionIdeaDescription: '',

 // Section 6
 existingTools: '',
 missionCriticalSystems: '',
 phoneSystem: '',

 // Section 7
 targetTimeline: '',
 launchDeadlineEvent: '',

 // Section 8
 budgetRange: '',
 engagementModel: '',

 // Section 9
 decisionMakerStatus: '',
 decisionMakerOther: '',
 preferredCommunication: '',
 accessReadiness: '',
 involvementLevel: '',
 clientTimezone: '',
 additionalNotes: '',

 // Section 10
 agreement: false
 });

 useEffect(() => {
 const goalParam = searchParams.get('goal');
 if (goalParam) {
 setFormData(prev => ({
 ...prev,
 primaryGoals: prev.primaryGoals.includes(goalParam) ? prev.primaryGoals : [...prev.primaryGoals, goalParam]
 }));
 }
 }, [searchParams]);

 const handleTextChange = (field, value) => {
 setFormData(prev => ({ ...prev, [field]: value }));
 };

 const handleCheckboxToggle = (field, item) => {
 setFormData(prev => {
 const list = prev[field] || [];
 if (list.includes(item)) {
 return { ...prev, [field]: list.filter(i => i !== item) };
 } else {
 return { ...prev, [field]: [...list, item] };
 }
 });
 };

 const validateCurrentStep = () => {
 setErrorMsg('');
 if (currentStep === 1) {
 if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.roleTitle.trim() || !formData.email.trim() || !formData.phone.trim()) {
 setErrorMsg('Please complete all required fields marked with * in Section 1.');
 return false;
 }
 } else if (currentStep === 2) {
 if (!formData.businessDescription.trim() || !formData.companySize) {
 setErrorMsg('Please briefly describe your business and select your company size.');
 return false;
 }
 } else if (currentStep === 3) {
 if (formData.promptedReasons.length === 0 || !formData.biggestBottleneck.trim()) {
 setErrorMsg('Please select what prompted you to reach out and describe your main bottleneck.');
 return false;
 }
 } else if (currentStep === 4) {
 if (formData.primaryGoals.length === 0 || !formData.personalSuccessDefinition.trim()) {
 setErrorMsg('Please select at least one goal and describe what personal success looks like.');
 return false;
 }
 } else if (currentStep === 5) {
 if (formData.servicesOfInterest.length === 0) {
 setErrorMsg('Please select at least one service of interest.');
 return false;
 }
 } else if (currentStep === 7) {
 if (!formData.targetTimeline) {
 setErrorMsg('Please select when you are looking to start.');
 return false;
 }
 } else if (currentStep === 8) {
 if (!formData.budgetRange) {
 setErrorMsg('Please select your target budget alignment range.');
 return false;
 }
 } else if (currentStep === 9) {
 if (!formData.preferredCommunication || !formData.accessReadiness || !formData.involvementLevel) {
 setErrorMsg('Please complete all required options in Section 9.');
 return false;
 }
 } else if (currentStep === 10) {
 if (!formData.agreement) {
 setErrorMsg('You must agree to the acknowledgment statement before submitting.');
 return false;
 }
 }
 return true;
 };

 const nextStep = () => {
 if (validateCurrentStep()) {
 if (currentStep < 10) {
 setCurrentStep(prev => prev + 1);
 window.scrollTo({ top: 300, behavior: 'smooth' });
 }
 }
 };

 const prevStep = () => {
 setErrorMsg('');
 if (currentStep > 1) {
 setCurrentStep(prev => prev - 1);
 window.scrollTo({ top: 300, behavior: 'smooth' });
 }
 };

 const handleSubmit = async (e) => {
 e.preventDefault();
 if (!validateCurrentStep()) return;

 setIsSubmitting(true);
 setErrorMsg('');

 try {
 const res = await fetch('/api/leads', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({
 type: 'client_onboarding_form',
 ...formData,
 submittedAt: new Date().toISOString()
 })
 });

 if (!res.ok) {
 throw new Error('Form submission failed. Please try again.');
 }

 setIsSubmitted(true);
 } catch (err) {
 setErrorMsg(err.message || 'An error occurred during submission. Please try again.');
 } finally {
 setIsSubmitting(false);
 }
 };

 const sectionTitles = [
 "1. Contact Information",
 "2. Business Overview",
 "3. Current Challenges",
 "4. Goals & Outcomes",
 "5. Services of Interest",
 "6. Existing Tools & Systems",
 "7. Timeline & Readiness",
 "8. Budget Alignment",
 "9. Decision Process",
 "10. Acknowledgment & Submission"
 ];

 if (isSubmitted) {
 return (
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }} 
 animate={{ opacity: 1, scale: 1 }} 
 className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-lime-500/30 rounded-3xl p-10 text-center shadow-2xl"
 >
 <div className="w-20 h-20 bg-lime-500/20 text-lime-600 dark:text-lime-400 rounded-full flex items-center justify-center mx-auto mb-6">
 <CheckCircle2 size={48} />
 </div>
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
 Onboarding Vision Received!
 </h2>
 <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
 Thank you, <span className="font-semibold text-lime-600 dark:text-lime-400">{formData.fullName}</span>. Your responses have been submitted directly to the SPARKSPHEAR strategy team. We will review your goals and operational details to craft a tailored growth path.
 </p>
 <div className="bg-gray-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-gray-200 dark:border-white/10 text-left max-w-md mx-auto mb-8 text-sm">
 <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">✓ Company: {formData.companyName}</p>
 <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">✓ Primary Contact: {formData.email}</p>
 <p className="text-gray-700 dark:text-gray-300 font-medium">✓ Response Status: Priority Review</p>
 </div>
 <a 
 href="/" 
 className="inline-flex items-center gap-2 px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20"
 >
 Return to Homepage <ArrowRight size={18} />
 </a>
 </motion.div>
 );
 }

 return (
 <div className="max-w-4xl mx-auto">
 {/* Header & Subtitle */}
 <div className="text-center mb-8">
 <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-2 block">
 Strategic Discovery & Intake
 </span>
 <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
 SPARKSPHEAR Client Onboarding
 </h1>
 <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
 This form creates an initial vision outlook so that SPARKSPHEAR can tailor its solutions directly to your dream outcome.
 </p>
 </div>

 {/* Progress Bar Header */}
 <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 mb-8 shadow-xl">
 <div className="flex justify-between items-center mb-3 text-sm font-semibold">
 <span className="text-lime-600 dark:text-lime-400">
 Section {currentStep} of 10
 </span>
 <span className="text-gray-700 dark:text-gray-300">
 {sectionTitles[currentStep - 1]}
 </span>
 </div>
 <div className="w-full bg-gray-200 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden">
 <div 
 className="bg-gradient-to-r from-lime-500 to-green-500 h-full transition-all duration-500 ease-out"
 style={{ width: `${(currentStep / 10) * 100}%` }}
 />
 </div>
 </div>

 {/* Form Card */}
 <div className="bg-white dark:bg-zinc-900/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
 {errorMsg && (
 <div className="mb-6 p-4 bg-red-500/10 border border-red-500/40 rounded-xl flex items-center gap-3 text-red-600 dark:text-red-400 text-sm">
 <AlertCircle className="w-5 h-5 shrink-0" />
 <span>{errorMsg}</span>
 </div>
 )}

 <AnimatePresence mode="wait">
 {/* SECTION 1 */}
 {currentStep === 1 && (
 <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <User className="text-lime-600 dark:text-lime-500" /> 1. Contact Information
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Let us know who you are and how we can reach you.</p>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
 <input 
 type="text"
 required
 placeholder="Jane Doe"
 value={formData.fullName}
 onChange={(e) => handleTextChange('fullName', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Company / Organization Name *</label>
 <input 
 type="text"
 required
 placeholder="Acme Innovations LLC"
 value={formData.companyName}
 onChange={(e) => handleTextChange('companyName', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Role / Title *</label>
 <input 
 type="text"
 required
 placeholder="Founder / CEO / Operations Director"
 value={formData.roleTitle}
 onChange={(e) => handleTextChange('roleTitle', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
 <input 
 type="email"
 required
 placeholder="jane@company.com"
 value={formData.email}
 onChange={(e) => handleTextChange('email', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
 <input 
 type="tel"
 required
 placeholder="(260) 555-0199"
 value={formData.phone}
 onChange={(e) => handleTextChange('phone', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Website / Online Presence (optional)</label>
 <input 
 type="url"
 placeholder="https://company.com"
 value={formData.website}
 onChange={(e) => handleTextChange('website', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 2 */}
 {currentStep === 2 && (
 <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <Building2 className="text-lime-600 dark:text-lime-500" /> 2. Business Overview
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Briefly describe your organization and target market.</p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 Briefly describe your business and what you do *
 </label>
 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">(What problem or service do you solve, and for whom?)</p>
 <textarea 
 rows={3}
 required
 placeholder="We provide commercial waste hauling and dumpster rentals to construction contractors in Indiana..."
 value={formData.businessDescription}
 onChange={(e) => handleTextChange('businessDescription', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Industry / Market</label>
 <input 
 type="text"
 placeholder="e.g. Waste Management, Construction, Healthcare, Retail, Service-based"
 value={formData.industry}
 onChange={(e) => handleTextChange('industry', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Company Size *</label>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {['Solo / Startup', '2–10 employees', '11–50 employees', '50+ employees'].map((size) => (
 <button
 type="button"
 key={size}
 onClick={() => handleTextChange('companySize', size)}
 className={`p-4 rounded-xl border text-center transition-all font-medium text-sm ${
 formData.companySize === size 
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-400'
 }`}
 >
 {size}
 </button>
 ))}
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Estimated Annual Revenue Scale</label>
 <select 
 value={formData.annualRevenue}
 onChange={(e) => handleTextChange('annualRevenue', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 >
 <option value="">Select Revenue Scale...</option>
 <option value="Under $100k">Under $100k</option>
 <option value="$100k–$500k">$100k–$500k</option>
 <option value="$500k–$1M">$500k–$1M</option>
 <option value="$1M–$5M">$1M–$5M</option>
 <option value="$5M+">$5M+</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Number of Locations / Sites</label>
 <select 
 value={formData.locationsCount}
 onChange={(e) => handleTextChange('locationsCount', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 >
 <option value="">Select Locations Count...</option>
 <option value="1 location">1 Location</option>
 <option value="2–5 locations">2–5 Locations</option>
 <option value="6–10 locations">6–10 Locations</option>
 <option value="10+ locations">10+ Locations</option>
 </select>
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">How did you find SPARKSPHEAR Tech Solutions?</label>
 <select 
 value={formData.leadSource}
 onChange={(e) => handleTextChange('leadSource', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 >
 <option value="">Select Source...</option>
 <option value="Google Search">Google Search</option>
 <option value="Website / Blog">Website / Blog</option>
 <option value="Referral / Word of mouth">Referral / Word of mouth</option>
 <option value="Cold Outreach / Call">Cold Outreach / Call</option>
 <option value="Social Media (Instagram / LinkedIn / YouTube)">Social Media (Instagram / LinkedIn / YouTube)</option>
 <option value="Other">Other</option>
 </select>
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 3 */}
 {currentStep === 3 && (
 <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <AlertCircle className="text-lime-600 dark:text-lime-500" /> 3. Current Challenges
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Identify the friction points holding back your operations.</p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 What prompted you to reach out to SPARKSPHEAR Tech Solutions? *
 </label>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {[
 'Manual or inefficient processes',
 'Lack of automation',
 'Data scattered across tools',
 'Poor customer experience',
 'Scaling issues',
 'AI curiosity but unclear use case'
 ].map((reason) => {
 const isChecked = formData.promptedReasons.includes(reason);
 return (
 <div 
 key={reason}
 onClick={() => handleCheckboxToggle('promptedReasons', reason)}
 className={`p-4 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
 isChecked 
 ? 'bg-lime-500/15 border-lime-500 text-lime-700 dark:text-lime-300 font-semibold' 
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-400'
 }`}
 >
 <div className={`w-5 h-5 rounded border flex items-center justify-center ${isChecked ? 'bg-lime-500 border-lime-500 text-zinc-950' : 'border-gray-400'}`}>
 {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
 </div>
 <span className="text-sm">{reason}</span>
 </div>
 );
 })}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 Describe the biggest operational or technical bottleneck you’re facing right now *
 </label>
 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">(This is the primary problem we aim to solve first.)</p>
 <textarea 
 rows={3}
 required
 placeholder="We lose missed calls when dispatch is busy on routes, and manual quote requests take hours to get back to clients..."
 value={formData.biggestBottleneck}
 onChange={(e) => handleTextChange('biggestBottleneck', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Estimated Weekly Missed Calls / Inquiries</label>
 <select 
 value={formData.weeklyMissedCalls}
 onChange={(e) => handleTextChange('weeklyMissedCalls', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 >
 <option value="">Select Missed Calls Range...</option>
 <option value="0–5 calls/week">0–5 calls/week</option>
 <option value="6–20 calls/week">6–20 calls/week</option>
 <option value="21–50 calls/week">21–50 calls/week</option>
 <option value="50+ calls/week">50+ calls/week</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Current Average Lead Response Time</label>
 <select 
 value={formData.currentResponseTime}
 onChange={(e) => handleTextChange('currentResponseTime', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 >
 <option value="">Select Response Time...</option>
 <option value="Under 5 minutes">Under 5 minutes</option>
 <option value="5–30 minutes">5–30 minutes</option>
 <option value="1–4 hours">1–4 hours</option>
 <option value="24+ hours / Next day">24+ hours / Next day</option>
 </select>
 </div>
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 4 */}
 {currentStep === 4 && (
 <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <Target className="text-lime-600 dark:text-lime-500" /> 4. Goals & Outcomes
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
 We all have goals and desired outcomes within our business. This section serves as the preface of the initial dream that led you to starting your business and scaling!
 </p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 What are your primary goals for this project? *
 </label>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {[
 'Reduce time spent on manual work',
 'Increase efficiency or accuracy',
 'Improve customer interactions',
 'Gain insights from data',
 'Scale operations',
 'Build a competitive advantage using AI'
 ].map((goal) => {
 const isChecked = formData.primaryGoals.includes(goal);
 return (
 <div 
 key={goal}
 onClick={() => handleCheckboxToggle('primaryGoals', goal)}
 className={`p-4 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
 isChecked 
 ? 'bg-lime-500/15 border-lime-500 text-lime-700 dark:text-lime-300 font-semibold' 
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-400'
 }`}
 >
 <div className={`w-5 h-5 rounded border flex items-center justify-center ${isChecked ? 'bg-lime-500 border-lime-500 text-zinc-950' : 'border-gray-400'}`}>
 {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
 </div>
 <span className="text-sm">{goal}</span>
 </div>
 );
 })}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 How will you personally know this project was a success? *
 </label>
 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">(Examples: hours saved per week, revenue impact, response time improvement, fewer errors.)</p>
 <textarea 
 rows={3}
 required
 placeholder="Saving 15 hours per week in admin callbacks and recovering 10+ missed lead calls per month..."
 value={formData.personalSuccessDefinition}
 onChange={(e) => handleTextChange('personalSuccessDefinition', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 5 */}
 {currentStep === 5 && (
 <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <Sparkles className="text-lime-600 dark:text-lime-500" /> 5. Services of Interest
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Select the core capabilities you want to integrate into your workflow.</p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 Which SPARKSPHEAR services are you most interested in? *
 </label>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {[
 'Agentic systems & specialized AI agents',
 'Custom AI tools or agents',
 'Business process optimization',
 'Data analysis & dashboards',
 'Systems integration (CRM, APIs, platforms)',
 'Strategic AI consulting',
 'Not sure — need guidance'
 ].map((service) => {
 const isChecked = formData.servicesOfInterest.includes(service);
 return (
 <div 
 key={service}
 onClick={() => handleCheckboxToggle('servicesOfInterest', service)}
 className={`p-4 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
 isChecked 
 ? 'bg-lime-500/15 border-lime-500 text-lime-700 dark:text-lime-300 font-semibold' 
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-400'
 }`}
 >
 <div className={`w-5 h-5 rounded border flex items-center justify-center ${isChecked ? 'bg-lime-500 border-lime-500 text-zinc-950' : 'border-gray-400'}`}>
 {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
 </div>
 <span className="text-sm">{service}</span>
 </div>
 );
 })}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 If you have a vision or idea, describe it below (optional)
 </label>
 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">(It doesn’t need to be technical.)</p>
 <textarea 
 rows={3}
 placeholder="An automated voice-to-SMS system that texts back container quotes to contractors instantly..."
 value={formData.visionIdeaDescription}
 onChange={(e) => handleTextChange('visionIdeaDescription', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 6 */}
 {currentStep === 6 && (
 <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <Wrench className="text-lime-600 dark:text-lime-500" /> 6. Existing Tools & Systems
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
 Our team works with your existing tools and systems, so you save on organizational overhead and enhance their functionality. <br/><span className="text-lime-600 dark:text-lime-400 italic">PS: depending on your vision we can create a whole new system to reduce overhead.</span>
 </p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 What tools or platforms are you currently using?
 </label>
 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">(e.g., website CMS, CRM, booking software, spreadsheets, internal tools)</p>
 <textarea 
 rows={3}
 placeholder="Salesforce, Google Sheets, Twilio, QuickBooks, WordPress..."
 value={formData.existingTools}
 onChange={(e) => handleTextChange('existingTools', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 Are any systems mission-critical or non-negotiable?
 </label>
 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">(Important for seamless integration planning.)</p>
 <input 
 type="text"
 placeholder="e.g. Our existing ERP or QuickBooks billing"
 value={formData.missionCriticalSystems}
 onChange={(e) => handleTextChange('missionCriticalSystems', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 Primary Phone System & Dispatch Tools
 </label>
 <input 
 type="text"
 placeholder="e.g. Google Voice, RingCentral, ServiceTitan, DispatchTrack, OpenPhone, Twilio..."
 value={formData.phoneSystem}
 onChange={(e) => handleTextChange('phoneSystem', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 7 */}
 {currentStep === 7 && (
 <motion.div key="step7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <Calendar className="text-lime-600 dark:text-lime-500" /> 7. Timeline & Readiness
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
 We work with agile methodologies—a common standard among top corporations. Our team works in sprints to maximize visionary outcomes, production uptime, and project value.
 </p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 When are you looking to start? *
 </label>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {['Immediately', 'Within the next month', '1–3 months', 'Exploring options'].map((time) => (
 <button
 type="button"
 key={time}
 onClick={() => handleTextChange('targetTimeline', time)}
 className={`p-4 rounded-xl border text-center transition-all font-medium text-sm ${
 formData.targetTimeline === time 
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-400'
 }`}
 >
 {time}
 </button>
 ))}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 Is there a deadline, launch, or business event tied to this project?
 </label>
 <input 
 type="text"
 placeholder="e.g. Q4 launch, industry trade show, or new season opening"
 value={formData.launchDeadlineEvent}
 onChange={(e) => handleTextChange('launchDeadlineEvent', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 8 */}
 {currentStep === 8 && (
 <motion.div key="step8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <DollarSign className="text-lime-600 dark:text-lime-500" /> 8. Budget Alignment
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
 At SPARKSPHEAR we love saving money and using high-ROI tools. If there is no clear ROI from a product, why spend on it? That is unnecessary overhead that belongs elsewhere.
 </p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 Do you have a budget range allocated for this initiative? *
 </label>
 <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">(This helps us recommend solutions that make sense.)</p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 {['Under $1,500', '$1,500–$5,000', '$5,000–$10,000', '$10,000+', 'Not yet defined'].map((range) => (
 <button
 type="button"
 key={range}
 onClick={() => handleTextChange('budgetRange', range)}
 className={`p-4 rounded-xl border text-center transition-all font-medium text-sm ${
 formData.budgetRange === range 
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-400'
 }`}
 >
 {range}
 </button>
 ))}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Preferred Engagement Model</label>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
 {[
 '$297/mo 30-Day Pilot Program',
 'Custom Automation Buildout',
 'Ongoing Managed Retainer',
 'Undecided / Need Recommendation'
 ].map((model) => (
 <button
 type="button"
 key={model}
 onClick={() => handleTextChange('engagementModel', model)}
 className={`p-4 rounded-xl border text-left transition-all font-medium text-sm ${
 formData.engagementModel === model 
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-lime-400'
 }`}
 >
 {model}
 </button>
 ))}
 </div>
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 9 */}
 {currentStep === 9 && (
 <motion.div key="step9" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <Briefcase className="text-lime-600 dark:text-lime-500" /> 9. Decision Process & Collaboration
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
 We want to make things happen. Our time is valuable just as yours is too. Our desire is to partner directly with key leaders so your vision thrives.
 </p>

 <div className="space-y-6">
 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 Who will be involved in approving this project? Are you the final decision-maker?
 </label>
 <div className="flex gap-4">
 {['Yes', 'Other'].map((opt) => (
 <button
 type="button"
 key={opt}
 onClick={() => handleTextChange('decisionMakerStatus', opt)}
 className={`px-6 py-3 rounded-xl border font-medium text-sm ${
 formData.decisionMakerStatus === opt
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300'
 }`}
 >
 {opt}
 </button>
 ))}
 </div>
 {formData.decisionMakerStatus === 'Other' && (
 <input 
 type="text"
 placeholder="Please describe who else is involved in decision making..."
 value={formData.decisionMakerOther}
 onChange={(e) => handleTextChange('decisionMakerOther', e.target.value)}
 className="mt-3 w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 )}
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 Preferred communication method *
 </label>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {['Email', 'Video calls', 'Phone', 'Messaging app'].map((method) => (
 <button
 type="button"
 key={method}
 onClick={() => handleTextChange('preferredCommunication', method)}
 className={`p-3 rounded-xl border text-center font-medium text-sm ${
 formData.preferredCommunication === method 
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300'
 }`}
 >
 {method}
 </button>
 ))}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Timezone for Dedicated Communication & Check-ins</label>
 <select 
 value={formData.clientTimezone}
 onChange={(e) => handleTextChange('clientTimezone', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 >
 <option value="">Select Timezone...</option>
 <option value="EST (Eastern Standard Time)">EST (Eastern Standard Time)</option>
 <option value="CST (Central Standard Time)">CST (Central Standard Time)</option>
 <option value="MST (Mountain Standard Time)">MST (Mountain Standard Time)</option>
 <option value="PST (Pacific Standard Time)">PST (Pacific Standard Time)</option>
 <option value="Other">Other International Timezone</option>
 </select>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 Are you prepared to provide access to relevant systems if needed? *
 </label>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
 {['Yes', 'Not yet', 'Will need guidance'].map((acc) => (
 <button
 type="button"
 key={acc}
 onClick={() => handleTextChange('accessReadiness', acc)}
 className={`p-3 rounded-xl border text-center font-medium text-sm ${
 formData.accessReadiness === acc 
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300'
 }`}
 >
 {acc}
 </button>
 ))}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
 How hands-on would you like to be during the project? *
 </label>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
 {['Minimal (hands-off execution)', 'Collaborative', 'Highly involved'].map((inv) => (
 <button
 type="button"
 key={inv}
 onClick={() => handleTextChange('involvementLevel', inv)}
 className={`p-3 rounded-xl border text-center font-medium text-sm ${
 formData.involvementLevel === inv 
 ? 'bg-lime-500/20 border-lime-500 text-lime-600 dark:text-lime-400 font-bold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300'
 }`}
 >
 {inv}
 </button>
 ))}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
 Is there anything else SPARKSPHEAR should know to better serve you? (open response)
 </label>
 <textarea 
 rows={3}
 placeholder="Any additional background, preferences, or notes..."
 value={formData.additionalNotes}
 onChange={(e) => handleTextChange('additionalNotes', e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/80 border border-gray-300 dark:border-white/15 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-lime-500"
 />
 </div>
 </div>
 </motion.div>
 )}

 {/* SECTION 10 */}
 {currentStep === 10 && (
 <motion.div key="step10" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
 <CheckCircle2 className="text-lime-600 dark:text-lime-500" /> 10. Acknowledgment & Submission
 </h2>
 <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
 Final confirmation and agreement.
 </p>

 <div className="space-y-6">
 <div className="p-6 bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-white/10 rounded-2xl text-sm leading-relaxed text-gray-700 dark:text-gray-300">
 <p className="mb-4">
 By submitting this form, you confirm that the information provided is accurate and that you are interested in discussing a potential engagement with <strong>SPARKSPHEAR Tech Solutions</strong>.
 </p>
 <p className="text-xs text-gray-500 dark:text-gray-400">
 This form positions SPARKSPHEAR Tech Solutions as strategic (not just technical), AI-forward but grounded in business outcomes, and selective in delivering top-tier ROI.
 </p>
 </div>

 <div 
 onClick={() => handleTextChange('agreement', !formData.agreement)}
 className={`p-4 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
 formData.agreement 
 ? 'bg-lime-500/20 border-lime-500 text-lime-700 dark:text-lime-300 font-semibold'
 : 'bg-gray-50 dark:bg-zinc-800/60 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300'
 }`}
 >
 <div className={`w-6 h-6 rounded border flex items-center justify-center ${formData.agreement ? 'bg-lime-500 border-lime-500 text-zinc-950' : 'border-gray-400'}`}>
 {formData.agreement && <Check className="w-4 h-4 stroke-[3]" />}
 </div>
 <span className="text-sm">
 I acknowledge and agree to the SPARKSPHEAR Client Onboarding & Discovery terms. *
 </span>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>

 {/* Footer Navigation Buttons */}
 <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
 {currentStep > 1 ? (
 <button
 type="button"
 onClick={prevStep}
 className="px-6 py-3 bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all flex items-center gap-2 text-sm"
 >
 <ArrowLeft size={16} /> Back
 </button>
 ) : <div />}

 {currentStep < 10 ? (
 <button
 type="button"
 onClick={nextStep}
 className="px-8 py-3.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20 flex items-center gap-2 text-sm"
 >
 Continue <ArrowRight size={16} />
 </button>
 ) : (
 <button
 type="button"
 onClick={handleSubmit}
 disabled={isSubmitting}
 className="px-10 py-4 bg-gradient-to-r from-lime-500 to-green-500 text-zinc-950 font-extrabold rounded-xl hover:opacity-90 transition-all shadow-xl shadow-lime-500/30 flex items-center gap-2 text-base disabled:opacity-50"
 >
 {isSubmitting ? 'Submitting...' : 'Submit Onboarding Vision'} <Send size={18} />
 </button>
 )}
 </div>
 </div>
 </div>
 );
}
