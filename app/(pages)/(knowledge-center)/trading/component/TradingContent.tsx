import Link from "next/link";
import React from "react";

export default function TradingContent() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Background glow elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent-blue)] opacity-[0.08] blur-[120px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-accent-green)] opacity-[0.03] blur-[150px] rounded-full animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── Section 1: Introduction ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Introduction</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                What is <span className="text-gradient-blue">Trading</span>?
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                Trading is the process of buying and selling financial
                instruments such as <Link
                      href="/stocks"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >stocks</Link>, commodities, futures, and options to
                benefit from market price movements. What is trading in
                practical terms? It means taking a position on whether an
                asset's price will go up or down and managing that position
                using data, strategy, and the right tools.
              </p>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-sans">
                Today, online trading platforms have made markets accessible to
                everyone. Whether you are exploring stock market basics as a
                first-time participant or an experienced trader managing
                multiple positions across equity and commodity segments, the
                fundamentals remain the same:{" "}
                <span className="text-[var(--color-text-primary)] font-semibold">
                  informed decisions, disciplined execution, and reliable
                  technology.
                </span>
              </p>
              <div className="pt-4">
                <Link href="/contact-us" className="btn-primary animate-glow">
                  Get Started <span className="typing-cursor"></span>
                </Link>
              </div>
            </div>

            {/* Interactive/Visual Sidecard */}
            <div className="lg:col-span-5">
              <div className="glass p-8 rounded-2xl relative border-[var(--color-border-main)] card-hover">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-mono tracking-wider text-[var(--color-text-muted)] uppercase">
                    Live Market Overview
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-green)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-green)]"></span>
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-[var(--color-border-main)]">
                    <span className="text-white font-medium">NIFTY 50</span>
                    <span className="profit font-semibold font-mono">
                      +1.42%
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-[var(--color-border-main)]">
                    <span className="text-white font-medium">BANK NIFTY</span>
                    <span className="profit font-semibold font-mono">
                      +0.85%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">GLOBAL INDEX</span>
                    <span className="loss font-semibold font-mono">-0.24%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-[var(--color-border-main)] my-20" />

          {/* ── Section 2: Grid Layout ── */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="badge-green">Strategies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
              Find the Right{" "}
              <span className="text-gradient-green">Trading Approach</span> for
              Your Goals
            </h2>
            <p className="text-[var(--color-text-secondary)] font-sans">
              Different traders have different goals, risk appetites, and time
              horizons. Understanding the major types helps you choose an
              approach that fits your objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Intraday Trading */}
            <Link href="/intraday-trading">
              <div className="glass p-8 rounded-2xl flex flex-col justify-between card-hover border-[var(--color-border-main)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-display hover:text-indigo-500">
                      Intraday Trading
                    </h3>
                    <span className="text-xs font-mono text-[var(--color-accent-blue-light)] bg-[rgba(61,107,255,0.1)] px-2 py-1 rounded">
                      High Speed
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                    <Link
                      href="/intraday-trading"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >Intraday trading </Link>involves buying and selling positions
                    within the same trading session, with all trades closed
                    before market hours end. It's ideal for traders looking to
                    capitalize on short-term price movements without overnight
                    risk.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-main)] text-xs text-[var(--color-text-muted)] font-mono flex items-center justify-between">
                  <span>
                    With up to{" "}
                    <strong className="text-[var(--color-accent-green)]">
                      500X leverage
                    </strong>
                    , fast execution, and low brokerage, ApexTrade helps traders
                    maximize opportunities.
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2: Options Trading */}
            <Link href="/futures-and-options">
              <div className="glass-blue p-8 rounded-2xl flex flex-col justify-between card-hover">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-display hover:text-indigo-600">
                      Options Trading
                    </h3>
                    <span className="text-xs font-mono text-[var(--color-accent-green)] bg-[rgba(0,255,163,0.1)] px-2 py-1 rounded">
                      F&O Segment
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                    Options trading lets you profit from market movements or
                    hedge risk without owning the underlying asset. Take
                    advantage of market volatility with defined strategic risk
                    frameworks.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[rgba(61,107,255,0.2)] text-xs text-[var(--color-text-muted)] font-mono">
                  <span>
                    With <strong className="text-white">ApexTrade</strong>,
                    enjoy fast execution, advanced tools, and seamless access to
                    NSE F&O markets for smarter trading.
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3: Equity Trading */}
            <Link href="/equity-trading">
              <div className="glass p-8 rounded-2xl flex flex-col justify-between card-hover border-[var(--color-border-main)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-display hover:text-indigo-500">
                      Equity Trading
                    </h3>
                    <span className="text-xs font-mono text-[var(--color-text-secondary)] bg-[rgba(142,150,165,0.1)] px-2 py-1 rounded">
                      Wealth Build
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                    <Link
            href="/equity-trading"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >Equity trading</Link> involves buying and selling shares of listed
                    companies to build wealth or capitalize on market
                    opportunities. Long-term assets meet powerful real-time
                    order matching.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-main)] text-xs text-[var(--color-text-muted)] font-mono">
                  <span>
                    With <strong className="text-white">ApexTrade</strong>,
                    access <Link
                      href="/stocks"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >stocks</Link>, derivatives, and commodities through a single
                    account, backed by fast execution.
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 4: Margin Trading */}
            <Link href="/margin-trading">
              <div className="glass p-8 rounded-2xl flex flex-col justify-between card-hover border-[var(--color-border-main)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-display hover:text-indigo-500">
                      Margin Trading
                    </h3>
                    <span className="text-xs font-mono text-[#FF4B6A] bg-[rgba(255,75,106,0.1)] px-2 py-1 rounded">
                      Leveraged
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                    <Link
            href="/margin-trading"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >Margin trading </Link>lets you take larger market positions with
                    less capital through leverage. Amplifying exposure means
                    scaling opportunities safely with precise automatic squaring
                    models.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--color-border-main)] text-xs text-[var(--color-text-muted)] font-mono">
                  <span>
                    With <strong className="text-white">ApexTrade</strong>,
                    benefit from high-margin facilities, advanced risk controls,
                    and smart trading tools to manage risk effectively.
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
