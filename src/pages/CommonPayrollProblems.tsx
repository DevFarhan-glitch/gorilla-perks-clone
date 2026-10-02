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
  Layers,
  Receipt
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "common-problems-overview", title: "What are the Most Common Payroll Problems Small Businesses Face?" },
  { id: "wrong-tax-codes", title: "Wrong Tax Codes and National Insurance Categories" },
  { id: "late-rti-paye", title: "Late or Missed RTI Submissions and PAYE Payments" },
  { id: "pension-auto-enrolment", title: "Pension Auto-Enrolment Mistakes" },
  { id: "holiday-and-statutory-pay", title: "Holiday Pay and Statutory Pay Miscalculations" },
  { id: "worker-status", title: "Getting Worker Status Wrong" },
  { id: "poor-record-keeping", title: "Poor Payroll Record Keeping" },
  { id: "payroll-accounts-mismatch", title: "Payroll and Accounts That Don't Match" },
  { id: "directors-and-contractors", title: "Payroll Problems Specific to Directors and Contractors" },
  { id: "what-to-do-mistake", title: "What to Do If You've Already Made a Payroll Mistake" },
  { id: "final-words", title: "Final Words" },
];

const commonPayrollProblemsSummary = [
  {
    problem: "Wrong tax code or NI category",
    cause: "Late starter details, ignoring HMRC notices",
    prevention: "Collect starter details before the first pay run and check HMRC code notices",
  },
  {
    problem: "Late RTI submission",
    cause: "Filing after payday",
    prevention: "Submit on or before payday, every pay run",
  },
  {
    problem: "Late PAYE payment",
    cause: "Cash flow, missed deadline",
    prevention: "Set up a Direct Debit and diarise the 22nd",
  },
  {
    problem: "Auto-enrolment errors",
    cause: "Missed assessments, no re-enrolment",
    prevention: "Assess every pay run and diarise the three year re-enrolment",
  },
  {
    problem: "Holiday and sick pay errors",
    cause: "Outdated rules, irregular hours",
    prevention: "Use current rules and review after each change",
  },
  {
    problem: "Wrong worker status",
    cause: "Assuming invoicing means self-employed",
    prevention: "Assess how the relationship actually works",
  },
  {
    problem: "Poor records",
    cause: "Loose files and spreadsheets",
    prevention: "Store records securely for at least three years",
  },
  {
    problem: "Payroll and accounts mismatch",
    cause: "Two systems, manual reconciling",
    prevention: "Reconcile every month",
  },
];

const rtiLateSubmissionPenalties = [
  {
    employees: "1 to 9",
    penalty: "£100",
  },
  {
    employees: "10 to 49",
    penalty: "£200",
  },
  {
    employees: "50 to 249",
    penalty: "£300",
  },
  {
    employees: "250 or more",
    penalty: "£400",
  },
];

const payeLatePaymentPenalties = [
  {
    defaults: "1 to 3",
    penalty: "1 percent",
  },
  {
    defaults: "4 to 6",
    penalty: "2 percent",
  },
  {
    defaults: "7 to 9",
    penalty: "3 percent",
  },
  {
    defaults: "10 or more",
    penalty: "4 percent",
  },
];



