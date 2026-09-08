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
  Building2,
  DollarSign,
  Briefcase,
  HelpCircle,
  MapPin,
  FileSpreadsheet,
  Layers,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "quick-comparison", title: "Quick Comparison of Bristol Payroll Firms" },
  { id: "five-firms", title: "Five Payroll Firms in Bristol" },
  { id: "whats-included", title: "What's Included in a Standard Payroll Service" },
  { id: "how-it-works", title: "How Payroll Outsourcing Actually Works, Step by Step" },
  { id: "pricing-costs", title: "What Does Payroll Outsourcing Cost in Bristol?" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "What does a payroll consulting firm actually do?",
    answer:
      "A payroll consulting firm calculates and processes employee pay on your behalf, covering PAYE and National Insurance deductions, HMRC reporting, payslips and pension contributions, so you don't have to manage it in house.",
  },
  {
    question: "How much does payroll outsourcing cost in Bristol?",
    answer:
      "Most providers charge per employee per pay run, typically between £4 and £10, with small businesses often paying somewhere between £40 and £100 a month in total, depending on headcount and how often payroll runs.",
  },
  {
    question: "How long does it take to switch payroll providers?",
    answer:
      "A straightforward small business payroll can often be up and running within a few weeks, though anything involving a pension staging date or a more complex existing setup may take a little longer.",
  },
  {
    question: "Do all payroll providers handle pension auto-enrolment?",
    answer:
      "Most do, but it's worth confirming directly, since some providers charge this as an additional service rather than including it in their standard payroll fee.",
  },
  {
    question: "Is payroll outsourcing worth it for a very small business?",
    answer:
      "Often yes, particularly once you factor in the time cost of learning and staying current with PAYE, RTI and pension rules yourself, which can outweigh the cost of a provider for even a small headcount.",
  },
];

const comparisonData = [
  {
    firm: "Bristol Payroll Ltd",
    type: "Payroll specialist",
    knownFor: "Digital portal, app based payslips, Xero and QuickBooks integration",
    isHenleaze: false,
  },
  {
    firm: "Cox & Co. Payroll Solutions",
    type: "Payroll specialist",
    knownFor: "Charity and not for profit payroll experience",
    isHenleaze: false,
  },
  {
    firm: "Lloydbottoms Chartered Accountants",
    type: "Full service accountancy firm",
    knownFor: "Established 1975, ICAEW regulated, payroll alongside tax and bookkeeping",
    isHenleaze: false,
  },
  {
    firm: "Spectrum Accountancy Solutions",
    type: "Full service accountancy firm",
    knownFor: "Xero partner, payroll alongside cloud bookkeeping",
    isHenleaze: false,
  },
  {
    firm: "Henleaze Tax Consultancy",
    type: "Full service accountancy firm",
    knownFor: "Contractor tax, IR35, small companies",
    isHenleaze: true,
  },
];

const costTableData = [
  { size: "Per employee, per pay run", cost: "£4 to £10" },
  { size: "Small business, up to 10 employees", cost: "£40 to £100 per month" },
  { size: "Growing business, 10 to 50 employees", cost: "£150 to £400 per month, depending on complexity" },
  { size: "Setup or onboarding fee", cost: "Sometimes charged separately, varies by provider" },
];

