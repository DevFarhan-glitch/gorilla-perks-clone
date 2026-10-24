import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  Building2,
  FileCheck,
  CheckCircle2,
  BookOpen,
  Briefcase,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ClipboardList,
  Check,
  AlertCircle,
  Coins,
  Receipt,
  FileSpreadsheet,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "typical-cost", title: "How Much Does a Company Secretary Cost in the UK?" },
  { id: "what-affects-cost", title: "What Affects Company Secretarial Services Cost?" },
  { id: "extra-fees-to-check", title: "What Extra Company Secretary Fees Should You Check?" },
  { id: "handle-it-yourself", title: "Can You Handle Company Secretarial Work Yourself?" },
  { id: "in-house-vs-outsourced", title: "In-House vs Outsourced Company Secretary Cost" },
  { id: "is-it-worth-cost", title: "Is a Company Secretary Service Worth the Cost?" },
  { id: "how-to-choose", title: "How to Choose the Right Company Secretarial Service" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-thoughts", title: "Final Thoughts" },
];

const competitorPricingData = [
  {
    provider: "LTD Companies",
    price: "£129.95 + VAT",
    details: "Annual service with company changes and register maintenance",
  },
  {
    provider: "Formations Wise",
    price: "£149.99 + VAT",
    details: "Package includes a named secretary, account manager and up to 15 changes",
  },
  {
    provider: "Rocket Formations",
    price: "£149.99 + VAT",
    details: "Package includes company changes and a confirmation statement filing fee",
  },
  {
    provider: "Company Services UK",
    price: "£180",
    details: "Confirmation statement, statutory registers and specified company documents",
  },
  {
    provider: "Clearly Business Law",
    price: "£300 + VAT",
    details: "Secretarial support for up to five directors or shareholders",
  },
  {
    provider: "MBM Commercial",
    price: "£775 + VAT",
    details: "Company secretarial support bundled with a registered office service",
  },
];

const inHouseVsOutsourcedData = [
  {
    option: "Do it yourself",
    mainCost: "Your time and applicable filing fees",
    bestSuited: "Simple companies with limited changes",
  },
  {
    option: "Hire an employee",
    mainCost: "Salary and employment costs",
    bestSuited: "Businesses needing regular internal governance support",
  },
  {
    option: "Outsource the work",
    mainCost: "Annual service fee and any extras",
    bestSuited: "Small businesses wanting professional administrative support",
  },
];

const faqsData = [
  {
    question: "How much do company secretarial services cost in the UK?",
    answer:
      "Basic outsourced packages can start at around £130 a year, while more comprehensive services may cost £300 to £775 or more. Prices depend on the included services, company changes and additional fees.",
  },
  {
    question: "What is the cheapest company secretary service?",
    answer:
      "Managing the work yourself can avoid a professional service fee if your private company does not need an appointed secretary. You must still meet your legal obligations and pay applicable Companies House charges.",
  },
  {
    question: "How much does a confirmation statement cost?",
    answer:
      "Companies House charges £50 for online filing and £110 for paper filing from 1 February 2026. A provider may charge an additional service fee or include the filing in its annual package.",
  },
  {
    question: "Is a company secretary compulsory for a small business?",
    answer:
      "No, not generally for a private limited company. Section 270 of the Companies Act 2006 allows a private company to operate without a secretary. Public companies must appoint one.",
  },
  {
    question: "Can an accountant provide company secretarial services?",
    answer:
      "Yes. Accountants and specialist providers may offer company secretarial support alongside accounts, tax and other business services. Check which specific filings and records are included.",
  },
];

