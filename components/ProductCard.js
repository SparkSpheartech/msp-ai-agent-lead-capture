"use client";
import React, { useState } from 'react';
import { Star, ExternalLink, Zap, Cpu, Monitor, Sparkles, Building2 } from 'lucide-react';
import AffiliateClickTracker from '@/components/AffiliateClickTracker';

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
  const [imgError, setImgError] = useState(false);

  // High-end fallback badge using initials + Lucide icon
  const initials = product.name ? product.name.substring(0, 2).toUpperCase() : 'SP';

  return (
    <div className={`relative bg-white dark:bg-zinc-900/80 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group ${
      product.isTopPick
        ? 'border-lime-500/50 hover:border-lime-500 shadow-lg shadow-lime-500/5'
        : 'border-gray-200 dark:border-white/10 hover:border-lime-500/30'
    }`}>
      {/* Top Pick Badge */}
      {product.isTopPick && (
        <div className="bg-lime-500 text-zinc-950 text-xs font-black tracking-wider uppercase py-1.5 text-center flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 fill-zinc-950" /> SparkSphear Top Pick
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

            {/* Logo with high-end Vector Fallback */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500/20 via-zinc-800 to-zinc-900 p-2 flex items-center justify-center flex-shrink-0 border border-lime-500/30 font-bold text-lime-400 text-sm shadow-md">
              {!imgError && product.logo ? (
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
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
            <AffiliateClickTracker product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
