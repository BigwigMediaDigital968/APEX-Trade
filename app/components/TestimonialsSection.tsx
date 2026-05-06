'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from "lucide-react";

/**
 * THEME: Midnight Neon
 * Using CSS variables for consistent glassmorphism and colors
 */

const testimonials = [
  {
    name: "James Holloway",
    role: "Forex Trader, London",
    avatar: "JH",
    avatarBg: "var(--color-accent-blue)",
    rating: 5,
    text: "ApexTrade completely changed how I trade. My win rate went from 52% to 79% in 3 months. The AI signals are frighteningly accurate.",
    profit: "+$23,400",
    period: "Last 90 days",
  },
  {
    name: "Priya Mehta",
    role: "Crypto Investor, Singapore",
    avatar: "PM",
    avatarBg: "var(--color-accent-green)",
    rating: 5,
    text: "I've tried 6 different trading platforms. ApexTrade is the only one where I don't have to constantly babysit my positions.",
    profit: "+$18,750",
    period: "Last 60 days",
  },
  {
    name: "Marcus Chen",
    role: "Hedge Fund Analyst, NYC",
    avatar: "MC",
    avatarBg: "var(--color-accent-blue-light)",
    rating: 5,
    text: "The institutional-grade analytics are on par with Bloomberg tools costing 10x more. The strategy marketplace alone is worth it.",
    profit: "+$67,200",
    period: "Last 6 months",
  },
  {
    name: "Sofia Reyes",
    role: "Day Trader, Madrid",
    avatar: "SR",
    avatarBg: "#FF6B8A",
    rating: 5,
    text: "As a full-time trader, speed matters. ApexTrade's execution is lightning fast and the risk management has saved me from bad calls.",
    profit: "+$31,500",
    period: "Last 4 months",
  },
  {
    name: "Kwame Asante",
    role: "Portfolio Manager, Dubai",
    avatar: "KA",
    avatarBg: "#FFB800",
    rating: 5,
    text: "We manage $4M in assets through ApexTrade. The automation freed up 4 hours per day and our clients are happier than ever.",
    profit: "+$412K",
    period: "YTD",
  },
  {
    name: "Anna Kowalski",
    role: "Swing Trader, Warsaw",
    avatar: "AK",
    avatarBg: "#00D4FF",
    rating: 5,
    text: "Started with zero trading experience 6 months ago. ApexTrade's guided setup and pre-built strategies made it easy to start.",
    profit: "+$9,800",
    period: "First 6 months",
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
        setCardWidth(containerRef.current.offsetWidth / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3));
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
    <section id="testimonials" className="py-10 md:py-18 relative overflow-hidden bg-bg-main">
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
            Trusted by <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-blue to-accent-green">4,700+ Active Traders</span>
          </h2>
          <p className="font-sans text-text-secondary text-lg max-w-2xl mx-auto">
            Experience institutional-grade growth. See why top traders are switching to NeonTrade.
          </p>
        </motion.div>

        {/* Multi-Card Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-10 px-2" >
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
                            <span key={star} className="text-[#FFB800] text-sm">★</span>
                          ))}
                        </div>

                        {/* Review */}
                        <p className="font-sans text-text-primary leading-relaxed mb-8 grow">
                          "{t.text}"
                        </p>

                        {/* Profit Tag */}
                        <div className="inline-flex items-center space-x-2 bg-accent-green/10 border border-border-green rounded-lg px-3 py-1.5 mb-6 w-fit">
                          <TrendingUp size={14} className="text-accent-green" />
                          <span className="font-mono font-bold text-accent-green text-sm">{t.profit}</span>
                        </div>

                        {/* Author */}
                        <div className="flex items-center space-x-3 pt-6 border-t border-border-main">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs"
                            style={{ backgroundColor: t.avatarBg, color: "#fff" }}
                          >
                            {t.avatar}
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="font-bold text-white text-sm truncate">{t.name}</h4>
                            <p className="text-text-muted text-[11px] uppercase tracking-wider truncate">{t.role}</p>
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
                className={`h-1 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-accent-blue" : "w-2 bg-text-muted"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}