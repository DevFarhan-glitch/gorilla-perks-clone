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
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "how-to-choose", title: "How to Choose an Accountancy Firm in Cardiff" },
  { id: "10-firms-cardiff", title: "10 Accountancy Firms in Cardiff" },
  { id: "xeinadin", title: "1. Xeinadin" },
  { id: "streets", title: "2. Streets Accountants" },
  { id: "azets", title: "3. Azets" },
  { id: "aab", title: "4. AAB" },
  { id: "menzies", title: "5. Menzies LLP" },
  { id: "carston-etl", title: "6. Carston ETL" },
  { id: "linghams", title: "7. Linghams Chartered Accountants" },
  { id: "m-raza-co", title: "8. M Raza & Co" },
  { id: "chp-accountants", title: "9. CHP Accountants" },
  { id: "hodge-bakshi", title: "10. Hodge Bakshi" },
  { id: "henleaze", title: "11. Henleaze Tax Consultancy" },
  { id: "comparing-firms", title: "Comparing Accountancy Firms in Cardiff" },
  { id: "which-type", title: "Which Type of Accountant Do You Need?" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "looking-for-support", title: "Looking for Accounting Support in Cardiff?" },
];

const comparisonData = [
  {
    firm: "Xeinadin",
    mainAreas: "Audit, accounts, payroll, VAT, tax",
    focus: "SMEs and organisations",
    tag: "National Advisory Network",
  },
  {
    firm: "Streets Accountants",
    mainAreas: "Accounting, tax, bookkeeping, advisory",
    focus: "Businesses",
    tag: "Mid-Market Practice",
  },
  {
    firm: "Azets",
    mainAreas: "Audit, tax, payroll, corporate finance",
    focus: "Businesses and individuals",
    tag: "National SME Firm",
  },
  {
    firm: "AAB",
    mainAreas: "Audit, tax, payroll, advisory",
    focus: "Businesses and organisations",
    tag: "Professional Services",
  },
  {
    firm: "Menzies LLP",
    mainAreas: "Audit, accounts, tax, advisory",
    focus: "Businesses and individuals",
    tag: "Regional & Corporate",
  },
  {
    firm: "Carston ETL",
    mainAreas: "Accounts, audit, tax, payroll",
    focus: "Businesses and professionals",
    tag: "Healthcare & Commercial",
  },
  {
    firm: "Linghams Chartered Accountants",
    mainAreas: "Accountancy and taxation",
    focus: "Businesses and individuals",
    tag: "Chartered Practice",
  },
  {
    firm: "M Raza & Co",
    mainAreas: "Accounts, VAT, payroll, tax",
    focus: "Individuals and SMEs",
    tag: "Family-Run ACCA Firm",
  },
  {
    firm: "CHP Accountants",
    mainAreas: "Accounts, audit, VAT, payroll, tax",
    focus: "Businesses and individuals",
    tag: "Independent Full-Service",
  },
  {
    firm: "Hodge Bakshi",
    mainAreas: "Accounting, audit, tax, advisory",
    focus: "Businesses",
    tag: "Audit & Advisory",
  },
  {
    firm: "Henleaze Tax Consultancy",
    mainAreas: "Accounts, tax, bookkeeping, payroll, VAT",
    focus: "Contractors, landlords, SMEs & individuals",
    tag: "Fixed Fees & Remote Specialists",
  },
];

const faqsData = [
  {
    question: "What are the best accountancy firms in Cardiff?",
    answer:
      "The right accountancy firm depends on your requirements, budget and preferred level of support. Xeinadin, Azets, AAB, Menzies and independent practices such as M Raza & Co and CHP Accountants are among the firms worth comparing.",
  },
  {
    question: "How much does an accountant cost in Cardiff?",
    answer:
      "Accountancy costs vary according to the services required, business structure and complexity of financial records. Request quotes from several firms to compare their fees and included services.",
  },
  {
    question: "Do accountancy firms in Cardiff work with small businesses?",
    answer:
      "Yes, many Cardiff accountancy firms support small businesses with bookkeeping, VAT returns, payroll, annual accounts and tax compliance. Some also offer business advisory and financial planning.",
  },
  {
    question: "Can I use an accountant outside Cardiff?",
    answer:
      "Yes. You do not have to use an accountant with a physical office in your city. Many accountancy practices provide remote support through cloud accounting software, email and online meetings.",
  },
  {
    question: "What services should an accountancy firm provide?",
    answer:
      "Common services include accounts preparation, bookkeeping, tax returns, VAT, payroll and business advice. The services you need depend on whether you are self-employed, a contractor, a landlord or a limited company director.",
  },
  {
    question: "How do I compare accountancy firms in Cardiff?",
    answer:
      "Compare their qualifications, relevant experience, service range, communication and pricing. It is also useful to arrange an initial conversation to understand how they will support your financial requirements.",
  },
];

