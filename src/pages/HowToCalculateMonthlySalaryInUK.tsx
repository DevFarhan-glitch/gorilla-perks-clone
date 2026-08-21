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
  CheckCircle2,
  ExternalLink,
  Table as TableIcon,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "what-is-monthly-salary", title: "What is Monthly Salary and How is It Calculated in the UK?" },
  { id: "why-you-shouldnt-multiply-by-four", title: "Why You Shouldn't Multiply Your Weekly Pay by Four" },
  { id: "step-by-step-calculation", title: "How to Calculate Your Monthly Salary Step by Step" },
  { id: "partway-through-month", title: "What If You Start or Leave a UK Job Partway Through a Month?" },
  { id: "hourly-or-day-rate", title: "Working Out Your Monthly Pay From an Hourly Rate or Day Rate" },
  { id: "self-employed-or-contractor", title: "Monthly Income If You're Self Employed or a Contractor" },
  { id: "common-mistakes", title: "Common Mistakes When Calculating Monthly Salary in the UK" },
  { id: "worked-example", title: "A Worked Example" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    question: "How do you calculate monthly salary from annual pay in the UK?",
    answer:
      "Divide your annual salary by 12. This gives your gross monthly salary, before Income Tax, National Insurance and pension contributions are taken off.",
  },
  {
    question: "Why shouldn't I multiply my weekly pay by four to get my monthly salary?",
    answer:
      "A year contains roughly 4.33 weeks per month on average, not exactly 4, since 52 weeks doesn't divide evenly into 12 months. Multiplying by four underestimates your true monthly figure.",
  },
  {
    question: "How is a partial month's salary calculated in the UK?",
    answer:
      "Employers typically divide your monthly salary by either the working days or the total calendar days in that month to get a daily rate, then multiply that by the number of days you actually worked.",
  },
];

const mistakeItems = [
  {
    title: "Multiplying weekly pay by four instead of 4.33, or dividing annual salary by 4 instead of 12.",
    desc: "Both consistently produce an underestimated figure due to ignoring the extra days in each month.",
  },
  {
    title: "Assuming every month pays the same if you're on a day rate or hourly contract.",
    desc: "Unlike a fixed salary, variable income genuinely differs month to month depending on actual days and hours worked.",
  },
  {
    title: "Confusing gross and net monthly salary.",
    desc: "The annual divided by 12 calculation gives you a gross figure. Your actual take home pay will be lower once tax, National Insurance and any pension contributions are deducted.",
  },
  {
    title: "Not checking which part month calculation method your employer uses.",
    desc: "The working day and calendar day methods can produce noticeably different results for a partial month, so don't assume one without checking your contract.",
  },
];

