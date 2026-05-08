"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Layers,
    ShieldCheck,
    LineChart,
    Headphones,
    Zap,
    Lock,
    TrendingUp,
    ChevronRight
} from "lucide-react";
import CommunityCTA from "./CommunityCTA";

/**
 * Array-driven data for the right-side value items
 */
const valueItems = [
    {
        id: "derivatives",
        title: "Extensive Derivatives Selection",
        icon: <Layers className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "risk",
        title: "Risk Mitigation Strategies",
        icon: <ShieldCheck className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "analytics",
        title: "Real-time Options Analytics",
        icon: <LineChart className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "support",
        title: "Expert Derivatives Support",
        icon: <Headphones className="w-5 h-5" />,
        color: "#00FFA3"
    },
    {
        id: "leverage",
        title: "500x Leverage Opportunities",
        icon: <Zap className="w-5 h-5" />,
        color: "#3D6BFF"
    },
    {
        id: "protection",
        title: "Negative Balance Protection",
        icon: <Lock className="w-5 h-5" />,
        color: "#00FFA3"
    }
];

export default function ValuePropositionSection() {
    return (
        <>
            <section className="relative py-24 md:py-32 bg-[#0B0E14] overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#3D6BFF]/10 rounded-full blur-[120px] pointer-events-none opacity-40" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

                        {/* Left Side: Dynamic App & Card Visuals */}
                        <div className="relative order-2 lg:order-1">
                            <div className="hidden flex-col items-center justify-center gap-6">

                                {/* Main Phone/Chart UI */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="w-[280px] h-[580px] bg-[#16191E] border-[8px] border-[#22262D] rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col"
                                >
                                    <div className="p-6 border-b border-white/5">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Trading Terminal</span>
                                            <div className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
                                        </div>
                                        <h4 className="text-white font-bold text-lg">EUR/USD</h4>
                                    </div>

                                    {/* Mock Chart Area */}
                                    <div className="flex-grow p-4 space-y-4">
                                        <div className="w-full h-32 bg-white/5 rounded-2xl relative overflow-hidden">
                                            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                                <path d="M0 80 Q 20 20, 40 50 T 70 30 T 100 60 L 100 100 L 0 100 Z" fill="url(#chartGradient)" />
                                                <defs>
                                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="0%" stopColor="#3D6BFF" stopOpacity="0.4" />
                                                        <stop offset="100%" stopColor="#3D6BFF" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-center">
                                                <span className="text-red-500 text-[10px] font-black block">SELL</span>
                                                <span className="text-white font-mono text-sm">1.1824</span>
                                            </div>
                                            <div className="bg-[#00FFA3]/10 border border-[#00FFA3]/20 p-3 rounded-xl text-center">
                                                <span className="text-[#00FFA3] text-[10px] font-black block">BUY</span>
                                                <span className="text-white font-mono text-sm">1.1826</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="flex flex-col gap-6">
                                    {['US30', 'GOLD'].map((asset, idx) => (
                                        <motion.div
                                            key={asset}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.2 }}
                                            className="w-[240px] p-6 bg-[#16191E]/80 border border-white/10 rounded-3xl backdrop-blur-xl"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h5 className="text-white font-bold">{asset}</h5>
                                                    <p className="text-white/40 text-[10px] uppercase font-medium">{idx === 0 ? 'Indices • US' : 'Commodities • Metals'}</p>
                                                </div>
                                                <div className={`p-2 rounded-lg ${idx === 0 ? 'bg-[#3D6BFF]/10 text-[#3D6BFF]' : 'bg-yellow-500/10 text-yellow-500'}`}>
                                                    <TrendingUp size={16} />
                                                </div>
                                            </div>
                                            <div className="h-12 w-full bg-white/5 rounded-xl flex items-center justify-center">
                                                <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img src="/images/side-image.png" alt="Value Proposition " />
                            </div>
                        </div>

                        {/* Right Side: Content & Array Items */}
                        <div className="order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-5"
                            >
                                <h2 className="font-display text-2xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                                    How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">ApexTrade</span> Offers Value
                                </h2>
                                <p className="text-[#8E96A5] text-lg leading-relaxed max-w-[600px]">
                                    Unlock institutional-grade features designed to protect your capital and maximize your execution efficiency in global markets.
                                </p>
                            </motion.div>

                            <div className="space-y-1">
                                {valueItems.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all cursor-default"
                                    >
                                        <div
                                            className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                                            style={{
                                                backgroundColor: `${item.color}15`,
                                                border: `1px solid ${item.color}30`,
                                                color: item.color,
                                                boxShadow: `0 0 20px ${item.color}10`
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
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <CommunityCTA />
        </>
    );
}