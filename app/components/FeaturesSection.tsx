"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L15.5 10H23L17 14.5L19.5 21.5L13 17.5L6.5 21.5L9 14.5L3 10H10.5L13 3Z"
          stroke="var(--color-accent-blue)" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(61,107,255,0.1)" />
      </svg>
    ),
    color: "var(--color-accent-blue)",
    borderColor: "var(--color-border-blue)",
    title: "AI Signal Engine",
    desc: "Our proprietary ML models scan 200+ indicators across global markets to surface high-probability trade setups before they move.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="14" width="4" height="9" rx="1" fill="rgba(0,255,163,0.15)" stroke="var(--color-accent-green)" strokeWidth="1.5" />
        <rect x="11" y="9" width="4" height="14" rx="1" fill="rgba(0,255,163,0.15)" stroke="var(--color-accent-green)" strokeWidth="1.5" />
        <rect x="19" y="4" width="4" height="19" rx="1" fill="rgba(0,255,163,0.15)" stroke="var(--color-accent-green)" strokeWidth="1.5" />
      </svg>
    ),
    color: "var(--color-accent-green)",
    borderColor: "var(--color-border-green)",
    title: "Automated Execution",
    desc: "Set your strategy, define your risk, and let ApexTrade execute trades at millisecond speed — even while you sleep.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="var(--color-accent-blue-light)" strokeWidth="1.8" fill="rgba(61,107,255,0.08)" />
        <path d="M9 13L11.5 15.5L17 10" stroke="var(--color-accent-blue-light)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "var(--color-accent-blue-light)",
    borderColor: "var(--color-border-blue)",
    title: "Risk Management",
    desc: "Intelligent stop-loss, position sizing, and drawdown controls automatically protect your capital on every single trade.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 18L9 12L14 15L20 7" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="7" r="3" fill="rgba(0,255,163,0.2)" stroke="var(--color-accent-green)" strokeWidth="1.5" />
      </svg>
    ),
    color: "var(--color-accent-green)",
    borderColor: "var(--color-border-green)",
    title: "Real-Time Analytics",
    desc: "Live P&L dashboards, win-rate tracking, and strategy performance metrics updated in real time across all your positions.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="2" stroke="var(--color-accent-blue)" strokeWidth="1.8" fill="rgba(61,107,255,0.1)" />
        <rect x="14" y="3" width="9" height="9" rx="2" stroke="var(--color-accent-blue)" strokeWidth="1.8" fill="rgba(61,107,255,0.1)" />
        <rect x="3" y="14" width="9" height="9" rx="2" stroke="var(--color-accent-blue)" strokeWidth="1.8" fill="rgba(61,107,255,0.1)" />
        <rect x="14" y="14" width="9" height="9" rx="2" stroke="var(--color-accent-blue)" strokeWidth="1.8" fill="rgba(61,107,255,0.1)" />
      </svg>
    ),
    color: "var(--color-accent-blue)",
    borderColor: "var(--color-border-blue)",
    title: "Multi-Asset Coverage",
    desc: "Trade Forex, Crypto, Stocks, Commodities, and Indices from a single unified platform with one account.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L23 8V18L13 23L3 18V8L13 3Z" stroke="var(--color-accent-green)" strokeWidth="1.8" fill="rgba(0,255,163,0.08)" />
        <path d="M13 10V16M10 13H16" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "var(--color-accent-green)",
    borderColor: "var(--color-border-green)",
    title: "Strategy Marketplace",
    desc: "Browse, subscribe to, and copy proven strategies from top-performing traders with verified track records.",
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden bg-[var(--color-bg-main)]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[var(--color-accent-blue)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-accent-green)]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[72px]"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-accent-blue)]/10 border border-[var(--color-border-blue)] text-[var(--color-accent-blue)] text-xs font-bold uppercase tracking-widest mb-4">
            <span>Market Edge</span>
          </div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-[var(--color-text-primary)] tracking-tight leading-[1.1] mb-5">
            Cutting-Edge Tools for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-green)]">Your Success</span>
          </h2>
          <p className="font-sans text-[var(--color-text-secondary)] text-lg max-w-[560px] mx-auto leading-relaxed">
            Institutional-grade infrastructure engineered for speed, precision, and absolute market dominance.
          </p>
        </motion.div>

        {/* Feature grid with staggered entry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative h-full"
            >
              {/* Premium Card Glow Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[var(--color-border-main)] to-transparent rounded-[24px] transition-all duration-500 group-hover:from-[var(--color-accent-blue)]/40 group-hover:to-[var(--color-accent-green)]/10 group-hover:opacity-100" />

              <div className="relative h-full bg-[var(--color-bg-card)]/80 backdrop-blur-md border border-[var(--color-border-main)] rounded-[24px] p-8 overflow-hidden transition-all duration-500 group-hover:bg-[var(--color-bg-card-hover)] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">

                {/* Animated Background Pulse on Hover */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[var(--color-accent-blue)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Icon Container */}
                <div
                  className="w-[58px] h-[58px] rounded-[16px] flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[5deg]"
                  style={{
                    background: `${feature.color}15`, // Adding hex opacity
                    border: `1px solid ${feature.color}30`,
                    boxShadow: `0 8px 20px -10px ${feature.color}40`
                  }}
                >
                  {feature.icon}
                </div>

                <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)] mb-3 tracking-tight group-hover:text-[var(--color-accent-blue-light)] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="font-sans text-[var(--color-text-secondary)] text-[0.95rem] leading-relaxed group-hover:text-[var(--color-text-primary)]/80 transition-colors duration-300">
                  {feature.desc}
                </p>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-green)] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}