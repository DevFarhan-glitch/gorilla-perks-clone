import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ChevronDown,
  HelpCircle,
  Calculator,
  ArrowRight,
  AlertCircle,
  PoundSterling,
  Briefcase,
  Clock3,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "what-does-annual-salary-mean", title: "What Does Annual Salary Mean?" },
  { id: "hourly-rate-to-annual-salary", title: "Hourly Rate to Annual Salary: How to Work It Out" },
  { id: "annual-to-hourly-rate", title: "Annual Salary to Hourly Rate: How to Work It Out" },
  { id: "monthly-to-annual-salary", title: "How to Calculate Your Annual Salary From a Monthly Salary" },
  { id: "part-time-annual-salary", title: "How to Calculate Your Annual Salary If You Work Part Time" },
  { id: "overtime-bonuses-irregular", title: "Overtime, Bonuses or Irregular Hours" },
  { id: "common-mistakes", title: "Common Mistakes When Calculating Annual Salary in the UK" },
  { id: "self-employed-contractors", title: "How Self-Employed Contractors Estimate Their Annual Income" },
  { id: "worked-example", title: "A Worked Example" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    question: "How do you calculate your annual salary from an hourly rate?",
    answer:
      "Multiply your hourly rate by the hours you work each week, then multiply that figure by the number of weeks you work in a year, typically 52 for a standard salaried employee with paid holiday.",
  },
  {
    question: "How do you calculate your annual salary from a monthly salary?",
    answer:
      "Multiply your monthly salary by 12. Avoid multiplying a weekly figure by four, since this produces a slightly inaccurate result.",
  },
  {
    question: "How is the annual salary calculated for part time work?",
    answer:
      "Take the full time equivalent salary and multiply it by your actual hours divided by the standard full time hours for that role.",
  },
];

const workedExampleRows = [
  { step: "Weekly pay", calc: "£18 × 30 hours", result: "£540" },
  { step: "Annual salary", calc: "£540 × 46 weeks", result: "£24,840" },
];

const mistakeItems = [
  {
    title: "Assuming 52 working weeks when unpaid leave applies.",
    desc: "If you take genuinely unpaid time off, your real annual earnings will be lower than a straight 52 week calculation suggests.",
  },
  {
    title: "Multiplying a weekly figure by four to get a monthly one.",
    desc: "This consistently underestimates the correct monthly amount because most months are slightly longer than four weeks.",
  },
  {
    title: "Ignoring pension contributions or salary sacrifice arrangements when comparing job offers.",
    desc: "These reduce your taxable salary even though the advertised annual figure stays the same.",
  },
  {
    title: "Treating a single good or bad week as typical when income varies.",
    desc: "Average over a longer period for a more realistic figure rather than using one representative week.",
  },
];

