"use client";
import { useState } from "react";

// const tabs = ["General", "Investing", "Partnership", "Payouts"];
const tabs = ["Basic", "Trading", "Withdrawals"];
const faqs: Record<string, { q: string; a: any }[]> = {
  Basic:  [
    {
      q: "How much capital do I need to start?",
      a: (
        <>
          You can start trading with a minimum deposit based on your chosen segment.
          Our platform is designed to support both beginners and experienced traders
          with flexible capital options.
        </>
      ),
    },
    {
      q: "Is this suitable for beginners?",
      a: (
        <>
          Yes, our platform is designed for both beginners and experienced traders
          with simple onboarding and easy-to-use tools.
        </>
      ),
    },
    {
      q: "How do I open a free demat account on ApexTrade?",
      a: (
        <>
          Opening a free demat account is quick and fully online. Click 'Open Free Account', fill in your basic details, complete KYC verification, and you're ready to trade — all within minutes, with no paperwork required.
        </>
      ),
    },
    {
      q: "Is ApexTrade the best trading platform for beginners?",
      a: (
        <>
          ApexTrade is designed to be accessible for new traders while offering institutional-grade tools for experts. The platform offers a guided onboarding flow, 24/7 support, and a clean interface — making it one of the best online trading platforms for beginners in India.
        </>
      ),
    },
    {
      q: "Is my fund safe?",
      a: (
        <>
          We use secure systems and reliable processes to ensure your funds
          and transactions are protected at all times.
        </>
      ),
    },
    {
      q: "Do you provide customer support?",
      a: (
        <>
          Yes, our support team is available 24/7 to assist you anytime.
        </>
      ),
    },
  ],
  Trading: [
    {
      q: "What leverage do you provide?",
      a: (
        <>
          We offer:
          <br />• 500X margin in intraday (MCX & NSE Futures)
          <br />• 60X margin in holding (MCX & NSE Futures)
          <br />• Options trading with 7X intraday & 4X holding
          <br />
          Leverage may vary based on market conditions.
        </>
      ),
    },
    {
      q: "What can I trade on your platform?",
      a: (
        <>
          You can trade:
          <br />• MCX (Commodities)
          <br />• NSE Futures
          <br />• Options Trading
          <br />
          All from a single account.
        </>
      ),
    },
    {
      q: "Do you charge high brokerage?",
      a: (
        <>
          No, we offer low brokerage charges to ensure maximum profitability
          for our traders.
        </>
      ),
    },
  ],
   Withdrawals: [
    {
      q: "How fast can I add funds?",
      a: (
        <>
          Deposits are processed instantly, and you can start trading within 2 minutes
          after adding funds.
        </>
      ),
    },
    {
      q: "How fast are withdrawals processed?",
      a: (
        <>
          We provide one of the fastest payout systems, with withdrawals processed
          within 30 minutes in most cases.
        </>
      ),
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Basic");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentFaqs = faqs[activeTab] || [];

  return (
    <section id="faq" className="py-8 md:py-18 px-6 relative">
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
              onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-3">
            {currentFaqs.slice(0, Math.ceil(currentFaqs.length / 2)).map((faq, i) => (
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
                    <p className="font-sans text-text-secondary text-[0.88rem] leading-[1.75] space-y-2">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {currentFaqs.slice(Math.ceil(currentFaqs.length / 2)).map((faq, i) => (
              <div
                key={-(i + 1)}
                className={`faq-item rounded-[14px] overflow-hidden border transition-all duration-200 ${openIndex === -(i + 1) ? "border-accent-blue/30 bg-accent-blue/5" : "border-border-main"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === -(i + 1) ? null : -(i + 1))}
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
                      className={`transition-transform duration-300 ${openIndex === -(i + 1) ? "rotate-45" : "rotate-0"
                        }`}
                    >
                      <path d="M6 2V10M2 6H10" stroke={openIndex === -(i + 1) ? "#3D6BFF" : "#8E96A5"} strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>
                {openIndex === -(i + 1) && (
                  <div className="px-6 pb-5 pt-1 bg-transparent">
                    <p className="font-sans text-text-secondary text-[0.88rem] leading-[1.75]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 flex gap-4 justify-center flex-wrap">
          <a href="#contact" className="btn-primary no-underline">
            Contact Support 24/7
          </a>
        </div>
      </div>
    </section>
  );
}
