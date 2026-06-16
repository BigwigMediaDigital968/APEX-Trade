export default function CommodityPage() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Ambient Chromatic Highlights */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent-blue)] opacity-[0.04] blur-[160px] rounded-full animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--color-accent-green)] opacity-[0.03] blur-[130px] rounded-full animate-float"
          style={{ animationDelay: "-2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── HERO SECTOR: DEFINITIONS & OBJECTIVES ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
            <div className="lg:col-span-7 space-y-6">
              <span className="badge-blue">Primary Raw Materials</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-tight">
                What is{" "}
                <span className="text-gradient-blue">Commodity Trading</span>?
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-sans">
                Commodity trading is the structured exchange of standardized
                physical raw assets and primary resources executed through
                centralized clearing networks.
              </p>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-sans">
                Unlike traditional equity structures that derive valuation from
                corporate performance, commodities trade purely on global demand
                equilibriums, systemic inventory balances, and structural macro
                regimes. Instead of managing physical logistics, modern
                marketplace operators deploy derivative pipelines to capitalize
                on underlying spot fluctuations and run strategic inflation
                fences.
              </p>

              <div className="pt-2">
                <a
                  href="/contact-us"
                  className="btn-primary inline-flex items-center text-xs px-6 py-3 tracking-wide"
                >
                  Connect with a Commodity Specialist{" "}
                  <span className="typing-cursor ml-1"></span>
                </a>
              </div>
            </div>

            {/* Micro Exchange Volume Feed Mock */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-2xl border-[var(--color-border-main)] space-y-4 font-mono text-xs text-white">
                <div className="flex justify-between items-center text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase">
                  <span>Regulated Clearing Nodes</span>
                  <span className="text-[var(--color-accent-blue-light)] font-bold">
                    MCX / NCDEX Standard
                  </span>
                </div>
                <div className="space-y-2 text-[11px]">
                  {[
                    "Precious Metals Portfolio",
                    "Energy Derivative Pipelines",
                    "Industrial Base Blocks",
                    "Agro-Sourced Contracts",
                  ].map((segment, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded bg-[rgba(142,150,165,0.02)] border border-[var(--color-border-main)] flex justify-between items-center"
                    >
                      <span className="text-[var(--color-text-secondary)]">
                        {segment}
                      </span>
                      <span className="text-[var(--color-accent-green)] font-bold">
                        ✓ Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION 1: ASSET CLASSIFICATION MATRIX ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="mb-12 space-y-2">
              <span className="badge-green">Market Topology</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Understanding the Commodity Market in India
              </h2>
              <p className="text-[var(--color-text-muted)] font-sans text-sm max-w-3xl">
                The Indian domestic clearing ecosystem runs via highly
                standardized contracts to guarantee transparent execution
                parameters across core macro sectors:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  class: "Precious Metals",
                  tickers: "XAU / XAG",
                  elements: ["Gold (Standard & Mini)", "Silver Contracts"],
                  accent: "from-[rgba(212,175,55,0.05)] to-transparent",
                },
                {
                  class: "Base Industrial Metals",
                  tickers: "HG / AL / ZN",
                  elements: [
                    "Copper Wire",
                    "Zinc",
                    "Aluminium",
                    "Lead Delivery",
                  ],
                  accent: "from-[rgba(184,115,51,0.05)] to-transparent",
                },
                {
                  class: "Energy Architecture",
                  tickers: "CL / NG",
                  elements: ["Crude Oil Light Sweet", "Natural Gas Micro"],
                  accent: "from-[rgba(61,107,255,0.05)] to-transparent",
                },
                {
                  class: "Agricultural Contracts",
                  tickers: "AGRO / COM",
                  elements: [
                    "Cotton Long Staple",
                    "Soybean",
                    "Turmeric / Jeera",
                    "Guar Seed Pools",
                  ],
                  accent: "from-[rgba(0,255,163,0.03)] to-transparent",
                },
              ].map((group, gIdx) => (
                <div
                  key={gIdx}
                  className={`p-6 rounded-2xl border border-[var(--color-border-main)] bg-gradient-to-b ${group.accent} flex flex-col justify-between space-y-6`}
                >
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-bold font-display text-sm">
                        {group.class}
                      </h3>
                      <span className="font-mono text-[9px] text-[var(--color-text-muted)]">
                        {group.tickers}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-[var(--color-border-main)] pt-1" />
                  </div>
                  <ul className="space-y-2 font-sans text-xs text-[var(--color-text-secondary)]">
                    {group.elements.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent-blue-light)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 2: MACRO DRIVERS (WHY IT IS GROWING) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-8">
              <span className="badge-blue">Inflow Vector Dynamics</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Why Commodity Trading India is Growing Rapidly
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                As algorithmic access layers mature, domestic professional
                operators utilize commodity books to execute advanced systematic
                balance plays.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 font-sans text-xs">
              {[
                {
                  title: "Non-Correlated Portfolio Diversification",
                  desc: "Commodity asset flows historically trace performance corridors decoupled from spot equities, creating solid hedging boundaries.",
                },
                {
                  title: "Structural Inflation Shields",
                  desc: "Hard raw goods absorb fiscal expansion metrics naturally, scaling structural asset values during intense CPI adjustments.",
                },
                {
                  title: "High Liquidity Velocity Profiles",
                  desc: "Heavyweight tracking pools like Gold and Crude ensure deep book density, suppressing unnecessary slippage spikes.",
                },
                {
                  title: "Global Asymmetry Capturing",
                  desc: "Cross-border supply bottlenecks directly influence domestic clearing curves, opening up highly predictable directional trends.",
                },
                {
                  title: "Extended Trading Window Segments",
                  desc: "Commodity clearing networks remain operational deeper into late evening blocks, unlocking massive operational scheduling agility.",
                },
              ].map((driver, dIdx) => (
                <div
                  key={dIdx}
                  className="p-5 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] hover:bg-[rgba(142,150,165,0.02)] transition-all"
                >
                  <h4 className="text-white font-bold font-display text-sm flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[var(--color-accent-green)]">
                      // 0{dIdx + 1}
                    </span>
                    {driver.title}
                  </h4>
                  <p className="text-[var(--color-text-muted)] text-[11px] mt-1.5 leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: VARIATIONS OF PARTICIPATION & INFLUENCE FACTORING ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-[var(--color-border-main)] pt-10 mb-10">
            {/* Modal Approaches */}
            <div className="p-8 rounded-2xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-6">
              <div>
                <span className="badge-blue">Execution Styles</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Types of Commodity Trading
                </h3>
              </div>
              <div className="space-y-3 font-sans text-xs">
                {[
                  {
                    style: "Intraday Momentum Trading",
                    notes:
                      "Positions completely squared inside the session to safely isolate capital from overnight macro gaps.",
                  },
                  {
                    style: "Positional Macro Strategy",
                    notes:
                      "Holding directional contract tranches across multi-week arcs to harvest systemic supply deficits.",
                  },
                  {
                    style: "Standardized Futures Contracts",
                    notes:
                      "Leveraging structured central agreements to lock down precise forward pricing metrics for underlying spot assets.",
                  },
                  {
                    style: "Enterprise Hedging Architecture",
                    notes:
                      "Deployed by industrial entities to isolate balance sheets from adverse material pricing fluctuations.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#0B0E14] border border-[var(--color-border-main)]"
                  >
                    <span className="text-white font-semibold font-display block text-[13px]">
                      {item.style}
                    </span>
                    <span className="text-[var(--color-text-muted)] text-[11px] mt-0.5 block leading-relaxed">
                      {item.notes}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Influence Factors */}
            <div className="p-8 rounded-2xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)] space-y-6">
              <div>
                <span className="badge-green">Price Determinants</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Factors That Drive Prices
                </h3>
              </div>
              <div className="space-y-3 font-sans text-xs">
                {[
                  {
                    factor: "Global Supply vs Demand Metrics",
                    impact:
                      "Inventory print releases, structural output adjustments, and broad scale industrial burn rates.",
                  },
                  {
                    factor: "Systemic Macro-Economic Climes",
                    impact:
                      "Velocity changes across industrial manufacturing sectors and broad industrial capacity index marks.",
                  },
                  {
                    factor: "Geopolitical Disruption Nodes",
                    impact:
                      "Cross-border logistical trade parameters, production barriers, and macro embargo frameworks.",
                  },
                  {
                    factor: "USD Valuation Fluctuations",
                    impact:
                      "As major commodities trade internationally in USD, localized currencies dictate absolute purchasing power adjustments.",
                  },
                  {
                    factor: "Micro-Climatic Weather Variance",
                    impact:
                      "Direct volatility trigger for agricultural blocks via season disruptions or altered logistics flow metrics.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#0B0E14] border border-[var(--color-border-main)]"
                  >
                    <span className="text-[var(--color-accent-green)] font-semibold font-display block text-[13px]">
                      {item.factor}
                    </span>
                    <span className="text-[var(--color-text-secondary)] text-[11px] mt-0.5 block leading-relaxed">
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── SECTION 4: LINK-BASED CONVERSION CONTEXT ── */}
          <div className="glass p-10 md:p-16 rounded-3xl border border-[rgba(0,255,163,0.15)] bg-gradient-to-br from-[rgba(11,14,20,0.95)] via-[rgba(15,20,32,0.9)] to-[rgba(19,25,41,0.95)] text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                Access Advanced Raw Material Pipelines
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Deploy strategy models directly into ultra-responsive domestic
                commodity exchange books. Utilize low-latency derivative
                execution matrices backed by institutional-tier risk parameter
                analysis.
              </p>

              <div className="pt-2">
                <a
                  href="/contact-us"
                  className="btn-primary animate-glow inline-block text-xs px-8 py-3.5 font-semibold tracking-wider"
                >
                  Contact Our Institutional Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