const PayrollConsultingFirmsBristol = () => {
  const [activeSection, setActiveSection] = useState("quick-comparison");
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
    headline: "Top 5 Payroll Consulting Firms in Bristol: Who to Choose",
    description:
      "Five Bristol payroll firms compared, what a standard payroll service actually includes and how to pick the right provider for your business.",
    image: "https://henleazetaxconsultancy.com/payroll-consulting-firms-in-bristol.webp",
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
    datePublished: "2026-09-08",
    dateModified: "2026-09-08",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/payroll-consulting-firms-in-bristol",
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
        name: "Top 5 Payroll Consulting Firms in Bristol: Who to Choose",
        item: "https://henleazetaxconsultancy.com/payroll-consulting-firms-in-bristol",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Top 5 Payroll Consulting Firms in Bristol: Who to Choose</title>
        <meta
          name="description"
          content="Five Bristol payroll firms compared, what a standard payroll service actually includes and how to pick the right provider for your business."
        />
        <meta
          name="keywords"
          content="payroll consulting firms in Bristol, payroll services Bristol, payroll bureau Bristol, outsourced payroll Bristol"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/payroll-consulting-firms-in-bristol/" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/payroll-consulting-firms-in-bristol.webp"
            alt="Payroll consulting firms in Bristol offering professional payroll services and business support"
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
                Bristol Payroll Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Top 5 Payroll Consulting Firms in Bristol: Who to Choose
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Payroll Consulting Firms in Bristol: Services and How They Help Businesses
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A{" "}
              <Link
                to="/services/payroll-and-hr-services"
                className="text-amber-700 hover:underline font-semibold"
              >
                payroll consulting firm
              </Link>{" "}
              handles the calculation and processing of employee pay on your behalf, covering everything from PAYE and National Insurance deductions to pension contributions and HMRC reporting. Rather than running payroll in house, you hand the whole cycle over to a specialist, who makes sure everyone gets paid correctly and on time and that your business stays compliant with HMRC along the way.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This is a narrower service than general{" "}
              <Link
                to="/services/outsourced-accounting-services"
                className="text-amber-700 hover:underline font-semibold"
              >
                outsourced accounting
              </Link>
              . Some firms specialise purely in payroll, while others offer it as one part of a broader accountancy service. Bristol has a genuine mix of both. This guide looks at five local firms, what a standard payroll service actually includes, what it costs and how the process works if you're switching from doing it yourself.
            </p>

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

              {/* Section 1 — Quick Comparison of Bristol Payroll Firms */}
              <h2 id="quick-comparison" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Quick Comparison of Bristol Payroll Firms
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 mb-2">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Firm</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Type</th>
                      <th className="text-left px-4 py-3 font-bold text-amber-700">Known For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 transition-colors ${
                          row.isHenleaze ? "bg-amber-50/60 font-medium" : ""
                        }`}
                      >
                        <td
                          className={`px-4 py-3 ${
                            row.isHenleaze ? "font-bold text-amber-900" : "font-medium text-gray-900"
                          }`}
                        >
                          {row.isHenleaze ? (
                            <span className="flex items-center gap-1.5">
                              {row.firm}
                              <span className="text-xs bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-bold">
                                Specialist
                              </span>
                            </span>
                          ) : (
                            row.firm
                          )}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{row.type}</td>
                        <td className="px-4 py-3 text-gray-700">{row.knownFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 2 — Five Payroll Firms in Bristol */}
              <h2 id="five-firms" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Five Payroll Firms in Bristol
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* Infographic Image */}
              <div className="my-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <img
                  src="/five-payroll-firms-in-bristol.webp"
                  alt="Infographic of five payroll firms in Bristol UK with Clifton Suspension Bridge and accounting workspace background."
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>

              {/* Firm 1 — Bristol Payroll Ltd */}
              <div className="border border-gray-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bristol Payroll Ltd</h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded px-2.5 py-1 mb-4">
                  Payroll specialist
                </span>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bristol Payroll Ltd is a dedicated payroll bureau based in the city centre, built around a fully digital process. Payroll is submitted through an online form, with payslips, P45s and P60s hosted securely in a portal that both employers and employees can access, backed by a smartphone app for instant payslip delivery.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  They also handle pension scheme setup and ongoing auto-enrolment assessments and can integrate payroll data directly with accounting software like Xero and QuickBooks.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500 space-y-2 mb-2">
                  <p className="text-sm text-gray-800">
                    <strong>Best suited for:</strong> businesses wanting a modern, self service style payroll platform with minimal manual admin on their end.
                  </p>
                  <p className="text-sm text-gray-600 flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> 15-16 Brunswick Square, Bristol, BS2 2NX</span>
                  </p>
                </div>
              </div>

              {/* Firm 2 — Cox & Co. Payroll Solutions */}
              <div className="border border-gray-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cox & Co. Payroll Solutions</h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 rounded px-2.5 py-1 mb-4">
                  Payroll specialist
                </span>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cox & Co. has been running payroll for Bristol and South West businesses since 2008, with a particular depth of experience in the charity and not for profit sector, including well known local organisations. Their approach leans on a personal, long term relationship rather than a purely transactional service.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500 space-y-2 mb-2">
                  <p className="text-sm text-gray-800">
                    <strong>Best suited for:</strong> charities, not for profit organisations and businesses that want a payroll provider who understands sector specific needs rather than a one size fits all service.
                  </p>
                  <p className="text-sm text-gray-600 flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> Unit 3 Londonderry Farm, Willsbridge, Bristol, BS30 6EL</span>
                  </p>
                </div>
              </div>

              {/* Firm 3 — Lloydbottoms Chartered Accountants */}
              <div className="border border-gray-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lloydbottoms Chartered Accountants</h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2.5 py-1 mb-4">
                  Full service accountancy firm
                </span>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lloydbottoms has operated from Staple Hill in Bristol since 1975 and is regulated by the ICAEW. Payroll sits alongside a full range of accountancy services, including tax returns, VAT and bookkeeping, making them a fit for businesses that want one firm handling everything rather than a payroll only specialist.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500 space-y-2 mb-2">
                  <p className="text-sm text-gray-800">
                    <strong>Best suited for:</strong> established businesses and individuals wanting payroll bundled with wider accountancy and tax support from one long standing local firm.
                  </p>
                  <p className="text-sm text-gray-600 flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> Lloydbottoms Chartered Accountants, 118 High Street, Staple Hill, Bristol BS16 5HH</span>
                  </p>
                </div>
              </div>

              {/* Firm 4 — Spectrum Accountancy Solutions */}
              <div className="border border-gray-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Spectrum Accountancy Solutions</h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2.5 py-1 mb-4">
                  Full service accountancy firm
                </span>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Spectrum is based in Staple Hill and offers a standard payroll service covering PAYE and National Insurance calculations, statutory payments, and auto-enrolment pension processing. As a Xero partner, they also lean into cloud based bookkeeping alongside payroll.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500 space-y-2 mb-2">
                  <p className="text-sm text-gray-800">
                    <strong>Best suited for:</strong> small businesses wanting payroll and cloud accounting handled together by the same local firm.
                  </p>
                  <p className="text-sm text-gray-600 flex items-start gap-1.5">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> 18 Broad Street, Staple Hill, Bristol, BS16 5NX</span>
                  </p>
                </div>
              </div>

              {/* Firm 5 — Henleaze Tax Consultancy */}
              <div className="border-2 border-amber-300 rounded-xl p-6 sm:p-8 bg-amber-50/30 shadow-sm mb-12 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Specialist Pick
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Henleaze Tax Consultancy</h3>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-300 rounded px-2.5 py-1 mb-4">
                  Full service accountancy firm
                </span>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <Link to="/" className="text-amber-800 hover:underline font-semibold">
                    Henleaze Tax Consultancy is based in Bristol
                  </Link>{" "}
                  and works specifically with contractors, sole traders,{" "}
                  <Link to="/services/landlord-accountants" className="text-amber-800 hover:underline font-semibold">
                    landlords
                  </Link>{" "}
                  and{" "}
                  <Link to="/services/small-business-accountants" className="text-amber-800 hover:underline font-semibold">
                    small limited companies
                  </Link>
                  . Payroll here often looks a little different to a standard SME, particularly for director only companies working out the right balance between salary and dividends.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For a contractor running their own limited company, payroll usually means processing a single director's salary, not a team of employees and getting that salary set at the right level matters more than most general payroll providers realise. Set it too low and you risk missing out on qualifying years for the State Pension. Set it without factoring in{" "}
                  <Link to="/what-is-ir35-uk" className="text-amber-800 hover:underline font-semibold">
                    IR35
                  </Link>{" "}
                  status correctly and the whole approach to how you draw income from the company can be wrong from the start. We build payroll around this specific situation rather than treating a director's pay as a smaller version of standard employee payroll.
                </p>
                <div className="bg-white rounded-lg p-4 border border-amber-200 space-y-2 mb-4">
                  <p className="text-sm text-gray-800">
                    <strong>Best suited for:</strong> contractors and small limited company directors who want payroll handled by a firm that understands their specific tax situation, not just standard employee payroll.
                  </p>
                </div>
                <div className="mt-4 pt-2">
                  <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold">
                    <Link to="/contact">Speak to our Bristol Payroll Experts</Link>
                  </Button>
                </div>
              </div>

              {/* Section 3 — What's Included in a Standard Payroll Service */}
              <h2 id="whats-included" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What's Included in a Standard Payroll Service
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                Most payroll providers cover a fairly consistent core scope, though the exact detail varies by firm.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">PAYE and National Insurance calculation</h4>
                      <p className="text-sm text-gray-600">Working out what each employee owes and what the employer needs to contribute.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">RTI submissions</h4>
                      <p className="text-sm text-gray-600">The reports HMRC requires on or before every payday.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Payslip production</h4>
                      <p className="text-sm text-gray-600">Usually delivered digitally through a portal or app these days.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Pension auto-enrolment</h4>
                      <p className="text-sm text-gray-600">Including assessing employee eligibility and processing contributions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Statutory payments</h4>
                      <p className="text-sm text-gray-600">Covering sick pay, maternity, paternity and other legally required payments.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Year end reporting</h4>
                      <p className="text-sm text-gray-600">Including P60s for employees and final submissions to HMRC.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                A few providers go further, offering things like holiday tracking, benefits administration or integration with time and attendance systems. It's worth checking exactly what's included before comparing prices between firms, since a cheaper quote sometimes reflects a narrower scope rather than better value.
              </p>

              {/* Section 4 — How Payroll Outsourcing Actually Works, Step by Step */}
              <h2 id="how-it-works" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How Payroll Outsourcing Actually Works, Step by Step
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6">
                Moving your payroll to an outsourced provider follows a fairly consistent process, though the exact timeline depends on the size and complexity of your business.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Initial setup and data handover</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      The provider gathers employee details, current pay rates, tax codes and any existing pension scheme information, either from you directly or by liaising with your previous provider.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">PAYE and pension scheme registration</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      If you don't already have these set up, or you're switching providers, the new firm will confirm your PAYE reference and check your auto-enrolment staging is correctly registered with your pension provider.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">A test or parallel run</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Many providers will run through at least one payroll cycle carefully before going fully live, checking calculations match what you'd expect.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Ongoing processing</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      From here, payroll runs on your agreed cycle, weekly, fortnightly or monthly, with payslips issued and RTI submitted each time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-gray-50 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Year end handling</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      At the end of the tax year, the provider handles final submissions and issues P60s to employees.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Most providers can have a straightforward small business payroll running within a few weeks, though anything involving a pension staging date or a more complex existing setup can take a little longer to get right.
              </p>

              {/* Section 5 — What Does Payroll Outsourcing Cost in Bristol? */}
              <h2 id="pricing-costs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Does Payroll Outsourcing Cost in Bristol?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Payroll pricing is usually based on the number of employees and how often you run payroll, rather than a flat monthly fee.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm text-gray-700 mb-2">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Business size</th>
                      <th className="text-left px-4 py-3 font-bold text-amber-700">Typical cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costTableData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900">{item.size}</td>
                        <td className="px-4 py-3 font-semibold text-gray-700">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Weekly payroll generally costs more overall than monthly, simply because there are more pay runs to process across the year. It's worth asking whether pension processing, RTI submissions and year end reporting are included in the quoted price, or charged as extras, since this varies significantly between providers.
              </p>

              {/* Section 6 — Frequently Asked Questions */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                FAQs
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-4 mb-12">
                {faqsData.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-amber-300"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-left p-5 bg-gray-50 hover:bg-gray-100 flex items-center justify-between gap-4 transition-colors"
                      aria-expanded={openFaq === index}
                    >
                      <span className="font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                        <span className="text-amber-600 text-sm font-mono font-bold">Q{index + 1}.</span>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                          openFaq === index ? "rotate-180 text-amber-600" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="p-5 bg-white border-t border-gray-100 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Section 7 — Final Words */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8">
                Payroll might look like a simple task from the outside, but getting PAYE, RTI and auto-enrolment right consistently takes real ongoing attention, which is exactly why so many Bristol businesses choose to outsource it. The five firms covered here range from dedicated payroll specialists to full service accountancy practices, so the right fit really does depend on what else you need alongside payroll itself.
              </p>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 rounded-2xl p-8 mb-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  Need Accurate, Hassle-Free Payroll Support in Bristol?
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base leading-relaxed">
                  Whether you're a single director limited company or an employer with a growing team, Henleaze Tax Consultancy ensures accurate PAYE calculations, RTI compliance, and tailored tax efficiency.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold">
                    <Link to="/contact">Get a Free Written Quote</Link>
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

export default PayrollConsultingFirmsBristol;
