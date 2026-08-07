"use client";
import React from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';

export default function AffiliateDisclosure() {
 return (
 <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-5 py-3 flex items-start gap-3 text-sm">
 <Info className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
 <p className="text-gray-500 dark:text-gray-400">
 <strong className="text-gray-700 dark:text-gray-300">Affiliate Disclosure:</strong> This page contains affiliate links. If you purchase through our links, we may earn a commission at no extra cost to you. This helps us keep creating free content.{' '}
 <Link href="/affiliate-disclosure" className="text-lime-600 dark:text-lime-400 hover:underline font-medium">
 Learn more
 </Link>
 </p>
 </div>
 );
}
