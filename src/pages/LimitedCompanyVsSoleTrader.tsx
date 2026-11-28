import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  Building2,
  Users,
  Scale,
  ArrowRight,
  Briefcase,
  FileText,
  BadgeAlert,
  HelpCircle,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Receipt,
  Layers,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "what-is-a-sole-trader", title: "What is a Sole Trader?" },
  { id: "what-is-a-limited-company", title: "What is a Limited Company?" },
  { id: "key-differences", title: "Key Differences at a Glance" },
  { id: "tax-differences", title: "Difference in Tax" },
  { id: "liability-protection", title: "Limited vs Unlimited Liability" },
  { id: "admin-and-costs", title: "Administration and Running Costs" },
  { id: "contractors-and-freelancers", title: "Which Is Better for Contractors & Freelancers?" },
  { id: "when-to-switch", title: "When to Switch from Sole Trader to Limited Company" },
  { id: "final-thoughts", title: "Final Thoughts" },
];

const comparisonData = [
  {
    feature: "Legal status",
    soleTrader: "Individual business owner",
    limitedCompany: "Separate legal entity",
  },
  {
    feature: "Registration",
    soleTrader: "HMRC (Self Assessment)",
    limitedCompany: "Companies House and HMRC",
  },
  {
    feature: "Liability",
    soleTrader: "Unlimited personal liability",
    limitedCompany: "Generally limited liability",
  },
  {
    feature: "Business profits",
    soleTrader: "Belong directly to the individual",
    limitedCompany: "Belong to the company",
  },
  {
    feature: "Tax on profits",
    soleTrader: "Income Tax and National Insurance",
    limitedCompany: "Corporation Tax",
  },
  {
    feature: "Taking money out",
    soleTrader: "Withdraw profits directly (drawings)",
    limitedCompany: "Salary, dividends or other permitted payments",
  },
  {
    feature: "Accounts",
    soleTrader: "Business records and Self Assessment",
    limitedCompany: "Statutory annual accounts and company records",
  },
  {
    feature: "Tax returns",
    soleTrader: "Personal Self Assessment (SA100)",
    limitedCompany: "Company Tax Return (CT600)",
  },
  {
    feature: "Public information",
    soleTrader: "Less company information publicly available",
    limitedCompany: "Company information available on public register",
  },
  {
    feature: "Business control",
    soleTrader: "Direct personal control",
    limitedCompany: "Directors manage the company on behalf of shareholders",
  },
  {
    feature: "Administration",
    soleTrader: "Generally simpler",
    limitedCompany: "More reporting and compliance requirements",
  },
];

