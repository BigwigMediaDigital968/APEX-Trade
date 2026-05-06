'use client';
import React, { useState } from 'react';
import {
    Search,
    ChevronRight,
    Calendar,
    User,
    Clock,
    TrendingUp,
    ArrowRight,
    MessageSquare,
    ThumbsUp,
    Loader2,
    Check,
} from 'lucide-react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CommunityCTA from '@/app/components/Common/CommunityCTA';
import Link from 'next/link';

// ─── Newsletter widget (matches your project's form style) ───────────────────
const NewsletterCard = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div className="bg-accent-blue p-8 rounded-[2.5rem] shadow-2xl shadow-accent-blue/20 relative overflow-hidden group">
            {/* decorative orb */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.05] rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

            <div className="relative z-10 text-white">
                <h3 className="text-2xl font-black mb-3 leading-tight uppercase tracking-tight">
                    Stay Ahead <br />of the Market.
                </h3>
                <p className="text-white/70 text-sm mb-6 font-medium leading-relaxed">
                    Get our weekly derivative strategy insights delivered straight to your inbox.
                </p>

                {submitted ? (
                    <div className="flex items-center gap-3 py-4">
                        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                            <Check size={16} className="text-white" />
                        </div>
                        <p className="text-sm font-bold text-white/80 uppercase tracking-widest">
                            You're subscribed!
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-all text-sm font-medium"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="cursor-pointer w-full bg-white text-accent-blue font-black py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm uppercase tracking-widest"
                        >
                            {loading ? (
                                <Loader2 size={16} className="animate-spin text-accent-blue" />
                            ) : (
                                'Subscribe Free'
                            )}
                        </button>
                        <p className="text-[10px] text-white/40 text-center uppercase tracking-widest font-bold">
                            No spam. Unsubscribe anytime.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

// ─── Page ────────────────────────────────────────────────────────────────────
const BlogDetails = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { name: 'Why Tradex', link: '#' },
        { name: 'Terms & Conditions', link: '#' },
        { name: 'Privacy Policy', link: '#' },
        { name: 'Become An Affiliate', link: '#' },
    ];

    const recentPosts = [
        {
            title: 'Understanding Option Greeks for Beginners',
            date: 'Oct 12, 2024',
            img: 'https://images.unsplash.com/photo-1707761918029-1295034aa31e?q=80&w=1170&auto=format&fit=crop',
        },
        {
            title: 'Risk Management in High Leverage Trading',
            date: 'Sep 28, 2024',
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073',
        },
        {
            title: 'Top 5 Commodities to Watch in 2025',
            date: 'Sep 15, 2024',
            img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
        },
    ];

    return (
        <div className="min-h-screen bg-bg-main font-sans text-text-secondary">

            {/* ── HERO ── */}
            <section className="relative w-full h-[400px] overflow-hidden flex flex-col justify-end">

                {/* ── BACKGROUND LAYER ── */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop"
                        alt="Trading Terminal Background"
                        className="w-full h-full object-cover grayscale opacity-50"
                    />
                    {/* Dark Overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A] via-[#060B1A]/80 to-transparent" />

                    {/* Glow Effects */}
                    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3D6BFF] rounded-full blur-[120px] opacity-20 pointer-events-none" />
                </div>

                {/* ── CONTENT LAYER (Centered and Bottom Aligned) ── */}
                <div className="container mx-auto px-6 relative z-10 pb-20 text-center">
                    <div className="max-w-4xl mx-auto">

                        {/* Breadcrumb Centered */}
                        <nav className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[#3D6BFF] mb-6">
                            <span>Trading Academy</span>
                            <ChevronRight size={14} className="text-white/20" />
                            <span className="text-white/40">Derivatives</span>
                        </nav>

                        {/* Centered Heading */}
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-10 tracking-tighter uppercase">
                            THE BEST <span className="text-[#3D6BFF]">FREE OPTION</span> TRADING
                            PLATFORM IN 2026
                        </h1>

                        {/* Meta Info Centered at Bottom */}
                        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-left">
                                    <User size={14} className="text-[#3D6BFF]" />
                                    <span >Authored By</span>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-white/10 hidden md:block" />

                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-[#3D6BFF]" />
                                <span>Updated Sep. 19, 2024</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Subtle Bottom Border Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>

            {/* ── MAIN CONTENT ── */}
            <main className="container mx-auto px-6 pt-20 pb-24 relative z-20">
                <div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#060B1A] via-[#060B1A]/80 to-transparent" />

                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* ── ARTICLE (light card — kept exactly as designed) ── */}
                    <article className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
                        {/* Featured image */}
                        <div className="aspect-[21/9] w-full relative">
                            <img
                                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232"
                                alt="Option Trading"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        <div className="p-8 md:p-14 lg:p-16">
                            <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
                                <p className="text-2xl font-semibold text-slate-900 mb-10 leading-snug italic border-l-4 border-accent-blue pl-6">
                                    "The future of retail trading isn't just about low fees; it's about institutional-grade leverage accessible to everyone."
                                </p>

                                <p className="mb-6">
                                    As the 2026 trading season approaches, the focus shift has moved from simple execution to{' '}
                                    <strong>capital efficiency</strong>. Traditional brokers often demand massive margins for
                                    simple derivative plays, effectively locking out small-scale retail participants.
                                </p>

                                <h2 className="text-3xl font-black text-slate-900 mt-14 mb-8">
                                    Breaking Down the Margin Trap
                                </h2>
                                <p className="mb-8">
                                    Most "ordinary" platforms eat away at your profitability through hidden brokerages,
                                    technology fees, and high margin requirements. As illustrated in our comparison studies,
                                    a profit of Rs 28,000 can easily dwindle to Rs 8,000 after traditional deductions.
                                </p>

                                {/* Comparison card */}
                                <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 my-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center">
                                            <TrendingUp size={20} />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900">
                                            Capital Efficiency Comparison
                                        </h3>
                                    </div>
                                    <div className="overflow-x-auto rounded-2xl border border-slate-200">
                                        <table className="w-full text-left border-collapse bg-white">
                                            <thead className="bg-slate-900 text-white">
                                                <tr>
                                                    <th className="p-5 text-sm uppercase font-black">Asset Class</th>
                                                    <th className="p-5 text-sm uppercase font-black">Standard Margin</th>
                                                    <th className="p-5 text-sm uppercase font-black bg-accent-blue">Tradex Pro</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-slate-600 font-medium">
                                                <tr className="border-b border-slate-100">
                                                    <td className="p-5 font-bold text-slate-900">Gold Options</td>
                                                    <td className="p-5 text-red-500">Rs 5,50,000</td>
                                                    <td className="p-5 text-green-600 font-black bg-blue-50/30">Rs 13,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-5 font-bold text-slate-900">Crude Oil</td>
                                                    <td className="p-5 text-red-500">Rs 2,50,000</td>
                                                    <td className="p-5 text-green-600 font-black bg-blue-50/30">Rs 1,500</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Tradex Stands Out</h3>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        'Zero Tech Fees & Hidden Commissions',
                                        'Advanced Negative Balance Protection',
                                        'Intuitive Multi-Window Trading Interface',
                                        'Instant Deposit and Withdrawal',
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                <ArrowRight size={14} />
                                            </div>
                                            <span className="font-bold">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA banner inside article */}
                                <div className="bg-bg-main rounded-[2rem] p-10 text-white relative overflow-hidden mt-16 border border-border-main">
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-black mb-4">Start Your Trading Journey</h4>
                                        <p className="text-text-muted mb-8 max-w-md">
                                            Join 50,000+ active traders and experience the next generation of derivatives execution.
                                        </p>
                                        <button className="bg-accent-blue hover:bg-accent-blue-light px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-accent-blue/20 text-white">
                                            Open Free Account
                                        </button>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-blue rounded-full blur-[100px] opacity-10 -mr-20 -mb-20 pointer-events-none" />
                                </div>
                            </div>

                            {/* Engagement row */}
                            <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                                <div className="flex gap-6">
                                    <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-accent-blue transition-colors">
                                        <ThumbsUp size={20} /> 1.2k
                                    </button>
                                    <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-accent-blue transition-colors">
                                        <MessageSquare size={20} /> 84
                                    </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-black uppercase text-slate-400 tracking-tighter">
                                        Share Article
                                    </span>
                                    <div className="flex gap-2">
                                        {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, idx) => (
                                            <button
                                                key={idx}
                                                className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all"
                                            >
                                                <Icon size={16} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* ── SIDEBAR ── */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* Search */}
                        <div className="bg-bg-secondary p-8 rounded-[2rem] border border-border-main shadow-xl">
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
                        </div>

                        {/* Categories */}
                        <div className="bg-bg-secondary p-8 rounded-[2rem] border border-border-main shadow-xl">
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
                        </div>

                        {/* Recent posts */}
                        <div className="bg-bg-secondary p-8 rounded-[2rem] border border-border-main shadow-xl">
                            <div className="flex items-center justify-between mb-8 border-b border-border-main pb-4">
                                <h3 className="text-text-primary font-black text-sm uppercase tracking-widest">
                                    Recent Blogs
                                </h3>
                                <TrendingUp size={16} className="text-accent-blue" />
                            </div>
                            <div className="space-y-8">
                                {recentPosts.map((post, i) => (
                                    <Link className='block' href={`/blogs/${post.title.split(" ").join("-")}`}>

                                        <div key={i} className="flex gap-4 group cursor-pointer">
                                            <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden relative border border-border-main">
                                                <img
                                                    src={post.img}
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
                    </aside>
                </div>
            </main>

            {/* ── CTA FOOTER ── */}
            <CommunityCTA />
        </div>
    );
};

export default BlogDetails;