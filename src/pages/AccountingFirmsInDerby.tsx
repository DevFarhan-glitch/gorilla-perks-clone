import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  MapPin,
  CheckCircle2,
  Layers,
  ExternalLink,
  Info,
  ChevronDown,
  Building2,
  Users2,
  Briefcase,
  Award,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "how-we-chose", title: "How We Chose These Accounting Firms in Derby" },
  { id: "quick-comparison", title: "Quick Comparison Table" },
  { id: "larger-and-regional-firms", title: "Larger and Regional Accounting Firms in Derby" },
  { id: "pkf-smith-cooper", title: "1. PKF Smith Cooper" },
  { id: "duncan-toplis", title: "2. Duncan & Toplis" },
  { id: "djh-derby", title: "3. DJH Derby" },
  { id: "maple-accountancy", title: "4. Maple Accountancy" },
  { id: "david-williams-co", title: "5. David Williams & Co" },
  { id: "ikm-accountants", title: "6. IKM Accountants" },
  { id: "rdg-accounting", title: "7. RDG Accounting" },
  { id: "henleaze", title: "8. Henleaze Tax Consultancy" },
  { id: "how-to-choose", title: "How to Choose an Accountant in Derby" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const comparisonData = [
  {
    firm: "PKF Smith Cooper",
    office: "Pride Park",
    bestSuited: "Growing and larger businesses needing audit, tax or corporate finance",
    tag: "Midlands Regional Firm",
  },
  {
    firm: "Duncan & Toplis",
    office: "Pride Park",
    bestSuited: "Businesses wanting audit, tax and payroll from a national group",
    tag: "National Group",
  },
  {
    firm: "DJH Derby",
    office: "Pride Park",
    bestSuited: "Owner managed businesses wanting accounting, tax and IT support",
    tag: "Accounting & IT Advisory",
  },
  {
    firm: "Maple Accountancy",
    office: "Wyvern Business Park",
    bestSuited: "Owner managed and family owned businesses",
    tag: "Management Accountants",
  },
  {
    firm: "David Williams & Co",
    office: "Belper Road",
    bestSuited: "Small businesses wanting a long established local practice",
    tag: "Chartered & Audit Practice",
  },
  {
    firm: "IKM Accountants",
    office: "Normanton Road",
    bestSuited: "Small businesses wanting bookkeeping and accounts support",
    tag: "Bookkeeping & Compliance",
  },
  {
    firm: "RDG Accounting",
    office: "Raynesway",
    bestSuited: "Start ups, sole traders and limited companies",
    tag: "Start-ups & Mentoring",
  },
  {
    firm: "Henleaze Tax Consultancy",
    office: "Bristol, remote service",
    bestSuited: "Contractors, sole traders, landlords and small limited companies",
    tag: "Fixed Fees & Specialised Support",
  },
];

const faqsData = [
  {
    question: "How much does an accountant cost in Derby?",
    answer:
      "Fees vary by firm and by what is included, and most of the firms above do not publish set prices. Ask for a written quote that lists exactly what it covers, such as accounts, tax returns and payroll.",
  },
  {
    question: "Do I need an accountant based in Derby?",
    answer:
      "No, but a local office helps if you want face to face meetings. Many accountants, including Henleaze, work with clients remotely using online software.",
  },
  {
    question: "Does an accountant need to be qualified?",
    answer:
      "Not legally, because anyone can call themselves a tax agent and HMRC does not regulate agents, but HMRC advises checking for relevant qualifications or professional body membership.",
  },
  {
    question: "What is the difference between an accountant and a bookkeeper?",
    answer:
      "A bookkeeper records day to day transactions, while an accountant prepares final accounts, handles tax and gives advice. Some firms offer both.",
  },
  {
    question: "When should a small business hire an accountant?",
    answer:
      "Ideally at the start, when you choose a business structure, and certainly before your first year end or tax return deadline. Early advice helps you set up your records properly.",
  },
];

const AccountingFirmsInDerby = () => {
  const [activeSection, setActiveSection] = useState("how-we-chose");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;
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
    headline: "Accounting Firms in Derby: Addresses, Services, Best For",
    description:
      "Compare eight accounting firms in Derby, with office addresses, services and who each suits best, for businesses, directors and individuals.",
    image:
      "https://henleazetaxconsultancy.com/Accounting%20Firms%20in%20Derby%208%20Accountants%20Compared.webp",
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
    datePublished: "2026-11-03",
    dateModified: "2026-11-03",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/accounting-firms-in-derby",
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
        name: "Accounting Firms in Derby: 8 Accountants Compared",
        item: "https://henleazetaxconsultancy.com/accounting-firms-in-derby",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accounting Firms in Derby: Addresses, Services, Best For</title>
        <meta
          name="description"
          content="Compare eight accounting firms in Derby, with office addresses, services and who each suits best, for businesses, directors and individuals."
        />
        <meta
          name="keywords"
          content="accounting firms in derby, accountants in derby, derby accountants, chartered accountants derby, accounting services derby, bookkeeping derby"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accounting-firms-in-derby"
        />
        <meta
          property="og:title"
          content="Accounting Firms in Derby: Addresses, Services, Best For"
        />
        <meta
          property="og:description"
          content="Compare eight accounting firms in Derby, with office addresses, services and who each suits best, for businesses, directors and individuals."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accounting-firms-in-derby"
        />
        <meta
          property="og:image"
          content="https://henleazetaxconsultancy.com/Accounting%20Firms%20in%20Derby%208%20Accountants%20Compared.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accounting Firms in Derby: Addresses, Services, Best For"
        />
        <meta
          name="twitter:description"
          content="Compare eight accounting firms in Derby, with office addresses, services and who each suits best, for businesses, directors and individuals."
        />
        <meta
          name="twitter:image"
          content="https://henleazetaxconsultancy.com/Accounting%20Firms%20in%20Derby%208%20Accountants%20Compared.webp"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/Accounting Firms in Derby 8 Accountants Compared.webp"
            alt="Accounting Firms in Derby: 8 Accountants Compared"
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
                Derby Accountancy Guide
              </span>
            </div>

            {/* Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Accounting Firms in Derby: 8 Accountants Compared
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-amber-600" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-600" />
                November 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                9 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                The right{" "}
                <Link
                  to="/affordable-accountants-in-derby"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  accounting firm in Derby
                </Link>{" "}
                depends mostly on what you need and how big your business is. Derby has large regional groups based at Pride Park, established independents and small practices focused on sole traders and limited companies.
              </p>
              <p>
                This guide compares eight firms. Seven have an office in Derby, and the eighth is Henleaze Tax Consultancy, a Bristol firm that works with clients remotely. We have not ranked them, because the best fit depends on your circumstances.
              </p>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Guide
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
                          className={`text-xs font-mono shrink-0 w-5 ${activeSection === section.id
                            ? "text-amber-600 font-bold"
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

            {/* ── ARTICLE BODY ──────────────────────────────────────── */}
            <div
              className="prose prose-lg prose-gray max-w-none space-y-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {/* Section 1: How We Chose These Accounting Firms in Derby */}
              <section id="how-we-chose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How We Chose These Accounting Firms in Derby
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  We chose firms with a verified Derby address, a clear description of their services and recognised professional credentials, rather than ranking by online reviews. Addresses were checked against each firm's own page, the ICAEW register or Companies House.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most of the firms below do not publish their fees, so ask each one for a written quote before you decide.
                </p>
                <div className="not-prose bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed m-0">
                    <strong>Tip before enquiring:</strong> Request a written, itemised quote detailing what is covered (annual accounts, corporation tax, personal tax returns, payroll, software subscriptions) so you can make a like-for-like comparison.
                  </p>
                </div>
              </section>

              {/* Section 2: Quick Comparison Table */}
              <section id="quick-comparison" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Quick Comparison Table
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The table below shows where each firm is located and who they suit best.
                </p>

                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Firm</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Office</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Best suited to</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                      {comparisonData.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            row.firm.includes("Henleaze")
                              ? "bg-amber-50/40 hover:bg-amber-50/60 font-medium"
                              : index % 2 === 0
                                ? "bg-white hover:bg-gray-50/80"
                                : "bg-gray-50/40 hover:bg-gray-50"
                          }
                        >
                          <td className="py-3 px-4 font-bold text-gray-900">
                            {row.firm.includes("Henleaze") ? (
                              <span className="text-amber-800 flex items-center gap-1.5">
                                {row.firm}
                                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">
                                  Remote
                                </span>
                              </span>
                            ) : (
                              row.firm
                            )}
                          </td>
                          <td className="py-3 px-4 text-gray-700">{row.office}</td>
                          <td className="py-3 px-4 text-gray-600">{row.bestSuited}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Larger and Regional Accounting Firms in Derby */}
              <section id="larger-and-regional-firms" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Larger and Regional Accounting Firms in Derby
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  These eight firms all have a Derby office except Henleaze Tax Consultancy, ranging from large regional groups to small independent practices.
                </p>

                {/* Secondary Image: Larger and Regional Accounting Firms in Derby.webp */}
                <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
                  <img
                    src="/Larger and Regional Accounting Firms in Derby.webp"
                    alt="Larger and Regional Accounting Firms in Derby"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                  <div className="p-3 bg-gray-100 text-center text-xs sm:text-sm text-gray-600 font-medium">
                    Larger and regional accounting firms operating in Derby and the surrounding East Midlands area.
                  </div>
                </div>
              </section>

              {/* Firm 1: PKF Smith Cooper */}
              <section id="pkf-smith-cooper" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      1. PKF Smith Cooper
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      Regional Group
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    PKF Smith Cooper suits businesses from growing SMEs to large corporations that want audit, tax and corporate finance from one regional firm. Its Derby office is at Prospect House, 1 Prospect Place, Millennium Way, Pride Park, DE24 8HG.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Prospect House, 1 Prospect Place, Millennium Way, Pride Park, Derby, DE24 8HG
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Founded in 1985, it is the PKF member firm for the Midlands. Services include audit, tax advisory, corporate finance, business recovery, business services and private client work.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> it is a large, partner led firm, so a sole trader with simple affairs may find the range more than they need.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 2: Duncan & Toplis */}
              <section id="duncan-toplis" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      2. Duncan &amp; Toplis
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                      National Group
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Duncan &amp; Toplis suits businesses that want audit, tax and payroll support from a large national group with a local office. Its Derby office is at Pinnacle House, 1 Pinnacle Way, Pride Park, DE24 8ZS.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Pinnacle House, 1 Pinnacle Way, Pride Park, Derby, DE24 8ZS
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    The group is more than 100 years old and arrived in Derby by acquiring Underwood Green, a local practice. Its services cover audit, tax, corporate finance, payroll and business support.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> Derby is one of many offices in the group, so ask who will handle your account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 3: DJH Derby */}
              <section id="djh-derby" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      3. DJH Derby
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      Accountancy &amp; IT
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    DJH Derby suits owner-managed businesses that want accounting, tax and advisory support, with IT support available through a related business. It is at 5 Prospect Place, Millennium Way, Pride Park, DE24 8HG, and marked 20 years at Pride Park in 2026.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>5 Prospect Place, Millennium Way, Pride Park, Derby, DE24 8HG</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    The office was formerly Ashgates, which joined the DJH group in July 2024 and became DJH Derby the following year. It offers accountancy, tax and business advisory services, plus managed IT through DJH Tech Partners.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> DJH has 16 offices across the UK and Ireland, so confirm which team will look after your work.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 4: Maple Accountancy */}
              <section id="maple-accountancy" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      4. Maple Accountancy
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                      Chartered Management Accountants
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Maple Accountancy suits owner managed and family owned businesses that want accounts, tax and business advice. It is at Carter House, G2 Wyvern Court, Stanier Way, Wyvern Business Park, DE21 6BF, after moving from Friar Gate in 2024.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Carter House, G2 Wyvern Court, Stanier Way, Wyvern Business Park, Derby, DE21 6BF
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    It describes itself as a firm of chartered management accountants, with services including payroll, VAT, tax planning, Xero cloud accounting and business start ups.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> Wyvern Business Park is about two miles east of the city centre, so check parking and travel before you visit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 5: David Williams & Co */}
              <section id="david-williams-co" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      5. David Williams &amp; Co
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      ICAEW Registered Auditor
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    David Williams &amp; Co suits small businesses that want a long established local practice. The office is at 66 Belper Road, DE1 3EN.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>66 Belper Road, Derby, DE1 3EN</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    The firm has been based in Derby since 1991 and provides audit, accountancy and taxation services to local businesses and to clients elsewhere in the UK and overseas. It is led by David Williams FCA, a chartered accountant and registered auditor.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> the website is brief, so ask directly about services such as payroll and cloud software.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 6: IKM Accountants */}
              <section id="ikm-accountants" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      6. IKM Accountants
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full">
                      Small Business Specialist
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    IKM Accountants suits small businesses that want bookkeeping and accounts support. The office is at Rosehill Business Centre (Room 23), Normanton Road, DE23 6RH.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Rosehill Business Centre (Room 23), Normanton Road, Derby, DE23 6RH</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    It is a limited company with more than ten years of experience, working across a range of sectors, and bookkeeping is one of its listed services.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> public information about the firm is limited, so ask about qualifications, software and fees before you commit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 7: RDG Accounting */}
              <section id="rdg-accounting" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      7. RDG Accounting
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full">
                      Start-ups &amp; Mentoring
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    RDG Accounting suits start ups, sole traders and limited companies that want a small, hands on practice. It is based at Chatsworth House, Prime Business Centre, Raynesway, DE21 7SR.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Chatsworth House, Prime Business Centre, Raynesway, Derby, DE21 7SR</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    It describes itself as an established practice serving clients across the Midlands, and it offers business start up advice and business mentoring.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> as a small firm, it is worth checking how it handles busy deadline periods.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 8: Henleaze Tax Consultancy */}
              <section id="henleaze" className="scroll-mt-28">
                <div className="not-prose bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 rounded-xl border-2 border-amber-300 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      8. Henleaze Tax Consultancy, a Remote Option from Bristol
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                      Fixed-Fee Specialist
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <Link to="/" className="text-amber-700 hover:underline font-semibold">
                      Henleaze Tax Consultancy
                    </Link>{" "}
                    suits contractors, sole traders, landlords and small limited companies that want clear advice at a fixed fee. Its office is in Bristol, so it has no Derby address, and support for Derby clients is remote.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-white/80 p-3 rounded-lg border border-amber-200 mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Bristol Office (Remote service for Derby &amp; UK clients via cloud software)
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <Link to="/pricing" className="text-amber-700 hover:underline font-semibold">
                      Fixed fees
                    </Link>{" "}
                    mean you know the cost before any work starts. If you are weighing up accountants as a contractor, our guide to{" "}
                    <Link
                      to="/how-to-choose-contractor-accountant"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      how to choose a contractor accountant
                    </Link>{" "}
                    explains what to look for.
                  </p>

                  <div className="bg-amber-100/70 border-l-4 border-amber-600 p-4 rounded-r-lg mb-6">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> if you want face to face meetings in Derby, one of the seven local firms above will suit you better.
                    </p>
                  </div>

                  {/* Consultation Card */}
                  <div className="bg-gray-900 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                      <p className="font-bold text-lg text-white mb-1">
                        Looking for transparent fixed fees with zero surprises?
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Speak directly with Henleaze Tax Consultancy about your contractor, landlord or small business accounting requirements.
                      </p>
                    </div>
                    <Button
                      asChild
                      className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-2.5 rounded-lg border-none"
                    >
                      <Link to="/contact">Book Free Consultation</Link>
                    </Button>
                  </div>
                </div>
              </section>

              {/* Section 4: How to Choose an Accountant in Derby */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How to Choose an Accountant in Derby
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Check their professional qualifications, confirm they handle your type of work and get fees in writing. HMRC's guidance on{" "}
                  <a
                    href="https://www.gov.uk/guidance/how-to-choose-a-tax-agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    choosing a tax agent
                    <ExternalLink className="h-3.5 w-3.5 inline" />
                  </a>{" "}
                  points out that anyone can call themselves a tax agent and that HMRC does not regulate agents, so professional body membership matters.
                </p>

                <p className="text-gray-700 font-medium mb-3">Use this checklist:</p>

                <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-3.5 my-6">
                  {[
                    <span>Membership of a recognised body such as ICAEW, ACCA or AAT</span>,
                    <span>
                      Experience with clients like you, such as{" "}
                      <Link
                        to="/services/contractor-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        contractors
                      </Link>
                      ,{" "}
                      <Link
                        to="/services/landlord-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        landlords
                      </Link>{" "}
                      or directors
                    </span>,
                    <span>A named person who will handle your account</span>,
                    <span>The accounting software they use</span>,
                    <span>Whether fees are fixed or hourly, and what is included</span>,
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Ask for a few quotes and compare what each one covers, not only the price.{" "}
                  <Link
                    to="/top-10-accounting-firms-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Larger firms
                  </Link>{" "}
                  suit more complex needs, while a small practice may suit a sole trader better.
                </p>
              </section>

              {/* Section 5: FAQs */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-8 not-prose bg-white shadow-sm">
                  {faqsData.map((faq, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-base leading-snug">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-amber-600 font-bold text-xl leading-none mt-0.5">
                          {openFaq === idx ? "−" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed bg-gray-50/60 border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  When comparing accounting firms in Derby, the right choice depends on your size, your sector and the kind of advice you need. Pride Park is home to larger names such as PKF Smith Cooper, Duncan &amp; Toplis and DJH Derby, while firms such as David Williams &amp; Co and RDG Accounting serve smaller businesses.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whatever you choose, check qualifications, ask for fees in writing and be clear about what you need. If you are a contractor, sole trader, landlord or small limited company and want clear advice at a fixed fee, take a look at{" "}
                  <Link
                    to="/services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Henleaze Tax Consultancy accounting services page.
                  </Link>
                </p>

                {/* Final Banner */}
                <div className="not-prose bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 my-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Ready to speak with a tax and accounting specialist?
                    </h3>
                    <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                      Discover our transparent, fixed-fee accountancy solutions designed for contractors, freelancers, landlords and growing companies.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Button
                      asChild
                      className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-lg border-none"
                    >
                      <Link to="/contact">Contact Us Today</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gray-600 text-black hover:bg-gray-800 hover:text-white font-semibold px-5 py-3 rounded-lg"
                    >
                      <Link to="/services">View Services</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

      </Layout>
    </>
  );
};

export default AccountingFirmsInDerby;

