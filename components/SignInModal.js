"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogIn, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Lock, Mail, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignInModal({ isOpen, onClose, onSuccess }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Reset state on open
    if (isOpen) {
      setError("");
      setIsSuccess(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid business email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // 1. Sync email directly to Sequenzy CRM via /api/newsletter
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "Sign In Modal - Case Studies Unlock",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save auth state in browser
        localStorage.setItem("sparksphear_user_email", email.trim().toLowerCase());
        localStorage.setItem("sparksphear_auth_time", new Date().toISOString());

        setIsSuccess(true);
        setIsLoading(false);

        if (onSuccess) onSuccess(email);

        // Redirect after brief success animation
        setTimeout(() => {
          onClose();
          router.push("/projects");
        }, 1200);
      } else {
        setError(data.error || "Failed to sign in. Please try again.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Sign In Error:", err);
      setError("Connection error. Please try again.");
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mb-1">
                  Sign In to SPARKSPHEAR
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Enter your business email to unlock full B2B case studies, system blueprints, and saved software stacks.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white text-sm focus:outline-none focus:border-lime-500 transition-colors"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-xs text-red-500 font-medium text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-lime-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Unlocking...
                    </>
                  ) : (
                    <>
                      Unlock Case Studies <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-lime-500" />
                  <span>Instant access. No password required.</span>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="py-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-16 h-16 rounded-full bg-lime-500/20 border border-lime-500 text-lime-500 flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white mb-2">
                Access Unlocked!
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Redirecting you to full Case Studies & System Architecture Teardowns...
              </p>
              <Loader2 className="w-5 h-5 animate-spin mx-auto text-lime-500" />
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
