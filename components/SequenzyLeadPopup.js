"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Mail, Loader2, Gift } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SequenzyLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if already submitted or dismissed in session
    const dismissed = sessionStorage.getItem("sparksphear_popup_dismissed");
    const userEmail = localStorage.getItem("sparksphear_user_email");

    if (dismissed || userEmail) return;

    // 1. Timer Trigger: Show after 12 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 12000);

    // 2. Exit Intent Trigger: Mouse leaves top of viewport
    const handleMouseLeave = (e) => {
      if (e.clientY <= 5) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("sparksphear_popup_dismissed", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid business email.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Sync lead directly to Sequenzy CRM via /api/newsletter
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "Exit Intent Popup - Automation Blueprint",
          tags: ["exit-intent-lead", "pop-up-lead", "automation-blueprint", "sequenzy-popup"],
        }),
      });

      if (res.ok) {
        localStorage.setItem("sparksphear_user_email", email.trim().toLowerCase());
        sessionStorage.setItem("sparksphear_popup_dismissed", "true");
        setIsSuccess(true);
        setIsLoading(false);

        setTimeout(() => {
          setIsOpen(false);
          router.push("/projects");
        }, 1500);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to submit. Please try again.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Popup lead submission error:", err);
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
          onClick={handleClose}
          className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md"
        />

        {/* Popup Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-lg bg-zinc-900 border border-lime-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-lime-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-500/20 text-lime-400 text-xs font-mono font-extrabold uppercase tracking-wider mb-4 border border-lime-500/30">
                <Gift className="w-4 h-4 text-lime-400" /> Free Executive Blueprint
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight leading-snug">
                Wait! Download The 2026 B2B Automation Playbook
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                See the exact software stack and AI workflows that top field service and trade operators use to save 20+ hours per week.
              </p>

              {/* Bullet Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Tested software stack rankings by company fleet size</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                  <span>Instant access to unlocked B2B system case studies</span>
                </li>
              </ul>

              {/* Email Input Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500 transition-colors"
                  />
                </div>

                {error && <p className="text-xs text-red-400 font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-lime-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Syncing to Sequenzy...
                    </>
                  ) : (
                    <>
                      Get Free Playbook & Unlock Projects <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust Footer */}
              <div className="mt-5 text-center flex items-center justify-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>Zero spam. Direct Sequenzy CRM integration.</span>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="py-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 rounded-full bg-lime-500/20 border border-lime-500 text-lime-400 flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle2 className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Blueprint & Projects Unlocked!
              </h3>
              <p className="text-sm text-zinc-300 mb-4">
                Redirecting you to our unlocked B2B system case studies...
              </p>
              <Loader2 className="w-5 h-5 animate-spin mx-auto text-lime-400" />
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
