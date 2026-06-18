import Link from "next/link";
import React from "react";

export default function TradingPlatform() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Decorative Ambient Lights */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--color-accent-blue)] opacity-[0.06] blur-[130px] rounded-full animate-float"
          style={{ animationDelay: "-1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] bg-[var(--color-accent-green)] opacity-[0.04] blur-[140px] rounded-full animate-float"
          style={{ animationDelay: "-4s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: MARKETS SEGMENT ── */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="badge-blue">Multi-Asset Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
              Markets You Can Trade on{" "}
              <span className="text-gradient-blue">ApexTrade</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] font-sans text-base md:text-lg">
              ApexTrade gives traders access to multiple market segments through
              one account; no need to manage separate platforms for each asset
              class.
            </p>
          </div>

          {/* Interactive Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-28">
            {/* Card 1: Equity */}
            <Link href="/equity-trading">
              <div className="glass p-8 rounded-2xl flex flex-col justify-between card-hover border-[var(--color-border-main)] relative group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(61,107,255,0.1)] border border-[rgba(61,107,255,0.2)] flex items-center justify-center mb-6 text-[var(--color-accent-blue-light)] font-mono font-bold">
                    EQ
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[var(--color-accent-blue-light)] transition-colors">
                    Equity Trading India
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                    Access shares of India's largest and fastest-growing listed
                    companies. Trade intraday or take delivery positions with
                    real-time data, advanced charts, and fast order execution.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--color-border-main)] flex justify-between items-center text-xs font-mono text-[var(--color-text-muted)]">
                  <span>INTRADAY / DELIVERY</span>
                  <span className="profit">● Live</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Commodity */}
            <Link href="/commodity-trading">
              <div className="glass p-8 rounded-2xl flex flex-col justify-between card-hover border-[var(--color-border-main)] relative group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,255,163,0.1)] border border-[rgba(0,255,163,0.25)] flex items-center justify-center mb-6 text-[var(--color-accent-green)] font-mono font-bold">
                    MCX
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[var(--color-accent-green)] transition-colors">
                    Commodity Trading India
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                    Trade gold, silver, crude oil, natural gas, and agricultural
                    commodities on MCX. Commodity markets often move
                    independently of equities, offering diversification and
                    unique opportunities.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--color-border-main)] flex justify-between items-center text-xs font-mono text-[var(--color-text-muted)]">
                  <span>GLOBAL DIVERSIFICATION</span>
                  <span className="profit">● Live</span>
                </div>
              </div>
            </Link>

            {/* Card 3: F&O */}
            <Link href="/futures-and-options">
              <div className="glass-blue p-8 rounded-2xl flex flex-col justify-between card-hover relative group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(61,107,255,0.2)] border border-[rgba(61,107,255,0.4)] flex items-center justify-center mb-6 text-white font-mono font-bold">
                    F&O
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-3 text-gradient-blue">
                    Futures & Options
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                    Access NSE's most actively traded F&O contracts: Nifty, Bank
                    Nifty, and stock futures. ApexTrade's ultra-low margin
                    requirements (
                    <span className="text-white font-semibold">
                      up to 97–99% lower
                    </span>{" "}
                    than retail rates) make F&O accessible without tying up
                    large capital.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[rgba(61,107,255,0.2)] flex justify-between items-center text-xs font-mono text-[var(--color-text-muted)]">
                  <span>LOW MARGIN FACILITY</span>
                  <span className="text-[var(--color-accent-blue-light)]">
                    High Leverage
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <hr className="border-t border-[var(--color-border-main)] my-20" />

          {/* ── SECTION 2: GETTING STARTED & SUCCESS PILLARS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Step-by-Step Onboarding */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="badge-green mb-3">Onboarding</span>
                <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                  Trading for Beginners in India:{" "}
                  <span className="text-gradient-green">Getting Started</span>
                </h2>
                <p className="text-[var(--color-text-secondary)] font-sans mt-2 text-sm">
                  Starting your trading journey does not require years of
                  experience. It requires the right foundation, a reliable
                  platform, and disciplined habits from day one.
                </p>
              </div>

              {/* Progress Steps Timeline */}
              <div className="relative border-l-2 border-[var(--color-border-main)] ml-4 my-6 space-y-8 pl-6">
                {[
                  {
                    step: "01",
                    title: "Account Setup",
                    desc: "Open your ApexTrade trading account online.",
                  },
                  {
                    step: "02",
                    title: "KYC Verification",
                    desc: "Complete the seamless identity verification process.",
                  },
                  {
                    step: "03",
                    title: "Fund Allocation",
                    desc: "Securely add funds to your trading dashboard account.",
                  },
                  {
                    step: "04",
                    title: "Market Selection",
                    desc: "Choose your target market segment: equity, commodity, or F&O.",
                  },
                  {
                    step: "05",
                    title: "Technical Analysis",
                    desc: "Analyse opportunities using real-time charts and market data.",
                  },
                  {
                    step: "06",
                    title: "Execute Order",
                    desc: "Place and manage trades with built-in risk protection tools.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Step Node indicator */}
                    <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-[#0B0E14] border-2 border-[var(--color-border-main)] group-hover:border-[var(--color-accent-green)] transition-colors flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)] group-hover:bg-[var(--color-accent-green)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-display font-bold text-base flex items-center gap-2">
                        <span className="text-xs font-mono text-[var(--color-accent-green)]">
                          {item.step}
                        </span>
                        {item.title}
                      </h4>
                      <p className="text-[var(--color-text-secondary)] text-sm font-sans mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Core Discipline Pillars */}
            <div className="lg:col-span-5 lg:sticky lg:top-8">
              <div className="glass p-8 rounded-2xl border-[var(--color-border-main)] space-y-6 bg-gradient-to-b from-[rgba(19,25,41,0.9)] to-[rgba(15,20,32,0.9)]">
                <div>
                  <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
                    System Pillars <span className="typing-cursor"></span>
                  </h3>
                  <p className="text-[var(--color-text-muted)] font-sans text-xs mt-1">
                    Successful traders at every single level maintain strict
                    focus on:
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "Understanding market fundamentals before placing any trade",
                    "Developing a trading plan and sticking to it religiously",
                    "Managing risk on every position, not just the big ones",
                    "Using a platform that provides reliable data and fast execution",
                    "Maintaining mental discipline, especially during volatile market conditions",
                  ].map((pillar, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(142,150,165,0.03)] border border-[rgba(142,150,165,0.05)] hover:border-[rgba(61,107,255,0.2)] transition-all"
                    >
                      <span className="text-[var(--color-accent-blue-light)] font-mono text-sm font-bold mt-0.5">
                        ✓
                      </span>
                      <p className="text-[var(--color-text-secondary)] text-sm font-sans leading-relaxed">
                        {pillar}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <button className="btn-primary w-full justify-center animate-glow">
                    Launch Web Terminal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
