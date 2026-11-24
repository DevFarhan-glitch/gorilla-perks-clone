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
  Globe,
  Home,
  FileCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "how-to-choose", title: "How to Choose an Accountancy Firm in Leicester" },
  { id: "10-firms-leicester", title: "10 Accountancy Firms in Leicester" },
  { id: "mha", title: "1. MHA" },
  { id: "rowleys", title: "2. Rowleys" },
  { id: "newby-castleman", title: "3. Newby Castleman" },
  { id: "haines-watts", title: "4. Haines Watts" },
  { id: "duncan-toplis", title: "5. Duncan & Toplis" },
  { id: "celerica", title: "6. Celerica" },
  { id: "bgs-accounting", title: "7. BGS Accounting" },
  { id: "cheyettes", title: "8. Cheyettes" },
  { id: "burleys", title: "9. Burleys Leicester" },
  { id: "sharman-fielding", title: "10. Sharman Fielding" },
  { id: "comparing-firms", title: "Comparing Accountancy Firms in Leicester" },
  { id: "which-type", title: "Which Type of Accountant Do You Need?" },
  { id: "cost-in-leicester", title: "How Much Does an Accountant Cost in Leicester?" },
  { id: "remote-option", title: "A Remote Accounting Option for Leicester Businesses" },
  { id: "finding-support", title: "Finding the Right Accounting Support" },
];

const comparisonData = [
  {
    firm: "MHA",
    mainAreas: "Audit, accounting, tax and advisory",
    focus: "Businesses and organisations",
    tag: "National Advisory Practice",
  },
  {
    firm: "Rowleys",
    mainAreas: "Accountancy and business support",
    focus: "Businesses and individuals",
    tag: "Established Local Practice",
  },
  {
    firm: "Newby Castleman",
    mainAreas: "Tax, audit, payroll, VAT and bookkeeping",
    focus: "Businesses and individuals",
    tag: "Independent Regional Firm",
  },
  {
    firm: "Haines Watts",
    mainAreas: "Accounting, audit and business advice",
    focus: "Owner-managed businesses",
    tag: "UK Advisory Network",
  },
  {
    firm: "Duncan & Toplis",
    mainAreas: "Accounting, tax, audit and payroll",
    focus: "Businesses and individuals",
    tag: "East Midlands Group",
  },
  {
    firm: "Celerica",
    mainAreas: "Accounts, audit, tax and forecasting",
    focus: "Businesses",
    tag: "Chartered Certified Practice",
  },
  {
    firm: "BGS Accounting",
    mainAreas: "Management accounting and financial planning",
    focus: "SMEs and start-ups",
    tag: "Virtual Finance & KPIs",
  },
  {
    firm: "Cheyettes",
    mainAreas: "Accounts, tax, VAT and payroll",
    focus: "Businesses and individuals",
    tag: "Family-Run Since 1952",
  },
  {
    firm: "Burleys Leicester",
    mainAreas: "Bookkeeping, tax and business planning",
    focus: "Owner-managed businesses",
    tag: "Owner-Managed Specialist",
  },
  {
    firm: "Sharman Fielding",
    mainAreas: "Accounting, tax and payroll",
    focus: "Businesses and individuals",
    tag: "Personalised Support",
  },
  {
    firm: "Henleaze Tax Consultancy",
    mainAreas: "Bookkeeping, payroll, VAT, statutory accounts & tax planning",
    focus: "Contractors, landlords, sole traders & SMEs",
    tag: "Fixed Fees & Remote Specialists",
  },
];

const faqsData = [
  {
    question: "How much does an accountant cost in Leicester?",
    answer:
      "Accountancy fees depend on the amount of work involved, the structure of your business and the services you require. A straightforward Self Assessment return will generally involve less work than managing a limited company's bookkeeping, payroll, VAT and annual accounts. Some accountants offer fixed monthly packages, while others charge hourly rates.",
  },
  {
    question: "Do I need an accountant with a physical office in Leicester?",
    answer:
      "No. Remote accounting services can provide access to regular financial support through online meetings, email and cloud accounting software like Xero or FreeAgent. Henleaze Tax Consultancy supports Leicester clients remotely from Bristol on agreed fixed fees.",
  },
  {
    question: "What should I check before choosing an accountant in Leicester?",
    answer:
      "Check qualifications and professional body membership (such as ICAEW or ACCA), relevant experience in your sector, their service range (bookkeeping, VAT, payroll, accounts), communication responsiveness, and whether their pricing is fixed upfront.",
  },
  {
    question: "Can an accountant help my business switch accounting software?",
    answer:
      "Yes. Most modern accounting firms help set up, migrate and connect cloud accounting platforms like Xero, QuickBooks or FreeAgent, connecting automatic bank feeds and receipt capture apps.",
  },
];

