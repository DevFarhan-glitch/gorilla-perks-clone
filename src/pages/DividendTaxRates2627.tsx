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
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Building2,
  PoundSterling,
  ArrowRight,
  Calculator,
  BarChart3,
  Scale,
  FileText
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "dividend-tax-rates-2026-27", title: "What are the Dividend Tax Rates for 2026/27?" },
  { id: "why-rates-went-up", title: "Why Did Dividend Tax Rates Go Up in 2026?" },
  { id: "top-slice-rule", title: "How Dividends are Actually Taxed — The Top Slice Rule" },
  { id: "worked-example-cost", title: "Worked Example: What the Rise Actually Costs" },
  { id: "salary-or-dividends", title: "Salary or Dividends: Optimal Mix for 2026/27" },
  { id: "what-dividends-are-not", title: "What Dividends Are Not" },
  { id: "directors-outside-england", title: "A Note for Directors Outside England" },
  { id: "reporting-dividends", title: "Reporting Dividends to HMRC" },
  { id: "how-henleaze-can-help", title: "How Henleaze Can Help Bristol Directors" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "What are the UK dividend tax rates for 2026/27?",
    answer:
      "The dividend tax rates for 2026/27 are 10.75% for basic rate taxpayers, 35.75% for higher rate taxpayers and 39.35% for additional rate taxpayers, after the first £500 of dividend income which is tax free."
  },
  {
    question: "How much dividend can I take tax free in 2026/27?",
    answer:
      "The Dividend Allowance for 2026/27 remains at £500. This means the first £500 of dividend income you receive is tax free, regardless of which tax band you fall into."
  },
  {
    question: "Why did dividend tax rates increase in April 2026?",
    answer:
      "The increase was announced at the Autumn Budget 2025 to narrow the gap between tax on earned income like salary and tax on income from assets like dividends. The basic and higher rates each rose by two percentage points."
  },
  {
    question: "Is it still tax efficient to pay myself in dividends?",
    answer:
      "In most cases yes, but the optimal salary and dividend split depends on your specific profit level, whether your company qualifies for Employment Allowance, and your personal circumstances. The traditional low salary approach is no longer automatically the best option for every director."
  },
  {
    question: "Do I need to file a Self Assessment for dividends?",
    answer:
      "If your dividend income exceeds both your unused Personal Allowance and the £500 Dividend Allowance, you need to report it through Self Assessment. The filing and payment deadline for dividends received in the 2026/27 tax year is 31 January 2028."
  },
];

