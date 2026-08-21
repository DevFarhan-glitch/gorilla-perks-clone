import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const allBlogs = [
  {
    id: "what-is-a-contractor-accountant",
    slug: "/what-is-a-contractor-accountant",
    title: "What Is a Contractor Accountant?",
    subtitle: "A Complete Guide for UK Contractors, Freelancers & Limited Companies",
    excerpt:
      "If you've recently gone freelance, set up a limited company, or started contracting — one of the first questions you'll face is: do I need a specialist accountant? This guide walks you through everything you need to know.",
    category: "Contractor Tax Guide",
    categoryColor: "amber",
    image: "/what-is.jpeg",
    author: "Henleaze Team",
    date: "June 2026",
    readTime: "8 min read",
    featured: true,
    tags: ["IR35", "Limited Company", "Contractor Basics"],
  },
  {
    id: "how-to-choose-contractor-accountant",
    slug: "/how-to-choose-contractor-accountant",
    title: "How to Choose a Contractor Accountant",
    subtitle: "9 Key Factors Every UK Contractor Should Consider",
    excerpt:
      "Not all contractor accountants offer the same level of expertise. Discover the 9 key factors you should weigh before signing up — from IR35 knowledge to fees, software and dedicated support.",
    category: "Contractor Accounting Guide",
    categoryColor: "blue",
    image: "/blog-3.jpeg",
    author: "Henleaze Team",
    date: "June 2026",
    readTime: "10 min read",
    featured: false,
    tags: ["How to Choose", "IR35", "Fees", "Qualifications"],
  },
  {
    id: "why-contractors-need-specialist-accountant",
    slug: "/why-contractors-need-specialist-accountant",
    title: "Why Do Contractors Need a Specialist Accountant in the UK?",
    subtitle: "IR35, Tax Efficiency & HMRC Protection Explained",
    excerpt:
      "A general accountant isn't enough when you're contracting. Here's why UK contractors need a specialist — from IR35 risks to salary and dividend planning, director duties and HMRC protection.",
    category: "Contractor Tax Guide",
    categoryColor: "green",
    image: "/why-is-a-specialist-accountant-important-for-uk-contractors.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "9 min read",
    featured: false,
    tags: ["IR35", "Tax Efficiency", "HMRC", "Limited Company"],
  },
  {
    id: "how-much-does-a-contractor-accountant-cost-in-the-uk",
    slug: "/how-much-does-a-contractor-accountant-cost-in-the-uk",
    title: "How Much Does a Contractor Accountant Cost?",
    subtitle: "Contractor Accountant Fees (2026): A Complete Guide for UK Contractors",
    excerpt:
      "Wondering how much a contractor accountant costs? Learn about contractor accountant fees, what's included, pricing models and what to expect in the UK.",
    category: "Contractor Accounting Guide",
    categoryColor: "blue",
    image: "/factors.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "8 min read",
    featured: false,
    tags: ["Fees", "Pricing Models", "Tax Relief", "Limited Company"],
  },
  {
    id: "top-accounting-firms-for-contractors-uk",
    slug: "/top-accounting-firms-for-contractors-uk",
    title: "6 Best Accounting Firms for Contractors in the UK (2026)",
    subtitle: "Top Accounting Firms for Contractors in the UK (2026 Guide)",
    excerpt:
      "Compare the top accounting firms for contractors in the UK. Explore specialist services, IR35 expertise, pricing and choose the right accountant today.",
    category: "Contractor Accounting Guide",
    categoryColor: "blue",
    image: "/top-accounting-firms.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "9 min read",
    featured: false,
    tags: ["Accounting Firms", "IR35", "Fees", "Contractor Accounting"],
  },
  {
    id: "contractor-accountant-services-in-the-uk",
    slug: "/contractor-accountant-services-in-the-uk",
    title: "Contractor Accounting Services in the UK: What's Included?",
    subtitle: "What Services Do Contractor Accountants Provide in the UK?",
    excerpt: "Wondering what contractor accounting services cover? From IR35 compliance to payroll & tax planning, here is everything contractor accountant provides in UK.",
    category: "Contractor Accounting Guide",
    categoryColor: "blue",
    image: "/services.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "8 min read",
    featured: false,
    tags: ["Services", "IR35", "Tax Planning", "Payroll"],
  },
  {
    id: "what-is-ir35-uk",
    slug: "/what-is-ir35-uk",
    title: "IR35 for UK Contractors: The Complete 2026 Overview",
    subtitle: "Everything UK contractors need to know about IR35 in one guide",
    excerpt: "Everything UK contractors need to know about IR35 in one guide — how status is decided, what changed in 2026, and what it means for your pay.",
    category: "Contractor Tax Guide",
    categoryColor: "amber",
    image: "/what-is-ir35.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "10 min read",
    featured: false,
    tags: ["IR35", "Off-payroll", "Contractor Tax", "Umbrella Reform"],
  },
  {
    id: "how-does-ir35-work-in-the-uk",
    slug: "/how-does-ir35-work-in-the-uk",
    title: "How Does IR35 Work: The Full Process for UK Contractors",
    subtitle: "Curious how an IR35 status decision actually happens?",
    excerpt:
      "Curious how an IR35 status decision actually happens? See the real process, your appeal rights, and what working practice changes truly mean for you today.",
    category: "Contractor Tax Guide",
    categoryColor: "amber",
    image: "/how-does-ir35-work.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "9 min read",
    featured: false,
    tags: ["IR35", "Off-payroll", "Contractor Tax", "SDS Process"],
  },
  {
    id: "what-are-ir35-rules",
    slug: "/what-are-ir35-rules",
    title: "IR35 Rules 2026: What Every UK Contractor Must Know",
    subtitle: "From thresholds to record-keeping, here are the IR35 rules that apply to you",
    excerpt:
      "From thresholds to record-keeping, here are the IR35 rules that actually apply to you in 2026 — and what happens if a client gets one wrong.",
    category: "Contractor Tax Guide",
    categoryColor: "amber",
    image: "/ir35-rules-in-the-uk.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "10 min read",
    featured: false,
    tags: ["IR35", "IR35 Rules", "Small Company Thresholds", "Record-Keeping"],
  },
  {
    id: "inside-vs-outside-ir35",
    slug: "/inside-vs-outside-ir35",
    title: "Inside vs Outside IR35: The Real Difference for Contractors",
    subtitle: "Confused about inside vs outside IR35? This guide breaks down the difference, how tax works, a worked example, and what rate makes inside IR35 worth it.",
    excerpt:
      "Confused about inside vs outside IR35? This guide breaks down the difference, how tax works, a worked example, and what rate makes inside IR35 worth it.",
    category: "Contractor Tax Guide",
    categoryColor: "amber",
    image: "/inside-vs-outside-ir35.jpeg",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "10 min read",
    featured: false,
    tags: ["IR35", "IR35 Rules", "Small Company Thresholds", "Record-Keeping"],
  },
  {
    id: "what-is-tax-planning-uk-guide",
    slug: "/what-is-tax-planning-uk-guide",
    title: "Tax Planning Guide for UK Individuals & Businesses",
    subtitle: "What is Tax Planning? A Complete Guide for UK Individuals & Businesses",
    excerpt:
      "What is tax planning and why does it matter more in 2026/27? A practical guide for Bristol individuals, landlords and business owners.",
    category: "Tax Planning Guide",
    categoryColor: "green",
    image: "/what-is-tax-planning.jpeg",
    author: "Henleaze Team",
    date: "August 2026",
    readTime: "8 min read",
    featured: false,
    tags: ["Tax Planning", "2026/27 Tax Year", "Landlords", "Corporation Tax"],
  },
  {
    id: "tax-planning-services-explained",
    slug: "/tax-planning-services-explained",
    title: "Tax Planning Services Explained",
    subtitle: "From corporation tax to inheritance tax — what tax planning services actually cover",
    excerpt:
      "Discover what tax planning services include, from corporation tax and capital gains tax to inheritance tax planning. Find out how a specialist can help you pay less and plan smarter.",
    category: "Tax Planning Guide",
    categoryColor: "green",
    image: "/tax-planning-services.png",
    author: "Henleaze Team",
    date: "August 2026",
    readTime: "8 min read",
    featured: false,
    tags: ["Tax Planning", "Corporation Tax", "Capital Gains Tax", "Inheritance Tax"],
  },
  {
    id: "dividend-tax-rates-2026-27",
    slug: "/dividend-tax-rates-2026-27",
    title: "Dividend Tax Rates 2026/27: Bristol Director Guide",
    subtitle: "UK Dividend Tax Rates 2026/27: What Company Directors Need to Know",
    excerpt:
      "Dividend tax rates for 2026/27 are 10.75%, 35.75% and 39.35%. See what changed, what it costs, and how Bristol directors can plan ahead.",
    category: "Tax Planning Guide",
    categoryColor: "green",
    image: "/uk-divident-tax.jpeg",
    author: "Henleaze Team",
    date: "August 2026",
    readTime: "9 min read",
    featured: false,
    tags: ["Dividend Tax", "2026/27 Tax Year", "Salary vs Dividends", "Bristol Directors"],
  },
  {
    id: "what-is-salary-calculator-uk",
    slug: "/what-is-salary-calculator-uk",
    title: "What is a Salary Calculator? A UK Pay Guide for 2026",
    subtitle: "What Is Salary Calculator in the UK? A Complete Guide to Working Out Your Pay",
    excerpt:
      "See exactly how a UK salary calculator works, which type you actually need, and why contractors need a different one entirely.",
    category: "Contractor Tax Guide",
    categoryColor: "amber",
    image: "/salary-calculator.jpeg",
    author: "Henleaze Team",
    date: "August 2026",
    readTime: "7 min read",
    featured: false,
    tags: ["Salary Calculator", "Take Home Pay", "PAYE", "Contractor Pay"],
  },
  {
    id: "how-do-you-calculate-your-annual-salary-in-uk",
    slug: "/how-do-you-calculate-your-annual-salary-in-uk",
    title: "How Do You Calculate Your Annual Salary in UK? 2026 Guide",
    subtitle: "Annual Salary Calculation UK: A Simple Guide for Every Pay Type",
    excerpt:
      "Work out your annual salary from an hourly rate, monthly pay, part time hours or contract income, with formulas and real examples.",
    category: "UK Pay & Tax Guide",
    categoryColor: "amber",
    image: "/annual-salary-calculation.png",
    author: "Henleaze Team",
    date: "August 2026",
    readTime: "8 min read",
    featured: false,
    tags: ["Annual Salary", "Hourly Rate", "Part Time Pay", "Contractor Income"],
  },
  {
    id: "how-to-calculate-monthly-salary-in-uk",
    slug: "/how-to-calculate-monthly-salary-in-uk",
    title: "How to Calculate Monthly Salary From Annual Pay (UK)",
    subtitle: "How to Calculate Your Monthly Salary From Your Annual Pay in the UK",
    excerpt:
      "Most people get this calculation slightly wrong. Here's the correct way to work out monthly salary from annual pay in the UK, with examples.",
    category: "UK Pay & Tax Guide",
    categoryColor: "amber",
    image: "/how-to-calculate.jpeg",
    author: "Henleaze Team",
    date: "August 2026",
    readTime: "7 min read",
    featured: false,
    tags: ["Monthly Salary", "Annual Pay", "Salary Calculation", "Take Home Pay"],
  },
];


