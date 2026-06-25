'use client';
import { Blog, defaultBlogs } from "@/app/blogData";
import { useAuthModal } from "@/app/context/AuthModalContext";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
export default function BlogSidebar({
    relatedBlogs,
}: {
    relatedBlogs?: Blog[];
}) {
    const blogs = relatedBlogs?.length
        ? relatedBlogs
        : defaultBlogs;
    const { toggle: toggleLoginModal } = useAuthModal();

    const handleUser = () => {
        toggleLoginModal();
    }

    return (
        <>
            {/* Search */}
            {/* <div className="bg-bg-secondary p-8 rounded-[2rem] border border-border-main shadow-xl">
                <h3 className="text-text-primary font-black text-sm uppercase tracking-widest mb-6">
                    Search Knowledge Base
                </h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Find a topic..."
                        className="w-full bg-bg-main/50 border border-border-main text-text-primary rounded-2xl px-5 py-4 pr-12 focus:outline-none focus:border-accent-blue transition-all placeholder:text-text-muted"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-accent-blue transition-colors">
                        <Search size={20} />
                    </button>
                </div>
            </div> */}

            {/* Categories */}
            {/* <div className="bg-bg-secondary p-8 rounded-[2rem] border border-border-main shadow-xl">
                <h3 className="text-text-primary font-black text-sm uppercase tracking-widest mb-6 border-b border-border-main pb-4">
                    Categories
                </h3>
                <ul className="space-y-2">
                    {categories.map((cat, i) => (
                        <li key={i}>
                            <a
                                href={cat.link}
                                className="flex items-center justify-between group p-3 rounded-xl hover:bg-white/5 transition-all"
                            >
                                <span className="text-text-muted font-bold group-hover:text-text-primary transition-colors flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                    {cat.name}
                                </span>
                                <ChevronRight
                                    size={16}
                                    className="text-text-muted group-hover:translate-x-1 transition-transform"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div> */}
            <div className="bg-gradient-to-br from-[#0e162b] to-[#060B1A] p-6 md:p-8 rounded-[2rem] border-2 border-[#3D6BFF]/30 shadow-xl relative overflow-hidden group">
                {/* Accent Glow Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3D6BFF] rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <span className="inline-block bg-[#3D6BFF]/10 text-[#3D6BFF] text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-md mb-4 border border-[#3D6BFF]/20">
                            Limited Time Offer
                        </span>
                        <h3 className="text-white font-black text-xl uppercase tracking-tight mb-3 leading-tight">
                            Trade with <span className="text-[#3D6BFF]">500X</span> Leverage
                        </h3>
                        <p className="text-white/60 text-xs font-medium leading-relaxed mb-6">
                            Maximize your capital efficiency on NSE Futures & MCX with sub-millisecond execution speeds.
                        </p>
                    </div>

                    <button onClick={handleUser} className="w-full bg-[#3D6BFF] hover:bg-[#3D6BFF]/80 text-white font-bold py-3.5 px-5 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 group/btn shadow-lg shadow-[#3D6BFF]/20">
                        Open Free Account
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
            {/* Recent posts */}
            {blogs.length > 0 &&
                (
                    <div className="bg-bg-secondary p-8 rounded-[2rem] border border-border-main shadow-xl">
                        <div className="flex items-center justify-between mb-8 border-b border-border-main pb-4">
                            <h3 className="text-text-primary font-black text-sm uppercase tracking-widest">
                                Recent Blogs
                            </h3>
                            <TrendingUp size={16} className="text-accent-blue" />
                        </div>
                        <div className="space-y-8">
                            {blogs.map((post, i) => (
                                <Link className='block' href={`/blogs/${post.title.split(" ").join("-")}`}>

                                    <div key={i} className="flex gap-4 group cursor-pointer">
                                        <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden relative border border-border-main">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-text-primary leading-snug group-hover:text-accent-blue transition-colors line-clamp-2 mb-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold uppercase tracking-widest">
                                                <Calendar size={10} className="text-accent-blue" />
                                                {post.date}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            }

        </>
    );
}