const DividendTaxRates2627 = () => {
  const [activeSection, setActiveSection] = useState("dividend-tax-rates-2026-27");
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
    "headline": "Dividend Tax Rates 2026/27: Bristol Director Guide",
    "description": "Dividend tax rates for 2026/27 are 10.75%, 35.75% and 39.35%. See what changed, what it costs, and how Bristol directors can plan ahead.",
    "image": "https://henleazetaxconsultancy.com/uk-divident-tax.jpeg",
    "author": {
      "@type": "Organization",
      "name": "Henleaze Tax Consultancy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Henleaze Tax Consultancy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://henleazetaxconsultancy.com/logo.jpg"
      }
    },
    "datePublished": "2026-08-12",
    "dateModified": "2026-08-12"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Dividend Tax Rates 2026/27: Bristol Director Guide</title>
        <meta
          name="description"
          content="Dividend tax rates for 2026/27 are 10.75%, 35.75% and 39.35%. See what changed, what it costs, and how Bristol directors can plan ahead."
        />
        <meta
          name="keywords"
          content="dividend tax rates 2026/27, UK dividend tax, dividend allowance 2026, Bristol director tax, salary vs dividends, dividend tax increase 2026"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/dividend-tax-rates-2026-27" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── ARTICLE WRAPPER ────────────────────────────────────────── */}
        <div className="bg-white" style={{ paddingTop: "80px" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

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
                Dividend Tax Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              UK Dividend Tax Rates 2026/27: What Company Directors Need to Know
            </h1>

            {/* Subtitle / Desc */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Dividend tax rates for 2026/27 are 10.75%, 35.75% and 39.35%. See what changed, what it costs, and how Bristol directors can plan ahead.
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

            {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
            <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3">
              <img
                src="/uk-divident-tax.jpeg"
                alt="UK Dividend Tax Rates 2026/27 Guide for Company Directors"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Opening Paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Dividend tax rates for the 2026/27 UK tax year are 10.75% for basic rate taxpayers, 35.75% for higher rate taxpayers and 39.35% for additional rate taxpayers, after the first £500 of dividend income each year, which remains tax free. Both the basic and higher rates rose by two percentage points from 6 April 2026, making this one of the more significant tax changes facing company directors across the UK this year, particularly here in Bristol where a large number of our clients run their own limited companies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This guide walks through exactly what changed, what it actually costs you, and what it means for how you pay yourself going forward.
            </p>

            {/* Highlight Box / Quote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 text-lg leading-relaxed mb-10 bg-amber-50/50 py-3 rounded-r-lg">
              "Both the basic and higher rates rose by two percentage points from 6 April 2026, making this one of the more significant tax changes facing company directors across the UK this year."
            </blockquote>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">In This Article</h2>
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
                          className={`text-xs font-mono shrink-0 w-5 ${activeSection === section.id ? "text-amber-600" : "text-gray-400"
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
              className="prose prose-lg prose-gray max-w-none"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >

              {/* Section 1 — Dividend Tax Rates */}
              <h2 id="dividend-tax-rates-2026-27" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What are the Dividend Tax Rates for 2026/27?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Dividend income above your Personal Allowance and the £500 Dividend Allowance is taxed according to which UK tax band it falls into.
              </p>

              {/* Rate Comparison Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 my-4">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Tax band</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Dividend tax rate 2026/27</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Dividend tax rate 2025/26</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Basic rate</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-red-700">
                          <TrendingUp className="h-4 w-4 shrink-0" />
                          10.75%
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-500">8.75%</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Higher rate</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-red-700">
                          <TrendingUp className="h-4 w-4 shrink-0" />
                          35.75%
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-500">33.75%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Additional rate</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">39.35%</td>
                      <td className="px-4 py-3.5 text-gray-500">39.35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Dividend Allowance stays at £500, unchanged from the previous year and both the Personal Allowance of £12,570 and the Dividend Allowance are frozen until at least April 2028. That freeze matters as much as the rate rise itself, since it means more income gets pulled into higher bands each year even without a real increase in earnings.
              </p>

              {/* Key Callout */}
              <div className="my-8 p-5 bg-amber-50/60 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed font-medium text-gray-900 m-0">
                    The freeze on the Personal Allowance and Dividend Allowance matters as much as the rate rise itself — more income gets pulled into higher bands each year even without a real increase in earnings.
                  </p>
                </div>
              </div>

              {/* Section 2 — Why Rates Went Up */}
              <h2 id="why-rates-went-up" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why Did Dividend Tax Rates Go Up in 2026?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                The increase was announced at the Autumn Budget 2025 and took effect from 6 April 2026. A few key points explain the change:
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>The stated aim was to narrow the gap between tax paid on earned income, such as salary and tax paid on income from assets like dividends</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Dividends have never attracted National Insurance, which is part of why the gap existed in the first place</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>The additional rate was left untouched, so the change lands hardest on basic and higher rate taxpayers specifically</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>This group covers the majority of small company directors, which is why the change has been felt so widely</span>
                </li>
              </ul>

              {/* Section 3 — Top Slice Rule */}
              <h2 id="top-slice-rule" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Dividends are Actually Taxed: The "Top Slice" Rule
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Dividends are treated as the top slice of your income. Your salary, pension or rental income fills up your Personal Allowance and tax bands first and only then do your dividends get added on top and taxed at whatever band they land in.
              </p>

              {/* Worked Example Box */}
              <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-amber-600 shrink-0" />
                  A quick worked example
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Someone earning £29,570 in wages and receiving £3,000 in dividends would work out as follows:
                </p>
                <ul className="space-y-2 text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>Total income comes to £32,570</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>Taking off the £12,570 Personal Allowance leaves a taxable income of £20,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>This sits within the basic rate band</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>£500 of the dividends is covered entirely by the Dividend Allowance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>The remaining £2,500 is taxed at 10.75%</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you want to check the salary side of the calculation separately, our <Link to="https://henleazetaxconsultancy.com/calculator" className="text-amber-700 font-semibold hover:underline">
                    UK salary calculator
                  </Link> can help you understand how gross salary translates into taxable income.
                </p>
              </div>

              {/* Section 4 — What the Rise Costs */}
              <h2 id="worked-example-cost" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Worked Example: What the Rise Actually Costs
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                The two percentage point increase adds up quickly for directors extracting larger dividends.
              </p>

              {/* Cost Impact Cards */}
              <div className="space-y-4 mb-8">
                <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-100 text-red-800 rounded-lg">
                      <PoundSterling className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">£50,000 dividend — basic rate</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    On a £50,000 dividend taken by a basic rate taxpayer, the rise alone adds roughly <strong>£1,000 a year</strong> compared with the previous rates.
                  </p>
                </div>

                <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-100 text-red-800 rounded-lg">
                      <PoundSterling className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">£60,000 dividend — higher rate</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A higher rate director extracting £60,000 in dividends is paying around <strong>£1,200 more a year</strong> from exactly the same profit.
                  </p>
                </div>

                <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Per £1,000 of basic rate dividends</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    For every £1,000 of dividend income taxed within the basic rate band, the rise costs an extra <strong>£20</strong> compared with the previous year.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This is not a small adjustment buried in the small print, it is a direct, calculable increase in what it costs to take money out of your own company. On a single figure it can look modest, but scaled up across a full year of dividend income, particularly for directors who rely on dividends as their main source of income rather than a top up, the difference becomes significant enough to justify a proper review rather than assuming last year's approach still holds.
              </p>

              {/* CTA - Calculator */}
              <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500 text-white rounded-full shrink-0">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">See the impact on your own numbers?</h4>
                    <p className="text-sm text-gray-600">Use our free tax calculator for a quick, no obligation estimate of your position.</p>
                  </div>
                </div>
                <Link to="/calculator" className="shrink-0">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">
                    Try Tax Calculator
                  </Button>
                </Link>
              </div>

              {/* Section 5 — Salary or Dividends */}
              <h2 id="salary-or-dividends" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Salary or Dividends: What's the Optimal Mix for 2026/27?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-600 shrink-0" />
                The traditional approach
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                For years, the standard route was a low salary set around the National Insurance threshold, historically somewhere between £5,000 and £6,708, with the rest taken as dividends. That approach is no longer automatically the most efficient one.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-600 shrink-0" />
                Why things have shifted
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                For many directors in 2026/27, a salary set at the full Personal Allowance of £12,570 now makes more sense. If you're unsure how your salary is worked out before considering dividends, our guide explains <Link to="https://henleazetaxconsultancy.com/how-do-you-calculate-your-annual-salary-in-uk" className="text-amber-700 font-semibold hover:underline">
                  how annual salary is calculated in the UK
                </Link>, including how regular and irregular income can affect the calculation. A few reasons why:
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Corporation Tax relief on that salary often outweighs the National Insurance cost</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>This is particularly true once Employment Allowance is factored in</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>The shift is largely down to the Secondary Threshold, the point at which employer National Insurance kicks in, dropping to £5,000, down from £9,100 in April 2025</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Employment Allowance can reduce or remove the employer National Insurance cost on a higher salary entirely for eligible companies</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>This is why two directors with similar profits can end up with genuinely different optimal salary levels depending on whether their company qualifies</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whether the old approach or the newer £12,570 salary works better for you depends on your company's profit level, whether you qualify for Employment Allowance, and your personal circumstances more broadly. or contractors and directors operating through their own limited company, understanding  <Link to="https://henleazetaxconsultancy.com/what-is-a-contractor-accountant" className="text-amber-700 font-semibold hover:underline">
                  what a contractor accountant does
                </Link> can also help when deciding how salary, dividends and other company finances should be managed. This is exactly the kind of decision worth reviewing rather than leaving on autopilot from previous years, and it ties directly into the {" "}
                <Link to="/services/tax-planning" className="text-amber-700 font-semibold hover:underline">
                  strategic tax planning
                </Link> {" "}
                side of what we do for Bristol business owners.
              </p>

              {/* Section 6 — What Dividends Are Not */}
              <h2 id="what-dividends-are-not" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Dividends Are Not
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                It is also worth being clear about what dividends are not.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>They are not simply company money you can draw whenever cash is sitting in the account</span>
                </li>
                <li className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>Dividends can only be paid from genuine post tax distributable profit</span>
                </li>
                <li className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>A company that is running at a loss or is insolvent cannot legally declare them at all, regardless of how the bank balance looks on a given day</span>
                </li>
              </ul>

              {/* Section 7 — Directors Outside England */}
              <h2 id="directors-outside-england" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                A Note for Directors Outside England
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed m-0">
                    If you are based in Scotland, your higher rate band starts at £43,663 rather than £50,270, meaning the point at which dividend extraction becomes less attractive arrives sooner. Dividend tax rates themselves are set at a UK wide level and do not differ by nation, only the income tax bands that determine where your income sits do. If you are a contractor, it is also worth understanding <Link to="https://henleazetaxconsultancy.com/how-does-ir35-work-in-the-uk" className="text-amber-700 font-semibold hover:underline">
                      how IR35 works in the UK
                    </Link> , as employment-status rules can affect how you are taxed.

                  </p>
                </div>
              </div>

              {/* Section 8 — Reporting Dividends */}
              <h2 id="reporting-dividends" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Reporting Dividends to HMRC
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-600 shrink-0" />
                When you need to report
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                If your dividend income exceeds both your unused Personal Allowance and the £500 Dividend Allowance, you need to report it through Self Assessment.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Dividends do not go through payroll, so nothing is deducted automatically the way it would be from a salary</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>The filing and payment deadline for dividends received in the 2026/27 tax year is <strong>31 January 2028</strong></span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0" />
                A mistake worth avoiding
              </h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg mb-10">
                <p className="text-gray-700 leading-relaxed m-0">
                  One common mistake is treating dividends as if they were salary when recording them in company accounts. HMRC can reclassify dividends taken without sufficient distributable profits as a director's loan or an unlawful distribution, which brings its own tax consequences on top of whatever was originally owed.
                </p>
              </div>

              {/* Section 9 — How Henleaze Can Help */}
              <h2 id="how-henleaze-can-help" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Henleaze Can Help Bristol Directors Plan Ahead
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                We are based at Park House on Park Street in Bristol and a large part of our work involves helping local company directors get their salary and dividend structure right for the year ahead rather than reacting after the fact.For contractors running their own limited companies, our guide to  <Link to="https://henleazetaxconsultancy.com/contractor-accountant-services-in-the-uk" className="text-amber-700 font-semibold hover:underline">
                  contractor accounting services
                </Link> explains the wider accounting support available, from accounts and tax returns to ongoing financial management.  We work on fixed fees with clear advice from the outset, so you know what a review will cost before we start, and we look at your specific profit level and circumstances rather than applying a generic formula that might not actually suit your business.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you are still working out the basics of what tax planning involves more broadly, our guide on{" "}
                <Link to="/what-is-tax-planning-uk-guide" className="text-amber-700 font-semibold hover:underline">
                  what tax planning actually is
                </Link>{" "}
                is a useful starting point and our overview of{" "}
                <Link to="/tax-planning-services-explained" className="text-amber-700 font-semibold hover:underline">
                  tax planning services
                </Link>{" "}
                covers the wider areas we support beyond dividends specifically.
              </p>

              {/* Section 10 — FAQs */}
              <h2 className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-4 mb-12">
                {faqsData.map((faq, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
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
                      <div className="px-5 pb-5 pt-1 text-gray-700 border-t border-gray-100 bg-gray-50/50 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Section 11 — Final Words */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                The rise in dividend tax rates for 2026/27 is a real cost, not a minor technical adjustment and it changes the maths behind decisions that many directors have been making the same way for years without reviewing them. Whether the traditional salary and dividend split still works for you depends entirely on your own numbers.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                If you would like a proper review of your salary and dividend structure for this tax year,{" "}
                <Link to="/contact" className="text-amber-700 font-semibold hover:underline">
                  get in touch with our team
                </Link>{" "}
                for a tailored quote based on your circumstances.
              </p>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950 text-white rounded-2xl p-8 my-12 shadow-xl border border-amber-500/20 text-center sm:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-display">
                    Need Help With Your 2026/27 Salary &amp; Dividend Structure?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get in touch with our Bristol tax planning experts for a tailored, fixed-fee review of your optimal salary and dividend mix this tax year.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                    <Link to="/contact">
                      <Button className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                        Book a Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/calculator">
                      <Button variant="outline" className="border-gray-600 text-black hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg">
                        Calculate Your Tax
                      </Button>
                    </Link>
                  </div>
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

export default DividendTaxRates2627;
