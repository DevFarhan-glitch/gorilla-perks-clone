import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronDown,
  Building2,
  TrendingUp,
  Globe,
  Award,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  ShieldCheck,
  Scale,
  DollarSign,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "quick-comparison", title: "Quick Comparison" },
  { id: "big-four", title: "The Big Four: Who They Are and Why They Dominate" },
  { id: "mid-tier", title: "The Mid-Tier Firms Closing the Gap" },
  { id: "what-separates", title: "What Actually Separates These Firms Beyond Revenue" },
  { id: "revenue-rankings", title: "Why Revenue Rankings Don't Tell You Which Firm is Right" },
  { id: "does-your-business-need", title: "Does Your Business Actually Need a Top 10 Firm?" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    question: "What are the top 10 accounting firms in the UK?",
    answer:
      "The Big Four, PwC, Deloitte, EY and KPMG, lead by revenue, followed by mid tier firms including BDO, Evelyn Partners, Grant Thornton, RSM, Azets and Forvis Mazars.",
  },
  {
    question: "Is a bigger accounting firm always better for my business?",
    answer:
      "Not necessarily. Larger firms suit big corporations and audit heavy work, while smaller and mid sized businesses often get more attention and practical advice from a firm sized appropriately to their needs.",
  },
  {
    question: "What's the difference between the Big Four and mid tier firms?",
    answer:
      "The Big Four dominate large corporate and FTSE audit work and operate at a significantly larger revenue scale, while mid tier firms tend to compete on sector specialism, regional presence and service for owner managed businesses.",
  },
  {
    question: "Do small businesses need a top accounting firm?",
    answer:
      "Most small businesses, sole traders and contractors are better served by a specialist practice built around their specific needs than by a large firm where they'd represent a small part of a much bigger client base.",
  },
];

const comparisonData = [
  { firm: "PwC", tier: "Big Four", revenue: "£6.35bn", knownFor: "Largest UK firm by revenue, global reach" },
  { firm: "Deloitte", tier: "Big Four", revenue: "£5.68bn", knownFor: "Largest accounting network globally" },
  { firm: "EY", tier: "Big Four", revenue: "£3.78bn", knownFor: "Financial services, energy, technology" },
  { firm: "KPMG", tier: "Big Four", revenue: "£2.99bn UK standalone, £3.6bn combined with Switzerland since 2024", knownFor: "Risk management, technology partnerships" },
  { firm: "BDO", tier: "Mid tier", revenue: "£1.0bn", knownFor: "SME and enterprise tax and advisory" },
  { firm: "Evelyn Partners", tier: "Mid tier", revenue: "£656.6m", knownFor: "Accountancy combined with wealth management" },
  { firm: "Grant Thornton", tier: "Mid tier", revenue: "£654.0m", knownFor: "Mid market audit and advisory" },
  { firm: "RSM", tier: "Mid tier", revenue: "£522.0m", knownFor: "Wide UK office network, cross border support" },
  { firm: "Azets", tier: "Mid tier", revenue: "£405.0m", knownFor: "Widest UK geographic spread, SME focus" },
  { firm: "Forvis Mazars", tier: "Mid tier", revenue: "£362.4m", knownFor: "Public interest entity audit specialism" },
];

