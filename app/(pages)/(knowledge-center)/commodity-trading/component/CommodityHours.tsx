import Link from "next/link";
import React from "react";

export default function CommodityHours() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Ambient Structural Lighting */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-blue)] opacity-[0.05] blur-[130px] rounded-full animate-float"
          style={{ animationDelay: "-1.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-[var(--color-accent-green)] opacity-[0.02] blur-[160px] rounded-full animate-float"
          style={{ animationDelay: "-4.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: TIMING MATRIX INTERFACE ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">
            <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-4">
              <span className="badge-blue">Extended Sessions</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
                Commodity Trading{" "}
                <span className="text-gradient-blue">Hours in India</span>
              </h1>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                One of the most structural advantages of commodity derivative
                markets is their operating window. Extending deep past domestic
                equity closing bells, it allows active participants to trade
                global macroeconomic volatility long after their regular workday
                concludes.
              </p>

              <div className="glass p-5 rounded-xl border-[rgba(61,107,255,0.15)] bg-[rgba(61,107,255,0.02)]">
                <p className="text-[var(--color-text-muted)] font-sans text-xs leading-relaxed">
                  <strong className="text-white">
                    💡 Quantitative Insight:
                  </strong>{" "}
                  Most experienced volume traders concentrate strictly on the
                  evening sessions. That is when US asset markets go live, major
                  western economic data prints drop, and global price discovery
                  peaks.
                </p>
              </div>
            </div>

            {/* Timings Layout Matrix */}
            <div className="lg:col-span-7 glass rounded-2xl border-[var(--color-border-main)] overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 p-4 bg-[rgba(142,150,165,0.02)] border-b border-[var(--color-border-main)] font-mono text-[11px] text-[var(--color-text-muted)] uppercase tracking-wider">
                <div className="col-span-4">Market Segment</div>
                <div className="col-span-4">Timing Window (IST)</div>
                <div className="col-span-4">Operational Architecture</div>
              </div>

              <div className="divide-y divide-[var(--color-border-main)] text-xs font-sans">
                {[
                  {
                    segment: "Non-Agri Derivatives",
                    time: "9:00 AM – 11:30 PM",
                    note: "Extends smoothly to 11:55 PM during US Daylight Saving Time (DST) months.",
                    accent: true,
                  },
                  {
                    segment: "Agricultural Commodities",
                    time: "9:00 AM – 9:00 PM",
                    note: "Slightly compressed transactional session for domestic agri products.",
                    accent: false,
                  },
                  {
                    segment: "Peak Liquidity Horizon",
                    time: "6:30 PM – 11:30 PM",
                    note: "US macro markets open. Highest daily volume depth and absolute price discovery.",
                    accent: true,
                  },
                  {
                    segment: "Standard Trading Days",
                    time: "Monday to Friday",
                    note: "Closed systematically on national weekends and official exchange clearing holidays.",
                    accent: false,
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 sm:grid-cols-12 p-5 items-center gap-2 sm:gap-4 hover:bg-[rgba(142,150,165,0.01)] transition-colors"
                  >
                    <div className="col-span-4 font-display font-bold text-white text-sm sm:text-xs">
                      {row.segment}
                    </div>
                    <div
                      className={`col-span-4 font-mono font-bold ${row.accent ? "text-[var(--color-accent-blue-light)]" : "text-[var(--color-text-secondary)]"}`}
                    >
                      {row.time}
                    </div>
                    <div className="col-span-4 text-[var(--color-text-muted)] leading-relaxed text-[11px]">
                      {row.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SECTION 2: CORE INSTRUMENT FOCUS CARDS ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Core Instruments</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                The Commodities Most Traders Actually Focus On
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                While dozens of resource contracts are active on MCX, retail
                liquidity concentrates within four primary products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "MCX Gold / Gold Mini",
                  spec: "Margin Req: ~4-6% | High Liquidity",
                  desc: "The standard baseline for precious metal indices. Tends to appreciate during global systemic stress or dollar weakness. Highly structured, making it relatively cleaner to parse for developing technical systems.",
                },
                {
                  title: "MCX Silver / Silver Mini",
                  spec: "Aggressive Beta | Volatility Play",
                  desc: "Exhibits greater intraday percentage velocity than gold. Leverages smaller underlying contract multipliers. Professional accounts watch the gold-to-silver ratio closely to identify relative value anomalies.",
                },
                {
                  title: "MCX Crude Oil / Crude Mini",
                  spec: "India's Most Active Contract",
                  desc: (<>Provides heavy <Link
                      href="/intraday-trading"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >intraday trading</Link> channels. Highly responsive to immediate OPEC supply adjustments and weekly US EIA inventory data loops. Crude Mini (10 barrels) serves as the primary instrument for retail sizing.</>),
                },
                {
                  title: "MCX Natural Gas",
                  spec: "Extreme Intraday Swings",
                  desc: "Driven by high-velocity US weather patterns and local storage prints. Offers substantial alpha rewards if direction is read correctly, matched with equal downside risk. Recommended primarily for seasoned traders.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl border-[var(--color-border-main)] card-hover flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg font-bold text-white font-display">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[var(--color-accent-green)] border border-[rgba(0,255,163,0.2)] bg-[rgba(0,255,163,0.02)] px-2 py-0.5 rounded">
                        {item.spec}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: STRATEGIC METHODOLOGY GRID ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-blue">Tactical Frameworks</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Common Operational Approaches
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Systematic methodologies implemented to capture alpha variations
                across commodity asset vectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  type: "Trend Following",
                  icon: "📈",
                  desc: "Utilizing 50-day and 200-day moving averages to follow multi-week directional cycles—highly effective during structural crude expansions.",
                },
                {
                  type: "Range Trading",
                  icon: "↔",
                  desc: "Deploying oscillators during macro consolidation phases, buying clear support floors and shorting overhead resistance profiles.",
                },
                {
                  type: "Event Trading",
                  icon: "⚡",
                  desc: "Positioning around known volatility nodes like Wednesday EIA storage data, US non-farm payroll updates, or specific OPEC assemblies.",
                },
                {
                  type: "Gap Trading",
                  icon: "⇿",
                  desc: "Analyzing over-the-weekend global news flow continuations at the Monday morning bell to track or fade structural opening price imbalances.",
                },
                {
                  type: "Commercial Hedging",
                  icon: "🛡",
                  desc: "Physical supply chain operators locking in absolute operational costs (e.g. industrial consumers fixing base metal parameters).",
                },
              ].map((strat, idx) => (
                <div
                  key={idx}
                  className="glass p-5 rounded-xl border-[var(--color-border-main)] hover:border-[rgba(61,107,255,0.2)] transition-all space-y-3"
                >
                  <div className="text-xl">{strat.icon}</div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {strat.type}
                  </h4>
                  <p className="text-[var(--color-text-secondary)] font-sans text-[11px] leading-relaxed">
                    {strat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl border border-[rgba(255,70,70,0.15)] bg-[rgba(255,70,70,0.02)] max-w-2xl mx-auto text-center">
              <p className="text-[var(--color-text-secondary)] font-sans text-xs">
                ⚠️ <strong className="text-white">Risk Core Principle:</strong>{" "}
                Leverage cuts symmetrically both ways. Never execute positions
                without a hard systemic stop-loss, and strictly limit your
                absolute risk parameters to{" "}
                <span className="text-white font-bold">
                  1–2% of net liquid equity capital
                </span>{" "}
                on any single setup.
              </p>
            </div>
          </div>

          {/* ── SECTION 4: PLATFORM SPECIFICS & ONBOARDING FLUIDITY ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[var(--color-border-main)] pt-10">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="badge-green">Infrastructure Architecture</span>
                <h2 className="text-3xl font-bold text-white font-display tracking-tight mt-2">
                  Why Trade Commodities on{" "}
                  <span className="text-gradient-green">ApexTrade</span>
                </h2>
                <p className="text-[var(--color-text-muted)] font-sans text-xs mt-1">
                  Our custom execution layer bridges direct physical market
                  tracking with clean terminal reliability.
                </p>
              </div>

              <div className="space-y-4 font-sans text-xs">
                {[
                  {
                    label: "Native MCX Pricing Tunnels",
                    text: "Real-time, direct exchange-linked data routing ensures razor-thin execution spreads closely mapping live underlying cash values.",
                  },
                  {
                    label: "Sub-Millisecond Order Routing",
                    desc: "High-speed multi-threaded infrastructure designed to protect position entries against unexpected inventory slip-backs.",
                  },
                  {
                    label: "Continuous Multi-Asset Ledger",
                    desc: "Seamlessly cross-margin your positions across equities and late-evening energy contracts using a single unified pool account balance.",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-[var(--color-accent-green)] font-bold">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-white font-bold font-display">
                        {feature.label}
                      </h4>
                      <p className="text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                        {feature.text || feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured Onboarding Track */}
            <div className="lg:col-span-6">
              <div className="glass p-8 rounded-2xl border-[var(--color-border-main)] relative bg-gradient-to-br from-[rgba(15,20,32,0.4)] to-[rgba(11,14,20,0.6)]">
                <h3 className="text-base font-bold text-white font-display mb-6 uppercase tracking-wider text-[var(--color-accent-blue-light)]">
                  // Execution Workstream
                </h3>

                <div className="space-y-4 font-sans text-xs">
                  {[
                    {
                      step: "01",
                      title: "Digital KYC Sync",
                      details:
                        "Onboard your profile instantly with fully automated e-KYC integration steps.",
                    },
                    {
                      step: "02",
                      title: "Liquidity Interface",
                      details:
                        "Fund your centralized clearing account. Deploy sub-lots via accessible Mini contracts.",
                    },
                    {
                      step: "03",
                      title: "Asset Selection",
                      details:
                        "Isolate liquid instruments like Gold Mini or Crude Mini directly within your watchlist panels.",
                    },
                    {
                      step: "04",
                      title: "Risk Boundary Setup",
                      details:
                        "Review historical chart configurations, cross-check the global data calendar, and deploy your order with strict stop boundaries.",
                    },
                  ].map((flow, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-center p-2.5 rounded-lg border border-[rgba(142,150,165,0.03)] bg-[rgba(142,150,165,0.01)]"
                    >
                      <span className="font-mono text-xs font-bold text-[var(--color-text-muted)] bg-[rgba(142,150,165,0.05)] w-7 h-7 rounded flex items-center justify-center shrink-0">
                        {flow.step}
                      </span>
                      <div>
                        <h5 className="text-white font-bold">{flow.title}</h5>
                        <p className="text-[var(--color-text-muted)] text-[11px] mt-0.5">
                          {flow.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border-main)]">
                  <Link
                    href="/contact-us"
                    className="btn-primary animate-glow w-full text-center text-xs py-3"
                  >
                    Initialize Real-Time Commodity Pipeline
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
