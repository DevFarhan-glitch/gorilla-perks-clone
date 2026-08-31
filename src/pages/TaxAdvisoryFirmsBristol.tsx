import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "what-does-firm-do", title: "What Does a Tax Advisory Firm Actually Do?" },
  { id: "quick-comparison", title: "Quick Comparison" },
  { id: "top-firms", title: "Top 6 Tax Advisory Firms in Bristol" },
  { id: "common-services", title: "Common Tax Advisory Services You Can Expect" },
  { id: "cost-of-advice", title: "What Does Tax Advice Actually Cost in Bristol?" },
  { id: "how-to-choose", title: "How to Choose the Right Tax Advisory Firm in Bristol" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const faqsData = [
  {
    question: "What's the difference between tax advisory and tax compliance?",
    answer:
      "Tax compliance covers routine filing obligations like tax returns, while tax advisory involves proactive planning and advice on structuring your finances or business before decisions are made.",
  },
  {
    question: "How much does a tax advisor cost in the UK?",
    answer:
      "Hourly rates generally range from £100 to £300, with highly specialised advice sometimes exceeding £500 per hour, while many routine services are offered as a fixed fee agreed in advance.",
  },
  {
    question: "Do I need a specialist firm or a general accountant for tax advice?",
    answer:
      "It depends on your situation. Narrow, technical needs like R&D tax relief usually benefit from a specialist firm, while broader personal or business tax planning is often well served by a general tax advisory practice.",
  },
  {
    question: "Is a free initial consultation worth using?",
    answer:
      "Yes. It's a low risk way to judge whether a firm understands your situation and communicates clearly before you commit to paying for their services.",
  },
  {
    question: "Are contractors better served by a general firm or a specialist?",
    answer:
      "Contractors generally benefit from a firm with specific experience in IR35 status, salary and dividend planning, since these situations require a level of detail that a broad general practice doesn't always prioritise.",
  },
];

const comparisonData = [
  {
    firm: "ForrestBrown",
    founded: "Headquartered in Bristol",
    specialism: "R&D tax relief, Patent Box, capital allowances, grants",
    fee: "Not published, contact for quote",
    isHenleaze: false,
  },
  {
    firm: "Saffery",
    founded: "Bristol office since 1998",
    specialism: "Private client, estate planning, business tax",
    fee: "Not published, contact for quote",
    isHenleaze: false,
  },
  {
    firm: "Azets",
    founded: "National network, local Bristol office",
    specialism: "Corporate and personal tax, VAT, R&D relief, restructuring",
    fee: "Not published, contact for quote",
    isHenleaze: false,
  },
  {
    firm: "Oakensen",
    founded: "Founded 1990",
    specialism: "Complex personal and business tax, audit",
    fee: "Fixed fee",
    isHenleaze: false,
  },
  {
    firm: "Apex Accountants",
    founded: "Bristol based",
    specialism: "Personal and corporate tax, VAT, EIS and SEIS",
    fee: "Not published, contact for quote",
    isHenleaze: false,
  },
  {
    firm: "Henleaze Tax Consultancy",
    founded: "Bristol based",
    specialism: "Contractor tax, IR35, sole traders, small companies",
    fee: "Fixed fee",
    isHenleaze: true,
  },
];

const costTableData = [
  { service: "General tax advisory, hourly rate", cost: "£100 to £300 per hour" },
  { service: "Highly specialised advice, hourly rate", cost: "£500 or more per hour" },
  { service: "Straightforward personal tax return", cost: "£125 to £300 fixed fee" },
  { service: "Sole trader return with expenses and reliefs", cost: "£200 to £400 fixed fee" },
  { service: "Small business tax return", cost: "£200 to £500 fixed fee" },
  { service: "One off tax planning advice", cost: "£100 to £250 per hour, usually quoted in advance" },
];

const TaxAdvisoryFirmsBristol = () => {
  const [activeSection, setActiveSection] = useState("what-does-firm-do");
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
    headline: "Tax Advisory Firms in Bristol: A 2026 Comparison",
    description:
      "From R&D specialists to fixed fee firms, see how six Bristol tax advisors compare, what they cost, and how to pick the right one.",
    image: "https://henleazetaxconsultancy.com/tax-advisory-firms-in-bristol.webp",
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
    datePublished: "2026-08-31",
    dateModified: "2026-08-31",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/tax-advisory-firms-bristol",
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
        name: "Tax Advisory Firms in Bristol",
        item: "https://henleazetaxconsultancy.com/tax-advisory-firms-bristol",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Tax Advisory Firms in Bristol: A 2026 Comparison</title>
        <meta
          name="description"
          content="From R&D specialists to fixed fee firms, see how six Bristol tax advisors compare, what they cost, and how to pick the right one."
        />
        <meta
          name="keywords"
          content="tax advisory firms bristol, tax advisor bristol, tax consultancy bristol, bristol tax advice, corporate tax bristol"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/tax-advisory-firms-bristol/" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/tax-advisory-firms-in-bristol.webp"
            alt="Tax advisory firms in Bristol offering expert tax advice, transparent costs, and business accounting services"
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
                Bristol Tax Advisory Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Tax Advisory Firms in Bristol: Services, Costs and What to Expect
            </h1>

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

            {/* Opening paragraphs */}
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A tax advisory firm helps you plan your tax position proactively, rather than just filing returns after the fact. That distinction matters more than it sounds. Compliance work tells HMRC what already happened. Tax advisory looks ahead, helping you structure things correctly before a decision gets made, whether that's how you pay yourself as a director, whether a project qualifies for R&D relief or how to handle a more complex personal tax situation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bristol has a genuinely wide range of firms offering this kind of advice, from national specialists to small, personal practices. This guide looks at six of them, what tax advisory actually involves, what it tends to cost and what a first conversation with a firm usually looks like.
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

              {/* Section 1 — What Does a Tax Advisory Firm Actually Do? */}
              <h2 id="what-does-firm-do" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Does a Tax Advisory Firm Actually Do?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                A tax advisory firm gives forward looking advice on how to structure your finances or your business to manage tax efficiently and stay compliant with HMRC rules. This sits apart from basic compliance work like filing an annual tax return, though many firms offer both under one roof.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Tax advisory typically covers situations where a decision has real financial consequences and there's more than one way to approach it. A landlord deciding how to hold a second property, a director working out a{" "}
                <Link to="/dividend-tax-rates-2026-27" className="text-amber-700 hover:underline font-semibold">
                  salary and dividend split
                </Link>
                , or a growing company assessing whether its development work qualifies for{" "}
                <Link to="/services/rd-tax-credit-claim" className="text-amber-700 hover:underline font-semibold">
                  R&D tax relief
                </Link>{" "}
                are all tax advisory questions, not routine compliance ones.
              </p>

              {/* Section 2 — Quick Comparison */}
              <h2 id="quick-comparison" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Quick Comparison
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm text-gray-700 mb-2">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Firm</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Founded / In Bristol Since</th>
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Specialism</th>
                      <th className="text-left px-4 py-3 font-bold text-amber-700">Fee Structure</th>
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
                                Fixed Fee
                              </span>
                            </span>
                          ) : (
                            row.firm
                          )}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{row.founded}</td>
                        <td className="px-4 py-3 text-gray-700">{row.specialism}</td>
                        <td
                          className={`px-4 py-3 ${
                            row.fee === "Fixed fee" ? "font-semibold text-emerald-700" : "text-gray-600"
                          }`}
                        >
                          {row.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Inline Content Image */}
              <figure className="my-10">
                <img
                  src="/top-6-tax-advisory-firms-in-bristol.webp"
                  alt="Top tax advisory firms in Bristol including Henleaze Tax Consultancy, with services, costs and expert advice"
                  className="w-full rounded-xl h-auto max-w-2xl mx-auto shadow-md border border-gray-100"
                />
                <figcaption className="text-sm text-center text-gray-500 mt-3 italic">
                  Top 6 tax advisory firms in Bristol compared for 2026.
                </figcaption>
              </figure>

              {/* Section 3 — Top 6 Tax Advisory Firms in Bristol */}
              <h2 id="top-firms" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Top 6 Tax Advisory Firms in Bristol
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* Firm 1: ForrestBrown */}
              <div className="mb-10 pb-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">1. ForrestBrown</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ForrestBrown is a specialist R&D tax relief and innovation incentives consultancy headquartered in Bristol, with additional offices in London and Scotland. Unlike most firms on this list, they don't offer general accountancy at all, their entire business is built around helping innovative companies claim R&D tax relief, Patent Box relief, capital allowances and grant funding properly enough to withstand HMRC scrutiny.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Their technical team includes around 100 specialists, including chartered tax advisers, industry specific experts and a former HMRC inspector, and the firm has submitted more than 15,000 R&D tax relief claims to date.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="font-semibold text-gray-800 text-sm">
                    <strong>Best suited for:</strong> businesses doing genuine technical development work who need a specialist to assess R&D eligibility properly rather than a general accountant handling it as a side service.
                  </p>
                </div>
              </div>

              {/* Firm 2: Saffery */}
              <div className="mb-10 pb-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Saffery</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Saffery has operated in Bristol since 1998, with eight partners and more than 120 staff based in the office and is part of the Nexia International network. Their tax advisory work splits broadly into private client services, helping individuals and estate owners protect and grow assets tax efficiently, and business tax advisory covering owner managed businesses through to larger regional organisations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The firm also highlights specific expertise built around the Bristol regional economy itself, suggesting local sector knowledge beyond a generic national offering.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="font-semibold text-gray-800 text-sm">
                    <strong>Best suited for:</strong> individuals and families with more complex personal tax or estate planning needs, and established businesses wanting regional depth backed by international reach.
                  </p>
                </div>
              </div>

              {/* Firm 3: Azets */}
              <div className="mb-10 pb-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Azets</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Azets names tax advisory as an explicit, standalone service line at their Bristol office, covering corporate tax, personal tax and VAT. The Bristol team also offers R&D tax relief support and restructuring and insolvency advice, a service line most firms of this size don't offer in-house.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As part of one of the UK's largest accountancy networks, Azets brings considerable scale, while the Bristol office specifically emphasises sector experience built around industries prominent in the local economy.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="font-semibold text-gray-800 text-sm">
                    <strong>Best suited for:</strong> established SMEs wanting the resources of a large national network combined with a Bristol team that claims genuine local familiarity.
                  </p>
                </div>
              </div>

              {/* Firm 4: Oakensen */}
              <div className="mb-10 pb-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Oakensen</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oakensen is an ICAEW chartered accountancy firm with offices in Trowbridge and Westbury on Trym in Bristol, founded in 1990. The firm positions itself around responsiveness and fixed fee pricing, working primarily with growing businesses, landlords and individuals with complex tax affairs.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oakensen states that 95 percent of their clients arrive through recommendations and referrals, and publishes a figure of £49 million in tax savings delivered to clients, both the firm's own reported statistics rather than independently verified figures.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="font-semibold text-gray-800 text-sm">
                    <strong>Best suited for:</strong> growing businesses and individuals with increasingly complex tax affairs who want fixed fee certainty and fast response times.
                  </p>
                </div>
              </div>

              {/* Firm 5: Apex Accountants */}
              <div className="mb-10 pb-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Apex Accountants</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Apex Accountants is a smaller firm branded specifically around tax services rather than general accountancy, covering personal tax returns, corporate tax planning, VAT advisory and capital gains tax management. They also support businesses applying for the Enterprise Investment Scheme and Seed Enterprise Investment Scheme.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Their stated client base spans SMEs, charities, mid market companies and international firms, a broader spread than their size might suggest, worth asking about directly to gauge depth in each area.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="font-semibold text-gray-800 text-sm">
                    <strong>Best suited for:</strong> businesses and individuals wanting a tax focused firm rather than a generalist, particularly those exploring EIS or SEIS relief.
                  </p>
                </div>
              </div>

              {/* Firm 6: Henleaze Tax Consultancy */}
              <div className="mb-10 pb-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">6. Henleaze Tax Consultancy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="https://henleazetaxconsultancy.com/" className="text-amber-700 hover:underline font-semibold">
                    Henleaze Tax Consultancy
                  </a>{" "}
                  is based in Bristol and works specifically with contractors, sole traders, landlords and small limited companies, a deliberately narrower client focus than most of the firms listed above. The firm operates on a fixed fee basis throughout, so clients know their costs upfront rather than facing open ended hourly billing once work begins.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Where Henleaze differs from the larger, broader firms on this list is depth in contractor specific tax advisory. This includes{" "}
                  <Link to="/how-does-ir35-work-in-the-uk" className="text-amber-700 hover:underline font-semibold">
                    IR35 status
                  </Link>{" "}
                  reviews assessing whether a contract genuinely sits{" "}
                  <Link to="/inside-vs-outside-ir35" className="text-amber-700 hover:underline font-semibold">
                    inside or outside
                  </Link>{" "}
                  the off payroll rules, and salary and dividend planning tailored to how a director actually draws income from their company, both areas that tend to receive less dedicated attention within a much bigger, more generalist practice covering audit, corporate finance and a wide range of unrelated client types.
                </p>
                <div className="bg-amber-50/70 rounded-lg p-4 border-l-4 border-amber-600 mb-6">
                  <p className="font-semibold text-amber-950 text-sm">
                    <strong>Best suited for:</strong>{" "}
                    <Link to="/services/contractor-accountants" className="text-amber-700 hover:underline font-bold">
                      contractors
                    </Link>
                    , sole traders and small limited company owners who want an accountant genuinely specialised in their situation, with predictable{" "}
                    <Link to="/pricing" className="text-amber-700 hover:underline font-bold">
                      fixed fee pricing
                    </Link>{" "}
                    and direct access to advice rather than being one small account within a much larger client book.
                  </p>
                </div>
              </div>

              {/* CTA Block */}
              <div className="bg-gray-900 text-white rounded-2xl p-8 mb-12 shadow-xl flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-xl text-white mb-2">Book a free consultation with Henleaze Tax Consultancy</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Get clear, fixed fee advice on your contracting, tax planning, IR35 position and business accounting needs in Bristol.
                  </p>
                </div>
                <Button
                  asChild
                  className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-xl px-6 py-3.5 border-none shadow-md transition-all hover:scale-105"
                >
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>

              {/* Section 4 — Common Tax Advisory Services You Can Expect */}
              <h2 id="common-services" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Common Tax Advisory Services You Can Expect
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Most firms offering tax advisory in Bristol cover a similar core range of services, though the depth and specialism varies significantly between them.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                <li>
                  <Link
                    to="/services/personal-tax-and-self-assessment-service"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Personal tax planning
                  </Link>
                  , including Income Tax, Capital Gains Tax and inheritance tax
                </li>
                <li>
                  <strong>Corporate tax planning</strong>, covering how a business structures itself and its profits
                </li>
                <li>
                  <strong>VAT advisory</strong>, particularly for businesses approaching registration thresholds or dealing with complex VAT situations
                </li>
                <li>
                  <strong>R&D tax relief</strong>, a specialist area helping innovative businesses claim relief on qualifying development work
                </li>
                <li>
                  <strong>HMRC enquiry and dispute support</strong>, when a return or claim comes under review
                </li>
                <li>
                  <strong>Trusts and estate planning</strong>, for individuals and families with more complex wealth
                </li>
                <li>
                  <Link to="/what-is-ir35-uk" className="text-amber-700 hover:underline font-semibold">
                    IR35
                  </Link>{" "}
                  and contractor tax advice, relevant to anyone working through their own limited company
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                Not every firm covers all of these equally well. A firm's genuine specialism usually tells you more about fit than a long list of services on their website.
              </p>

              {/* Section 5 — What Does Tax Advice Actually Cost in Bristol? */}
              <h2 id="cost-of-advice" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Does Tax Advice Actually Cost in Bristol?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Tax advisory in the UK is typically charged either by the hour or as a fixed fee agreed in advance, and the right approach depends on how well defined the piece of work is.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm text-gray-700 mb-2">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left px-4 py-3 font-bold text-gray-800">Service</th>
                      <th className="text-left px-4 py-3 font-bold text-amber-700">Typical cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {costTableData.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900">{item.service}</td>
                        <td className="px-4 py-3 font-semibold text-gray-700">{item.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Fixed fees tend to suit predictable, well scoped work like a tax return or a specific piece of planning advice. Hourly billing is more common for open ended situations, such as an ongoing HMRC enquiry where the amount of work isn't clear from the outset. It's always worth asking upfront which model a firm uses and getting a written estimate before committing to anything.
              </p>

              {/* Section 6 — How to Choose */}
              <h2 id="how-to-choose" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Choose the Right Tax Advisory Firm for Your Situation in Bristol
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                The right choice depends far more on matching a firm's genuine specialism to your situation than on picking the biggest name. Someone assessing an R&D claim needs a very different kind of expertise to a contractor working out their IR35 position or a family dealing with inheritance tax planning.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                As a general guide, larger firms with broad service lines, like Saffery or Azets, tend to suit businesses with varied or complex needs spanning several tax areas. Specialist firms, like ForrestBrown for R&D relief, are usually the stronger choice when your need is narrow but technical. Smaller, fixed fee firms often suit individuals and small businesses who want direct access and predictable costs without paying for services they don't need.
              </p>

              {/* Section 7 — Frequently Asked Questions */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
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

              {/* Section 8 — Final Words */}
              <h2 id="final-words" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Final Words
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4">
                Tax advisory covers a wide range of needs, from R&D relief and estate planning through to straightforward contractor tax questions, and no single firm is the right fit for everyone. The six firms covered here each bring something different, whether that's ForrestBrown's specialist R&D focus, Saffery's regional depth, or a smaller, fixed fee practice built around a specific type of client.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you're a contractor, sole trader or small limited company looking for clear, practical tax advice with fixed fee pricing, take a look at our{" "}
                <Link
                  to="/services/contractor-accountants"
                  className="text-amber-700 underline hover:text-amber-900 font-semibold"
                >
                  contractor accountant services
                </Link>{" "}
                to see how we can help.
              </p>

            </div>
          </div>
        </div>

        <NearbyLocationsSection />

      </Layout>
    </>
  );
};

export default TaxAdvisoryFirmsBristol;
