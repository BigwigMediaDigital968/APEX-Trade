'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import ClientCounter from '@/app/components/Counter/ClientCounter';

/**
 * BecomeAffiliateSection Component
 * A high-impact transition section to redirect users from the Brokerage content
 * toward the Affiliate program.
 */
export default function BecomeAffiliateSection() {
    return (
        <section className=" relative overflow-hidden">
            {/* Decorative Blur Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/10 blur-[120px] pointer-events-none" />

            <div className="relative  bg-gradient-to-br from-accent-blue/5 to-[#0d0f14] shadow-2xl">
                <div className="relative group max-w-7xl mx-auto">
                    {/* Main Card */}
                    <div className="w-full p-8 md:p-16 overflow-hidden relative ">

                        {/* Subtle Grid Pattern Overlay */}

                        <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">

                            {/* Content Side */}
                            <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                                    <Sparkles size={14} />
                                    Looking for more?
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    Become an <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-green-400">
                                        Affiliate Partner
                                    </span>
                                </h2>

                                <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    Join our elite network of influencers and marketers. Earn industry-leading commissions by referring clients to the world's most advanced brokerage infrastructure.
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <Users size={18} className="text-purple-500" />
                                        <span><ClientCounter /> clients</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <TrendingUp size={18} className="text-blue-500" />
                                        <span>Fastest Payouts</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Side */}
                            <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center">
                                <Link href="/become-an-affiliate">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary relative flex items-center gap-3 "
                                >
                                    Apply as Affiliate
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </motion.button>
                                </Link>

                                <p className="mt-6 text-gray-600 text-sm italic">
                                    *Approval usually takes less than 24 hours
                                </p>
                            </div>

                        </div>

                        {/* Corner Decorative Element */}
                    </div>
                    
                </div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-blue/20 blur-3xl rounded-full" />

                    {/* Outer glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-blue-600 rounded-[42px] opacity-0 group-hover:opacity-10 transition duration-1000 blur-xl" />

            </div>
        </section>
    );
}