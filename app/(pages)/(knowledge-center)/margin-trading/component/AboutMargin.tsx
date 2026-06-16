import Link from "next/link";
import React from "react";

export default function AboutMargin() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Structural Background Ambient Highlights */}
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[var(--color-accent-blue)] opacity-[0.04] blur-[150px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[var(--color-accent-green)] opacity-[0.03] blur-[110px] rounded-full animate-float"
          style={{ animationDelay: "-2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: PROCEDURAL EXPLANATION (HOW IT WORKS) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-5 space-y-4">
              <span className="badge-blue">// EXECUTION_WORKFLOW</span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
                How Margin{" "}
                <span className="text-gradient-blue">Trading Works</span>
              </h1>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Deconstructing leverage facilities into a clear, standardized
                processing flow. By utilizing collateral structures, traders can
                scale operational efficiency without losing physical platform
                agility.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="btn-secondary text-xs py-2.5 px-6"
                >
                  View Sample Scenarios
                </Link>
              </div>
            </div>

            {/* Structured Step-by-Step Processing Nodes */}
            <div className="lg:col-span-7 space-y-4 font-sans text-xs">
              {[
                {
                  step: "01",
                  title: "Capital Deposit Initiation",
                  desc: "The participant deposits a baseline pool of initial funds or marginable securities into their clearing account to serve as core collateral.",
                },
                {
                  step: "02",
                  title: "Leverage Line Generation",
                  desc: "The Apex Risk Management System automatically processes the deposit matrix and grants a multiplied allocation of buying power.",
                },
                {
                  step: "03",
                  title: "Position Scaling Execution",
                  desc: "The trader opens high-volume market positions that drastically exceed their baseline physical ledger capital boundaries.",
                },
                {
                  step: "04",
                  title: "Full-Scale P&L Calculation",
                  desc: "Real-time floating profits and absolute losses compound calculated on the full exposure profile, not just the initial margin tranche.",
                },
                {
                  step: "05",
                  title: "Automated Risk Protection",
                  desc: "Built-in automated safety protocols actively monitor active allocations to protect the structural integrity of both user and platform equity.",
                },
              ].map((node, nIdx) => (
                <div
                  key={nIdx}
                  className="flex gap-4 items-center p-4 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] hover:bg-[rgba(142,150,165,0.02)] transition-all"
                >
                  <span className="font-mono text-xs font-bold text-[var(--color-accent-blue-light)] bg-[rgba(61,107,255,0.05)] border border-[rgba(61,107,255,0.1)] w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                    {node.step}
                  </span>
                  <div>
                    <h4 className="text-white font-bold font-display text-sm">
                      {node.title}
                    </h4>
                    <p className="text-[var(--color-text-muted)] text-[11px] mt-0.5 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 2: SYSTEMATIC BENEFITS GRID ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Platform Architecture</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Benefits of Margin Trading with Apex Trade
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Unlock high-tier balance execution with specialized clearing
                features built for active traders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Optimized Capital Utilization",
                  desc: "Deploy your available capital profiles with high strategic efficiency without locking up the full net contract value of every concurrent setup.",
                },
                {
                  title: "Opportunity to Scale Positions",
                  desc: "Capitalize seamlessly on fleeting micro-volatility nodes utilizing high-leverage purchasing pipelines across active trading hours.",
                },
                {
                  title: "Advanced Trading Infrastructure",
                  desc: "Execute trades inside a customized sub-millisecond cloud routing network engineered specifically for absolute speed and stable pricing throughput.",
                },
                {
                  title: "Professional Environment Protocols",
                  desc: "Access cutting-edge market diagnostics, institutional order triggers, and structural analytics that support tight operational discipline.",
                },
                {
                  title: "Seamless User Experience Layers",
                  desc: "From lightning-fast collateral balance modifications to real-time stop monitoring, every platform interface tier is built for zero friction.",
                },
              ].map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="glass p-6 rounded-2xl border-[var(--color-border-main)] card-hover flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                      <span className="text-[var(--color-accent-green)] font-mono">
                        #
                      </span>
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: SUITABILITY & TARGET AUDIENCE DEMOGRAPHICS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[var(--color-border-main)] pt-10 mb-10">
            {/* Visual Risk Management Diagnostic Graphic */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="glass-blue p-8 rounded-2xl border-[rgba(61,107,255,0.25)] space-y-4 relative overflow-hidden">
                <span className="text-[10px] font-mono text-[var(--color-accent-green)] tracking-widest uppercase block">
                  // AUDIENCE_COMPLIANCE
                </span>
                <h4 className="text-xl font-bold text-white font-display">
                  Leverage Match Matrices
                </h4>
                <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                  Leverage solutions are highly targeted structural modules.
                  Symmetrical capital amplification dictates that this facility
                  functions best when backed by sharp quantitative execution and
                  systematic risk boundaries.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="badge-blue">Suitability Analysis</span>
                <h2 className="text-3xl font-bold text-white font-display tracking-tight mt-2">
                  Who Can Benefit from Margin Trading?
                </h2>
                <p className="text-[var(--color-text-muted)] font-sans text-xs">
                  Margin trading pipelines in the Indian regulatory sandbox are
                  highly optimized for specific profiles:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                {[
                  {
                    target: "Active Intraday Traders",
                    highlight: "Session Scalpers",
                  },
                  {
                    target: "Short-Term Market Participants",
                    highlight: "Momentum Capture",
                  },
                  {
                    target: "Experienced Operators",
                    highlight: "Capital Density Gains",
                  },
                  {
                    target: "Diversified Asset Allocation Models",
                    highlight: "Cross-Market Spreads",
                  },
                  {
                    target: "Traders and Risk Mitigation Experts",
                    highlight: "Leverage Discipline",
                  },
                ].map((profile, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-xl bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)] flex justify-between items-center"
                  >
                    <span className="text-[var(--color-text-secondary)] font-medium">
                      {profile.target}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent-blue-light)] bg-[rgba(61,107,255,0.05)] px-2 py-0.5 rounded border border-[rgba(61,107,255,0.1)]">
                      {profile.highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SECTION 4: CONVERSION CALLOUT ACTION HERO ── */}
          <div className="glass p-10 md:p-16 rounded-3xl border border-[rgba(0,255,163,0.15)] bg-gradient-to-br from-[rgba(19,25,41,0.95)] via-[rgba(15,20,32,0.9)] to-[rgba(11,14,20,0.95)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(61,107,255,0.03)] via-transparent to-transparent pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Trade Smarter with Apex Trade
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Whether you are exploring margin facilities for the first time
                or seeking an advanced high-tier infrastructure layer, Apex
                Trade provides the ecosystem needed to navigate structural
                markets with maximum confidence. Unlock greater position control
                while maintaining absolute trading discipline.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="btn-primary animate-glow px-8 py-3.5 text-sm"
                >
                  Initialize Your Margin Journey{" "}
                  <span className="typing-cursor"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
