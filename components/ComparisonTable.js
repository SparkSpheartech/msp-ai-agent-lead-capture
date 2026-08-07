"use client";
import React from 'react';
import { Check, X, ExternalLink, Star, Crown } from 'lucide-react';

export default function ComparisonTable({ products }) {
 if (!products || products.length === 0) return null;

 // Take top 3 (or fewer)
 const topProducts = products.slice(0, 3);
 const topPick = topProducts.find(p => p.isTopPick) || topProducts[0];

 // Collect all unique features across the top products
 const allFeatures = [...new Set(topProducts.flatMap(p => p.features))];

 return (
 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr>
 <th className="p-4 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200 dark:border-white/10 w-1/4">
 Feature
 </th>
 {topProducts.map((product) => (
 <th key={product.id} className={`p-4 text-center border-b ${product.id === topPick.id ? 'border-lime-500/30 bg-lime-500/5' : 'border-gray-200 dark:border-white/10'}`}>
 <div className="flex flex-col items-center gap-2">
 {product.isTopPick && (
 <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-lime-500 text-zinc-950 text-[10px] font-extrabold uppercase tracking-wider rounded-full">
 <Crown size={10} /> Top Pick
 </span>
 )}
 <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-zinc-800 overflow-hidden flex items-center justify-center border border-gray-200 dark:border-white/10">
 <img src={product.logo} alt={product.name} className="w-7 h-7 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
 </div>
 <span className="font-bold text-gray-900 dark:text-white text-sm">{product.name}</span>
 <div className="flex items-center gap-1 text-amber-400">
 <Star size={12} className="fill-current" />
 <span className="text-xs font-bold text-gray-900 dark:text-white">{product.rating}</span>
 </div>
 <span className="text-xs text-lime-600 dark:text-lime-500 font-semibold">{product.price}</span>
 </div>
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {allFeatures.map((feature, i) => (
 <tr key={i} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
 <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{feature}</td>
 {topProducts.map((product) => (
 <td key={product.id} className={`p-4 text-center ${product.id === topPick.id ? 'bg-lime-500/5' : ''}`}>
 {product.features.includes(feature) ? (
 <Check className="w-5 h-5 text-lime-600 dark:text-lime-500 mx-auto" />
 ) : (
 <X className="w-5 h-5 text-zinc-700 dark:text-gray-300 dark:text-zinc-700 mx-auto" />
 )}
 </td>
 ))}
 </tr>
 ))}
 {/* CTA Row */}
 <tr>
 <td className="p-4"></td>
 {topProducts.map((product) => (
 <td key={product.id} className={`p-4 text-center ${product.id === topPick.id ? 'bg-lime-500/5' : ''}`}>
 <a
 href={product.affiliateUrl}
 target="_blank"
 rel="noopener noreferrer sponsored"
 className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
 product.isTopPick
 ? 'bg-lime-500 text-zinc-950 hover:bg-lime-400 shadow-md shadow-lime-500/20'
 : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white hover:bg-zinc-700 border border-zinc-200 dark:border-white/10'
 }`}
 >
 Visit <ExternalLink size={12} />
 </a>
 </td>
 ))}
 </tr>
 </tbody>
 </table>
 </div>
 );
}
