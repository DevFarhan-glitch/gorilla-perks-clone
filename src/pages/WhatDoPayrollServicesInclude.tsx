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
  Layers,
  Receipt,
  FileSpreadsheet
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "core-services", title: "The Core Services Included in a Standard Payroll Service" },
  { id: "payroll-calculations-rti", title: "Payroll Calculations and RTI Submissions" },
  { id: "payslips-records", title: "Payslips and Employee Records" },
  { id: "pension-auto-enrolment", title: "Pension Auto-Enrolment" },
  { id: "starter-leaver", title: "Starter and Leaver Processing" },
  { id: "statutory-payments", title: "Statutory Payments" },
  { id: "year-end-reporting", title: "Year End Reporting" },
  { id: "extras", title: "What's Often Billed as an Extra" },
  { id: "single-director", title: "What This Looks Like for a Single Director Limited Company" },
  { id: "payroll-bristol", title: "Payroll Services in Bristol" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const coreServicesTable = [
  {
    service: "Payroll calculations",
    covers: "Gross to net pay, Income Tax, employee and employer National Insurance",
  },
  {
    service: "RTI submissions",
    covers: "Full Payment Submission sent to HMRC on or before each payday",
  },
  {
    service: "Payslips",
    covers: "Digital or printed payslips issued to every employee each pay run",
  },
  {
    service: "PAYE setup and management",
    covers: "Registering a new PAYE scheme and keeping it running correctly",
  },
  {
    service: "Pension auto-enrolment",
    covers: "Assessing eligibility, enrolling qualifying staff, processing contributions",
  },
  {
    service: "Starter and leaver processing",
    covers: "New starter checklists, P45s for leavers, updating HMRC records",
  },
  {
    service: "Statutory payments",
    covers: "Sick pay, maternity, paternity, adoption and shared parental pay",
  },
  {
    service: "Year end reporting",
    covers: "P60s for employees, final submission for the tax year",
  },
];

const faqsData = [
  {
    question: "What's included in a standard payroll service?",
    answer:
      "A standard payroll service covers pay calculations, RTI submissions to HMRC, payslips, pension auto-enrolment, starter and leaver processing, statutory payments, and year end reporting.",
  },
  {
    question: "Is pension auto-enrolment included in payroll services?",
    answer:
      "Processing contributions into an existing pension scheme is usually included as standard, but setting up a brand new scheme from scratch is sometimes billed as an additional service.",
  },
  {
    question: "Do payroll services handle sick pay and maternity pay?",
    answer:
      "Yes, statutory payments including sick pay, maternity, paternity and adoption pay are normally included as part of a standard payroll service, calculated according to current HMRC rules.",
  },
  {
    question: "What isn't usually included in a payroll service?",
    answer:
      "P11D benefits in kind reporting, setting up a new pension scheme, court order deductions and CIS subcontractor payments are commonly billed separately, so it's worth confirming this before comparing prices.",
  },
  {
    question: "Do single director companies need the same payroll service as a business with staff?",
    answer:
      "The core requirements are similar, but director National Insurance is calculated differently, and getting the salary level right matters for pension qualification, so it's worth using a provider who understands this specifically.",
  },
];

const WhatDoPayrollServicesInclude = () => {
  const [activeSection, setActiveSection] = useState("core-services");
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
    headline: "Payroll Services in Bristol: What Is Actually Included",
    description:
      "Payroll services include PAYE, RTI, payslips, pension auto-enrolment, statutory pay and year end reporting. See what is included and what costs extra.",
    image: "https://henleazetaxconsultancy.com/payroll serices.png",
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
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/what-do-payroll-services-include",
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
        name: "Payroll Services in Bristol: What Is Actually Included",
        item: "https://henleazetaxconsultancy.com/what-do-payroll-services-include",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Payroll Services in Bristol: What Is Actually Included</title>
        <meta
          name="description"
          content="Payroll services include PAYE, RTI, payslips, pension auto-enrolment, statutory pay and year end reporting. See what is included and what costs extra."
        />
        <meta
          name="keywords"
          content="payroll services in bristol, payroll services UK, what do payroll services include, PAYE payroll, RTI submissions, pension auto-enrolment, statutory sick pay, payroll Bristol"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/what-do-payroll-services-include" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED HERO IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/payroll services.png"
            alt="what-do-payroll-services-include-for-small-businesses"
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
                Bristol Payroll Guide
              </span>
            </div>

            {/* Main Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What Do Payroll Services Include for Small Businesses?
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
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
                9 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                A <a href="https://henleazetaxconsultancy.com/services/payroll-and-hr-services" className="text-amber-700 underline hover:text-amber-900">standard payroll service</a> calculates and pays your employees, deducts the right tax and National Insurance, reports everything to HMRC on time and keeps the records to prove it. Most providers also handle pension auto-enrolment, payslips and statutory payments such as sick pay and maternity pay as part of the core service.
              </p>

              <p>
                What varies a lot more than people expect is where the line sits between what's included and what's billed separately. This guide goes through everything a payroll service typically covers, what's often an add on rather than a core feature, and what payroll looks like specifically for a small business or a single director limited company in Bristol.
              </p>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Payroll Guide
              </h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`text-left w-full text-sm px-3 py-1.5 rounded-lg transition-all duration-150 ${activeSection === section.id
                            ? "bg-amber-100 text-amber-800 font-semibold"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Core Services */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="core-services" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                The Core Services Included in a Standard Payroll Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most UK payroll services, whether that's an accountant, a dedicated payroll bureau, or a piece of software, cover the same core ground.
              </p>

              {/* Core services table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 w-1/3">
                        Core service
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                        What it covers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {coreServicesTable.map((row, idx) => (
                      <tr
                        key={row.service}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                      >
                        <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">
                          {row.service}
                        </td>
                        <td className="px-4 py-3 text-gray-600 border-b border-gray-100">
                          {row.covers}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Below, each of these is worth understanding in a bit more detail, since the depth behind each one varies between providers.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Payroll Calculations and RTI */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="payroll-calculations-rti" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Payroll Calculations and RTI Submissions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every pay run, a payroll service works out exactly what each employee is owed, and what needs to be deducted before it reaches them. This includes Income Tax based on the employee's tax code, employee National Insurance, and the employer's own National Insurance contribution on top.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This information has to reach HMRC through Real Time Information, specifically a Full Payment Submission sent on or before payday. Missing this deadline carries a monthly penalty, so a reliable service should never leave this to the last minute.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Payslips and Records */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="payslips-records" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Payslips and Employee Records
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every employee is legally entitled to a payslip showing gross pay, deductions and net pay for each pay period. Most payroll services now deliver this digitally through a portal or app, though a printed option should still be available if needed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Alongside payslips, a proper payroll service keeps accurate records of hours worked, pay rates, tax codes and any changes throughout the year, records you're required to keep for at least three years after the tax year they relate to.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Pension Auto-Enrolment */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="pension-auto-enrolment" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Pension Auto-Enrolment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Employers must assess every worker for auto-enrolment, enrol those who qualify, and manage ongoing contributions, and this applies even to businesses with just one or two staff. A proper payroll service handles this as standard, including the three yearly re-enrolment exercise that catches a lot of small businesses out if nobody's tracking it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                What's less commonly included, and worth asking about directly, is choosing or setting up the pension scheme itself. Some providers handle this end to end, others expect you to already have a scheme in place and simply process the contributions.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Starter and Leaver */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="starter-leaver" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Starter and Leaver Processing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When someone joins or leaves, there's a specific set of administrative steps a payroll service should handle. For new starters, that means collecting a starter checklist, setting up the correct tax code, and registering them on your PAYE scheme. For leavers, that means processing a final payment correctly and issuing a P45.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Getting this wrong is one of the more common sources of tax code errors further down the line, so it's worth confirming this is genuinely built into your provider's standard process rather than something you're expected to chase up yourself.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Statutory Payments */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="statutory-payments" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Statutory Payments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Statutory payments cover sick pay, maternity, paternity, adoption and shared parental pay, and a payroll service should calculate these correctly based on current rules. The rules changed for statutory sick pay from 6 April 2026, it's now payable from the first day of sickness rather than after waiting days, the lower earnings limit has been removed, and payment is the lower of 80 percent of average weekly earnings or the flat weekly rate. A payroll service still working to the old rules will get this wrong.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Year End Reporting */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="year-end-reporting" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Year End Reporting
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At the end of each tax year, a payroll service issues P60s to every employee showing their total pay and deductions for the year, and submits final reporting to HMRC. This is generally included as standard, though some providers charge a separate year end fee, so it's worth confirming this upfront rather than assuming it's automatically covered.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Extras */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="extras" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                What's Often Billed as an Extra, Not Included as Standard
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A cheaper headline price doesn't always mean a cheaper total cost. A few services commonly sit outside a standard payroll package, even with reputable providers.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  "P11D benefits in kind reporting, for employees receiving benefits like a company car or private healthcare, is often billed separately from standard payroll processing.",
                  "Setting up a new pension scheme from scratch, rather than just processing contributions into an existing one, is sometimes an additional project fee.",
                  "Court order and attachment of earnings deductions, which require specific calculation, aren't always included as standard.",
                  "CIS deductions, relevant for construction industry subcontractors, need a different process to standard PAYE and aren't automatically covered by every payroll service.",
                  "Ad hoc advice, such as a one off question about a complex situation, sometimes falls outside a fixed payroll fee and gets billed by the hour.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                Before comparing two quotes, it's worth asking exactly what's included in each, since a lower price sometimes just means a narrower scope.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Single Director */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="single-director" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                What This Looks Like for a Single Director Limited Company
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Payroll for a business with one employee, the director, looks different to payroll for a team, and a few things matter here that a general small business payroll guide doesn't usually cover.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  "Director National Insurance is calculated on an annual basis, not the standard employee method, so payroll software needs to be set correctly for this.",
                  "Setting the right salary level matters for more than tax. Too low, and it may not count as a qualifying year for the State Pension. Getting this right is a planning decision, not just a payroll calculation.",
                  "Employment Allowance usually isn't available where the director is the sole employee paid above the secondary threshold.",
                  "A month with no salary payment may still need reporting to HMRC, otherwise a payment that isn't due can end up being chased.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                We've covered the fuller detail on this, along with common payroll mistakes small businesses make, in our guide to <Link to="/common-payroll-problems" className="text-amber-700 underline hover:text-amber-900">common payroll problems small businesses face</Link>.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Payroll in Bristol */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="payroll-bristol" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Payroll Services in Bristol
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bristol has a genuine mix of options for payroll support, from dedicated local payroll bureaus to accountancy firms offering it as part of a wider service. If you'd like to see real local providers rather than a generic national platform, our comparison of <Link to="/payroll-consulting-firms-in-bristol" className="text-amber-700 underline hover:text-amber-900">payroll consulting firms in Bristol</Link> covers several genuine options across the city.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're based in Bristol and work specifically with contractors, sole traders and small limited companies, and payroll for a single director company is something we handle as standard, alongside the wider tax picture, including <Link to="/what-is-ir35-uk" className="text-amber-700 underline hover:text-amber-900">IR35 status</Link> where it applies. If you want to see exactly what's included, our <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">contractor accountant services</Link> page covers it in full.
              </p>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: FAQs */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="faqs" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {faqsData.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="flex items-center justify-between w-full text-left px-5 py-4 bg-white hover:bg-gray-50 transition-colors duration-150"
                    >
                      <span className="font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* SECTION: Final Words */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <section id="final-words" className="mb-16">
              <h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Final Words
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A proper payroll service covers far more than simply paying staff on time, calculations, HMRC reporting, pensions, statutory payments and year end filing all need to happen correctly and on schedule. Knowing what's genuinely included, and what's commonly an extra, makes it much easier to compare providers fairly rather than just comparing headline prices.
              </p>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────── */}
            <div
              className="rounded-2xl overflow-hidden relative mb-12"
              style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(245,158,11,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="relative px-8 py-12 md:px-14 md:py-14 text-center">
                <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5">
                  Need Payroll Support?
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Ready to talk to a specialist?
                </h2>
                <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  Whether you need payroll for a single director company or a growing team, Henleaze Tax Consultancy offers fixed-fee payroll support tailored to small businesses in Bristol.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg"
                  >
                    Get a Free Consultation
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
                  >
                    View Our Pricing
                  </Link>
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

export default WhatDoPayrollServicesInclude;
