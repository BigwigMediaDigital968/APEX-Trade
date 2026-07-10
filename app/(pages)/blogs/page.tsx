'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowUpRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Blog, blogData } from '@/app/blogData';

const BlogPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Safely pull out your content structures dynamically from blogData array
    const featuredPost = useMemo(() => blogData[0] || null, []);
    
    const editorsPicks = useMemo(() => {
        return blogData.slice(1, 4); // Grabs up to 3 posts following the featured piece
    }, []);

    const categories = ['All', 'Trading', 'Insights', 'Protocol', 'AI'];

    // Client-side filtering logic for the primary list grid
    const filteredPosts = useMemo(() => {
        return blogData.filter((post) => {
            const matchesCategory = activeFilter === 'All' || 
                (post.category && post.category.toLowerCase() === activeFilter.toLowerCase());
            
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (post.description && post.description.toLowerCase().includes(searchQuery.toLowerCase()));
            
            return matchesCategory && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    const getSafeHref = (post: Blog) => {
        if (post.href) return post.href;
        const slug = post.slug || post.title.toLowerCase().replace(/[^a-z0-y\s]/g, '').split(' ').join('-');
        return `/blogs/${slug}`;
    };

    return (
        <div className="bg-[#0B0E14] text-white min-h-screen font-sans antialiased selection:bg-[#3D6BFF]/30 selection:text-white">
            {/* Header Section */}
            <header className="pt-28 pb-12 px-6 max-w-7xl mx-auto border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
                        Latest <span className="text-[#3D6BFF]">Blogs</span>
                    </h1>
                    <p className="text-white/40 uppercase tracking-[0.25em] text-[10px] sm:text-xs font-bold">
                        Market Intelligence & Protocol Updates
                    </p>
                </motion.div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                
                {/* TOP SECTION: FEATURED & EDITOR'S PICKS */}
                {featuredPost && (
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                        {/* Main Featured Card (Left) */}
                        <div className="lg:col-span-7">
                            <Link href={getSafeHref(featuredPost)} className="block group cursor-pointer">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="space-y-6"
                                >
                                    <div className="relative aspect-[16/10] sm:h-[400px] w-full overflow-hidden bg-white/5 border border-white/5 rounded-sm">
                                        <img
                                            src={featuredPost.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"}
                                            alt={featuredPost.title}
                                            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#3D6BFF] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg">
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap items-center gap-3 text-[#3D6BFF] text-[10px] font-black uppercase tracking-[0.15em]">
                                            <span className="bg-[#3D6BFF]/10 px-3 py-1 border border-[#3D6BFF]/20">
                                                {featuredPost.category || "Trading"}
                                            </span>
                                            <span className="text-white/20">|</span>
                                            <span className="flex items-center gap-1 text-white/50"><Clock size={12} /> 6 MIN READ</span>
                                        </div>
                                        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight group-hover:text-[#3D6BFF] transition-colors line-clamp-3">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-white/50 text-sm leading-relaxed max-w-2xl line-clamp-3">
                                            {featuredPost.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">
                                                By <span className="text-white/80">{featuredPost.author || "ApexTrade Team"}</span> • {featuredPost.date}
                                            </div>
                                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#3D6BFF] group-hover:bg-[#3D6BFF]/10 transition-colors">
                                                <ArrowUpRight size={16} className="text-[#3D6BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>

                        {/* Editor's Picks (Right) */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/30 border-l-2 border-[#3D6BFF] pl-4 mb-2">
                                Editor's Picks
                            </h3>
                            <div className="space-y-6 divide-y divide-white/5">
                                {editorsPicks.length > 0 ? (
                                    editorsPicks.map((post, idx) => (
                                        <Link key={idx} className="block group pt-6 first:pt-0" href={getSafeHref(post)}>
                                            <motion.div
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                                className="flex gap-4 sm:gap-6 items-center"
                                            >
                                                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden bg-white/5 border border-white/5 rounded-sm">
                                                    <img 
                                                        src={post.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop"} 
                                                        alt={post.title} 
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-0">
                                                    <span className="text-[9px] font-bold tracking-widest text-[#3D6BFF] uppercase">
                                                        {post.category || "Insights"}
                                                    </span>
                                                    <h4 className="text-sm sm:text-base font-black uppercase tracking-tight leading-snug group-hover:text-[#3D6BFF] transition-colors line-clamp-2">
                                                        {post.title}
                                                    </h4>
                                                    <div className="text-[9px] uppercase font-bold tracking-[0.1em] text-white/30">
                                                        By {post.author || "Team"} <span className="mx-1.5 text-white/10">•</span> {post.date}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-xs text-white/30 italic pt-2">No additional feature spots allocated.</p>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* SEARCH & FILTERS BAR */}
                <section className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12 py-6 border-y border-white/5">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-thin scrollbar-thumb-white/10">
                        {categories.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`text-[10px] uppercase font-black tracking-[0.2em] whitespace-nowrap transition-all relative pb-2 md:pb-1 ${
                                    activeFilter === filter ? 'text-[#3D6BFF]' : 'text-white/40 hover:text-white'
                                }`}
                            >
                                {filter}
                                {activeFilter === filter && (
                                    <motion.div 
                                        layoutId="activeFilterBorder" 
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3D6BFF]" 
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Search Field */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search general archive..."
                            className="w-full bg-[#131722] border border-white/5 rounded-md py-3.5 pl-11 pr-4 text-[11px] font-bold uppercase tracking-widest text-white placeholder-white/20 outline-none focus:border-[#3D6BFF] focus:bg-[#161a26] transition-all"
                        />
                    </div>
                </section>

                {/* ALL POSTS GRID ARCHIVE */}
                <section className="min-h-[300px]">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.length > 0 ? (
                            <motion.div 
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                            >
                                {filteredPosts.map((post, idx) => (
                                    <motion.div
                                        key={post.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Link href={getSafeHref(post)} className="block group cursor-pointer h-full flex flex-col justify-between">
                                            <div className="space-y-4 w-full">
                                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5 border border-white/5 rounded-sm">
                                                    <img 
                                                        src={post.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop"} 
                                                        alt={post.title} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <span className="text-[9px] font-black tracking-widest text-[#3D6BFF] uppercase bg-[#3D6BFF]/5 border border-[#3D6BFF]/10 px-2 py-0.5">
                                                        {post.category || "Trading"}
                                                    </span>
                                                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight leading-snug group-hover:text-[#3D6BFF] transition-colors line-clamp-2 pt-1">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                                                        {post.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-[9px] uppercase font-bold tracking-[0.15em] text-white/30 pt-4 mt-4 border-t border-white/5">
                                                <span>By {post.author || "Team"}</span>
                                                <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                                                    {post.date} <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-24 border border-dashed border-white/5 rounded-xl bg-white/[0.01]"
                            >
                                <p className="text-sm text-white/30 uppercase tracking-widest font-bold">No Records Found Matching Criteria</p>
                                <button 
                                    onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                                    className="mt-4 text-xs text-[#3D6BFF] font-black uppercase tracking-wider underline hover:text-white transition-colors"
                                >
                                    Reset Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>

                {/* PAGINATION / LOAD MORE */}
                <div className="mt-24 text-center">
                    <button className="px-8 py-4 rounded-md border border-[#3D6BFF] text-[#3D6BFF] hover:bg-[#3D6BFF] hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.25em] inline-flex items-center gap-2">
                        Access Older Records
                    </button>
                </div>
            </main>

            {/* Footer Newsletter Section */}
            <section className="bg-[#080A0F] border-t border-white/5 mt-24 py-20 px-6">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
                        Stay Ahead of the <span className="text-[#00FFA3]">Curve</span>
                    </h2>
                    <p className="text-white/40 text-xs sm:text-sm tracking-wider max-w-md mx-auto">
                        Direct institutional intelligence and options updates delivered straight to your terminal weekly.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-0 border border-white/10 rounded-md overflow-hidden max-w-xl mx-auto mt-4 bg-[#0B0E14]">
                        <input
                            type="email"
                            required
                            placeholder="ENTER TERMINAL ADDRESS"
                            className="flex-grow bg-transparent p-4 text-[10px] font-bold uppercase tracking-widest outline-none border-b sm:border-b-0 sm:border-r border-white/10 text-white placeholder-white/20 focus:bg-white/[0.02] transition-colors"
                        />
                        <button type="submit" className="bg-[#3D6BFF] px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#5E84FF] text-white transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;