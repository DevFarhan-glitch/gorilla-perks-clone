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
  Calculator,
  Percent,
  MapPin,
  HelpCircleIcon
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "cost-by-service-type", title: "Cost by Service Type" },
  { id: "cost-by-business-size", title: "Cost by Business Size" },
  { id: "what-actually-affects-your-price", title: "What Actually Affects Your Price" },
  { id: "fixed-fee-vs-hourly-vs-retainer", title: "Fixed Fee vs Hourly vs Retainer Pricing, and Why It Matters" },
  { id: "hidden-and-add-on-costs", title: "Hidden and Add On Costs to Watch For" },
  { id: "outsourced-cost-vs-in-house", title: "Outsourced Accounting Cost vs Hiring In House" },
  { id: "what-this-costs-for-contractors", title: "What This Costs for Contractors Specifically" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "How much does outsourced accounting cost for a small business in the UK?",
    answer:
      "Most small businesses pay between £60 and £350 a month for a bundled package covering bookkeeping, VAT and annual accounts, though sole traders with simple affairs can pay as little as £100 to £200 a month.",
  },
  {
    question: "Is fixed fee or hourly billing better for outsourced accounting?",
    answer:
      "Fixed fee billing generally suits most small businesses better, since it makes costs predictable and removes any hesitation about contacting your accountant for fear of running up an hourly bill.",
  },
  {
    question: "Are there hidden costs in outsourced accounting?",
    answer:
      "Sometimes. Software subscriptions, director Self Assessment returns and one off filings like company formation can be billed separately from a standard monthly package, so it's worth confirming exactly what's included upfront.",
  },
  {
    question: "How much does outsourced payroll cost per employee?",
    answer:
      "Outsourced payroll in the UK typically costs between £4 and £15 per employee per month, depending on the provider and how complex your payroll needs are.",
  },
  {
    question: "Is outsourced accounting cheaper than hiring an in house accountant?",
    answer:
      "Usually yes, particularly for small and medium sized businesses, once you factor in the full cost of an employee's salary, National Insurance, pension contributions and cover for time off.",
  },
];

