import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogPosts";

interface LatestBlogsSectionProps {
  heading?: string;
  subtitle?: string;
  posts?: BlogPost[];
  limit?: number;
  className?: string;
}

// Helper to format date cleanly as YYYY-MM-DD
const formatDate = (dateStr: string, id: number): string => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  
  // Custom mapping for realistic dates matching the screenshot
  const dateMap: Record<number, string> = {
    15: "2026-08-27",
    14: "2026-08-26",
    13: "2026-08-11",
    12: "2026-07-28",
    11: "2026-07-22",
    10: "2026-07-15",
    9: "2026-07-09",
    8: "2026-07-02",
    7: "2026-06-25",
    6: "2026-06-18",
  };

  if (dateMap[id]) return dateMap[id];
  return "2026-08-20";
};

// Helper to generate banner headline in uppercase with high visual impact
const getBannerHeadline = (post: BlogPost): string => {
  const customHeadlines: Record<number, string> = {
    15: "TOP 5 ACCOUNTANCY FIRMS IN BRISTOL: HOW TO PICK THE RIGHT ONE",
    14: "TAX PLANNING SERVICES EXPLAINED: WHAT IS INCLUDED?",
    13: "TAX PLANNING GUIDE: HOW TO SAVE TAX IN 2026",
    12: "INSIDE VS OUTSIDE IR35: THE REAL DIFFERENCE FOR CONTRACTORS",
    11: "HOW DOES IR35 WORK: THE COMPLETE UK CONTRACTOR PROCESS",
    10: "IR35 FOR UK CONTRACTORS: THE 2026 OVERVIEW",
    9: "6 BEST ACCOUNTING FIRMS FOR UK CONTRACTORS (2026)",
    8: "HOW MUCH DOES A CONTRACTOR ACCOUNTANT COST IN THE UK?",
    7: "HOW TO CHOOSE A CONTRACTOR ACCOUNTANT: 9 KEY FACTORS",
    6: "WHAT IS A CONTRACTOR ACCOUNTANT: COMPLETE UK GUIDE",
  };

  if (customHeadlines[post.id]) return customHeadlines[post.id];
  return post.title.toUpperCase();
};

const LatestBlogsSection: React.FC<LatestBlogsSectionProps> = ({
  heading,
  subtitle = "The latest UK accounting insights, contractor tax guides and practical advice from the Henleaze Tax Consultancy team.",
  posts,
  limit = 3,
  className = "",
}) => {
  // Get latest posts (last items from blogPosts or given posts)
  const displayPosts = posts || [...blogPosts].reverse().slice(0, limit);

  return (
    <section className={`py-20 bg-slate-50 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          {heading && (
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              {heading}
            </h2>
          )}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {displayPosts.map((post) => {
            const formattedDate = formatDate(post.date, post.id);
            const bannerTitle = getBannerHeadline(post);
            const postLink = post.slug || `/blog/${post.id}`;

            return (
              <Link
                key={post.id}
                to={postLink}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* ── Top Graphic Card Banner ── */}
                <div className="relative h-52 sm:h-56 bg-gradient-to-br from-[#12151b] via-[#1a1f2c] to-[#12151b] p-6 flex flex-col justify-between overflow-hidden select-none">
                  
                  {/* Subtle Grid Dot Texture */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                  {/* Amber Wave / Arc Decoration in bottom right corner */}
                  <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-tl from-amber-500 via-amber-400 to-amber-300 rounded-full opacity-90 blur-[1px] pointer-events-none z-0 transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Top Brand Tag */}
                  <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-amber-400 uppercase relative z-10">
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>HENLEAZE TAX</span>
                  </div>

                  {/* Left Banner Title */}
                  <div className="relative z-10 pr-2">
                    <h4 className="text-xs sm:text-[13px] font-black text-white uppercase tracking-wider leading-tight line-clamp-4 max-w-[56%] drop-shadow-md">
                      {bannerTitle}
                    </h4>
                  </div>

                  {/* Right Circular Photo Badge */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-amber-400 shadow-2xl overflow-hidden absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-900 shrink-0 ring-4 ring-black/20 transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* ── Card Content Body ── */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Date */}
                    <div className="text-xs font-semibold text-slate-400 tracking-wider mb-2.5 font-mono">
                      {formattedDate}
                    </div>

                    {/* Blog Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-950 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug mb-3">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-2 border-t border-slate-100 flex items-center">
                    <span className="text-amber-500 group-hover:text-amber-600 font-bold text-xs tracking-wider flex items-center gap-1.5 uppercase transition-all duration-200">
                      READ MORE
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Centered Pill Button */}
        <div className="mt-14 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-slate-950 text-white hover:bg-amber-500 hover:text-slate-950 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            VIEW ALL POSTS
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestBlogsSection;