const LimitedCompanyVsSoleTrader = () => {
  const [activeSection, setActiveSection] = useState("what-is-a-sole-trader");

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
    headline: "Limited Company vs Sole Trader: Key Differences 2026",
    description:
      "Compare limited company vs sole trader in the UK. Understand tax, liability, costs and responsibilities to choose the right business structure.",
    image: "https://henleazetaxconsultancy.com/limited-company-vs-sole-trader.webp",
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
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/limited-company-vs-sole-trader",
    },
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
        name: "Limited Company vs Sole Trader: Key Differences 2026",
        item: "https://henleazetaxconsultancy.com/limited-company-vs-sole-trader",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Limited Company vs Sole Trader: Key Differences 2026</title>
        <meta
          name="description"
          content="Compare limited company vs sole trader in the UK. Understand tax, liability, costs and responsibilities to choose the right business structure."
        />
        <meta
          name="keywords"
          content="Limited Company vs Sole Trader, sole trader vs limited company uk, difference between sole trader and limited company, sole trader or limited company 2026, incorporating a business uk, corporation tax vs income tax"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/limited-company-vs-sole-trader"
        />
        <meta
          property="og:title"
          content="Limited Company vs Sole Trader: Key Differences 2026"
        />
        <meta
          property="og:description"
          content="Compare limited company vs sole trader in the UK. Understand tax, liability, costs and responsibilities to choose the right business structure."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/limited-company-vs-sole-trader"
        />
        <meta
          property="og:image"
          content="https://henleazetaxconsultancy.com/limited-company-vs-sole-trader.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Limited Company vs Sole Trader: Key Differences 2026"
        />
        <meta
          name="twitter:description"
          content="Compare limited company vs sole trader in the UK. Understand tax, liability, costs and responsibilities to choose the right business structure."
        />
        <meta
          name="twitter:image"
          content="https://henleazetaxconsultancy.com/limited-company-vs-sole-trader.webp"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED HERO IMAGE ─────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/limited-company-vs-sole-trader.webp"
            alt="Limited Company vs Sole Trader: What’s the Difference and Which Is Better in 2026?"
            className="w-full h-auto max-h-[520px] object-contain bg-gray-50 mx-auto"
          />
        </div>

        {/* ── ARTICLE CONTENT WRAPPER ────────────────────────────────── */}
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
                Business Structure &amp; Tax Strategy
              </span>
            </div>

            {/* Main Headline (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Limited Company vs Sole Trader: What’s the Difference and Which Is Better in 2026?
            </h1>

            {/* Metadata bar */}
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

            {/* Intro paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Choosing between operating as a sole trader and setting up a limited company is one
                of the first important decisions when starting a business in the UK. Both structures
                allow you to work independently, earn money and build a business, but they differ
                considerably in terms of legal responsibility, taxation, administration and how you
                can use your profits.
              </p>
              <p>
                A sole trader operates as an individual, whereas a limited company is a separate
                legal entity. The right choice depends on your business income, financial
                responsibilities, future plans and how much administration you are prepared to
                manage.
              </p>
              <p>
                Understanding the difference between a limited company and a sole trader can help you
                make a decision that supports your business now and as it grows.
              </p>
            </div>

            {/* In This Guide (Table of Contents) */}
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

            {/* Article Prose Body */}
            <div
              className="prose prose-lg prose-gray max-w-none space-y-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {/* ── SECTION 1: WHAT IS A SOLE TRADER? ──────────────────── */}
              <section id="what-is-a-sole-trader" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What is a Sole Trader?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  A sole trader is someone who owns and runs a business as an individual. You can
                  work independently, employ staff and provide services to customers, but there is no
                  legal separation between you and your business.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Registering as a sole trader is relatively straightforward. You generally need to
                  register for Self Assessment with HM Revenue and Customs (HMRC), keep records of
                  your business income and expenses, and submit an annual tax return.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  One of the main advantages is that you retain all the profits after paying your
                  business expenses and personal taxes. You also have direct control over business
                  decisions without needing to follow company reporting requirements.
                </p>

                {/* Important Alert Callout */}
                <div className="not-prose bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <ShieldAlert className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    <strong>Important Legal Consideration:</strong> You are personally responsible for
                    your business debts and financial obligations. If your business cannot pay its
                    creditors, your personal assets could be at risk.
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed m-0">
                  A sole trader structure is often suitable for freelancers, consultants, independent
                  professionals and people starting small businesses who want a straightforward way to
                  trade.
                </p>
              </section>

              {/* ── SECTION 2: WHAT IS A LIMITED COMPANY? ──────────────── */}
              <section id="what-is-a-limited-company" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What is a Limited Company?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  A limited company is a business registered with Companies House that has its own
                  legal identity, separate from its owners and directors.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  This means the company can enter into contracts, own assets, employ people and take
                  responsibility for its own debts. Even if you are the only shareholder and
                  director, the company remains legally separate from you.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  To establish a limited company, you must register it with Companies House, appoint at
                  least one director, provide the required company information and issue shares.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Unlike a sole trader, a limited company pays Corporation Tax on its taxable
                  profits. Directors may receive a salary, while shareholders can receive dividends
                  from available profits.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Limited companies also have ongoing reporting responsibilities, including annual
                  accounts, Company Tax Returns and confirmation statements.
                </p>

                <p className="text-gray-700 leading-relaxed m-0">
                  This structure is commonly used by growing businesses, contractors, consultants and
                  entrepreneurs who want a formal business structure with limited liability.
                </p>
              </section>

              {/* ── SECTION 3: KEY DIFFERENCES AT A GLANCE ────────────── */}
              <section id="key-differences" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Limited Company vs Sole Trader: Key Differences at a Glance
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                {/* Section Image */}
                <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
                  <img
                    src="/limited-company-vs-sole-trader-key-differences.webp"
                    alt="Limited Company vs Sole Trader: Key Differences at a Glance"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                  <div className="p-3 bg-gray-100 text-center text-xs sm:text-sm text-gray-600 font-medium">
                    A side-by-side comparison of sole trader versus limited company business structures.
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The following table highlights the main differences between these two business
                  structures.
                </p>

                {/* Comparison Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-1/4">Comparison</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-amber-900">
                          Sole Trader
                        </th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-blue-900">
                          Limited Company
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                      {comparisonData.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0
                              ? "bg-white hover:bg-gray-50/80"
                              : "bg-gray-50/40 hover:bg-gray-50"
                          }
                        >
                          <td className="py-3 px-4 font-bold text-gray-900">{row.feature}</td>
                          <td className="py-3 px-4 text-gray-700">{row.soleTrader}</td>
                          <td className="py-3 px-4 text-gray-700">{row.limitedCompany}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                  Neither structure is automatically better. A sole trader arrangement offers
                  simplicity, while a limited company provides a separate legal identity and
                  different financial planning opportunities.
                </p>
              </section>

              {/* ── SECTION 4: DIFFERENCE IN TAX ───────────────────────── */}
              <section id="tax-differences" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Is the Difference in Tax Between a Sole Trader and a Limited Company?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  Tax is often one of the biggest considerations when comparing a sole trader vs
                  limited company. However, the most tax-efficient option depends on how much your
                  business earns, your other income and how you take money out of the business.
                </p>

                {/* Sole Trader Tax Card */}
                <div className="not-prose bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Receipt className="h-5 w-5 text-amber-600" />
                    Sole Trader Tax
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                    As a sole trader, you pay Income Tax on your taxable business profits rather than
                    your total turnover. You can deduct allowable business expenses before
                    calculating your taxable profits.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base font-semibold mb-2">
                    For the 2026/27 tax year, the standard Income Tax rates in England, Wales and
                    Northern Ireland are:
                  </p>
                  <ul className="space-y-2 mb-4 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-1" />
                      <span><strong>Personal Allowance:</strong> £12,570 at 0%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-1" />
                      <span><strong>Basic Rate:</strong> 20% (on income between £12,571 and £50,270).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-1" />
                      <span><strong>Higher Rate:</strong> 40% (on income between £50,271 and £125,140).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-1" />
                      <span><strong>Additional Rate:</strong> 45% (on income over £125,140).</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    You may also need to pay Class 4 National Insurance on your profits. For 2026/27,
                    the rates are <strong>6%</strong> on profits between £12,570 and £50,270, and{" "}
                    <strong>2%</strong> on profits above £50,270.
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm italic m-0">
                    *Note: Scottish taxpayers have different Income Tax bands and rates.
                  </p>
                </div>

                {/* Limited Company Tax Card */}
                <div className="not-prose bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    Limited Company Tax
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                    A limited company pays Corporation Tax on its taxable profits. For the 2026/27
                    financial year, the main rates are:
                  </p>
                  <ul className="space-y-2 mb-4 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-1" />
                      <span><strong>19% Small Profits Rate:</strong> for profits up to £50,000.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-1" />
                      <span><strong>25% Main Rate:</strong> for profits above £250,000.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-1" />
                      <span><strong>Marginal Relief:</strong> for qualifying companies with profits between £50,000 and £250,000.</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 italic">
                    These thresholds can be affected by associated companies.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    Directors can receive a salary through PAYE and may also receive dividends if the
                    company has sufficient distributable profits. Dividends are not treated as a
                    business expense when calculating Corporation Tax.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    For 2026/27, dividend tax rates are <strong>10.75%</strong> for basic-rate
                    taxpayers, <strong>35.75%</strong> for higher-rate taxpayers and{" "}
                    <strong>39.35%</strong> for additional-rate taxpayers, above the £500 dividend
                    allowance.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                    The company may also have employer National Insurance responsibilities on
                    directors' salaries.
                  </p>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
                  So, which is more tax-efficient?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  There is no universal answer. A limited company may offer useful tax-planning
                  opportunities when some profits can remain in the business, but extracting all
                  profits through salary and dividends can change the overall tax position.
                </p>
                <p className="text-gray-700 leading-relaxed m-0">
                  The comparison should consider Corporation Tax, Income Tax, dividend tax and
                  National Insurance together rather than looking at one tax rate in isolation.
                </p>
              </section>

              {/* ── SECTION 5: LIMITED VS UNLIMITED LIABILITY ─────────── */}
              <section id="liability-protection" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Limited Liability vs Unlimited Liability: How are You Protected?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  One of the most important legal differences between a sole trader and a limited
                  company is personal financial responsibility.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  As a sole trader, you and your business are legally the same. If your business has
                  outstanding debts, suppliers or creditors may pursue your personal assets to
                  recover the money.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  A limited company generally provides limited liability to its shareholders. This
                  means their financial responsibility is normally restricted to the amount they have
                  invested or agreed to contribute towards their shares.
                </p>

                <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">
                        When Can Directors Still Face Personal Liability?
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed m-0">
                        Limited liability does not mean directors can never be held personally
                        responsible. Personal guarantees (often requested by commercial landlords or
                        banks), wrongful trading, certain breaches of directors' duties and other legal
                        circumstances can create personal liability.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed m-0">
                  For businesses with employees, significant contracts, borrowing or financial risks,
                  this distinction deserves careful consideration.
                </p>
              </section>

              {/* ── SECTION 6: ADMINISTRATION AND RUNNING COSTS ───────── */}
              <section id="admin-and-costs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Which Has More Administration and Running Costs?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  A sole trader generally has fewer administrative responsibilities. You must
                  maintain accurate business records, keep evidence of expenses and submit your Self
                  Assessment tax return.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  A limited company has additional reporting obligations, which commonly include:
                </p>

                <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-3 my-6">
                  {[
                    "Preparing and filing annual accounts with Companies House.",
                    "Filing a Company Tax Return with HMRC.",
                    "Paying Corporation Tax by the relevant deadline.",
                    "Filing a confirmation statement at least once every 12 months.",
                    "Maintaining company records and documenting relevant director and shareholder decisions.",
                    "Operating PAYE where applicable.",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Private limited companies normally have nine months after their financial year ends
                  to file annual accounts, while Corporation Tax is generally payable nine months and
                  one day after the accounting period ends.
                </p>

                {/* Making Tax Digital (MTD) Callout */}
                <div className="not-prose bg-blue-50/80 border-l-4 border-blue-600 rounded-r-xl p-5 my-6">
                  <h4 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-700" />
                    Important 2026 Change: Making Tax Digital for Sole Traders
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    Making Tax Digital for Income Tax started on <strong>6 April 2026</strong> for
                    eligible individuals with qualifying income above £50,000. The threshold reduces
                    to £30,000 from April 2027 and £20,000 from April 2028.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed m-0">
                    This means some sole traders will need compatible software, digital records and
                    quarterly updates to HMRC.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In terms of running costs, sole traders generally spend less on accounting and
                  compliance because their reporting requirements are simpler. Limited companies may
                  have higher accountancy fees due to additional accounts, Corporation Tax and{" "}
                  <Link
                    to="/services/payroll-and-hr-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll responsibilities.
                  </Link>
                </p>

                <p className="text-gray-700 leading-relaxed m-0">
                  Both structures may also need to register for VAT when their taxable turnover exceeds
                  the applicable £90,000 threshold. VAT registration is not determined by whether you
                  are a sole trader or a limited company.
                </p>
              </section>

              {/* ── SECTION 7: CONTRACTORS AND FREELANCERS ────────────── */}
              <section id="contractors-and-freelancers" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Sole Trader or Limited Company: Which Is Better for Contractors and Freelancers?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  For contractors and freelancers, choosing a business structure involves more than
                  comparing tax rates.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Working as a sole trader can be suitable for independent professionals who provide
                  services directly to clients and want to keep their business arrangements
                  straightforward.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  A limited company may be more appropriate for contractors who work with agencies,
                  larger organisations or clients that prefer to engage incorporated businesses.
                </p>

                {/* IR35 Alert */}
                <div className="not-prose bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <BadgeAlert className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    <strong>IR35 Off-Payroll Working Rules:</strong> Contractors must also consider{" "}
                    <Link
                      to="/what-is-ir35-uk"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      IR35
                    </Link>{" "}
                    legislation. If a contract falls within the off-payroll working rules, the way you
                    operate through a limited company does not automatically make your income
                    tax-efficient. The actual working arrangements and employment status are
                    important.
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Freelancers should also consider their expected earnings, professional risks, client
                  requirements and plans for future growth before deciding.
                </p>

                <p className="text-gray-700 leading-relaxed m-0">
                  Getting advice from specialist{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    contractor accountants in Bristol
                  </Link>{" "}
                  can help you understand the financial and compliance implications of each
                  structure.
                </p>
              </section>

              {/* ── SECTION 8: WHEN TO SWITCH ─────────────────────────── */}
              <section id="when-to-switch" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  When Should You Switch from Sole Trader to Limited Company?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  There is no fixed income level at which every sole trader should become a limited
                  company. The right time depends on business circumstances rather than a single
                  turnover or profit figure.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  You may want to consider incorporating when:
                </p>

                <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-3.5 my-6">
                  {[
                    "Your business profits are increasing and you want to explore different tax-planning options.",
                    "You want to retain some profits in the business to fund future investment.",
                    "Your clients or commercial contracts require an incorporated business.",
                    "You are taking on greater financial or contractual responsibilities.",
                    "You plan to bring in shareholders or expand your business.",
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Switching from sole trader to limited company involves more than registering a new
                  business. You may need to transfer business assets, contracts, equipment, stock and
                  other responsibilities into the company.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  You should also consider{" "}
                  <Link
                    to="/services/vat-and-bookkeeping-accounting-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    VAT registration
                  </Link>
                  , tax implications, outstanding liabilities and the correct treatment of business
                  income during the transition.
                </p>

                <p className="text-gray-700 leading-relaxed m-0">
                  Professional advice can help you plan the change properly and avoid unnecessary tax
                  or administrative complications.
                </p>
              </section>

              {/* ── SECTION 9: FINAL THOUGHTS ──────────────────────────── */}
              <section id="final-thoughts" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Thoughts
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  The difference between a limited company and a sole trader comes down to legal
                  responsibility, taxation, administration and how you want to manage your business.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  A sole trader structure can be a practical starting point for individuals who value
                  simplicity and direct control. A limited company may be more suitable for businesses
                  looking for a separate legal identity, limited liability and opportunities to retain
                  profits for future growth.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Before making a decision, consider your expected profits, personal financial
                  circumstances, business risks and long-term objectives.
                </p>

                <p className="text-gray-700 leading-relaxed m-0">
                  At Henleaze Tax Consultancy, we help individuals, freelancers, contractors and
                  small businesses understand their tax responsibilities and choose suitable
                  accounting arrangements. Whether you are starting as a sole trader, considering
                  incorporation or looking for ongoing accounting support,{" "}
                  <Link
                    to="/contact"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    our team can help you make informed financial decisions
                  </Link>
                  .
                </p>
              </section>
            </div>

            {/* ── BOTTOM CTA BANNER ───────────────────────────────────── */}
            <div
              className="mt-16 rounded-2xl overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(245,158,11,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative px-8 py-12 md:px-12 md:py-14 text-center">
                <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5">
                  Need Help Choosing?
                </span>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Unsure whether to incorporate or stay a sole trader?
                </h3>
                <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  We'll evaluate your turnover, expenses, IR35 position and extraction plans to calculate the most tax-efficient route for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Link to="/contact">
                      Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300"
                  >
                    <Link to="/pricing">View Fixed-Fee Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LimitedCompanyVsSoleTrader;
