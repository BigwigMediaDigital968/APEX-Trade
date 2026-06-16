import Link from "next/link";
import React from "react";

export default function StockTable() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Deep Field Ambient Glows */}
        <div
          className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[var(--color-accent-blue)] opacity-[0.04] blur-[150px] rounded-full animate-float"
          style={{ animationDelay: "-1.5s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[var(--color-accent-green)] opacity-[0.03] blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "-3.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: COMPARATIVE ARCHITECTURE MATRIX ── */}
          <div className="mb-28">
            <div className="mb-12 space-y-2">
              <span className="badge-blue">Market Comparison Matrix</span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
                Commodity Trading{" "}
                <span className="text-gradient-blue">vs Stock Trading</span>
              </h1>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm max-w-2xl">
                While both deployment environments process digital instruments,
                their underlying clearing dynamics, valuation drivers, and
                structural risk parameters differ fundamentally.
              </p>
            </div>

            {/* Custom Responsive Comparison Table */}
            <div className="glass rounded-2xl border border-[var(--color-border-main)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans text-xs">
                  <thead>
                    <tr className="border-b border-[var(--color-border-main)] bg-[rgba(142,150,165,0.02)] font-display text-xs text-white tracking-wide">
                      <th className="p-5 font-bold">Structural Feature</th>
                      <th className="p-5 font-bold text-[var(--color-accent-blue-light)]">
                        Commodity Trading
                      </th>
                      <th className="p-5 font-bold text-[var(--color-accent-green)]">
                        Stock Trading
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border-main)] text-[var(--color-text-secondary)]">
                    {[
                      {
                        f: "Asset Classification",
                        c: "Standardized physical raw resources, energies, and bulk goods.",
                        s: "Fractional corporate equity shareholdings and corporate titles.",
                      },
                      {
                        f: "Primary Valuation Drivers",
                        c: "Global aggregate supply bottlenecks, real-world inventories, and macro regimes.",
                        s: "Corporate balance sheet trajectories, revenue metrics, and industry tailwinds.",
                      },
                      {
                        f: "Portfolio Diversification Role",
                        c: "Direct non-correlated exposure to tangible assets; structural inflation fence.",
                        s: "Direct exposure to localized or global macro corporate expansion vectors.",
                      },
                      {
                        f: "Volatility Archetypes",
                        c: "Intense session swings heavily dictated by geopolitical actions and trade logistics.",
                        s: "Varying momentum arcs tied to business operations and index sentiment.",
                      },
                      {
                        f: "Available Target Scopes",
                        c: "Precious and industrial base metals, global energies, agricultural contracts.",
                        s: "Publicly listed enterprises cataloged by sectors and market capitalizations.",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[rgba(142,150,165,0.01)] transition-colors"
                      >
                        <td className="p-5 font-semibold text-white font-display text-sm">
                          {row.f}
                        </td>
                        <td className="p-5 leading-relaxed">{row.c}</td>
                        <td className="p-5 leading-relaxed">{row.s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: PROCEDURAL ONBOARDING SEQUENCING ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-8">
              <span className="badge-green">Onboarding Protocol</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                How to Start Commodity Trading
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Initialize multi-market clearing capability using our
                standardized, regulatory-compliant execution provisioning
                lifecycle.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 font-sans text-xs">
              {[
                {
                  step: "Step 01",
                  title: "Open a Trading Account",
                  desc: "Select a compliant trading infrastructure provider optimized for native multi-exchange derivative connectivity.",
                },
                {
                  step: "Step 02",
                  title: "Complete Verification",
                  desc: "Submit KYC documentation modules to satisfy statutory domestic compliance parameters.",
                },
                {
                  step: "Step 03",
                  title: "Fund Your Account",
                  desc: "Inject raw ledger trading capital aligned with your planned risk buffer allocations and exposure parameters.",
                },
                {
                  step: "Step 04",
                  title: "Research the Market",
                  desc: "Analyze real-time inventory balances, seasonal factors, and geopolitical headlines prior to routing capital.",
                },
                {
                  step: "Step 05",
                  title: "Execute Trades",
                  desc: "Deploy your technical or quantitative alpha algorithms and actively monitor session margin profiles.",
                },
              ].map((phase, pIdx) => (
                <div
                  key={pIdx}
                  className="flex gap-4 items-start p-5 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)]"
                >
                  <span className="font-mono text-[10px] font-bold text-[var(--color-accent-blue-light)] bg-[rgba(61,107,255,0.05)] border border-[rgba(61,107,255,0.1)] px-2.5 py-1 rounded-md shrink-0">
                    {phase.step}
                  </span>
                  <div>
                    <h4 className="text-white font-bold font-display text-sm">
                      {phase.title}
                    </h4>
                    <p className="text-[var(--color-text-muted)] text-[11px] mt-1 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: SYSTEMIC RISK MANAGEMENT BOUNDARIES ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-[var(--color-border-main)] pt-10 mb-10">
            {/* Risk Control Architecture */}
            <div className="p-8 rounded-2xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-6">
              <div>
                <span className="badge-blue">Exposure Control</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Risk Management in Commodity Trading
                </h3>
                <p className="text-[var(--color-text-muted)] font-sans text-xs mt-1 leading-relaxed">
                  Leveraged environments expose capital pools symmetrically.
                  Long-term performance survival correlates directly to strict
                  technical perimeter boundaries.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs">
                {[
                  {
                    measure: "Hard Stop-Loss Configurations",
                    scope:
                      "Automated liquidation parameters deployed instantly to enforce absolute trade exit rules.",
                  },
                  {
                    measure: "Dynamic Position Sizing Models",
                    scope:
                      "Sizing asset allocations as a fixed micro-percentage of overall portfolio net asset value.",
                  },
                  {
                    measure: "Cross-Sector Diversification",
                    scope:
                      "Spreading operations across uncorrelated classes like precious metals, energies, and base modules.",
                  },
                  {
                    measure: "Macro Catalyst Tracking",
                    scope:
                      "Continual analytical scanning of inventory print data logs and global monetary policy releases.",
                  },
                ].map((risk, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3.5 rounded-xl bg-[#0B0E14] border border-[var(--color-border-main)]"
                  >
                    <span className="text-white font-bold font-display block text-sm">
                      {risk.measure}
                    </span>
                    <span className="text-[var(--color-text-secondary)] text-[11px] mt-0.5 block leading-relaxed">
                      {risk.scope}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Feature Matrix Value Props */}
            <div className="p-8 rounded-2xl border border-[rgba(0,255,163,0.15)] bg-gradient-to-br from-[rgba(11,14,20,0.4)] to-transparent space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="badge-green">Apex Infrastructure</span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Why Choose Apex Trade for Commodity Trading India?
                </h3>
                <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                  The Apex Trade infrastructure stack routes strategy models
                  straight into primary domestic clearing blocks with
                  sub-millisecond efficiency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-sans text-[11px] text-[var(--color-text-muted)]">
                  {[
                    "Multi-Market Access Portals",
                    "Real-Time Micro Tick Monitor",
                    "Advanced Math Risk Modules",
                    "Ultra-Fast Liquidity Pipelines",
                    "Ergonomic Order Configuration",
                    "Secure Institutional Settlement",
                  ].map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2 p-2.5 rounded-lg border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--color-accent-green)] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="p-4 rounded-xl border-l-2 border-[var(--color-accent-blue)] bg-[rgba(61,107,255,0.01)] text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                Whether you are exploring commodity asset flows for the first
                time or deploying heavy automated algorithmic execution
                pipelines, Apex Trade equips you with the low-latency parameters
                required to capture modern macro alpha.
              </blockquote>
            </div>
          </div>

          {/* ── SECTION 4: INLINE TERMINAL CALLOUT ── */}
          <div className="glass p-10 md:p-16 rounded-3xl border border-[var(--color-border-main)] bg-gradient-to-tr from-[rgba(19,25,41,0.95)] to-[rgba(11,14,20,0.95)] text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Scale Your Multi-Asset Execution Matrix
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Seamlessly toggle allocation lines between corporate equity
                books and high-liquidity commodity derivative pools on an
                institutional-tier platform designed for elite trading control.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="btn-primary animate-glow px-8 py-3.5 text-sm"
                >
                  Initialize Your Unified Terminal{" "}
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
