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
  ArrowRight,
  Briefcase,
  Receipt,
  Layers,
  Sparkles,
  TrendingUp,
  Percent,
  Coins,
  Scale,
  Calculator,
  HelpCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "difference-between-salary-and-dividends", title: "Difference Between Salary and Dividends" },
  { id: "key-differences", title: "Key Differences at a Glance" },
  { id: "how-salary-is-taxed", title: "How a Director's Salary is Taxed" },
  { id: "how-dividends-are-taxed", title: "How Dividends are Taxed" },
  { id: "which-is-better", title: "Is It Better to Take a Salary or Dividends?" },
  { id: "practical-example", title: "Salary vs Dividends: A Practical Example" },
  { id: "how-accountant-helps", title: "How an Accountant Can Help" },
  { id: "final-words", title: "Final Words" },
];

const comparisonData = [
  {
    feature: "What it means",
    salary: "Payment for work as a director or employee",
    dividends: "Distribution of company profits to shareholders",
  },
  {
    feature: "Who can receive it",
    salary: "Directors and employees",
    dividends: "Shareholders only",
  },
  {
    feature: "Payment method",
    salary: "Processed through PAYE payroll",
    dividends: "Declared by board resolution & paid by the company",
  },
  {
    feature: "Income Tax",
    salary: "Normal employment income tax bands (20%, 40%, 45%)",
    dividends: "Dividend tax rates (10.75%, 35.75%, 39.35%)",
  },
  {
    feature: "Employee National Insurance",
    salary: "May apply on earnings above thresholds",
    dividends: "Not applicable (0% NICs)",
  },
  {
    feature: "Employer National Insurance",
    salary: "May apply to the company on earnings above thresholds",
    dividends: "Not applicable (0% NICs)",
  },
  {
    feature: "Corporation Tax",
    salary: "Generally deductible as an allowable business expense",
    dividends: "Not deductible (paid from post-Corporation Tax profits)",
  },
  {
    feature: "Profit requirement",
    salary: "Does not depend on distributable profits",
    dividends: "Must come strictly from available distributable profits",
  },
  {
    feature: "Records required",
    salary: "Payroll records, payslips and RTI HMRC reporting",
    dividends: "Board minutes, dividend records and dividend vouchers",
  },
];

const dividendTaxRates = [
  { band: "Basic rate", rate: "10.75%" },
  { band: "Higher rate", rate: "35.75%" },
  { band: "Additional rate", rate: "39.35%" },
];

