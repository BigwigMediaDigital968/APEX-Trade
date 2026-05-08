"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Landmark } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { ChevronDown, ArrowRight, Activity, Sparkles, BookOpen, AlertTriangle, Layers, Zap, Package, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    handle: "@ApexTrade",
    href: "#",
    color: "#E1306C",
    gradient: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    icon: <FaInstagram size={28} className="text-white" />,
  },
  {
    name: "WhatsApp",
    handle: "@ApexTrade",
    href: "#",
    color: "#25D366",
    gradient: "linear-gradient(135deg, #25D366, #128C7E)",
    icon: <FaWhatsapp size={28} className="text-white" />,
  }, ,
];

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "Why ApexTrade", href: "/about" },
      {
        label: "Become an Affiliate",
        href: "/become-an-affiliate"
      },
      {
        label: "Become an Broker",
        href: "/#become-a-broker"
      },
      { label: "News & blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Knowledge Center",
    links: [
      { label: "Trading Basics", href: "/trading" },
      { label: "Equity Trading", href: "/equity-trading" },
      { label: "Futures & Options", href: "/futures-and-options" },
      { label: "Commodity Trading", href: "/commodity-trading" },
      { label: "Intraday Trading", href: "/intraday-trading" },
      { label: "Margin Trading", href: "/margin-trading" },
      { label: "Dabba Trading", href: "/dabba-trading" },
    ],
  },
  {
    title: "Products",
    links: [
       { label: "Stocks", href: "/stocks" },
  { label: "Commodities", href: "/commodity" },
  { label: "Indices", href: "/indexes" }
    ],
  },
  

  // {
  //   title: "Legal",
  //   links: [
  //     { label: "Privacy Policy", href: "/privacy-policy" },
  //     { label: "Terms & Conditions", href: "/terms-and-conditions" },
  //   ],
  // },
];

export default function SocialAndFooter() {


  return (
    <>
      <FloatingWhatsApp />
      {/* Premium Social Section - Styled based on social section.png */}
      <section className="py-24 px-6 relative border-t border-[var(--color-border-main)]/50 bg-[var(--color-bg-main)] overflow-hidden">
        {/* Glow Backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent-blue)]/50 to-transparent" />

        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Desktop Label */}
            <div className="hidden lg:block shrink-0 opacity-20 pointer-events-none">
              <h4 className="font-display text-[1.4rem] font-bold text-white uppercase tracking-[0.2em] whitespace-nowrap">
                Connect With Us
              </h4>
            </div>

            {/* Social Icons Container */}
            <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center flex-1">
              {socials.map((social: any) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col items-center gap-4 no-underline group"
                >
                  {/* Icon Box with 3D Shadow - matching social section.png */}
                  <div
                    className="relative w-[72px] h-[72px] rounded-[22px] flex items-center justify-center transition-all duration-500 overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]"
                    style={{
                      background: social.gradient,
                    }}
                  >
                    {/* Inner Glass Layer */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                    {/* Top Shine */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="flex items-center gap-1.5 font-sans text-white text-[0.9rem] font-semibold tracking-wide transition-colors duration-300 group-hover:text-[var(--color-accent-blue-light)]">
                    {social.name}
                    <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Right Desktop Label */}
            <div className="hidden lg:block shrink-0 opacity-20 pointer-events-none">
              <h4 className="font-display text-[1.4rem] font-bold text-white uppercase tracking-[0.2em] whitespace-nowrap">
                Connect With Us
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Deep Dark Footer - Inspired by TradersTrends and Neural Technology refs */}
      <footer className="bg-[#05070A] border-t border-[var(--color-border-main)]/30 pt-20 px-6 pb-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 no-underline mb-6 group">
                <div className="h-[60px] overflow-hidden">
                  <img src="/logo-apex-site.png" alt="ApexTrade Logo" className="object-center w-full h-full" />

                </div>
              </Link>
              <p className="font-sans text-[var(--color-text-secondary)] text-[1rem] leading-[1.8] max-w-[320px] mb-8">
                Empowering your trading through advanced neural networks and institutional-grade automation.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                  <ShieldCheck size={16} className="text-[var(--color-accent-blue)] group-hover:scale-110 transition-transform" />
                  <span className="text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider">SEC Regulated</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default group">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
                  <span className="text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider">FINRA Compliant</span>
                </div>
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-white text-[1rem] mb-7 tracking-tight uppercase tracking-[0.05em]">
                  {col.title}
                </h4>
                <ul className="space-y-4 p-0 list-none">
                  {col.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-sans text-[var(--color-text-secondary)] text-[0.95rem] no-underline transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider and Legal Bottom */}
          <div className="pt-10 border-t border-white/5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <p className="font-sans text-[var(--color-text-muted)] text-[0.85rem]">
                  © 2024 ApexTrade Inc. All rights reserved.
                </p>
                <p className="font-sans text-[var(--color-text-muted)] text-[0.75rem] max-w-[600px] leading-relaxed">
                  Trading financial instruments involves significant risk and is not suitable for every investor. Automated trading results are based on simulated performance and do not guarantee future success.
                </p>
              </div>

              <div className="flex items-center gap-8">
                {[{ label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-[var(--color-text-muted)] text-[0.85rem] no-underline hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}