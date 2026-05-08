"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Activity, ShieldCheck, Sparkles, BookOpen, AlertTriangle, Layers, Zap, Package, TrendingUp, BarChart3, Handshake } from "lucide-react";
import { useAuthModal } from "../context/AuthModalContext";
import Link from "next/link";
import Image from "next/image";

// Updated navLinks with support for sub-items
const navLinks = [
  { label: "Home", href: "/" },

  {
    label: "About Us",
    href: "/about",
    items: [
      { label: "Why ApexTrade", desc: "Our technology advantage", icon: <BookOpen size={18} />, href: "/about" },
      {
        label: "Become an Affiliate",
        desc: "Earn commissions by referring traders to our platform",
        icon: <Handshake size={18} />,
        href: "/become-an-affiliate"
      },
      { label: "Privacy Policy", desc: "How we protect your data", icon: <ShieldCheck size={18} />, href: "/privacy-policy" },
      { label: "Terms & Conditions", desc: "How we protect your data", icon: <ShieldCheck size={18} />, href: "/terms-and-conditions" },
      // { label: "Our Story", desc: "Built for traders, by traders", icon: <Sparkles size={18} />, href: "/story" },
    ]
  },
  {
    label: "Knowledge Center",
    href: "#",
    items: [
      {
        label: "Trading Basics",
        desc: "Understand markets, orders & core concepts",
        icon: <BookOpen size={18} />,
        href: "/trading"
      },
      {
        label: "Equity Trading",
        desc: "Learn how to trade stocks effectively",
        icon: <BarChart3 size={18} />,
        href: "/equity-trading"
      },
      {
        label: "Futures & Options",
        desc: "Master derivatives and hedging strategies",
        icon: <TrendingUp size={18} />,
        href: "/futures-and-options"
      },
      {
        label: "Commodity Trading",
        desc: "Explore gold, crude & global commodities",
        icon: <Package size={18} />,
        href: "/commodity-trading"
      },
      {
        label: "Intraday Trading",
        desc: "Capture short-term market opportunities",
        icon: <Zap size={18} />,
        href: "/intraday-trading"
      },
      {
        label: "Margin Trading",
        desc: "Use leverage to enhance buying power",
        icon: <Layers size={18} />,
        href: "/margin-trading"
      },
      {
        label: "Dabba Trading",
        desc: "Risks, legality & why to avoid it",
        icon: <AlertTriangle size={18} />,
        href: "/dabba-trading"
      }
    ]
  },
  {
    label: "Products",
    href: "#",
    items: [
      {
        label: "CFD Instruments",
        desc: "Trade contracts for difference across global assets",
        icon: <TrendingUp size={18} />,
        href: "/cfd-instrument"
      },
      {
        label: "Stocks",
        desc: "Invest and trade shares from leading companies",
        icon: <BarChart3 size={18} />,
        href: "/stocks"
      },
      {
        label: "Commodities",
        desc: "Access gold, oil, and other key commodities",
        icon: <Package size={18} />,
        href: "/commodity"
      },
      {
        label: "Indices",
        desc: "Trade major global market indices",
        icon: <Activity size={18} />,
        href: "/indexes"
      }
    ]
  },
  { label: "Blogs", href: "/blogs" },

  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const { toggle: toggleLoginModal } = useAuthModal();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<(number | null)>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${scrolled
        ? "bg-[#0B0E14]/80 backdrop-blur-[24px] border-b border-white/5 py-3"
        : "bg-transparent border-b border-transparent py-5"
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px] no-underline group">
          <div className="h-[40px] overflow-hidden">
            <img src="/logo-apex-site.png" alt="ApexTrade Logo" className="object-center w-full h-full" />

          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-[0.92rem] font-medium no-underline transition-all duration-300 ${activeDropdown === index ? "text-white bg-white/5" : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
                {link.items && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              {/* Glossy Dropdown Menu */}
              <AnimatePresence>
                {link.items && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 rounded-[24px] bg-[#0F1219]/95 backdrop-blur-[30px] border border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden z-50 
                    ${link.items.length > 4 ? "w-[560px]" : "w-[280px]"}`}
                  >
                    {/* Top Shine Reflection */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className={`relative z-10 grid gap-1 ${link.items.length > 4 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {link.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-4 p-3.5 rounded-[16px] no-underline transition-all duration-300 hover:bg-white/5 group/item"
                        >
                          <div className="w-10 h-10 flex-shrink-0 rounded-[12px] bg-white/5 flex items-center justify-center text-white/50 group-hover/item:bg-[#3D6BFF]/10 group-hover/item:text-[#3D6BFF] transition-all">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-white text-[0.9rem] font-bold mb-0.5 group-hover/item:text-[#3D6BFF] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-white/40 text-[0.75rem] leading-tight line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => toggleLoginModal()}
            className="group flex items-center cursor-pointer gap-2 bg-gradient-to-r from-[#3D6BFF] to-[#5E84FF] text-white font-bold text-[0.9rem] px-6 py-2.5 rounded-full shadow-[0_4px_15px_rgba(61,107,255,0.3)] hover:shadow-[0_8px_25px_rgba(61,107,255,0.5)] hover:-translate-y-0.5 transition-all no-underline"
          >
            Login / Register
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-white/5 border border-white/10 rounded-xl p-2.5 cursor-pointer text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileMenuOpen ? (
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0E14]/98 backdrop-blur-[20px] border-t border-white/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4 h-svh" style={{ overflowY: "auto" }}>
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col gap-2">
                  {link.items ? (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="flex items-center justify-between font-sans text-lg font-bold text-white no-underline py-2 w-full text-left cursor-pointer"
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-sans text-lg font-bold text-white no-underline py-2"
                    >
                      {link.label}
                    </Link>
                  )}
                  <AnimatePresence>
                    {link.items && mobileExpanded === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 flex flex-col gap-3 border-l border-white/10 mb-2 mt-1">
                          {link.items.map(sub => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-white/60 text-sm no-underline py-2 block hover:text-white transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button onClick={() => { toggleLoginModal(); setMobileMenuOpen(false); }} className="bg-[#3D6BFF] text-white py-4 rounded-2xl font-bold text-center no-underline mt-4">
                Login / Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}