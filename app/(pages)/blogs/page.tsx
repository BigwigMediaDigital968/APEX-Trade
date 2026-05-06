'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Clock, ArrowUpRight, Filter, Bookmark } from 'lucide-react';
import Link from 'next/link';

/**
 * THEME: Midnight Neon
 * Style: Sharp edges, High-contrast, Professional Trading Aesthetic
 */

const BlogPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const featuredPost = {
        title: "Transforming B2B Marketing in the Face of AI",
        category: "AI & Innovation",
        author: "Mike Allton",
        date: "Sep 19, 2024",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1932&auto=format&fit=crop",
        excerpt: "Discover how artificial intelligence is reshaping the landscape of modern trading and marketing strategies..."
    };

    const editorsPicks = [
        {
            title: "How Was Your Last Campaign Received? Measuring Metrics",
            author: "Lisa Kalner Williams",
            date: "Aug 20, 2024",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
        },
        {
            title: "How to Stop Guessing and Start Winning With Social Listening",
            author: "Erica Pollock",
            date: "Jun 18, 2024",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
        },
        {
            title: "How Bulk Publishing Can Transform Your Workday for Better",
            author: "Anna Sonnenberg",
            date: "May 31, 2024",
            image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=1170&auto=format&fit=crop",
        },
        {
            title: "How Bulk Publishing Can Transform Your Workday for Better",
            author: "Anna Sonnenberg",
            date: "May 31, 2024",
            image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop",
        }
    ];

    const allPosts = [
        {
            title: "Elevate Your Hotel and Travel Biz With Social Media",
            author: "Anna Sonnenberg",
            date: "Sep 19, 2024",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
        },
        {
            title: "Overcoming Complacency: How Challenges Can Drive Innovation",
            author: "Mike Allton",
            date: "Sep 17, 2024",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
        },
        {
            title: "Surviving Tough Times: The Case Against Marketing Budgets",
            author: "Mike Allton",
            date: "Sep 12, 2024",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
        },
        {
            title: "Future-Proof Your Brand: The Shift to Decentralized Assets",
            author: "Erica Pollock",
            date: "Sep 05, 2024",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232",
        },
        {
            title: "Tourism Marketing Unplugged: Reaching Global Audiences",
            author: "Lisa Kalner",
            date: "Aug 28, 2024",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
        },
        {
            title: "The Reality of Market Volatility in High-Frequency Trading",
            author: "Tradex Team",
            date: "Aug 22, 2024",
            image: "https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=1170&auto=format&fit=crop",
        }
    ];

    return (
        <div className="bg-[#0B0E14] text-white min-h-screen font-sans">
            {/* Header Space */}
            <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto border-b border-white/5">
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                    Latest <span className="text-[#3D6BFF]">Blogs</span>
                </h1>
                <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold">Market Intelligence & Protocol Updates</p>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* TOP SECTION: FEATURED & EDITOR'S PICKS */}
                <section className="grid lg:grid-cols-12 gap-12 mb-24">

                    {/* Main Featured Card (Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-7 group cursor-pointer"
                    >
                        <div className="mb-6 overflow-hidden">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
                            />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-[#3D6BFF] text-[10px] font-black uppercase tracking-[0.2em]">
                                <span className="bg-[#3D6BFF]/10 px-3 py-1 border border-[#3D6BFF]/20">{featuredPost.category}</span>
                                <span className="text-white/20">|</span>
                                <span className="flex items-center gap-1"><Clock size={12} /> 6 MIN READ</span>
                            </div>
                            <h2 className="text-4xl font-black uppercase tracking-tight leading-none group-hover:text-[#3D6BFF] transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                                    By <span className="text-white">{featuredPost.author}</span> • {featuredPost.date}
                                </div>
                                <ArrowUpRight size={20} className="text-[#3D6BFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Editor's Picks (Right) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 border-l-2 border-[#3D6BFF] pl-4">Editor's Picks</h3>
                        <div className="space-y-8">
                            {editorsPicks.map((post, idx) => (
                                <Link className='block' href={`/blogs/${post.title.split(" ").join("-")}`}>
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-6 group cursor-pointer"
                                    >
                                        <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-all duration-500" />
                                        </div>
                                        <div className="flex flex-col justify-center gap-2">
                                            <h4 className="text-sm font-black uppercase tracking-tight leading-tight group-hover:text-[#3D6BFF] transition-colors">
                                                {post.title}
                                            </h4>
                                            <div className="text-[9px] uppercase font-bold tracking-[0.15em] text-white/30">
                                                By {post.author} <span className="mx-2 text-white/10">•</span> {post.date}
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEARCH & FILTERS BAR */}
                <section className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 py-6 border-y border-white/5">
                    <div className="flex items-center gap-8 overflow-x-auto w-full md:w-auto no-scrollbar">
                        {['All', 'Trading', 'Marketing', 'AI', 'Protocol', 'Insights'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`text-[10px] uppercase font-black tracking-[0.2em] whitespace-nowrap transition-all ${activeFilter === filter ? 'text-[#3D6BFF] border-b-2 border-[#3D6BFF] pb-1' : 'text-white/30 hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                        <input
                            type="text"
                            placeholder="SEARCH ARCHIVE..."
                            className="w-full bg-[#16191E] border border-white/5 p-4 pl-12 text-[10px] font-bold uppercase tracking-widest text-white outline-none focus:border-[#3D6BFF] transition-all"
                        />
                    </div>
                </section>

                {/* ALL POSTS GRID */}
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {allPosts.map((post, idx) => (
                        <Link href={`/blogs/${post.title.split(" ").join("-")}`}>
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 3) * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative mb-6 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">

                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black uppercase tracking-tight leading-tight group-hover:text-[#3D6BFF] transition-colors">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center justify-between text-[9px] uppercase font-bold tracking-[0.2em] text-white/30 pt-2 border-t border-white/5">
                                        <span>By {post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </section>

                {/* PAGINATION / LOAD MORE */}
                <div className="mt-24 text-center">
                    <button className="px-12 py-5 rounded-xl border border-[#3D6BFF] text-[#3D6BFF] hover:bg-[#3D6BFF] hover:text-white transition-all text-xs font-black uppercase tracking-[0.3em]">
                        Access Older Records
                    </button>
                </div>

            </main>

            {/* Footer Newsletter Sub-section */}
            <section className="bg-bg-main border-t border-white/10 mt-24 py-24 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Stay Ahead of the <span className="text-[#00FFA3]">Curve</span></h2>
                    <p className="text-white/40 text-sm tracking-wider">Direct institutional intelligence delivered to your inbox weekly.</p>
                    <div className="flex flex-col sm:flex-row gap-0 border border-white/10 overflow-hidden">
                        <input
                            type="email"
                            placeholder="ENTER TERMINAL ADDRESS"
                            className="flex-grow bg-transparent p-5 text-xs font-bold uppercase tracking-widest outline-none border-b sm:border-b-0 sm:border-r border-white/10"
                        />
                        <button className="bg-[#3D6BFF] px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-[#5E84FF] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;