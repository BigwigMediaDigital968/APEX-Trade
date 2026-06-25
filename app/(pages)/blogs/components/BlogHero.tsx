import { Blog } from "@/app/blogData";
import { Calendar, ChevronRight, User } from "lucide-react";
import Link from "next/link";

interface BlogHeroProps {
    blog: Blog;
}

const BlogHero = ({ blog }: BlogHeroProps) => {
    const slug = blog.href.split("/").pop() || "";

    const title = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <>
            <section className="relative w-full h-[450px] overflow-hidden flex flex-col justify-end">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={blog.image || "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop"}
                        alt={blog.title}
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
                        <nav className="flex items-center justify-center gap-2 text-xs font-normal uppercase tracking-[0.3em] mb-6">
                            <Link href="/blogs" className="text-[#3D6BFF]">
                                Blog
                            </Link>

                            <ChevronRight size={14} className="text-white/20" />

                            <span className="text-white/40">{title}</span>
                        </nav>

                        {/* Centered Heading */}
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-white leading-tight mb-8 tracking-tighter uppercase">
                            {blog.title}
                        </h1>

                        {/* Meta Info Centered at Bottom */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-white/40">
                            <div className="flex items-center gap-2">
                                <User size={14} className="text-[#3D6BFF]" />
                                <span>{blog.author || "ApexTrade Team"}</span>
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
        </>
    );
};

export default BlogHero;