import React from "react";

export default function OptionTrading() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Decorative Theme Elements */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[var(--color-accent-blue)] opacity-[0.07] blur-[120px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-accent-green)] opacity-[0.04] blur-[140px] rounded-full animate-float"
          style={{ animationDelay: "-2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── HERO BANNER: DERIVATIVES INTRO ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Derivatives Market</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                What is{" "}
                <span className="text-gradient-blue">Futures & Options</span>{" "}
                Trading?
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                Futures and Options Trading involves derivative contracts whose
                value is based on an underlying asset such as stocks, indices,
                commodities, or currencies.
              </p>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-sans">
                Unlike traditional investing, traders can take positions based
                on expected price movements without owning the underlying asset.
                This makes F&O trading a preferred choice for active traders
                seeking flexibility, leverage, and strategic market exposure.
              </p>
              <div className="p-4 rounded-xl border border-[var(--color-border-blue)] bg-[rgba(61,107,255,0.05)] text-sm text-[var(--color-text-secondary)] font-sans">
                Through <strong className="text-white">Apex Trade</strong>,
                traders can access India's derivatives market using a modern
                platform built for speed, efficiency, and informed
                decision-making.
              </div>
            </div>

            {/* Simulated Live Derivatives Interface */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] card-hover space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span>Option Chain Snippet</span>
                  <span className="profit flex items-center gap-1">
                    ● Active <span className="typing-cursor"></span>
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="grid grid-cols-3 text-center text-[var(--color-text-muted)] border-b border-[var(--color-border-main)] pb-2">
                    <span>CALL (OI)</span>
                    <span>STRIKE</span>
                    <span>PUT (OI)</span>
                  </div>
                  <div className="grid grid-cols-3 text-center py-1.5 bg-[rgba(142,150,165,0.02)] rounded">
                    <span className="profit">2.4M</span>
                    <span className="text-white font-bold">22000 CE</span>
                    <span className="text-[var(--color-text-muted)]">890K</span>
                  </div>
                  <div className="grid grid-cols-3 text-center py-1.5 bg-[rgba(61,107,255,0.06)] border border-[rgba(61,107,255,0.2)] rounded">
                    <span className="text-[var(--color-text-muted)]">1.1M</span>
                    <span className="text-[var(--color-accent-blue-light)] font-bold">
                      22100 ATM
                    </span>
                    <span className="profit">1.9M</span>
                  </div>
                  <div className="grid grid-cols-3 text-center py-1.5 bg-[rgba(142,150,165,0.02)] rounded">
                    <span className="text-[var(--color-text-muted)]">450K</span>
                    <span className="text-white font-bold">22200 PE</span>
                    <span className="profit">3.1M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── TWO COLUMN COMPARISON: FUTURES VS OPTIONS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* Futures Column */}
            <div className="glass p-8 rounded-2xl border-[var(--color-border-main)] card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[var(--color-accent-blue-light)] tracking-widest uppercase">
                  Agreement Model
                </span>
                <h2 className="text-2xl font-bold text-white font-display">
                  Understanding Futures Contracts
                </h2>
                <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                  A futures contract is an agreement to buy or sell an asset at
                  a predetermined price on a future date. Since contracts are
                  standardized and actively traded, they provide a transparent
                  roadmap to track movements.
                </p>

                <div className="pt-4 space-y-2.5">
                  <span className="text-xs font-mono text-[var(--color-text-muted)] block">
                    COMMON APPLICATIONS:
                  </span>
                  {[
                    "Hedging market risk on existing holdings",
                    "Taking aggressive directional trading positions",
                    "Managing broad portfolio segment exposure",
                    "Leveraging short-term system opportunities",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] font-sans"
                    >
                      <span className="text-[var(--color-accent-blue-light)] font-mono">
                        →
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-xs font-mono text-[var(--color-text-muted)] pt-4 border-t border-[var(--color-border-main)]">
                Apex Trade offers seamless access to futures markets with
                real-time tracking.
              </p>
            </div>

            {/* Options Column */}
            <div className="glass-blue p-8 rounded-2xl border-[rgba(61,107,255,0.2)] card-hover flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[var(--color-accent-green)] tracking-widest uppercase">
                  Strategic Rights
                </span>
                <h2 className="text-2xl font-bold text-gradient-green font-display">
                  What is Option Trading?
                </h2>
                <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                  Options are contracts that provide the right, but not the
                  obligation, to buy or sell an underlying asset at a specified
                  price before expiry. Highly agile instrument frameworks.
                </p>

                <div className="pt-4 space-y-2.5">
                  <span className="text-xs font-mono text-[var(--color-text-muted)] block">
                    WIDELY USED FOR:
                  </span>
                  {[
                    "Managing risk exposure zones dynamically",
                    "Protecting systemic capital investments",
                    "Generating strategic market exposure vectors",
                    "Building advanced complex trading strategies",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] font-sans"
                    >
                      <span className="text-[var(--color-accent-green)] font-mono">
                        ↳
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-xs font-mono text-[var(--color-text-muted)] pt-4 border-t border-[rgba(61,107,255,0.15)]">
                Monitor opportunities effectively via Apex Trade's advanced
                analytics dashboard.
              </p>
            </div>
          </div>

          {/* ── GRID: WHY F&O CONTINUES TO GROW ── */}
          <div className="border-t border-[var(--color-border-main)] pt-20">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Market Growth Drivers</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Why F&O Trading Continues to Grow
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                The popularity of F&O trading continues to increase because of
                structural advantages offered to modern traders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Bi-Directional Action",
                  desc: "Trade in Any Market Direction. Futures and options allow traders to participate in both bullish and bearish market conditions cleanly.",
                },
                {
                  title: "Portfolio Hedging",
                  desc: "Reduce risk exposure on existing investments, making derivative contracts an incredibly valuable tool for portfolio risk management.",
                },
                {
                  title: "Capital Efficiency",
                  desc: "Gain target market exposure without investing the full value of the underlying asset. Maximizes your net capital utilization.",
                },
                {
                  title: "Strategic Flexibility",
                  desc: "From basic directional trades to multi-leg hedging spreads, implement custom setups built around your risk appetite.",
                },
              ].map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="glass p-6 rounded-xl border-[var(--color-border-main)] hover:border-[rgba(61,107,255,0.25)] transition-all"
                >
                  <h3 className="text-base font-bold text-white font-display mb-2 flex items-center gap-2">
                    <span className="text-xs font-mono text-[var(--color-accent-blue-light)]">
                      0{bIdx + 1}
                    </span>
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
