"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, User, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blogData } from "../blogData";

const blogPosts = blogData.slice(0,3)

export default function NewsSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <section id="news" className="py-24 px-6 relative overflow-hidden bg-[var(--color-bg-main)]">
            {/* Background Decorative Glows */}
            <div className="absolute top-[20%] -right-[5%] w-[400px] h-[400px] rounded-full bg-[var(--color-accent-blue)]/5 blur-[100px] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header - Consistent with FeaturesSection style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-accent-green)]/10 border border-[var(--color-border-green)] text-[var(--color-accent-green)] text-xs font-bold uppercase tracking-widest mb-4">
                        <span>Inside NeonTrade</span>
                    </div>
                    <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-[var(--color-text-primary)] tracking-tight leading-[1.1] mb-5">
                        Latest News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-green)]">Expert Insights</span>
                    </h2>
                    <p className="font-sans text-[var(--color-text-secondary)] text-lg max-w-[600px] mx-auto leading-relaxed">
                        Stay ahead of the curve with institutional research, platform updates, and professional trading psychology.
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, i) => (
                        <Link href={post.href} key={i}>
                        <motion.div
                            
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group flex flex-col bg-[#1A1C1E]/40 border border-[var(--color-border-main)] rounded-[20px] overflow-hidden transition-all duration-500 hover:border-[var(--color-accent-blue)]/30 hover:bg-[#1A1C1E]/60 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
                        >
                            {/* Image Header with Category Badge */}
                            <div className="relative h-[220px] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-transparent to-transparent opacity-60" />

                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                {/* Meta Tags */}
                                <div className="flex items-center space-x-4 mb-5">
                                    <div className="flex items-center text-[var(--color-text-muted)] text-xs">
                                        <Calendar size={14} className="mr-1.5 text-accent-blue" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center text-[var(--color-text-muted)] text-xs">
                                        <User size={14} className="mr-1.5 text-accent-blue" />
                                        By {post.author}
                                    </div>
                                </div>

                                <h3 className="font-display text-xl line-clamp-2 font-bold text-[var(--color-text-primary)] mb-4 leading-tight group-hover:text-accent-blue transition-colors duration-300">
                                    {post.title}
                                </h3>

                                <p className="font-sans line-clamp-3 text-[var(--color-text-secondary)] text-[0.95rem] leading-relaxed mb-8 flex-grow">
                                    {post.description}
                                </p>

                                {/* Read Article Action - Matching image_aa0e59.jpg */}
                                <Link href={post.href} className="flex items-center text-white font-bold text-xs uppercase tracking-widest mt-auto cursor-pointer group/link">
                                    <span className="mr-3">Read Article</span>
                                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover/link:bg-[var(--color-accent-blue)] group-hover/link:border-[var(--color-accent-blue)] group-hover/link:translate-x-1">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}