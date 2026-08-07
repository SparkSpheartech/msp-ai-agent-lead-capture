"use client";
import Link from 'next/link';
import { Home, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
 return (
 <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center relative overflow-hidden">
 {/* Background Effects */}
 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
 <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-lime-900/10 rounded-full blur-[120px]"></div>
 <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-zinc-100 dark:bg-zinc-800/80/20 rounded-full blur-[100px]"></div>
 </div>

 <div className="container relative z-10 text-center px-4">
 {/* 404 Number */}
 <div className="mb-8">
 <span className="text-[200px] md:text-[300px] font-bold text-zinc-800 leading-none select-none">
 404
 </span>
 </div>

 {/* Content */}
 <div className="max-w-2xl mx-auto">
 <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
 Page Not Found
 </h1>
 <p className="text-xl text-zinc-600 dark:text-gray-400 mb-8">
 Oops! The page you're looking for doesn't exist. 
 It might have been moved or deleted.
 </p>

 {/* Quick Links */}
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
 <Link 
 href="/"
 className="inline-flex items-center gap-2 px-8 py-4 bg-lime-500 text-zinc-950 font-bold rounded-md hover:bg-lime-400 transition-colors"
 >
 <Home className="w-5 h-5" />
 Go Home
 </Link>
 <Link 
 href="/services"
 className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-md hover:bg-zinc-100 dark:bg-zinc-800/80/50 transition-colors"
 >
 <Search className="w-5 h-5" />
 View Services
 </Link>
 </div>

 {/* Help Section */}
 <div className="bg-white dark:bg-zinc-900 shadow-sm dark:shadow-none/50 border border-zinc-800 rounded-2xl p-8 max-w-md mx-auto">
 <h3 className="text-zinc-900 dark:text-white font-bold text-lg mb-4">
 Need Help?
 </h3>
 <p className="text-zinc-600 dark:text-gray-400 mb-6">
 Check out our services or contact us for assistance.
 </p>
 <Link 
 href="/contact"
 className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-500 font-semibold hover:gap-3 transition-all"
 >
 Contact Us <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>

 {/* Search Suggestion */}
 <div className="mt-12 text-gray-500 text-sm">
 <p>If you typed the URL manually, please check the spelling.</p>
 </div>
 </div>
 </div>
 );
}