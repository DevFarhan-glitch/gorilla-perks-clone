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
  BarChart3,
  XCircle
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "real-difference", title: "What's the Real Difference Between Outsourced and In-House Accounting?" },
  { id: "cost-comparison", title: "Cost Comparison: Outsourced vs In-House Accounting" },
  { id: "expertise", title: "Expertise: Who Actually Knows More About Your Finances?" },
  { id: "scalability", title: "Scalability: Which Option Grows With Your Business?" },
  { id: "compliance-and-risk", title: "Compliance and Risk: Which Option Reduces Your Exposure?" },
  { id: "control-and-availability", title: "Control and Availability: Where In-House Still Wins" },
  { id: "quick-comparison", title: "Quick Comparison" },
  { id: "hybrid-approach", title: "Is a Hybrid Approach Ever Right?" },
  { id: "contractors-and-small-cos", title: "What This Means for Contractors and Small Limited Companies" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const costComparisonRows = [
  {
    factor: "Base salary",
    inHouse: "£35,000 to £65,000+ per year, depending on seniority",
    outsourced: "Single monthly fee, typically £60 to £1,000+ depending on scope",
  },
  {
    factor: "Employer National Insurance",
    inHouse: "Additional cost on top of salary (13.8% to 15%)",
    outsourced: "Included in the fee",
  },
  {
    factor: "Pension contributions",
    inHouse: "Additional cost on top of salary (minimum 3% employer contribution)",
    outsourced: "Included in the fee",
  },
  {
    factor: "Recruitment costs",
    inHouse: "Time and fees to hire and replace staff (typically 15% to 25% of salary)",
    outsourced: "None",
  },
  {
    factor: "Software and licensing",
    inHouse: "Paid separately by the business (Xero, Sage, payroll portals)",
    outsourced: "Usually included in monthly package",
  },
  {
    factor: "Training & CPD",
    inHouse: "Ongoing cost as tax rules and accounting software change",
    outsourced: "Provider's responsibility",
  },
  {
    factor: "Holiday and sick cover",
    inHouse: "Business must arrange and pay for cover when staff are off",
    outsourced: "Covered continuously by the provider's team",
  },
];

const quickComparisonRows = [
  {
    factor: "Cost",
    inHouse: "Higher, fixed overhead regardless of workload",
    outsourced: "Lower, scales with actual need",
  },
  {
    factor: "Expertise",
    inHouse: "Limited to one person's knowledge and experience",
    outsourced: "Broader, specialist access across multiple disciplines",
  },
  {
    factor: "Scalability",
    inHouse: "Slower, requires a new recruitment cycle each time",
    outsourced: "Faster, adjust service scope whenever required",
  },
  {
    factor: "Compliance risk",
    inHouse: "Concentrated in one person",
    outsourced: "Spread across a dedicated, supervised team",
  },
  {
    factor: "Availability",
    inHouse: "Immediate, physically present on site",
    outsourced: "Structured, scheduled communication & ticketed support",
  },
  {
    factor: "Best suited for",
    inHouse: "Larger businesses, high daily transaction volumes",
    outsourced: "Most small and growing businesses, sole traders & contractors",
  },
];

const faqsData = [
  {
    question: "Is outsourced accounting cheaper than in-house accounting?",
    answer:
      "Usually yes, for small and medium sized businesses, once salary, employer National Insurance, pension contributions, recruitment and training costs are all factored in for an in-house hire.",
  },
  {
    question: "When does in-house accounting make more sense than outsourcing?",
    answer:
      "In-house accounting tends to suit larger businesses with high, complex transaction volumes, or those who specifically want a dedicated team physically present and immediately available.",
  },
  {
    question: "Can a business combine outsourced and in-house accounting?",
    answer:
      "Yes, a hybrid model is possible, typically keeping day to day bookkeeping in-house while outsourcing specialist work like tax planning or payroll, though this suits larger or more complex businesses more than small ones.",
  },
  {
    question: "Does outsourcing accounting reduce compliance risk?",
    answer:
      "Generally yes, since a dedicated outsourced provider tracks HMRC and Companies House deadlines as their core responsibility, spreading the risk across a team rather than concentrating it in one in-house employee.",
  },
  {
    question: "Which option is better for a small limited company or contractor?",
    answer:
      "Outsourcing is usually the more practical choice, since a single director company rarely has the transaction volume to justify a full time in-house hire, and the real decision becomes finding a provider who understands contractor specific tax situations properly.",
  },
];

const OutsourcedVsInHouseAccounting = () => {
  const [activeSection, setActiveSection] = useState("real-difference");
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
    headline: "Outsourced vs In House Accounting: Which is Better?",
    description:
      "Cost, expertise, scalability and compliance risk compared side by side, so you can work out which accounting setup actually fits you.",
    image: "https://henleazetaxconsultancy.com/outsourced-accounting-vs-in-house-accounting.webp",
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
    datePublished: "2026-09-23",
    dateModified: "2026-09-23",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/outsourced-vs-in-house-accounting",
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
        name: "Outsourced vs In House Accounting: Which is Better?",
        item: "https://henleazetaxconsultancy.com/outsourced-vs-in-house-accounting",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Outsourced vs In House Accounting: Which is Better?</title>
        <meta
          name="description"
          content="Cost, expertise, scalability and compliance risk compared side by side, so you can work out which accounting setup actually fits you."
        />
        <meta
          name="keywords"
          content="Outsourced Accounting vs In-House Accounting, outsourced vs in house accounting UK, in-house accountant cost, outsourced bookkeeping, small business accounting setup"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/outsourced-vs-in-house-accounting" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED HERO IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/outsourced-accounting-vs-in-house-accounting.webp"
            alt="Outsourced Accounting vs In House-Accounting: How to Choose the Right Fit"
            className="w-full h-auto max-h-[520px] object-contain bg-gray-50 mx-auto"
          />
        </div>

        {/* ── ARTICLE CONTAINER ────────────────────────────────────────── */}
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
                UK Accounting Comparison Guide
              </span>
            </div>

            {/* Main Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Outsourced Accounting vs In House-Accounting: How to Choose the Right Fit
            </h1>

            {/* Subtitle / Lead */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Cost, expertise, scalability and compliance risk compared side by side, so you can work out which accounting setup actually fits you.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-amber-600" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-600" />
                September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                9 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                For most small and growing UK businesses, outsourced accounting works out cheaper, more flexible and gives access to broader expertise than hiring in-house, while in-house accounting suits larger businesses with high transaction volumes who value having a dedicated team physically embedded in the business. There isn't a single universally correct answer, the right choice depends on your size, complexity and how much control you want over day to day financial management.
              </p>

              <p>
                This guide compares both options properly, cost, expertise, scalability, compliance and control, so you can work out which genuinely fits your business rather than assuming one is automatically better. If you haven't already, our guide to{" "}
                <Link
                  to="/what-is-outsourced-accounting-uk"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  what outsourced accounting is
                </Link>{" "}
                and how it works is worth reading first if you're still working out the basics.
              </p>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Comparison Guide
              </h2>
              <nav>
                <ol className="space-y-2.5">
                  {sections.map((section, idx) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`group flex items-baseline gap-3 w-full text-left text-sm transition-colors duration-150 ${
                          activeSection === section.id
                            ? "text-amber-700 font-semibold"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono shrink-0 w-5 ${
                            activeSection === section.id ? "text-amber-600 font-bold" : "text-gray-400"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:underline underline-offset-2">{section.title}</span>
                        {activeSection === section.id && (
                          <span className="ml-auto shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 self-center" />
                        )}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* ── ARTICLE BODY ──────────────────────────────────────── */}
            <div
              className="prose prose-lg prose-gray max-w-none space-y-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >

              {/* Section 1: What's the Real Difference */}
              <section id="real-difference" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What's the Real Difference Between Outsourced and In-House Accounting?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  In-house accounting means directly employing your own staff to manage bookkeeping,{" "}
                  <Link
                    to="/services/payroll-and-hr-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll
                  </Link>{" "}
                  and financial reporting, while{" "}
                  <Link
                    to="/services/outsourced-accounting-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    outsourced accounting
                  </Link>{" "}
                  means paying an external provider to handle the same work on an ongoing basis. The core functions covered are often identical, the difference is entirely in how that work gets staffed and paid for.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In-house accounting gives you a team physically present in the business, familiar with its day to day workings. Outsourced accounting trades some of that direct familiarity for lower overheads, broader expertise, and the ability to scale support up or down as needed.
                </p>

                {/* Secondary Image */}
                <div className="my-8 not-prose">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-gray-50">
                    <img
                      src="/difference-between-outsourced-and-in-house-accounting.webp"
                      alt="Difference Between Outsourced and In-House Accounting for UK businesses"
                      className="w-full h-auto object-cover max-h-[440px]"
                    />
                    <div className="p-3.5 bg-gray-50/90 border-t border-gray-200 text-xs sm:text-sm text-gray-500 text-center italic">
                      Comparing the operational realities of internal in-house accounting teams against specialized outsourced finance partners.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Cost Comparison */}
              <section id="cost-comparison" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Cost Comparison: Outsourced vs In-House Accounting
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cost is usually the deciding factor for most small businesses and it's worth comparing properly rather than assuming outsourcing is automatically cheaper.
                </p>

                {/* Detailed Cost Comparison Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-1/4">Cost factor</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-gray-800">In-House Accountant</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-amber-900 bg-amber-100/60">Outsourced Accounting</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm sm:text-base text-gray-700">
                      {costComparisonRows.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 1 ? "bg-gray-50/60 hover:bg-gray-50 transition-colors" : "hover:bg-gray-50 transition-colors"}
                        >
                          <td className="py-3.5 px-4 font-semibold text-gray-900 align-top">{row.factor}</td>
                          <td className="py-3.5 px-4 text-gray-700 align-top">{row.inHouse}</td>
                          <td className="py-3.5 px-4 font-medium text-amber-800 bg-amber-50/40 align-top">{row.outsourced}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                  A full time in-house hire also carries hidden costs that rarely appear in a straightforward salary comparison, recruitment delays while a role sits vacant, staff turnover requiring the process to start again and underutilisation if the workload doesn't consistently justify a full time position. We've broken down realistic UK pricing for outsourced accounting specifically in our guide to{" "}
                  <Link
                    to="/outsourced-accounting-cost-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    what outsourced accounting costs in the UK
                  </Link>.
                </p>
              </section>

              {/* Section 3: Expertise */}
              <section id="expertise" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Expertise: Who Actually Knows More About Your Finances?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  In-house accountants build deep familiarity with your specific business, but their knowledge is limited to what one person has encountered. Outsourced providers typically bring broader, more current expertise across a wider range of situations, since they're working with multiple clients rather than just yours.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This matters most outside routine bookkeeping. VAT complexities, R&D tax relief eligibility, or{" "}
                  <Link
                    to="/what-is-ir35-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    IR35 status for contractors
                  </Link>{" "}
                  are all areas where a single in-house hire may simply never have encountered the specific situation before, while a specialist outsourced provider handles these regularly.
                </p>

                <div className="p-5 bg-blue-50/60 border-l-4 border-blue-500 rounded-r-xl not-prose my-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                    <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      <p className="font-semibold text-gray-900 mb-1">Depth vs Breadth of Knowledge</p>
                      <p>
                        An in-house employee understands company history and day-to-day culture exceptionally well. However, when complex tax legislation shifts or an HMRC enquiry opens, an outsourced firm provides immediate access to chartered tax advisers, VAT specialists, and payroll experts who handle these challenges on a daily basis.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Scalability */}
              <section id="scalability" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Scalability: Which Option Grows With Your Business?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Outsourced accounting scales more easily than an in-house team, since support can be adjusted without a fresh recruitment process each time. In-house accounting requires hiring additional staff as workload grows, which takes time and adds ongoing cost regardless of whether the extra capacity is needed every month.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For a business going through a growth phase, taking on new clients, adding staff, or expanding into new areas, outsourcing tends to accommodate that change faster than recruiting can.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Outsourced accounting scales more easily than an in-house team, since support can be adjusted without a fresh recruitment process each time. This is one of the{" "}
                  <Link
                    to="/benefits-outsourcing-accounting-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    benefits of outsourcing accounting for small businesses
                  </Link>
                  , particularly during periods of growth.
                </p>
              </section>

              {/* Section 5: Compliance and Risk */}
              <section id="compliance-and-risk" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Compliance and Risk: Which Option Reduces Your Exposure?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Outsourced providers generally reduce compliance risk, since tracking HMRC deadlines and regulatory changes is their core responsibility rather than one task among many for an in-house employee or business owner. Missed deadlines carry real financial consequences, late annual accounts filed more than six months overdue can mean a £1,500 penalty and persistent non compliance with confirmation statement filing can eventually lead to Companies House striking a company off the register.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  An in-house accountant can absolutely manage compliance well, but the risk concentrates in one person. If they're unwell, leave, or simply miss something during a busy period, there's no built-in backup the way there often is with an outsourced team.
                </p>

                {/* Statutory Risk Callout */}
                <div className="p-5 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl not-prose my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      <p className="font-semibold text-gray-900 mb-1">Single Point of Failure vs Continuous Coverage</p>
                      <p>
                        With a lone internal accountant, unexpected sickness during month-end or statutory filing windows can quickly trigger costly penalties. Outsourced practices maintain robust internal cover so your payroll, VAT, and annual accounts never pause.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Control and Availability */}
              <section id="control-and-availability" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Control and Availability: Where In-House Still Wins
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  In-house accounting genuinely does win on one thing consistently, direct, immediate access to someone who knows your business inside and out, without needing to explain context every time. For businesses with complex, fast moving daily transactions, or those who simply prefer having someone physically present, this remains a real advantage outsourcing doesn't fully replicate.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Outsourced providers generally offer structured communication, scheduled check-ins, defined response times, rather than someone sitting down the hall available at a moment's notice. For most{" "}
                  <Link
                    to="/services/small-business-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    small businesses
                  </Link>{" "}
                  this trade off is worth it, but it's a genuine consideration for larger, more transaction heavy operations.
                </p>
              </section>

              {/* Section 7: Quick Comparison */}
              <section id="quick-comparison" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Quick Comparison
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here is how in-house accounting and outsourced accounting stack up side by side across the six key decision metrics:
                </p>

                {/* Quick Comparison Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-100 border-b border-gray-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-1/4">Factor</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-gray-800">In-House Accounting</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-amber-900 bg-amber-50">Outsourced Accounting</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm sm:text-base text-gray-700">
                      {quickComparisonRows.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 1 ? "bg-gray-50/50 hover:bg-gray-50 transition-colors" : "hover:bg-gray-50 transition-colors"}
                        >
                          <td className="py-3.5 px-4 font-semibold text-gray-900 align-top">{row.factor}</td>
                          <td className="py-3.5 px-4 text-gray-700 align-top">{row.inHouse}</td>
                          <td className="py-3.5 px-4 font-medium text-amber-800 bg-amber-50/30 align-top">{row.outsourced}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Is a Hybrid Approach Ever Right? */}
              <section id="hybrid-approach" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Is a Hybrid Approach Ever Right?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Yes, for some larger or more complex businesses, a hybrid model combining a small in-house team with outsourced specialist support can work well. This typically means keeping day to day bookkeeping in-house, close to the business, while outsourcing specialist areas like tax planning, payroll, or annual compliance to an external provider.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For most small businesses and contractors, though, a hybrid setup adds complexity without the transaction volume to justify it, and fully outsourcing tends to be the simpler, more cost effective route.
                </p>
              </section>

              {/* Section 9: What This Means for Contractors and Small Limited Companies */}
              <section id="contractors-and-small-cos" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What This Means for Contractors and Small Limited Companies
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  For a contractor running their own limited company, the in-house versus outsourced question barely applies in the traditional sense, there's rarely a genuine option to employ a full time in-house accountant for a single director business. The real decision is closer to choosing between a general outsourced provider and one who understands contractor specific situations properly.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Getting your{" "}
                  <Link
                    to="/what-is-ir35-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    IR35 status
                  </Link>{" "}
                  assessed correctly, and structuring salary and dividends appropriately, matters more for take home pay than almost any other decision a contractor makes. We've covered the financial difference this makes in our guide to{" "}
                  <Link
                    to="/inside-vs-outside-ir35"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    inside versus outside IR35
                  </Link>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We work with contractors, sole traders and small limited companies across Bristol, and our guide to{" "}
                  <Link
                    to="/outsourcing-accounting-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    outsourcing accounting firms in Bristol
                  </Link>{" "}
                  explains what to look for when comparing providers. If you'd like to see what this looks like for your own situation, our{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    contractor accountant services
                  </Link>{" "}
                  page covers what's included.
                </p>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <div className="space-y-4 mb-8 not-prose">
                  {faqsData.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-amber-300 shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full text-left p-5 bg-gray-50 hover:bg-gray-100 flex items-center justify-between gap-4 transition-colors"
                        aria-expanded={openFaq === index}
                      >
                        <span className="font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                          <span className="text-amber-600 text-sm font-mono font-bold">Q{index + 1}.</span>
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                            openFaq === index ? "rotate-180 text-amber-600" : ""
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="p-5 bg-white border-t border-gray-100 text-gray-700 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11: Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  There's no universally correct answer between outsourced and in-house accounting, the right choice depends on your size, complexity and how much direct control you want. For most small businesses, contractors and growing companies, outsourcing tends to win on cost, expertise and scalability, while in-house accounting still has a genuine place for larger, transaction heavy operations that value having a dedicated team on site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you're a contractor or run a small limited company and want to see what outsourced accounting could look like for your own situation, take a look at our{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    contractor accountant services
                  </Link>{" "}
                  to see how we can help.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center not-prose shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Ready to Compare Accounting Options for Your Business?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  Whether you need complete outsourced finance or specialist tax and IR35 advisory, speak directly with our chartered accountants for a clear, fixed-fee quote.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md">
                    <Link to="/contact">Get a Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-800 hover:bg-amber-50">
                    <Link to="/services/outsourced-accounting-services">Explore Outsourced Accounting</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <NearbyLocationsSection />

      </Layout>
    </>
  );
};

export default OutsourcedVsInHouseAccounting;
