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
  FileText,
  Briefcase,
  ExternalLink,
  Layers,
  ArrowDownUp
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "what-a-salary-calculator-actually-works-out", title: "What a Salary Calculator Actually Works Out" },
  { id: "different-types-of-salary-calculator", title: "The Different Types of Salary Calculator, and Which One You Need in UK" },
  { id: "what-goes-into-the-calculation", title: "What Goes Into the Calculation" },
  { id: "why-your-result-might-not-match-payslip", title: "Why Your Result Might Not Match Your Payslip" },
  { id: "common-misconceptions", title: "Common Misconceptions About Salary Calculators in UK" },
  { id: "why-standard-calculators-dont-work-for-contractors", title: "Why Standard Calculators Don't Work for Contractors" },
  { id: "how-a-contractor-accountant-helps", title: "How a Contractor Accountant Gets You a More Accurate Number" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    question: "How is salary calculated in the UK?",
    answer:
      "Your gross salary has pension contributions deducted first, then your Personal Allowance is applied before Income Tax is worked out across the relevant tax bands. National Insurance is calculated separately on earnings above the NI threshold, and any student loan repayments come off last, leaving your net take home pay."
  },
  {
    question: "What does a salary calculator actually show you?",
    answer:
      "It shows your net take home pay after Income Tax, National Insurance, pension contributions and student loan repayments have been deducted from your gross salary."
  },
  {
    question: "Why doesn't a standard salary calculator work for contractors?",
    answer:
      "It can't account for dividends, IR35 status or the salary and dividend split most limited company contractors use, all of which significantly change the real take home figure."
  },
  {
    question: "Why might my salary calculator result not match my payslip?",
    answer:
      "Common reasons include a non-standard tax code, a different pension arrangement than assumed, having more than one job, or being partway through a tax year with a bonus or pay adjustment affecting the figures."
  }
];

const calculationSteps = [
  {
    step: "1",
    title: "Start with your gross salary",
    desc: "The figure before anything is taken off."
  },
  {
    step: "2",
    title: "Subtract any pension contributions",
    desc: "Since these usually come off before tax is worked out."
  },
  {
    step: "3",
    title: "Apply your Personal Allowance",
    desc: "The amount you can earn tax free each year (£12,570 for 2026/27)."
  },
  {
    step: "4",
    title: "Calculate Income Tax on what's left",
    desc: "Using the relevant basic, higher, or additional rate tax bands."
  },
  {
    step: "5",
    title: "Calculate National Insurance",
    desc: "On your earnings above the NI threshold."
  },
  {
    step: "6",
    title: "Subtract student loan repayments",
    desc: "If you have an active plan (e.g. Plan 1, Plan 2, Plan 4, Plan 5 or Postgraduate)."
  },
  {
    step: "7",
    title: "What remains is your net, or take home, pay",
    desc: "The actual cash landing in your bank account."
  }
];

