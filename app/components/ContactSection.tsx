"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Globe } from "lucide-react";

/**
 * THEME: Midnight Neon
 * Using CSS Variables from the provided theme
 */

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1800);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-bg-main text-text-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1170&auto=format&fit=crop"
          alt="Trading Background"
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-r from-bg-main via-bg-main/90 to-bg-main/80" />

        {/* Neon Glows using theme colors */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-blue/10 blur-120 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-green/5 blur-120 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-border-blue text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
            <Globe size={14} />
            <span>Global Support 24/7</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 text-text-primary">
            Ready to scale your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-blue to-accent-green">
              trading performance?
            </span>
          </h2>

          <p className="text-text-secondary text-lg mb-10 max-w-lg leading-relaxed">
            Join 120,000+ traders worldwide. Our team of experts is ready to help you navigate the neon markets with precision and speed.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-bg-card border border-border-main text-accent-blue">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-primary">Email Us</h4>
                <p className="text-text-secondary">support@neontrade.io</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-bg-card border border-border-main text-accent-green">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-primary">Call Us</h4>
                <p className="text-text-secondary">+1 (555) 000-NEON</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-bg-card border border-border-main text-text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-primary">Headquarters</h4>
                <p className="text-text-secondary">Financial District, Singapore</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form Column - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Form Glow Effect using Blue to Green Gradient */}
            <div className="absolute -inset-1 bg-linear-to-r from-accent-blue to-accent-green rounded-32 blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

            <div className="relative bg-bg-card/40 backdrop-blur-xl border border-border-main p-8 md:p-12 rounded-32 shadow-2xl">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-green/10 border border-border-green mb-6 shadow-[0_0_30px_rgba(0,255,163,0.2)]">
                      <CheckCircle2 size={40} className="text-accent-green" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2 text-text-primary">Transmission Received</h3>
                    <p className="text-text-secondary">An agent will reach out to your terminal shortly.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-8 text-sm font-bold text-accent-blue hover:text-accent-blue-light cursor-pointer transition-colors"
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
                    className="space-y-5 font-sans"
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full bg-bg-main/50 border border-border-main rounded-2xl p-4 text-text-primary outline-none focus:border-accent-blue focus:bg-bg-secondary transition-all placeholder:text-text-muted"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full bg-bg-main/50 border border-border-main rounded-2xl p-4 text-text-primary outline-none focus:border-accent-blue focus:bg-bg-secondary transition-all placeholder:text-text-muted"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      className="w-full bg-bg-main/50 border border-border-main rounded-2xl p-4 text-text-primary outline-none focus:border-accent-blue focus:bg-bg-secondary transition-all placeholder:text-text-muted"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />

                    <textarea
                      placeholder="How can we help your portfolio?"
                      required
                      rows={4}
                      className="w-full bg-bg-main/50 border border-border-main rounded-2xl p-4 text-text-primary outline-none focus:border-accent-blue focus:bg-bg-secondary transition-all placeholder:text-text-muted resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="cursor-pointer w-full group relative py-4 px-6 bg-accent-blue hover:bg-accent-blue-light text-white rounded-2xl font-bold text-lg flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-lg shadow-accent-blue/20"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          <span>Submit</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-text-muted uppercase tracking-widest mt-4">
                      By submitting, you agree to our <span className="text-text-primary cursor-pointer hover:underline">Privacy Protocol</span>
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}