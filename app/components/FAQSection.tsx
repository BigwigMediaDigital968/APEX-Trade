"use client";
import { useState } from "react";

const tabs = ["General", "Investing", "Partnership", "Payouts"];

const faqs: Record<string, { q: string; a: string }[]> = {
  General: [
    {
      q: "What is ApexTrade?",
      a: "ApexTrade is an AI-powered trading platform that automates your trading strategies. We provide real-time signals, automated execution, and professional-grade analytics — all in one platform.",
    },
    {
      q: "Do I need trading experience to use ApexTrade?",
      a: "No experience required. Our platform is designed for all levels. Beginners can use our pre-built strategies, while professionals can build and deploy custom algorithms.",
    },
    {
      q: "Is my money safe on ApexTrade?",
      a: "Your funds remain in your own brokerage account — we never hold your capital. We connect to your account via read-only or trade-only API keys with strict permission controls.",
    },
    {
      q: "Which brokers and exchanges are supported?",
      a: "We support 50+ brokers and exchanges including Interactive Brokers, TD Ameritrade, Binance, Coinbase Pro, eToro, and many more. Full list available in your dashboard.",
    },
  ],
  Investing: [
    {
      q: "How much capital do I need to start?",
      a: "You can start with as little as $500. However, we recommend a minimum of $5,000 for optimal strategy performance and meaningful risk diversification.",
    },
    {
      q: "Can I automate my trades?",
      a: "Yes, full automation is our core feature. Set your strategy, risk parameters, and ApexTrade will execute trades 24/7 without manual intervention.",
    },
    {
      q: "What strategies can I use for trading?",
      a: "We offer trend-following, mean-reversion, momentum, breakout, and arbitrage strategies. You can also build custom strategies using our no-code builder or Python API.",
    },
    {
      q: "How can I monitor my trading?",
      a: "Your real-time dashboard shows live P&L, open positions, win rate, drawdown, and detailed trade history. Mobile app available for monitoring on the go.",
    },
    {
      q: "Do you offer risk management tools?",
      a: "Yes. We offer stop-loss automation, position sizing rules, max drawdown limits, daily loss limits, and portfolio correlation checks — all customizable.",
    },
    {
      q: "Is leverage available on your platform?",
      a: "Leverage depends on your broker and jurisdiction. ApexTrade supports leveraged trading where your broker permits, with built-in safeguards to prevent over-leveraging.",
    },
  ],
  Partnership: [
    {
      q: "Do you have a referral program?",
      a: "Yes! Refer a friend and earn 20% recurring commission on their subscription for life. No cap on earnings. Access your referral dashboard in your account settings.",
    },
    {
      q: "Can I white-label ApexTrade for my clients?",
      a: "Institutional plan subscribers get white-label options. Contact our enterprise team to discuss custom branding, custom domains, and dedicated infrastructure.",
    },
    {
      q: "How do I become a strategy provider?",
      a: "Apply through our Strategy Marketplace. Once approved and your strategy has a 90-day verified track record, you can publish and earn 30% of subscription revenue from followers.",
    },
  ],
  Payouts: [
    {
      q: "Can I withdraw my investment at any time?",
      a: "Since your funds stay in your broker account, you can withdraw anytime following your broker's withdrawal process. ApexTrade doesn't restrict access to your capital.",
    },
    {
      q: "How does subscription billing work?",
      a: "Subscriptions are charged monthly or annually. We accept all major credit cards, PayPal, and crypto. Cancel anytime with no cancellation fees.",
    },
    {
      q: "Do you provide investment advice?",
      a: "ApexTrade provides tools and signals — not investment advice. Past performance of strategies does not guarantee future results. Always trade within your risk tolerance.",
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Investing");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFaqs = faqs[activeTab] || [];

  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-accent-blue/40 font-mono text-[1.2rem]">{"<<"}</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-white tracking-[-0.03em]">
              FAQ
            </h2>
            <span className="text-accent-blue/40 font-mono text-[1.2rem]">{">>"}</span>
          </div>
          <p className="font-sans text-text-secondary max-w-[500px] mx-auto mt-3">
            Find answers to the most frequently asked questions about our platform and services.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setOpenIndex(0); }}
              className={`relative bg-transparent border-none cursor-pointer font-sans text-[0.92rem] px-5 py-2.5 rounded-[10px] transition-all duration-200 ${activeTab === tab ? "font-semibold text-white" : "font-normal text-text-secondary hover:text-white"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-[linear-gradient(90deg,#3D6BFF,#00FFA3)] rounded-[2px]" />
              )}
            </button>
          ))}
        </div>

        {/* FAQ grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(480px,1fr))] gap-3">
          {currentFaqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item rounded-[14px] overflow-hidden border transition-all duration-200 ${openIndex === i ? "border-accent-blue/30 bg-accent-blue/5" : "border-border-main"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full border-none cursor-pointer p-5 flex items-center justify-between gap-4 text-left transition-colors duration-200 ${openIndex === i ? "bg-accent-blue/10" : "bg-[#131929]/80 hover:bg-[#131929]"
                  }`}
              >
                <span className="font-sans font-medium text-white text-[0.92rem]">
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 border ${openIndex === i
                      ? "bg-accent-blue/15 border-accent-blue/30"
                      : "bg-border-main/50 border-border-main"
                    }`}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform duration-300 ${openIndex === i ? "rotate-45" : "rotate-0"
                      }`}
                  >
                    <path d="M6 2V10M2 6H10" stroke={openIndex === i ? "#3D6BFF" : "#8E96A5"} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 pt-1 bg-transparent">
                  <p className="font-sans text-text-secondary text-[0.88rem] leading-[1.75]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-primary no-underline">
            Still have questions?
          </a>
          <a href="#" className="btn-secondary no-underline">
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
