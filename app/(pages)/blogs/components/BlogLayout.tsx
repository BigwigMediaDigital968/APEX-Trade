import { Blog } from "@/app/blogData";
import BlogHero from "./BlogHero";
import BlogSidebar from "./BlogSidebar";
import CommunityCTA from "@/app/components/Common/CommunityCTA";

type BlogLayoutProps = {
    blog: Blog;
    relatedBlogs?: Blog[];
    children: React.ReactNode;
};

export default function BlogLayout({
    blog,
    relatedBlogs,
    children,
}: BlogLayoutProps) {
    return (
        <>
            <div className="min-h-screen bg-bg-main font-sans text-text-secondary">

                <BlogHero
                    blog={blog}
                />


                <main className="container mx-auto px-6 pt-20 pb-24 relative z-20">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#060B1A] via-[#060B1A]/80 to-transparent" />

                    <div className="grid lg:grid-cols-12 gap-8 items-start">

                        {/* ── ARTICLE (light card — kept exactly as designed) ── */}
                        <article className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden text-slate-700">
                            {children}
                        </article>
                        {/* Engagement row */}
                        {/* <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex gap-6">
                        <button className="flex items-center gap-2 text-slate-400 font-bold hover:text-[#3D6BFF] transition-colors text-sm">
                            <ThumbsUp size={18} /> 1.2k
                        </button>
                        <button className="flex items-center gap-2 text-slate-400 font-bold hover:text-[#3D6BFF] transition-colors text-sm">
                            <MessageSquare size={18} /> 84
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                            Share Article
                        </span>
                        <div className="flex gap-2">
                            {['FB', 'TW', 'LN'].map((network, idx) => (
                                <button
                                    key={idx}
                                    className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 font-black text-xs flex items-center justify-center hover:bg-[#3D6BFF] hover:text-white transition-all"
                                >
                                    {network}
                                </button>
                            ))}
                        </div>
                    </div>
                </div> */}

                        <aside className="lg:col-span-4 space-y-8 sticky top-20">

                            <BlogSidebar relatedBlogs={relatedBlogs} />
                        </aside>
                    </div>
                </main>
                <CommunityCTA />
            </div>
        </>
    );
}