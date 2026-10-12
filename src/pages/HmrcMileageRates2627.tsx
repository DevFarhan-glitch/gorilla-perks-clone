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
  Car,
  Building2,
  FileText,
  ArrowRight,
  Calculator,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "current-hmrc-mileage-rates", title: "What are the Current HMRC Mileage Rates?" },
  { id: "ten-thousand-mile-threshold", title: "How Does the 10,000-Mile Threshold Work?" },
  { id: "previous-vs-current-rates", title: "HMRC Mileage Rates: Previous vs Current" },
  { id: "mileage-allowances-employees", title: "How Do Mileage Allowances Work for Employees?" },
  { id: "self-employed-mileage", title: "Can Self-Employed People Claim Mileage Expenses?" },
  { id: "limited-company-directors", title: "Mileage Claims for Limited Company Directors and Contractors" },
  { id: "qualifying-journeys", title: "Which Business Journeys Qualify for Mileage Claims?" },
  { id: "record-keeping", title: "What Records Should You Keep for Mileage Claims?" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "final-thoughts", title: "Final Thoughts" },
];

const faqsData = [
  {
    question: "What is the HMRC mileage rate for 2026/27?",
    answer:
      "The rate for cars and vans is 55p per mile for the first 10,000 business miles, followed by 25p for each additional mile. Motorcycles qualify for 24p and bicycles for 20p per mile under the employee mileage allowance rules.",
  },
  {
    question: "Is the 55p mileage rate backdated?",
    answer:
      "Yes. The increase applies retrospectively from 6 April 2026, so it covers eligible business journeys made from the beginning of the tax year.",
  },
  {
    question: "Does the mileage allowance apply to company cars?",
    answer:
      "The approved mileage rates discussed in this guide relate to the use of your own vehicle. Company-car drivers use different rules for business fuel and electricity costs, including HMRC's advisory fuel rates where applicable.",
  },
  {
    question: "Can I claim mileage for an electric car?",
    answer:
      "Yes. The approved mileage rates can apply when you use your own electric car for qualifying business journeys. The same first-tier and subsequent-mile rates apply to eligible cars, regardless of whether they use petrol, diesel or electricity.",
  },
  {
    question: "Can I claim mileage for travelling to work?",
    answer:
      "Ordinary commuting between home and a permanent workplace does not normally qualify. Travel to a temporary workplace may qualify, depending on the circumstances and HMRC's workplace rules.",
  },
  {
    question: "Can I claim mileage if my employer pays less than 55p per mile?",
    answer:
      "You may be eligible for Mileage Allowance Relief on the difference between the approved amount and the qualifying amount your employer paid. Eligibility and the amount of relief depend on your circumstances.",
  },
  {
    question: "Do I need to keep a mileage log?",
    answer:
      "Yes. Keep accurate records of the date, journey details, distance and business purpose. If you claim employee mileage tax relief, HMRC may also require the start and end postcodes for each journey.",
  },
  {
    question: "Will HMRC increase the mileage rates again in 2027?",
    answer:
      "No further increase for the 2027/28 tax year should be assumed unless it is officially announced. The published 55p first-tier car and van rate applies to the tax year ending on 5 April 2027. Check HMRC's guidance for subsequent updates.",
  },
];