const OutsourcedAccountingCostUK = () => {
  const [activeSection, setActiveSection] = useState("cost-by-service-type");
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
    headline: "Outsourced Accounting Pricing in the UK: What You'll Actually Pay",
    description:
      "From bookkeeping to payroll, see genuine UK pricing for outsourced accounting, what drives your quote up or down, and hidden fees to avoid.",
    image: "https://henleazetaxconsultancy.com/outsourced-accounting-pricing.webp",
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
    datePublished: "2026-09-17",
    dateModified: "2026-09-17",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/outsourced-accounting-cost-uk",
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
        name: "Outsourced Accounting Cost UK, Explained",
        item: "https://henleazetaxconsultancy.com/outsourced-accounting-cost-uk",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Outsourced Accounting Cost UK, Explained</title>
        <meta
          name="description"
          content="From bookkeeping to payroll, see genuine UK pricing for outsourced accounting, what drives your quote up or down, and hidden fees to avoid."
        />
        <meta
          name="keywords"
          content="Outsource accounting cost UK, outsourced accounting pricing UK, outsourced bookkeeping cost, small business accounting fees UK, outsourced payroll pricing"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/outsourced-accounting-cost-uk" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/outsourced-accounting-pricing.webp"
            alt="Outsourced accounting pricing in the UK with business finance and accounting costs"
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
                UK Accounting & Pricing Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Outsourced Accounting Pricing in the UK: What You'll Actually Pay
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              From bookkeeping to payroll, see genuine UK pricing for outsourced accounting, what drives your quote up or down, and hidden fees to avoid.
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
                <Link
                  to="/services/outsourced-accounting-services"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  Outsourced accounting in the UK
                </Link>{" "}
                typically costs somewhere between £60 and £1,000 a month for most small and growing businesses, depending on what you're outsourcing and how complex your finances are. A sole trader with straightforward affairs sits at the lower end, while a growing limited company with payroll, VAT and regular management accounts sits higher.
              </p>

              {/* Callout box clearing up offshore confusion */}
              <div className="p-5 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl not-prose my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    <p className="font-semibold text-gray-900 mb-1">A Key Distinction When Searching Costs:</p>
                    <p>
                      Before going further, it's worth flagging something that trips up a lot of people searching this exact question. Several guides on this topic actually cover what it costs an accounting firm to send its own work offshore to India or the Philippines, a completely different scenario to what most business owners want to know. This guide is about what it costs you, as a business, to pay an external UK accountant to handle your books.
                    </p>
                  </div>
                </div>
              </div>
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
              className="prose prose-lg prose-gray max-w-none space-y-10"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >

              {/* Section 1 — Cost by Service Type */}
              <section id="cost-by-service-type" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Cost by Service Type
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Outsourced accounting isn't priced as one flat fee, different services carry different costs and most providers let you pick and choose rather than forcing a{" "}
                  <Link
                    to="/pricing"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    single bundled package
                  </Link>.
                </p>

                {/* Pricing Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Service</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Typical UK Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm sm:text-base text-gray-700">
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">Basic bookkeeping, small business</td>
                        <td className="py-3 px-4 font-medium text-amber-700">£80 to £350 per month</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3 px-4 font-semibold text-gray-900">VAT returns</td>
                        <td className="py-3 px-4">Often included in a bookkeeping package, or £50 to £150 extra per quarter if standalone</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">Payroll</td>
                        <td className="py-3 px-4 font-medium text-amber-700">£4 to £15 per employee per month</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3 px-4 font-semibold text-gray-900">Annual accounts and Corporation Tax return</td>
                        <td className="py-3 px-4 font-medium text-amber-700">£750 to £2,500 per year for a limited company</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">Self Assessment tax return, sole trader</td>
                        <td className="py-3 px-4 font-medium text-amber-700">£150 to £600 per year</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3 px-4 font-semibold text-gray-900">Management accounts</td>
                        <td className="py-3 px-4 font-medium text-amber-700">£200 to £600 per month, depending on reporting complexity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Hourly billing still exists for one off or ad hoc work. According to Unbiased,{" "}
                  <Link
                    to="/services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    general accounting services
                  </Link>{" "}
                  for a{" "}
                  <Link
                    to="/services/small-business-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    small business
                  </Link>{" "}
                  typically run between £50 and £150 an hour, with more specialist advisory work sometimes reaching £250 an hour.
                </p>
              </section>

              {/* Section 2 — Cost by Business Size */}
              <section id="cost-by-business-size" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Cost by Business Size
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  How much you pay scales fairly predictably with the size and complexity of your business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 not-prose">
                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                        <User className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">Sole Traders & Freelancers</h4>
                    </div>
                    <div className="text-2xl font-bold text-amber-600 mb-2">£100 to £200 <span className="text-xs font-normal text-gray-500">/ month</span></div>
                    <p className="text-sm text-gray-600">
                      With simple affairs, or as little as £150 to £600 a year if it's just an annual Self Assessment return.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">Small Limited Companies</h4>
                    </div>
                    <div className="text-2xl font-bold text-amber-600 mb-2">£60 to £350 <span className="text-xs font-normal text-gray-500">/ month</span></div>
                    <p className="text-sm text-gray-600">
                      Under roughly £100,000 turnover, for a bundled package covering bookkeeping, VAT and annual accounts.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">Growing SMEs</h4>
                    </div>
                    <div className="text-2xl font-bold text-amber-600 mb-2">£350 to £500 <span className="text-xs font-normal text-gray-500">/ month</span></div>
                    <p className="text-sm text-gray-600">
                      Between £100,000 and £500,000 turnover, often reflecting added payroll and more regular reporting.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl hover:border-amber-300 transition-colors">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">Larger Small Businesses</h4>
                    </div>
                    <div className="text-2xl font-bold text-amber-600 mb-2">£500 to £1,000+ <span className="text-xs font-normal text-gray-500">/ month</span></div>
                    <p className="text-sm text-gray-600">
                      Above £500,000 turnover or with high transaction volumes, sometimes reaching £2,000 to £6,000 for complex, multi-entity setups.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 — What Actually Affects Your Price */}
              <section id="what-actually-affects-your-price" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Actually Affects Your Price
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                {/* Secondary Image */}
                <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                  <img
                    src="/what-actually-affects-your-price.webp"
                    alt="Factors affecting outsourced accounting costs including VAT, payroll, transactions and location"
                    className="w-full h-auto object-contain max-h-[460px] mx-auto"
                  />
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  A handful of specific factors drive most of the variation you'll see between quotes:
                </p>

                <div className="space-y-4 mb-6 not-prose">
                  <div className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
                      <Receipt className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-0.5">Transaction Volume</h4>
                      <p className="text-sm text-gray-600">
                        More invoices, payments and bank transactions mean more bookkeeping work each month.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
                      <Percent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-0.5">VAT Registration</h4>
                      <p className="text-sm text-gray-600">
                        VAT registered businesses need quarterly returns filed, which adds ongoing work regardless of size.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-0.5">Payroll Headcount</h4>
                      <p className="text-sm text-gray-600">
                        Each employee on payroll adds a small per person cost, so a business with ten staff costs noticeably more to run payroll for than a single director company.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
                      <FileCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-0.5">Whether You Want Compliance Only or Ongoing Advice</h4>
                      <p className="text-sm text-gray-600">
                        A provider filing your annual return once a year charges less than one offering proactive tax planning and regular check ins throughout the year.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-0.5">Location</h4>
                      <p className="text-sm text-gray-600">
                        Some UK sources note that London based firms can charge up to 25 percent more than the national average, largely reflecting higher office overheads, though online and remote providers increasingly narrow this gap.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 — Fixed Fee vs Hourly vs Retainer Pricing, and Why It Matters */}
              <section id="fixed-fee-vs-hourly-vs-retainer" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Fixed Fee vs Hourly vs Retainer Pricing, and Why It Matters
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Most{" "}
                  <Link
                    to="/what-is-outsourced-accounting-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    UK outsourced accounting
                  </Link>{" "}
                  is priced one of three ways and the model matters almost as much as the headline number:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 not-prose">
                  <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl shadow-sm">
                    <div className="font-bold text-amber-900 text-lg mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-amber-700" />
                      Fixed Fee Billing
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Means a set monthly amount covering an agreed scope of work. This is generally the easiest to budget around, since you know exactly what's coming out of your account each month and there's no reluctance to pick up the phone and ask a question for fear of being charged for the call.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-700" />
                      Hourly Billing
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Suits genuinely one off or unpredictable work, a single piece of advice, a specific project, but it leaves you exposed to costs growing if the work takes longer than expected.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                    <div className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Layers className="h-5 w-5 text-gray-700" />
                      Retainer Models
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sit somewhere between the two, a set monthly fee for ongoing access to support, sometimes with certain services capped or billed separately beyond an agreed scope.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  For most small businesses and contractors, a genuinely fixed fee removes the guesswork, provided you've confirmed exactly what's included from the outset.
                </p>
              </section>

              {/* Section 5 — Hidden and Add On Costs to Watch For */}
              <section id="hidden-and-add-on-costs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Hidden and Add On Costs to Watch For
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  A cheaper headline price isn't always the better deal once you look at what's actually included. A few costs commonly get billed separately, even when a provider's advertised price looks competitive:
                </p>

                <div className="space-y-3.5 mb-6 not-prose">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 font-semibold">Software and platform fees:</strong>
                      <span className="text-gray-600 ml-1">Some providers bill your Xero or QuickBooks subscription separately rather than including it in the package price.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 font-semibold">Self Assessment returns for directors:</strong>
                      <span className="text-gray-600 ml-1">A limited company package sometimes covers the company's accounts but not each director's personal tax return.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 font-semibold">One off filings:</strong>
                      <span className="text-gray-600 ml-1">Such as company formation, changes to your registered details, or confirmation statement filing fees, which may sit outside a standard monthly package.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 font-semibold">Additional advisory work:</strong>
                      <span className="text-gray-600 ml-1">
                        Like a specific piece of{" "}
                        <Link
                          to="/what-is-tax-planning-uk-guide"
                          className="text-amber-700 hover:underline font-semibold"
                        >
                          tax planning
                        </Link>{" "}
                        or a one off HMRC query, which some providers bill as an extra rather than including it as standard.
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Before comparing two quotes on price alone, it's worth asking exactly what's included in each, since the cheaper looking option sometimes ends up costing more once the extras are added back in.
                </p>
              </section>

              {/* Section 6 — Outsourced Accounting Cost vs Hiring In House */}
              <section id="outsourced-cost-vs-in-house" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Outsourced Accounting Cost vs Hiring In House
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Outsourcing generally works out cheaper than employing an in-house bookkeeper once you account for salary, employer National Insurance, pension contributions and the cost of covering holiday and sick leave.
                </p>

                {/* In House vs Outsourced Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Cost Factor</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">In House Bookkeeper</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Outsourced Accounting</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-sm sm:text-base text-gray-700">
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">Base cost</td>
                        <td className="py-3 px-4">£25,000 to £35,000 salary per year</td>
                        <td className="py-3 px-4 font-semibold text-amber-700">Single monthly fee, scaled to your needs</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3 px-4 font-semibold text-gray-900">Employer National Insurance</td>
                        <td className="py-3 px-4">Additional cost on top of salary</td>
                        <td className="py-3 px-4 font-medium text-emerald-700">Included in the fee</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">Pension contributions</td>
                        <td className="py-3 px-4">Additional cost on top of salary</td>
                        <td className="py-3 px-4 font-medium text-emerald-700">Included in the fee</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3 px-4 font-semibold text-gray-900">Software and licensing</td>
                        <td className="py-3 px-4">Paid separately by the business</td>
                        <td className="py-3 px-4 font-medium text-emerald-700">Usually included</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">Holiday and sick cover</td>
                        <td className="py-3 px-4">Business must arrange and pay for cover</td>
                        <td className="py-3 px-4 font-medium text-emerald-700">Covered by the provider's team</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3 px-4 font-semibold text-gray-900">Recruitment cost</td>
                        <td className="py-3 px-4">Time and fees to hire and replace staff</td>
                        <td className="py-3 px-4 font-medium text-emerald-700">None</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  We've broken this comparison down in more depth, including how it plays out across different business sizes, in our guide to{" "}
                  <Link
                    to="/outsourcing-accounting-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    outsourced accounting versus in house accounting
                  </Link>.
                </p>
              </section>

              {/* Section 7 — What This Costs for Contractors Specifically */}
              <section id="what-this-costs-for-contractors" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What This Costs for Contractors Specifically
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  For a contractor operating through their own limited company, the cost conversation looks a little different to a standard SME. Payroll usually means processing a single director's salary rather than a team, so the main cost driver becomes the depth of tax advice involved, particularly getting your{" "}
                  <Link
                    to="/what-is-ir35-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    IR35 status
                  </Link>{" "}
                  and salary and dividend split right, rather than transaction volume.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We work with contractors, sole traders and small limited companies across Bristol on a genuinely fixed fee basis, so there's no risk of a surprise invoice landing after a busy month. If you'd like to know exactly what this looks like for your own situation, our{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    contractor accountant services page
                  </Link>{" "}
                  covers what's included.
                </p>
              </section>

              {/* Section 8 — Frequently Asked Questions */}
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

              {/* Section 9 — Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Outsourced accounting costs vary widely, but for most UK small businesses, the realistic range sits between £60 and £1,000 a month depending on complexity and a genuinely fixed fee arrangement makes that cost far easier to plan around than hourly billing ever can. The key is asking exactly what's included before comparing prices, since the cheapest quote isn't always the best value once hidden extras are factored in.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center not-prose shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Looking for Fixed-Fee Outsourced Accounting in Bristol?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  Get full bookkeeping, payroll, VAT and annual accounts support with zero hidden charges. Speak with our specialist Bristol accountants today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md">
                    <Link to="/contact">Get a Fixed-Fee Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-800 hover:bg-amber-50">
                    <Link to="/pricing">View Our Pricing Plans</Link>
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

export default OutsourcedAccountingCostUK;
