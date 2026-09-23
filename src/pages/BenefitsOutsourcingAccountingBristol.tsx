import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Briefcase,
  Building2,
  Users,
  Layers,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Receipt,
  Lock,
  FileCheck,
  CircleDollarSign,
  Laptop,
  Scale,
  Sparkles,
  MapPin,
  Check,
  Zap,
  BarChart3
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "time-to-focus", title: "You Get Back Time to Focus on Running Your Business" },
  { id: "cheaper-than-in-house", title: "It's Usually Cheaper Than Hiring In House" },
  { id: "access-to-expertise", title: "You Get Access to Expertise You Couldn't Justify Hiring Full Time" },
  { id: "reliable-compliance", title: "Your HMRC and Companies House Compliance Gets More Reliable" },
  { id: "real-time-visibility", title: "You Get Real Time Financial Visibility, Not Just an Annual Snapshot" },
  { id: "scales-with-business", title: "It Scales With Your Business" },
  { id: "why-bristol-matters", title: "Why This Matters Particularly for Bristol Businesses" },
  { id: "contractors-ir35", title: "The Benefit Most Contractors Overlook: Getting IR35 Right From the Start" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "What are the main benefits of outsourcing accounting for a small business?",
    answer:
      "The main benefits are time saved from not doing the books yourself, lower overall cost compared to hiring in house, access to professional expertise, more reliable HMRC and Companies House compliance and real time financial visibility through cloud accounting software.",
  },
  {
    question: "Is outsourcing accounting cheaper than hiring an in house bookkeeper?",
    answer:
      "Usually yes, once salary, employer National Insurance, pension contributions and software costs are factored in, outsourcing typically works out more cost effective for small and growing businesses.",
  },
  {
    question: "Does outsourcing accounting help with compliance?",
    answer:
      "Yes. A dedicated outsourced provider tracks filing deadlines and regulatory changes as their core responsibility, which tends to reduce the risk of missed deadlines and the penalties that come with them.",
  },
  {
    question: "Is outsourcing accounting only suitable for larger businesses?",
    answer:
      "No. Small businesses often benefit the most, since outsourcing gives them access to professional expertise and modern software without the cost of building an internal finance function they don't yet need at full scale.",
  },
  {
    question: "Do contractors benefit from outsourcing their accounting?",
    answer:
      "Yes, particularly when the provider has genuine experience with IR35 status and salary and dividend planning, rather than treating contractor work as standard small business bookkeeping.",
  },
];

const benefitsList = [
  {
    title: "Reclaimed Time",
    desc: "Reclaim up to 10+ hours a week lost to invoicing, reconciliations, and late-night spreadsheets.",
    icon: Clock,
  },
  {
    title: "Significant Cost Savings",
    desc: "A predictable monthly fee replaces an in-house salary, employer NI, pension, and software overheads.",
    icon: CircleDollarSign,
  },
  {
    title: "Specialist Knowledge",
    desc: "On-demand access to chartered accountants, VAT specialists, and IR35 experts.",
    icon: ShieldCheck,
  },
  {
    title: "Ironclad Compliance",
    desc: "Deadlines tracked proactively to prevent late filing penalties from HMRC and Companies House.",
    icon: FileCheck,
  },
  {
    title: "Real-Time Clarity",
    desc: "Live visibility on platforms like Xero and QuickBooks for accurate, forward-looking business decisions.",
    icon: BarChart3,
  },
  {
    title: "Seamless Scalability",
    desc: "Easily adjust services as your transaction volume grows without lengthy recruitment cycles.",
    icon: TrendingUp,
  },
];

