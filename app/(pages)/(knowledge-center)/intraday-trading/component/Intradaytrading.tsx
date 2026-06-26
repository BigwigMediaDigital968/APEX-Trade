import Link from "next/link";

export default function IntradayTradingContent() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Ambient Glow Accents */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[var(--color-accent-blue)] opacity-[0.06] blur-[120px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[var(--color-accent-green)] opacity-[0.04] blur-[150px] rounded-full animate-float"
          style={{ animationDelay: "-2.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: HEADER & OVERVIEW ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Day Trading Segment</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                What is{" "}
                <span className="text-gradient-blue">Intraday Trading</span>?
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                Intraday trading refers to buying and selling financial
                instruments within the same trading day. The objective is to
                benefit from short-term price fluctuations without carrying
                positions overnight.
              </p>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-sans">
                This type of trading is commonly used in equities, indices,
                commodities, and derivatives markets. It requires keen market
                awareness, disciplined execution, and access to timely market
                information.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 p-3 rounded-xl border border-[var(--color-border-green)] bg-[rgba(0,255,163,0.03)] text-xs text-[var(--color-text-secondary)] font-mono">
                  <span className="text-[var(--color-accent-green)]">
                    💡 Pro Tip:
                  </span>{" "}
                  For beginners, learning basics through{" "}
                  <strong className="text-white">
                    Trading for Beginners India
                  </strong>{" "}
                  provides a strong foundation.
                </div>
              </div>
            </div>

            {/* Simulated Order Execution Sidebar */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] card-hover space-y-5">
                <div className="flex justify-between items-center text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span>Intraday MIS Terminal</span>
                  <span className="profit flex items-center gap-1.5">
                    ● Market Open
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-[rgba(11,14,20,0.5)] border border-[var(--color-border-main)]">
                    <span className="text-[var(--color-text-muted)] text-xs font-mono">
                      Product Type
                    </span>
                    <span className="text-xs font-mono font-bold bg-[rgba(61,107,255,0.15)] text-[var(--color-accent-blue-light)] px-2 py-0.5 rounded border border-[rgba(61,107,255,0.2)]">
                      MIS (Intraday)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[rgba(11,14,20,0.5)] border border-[var(--color-border-main)]">
                      <label className="block text-[var(--color-text-muted)] text-[10px] font-mono uppercase mb-1">
                        Trigger Price
                      </label>
                      <span className="text-white font-mono font-bold text-sm">
                        ₹2,450.00
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-[rgba(11,14,20,0.5)] border border-[var(--color-border-main)]">
                      <label className="block text-[var(--color-text-muted)] text-[10px] font-mono uppercase mb-1">
                        Stop Loss
                      </label>
                      <span className="loss font-mono font-bold text-sm">
                        ₹2,438.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: HOW IT WORKS & DRIVERS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-10 border-t border-[var(--color-border-main)] pt-20">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-8">
              <span className="badge-green">Market Mechanics</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                How Intraday <br />
                Trading Works
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Intraday traders analyze price trends, trading volume, technical
                indicators, and market momentum to identify potential
                opportunities. Trades may last a few minutes or several hours,
                depending on the strategy being used.
              </p>
              <p className="text-[var(--color-text-muted)] font-sans text-xs">
                Using a professional Online Trading Platform with advanced
                charts and real-time insights makes it easier to track
                opportunities and execute trades efficiently.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Market Volatility",
                  desc: "Short-term price swings create the foundational profit windows day traders need to execute quick positions.",
                },
                {
                  title: "Asset Liquidity",
                  desc: (
                    <>
                      Highly liquid{" "}
                      <Link
                        href="/stocks"
                        className="text-indigo-500 hover:text-white"
                      >
                        stocks
                      </Link>{" "}
                      or indices ensure you can enter and exit trades rapidly
                      without significant slippage.
                    </>
                  ),
                },
                {
                  title: "Trading Volume",
                  desc: "Elevated institutional and retail volume confirms market interest and validates sudden directional breakouts.",
                },
                {
                  title: "Economic Events",
                  desc: "Live macroeconomic news, unexpected corporate earnings, and monetary policy changes act as instant triggers.",
                },
                {
                  title: "Market Sentiment",
                  desc: "Broader sectoral patterns and indexing behaviors can heavily shift price vectors across individual tickers.",
                },
              ].map((factor, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-xl border-[var(--color-border-main)] card-hover space-y-2"
                >
                  <div className="text-xs font-mono text-[var(--color-accent-blue-light)]">
                    FACTOR_0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    {factor.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: TRADING TIPS FOR BETTER DECISIONS ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="badge-blue">Risk & Blueprint</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Intraday Trading Tips for Better Decisions
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Following practical structural frameworks helps traders improve
                consistency and reduce unnecessary risks on every session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Trade with a Plan",
                  desc: "Define your entry, target, and stop-loss levels strictly before placing a trade.",
                },
                {
                  title: "Use Stop Loss",
                  desc: "Protecting your core capital is the single most important aspect of successful trading.",
                },
                {
                  title: "Focus on Liquidity",
                  desc: (<>Highly traded<Link
                        href="/stocks"
                        className="text-indigo-500 hover:text-white"
                      > stocks</Link> offer vastly superior order execution and tighter spreads.</>),
                },
                {
                  title: "Avoid Overtrading",
                  desc: "Taking only high-quality technical setups is more effective than chasing random momentum.",
                },
                {
                  title: "Stay Updated",
                  desc: "Real-time news alerts and economic events can significantly impact price metrics within seconds.",
                },
              ].map((tip, tIdx) => (
                <div
                  key={tIdx}
                  className="glass-blue p-6 rounded-xl border-[rgba(61,107,255,0.2)] flex flex-col justify-between card-hover"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[var(--color-accent-green)] block">
                      TIP_0{tIdx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white font-display">
                      {tip.title}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] font-sans text-[11px] leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center border-t border-[rgba(142,150,165,0.08)] pt-12">
              <p className="text-[var(--color-text-muted)] font-sans text-xs mb-6">
                These essential risk management practices are crucial for both
                seasoned market experts and those learning How to Start Trading
                in India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