const AccountancyFirmsInCardiff = () => {
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
    headline: "Accountancy Firms in Cardiff: 10 Firms Compared",
    description:
      "Compare 10 accountancy firms in Cardiff, explore their services and find suitable accounting support for your business or personal tax needs.",
    image: "https://henleazetaxconsultancy.com/accountancy-firms-in-cardiff - Copy.png",
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
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/accountancy-firms-in-cardiff",
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
        name: "Accountancy Firms in Cardiff: 10 Firms Compared",
        item: "https://henleazetaxconsultancy.com/accountancy-firms-in-cardiff",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accountancy Firms in Cardiff: 10 Firms Compared</title>
        <meta
          name="description"
          content="Compare 10 accountancy firms in Cardiff, explore their services and find suitable accounting support for your business or personal tax needs."
        />
        <meta
          name="keywords"
          content="accountancy firms in cardiff, accountants in cardiff, cardiff accountants, chartered accountants cardiff, accounting services cardiff"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountancy-firms-in-cardiff"
        />
        <meta
          property="og:title"
          content="Accountancy Firms in Cardiff: 10 Firms Compared"
        />
        <meta
          property="og:description"
          content="Compare 10 accountancy firms in Cardiff, explore their services and find suitable accounting support for your business or personal tax needs."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountancy-firms-in-cardiff"
        />
        <meta
          property="og:image"
          content="https://henleazetaxconsultancy.com/accountancy-firms-in-cardiff - Copy.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountancy Firms in Cardiff: 10 Firms Compared"
        />
        <meta
          name="twitter:description"
          content="Compare 10 accountancy firms in Cardiff, explore their services and find suitable accounting support for your business or personal tax needs."
        />
        <meta
          name="twitter:image"
          content="https://henleazetaxconsultancy.com/accountancy-firms-in-cardiff - Copy.png"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/accountancy-firms-in-cardiff - Copy.png"
            alt="Accountancy Firms in Cardiff: 10 Firms and Their Services"
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
                Cardiff Accountancy Guide
              </span>
            </div>

            {/* Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Accountancy Firms in Cardiff: 10 Firms and Their Services
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
                Finding the right accountant can make managing business finances, tax obligations and financial planning considerably easier. However, with several{" "}
                <Link
                  to="/accountants-in-cardiff"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  accountancy firms operating across Cardiff
                </Link>
                , choosing one that understands your requirements can take time.
              </p>
              <p>
                Whether you run a limited company, work as a contractor, manage rental properties or need help with personal tax returns, the right firm should offer services that match your financial responsibilities.
              </p>
              <p>
                This guide compares 10 accountancy firms in Cardiff, looking at their locations, main services and the types of clients they support. It also explains what to consider when choosing an accountant and how to compare the services available.
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
              {/* Section 1: How to Choose an Accountancy Firm in Cardiff */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How to Choose an Accountancy Firm in Cardiff
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing an accountancy firm involves more than comparing fees. You should consider its professional qualifications, experience, range of services and ability to provide ongoing support as your financial requirements change.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  Before making a decision, consider the following:
                </p>

                <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-3.5 my-6">
                  {[
                    <span>
                      <strong>Services offered:</strong> Check whether the firm handles{" "}
                      <Link
                        to="/services/vat-and-bookkeeping-accounting-services"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        bookkeeping
                      </Link>
                      ,{" "}
                      <Link
                        to="/services/vat-and-bookkeeping-accounting-services"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        VAT returns
                      </Link>
                      ,{" "}
                      <Link
                        to="/services/payroll-and-hr-services"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        payroll
                      </Link>
                      , annual accounts and{" "}
                      <Link
                        to="/services/tax-planning"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        tax planning
                      </Link>
                      .
                    </span>,
                    <span>
                      <strong>Relevant experience:</strong> Look for experience working with businesses or individuals in circumstances similar to yours.
                    </span>,
                    <span>
                      <strong>Professional qualifications:</strong> Consider firms with recognised professional qualifications and appropriate regulatory oversight.
                    </span>,
                    <span>
                      <strong>Communication:</strong> Choose an accountant who explains financial matters clearly and responds to questions.
                    </span>,
                    <span>
                      <strong>Pricing:</strong> Understand what is included in the fee and whether additional services cost extra.
                    </span>,
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  You should also consider whether you prefer face-to-face meetings or are comfortable working with an accountant through online meetings and cloud accounting software.
                </p>

                <div className="not-prose bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed m-0">
                    <strong>Tip:</strong> Always ask for a written, itemised engagement letter detailing your exact responsibilities and what filing services are covered to avoid end-of-year billing surprises.
                  </p>
                </div>
              </section>

              {/* Section 2: 10 Accountancy Firms in Cardiff */}
              <section id="10-firms-cardiff" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  10 Accountancy Firms in Cardiff
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cardiff has a varied accountancy market, including national accountancy networks, established professional practices and independent firms. Here are 10 firms with physical offices in the city.
                </p>

                {/* Secondary Image: top-10-accountancy-firms-in-cardiff - Copy.png */}
                <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
                  <img
                    src="/top-10-accountancy-firms-in-cardiff - Copy.png"
                    alt="10 Accountancy Firms in Cardiff"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                  <div className="p-3 bg-gray-100 text-center text-xs sm:text-sm text-gray-600 font-medium">
                    10 accountancy firms operating with offices in Cardiff alongside specialized remote support.
                  </div>
                </div>
              </section>

              {/* Firm 1: Xeinadin */}
              <section id="xeinadin" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      1. Xeinadin
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      National Advisory Network
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Suite 2D, Building 1, Eastern Business Park, St Mellons, Cardiff, CF3 5EA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://xeinadin.com" target="_blank" rel="noopener noreferrer">
                        xeinadin.com
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Xeinadin is a UK accountancy and business advisory network with an established Cardiff office. Its services cover several areas of financial management, making it an option for businesses looking for accounting support alongside wider commercial advice.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its Cardiff practice offers accounts preparation, audit and assurance, bookkeeping, payroll, VAT services, tax planning and business advisory support. The firm also works with businesses across sectors including healthcare, manufacturing, property, hospitality and technology.
                  </p>
                </div>
              </section>

              {/* Firm 2: Streets Accountants */}
              <section id="streets" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      2. Streets Accountants
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                      Mid-Market Practice
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Brunel House, 2 Fitzalan Road, Cardiff, CF24 0EB</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://streets.uk" target="_blank" rel="noopener noreferrer">
                        streets.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Streets is an accountancy practice with a Cardiff office, providing financial and business support to organisations with different accounting requirements.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its wider service offering includes accounts preparation, audit, taxation, bookkeeping, payroll, VAT and business advisory services. Businesses looking for additional financial guidance can also explore its specialist support for areas such as corporate finance and business development.
                  </p>
                </div>
              </section>

              {/* Firm 3: Azets */}
              <section id="azets" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      3. Azets
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      National SME Firm
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Ty Derw, Lime Tree Court, Cardiff Gate Business Park, Cardiff, CF23 8AB</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://azets.com" target="_blank" rel="noopener noreferrer">
                        azets.com
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Azets is an established accountancy and business advisory firm serving businesses and individuals across the UK. Its Cardiff office provides access to a broad range of professional accounting and advisory services.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include audit, accounts preparation, tax compliance, payroll, VAT, business advisory and corporate finance. The firm may suit growing businesses that need support with both routine financial reporting and more complex business decisions.
                  </p>
                </div>
              </section>

              {/* Firm 4: AAB */}
              <section id="aab" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      4. AAB
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full">
                      Professional Services
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>The Maltings, East Tyndall Street, Cardiff, CF24 5EA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://aab.uk" target="_blank" rel="noopener noreferrer">
                        aab.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    AAB is a professional services firm offering accountancy, taxation and business advisory support. Its Cardiff office serves organisations with different financial and operational requirements.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its service areas include audit and assurance, corporate tax, personal tax, payroll, VAT, corporate finance and business advisory. The firm is worth considering for businesses that need access to specialist financial support as they develop or expand.
                  </p>
                </div>
              </section>

              {/* Firm 5: Menzies LLP */}
              <section id="menzies" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      5. Menzies LLP
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full">
                      Regional &amp; Corporate
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>5th Floor, Hodge House, 114–116 St Mary Street, Cardiff, CF10 1DY</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://menzies.co.uk" target="_blank" rel="noopener noreferrer">
                        menzies.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Menzies LLP is an accountancy and business advisory practice with a Cardiff office. It provides professional services to businesses, organisations and individuals with different accounting and tax requirements.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its wider service offering includes audit, accounts preparation, corporate and personal tax, business advisory, corporate finance and payroll. Businesses requiring more than routine accounting compliance may find its broader advisory capabilities relevant.
                  </p>
                </div>
              </section>

              {/* Firm 6: Carston ETL */}
              <section id="carston-etl" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      6. Carston ETL
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                      Healthcare &amp; Commercial
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Tudor House, 16 Cathedral Road, Cardiff, CF11 9LJ</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://carston.co.uk" target="_blank" rel="noopener noreferrer">
                        carston.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Carston ETL provides accountancy, audit, taxation and business advisory services from its Cardiff office. The firm works with businesses and professional clients across different sectors.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include annual accounts, bookkeeping, VAT, payroll, tax planning and audit support. It also offers specialist accounting assistance to healthcare professionals and other businesses with sector-specific financial requirements.
                  </p>
                </div>
              </section>

              {/* Firm 7: Linghams Chartered Accountants */}
              <section id="linghams" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      7. Linghams Chartered Accountants
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full">
                      Chartered Practice
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Waterfront House, 7–8 Raleigh Walk, Cardiff, CF10 4LN</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://linghamscharteredaccountants.co.uk" target="_blank" rel="noopener noreferrer">
                        linghamscharteredaccountants.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Linghams Chartered Accountants is an independent accountancy practice based in Cardiff. It provides professional accounting support to businesses and individuals requiring help with financial compliance and tax responsibilities.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include accountancy, taxation and business support. Prospective clients should contact the firm directly to establish which services are available for their particular business structure and requirements.
                  </p>
                </div>
              </section>

              {/* Firm 8: M Raza & Co */}
              <section id="m-raza-co" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      8. M Raza &amp; Co
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-violet-50 text-violet-700 border border-violet-200 rounded-full">
                      Family-Run ACCA Firm
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>166 Whitchurch Road, Cardiff, CF14 3NA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://mraza.co.uk" target="_blank" rel="noopener noreferrer">
                        mraza.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    M Raza &amp; Co is a family-run firm of Chartered Certified Accountants based in Cardiff. It provides accounting and taxation support to individuals, sole traders and small to medium-sized businesses.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    Its services include accounts preparation, bookkeeping, VAT returns, payroll, tax returns and business advice. The practice may be particularly relevant to smaller businesses looking for accessible accounting support and assistance with regular financial responsibilities.
                  </p>
                </div>
              </section>

              {/* Firm 9: CHP Accountants */}
              <section id="chp-accountants" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      9. CHP Accountants
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-full">
                      Independent Full-Service
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Clifton House, Four Elms Road, Cardiff, CF24 1LE</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://chpaccountants.co.uk" target="_blank" rel="noopener noreferrer">
                        chpaccountants.co.uk
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    CHP Accountants is an established independent accountancy practice in Cardiff, serving business owners and private individuals.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Its services cover accountancy, audit, business start-up support, bookkeeping, management accounts, payroll, personal tax, Self Assessment, Corporation Tax and VAT. It also provides company secretarial, probate and inheritance tax planning services.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    This range makes the firm worth considering for businesses and individuals looking for several accounting and tax services through one practice.
                  </p>
                </div>
              </section>

              {/* Firm 10: Hodge Bakshi */}
              <section id="hodge-bakshi" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      10. Hodge Bakshi
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full">
                      Audit &amp; Advisory
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Churchgate House, 3 Church Road, Whitchurch, Cardiff, CF14 2DX</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <a href="https://hodgebakshi.com" target="_blank" rel="noopener noreferrer">
                        hodgebakshi.com
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Hodge Bakshi is a Cardiff-based accountancy practice offering professional financial and business advisory services. Its services cover accounting, audit, taxation and support for businesses with different financial requirements.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed m-0">
                    The practice also provides payroll, corporate finance and business advisory services. Its professional experience and Cardiff presence make it another option for local businesses comparing accountancy firms.
                  </p>
                </div>
              </section>

              {/* Firm 11: Henleaze Tax Consultancy */}
              <section id="henleaze" className="scroll-mt-28">
                <div className="not-prose bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 rounded-xl border-2 border-amber-300 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      11. Henleaze Tax Consultancy
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                      Fixed-Fee Remote Specialist
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-white/80 p-3 rounded-lg border border-amber-200 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>CEED House, 97–107 Wilder Street, St Pauls, Bristol, BS2 8QU</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-700 hover:underline">
                      <Globe className="h-3.5 w-3.5" />
                      <Link to="/">henleazetaxconsultancy.com</Link>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <Link to="/" className="text-amber-700 hover:underline font-semibold">
                      Henleaze Tax Consultancy
                    </Link>{" "}
                    is a Bristol-based accountancy firm providing accounting and tax support to individuals, contractors, landlords and small businesses across the UK. Although it does not have a physical office in Cardiff, its remote services allow Cardiff-based clients to access professional accounting support without needing to visit an office.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Its services include Personal Tax and Self Assessment, Corporation Tax, bookkeeping, payroll, VAT returns, Capital Gains Tax and Inheritance Tax Planning. The firm also provides business tax advice and ongoing accounting support through remote communication.
                  </p>

                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Henleaze may suit Cardiff business owners and individuals who prefer fixed-fee accounting services, transparent pricing and flexible online support.
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

              {/* Section 4: Comparing Accountancy Firms in Cardiff */}
              <section id="comparing-firms" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Comparing Accountancy Firms in Cardiff
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The firms above offer different combinations of accounting, taxation and advisory services. The following table provides a quick overview to help narrow down your options.
                </p>

                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Firm</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Main service areas</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">General focus</th>
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
                  Service availability and specialist expertise can vary, so contact each firm to confirm its current offering and fees before making a decision.
                </p>
              </section>

              {/* Section 5: Which Type of Accountant Do You Need? */}
              <section id="which-type" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Which Type of Accountant Do You Need?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The most suitable accountant depends on your work, business structure and financial responsibilities.
                </p>

                <div className="not-prose space-y-4 my-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-amber-600" />
                      Small businesses
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Look for bookkeeping, VAT returns, annual accounts, payroll and business advisory support. Our{" "}
                      <Link
                        to="/services/small-business-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        small business accounting services
                      </Link>{" "}
                      explain the support available.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-amber-600" />
                      Contractors and freelancers
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Specialist support with limited company accounts, IR35, dividend planning and tax returns can be important. Explore our{" "}
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
                      <Users2 className="w-5 h-5 text-amber-600" />
                      Landlords
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Choose an accountant familiar with rental income, allowable expenses, property taxation and Capital Gains Tax. See our{" "}
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
                      <Award className="w-5 h-5 text-amber-600" />
                      Employers
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Payroll processing, PAYE, Real Time Information submissions and workplace pension responsibilities may require dedicated support.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" />
                      Limited companies
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                      Look for support with statutory accounts, Corporation Tax, bookkeeping and company compliance.{" "}
                      <Link
                        to="/services/company-secretarial-services"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        Company secretarial services
                      </Link>{" "}
                      can also help with Companies House filing responsibilities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: FAQs */}
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

              {/* Section 7: Looking for Accounting Support in Cardiff? */}
              <section id="looking-for-support" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Looking for Accounting Support in Cardiff?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing an accountant is an important decision, and comparing local firms can help you find support that suits your circumstances. Consider the services you need, the experience of each practice and the level of ongoing communication you expect.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are also considering an accountant outside Cardiff, Henleaze Tax Consultancy is a Bristol-based accountancy firm providing remote accounting and tax support to clients across the UK.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We support contractors, freelancers, landlords and small businesses with fixed-fee accounting, bookkeeping, payroll, VAT and tax planning services.
                </p>

                {/* Final Banner */}
                <div className="not-prose bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 my-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Ready to speak with a tax and accounting specialist?
                    </h3>
                    <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                      Discover our transparent, fixed-fee accountancy solutions designed for contractors, freelancers, landlords and growing companies across Cardiff, Wales and the UK.
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

export default AccountancyFirmsInCardiff;

