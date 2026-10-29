import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Building2,
  MapPin,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Check,
  ExternalLink,
  Info,
  Award,
  ChevronDown,
  Briefcase,
  Users2,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "how-we-chose", title: "How We Chose These Accounting Firms in Southampton" },
  { id: "quick-comparison", title: "Quick Comparison Table" },
  { id: "firms-in-detail", title: "The 6 Firms in Detail" },
  { id: "pkf-francis-clark", title: "1. PKF Francis Clark" },
  { id: "carpenter-box", title: "2. Carpenter Box" },
  { id: "moore-south", title: "3. Moore (South)" },
  { id: "hayhursts", title: "4. Hayhursts" },
  { id: "fiander-tovell", title: "5. Fiander Tovell" },
  { id: "henleaze", title: "6. Henleaze Tax Consultancy" },
  { id: "how-to-choose", title: "How to Choose an Accountant in Southampton" },
  { id: "credentials-meaning", title: "What ICAEW, ACCA and AAT Mean" },
  { id: "business-vs-individual", title: "Business Accountants or Accountants for Individuals?" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const comparisonData = [
  {
    firm: "PKF Francis Clark",
    office: "Southampton Science Park",
    bestSuited: "Larger companies needing audit or corporate finance",
    tag: "Established & Mid-to-Large Corporates",
  },
  {
    firm: "Carpenter Box",
    office: "Grosvenor Square",
    bestSuited: "Businesses and individuals wanting joined up tax advice",
    tag: "Start-ups, Growth & Private Clients",
  },
  {
    firm: "Moore (South)",
    office: "Ocean Village",
    bestSuited: "Growing businesses and private clients with complex tax",
    tag: "High-Growth & Complex Advisory",
  },
  {
    firm: "Hayhursts",
    office: "Ocean Village",
    bestSuited: "Businesses wanting outsourced accounting and payroll",
    tag: "Outsourced Finance & Licensed Trades",
  },
  {
    firm: "Fiander Tovell",
    office: "The Avenue",
    bestSuited: "Owner managed businesses and directors",
    tag: "Director-Led Practice & Exit Planning",
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
    question: "How much does an accountant cost in Southampton?",
    answer:
      "Fees vary by firm and by what is included, and none of the firms above publishes set prices. Ask for a written quote that lists exactly what it covers, such as accounts, tax returns and payroll.",
  },
  {
    question: "Do I need an accountant based in Southampton?",
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

const AccountingFirmsInSouthampton = () => {
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
    headline: "Accounting Firms in Southampton: 6 Options",
    description:
      "Compare six accounting firms in Southampton, with office addresses, services and who each suits best, for businesses, directors and individuals.",
    image: "https://henleazetaxconsultancy.com/accounting-firms-in-southampton.webp",
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
    datePublished: "2026-10-29",
    dateModified: "2026-10-29",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/accounting-firms-in-southampton",
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
        name: "Accounting Firms in Southampton: 6 Options",
        item: "https://henleazetaxconsultancy.com/accounting-firms-in-southampton",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accounting Firms in Southampton: 6 Options</title>
        <meta
          name="description"
          content="Compare six accounting firms in Southampton, with office addresses, services and who each suits best, for businesses, directors and individuals."
        />
        <meta
          name="keywords"
          content="accounting firms in southampton, southampton accounting firms, accountants in southampton, southampton accountants, chartered accountants southampton, business accountants southampton"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accounting-firms-in-southampton"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/accounting-firms-in-southampton.webp"
            alt="Accounting Firms in Southampton: 6 Options for Businesses and Individuals"
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
                Southampton Accountancy Guide
              </span>
            </div>

            {/* Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Accounting Firms in Southampton: 6 Options for Businesses and Individuals
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-amber-600" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-600" />
                October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                8 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Choosing between accounting firms in{" "}
                <Link
                  to="/best-accountants-in-southampton"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  Southampton
                </Link>{" "}
                mostly comes down to what you need done and how big your business is. Some firms focus on audit and corporate finance, while others look after owner managed companies or handle outsourced bookkeeping and payroll.
              </p>
              <p>
                This guide covers six firms. Five have a physical office in Southampton, and the sixth is Henleaze Tax Consultancy, a Bristol firm that supports clients remotely. We have not ranked them, because the best fit depends on who you are and what you need.
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
                        className={`group flex items-baseline gap-3 w-full text-left text-sm transition-colors duration-150 ${
                          activeSection === section.id
                            ? "text-amber-700 font-semibold"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span
                          className={`text-xs font-mono shrink-0 w-5 ${
                            activeSection === section.id
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
              {/* Section 1: How We Chose These Accounting Firms in Southampton */}
              <section id="how-we-chose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How We Chose These Accounting Firms in Southampton
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  We chose firms with a verified office address, a clear list of services and recognised professional credentials, rather than ranking by online reviews. Each address was checked against the firm's own page, the ICAEW register or Companies House.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  None of the five Southampton firms publishes its fees, so ask each one for a written quote before you decide.
                </p>
                <div className="not-prose bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed m-0">
                    <strong>Tip before enquiring:</strong> Request a written, itemised scope of work so you can compare whether routine telephone queries, year-end adjustments, or software licenses are included in the price or billed extra.
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
                  The table shows where each firm is based and who it suits best.
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

              {/* Section 3: The 6 Firms in Detail */}
              <section id="firms-in-detail" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  The 6 Firms in Detail
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here is an in-depth look at each of the six accounting practices, covering their verified office locations, accreditations, core services and key aspects worth knowing.
                </p>

                {/* Second Image: 6-firms.webp */}
                <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
                  <img
                    src="/6-firms.webp"
                    alt="The 6 Firms in Detail"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                  <div className="p-3 bg-gray-100 text-center text-xs sm:text-sm text-gray-600 font-medium">
                    The 6 Firms in Detail: Comparing local Southampton offices and remote accounting alternatives.
                  </div>
                </div>
              </section>

              {/* Firm 1: PKF Francis Clark */}
              <section id="pkf-francis-clark" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      1. PKF Francis Clark
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                        ACCA &amp; ICAEW
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    PKF Francis Clark suits established companies that want audit, tax and corporate finance from one team. The Southampton office is in the South Wing of Kenneth Dibben House, Enterprise Road, Southampton Science Park, SO16 7NS.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      South Wing, Kenneth Dibben House, Enterprise Road, Southampton Science Park, SO16 7NS
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    It opened in 2022 and is ACCA and ICAEW accredited. Services include accounts, audit, tax, payroll, cloud accounting and debt advisory.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> the office sits beside the M27 on the edge of the city, and the offer leans towards larger businesses.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 2: Carpenter Box */}
              <section id="carpenter-box" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      2. Carpenter Box
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                      Regional Group
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Carpenter Box suits businesses and individuals who want accounts and tax advice from one firm. The office is at 15 to 17 Cumberland Place, SO15 2BG, in Cumberland House on Grosvenor Square, around a 15 minute walk from Southampton Central station.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Cumberland House, 15–17 Cumberland Place, Grosvenor Square, Southampton, SO15 2BG
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    It works with start ups, growing businesses, established companies, individuals and families. Services cover accounts, audit, business tax, payroll, corporate finance and property taxation.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> there is no on site parking, and the firm is part of a wider regional group.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 3: Moore (South) */}
              <section id="moore-south" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      3. Moore (South)
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      Free First Consultation
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Moore (South) suits growing businesses and private clients with more involved tax needs. It is based at The Quay, 30 Channel Way, Ocean Village, SO14 3TG, and offers a free first consultation online or at the office.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>The Quay, 30 Channel Way, Ocean Village, Southampton, SO14 3TG</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Its tax work covers tax returns, VAT, inheritance tax, capital gains tax, trusts and estate planning, retirement planning and family investment companies. The wider firm also provides audit, cloud accounting and payroll.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> it is a larger advisory firm, so a sole trader with simple affairs may not need that range.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 4: Hayhursts */}
              <section id="hayhursts" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      4. Hayhursts
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                      Outsourced Specialist
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Hayhursts suits businesses that want to hand over their finance function, particularly pubs and licensed trades. The office is at Second Floor, Grove House, 6 Meridians Cross, Ocean Way, SO14 3TJ.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Second Floor, Grove House, 6 Meridians Cross, Ocean Way, Southampton, SO14 3TJ
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Established in 2005, it provides outsourced accounting, payroll, VAT returns, statutory accounts, iXBRL tagging and company secretarial services.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> the website focuses on business clients and does not list personal tax, so individuals may want to look elsewhere.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 5: Fiander Tovell */}
              <section id="fiander-tovell" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      5. Fiander Tovell
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      ICAEW Registered
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Fiander Tovell suits owner managed businesses and directors who want business and personal planning in one place. The office is at Stag Gates House, 63 to 64 The Avenue, SO17 1XS, and the firm is ICAEW registered.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Stag Gates House, 63–64 The Avenue, Southampton, SO17 1XS</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    It describes itself as an independent, director led practice that supports businesses from start up through to exit. Services include personal tax planning, retirement planning, estate planning, audit and company secretarial work.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> a small team of directors leads the work, so ask who will handle your account.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 6: Henleaze Tax Consultancy */}
              <section id="henleaze" className="scroll-mt-28">
                <div className="not-prose bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 rounded-xl border-2 border-amber-300 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      6. Henleaze Tax Consultancy
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                      Fixed-Fee Specialist
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <Link to="/" className="text-amber-700 hover:underline font-semibold">
                      Henleaze Tax Consultancy
                    </Link>{" "}
                    suits contractors, sole traders, landlords and small limited companies who want clear advice at a fixed fee. Its office is in Bristol, so it has no Southampton address, and support for Southampton clients is remote.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-white/80 p-3 rounded-lg border border-amber-200 mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Bristol Office (Remote service for Southampton &amp; UK clients via cloud software)
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
                      <strong>Worth knowing:</strong> if you want face to face meetings in Southampton, one of the five local firms above will suit you better.
                    </p>
                  </div>

                  {/* Consultation Card */}
                  <div className="bg-gray-900 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                      <p className="font-bold text-lg text-white mb-1">
                        Looking for clear advice at a transparent fixed fee?
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Speak directly with Henleaze Tax Consultancy about your contractor, landlord or small business accounting.
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

              {/* Section 4: How to Choose an Accountant in Southampton */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How to Choose an Accountant in Southampton
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
                    "Membership of a recognised body such as ICAEW, ACCA or AAT",
                    "Experience with clients like you, such as contractors, landlords or directors",
                    "A named person who will handle your account",
                    "The accounting software they use",
                    "Whether fees are fixed or hourly, and what is included",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Ask for a few quotes and compare what each one covers, not only the price.
                </p>
              </section>

              {/* Section 5: What ICAEW, ACCA and AAT Mean */}
              <section id="credentials-meaning" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What ICAEW, ACCA and AAT Mean
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  They are professional bodies whose members must meet training and conduct standards, which gives you somewhere to check or complain.
                </p>

                <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-amber-600 shrink-0" />
                      <h4 className="font-bold text-gray-900 text-base">ICAEW</h4>
                    </div>
                    <p className="text-sm font-semibold text-amber-800 mb-1">
                      Institute of Chartered Accountants in England and Wales
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Rigorous chartered qualification with strict ethical standards, professional indemnity requirements, and disciplinary procedures.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-amber-600 shrink-0" />
                      <h4 className="font-bold text-gray-900 text-base">ACCA</h4>
                    </div>
                    <p className="text-sm font-semibold text-amber-800 mb-1">
                      Association of Chartered Certified Accountants
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Global professional accounting body recognised for financial management, strategic audit, taxation, and business compliance.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-amber-600 shrink-0" />
                      <h4 className="font-bold text-gray-900 text-base">AAT</h4>
                    </div>
                    <p className="text-sm font-semibold text-amber-800 mb-1">
                      Association of Accounting Technicians
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Respected practical qualification focusing on accurate day-to-day bookkeeping, payroll, VAT and core accounting fundamentals.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Business Accountants or Accountants for Individuals? */}
              <section id="business-vs-individual" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Business Accountants or Accountants for Individuals?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Business owners usually need help with year end accounts,{" "}
                  <Link
                    to="/services/vat-and-bookkeeping-accounting-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    VAT
                  </Link>
                  ,{" "}
                  <Link
                    to="/services/payroll-and-hr-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll
                  </Link>{" "}
                  and corporation tax, while individuals mostly need help with Self Assessment, capital gains and planning. Many firms cover both, but their strengths differ.
                </p>

                <div className="not-prose space-y-4 my-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-start gap-4">
                    <Building2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Limited companies and growing businesses
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed m-0">
                        Suit firms such as <strong>PKF Francis Clark</strong>, <strong>Moore (South)</strong> and <strong>Hayhursts</strong> that provide statutory audit, corporate finance, larger-scale payroll, or complete outsourced finance functions.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-start gap-4">
                    <Users2 className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Directors and owner managers
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed m-0">
                        Often want a mix of business and personal planning, as offered by <strong>Carpenter Box</strong> and <strong>Fiander Tovell</strong>, where business growth and personal wealth protection are handled together.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 flex items-start gap-4">
                    <Briefcase className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        Sole traders, landlords and contractors
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed m-0">
                        Usually need simpler compliance with predictable fees, where a fixed fee firm such as <strong>Henleaze Tax Consultancy</strong> fits well with transparent packages and dedicated remote support.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQs */}
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

              {/* Section 8: Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  When comparing accounting firms in Southampton, the right choice depends on your size, your sector and whether you need business advice, personal advice or both. Larger names such as PKF Francis Clark and Moore (South) sit alongside independent practices like Hayhursts and Fiander Tovell. Larger firms also feature in our{" "}
                  <Link
                    to="/top-10-accounting-firms-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    top 10 accounting firms in the UK
                  </Link>{" "}
                  comparison.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whatever you choose, check qualifications, ask for fees in writing and be clear about what you need. If you are a contractor, sole trader, landlord or small limited company and want clear advice at a fixed fee, take a look at Henleaze Tax Consultancy{" "}
                  <Link
                    to="/services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    accounting services page.
                  </Link>
                </p>

                {/* Final Banner */}
                <div className="not-prose bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 my-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Ready to discuss your accounting &amp; tax needs?
                    </h3>
                    <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                      Explore our transparent, fixed-fee packages with no hidden extras, delivered by seasoned specialists who care about your bottom line.
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
                      className="border-gray-600 text-white hover:bg-gray-800 font-semibold px-5 py-3 rounded-lg"
                    >
                      <Link to="/services">View Services</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        <NearbyLocationsSection currentCity="Southampton" />
      </Layout>
    </>
  );
};

export default AccountingFirmsInSouthampton;
