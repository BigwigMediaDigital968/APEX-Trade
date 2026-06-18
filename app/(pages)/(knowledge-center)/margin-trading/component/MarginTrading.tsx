import Link from "next/link";
import React from "react";

export default function MarginTradingPage() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Advanced Ambient Glow Parameters */}
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-[var(--color-accent-blue)] opacity-[0.05] blur-[140px] rounded-full animate-float"
          style={{ animationDelay: "-0.5s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-accent-green)] opacity-[0.03] blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "-2.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: CORE FACILITY DEFINITION ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Leverage Mechanics</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                What is{" "}
                <span className="text-gradient-blue">Margin Trading</span>?
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                Margin trading is an institutional-grade clearing facility that
                allows active market participants to execute significantly
                larger market positions by utilizing{" "}
                <span className="text-white font-semibold">
                  collateralized capital lines
                </span>{" "}
                extended from their clearing broker.
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-sans">
                Instead of micro-managing positions restricted solely by your
                raw ledger cash balance, margin configurations allow you to
                instantly access scaled buying power. In the domestic framework
                of margin trading in India, traders utilize these optimized
                leverage parameters across equities,{" "}
                <Link
                  href="/commodity"
                  className="text-indigo-500 hover:text-white"
                >
                  commodities
                </Link>
                , derivatives, and broad systemic indices to structure highly
                efficient capital loops.
              </p>
              <div className="p-4 rounded-xl border border-[rgba(0,255,163,0.15)] bg-[rgba(0,255,163,0.01)] text-xs font-sans text-[var(--color-text-secondary)] max-w-2xl">
                ⚠️ <strong className="text-white">Risk Warning Node:</strong>{" "}
                While deploying systemic leverage amplifies absolute returns
                from favorable market shifts, it exposes capital balances
                symmetrically to accelerated downside performance. Strict risk
                controls are non-negotiable.
              </div>
            </div>

            {/* Live Margin Utilization Metric Simulator Widget */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] relative overflow-hidden space-y-4">
                <div className="flex justify-between items-center font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase">
                  <span>Apex Risk Engine Core</span>
                  <span className="profit">Active Mode</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)] flex justify-between">
                    <span className="text-[var(--color-text-secondary)]">
                      Initial Margin Multiplier
                    </span>
                    <span className="text-white font-bold">
                      Up to 5X / 500X Intraday
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)] flex justify-between">
                    <span className="text-[var(--color-text-secondary)]">
                      Collateral Haircut Metric
                    </span>
                    <span className="text-[var(--color-accent-blue-light)] font-bold">
                      Exchange Standardized
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[rgba(255,70,70,0.03)] border border-[rgba(255,70,70,0.15)] flex justify-between">
                    <span className="text-[var(--color-text-secondary)]">
                      Liquidation Threshold
                    </span>
                    <span className="text-red-400 font-bold">
                      RMS Dynamic Trigger
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: ADOPTION PARAMETERS (WHY IT IS POPULAR IN INDIA) ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Market Drivers</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Why is Margin Trading Popular in India?
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Active participants utilize leverage frameworks to execute
                structural optimization pathways across domestic liquidity
                pools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Enhanced Buying Power",
                  desc: "Control substantial underlying market allocations far exceeding your base physical capital footprint, expanding trade scale.",
                },
                {
                  title: "Capital Efficiency Profiles",
                  desc: "Deploy targeted margin tranches instead of locking up 100% contract cash values, liberating cash for concurrent setups.",
                },
                {
                  title: "Broadened Opportunity Capture",
                  desc: "With scaled purchasing parameters, systems can target rapid micro-momentum deviations across high-volume ticks.",
                },
                {
                  title: "Cross-Market Flexibility",
                  desc: "Seamlessly route leverage lines into spot equities, options, indices, or commodities depending on immediate structural market regimes.",
                },
                {
                  title: "Amplified Yield Vectors",
                  desc: "When executed with strict trailing discipline, leverage metrics function as alpha multipliers on optimized direction plays.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-xl border-[var(--color-border-main)] card-hover flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-6 h-6 rounded bg-[rgba(0,255,163,0.05)] border border-[rgba(0,255,163,0.1)] flex items-center justify-center font-mono text-[10px] text-[var(--color-accent-green)] font-bold">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-white font-display pt-1">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: APEX LEVERAGE INFRASTRUCTURE ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[var(--color-border-main)] pt-10">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-8">
              <span className="badge-blue">Apex Terminal Tech</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Amplify Your Power with{" "}
                <span className="text-gradient-blue">Apex Trade</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                The Apex Trade clearing layer combines robust risk management
                analytics with ultra-responsive trading pipelines, providing
                professional operators with flexible margin execution without
                sacrificing balance security.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="btn-primary animate-glow px-6 py-3 text-xs"
                >
                  Request Leverage Clearance{" "}
                  <span className="typing-cursor"></span>
                </Link>
              </div>
            </div>

            {/* Asymmetric Core Feature Stacking Grid */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "Flexible Margin Facilities",
                  desc: "Access dynamic, benchmark-aligned clearing leverage setups built to safely scale market exposure parameters without requiring manual verification holds.",
                },
                {
                  title: "Increased Buying Capacity",
                  desc: "Maximize broad spot position sizes through capital-efficient ledger deployments and smart intraday margin tracking systems.",
                },
                {
                  title: "Smart Risk Controls (RMS)",
                  desc: "Our terminal layer runs high-frequency position risk scanning, automated soft alerts, and systemic parameter protections to shield profiles from margin calls.",
                },
                {
                  title: "Sub-Millisecond Order Routing",
                  desc: "Execute multi-lot leveraged trades instantly into central exchange books, protecting entries from adverse execution slippage during volatility spikes.",
                },
                {
                  title: "24/7 Dedicated Clearing Support",
                  desc: "Direct engineering and technical trade desk access to guide you through margin haircut parameters, pledge details, and funding allocations.",
                },
              ].map((infra, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-xl bg-[rgba(142,150,165,0.01)] border border-[var(--color-border-main)] hover:border-[rgba(61,107,255,0.2)] transition-all"
                >
                  <div className="font-mono text-xs text-[var(--color-accent-blue-light)] font-bold mt-0.5">
                    //
                  </div>
                  <div>
                    <h4 className="text-white font-display text-sm font-bold">
                      {infra.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs mt-1 leading-relaxed">
                      {infra.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 4: DEPLOYMENT FOOTER CONVERSION PANEL ── */}
          <div className="mt-28 glass p-8 md:p-12 rounded-3xl border border-[rgba(0,255,163,0.15)] bg-gradient-to-br from-[rgba(11,14,20,0.9)] via-[rgba(15,20,32,0.85)] to-[rgba(19,25,41,0.9)] text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-5 relative z-10">
              <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                Optimize Capital Density Across Indian Financial Markets
              </h3>
              <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                Unlock competitive margin utilization frameworks on a terminal
                framework built from the ground up for speed, flexibility, and
                absolute architectural transparency. Sign up for Apex Trade and
                access direct exchange-linked connectivity today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
