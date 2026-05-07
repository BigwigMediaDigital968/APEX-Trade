"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ArrowRightLeft, Zap, ShieldAlert, BarChart3, TrendingDown } from "lucide-react";

const comparisonData = [
    { script: "Gold", ordinary: "Rs 5,50,000", ApexTrade: "Rs 13,000", saving: "97.6%" },
    { script: "Natural Gas", ordinary: "Rs 65,000", ApexTrade: "Rs 400", saving: "99.3%" },
    { script: "Crude", ordinary: "Rs 2,50,000", ApexTrade: "Rs 1,500", saving: "99.4%" },
    { script: "Silver", ordinary: "Rs 3,00,000", ApexTrade: "Rs 4,500", saving: "98.5%" },
    { script: "Bank Nifty", ordinary: "Rs 90,000", ApexTrade: "Rs 1,500", saving: "98.3%" },
    { script: "Nifty", ordinary: "Rs 1,20,000", ApexTrade: "Rs 2,500", saving: "97.9%" },
];

export default function ComparisonSection() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className="py-24 md:py-32 px-4 sm:px-6 bg-[#0B0E14] relative overflow-hidden">
            {/* Advanced Background effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(61,107,255,0.05),transparent_70%)]" />
                <motion.div
                    style={{ y }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#3D6BFF]/10 rounded-full blur-[140px] opacity-50"
                />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00FFA3]/5 rounded-full blur-[140px] opacity-30" />

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#3D6BFF]/10 border border-[#3D6BFF]/20 text-[#5E84FF] text-[0.7rem] font-bold uppercase tracking-[0.25em] mb-8 backdrop-blur-xl"
                    >
                        <BarChart3 size={14} />
                        <span>Market Analysis</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-[clamp(2.5rem,6vw,4rem)] font-extrabold text-white tracking-tight leading-[1.05] mb-8"
                    >
                        The Advantage is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">Quantifiable.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-[#8E96A5] text-lg max-w-[700px] mx-auto leading-relaxed"
                    >
                        Compare our institutional-grade infrastructure against standard retail platforms. We've engineered a system where your capital goes further.
                    </motion.p>
                </div>

                {/* Modern Split Comparison Card */}
                <div className="relative mb-32">
                    {/* Central Floating "VS" */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex">
                        <motion.div
                            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="w-20 h-20 rounded-2xl bg-[#0B0E14] border-2 border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                        >
                            <div className="text-white font-black text-2xl tracking-tighter italic">VS</div>
                        </motion.div>
                    </div>

                    {/* Mobile VS badge */}


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 relative">

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 -mt-6 flex lg:hidden justify-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#0B0E14] border-2 border-white/10 flex items-center justify-center">
                                <div className="text-white font-black text-xl tracking-tighter italic">VS</div>
                            </div>
                        </div>

                        {/* ── Left side - Ordinary ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#16191E]/40 border border-white/5 rounded-[40px] p-5 py-10 sm:p-10 md:p-14 backdrop-blur-md relative group hover:border-white/10 transition-colors"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                                    <ShieldAlert size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white/40 font-bold uppercase tracking-widest text-xs">Standard Retail</h3>
                                    <p className="text-white text-xl font-bold">Ordinary Platforms</p>
                                </div>
                            </div>

                            {/* ── Calculation rows ── */}
                            <div className="space-y-0 mb-2">
                                {/* Row 1 — Gross Profit */}
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-white/40 text-sm font-medium">Gross Profit</span>
                                    <span className="text-white/70 text-base font-bold">Rs 28,000</span>
                                </div>

                                {/* Row 2 — Brokerage */}
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-white/40 text-sm font-medium">Brokerage &amp; Taxes</span>
                                    <div className="flex items-center gap-2">
                                        <TrendingDown size={14} className="text-red-400/80" />
                                        <span className="text-red-400/80 text-base font-bold">− Rs 20,000</span>
                                    </div>
                                </div>

                                {/* Row 3 — Platform fee */}
                                <div className="flex justify-between items-center py-4 border-b border-white/5">
                                    <span className="text-white/40 text-sm font-medium">Platform Fee</span>
                                    <div className="flex items-center gap-2">
                                        <TrendingDown size={14} className="text-red-400/80" />
                                        <span className="text-red-400/50 text-base font-bold italic line-through">High Premium</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/5 my-5" />

                            {/* Net result */}
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 block mb-1">Net Take-Home</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/20">of Rs 28,000 earned</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-red-400 text-4xl font-black block leading-none">Rs 8,000</span>
                                    <span className="text-white/20 text-[10px] font-bold uppercase tracking-tighter mt-1 block">72% lost to fees</span>
                                </div>
                            </div>

                            {/* Efficiency bar */}
                            <div className="pt-2">
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <div className="w-[28%] h-full bg-red-500/40 rounded-full" />
                                </div>
                                <div className="flex justify-between mt-3">
                                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Efficiency: 28%</p>
                                    <p className="text-[10px] text-red-400/40 uppercase font-bold tracking-widest">You lose 72%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── Right side - ApexTrade ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#3D6BFF]/5 border border-[#3D6BFF]/30 rounded-[40px] p-5 py-10 sm:p-10 md:p-14 backdrop-blur-md relative overflow-hidden group"
                        >
                            {/* Subtle animated light sweep */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-10 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-[#3D6BFF] flex items-center justify-center text-white shadow-[0_0_20px_rgba(61,107,255,0.4)]">
                                    <Zap size={24} className="fill-current" />
                                </div>
                                <div>
                                    <h3 className="text-[#3D6BFF] font-bold uppercase tracking-widest text-xs">Proprietary Edge</h3>
                                    <p className="text-white text-xl font-bold">ApexTrade Ecosystem</p>
                                </div>
                            </div>

                            {/* ── Calculation rows ── */}
                            <div className="space-y-0 mb-2 relative z-10">
                                {/* Row 1 — Gross Profit */}
                                <div className="flex justify-between items-center py-4 border-b border-[#3D6BFF]/15">
                                    <span className="text-white/60 text-sm font-medium">Gross Profit</span>
                                    <span className="text-white/70 text-base font-bold">Rs 28,000</span>
                                </div>

                                {/* Row 2 — Brokerage */}
                                <div className="flex justify-between items-center py-4 border-b border-[#3D6BFF]/15">
                                    <span className="text-white/60 text-sm font-medium">Brokerage &amp; Taxes</span>
                                    <div className="flex items-center gap-2">
                                        <Check size={14} className="text-[#00FFA3]" />
                                        <span className="text-[#00FFA3] text-base font-bold">Rs 0</span>
                                    </div>
                                </div>

                                {/* Row 3 — Platform fee */}
                                <div className="flex justify-between items-center py-4 border-b border-[#3D6BFF]/15">
                                    <span className="text-white/60 text-sm font-medium">Platform Fee</span>
                                    <div className="flex items-center gap-2">
                                        <Check size={14} className="text-[#00FFA3]" />
                                        <span className="text-[#00FFA3] text-base font-bold">ZERO</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-[#3D6BFF]/20 my-5 relative z-10" />

                            {/* Net result */}
                            <div className="flex justify-between items-end mb-6 relative z-10">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3D6BFF] block mb-1">Net Take-Home</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00FFA3]">100% Payout</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-white text-4xl font-black block leading-none">Rs 28,000</span>
                                    <span className="text-[#00FFA3] text-[10px] font-bold uppercase tracking-tighter mt-1 block">Full amount kept</span>
                                </div>
                            </div>

                            {/* Efficiency bar */}
                            <div className="pt-2 relative z-10">
                                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                        className="h-full bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3] rounded-full"
                                    />
                                </div>
                                <div className="flex justify-between mt-3">
                                    <p className="text-[10px] text-[#3D6BFF] uppercase font-bold tracking-widest">Efficiency: 100%</p>
                                    <p className="text-[10px] text-[#00FFA3] uppercase font-bold tracking-widest">Ultra-Low Margin</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Savings callout bar ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 flex flex-wrap items-center justify-between gap-4 px-8 py-5 rounded-2xl bg-[#00FFA3]/5 border border-[#00FFA3]/15"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                            Your savings with ApexTrade
                        </span>
                        <span className="text-2xl font-black text-[#00FFA3]">
                            + Rs 20,000{" "}
                            <span className="text-[11px] font-bold tracking-wider text-[#00FFA3]/50">per trade</span>
                        </span>
                    </motion.div>
                </div>

                {/* High-Tech Table Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Card Glass Container */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent rounded-[48px] -m-1" />

                    <div className="relative bg-[#0B0E14] border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-3xl">
                        <div className="p-8 md:p-12 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#3D6BFF]">
                                    <TrendingDown size={20} />
                                </div>
                                <h4 className="text-white font-bold text-xl tracking-tight">
                                    Margin Efficiency Matrix
                                </h4>
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                <span className="text-[#8E96A5] text-xs font-medium">Updated: Q2 2024</span>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/[0.01]">
                                        <th className="px-4 sm:px-10 py-8 text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-black">Contract</th>
                                        <th className="px-4 sm:px-10 py-8 text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-black">Retail Req.</th>
                                        <th className="px-4 sm:px-10 py-8 text-[#3D6BFF] text-[0.65rem] uppercase tracking-[0.2em] font-black">ApexTrade Req.</th>
                                        <th className="px-4 sm:px-10 py-8 text-right text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-black">Capital Saved</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, index) => (
                                        <motion.tr
                                            key={row.script}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group/row"
                                        >
                                            <td className="px-4 sm:px-10 py-6">
                                                <span className="text-white font-bold text-sm group-hover/row:text-[#3D6BFF] transition-colors">
                                                    {row.script}
                                                </span>
                                            </td>
                                            <td className="px-4 sm:px-10 py-6">
                                                <span className="text-white/40 text-sm font-medium">{row.ordinary}</span>
                                            </td>
                                            <td className="px-4 sm:px-10 py-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-[#00FFA3] shadow-[0_0_8px_#00FFA3]" />
                                                    <span className="text-white font-black text-sm">{row.ApexTrade}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 sm:px-10 py-6 text-right">
                                                <span className="inline-block px-3 py-1 rounded-lg bg-[#00FFA3]/10 border border-[#00FFA3]/20 text-[#00FFA3] text-xs font-bold">
                                                    {row.saving}
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer Insight */}
                        <div className="p-8 bg-white/[0.01] border-t border-white/5 text-center">
                            <p className="text-white/30 text-[11px] font-medium uppercase tracking-[0.1em]">
                                * Based on institutional aggregation data. Margin requirements may vary with market volatility.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
