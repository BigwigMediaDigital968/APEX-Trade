"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import { FaIndianRupeeSign } from "react-icons/fa6";

// ── Types ─────────────────────────────────────────────────────────────────────
interface WithdrawalEvent {
    id: number;
    name: string;
    location: string;
    amount: string;
    time: string;
}

// ── Data pools ────────────────────────────────────────────────────────────────
const FIRST_NAMES = [
    "Arjun", "Priya", "Rahul", "Sneha", "Vikram", "Ananya", "Rohan", "Neha",
    "Kiran", "Divya", "Aditya", "Pooja", "Suresh", "Meera", "Ravi", "Kavya",
    "Amit", "Shreya", "Nikhil", "Ritika", "Dev", "Sana", "Harsh", "Tanya",
    "Vishal", "Preeti", "Siddharth", "Nidhi", "Gaurav", "Simran",
];

const LAST_INITIALS = [
    "S.", "K.", "M.", "R.", "P.", "G.", "V.", "B.", "J.", "N.", "C.", "T.", "D.", "L.",
];

const LOCATIONS = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai",
    "Kolkata", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Indore",
    "Bhopal", "Nagpur", "Vadodara", "Coimbatore",
];

const AMOUNTS = [
    "8,500", "9,200", "10,800", "12,400", "14,000",
    "16,500", "18,200", "19,800",
    "20,500", "21,000", "22,300", "23,700",
    "24,500", "25,200", "26,800", "27,400",
    "28,000", "28,700", "29,200", "30,000"
];

const TIME_AGO = [
    "just now", "1 min ago", "2 min ago", "4 min ago",
    "6 min ago", "9 min ago", "14 min ago", "20 min ago",
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

let uid = 0;
const generateEvent = (): WithdrawalEvent => ({
    id: uid++,
    name: `${pick(FIRST_NAMES)} ${pick(LAST_INITIALS)}`,
    location: pick(LOCATIONS),
    amount: pick(AMOUNTS),
    time: pick(TIME_AGO),
});

// ── Avatar — deterministic colour from name ───────────────────────────────────
const Avatar = ({ name }: { name: string }) => {
    const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
    const hue = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 360;
    return (
        <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-black flex-shrink-0"
            style={{
                background: `linear-gradient(135deg, hsl(${hue},65%,52%), hsl(${(hue + 40) % 360},75%,42%))`,
                color: "#fff",
                boxShadow: `0 2px 8px hsl(${hue},60%,40%, 0.35)`,
            }}
        >
            {initials}
        </div>
    );
};

// ── Card ──────────────────────────────────────────────────────────────────────
const WithdrawalCard = ({
    event,
    onDismiss,
}: {
    event: WithdrawalEvent;
    onDismiss: () => void;
}) => (
     <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.02 }}
      onClick={onDismiss}
      className="relative w-fit max-w-[450px] cursor-pointer group overflow-hidden select-none backdrop-blur-2xl bg-white/[0.06] px-5 py-4"
      style={{
        borderRadius: "20px",
        // Multi-layered depth for dark backgrounds
        boxShadow: `
          0 0 0 1px rgba(255, 255, 255, 0.12) inset,
          0 0 20px rgba(0, 0, 0, 0.4),
          0 12px 30px -10px rgba(0, 0, 0, 0.6)
        `,
      }}
    >
      {/* 1. Glossy Mesh Highlight Animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_60%)] animate-[spin_15s_linear_infinite]" />
      </div>

      {/* 2. Tactile Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "120px",
        }}
      />

      {/* 3. Subtle Sweep Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* 4. Top Accent Line (Glowing) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1.5px] w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.6)]" />

      {/* Content Body: Styled Sentence Format */}
      <div className="relative flex items-center gap-3 text-[14px] leading-relaxed text-white/90 font-medium">
        {/* Animated Pulse Dot */}
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </span>

        <p className="tracking-tight">
          <span className="font-bold text-white tracking-wide">
            {event.name}
          </span>
          {" from "}
          <span className="text-emerald-400 font-semibold italic">
            {event.location}
          </span>
          {" just withdrew "}
          <span className="font-black text-emerald-400 ">
            ₹{event.amount}
          </span>
          {" successfully."}
        </p>

        {/* Small time indicator */}
        {/* <span className="ml-2 text-[10px] text-white/30 uppercase font-bold tracking-widest whitespace-nowrap">
          {event.time}
        </span> */}
      </div>
    </motion.div>
);

// ── Root component ────────────────────────────────────────────────────────────
export default function SocialProofPopups() {
    const [events, setEvents] = useState<WithdrawalEvent[]>([]);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const dismiss = useCallback((id: number) => {
        setEvents((prev) => prev.filter((e) => e.id !== id));
    }, []);

    const addEvent = useCallback(() => {
        const event = generateEvent();
        setEvents((prev) => [...prev.slice(-2), event]); // keep max 3
        setTimeout(() => dismiss(event.id), 2000);       // auto-dismiss 2 s
    }, [dismiss]);

    // recursive random scheduler
    const schedule = useCallback(() => {
        const delay = 4000 + Math.random() * 5000; // 4–13 s gap
        timerRef.current = setTimeout(() => {
            addEvent();
            schedule();
        }, delay);
    }, [addEvent]);

    useEffect(() => {
        // first popup after 3–6 s
        const first = setTimeout(
            () => { addEvent(); schedule(); },
            3000 + Math.random() * 2000,
        );
        return () => {
            clearTimeout(first);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [addEvent, schedule]);

    return (
        <div className={`
  fixed z-[9990] pointer-events-none flex flex-col gap-3

  top-20 left-1/2 -translate-x-1/2 w-[calc(100vw)] items-center

  sm:bottom-20 sm:top-auto sm:w-auto
`}>
            <AnimatePresence mode="popLayout" >
                {events.map((event) => (
                    <div key={event.id} className="pointer-events-auto">
                        <WithdrawalCard event={event} onDismiss={() => dismiss(event.id)} />
                    </div>
                ))}
            </AnimatePresence>
        </div>
    );
}