const categoryColors: Record<string, { badge: string }> = {
  amber: { badge: "bg-amber-50 text-amber-700 border-amber-200" },
  blue: { badge: "bg-blue-50 text-blue-700 border-blue-200" },
  green: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(allBlogs.map((b) => b.category)))];
  const featured = allBlogs.find((b) => b.featured);
  const gridBlogs = activeFilter === "All" ? allBlogs.filter((b) => !b.featured) : allBlogs.filter((b) => b.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Contractor Accounting Blog | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Expert guides on contractor accounting, IR35, limited company tax planning and more. Written by specialist accountants for UK contractors and freelancers."
        />
        <meta
          name="keywords"
          content="contractor accounting blog, IR35 guide, contractor tax tips, limited company advice, Bristol accountant"
        />
      </Helmet>

      <Layout>
        {/* ── HERO BANNER ─────────────────────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            paddingTop: "72px",
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
            minHeight: "320px",
          }}
        >
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow orb */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
          />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6">
              <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-amber-400 font-medium">Blog & Insights</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <BookOpen className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Expert Guides</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Contractor Accounting{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Insights
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Practical guides on IR35, limited company tax, fees and everything a UK contractor needs to stay compliant and take home more.
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-white/10 flex-wrap">
              {[
                { label: "Articles Published", value: `${allBlogs.length}` },
                { label: "Topics Covered", value: "IR35, Tax & Fees" },
                { label: "Written By", value: "Specialist Accountants" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ────────────────────────────────────────────── */}
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* ── FEATURED ARTICLE ── */}
            {activeFilter === "All" && featured && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 bg-amber-500 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Featured Article</span>
                </div>

                <Link
                  to={featured.slug}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="md:col-span-3 relative overflow-hidden" style={{ minHeight: "320px" }}>
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-72 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ minHeight: "320px" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                          ⭐ Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 flex flex-col justify-center p-8 lg:p-10">
                      <span
                        className={`inline-block text-xs font-semibold uppercase tracking-widest border rounded px-3 py-1 mb-4 w-fit ${categoryColors[featured.categoryColor]?.badge}`}
                      >
                        {featured.category}
                      </span>

                      <h2
                        className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-amber-700 transition-colors duration-200"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {featured.title}
                      </h2>
                      <p className="text-sm text-amber-600 font-medium mb-4">{featured.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{featured.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featured.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-600 rounded-full px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {featured.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {featured.readTime}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-amber-700 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                          Read Article <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* ── FILTER TABS ─────────────────────────────────────────── */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 mr-2">Filter:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 border ${activeFilter === cat
                    ? "bg-amber-500 text-white border-amber-500 shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-amber-400 hover:text-amber-700"
                    }`}
                >
                  {cat}
                  {cat === "All" && (
                    <span
                      className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 ${activeFilter === cat ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                        }`}
                    >
                      {allBlogs.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* ── ARTICLE GRID ─────────────────────────────────────────── */}
            <div className="grid sm:grid-cols-2 gap-8">
              {gridBlogs.map((blog) => {
                const colors = categoryColors[blog.categoryColor] ?? categoryColors.amber;
                return (
                  <Link
                    key={blog.id}
                    to={blog.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden" style={{ height: "220px" }}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span
                          className={`inline-block text-xs font-semibold uppercase tracking-widest border rounded px-2.5 py-1 bg-white/90 backdrop-blur-sm ${colors.badge}`}
                        >
                          {blog.category}
                        </span>
                      </div>
                      {blog.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="text-xs bg-amber-500 text-white font-bold px-2.5 py-1 rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6">
                      <h2
                        className="text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors duration-200"
                        style={{ fontFamily: "'Georgia', serif" }}
                      >
                        {blog.title}
                      </h2>
                      <p className="text-xs text-amber-600 font-medium mb-3">{blog.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{blog.excerpt}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {blog.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-gray-50 border border-gray-200 text-gray-500 rounded-full px-2.5 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {blog.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {blog.readTime}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-amber-600 text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                          Read more <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Empty state when filter has no results */}
            {gridBlogs.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium">No articles in this category yet.</p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="mt-4 text-amber-600 text-sm underline hover:text-amber-800"
                >
                  View all articles
                </button>
              </div>
            )}

            {/* ── CTA BANNER ──────────────────────────────────────────── */}
            <div
              className="mt-20 rounded-2xl overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(245,158,11,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative px-8 py-12 md:px-14 md:py-14 text-center">
                <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5">
                  Need Expert Advice?
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Ready to talk to a specialist?
                </h2>
                <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  Whether you're just starting out or switching accountants, Henleaze Tax Consultancy offers fixed-fee support tailored to UK contractors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg"
                  >
                    Get a Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
                  >
                    View Our Pricing
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
