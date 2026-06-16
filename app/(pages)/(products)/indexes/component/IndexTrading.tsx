import React from "react";

export default function IndexTrading() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Deep Field Ambient Glows */}
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent-blue)] opacity-[0.03] blur-[160px] rounded-full animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--color-accent-green)] opacity-[0.04] blur-[130px] rounded-full animate-float"
          style={{ animationDelay: "-4s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── HEADER & CORE CONCEPT ── */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="badge-blue">Market Intelligence</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-display mt-3">
              What is <span className="text-gradient-blue">Index Trading?</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] font-sans text-sm md:text-base mt-4 leading-relaxed">
              Index trading involves buying or selling financial instruments
              based on the structural performance of a stock market index.
              Instead of managing complex capital exposures in single isolated
              corporate entities, traders speculate on, or hedge against, the
              systemic trajectory of the broader market macro environments.
            </p>
          </div>

          {/* ── SECTION 1: SYSTEMIC VALUE PROPOSITIONS ── */}
          <div className="mb-24">
            <div className="mb-10">
              <span className="badge-green">Strategic Edge</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display mt-1">
                Why Elite Traders Select Indices
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-xs">
              {[
                {
                  title: "Instant Broad Diversification",
                  desc: "Capture weighted exposures across massive foundational baskets of leading equity constituents through a singular transaction pipeline.",
                },
                {
                  title: "Mitigated Idiosyncratic Risk",
                  desc: "Insulate active capital books against corporate gaps, earnings structural misses, and erratic single-stock management shifts.",
                },
                {
                  title: "Deep Institutional Liquidity",
                  desc: "Execute high-volume orders seamlessly with razor-thin bid-ask spreads, driven by continuous market participant volume.",
                },
                {
                  title: "Global Macro Execution",
                  desc: "Deploy cross-border geographical sector strategies across major international hubs without direct foreign physical equity custody.",
                },
                {
                  title: "Symmetric Directional Flexibility",
                  desc: "Capitalize efficiently on comprehensive market expansions or macroeconomic regime contractions utilizing advanced short-side derivatives.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] hover:bg-[rgba(142,150,165,0.02)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent-blue-light)]" />
                    <h3 className="text-white font-bold font-display text-sm">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 2: THE INDEX COMPENDIUM ARCHITECTURE ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-8">
              <span className="badge-blue">Global Frameworks</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Benchmark Indices
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                An overview of the dominant liquid benchmarks across key
                domestic and international derivative clearing blocks.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-8 font-sans text-xs">
              {/* Domestic Sub-Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-wider text-[var(--color-accent-blue-light)] uppercase font-mono">
                  Domestic Indian Matrices
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      name: "Nifty 50",
                      scope:
                        "Tracks 50 of the largest, highly liquid blue-chip enterprises cleared on the National Stock Exchange (NSE).",
                    },
                    {
                      name: "Sensex",
                      scope:
                        "The foundational 30-stock market-cap-weighted index capturing the absolute core of the Bombay Stock Exchange (BSE).",
                    },
                    {
                      name: "Bank Nifty",
                      scope:
                        "A highly hyper-liquid, high-beta sector matrix tracking the capitalization of dominant domestic banking institutions.",
                    },
                  ].map((ind, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-2"
                    >
                      <span className="text-white font-bold font-display block text-sm">
                        {ind.name}
                      </span>
                      <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                        {ind.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Sub-Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold tracking-wider text-[var(--color-accent-green)] uppercase font-mono">
                  International Liquidity Hubs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "S&P 500",
                      scope:
                        "The definitive proxy for systemic large-cap US equity health, tracking 500 dominant enterprise weights.",
                    },
                    {
                      name: "Nasdaq 100",
                      scope:
                        "A high-beta, tech-heavy index encompassing the absolute vanguard of global innovation and growth sectors.",
                    },
                    {
                      name: "Dow Jones Industrial Average",
                      scope:
                        "One of the oldest price-weighted legacy architectural benchmarks tracking 30 blue-chip industry leaders.",
                    },
                    {
                      name: "FTSE 100 & DAX 40",
                      scope:
                        "Primary Western European capital metrics monitoring the top blue-chip tier of the London and Frankfurt exchanges.",
                    },
                  ].map((ind, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-2"
                    >
                      <span className="text-white font-bold font-display block text-sm">
                        {ind.name}
                      </span>
                      <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                        {ind.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 3: VOLATILITY MECHANICS & MACRO DRIVERS ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 max-w-2xl">
              <span className="badge-green">Valuation Dynamics</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display mt-1">
                Catalysts Influencing Index Pricing Mechanics
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-xs mt-2 leading-relaxed">
                Because an index aggregates a structured portfolio of corporate
                entities, its intraday valuation changes respond directly to
                macro-economic data prints and systemic policy shifts.
              </p>
            </div>

            {/* Custom Interactive Parameter Layout */}
            <div className="glass rounded-2xl border border-[var(--color-border-main)] overflow-hidden bg-[rgba(11,14,20,0.2)] p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-xs">
                {[
                  {
                    title: "Macro Data Metrics",
                    bullets: [
                      "Real GDP growth trajectories",
                      "Core & Headline Inflation logs",
                      "Manufacturing PMI prints",
                    ],
                  },
                  {
                    title: "Monetary Interventions",
                    bullets: [
                      "Central Bank interest rate pivots",
                      "Systemic liquidity injections",
                      "Yield curve adjustments",
                    ],
                  },
                  {
                    title: "Corporate Metrics",
                    bullets: [
                      "Aggregate earnings revisions",
                      "Heavyweight forward guidance",
                      "Sector capitalization balance",
                    ],
                  },
                  {
                    title: "Systemic Sentiment",
                    bullets: [
                      "Geopolitical regime alterations",
                      "Cross-asset risk-on/risk-off cycles",
                      "Institutional capital re-allocations",
                    ],
                  },
                ].map((factor, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-xl border border-[var(--color-border-main)] bg-[#0B0E14]"
                  >
                    <h4 className="text-white font-bold font-display text-sm border-b border-[var(--color-border-main)] pb-2 mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-blue-light)]" />
                      {factor.title}
                    </h4>
                    <ul className="space-y-2 text-[var(--color-text-secondary)] text-[11px]">
                      {factor.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-1.5 leading-relaxed"
                        >
                          <span className="text-[var(--color-accent-green)] font-mono select-none">
                            ›
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FOOTER STATUTORY QUOTE BLOCK ── */}
          <div className="p-6 md:p-8 rounded-2xl border border-[rgba(61,107,255,0.15)] bg-gradient-to-r from-[rgba(11,14,20,0.6)] to-transparent">
            <blockquote className="font-sans text-[11px] text-[var(--color-text-secondary)] leading-relaxed text-center max-w-4xl mx-auto">
              <span className="font-bold text-white font-display block text-xs mb-1">
                Institutional Takeaway
              </span>
              Indices serve effectively as both the comprehensive barometer of
              total economic health and a high-efficiency execution target.
              Mastery of index price structures allows modern market
              participants to extract alpha from macro movements while running
              strict, mathematical risk architecture parameters.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
