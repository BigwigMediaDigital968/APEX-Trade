"use client";

import { useAuthModal } from "../context/AuthModalContext";

const checks = [
  "AI-generated signals with 84%+ verified win rate.",
  "Execute across Forex, Crypto, Stocks & Indices.",
  "24/7 automated trading — zero downtime, zero emotion.",
  "Institutional risk controls on every single trade.",
];

export default function StatsShowcaseSection() {
  const { toggle: authToggle } = useAuthModal();

  const handlClick = () => {
    authToggle();
  }
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[linear-gradient(180deg,transparent_0%,rgba(0,255,163,0.03)_50%,transparent_100%)]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: copy */}
        <div>
          <span className="badge-green mb-5 inline-block">
            Financial Snapshot
          </span>
          <h2 className="font-display text-[clamp(2rem,3.5vw,2.9rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-5">
            Trading Systems Built{" "}
            <span className="text-gradient-blue">from Market Trends</span>
          </h2>
          <p className="font-sans text-text-secondary text-[0.95rem] leading-[1.8] mb-9 max-w-[440px]">
            Our expert analysts craft profitable automation systems based on top market trends and backtested data spanning 10+ years.
          </p>

          {/* Checklist */}
          {checks.map((check, i) => (
            <div key={i} className="flex items-start gap-3.5 mb-4">
              <div className="w-[22px] h-[22px] rounded-full bg-[#3D6BFF]/15 border border-[#3D6BFF]/30 flex items-center justify-center shrink-0 mt-[1px]">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2.5 5.5L4.5 7.5L8.5 3.5" stroke="#3D6BFF" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-sans text-[#C8CDD6] text-[0.92rem] leading-[1.5]">
                {check}
              </span>
            </div>
          ))}

          <button onClick={handlClick} className="btn-primary mt-8 no-underline inline-flex">
            Get Started
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Right: dashboard cards */}
        <div className="relative h-[480px]">
          {/* Main stats card */}
          <div className="animate-float glass absolute top-0 left-0 w-[280px] rounded-[20px] p-7 z-[2] [animation-delay:0s]">
            <div className="flex justify-between items-center mb-5">
              <span className="font-sans font-semibold text-white text-[0.9rem]">Statistics</span>
              <span className="text-text-muted text-[1.2rem] tracking-[2px]">···</span>
            </div>

            {/* Donut chart (SVG) */}
            <div className="flex justify-center mb-5">
              <div className="relative w-[100px] h-[100px]">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(142,150,165,0.1)" strokeWidth="12" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#3D6BFF" strokeWidth="12"
                    strokeDasharray="170 70" strokeLinecap="round"
                    className="origin-center -rotate-90" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#00FFA3" strokeWidth="12"
                    strokeDasharray="55 185" strokeDashoffset="-170" strokeLinecap="round"
                    className="origin-center -rotate-90" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#FF4B6A" strokeWidth="12"
                    strokeDasharray="15 225" strokeDashoffset="-225" strokeLinecap="round"
                    className="origin-center -rotate-90" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-sans text-text-muted text-[0.6rem]">Total Activity</span>
                  <span className="font-mono text-white font-bold text-[1.1rem]">436</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-center">
                <div className="flex items-center gap-[5px] mb-[2px]">
                  <div className="w-2 h-2 rounded-full bg-accent-blue" />
                  <span className="font-sans text-text-secondary text-[0.75rem]">Income</span>
                </div>
                <span className="font-mono text-white font-semibold text-[1rem]">305</span>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-[5px] mb-[2px]">
                  <div className="w-2 h-2 rounded-full bg-[#FF4B6A]" />
                  <span className="font-sans text-text-secondary text-[0.75rem]">Expense</span>
                </div>
                <span className="font-mono text-white font-semibold text-[1rem]">58</span>
              </div>
            </div>

            <button className="w-full mt-4 p-[10px] bg-transparent border border-border-main/50 rounded-[10px] text-text-secondary font-sans text-[0.82rem] cursor-pointer transition-all duration-200 hover:border-border-blue hover:text-white">
              All Activity
            </button>
          </div>

          {/* Performance card */}
          <div className="animate-float glass bg-[#0B0E14]/90 absolute top-[60px] right-0 w-[240px] rounded-[20px] p-5 z-[3] [animation-delay:-2s]">
            <div className="flex justify-between items-start mb-1.5">
              <div>
                <div className="font-sans text-text-secondary text-[0.7rem]">1-30 July, 2024</div>
                <div className="font-mono text-white font-bold text-[1.5rem] mt-1">$4,528<span className="text-[1rem]">.43</span></div>
              </div>
              <div className="flex items-center gap-1 bg-accent-green/10 border border-accent-green/20 rounded-full px-2.5 py-[3px]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H4M8 2V6" stroke="#00FFA3" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-accent-green text-[0.72rem] font-semibold">14%</span>
              </div>
            </div>

            {/* Mini sparkline */}
            <svg width="100%" height="40" viewBox="0 0 200 40" className="my-2.5">
              <defs>
                <linearGradient id="sparkGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00FFA3" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00FFA3" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 30 L30 25 L60 28 L90 15 L120 18 L150 8 L180 5 L200 2" fill="none" stroke="#00FFA3" strokeWidth="1.5" />
              <path d="M0 30 L30 25 L60 28 L90 15 L120 18 L150 8 L180 5 L200 2 L200 40 L0 40Z" fill="url(#sparkGrad)" />
            </svg>
          </div>

          {/* Best/Worst trade card */}
          <div className="animate-float glass absolute bottom-5 left-10 right-0 rounded-[20px] py-5 px-6 z-[4] [animation-delay:-4s]">
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-[34px] h-[34px] rounded-[10px] bg-accent-green/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 12L5 8L8 10L13 4" stroke="#00FFA3" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-sans font-semibold text-white text-[0.85rem]">Best Trade</div>
                  <div className="font-sans text-text-muted text-[0.72rem]">84.67% Win Rate</div>
                </div>
              </div>
              <span className="font-mono text-accent-green font-semibold text-[0.9rem]">+$234.69</span>
            </div>
            <div className="flex items-center justify-between pt-3.5 border-t border-border-main/80">
              <div className="flex items-center gap-2.5">
                <div className="w-[34px] h-[34px] rounded-[10px] bg-[#FF4B6A]/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4L5 8L8 6L13 12" stroke="#FF4B6A" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-sans font-semibold text-white text-[0.85rem]">Worst Trade</div>
                  <div className="font-sans text-text-muted text-[0.72rem]">15.33% Loss Rate</div>
                </div>
              </div>
              <span className="font-mono text-[#FF4B6A] font-semibold text-[0.9rem]">-$68.46</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
