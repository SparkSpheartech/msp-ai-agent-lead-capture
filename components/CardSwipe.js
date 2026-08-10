'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTheme } from 'next-themes';
import {
  Brain02Icon,
  Search01Icon,
  Layout01Icon,
} from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const PATHWAY_CARDS = [
  {
    id: 1,
    category: 'FIX OPERATIONS',
    title: 'Master Business Audit',
    description: 'We inspect your call intake, dispatching, CRM, and billing systems to map every manual data entry step and friction point.',
    ctaText: 'Explore Business Audit',
    href: '/services/it-audits',
    icon: (theme) => (
      <HugeiconsIcon
        icon={Search01Icon}
        size={44}
        color={theme === 'dark' ? '#a6fd37' : '#16a34a'}
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 2,
    category: 'AUTOMATE GROWTH',
    title: 'AI & Agentic Workflows',
    description: 'We deploy automated call dispatchers, SMS customer re-engagement pipelines, and custom AI agents that execute repetitive tasks.',
    ctaText: 'Explore AI Workflows',
    href: '/services/ai-automation',
    icon: (theme) => (
      <HugeiconsIcon
        icon={Brain02Icon}
        size={44}
        color={theme === 'dark' ? '#a6fd37' : '#16a34a'}
        strokeWidth={1.5}
      />
    ),
  },
  {
    id: 3,
    category: 'BUILD DIGITAL PRESENCE',
    title: 'Web Architecture & Portals',
    description: 'We build high-converting, lightning-fast web applications, booking portals, and mobile-friendly brand storefronts.',
    ctaText: 'Explore Web Architecture',
    href: '/services/web-design',
    icon: (theme) => (
      <HugeiconsIcon
        icon={Layout01Icon}
        size={44}
        color={theme === 'dark' ? '#a6fd37' : '#16a34a'}
        strokeWidth={1.5}
      />
    ),
  },
];

const ITEM_WIDTH = 340;
const GAP = 20;
const CONTAINER_WIDTH = ITEM_WIDTH + GAP;
const DRAG_BUFFER = 40;
const VELOCITY_THRESHOLD = 400;

const SPRING_OPTIONS = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

function CarouselCard({
  item,
  index,
  x,
  itemCount,
  currentTheme,
}) {
  const nextIndex = Math.min(index + 1, itemCount - 1);
  const prevIndex = Math.max(index - 1, 0);

  const range = [
    (-100 * (index + 1) * CONTAINER_WIDTH) / 100,
    (-100 * index * CONTAINER_WIDTH) / 100,
    (-100 * (index - 1) * CONTAINER_WIDTH) / 100,
  ];
  const outputRange = [nextIndex ? 30 : 30, 0, prevIndex ? -30 : -30];

  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      style={{
        width: ITEM_WIDTH,
        height: 440,
        rotateY,
        flexShrink: 0,
      }}
      transition={SPRING_OPTIONS}
      className="flex cursor-grab flex-col justify-between items-start rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-xl transition-all hover:border-lime-500/50 active:cursor-grabbing"
    >
      <div>
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[20px] border border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 shadow-sm">
          {item.icon(currentTheme)}
        </div>

        <span className="text-xs font-mono font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider block mb-2">
          {item.category}
        </span>

        <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
          {item.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {item.description}
        </p>
      </div>

      <Link
        href={item.href}
        className="w-full rounded-xl bg-lime-500 hover:bg-lime-400 text-zinc-950 px-6 py-3 text-sm font-bold shadow-lg shadow-lime-500/20 inline-flex items-center justify-center gap-2 transition-all"
      >
        {item.ctaText} <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export function CardSwipe({ items = PATHWAY_CARDS }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const x = useMotionValue(0);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light';

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, items.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const leftConstraint = -((ITEM_WIDTH + GAP) * (items.length - 1));

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        className="relative overflow-hidden w-full max-w-[360px] sm:max-w-none"
        style={{ height: 460 }}
      >
        <motion.div
          className="flex justify-center"
          drag="x"
          dragConstraints={{ left: leftConstraint, right: 0 }}
          style={{
            gap: GAP,
            perspective: 1000,
            perspectiveOrigin: `${currentIndex * ITEM_WIDTH + ITEM_WIDTH / 2}px`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * CONTAINER_WIDTH) }}
          transition={SPRING_OPTIONS}
        >
          {items.map((item, index) => (
            <CarouselCard
              key={item.id}
              item={item}
              index={index}
              x={x}
              itemCount={items.length}
              currentTheme={currentTheme}
            />
          ))}
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="mt-6 flex gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'h-2.5 rounded-full transition-all duration-300',
              currentIndex === i ? 'w-8 bg-lime-500' : 'w-2.5 bg-zinc-300 dark:bg-zinc-700'
            )}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSwipe;
