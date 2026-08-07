"use client";
import React from 'react';
import { Star, ExternalLink, Zap, Cpu, Monitor } from 'lucide-react';

const categoryIcon = {
 "AI & Automation": <Cpu className="w-3.5 h-3.5" />,
 "Automation": <Zap className="w-3.5 h-3.5" />,
 "IT & Software": <Monitor className="w-3.5 h-3.5" />,
};

const categoryColor = {
 "AI & Automation": "bg-purple-500/10 text-purple-400 border-purple-500/30",
 "Automation": "bg-blue-500/10 text-blue-400 border-blue-500/30",
 "IT & Software": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

export default function ProductCard({ product, rank }) {
 return (
 <div className={`relative bg-white dark:bg-zinc-900/80 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group ${
 product.isTopPick
 ? 'border-lime-500/50 hover:border-lime-500 shadow-lg shadow-lime-500/5'
 : 'border-gray-200 dark:border-white/10 hover:border-lime-500/30'
 }`}>
 {/* Top Pick Badge */}
 {product.isTopPick && (
 <div className="bg-lime-500 text-zinc-950 text-xs font-extrabold tracking-wider uppercase py-1.5 text-center">
 ⚡ SparkSphear Top Pick
 </div>
 )}

 <div className="p-6 md:p-8">
 {/* Header */}
 <div className="flex items-start justify-between gap-4 mb-4">
 <div className="flex items-center gap-4">
 {rank && (
 <span className="text-3xl font-extrabold text-zinc-800 dark:text-gray-200 dark:text-zinc-700 select-none">
 #{rank}
 </span>
 )}
 <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-zinc-800 overflow-hidden flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-white/10">
 <img
 src={product.logo}
 alt={product.name}
 className="w-8 h-8 object-contain"
 onError={(e) => { e.target.style.display = 'none'; }}
 />
 </div>
 <div>
 <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-600 dark:text-lime-400 transition-colors">
 {product.name}
 </h3>
 <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryColor[product.category] || 'bg-gray-500/10 text-zinc-600 dark:text-gray-400 border-gray-500/30'}`}>
 {categoryIcon[product.category]} {product.category}
 </span>
 </div>
 </div>

 {/* Rating */}
 <div className="flex items-center gap-1 text-amber-400 flex-shrink-0">
 <Star className="w-4 h-4 fill-current" />
 <span className="text-sm font-bold text-gray-900 dark:text-white">{product.rating}</span>
 </div>
 </div>

 {/* Description */}
 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
 {product.description}
 </p>

 {/* Features */}
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
 {product.features.map((feature, i) => (
 <div key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
 <div className="w-1.5 h-1.5 rounded-full bg-lime-500 flex-shrink-0" />
 {feature}
 </div>
 ))}
 </div>

 {/* Footer */}
 <div className="flex items-center justify-between pt-5 border-t border-gray-100 dark:border-white/5">
 <div>
 <p className="text-xs text-zinc-600 dark:text-gray-400 uppercase tracking-wider font-semibold">Pricing</p>
 <p className="text-lg font-bold text-gray-900 dark:text-white">{product.price}</p>
 </div>
 <div className="text-right">
 <p className="text-xs text-zinc-600 dark:text-gray-400 mb-1">Best for: <span className="text-gray-600 dark:text-gray-300">{product.bestFor}</span></p>
 <a
 href={product.affiliateUrl}
 target="_blank"
 rel="noopener noreferrer sponsored"
 className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime-500 text-zinc-950 font-bold rounded-xl hover:bg-lime-400 transition-all text-sm shadow-md shadow-lime-500/20"
 >
 Visit Site <ExternalLink size={14} />
 </a>
 </div>
 </div>
 </div>
 </div>
 );
}
