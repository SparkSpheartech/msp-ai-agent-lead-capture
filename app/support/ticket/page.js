"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Send } from 'lucide-react';

export default function SubmitTicket() {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 category: '',
 priority: 'normal',
 subject: '',
 description: ''
 });
 const [status, setStatus] = useState('');

 const handleSubmit = async (e) => {
 e.preventDefault();
 setStatus('submitting');

 // Simulate ticket submission
 setTimeout(() => {
 setStatus('success');
 setFormData({ name: '', email: '', category: '', priority: 'normal', subject: '', description: '' });
 setTimeout(() => setStatus(''), 5000);
 }, 1500);
 };

 const handleChange = (e) => {
 setFormData({
 ...formData,
 [e.target.name]: e.target.value
 });
 };

 return (
 <>
 <Navbar />
 <main className="min-h-screen" style={{ background: '#0a0a0a' }}>
 <div className="pt-32 pb-20">
 <div className="container max-w-3xl">
 {/* Breadcrumb */}
 <div className="mb-8">
 <Link
 href="/support"
 className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
 >
 <ArrowLeft className="w-4 h-4 mr-2" />
 Back to Support Center
 </Link>
 </div>

 {/* Header */}
 <div className="mb-12 text-center">
 <h1 className="text-zinc-900 dark:text-white text-4xl md:text-5xl font-bold mb-4">
 Submit a <span className="text-primary">Support Ticket</span>
 </h1>
 <p className="text-zinc-600 dark:text-gray-400 text-lg">
 Our team will respond within 24 hours
 </p>
 </div>

 {/* Form */}
 <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 border-2 border-dark-2 rounded-lg p-8">
 <div className="space-y-6">
 {/* Name */}
 <div>
 <label htmlFor="name" className="block text-zinc-900 dark:text-white font-semibold mb-2">
 Full Name *
 </label>
 <input
 type="text"
 id="name"
 name="name"
 value={formData.name}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-dark-2 rounded-md text-zinc-900 dark:text-white focus:border-primary focus:outline-none transition-colors"
 />
 </div>

 {/* Email */}
 <div>
 <label htmlFor="email" className="block text-zinc-900 dark:text-white font-semibold mb-2">
 Email Address *
 </label>
 <input
 type="email"
 id="email"
 name="email"
 value={formData.email}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-dark-2 rounded-md text-zinc-900 dark:text-white focus:border-primary focus:outline-none transition-colors"
 />
 </div>

 {/* Category & Priority */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label htmlFor="category" className="block text-zinc-900 dark:text-white font-semibold mb-2">
 Category *
 </label>
 <select
 id="category"
 name="category"
 value={formData.category}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-dark-2 rounded-md text-zinc-900 dark:text-white focus:border-primary focus:outline-none transition-colors"
 >
 <option value="">Select a category</option>
 <option value="technical">Technical Issue</option>
 <option value="billing">Billing Question</option>
 <option value="security">Security Concern</option>
 <option value="general">General Inquiry</option>
 </select>
 </div>

 <div>
 <label htmlFor="priority" className="block text-zinc-900 dark:text-white font-semibold mb-2">
 Priority
 </label>
 <select
 id="priority"
 name="priority"
 value={formData.priority}
 onChange={handleChange}
 className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-dark-2 rounded-md text-zinc-900 dark:text-white focus:border-primary focus:outline-none transition-colors"
 >
 <option value="low">Low</option>
 <option value="normal">Normal</option>
 <option value="high">High</option>
 <option value="urgent">Urgent</option>
 </select>
 </div>
 </div>

 {/* Subject */}
 <div>
 <label htmlFor="subject" className="block text-zinc-900 dark:text-white font-semibold mb-2">
 Subject *
 </label>
 <input
 type="text"
 id="subject"
 name="subject"
 value={formData.subject}
 onChange={handleChange}
 required
 className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-dark-2 rounded-md text-zinc-900 dark:text-white focus:border-primary focus:outline-none transition-colors"
 />
 </div>

 {/* Description */}
 <div>
 <label htmlFor="description" className="block text-zinc-900 dark:text-white font-semibold mb-2">
 Description *
 </label>
 <textarea
 id="description"
 name="description"
 value={formData.description}
 onChange={handleChange}
 required
 rows={6}
 className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-2 border-dark-2 rounded-md text-zinc-900 dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
 placeholder="Please provide as much detail as possible..."
 />
 </div>

 {/* Submit Button */}
 <button
 type="submit"
 disabled={status === 'submitting'}
 className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-zinc-900 dark:text-white font-bold hover:bg-primary/90 transition-all duration-300 rounded-md disabled:opacity-50"
 >
 {status === 'submitting' ? 'Submitting...' : 'Submit Ticket'}
 <Send size={18} />
 </button>

 {status === 'success' && (
 <div className="text-center p-4 bg-primary/10 border border-primary rounded-md">
 <p className="text-primary font-semibold">
 ✓ Ticket submitted successfully! We'll be in touch soon.
 </p>
 </div>
 )}
 </div>
 </form>

 {/* Alternative Contact */}
 <div className="mt-12 text-center">
 <p className="text-zinc-600 dark:text-gray-400 mb-4">Prefer to talk directly?</p>
 <a
 href="tel:2602477775"
 className="text-primary font-bold hover:text-primary/80 transition-colors"
 >
 Call us at (260) 247-7775
 </a>
 </div>
 </div>
 </div>
 </main>
 <Footer />
 </>
 );
}
