"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X, ArrowRight, CheckCircle2, ShieldCheck, Mail, Building, Users, AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MasterAuditWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "HVAC & Field Service",
    teamSize: "2-5 employees",
    bottleneck: "Dispatch & Route Chaos",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes("@")) {
      setError("Please enter a valid work email address.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // 1. Submit lead to /api/leads (Sequenzy + n8n + Google Sheet Failsafe)
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          companyName: formData.company,
          industry: formData.industry,
          teamSize: formData.teamSize,
          primaryBottleneck: formData.bottleneck,
          source: "Floating Master Audit Widget",
          tags: ["master-audit-lead", "dfy-prospect", "high-intent-lead", "widget-lead"],
        }),
      });

      if (res.ok) {
        localStorage.setItem("sparksphear_user_email", formData.email.trim().toLowerCase());
        setIsSuccess(true);
        setIsLoading(false);

        setTimeout(() => {
          setIsOpen(false);
          router.push("/onboarding");
        }, 1500);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to submit audit request. Please try again.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Master audit widget error:", err);
      setError("Connection error. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING CORNER BUTTON */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-zinc-900 border-2 border-lime-500 text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-2.5 hover:bg-zinc-800 transition-all cursor-pointer group"
      >
        <div className="w-7 h-7 rounded-full bg-lime-500 text-zinc-950 flex items-center justify-center font-bold shadow-md animate-pulse">
          <Zap className="w-4 h-4 fill-zinc-950" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs font-mono font-extrabold text-lime-400 uppercase tracking-wider">Free System Audit</p>
          <p className="text-xs text-zinc-300 font-medium">Find Operational Bottlenecks</p>
        </div>
        <span className="sm:hidden text-xs font-bold text-lime-400">Get Audit</span>
      </motion.button>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-zinc-950/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-lime-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 text-white"
            >
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSuccess ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-lime-500 animate-ping" />
                    <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-wider">
                      Master IT & AI Audit Intake
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    Claim Your Master System Audit
                  </h3>
                  <p className="text-sm text-zinc-300 mb-6">
                    Our automation architects analyze your existing software stack and map custom AI workflows that save 10 to 40+ hours per week.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                          Industry
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => handleInputChange("industry", e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                        >
                          <option value="HVAC & Field Service">HVAC & Field Service</option>
                          <option value="Waste Management & Sanitation">Waste Management</option>
                          <option value="Daycares & Childcare">Daycares & Childcare</option>
                          <option value="Salons, Spas & Barbers">Salons & Spas</option>
                          <option value="Restaurants & Hospitality">Restaurants</option>
                          <option value="Auto Repair & Mechanics">Auto Repair</option>
                          <option value="Other Trade Business">Other Trade Business</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                          Team / Fleet Size
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => handleInputChange("teamSize", e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                        >
                          <option value="Solo (1 person)">Solo (1 person)</option>
                          <option value="2-5 employees">2–5 employees</option>
                          <option value="5-15 employees">5–15 employees</option>
                          <option value="15+ employees">15+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1">
                        #1 Operational Bottleneck
                      </label>
                      <select
                        value={formData.bottleneck}
                        onChange={(e) => handleInputChange("bottleneck", e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-lime-500"
                      >
                        <option value="Dispatch & Route Chaos">Dispatch & Route Chaos</option>
                        <option value="Delayed Invoicing & Slow Cash">Delayed Invoicing & Slow Cash</option>
                        <option value="Missed Calls & Slow Follow-Ups">Missed Calls & Slow Follow-Ups</option>
                        <option value="Too Many Manual Spreadsheets">Too Many Manual Spreadsheets</option>
                      </select>
                    </div>

                    {error && <p className="text-xs text-red-400 font-medium">{error}</p>}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-lime-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Registering Audit...
                        </>
                      ) : (
                        <>
                          Submit Audit Request <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 text-center flex items-center justify-center gap-2 text-xs text-zinc-400">
                    <ShieldCheck className="w-4 h-4 text-lime-400" />
                    <span>Instant Sequenzy CRM push. 100% confidential.</span>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-lime-500/20 border border-lime-500 text-lime-400 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    Master Audit Requested!
                  </h3>
                  <p className="text-sm text-zinc-300 mb-4">
                    Your details have been logged. Redirecting you to the Onboarding Intake page...
                  </p>
                  <Loader2 className="w-5 h-5 animate-spin mx-auto text-lime-400" />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
