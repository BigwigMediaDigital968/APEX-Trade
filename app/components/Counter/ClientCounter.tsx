'use client';

import { useEffect, useState } from 'react';

const START_DATE = new Date('2026-05-09'); // yyyy-mm-dd when you had 10,000 clients
const BASE_COUNT = 10_000;
const DAILY_RATE = 0.013; // 1.3% per day

function getLiveCount(): number {
  const daysSinceStart =
    Math.floor((Date.now() - START_DATE.getTime()) / (1000 * 60 * 60 * 24));
  return Math.floor(BASE_COUNT * Math.pow(1 + DAILY_RATE, daysSinceStart));
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k+`;
  return `${n.toLocaleString()}+`;
}

function formatCount2(n: number): string {
//   if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
//   if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k+`;

  return `${n.toFixed(0).toLocaleString()}+`;
}

export default function ClientCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(getLiveCount()); // set immediately on mount
    const id = setInterval(() => setCount(getLiveCount()), 10000); // update every 10 seconds
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>
      {count !== null ? formatCount2(count) : '10k+'}
    </span>
  );
}