const BenefitsOutsourcingAccountingBristol = () => {
  const [activeSection, setActiveSection] = useState("time-to-focus");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Outsourcing Accounting Benefits Small Businesses in Bristol",
    description:
      "See the real benefits of outsourcing accounting, from time saved to better compliance, and what it means for Bristol contractors.",
    image: "https://henleazetaxconsultancy.com/benefits-of-outsourcing-accounting.webp",
    author: {
      "@type": "Organization",
      name: "Henleaze Tax Consultancy",
    },
    publisher: {
      "@type": "Organization",
      name: "Henleaze Tax Consultancy",
      logo: {
        "@type": "ImageObject",
        url: "https://henleazetaxconsultancy.com/logo.jpg",
      },
    },
    datePublished: "2026-09-21",
    dateModified: "2026-09-21",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/benefits-outsourcing-accounting-bristol",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://henleazetaxconsultancy.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://henleazetaxconsultancy.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Benefits of Outsourcing Accounting for Bristol Businesses",
        item: "https://henleazetaxconsultancy.com/benefits-outsourcing-accounting-bristol",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Benefits of Outsourcing Accounting for Bristol Businesses</title>
        <meta
          name="description"
          content="See the real benefits of outsourcing accounting, from time saved to better compliance, and what it means for Bristol contractors."
        />
        <meta
          name="keywords"
          content="benefits of outsourcing accounting, outsourced accounting Bristol, small business accounting Bristol, contractor accounting Bristol, advantages of outsourcing accounting"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/benefits-outsourcing-accounting-bristol" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/benefits-of-outsourcing-accounting.webp"
            alt="Benefits of Outsourcing Accounting for Bristol Businesses"
            className="w-full h-auto max-h-[520px] object-contain bg-gray-50 mx-auto"
          />
        </div>

        {/* ── ARTICLE WRAPPER ────────────────────────────────────────── */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            {/* Back link */}
            <div className="mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white border border-gray-200 hover:border-amber-500 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm hover:shadow-md"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Back to Blog
              </Link>
            </div>

            {/* Category tag */}
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1">
                Bristol Business & Outsourced Accounting
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              How Outsourcing Accounting Benefits Small Businesses in Bristol
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              See the real benefits of outsourcing accounting, from time saved to better compliance, and what it means for Bristol contractors.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                The real benefits of{" "}
                <Link
                  to="/services/outsourced-accounting-services"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  outsourcing your accounting
                </Link>{" "}
                come down to time, cost and expertise, getting your books handled properly without the overhead of hiring an in-house team, while freeing you up to actually run the business. For small businesses in particular, this often matters more than the numbers alone suggest, since owners are usually the ones doing the books themselves at ten o'clock at night otherwise.
              </p>
              <p>
                This isn't about handing your finances over blindly. It's about understanding exactly what you gain and for Bristol businesses specifically, why the local market makes this an even more practical choice than it might first appear. If you're still working out what outsourced accounting actually involves before deciding it's worth it,{" "}
                <Link
                  to="/what-is-outsourced-accounting-uk"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  our guide to what outsourced accounting is and how it works
                </Link>{" "}
                covers the basics first.
              </p>
            </div>

            {/* Key Benefits Grid Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {benefitsList.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-gradient-to-br from-gray-50 to-amber-50/30 border border-gray-200 rounded-xl hover:border-amber-400 transition-all duration-200 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-3">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h2 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h2>
                    <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Article
              </h2>
              <nav>
                <ol className="space-y-2.5">
                  {sections.map((section, idx) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`group flex items-baseline gap-3 w-full text-left text-sm transition-colors duration-150 ${activeSection === section.id
                            ? "text-amber-700 font-semibold"
                            : "text-gray-600 hover:text-gray-900"
                          }`}
                      >
                        <span
                          className={`shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${activeSection === section.id
                              ? "bg-amber-600 text-white"
                              : "bg-gray-200 text-gray-600 group-hover:bg-amber-100 group-hover:text-amber-700"
                            }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* ── SECTION 1: TIME TO FOCUS ──────────────────────────── */}
            <section id="time-to-focus" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  1
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  You Get Back Time to Focus on Running Your Business
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  The single most commonly cited benefit of outsourcing accounting is time, and for good reason. Every hour spent reconciling bank transactions or chasing invoices is an hour not spent on the parts of the business that actually grow it.
                </p>
                <p>
                  Small business owners typically wear several hats at once, sales, operations, customer service and finance all competing for the same limited hours in a day. Handing bookkeeping and compliance work to a dedicated provider means that time goes back into the business rather than into spreadsheets.
                </p>

                <div className="p-5 bg-amber-50/60 border border-amber-200 rounded-xl my-6 not-prose">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-600" />
                    Where Business Owners Reclaim Hours
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Automatic bank reconciliation & invoice matching</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Eliminating month-end receipt scanning scrambles</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>No more chasing HMRC helpline phone queues</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Full focus on revenue-generating client work</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 2: CHEAPER THAN IN-HOUSE ──────────────────── */}
            <section id="cheaper-than-in-house" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  2
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  It's Usually Cheaper Than Hiring In House
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  <Link
                    to="/outsourced-accounting-cost-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Outsourcing typically costs
                  </Link>{" "}
                  less than employing a full time bookkeeper once salary, employer National Insurance, pension contributions and software costs are all accounted for. A single monthly fee replaces a much larger set of overheads that come with direct employment.
                </p>
                <p>
                  We've broken this comparison down properly, cost by cost, in{" "}
                  <Link
                    to="/outsourced-vs-in-house-accounting"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    our guide to outsourced accounting versus in house accounting
                  </Link>.
                </p>

                {/* Cost Comparison Summary Table */}
                <div className="overflow-hidden border border-gray-200 rounded-xl my-6 shadow-sm">
                  <div className="bg-gray-900 text-white px-5 py-3 flex items-center justify-between">
                    <span className="font-semibold text-sm sm:text-base">In-House Hire vs Outsourced Accounting</span>
                    <span className="text-xs bg-amber-500 text-gray-900 font-bold px-2 py-0.5 rounded">UK Comparison</span>
                  </div>
                  <div className="divide-y divide-gray-200 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 p-4 bg-gray-50 gap-2">
                      <div>
                        <p className="font-bold text-gray-900">In-House Staff Overhead</p>
                        <p className="text-gray-600 text-xs">£28k–£40k+ salary + 13.8% Employer NI + 3% Pension + Tech Licenses + Holiday/Sick cover</p>
                      </div>
                      <div className="sm:border-l sm:border-gray-200 sm:pl-4">
                        <p className="font-bold text-amber-700">Outsourced Accounting</p>
                        <p className="text-gray-600 text-xs">Single, transparent monthly fee scaled precisely to your volume, with zero employment liability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 3: ACCESS TO EXPERTISE ────────────────────── */}
            <section id="access-to-expertise" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  3
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  You Get Access to Expertise You Couldn't Justify Hiring Full Time
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  A{" "}
                  <Link
                    to="/services/small-business-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    small business
                  </Link>{" "}
                  rarely has the transaction volume or budget to justify a full time, highly qualified accountant on staff, but that doesn't mean the expertise isn't needed. Outsourcing solves this by giving you access to a properly trained professional's knowledge without paying for a full time salary.
                </p>
                <p>
                  This matters particularly for anything outside routine bookkeeping, VAT complexities, R&D tax relief eligibility, or specific reliefs a business might not even know it qualifies for. A good outsourced provider brings this knowledge as standard, rather than it depending on whether your one in house hire happens to have encountered it before.
                </p>
              </div>
            </section>

            {/* ── SECTION 4: RELIABLE COMPLIANCE ────────────────────── */}
            <section id="reliable-compliance" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  4
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Your HMRC and Companies House Compliance Gets More Reliable
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Outsourcing generally improves compliance reliability, since a dedicated provider tracks filing deadlines and regulatory changes as their core job, rather than as one task among many for a busy owner.
                </p>
                <p>
                  Missed deadlines carry real consequences. Late annual accounts can mean penalties starting at £150 and rising to £1,500 the longer they're overdue, and a missed confirmation statement can eventually lead to Companies House striking a company off the register entirely. A provider whose job is specifically to track these dates tends to catch problems before they become expensive ones.
                </p>

                <div className="p-4 sm:p-5 bg-red-50/80 border-l-4 border-red-500 rounded-r-xl not-prose my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
                    <div className="text-sm sm:text-base text-gray-800">
                      <p className="font-semibold text-gray-900 mb-1">Avoid Costly Statutory Penalties:</p>
                      <p>
                        Late company accounts trigger automatic statutory penalties (£150 to £1,500), while repeated late VAT submissions result in penalty points and financial surcharges under HMRC's points-based penalty regime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 5: REAL TIME VISIBILITY ───────────────────── */}
            <section id="real-time-visibility" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  5
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  You Get Real Time Financial Visibility, Not Just an Annual Snapshot
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Most outsourced accounting today runs on cloud based platforms like Xero or QuickBooks, meaning you can see your actual financial position whenever you want, rather than waiting for an annual set of accounts to understand how the business is doing.
                </p>
                <p>
                  This shift from an annual snapshot to ongoing visibility changes how business owners make decisions. Cash flow problems get spotted earlier, and spending decisions get made with current numbers rather than figures that are months out of date.
                </p>
              </div>
            </section>

            {/* ── SECTION 6: SCALES WITH BUSINESS ───────────────────── */}
            <section id="scales-with-business" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  6
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  It Scales With Your Business
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Outsourced accounting scales naturally as a business grows, without the delay and cost of recruiting and training new staff each time workload increases.
                </p>
                <p>
                  A business taking on more clients, hiring its first employees, or expanding into new areas can simply adjust the scope of what's outsourced, adding{" "}
                  <Link
                    to="/services/payroll-and-hr-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll support
                  </Link>{" "}
                  or more frequent management accounts, rather than going through a fresh recruitment process every time growth outpaces the current setup.
                </p>
              </div>

              {/* ── SECOND IMAGE ────────────────────────────────────── */}
              <div className="my-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <img
                  src="/How Outsourcing Accounting Benefits Small Businesses.webp"
                  alt="How Outsourcing Accounting Benefits Small Businesses in Bristol"
                  className="w-full h-auto max-h-[500px] object-contain bg-gray-50 mx-auto"
                />
                <div className="p-3 text-center text-xs sm:text-sm text-gray-500 bg-gray-50 border-t border-gray-100">
                  How Outsourcing Accounting Benefits Small Businesses in Bristol
                </div>
              </div>
            </section>

            {/* ── SECTION 7: WHY BRISTOL MATTERS ────────────────────── */}
            <section id="why-bristol-matters" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  7
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Why This Matters Particularly for Bristol Businesses
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Bristol has one of the more active small business and contractor communities in the South West, spanning everything from creative and tech sectors to trades and professional services, and that density brings genuine competitive pressure. Businesses competing for the same local client base and talent pool benefit from spending time on what actually differentiates them, not on manual bookkeeping.
                </p>
                <p>
                  Local outsourcing options also matter here. If you'd rather work with a real Bristol based provider than a generic national platform, our comparisons of{" "}
                  <Link
                    to="/outsourcing-accounting-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    outsourcing accounting firms in Bristol
                  </Link>
                  ,{" "}
                  <Link
                    to="/payroll-consulting-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll consulting firms in Bristol
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/company-secretarial-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial firms in Bristol
                  </Link>{" "}
                  cover genuine local options across different parts of the finance function, rather than a single national provider's generic city landing page.
                </p>

                {/* Local Guides Box */}
                <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-xl my-6 not-prose">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    Explore Our Bristol Business Accounting Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <Link
                      to="/outsourcing-accounting-firms-in-bristol"
                      className="p-3 bg-white rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
                    >
                      <span className="font-medium text-gray-900 group-hover:text-amber-700">Accounting Outsourcing</span>
                      <span className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                        Compare Bristol firms <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                    <Link
                      to="/payroll-consulting-firms-in-bristol"
                      className="p-3 bg-white rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
                    >
                      <span className="font-medium text-gray-900 group-hover:text-amber-700">Payroll Support</span>
                      <span className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                        Bristol payroll guide <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                    <Link
                      to="/company-secretarial-firms-in-bristol"
                      className="p-3 bg-white rounded-lg border border-amber-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
                    >
                      <span className="font-medium text-gray-900 group-hover:text-amber-700">Company Secretarial</span>
                      <span className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                        Bristol CoSec firms <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── SECTION 8: CONTRACTORS & IR35 ─────────────────────── */}
            <section id="contractors-ir35" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  8
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  The Benefit Most Contractors Overlook: Getting IR35 Right From the Start
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  For contractors specifically, the biggest benefit of outsourcing isn't just time saved, it's getting your tax position structured correctly from the outset, something a generic bookkeeping service often isn't equipped to advise on properly.
                </p>
                <p>
                  This matters in a few specific ways:
                </p>

                <div className="space-y-3 my-6 not-prose">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900">Correct IR35 status:</span>{" "}
                      <span className="text-gray-700">
                        The financial difference between a contract correctly assessed as{" "}
                        <Link
                          to="/inside-vs-outside-ir35"
                          className="text-amber-700 hover:underline font-semibold"
                        >
                          inside or outside IR35
                        </Link>{" "}
                        can be substantial and a general bookkeeper won't necessarily flag this properly.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900">A salary and dividend structure that actually fits your situation:</span>{" "}
                      <span className="text-gray-700">
                        Getting this wrong doesn't just cost money, it can also affect things like your qualifying years for the State Pension if your salary is set incorrectly.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900">Advice that reflects current rules:</span>{" "}
                      <span className="text-gray-700">
                        <Link
                          to="/what-are-ir35-rules"
                          className="text-amber-700 hover:underline font-semibold"
                        >
                          IR35
                        </Link>{" "}
                        rules and thresholds change, and a provider genuinely specialising in contractor work tends to stay on top of this in a way a general SME focused bookkeeper often doesn't.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900">One provider who understands the whole picture:</span>{" "}
                      <span className="text-gray-700">
                        Rather than piecing together generic bookkeeping advice with separate, unconnected tax guidance.
                      </span>
                    </div>
                  </div>
                </div>

                <p>
                  We work with contractors, sole traders and small limited companies across Bristol specifically, on a{" "}
                  <Link
                    to="/pricing"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    fixed fee basis
                  </Link>.
                </p>
              </div>
            </section>

            {/* ── SECTION 9: FAQS ───────────────────────────────────── */}
            <section id="faqs" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="h-7 w-7 text-amber-600 shrink-0" />
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqsData.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left bg-gray-50/70 hover:bg-gray-100 transition-colors duration-150"
                      >
                        <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-amber-600 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-5 bg-white border-t border-gray-100 text-gray-700 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ── SECTION 10: FINAL WORDS ───────────────────────────── */}
            <section id="final-words" className="mb-14 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm shrink-0">
                  10
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Final Words
                </h2>
              </div>

              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                <p>
                  Outsourcing your accounting genuinely pays off in time, cost and expertise for most small businesses and for Bristol businesses specifically, working with a provider who understands the local market adds a layer of value a generic national platform can't easily replicate. The right next step depends on what you actually need handled, whether that's basic bookkeeping, payroll or the kind of contractor specific advice a general provider often misses.
                </p>
              </div>

              {/* CTA Box */}
              <div className="mt-8 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl text-white shadow-xl not-prose">
                <div className="max-w-2xl">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded px-3 py-1 mb-3">
                    Fixed-Fee Bristol Accounting
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    Ready to Outsource Your Accounting in Bristol?
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    Speak with our team today for transparent fixed-fee quotes, dedicated support, and proactive IR35 and tax planning tailored to your business.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      <Link to="/contact">Book a Free Consultation</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gray-600 text-black hover:bg-gray-800 hover:text-white px-6 py-2.5 rounded-lg"
                    >
                      <Link to="/pricing">View Our Fixed Pricing</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* ── NEARBY LOCATIONS ──────────────────────────────────────── */}
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default BenefitsOutsourcingAccountingBristol;
