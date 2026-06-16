import Link from "next/link";

export default function WhyChoose() {
  return (
    <>
      <section className="relative py-14 bg-[#0B0E14] overflow-hidden noise-overlay grid-pattern">
        {/* Dynamic Theme Glow Blobs */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--color-accent-blue)] opacity-[0.05] blur-[120px] rounded-full animate-float"
          style={{ animationDelay: "-1.5s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-[var(--color-accent-green)] opacity-[0.03] blur-[150px] rounded-full animate-float"
          style={{ animationDelay: "-4.5s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-up">
          {/* ── SECTION 1: CORE VALUES GRID ── */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="badge-blue">Platform Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display tracking-tight">
              Why Choose <span className="text-gradient-blue">Apex Trade</span>{" "}
              for F&O Trading?
            </h2>
            <p className="text-[var(--color-text-secondary)] font-sans text-base">
              While understanding derivatives is important, successful trading
              also depends on the platform you use. Apex Trade combines advanced
              technology with trader-focused tools to create a seamless F&O
              trading experience.
            </p>
          </div>

          {/* Feature Highlight Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
            {[
              {
                title: "Advanced Trading Platform",
                desc: "Access futures and options markets through a fast, intuitive, and feature-rich trading platform built around raw execution throughput.",
              },
              {
                title: "Real-Time Market Analytics",
                desc: "Stay informed with live market data feeds, actionable spatial insights, and advanced structural derivatives tracking tools.",
              },
              {
                title: "Fast Order Execution",
                desc: "Execute trades instantly when market opportunities arise and significantly reduce structural delays during volatile conditions.",
              },
              {
                title: "Smart Risk Management",
                desc: "Monitor open positions and manage your system risk metrics effectively with built-in trading tools designed for disciplined safety.",
              },
              {
                title: "Centralized Dashboard",
                desc: "Track margins, analyze structural market movements, and manage active positions entirely from a unified cross-platform interface.",
              },
              {
                title: "Dedicated Trading Support",
                desc: "Receive rapid specialized assistance whenever needed while navigating the complexities of the domestic derivatives market.",
              },
            ].map((feat, fIdx) => (
              <div
                key={fIdx}
                className="glass p-8 rounded-2xl border-[var(--color-border-main)] card-hover flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[var(--color-accent-blue-light)] font-bold">
                    // VALUE_0{fIdx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {feat.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-t border-[var(--color-border-main)] my-20" />

          {/* ── SECTION 2: TARGET AUDIENCE & TARGETED SUITABILITY ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            {/* Left Box: Suitability Checks */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="badge-green mb-3">Suitability Matrix</span>
                <h2 className="text-3xl font-bold text-white font-display tracking-tight">
                  Who Should Consider{" "}
                  <span className="text-gradient-green">F&O Trading</span>?
                </h2>
                <p className="text-[var(--color-text-secondary)] font-sans text-sm mt-2">
                  Whether you're beginning your F&O journey or actively trading
                  derivatives, having access to reliable technology and deep
                  market insights can make a significant operational difference.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Active daily traders",
                  "Experienced investors",
                  "Traders seeking hedging",
                  "Strategy diversifiers",
                  "Derivatives enthusiasts",
                ].map((profile, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(142,150,165,0.03)] border border-[var(--color-border-main)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] shadow-[0_0_10px_rgba(0,255,163,0.5)]" />
                    <span className="text-white font-sans text-sm font-medium">
                      {profile}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Floating Trust Dashboard */}
            <div className="lg:col-span-6">
              <div className="glass-blue p-8 rounded-2xl relative border-[rgba(61,107,255,0.25)] card-hover space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Trade Derivatives with Confidence
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-sans text-xs leading-relaxed mt-2">
                    The derivatives market offers significant structural
                    opportunities, but long-term success requires the right
                    combination of market knowledge, deep trading discipline,
                    and powerful execution technology.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[rgba(11,14,20,0.6)] border border-[var(--color-border-main)] text-xs text-[var(--color-text-muted)] font-mono leading-relaxed">
                  <span className="text-white font-semibold">
                    System Diagnostics:
                  </span>{" "}
                  Apex Trade provides traders with advanced trading tools,
                  real-time analytics, deep market access, and fast execution
                  capabilities to help them navigate futures and options markets
                  with greater overall confidence.
                </div>
              </div>
            </div>
          </div>

          {/* ── CONVERTING FINAL CALL TO ACTION HERO BANNER ── */}
          <div className="glass p-12 rounded-3xl border border-[rgba(61,107,255,0.2)] bg-gradient-to-br from-[rgba(19,25,41,0.95)] via-[rgba(15,20,32,0.85)] to-[rgba(11,14,20,0.95)] text-center relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[var(--color-accent-blue)] opacity-[0.04] blur-[100px] rounded-full" />
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-[var(--color-accent-green)] opacity-[0.04] blur-[100px] rounded-full" />

            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display tracking-tight">
                Experience a Smarter Way to Trade{" "}
                <span className="text-gradient-blue">Futures & Options</span> in
                India
              </h3>
              <p className="text-[var(--color-text-secondary)] font-sans text-sm md:text-base max-w-xl mx-auto">
                Open your digital trading account online today and instantly tap
                into institutional-grade charting speeds, optimized leverage
                engines, and sub-millisecond execution.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact-us"
                  className="btn-primary animate-glow px-10 py-4"
                >
                  Explore Now <span className="typing-cursor"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
