export interface Blog {
  slug?: string;
  title: string;
  description?: string;
  category?: string;
  author?: string;
  date: string;
  image?: string;
  href: string;
}

export const blogData: Blog[] = [
  {
    title: "Best Time Frame for Intraday Trading (1-Min to 60-Min Explained)",
    description:
      "Confused about which chart to use for intraday trading? This complete guide explains the best time frame for intraday trading — from 1-minute to 60-minute charts — so you can trade smarter every session.",
    author: "ApexTrade Team",
    date: "Jun 25, 2026",
    image:
      "https://images.unsplash.com/photo-1735467547583-d9fc4503f238?q=80&w=1332&auto=format&fit=crop",
    href: "/blogs/best-time-frame-for-intraday-trading",
  },
  {
    title:
      "Futures and Options Explained: A Beginner's Guide to Derivatives Trading",
    description:
      "Learn the basics of futures and options trading with our comprehensive beginner's guide. Understand the fundamentals and start trading with confidence.",
    author: "ApexTrade Team",
    date: "10 July, 2026",
    image: "/blog-images/blog2/future-options-1.png",
    href: "/blogs/futures-and-options-explained-beginner-guide",
  },
  {
    title:
      "What Is a Margin Trading Facility in Trading? A Complete Guide",
    description:
      "What is a margin trading facility? Learn how MTF works, its risks, benefits, and expert trading tips to use leverage wisely. Read the full guide on Apex Trade.",
    author: "ApexTrade Team",
    date: "15 July, 2026",
    image: "/blog-images/blog3/5.png",
    href: "/blogs/margin-trading-facility-explained",
  },
];

export const defaultBlogs = [];
