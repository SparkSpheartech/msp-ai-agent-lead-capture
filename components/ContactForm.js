"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
 return (
 <section id="contact-us" className="section contact-section bg-gray-100 dark:bg-slate-50 dark:bg-zinc-950 py-24 relative overflow-hidden">
 {/* Gradient Blob for depth */}
 <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-900/10 dark:bg-lime-900/10 rounded-full blur-3xl -z-10"></div>

 <div className="container" style={{ maxWidth: '800px' }}>
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 viewport={{ once: true }}
 className="section-header text-center mb-12"
 >
 <span className="tag text-lime-600 dark:text-lime-400 font-bold tracking-wider">CONTACT US</span>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to discuss your project? <span className="text-lime-600 dark:text-lime-500">Drop us a line.</span></h2>
 <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
 We'd love to hear about your vision. Fill out our project inquiry form to get started, and our team will get back to you with a tailored strategy.
 </p>

 <motion.div
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 >
 <a
 href="https://docs.google.com/forms/d/1eYMjWkzKncACWYoB0RpXuOU0eaSFu-EoeywYNdttLIw/edit"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-lime-500 text-black font-bold text-xl rounded-full hover:bg-lime-400 transition-all shadow-[0_0_30px_rgba(132,204,22,0.3)] hover:shadow-[0_0_50px_rgba(132,204,22,0.5)]"
 >
 Start Project Inquiry
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
 </a>
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
};

export default ContactForm;