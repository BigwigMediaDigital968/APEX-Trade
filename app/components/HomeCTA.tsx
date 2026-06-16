'use client';
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles, Globe } from "lucide-react";
import { useAuthModal } from "../context/AuthModalContext";
import Link from "next/link";

export default function HomeCTA() {
    const { toggle: authToggle } = useAuthModal();
    
      const handlClick = () => {
        authToggle();
      }
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-24 px-6 overflow-hidden text-slate-100 font-sans">
      
      {/* Background Grid & Ambient Neon Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle high-tech grid overlay */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" /> */}
        
        {/* Midnight Neon Radial Blurs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Tag / Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          <Sparkles size={14} className="animate-pulse" />
          <span>Institutional Grade Access</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400"
        >
          Ready to Trade at{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-green-400">
            Institutional Grade?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mb-12"
        >
          Join <span className="text-cyan-400 font-medium">10,000+ traders</span> already operating with the leverage, speed, and support that most platforms reserve for their largest clients.
        </motion.p>

        {/* Clean CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button onClick={handlClick} className="btn-primary">
            <span>Open Your Free Account</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <Link href={"/contact-us"} className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 font-semibold rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer">
            <MessageSquare size={18} className="text-cyan-400" />
            <span>Speak to Our Team</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}