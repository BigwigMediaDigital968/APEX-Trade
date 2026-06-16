import React from "react";

export default function EquityTrading() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Ambient Blurred Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-blue)] opacity-[0.06] blur-[120px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-[var(--color-accent-green)] opacity-[0.03] blur-[140px] rounded-full animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: CORE DEFINITION HERO ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Spot Markets</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                What is{" "}
                <span className="text-gradient-blue">Equity Trading</span>?
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                Equity trading refers to buying and selling shares of publicly
                listed companies through a stock exchange — in India, primarily
                the <span className="text-white font-semibold">NSE</span> and{" "}
                <span className="text-white font-semibold">BSE</span>. When you
                buy a share, you own a small part of that company.
              </p>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-sans">
                At its core, it is the process of participating in a company's
                growth (or decline) by trading ownership stakes to profit from
                changes in share price. Whether your goal is short-term trading
                on daily price movements or building a long-term portfolio of
                quality stocks, equity trading forms the absolute foundation of
                the market journey.
              </p>
              <div className="pt-2">
                <button className="btn-primary animate-glow">
                  Explore Equity Spot <span className="typing-cursor"></span>
                </button>
              </div>
            </div>

            {/* Simulated Live Order-Book UI Widget */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] card-hover space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span>NSE Spot Execution Engine</span>
                  <span className="profit flex items-center gap-1">
                    ● Fully Settled
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center p-2.5 rounded bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)]">
                    <span className="text-[var(--color-text-secondary)]">
                      Exchange Routers
                    </span>
                    <span className="text-white font-bold">
                      NSE / BSE Direct
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded bg-[rgba(0,255,163,0.04)] border border-[rgba(0,255,163,0.15)]">
                    <span className="text-[var(--color-text-secondary)]">
                      Delivery Allocation
                    </span>
                    <span className="profit font-bold">Demat Credit (T+1)</span>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)]">
                    <span className="text-[var(--color-text-secondary)]">
                      Clearing Agency
                    </span>
                    <span className="text-[var(--color-accent-blue-light)] font-bold">
                      SEBI Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: MECHANICS / HOW IT WORKS ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Market Architecture</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                How Equity Trading Works
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Understanding the underlying mechanics helps you trade with
                absolute operational confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1: Buying and Selling */}
              <div className="glass p-8 rounded-2xl border-[var(--color-border-main)] card-hover flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[var(--color-accent-blue-light)]">
                    // ROUTING_ENGINE
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    Buying & Selling Shares
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    When you place a buy order for a stock, you are agreeing to
                    purchase shares at a specific price. Selling works in
                    reverse — you exchange your shares for cash at the
                    prevailing market rate. Every single trade is matched
                    cleanly through the exchange to ensure clearing security.
                  </p>
                </div>
              </div>

              {/* Box 2: Intraday vs Delivery */}
              <div className="glass-blue p-8 rounded-2xl border-[rgba(61,107,255,0.25)] card-hover flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[var(--color-accent-green)]">
                    // HORIZON_MODES
                  </span>
                  <h3 className="text-xl font-bold text-white font-display text-gradient-green">
                    Intraday vs Delivery
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    Intraday equity trading means executing trades within a
                    single session — squaring off completely before the closing
                    bell. Delivery trading means holding your shares directly
                    inside your demat account across long horizons for
                    sustainable wealth growth.
                  </p>
                </div>
              </div>

              {/* Box 3: Market Structure */}
              <div className="glass p-8 rounded-2xl border-[var(--color-border-main)] card-hover flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[var(--color-text-muted)]">
                    // ASSET_INDEXING
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    India's Market Structure
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    Operating through the NSE and BSE, stocks are meticulously
                    organized into standardized market caps (large-cap, mid-cap,
                    small-cap) and core sectoral frameworks (banking, IT,
                    pharma, energy), presenting diversified entry vectors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 3: VALUE PROPOSITION (WHY APEXTRADE) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-10 border-t border-[var(--color-border-main)] pt-20">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-8">
              <span className="badge-blue">The Apex Advantage</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Why Trade Equity on{" "}
                <span className="text-gradient-blue">ApexTrade</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Execution speeds, absolute brokerage costs, and analytics depth
                compound over time. ApexTrade provides the precision
                infrastructure required to protect retail portfolio yields.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "Direct Exchange Connectivity",
                  desc: "Sub-millisecond data pipes to NSE/BSE mean your spot market execution requests reach central matching books without artificial platform latency loops.",
                },
                {
                  title: "Ultra-Low Brokerage Structure",
                  desc: "Our aggressive cost architecture ensures your net profitability remains inside your ledger balances instead of getting eaten away by friction.",
                },
                {
                  title: "Smart Portfolio Tracking System",
                  desc: "Unlock an instant, completely unified macro view of your long-term spot positions, active cash flows, floating yields, and historic loss parameters.",
                },
                {
                  title: "Advanced Technical Analytics",
                  desc: "Isolate high-velocity market trends across broad sectoral indexes and specific tickers ahead of the crowd with integrated analytical modeling dashboards.",
                },
                {
                  title: "High-Volume Performance Stability",
                  desc: "Institutional-grade cloud scaling ensures our online stock trading platform in India remains responsive and execution-stable during massive systemic volatility.",
                },
              ].map((value, vIdx) => (
                <div
                  key={vIdx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)] hover:border-[rgba(61,107,255,0.25)] transition-all"
                >
                  <span className="text-[var(--color-accent-blue-light)] font-mono text-sm font-bold mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-white font-display text-sm font-bold">
                      {value.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs mt-1 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 4: STEP-BY-STEP ONBOARDING ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="badge-green">Onboarding Path</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                How to Start Equity Trading
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Initiate your connection to live Indian spot markets in just a
                few clicks.
              </p>
            </div>

            {/* Structured Process Flow Mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  label: "01",
                  title: "Account Matrix",
                  desc: "Open your unified ApexTrade trading and secure demat account entirely online.",
                },
                {
                  label: "02",
                  title: "KYC Compliance",
                  desc: "Complete your standard regulatory identification validation workflows seamlessly.",
                },
                {
                  label: "03",
                  title: "Fund Interface",
                  desc: "Instantly route capital liquidities to your central execution trading ledger.",
                },
                {
                  label: "04",
                  title: "Search Assets",
                  desc: "Locate target corporate symbols utilizing real-time native exchange data feeds.",
                },
                {
                  label: "05",
                  title: "Configure Order",
                  desc: "Choose cleanly between high-speed intraday adjustments or holding for delivery.",
                },
                {
                  label: "06",
                  title: "Track Portfolio",
                  desc: "Monitor your overall compounding returns utilizing Smart Portfolio Tracking modules.",
                },
              ].map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="glass p-6 rounded-xl border-[var(--color-border-main)] relative group hover:border-[rgba(0,255,163,0.2)] transition-all"
                >
                  <div className="absolute right-4 top-4 font-mono font-bold text-xs text-[var(--color-accent-green)]">
                    {step.label}
                  </div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Advice Warning Alert Footing */}
            <div className="glass p-8 rounded-2xl border border-[rgba(142,150,165,0.1)] text-center max-w-3xl mx-auto">
              <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                <span className="text-white font-bold block mb-1">
                  💡 Professional Operational Strategy:
                </span>
                For traders new to equity markets, focus on building deep
                familiarity with a few core stocks or sectors before expanding
                your parameters. Understanding price adjustments, transactional
                volumes, and micro company fundamentals over time leads to far
                better decisions than chasing every single market move.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary animate-glow">
                  Open Account Now
                </button>
                <button className="btn-secondary">View Margin Metrics</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