const HmrcMileageRates2627 = () => {
  const [activeSection, setActiveSection] = useState("current-hmrc-mileage-rates");
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
    "headline": "HMRC Mileage Rates 2026/27: Updated Rates, Rules and Examples",
    "description": "Check the latest HMRC mileage rates for cars, vans, motorcycles and bicycles. Learn who can claim, how the rates work and which journeys qualify.",
    "image": "https://henleazetaxconsultancy.com/hmrc milaege.png",
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
    "datePublished": "2026-10-12",
    "dateModified": "2026-10-12"
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
        <title>HMRC Mileage Rates 2026/27: Updated Rates and Rules</title>
        <meta
          name="description"
          content="Check the latest HMRC mileage rates for cars, vans, motorcycles and bicycles. Learn who can claim, how the rates work and which journeys qualify."
        />
        <meta
          name="keywords"
          content="HMRC mileage rates 2026/27, approved mileage rates, mileage allowance relief, business mileage, HMRC mileage allowance, 55p mileage rate, employee mileage allowance"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/hmrc-mileage-rates-2026-27" />
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
                HMRC Tax Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              HMRC Mileage Rates 2026/27: Updated Rates, Rules and Examples
            </h1>

            {/* Subtitle / Desc */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Check the latest HMRC mileage rates for cars, vans, motorcycles and bicycles. Learn who can claim, how the rates work and which journeys qualify.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                9 min read
              </span>
            </div>

            {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
            <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3">
              <img
                src="/hmrc milaege.png"
                alt="HMRC Mileage Rates 2026/27: Updated Rates, Rules and Examples"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Opening Paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The HMRC mileage rate for cars and vans increased from 45p to 55p per mile for the first 10,000 business miles from 6 April 2026. The rate drops to 25p for each additional mile. Motorcycles qualify for 24p per mile, while bicycles qualify for 20p per mile under the employee mileage allowance rules.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The increase was announced in May 2026 and applies retrospectively from the beginning of the tax year. It is the first increase to the main car and van rate since 2011.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These rates help employees, employers and eligible self-employed people calculate business mileage expenses. However, the rules differ depending on whether you use your own vehicle as an employee, operate as a sole trader or run a limited company.
            </p>

            {/* Highlight Box / Quote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 text-lg leading-relaxed mb-10 bg-amber-50/50 py-3 rounded-r-lg">
              "This guide explains the current rates, worked examples, eligible journeys, tax relief and record-keeping requirements, including what contractors and company directors need to consider."
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

              {/* Section 1 — Current Rates */}
              <h2 id="current-hmrc-mileage-rates" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What are the Current HMRC Mileage Rates?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                HMRC publishes approved mileage rates for people using their own vehicles for business travel. The applicable rate depends on the vehicle type and, for cars and vans, the number of business miles covered during the tax year.
              </p>

              {/* Rates Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 my-4">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Vehicle</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Business mileage</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Rate per mile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Car or van</td>
                      <td className="px-4 py-3.5">First 10,000 miles</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                          <TrendingUp className="h-4 w-4 shrink-0" />
                          55p
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Car or van</td>
                      <td className="px-4 py-3.5">Above 10,000 miles</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">25p</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Motorcycle</td>
                      <td className="px-4 py-3.5">All business miles</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">24p</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Bicycle</td>
                      <td className="px-4 py-3.5">All business miles</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">20p</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Passenger supplement</td>
                      <td className="px-4 py-3.5">Each eligible fellow employee carried in a car or van</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">5p</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The rates above apply for the tax year running from 6 April 2026 to 5 April 2027. The passenger supplement is separate from the driver's mileage allowance and applies when the relevant conditions are met.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The increase to the car and van rate is confirmed in{" "}
                <a
                  href="https://www.gov.uk/guidance/mileage-allowance-payments-480-appendix-3"
                  className="text-amber-700 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HMRC's official mileage allowance guidance
                </a>
                . The lower car and van rate, along with the motorcycle and bicycle rates, remains unchanged.
              </p>

              <div className="my-8 p-5 bg-amber-50/60 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed font-medium text-gray-900 m-0">
                    These figures are not a compulsory reimbursement amount for every employer. Employers can choose their own reimbursement rates, but tax treatment depends on how much they pay and the applicable HMRC rules.
                  </p>
                </div>
              </div>

              {/* Section 2 — 10,000-Mile Threshold */}
              <h2 id="ten-thousand-mile-threshold" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Does the 10,000-Mile Threshold Work?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                The higher car and van rate applies to the first 10,000 qualifying business miles in the tax year. Each additional mile is calculated at 25p.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                For example, if you drive 12,000 qualifying business miles in your own car, the calculation is:
              </p>

              {/* Worked Example Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 my-4">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Calculation</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 text-gray-700">First 10,000 miles × 55p</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-900">£5,500</td>
                    </tr>
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 text-gray-700">Remaining 2,000 miles × 25p</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-900">£500</td>
                    </tr>
                    <tr className="bg-amber-50 hover:bg-amber-50/80">
                      <td className="px-4 py-3.5 font-bold text-amber-800">Total approved amount</td>
                      <td className="px-4 py-3.5 font-bold text-amber-800">£6,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                For 8,000 business miles, the calculation is 8,000 × 55p, giving £4,400.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>The threshold relates to business mileage, not your total annual driving. Personal journeys and ordinary commuting should not be included in a business mileage claim.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>For employee mileage allowance payments, the tax calculation uses the first 10,000 business miles and the subsequent-mile rate. Employers should also apply the separate National Insurance rules where relevant.</span>
                </li>
              </ul>

              {/* Section 3 — Previous vs Current */}
              <h2 id="previous-vs-current-rates" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                HMRC Mileage Rates: Previous vs Current
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* Second image */}
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-3">
                <img
                  src="/Milaege rates.png"
                  alt="HMRC Mileage Rates: Previous vs Current"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The main change is the increase in the first-tier car and van rate. The other rates have remained the same.
              </p>

              {/* Rate Comparison Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 my-4">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Vehicle</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">2025/26 rate</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">2026/27 rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Car or van, first 10,000 miles</td>
                      <td className="px-4 py-3.5 text-gray-500">45p</td>
                      <td className="px-4 py-3.5">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                          <TrendingUp className="h-4 w-4 shrink-0" />
                          55p
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Car or van, above 10,000 miles</td>
                      <td className="px-4 py-3.5 text-gray-500">25p</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">25p</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Motorcycle</td>
                      <td className="px-4 py-3.5 text-gray-500">24p</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">24p</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Bicycle</td>
                      <td className="px-4 py-3.5 text-gray-500">20p</td>
                      <td className="px-4 py-3.5 font-semibold text-gray-700">20p</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                The previous 45p rate applied to eligible journeys made before 6 April 2026. The new 55p rate applies retrospectively from that date, so eligible journeys made earlier in the current tax year are included.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                For someone covering 10,000 qualifying business miles in a car or van, the difference between the old and new first-tier rates is £1,000. For mileage above that threshold, the additional miles continue to be calculated at 25p.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The government has also said it will review mileage rates beyond the current tax year. That does not mean a further increase for 2027/28 has already been confirmed. Check HMRC's published guidance for any later changes.
              </p>

              {/* Section 4 — Employees */}
              <h2 id="mileage-allowances-employees" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Do Mileage Allowances Work for Employees?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                If you use your own vehicle for business journeys as an employee, your employer can reimburse you using the approved mileage rates.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                The tax treatment depends on the amount paid:
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Paid at the approved rate:</strong> The qualifying payment can be made without Income Tax on the approved amount.</span>
                </li>
                <li className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Paid below the approved rate:</strong> You may be eligible to claim Mileage Allowance Relief on the shortfall through HMRC.</span>
                </li>
                <li className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Paid above the approved rate:</strong> The excess may be taxable. National Insurance treatment must be considered separately under the relevant rules.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Employers are not generally required to reimburse employees at the full approved mileage rate. The amount paid depends on the employer's expenses policy and employment arrangements.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                If your employer reimbursed eligible journeys at 45p before the increase was announced, ask the payroll or finance team whether an additional payment is due. Any adjustment should be calculated using the applicable rules and the total amount already reimbursed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                If you receive less than the approved amount, you can check your eligibility and claim through{" "}
                <a
                  href="https://www.gov.uk/tax-relief-for-employees/vehicles-you-use-for-work"
                  className="text-amber-700 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HMRC's guidance on vehicles used for work
                </a>
                . Employees completing Self Assessment should make their claim through their tax return where required.
              </p>

              {/* Section 5 — Self-Employed */}
              <h2 id="self-employed-mileage" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Can Self-Employed People Claim Mileage Expenses?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Yes. Eligible sole traders and certain partnerships can use HMRC's simplified vehicle expenses to calculate allowable business mileage deductions instead of calculating the actual running costs of a vehicle.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For eligible cars and goods vehicles, the simplified mileage rates are 55p per mile for the first 10,000 business miles and 25p per mile after that. Motorcycles qualify for 24p per business mile under this method.
              </p>

              {/* Sole Trader Example Box */}
              <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-amber-600 shrink-0" />
                  Sole trader worked example
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A sole trader who drives 11,000 eligible business miles in a car could calculate the deduction as follows:
                </p>
                <ul className="space-y-2 text-gray-700 pl-0 list-none">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>First 10,000 miles × 55p = <strong>£5,500</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>Remaining 1,000 miles × 25p = <strong>£250</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-1" />
                    <span>Total mileage deduction = <strong>£5,750</strong></span>
                  </li>
                </ul>
              </div>

              <div className="my-6 p-5 bg-blue-50/60 rounded-xl border border-blue-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed m-0">
                    This is a deduction when calculating taxable business profits, not a payment from HMRC of £5,750.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>The simplified rate covers the vehicle's running costs, such as fuel, servicing, repairs and insurance. You cannot claim these costs separately for the same vehicle when using the simplified mileage method.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Other allowable travel expenses, such as parking, may be claimed separately.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Once you use simplified mileage expenses for a particular vehicle, you generally need to continue using that method for as long as you use the vehicle in the business.</span>
                </li>
              </ul>

              {/* Section 6 — Limited Company Directors */}
              <h2 id="limited-company-directors" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Mileage Claims for Limited Company Directors and Contractors
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                If you operate through a limited company and use your personal car for qualifying company business journeys, the company can generally reimburse you at the approved mileage rates.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The company should record the journey and reimbursement as part of its business records. The rules for a director using a personal vehicle are different from those for a company-owned or company-leased car.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Contractors should pay particular attention to the type of workplace they travel to.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Car className="h-5 w-5 text-amber-600 shrink-0" />
                Travel to client sites
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Travel to a temporary workplace may qualify as business travel, but a journey to a permanent workplace is generally treated as ordinary commuting. The distinction depends on the circumstances rather than simply whether the site belongs to a client.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-amber-600 shrink-0" />
                The 24-month rule
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                A workplace may be treated as permanent when an employee spends, or is expected to spend, at least 40% of their working time there over a period lasting or expected to last more than 24 months. Other rules can also affect whether a workplace is temporary.
              </p>

              <div className="my-8 p-5 bg-amber-50/60 rounded-xl border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed m-0">
                    Contractors should not assume that every client-site journey qualifies. The engagement, expected duration, working pattern and applicable tax rules all matter.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-amber-600 shrink-0" />
                IR35 and travel expenses
              </h3>

              <p className="text-gray-700 leading-relaxed mb-4">
                <Link to="/what-is-ir35-uk" className="text-amber-700 font-semibold hover:underline">IR35</Link> status can affect how travel and other expenses are treated in certain engagements. Contractors working through intermediaries should check the specific rules applying to their circumstances before assuming that a mileage claim is allowable.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For a closer look at employment-status considerations, read our guide to{" "}
                <Link to="/inside-vs-outside-ir35" className="text-amber-700 font-semibold hover:underline">
                  inside versus outside IR35
                </Link>
                .
              </p>

              {/* Section 7 — Qualifying Journeys */}
              <h2 id="qualifying-journeys" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Which Business Journeys Qualify for Mileage Claims?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                A journey must meet the relevant business travel rules to qualify. Not every journey made during a working day is automatically allowable.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Examples of journeys that may qualify include:
              </p>

              <ul className="space-y-3 text-gray-700 mb-6 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Travelling between workplaces for business purposes.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Visiting a client, customer or supplier.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Travelling to a qualifying temporary workplace.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Making a business trip to collect supplies or carry out another necessary business task.</span>
                </li>
              </ul>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <span>Ordinary travel between home and a permanent workplace does not qualify as business mileage under the usual employee rules. Private journeys are also excluded.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                The distinction between temporary and permanent workplaces is especially important for contractors who regularly travel to client sites. Parking charges and other business travel expenses may be claimed separately where the applicable rules permit. They should not be added to the mileage calculation itself.
              </p>

              {/* Section 8 — Record Keeping */}
              <h2 id="record-keeping" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Records Should You Keep for Mileage Claims?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Good mileage records help support your claim and make it easier to calculate the correct amount. HMRC may ask for evidence of the journeys and expenses included in a claim.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                For each business journey, record:
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <FileText className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Date:</strong> When the journey took place.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <FileText className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Start and end points:</strong> The locations travelled between. Employees claiming tax relief should retain the postcode details required by HMRC.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <FileText className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Distance:</strong> The number of business miles travelled.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <FileText className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Business purpose:</strong> For example, the client visit, meeting or work-related task.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <FileText className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Vehicle details:</strong> The vehicle used for the journey.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <FileText className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Mileage total:</strong> A running total to help track the applicable threshold.</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <FileText className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Reimbursement received:</strong> The amount paid by your employer or company, where relevant.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                You can keep these details in a spreadsheet, a mileage-tracking app or another reliable record-keeping system. The important point is that the information is complete and accurate.
              </p>

              <div className="my-6 p-5 bg-blue-50/60 rounded-xl border border-blue-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-700 leading-relaxed m-0 font-medium">Record-retention periods depend on your circumstances:</p>
                    <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                      <li>&#8226; Self-employed people generally need to retain business records for at least <strong>five years</strong> after the 31 January submission deadline for the relevant tax year.</li>
                      <li>&#8226; Limited companies generally need to retain accounting records for <strong>six years</strong> from the end of the financial year to which they relate, subject to exceptions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 9 — FAQ */}
              <h2 id="faq" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
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

              {/* Section 10 — Final Thoughts */}
              <h2 id="final-thoughts" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Thoughts
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                The increase to 55p per mile makes a meaningful difference for employees and eligible businesses that cover substantial business mileage. However, the correct treatment still depends on the vehicle used, the type of journey, the claimant's business structure and the records available to support the claim.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                If you are a contractor, sole trader or limited company director in Bristol, reviewing your mileage records and expense method can help you avoid missed claims and incorrect deductions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Henleaze Tax Consultancy supports individuals, contractors and businesses with tax returns, bookkeeping and business tax matters. Explore our{" "}
                <Link to="/whats-included-in-contractor-accounting" className="text-amber-700 font-semibold hover:underline">
                  contractor accounting services
                </Link>{" "}
                to learn more about the support available.
              </p>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950 text-white rounded-2xl p-8 my-12 shadow-xl border border-amber-500/20 text-center sm:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-display">
                    Need Help With Your Mileage Claims and Expenses?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get in touch with our Bristol tax experts for tailored advice on mileage expenses, contractor accounting and business tax matters.
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                    <Link to="/contact">
                      <Button className="bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200">
                        Book a Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/services/contractor-accountants">
                      <Button variant="outline" className="border-gray-600 text-black hover:bg-gray-800 hover:text-white px-6 py-3 rounded-lg">
                        Contractor Services
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

export default HmrcMileageRates2627;
