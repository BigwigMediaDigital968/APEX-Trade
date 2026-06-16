export default function IndexTradingTable() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Deep Field Ambient Glows */}
        <div
          className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[var(--color-accent-blue)] opacity-[0.04] blur-[150px] rounded-full animate-float"
          style={{ animationDelay: "-1s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[var(--color-accent-green)] opacity-[0.03] blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "-3s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: INDEX VS STOCK ARCHITECTURE MATRIX ── */}
          <div className="mb-28">
            <div className="mb-12 space-y-2">
              <span className="badge-blue">Execution Comparison Matrix</span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
                Index Trading{" "}
                <span className="text-gradient-blue">vs Stock Trading</span>
              </h1>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm max-w-2xl">
                Analyze the distinct structural mechanics separating
                comprehensive system benchmarks from standalone, idiosyncratic
                corporate equity instruments.
              </p>
            </div>

            {/* Custom Responsive Comparison Table */}
            <div className="glass rounded-2xl border border-[var(--color-border-main)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans text-xs">
                  <thead>
                    <tr className="border-b border-[var(--color-border-main)] bg-[rgba(142,150,165,0.02)] font-display text-xs text-white tracking-wide">
                      <th className="p-5 font-bold">Structural Feature</th>
                      <th className="p-5 font-bold text-[var(--color-accent-blue-light)]">
                        Index Trading
                      </th>
                      <th className="p-5 font-bold text-[var(--color-accent-green)]">
                        Stock Trading
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border-main)] text-[var(--color-text-secondary)]">
                    {[
                      {
                        f: "Market Exposure Scope",
                        i: "Aggregated multi-company basket providing macro industrial footprint.",
                        s: "Isolated single-entity exposure tethered to specific balance sheets.",
                      },
                      {
                        f: "Inherent Diversification",
                        i: "Structurally higher; systematic smoothing via composite asset allocation.",
                        s: "Symmetrically lower; exposed entirely to centralized asset performance.",
                      },
                      {
                        f: "Idiosyncratic / Company Risk",
                        i: "Substantially reduced via index balancing algorithms and math structures.",
                        s: "Pronounced; fully vulnerable to micro corporate operational failures.",
                      },
                      {
                        f: "Market Representation Vector",
                        i: "Captures comprehensive macroeconomic trends and broad-market health.",
                        s: "Reflects independent business execution, products, and direct sector niches.",
                      },
                      {
                        f: "Core Volatility Drivers",
                        i: "Driven heavily by macro data prints, central policies, and thematic flows.",
                        s: "Dictated by specific earnings statements, localized news, and corporate leadership.",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[rgba(142,150,165,0.01)] transition-colors"
                      >
                        <td className="p-5 font-semibold text-white font-display text-sm">
                          {row.f}
                        </td>
                        <td className="p-5 leading-relaxed">{row.i}</td>
                        <td className="p-5 leading-relaxed">{row.s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-[var(--color-text-muted)] font-sans text-[11px] mt-4 italic">
              *While both methodologies afford alpha generation vectors, index
              tracking is increasingly chosen by asset allocators seeking macro
              system efficiency.
            </p>
          </div>

          {/* ── SECTION 2: PROCEDURAL ROUTING Lifecycles ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-8">
              <span className="badge-green">Operational Onboarding</span>
              <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                How to Start Index Trading
              </h2>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
                Unlock instant systemic cross-asset exposure by executing our
                clean, verified electronic account activation steps.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 font-sans text-xs">
              {[
                {
                  step: "Step 01",
                  title: "Establish Trading Infrastructure",
                  desc: "Open an authorized terminal portal engineered for ultra-low latency derivative and index feed calculations.",
                },
                {
                  step: "Step 02",
                  title: "Execute Vault Verification",
                  desc: "Finalize regulatory documentation protocols to complete necessary identification screening matrixes.",
                },
                {
                  step: "Step 03",
                  title: "Provision Capital Allocations",
                  desc: "Fund your account pipeline with liquid working cash balances designated for active margin buffers.",
                },
                {
                  step: "Step 04",
                  title: "Target the Benchmark Vector",
                  desc: "Isolate your optimal index environment from a curated menu of global and domestic composite indexes.",
                },
                {
                  step: "Step 05",
                  title: "Analyze Systemic Catalysts",
                  desc: "Evaluate macro policy directions, sector charts, and technical indicators before positioning risk.",
                },
                {
                  step: "Step 06",
                  title: "Deploy & Monitor Risk Parameters",
                  desc: "Route your execution orders into active pools while applying meticulous risk-control stop architecture.",
                },
              ].map((phase, pIdx) => (
                <div
                  key={pIdx}
                  className="flex gap-4 items-start p-5 rounded-xl border border-[var(--color-border-main)] bg-[rgba(142,150,165,0.01)]"
                >
                  <span className="font-mono text-[10px] font-bold text-[var(--color-accent-blue-light)] bg-[rgba(61,107,255,0.05)] border border-[rgba(61,107,255,0.1)] px-2.5 py-1 rounded-md shrink-0">
                    {phase.step}
                  </span>
                  <div>
                    <h4 className="text-white font-bold font-display text-sm">
                      {phase.title}
                    </h4>
                    <p className="text-[var(--color-text-muted)] text-[11px] mt-1 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 3: INFRASTRUCTURE CORE VALUE PROPS ── */}
          <div className="border-t border-[var(--color-border-main)] pt-10 mb-10">
            <div className="p-8 md:p-12 rounded-3xl border border-[rgba(0,255,163,0.15)] bg-gradient-to-br from-[rgba(11,14,20,0.5)] to-transparent space-y-8">
              <div className="max-w-3xl space-y-3">
                <span className="badge-blue">Institutional Pipeline</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display">
                  Why Trade Global Indices with Apex Trade?
                </h3>
                <p className="text-[var(--color-text-secondary)] font-sans text-xs md:text-sm leading-relaxed">
                  Apex Trade deploys standard-setting architectural pipelines
                  that provide instant, friction-free exposure to the most
                  liquid market indexes globally.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-sans text-xs">
                {[
                  {
                    title: "Global Benchmark Vault",
                    text: "Access premium indices across multiple cross-border jurisdictions and sectors from one unified workspace.",
                  },
                  {
                    title: "Real-Time Telemetry Trackers",
                    text: "Engineered with institutional-grade data endpoints feeding microscopic chart movements without decay.",
                  },
                  {
                    title: "Optimized Execution Spread",
                    text: "Benefit from highly streamlined, hyper-competitive conditions configured to protect trading margin models.",
                  },
                  {
                    title: "Low-Latency Match Core",
                    text: "Reliable execution infrastructure built to prevent transaction drift even during high-velocity macro releases.",
                  },
                  {
                    title: "Hardened Security Perimeter",
                    text: "Rigorously maintained structural integrity modules shielding system assets and privacy variables.",
                  },
                  {
                    title: "Elite Command Support Desk",
                    text: "Direct line of contact to specialist operators offering prompt structural assistance around the clock.",
                  },
                ].map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-xl border border-[var(--color-border-main)] bg-[#0B0E14] space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-green)] shrink-0" />
                      <h4 className="text-white font-bold font-display text-xs md:text-sm">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-[var(--color-text-muted)] text-[11px] leading-relaxed pl-3.5">
                      {feat.text}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="p-5 rounded-xl border-l-2 border-[var(--color-accent-blue)] bg-[rgba(61,107,255,0.01)] text-[11px] font-sans text-[var(--color-text-secondary)] leading-relaxed">
                Whether deploying targeted local strategies across Indian
                benchmark indices or leveraging global liquidity events, Apex
                Trade serves as your comprehensive technological nexus for
                modern macro market exploration.
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
