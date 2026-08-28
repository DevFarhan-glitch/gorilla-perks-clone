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
  Users,
  Briefcase,
  Calculator,
  ArrowRight
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "what-is-tax-planning", title: "What is Tax Planning, Exactly?" },
  { id: "why-2026-27-pivotal-year", title: "Why 2026/27 is a Pivotal Year for Tax Planning" },
  { id: "who-needs-tax-planning", title: "Who Needs Tax Planning?" },
  { id: "key-areas-tax-planning", title: "Key Areas of Tax Planning" },
  { id: "when-should-you-start", title: "When Should You Start Tax Planning?" },
  { id: "why-work-with-local-bristol-specialist", title: "Why Work With a Local Bristol Specialist" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "Is tax planning the same as tax avoidance?",
    answer:
      "No. Tax planning uses reliefs and allowances as Parliament intended, while tax avoidance involves bending the rules in ways that HMRC often challenges."
  },
  {
    question: "Do I need tax planning if I only have one source of income?",
    answer:
      "Often yes, since even a single income source can benefit from pension contributions, allowance use or the timing of certain decisions."
  },
  {
    question: "How much does tax planning cost?",
    answer:
      "It depends entirely on your circumstances, so we do not publish fixed pricing but we are happy to provide a tailored quote once we understand your situation."
  },
  {
    question: "Why is HMRC compliance activity increasing in 2026?",
    answer:
      "HMRC is investing in better data matching across banks, property records and online marketplaces, alongside recruiting significantly more compliance staff, which means undeclared income is far more likely to be picked up than in previous years."
  },
  {
    question: "How will the 2027 rental income tax changes affect landlords?",
    answer:
      "From April 2027, rental income will be taxed at new rates of 22, 42 and 47 percent across the basic, higher and additional bands, a two point rise on current rates, which is prompting many landlords to review their portfolios now."
  },
  {
    question: "How often should my tax plan be reviewed?",
    answer:
      "At least once a year, and again after any significant life or business change, since both tax rules and personal circumstances shift regularly."
  }
];