const HowToCalculateMonthlySalaryInUK = () => {
  const [activeSection, setActiveSection] = useState("what-is-monthly-salary");
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
    "headline": "How to Calculate Monthly Salary From Annual Pay (UK)",
    "description": "Most people get this calculation slightly wrong. Here's the correct way to work out monthly salary from annual pay in the UK, with examples.",
    "image": "https://henleazetaxconsultancy.com/how-to-calculate.jpeg",
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
    "datePublished": "2026-08-21",
    "dateModified": "2026-08-21",
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
        <title>How to Calculate Monthly Salary From Annual Pay (UK)</title>
        <meta
          name="description"
          content="Most people get this calculation slightly wrong. Here's the correct way to work out monthly salary from annual pay in the UK, with examples."
        />
        <meta
          name="keywords"
          content="how to calculate monthly salary in UK, calculate monthly salary from annual pay UK, monthly salary calculation UK, annual salary to monthly pay, gross monthly salary UK, salary calculator UK"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/how-to-calculate-monthly-salary-in-uk" />
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
              How to Calculate Your Monthly Salary From Your Annual Pay in the UK
            </h1>

            {/* Subtitle / Desc */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Most people get this calculation slightly wrong. Here's the correct way to work out monthly salary from annual pay in the UK, with examples.
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
                src="/how-to-calculate.jpeg"
                alt="How to calculate monthly salary from annual pay in the UK using a calculator and salary calculation worksheet"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Opening Paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Your monthly salary is your annual salary divided by 12. That's it, that's the calculation for anyone paid a fixed yearly amount and receiving equal payments each month, which covers most salaried employees in the UK. The confusion usually starts when people try a different shortcut, like multiplying a weekly figure by four and end up with a number that doesn't match their actual pay. This guide covers the correct method, why that shortcut goes wrong and how the calculation changes if you're paid hourly, work part time or run your own limited company.
            </p>

            {/* Highlight Box / Quote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 text-lg leading-relaxed mb-8 bg-amber-50/50 py-3 rounded-r-lg">
              "Your monthly salary is your annual salary divided by 12. For most salaried UK employees, this gives your exact gross monthly figure before tax and NI deductions."
            </blockquote>

            {/* CTA Box - Tax Calculator */}
            <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500 text-white rounded-full shrink-0">
                  <Calculator className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Try Our Calculator</h4>
                  <p className="text-sm text-gray-600">Calculate your exact take-home pay, tax and National Insurance deductions instantly.</p>
                </div>
              </div>
              <Link to="/calculator" className="shrink-0">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">
                  Try Our Calculator
                </Button>
              </Link>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">In This Article</h2>
              <nav>
                <ol className="space-y-2">
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
                            activeSection === section.id ? "text-amber-600" : "text-gray-400"
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

              {/* Section 1 — What is Monthly Salary */}
              <h2 id="what-is-monthly-salary" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What is Monthly Salary and How is It Calculated in the UK?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Monthly salary is the gross amount you receive each month before Income Tax, National Insurance or pension contributions are deducted. For most UK employees paid an annual salary in twelve equal installments, the formula is simple.
              </p>

              {/* Formula box */}
              <div className="my-6 p-5 bg-gray-900 rounded-xl border border-gray-700 not-prose">
                <div className="flex items-center gap-3 text-amber-400 mb-2">
                  <PoundSterling className="h-5 w-5" />
                  <span className="font-mono text-sm font-bold uppercase tracking-wider">The Standard Formula</span>
                </div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-wide">
                  Monthly salary = annual salary ÷ 12
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If your annual salary is £36,000, your gross monthly salary is £3,000. This figure stays the same every month, regardless of whether that particular month has 28, 30 or 31 days in it, since you're being paid a twelfth of your yearly total, not a daily rate multiplied by days worked.
              </p>

              {/* Section 2 — Why You Shouldn't Multiply Weekly Pay by Four */}
              <h2 id="why-you-shouldnt-multiply-by-four" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why You Shouldn't Multiply Your Weekly Pay by Four
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                This is genuinely the most common mistake people make and it's worth understanding why it happens.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                A year has 52 weeks, not 48. If you divide 52 by 12, you get roughly 4.33 weeks per month, not 4. Multiplying your weekly pay by four consistently underestimates your true monthly figure, because you're leaving out that extra third of a week hiding in almost every month.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Here's where it gets more confusing. Some{" "}
                <Link to="/what-is-salary-calculator-uk" className="text-amber-700 font-semibold underline hover:text-amber-900">
                  salary calculators
                </Link>{" "}
                use weekly pay multiplied by 4.33 as their method, rather than annual salary divided by 12. For a salaried employee with a fixed annual figure, these two methods should give you the same answer, since 4.33 weeks times 12 comes to roughly 52 weeks, matching the year. The safest and simplest approach, if you already know your annual salary, is to divide by 12 directly rather than working back through weekly figures and risking a rounding error along the way.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you're paid weekly rather than salaried and want to estimate a monthly equivalent, use the 4.33 multiplier rather than 4 or better still, work out your annual figure first using 52 weeks, then divide that by 12.
              </p>

              {/* Section 3 — Step by Step Calculation */}
              <h2 id="step-by-step-calculation" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Calculate Your Monthly Salary Step by Step
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* Step-by-Step Image */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3 not-prose">
                <img
                  src="/how-to-calculate-your-monthly-salary-step-by-step.png"
                  alt="Monthly salary calculation showing annual salary divided by 12 to find gross monthly pay"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Bringing this together, here's the full sequence for someone converting an annual salary into a monthly figure:
              </p>

              <div className="my-6 space-y-4 not-prose">
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-sm shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900">Take your gross annual salary</h4>
                    <p className="text-sm text-gray-600">The total agreed yearly pay figure before any tax or deductions.</p>
                  </div>
                </div>
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-sm shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900">Divide it by 12</h4>
                    <p className="text-sm text-gray-600">This distributes your annual earnings evenly across all 12 calendar months.</p>
                  </div>
                </div>
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-sm shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900">Get your gross monthly salary</h4>
                    <p className="text-sm text-gray-600">This is your gross monthly earnings, before Income Tax, National Insurance and pension contributions are deducted.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For example, someone on an annual salary of £42,000 would calculate their monthly salary as £42,000 divided by 12, which comes to £3,500 a month, gross. Their actual take home figure would then be lower once tax, National Insurance and any pension contributions are applied.
              </p>

              {/* Section 4 — Start or Leave Partway Through a Month */}
              <h2 id="partway-through-month" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What If You Start or Leave a UK Job Partway Through a Month?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                This is where a lot of people get an unexpected pay figure and it's a genuinely common situation, whether you're starting a new role, leaving one or taking a period of unpaid leave.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                UK employers typically use one of two methods to work out a partial month's pay:
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl mb-6 not-prose">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  Method 1: The Working Day Method
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Looks at how many working days are in the month, then pays you for the proportion you actually worked:
                </p>
                <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-700 pl-2">
                  <li>Work out your full monthly salary.</li>
                  <li>Divide it by the number of working days in that specific month.</li>
                  <li>Multiply that daily rate by the number of days you actually worked.</li>
                </ol>
                <div className="mt-3 p-3 bg-white border border-slate-200 rounded-lg text-sm text-gray-600">
                  <strong className="text-gray-800">Example:</strong> If your monthly salary is £3,000 and there are 20 working days in the month, your daily rate is £150. If you only worked 12 of those days, your pay for that month would be £150 × 12 = <span className="font-semibold text-gray-900">£1,800</span>.
                </div>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl mb-6 not-prose">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  Method 2: The Calendar Day Method
                </h3>
                <p className="text-gray-700 text-sm">
                  Works similarly but divides by the total number of days in the month, including weekends, rather than just working days. Different employers use different methods, so if your first or last payslip looks smaller than expected, it's worth checking which approach your employer applies, since the two methods produce slightly different results.
                </p>
              </div>

              {/* Section 5 — Hourly or Day Rate */}
              <h2 id="hourly-or-day-rate" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Working Out Your Monthly Pay From an Hourly Rate or Day Rate
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                If you're not on a fixed annual salary, the calculation needs an extra step first.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>For an hourly rate:</strong> multiply your hourly pay by your weekly hours, then by 52 weeks to get an annual figure, then divide by 12 to reach a monthly estimate. We've covered the hourly to annual conversion in detail, including different working patterns, in our guide to{" "}
                <Link to="/how-do-you-calculate-your-annual-salary-in-uk" className="text-amber-700 font-semibold underline hover:text-amber-900">
                  calculating your annual salary
                </Link>{" "}
                from an hourly rate.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>For a day rate:</strong> common among contractors and freelancers, the calculation is less predictable, since monthly income depends on how many days you actually worked or invoiced that month, rather than a fixed number. Multiplying your day rate by the working days in a typical month gives a rough estimate, but actual monthly income will vary depending on your contract pattern.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Whatever your pay structure, it's worth checking your effective hourly rate periodically against the{" "}
                <a
                  href="https://www.gov.uk/national-minimum-wage-rates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-semibold underline hover:text-amber-900 inline-flex items-center gap-1"
                >
                  National Minimum and National Living Wage rates
                  <ExternalLink className="h-3.5 w-3.5 inline" />
                </a>
                , particularly if you're on a day rate or piece work basis, since these are reviewed and updated each April.
              </p>

              {/* Section 6 — Self Employed or Contractor */}
              <h2 id="self-employed-or-contractor" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Monthly Income If You're Self Employed or a Contractor
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                If you run your own limited company, there's no single monthly salary figure to divide, since your income typically comes from a mix of a modest{" "}
                <Link to="/dividend-tax-rates-2026-27" className="text-amber-700 font-semibold underline hover:text-amber-900">
                  salary and dividends
                </Link>{" "}
                and both can vary depending on how your company performs and how you choose to draw funds.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                A practical approach many contractors use is to work out their expected annual income first, based on realistic billable days and their day rate, then divide that by 12 to give themselves a stable monthly figure to budget against, even if the actual timing of invoices and dividend payments is less predictable in reality. This smooths out the natural unevenness of contract income into something that resembles a regular monthly salary for personal budgeting purposes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Your actual take home figure will also depend heavily on your{" "}
                <Link to="/what-is-ir35-uk" className="text-amber-700 font-semibold underline hover:text-amber-900">
                  IR35
                </Link>{" "}
                status, which affects whether you're taxed similarly to an employee or as a genuine business. We've covered this in detail in our guide to{" "}
                <Link to="/inside-vs-outside-ir35" className="text-amber-700 font-semibold underline hover:text-amber-900">
                  inside versus outside IR35
                </Link>
                . For an accurate monthly figure based on your specific contract and company structure, our{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 font-semibold underline hover:text-amber-900">
                  contractor accountant services
                </Link>{" "}
                can help you plan around real numbers rather than a rough estimate, something we regularly help contractors across Bristol and further afield work through properly.
              </p>

              {/* Section 7 — Common Mistakes */}
              <h2 id="common-mistakes" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Common Mistakes When Calculating Monthly Salary in the UK
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="my-6 space-y-4 not-prose">
                {mistakeItems.map((item, idx) => (
                  <div key={idx} className="p-4 bg-red-50/60 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 8 — A Worked Example */}
              <h2 id="worked-example" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                A Worked Example
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Bringing several of these elements together, here's a full example for someone on a fixed annual salary who joined partway through a month:
              </p>

              {/* Worked Example Table */}
              <div className="my-8 overflow-hidden rounded-xl border border-gray-200 shadow-sm not-prose">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-amber-600 text-white">
                      <th className="py-3 px-4 font-bold text-sm">Step</th>
                      <th className="py-3 px-4 font-bold text-sm">Calculation</th>
                      <th className="py-3 px-4 font-bold text-sm">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">Annual salary</td>
                      <td className="py-3 px-4 text-gray-600">Given</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">£39,000</td>
                    </tr>
                    <tr className="bg-gray-50/60 hover:bg-gray-100/60">
                      <td className="py-3 px-4 font-medium text-gray-900">Full gross monthly salary</td>
                      <td className="py-3 px-4 text-gray-600">£39,000 ÷ 12</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">£3,250</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">Working days in the month</td>
                      <td className="py-3 px-4 text-gray-600">Given</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">22</td>
                    </tr>
                    <tr className="bg-gray-50/60 hover:bg-gray-100/60">
                      <td className="py-3 px-4 font-medium text-gray-900">Daily rate</td>
                      <td className="py-3 px-4 text-gray-600">£3,250 ÷ 22</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">£147.73</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">Days actually worked</td>
                      <td className="py-3 px-4 text-gray-600">Given</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">15</td>
                    </tr>
                    <tr className="bg-amber-50/80 hover:bg-amber-100/70 border-t-2 border-amber-300">
                      <td className="py-3 px-4 font-bold text-amber-900">Partial month pay</td>
                      <td className="py-3 px-4 font-bold text-amber-900">£147.73 × 15</td>
                      <td className="py-3 px-4 font-bold text-amber-900">£2,215.95</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                That final figure, <strong>£2,215.95</strong>, is the gross amount they'd expect to see on their first payslip, before tax and National Insurance are applied.
              </p>

              {/* Section 9 — FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-4 my-8 not-prose">
                {faqsData.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-gray-50/70 hover:bg-amber-50/50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-base">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                          openFaq === idx ? "rotate-180 text-amber-600" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 py-4 bg-white border-t border-gray-100 text-gray-700 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Final CTA Box */}
              <div className="my-12 p-8 bg-gradient-to-br from-navy via-navy/95 to-navy text-white rounded-2xl shadow-xl not-prose">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-3 text-gold">Need Help With Salary &amp; Tax Planning?</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Whether you're calculating take-home pay, transitioning into contracting, or looking for specialist contractor accounting in Bristol and across the UK, Henleaze Tax Consultancy is here to help.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/calculator">
                      <Button className="bg-gold hover:bg-gold-light text-navy font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-200">
                        Try Tax Calculator
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg">
                        Get In Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HowToCalculateMonthlySalaryInUK;
