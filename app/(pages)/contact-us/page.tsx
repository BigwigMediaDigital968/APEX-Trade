"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Send, CheckCircle2, Loader2, Globe, ArrowUpRight } from "lucide-react";
import HeroSection from "@/app/components/Common/HeroSection";
import { FaWhatsapp } from "react-icons/fa";

/**
 * THEME: Midnight Neon
 * Main Colors: 
 * Background: #0B0E14
 * Accents: #3D6BFF (Blue), #00FFA3 (Green)
 */

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;
        setLoading(true);
        // Simulate Transmission
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1800);
    };

    return (
        <>
            <HeroSection
                title="Contact Us"
                tag="We're Here to Help"
                backgroundImage="https://images.unsplash.com/photo-1589560989620-61bf48e97abb?q=80&w=1974&auto=format&fit=crop"
            />
            <section id="contact" className="relative py-24 px-6 overflow-hidden bg-bg-main text-white">
                {/* Background Ambience */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1611974717482-982c7c6796d2?q=80&w=2070"
                        alt="Trading Background"
                        className="w-full h-full object-cover opacity-5 grayscale"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0B0E14] via-transparent to-[#0B0E14]" />

                    {/* Neon Orbs */}
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3D6BFF]/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00FFA3]/5 blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content & Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#3D6BFF]/10 border border-[#3D6BFF]/20 text-[#5E84FF] text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-xl">
                            <Globe size={14} />
                            <span>Institutional Access</span>
                        </div>

                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.1] tracking-tight mb-8">
                            Connect with our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3]">
                                Trading Desk
                            </span>
                        </h2>

                        <p className="text-[#8E96A5] text-lg mb-12 max-w-lg leading-relaxed">
                            Ready to scale your portfolio? Our experts are standing by to assist with institutional-grade strategy and platform integration.
                        </p>

                        {/* Contact Methods Grid */}
                        <div className="flex flex-col gap-5 max-w-sm">
                            {/* Email Card */}
                            <motion.a
                                href="mailto:support@tradeedge.io"
                                whileHover={{ x: 8 }}
                                className="group flex items-center gap-6 p-5 bg-[#16191E]/60 border border-white/5 rounded-3xl hover:border-[#3D6BFF]/30 hover:bg-[#16191E]/80 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#3D6BFF]/10 flex items-center justify-center text-[#3D6BFF] group-hover:bg-[#3D6BFF]/20 group-hover:scale-105 transition-all">
                                    <Mail size={24} />
                                </div>

                                <div className="flex-grow">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-0.5">Email Us</h4>
                                    <p className="text-[#8E96A5] text-xs mb-2">support@tradeedge.io</p>
                                    <div className="flex items-center text-[#3D6BFF] text-[10px] font-black uppercase tracking-widest gap-2">
                                        <span>Send Mail</span>
                                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </motion.a>

                            {/* WhatsApp Card */}
                            <motion.a
                                href="https://wa.me/your-number"
                                whileHover={{ x: 8 }}
                                className="group flex items-center gap-6 p-5 bg-[#16191E]/60 border border-white/5 rounded-3xl hover:border-[#00FFA3]/30 hover:bg-[#16191E]/80 transition-all duration-300"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#00FFA3]/10 flex items-center justify-center text-[#00FFA3] group-hover:bg-[#00FFA3]/20 group-hover:scale-105 transition-all">
                                    <FaWhatsapp size={24} />
                                </div>

                                <div className="flex-grow">
                                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-0.5">Direct Chat</h4>
                                    <p className="text-[#8E96A5] text-xs mb-2">Live Support Desk</p>
                                    <div className="flex items-center text-[#00FFA3] text-[10px] font-black uppercase tracking-widest gap-2">
                                        <span>Start Chat</span>
                                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative group">
                            {/* Form Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#3D6BFF] to-[#00FFA3] rounded-[40px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                            <div className="relative bg-[#16191E]/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl">
                                <AnimatePresence mode="wait">
                                    {sent ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-10"
                                        >
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#00FFA3]/10 border border-[#00FFA3]/20 mb-6 shadow-[0_0_30px_rgba(0,255,163,0.1)]">
                                                <CheckCircle2 size={40} className="text-[#00FFA3]" />
                                            </div>
                                            <h3 className="text-2xl font-black mb-2 text-white">Transmission Received</h3>
                                            <p className="text-[#8E96A5]">An agent will reach out to your terminal shortly.</p>
                                            <button
                                                onClick={() => setSent(false)}
                                                className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#3D6BFF] hover:text-white transition-colors"
                                            >
                                                Send another message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-2">Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Full Name"
                                                        required
                                                        className="w-full bg-[#0B0E14]/50 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-[#3D6BFF]/50 focus:bg-[#0B0E14] transition-all placeholder:text-white/20"
                                                        value={form.name}
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-2">Email</label>
                                                    <input
                                                        type="email"
                                                        placeholder="Email Address"
                                                        required
                                                        className="w-full bg-[#0B0E14]/50 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-[#3D6BFF]/50 focus:bg-[#0B0E14] transition-all placeholder:text-white/20"
                                                        value={form.email}
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number (Optional)"
                                                    className="w-full bg-[#0B0E14]/50 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-[#3D6BFF]/50 focus:bg-[#0B0E14] transition-all placeholder:text-white/20"
                                                    value={form.phone}
                                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[10px] uppercase font-black tracking-widest text-white/40 ml-2">Message</label>
                                                <textarea
                                                    placeholder="How can we help your portfolio?"
                                                    required
                                                    rows={4}
                                                    className="w-full bg-[#0B0E14]/50 border border-white/5 rounded-2xl p-4 text-white outline-none focus:border-[#3D6BFF]/50 focus:bg-[#0B0E14] transition-all placeholder:text-white/20 resize-none"
                                                    value={form.message}
                                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full group relative py-5 px-6 bg-[#3D6BFF] hover:bg-[#5E84FF] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-xl shadow-[#3D6BFF]/20"
                                            >
                                                {loading ? (
                                                    <Loader2 className="animate-spin" />
                                                ) : (
                                                    <div className="flex items-center gap-3">
                                                        <span>Transmit Request</span>
                                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                    </div>
                                                )}
                                            </button>

                                            <p className="text-[10px] text-center text-white/30 uppercase tracking-[0.2em] mt-6">
                                                Institutional privacy standards apply
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}