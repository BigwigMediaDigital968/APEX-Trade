import Link from "next/link";

export default function StockAbout() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Dynamic Light Fields */}
        <div
          className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[var(--color-accent-blue)] opacity-[0.04] blur-[140px] rounded-full animate-float"
          style={{ animationDelay: "-1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[var(--color-accent-green)] opacity-[0.03] blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: PRICE MECHANICS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-blue">Market Dynamics</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
                How Stock Prices{" "}
                <span className="text-gradient-blue">Change</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed font-sans">
                Equity valuations are fluid equilibrium points driven by
                real-time micro and macro forces. Price exploration relies
                heavily on the matching of order book supply against demand
                blocks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                {[
                  {
                    label: "Corporate Earnings",
                    details:
                      "Direct correlation with fundamental performance, revenue curves, and guidance statements.",
                  },
                  {
                    label: "Macro Economics",
                    details:
                      "Broad structural impacts stemming from interest rate shifts, CPI inflation data, and liquidity levels.",
                  },
                  {
                    label: "Industry Vectors",
                    details:
                      "Regulatory changes, sector-specific tailwinds, and disruptive technological iterations.",
                  },
                  {
                    label: "Sentiment & Geopolitics",
                    details:
                      "Global macro conditions, geopolitical safety plays, and underlying market sentiment metrics.",
                  },
                ].map((factor, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)]"
                  >
                    <h4 className="text-white font-bold font-display mb-1 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-accent-green)]" />
                      {factor.label}
                    </h4>
                    <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed">
                      {factor.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Order Book Match Visualizer */}
            <div className="lg:col-span-6">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] font-mono text-xs space-y-4">
                <div className="flex justify-between items-center text-[10px] text-[var(--color-text-muted)] tracking-wider">
                  <span>REAL-TIME ENGINE MATCH</span>
                  <span className="text-[var(--color-accent-blue-light)]">
                    ORDER BALANCE
                  </span>
                </div>
                <div className="space-y-2 text-[11px]">
                  <div className="p-2.5 rounded bg-[rgba(255,70,70,0.04)] border border-[rgba(255,70,70,0.1)] flex justify-between text-red-400">
                    <span>Ask Total (Liquidity Pools)</span>
                    <span>1,480.50 INR</span>
                  </div>
                  <div className="p-2.5 rounded bg-[rgba(0,255,163,0.04)] border border-[rgba(0,255,163,0.1)] flex justify-between text-[var(--color-accent-green)]">
                    <span>Bid Total (Demand Aggregations)</span>
                    <span>1,480.45 INR</span>
                  </div>
                </div>
                <p className="text-[11px] font-sans text-[var(--color-text-secondary)] leading-relaxed pt-2 border-t border-[var(--color-border-main)]">
                  Professional market operators use a combination of structured
                  quantitative metrics and precise chart blueprints to target
                  profitable entries within these balance shifts.
                </p>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: CORE CONCEPTS GLOSSARY ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Foundational Layer</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Essential Concepts Every Trader Should Know
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Demat Infrastructure",
                  label: "Electronic Custody",
                  desc: "A structural node that dematerializes physical shares, providing bulletproof digital storage and enabling frictionless trading loops.",
                },
                {
                  title: "NSE vs BSE Framework",
                  label: "Primary Exchange Nodes",
                  desc: "The National Stock Exchange and Bombay Stock Exchange form India's core electronic clearing houses, matching massive multi-company order books.",
                },
                {
                  title: "Dividend Allocations",
                  label: "Corporate Yield Payouts",
                  desc: "Proportional liquidity distributions routed straight from corporate net capital surpluses directly back to fractional equity holders.",
                },
                {
                  title: "Systemic Stop Loss Orders",
                  label: "Automated Risk Boundary",
                  desc: "A critical automation protocol that shields trading capital profiles by auto-liquidating position exposures at a strict predefined price ceiling.",
                },
                {
                  title: "Global Trading Timelines",
                  label: "Exchange Session Windows",
                  desc: "Domestic Indian markets map to strict localized daytime trading windows, whereas cross-border models like the US operate on independent temporal grids.",
                },
              ].map((concept, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-xl border-[var(--color-border-main)] card-hover flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent-blue-light)] bg-[rgba(61,107,255,0.05)] border border-[rgba(61,107,255,0.1)] px-2 py-0.5 rounded">
                      {concept.label}
                    </span>
                    <h3 className="text-base font-bold text-white font-display pt-1">
                      {concept.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                      {concept.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: ANALYTICAL METHODOLOGIES ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-[var(--color-border-main)] pt-10 mb-10">
            {/* Fundamental Framework */}
            <div className="p-8 rounded-2xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-6">
              <div className="space-y-2">
                <span className="badge-blue">Quantitative</span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Fundamental Analysis
                </h3>
                <p className="text-[var(--color-text-muted)] font-sans text-xs leading-relaxed">
                  Decouples asset pricing from speculative noise by deep-diving
                  into structural balance sheets, cash generation velocity, and
                  underlying microeconomic stability indices.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs">
                {[
                  {
                    metric: "Price-to-Earnings Ratio (P/E)",
                    use: "Measures structural valuation density against trailing profitability metrics.",
                  },
                  {
                    metric: "Return on Equity (ROE)",
                    use: "Calculates the structural operational efficiency of utilized shareholder capital loops.",
                  },
                  {
                    metric: "Earnings & Revenue Curves",
                    use: "Tracks historical acceleration benchmarks across multi-quarter reporting nodes.",
                  },
                  {
                    metric: "Debt-to-Equity Structures",
                    use: "Assesses leverage health and long-term solvency profiles under stress scenarios.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0B0E14] border border-[var(--color-border-main)] flex flex-col sm:flex-row sm:justify-between gap-1"
                  >
                    <span className="text-white font-semibold font-display">
                      {item.metric}
                    </span>
                    <span className="text-[var(--color-text-secondary)] text-[11px] max-w-xs sm:text-right">
                      {item.use}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Framework */}
            <div className="p-8 rounded-2xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-6">
              <div className="space-y-2">
                <span className="badge-green">Mathematical</span>
                <h3 className="text-2xl font-bold text-white font-display">
                  Technical Analysis
                </h3>
                <p className="text-[var(--color-text-muted)] font-sans text-xs leading-relaxed">
                  Maps historical tape changes, price-action velocities, and
                  structural volume distributions to identify repeatable
                  mathematical momentum configurations.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs">
                {[
                  {
                    metric: "Algorithmic Moving Averages",
                    use: "Smooths high frequency price variance data points to isolate structural macro trends.",
                  },
                  {
                    metric: "Relative Strength Index (RSI)",
                    use: "A bound oscillator measuring acceleration rates to identify over-extended positions.",
                  },
                  {
                    metric: "MACD Convergence Matrix",
                    use: "Tracks relationships between localized exponential trends to pinpoint cycle pivots.",
                  },
                  {
                    metric: "Support & Resistance Nodes",
                    use: "Pinpoints high-volume order block zones where heavy liquidity changes occur.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0B0E14] border border-[var(--color-border-main)] flex flex-col sm:flex-row sm:justify-between gap-1"
                  >
                    <span className="text-white font-semibold font-display">
                      {item.metric}
                    </span>
                    <span className="text-[var(--color-text-secondary)] text-[11px] max-w-xs sm:text-right">
                      {item.use}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SECTION 4: CONVERSION CALLOUT PANELS ── */}
          <div className="glass p-10 md:p-16 rounded-3xl border border-[rgba(0,255,163,0.15)] bg-gradient-to-br from-[rgba(19,25,41,0.95)] via-[rgba(15,20,32,0.9)] to-[rgba(11,14,20,0.95)] relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4 text-left">
                <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                  Buy Stocks Online with Apex Trade
                </h2>
                <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                  Access institutional execution lines for both domestic Indian
                  corporate entities and major cross-border global asset
                  portfolios. Benefit from direct routing pipelines, live tick
                  feeds, and optimized risk-mitigation layers built entirely
                  from the ground up for elite operators.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 font-sans text-[11px] text-[var(--color-text-secondary)]">
                  {[
                    "Global Equities Access",
                    "Real-Time Insight Engines",
                    "Advanced Clearing Infrastructure",
                    "Ultra-Fast Liquidity Settlement",
                  ].map((benefit, bIdx) => (
                    <span
                      key={bIdx}
                      className="bg-[rgba(142,150,165,0.03)] border border-[var(--color-border-main)] px-3 py-1 rounded-full flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--color-accent-blue-light)]" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 text-center lg:text-right">
                <Link
                  href="/contact-us"
                  className="btn-primary animate-glow px-8 py-4 text-sm w-full lg:w-auto"
                >
                  Initialize Trading Terminal{" "}
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
