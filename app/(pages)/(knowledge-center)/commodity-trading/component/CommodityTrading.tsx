import Link from "next/link";
import React from "react";

export default function CommodityTrading() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Ambient Blur Graphics */}
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent-blue)] opacity-[0.04] blur-[160px] rounded-full animate-float"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-[var(--color-accent-green)] opacity-[0.03] blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "-4s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: INTRODUCTION HERO ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Derivative Asset Class</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                What Is{" "}
                <span className="text-gradient-blue">Commodity Trading</span>?
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                At its core, commodity trading means buying and selling
                standardized contracts whose value tracks the price of a
                physical raw material{" "}
                <span className="text-white font-semibold">
                  without you ever touching the actual gold bar or oil barrel
                </span>
                .
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-sans">
                For retail traders, almost everything is cash-settled: you open
                a position, square it off before expiry, and the profit or loss
                lands directly in your account ledger in rupees. This market is
                regulated by SEBI and runs primarily through two dedicated
                Indian exchanges:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)]">
                  <h4 className="text-white font-display font-bold text-sm mb-1">
                    MCX (Multi Commodity Exchange)
                  </h4>
                  <p className="text-[var(--color-text-muted)] font-sans text-xs leading-relaxed">
                    The primary liquidity pool covering global metals and energy
                    volatility (gold, silver, crude oil, natural gas, copper).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)]">
                  <h4 className="text-white font-display font-bold text-sm mb-1">
                    NCDEX (National Commodity Exchange)
                  </h4>
                  <p className="text-[var(--color-text-muted)] font-sans text-xs leading-relaxed">
                    Focused deeply on agricultural commodities driven by
                    domestic seasonal cycles like cotton, chana, jeera, and
                    mustard seed.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Motivations Widget */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] space-y-4">
                <span className="text-xs font-mono text-[var(--color-accent-blue-light)] uppercase tracking-wider block">
                  // Market Market Drivers
                </span>
                <h3 className="text-lg font-bold text-white font-display">
                  Why Participants Enter the Commodity Markets
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      label: "Hedging",
                      desc: "Commercial operators locking in raw material costs (e.g., jewellers locking gold, airlines fixing fuel rates).",
                    },
                    {
                      label: "Speculation",
                      desc: "Active traders deploying capital purely to profit from raw global volatility without physical delivery requirements.",
                    },
                    {
                      label: "Diversification",
                      desc: "Building absolute alpha exposure to systemic global assets that decouple cleanly from equity index benchmarks.",
                    },
                  ].map((motivate, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3 rounded-lg bg-[rgba(142,150,165,0.01)] border border-[var(--color-border-main)] flex gap-3"
                    >
                      <span className="text-[var(--color-accent-green)] font-mono text-xs font-bold mt-0.5">
                        0{mIdx + 1}
                      </span>
                      <div>
                        <h5 className="text-white font-sans text-xs font-bold">
                          {motivate.label}
                        </h5>
                        <p className="text-[var(--color-text-muted)] font-sans text-[11px] mt-0.5 leading-relaxed">
                          {motivate.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: THE FOUR ASSET CATEGORIES ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Asset Classification</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                The Four Categories of Commodities You Can Trade
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Deploy distinct strategies optimized for different resource
                cycles and macroeconomic drivers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Precious Metals",
                  meta: "Safe Haven Assets",
                  desc: "Gold and silver move inversely to global market panic. Trade Gold (1kg, 100g Mini, 8g Guinea) and Silver (30kg, 5kg Mini) directly via MCX tickers.",
                },
                {
                  title: "Energy Derivatives",
                  meta: "High-Frequency Volatility",
                  desc: "Crude oil reacts wildly to OPEC decisions and Wednesday US EIA storage reports. Natural Gas tracks macro weather patterns and heating/cooling demands.",
                },
                {
                  title: "Base Industrial Metals",
                  meta: "Global Demand Indicators",
                  desc: "Copper, aluminum, zinc, and lead fall here. These global industrial metals map closely to macro manufacturing demand indices, particularly out of China.",
                },
                {
                  title: "Agricultural Assets",
                  meta: "Seasonal Supply Chains",
                  desc: "Cotton, mustard seed, chana, and jeera trade mainly on NCDEX. Driven heavily by monsoon tracking, harvest timelines, and government agriculture trade policies.",
                },
              ].map((category, cIdx) => (
                <div
                  key={cIdx}
                  className="glass p-6 rounded-2xl border-[var(--color-border-main)] card-hover flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[var(--color-accent-blue-light)] uppercase tracking-widest block">
                      {category.meta}
                    </span>
                    <h3 className="text-lg font-bold text-white font-display">
                      {category.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                      {category.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: MATRIX STRATEGY (COMPLETELY RECONFIGURED AS AN ASYMMETRIC GRID WITH BARS OR ALTERNATE COMPONENT STACKING) ── */}
          <div className="border-t border-[var(--color-border-main)] pt-20 mb-28">
            <div className="mb-12 space-y-2">
              <span className="badge-blue">Structural Parameters</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Commodity Trading vs Equity Trading
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm">
                Isolate structural deviations between physical commodity
                indexing and company ownership structures.
              </p>
            </div>

            {/* Custom Responsive Matrix Component Block Layout */}
            <div className="glass rounded-2xl border-[var(--color-border-main)] overflow-hidden">
              <div className="hidden lg:grid grid-cols-12 gap-4 p-4 bg-[rgba(142,150,165,0.02)] border-b border-[var(--color-border-main)] font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                <div className="col-span-3">Structural Feature</div>
                <div className="col-span-4 text-[var(--color-accent-blue-light)]">
                  Commodity Trading Framework
                </div>
                <div className="col-span-5 text-[var(--color-accent-green)]">
                  <Link href="/equity-trading" className="hover:text-white">
                    Equity Trading Framework
                  </Link>
                </div>
              </div>

              <div className="divide-y divide-[var(--color-border-main)] font-sans text-sm">
                {[
                  {
                    feature: "Underlying Asset",
                    comm: "Physical goods — metals, energy metrics, agricultural produce",
                    eq: "Corporate shares of publicly listed companies",
                  },
                  {
                    feature: "Main Exchanges",
                    comm: "MCX and NCDEX networks",
                    eq: "NSE and BSE networks",
                  },
                  {
                    feature: "Trading Window Hours",
                    comm: "Extended access: 9:00 AM to 11:30 PM IST",
                    eq: "Standard access: 9:15 AM to 3:30 PM IST",
                  },
                  {
                    feature: "Primary Price Drivers",
                    comm: "Global systemic demand, USD indexes, geopolitics, weather macro",
                    eq: "Quarterly corporate earnings, sector trends, domestic data loops",
                  },
                  {
                    feature: "Tax Classification",
                    comm: "Typically treated as non-speculative business income parameters",
                    eq: "Capital gains models or localized speculative income parameters",
                  },
                  {
                    feature: "Target Demographics",
                    comm: "Commercial hedgers, asset diversifiers, late evening-hour traders",
                    eq: "Long-term wealth investors and dynamic intraday equity traders",
                  },
                ].map((row, rIdx) => (
                  <div
                    key={rIdx}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 items-center hover:bg-[rgba(142,150,165,0.01)] transition-colors"
                  >
                    <div className="col-span-3 font-display font-bold text-white text-xs lg:text-sm">
                      {row.feature}
                    </div>
                    <div className="col-span-4 text-xs text-[var(--color-text-secondary)] lg:border-l lg:border-[rgba(61,107,255,0.15)] lg:pl-4">
                      <span className="inline-block lg:hidden font-mono text-[10px] uppercase text-[var(--color-accent-blue-light)] block mb-0.5">
                        Commodity //
                      </span>
                      {row.comm}
                    </div>
                    <div className="col-span-5 text-xs text-[var(--color-text-muted)] lg:border-l lg:border-[rgba(0,255,163,0.15)] lg:pl-4">
                      <span className="inline-block lg:hidden font-mono text-[10px] uppercase text-[var(--color-accent-green)] block mb-0.5">
                        Equity //
                      </span>
                      {row.eq}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SECTION 4: FINAL TRADING CALLOUT PANELS ── */}
          <div className="glass p-10 rounded-3xl border border-[rgba(61,107,255,0.2)] bg-gradient-to-br from-[rgba(11,14,20,0.95)] to-[rgba(19,25,41,0.9)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] font-mono text-[10rem] font-black pointer-events-none select-none leading-none">
              MCX
            </div>

            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-display tracking-tight">
                Access Extended Global Resource Liquidity with ApexTrade
              </h3>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Whether you are balancing short-term volatility swings inside
                evening hours or hedging raw asset parameters, ApexTrade gives
                you structural sub-millisecond execution tools, optimized
                <Link
                  href="/margin-trading"
                  className="text-indigo-500 hover:text-white"
                >
                  {" "}
                  margin{" "}
                </Link>
                parameters, and real-time MCX tracking telemetry.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="btn-secondary px-8 py-3.5 text-sm"
                >
                  View Margin Catalogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
