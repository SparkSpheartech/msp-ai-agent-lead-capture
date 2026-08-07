"use client";

import React, { useState } from 'react';
import { Star, ShieldCheck, Crown, Layers, ArrowRight, Zap, CheckCircle2, Users, User, TrendingUp, Building2, Cpu, Wrench, Trash2 } from 'lucide-react';
import { businessSizes, getStackForSize } from '@/data/affiliateProducts';
import AffiliateClickTracker from '@/components/AffiliateClickTracker';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  User: <User className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Trash2: <Trash2 className="w-5 h-5" />
};

export default function VerticalStack({ vertical }) {
  const [selectedSize, setSelectedSize] = useState('small');
  const [failedLogos, setFailedLogos] = useState({});

  const rankedProducts = getStackForSize(vertical.slug, selectedSize);
  const currentSizeObj = businessSizes.find(s => s.id === selectedSize) || businessSizes[1];

  const handleImgError = (id) => {
    setFailedLogos(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full my-12">
      {/* HEADER & SIZE SELECTOR */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-lime-500/30 rounded-3xl p-6 md:p-10 shadow-2xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-500/20 text-lime-400 text-xs font-extrabold uppercase tracking-wider mb-4 border border-lime-500/30">
            <Layers className="w-3.5 h-3.5" /> Curated Operational Stack
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            The {vertical.name} Stack
          </h2>
          <p className="text-zinc-300 text-sm md:text-base max-w-2xl leading-relaxed mb-8">
            Don't waste months testing software. Select your business size below to see the exact software stack ranked and recommended for your operational scale.
          </p>

          {/* BUSINESS SIZE SELECTOR TABS WITH LUCIDE ICONS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-900/90 p-2 rounded-2xl border border-white/10">
            {businessSizes.map((size) => {
              const active = selectedSize === size.id;
              const IconComp = iconMap[size.iconName] || <Users className="w-5 h-5" />;

              return (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-xl transition-all ${
                    active
                      ? 'bg-lime-500 text-zinc-950 font-bold shadow-lg shadow-lime-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="mb-1">{IconComp}</div>
                  <span className="text-xs md:text-sm font-bold">{size.label}</span>
                  <span className={`text-[10px] ${active ? 'text-zinc-900/80 font-semibold' : 'text-zinc-500'}`}>
                    {size.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* STACK RANKING RESULTS */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <span>Ranked Stack for <strong>{currentSizeObj.label}</strong> ({currentSizeObj.description})</span>
        </h3>
        <span className="text-xs font-mono text-lime-600 dark:text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/20 font-semibold">
          Updated 2026 Strategy
        </span>
      </div>

      {/* PRODUCTS LIST IN RANKED ORDER */}
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {rankedProducts.map((product, idx) => {
            const sizeRecommendation = product.stackRecommendations?.[selectedSize] || { rank: idx + 1, reason: product.bestFor };
            const rankNum = idx + 1;
            const isTopRanked = rankNum === 1;
            const initials = product.name ? product.name.substring(0, 2).toUpperCase() : 'SP';

            return (
              <motion.div
                key={`${product.id}-${selectedSize}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative bg-white dark:bg-zinc-900/90 border rounded-2xl overflow-hidden transition-all duration-300 shadow-md ${
                  isTopRanked
                    ? 'border-lime-500 ring-2 ring-lime-500/20 shadow-xl shadow-lime-500/10'
                    : 'border-zinc-200 dark:border-white/10 hover:border-lime-500/40'
                }`}
              >
                {/* TOP CHOICE RIBBON */}
                {isTopRanked && (
                  <div className="bg-lime-500 text-zinc-950 text-xs font-black tracking-widest uppercase py-1.5 px-4 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Crown className="w-4 h-4 fill-current" /> #1 RECOMMENDED CHOICE FOR {currentSizeObj.label.toUpperCase()}
                    </span>
                    <span className="hidden sm:inline text-[11px] font-bold opacity-90">Saves ~15 hrs/week</span>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* CARD HEADER */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {/* RANK BADGE */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-lg flex-shrink-0 ${
                        isTopRanked
                          ? 'bg-lime-500 text-zinc-950'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'
                      }`}>
                        #{rankNum}
                      </div>

                      {/* LOGO WITH VECTOR FALLBACK */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500/20 via-zinc-800 to-zinc-900 p-2 flex items-center justify-center flex-shrink-0 border border-lime-500/30 font-bold text-lime-400 text-sm shadow-md">
                        {!failedLogos[product.id] && product.logo ? (
                          <img
                            src={product.logo}
                            alt={product.name}
                            className="w-full h-full object-contain"
                            onError={() => handleImgError(product.id)}
                          />
                        ) : (
                          <span>{initials}</span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                            {product.name}
                          </h4>
                          <span className="flex items-center text-amber-400 text-xs font-bold gap-1 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                            <Star className="w-3.5 h-3.5 fill-amber-400" /> {product.rating}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                          {product.category} • <strong className="text-zinc-800 dark:text-zinc-200">{product.price}</strong>
                        </span>
                      </div>
                    </div>

                    {/* CALL TO ACTION BUTTON */}
                    <div className="sm:self-center">
                      <AffiliateClickTracker product={product}>
                        <span>Try {product.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </AffiliateClickTracker>
                    </div>
                  </div>

                  {/* CIALDINI SIMILARITY SOCIAL PROOF SIGNAL */}
                  {product.socialProof && (
                    <div className="mb-4 bg-lime-500/10 border border-lime-500/30 rounded-xl p-3 flex items-start gap-2.5 text-xs text-lime-900 dark:text-lime-300 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-lime-600 dark:text-lime-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Similar-Business Proof:</strong> "{product.socialProof}"</span>
                    </div>
                  )}

                  {/* RECOMMENDATION REASONING */}
                  <div className="mb-5 bg-slate-50 dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs md:text-sm">
                    <span className="font-bold text-zinc-900 dark:text-white block mb-1">
                      💡 Why #{rankNum} for {currentSizeObj.label}:
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {sizeRecommendation.reason}
                    </p>
                  </div>

                  {/* FEATURES GRID */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
