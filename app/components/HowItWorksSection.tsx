"use client";

import { useAuthModal } from "../context/AuthModalContext";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    desc: "Create your trading account in just 5 minutes with a quick and easy signup process.",
    color: "#00FFA3",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#00FFA3" strokeWidth="1.8" fill="rgba(0,255,163,0.1)" />
        <path d="M5 23C5 19.134 9.02944 16 14 16C18.9706 16 23 19.134 23 23"
          stroke="#00FFA3" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Add Funds",
    desc: "Deposit funds securely in under 2 minutes and get ready to start trading instantly.",
    color: "#3D6BFF",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="9" height="9" rx="2" stroke="#3D6BFF" strokeWidth="1.8" fill="rgba(61,107,255,0.1)" />
        <rect x="15" y="4" width="9" height="9" rx="2" stroke="#3D6BFF" strokeWidth="1.8" fill="rgba(61,107,255,0.1)" />
        <rect x="4" y="15" width="9" height="9" rx="2" stroke="#3D6BFF" strokeWidth="1.8" fill="rgba(61,107,255,0.1)" />
        <path d="M15 19.5H24M19.5 15V24" stroke="#3D6BFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Withdraw Profits",
    desc: "Enjoy the fastest withdrawals within 30 minutes with our quick and reliable payout system.",
    color: "#00FFA3",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L24 9V19L14 24L4 19V9L14 4Z" stroke="#00FFA3" strokeWidth="1.8" fill="rgba(0,255,163,0.1)" />
        <path d="M10 14L12.5 16.5L18 11" stroke="#00FFA3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Enjoy Your Profits",
    desc: "Trade confidently and watch your profits grow with high leverage and seamless execution.",
    color: "#3D6BFF",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 13L15 16L22 7" stroke="#3D6BFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="7" r="3" fill="rgba(61,107,255,0.2)" stroke="#3D6BFF" strokeWidth="1.5" />
        <path d="M4 24H24" stroke="rgba(61,107,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {

  const { toggle: authToggle } = useAuthModal();

  const handlClick = () => {
    authToggle();
  }

  return (
    <section
      id="how-it-works"
      className="py-8 md:py-16 px-6 relative bg-[linear-gradient(180deg,transparent_0%,rgba(61,107,255,0.04)_50%,transparent_100%)]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="badge-blue mb-4 inline-block">
            How It Works
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-5">
            Up & Running in{" "}
            <span className="text-gradient-blue">4 Simple Steps</span>
          </h2>
          <p className="font-sans text-text-secondary text-[1rem] max-w-[480px] mx-auto">
            No hassle, no delays — start trading and access your funds anytime with our ultra-fast system.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 md:gap-0 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[44px] left-[12.5%] right-[12.5%] h-[1px] bg-[linear-gradient(90deg,transparent,rgba(61,107,255,0.4),rgba(0,255,163,0.4),transparent)] z-0" />

          {steps.map((step, i) => (
            <div key={i} className="px-6 text-center relative z-1">

              {/* Glow effect only for the third step (index 2) */}
            {i === 2 && (
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[140px] rounded-full blur-[40px] opacity-40 -z-10"
                style={{ background: step.color }}
              />
            )}

              {/* Step number circle */}
              <div
                className="w-[72px] h-[72px] rounded-full bg-[#131929] flex items-center justify-center mx-auto mb-7 relative"
                style={{
                  border: `2px solid ${step.color}40`,
                  boxShadow: `0 0 30px ${step.color}20`,
                }}
              >
                {step.icon}
                <div
                  className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center font-mono text-[0.65rem] font-bold text-[#0B0E14]"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </div>
              </div>

              <h3 className="font-display text-[1.1rem] font-bold text-white mb-3 tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="font-sans text-text-secondary text-[0.9rem] leading-[1.7]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button onClick={handlClick} className="btn-primary text-[1rem] no-underline">
            Start Trading Now 
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
