"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";
import ClientCounter from "./Counter/ClientCounter";

/**
 * THEME: Midnight Neon
 * Using CSS variables for consistent glassmorphism and colors
 */

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Intraday Trader · NSE Futures",
    avatar: "RS",
    avatarBg: "var(--color-accent-blue)",
    rating: 5,
    text: "Switching to this platform completely changed how I approach each session. The signals are consistent, the execution is fast, and my confidence in every trade has grown measurably.",
    profit: "+₹18,40,000",
    period: "",
  },
  {
    name: "Priya Verma",
    role: "Options Trader · MCX",
    avatar: "PV",
    avatarBg: "var(--color-accent-green)",
    rating: 5,
    text: "I tested a handful of platforms before settling here. Nothing else came close on execution speed or support response time. Trading feels noticeably smoother every single day.",
    profit: "+₹14,75,000",
    period: "",
  },
  {
    name: "Amit Patel",
    role: "Positional Trader · Equities",
    avatar: "AP",
    avatarBg: "var(--color-accent-blue-light)",
    rating: 5,
    text: "The analytics depth here is genuinely rare. Real-time data, clean interface, no lag — it gives me clarity that helps me make better decisions under pressure.",
    profit: "+₹52,10,000",
    period: "",
  },
  {
    name: "Sneha Reddy",
    role: "Commodity Trader · MCX",
    avatar: "SR",
    avatarBg: "#FF6B8A",
    rating: 5,
    text: "The built-in risk controls saved me from a costly mistake early on. The platform manages exposure intelligently and the order fills are consistently at the price I expect.",
    profit: "+₹26,30,000",
    period: "",
  },
  {
    name: "Vikram Singh",
    role: "HNI Trader · Multi-Segment",
    avatar: "VS",
    avatarBg: "#FFB800",
    rating: 5,
    text: "Managing a portfolio of this scale requires a platform you can trust completely. ApexTrade delivers on uptime, speed, and support every time — no exceptions.",
    profit: "+₹3.2 Crore",
    period: "",
  },
  {
    name: "Neha Gupta",
    role: "Beginner Trader · NSE Equities",
    avatar: "NG",
    avatarBg: "#00D4FF",
    rating: 5,
    text: "I was brand new to active trading when I joined. The platform is intuitive, the knowledge resources are genuinely useful, and the support team walked me through everything I needed.",
    profit: "+₹7,90,000",
    period: "",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  // Responsive logic for visible cards and width calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }

      if (containerRef.current) {
        // Calculate width of a single card slot (container width / visible cards)
        setCardWidth(
          containerRef.current.offsetWidth /
            (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3),
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate logic - logic: only slide up to the point where the last cards are visible
  const maxIndex = testimonials.length - visibleCards;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section
      id="testimonials"
      className="py-10 md:py-18 relative overflow-hidden bg-bg-main"
    >
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-green/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-border-blue text-accent-blue text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span>Success Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight mb-4">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-blue to-accent-green">
              <ClientCounter />
            </span>{" "}
            clients
          </h2>
          <p className="font-sans text-text-secondary text-lg max-w-2xl mx-auto">
            Real outcomes from real people - traders who made the switch and
            never looked back.
          </p>
        </motion.div>

        {/* Multi-Card Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-10 px-2">
            <motion.div
              ref={containerRef}
              className="flex"
              animate={{ x: -index * cardWidth }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="h-full relative group px-3">
                    {/* Glassmorphic Card */}
                    <div className="h-full bg-bg-card/40 backdrop-blur-xl border border-border-main rounded-[28px] p-8 transition-all duration-500 group-hover:border-accent-blue/40 group-hover:bg-bg-card-hover/60 group-hover:-translate-y-2">
                      <Quote className="absolute top-6 right-6 text-accent-blue/10 w-12 h-12 pointer-events-none" />

                      <div className="flex flex-col h-full relative z-10">
                        {/* Stars */}
                        <div className="flex space-x-0.5 mb-5">
                          {[...Array(5)].map((_, star) => (
                            <span key={star} className="text-[#FFB800] text-sm">
                              ★
                            </span>
                          ))}
                        </div>

                        {/* Review */}
                        <p className="font-sans text-text-primary leading-relaxed mb-8 grow">
                          "{t.text}"
                        </p>

                        {/* Profit Tag */}
                        <div className="inline-flex items-center space-x-2 bg-accent-green/10 border border-border-green rounded-lg px-3 py-1.5 mb-6 w-fit">
                          <TrendingUp size={14} className="text-accent-green" />
                          <span className="font-mono font-bold text-accent-green text-sm">
                            {t.profit}
                          </span>
                        </div>

                        {/* Author */}
                        <div className="flex items-center space-x-3 pt-6 border-t border-border-main">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs"
                            style={{
                              backgroundColor: t.avatarBg,
                              color: "#fff",
                            }}
                          >
                            {t.avatar}
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="font-bold text-white text-sm truncate">
                              {t.name}
                            </h4>
                            <p className="text-text-muted text-[11px] uppercase tracking-wider truncate">
                              {t.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 pointer-events-none px-2">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-bg-card/80 backdrop-blur-md border border-border-main text-white hover:bg-accent-blue hover:border-accent-blue transition-all active:scale-90 pointer-events-auto shadow-xl"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-bg-card/80 backdrop-blur-md border border-border-main text-white hover:bg-accent-blue hover:border-accent-blue transition-all active:scale-90 pointer-events-auto shadow-xl"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === i ? "w-8 bg-accent-blue" : "w-2 bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
