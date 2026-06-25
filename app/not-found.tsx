import React from 'react';
import { ChevronRight, Home, ShieldAlert, ArrowRight, Activity } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen text-white font-sans flex flex-col justify-between selection:bg-[#3D6BFF] selection:text-white relative overflow-hidden">
      
      {/* ── BACKGROUND LAYER & GLOWS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(61,107,255,0.08),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3D6BFF] rounded-full blur-[160px] opacity-10" />
        
        {/* Subtle decorative grid lines mimicking a chart background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* ── HEADER NAVIGATION SPACE (Optional structural buffer) ── */}

      {/* ── MAIN HERO ERROR INTERFACE ── */}
      <main className="container mx-auto px-6 py-12 flex-grow flex items-center justify-center relative z-10">
        <div className="max-w-2xl w-full text-center">
          
          {/* Main Error Node Visual */}
          <div className="inline-flex items-center justify-center p-5 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-500 mb-8 animate-pulse">
            <ShieldAlert size={48} strokeWidth={1.5} />
          </div>

          {/* Big Bold Data Status */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-4 uppercase">
            404 <span className="text-[#3D6BFF]">Err</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase text-white/90 mb-6">
            Execution Failed — Target Node Missing
          </h2>

          <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
            The page asset, strategy configuration, or dataset reference you are attempting to locate has broken connection or was moved permanently.
          </p>

          {/* Action Execution Hub */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#3D6BFF] hover:bg-[#3D6BFF]/80 text-white font-bold py-4 px-8 rounded-2xl transition-all text-xs uppercase tracking-wider shadow-lg shadow-[#3D6BFF]/20"
            >
              <Home size={14} />
              Return Home
            </Link>

          </div>

        </div>
      </main>

      {/* ── STATUS FOOTER LINE ── */}
    </div>
  );
}