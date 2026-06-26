import Link from "next/link";
import React from "react";

export default function WhyIntraday() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Dynamic Theme Glow Blobs */}
        <div
          className="absolute top-1/4 right-1/3 w-80 h-80 bg-[var(--color-accent-blue)] opacity-[0.05] blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "-1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-[var(--color-accent-green)] opacity-[0.03] blur-[150px] rounded-full animate-float"
          style={{ animationDelay: "-3.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: BENEFITS GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">
            <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-4">
              <span className="badge-blue">Performance Edge</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
                Benefits of{" "}
                <span className="text-gradient-blue">Intraday Trading</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Intraday trading offers structural advantages for agile market
                participants seeking to turn quick short-term volatility into
                clean equity loops.
              </p>
              <div className="pt-2">
                <button className="btn-secondary text-xs py-2.5 px-6">
                  Explore Live Benefits
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Daily Opportunities",
                  desc: "Intense price movements during the localized trading session create highly actionable, fresh opportunities every single day.",
                },
                {
                  title: "Zero Overnight Risk",
                  desc: "All positions are explicitly closed before the session bell rings, completely isolating your capital from overnight global events.",
                },
                {
                  title: "Cross-Market Segments",
                  desc: "Day trading frameworks can be seamlessly applied to domestic equities, heavy commodities, and active regional F&O segments.",
                },
                {
                  title: "Efficient Capital Allocation",
                  desc: "Traders can dynamically scale position sizes up or down fluidly based on real-time liquidity pools and available intraday margin.",
                },
              ].map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="glass p-6 rounded-2xl border-[var(--color-border-main)] card-hover space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(61,107,255,0.08)] border border-[rgba(61,107,255,0.15)] flex items-center justify-center text-xs font-mono text-[var(--color-accent-blue-light)] font-bold">
                    0{bIdx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white font-display pt-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-t border-[var(--color-border-main)] my-10" />

          {/* ── SECTION 2: SUITABILITY MATRIX ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="badge-green mb-3">Audience Demographics</span>
                <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                  Who Should Consider{" "}
                  <span className="text-gradient-green">Intraday Trading</span>?
                </h2>
                <p className="text-[var(--color-text-muted)] font-sans text-xs mt-2">
                  High-speed session trading presents unique opportunities but
                  demands targeted mental alignment and operational bandwidth.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Active momentum traders seeking rapid short-term alpha tracking",
                  "Individuals who can dedicate focused intra-hour blocks to live market monitoring",
                  "Execution-focused traders optimized for high-speed, fast-paced decision making",
                  "Market participants looking to aggressively scale technical asset experience",
                ].map((profile, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)] hover:border-[rgba(0,255,163,0.2)] transition-all"
                  >
                    <span className="text-[var(--color-accent-green)] font-mono text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <p className="text-[var(--color-text-secondary)] text-sm font-sans leading-relaxed">
                      {profile}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[var(--color-text-muted)] text-[11px] font-mono leading-relaxed pt-2">
                * Note: Before trading active intraday setups, it is heavily
                recommended to systematically review core definitions across{" "}
                <strong className="text-white">What is Trading</strong>,{" "}
                 <Link
                      href="/equity-trading"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >Equity Trading India</Link>,
                and foundational{" "}
                <Link
                      href="/margin-trading"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >Margin Trading</Link>.
              </p>
            </div>

            {/* Diagnostic Interface Block */}
            <div className="lg:col-span-6">
              <div className="glass-blue p-8 rounded-2xl border-[rgba(61,107,255,0.25)] card-hover relative overflow-hidden">
                <div className="absolute right-0 top-0 text-[8rem] font-mono font-bold text-[rgba(61,107,255,0.02)] select-none pointer-events-none leading-none">
                  MIS
                </div>
                <div className="space-y-4">
                  <span className="text-[var(--color-accent-blue-light)] font-mono text-xs uppercase tracking-widest block">
                    // Core Prerequisite Check
                  </span>
                  <h4 className="text-xl font-bold text-white font-display">
                    Systematic Frameworks First
                  </h4>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    Building a comprehensive, multi-layered view of micro-market
                    leverage architectures, real-time liquidity pools, and
                    derivative pricing parameters enables day traders to manage
                    high-frequency positions with minimal psychological stress.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 3: TECH INFRASTRUCTURE GRID ── */}
          <div className="border-t border-[var(--color-border-main)] pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="badge-blue">Apex Infrastructure</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Why Trade Intraday with Apex Trade?
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                A strong trading setup combines precise domain execution with
                specialized terminal technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "500X Intraday Leverage",
                  desc: "Drastically enhance baseline trading capacity using aggressive, highly capital-efficient clearing leverage architectures.",
                },
                {
                  title: "Lightning-Fast Execution",
                  desc: "Route orders seamlessly within sub-millisecond windows to minimize structural slippage during heavy volatility spikes.",
                },
                {
                  title: "Ultra-Low Latency Core",
                  desc: "Experience rock-solid performance stability even when high-frequency terminal interactions peak out across critical news loops.",
                },
                {
                  title: "Advanced Scalping Tools",
                  desc: "Unlock micro-tick analysis modules, bracket orders, and specialized quick-exit key bindings built for high-speed positions.",
                },
                {
                  title: "Instant Trade Monitoring",
                  desc: "Track execution state changes, floating margins, and absolute trailing stop metrics in real-time without interface lag.",
                },
                {
                  title: "Real-Time Trading Insights",
                  desc: "Stay fully synchronized with raw volumetric data feeds, localized chart pattern engines, and live trend diagnostics.",
                },
              ].map((infra, iIdx) => (
                <div
                  key={iIdx}
                  className="glass p-6 rounded-xl border-[var(--color-border-main)] hover:border-[rgba(61,107,255,0.25)] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                      <span className="text-[var(--color-accent-blue-light)] font-mono">
                        #
                      </span>
                      {infra.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                      {infra.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final Conversion Unit */}
            <div className="glass p-10 rounded-3xl border border-[rgba(0,255,163,0.15)] bg-gradient-to-br from-[rgba(19,25,41,0.9)] via-[rgba(15,20,32,0.85)] to-[rgba(11,14,20,0.9)] text-center relative overflow-hidden">
              <div className="max-w-xl mx-auto space-y-6 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                  Deploy Your Setup on India's Smartest Day Trading Core
                </h3>
                <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                  Whether you are exploring how to Start Trading in India or
                  scaling up an active system, Apex Trade gives you the
                  sub-millisecond execution engines, high leverage bounds, and
                  terminal diagnostics needed to trade successfully.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="btn-primary animate-glow px-8 py-3.5 text-sm"
                  >
                    Launch Intraday Workstation{" "}
                    <span className="typing-cursor"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