const WhatIsSalaryCalculatorUK = () => {
  const [activeSection, setActiveSection] = useState("what-a-salary-calculator-actually-works-out");
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
    "headline": "What is a Salary Calculator? A UK Pay Guide for 2026",
    "description": "See exactly how a UK salary calculator works, which type you actually need, and why contractors need a different one entirely.",
    "image": "https://henleazetaxconsultancy.com/salary-calculator.jpeg",
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
    "datePublished": "2026-08-17",
    "dateModified": "2026-08-17"
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
        <title>What is a Salary Calculator? A UK Pay Guide for 2026</title>
        <meta
          name="description"
          content="See exactly how a UK salary calculator works, which type you actually need, and why contractors need a different one entirely."
        />
        <meta
          name="keywords"
          content="what is salary calculator UK, UK salary calculator, take home pay calculator UK, gross to net calculator UK, contractor take home pay, 2026 tax calculation"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/what-is-salary-calculator-uk" />
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
                UK Pay &amp; Tax Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What Is Salary Calculator in the UK? A Complete Guide to Working Out Your Pay
            </h1>

            {/* Subtitle / Desc */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              See exactly how a UK salary calculator works, which type you actually need, and why contractors need a different one entirely.
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
                7 min read
              </span>
            </div>

            {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
            <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3">
              <img
                src="/salary-calculator.jpeg"
                alt="Laptop showing a UK salary calculator, illustrating this guide to how UK take home pay is worked out"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Opening Paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A salary calculator UK tool works out how much of your gross pay you actually keep after Income Tax, National Insurance, pension contributions and student loan repayments are taken off. Put in your gross salary and it shows you your net take home pay, broken down by year, month, week or hour. Most calculators use the current tax year's rates and thresholds automatically, so you get an up to date figure without doing the maths yourself.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              That's the short answer. But not every salary calculator does the same job and picking the wrong type for your situation is a common reason the number you see doesn't match what actually lands in your bank account. This guide covers what these tools calculate, the different types available, what commonly goes wrong and why contractors in particular need to look beyond a standard calculator to get a figure they can trust.
            </p>

            {/* Highlight Box / Quote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 text-lg leading-relaxed mb-10 bg-amber-50/50 py-3 rounded-r-lg">
              "Not every salary calculator does the same job and picking the wrong type for your situation is a common reason the number you see doesn't match what actually lands in your bank account."
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

              {/* Section 1 — What a Salary Calculator Actually Works Out */}
              <h2 id="what-a-salary-calculator-actually-works-out" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What a Salary Calculator Actually Works Out
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Behind the single number a calculator gives you, there's a set sequence of deductions being applied. Understanding that sequence helps you sense the result rather than just trusting it blindly.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                A typical UK salary calculation works through these steps in order:
              </p>

              {/* Step by step list cards */}
              <div className="space-y-3 mb-8">
                {calculationSteps.map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-amber-300 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-gray-950 font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 m-0">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 mb-0 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Each of those steps has its own rules attached, which is why two people on the same gross salary can end up with meaningfully different take home figures depending on their pension arrangement, tax code or student loan plan.
              </p>

              {/* CTA Box - Tax Calculator */}
              <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500 text-white rounded-full shrink-0">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Calculate Your Exact Take Home Pay</h4>
                    <p className="text-sm text-gray-600">Use our instant, up to date UK tax calculator to see your net pay breakdown.</p>
                  </div>
                </div>
                <Link to="/calculator" className="shrink-0">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">
                    Try Tax Calculator
                  </Button>
                </Link>
              </div>

              {/* Section 2 — Different Types of Salary Calculator */}
              <h2 id="different-types-of-salary-calculator" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                The Different Types of Salary Calculator, and Which One You Need in UK
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* ── SECOND IMAGE ─────────────────────────────────────────── */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3 not-prose">
                <img
                  src="/types-of-salary-calculator.jpeg"
                  alt="Tablet showing a UK salary calculator dashboard, illustrating the different calculator types covered here"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Not every calculator does the same job and using the wrong one is one of the most common reasons people get confused by a mismatched result.
              </p>

              {/* Calculator Types Cards */}
              <div className="space-y-6 mb-8 not-prose">
                {/* Gross to Net */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Gross to Net Calculators</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base m-0">
                    These take your gross salary and work out your net pay. This is the most common type and the one most people picture when they think of a salary calculator. Useful for understanding what a job offer or current salary actually means in your pocket.
                  </p>
                </div>

                {/* Net to Gross */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <ArrowDownUp className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Net to Gross Calculators</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base m-0">
                    These work the other way round. You enter the net amount you want to take home and the calculator tells you what gross salary you'd need to earn to achieve it. Useful when negotiating pay, since employers often quote gross figures while you're thinking in terms of what you actually need each month.
                  </p>
                </div>

                {/* Hourly, Daily and Monthly Conversion */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Hourly, Daily and Monthly Conversion Calculators</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base m-0">
                    These convert between pay frequencies rather than working out deductions. If you're comparing a day rate against an annual salary or trying to work out your effective hourly rate from a yearly figure, this is the type you need. We've covered the individual conversions in detail, including  <Link to="/how-do-you-calculate-your-annual-salary-in-uk" className="text-amber-700 font-semibold hover:underline">how to calculate your annual salary from scratch</Link> and <Link to="/how-to-calculate-monthly-salary-in-uk" className="text-amber-700 font-semibold hover:underline">how to work out your monthly salary from an annual figure</Link> and how to convert an annual salary to an hourly rate, each with worked examples.

                  </p>
                </div>

                {/* Contractor & Limited Company */}
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Contractor and Limited Company Take Home Pay Calculators</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base m-0">
                    These are built specifically for people working through their own limited company, since a standard PAYE calculator simply can't account for dividends,{" "}
                    <Link to="/what-is-ir35-uk" className="text-amber-700 font-semibold hover:underline">
                      IR35 status
                    </Link>{" "}
                    or the salary and dividend split most contractors use. We'll come back to this one, since it's the type most standard calculators get wrong.
                  </p>
                </div>
              </div>

              {/* Section 3 — What Goes Into the Calculation */}
              <h2 id="what-goes-into-the-calculation" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Goes Into the Calculation
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                The numbers behind these calculators change with each tax year, so it's worth checking{" "}
                <a
                  href="https://www.gov.uk/income-tax-rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  the current Income Tax rates and allowances
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>{" "}
                directly on gov.uk rather than relying on an outdated tool.
              </p>

              {/* Rates Table */}
              <div className="overflow-x-auto mb-8 not-prose">
                <table className="w-full border-collapse text-sm text-gray-700 my-4 bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">Element</th>
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">2026/27 figure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-5 py-3.5 font-semibold text-gray-900">Personal Allowance</td>
                      <td className="px-5 py-3.5 font-medium text-gray-800">£12,570</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-5 py-3.5 font-semibold text-gray-900">Basic rate</td>
                      <td className="px-5 py-3.5 font-medium text-gray-800">20 percent, up to £50,270</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-5 py-3.5 font-semibold text-gray-900">Higher rate</td>
                      <td className="px-5 py-3.5 font-medium text-gray-800">40 percent, £50,271 to £125,140</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-5 py-3.5 font-semibold text-gray-900">Additional rate</td>
                      <td className="px-5 py-3.5 font-medium text-gray-800">45 percent, above £125,140</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-5 py-3.5 font-semibold text-gray-900">Employee National Insurance</td>
                      <td className="px-5 py-3.5 font-medium text-gray-800">8 percent between £12,570 and £50,270, then 2 percent above</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-5 py-3.5 font-semibold text-gray-900">Dividend allowance</td>
                      <td className="px-5 py-3.5 font-medium text-gray-800">£500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 60% Trap Callout */}
              <div className="my-8 p-5 bg-amber-50/70 rounded-xl border border-amber-200 not-prose">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">The £100,000 to £125,140 Personal Allowance Taper</h4>
                    <p className="text-gray-700 leading-relaxed text-sm m-0">
                      There's one quirk worth knowing about. Between £100,000 and £125,140, your Personal Allowance gets reduced by £1 for every £2 you earn above £100,000, disappearing entirely by £125,140. This creates an effective marginal tax rate of around 60 percent in that band, higher than the headline 45 percent additional rate, which surprises a lot of people the first time they see their calculator result at that income level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scotland Callout */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8 not-prose">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed m-0 text-sm">
                    Scotland uses a different set of Income Tax bands to the rest of the UK, so if you're comparing a Scottish salary to an English one, make sure the calculator lets you select the right region.
                  </p>
                </div>
              </div>

              {/* Section 4 — Why Your Result Might Not Match Your Payslip */}
              <h2 id="why-your-result-might-not-match-payslip" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why Your Result Might Not Match Your Payslip
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                This is genuinely one of the most common frustrations with salary calculators and there's usually a specific reason behind the gap rather than the tool simply being wrong.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none not-prose">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 font-semibold">Your tax code isn't standard.</strong>{" "}
                    <span>Most people are on 1257L, giving the full Personal Allowance. If your code is different, perhaps due to a benefit in kind or unpaid tax from a previous year, your allowance and result will differ from a generic calculation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 font-semibold">Your pension is set up differently than the calculator assumed.</strong>{" "}
                    <span>Salary sacrifice, relief at source and net pay arrangements all affect your taxable income differently, even for the same contribution amount.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 font-semibold">You have more than one job.</strong>{" "}
                    <span>Calculators generally assume a single income source unless told otherwise, which can throw off the result if your Personal Allowance is split across employers.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 font-semibold">You're partway through the tax year.</strong>{" "}
                    <span>A one off bonus, a pay rise mid year or an overpayment being corrected can all create a temporary mismatch that resolves itself over the following months.</span>
                  </div>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                If your figures are consistently out by a noticeable amount, it's worth checking these one by one rather than assuming the calculator got it wrong.
              </p>

              {/* Section 5 — Common Misconceptions */}
              <h2 id="common-misconceptions" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Common Misconceptions About Salary Calculators in UK
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-4 mb-8 not-prose">
                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Scale className="h-5 w-5 text-amber-600 shrink-0" />
                    "Crossing into the higher rate band means my whole salary gets taxed at 40 percent."
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm m-0">
                    This is one of the most persistent misunderstandings out there. The UK uses a progressive system, so only the portion of your income within each band is taxed at that band's rate. Earning £51,000 doesn't mean all £51,000 is taxed at 40 percent, only the amount above the £50,270 threshold is.
                  </p>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                    "The calculator's figure is exact."
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm m-0">
                    It's a close estimate based on the assumptions you've given it. Bonuses, benefits in kind, share schemes and non standard tax codes can all shift the real number, sometimes meaningfully.
                  </p>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-amber-600 shrink-0" />
                    "One calculator works for everyone."
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm m-0">
                    As covered above, a standard employee calculator and a contractor take home pay calculator are built around entirely different tax treatments. Using the wrong type gives you a confidently wrong answer rather than a rough one.
                  </p>
                </div>
              </div>

              {/* Section 6 — Why Standard Calculators Don't Work for Contractors */}
              <h2 id="why-standard-calculators-dont-work-for-contractors" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why Standard Calculators Don't Work for Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                If you're{" "}
                <Link to="/services/contractor-accountants" className="text-amber-700 font-semibold hover:underline">
                  contracting
                </Link>{" "}
                through your own limited company, a standard salary calculator will give you a genuinely misleading number, not just a slightly imprecise one. Here's why.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Most contractors don't take their income as a straightforward salary. They pay themselves a modest salary and take the rest as dividends, which are taxed at different rates to employment income and don't attract National Insurance in the same way. A calculator built for PAYE employees simply has no way to model that structure.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                IR35 status changes everything further. If a contract is inside IR35, tax and National Insurance are deducted at source in a way that mimics employment, even though you're still operating through a limited company. If it's outside IR35, your company is paid gross and you manage the salary and dividend split yourself. These two scenarios produce noticeably different take home figures from the exact same contract value, and a generic calculator has no field for IR35 status at all.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                On top of that, contractors can claim legitimate business expenses against company income in a way employees generally can't, which further changes the real, final number. If you want the full picture on how this plays out financially, our guide to{" "}
                <Link to="/inside-vs-outside-ir35" className="text-amber-700 font-semibold hover:underline">
                  inside versus outside IR35
                </Link>{" "}
                walks through worked examples at different contract values.
              </p>

              {/* Section 7 — How a Contractor Accountant Gets You a More Accurate Number */}
              <h2 id="how-a-contractor-accountant-helps" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How a Contractor Accountant Gets You a More Accurate Number
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                A contractor accountant can build your actual take home figure around your real circumstances rather than a generic assumption, factoring in your IR35 status, your salary and dividend split, your allowable expenses and your specific tax position. This matters more than it might seem, since the gap between a rough calculator estimate and your genuine take home pay can run into thousands of pounds a year once dividends and IR35 status are properly accounted for.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Contractors working in and around Bristol in particular benefit from an accountant who understands local client rates and industry norms, rather than relying on a national average built into a generic tool. Our{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 font-semibold hover:underline">
                  contractor accountant services
                </Link>{" "}
                cover exactly this, building a realistic pay picture around your actual contract rather than a rough estimate.
              </p>

              {/* Section 8 — FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-4 mb-12 not-prose">
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

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950 text-white rounded-2xl p-8 my-12 shadow-xl border border-amber-500/20 text-center sm:text-left not-prose">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-display">
                    Need Help Working Out Your True Contractor Take Home Pay?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get in touch with our specialist Bristol contractor accountants for a personalized, IR35-aware pay calculation and fixed-fee tax advice.
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
                        Try Tax Calculator
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout >
    </>
  );
};

export default WhatIsSalaryCalculatorUK;
