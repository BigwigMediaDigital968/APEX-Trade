import Link from "next/link";

export default function StockContent() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Decorative Light Injections */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent-blue)] opacity-[0.04] blur-[160px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[var(--color-accent-green)] opacity-[0.03] blur-[130px] rounded-full animate-float"
          style={{ animationDelay: "-1.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── HERO HEADER SECTOR ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Multi-Market Equities</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                Apex Trade for{" "}
                <span className="text-gradient-blue">Stocks</span>
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                Invest in Indian and Global Markets from a Single Unified
                Platform.
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-sans">
                Online stock trading in India has undergone massive structural
                evolution. At Apex Trade, we eliminate geographical barriers,
                giving you native{" "}
                <Link
                  href="/trading"
                  className="text-indigo-600 hover:text-white"
                >
                  trading
                </Link>{" "}
                pipelines into local and cross-border equity channels. Whether
                your strategy targets micro-duration intraday allocations or
                structural multi-decade compounding, our node routing engine
                executes with identical elite stability.
              </p>
            </div>

            {/* Quick Live Exchange Router Mock Component */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] space-y-4">
                <div className="flex justify-between items-center font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase">
                  <span>Exchange Mesh Network</span>
                  <span className="text-[var(--color-accent-green)] animate-pulse">
                    ● Connected
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 font-mono text-xs text-white">
                  <div className="p-3 rounded-lg bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)]">
                    <div className="text-[10px] text-[var(--color-text-muted)]">
                      DOMESTIC
                    </div>
                    <div className="font-bold pt-0.5">NSE / BSE</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)]">
                    <div className="text-[10px] text-[var(--color-text-muted)]">
                      INTERNATIONAL
                    </div>
                    <div className="font-bold pt-0.5">NASDAQ / NYSE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 1: VALUE PROPOSITION VALUES ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Infrastructure Layer</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Why Choose Apex Trade for Stock Trading?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Real-Time Market Data",
                  desc: "Monitor institutional-grade live quotes across global books with advanced technical analysis mapping tools.",
                },
                {
                  title: "Ultra-Fast Execution",
                  desc: "Reduce slippage with lightning order routing engineered for high volume data spikes.",
                },
                {
                  title: "Global Stock Portals",
                  desc: "Access the absolute best of NSE, BSE, NASDAQ, and premium international matching engines.",
                },
                {
                  title: "Advanced Analytical Tools",
                  desc: "Deconstruct trends via built-in math indicators, custom alerts, and cloud-hosted data scanners.",
                },
                {
                  title: "Optimized Fee Structure",
                  desc: "Retain your strategy's alpha with an ultra-competitive, ultra-transparent pricing model.",
                },
                {
                  title: "Dedicated Support Desk",
                  desc: "Instant access to clear, technically literate clearing professionals whenever markets are live.",
                },
              ].map((perf, pIdx) => (
                <div
                  key={pIdx}
                  className="glass p-6 rounded-xl border-[var(--color-border-main)] card-hover space-y-3"
                >
                  <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                    {perf.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    {perf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 2: FUNDAMENTALS & TRADING MODALITIES ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="lg:col-span-5 space-y-5">
              <span className="badge-blue">Core Education</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                What is Stock Trading?
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Stock trading is the structured transaction of corporate
                fractional shares to extract value from dynamic price
                fluctuations. When you acquire a stock unit, you hold an{" "}
                <Link
                  href="/equity-trading"
                  className="text-indigo-600 hover:text-white"
                >
                  equity
                </Link>{" "}
                stake in that underlying corporate framework, validating your
                claim on its physical expansion.
              </p>
              <blockquote className="p-4 rounded-xl border-l-2 border-[var(--color-accent-green)] bg-[rgba(0,255,163,0.01)] text-xs font-sans text-[var(--color-text-muted)] leading-relaxed">
                Mastering the specific structural variations between equity
                profiles allows market actors to choose execution frameworks
                that safely align with individual portfolio risk ceilings.
              </blockquote>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
              {[
                {
                  title: "Intraday Strategy Setup",
                  scope: "Session Momentum",
                  note: "Positions closed out entirely inside the daily trading block to exploit high frequency micro-trends.",
                },
                {
                  title: "Swing Allocation Channels",
                  scope: "Multi-Day Horizons",
                  note: "Holding asset parcels across multi-session timeframes to capture short-to-medium cyclical swings.",
                },
                {
                  title: "Positional Structural Trades",
                  scope: "Macro Trajectories",
                  note: "Sustaining core market presence over several months to realize large-scale underlying technical transformations.",
                },
                {
                  title: "Long-Term Equity Compounding",
                  scope: "Structural Investing",
                  note: "Strategic permanent accumulation targeting balance sheets with multi-year fundamental alpha generation.",
                },
              ].map((style, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-white font-bold font-display text-sm">
                      {style.title}
                    </h4>
                    <span className="font-mono text-[9px] uppercase text-[var(--color-accent-blue-light)] bg-[rgba(61,107,255,0.05)] border border-[rgba(61,107,255,0.1)] px-2 py-0.5 rounded">
                      {style.scope}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                    {style.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: ASSET CLASSIFICATION MATRIX ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2 text-center">
              <span className="badge-green">Taxonomy</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Understanding Different Types of Stocks
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm max-w-2xl mx-auto">
                Markets are highly fragmented landscapes. Structuring broad
                diversification requires cataloging companies into proper risk
                and scale categories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-xs">
              {[
                {
                  category: "Blue Chip Stocks",
                  metric: "Track-Record Stability",
                  desc: "Long-established entities characterized by bulletproof balance sheets and predictable global metrics.",
                },
                {
                  category: "Large Cap Stocks",
                  metric: "Market Presence Dominance",
                  desc: "Heavyweight market capitalization blocks representing structurally vital sector flagships.",
                },
                {
                  category: "Mid Cap Stocks",
                  metric: "Aggressive Growth Vectors",
                  desc: "Mid-scale operators executing vertical expansions, optimizing return-to-risk cross-sections.",
                },
                {
                  category: "Small Cap Stocks",
                  metric: "High Volatility Horizons",
                  desc: "Emerging enterprise nodes introducing amplified performance scaling upside mixed with higher risk profiles.",
                },
                {
                  category: "Growth Stocks",
                  metric: "Capital Expansion Priority",
                  desc: "Enterprises focusing structural profits into business reinjection over near-term payouts.",
                },
                {
                  category: "Value Stocks",
                  metric: "Intrinsic Disconnects",
                  desc: "Securities trading at steep technical discounts relative to audited real-world assets.",
                },
                {
                  category: "Dividend Stocks",
                  metric: "Liquidity Payout Focus",
                  desc: "Mature cash-flow structures maintaining steady programmatic profit distribution cycles back to holders.",
                },
              ].map((typology, tIdx) => (
                <div
                  key={tIdx}
                  className="p-4 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] hover:border-[rgba(0,255,163,0.15)] transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <span className="font-mono text-[9px] text-[var(--color-accent-green)] block mb-1">
                      // {typology.metric}
                    </span>
                    <h4 className="text-white font-bold font-display text-sm">
                      {typology.category}
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                    {typology.desc}
                  </p>
                </div>
              ))}

              {/* Decorative Terminal Visualizer to complete an 8-grid alignment */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[rgba(61,107,255,0.05)] to-transparent border border-[rgba(61,107,255,0.1)] flex flex-col justify-between font-mono text-[10px] text-[var(--color-text-muted)]">
                <div>SYSTEM_MATRIX</div>
                <div className="text-white font-sans text-xs">
                  Ready for allocation optimization.
                </div>
                <div>SEC_REG_COMPLIANT</div>
              </div>
            </div>
          </div>

          {/* ── SECTION 4: DEPLOYMENT CONVERSION CALL ── */}
          <div className="glass p-10 md:p-16 rounded-3xl border border-[rgba(61,107,255,0.2)] bg-gradient-to-br from-[rgba(11,14,20,0.95)] via-[rgba(15,20,32,0.9)] to-[rgba(19,25,41,0.95)] text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Trade Smarter with Apex Trade
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Whether you are exploring global asset models for the first time
                or migrating a sophisticated automated architecture, Apex Trade
                provides the low-latency pipelines and clearing environments to
                scale your operations safely.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="btn-primary animate-glow px-8 py-3.5 text-sm"
                >
                  Initialize Your Trading Account{" "}
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
