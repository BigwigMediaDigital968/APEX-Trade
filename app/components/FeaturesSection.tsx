"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { IoRocket, IoRocketOutline } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

const features = [
  {
    icon: (
      <HiOutlineLightningBolt className="w-full h-full"/>

    ),
    color: "var(--color-accent-blue)",
    title: "High Leverage Intraday",
    valueProp: "500X Margin in Intraday (MCX & NSE Futures)",
    desc: "Maximize your trading power with ultra-high leverage for intraday positions in MCX and NSE Futures.",
  },
  {
    icon: (
      <IoRocketOutline className="w-full h-full" />
    ),
    color: "var(--color-accent-green)",
    title: "Smart Holding Leverage",
    valueProp: "60X Margin for Holding (MCX & NSE Futures)",
    desc: "Carry your positions with optimized leverage designed for better control and flexibility.",
  },
  {
    icon: (
      <BsGraphUpArrow className="w-full h-full" />
    ),
    color: "var(--color-accent-blue-light)",
    title: "Options Trading Power",
    valueProp: "Up to 10X Intraday & 4X Holding",
    desc: "Trade options with enhanced leverage for both intraday and positional strategies.",
  },
  {
    icon: (
      <LiaMoneyBillWaveAltSolid className="w-full h-full" />


    ),
    color: "var(--color-accent-green)",
    title: "Low Brokerage",
    valueProp: "Cost-Efficient Trading",
    desc: "Benefit from minimal brokerage charges to maximize your net profits on every trade.",
  },
  {
    icon: (
            <HiOutlineLightningBolt className="w-full h-full"/>

    ),
    color: "var(--color-accent-blue)",
    title: "Fastest Payout",
    valueProp: "Quick & Secure Withdrawals",
    desc: "Experience lightning-fast payout processing with complete reliability and transparency.",
  },
  {
    icon: (
      <FaRegClock className="w-full h-full" />

    ),
    color: "var(--color-accent-green)",
    title: "24/7 Support",
    valueProp: "Always Here for You",
    desc: "Get round-the-clock assistance from our dedicated support team whenever you need help.",
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
          className="w-8 h-8 rounded-[16px] flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[5deg]"
          style={{
            background: `${feature.color}15`,
            border: `1px solid ${feature.color}30`,
            boxShadow: `0 8px 20px -10px ${feature.color}40`,
            color: feature.color,
          }}
        >
          {feature.icon}
        </div>

        {/* Main Title */}
        <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight group-hover:text-[var(--color-accent-blue-light)] transition-colors duration-300">
          {feature.title}
        </h3>

        {/* NEW: Specific Value Proposition Line (Extra Line) */}
        <div className="mb-2">
          <p className="text-[var(--color-accent-blue)] font-black text-base capitalize tracking-wider leading-tight">
            {feature.valueProp}
          </p>
          {/* Subtle separator line that grows on hover */}
          <div className="h-[1px] w-8 bg-white/10 mt-2 transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--color-accent-blue)]/30" />
        </div>

        {/* Detailed Description */}
        <p className="font-sans text-[var(--color-text-secondary)] text-[0.9rem] leading-relaxed group-hover:text-[var(--color-text-primary)]/80 transition-colors duration-300">
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