const Top10AccountancyFirmsInLeicester = () => {
  const [activeSection, setActiveSection] = useState("how-to-choose");
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
    headline: "Accountancy Firms in Leicester: 10 Options Compared",
    description:
      "Compare 10 accountancy firms in Leicester, explore their services and find suitable accounting support for your business or personal tax needs.",
    image:
      "https://henleazetaxconsultancy.com/Accountancy%20Firms%20in%20Leicester%2010%20Options.webp",
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
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/top-10-accountancy-firms-in-leicester",
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
        name: "Accountancy Firms in Leicester: 10 Options Compared",
        item: "https://henleazetaxconsultancy.com/top-10-accountancy-firms-in-leicester",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accountancy Firms in Leicester: 10 Options Compared</title>
        <meta
          name="description"
          content="Compare 10 accountancy firms in Leicester, explore their services and find suitable accounting support for your business or personal tax needs."
        />
        <meta
          name="keywords"
          content="accountancy firms in leicester, accountants in leicester, leicester accountants, chartered accountants leicester, accounting services leicester"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/top-10-accountancy-firms-in-leicester"
        />
        <meta
          property="og:title"
          content="Accountancy Firms in Leicester: 10 Options Compared"
        />
        <meta
          property="og:description"
          content="Compare 10 accountancy firms in Leicester, explore their services and find suitable accounting support for your business or personal tax needs."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/top-10-accountancy-firms-in-leicester"
        />
        <meta
          property="og:image"
          content="https://henleazetaxconsultancy.com/Accountancy%20Firms%20in%20Leicester%2010%20Options.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountancy Firms in Leicester: 10 Options Compared"
        />
        <meta
          name="twitter:description"
          content="Compare 10 accountancy firms in Leicester, explore their services and find suitable accounting support for your business or personal tax needs."
        />
        <meta
          name="twitter:image"
          content="https://henleazetaxconsultancy.com/Accountancy%20Firms%20in%20Leicester%2010%20Options.webp"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/Accountancy Firms in Leicester 10 Options.webp"
            alt="Accountancy Firms in Leicester: 10 Options Worth Comparing"
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
                Leicester Accountancy Guide
              </span>
            </div>

            {/* Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Accountancy Firms in Leicester: 10 Options Worth Comparing
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
                10 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Finding an accountant is not just about getting your annual accounts completed or submitting a tax return on time. The right professional can help you understand your finances, manage tax responsibilities and make better decisions as your business develops.
              </p>
              <p>
                Leicester has several accountancy practices, from established regional firms to smaller specialists working closely with local businesses. However, their services, areas of expertise and approach to client support can differ considerably.
              </p>
              <p>
                To make your search easier, this guide looks at 10{" "}
                <Link
                  to="/accountants-in-leicester"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  accountancy firms with physical offices in Leicester.
                </Link>{" "}
                It compares their services, locations and general areas of focus, helping you identify which firms are worth approaching for your accounting requirements.
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
              {/* Section 1: How to Choose an Accountancy Firm in Leicester */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How to Choose an Accountancy Firm in Leicester
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before contacting an accountant, think about the support you actually need. A self-employed professional with straightforward finances will have different requirements from a limited company managing employees, VAT and regular financial reporting.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  Here are five things worth checking:
                </p>

                <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-3.5 my-6">
                  {[
                    <span>
                      <strong>Qualifications and regulation:</strong> Check the accountant's professional membership and whether the firm is authorised to provide the services you need.
                    </span>,
                    <span>
                      <strong>Relevant experience:</strong> Look for experience with businesses or individuals in a similar position to yours.
                    </span>,
                    <span>
                      <strong>Service range:</strong> Consider whether you need bookkeeping, payroll, VAT, tax returns, annual accounts or wider business advice.
                    </span>,
                    <span>
                      <strong>Communication:</strong> An accountant should explain financial matters clearly and be available when important decisions need to be made.
                    </span>,
                    <span>
                      <strong>Fees:</strong> Ask what the quoted price includes and whether additional work is charged separately.
                    </span>,
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Think about how you prefer to work with an accountant, too. Some people value regular face-to-face meetings, while others are perfectly comfortable managing their finances through email, online meetings and cloud accounting software.
                </p>

                <div className="not-prose bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed m-0">
                    <strong>Tip:</strong> Always request an itemised proposal outlining whether bookkeeping, VAT submissions, payroll cycles, and tax filing software licences are bundled into a single predictable fee.
                  </p>
                </div>
              </section>

              {/* Section 2: 10 Accountancy Firms in Leicester */}
              <section id="10-firms-leicester" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  10 Accountancy Firms in Leicester
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The following firms have identifiable Leicester office addresses. They offer different combinations of accounting, tax and business support, so the most suitable option will depend on your circumstances.
                </p>

                {/* Secondary Image: 10 Accountancy Firms in Leicester.webp */}
                <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
                  <img
                    src="/10 Accountancy Firms in Leicester.webp"
                    alt="10 Accountancy Firms in Leicester"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                  <div className="p-3 bg-gray-100 text-center text-xs sm:text-sm text-gray-600 font-medium">
                    10 accountancy practices operating with offices across Leicester and Leicestershire.
                  </div>
                </div>
              </section>

              {/* Firm 1: MHA */}
              <section id="mha" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      1. MHA
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      National Advisory Practice
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>11 Merus Court, Meridian Business Park, Leicester, LE19 1RJ</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://mha.co.uk" target="_blank" rel="noopener noreferrer">
                        mha.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    MHA is an established accountancy and advisory practice with offices across the UK, including Leicester. Its wider professional services make it an option for organisations that need more than basic accounts preparation.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include audit and assurance, accounting, corporate and personal tax, payroll and business advisory support. Businesses looking for assistance with financial reporting, compliance and more complex commercial matters may find its broader service offering relevant.
                  </p>
                </div>
              </section>

              {/* Firm 2: Rowleys */}
              <section id="rowleys" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      2. Rowleys
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                      Established Local Practice
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Charnwood House, Harcourt Way, Meridian Business Park, Leicester, LE19 1WP</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://rowleys.uk" target="_blank" rel="noopener noreferrer">
                        rowleys.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Rowleys is an accountancy practice based in Leicester, providing financial and professional support to businesses and individuals. Its local presence makes it worth considering for organisations looking for an established accounting relationship.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    When comparing Rowleys with other practices, ask about its current services for annual accounts, taxation, bookkeeping and business advice, particularly if you need ongoing support rather than help with a single filing.
                  </p>
                </div>
              </section>

              {/* Firm 3: Newby Castleman */}
              <section id="newby-castleman" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      3. Newby Castleman
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      Independent Regional Firm
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>West Walk Building, 110 Regent Road, Leicester, LE1 7LT</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://newbycastleman.co.uk" target="_blank" rel="noopener noreferrer">
                        newbycastleman.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Newby Castleman is an independent accountancy and business advisory practice serving clients in Leicester and beyond. It works with a varied client base, including sole traders, partnerships, limited companies, landlords, contractors and freelancers.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include audit, accounting, corporate and personal tax, payroll, bookkeeping, VAT and cloud accounting. The firm also provides business advice and support for trusts and estates. Its range of services makes it particularly relevant to businesses and individuals who want access to different areas of accounting and taxation through one practice.
                  </p>
                </div>
              </section>

              {/* Firm 4: Haines Watts */}
              <section id="haines-watts" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      4. Haines Watts
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full">
                      UK Advisory Network
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>20 Allandale Road, Leicester, LE2 2DA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://hwca.com" target="_blank" rel="noopener noreferrer">
                        hwca.com
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Haines Watts is a UK accountancy and business advisory network with a Leicester office. It works with owner-managed businesses and organisations that need support with financial management and business planning.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include accounting, audit, tax planning, business advisory and corporate finance. Depending on the requirements, clients can also explore support with wider business matters. For established businesses and growing companies, it may be worth discussing how the firm can support financial decisions alongside routine accounting responsibilities.
                  </p>
                </div>
              </section>

              {/* Firm 5: Duncan & Toplis */}
              <section id="duncan-toplis" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      5. Duncan &amp; Toplis
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full">
                      East Midlands Group
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Park House, 37 Clarence Street, Leicester, LE1 3RW</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://duncantoplis.co.uk" target="_blank" rel="noopener noreferrer">
                        duncantoplis.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Duncan &amp; Toplis has a Leicester office following its acquisition of Torr Waterfield's Leicester practice in 2025. The firm combines its wider East Midlands presence with local accounting and advisory support.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services cover accounting, bookkeeping, management accounts, audit, tax planning and compliance. It also provides payroll, outsourcing and wider business advisory services. Businesses that need support beyond annual accounts may find its combination of financial and professional services useful.
                  </p>
                </div>
              </section>

              {/* Firm 6: Celerica */}
              <section id="celerica" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      6. Celerica
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                      Chartered Certified Practice
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>First Floor, The Old Chapel, 9 Kempson Road, Leicester, LE2 8AN</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://celerica.co.uk" target="_blank" rel="noopener noreferrer">
                        celerica.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Celerica is a Leicester-based firm of Chartered Certified Accountants and registered auditors. Established in 2006, it works with businesses across different sectors and sizes.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its accounting services include annual financial statements, management accounts, auditing, company formation, company secretarial support and cash flow forecasting. It also provides taxation services covering personal and corporate tax, VAT, PAYE and Capital Gains Tax. The firm is worth considering if you want accounting support combined with financial planning and business guidance.
                  </p>
                </div>
              </section>

              {/* Firm 7: BGS Accounting */}
              <section id="bgs-accounting" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      7. BGS Accounting
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full">
                      Virtual Finance &amp; KPIs
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>The Dock, 75 Exploration Drive, Leicester, LE4 5NU</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://bgsaccounting.co.uk" target="_blank" rel="noopener noreferrer">
                        bgsaccounting.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    BGS Accounting is a Leicester-based firm of Chartered Certified Accountants with a particular focus on supporting small and medium-sized businesses, entrepreneurs and start-ups.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include management accounting, tax accounting, budgeting, forecasting, financial modelling, KPI reporting and virtual finance department support. It also helps businesses with accounting compliance and financial performance reporting. For business owners who want to understand their numbers throughout the year, rather than only at year-end, its management accounting and business partnering services are worth exploring.
                  </p>
                </div>
              </section>

              {/* Firm 8: Cheyettes */}
              <section id="cheyettes" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      8. Cheyettes
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-violet-50 text-violet-700 border border-violet-200 rounded-full">
                      Family-Run Since 1952
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>167 London Road, Leicester, LE2 1EG</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://cheyettes.co.uk" target="_blank" rel="noopener noreferrer">
                        cheyettes.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Cheyettes is an established family-run accountancy practice with a history dating back to 1952. Its Leicester office provides accounting and tax support to businesses and private individuals.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include accounts preparation, bookkeeping, VAT returns, tax planning, payroll and PAYE health checks. The firm also provides advice on accounting matters and tax responsibilities. Its long-standing presence in Leicester may appeal to individuals and businesses looking for an established local practice with experience across different accounting requirements.
                  </p>
                </div>
              </section>

              {/* Firm 9: Burleys Leicester */}
              <section id="burleys" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      9. Burleys Leicester
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full">
                      Owner-Managed Specialist
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Unit 9, St Matthews Business Centre, Gower Street, Leicester, LE1 3LJ</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://burleysleicester.com" target="_blank" rel="noopener noreferrer">
                        burleysleicester.com
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Burleys Leicester is a firm of Chartered Certified Accountants specialising in services for owner-managed businesses, including sole traders, partnerships and limited companies.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services cover accounts preparation, taxation, bookkeeping, VAT returns, business start-up advice and business planning. It also works with clients across sectors such as construction, healthcare, manufacturing, retail and hospitality. For smaller businesses that value practical accounting support and advice tailored to their operations, Burleys is another firm worth comparing.
                  </p>
                </div>
              </section>

              {/* Firm 10: Sharman Fielding */}
              <section id="sharman-fielding" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      10. Sharman Fielding
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full">
                      Personalised Support
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Sharman Fielding House, The Oval, 57 New Walk, Leicester, LE1 7EA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://sharmanfielding.com" target="_blank" rel="noopener noreferrer">
                        sharmanfielding.com
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Sharman Fielding provides accounting, tax and business support to individuals and organisations from its Leicester office. Its team includes professionals with accountancy and taxation qualifications.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include business accounting, tax planning and payroll support. The firm also provides financial guidance to individuals and businesses with different requirements. Its focus on personalised support may appeal to clients who prefer a closer working relationship with their accountant.
                  </p>
                </div>
              </section>

              {/* Section 4: Comparing Accountancy Firms in Leicester */}
              <section id="comparing-firms" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Comparing Accountancy Firms in Leicester
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The firms above differ in their size, service range and areas of focus. This quick comparison can help you decide which practices to contact first.
                </p>

                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Firm</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Main service areas</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">General client focus</th>
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
                          <td className="py-3 px-4 text-gray-700">{row.mainAreas}</td>
                          <td className="py-3 px-4 text-gray-600">{row.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base italic">
                  Always confirm the precise services available and request a tailored quote before making your choice.
                </p>
              </section>

              {/* Section 5: Which Type of Accountant Do You Need? */}
              <section id="which-type" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Which Type of Accountant Do You Need?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The right accountant should understand the financial responsibilities associated with your work or business structure.
                </p>

                <div className="not-prose space-y-4 my-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-amber-600" />
                      Small businesses
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Look for help with bookkeeping, VAT, payroll, annual accounts and business reporting. Explore our{" "}
                      <Link
                        to="/services/small-business-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        small business accounting services
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-amber-600" />
                      Contractors and freelancers
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Consider support with limited company accounts, IR35, tax returns and tax-efficient planning. See our{" "}
                      <Link
                        to="/services/contractor-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        contractor accounting services
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Home className="w-5 h-5 text-amber-600" />
                      Landlords
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Property income, allowable expenses and Capital Gains Tax can make specialist accounting support useful. Explore our{" "}
                      <Link
                        to="/services/landlord-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        landlord accounting services
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-amber-600" />
                      Limited companies
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Alongside annual accounts and Corporation Tax, companies may need help maintaining statutory records and meeting Companies House requirements. Our{" "}
                      <Link
                        to="/services/company-secretarial-services"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        company secretarial services
                      </Link>{" "}
                      explain this support.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base italic">
                  If you need several services, compare complete accounting packages rather than choosing a provider based on one advertised service.
                </p>
              </section>

              {/* Section 6: How Much Does an Accountant Cost in Leicester? */}
              <section id="cost-in-leicester" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How Much Does an Accountant Cost in Leicester?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Accountancy fees depend on the amount of work involved, the structure of your business and the services you require. A straightforward Self Assessment return will generally involve less work than managing a limited company's bookkeeping, payroll, VAT and annual accounts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some accountants offer fixed monthly packages, while others charge hourly rates or quote separately for individual services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Before agreeing to a fee, ask whether bookkeeping, tax returns, year-end accounts and additional advice are included. A clear breakdown makes it easier to compare quotes and avoid unexpected charges.
                </p>
              </section>

              {/* Section 7: A Remote Accounting Option for Leicester Businesses */}
              <section id="remote-option" className="scroll-mt-28">
                <div className="not-prose bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 rounded-xl border-2 border-amber-300 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      A Remote Accounting Option for Leicester Businesses
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                      Fixed-Fee Remote Specialist
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    You do not necessarily need to choose an accountant with an office in Leicester. Remote accounting services can provide access to regular financial support through online meetings, email and cloud accounting software.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <Link to="/" className="text-amber-700 hover:underline font-semibold">
                      Henleaze Tax Consultancy
                    </Link>{" "}
                    is a Bristol-based accountancy firm supporting contractors, freelancers, landlords and small businesses across the UK. Its services include bookkeeping, payroll, VAT returns, Corporation Tax, Self Assessment and tax planning, with transparent fixed-fee pricing.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Businesses looking for support outside their immediate area can explore{" "}
                    <Link
                      to="/services"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      Henleaze Tax Consultancy's accounting services
                    </Link>{" "}
                    or visit its{" "}
                    <Link
                      to="/accountants-in-leicester"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      accountants in Leicester
                    </Link>{" "}
                    page.
                  </p>

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

              {/* Section 8: Finding the Right Accounting Support */}
              <section id="finding-support" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Finding the Right Accounting Support
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing an accountant is easier when you know what support your finances actually require. Compare the services offered, ask about relevant experience and make sure the fee structure is clear before committing.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether you are self-employed, managing rental properties or running a limited company, the right accounting support can help you stay organised and meet your financial responsibilities. Take time to compare your options and choose a firm that can support your needs as they change.
                </p>

                {/* Final Banner */}
                <div className="not-prose bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 my-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Ready to speak with a tax and accounting specialist?
                    </h3>
                    <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                      Discover our transparent, fixed-fee accountancy solutions designed for contractors, freelancers, landlords and growing companies across Leicester and the UK.
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

              {/* FAQs Section */}
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
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Top10AccountancyFirmsInLeicester;
