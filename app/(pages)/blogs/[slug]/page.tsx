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
    HelpCircle,
    Award,
    AlertTriangle,
} from 'lucide-react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import CommunityCTA from '@/app/components/Common/CommunityCTA';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogData } from '@/app/blogData';

export function getBlogBySlug(slug: string) {
    return blogData.find((blog) => {
        const blogSlug = blog.href.split("/").pop();
        return blogSlug === slug;
    });
}

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

async function BlogDetails({ params }: PageProps) {
    const { slug } = await params;

    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

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
            <section className="relative w-full h-[450px] overflow-hidden flex flex-col justify-end">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop"
                        alt="Trading Terminal Background"
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    {/* Dark Overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B1A] via-[#060B1A]/80 to-transparent" />
                    {/* Glow Effects */}
                    <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3D6BFF] rounded-full blur-[120px] opacity-20 pointer-events-none" />
                </div>

                {/* Content Layer (Centered and Bottom Aligned) */}
                <div className="container mx-auto px-6 relative z-10 pb-16 text-center">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb Centered */}
                        <nav className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[#3D6BFF] mb-6">
                            <span>Trading Academy</span>
                            <ChevronRight size={14} className="text-white/20" />
                            <span className="text-white/40">Derivatives</span>
                        </nav>

                        {/* Centered Heading */}
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter uppercase">
                            Choosing the Best <span className="text-[#3D6BFF]">Time Frame</span> for Intraday Trading
                        </h1>

                        {/* Meta Info Centered at Bottom */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-white/40">
                            <div className="flex items-center gap-2">
                                <User size={14} className="text-[#3D6BFF]" />
                                <span>Authored By ApexTrade Research</span>
                            </div>

                            <div className="h-4 w-px bg-white/10 hidden md:block" />

                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-[#3D6BFF]" />
                                <span>Updated Jun. 25, 2026</span>
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
                    <article className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden text-slate-700">
                        
                    </article>

                    {/* ── SIDEBAR ── */}
                    <aside className="lg:col-span-4 space-y-8">


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