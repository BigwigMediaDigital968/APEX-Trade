"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Users,
    Globe,
} from "lucide-react";


export default function CommunityCTA() {

    return (
        <section className="relative py-24 px-6 bg-[#0B0E14] overflow-hidden min-h-[600px]">

            <div className="max-w-[1100px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group"
                >
                    {/* Main Card Container */}
                    <div className="relative bg-[#16191E]/40 border border-white/10 rounded-[40px] p-12 md:p-20 backdrop-blur-3xl text-center">
                        <div className="absolute inset-0 border border-white/5 rounded-[40px] pointer-events-none" />

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#3D6BFF] to-[#5E84FF] text-white text-xs font-bold uppercase tracking-widest shadow-[0_10px_20px_rgba(61,107,255,0.4)]">
                                <Users size={14} />
                                <span>Community</span>
                            </div>
                        </div>

                        <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-extrabold text-white leading-tight mb-6 tracking-tight">
                            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">ApexTrade</span> community <br className="hidden md:block" /> to avail the benefits!
                        </h2>

                        <p className="font-sans text-[#8E96A5] text-lg md:text-xl max-w-[700px] mx-auto mb-12 leading-relaxed">
                            Improving people's financial lives through strategic planning, <br className="hidden md:block" /> high-frequency trading, and automated earning systems.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(61, 107, 255, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0B0E14] rounded-2xl font-black text-sm uppercase tracking-widest transition-all overflow-hidden"
                        >
                            <span className="relative z-10">Trade Now</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-liner-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.button>

                        <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-2">
                                <Globe size={16} className="text-[#3D6BFF]" />
                                <span className="text-white text-xs font-bold uppercase tracking-widest">Global Access</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#00FFA3]" />
                                <span className="text-white text-xs font-bold uppercase tracking-widest">24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-[#3D6BFF]" />
                                <span className="text-white text-xs font-bold uppercase tracking-widest">150K+ Members</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}