const Top10AccountingFirmsUK = () => {
  const [activeSection, setActiveSection] = useState("quick-comparison");
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
    headline: "Top 10 Accounting Firms UK: Big Four to Mid Tier",
    description:
      "From the Big Four to fast growing mid tier firms, see how the UK largest accounting firms compare and which suits your business.",
    image: "https://henleazetaxconsultancy.com/top-10-accounting-firms-in-the-uk.webp",
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
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
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

  return (
    <>
      <Helmet>
        <title>Top 10 Accounting Firms UK: Big Four to Mid Tier</title>
        <meta
          name="description"
          content="From the Big Four to fast growing mid tier firms, see how the UK largest accounting firms compare and which suits your business."
        />
        <meta name="keywords" content="top 10 accounting firms uk, largest accounting firms uk, big four uk, mid tier accounting firms uk, best accounting firms uk" />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/top-10-accounting-firms-uk" />
        <meta property="og:title" content="Top 10 Accounting Firms UK: Big Four to Mid Tier" />
        <meta
          property="og:description"
          content="From the Big Four to fast growing mid tier firms, see how the UK largest accounting firms compare and which suits your business."
        />
        <meta property="og:url" content="https://henleazetaxconsultancy.com/top-10-accounting-firms-uk" />
        <meta property="og:image" content="https://henleazetaxconsultancy.com/top-10-accounting-firms-in-the-uk.webp" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/top-10-accounting-firms-in-the-uk.webp"
            alt="Featured image for top 10 accounting firms in the UK, with London skyline, UK map and professional accounting workspace"
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
                UK Accounting Guide
              </span>
            </div>

            {/* Title (H1) */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Top 10 Accounting Firms in the UK: What Makes Each Firm Different?
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              From the Big Four to fast growing mid tier firms, see how the UK's largest accounting firms compare and which suits your business.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                August 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                9 min read
              </span>
            </div>

            {/* Intro paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The UK's largest accounting firms fall into two clear groups, the Big Four, who dominate audit and large corporate work and a tier of mid-sized firms who compete on sector specialism, regional presence and service for owner managed businesses. Together these 10 firms make up most of what people mean when they search for the best accounting firms UK wide, though which one is actually right for you depends far more on your own situation than on where a firm sits in a revenue table.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This guide breaks down who these firms are, what genuinely separates them beyond size and why a top 10 firm isn't automatically the right choice for every business. If you're specifically looking at options closer to home, our comparison of{" "}
              <Link
                to="/top-5-accountancy-firms-in-bristol"
                className="text-amber-700 font-semibold hover:underline"
              >
                top accountancy firms in Bristol
              </Link>{" "}
              covers a more regional set of choices.
            </p>

            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
                In This Article
              </h2>
              <nav>
                <ol className="space-y-2">
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
                          className={`text-xs font-mono shrink-0 w-5 ${activeSection === section.id
                              ? "text-amber-600"
                              : "text-gray-400"
                            }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:underline underline-offset-2">
                          {section.title}
                        </span>
                        {activeSection === section.id && (
                          <span className="ml-auto shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 self-center" />
                        )}
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Main Content Area */}
            <div
              className="prose prose-lg prose-gray max-w-none"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {/* Section 1 — Quick Comparison */}
              <h2
                id="quick-comparison"
                className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4"
              >
                Quick Comparison
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto mb-6 not-prose">
                <table className="w-full border-collapse text-sm text-gray-700 my-4 bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">Firm</th>
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">Tier</th>
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">UK Revenue (Latest Filed)</th>
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">Known For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/30">
                        <td className="px-5 py-3.5 font-bold text-gray-900">{item.firm}</td>
                        <td className="px-5 py-3.5">
                          <span
                            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${item.tier === "Big Four"
                                ? "bg-amber-100 text-amber-800 border border-amber-200"
                                : "bg-blue-100 text-blue-800 border border-blue-200"
                              }`}
                          >
                            {item.tier}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 font-semibold text-amber-700">{item.revenue}</td>
                        <td className="px-5 py-3.5 text-gray-700">{item.knownFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500 italic mb-8">
                Figures reflect each firm's most recently published financial results as reported directly by the firm, using the reporting period ending in 2025 in each case. Reporting periods vary slightly between firms, so figures aren't perfectly like for like.
              </p>

              {/* Section 2 — Big Four */}
              <h2
                id="big-four"
                className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4"
              >
                The Big Four: Who They Are and Why They Dominate
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                The Big Four dominate the UK accounting market largely because of their reach into large corporate audit work. Between them, PwC, Deloitte, EY and KPMG handle the vast majority of FTSE 350 audit fees, a scale no mid tier or specialist firm can realistically compete with.
              </p>

              {/* PwC */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-600" />
                  PwC
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  PwC is currently the UK's largest accounting firm by revenue, having reported £6.35 billion for the year ended 30 June 2025. It was formed in 1998 through the merger of Price Waterhouse and Coopers and Lybrand, though both firms trace their roots back to the mid 1800s.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>UK Consolidated Group revenue of £6.35 billion for the year ended 30 June 2025, up slightly on the previous year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Operates in more than 150 countries as part of the wider global PwC network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Known as one of the most prestigious employers in UK accounting and finance</span>
                  </li>
                </ul>
              </div>

              {/* Deloitte */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-600" />
                  Deloitte
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Deloitte sits close behind PwC and remains the largest accounting network globally by revenue, though its UK business had a notably tougher year recently.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>UK revenue of £5.68 billion for the year ended 31 May 2025, a 1 percent decline, the firm's first UK revenue drop in 15 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Heavy investment in digital transformation, cybersecurity and sustainability advisory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Client base spans the FTSE 100, public sector bodies and fast growing private companies</span>
                  </li>
                </ul>
              </div>

              {/* EY */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-600" />
                  EY
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  EY is particularly known for its work in financial services, energy, technology and consumer products, and reported UK growth in a year several competitors found difficult.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>UK fee income of £3.78 billion for the year ending 27 June 2025, up 2 percent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Strategy and Transactions grew 10 percent, while Consulting revenue fell 6 percent, reflecting a mixed year across service lines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Strong focus on ESG advisory, helping clients build sustainability into their operations</span>
                  </li>
                </ul>
              </div>

              {/* KPMG */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-600" />
                  KPMG
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  KPMG rounds out the Big Four, though its UK reporting changed significantly after merging with KPMG Switzerland in October 2024.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Reported £2.99 billion in its final year as a standalone UK entity, for the year ended 30 September 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Following the merger, the combined KPMG UK and Switzerland Group reported £3.6 billion for the year ended 30 September 2025, so this figure includes Switzerland and isn't directly comparable to a UK only number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Uses Microsoft, Oracle, SAP, Salesforce and IBM platforms to support audit and compliance services</span>
                  </li>
                </ul>
              </div>

              {/* SECOND IMAGE */}
              <div className="my-10 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3 not-prose">
                <img
                  src="/top-10-accounting-firms.webp"
                  alt="Top 10 accounting firms in the UK, including PwC, Deloitte, EY, KPMG, BDO, RSM, Azets and Forvis Mazars"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              {/* Section 3 — Mid-Tier Firms */}
              <h2
                id="mid-tier"
                className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4"
              >
                The Mid-Tier Firms Closing the Gap
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Below the Big Four sits a group of firms that, while smaller in revenue, often provide more accessible and specialised service for mid sized and owner managed businesses. Several of these firms have posted stronger year on year growth than the Big Four recently, closing the gap in certain sectors even if not in overall scale.
              </p>

              {/* BDO */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  BDO
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BDO, established in 1903, is the largest firm in this tier by some distance.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>UK revenue of £1.005 billion for the year ending 4 July 2025, broadly stable on the previous year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Recently announced plans to merge with BDO Ireland, with the combined entity expected to reach around £1.1 billion in revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Services include corporate tax, VAT, payroll, financial reporting advisory and HMRC compliance, using platforms including Xero and QuickBooks</span>
                  </li>
                </ul>
              </div>

              {/* Grant Thornton */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Grant Thornton
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Grant Thornton focuses heavily on mid market audit and advisory work and recently took on private equity investment of its own to fund growth.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>UK fee income of £654.0 million, up 7.2 percent year on year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Positioned as an alternative to the Big Four for larger mid market businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Around 5,500 staff across the UK</span>
                  </li>
                </ul>
              </div>

              {/* Evelyn Partners */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Evelyn Partners
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Evelyn Partners stands out for combining traditional accountancy with wealth management services under one roof, and now edges narrowly ahead of Grant Thornton in this tier.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>UK fee income of £656.6 million, up 9.3 percent year on year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Backed by private equity investors Permira and Warburg Pincus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Useful for clients who want tax and accountancy advice alongside investment and financial planning</span>
                  </li>
                </ul>
              </div>

              {/* RSM */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  RSM
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  RSM has one of the widest UK footprints of any firm in this tier.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>UK fee income of £522.0 million</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Around 5,420 staff across roughly 30 UK locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Part of a global network spanning more than 120 countries, particularly suited to businesses with cross border operations</span>
                  </li>
                </ul>
              </div>

              {/* Azets */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Azets
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Azets has the broadest geographic spread of any firm on this list and grew rapidly from a standing start.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>UK fee income of £405.0 million</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Launched in 2017 with private equity backing and grown through the acquisition of close to 100 accountancy firms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>
                      Serves a large base of SME and owner managed business clients across the widest UK office network of any firm here, the kind of business that often also needs a straightforward way to work out{" "}
                      <Link
                        to="/how-do-you-calculate-your-annual-salary-in-uk"
                        className="text-amber-700 font-semibold hover:underline"
                      >
                        annual salary figures
                      </Link>{" "}
                      for staff or director pay
                    </span>
                  </li>
                </ul>
              </div>

              {/* Forvis Mazars */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-200 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  Forvis Mazars
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Forvis Mazars, formerly known simply as Mazars, is recognised as a leading auditor for public interest entities in the UK following its recent merger with Forvis.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>UK fee income of £362.4 million</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Offers a balanced range of audit, accounting, tax, financial advisory and consulting services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Strong presence in statutory audit work for larger regulated organisations</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 — What Actually Separates These Firms */}
              <h2
                id="what-separates"
                className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4"
              >
                What Actually Separates These Firms Beyond Revenue
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Revenue tells you about scale, but it doesn't tell you much about fit. When comparing any list of accountancy firms UK wide, a few other factors matter more for most businesses.
              </p>

              <div className="space-y-4 mb-8 not-prose">
                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Sector Specialism</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Some firms lean heavily into financial services or large corporate audit, while others focus on SMEs, owner managed businesses or specific industries, including practical needs like{" "}
                    <Link
                      to="/how-to-calculate-monthly-salary-in-uk"
                      className="text-amber-700 font-semibold hover:underline"
                    >
                      calculating monthly salary correctly for payroll
                    </Link>
                    .
                  </p>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <Globe className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Geographic Spread</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    A firm with dozens of regional offices, like Azets or RSM, may offer easier in person access than one concentrated in major cities.
                  </p>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Growth Rate and Investment</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Faster growing mid tier firms are often investing heavily in technology and expanding their advisory services beyond basic compliance.
                  </p>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <Scale className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Ownership and Structure</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Some of these firms are structured as single consolidated entities, while others operate as networks of independent regional practices, which can affect consistency of service across locations.
                  </p>
                </div>
              </div>

              {/* Section 5 — Why Revenue Rankings Don't Tell You Which Firm is Right */}
              <h2
                id="revenue-rankings"
                className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4"
              >
                Why Revenue Rankings Don't Tell You Which Firm is Right for You
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                A firm's position in a UK top accountancy firm's ranking reflects its overall size and client base, not how well it will serve your specific situation. A billion pound firm built around FTSE 350 audit work has very different priorities, pricing and client attention than a business needs from an accountant handling routine compliance and practical tax advice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Larger firms generally suit large corporations, businesses needing statutory audit or companies with genuinely international operations. Smaller and mid sized businesses often find they get more attention, faster response times and more tailored advice from a firm sized appropriately to their needs, rather than a large practice where they represent a small fraction of the client base, particularly for situations like{" "}
                <Link
                  to="/what-is-ir35-uk"
                  className="text-amber-700 font-semibold hover:underline"
                >
                  IR35 status
                </Link>{" "}
                that a generalist firm may not prioritise in the same depth.
              </p>

              {/* Section 6 — Does Your Business Actually Need a Top 10 Firm? */}
              <h2
                id="does-your-business-need"
                className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4"
              >
                Does Your Business Actually Need a Top 10 Firm?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                For most sole traders, contractors and small business owners, the honest answer is no. A Big Four or mid tier firm is built to serve large, complex organisations and a small business often ends up as a minor client within a much bigger practice, without the specialist attention a dedicated smaller firm can offer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                This is exactly the gap a specialist practice fills.{" "}
                <Link
                  to="/"
                  className="text-amber-700 font-semibold hover:underline"
                >
                  Henleaze Tax Consultancy
                </Link>
                , based in Bristol, works specifically with contractors, sole traders, landlords and small limited companies, offering{" "}
                <Link
                  to="/pricing"
                  className="text-amber-700 font-semibold hover:underline"
                >
                  fixed fee pricing
                </Link>{" "}
                and direct access to advice tailored to how these businesses actually operate, including IR35 status and salary and dividend planning that a larger generalist firm may not prioritise.
              </p>

              {/* CTA Banner */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950 text-white rounded-2xl p-8 my-12 shadow-xl border border-amber-500/20 text-center sm:text-left not-prose">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-display">
                    Looking for Dedicated, Fixed-Fee Accounting Support?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get in touch with our specialist Bristol team for straightforward tax advice, transparent monthly pricing, and tailored accounting support.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                    <Button
                      asChild
                      className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 border-none"
                    >
                      <Link to="/contact">
                        Book a Free Consultation
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gray-600 text-black hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg"
                    >
                      <Link to="/pricing">View Pricing Plans</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Section 7 — FAQs */}
              <h2
                id="faqs"
                className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4"
              >
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-4 mb-12 not-prose">
                {faqsData.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-gray-900 hover:text-amber-700 transition-colors"
                    >
                      <span className="flex items-center gap-3 text-lg">
                        <HelpCircle className="h-5 w-5 text-amber-600 shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? "rotate-180 text-amber-600" : ""
                          }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 pt-1 text-gray-700 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        <p className="m-0 text-base">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-500 italic mb-8">
                Figures in this guide are based on publicly available information at the time of writing and may vary slightly depending on the reporting period used by each firm. For advice specific to your own business, particularly as a contractor or small limited company, speak with a qualified accountant directly.
              </p>
            </div>
          </div>
        </div>
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default Top10AccountingFirmsUK;