const SalaryVsDividendsUK = () => {
  const [activeSection, setActiveSection] = useState("difference-between-salary-and-dividends");

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
    headline: "Salary vs Dividends UK: Which Is Better in 2027?",
    description:
      "Compare salary vs dividends in the UK. Understand tax rates, National Insurance and how company directors can pay themselves.",
    image: "https://henleazetaxconsultancy.com/Salary%20vs%20Dividends%20in%20the%20UK.webp",
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
    datePublished: "2026-11-27",
    dateModified: "2026-11-27",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/salary-vs-dividends-uk",
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
        name: "Salary vs Dividends UK: Which Is Better in 2027?",
        item: "https://henleazetaxconsultancy.com/salary-vs-dividends-uk",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Salary vs Dividends UK: Which Is Better in 2027?</title>
        <meta
          name="description"
          content="Compare salary vs dividends in the UK. Understand tax rates, National Insurance and how company directors can pay themselves."
        />
        <meta
          name="keywords"
          content="salary vs dividends UK, director salary vs dividends 2027, paying yourself from a limited company, director dividend tax rates, optimal director salary uk, corporation tax and dividends"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/salary-vs-dividends-uk"
        />
        <meta
          property="og:title"
          content="Salary vs Dividends UK: Which Is Better in 2027?"
        />
        <meta
          property="og:description"
          content="Compare salary vs dividends in the UK. Understand tax rates, National Insurance and how company directors can pay themselves."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/salary-vs-dividends-uk"
        />
        <meta
          property="og:image"
          content="https://henleazetaxconsultancy.com/Salary%20vs%20Dividends%20in%20the%20UK.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Salary vs Dividends UK: Which Is Better in 2027?"
        />
        <meta
          name="twitter:description"
          content="Compare salary vs dividends in the UK. Understand tax rates, National Insurance and how company directors can pay themselves."
        />
        <meta
          name="twitter:image"
          content="https://henleazetaxconsultancy.com/Salary%20vs%20Dividends%20in%20the%20UK.webp"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED HERO IMAGE ─────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/Salary vs Dividends in the UK.webp"
            alt="Salary vs Dividends in the UK: Which Is More Tax Efficient in 2027?"
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
                Director Tax &amp; Remuneration
              </span>
            </div>

            {/* Main Headline (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Salary vs Dividends in the UK: Which Is More Tax Efficient in 2027?
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
                8 min read
              </span>
            </div>

            {/* Intro paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                Choosing how to take money from a limited company is an important decision for
                directors. Two common ways to receive income are through a salary or dividends.
                Although both allow you to take money from your business, they are treated differently
                for tax purposes.
              </p>
              <p>
                A salary is paid through the company's payroll and may be subject to Income Tax and
                National Insurance. Dividends are payments made to shareholders from the company's
                available profits. They have different tax rules and cannot be treated as a business
                expense.
              </p>
              <p>
                For many company directors, using a combination of salary and dividends may be worth
                considering. However, the most suitable approach depends on company profits, personal
                income and other financial circumstances. This guide explains the differences, how
                each option is taxed and what to consider before deciding how to pay yourself.
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
              {/* ── SECTION 1: WHAT IS THE DIFFERENCE ─────────────────── */}
              <section id="difference-between-salary-and-dividends" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What is the Difference Between Salary and Dividends?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  The main difference is that a salary is payment for work carried out as a director or
                  employee, while a dividend is a distribution of company profits to shareholders. Both
                  can provide income to a company director, but the eligibility requirements and tax
                  treatment are different.
                </p>

                {/* Sub-card: Director's Salary */}
                <div className="not-prose bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-amber-600" />
                    What is a Director's Salary?
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    A director's salary is payment made by a limited company for the work and
                    responsibilities carried out by its director. It is normally processed through the
                    company's Pay As You Earn (PAYE) payroll system, just like wages paid to other
                    employees.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    When a company pays a director a salary, it must account for Income Tax and
                    National Insurance where applicable. The company may also have to pay employer's
                    National Insurance. Salary payments and relevant deductions must be reported to
                    HMRC.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                    A salary is generally an allowable business expense when calculating taxable
                    company profits, provided the normal tax requirements are met. This can reduce the
                    profits on which Corporation Tax is calculated.
                  </p>
                </div>

                {/* Sub-card: Dividends */}
                <div className="not-prose bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Coins className="h-5 w-5 text-blue-600" />
                    What are Dividends?
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    Dividends are payments a limited company makes to its shareholders from profits
                    available for distribution. Unlike a salary, a dividend is not payment for
                    carrying out work. It is a return received from owning shares in the company.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    A director can receive dividends if they also own shares and the company has
                    sufficient distributable profits. Having money in the business bank account does
                    not automatically mean the company can pay dividends. It must have enough
                    available profits after accounting for relevant losses and liabilities.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    Dividends are not processed through PAYE and do not attract National Insurance
                    contributions. However, shareholders may need to pay personal dividend tax if
                    their dividend income exceeds the available allowances.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                    Companies must also follow the correct procedures when declaring dividends. This
                    normally includes recording the decision and preparing a dividend voucher for each
                    payment.
                  </p>
                </div>
              </section>

              {/* ── SECTION 2: KEY DIFFERENCES AT A GLANCE ────────────── */}
              <section id="key-differences" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Salary vs Dividends: Key Differences at a Glance
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  Salary and dividends both provide ways for a company director to receive money from a
                  limited company. However, they differ in how they are paid, who can receive them and
                  how they affect the company's tax position.
                </p>

                {/* Section Image */}
                <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
                  <img
                    src="/Salary vs Dividends.webp"
                    alt="Salary vs Dividends in the UK"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                  <div className="p-3 bg-gray-100 text-center text-xs sm:text-sm text-gray-600 font-medium">
                    Key structural and tax distinctions between director salary and dividend distributions.
                  </div>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-1/4">Comparison</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-amber-900">Salary</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base w-3/8 text-blue-900">Dividends</th>
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
                          <td className="py-3 px-4 text-gray-700">{row.salary}</td>
                          <td className="py-3 px-4 text-gray-700">{row.dividends}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Note Callout */}
                <div className="not-prose bg-amber-50/80 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    <strong>Essential Requirement:</strong> A director does not automatically qualify
                    for dividends simply because they manage the company. They must also own shares,
                    and the company must have sufficient distributable profits.
                  </div>
                </div>
              </section>

              {/* ── SECTION 3: HOW SALARY IS TAXED ─────────────────────── */}
              <section id="how-salary-is-taxed" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How is a Director's Salary Taxed in the UK?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  A director's salary is treated as employment income, meaning it is subject to the
                  normal Income Tax and National Insurance rules. The amount payable depends on the
                  director's total taxable income, available allowances and applicable thresholds.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Income Tax on Salary
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Salary is added to a person's other taxable income when calculating their Income Tax
                  liability. The Personal Allowance determines how much income an individual can
                  receive before paying Income Tax, although it can be reduced for people with higher
                  incomes.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The amount of tax payable depends on the individual's tax band. Other income, such as
                  earnings from another job or rental income, may affect the calculation.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Employee and Employer National Insurance
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  National Insurance is another important consideration when deciding how much salary
                  to take. Directors may have to pay employee National Insurance on earnings above the
                  relevant threshold, while the company may also be responsible for employer
                  contributions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Directors have specific National Insurance calculation rules. Their contributions are
                  generally calculated using annual earnings rather than simply treating each monthly
                  payment as a separate calculation. This is particularly relevant when directors
                  receive irregular salaries or bonuses.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The company should use suitable payroll software or professional payroll support to
                  calculate and report the correct amounts.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
                  How Salary Affects Corporation Tax
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A genuine salary paid for work carried out by a director is generally an allowable
                  expense when calculating the company's taxable profits. This means it can reduce the
                  amount of profit subject to Corporation Tax.
                </p>
                <p className="text-gray-700 leading-relaxed m-0">
                  However, the company must account for the associated payroll costs, including
                  employer National Insurance where applicable. Therefore, directors should consider
                  the overall cost to the company rather than looking only at their personal Income Tax.
                </p>
              </section>

              {/* ── SECTION 4: HOW DIVIDENDS ARE TAXED ─────────────────── */}
              <section id="how-dividends-are-taxed" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How are Dividends Taxed in the UK?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  Dividends are taxed differently from salary because they are distributions of company
                  profits rather than employment payments. Shareholders may have to pay personal
                  dividend tax, but dividends do not attract employee or employer National Insurance.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Dividend Allowance and Tax Rates
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Individuals receive a dividend allowance, which is currently £500. Dividend income
                  within this allowance is not subject to dividend tax. Any amount above it is taxed
                  according to the individual's applicable Income Tax band.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  The current dividend tax rates are:
                </p>

                {/* Dividend Tax Rates Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white max-w-md">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-50 border-b border-blue-200 text-gray-900">
                        <th className="py-3 px-4 font-bold text-sm sm:text-base">Tax band</th>
                        <th className="py-3 px-4 font-bold text-sm sm:text-base text-blue-900">Dividend tax rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                      {dividendTaxRates.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{row.band}</td>
                          <td className="py-3 px-4 font-bold text-blue-800">{row.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  These rates apply to dividend income above the available allowance. The individual's
                  total income determines which tax band applies, so other earnings must also be
                  considered.
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Why Dividends Do Not Reduce Corporation Tax
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unlike salary, dividends cannot be deducted as a business expense when calculating
                  Corporation Tax. The company pays Corporation Tax on its taxable profits before
                  distributing available profits to shareholders.
                </p>
                <p className="text-gray-700 leading-relaxed m-0">
                  This distinction is important. Although dividends may have a different personal tax
                  treatment, they are not automatically more tax efficient once company-level taxes are
                  included.
                </p>
              </section>

              {/* ── SECTION 5: WHICH IS BETTER ─────────────────────────── */}
              <section id="which-is-better" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Is It Better to Take a Salary or Dividends?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  There is no single answer for every company director. The better option depends on
                  the company's financial position, the director's personal tax circumstances and the
                  overall cost of each payment method.
                </p>

                {/* Grid comparing scenarios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
                  {/* When Salary May Be Suitable */}
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3 font-bold">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        When Taking a Salary May Be Suitable
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        A salary may be appropriate when a director wants regular income from the
                        company. It can also help build a National Insurance record, which may
                        contribute towards State Pension entitlement, depending on the level of
                        earnings and individual circumstances.
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed m-0">
                        Salary payments can also count towards pension arrangements and provide a formal
                        employment income record. However, employer National Insurance and payroll
                        administration should be included when assessing the cost.
                      </p>
                    </div>
                  </div>

                  {/* When Dividends May Be Suitable */}
                  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-3 font-bold">
                        <Coins className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        When Dividends May Be Suitable
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        Dividends may be appropriate when a director is also a shareholder and the
                        company has sufficient distributable profits. They do not attract National
                        Insurance, which can make them attractive in certain circumstances.
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed m-0">
                        However, dividends are not guaranteed income. A company cannot pay them simply
                        because a director wants to withdraw money. The necessary profits and company
                        procedures must be in place.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 mb-3">
                  Why Many Directors Combine Salary and Dividends
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Many owner-managed businesses consider a combination of salary and dividends rather
                  than relying entirely on one method. A salary can provide regular earnings, while
                  dividends can provide additional income when the company has sufficient profits.
                </p>
                <p className="text-gray-700 leading-relaxed m-0">
                  The right balance requires a calculation of personal Income Tax, National Insurance,
                  employer costs and Corporation Tax. It should also take account of other income and
                  the director's longer-term financial plans.
                </p>
              </section>

              {/* ── SECTION 6: PRACTICAL EXAMPLE ───────────────────────── */}
              <section id="practical-example" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Salary vs Dividends: A Practical Example
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  Consider a director who owns shares in a profitable limited company and wants to
                  withdraw money for personal use. They could receive a salary, take dividends or use a
                  combination of both.
                </p>

                <div className="not-prose bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-4 my-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-base mb-1">
                        Option A: Taking Everything as Salary
                      </strong>
                      <p className="text-sm text-gray-700 leading-relaxed m-0">
                        If the director takes everything as salary, the company must operate payroll
                        and consider employee and employer National Insurance. The salary may reduce
                        taxable company profits, but the overall employment costs need to be assessed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-gray-200 pt-4">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-base mb-1">
                        Option B: Taking Income as Dividends
                      </strong>
                      <p className="text-sm text-gray-700 leading-relaxed m-0">
                        If the director takes dividends, the company must first have sufficient
                        distributable profits and account for Corporation Tax. The shareholder may then
                        have personal dividend tax to pay, depending on their total income and available
                        allowance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-gray-200 pt-4">
                    <Sparkles className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-base mb-1">
                        Option C: A Balanced Strategy
                      </strong>
                      <p className="text-sm text-gray-700 leading-relaxed m-0">
                        A combination may provide a more suitable balance, but the outcome depends on
                        the figures. An accountant can compare the total company and personal tax costs
                        before recommending an approach.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ── SECTION 7: HOW ACCOUNTANT HELPS ─────────────────────── */}
              <section id="how-accountant-helps" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How Can an Accountant Help With Salary and Dividend Planning?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  An accountant can help company directors choose a suitable way to receive income
                  while keeping their tax and reporting responsibilities in order. Rather than relying
                  on a general salary or dividend recommendation, they can assess the company's profits
                  and the director's personal circumstances.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  Support may include:
                </p>

                <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-3.5 my-6">
                  {[
                    "Reviewing salary and dividend options.",
                    "Calculating Income Tax and National Insurance liabilities.",
                    "Managing payroll and reporting requirements.",
                    "Checking available profits before dividends are declared.",
                    "Preparing dividend vouchers and maintaining records.",
                    "Reviewing tax planning opportunities throughout the year.",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed m-0">
                  At Henleaze Tax Consultancy, we support{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    contractors
                  </Link>
                  , freelancers, limited company directors and{" "}
                  <Link
                    to="/services/small-business-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    small businesses
                  </Link>{" "}
                  with{" "}
                  <Link
                    to="/services/payroll-and-hr-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll
                  </Link>
                  ,{" "}
                  <Link
                    to="/services/vat-and-bookkeeping-accounting-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    bookkeeping
                  </Link>
                  , tax planning and{" "}
                  <Link
                    to="/services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    accounting services.
                  </Link>{" "}
                  Our team can help you understand your options and manage your company's financial
                  responsibilities.
                </p>
              </section>

              {/* ── SECTION 8: FINAL WORDS ─────────────────────────────── */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing between salary and dividends is an important part of managing a limited
                  company. While each method has different tax advantages and responsibilities, the most
                  suitable option depends on the company's profits and the director's personal
                  circumstances.
                </p>

                <p className="text-gray-700 leading-relaxed m-0">
                  A carefully planned combination can help directors manage their income while keeping
                  the company compliant. If you need help with payroll, tax planning or company
                  accounting, Henleaze Tax Consultancy can provide professional support to help you make
                  informed decisions.
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
                  Director Remuneration Planning
                </span>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Need tailored advice on your director salary &amp; dividends?
                </h3>
                <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  We'll review your company profits, personal tax bands, Corporation Tax and extraction goals to build a bespoke remuneration model.
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
                    <Link to="/pricing">View Our Pricing</Link>
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

export default SalaryVsDividendsUK;