const CommonPayrollProblems = () => {
  const [activeSection, setActiveSection] = useState("common-problems-overview");

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
    headline: "Payroll Problems: Common Mistakes and How to Avoid Them",
    description:
      "Spot the payroll problems that cost small businesses money, what HMRC penalties look like, and what to do if you have already made a mistake.",
    image: "https://henleazetaxconsultancy.com/common payroll problems.png",
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
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/common-payroll-problems",
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
        name: "Payroll Problems: Common Mistakes and How to Avoid Them",
        item: "https://henleazetaxconsultancy.com/common-payroll-problems",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Payroll Problems: Common Mistakes and How to Avoid Them</title>
        <meta
          name="description"
          content="Spot the payroll problems that cost small businesses money, what HMRC penalties look like, and what to do if you have already made a mistake."
        />
        <meta
          name="keywords"
          content="Payroll Problems, common payroll problems UK, HMRC payroll penalties, late RTI submission penalty, auto enrolment errors, small business payroll mistakes Bristol"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/common-payroll-problems" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED HERO IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/common payroll problems.png"
            alt="Common Payroll Problems Small Businesses Face and How to Avoid Them in Bristol"
            className="w-full h-auto max-h-[520px] object-contain bg-gray-50 mx-auto"
          />
        </div>

        {/* ── ARTICLE CONTAINER ────────────────────────────────────────── */}
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
                UK Payroll & Compliance Guide
              </span>
            </div>

            {/* Main Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Common Payroll Problems Small Businesses Face and How to Avoid Them in Bristol
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-amber-600" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-600" />
                September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                8 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                The most common payroll problems small businesses face are wrong tax codes, late Real Time Information submissions, late PAYE payments, pension auto-enrolment mistakes, incorrect holiday and sick pay, and poor record keeping. Almost all of them come down to the same few causes: manual processes, missed deadlines, and out of date information about employees or tax rules.
              </p>

              <p>
                The good news is that most payroll problems are preventable with a few simple checks, and most are fixable if you catch them early. This guide covers the problems that catch small businesses most often, what they cost when they go wrong, how to avoid them and what to do if you've already made a mistake.
              </p>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Payroll Guide
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
              className="prose prose-lg prose-gray max-w-none space-y-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >

              {/* Section 1: What are the Most Common Payroll Problems Small Businesses Face? */}
              <section id="common-problems-overview" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What are the Most Common Payroll Problems Small Businesses Face?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Most{" "}
                  <Link
                    to="/services/payroll-and-hr-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll
                  </Link>{" "}
                  problems fall into eight areas and each one has a predictable cause and a practical fix.
                </p>

                {/* Secondary Image */}
                <div className="my-8 not-prose">
                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-gray-50">
                    <img
                      src="/most common payroll problems.png"
                      alt="What are the Most Common Payroll Problems Small Businesses Face?"
                      className="w-full h-auto object-cover max-h-[460px]"
                    />
                    <div className="p-3.5 bg-gray-50/90 border-t border-gray-200 text-xs sm:text-sm text-gray-500 text-center italic">
                      Key payroll risk areas UK small business owners and directors need to monitor every pay run.
                    </div>
                  </div>
                </div>

                {/* 8 Common Problems Summary Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Problem</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Typical cause</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Best prevention</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base text-gray-700">
                      {commonPayrollProblemsSummary.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white hover:bg-gray-50/80" : "bg-gray-50/50 hover:bg-gray-50"}>
                          <td className="py-3 px-4 font-semibold text-gray-900">{row.problem}</td>
                          <td className="py-3 px-4 text-gray-600">{row.cause}</td>
                          <td className="py-3 px-4 text-gray-800">{row.prevention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: Wrong Tax Codes and National Insurance Categories */}
              <section id="wrong-tax-codes" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Wrong Tax Codes and National Insurance Categories
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  An incorrect tax code or National Insurance category means employees pay too much or too little tax and the error usually only surfaces later. The standard code for most people with a single job is 1257L, but it changes when HMRC issues an updated code or when an employee has more than one income.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Common causes are simple: a starter checklist that arrives late, an HMRC code notice that gets missed or a National Insurance category letter that doesn't match the employee's circumstances. Category letters differ for employees under 21 and for apprentices under 25, for example, so a wrong letter changes how much National Insurance gets deducted.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  To avoid this, collect starter details before the first pay run, check every HMRC code notice when it arrives and review categories whenever an employee's age or circumstances change.
                </p>
              </section>

              {/* Section 3: Late or Missed RTI Submissions and PAYE Payments */}
              <section id="late-rti-paye" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Late or Missed RTI Submissions and PAYE Payments
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Employers must send a Full Payment Submission to HMRC on or before every payday and late filing carries a monthly penalty that depends on the size of your PAYE scheme.
                </p>

                {/* RTI Submission Penalties Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Employees in your PAYE scheme</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Penalty per month of late filing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base text-gray-700">
                      {rtiLateSubmissionPenalties.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white hover:bg-gray-50/80" : "bg-gray-50/50 hover:bg-gray-50"}>
                          <td className="py-3 px-4 font-semibold text-gray-900">{row.employees}</td>
                          <td className="py-3 px-4 font-semibold text-red-600">{row.penalty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  HMRC normally doesn't charge for the first late filing in a tax year and new employers who send their first submission within 30 days of first paying an employee aren't penalised. HMRC also informally tolerates submissions made within three days of payday, but this is a concession rather than a legal right, and repeat use can still lead to penalties. If a submission is more than three months late, an additional penalty of 5 percent of the tax and National Insurance reported late can apply.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Paying PAYE late is a separate problem with a separate penalty. The tax and National Insurance you've deducted is due by the 22nd of the month following the end of the tax month if you pay electronically, or the 19th if you pay by cheque. A tax month runs from the 6th to the 5th.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  According to{" "}
                  <a
                    href="https://www.gov.uk/hmrc-internal-manuals/debt-management-and-banking/dmbm523540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    HMRC's internal manual on late payment penalties
                  </a>
                  , the first late payment in a tax year doesn't count as a default for monthly payers. After that, penalties scale with the number of late payments.
                </p>

                {/* PAYE Late Payment Scale Table */}
                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Late payments in the tax year (monthly payers)</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Penalty on the amount paid late</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base text-gray-700">
                      {payeLatePaymentPenalties.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white hover:bg-gray-50/80" : "bg-gray-50/50 hover:bg-gray-50"}>
                          <td className="py-3 px-4 font-semibold text-gray-900">{row.defaults}</td>
                          <td className="py-3 px-4 font-semibold text-red-600">{row.penalty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Further penalties of 5 percent apply where payments are still unpaid after six months and again after twelve months and interest builds daily on anything outstanding. A Direct Debit for your PAYE payment removes most of the risk.
                </p>
              </section>

              {/* Section 4: Pension Auto-Enrolment Mistakes */}
              <section id="pension-auto-enrolment" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Pension Auto-Enrolment Mistakes
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Employers must assess every worker for auto-enrolment and enrol those who qualify, and even a business with one or two employees can have these duties. The most common mistakes are missing an assessment for a new starter, missing the point at which an existing employee's earnings cross the earnings trigger, paying contributions late and forgetting the re-enrolment exercise that comes round every three years.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These problems are usually quiet for a long time and expensive to unpick later. The Pensions Regulator can issue fixed and escalating penalties for non-compliance, so it's worth building assessments into every pay run rather than treating them as an occasional task. If payroll issues are becoming difficult to manage internally, understanding the difference between{" "}
                  <Link
                    to="/payroll-consulting-vs-outsourced-payroll"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll consulting and outsourced payroll
                  </Link>{" "}
                  can help you decide what type of support you need.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Payroll software with built in auto-enrolment checks helps, as does a diary reminder for your re-enrolment date.
                </p>
              </section>

              {/* Section 5: Holiday Pay and Statutory Pay Miscalculations */}
              <section id="holiday-and-statutory-pay" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Holiday Pay and Statutory Pay Miscalculations
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Holiday and statutory pay errors usually come from rules that have changed or from pay that isn't the same every period. Two areas catch small businesses out most often.
                </p>
                
                <div className="space-y-4 my-6 not-prose">
                  <div className="p-5 bg-amber-50/60 border border-amber-200 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Receipt className="h-5 w-5 text-amber-600 shrink-0" />
                      Holiday pay for irregular hours
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      For leave years starting on or after 1 April 2024, employers can use a 12.07 percent accrual method for workers on irregular hours or part-year contracts. Regular overtime and commission also need to be considered when calculating holiday pay, so basing it on basic salary alone can leave employees underpaid.
                    </p>
                  </div>

                  <div className="p-5 bg-amber-50/60 border border-amber-200 rounded-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                      Statutory sick pay
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      The rules changed on 6 April 2026. According to{" "}
                      <a
                        href="https://www.acas.org.uk/statutory-sick-pay-changes-2026"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        Acas
                      </a>
                      , statutory sick pay is now payable from the first day of sickness, the lower earnings limit has been removed so workers no longer need to earn a minimum amount to qualify, and payment is the lower of 80 percent of average weekly earnings or the flat rate, which is £123.25 a week for 2026 27. Payroll set ups that still apply three waiting days or an earnings threshold will now produce wrong figures.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Getting Worker Status Wrong */}
              <section id="worker-status" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Getting Worker Status Wrong
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Treating someone as self-employed when they should be an employee is one of the most expensive payroll mistakes, because it can mean unpaid PAYE, National Insurance and interest going back several years. Whether someone is an employee depends on how the working relationship actually operates, not on what the paperwork says and not on whether they send you an invoice.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Similar factors to those in our guide to{" "}
                  <Link
                    to="/how-does-ir35-work-in-the-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    how IR35 works
                  </Link>
                  , such as how much control you have over the work and whether the person can send a substitute, feed into employment status more generally. If you're unsure about someone's status, it's worth getting it checked before the first payment rather than after HMRC asks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For businesses that would rather have these responsibilities managed externally,{" "}
                  <Link
                    to="/what-do-payroll-services-include"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll services in Bristol
                  </Link>{" "}
                  can provide support with payroll processing, HMRC reporting and pension administration.
                </p>
              </section>

              {/* Section 7: Poor Payroll Record Keeping */}
              <section id="poor-record-keeping" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Poor Payroll Record Keeping
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  You need to keep payroll records for at least three years after the end of the tax year they relate to, and losing them is a problem the moment HMRC asks for evidence. Spreadsheets on one laptop and paper files in a drawer are the usual culprits.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Storing payroll history in your payroll software or a secure cloud folder, with automatic backups, solves most of this. Keep the records that support each pay run too: starter details, timesheets, pension assessments and any notes explaining a correction.
                </p>
              </section>

              {/* Section 8: Payroll and Accounts That Don't Match */}
              <section id="payroll-accounts-mismatch" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Payroll and Accounts That Don't Match
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  When payroll runs in one system and your accounts run in another, someone has to reconcile the two and that's where errors creep in. Missing journals and figures that don't agree mean your accountant ends up chasing corrections at year end.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The fix is a monthly reconciliation of your payroll report against your accounts, or a payroll setup that feeds your accounting software directly. If this sounds like a burden you'd rather not carry, our guide to{" "}
                  <Link
                    to="/what-is-outsourced-accounting-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    what outsourced accounting is
                  </Link>{" "}
                  and how it works explains how an outside provider can take it on.
                </p>
              </section>

              {/* Section 9: Payroll Problems Specific to Directors and Contractors */}
              <section id="directors-and-contractors" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Payroll Problems Specific to Directors and Contractors
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you run your own limited company, payroll usually means paying yourself a salary and a few problems appear here that standard small business payroll guides rarely mention.
                </p>

                <div className="space-y-4 my-6 not-prose">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block mb-1">Director National Insurance is calculated differently</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">Directors have their own annual earnings period rules, so standard employee settings in payroll software can produce the wrong figure.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block mb-1">A salary set too low can cost you</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">Earnings below the lower earnings limit don't count as a qualifying year for the State Pension unless credits apply, so the right salary is a planning decision rather than a guess.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block mb-1">Employment Allowance usually isn't available</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">A company where the director is the only employee paid above the secondary threshold generally can't claim it.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block mb-1">Months with no salary still need attention</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">If you don't pay anyone in a tax month, you may need to send an Employer Payment Summary to tell HMRC, otherwise HMRC may chase a payment that isn't due.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-3.5">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block mb-1">IR35 can add deemed payments</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        If a contract is{" "}
                        <Link to="/inside-vs-outside-ir35" className="text-amber-700 hover:underline font-semibold">
                          inside IR35
                        </Link>{" "}
                        and your own company is responsible for the deemed payment, it needs to run through payroll properly. Our guide to the{" "}
                        <Link to="/what-are-ir35-rules" className="text-amber-700 hover:underline font-semibold">
                          current IR35 rules
                        </Link>{" "}
                        explains when this applies.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: What to Do If You've Already Made a Payroll Mistake */}
              <section id="what-to-do-mistake" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What to Do If You've Already Made a Payroll Mistake
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you've spotted a payroll error, the sensible approach is to correct it promptly, tell the employee and fix the records, rather than hoping it goes unnoticed. Correcting errors before HMRC finds them generally works in your favour.
                </p>

                <div className="space-y-4 my-6 not-prose">
                  <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                    <div className="bg-amber-100 text-amber-800 font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 text-sm">
                      1
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">Work out what went wrong</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">Identify which employees, which pay periods, and whether the error affects tax, National Insurance, pension or gross pay.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                    <div className="bg-amber-100 text-amber-800 font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 text-sm">
                      2
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">Correct it through your payroll software</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">For the current tax year this is usually done with a corrected Full Payment Submission. Errors from a previous tax year are normally handled through an Earlier Year Update.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                    <div className="bg-amber-100 text-amber-800 font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 text-sm">
                      3
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">Sort out the employee's pay</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">Pay any underpayment as soon as possible. For an overpayment, agree how it will be repaid, ideally in writing, rather than deducting it without warning.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                    <div className="bg-amber-100 text-amber-800 font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 text-sm">
                      4
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">Pay anything you owe</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">If the error means you've underpaid PAYE or National Insurance, settle it and tell HMRC.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                    <div className="bg-amber-100 text-amber-800 font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 text-sm">
                      5
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">Use HMRC's help if your PAYE bill looks wrong</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">Since 31 July 2025, HMRC has provided an online form for employers who need help finding or correcting an error in their PAYE bill.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-start gap-3.5">
                    <div className="bg-amber-100 text-amber-800 font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0 text-sm">
                      6
                    </div>
                    <div>
                      <strong className="text-gray-900 block mb-1">Fix the cause</strong>
                      <span className="text-gray-700 text-sm leading-relaxed">Note what caused the error and put a check in place so it doesn't repeat.</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                  If the underlying issue keeps recurring or your internal processes need reviewing,{" "}
                  <Link
                    to="/payroll-consulting-firms-in-bristol"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    payroll consulting firms in Bristol
                  </Link>{" "}
                  can provide specialist advice on improving payroll procedures and preventing repeat errors.
                </p>
              </section>


              {/* Section 11: Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most payroll problems are avoidable with a few consistent habits: file on or before payday, pay HMRC by the deadline, assess for auto-enrolment every pay run, keep proper records and reconcile your payroll against your accounts each month. When something does go wrong, correcting it quickly is almost always cheaper than leaving it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you're a contractor or run a small limited company and want payroll handled correctly alongside your wider tax position, take a look at our{" "}
                  <Link
                    to="/services/contractor-accountants"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    contractor accountant services
                  </Link>{" "}
                  to see how we can help.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center not-prose shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Need Accurate, Hassle-Free Payroll Support?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  Avoid costly HMRC penalties and late filing fees. Speak to our Bristol chartered accounting team for full-service payroll, auto-enrolment management, and director pay optimisation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md">
                    <Link to="/contact">Get a Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-800 hover:bg-amber-50">
                    <Link to="/services/payroll-and-hr-services">Explore Payroll & HR Services</Link>
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

export default CommonPayrollProblems;
