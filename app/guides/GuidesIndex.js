"use client";

import React, { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Cpu,
  Zap,
  Sparkles,
  Calendar,
  User,
  Search,
  Star,
  ShieldCheck,
  Flame,
  Layers,
  Clock,
  Award,
  CheckCircle2,
  X,
  Check,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  LogIn,
} from "lucide-react";
import { getAllVerticals, products } from "@/data/affiliateProducts";
import { blogPosts } from "@/data/blogPosts";
import {
  editionMeta,
  briefingBand,
  oneMetric,
  toolDemandMeter,
  toolDemandByVertical,
  curatedBriefings,
  stickyBanner,
} from "@/data/guidesHub";
import StackQuiz from "@/components/StackQuiz";
import OpsQuizSurvey from "@/components/OpsQuizSurvey";

// ─────────────────────────────────────────────────────────
// SPARKSPHEAR signature brand colorway tokens
// ─────────────────────────────────────────────────────────
const hubTokens = {
  "--hub-bg": "#F8FAFC",
  "--hub-bg-dark": "#09090B",
  "--hub-text": "#0F172A",
  "--hub-text-dark": "#F8FAFC",
  "--hub-muted": "#475569",
  "--hub-muted-dark": "#94A3B8",
  "--hub-lime": "#a6fd37",
  "--hub-lime-hover": "#94E42F",
  "--hub-red": "#E8372D",
  "--hub-border": "#E2E8F0",
  "--hub-border-dark": "#27272A",
  "--hub-card": "#FFFFFF",
  "--hub-card-dark": "#18181B",
  "--hub-radius": "12px",
};

// ─────────────────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// ─────────────────────────────────────────────────────────
// Trend icon helper
// ─────────────────────────────────────────────────────────
function TrendIcon({ trend }) {
  if (trend === "up")
    return <TrendingUp className="w-4 h-4" style={{ color: "#a6fd37" }} />;
  if (trend === "down")
    return (
      <TrendingDown className="w-4 h-4" style={{ color: "#ef4444" }} />
    );
  return <Minus className="w-4 h-4" style={{ color: "var(--hub-muted)" }} />;
}