const CompanySecretaryCostUk = () => {
  const [activeSection, setActiveSection] = useState("typical-cost");
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
    headline: "How Much Do Company Secretarial Services Cost in the UK?",
    description:
      "Discover company secretary costs in the UK, compare annual service fees, understand extra charges and find the right option for your small business.",
    image:
      "https://henleazetaxconsultancy.com/How%20Much%20Do%20Company%20Secretarial%20Services%20Cost%20in%20the%20UK.webp",
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
    datePublished: "2026-10-21",
    dateModified: "2026-10-24",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/company-secretary-cost-uk",
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
        name: "Company Secretary Cost UK",
        item: "https://henleazetaxconsultancy.com/company-secretary-cost-uk",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>How Much Do Company Secretarial Services Cost in the UK?</title>
        <meta
          name="description"
          content="Discover company secretary costs in the UK, compare annual service fees, understand extra charges and find the right option for your small business."
        />
        <meta
          name="keywords"
          content="company secretary cost, company secretarial services cost UK, company secretarial fees, confirmation statement cost, outsourced company secretary"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/company-secretary-cost-uk"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/How Much Do Company Secretarial Services Cost in the UK.webp"
            alt="Company Secretary Cost UK: Fees, Packages and What to Expect"
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
                Company Secretarial Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Company Secretary Cost UK: Fees, Packages and What to Expect
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              How Much Do Company Secretarial Services Cost in the UK? A Complete Fee & Package Guide for Small Businesses
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 border-b border-gray-200 mb-8">
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

            {/* Quick Summary Callout */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <p className="text-gray-800 leading-relaxed font-medium">
                    The cost of a company secretary in the UK depends on the type of service you need. Basic outsourced packages for small companies can start at around £130 a year, while more comprehensive company secretarial services can cost £300 to £775 or more annually.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The price usually depends on what the provider includes, such as confirmation statement filing, statutory registers, company changes and a registered office address. Some services charge extra for these items, so comparing the headline fee alone can be misleading.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This guide explains typical company secretary costs, what different packages include and how small businesses can choose a suitable option without paying for services they do not need.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-600" />
                In this guide
              </p>
              <nav className="space-y-2">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-150 flex items-center justify-between ${
                      activeSection === section.id
                        ? "bg-amber-100 text-amber-900 font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <span>
                      <span className="text-gray-400 mr-2 text-xs font-mono">{idx + 1}.</span>
                      {section.title}
                    </span>
                    {activeSection === section.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* ── ARTICLE BODY ──────────────────────────────────────── */}
            <div className="space-y-12 text-gray-700 text-base leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>

              {/* Section 1 — How Much Does a Company Secretary Cost in the UK? */}
              <section id="typical-cost" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How Much Does a Company Secretary Cost in the UK?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Outsourced{" "}
                  <Link
                    to="/services/company-secretarial-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial services
                  </Link>{" "}
                  for small UK companies can cost approximately £130 to £300 a year for basic packages, with more extensive services costing several hundred pounds more. These are indicative prices based on published provider packages, not an official industry average.
                </p>
                <p className="mb-6">
                  The following examples illustrate the range of prices identified during competitor research. Confirm the latest prices and package terms with each provider before purchasing.
                </p>

                {/* Competitor Pricing Table */}
                <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Provider</th>
                        <th className="py-3.5 px-4 font-semibold">Published annual price</th>
                        <th className="py-3.5 px-4 font-semibold">Service details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {competitorPricingData.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                          <td className="py-3.5 px-4 font-medium text-gray-900 whitespace-nowrap">
                            {item.provider}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-amber-700 whitespace-nowrap">
                            {item.price}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {item.details}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mb-4">
                  These packages are not directly comparable. Their included services, filing allowances and treatment of Companies House fees differ.
                </p>
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 text-sm text-gray-800">
                  <p>
                    <strong>VAT and Pricing Considerations:</strong> For example, a £149.99 package excluding VAT costs £179.99 after VAT at 20%, before any additional charges. A package advertised at £180 may already be the final price if VAT is not applicable, so check the provider's invoice terms.
                  </p>
                </div>
              </section>

              {/* Section 2 — What Affects Company Secretarial Services Cost? */}
              <section id="what-affects-cost" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Affects Company Secretarial Services Cost?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                {/* Second Image */}
                <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 not-prose">
                  <img
                    src="/what-affects-company-secretarial-services-cost.webp"
                    alt="What Affects Company Secretarial Services Cost?"
                    className="w-full h-auto max-h-[460px] object-cover mx-auto"
                  />
                </div>

                <p className="mb-6">
                  The annual fee depends on how much administration the provider handles and how complex your company's records are.
                </p>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      Confirmation statement filing
                    </h3>
                    <p className="mb-3 text-gray-700">
                      Every UK limited company must file a confirmation statement at least once every 12 months, including dormant companies. The filing confirms whether the information held by Companies House is up to date.
                    </p>
                    <p className="mb-3 text-gray-700">
                      Since 1 February 2026, the Companies House fee is £50 for online filing or £110 for paper filing. This is an official filing charge, not the provider's professional fee.{" "}
                      <a
                        href="https://www.gov.uk/guidance/filing-your-companys-confirmation-statement"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        Companies House fee guidance
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      Some packages include the online filing fee in their annual price, while others charge it separately. Always establish which arrangement applies.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      Company changes and statutory records
                    </h3>
                    <p className="mb-3 text-gray-700">
                      Providers may maintain statutory registers and prepare documents relating to changes in directors, shareholders and shareholdings. Some packages include a set number of changes, while others cover specified routine changes without an additional charge.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      If your company expects frequent changes, check the allowance and the cost of work outside it. A low annual fee can become less attractive if every additional filing costs extra.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      Registered office address
                    </h3>
                    <p className="mb-3 text-gray-700">
                      Some providers bundle a registered office address with company secretarial services. Others offer it as a separate service.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      If you already have a suitable registered office, you may not need to pay for another address. If you need one, compare the combined price with the cost of purchasing the services separately.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      Company documents and specialist support
                    </h3>
                    <p className="mb-3 text-gray-700">
                      Routine minutes, notices and resolutions may be included in a package. Complex share transactions, bespoke legal documents and specialist corporate advice may require additional fees.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      The more support you need, the more important it is to obtain a written breakdown of what the annual price covers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 — What Extra Company Secretary Fees Should You Check? */}
              <section id="extra-fees-to-check" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Extra Company Secretary Fees Should You Check?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  The advertised annual fee may not represent the full cost of maintaining your company's records and meeting its filing obligations.
                </p>
                <p className="mb-6 font-medium text-gray-900">
                  Before choosing a provider, check these potential extras:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-amber-800" />
                    </div>
                    <div>
                      <strong className="text-gray-900 text-sm block">Additional company changes:</strong>
                      <span className="text-xs sm:text-sm text-gray-600">Charges may apply when you exceed the package allowance.</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-amber-800" />
                    </div>
                    <div>
                      <strong className="text-gray-900 text-sm block">Registered office services:</strong>
                      <span className="text-xs sm:text-sm text-gray-600">These may be excluded from a basic package.</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-amber-800" />
                    </div>
                    <div>
                      <strong className="text-gray-900 text-sm block">Complex share transactions:</strong>
                      <span className="text-xs sm:text-sm text-gray-600">Share allotments and complicated ownership changes can require additional work.</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-amber-800" />
                    </div>
                    <div>
                      <strong className="text-gray-900 text-sm block">Bespoke documents:</strong>
                      <span className="text-xs sm:text-sm text-gray-600">Special resolutions or complex corporate documentation may cost extra.</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-amber-800" />
                    </div>
                    <div>
                      <strong className="text-gray-900 text-sm block">VAT:</strong>
                      <span className="text-xs sm:text-sm text-gray-600">An advertised price excluding VAT will generally be increased by 20% if the provider charges standard-rate VAT.</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-amber-800" />
                    </div>
                    <div>
                      <strong className="text-gray-900 text-sm block">Renewal terms:</strong>
                      <span className="text-xs sm:text-sm text-gray-600">Check automatic renewal, cancellation deadlines and whether the annual price can change.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-gray-800 text-sm">
                  <p>
                    <strong>Distinguish fees:</strong> Also distinguish the provider's fee from official Companies House charges. Ask for a quotation showing both separately, so you can calculate your likely annual cost.
                  </p>
                </div>
              </section>

              {/* Section 4 — Can You Handle Company Secretarial Work Yourself? */}
              <section id="handle-it-yourself" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Can You Handle Company Secretarial Work Yourself?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Yes. A private limited company is not generally required to appoint a company secretary under section 270 of the Companies Act 2006. A director or another person authorised by the directors can carry out the relevant duties.{" "}
                  <a
                    href="https://www.legislation.gov.uk/ukpga/2006/46/section/270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    Read section 270
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>.
                </p>
                <p className="mb-4">
                  This means the company secretary cost can be £0 if you manage the work yourself, although applicable filing fees and the value of your time still need to be considered.
                </p>
                <p className="mb-4">
                  For example, if you file your own online confirmation statement, the official fee is £50 for the relevant 12-month payment period. You must still keep company information accurate, maintain the required records and meet other filing obligations.
                </p>
                <p className="mb-4">
                  For a straightforward company with one director and one shareholder, handling routine administration yourself may be practical. However, if you regularly deal with changes in ownership or have limited time to manage deadlines, professional support may be worthwhile.
                </p>
                <p className="mb-4">
                  If you're unsure about the role and its legal requirements, read our guide to{" "}
                  <Link
                    to="/what-is-a-company-secretary-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    What Is a Company Secretary
                  </Link>
                  .
                </p>
                <p>
                  If you're unsure whether an appointment is necessary, our guide to{" "}
                  <Link
                    to="/do-small-companies-need-a-company-secretary"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Do Small Companies Need a Company Secretary in the UK?
                  </Link>{" "}
                  explains the legal position for private limited companies.
                </p>
              </section>

              {/* Section 5 — In-House vs Outsourced Company Secretary Cost */}
              <section id="in-house-vs-outsourced" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  In-House vs Outsourced Company Secretary Cost
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  There are three main options for managing company secretarial duties, and each has a different cost structure.
                </p>

                {/* Comparison Table */}
                <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Option</th>
                        <th className="py-3.5 px-4 font-semibold">Main cost</th>
                        <th className="py-3.5 px-4 font-semibold">Best suited to</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {inHouseVsOutsourcedData.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                          <td className="py-3.5 px-4 font-bold text-gray-900 whitespace-nowrap">
                            {item.option}
                          </td>
                          <td className="py-3.5 px-4 text-amber-700 font-medium">
                            {item.mainCost}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {item.bestSuited}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mb-4">
                  Hiring an in-house company secretary can be expensive for a small company that only needs occasional filings. A full-time salary is not directly comparable with an annual outsourced package because the responsibilities and hours differ.
                </p>
                <p className="mb-4">
                  Outsourcing allows a company to pay for an agreed level of support without employing someone. It can be particularly suitable for contractors, landlords and small limited companies that want their records and routine filings managed alongside their other business administration.
                </p>
                <p>
                  Before deciding who should handle these duties, it's also worth understanding the{" "}
                  <Link
                    to="/responsibilities-of-a-company-director-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    responsibilities of a company director in the UK
                  </Link>
                  , as directors remain accountable for meeting their legal obligations.
                </p>
              </section>

              {/* Conversion CTA Card */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 my-10 not-prose shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Need Fixed-Fee Company Secretarial Support?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                    Save time and protect your company from Companies House penalties. Our fixed-fee packages cover confirmation statements, register maintenance, director filings and corporate changes with complete transparency.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-xl shrink-0 transition-transform active:scale-95 shadow-md"
                >
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Section 6 — Is a Company Secretary Service Worth the Cost? */}
              <section id="is-it-worth-cost" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Is a Company Secretary Service Worth the Cost?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  A company secretarial service may be worth paying for if it saves time, reduces administrative pressure and helps you keep company records organised.
                </p>
                <p className="mb-4 font-semibold text-gray-900">
                  It is particularly useful when:
                </p>
                <ul className="space-y-3 mb-6 not-prose">
                  {[
                    "Your company has multiple directors or shareholders.",
                    "You regularly change company details or shareholdings.",
                    "You want assistance with confirmation statements and statutory registers.",
                    "You prefer a professional to manage routine compliance administration.",
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-800 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-4">
                  For a simple company with few changes, doing the work yourself may be sufficient. For a more complex business, paying for a service with clearly defined responsibilities can offer better value than choosing the cheapest available package.
                </p>
                <p>
                  Before deciding, it's helpful to understand{" "}
                  <Link
                    to="/company-secretary-vs-company-secretarial-service"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Company Secretary vs Company Secretarial Service
                  </Link>
                  , as appointing an individual and outsourcing the work are different arrangements.
                </p>
              </section>

              {/* Section 7 — How to Choose the Right Company Secretarial Service */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How to Choose the Right Company Secretarial Service
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  Compare providers on the total annual cost and the work included, rather than price alone.
                </p>

                <div className="space-y-4 not-prose mb-6">
                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Check the package:</strong>
                    <span className="text-sm text-gray-600">Confirm which filings, registers and company changes are covered.</span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Ask about filing fees:</strong>
                    <span className="text-sm text-gray-600">Establish whether Companies House charges are included or separate.</span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Confirm VAT:</strong>
                    <span className="text-sm text-gray-600">Compare the final amount payable.</span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Review extra charges:</strong>
                    <span className="text-sm text-gray-600">Ask what happens when you need work outside the standard package.</span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Check renewal conditions:</strong>
                    <span className="text-sm text-gray-600">Understand the cancellation period and renewal price.</span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Consider combined services:</strong>
                    <span className="text-sm text-gray-600">If you also need accounts and tax support, ask whether company secretarial administration can be handled alongside them.</span>
                  </div>
                </div>

                <p className="mb-4">
                  The right package should match your company's actual needs. Paying for services you never use is unnecessary, but choosing a package that excludes essential work may cost more in the long run.
                </p>
                <p className="mb-4">
                  If you're comparing local providers, our guide to{" "}
                  <Link
                    to="/company-secretarial-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial firms in Bristol
                  </Link>{" "}
                  covers options for businesses looking for professional support in the area.
                </p>
                <p>
                  If you also need help with business expenses and tax claims, our guide to{" "}
                  <Link
                    to="/hmrc-mileage-rates-2026-27"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    HMRC mileage rates 2026/27
                  </Link>{" "}
                  explains the applicable mileage allowances and rules.
                </p>
              </section>

              {/* Section 8 — Frequently Asked Questions */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-8 not-prose bg-white">
                  {faqsData.map((faq, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-base leading-snug">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-gray-400 text-xl leading-none mt-0.5">
                          {openFaq === idx ? "−" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed bg-gray-50/60 border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9 — Final Thoughts */}
              <section id="final-thoughts" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Thoughts
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Company secretary costs in the UK range from managing routine duties yourself to paying several hundred pounds a year for professional support. The best option depends on your company's structure, the amount of administration involved and the level of support you need.
                </p>
                <p className="mb-4">
                  For contractors and small limited companies, a clearly priced service can make it easier to manage routine filings without hiring an employee. Before committing, compare the full annual cost, including VAT, filing charges and additional work.
                </p>
                <p className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 text-gray-800">
                  Henleaze Tax Consultancy supports{" "}
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
                  </Link>
                  , freelancers and{" "}
                  <Link
                    to="/services/small-business-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    small limited companies
                  </Link>{" "}
                  on a fixed-fee basis. If you would like company secretarial administration handled alongside your accounts and tax requirements, explore our{" "}
                  <Link
                    to="/services/company-secretarial-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretarial services
                  </Link>
                  .
                </p>
              </section>

            </div>
            {/* end article body */}

          </div>
          {/* end max-w-4xl */}
        </div>
        {/* end bg-white */}

        {/* ── NEARBY LOCATIONS SECTION ─────── */}
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default CompanySecretaryCostUk;
