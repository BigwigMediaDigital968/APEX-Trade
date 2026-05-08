'use client';
import React from 'react';
import { X, Check, Zap, Gauge, DollarSign, Headset, ArrowRight } from 'lucide-react';
import { useAuthModal } from '../context/AuthModalContext';

/**
 * Premium 3-Column Comparison Table
 * Designed to contrast "Legacy/Others" with "Apex" using a modern dark UI.
 */
const ComparisonTable = () => {
    const { toggle: authToggle } = useAuthModal();
    
      const handlClick = () => {
        authToggle();
      }
  const rows = [
    {
      feature: "Payout Speed",
      others: "24-48 Hours Delay",
      apex: "Instant Withdrawal",
      icon: <Zap className="w-5 h-5 text-blue-400" />,
      description: "Access your capital immediately after closing positions."
    },
    {
      feature: "Brokerage Fees",
      others: "High & Variable",
      apex: "Flat Low Charges",
      icon: <DollarSign className="w-5 h-5 text-blue-400" />,
      description: "No hidden costs. Institutional rates for retail traders."
    },
    {
      feature: "Execution Speed",
      others: "500ms+ Latency",
      apex: "Ultra-Fast Execution",
      icon: <Gauge className="w-5 h-5 text-blue-400" />,
      description: "Zero-lag order routing via high-frequency servers."
    },
    {
      feature: "Customer Support",
      others: "Email/Ticket Only",
      apex: "24/7 Priority Support",
      icon: <Headset className="w-5 h-5 text-blue-400" />,
      description: "Dedicated account managers available around the clock."
    }
  ];

  return (
    <section className="py-3 sm:py-6 md:py-12 px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Traders Switch to <span className="text-blue-500">Apex</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A side-by-side look at how we are redefining the trading infrastructure.
          </p>
        </div>

        {/* Tabular Container */}
        <div className="rounded-3xl border border-white/10 bg-[#0d1117]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
            <div className="p-6 md:p-8 text-gray-400 font-semibold uppercase tracking-widest text-xs flex items-center">
              Features
            </div>
            <div className="p-6 md:p-8 text-gray-500 font-semibold uppercase tracking-widest text-xs text-center border-x border-white/10">
              Other Platforms
            </div>
            <div className="p-6 md:p-8 text-blue-400 font-bold uppercase tracking-widest text-xs text-center bg-blue-500/5 relative">
              Apex Experience
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 group hover:bg-white/[0.02] transition-colors">
                {/* Column 1: Feature */}
                <div className="p-6 md:p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="hidden md:block p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 group-hover:text-blue-400 transition-colors">
                      {row.icon}
                    </span>
                    <h3 className="text-white font-bold text-sm md:text-base">{row.feature}</h3>
                  </div>
                </div>

                {/* Column 2: Others */}
                <div className="p-6 md:p-6 flex flex-col items-center justify-center border-x border-white/10 text-center">
                  <div className="flex items-center gap-2 text-gray-500 font-medium text-sm md:text-base mb-2">
                    <X className="w-4 h-4 text-red-500/50" />
                    <span>{row.others}</span>
                  </div>
                  <div className="h-1 w-8 bg-white/5 rounded-full"></div>
                </div>

                {/* Column 3: Apex */}
                <div className="p-6 md:p-6 flex flex-col items-center justify-center text-center bg-blue-500/[0.02] relative">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-sm md:text-lg mb-2">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>{row.apex}</span>
                  </div>
                  <div className="h-1 w-16 bg-blue-500/30 rounded-full"></div>
                  {/* Subtle highlight effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-blue-500/5 transition-opacity pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer / CTA Row */}
          <div className="grid grid-cols-3 bg-white/5 border-t border-white/10">
            <div className="p-6 md:p-8 col-span-2 text-gray-400 text-sm italic flex items-center">
              Join 10,000+ traders making the switch this month.
            </div>
            <button onClick={handlClick} className="p-6 md:p-8 bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer flex items-center justify-center gap-2 group">
              <span className="text-white font-bold text-sm md:text-base">Start Trading Now</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Floating Trust Badge */}
        <div className="mt-12 flex justify-center gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-center">
            <div className="text-white font-bold text-xl leading-none">500X</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Leverage</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-white font-bold text-xl leading-none">0.01s</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Execution</div>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="text-center">
            <div className="text-white font-bold text-xl leading-none">24/7</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;