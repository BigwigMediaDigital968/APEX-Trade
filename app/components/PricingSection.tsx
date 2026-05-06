"use client";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    yearly: 39,
    desc: "Perfect for beginners taking their first steps into automated trading.",
    color: "#8E96A5",
    features: [
      "3 Active Strategies",
      "1 Broker Connection",
      "Basic AI Signals",
      "Email Support",
      "Paper Trading Mode",
      "Mobile App Access",
    ],
    missing: ["Advanced Analytics", "Priority Execution", "Strategy Marketplace"],
  },
  {
    name: "Pro",
    monthly: 149,
    yearly: 119,
    desc: "For serious traders who demand performance and precision.",
    color: "#3D6BFF",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Unlimited Strategies",
      "5 Broker Connections",
      "Full AI Signal Suite",
      "Priority Support 24/7",
      "Advanced Analytics",
      "Priority Execution",
      "Strategy Marketplace",
      "Risk Management Suite",
    ],
    missing: [],
  },
  {
    name: "Institutional",
    monthly: 499,
    yearly: 399,
    desc: "Enterprise-grade infrastructure for professional trading firms.",
    color: "#00FFA3",
    features: [
      "Unlimited Everything",
      "Unlimited Brokers",
      "Custom AI Models",
      "Dedicated Account Manager",
      "White-label Option",
      "API Access",
      "Custom Integrations",
      "SLA Guarantee",
    ],
    missing: [],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-green mb-4 inline-block">
            Simple Pricing
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-[-0.03em] mb-5">
            Transparent Pricing,{" "}
            <span className="text-gradient-green">No Hidden Fees</span>
          </h2>
          <p className="font-sans text-text-secondary mb-8">
            Start free for 14 days. No credit card required.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-[#131929] p-1.5 rounded-[14px] border border-border-main">
            <button
              onClick={() => setYearly(false)}
              className={`border-none rounded-[10px] px-6 py-2.5 font-sans font-semibold text-[0.9rem] cursor-pointer transition-all duration-200 ${
                !yearly ? "bg-[linear-gradient(135deg,#3D6BFF,#5E84FF)] text-white" : "bg-transparent text-text-secondary hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`border-none rounded-[10px] px-6 py-2.5 font-sans font-semibold text-[0.9rem] cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                yearly ? "bg-[linear-gradient(135deg,#3D6BFF,#5E84FF)] text-white" : "bg-transparent text-text-secondary hover:text-white"
              }`}
            >
              Yearly
              <span className="bg-accent-green/20 text-accent-green text-[0.7rem] px-2 py-0.5 rounded-full font-semibold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-[24px] p-9 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[linear-gradient(145deg,#131929_0%,#1A2235_100%)] border border-accent-blue/40 scale-105 shadow-[0_0_50px_rgba(61,107,255,0.15),0_20px_60px_rgba(0,0,0,0.4)] z-10"
                  : "bg-[#131929] border border-border-main scale-100 shadow-none z-0 hover:border-accent-blue/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[linear-gradient(135deg,#3D6BFF,#5E84FF)] text-white text-[0.75rem] font-bold px-5 py-1.5 rounded-full tracking-wider uppercase font-sans whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-7">
                <h3
                  className="font-display text-[1.2rem] font-bold mb-2"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <p className="font-sans text-text-secondary text-[0.88rem] mb-5">
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-[2.6rem] font-bold text-white">
                    ${yearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="font-sans text-text-secondary text-[0.9rem]">/month</span>
                </div>
                {yearly && (
                  <div className="font-sans text-accent-green text-[0.8rem] mt-1">
                    Save ${(plan.monthly - plan.yearly) * 12}/year
                  </div>
                )}
              </div>

              <a
                href="#"
                className={`block text-center p-[13px] rounded-xl font-sans font-semibold text-[0.95rem] no-underline mb-7 transition-all duration-250 border ${
                  plan.highlight
                    ? "bg-[linear-gradient(135deg,#3D6BFF,#5E84FF)] text-white border-transparent"
                    : "bg-transparent text-white border-border-main hover:border-accent-blue/50 hover:bg-accent-blue/10"
                }`}
              >
                Get Started Free
              </a>

              <div className="border-t border-border-main/80 pt-6">
                {plan.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2.5 mb-3">
                    <div
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: `rgba(${
                          plan.color === "#00FFA3" ? "0,255,163" : plan.color === "#3D6BFF" ? "61,107,255" : "142,150,165"
                        },0.15)`,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke={plan.color === "#8E96A5" ? "#8E96A5" : plan.color} strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="font-sans text-[#C8CDD6] text-[0.88rem]">{f}</span>
                  </div>
                ))}
                {plan.missing.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2.5 mb-3 opacity-40">
                    <div className="w-[18px] h-[18px] rounded-full bg-border-main flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3 3L7 7M7 3L3 7" stroke="#5A6478" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="font-sans text-text-muted text-[0.88rem]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
