"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Zap, Lock, TrendingUp } from "lucide-react";
import HeroSection from "@/app/components/Common/HeroSection";

// ── Types ──────────────────────────────────────────────
interface AffiliateForm {
    name: string;
    email: string;
    phone: string;
    platform: string;
    socialLink: string;
    comment: string;
}

const PLATFORMS = [
    "YouTube",
    "Instagram",
    "Twitter / X",
    "Telegram",
    "Blog / Website",
    "LinkedIn",
    "Other",
];

const PERKS = [
    { icon: <Zap size={16} />, label: "Instant Approval Review" },
    { icon: <Lock size={16} />, label: "Secure & Encrypted" },
    { icon: <TrendingUp size={16} />, label: "Real-time Dashboard" },
];

// ── Shared input class — matches your project's form style ──
const inputCls =
    "w-full bg-bg-main/50 border border-border-main rounded-2xl p-4 text-text-primary outline-none focus:border-accent-blue focus:bg-bg-secondary transition-all placeholder:text-text-muted font-sans text-sm";

// ── Page ──────────────────────────────────────────────
export default function AffiliatePage() {
    const [form, setForm] = useState<AffiliateForm>({
        name: "",
        email: "",
        phone: "",
        platform: "",
        socialLink: "",
        comment: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const set = (key: keyof AffiliateForm) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // TODO: replace with your actual API call
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-bg-main">
            {/* ── Hero ── */}
            <HeroSection
                tag="Affiliate Program — Now Open"
                title={"Become and affiliate"}
                description="Have a trading-focused audience? Join the Apex Trade Affiliate Program. Submit your details to unlock competitive commissions, exclusive benefits, and start earning with a growing network."
            />

            {/* ── Form Section ── */}
            <section className="px-6 py-24 flex justify-center relative">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* The Image */}
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop"
                        className="w-full h-full object-cover  opacity-40 scale-105"
                        alt="Technical Background"
                    />
                    {/* Radial Vignette to focus on the center card */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0E14_80%)]" />
                    {/* Dark Overlays for legibility */}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="w-full max-w-2xl bg-bg-secondary border border-border-main rounded-3xl p-10 md:p-12 relative overflow-hidden"
                >
                    {/* Corner glow */}
                    <div className="pointer-events-none absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(circle_at_0%_0%,rgba(61,107,255,0.1),transparent_70%)]" />

                    {/* Card header */}
                    <div className="mb-8">
                        <h2 className="font-display text-2xl font-black uppercase tracking-tight text-text-primary mb-1">
                            Submit Your Application
                        </h2>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                            All fields marked * are required
                        </p>
                    </div>

                    {/* Perks row */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        {PERKS.map((p) => (
                            <div
                                key={p.label}
                                className="flex items-center gap-2 bg-bg-main/50 border border-border-main rounded-xl px-3 py-3"
                            >
                                <span className="text-accent-blue flex-shrink-0">{p.icon}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wide text-text-secondary leading-tight">
                                    {p.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* ── Form ── */}
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16 space-y-4"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mx-auto">
                                <TrendingUp size={28} className="text-accent-blue" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-text-primary">
                                Application Received
                            </h3>
                            <p className="text-text-muted text-sm max-w-xs mx-auto leading-relaxed">
                                Our team will review your profile and get back to you within 48 hours.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="affiliate-form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-5 font-sans"
                        >
                            {/* Row 1 — Name + Email */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Full Name *"
                                    required
                                    className={inputCls}
                                    value={form.name}
                                    onChange={set("name")}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    required
                                    className={inputCls}
                                    value={form.email}
                                    onChange={set("email")}
                                />
                            </div>

                            <input
                                type="tel"
                                placeholder="Phone Number *"
                                required
                                className={inputCls}
                                value={form.phone}
                                onChange={set("phone")}
                            />

                            {/* Social Link */}
                            <input
                                type="url"
                                placeholder="Social Media / Channel Link *"
                                required
                                className={inputCls}
                                value={form.socialLink}
                                onChange={set("socialLink")}
                            />

                            {/* Comment */}
                            <textarea
                                placeholder="Tell us about your audience — size, niche, and how you plan to promote Apex Trade... *"
                                required
                                rows={4}
                                className={`${inputCls} resize-none`}
                                value={form.comment}
                                onChange={set("comment")}
                            />

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="cursor-pointer w-full group relative py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-lg shadow-accent-blue/20"
                            >
                                {/* shine sweep */}
                                <span className="absolute top-0 left-[-100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-[150%] transition-all duration-500" />
                                {loading ? (
                                    <Loader2 className="animate-spin" size={22} />
                                ) : (
                                    "Submit Application"
                                )}
                            </button>

                            <p className="text-[10px] text-center text-text-muted uppercase tracking-widest mt-2">
                                By submitting, you agree to our{" "}
                                <span className="text-text-primary cursor-pointer hover:underline underline-offset-4">
                                    Privacy Protocol
                                </span>{" "}
                                &amp; Affiliate Terms
                            </p>
                        </motion.form>
                    )}
                </motion.div>
            </section>
        </main>
    );
}