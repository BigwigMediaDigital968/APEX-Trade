'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    const subheadings = [
        "Institutional grade speed.",
        "Real-time market analytics."
    ];

    // Common typography class to ensure identical sizing
    const sharedTypographyClass = "text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1]";

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#0B0E14] font-sans selection:bg-[#3D6BFF]/30">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">

                <Image src="/images/elevator-video-frame.jpg" width={1920} height={1080} className='absolute object-cover w-full h-full opacity-30' alt="Hero Video Frame" />

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-30"
                >
                    <source src="/videos/elevator-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14]/90 via-[#0B0E14]/40 to-[#0B0E14]" />
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-end h-full px-6 text-center max-w-6xl mx-auto">

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 px-4 py-1.5 rounded-full bg-[#3D6BFF]/10 border border-[#3D6BFF]/20 flex items-center space-x-2"
                >
                    <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#00FFA3]">Trade the Future</span>
                </motion.div>

                <div className="flex flex-col space-y-2">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`${sharedTypographyClass} text-white`}
                    >
                        The Future of Trading.
                    </motion.h1>

                    {/* Typing Subheading (Matched Size) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={`${sharedTypographyClass}`}
                    >
                        <TypewriterText texts={subheadings} />
                    </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <button className="group relative px-5 py-3 bg-[#3D6BFF] text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(61,107,255,0.5)] active:scale-95">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <span className="relative flex items-center">
                            Open Account <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="group flex items-center px-5 py-3 text-white font-bold text-lg border-2 border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all active:scale-95">
                        <Play className="mr-3 w-5 h-5 fill-white" />
                        Learn More
                    </button>
                </motion.div>

                {/* Bottom Metrics */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 mb-10 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-10 w-full"
                >
                    <div>
                        <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">24H Volume</p>
                        <p className="text-white font-mono text-2xl font-bold">$12.4B</p>
                    </div>
                    <div>
                        <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Active Assets</p>
                        <p className="text-white font-mono text-2xl font-bold">500+</p>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Global Nodes</p>
                        <p className="text-white font-mono text-2xl font-bold">14,209</p>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-[#8E96A5] text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Network Speed</p>
                        <p className="text-[#00FFA3] font-mono text-2xl font-bold">0.8ms</p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
const TypewriterText = ({ texts }: { texts: any }) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = texts[index];

            if (!isDeleting) {
                setDisplayText(currentFullText.substring(0, displayText.length + 1));
                if (displayText === currentFullText) {
                    setTimeout(() => setIsDeleting(true), 2000);
                    setSpeed(50);
                }
            } else {
                setDisplayText(currentFullText.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % texts.length);
                    setSpeed(100);
                }
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, texts, speed]);

    return (
        <span className="text-text-muted inline-block">
            {displayText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-1.5 h-[0.9em] ml-2 bg-accent-blue align-middle"
            />
        </span>
    );
};