const WhatIsTaxPlanningUKGuide = () => {
  const [activeSection, setActiveSection] = useState("what-is-tax-planning");
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
    "headline": "What is Tax Planning? A Complete Guide for UK Individuals & Businesses",
    "description": "What is tax planning and why does it matter more in 2026/27? A practical guide for Bristol individuals, landlords and business owners.",
    "image": "https://henleazetaxconsultancy.com/tax-planning-services.png",
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
    "datePublished": "2026-08-01",
    "dateModified": "2026-08-07"
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
        <title>Tax Planning Guide for UK Individuals & Businesses</title>
        <meta
          name="description"
          content="What is tax planning and why does it matter more in 2026/27? A practical guide for Bristol individuals, landlords and business owners."
        />
        <meta
          name="keywords"
          content="what is tax planning, tax planning guide UK, 2026/27 tax planning, Bristol tax planning, tax planning for landlords, UK income tax planning"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/what-is-tax-planning-uk-guide" />
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
                Tax Planning Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What is Tax Planning? A Complete Guide for UK Individuals &amp; Businesses
            </h1>

            {/* Subtitle / Desc */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What is tax planning and why does it matter more in 2026/27? A practical guide for Bristol individuals, landlords and business owners.
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
                src="/what-is-tax-planning.jpeg"
                alt="Tax Planning Guide for UK Individuals & Businesses"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>


            {/* Opening Paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <Link
                to="/henleazetaxconsultancy.com/services/tax-planning"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white border border-gray-200 hover:border-amber-500 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm hover:shadow-md"
              > Tax planning </Link>means organising your finances so you pay only the tax you legally owe, not a penny more. It is completely legal, HMRC does not discourage it and in the 2026-27 tax year it matters more than it has in a long time. Between rising compliance activity, changing rental income rules and shifting reliefs, the decisions you make this year could shape your tax position for several years to come.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Most people only think about tax once a year, usually around the self assessment deadline and by then a lot of the useful options have already closed. Real tax planning happens earlier than that, quietly, throughout the year, well before a deadline forces your hand.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This guide walks through what tax planning actually involves, who it is for and why 2026 -27 is turning out to be a genuinely pivotal year rather than just another routine tax cycle.
            </p>

            {/* Highlight Box / Quote */}
            <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-700 text-lg leading-relaxed mb-10 bg-amber-50/50 py-3 rounded-r-lg">
              "Tax planning means organising your finances so you pay only the tax you legally owe, not a penny more. Real tax planning happens quietly throughout the year, well before a deadline forces your hand."
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

              {/* Section 1 */}
              <h2 id="what-is-tax-planning" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What is Tax Planning, Exactly?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                At its simplest, tax planning is the legal arrangement of your income, assets and financial decisions to make sure you are not paying more tax than necessary. It uses the reliefs and allowances Parliament has deliberately built into the system, things like pension contributions, the annual ISA allowance and capital gains exemptions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                People often confuse tax planning with tax avoidance, or worse, tax evasion. They are not the same thing.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm text-gray-700 my-4">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Term</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">What it means</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-900">Legal status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-amber-50/30">
                      <td className="px-4 py-3.5 font-semibold text-amber-800">Tax planning</td>
                      <td className="px-4 py-3.5">Using reliefs and allowances as intended, timing decisions sensibly</td>
                      <td className="px-4 py-3.5 font-semibold text-emerald-700 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        Fully legal and encouraged
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Tax avoidance</td>
                      <td className="px-4 py-3.5">Bending the rules or using aggressive schemes to reduce tax</td>
                      <td className="px-4 py-3.5 font-medium text-amber-700 flex items-center gap-1.5">
                        <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" />
                        Legal but often challenged by HMRC
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3.5 font-semibold text-gray-800">Tax evasion</td>
                      <td className="px-4 py-3.5">Deliberately hiding income or falsifying records</td>
                      <td className="px-4 py-3.5 font-semibold text-red-700 flex items-center gap-1.5">
                        <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                        Illegal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-10">
                Good tax planning sits firmly in the first column. It is not about finding loopholes, it is about not leaving money on the table that Parliament never intended you to hand over in the first place.
              </p>

              {/* Section 2 */}
              <h2 id="why-2026-27-pivotal-year" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why 2026/27 is a Pivotal Year for Tax Planning
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Every year, accountants say "this is an important year for tax planning." Most years, that is a bit of an exaggeration. This year, it genuinely is not, and here is why.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-amber-600 shrink-0" />
                    HMRC compliance activity is ramping up
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    HMRC is investing heavily in digital compliance and data matching technology, drawing on information from banks, property transactions, online marketplaces and even overseas tax authorities to identify undeclared income. As part of this push, HMRC <Link
                      to="https://www.gov.uk/government/publications/summary-of-tax-update-2026-simplification-modernisation-and-fairness/tax-update-2026-simplification-modernisation-and-fairness-summary"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white border border-gray-200 hover:border-amber-500 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm hover:shadow-md"
                    >plans to recruit thousands more compliance officers over the coming years</Link> , with over 2,000 already in post. In practical terms, the days of quietly under-reporting rental income or side earnings and hoping it goes unnoticed are pretty much over.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-amber-600 shrink-0" />
                    Rental income tax is rising from April 2027
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    This is one that a lot of <Link
                      to="https://henleazetaxconsultancy.com/services/landlord-accountants"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white border border-gray-200 hover:border-amber-500 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm hover:shadow-md"
                    >Bristol landlords </Link> have not clocked yet. From 6 April 2027, new income tax rates will apply specifically to rental income, at 22 percent, 42 percent and 47 percent across the basic, higher and additional rate bands. That is a two percentage point rise on current rates. If you are a landlord thinking about selling a property or restructuring how you hold it, 2026 27 may be your last full tax year before the higher rates apply, which makes this the year to actually have that conversation rather than putting it off again.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-amber-600 shrink-0" />
                    Home working tax relief is disappearing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    From April 2026, employees can no longer claim the flat rate home working tax relief, worth roughly £312 a year, directly through their tax code. It is a small number individually, but it affects a huge number of Bristol's hybrid and remote workers who have been claiming it automatically for years without a second thought.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you work through your own limited company, it is also worth keeping an eye on the <Link
                  to="https://henleazetaxconsultancy.com/what-are-ir35-rules"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white border border-gray-200 hover:border-amber-500 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm hover:shadow-md"
                >current IR35 rules</Link>, since your employment status directly affects how much of this tax planning applies to you versus an employer.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                There is a rare bit of good news too. Alongside all the tightening, the government has also proposed simplifying inheritance tax reporting requirements in cases where no tax is actually due, which should mean less unnecessary paperwork for trustees and individuals dealing with smaller estates. Not everything this year is about paying more or filing more, some of it is genuinely about reducing admin.
              </p>

              <p className="text-gray-700 leading-relaxed mb-10 font-medium text-gray-900 bg-amber-50/60 p-4 rounded-lg border border-amber-200">
                Taken together, these changes mean 2026-27 is less about ticking the usual annual boxes and more about making a handful of real decisions before the window to act cheaply closes.
              </p>

              {/* Section 3 */}
              <h2 id="who-needs-tax-planning" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Who Needs Tax Planning?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Tax planning is not just for wealthy individuals or large companies. If any of the below applies to you, it is worth a proper conversation.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Business owners &amp; directors</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Decisions on how you extract profit, whether through salary, dividends or pension contributions, directly affect how much tax you and your company pay.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Landlords &amp; property investors</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Particularly relevant this year given the rental income changes from April 2027 and the ongoing Section 24 mortgage interest restriction.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Families &amp; individuals</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Anyone thinking about retirement, passing on wealth, or simply making sure they are using their full allowances each year.
                  </p>
                </div>

                <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:border-amber-400 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Growing businesses &amp; contractors</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    As turnover and profit increase, so does the value of getting your structure right early, rather than fixing it retrospectively.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-10">
                It is worth saying plainly, none of this requires you to be especially wealthy or to run a large operation. A sole trader earning a modest income, a landlord with a single buy to let property, or an employee with a workplace pension can all benefit from a proper review. The value of tax planning tends to scale with how many moving parts your finances have, not with how much money is involved.
              </p>

              {/* Section 4 */}
              <h2 id="key-areas-tax-planning" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Key Areas of Tax Planning
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                Tax planning is not one single thing, it covers several overlapping areas depending on your circumstances.
              </p>

              {/* SECOND IMAGE INSERTION */}
              <div className="my-10 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-50 p-2 sm:p-4">
                <img
                  src="/key-areas-of-tax-planning.png"
                  alt="Key Areas of Tax Planning Services"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>


              <div className="space-y-6 my-8">
                <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Income Tax Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Look at how your income is structured, <Link
                      to="https://henleazetaxconsultancy.com/dividend-tax-rates-2026-27"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white border border-gray-200 hover:border-amber-500 px-4 py-2 rounded-full transition-all duration-200 group shadow-sm hover:shadow-md"
                    >including salary, dividends</Link>, pension contributions and allowances, to make sure you are not tipping unnecessarily into a higher tax band.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Corporation Tax Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Covers how a company manages its profits, reliefs and allowances, including timing of investment and expenditure to make the most of available reliefs before they change.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Capital Gains Tax Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    It’s about understanding the tax implications of selling assets or property before you sell, not after, so you can make an informed decision and use available exemptions properly.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inheritance Tax Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Focuses on protecting your estate for the next generation, using reliefs, gifting strategies and trust structures, all of which work far better when set up well in advance rather than at the last minute.
                  </p>
                </div>

                <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pension and Retirement Tax Planning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ties your pension contributions and withdrawals into your wider tax position, since the rules around how pensions interact with inheritance tax are shifting in the coming years.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                These areas rarely sit in isolation. A decision about how you extract profit from your business, for example, has a knock on effect on your personal income tax position, your pension contributions and potentially your eventual inheritance tax exposure. Good tax planning looks at the whole picture rather than optimising one area in a way that quietly creates a problem somewhere else.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you would like a closer look at how your business structure affects your tax position, our guide on{" "}
                <Link to="/contractor-accountant-services-in-the-uk" className="text-amber-700 font-semibold hover:underline">
                  contractor accounting services
                </Link>{" "}
                covers this in more detail, and our{" "}
                <Link to="/what-is-ir35-uk" className="text-amber-700 font-semibold hover:underline">
                  IR35 guide for UK contractors
                </Link>{" "}
                is useful if you work through your own limited company.
              </p>

              <div className="my-8 p-6 bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500 text-white rounded-full shrink-0">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Not sure where you currently stand?</h4>
                    <p className="text-sm text-gray-600">Our free tax calculator gives you a quick, no obligation estimate of your position before you go any further.</p>
                  </div>
                </div>
                <Link to="/calculator" className="shrink-0">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow">
                    Try Tax Calculator
                  </Button>
                </Link>
              </div>

              {/* Section 5 */}
              <h2 id="when-should-you-start" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                When Should You Start Tax Planning?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                The honest answer is before you make a decision, not after. Tax planning works best ahead of things like selling an asset, taking on a new directorship, retiring or passing on wealth. Once a transaction has happened, most of your options disappear.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                This year specifically, if you are a landlord weighing up whether to sell before the April 2027 rental income changes or a business owner deciding how to extract profit given the current corporation tax bands, the planning window is now, not next spring when the changes are already in effect.
              </p>

              <p className="text-gray-700 leading-relaxed mb-10">
                As a general habit, review your tax position at least once a year and again after any major life or business change.
              </p>

              {/* Section 6 */}
              <h2 id="why-work-with-local-bristol-specialist" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Why Work With a Local Bristol Specialist
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                National platforms and app based tax services have their place, but they rarely understand the specifics of the Bristol property market, the mix of independent businesses across the city, or the practical realities facing local landlords with BS postcode portfolios. Our{" "}
                <Link to="https://henleazetaxconsultancy.com/tax-planning-services-explained" className="text-amber-700 font-semibold hover:underline">
                  tax planning services
                </Link>{" "}
                are built specifically around that local context, rather than a one size fits all national template.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4 font-semibold text-gray-900">
                Working with a Bristol based specialist means:
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 pl-0 list-none">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Someone who understands the local property market, including the concentration of student lets and HMOs across parts of the city</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Direct access to the person actually doing your planning, rather than being routed through a call centre or a rotating point of contact</span>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>Familiarity with the local business landscape, from independent retailers to growing contractor and consultancy businesses across the South West</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-10">
                If you would like to talk through your own situation, you can{" "}
                <Link to="/contact" className="text-amber-700 font-semibold hover:underline">
                  get in touch with our team
                </Link>{" "}
                for a tailored quote based on your circumstances.
              </p>

              {/* Section 7 - FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
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

              {/* Section 8 - Final Words */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Tax planning is not about clever tricks or aggressive schemes, it is simply about making sure you are not paying more than you legally have to and making decisions with enough notice to actually benefit from them. Given how much is changing this year, from rising compliance checks to the rental income rate rise coming in 2027, 2026 27 is a genuinely good year to have that conversation rather than waiting until the changes have already landed.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                If you would like advice tailored to your own circumstances, speak to our tax planning team for a conversation built around your goals, not a generic checklist.
              </p>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-950 text-white rounded-2xl p-8 my-12 shadow-xl border border-amber-500/20 text-center sm:text-left">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-display">
                    Ready to Optimize Your Tax Position in 2026/27?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get in touch with our Bristol tax planning experts today for a tailored, no-obligation discussion tailored to your personal or business goals.
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

export default WhatIsTaxPlanningUKGuide;
