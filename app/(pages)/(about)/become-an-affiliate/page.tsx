"use client";

import { useState } from "react";
import { Loader2, Zap, Lock, TrendingUp } from "lucide-react";
import HeroSection from "@/app/components/Common/HeroSection";
import { motion, AnimatePresence } from 'framer-motion';
import {  CheckCircle2, Share2, Wallet, Globe, Link as LinkIcon } from 'lucide-react';

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

<section className="min-h-screen bg-[#0a0c10] text-white py-20 px-6 flex items-center justify-center font-sans overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: Affiliate Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-border-blue text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
            <span>Join our network</span>
          </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn your reach into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-green-400">
                Passive Revenue
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Monetize your audience by promoting a platform they'll love. Our affiliate program offers high conversion rates and a dedicated dashboard to track your success.
            </p>
          </div>

          {/* Affiliate Benefits */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <Wallet className="w-5 h-5" />, title: "Instant Payouts", desc: "Withdraw earnings monthly without hassle." },
              { icon: <Zap className="w-5 h-5" />, title: "High Conversions", desc: "Optimized funnels for your traffic." },
              { icon: <Share2 className="w-5 h-5" />, title: "Creative Assets", desc: "Access banners, links, and videos." },
              { icon: <Globe className="w-5 h-5" />, title: "Global Reach", desc: "Promote to users across the world." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-accent-blue mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Application Form */}
        <div className="relative">
          <div className="bg-[#11141b] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                 <motion.form
                            key="affiliate-form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-5 font-sans"
                        >
                            <div className="mb-8">
                        <h2 className="font-display text-2xl font-black uppercase tracking-tight text-text-primary mb-1">
                            Submit Your Application
                        </h2>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                            All fields marked * are required
                        </p>
                    </div>
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
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-10 h-10 text-purple-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">Request Received</h3>
                    <p className="text-gray-400 max-w-xs mx-auto">
                      Your affiliate application has been submitted. Our team will review your profile and send an activation link to your email shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                  >
                    Modify Application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
        </main>
    );
}