const HowDoYouCalculateAnnualSalaryUK = () => {
  const [activeSection, setActiveSection] = useState("what-does-annual-salary-mean");
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
    "headline": "How Do You Calculate Your Annual Salary in UK? 2026 Guide",
    "description": "Work out your annual salary from an hourly rate, monthly pay, part time hours or contract income, with formulas and real examples.",
    "image": "https://henleazetaxconsultancy.com/annual-salary-calculation.png",
    "author": {
      "@type": "Organization",
      "name": "Henleaze Tax Consultancy",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Henleaze Tax Consultancy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://henleazetaxconsultancy.com/logo.jpg",
      },
    },
    "datePublished": "2026-08-18",
    "dateModified": "2026-08-18",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>How Do You Calculate Your Annual Salary in UK? 2026 Guide</title>
        <meta
          name="description"
          content="Work out your annual salary from an hourly rate, monthly pay, part time hours or contract income, with formulas and real examples."
        />
        <meta
          name="keywords"
          content="how do you calculate your annual salary in UK, annual salary calculation UK, hourly rate to annual salary, monthly salary to annual, part time annual salary, self employed annual income"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/how-do-you-calculate-your-annual-salary-in-uk" />
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
              Annual Salary Calculation UK: A Simple Guide for Every Pay Type
            </h1>

            {/* Subtitle / Desc */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Work out your annual salary from an hourly rate, monthly pay, part time hours or contract income, with formulas and real examples.
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
                8 min read
              </span>
            </div>

            {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
            <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3">
              <img
                src="/annual-salary-calculation.png"
                alt="Annual salary calculation UK guide showing payroll, tax, National Insurance and take-home pay"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Opening Paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Your annual salary is your total pay for a full year before any deductions and how you calculate it depends on how you're actually paid. If you're on an hourly rate, you multiply your rate by your weekly hours and by the weeks you work in a year. If you're paid monthly, you simply multiply your monthly figure by twelve. Part time work, overtime and self employed income each need a slightly different approach, which is what this guide walks through.
            </p>

            {/* Highlight Box / Quote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 text-lg leading-relaxed mb-10 bg-amber-50/50 py-3 rounded-r-lg">
              "Your annual salary is the gross figure you'd earn over twelve months, before Income Tax, National Insurance, or pension contributions are taken off."
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

              {/* Section 1 — What Does Annual Salary Mean */}
              <h2 id="what-does-annual-salary-mean" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Does Annual Salary Mean?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Annual salary is the gross figure you'd earn over twelve months, before Income Tax, National Insurance, or pension contributions are taken off. It's the number you'll usually see quoted in a job advert or written into a contract and it's also the figure used as the starting point for most <Link to="/what-is-salary-calculator-uk" className="text-amber-700 font-semibold hover:underline">UK salary calculators</Link>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                One thing worth knowing early: for a standard salaried employee, annual salary already includes your paid holiday. UK employees are entitled to a minimum of  <Link to="https://www.gov.uk/holiday-entitlement-rights" className="text-amber-700 font-semibold hover:underline">5.6 weeks of paid annual leave</Link>, so you're not expected to work all 52 weeks of the year to earn your full salary, the time off is already built in and paid.
              </p>

              {/* CTA Box - Tax Calculator */}
              <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500 text-white rounded-full shrink-0">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Try Our Calculator</h4>
                    <p className="text-sm text-gray-600">Use our instant, up to date UK tax calculator to see your net pay breakdown.</p>
                  </div>
                </div>
                <Link to="/calculator" className="shrink-0">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">
                    Try Tax Calculator
                  </Button>
                </Link>
              </div>

              {/* Section 2 — Hourly Rate to Annual Salary */}
              <h2 id="hourly-rate-to-annual-salary" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Hourly Rate to Annual Salary: How to Work It Out
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                If you know your hourly rate and want to work out what that comes to over a year, the formula is straightforward.
              </p>

              {/* Formula box */}
              <div className="my-6 p-5 bg-gray-900 rounded-xl border border-gray-700 not-prose">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">Formula</p>
                <p className="text-white font-semibold text-base leading-relaxed">
                  Annual salary = hourly rate &times; hours worked per week &times; weeks worked per year
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                For a typical full time employee on paid holiday, use 52 weeks, since holiday time is paid and already counted in. For example, someone earning £15 an hour, working 37.5 hours a week, for 52 paid weeks, would work out as follows:
              </p>

              {/* Calculation steps */}
              <div className="space-y-3 mb-8 not-prose">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-gray-950 font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 m-0">£15 &times; 37.5 hours = <span className="text-amber-700">£562.50 a week</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-gray-950 font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 m-0">£562.50 &times; 52 weeks = <span className="text-amber-700">£29,250 a year</span></p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you're on a casual or zero hours arrangement where unpaid time off is genuinely unpaid, you'd use the actual number of weeks you expect to work instead of 52, since you're only being paid for hours actually worked.
              </p>

              {/* Section 3 — Annual to Hourly */}
              <h2 id="annual-to-hourly-rate" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Annual Salary to Hourly Rate: How to Work It Out
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                The same formula works in reverse if you're starting from an annual figure and want to know your effective hourly rate.
              </p>

              {/* Formula box */}
              <div className="my-6 p-5 bg-gray-900 rounded-xl border border-gray-700 not-prose">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">Formula</p>
                <p className="text-white font-semibold text-base leading-relaxed">
                  Hourly rate = annual salary &divide; weeks worked per year &divide; hours worked per week
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Taking the same numbers from above, £29,250 divided by 52 weeks gives £562.50 a week and £562.50 divided by 37.5 hours gives £15 an hour. This is a common question on its own, particularly when comparing a day rate or a new job offer against your current hourly earnings.
              </p>

              {/* Section 4 — Monthly to Annual */}
              <h2 id="monthly-to-annual-salary" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Calculate Your Annual Salary From a Monthly Salary
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                This is the simplest conversion of the three, but it's also where a common mistake creeps in.
              </p>

              {/* Formula box */}
              <div className="my-6 p-5 bg-gray-900 rounded-xl border border-gray-700 not-prose">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">Formula</p>
                <p className="text-white font-semibold text-base leading-relaxed">
                  Annual salary = monthly salary &times; 12
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                If your monthly pay is £2,500, your annual salary is £30,000. Straightforward. The mistake people make is multiplying a weekly figure by four to estimate a monthly amount, or a monthly figure by four to estimate a weekly one. Since months vary in length and the year doesn't divide evenly into four week blocks, this shortcut produces a slightly wrong number.  We've covered the correct approach in detail in <Link to="https://henleazetaxconsultancy.com/how-to-calculate-monthly-salary-in-uk" className="text-amber-700 font-semibold hover:underline"> our guide to calculating your monthly salary</Link>.

              </p>

              <div className="my-8 p-5 bg-amber-50/70 rounded-xl border border-amber-200 not-prose">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Common Mistake: The &times;4 Shortcut</h4>
                    <p className="text-gray-700 leading-relaxed text-sm m-0">
                      Never multiply a weekly figure by four to get a monthly amount, or vice versa. Most months contain more than four weeks, so this shortcut always underestimates the correct figure. Always multiply monthly by 12 for the annual total.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 — Part Time */}
              <h2 id="part-time-annual-salary" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Calculate Your Annual Salary If You Work Part Time
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Part time annual salary is usually calculated as a proportion of the equivalent full time salary, based on the hours you actually work.
              </p>

              {/* Formula box */}
              <div className="my-6 p-5 bg-gray-900 rounded-xl border border-gray-700 not-prose">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">Formula</p>
                <p className="text-white font-semibold text-base leading-relaxed">
                  Part time annual salary = full time equivalent salary &times; (your hours &divide; full time hours)
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                For example, if a full time role is advertised at £30,000 a year based on a 37.5 hour week, and you're working 22.5 hours a week, your pro rata salary would be:
              </p>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80 mb-6 not-prose">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-gray-950 font-bold text-sm shrink-0">
                  <PoundSterling className="h-4 w-4" />
                </div>
                <p className="text-base font-semibold text-gray-900 m-0">
                  £30,000 &times; (22.5 &divide; 37.5) = <span className="text-amber-700">£18,000 a year</span>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This calculation matters beyond just knowing your own pay. It's also the basis employers use for pro rata holiday entitlement, pension contributions and statutory pay calculations, so it's worth getting right if you're comparing offers or checking your own figures.
              </p>

              {/* Section 6 — Overtime, Bonuses, Irregular */}
              <h2 id="overtime-bonuses-irregular" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Calculate Your Annual Salary With Overtime, Bonuses or Irregular Hours
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* ── SECOND IMAGE ─────────────────────────────────────────── */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3 not-prose">
                <img
                  src="/how-to-calculate-your-annual-salary.png"
                  alt="Calculating annual salary with overtime, bonuses and irregular working hours in the UK"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Base salary calculations assume consistent hours, but a lot of real pay includes variable elements that don't fit neatly into a single formula.
              </p>

              <div className="space-y-4 mb-8 not-prose">
                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <Clock3 className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Regular Overtime</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Estimate your average extra hours over a few months, then add that value to your base annual figure using your normal or overtime hourly rate.
                  </p>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Bonuses</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Usually treated separately from your base salary rather than folded into it, since they're not guaranteed year to year.
                  </p>
                </div>

                <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                      <Calculator className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Irregular Hours</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed m-0">
                    Common in shift work or zero hours contracts. Best estimated by averaging your actual earnings over three to six months and multiplying that average by twelve, rather than assuming a single typical week represents the whole year.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If your income varies significantly month to month, an average based estimate will give you a more realistic annual figure than a formula built around a single fixed week.
              </p>

              {/* Section 7 — Common Mistakes */}
              <h2 id="common-mistakes" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Common Mistakes When Calculating Annual Salary in the UK
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none not-prose">
                {mistakeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 font-semibold">{item.title}</strong>{" "}
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Section 8 — Self-Employed Contractors */}
              <h2 id="self-employed-contractors" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Self-Employed Contractors Estimate Their Annual Income
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Annual income for self employed contractors works differently to a standard salary calculation, since there's no fixed weekly or monthly figure to multiply. A common approach is to estimate your realistic billable days for the year first, then multiply that by your day rate.
              </p>

              <div className="space-y-3 mb-8 not-prose">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-gray-950 font-bold text-sm shrink-0">1</div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 m-0">Start from 52 weeks</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-0 leading-relaxed">Subtract weekends, typically bringing you to around 260 working days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-gray-950 font-bold text-sm shrink-0">2</div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 m-0">Subtract holiday and time between contracts</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-0 leading-relaxed">Very few contractors bill every single working day of the year.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-gray-950 font-bold text-sm shrink-0">3</div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 m-0">Realistically billable: 220 to 230 days</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-0 leading-relaxed">This is a typical contracting pattern. Multiply your day rate by this figure for a rough annual income estimate.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                This gives you contract revenue rather than take home pay. Your actual take home figure depends heavily on your IR35 status and how you structure salary and dividends, which we've covered in detail in our guide to{" "}
                <Link to="/inside-vs-outside-ir35" className="text-amber-700 font-semibold hover:underline">
                  inside versus outside IR35
                </Link>
                .
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you want a proper picture of your annual income as a contractor, our{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 font-semibold hover:underline">
                  contractor accountant services
                </Link>
                {" "}can build a realistic figure around your actual contract pattern rather than a rough estimate.
              </p>

              {/* Section 9 — Worked Example */}
              <h2 id="worked-example" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                A Worked Example
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Bringing a few of these together, imagine someone working 30 hours a week at £18 an hour, for 46 paid weeks a year after accounting for a period of unpaid leave.
              </p>

              {/* Table */}
              <div className="overflow-x-auto mb-8 not-prose">
                <table className="w-full border-collapse text-sm text-gray-700 my-4 bg-white rounded-xl shadow-sm border border-gray-200">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">Step</th>
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">Calculation</th>
                      <th className="text-left px-5 py-3.5 font-bold text-gray-900">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {workedExampleRows.map((row, i) => (
                      <tr key={i} className="hover:bg-amber-50/30">
                        <td className="px-5 py-3.5 font-semibold text-gray-900">{row.step}</td>
                        <td className="px-5 py-3.5 font-medium text-gray-700">{row.calc}</td>
                        <td className="px-5 py-3.5 font-bold text-amber-700">{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg mb-8 not-prose">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed m-0 text-sm">
                    That £24,840 is the gross annual figure, before tax, National Insurance, or pension contributions are applied. Use our{" "}
                    <Link to="/calculator" className="text-blue-700 font-semibold hover:underline">
                      tax calculator
                    </Link>
                    {" "}to see what you'd actually take home from this figure.
                  </p>
                </div>
              </div>

              {/* Gov.uk link */}
              <p className="text-gray-700 leading-relaxed mb-8">
                For the most up to date Income Tax rates and thresholds used in these calculations, check{" "}
                <a
                  href="https://www.gov.uk/income-tax-rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  the current rates on gov.uk
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                {" "}directly.
              </p>

              {/* Section 10 — FAQs */}
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
                    Get in touch with our specialist Bristol contractor accountants for a personalised, IR35-aware pay calculation and fixed-fee tax advice.
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
        <NearbyLocationsSection />

      </Layout>
    </>
  );
};

export default HowDoYouCalculateAnnualSalaryUK;
