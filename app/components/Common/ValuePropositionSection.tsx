"use client";

import React from "react";
import { motion } from "framer-motion";
import CommunityCTA from "./CommunityCTA";
import { BarChart3, Headphones, Users, Zap } from "lucide-react";
import TradingCTAButton from "../UI/TradingCTAButton";

// ── Types ─────────────────────────────────────────────────────────────────────
export interface ValueItem {
  id?: string;
  title?: string;
  icon?: React.ReactNode;
  color?: string;
}

export interface ValuePropositionSectionProps {
  heading?: React.ReactNode; // accepts JSX so callers can colour spans
  description?: string;
  image?: string; // src path e.g. "/images/side-image.png"
  imageAlt?: string;
  items?: ValueItem[];
  showStats?: boolean; // whether to show the "Active Traders", "Monthly Volume" etc stats below the description
  StatItems?: StatItem[];
  buttonText?: string;
}

export interface StatItem {
  label: string;
  icon?: React.ReactNode;
}

const stats = [
  { label: "Low Brokerage" },
  { label: "Fastest Payout" },
  { label: "24/7 Support" },
  { label: "60X Holding" },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function ValuePropositionSection({
  heading,
  description,
  image,
  imageAlt = "Value Proposition",
  items,
  StatItems = stats,
  buttonText = "Start Trading Now",
}: ValuePropositionSectionProps) {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#3D6BFF]/10 rounded-full blur-[120px] pointer-events-none opacity-40" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Side: Image */}
            <div className="relative order-2 lg:order-1">
              <img src={image} alt={imageAlt} />
            </div>

            {/* Right Side: Content & Items */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <h2 className="font-display text-2xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
                  {heading}
                </h2>
                <p className="text-[#8E96A5] text-lg leading-relaxed max-w-[600px]">
                  {description}
                </p>
              </motion.div>
              {StatItems && (
                <>
                  <div className="max-w-4xl mx-auto mb-4">
                    {/* Compact Bar Container */}
                    <div className="grid grid-col-1 sm:grid-cols-2 py-2 border-y border-white/10 relative">
                      {/* Subtle Vertical Center Divider (Grid Spine) */}
                      <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-white/5 -translate-x-1/2 hidden sm:block" />

                      {StatItems?.map((stat, index) => (
                        <div
                          key={index}
                          className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 px-2 py-1 
                ${index % 2 === 0 ? "border-r border-white/5 sm:border-none" : ""}`}
                        >
                          {/* Metric Label */}
                          <span className="text-blue-500 text-xs uppercase font-bold tracking-[0.15em] whitespace-nowrap leading-none">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-1">
                {items?.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-6 p-3 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all cursor-default"
                  >
                    <div
                      className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                      style={{
                        backgroundColor: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        color: item.color,
                        boxShadow: `0 0 20px ${item.color}10`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-grow flex items-center justify-between">
                      <span className="text-white font-semibold text-lg tracking-tight group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                ))}

                <div className="pl-4">
                  <TradingCTAButton buttonText={buttonText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommunityCTA />
    </>
  );
}
