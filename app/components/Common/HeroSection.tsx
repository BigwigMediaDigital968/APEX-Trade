"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  tag?: string;
  description?: string;
  backgroundImage?: string;
  subDescription?: string;
}

export default function HeroSection({
  title = "Institutional Grade Trading",
  tag = "Welcome to ApexTrade",
  description,
  backgroundImage = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
  subDescription,
}: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0E14] flex items-center justify-center min-h-[450px]">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Multilayered Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/95 via-[#0B0E14]/70 to-[#0B0E14]" />

        {/* Dynamic Glow Elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3D6BFF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00FFA3]/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Content Container - Centered Alignment */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center py-36">
        <div className="max-w-[950px] mx-auto">
          {/* Subtitle / Badge */}
          {tag && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#5E84FF] text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4 md:mb-8 backdrop-blur-xl"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#3D6BFF] shadow-[0_0_10px_#3D6BFF]" />
              <span>{tag}</span>
            </motion.div>
          )}

          {/* Title - Centered and Clamp-Sized */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-[clamp(2.8rem,8vw,4rem)] font-extrabold text-white leading-[1.02] tracking-tight mb-4 md:mb-8"
          >
            {title}
          </motion.h1>

          {/* Description - Centered Max Width */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-[#8E96A5] text-lg md:text-xl leading-relaxed  mx-auto"
            >
              {description}
            </motion.p>
          )}
          {subDescription && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-[#8E96A5] text-base md:text-lg leading-relaxed mx-auto"
            >
              {subDescription}
            </motion.p>
          )}
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-2 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
          Scroll
        </span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-[#3D6BFF] to-transparent rounded-full shadow-[0_0_10px_#3D6BFF]" />
      </motion.div>
    </section>
  );
}
