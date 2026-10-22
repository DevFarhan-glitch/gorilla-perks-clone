import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Check,
  AlertCircle,
  FileText,
  HelpCircle,
  Briefcase,
  Building2,
  ClipboardList,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "intro", title: "What Are the Responsibilities of a Company Director in the UK?" },
  { id: "what-by-law", title: "What Does a Company Director Have to Do by Law?" },
  { id: "seven-duties", title: "What are the Seven Duties of a Company Director?" },
  { id: "filing-record-keeping", title: "What are a Director's Filing and Record Keeping Responsibilities?" },
  { id: "deadlines", title: "What are the Main Filing and Tax Deadlines?" },
  { id: "taking-money-out", title: "What are a Director's Responsibilities When Taking Money Out?" },
  { id: "new-rules-risks", title: "What New Rules and Risks Should Directors Know About?" },
  { id: "failure-consequences", title: "What Happens if a Director Fails to Meet Their Responsibilities?" },
  { id: "delegate", title: "Can You Delegate Director Responsibilities?" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const sevenDutiesData = [
  {
    section: "Section 171: Act within powers",
    meaning: "Follow the company's constitution and use your powers appropriately.",
  },
  {
    section: "Section 172: Promote the success of the company",
    meaning:
      "Act in good faith in the company's interests, considering relevant long term consequences and other statutory factors.",
  },
  {
    section: "Section 173: Exercise independent judgment",
    meaning:
      "Make your own informed decisions rather than simply following someone else's instructions.",
  },
  {
    section: "Section 174: Exercise reasonable care, skill and diligence",
    meaning:
      "Take appropriate care when managing the company and dealing with its finances.",
  },
  {
    section: "Section 175: Avoid conflicts of interest",
    meaning:
      "Avoid situations where personal interests conflict with the company's interests, subject to applicable rules.",
  },
  {
    section: "Section 176: Do not accept improper third party benefits",
    meaning:
      "Do not accept benefits offered because of your position as a director or your actions in that role.",
  },
  {
    section: "Section 177: Declare interests in proposed transactions",
    meaning:
      "Tell the other directors about relevant personal interests in proposed company transactions.",
  },
];

const deadlinesData = [
  {
    requirement: "First accounts",
    deadline:
      "Usually within 21 months of incorporation if the first accounts cover more than 12 months. Specific rules apply.",
  },
  {
    requirement: "Annual accounts",
    deadline: "Nine months after the financial year ends.",
  },
  {
    requirement: "Corporation Tax payment",
    deadline: "Nine months and one day after the accounting period ends.",
  },
  {
    requirement: "Company Tax Return",
    deadline: "Twelve months after the accounting period ends.",
  },
  {
    requirement: "Confirmation statement",
    deadline:
      "At least once every 12 months, with up to 14 days after the review period ends to file.",
  },
];

const faqsData = [
  {
    question: "Are directors responsible for company debts?",
    answer:
      "Not automatically. A limited company is generally responsible for its own debts, although directors may face personal liability in certain circumstances, including some guarantees or insolvency related misconduct.",
  },
  {
    question: "Do the seven directors' duties apply to a sole director?",
    answer:
      "Yes. A sole director must comply with the same general statutory duties as other directors. Having no fellow directors does not remove legal responsibilities.",
  },
  {
    question: "Can an accountant be responsible for late company accounts?",
    answer:
      "An accountant may have contractual or professional responsibilities for the work they undertake, but the director remains legally responsible for ensuring the company meets its filing obligations.",
  },
  {
    question: "How long must a company keep accounting records?",
    answer:
      "For Corporation Tax purposes, records generally need to be retained for at least six years from the end of the relevant financial year, subject to exceptions.",
  },
  {
    question: "What should a director do if the company cannot pay its debts?",
    answer:
      "Seek professional insolvency advice promptly, consider creditors' interests and avoid decisions that could worsen the company's financial position.",
  },
];

const ResponsibilitiesOfACompanyDirectorUK = () => {
  const [activeSection, setActiveSection] = useState("intro");
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
    headline: "Responsibilities of a Company Director UK: Duties and Rules",
    description:
      "Learn the legal responsibilities of a company director in the UK, including Companies House filings, tax, record keeping, dividends and personal liability.",
    image:
      "https://henleazetaxconsultancy.com/UK%20Company%20Director%20Responsibilities.webp",
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
    datePublished: "2026-10-22",
    dateModified: "2026-10-22",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://henleazetaxconsultancy.com/responsibilities-of-a-company-director-uk",
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
        name: "Responsibilities of a Company Director UK",
        item: "https://henleazetaxconsultancy.com/responsibilities-of-a-company-director-uk",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Responsibilities of a Company Director UK: Duties and Rules</title>
        <meta
          name="description"
          content="Learn the legal responsibilities of a company director in the UK, including Companies House filings, tax, record keeping, dividends and personal liability."
        />
        <meta
          name="keywords"
          content="responsibilities of a company director uk, company director duties, directors duties companies act 2006, company director obligations uk, director filing responsibilities"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/responsibilities-of-a-company-director-uk"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/UK Company Director Responsibilities.webp"
            alt="What Are the Responsibilities of a Company Director in the UK?"
            className="w-full h-auto max-h-[520px] object-contain bg-gray-50 mx-auto"
          />
        </div>

        {/* ── ARTICLE WRAPPER ────────────────────────────────────────── */}
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
                Company Director Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Responsibilities of a Company Director UK: Duties and Rules
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              What Are the Responsibilities of a Company Director in the UK? A Complete Legal Guide
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 border-b border-gray-200 mb-8">
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
                10 min read
              </span>
            </div>

            {/* Quick Summary Callout */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-10 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <p className="text-gray-800 leading-relaxed font-medium">
                    The responsibilities of a company director in the UK include running the business in the company's interests, keeping accurate records, filing accounts on time and ensuring the company meets its legal and tax obligations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The Companies Act 2006 also sets out seven general duties that directors must follow. These duties apply whether you run a large business or operate a limited company as a contractor or freelancer.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You can hire an accountant to handle accounts and tax returns, but you remain legally responsible for ensuring the company meets its obligations. Understanding your duties helps you avoid compliance problems and make informed business decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-amber-600" />
                In this guide
              </p>
              <nav className="space-y-2">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-150 flex items-center justify-between ${
                      activeSection === section.id
                        ? "bg-amber-100 text-amber-900 font-semibold"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <span>
                      <span className="text-gray-400 mr-2 text-xs font-mono">{idx + 1}.</span>
                      {section.title}
                    </span>
                    {activeSection === section.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* ── ARTICLE BODY ──────────────────────────────────────── */}
            <div className="space-y-12 text-gray-700 text-base leading-relaxed" style={{ fontFamily: "'Georgia', serif" }}>

              {/* Section 1 — Intro */}
              <section id="intro" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Are the Responsibilities of a Company Director in the UK?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  The responsibilities of a{" "}
                  <Link
                    to="/what-is-a-company-secretary-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company director in the UK
                  </Link>{" "}
                  include running the business in the company's interests, keeping accurate records, filing accounts on time and ensuring the company meets its legal and tax obligations.
                </p>
                <p className="mb-4">
                  The Companies Act 2006 also sets out seven general duties that directors must follow. These duties apply whether you run a large business or operate a limited company as a contractor or freelancer.
                </p>
                <p>
                  You can hire an accountant to handle accounts and tax returns, but you remain legally responsible for ensuring the company meets its obligations. Understanding your duties helps you avoid compliance problems and make informed business decisions.
                </p>
              </section>

              {/* Section 2 — What by law */}
              <section id="what-by-law" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Does a Company Director Have to Do by Law?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  A company director must manage the business responsibly and ensure required information reaches{" "}
                  <Link
                    to="/hmrc-mileage-rates-2026-27"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Companies House and HMRC
                  </Link>{" "}
                  on time. The main responsibilities include:
                </p>

                <ul className="space-y-3 mb-6 not-prose">
                  {[
                    "Following the company's articles of association.",
                    "Keeping accurate accounting and company records.",
                    "Preparing annual accounts and filing them with Companies House.",
                    "Filing Company Tax Returns and paying Corporation Tax when due.",
                    "Reporting relevant changes to Companies House.",
                    "Managing company money and declaring dividends correctly.",
                    "Considering creditors' interests if the company becomes insolvent.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-gray-800 text-sm">
                  <p>
                    <strong>Important:</strong> These responsibilities continue even if the company is dormant or someone else handles its administration.
                  </p>
                </div>
              </section>

              {/* Section 3 — Seven Duties */}
              <section id="seven-duties" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What are the Seven Duties of a Company Director?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  The Companies Act 2006 sets out seven general duties in sections 171 to 177. They explain how directors should exercise their powers, make decisions and manage potential conflicts.
                </p>

                {/* Seven Duties Table */}
                <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Legal duty</th>
                        <th className="py-3.5 px-4 font-semibold">What it means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {sevenDutiesData.map((duty, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                          <td className="py-3.5 px-4 font-semibold text-amber-700 whitespace-nowrap align-top">
                            {duty.section}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {duty.meaning}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 text-sm text-gray-800 mb-4">
                  <p>
                    <strong>For example:</strong> If your company plans to buy services from another business you own, you should consider the conflict of interest rules and make the necessary declarations.
                  </p>
                </div>

                <p>
                  These duties apply even if you are not actively involved in daily operations or someone else influences your decisions. If the company becomes insolvent, directors must also consider creditors' interests.
                </p>
              </section>

              {/* Section 4 — Filing and Record Keeping */}
              <section id="filing-record-keeping" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What are a Director's Filing and Record Keeping Responsibilities?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />

                {/* Second Image */}
                <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 not-prose">
                  <img
                    src="/What are a Director's Filing and Record Keeping Responsibilities.webp"
                    alt="What are a Director's Filing and Record Keeping Responsibilities?"
                    className="w-full h-auto max-h-[460px] object-cover mx-auto"
                  />
                </div>

                <p className="mb-6">
                  Directors must ensure the company keeps appropriate records and submits required documents by the relevant deadlines. Using an accountant does not remove this responsibility.
                </p>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      Annual accounts
                    </h3>
                    <p className="text-gray-700">
                      Private companies normally file accounts with Companies House within nine months of their financial year end.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      Confirmation statement
                    </h3>
                    <p className="text-gray-700">
                      File at least once every 12 months to confirm that the company's registered information is correct.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      Company changes
                    </h3>
                    <p className="text-gray-700">
                      Report relevant changes to directors, registered office details and people with significant control.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      Accounting records
                    </h3>
                    <p className="mb-3 text-gray-700">
                      Keep evidence of income, expenditure, assets, liabilities and financial transactions.
                    </p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                      For Corporation Tax purposes, accounting records generally need to be retained for at least six years from the end of the relevant financial year, although exceptions apply.
                    </p>
                  </div>
                </div>

                <p className="mt-6">
                  Keep business and personal finances separate. A dedicated business bank account and organised records make it easier to prepare accounts, calculate tax and explain company transactions.
                </p>
              </section>

              {/* Section 5 — Deadlines */}
              <section id="deadlines" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What are the Main Filing and Tax Deadlines?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  Directors should keep a calendar of company filing dates and tax payments. For a typical private limited company, the usual deadlines are:
                </p>

                {/* Deadlines Table */}
                <div className="not-prose overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold">Requirement</th>
                        <th className="py-3.5 px-4 font-semibold">Usual deadline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {deadlinesData.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                          <td className="py-3.5 px-4 font-semibold text-gray-900 whitespace-nowrap align-top">
                            {item.requirement}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {item.deadline}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 text-sm text-gray-800">
                  <p>
                    These are general deadlines. Your company's first accounting period and other circumstances can affect the dates. Check the official{" "}
                    <a
                      href="https://www.gov.uk/prepare-file-annual-accounts-for-limited-company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      GOV.UK guide to company accounts and tax returns
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>{" "}
                    and your company's Companies House record.
                  </p>
                </div>
              </section>

              {/* Section 6 — Taking Money Out */}
              <section id="taking-money-out" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What are a Director's Responsibilities When Taking Money Out?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-6">
                  A director must ensure that money taken from the company is recorded correctly as salary,{" "}
                  <Link
                    to="/dividend-tax-rates-2026-27"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    dividends
                  </Link>
                  , a loan repayment or another appropriate transaction. These categories have different legal and tax implications.
                </p>

                <div className="space-y-4 not-prose mb-6">
                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Salary:</strong>
                    <span className="text-sm text-gray-600">
                      The company must meet applicable{" "}
                      <Link
                        to="/services/payroll-and-hr-services"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        payroll
                      </Link>{" "}
                      and PAYE reporting obligations.
                    </span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Dividends:</strong>
                    <span className="text-sm text-gray-600">
                      Dividends can only be paid from profits available for distribution. Keep the relevant directors' minutes and prepare a dividend voucher, even if there is only one director.
                    </span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Directors' loans:</strong>
                    <span className="text-sm text-gray-600">
                      Money withdrawn that is not salary or a dividend may create a loan balance. Record it properly because specific tax rules can apply.
                    </span>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-gray-800 text-sm">
                  <p>
                    <strong>Important:</strong> Do not treat company money as personal income without recording the transaction correctly. If you are unsure how a payment should be classified, seek accounting advice before processing it.
                  </p>
                </div>
              </section>

              {/* Conversion CTA Card */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 my-10 not-prose shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Need Help with Company Director Compliance?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                    Henleaze Tax Consultancy provides clear, fixed fee accounting and tax support to businesses in Bristol and across the UK. Let us handle the filings so you can focus on running your company.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-xl shrink-0 transition-transform active:scale-95 shadow-md"
                >
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Section 7 — New Rules and Risks */}
              <section id="new-rules-risks" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What New Rules and Risks Should Directors Know About?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Directors must comply with applicable Companies House identity verification requirements and should be cautious about offers to become a director of an unfamiliar company.
                </p>

                <div className="space-y-6">
                  {/* Identity verification */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      Identity verification
                    </h3>
                    <p className="mb-3 text-gray-700">
                      Identity verification is now a legal requirement for company directors. Directors should follow the applicable process and provide their Companies House personal code as required, including through the company's next confirmation statement where applicable.
                    </p>
                    <a
                      href="https://www.gov.uk/guidance/when-you-need-to-verify-your-identity-for-companies-house"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:underline font-semibold inline-flex items-center gap-1 text-sm"
                    >
                      Companies House identity verification guidance
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Scam warning */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-6 w-6 text-red-600 shrink-0" />
                      Scam warning
                    </h3>
                    <p className="text-gray-700">
                      Companies House warns about scams offering money in return for being named as a director of an unknown company. Do not provide identity details or sign documents if you do not understand the arrangement. A director involved with a fraudulent company could face legal action, financial consequences or disqualification for up to 15 years.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8 — Failure consequences */}
              <section id="failure-consequences" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  What Happens if a Director Fails to Meet Their Responsibilities?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Directors who breach their duties or fail to meet legal requirements may face fines, prosecution, disqualification or personal liability in certain circumstances.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
                  {[
                    { title: "Late filing penalties", desc: "Penalties for filing accounts late with Companies House." },
                    { title: "Record-keeping fines", desc: "Fines for failing to maintain required accounting records." },
                    { title: "Director disqualification", desc: "Disqualification from acting as a director for misconduct." },
                    { title: "Personal liability", desc: "Directors can face personal consequences in specific circumstances including insolvency misconduct." },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-amber-800" />
                      </div>
                      <div>
                        <strong className="text-gray-900 text-sm block">{item.title}:</strong>
                        <span className="text-xs sm:text-sm text-gray-600">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-gray-800 text-sm">
                  <p>
                    <strong>Key note:</strong> A limited company generally remains responsible for its own debts, but directors can face personal consequences in specific circumstances. If your company cannot pay its debts, seek professional advice promptly. Directors may need to prioritise creditors' interests and carefully assess whether continuing to trade is appropriate.
                  </p>
                </div>
              </section>

              {/* Section 9 — Delegate */}
              <section id="delegate" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Can You Delegate Director Responsibilities to an Accountant or Company Secretary?
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  Yes. Directors can appoint professionals to handle administrative work, but they remain legally responsible for the company.
                </p>

                <div className="space-y-4 not-prose mb-6">
                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Accountant:</strong>
                    <span className="text-sm text-gray-600">
                      An accountant can assist with annual accounts, Corporation Tax, payroll and advice on dividends or directors' loans.
                    </span>
                  </div>

                  <div className="border-l-4 border-amber-500 bg-gray-50 p-4 rounded-r-xl">
                    <strong className="text-gray-900 text-sm sm:text-base block mb-1">Company secretarial provider:</strong>
                    <span className="text-sm text-gray-600">
                      A{" "}
                      <Link
                        to="/services/company-secretarial-services"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        company secretarial provider
                      </Link>{" "}
                      can help with confirmation statements, statutory records and company changes.
                    </span>
                  </div>
                </div>

                <p className="mb-4">
                  If you are unsure about the distinction, our guide to{" "}
                  <Link
                    to="/company-secretary-vs-company-secretarial-service"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Company Secretary vs Company Secretarial Service
                  </Link>{" "}
                  explains the difference between appointing a secretary and outsourcing administrative tasks.
                </p>
                <p className="mb-4">
                  You can also read our guide to{" "}
                  <Link
                    to="/do-small-companies-need-a-company-secretary"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Do Small Companies Need a Company Secretary in the UK
                  </Link>
                  ? to learn when an appointment is required.
                </p>
                <p>
                  For help comparing service packages, see our guide to{" "}
                  <Link
                    to="/company-secretary-cost-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    company secretary cost
                  </Link>
                  .
                </p>
              </section>

              {/* Section 10 — FAQs */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-8 not-prose bg-white">
                  {faqsData.map((faq, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-base leading-snug">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-gray-400 text-xl leading-none mt-0.5">
                          {openFaq === idx ? "−" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed bg-gray-50/60 border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 11 — Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="mb-4">
                  The responsibilities of a company director in the UK include meeting legal duties, keeping reliable records, filing accounts and managing company money correctly. Delegating administrative work can save time, but directors must still understand their obligations and ensure the company remains compliant.
                </p>
                <p className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5 text-gray-800">
                  Henleaze Tax Consultancy provides clear, fixed fee accounting and tax support to businesses in Bristol and across the UK. If you need help with company records, statutory filings or related compliance work, explore our{" "}
                  <Link
                    to="/services/company-secretarial-services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Company Secretarial services
                  </Link>{" "}
                  to see how we can support your business.
                </p>
              </section>

            </div>
            {/* end article body */}

          </div>
          {/* end max-w-4xl */}
        </div>
        {/* end bg-white */}

        {/* ── NEARBY LOCATIONS SECTION ─────── */}
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default ResponsibilitiesOfACompanyDirectorUK;