// ─────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────
export default function GuidesIndex() {
  const verticals = getAllVerticals();

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("diy");
  const [showSticky, setShowSticky] = useState(false);

  // Sticky banner on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Categories
  const categories = [
    { id: "all", label: "All Industries" },
    { id: "barbershop", label: "Barbershops" },
    { id: "hvac", label: "HVAC & Field" },
    { id: "waste-management", label: "Waste Mgmt" },
    { id: "daycare", label: "Daycare" },
    { id: "salon", label: "Salons & Spas" },
    { id: "restaurant", label: "Restaurants" },
    { id: "auto-repair", label: "Auto Repair" },
  ];

  // Filtered Verticals
  const filteredVerticals = useMemo(() => {
    return verticals.filter((v) => {
      const matchesCategory =
        selectedCategory === "all" || v.slug === selectedCategory;
      const matchesQuery =
        searchQuery === "" ||
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.slug.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [verticals, selectedCategory, searchQuery]);

  // Filtered Articles
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesQuery =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesQuery;
    });
  }, [searchQuery]);

  // Active Tool Demand Meter per Business/Industry
  const activeToolDemand = useMemo(() => {
    return (
      toolDemandByVertical[selectedCategory] ||
      toolDemandByVertical.all ||
      toolDemandMeter
    );
  }, [selectedCategory]);

  // Lead story + sidebar stories
  const leadStory = briefingBand.find((b) => b.isLead) || briefingBand[0];
  const sideStories = briefingBand.filter((b) => b.id !== leadStory.id);

  return (
    <div
      className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white flex flex-col transition-colors duration-300"
      style={hubTokens}
    >
      {/* Inject scoped dark-mode & font styles */}
      <style jsx global>{`
        .dark .hub-wrap {
          --hub-bg: #09090B !important;
          --hub-text: #F8FAFC !important;
          --hub-muted: #94A3B8 !important;
          --hub-border: #27272A !important;
          --hub-card: #18181B !important;
          background-color: #09090B !important;
          color: #F8FAFC !important;
        }

        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .hub-wrap {
          --font-display: 'Fraunces', 'Georgia', serif;
          --font-body: 'Source Serif 4', 'Georgia', serif;
          --font-mono: 'JetBrains Mono', 'Courier New', monospace;
        }

        .hub-font-display { font-family: var(--font-display) !important; }
        .hub-font-body { font-family: var(--font-body) !important; }
        .hub-font-mono { font-family: var(--font-mono) !important; }

        .hub-lime { color: var(--hub-lime) !important; }
        .hub-red { color: var(--hub-red) !important; }
        .hub-muted { color: var(--hub-muted) !important; }

        .hub-card {
          background-color: var(--hub-card);
          border: 1px solid var(--hub-border);
          border-radius: var(--hub-radius);
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .hub-rule {
          border: none;
          border-top: 1px solid var(--hub-border);
        }

        .hub-rule-lime {
          border: none;
          border-top: 2px solid var(--hub-lime);
        }

        .hub-btn-lime {
          background-color: var(--hub-lime);
          color: #09090B;
          border: none;
          border-radius: 8px;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 12px 26px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 16px rgba(166, 253, 55, 0.2);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .hub-btn-lime:hover {
          background-color: var(--hub-lime-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(166, 253, 55, 0.35);
        }
        .hub-btn-lime:active {
          transform: translateY(0);
        }

        .hub-btn-outline {
          background: transparent;
          color: var(--hub-text);
          border: 1px solid var(--hub-border);
          border-radius: 8px;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 12px 26px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .hub-btn-outline:hover {
          border-color: var(--hub-lime);
          color: var(--hub-lime);
          transform: translateY(-1px);
        }

        .hub-font-display { font-family: var(--font-display), sans-serif; }
        .hub-font-body { font-family: var(--font-sans), sans-serif; }
        .hub-font-mono { font-family: var(--font-mono), monospace; }

        .hub-kicker {
          font-family: var(--font-mono), monospace;
          font-weight: 700;
          font-size: 0.725rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--hub-lime);
        }

        .hub-headline {
          font-family: var(--font-display), sans-serif;
          font-weight: 800;
          line-height: 1.22;
          color: var(--hub-text);
          letter-spacing: -0.015em;
        }

        .hub-byline {
          font-family: var(--font-mono), monospace;
          font-size: 0.75rem;
          letter-spacing: 0.03em;
          color: var(--hub-muted);
        }

        .hub-body {
          font-family: var(--font-sans), sans-serif;
          font-weight: 400;
          line-height: 1.7;
          color: var(--hub-muted);
        }

        .dark .hub-headline { color: #F8FAFC !important; }
        .dark .hub-card {
          background-color: #18181B !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.4);
        }
        .dark .hub-rule { border-color: #27272A !important; }
        .dark .hub-rule-lime { border-color: #a6fd37 !important; }
        .dark .hub-btn-outline {
          color: #F8FAFC !important;
          border-color: #27272A !important;
        }
        .dark .hub-btn-outline:hover { border-color: #a6fd37 !important; }
        .dark .hub-byline { color: #94A3B8 !important; }
        .dark .hub-body { color: #CBD5E1 !important; }
      `}</style>

      <Navbar />

      <div className="hub-wrap flex-grow">
        {/* ═══════════════════════════════════════════════════════
            1. MASTHEAD / EDITION BAR WITH AMBIENT GLOW
        ═══════════════════════════════════════════════════════ */}
        <header className="relative pt-36 pb-4 px-6 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-lime-500/10 dark:bg-lime-500/5 blur-3xl pointer-events-none rounded-full" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Top metadata bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between gap-4 mb-6"
            >
              <div className="hub-byline flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 font-mono text-xs font-semibold">
                  <BookOpen className="w-3.5 h-3.5" /> {editionMeta.date}
                </span>
                <span style={{ color: "var(--hub-border)" }}>|</span>
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">{editionMeta.edition}</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <div className="text-center py-6">
              <motion.h1
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="hub-font-display"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 4rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: "var(--hub-text)",
                  marginBottom: "0.75rem",
                }}
              >
                SPARKSPHEAR <span className="text-lime-600 dark:text-lime-400">Industry Guides</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hub-font-body"
                style={{
                  fontSize: "1.15rem",
                  color: "var(--hub-muted)",
                  maxWidth: "580px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                {editionMeta.tagline}
              </motion.p>
            </div>

            {/* Accent divider line */}
            <hr className="hub-rule-lime mt-4" />
          </div>
        </header>

        {/* ═══════════════════════════════════════════════════════
            SEARCH BAR (below masthead)
        ═══════════════════════════════════════════════════════ */}
        <section className="px-6 py-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="relative flex items-center max-w-xl mx-auto"
            >
              <Search
                className="absolute left-4 w-4 h-4"
                style={{ color: "var(--hub-muted)" }}
              />
              <input
                type="text"
                placeholder="Search tools, industries, articles (e.g. HVAC, ServiceTitan, AI Agents)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="hub-font-mono shadow-md transition-all duration-200"
                style={{
                  width: "100%",
                  paddingLeft: "2.75rem",
                  paddingRight: searchQuery ? "2.75rem" : "1.25rem",
                  paddingTop: "0.85rem",
                  paddingBottom: "0.85rem",
                  backgroundColor: "var(--hub-card)",
                  border: "1px solid var(--hub-border)",
                  borderRadius: "10px",
                  color: "var(--hub-text)",
                  fontSize: "0.875rem",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--hub-lime)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(166, 253, 55, 0.25)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--hub-border)";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--hub-muted)",
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-6 pb-20 w-full">
          {/* ═══════════════════════════════════════════════════════
              2. BRIEFING BAND (Hero) WITH ANIMATED STAGGER
          ═══════════════════════════════════════════════════════ */}
          {!searchQuery && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* LEAD STORY (3/5) */}
                <Link
                  href={leadStory.url}
                  className="lg:col-span-3 group block no-underline"
                  style={{ textDecoration: "none" }}
                >
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                      paddingRight: "2rem",
                      borderRight: "1px solid var(--hub-border)",
                    }}
                    className="hidden lg:block"
                  >
                    <span className="hub-kicker block mb-2.5">
                      {leadStory.kicker}
                    </span>
                    <h2
                      className="hub-headline mb-4 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors"
                      style={{
                        fontSize: "clamp(1.5rem, 2.7vw, 2.25rem)",
                      }}
                    >
                      {leadStory.headline}
                    </h2>
                    <p
                      className="hub-body mb-5"
                      style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
                    >
                      {leadStory.blurb}
                    </p>
                    <div className="hub-byline flex items-center gap-3">
                      <span>{leadStory.date}</span>
                      <span style={{ color: "var(--hub-border)" }}>-</span>
                      <span>{leadStory.readTime} read</span>
                      <span
                        className="hub-font-mono font-semibold"
                        style={{
                          fontSize: "0.65rem",
                          padding: "3px 10px",
                          border: "1px solid var(--hub-border)",
                          borderRadius: "6px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--hub-lime)",
                          backgroundColor: "rgba(166, 253, 55, 0.08)",
                        }}
                      >
                        {leadStory.tag}
                      </span>
                    </div>
                  </motion.div>

                  {/* Mobile lead */}
                  <div className="lg:hidden pb-6">
                    <span className="hub-kicker block mb-2">
                      {leadStory.kicker}
                    </span>
                    <h2
                      className="hub-headline mb-3"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {leadStory.headline}
                    </h2>
                    <p
                      className="hub-body mb-3"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {leadStory.blurb}
                    </p>
                    <div className="hub-byline flex items-center gap-2">
                      <span>{leadStory.date}</span>
                      <span>-</span>
                      <span>{leadStory.readTime} read</span>
                    </div>
                  </div>
                </Link>

                {/* SIDEBAR STORIES (2/5) */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  {sideStories.map((story, i) => (
                    <Link
                      key={story.id}
                      href={story.url}
                      className="group block no-underline"
                      style={{
                        textDecoration: "none",
                        padding: "1.25rem 0 1.25rem 2rem",
                        borderTop:
                          i > 0 ? "1px solid var(--hub-border)" : "none",
                      }}
                    >
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="hub-kicker block mb-1.5">
                          {story.kicker}
                        </span>
                        <h3
                          className="hub-headline mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors"
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            lineHeight: 1.35,
                          }}
                        >
                          {story.headline}
                        </h3>
                        <div className="hub-byline flex items-center gap-2">
                          <span>{story.date}</span>
                          <span>-</span>
                          <span>{story.readTime} read</span>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              <hr className="hub-rule mt-6" />
            </motion.section>
          )}

          {/* ═══════════════════════════════════════════════════════
              3. ONE METRIC THAT MATTERS WITH PULSING AMBIENT EFFECT
          ═══════════════════════════════════════════════════════ */}
          {!searchQuery && (
            <motion.section
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div
                className="hub-card p-8 sm:p-12 text-center border-lime-500/40 dark:border-lime-500/30 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(166,253,55,0.03) 0%, transparent 100%)",
                }}
              >
                {/* Background pulse blur */}
                <motion.div
                  animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"
                />

                <span
                  className="hub-font-mono inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-wider mb-4"
                >
                  <Award className="w-3.5 h-3.5" /> Benchmark Highlight
                </span>

                <div
                  className="hub-font-display text-lime-600 dark:text-lime-400 my-2"
                  style={{
                    fontSize: "clamp(3.5rem, 9vw, 6rem)",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {oneMetric.value}
                </div>

                <p
                  className="hub-font-body"
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--hub-text)",
                    maxWidth: "520px",
                    margin: "0.75rem auto 1.25rem",
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  {oneMetric.label}
                </p>

                <Link
                  href={oneMetric.sourceUrl}
                  className="hub-byline inline-flex items-center gap-1 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    color: "var(--hub-muted)",
                  }}
                >
                  {oneMetric.source} <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.section>
          )}

          {/* ═══════════════════════════════════════════════════════
              4. HYBRID PATH SWITCHER WITH SMOOTH GLIDE
          ═══════════════════════════════════════════════════════ */}
          <div className="flex justify-center mb-12">
            <div
              className="bg-white dark:bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm inline-flex relative"
            >
              <button
                onClick={() => setActiveTab("diy")}
                className="hub-font-mono relative z-10"
                style={{
                  padding: "12px 28px",
                  fontSize: "0.775rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: activeTab === "diy" ? "#09090B" : "var(--hub-muted)",
                  transition: "color 0.2s ease",
                }}
              >
                <BarChart3 className="w-4 h-4" />
                Software Guides (DIY)
                {activeTab === "diy" && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-lime-400 rounded-lg -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>

              <button
                onClick={() => setActiveTab("custom")}
                className="hub-font-mono relative z-10"
                style={{
                  padding: "12px 28px",
                  fontSize: "0.775rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: activeTab === "custom" ? "#09090B" : "var(--hub-muted)",
                  transition: "color 0.2s ease",
                }}
              >
                <Zap className="w-4 h-4" />
                Custom AI Builds
                {activeTab === "custom" && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-lime-400 rounded-lg -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════
              TAB CONTENT
          ═══════════════════════════════════════════════════════ */}
          {activeTab === "diy" ? (
            <>
              {/* ── TOOL DEMAND METER (per business/industry) ─────────── */}
              {!searchQuery && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="hub-kicker block mb-1">
                        Weekly Index by Industry
                      </span>
                      <h2
                        className="hub-headline"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Tool Demand Meter
                      </h2>
                    </div>

                    {/* Business / Industry Filter Chips */}
                    <div className="flex flex-wrap items-center gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className="hub-font-mono transition-all"
                          style={{
                            padding: "6px 14px",
                            fontSize: "0.725rem",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            border: "1px solid var(--hub-border)",
                            borderRadius: "6px",
                            cursor: "pointer",
                            backgroundColor:
                              selectedCategory === cat.id
                                ? "#a6fd37"
                                : "var(--hub-card)",
                            color:
                              selectedCategory === cat.id
                                ? "#09090B"
                                : "var(--hub-muted)",
                            borderColor:
                              selectedCategory === cat.id
                                ? "#a6fd37"
                                : "var(--hub-border)",
                          }}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="hub-card p-6 sm:p-8">
                    <div className="flex flex-col gap-5">
                      {activeToolDemand.map((tool, i) => (
                        <Link
                          key={`${selectedCategory}-${tool.name}`}
                          href={`/guides/${tool.slug}`}
                          style={{ textDecoration: "none" }}
                          className="group"
                        >
                          <div className="flex items-center gap-4">
                            {/* Rank */}
                            <span
                              className="hub-font-mono text-lime-600 dark:text-lime-400"
                              style={{
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                width: "1.75rem",
                                textAlign: "right",
                                flexShrink: 0,
                              }}
                            >
                              0{i + 1}
                            </span>

                            {/* Name */}
                            <span
                              className="hub-font-mono group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors"
                              style={{
                                fontSize: "0.875rem",
                                fontWeight: 700,
                                width: "140px",
                                flexShrink: 0,
                                color: "var(--hub-text)",
                              }}
                            >
                              {tool.name}
                            </span>

                            {/* Bar with Framer Motion Fill */}
                            <div
                              className="flex-grow"
                              style={{
                                height: "22px",
                                backgroundColor: "rgba(0,0,0,0.06)",
                                borderRadius: "6px",
                                overflow: "hidden",
                                position: "relative",
                              }}
                            >
                              <motion.div
                                key={`${selectedCategory}-${tool.name}-${tool.pctMentions}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${tool.pctMentions}%` }}
                                transition={{
                                  duration: 0.8,
                                  ease: [0.16, 1, 0.3, 1],
                                  delay: i * 0.08,
                                }}
                                style={{
                                  height: "100%",
                                  backgroundColor: "#a6fd37",
                                  borderRadius: "6px",
                                }}
                              />
                            </div>

                            {/* Pct */}
                            <span
                              className="hub-font-mono"
                              style={{
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                width: "3rem",
                                textAlign: "right",
                                flexShrink: 0,
                                color: "var(--hub-text)",
                              }}
                            >
                              {tool.pctMentions}%
                            </span>

                            {/* Trend */}
                            <div style={{ width: "1.25rem", flexShrink: 0 }}>
                              <TrendIcon trend={tool.trend} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.section>
              )}

              {/* ── CURATED BRIEFINGS GRID ────────────────────── */}
              {!searchQuery && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="hub-kicker block mb-1">
                        Editor Picks
                      </span>
                      <h2
                        className="hub-headline"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Curated Briefings
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {curatedBriefings.map((brief, i) => (
                      <motion.div
                        key={brief.id}
                        whileHover={{ y: -6, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Link
                          href={brief.slug}
                          className="hub-card group block hover:border-lime-500/60 transition-all shadow-md hover:shadow-xl hover:shadow-lime-500/10 h-full flex flex-col justify-between"
                          style={{
                            textDecoration: "none",
                            overflow: "hidden",
                          }}
                        >
                          <div>
                            {/* Image */}
                            <div
                              style={{
                                height: "180px",
                                overflow: "hidden",
                                position: "relative",
                              }}
                            >
                              <img
                                src={brief.image}
                                alt={brief.headline}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  transition: "transform 0.5s",
                                }}
                                className="group-hover:scale-105"
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  left: "10px",
                                  padding: "3px 10px",
                                  fontSize: "0.65rem",
                                  letterSpacing: "0.1em",
                                  textTransform: "uppercase",
                                  fontWeight: 700,
                                  backgroundColor: "#a6fd37",
                                  color: "#09090B",
                                  borderRadius: "6px",
                                }}
                                className="hub-font-mono shadow-md"
                              >
                                {brief.kicker}
                              </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: "1.25rem" }}>
                              <h3
                                className="hub-headline mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors"
                                style={{
                                  fontSize: "1.05rem",
                                  fontWeight: 700,
                                  lineHeight: 1.35,
                                }}
                              >
                                {brief.headline}
                              </h3>
                              <p
                                className="hub-body mb-4"
                                style={{
                                  fontSize: "0.9rem",
                                  lineHeight: 1.65,
                                  display: "-webkit-box",
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {brief.blurb}
                              </p>
                            </div>
                          </div>

                          <div
                            style={{
                              padding: "0 1.25rem 1.25rem 1.25rem",
                              borderTop: "1px solid var(--hub-border)",
                              paddingTop: "0.85rem",
                              marginTop: "auto",
                            }}
                            className="hub-byline flex items-center justify-between"
                          >
                            <span>{brief.date}</span>
                            <span className="font-semibold text-lime-600 dark:text-lime-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              Read Briefing <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* ── ARTICLES & BLOG ──────────────────────────── */}
              {filteredPosts.length > 0 && (
                <section className="mb-16">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="hub-kicker block mb-1">
                        Fresh Insights
                      </span>
                      <h2
                        className="hub-headline"
                        style={{ fontSize: "1.5rem" }}
                      >
                        Latest Operations & Strategy Articles
                      </h2>
                    </div>
                    <Link
                      href="/blog"
                      className="hub-byline hidden sm:inline-flex items-center gap-1 hover:underline font-bold text-lime-600 dark:text-lime-400"
                      style={{ textDecoration: "none" }}
                    >
                      View All Articles <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post, i) => {
                      const isNew = post.isNew || i === 0;

                      return (
                        <motion.div
                          key={post.id}
                          whileHover={{ y: -4 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hub-card group block hover:border-lime-500/60 transition-all p-6 sm:p-7 flex flex-col justify-between h-full"
                            style={{
                              textDecoration: "none",
                              position: "relative",
                              borderColor: isNew ? "var(--hub-lime)" : undefined,
                            }}
                          >
                            {/* New badge */}
                            {isNew && (
                              <span
                                className="hub-font-mono shadow-md"
                                style={{
                                  position: "absolute",
                                  top: "-10px",
                                  right: "16px",
                                  padding: "3px 12px",
                                  fontSize: "0.65rem",
                                  letterSpacing: "0.1em",
                                  textTransform: "uppercase",
                                  fontWeight: 700,
                                  backgroundColor: "#a6fd37",
                                  color: "#09090B",
                                  borderRadius: "20px",
                                }}
                              >
                                New Article
                              </span>
                            )}

                            <div>
                              {/* Meta line */}
                              <div className="flex items-center gap-3 mb-3">
                                <span
                                  className="hub-font-mono font-bold"
                                  style={{
                                    fontSize: "0.675rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    padding: "3px 10px",
                                    border: "1px solid var(--hub-border)",
                                    borderRadius: "6px",
                                    color: "var(--hub-lime)",
                                    backgroundColor: "rgba(166, 253, 55, 0.08)",
                                  }}
                                >
                                  {post.category}
                                </span>
                                <span className="hub-byline">
                                  {post.date}
                                </span>
                              </div>

                              {/* Headline */}
                              <h3
                                className="hub-headline mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors"
                                style={{
                                  fontSize: "1.15rem",
                                  fontWeight: 800,
                                  lineHeight: 1.35,
                                }}
                              >
                                {post.title}
                              </h3>

                              {/* Excerpt */}
                              <p
                                className="hub-body mb-5"
                                style={{
                                  fontSize: "0.925rem",
                                  lineHeight: 1.7,
                                  display: "-webkit-box",
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {post.excerpt}
                              </p>
                            </div>

                            {/* Footer */}
                            <div
                              style={{
                                borderTop: "1px solid var(--hub-border)",
                                paddingTop: "0.85rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <span className="hub-byline flex items-center gap-1.5 font-medium">
                                <User
                                  className="w-3.5 h-3.5"
                                  style={{ color: "var(--hub-muted)" }}
                                />
                                {post.author}
                              </span>
                              <span
                                className="hub-font-mono flex items-center gap-1 text-lime-600 dark:text-lime-400 font-bold group-hover:translate-x-1 transition-transform"
                                style={{ fontSize: "0.75rem" }}
                              >
                                Read Article <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* ── STACK QUIZ (preserved) ────────────────────── */}
              <div className="my-14">
                <StackQuiz />
              </div>

              {/* ── CATEGORY FILTER CHIPS ─────────────────────── */}
              <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
                <h2
                  className="hub-headline"
                  style={{ fontSize: "1.5rem" }}
                >
                  Industry Software Stacks
                </h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="hub-font-mono transition-all"
                      style={{
                        padding: "8px 18px",
                        fontSize: "0.75rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        border: "1px solid var(--hub-border)",
                        borderRadius: "8px",
                        cursor: "pointer",
                        backgroundColor:
                          selectedCategory === cat.id
                            ? "#a6fd37"
                            : "var(--hub-card)",
                        color:
                          selectedCategory === cat.id
                            ? "#09090B"
                            : "var(--hub-muted)",
                        borderColor:
                          selectedCategory === cat.id
                            ? "#a6fd37"
                            : "var(--hub-border)",
                        boxShadow:
                          selectedCategory === cat.id
                            ? "0 4px 12px rgba(166, 253, 55, 0.25)"
                            : "none",
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── INDUSTRY CARDS GRID ───────────────────────── */}
              {filteredVerticals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {filteredVerticals.map((vertical, i) => (
                    <motion.div
                      key={vertical.slug}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Link
                        href={`/guides/${vertical.slug}`}
                        className="hub-card group block hover:border-lime-500/60 transition-all shadow-md hover:shadow-xl hover:shadow-lime-500/10 flex flex-col h-full"
                        style={{
                          textDecoration: "none",
                          overflow: "hidden",
                        }}
                      >
                        {/* Image */}
                        <div
                          style={{
                            height: "200px",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <img
                            src={vertical.heroImage}
                            alt={vertical.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.5s",
                              opacity: 0.9,
                            }}
                            className="group-hover:scale-105"
                          />
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.1))",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: "16px",
                              left: "20px",
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "8px",
                                backgroundColor: "rgba(166, 253, 55, 0.25)",
                                border: "1px solid rgba(166, 253, 55, 0.5)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#a6fd37",
                              }}
                            >
                              {vertical.slug === "hvac" ? (
                                <Cpu className="w-5 h-5" />
                              ) : (
                                <Layers className="w-5 h-5" />
                              )}
                            </div>
                            <span
                              className="hub-font-display"
                              style={{
                                fontSize: "1.25rem",
                                fontWeight: 800,
                                color: "#fff",
                              }}
                            >
                              {vertical.name}
                            </span>
                          </div>
                        </div>

                        {/* Body */}
                        <div
                          style={{
                            padding: "1.5rem",
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <p
                            className="hub-body mb-5"
                            style={{
                              fontSize: "0.95rem",
                              lineHeight: 1.7,
                              flex: 1,
                            }}
                          >
                            {vertical.tagline}
                          </p>
                          <div
                            style={{
                              borderTop: "1px solid var(--hub-border)",
                              paddingTop: "0.95rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <span
                              className="hub-font-mono text-lime-600 dark:text-lime-400 font-bold"
                              style={{
                                fontSize: "0.7rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                              }}
                            >
                              Saves 10-15 hrs/wk
                            </span>
                            <span
                              className="hub-font-mono flex items-center gap-1.5 text-lime-600 dark:text-lime-400 font-bold group-hover:translate-x-1 transition-transform"
                              style={{ fontSize: "0.75rem" }}
                            >
                              View Stack Guide <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div
                  className="hub-card text-center mb-16"
                  style={{ padding: "3.5rem 1.5rem" }}
                >
                  <p
                    className="hub-body mb-4"
                    style={{ fontSize: "1.1rem" }}
                  >
                    No guides match &quot;{searchQuery}&quot;.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="hub-btn-lime"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* ── OPS QUIZ (preserved) ──────────────────────── */}
              <div className="my-14">
                <OpsQuizSurvey />
              </div>
            </>
          ) : (
            /* ═══════════════════════════════════════════════════
               CUSTOM AI BUILDS TAB
            ═══════════════════════════════════════════════════ */
            <section className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="hub-card p-8 sm:p-12"
              >
                <div
                  className="text-center mb-12"
                  style={{ maxWidth: "680px", margin: "0 auto" }}
                >
                  <span className="hub-kicker inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 mb-3">
                    <Zap className="w-3.5 h-3.5" /> Done-For-You Custom Engineering
                  </span>
                  <h2
                    className="hub-headline mb-4"
                    style={{
                      fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    }}
                  >
                    Let Our Engineers Build Your AI System
                  </h2>
                  <p
                    className="hub-body"
                    style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
                  >
                    Don't have time to configure off-the-shelf software? We architect, build, and deploy custom AI agents and enterprise workflows that run your operations on autopilot.
                  </p>
                </div>

                {/* Pricing grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      name: "Essentials",
                      setup: "$997",
                      monthly: "$197/mo",
                      time: "10-15 hrs/wk",
                      desc: "5 Core Workflows + 2 AI Chatbots + Zapier Integration",
                      highlight: false,
                    },
                    {
                      name: "Growth",
                      setup: "$2,997",
                      monthly: "$497/mo",
                      time: "20-30 hrs/wk",
                      desc: "15 Workflows + 5 Custom AI Bots + Full CRM Integration",
                      highlight: true,
                    },
                    {
                      name: "Enterprise",
                      setup: "$7,997",
                      monthly: "$997/mo",
                      time: "40+ hrs/wk",
                      desc: "Unlimited Autonomous Agents + Custom Fine-Tuned Models",
                      highlight: false,
                    },
                  ].map((pkg, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="hub-card flex flex-col justify-between p-6 sm:p-7"
                      style={{
                        borderColor: pkg.highlight ? "#a6fd37" : undefined,
                        boxShadow: pkg.highlight
                          ? "0 8px 30px rgba(166, 253, 55, 0.15)"
                          : undefined,
                      }}
                    >
                      <div>
                        <div
                          className="flex justify-between items-center mb-3"
                          style={{ gap: "8px" }}
                        >
                          <h3
                            className="hub-headline"
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: 800,
                            }}
                          >
                            {pkg.name}
                          </h3>
                          {pkg.highlight && (
                            <span
                              className="hub-font-mono shadow-sm"
                              style={{
                                fontSize: "0.6rem",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                padding: "3px 10px",
                                backgroundColor: "#a6fd37",
                                color: "#09090B",
                                borderRadius: "20px",
                                fontWeight: 700,
                              }}
                            >
                              Most Popular
                            </span>
                          )}
                        </div>
                        <div
                          className="hub-font-display text-lime-600 dark:text-lime-400"
                          style={{
                            fontSize: "1.75rem",
                            fontWeight: 900,
                            marginBottom: "4px",
                          }}
                        >
                          {pkg.setup}{" "}
                          <span
                            className="hub-byline"
                            style={{ fontSize: "0.75rem" }}
                          >
                            one-time setup
                          </span>
                        </div>
                        <div
                          className="hub-byline mb-4 font-semibold"
                          style={{ fontSize: "0.75rem" }}
                        >
                          + {pkg.monthly} ongoing management
                        </div>
                        <p
                          className="hub-body"
                          style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
                        >
                          {pkg.desc}
                        </p>
                      </div>
                      <div
                        style={{
                          borderTop: "1px solid var(--hub-border)",
                          paddingTop: "1rem",
                          marginTop: "1.25rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          className="hub-font-mono text-lime-600 dark:text-lime-400 font-bold"
                          style={{ fontSize: "0.725rem" }}
                        >
                          Time saved: {pkg.time}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-lime-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/services/it-audits"
                      className="hub-btn-lime no-underline inline-flex items-center gap-2"
                      style={{
                        textDecoration: "none",
                        padding: "14px 36px",
                        fontSize: "0.85rem",
                      }}
                    >
                      Start Your Master Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════
              BOTTOM CTA WITH AMBIENT GLOW
          ═══════════════════════════════════════════════════════ */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mt-16 mb-6"
          >
            <div
              className="hub-card text-center p-8 sm:p-12 border-lime-500/40 dark:border-lime-500/30 relative overflow-hidden shadow-xl"
            >
              {/* Subtle ambient lime glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "350px",
                  height: "350px",
                  background:
                    "radial-gradient(circle, rgba(166,253,55,0.12) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                  pointerEvents: "none",
                }}
              />

              <BookOpen
                className="w-12 h-12 mx-auto mb-4 text-lime-500"
              />
              <h2
                className="hub-headline mb-4"
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                }}
              >
                Don't See Your Industry Listed?
              </h2>
              <p
                className="hub-body mb-8"
                style={{
                  fontSize: "1.05rem",
                  maxWidth: "540px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.7,
                }}
              >
                We research, test, and curate custom AI and automation toolkits for any trade or commercial enterprise. Request a custom stack evaluation today.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/services/it-audits"
                  className="hub-btn-lime no-underline inline-flex items-center gap-2"
                  style={{
                    textDecoration: "none",
                    padding: "14px 36px",
                    fontSize: "0.85rem",
                  }}
                >
                  Start Your Master Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.section>
        </main>

        {/* ═══════════════════════════════════════════════════════
            STICKY BOTTOM BANNER WITH SMOOTH ENTRANCE
        ═══════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {showSticky && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: "var(--hub-card)",
                borderTop: "2px solid #a6fd37",
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                backdropFilter: "blur(16px)",
                boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <span
                className="hub-font-body hidden sm:inline font-semibold"
                style={{
                  fontSize: "0.9rem",
                  color: "var(--hub-text)",
                }}
              >
                {stickyBanner.text}
              </span>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href={stickyBanner.ctaUrl}
                  className="hub-btn-lime no-underline"
                  style={{
                    textDecoration: "none",
                    padding: "9px 22px",
                    fontSize: "0.75rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {stickyBanner.ctaLabel}{" "}
                  <ArrowUpRight
                    className="w-3.5 h-3.5 inline-block"
                    style={{ marginLeft: "4px" }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
