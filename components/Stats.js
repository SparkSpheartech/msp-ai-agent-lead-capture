"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
 // AI & LLM Providers
 { name: 'OpenAI', logo: '/images/partners/openai.png', category: 'AI' },
 { name: 'Anthropic', logo: '/images/partners/anthropic.png', category: 'AI' },
 { name: 'Google', logo: '/images/partners/google.png', category: 'AI' },
 { name: 'Meta', logo: '/images/partners/meta.png', category: 'AI' },
 { name: 'Mistral', logo: '/images/partners/mistral.png', category: 'AI' },
 { name: 'Ollama', logo: '/images/partners/ollama.png', category: 'AI' },
 { name: 'DeepSeek', logo: '/images/partners/deepseek.png', category: 'AI' },
 { name: 'xAI', logo: '/images/partners/xai.png', category: 'AI' },
 // Automation Integrations
 { name: 'Slack', logo: '/images/partners/slack.png', category: 'Automation' },
 { name: 'Telegram', logo: '/images/partners/telegram.png', category: 'Automation' },
 { name: 'Discord', logo: '/images/partners/discord.png', category: 'Automation' },
 { name: 'Notion', logo: '/images/partners/notion.png', category: 'Productivity' },
 { name: 'Airtable', logo: '/images/partners/airtable.png', category: 'Productivity' },

 { name: 'Salesforce', logo: '/images/partners/salesforce.png', category: 'CRM' },
 { name: 'Stripe', logo: '/images/partners/stripe.png', category: 'Payments' },
 { name: 'Shopify', logo: '/images/partners/shopify.png', category: 'E-commerce' },
 { name: 'WordPress', logo: '/images/partners/wordpress.png', category: 'CMS' },
 { name: 'AWS', logo: '/images/partners/aws.png', category: 'Cloud' },
 { name: 'Azure', logo: '/images/partners/azure.png', category: 'Cloud' },
 { name: 'GitHub', logo: '/images/partners/github.png', category: 'Dev' },
 { name: 'GitLab', logo: '/images/partners/gitlab.png', category: 'Dev' },
 { name: 'Docker', logo: '/images/partners/docker.png', category: 'Dev' },
 { name: 'Kubernetes', logo: '/images/partners/kubernetes.png', category: 'Dev' },
 { name: 'PostgreSQL', logo: '/images/partners/postgresql.png', category: 'Database' },
 { name: 'MongoDB', logo: '/images/partners/mongodb.png', category: 'Database' },
 { name: 'Supabase', logo: '/images/partners/supabase.png', category: 'Database' },
 { name: 'Twilio', logo: '/images/partners/twilio.png', category: 'Communication' },
 { name: 'Zoom', logo: '/images/partners/zoom.png', category: 'Communication' },
 { name: 'Google Sheets', logo: '/images/partners/googlesheets.png', category: 'Productivity' },
 { name: 'Microsoft 365', logo: '/images/partners/microsoft365.png', category: 'Productivity' },
];

const PartnerCarousel = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isPaused, setIsPaused] = useState(false);
 const itemsPerView = { xs: 2, sm: 3, md: 4, lg: 6 };

 const nextSlide = () => {
 setCurrentIndex((prev) => (prev + 1) % partners.length);
 };

 const prevSlide = () => {
 setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
 };

 // Auto-rotate
 useEffect(() => {
 if (isPaused) return;
 
 const interval = setInterval(() => {
 nextSlide();
 }, 2000);

 return () => clearInterval(interval);
 }, [isPaused]);

 const getVisiblePartners = () => {
 const visible = [];
 for (let i = 0; i < 6; i++) {
 visible.push(partners[(currentIndex + i) % partners.length]);
 }
 return visible;
 };

 return (
 <section className="py-20 bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-white/5 overflow-hidden">
 <div className="container mb-12">
 <div className="text-center">
 <span className="text-lime-600 dark:text-lime-400 font-mono text-sm tracking-wider uppercase mb-4 block">TRUSTED BY</span>
 <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold mb-4">
 Our <span className="text-lime-600 dark:text-lime-500">Partners</span> & <span className="text-lime-600 dark:text-lime-500">Integrations</span>
 </h2>
 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
 We work with industry-leading AI providers and automation tools to deliver powerful solutions
 </p>
 </div>
 </div>

 {/* Carousel Container */}
 <div 
 className="relative"
 onMouseEnter={() => setIsPaused(true)}
 onMouseLeave={() => setIsPaused(false)}
 >
 {/* Gradient Overlays */}
 <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
 <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

 {/* Logo Track */}
 <div className="flex justify-center items-center gap-8 md:gap-12 px-4">
 {getVisiblePartners().map((partner, index) => (
 <div
 key={`${partner.name}-${index}`}
 className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center p-4 hover:border-lime-500 dark:hover:border-lime-500/50 hover:bg-gray-100 dark:hover:bg-zinc-100 dark:bg-zinc-800/80/50 transition-all duration-300 group"
 >
 <img
 src={partner.logo}
 alt={partner.name}
 className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
 onError={(e) => {
 e.target.style.display = 'none';
 e.target.nextSibling.style.display = 'flex';
 }}
 />
 {/* Fallback text if image fails */}
 <span className="hidden text-gray-600 dark:text-gray-400 font-bold text-sm text-center">{partner.name}</span>
 </div>
 ))}
 </div>

 {/* Navigation Arrows */}
 <button
 onClick={prevSlide}
 className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center text-gray-700 dark:text-white hover:bg-lime-500 hover:text-zinc-950 transition-all duration-300 z-20"
 >
 <ChevronLeft className="w-6 h-6" />
 </button>
 <button
 onClick={nextSlide}
 className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center text-gray-700 dark:text-white hover:bg-lime-500 hover:text-zinc-950 transition-all duration-300 z-20"
 >
 <ChevronRight className="w-6 h-6" />
 </button>
 </div>

 {/* Category Indicators */}
 <div className="flex justify-center gap-4 mt-8 flex-wrap px-4">
 {['AI', 'Automation', 'Productivity', 'Cloud', 'Dev'].map((cat) => (
 <span
 key={cat}
 className="px-4 py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-400 text-xs"
 >
 {cat}
 </span>
 ))}
 </div>

 {/* Pause/Play indicator */}
 <div className="text-center mt-4">
 <span className="text-gray-500 dark:text-gray-500 text-sm">
 {isPaused ? 'Paused - Hover to resume' : 'Auto-scrolling'}
 </span>
 </div>
 </section>
 );
};

export default PartnerCarousel;