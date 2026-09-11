import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

const sections = [
  { id: "do-you-need-secretary", title: "Do You Legally Need a Company Secretary?" },
  { id: "services-covered", title: "What Company Secretarial Services Typically Cover" },
  { id: "quick-comparison", title: "Quick Comparison of Bristol Company Secretarial Firms" },
  { id: "five-firms", title: "Five Company Secretarial Firms in Bristol" },
  { id: "what-happens-wrong", title: "What Happens If You Get This Wrong" },
  { id: "needs-by-business-type", title: "Company Secretarial Needs by Business Type" },
  { id: "how-to-choose", title: "How to Choose the Right Provider in Bristol" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqsData = [
  {
    question: "Do I legally need to appoint a company secretary?",
    answer:
      "No, not for a private limited company. This requirement was removed by the Companies Act 2006, though public limited companies (PLCs) must still appoint one and the underlying compliance duties still need to be handled by someone.",
  },
  {
    question: "What happens if I file my confirmation statement late?",
    answer:
      "There's no automatic financial penalty, but failing to file is a criminal offence and continued non-compliance can lead to Companies House striking the company off the register entirely.",
  },
  {
    question: "How much does a confirmation statement cost?",
    answer:
      "The Companies House fee is £50 for online filing or £110 by post, in addition to any fee a firm charges for preparing and submitting it on your behalf.",
  },
  {
    question: "What's the difference between company secretarial and accountancy services?",
    answer:
      "Company secretarial covers statutory compliance and record keeping with Companies House, while accountancy covers financial reporting and tax. Many firms offer both, but they're distinct areas of work.",
  },
  {
    question: "Do small contractor limited companies need company secretarial support?",
    answer:
      "Yes, at a basic level. Even a simple one director company still needs an accurate confirmation statement filed annually and up to date statutory records, regardless of how small the business is.",
  },
];

const comparisonData = [
  {
    firm: "Keller & Co",
    type: "Local accountancy practice",
    knownFor: "Established 1986, ICAEW regulated, North Bristol",
    isHenleaze: false,
  },
  {
    firm: "Cook Corporate Solicitors",
    type: "Corporate law firm",
    knownFor: "M&A, private equity, complex governance",
    isHenleaze: false,
  },
  {
    firm: "TLT LLP",
    type: "National law firm, Bristol headquartered",
    knownFor: "Full service legal support across multiple sectors",
    isHenleaze: false,
  },
  {
    firm: "Holdshare (HSS Ltd)",
    type: "Niche specialist",
    knownFor: "Company secretarial for residential management companies",
    isHenleaze: false,
  },
  {
    firm: "Henleaze Tax Consultancy",
    type: "Specialist practice",
    knownFor: "Contractor tax, IR35, small companies",
    isHenleaze: true,
  },
];

const penaltyData = [
  { time: "Up to 1 month", penalty: "£150" },
  { time: "1 to 3 months", penalty: "£375" },
  { time: "3 to 6 months", penalty: "£750" },
  { time: "More than 6 months", penalty: "£1,500" },
];

const CompanySecretarialFirmsBristol = () => {
  const [activeSection, setActiveSection] = useState("do-you-need-secretary");
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
    headline: "Company Secretarial Firms in Bristol: What to Know",
    description:
      "Five Bristol company secretarial firms compared, what the role actually covers, and the real penalties for getting filings wrong.",
    image: "https://henleazetaxconsultancy.com/company-secretarial-firms-in-bristol-services-and-what-businesses-need-to-know.webp",
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
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/company-secretarial-firms-in-bristol",
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
        name: "Company Secretarial Firms in Bristol",
        item: "https://henleazetaxconsultancy.com/company-secretarial-firms-in-bristol",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Company Secretarial Firms in Bristol: What to Know</title>
        <meta
          name="description"
          content="Five Bristol company secretarial firms compared, what the role actually covers, and the real penalties for getting filings wrong."
        />
        <meta
          name="keywords"
          content="company secretarial firms in Bristol, company secretarial bristol, confirmation statement bristol, statutory registers compliance, bristol company secretary"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/company-secretarial-firms-in-bristol" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner" style={{ paddingTop: "72px" }}>
          <img
            src="/company-secretarial-firms-in-bristol-services-and-what-businesses-need-to-know.webp"
            alt="Company secretarial firms in Bristol providing business compliance and company formation services"
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
                Bristol Business Compliance Guide
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Company Secretarial Firms in Bristol: Services and What Businesses Need to Know
            </h1>

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
              Company secretarial covers the ongoing administrative and compliance duties that keep a limited company properly registered with Companies House, including filing confirmation statements, maintaining statutory registers and keeping director and shareholder records accurate and up to date. It's not the same as accountancy or tax work, though many firms offer both.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bristol has a genuine mix of providers covering this, from small local accountancy practices to corporate law firms handling more complex governance. This guide covers what company secretarial actually involves, five Bristol firms offering it, what happens if it's neglected and what it typically costs.
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
              {/* Section 1: Do You Legally Need a Company Secretary? */}
              <h2 id="do-you-need-secretary" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Do You Legally Need a Company Secretary?
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Most private limited companies in the UK haven't been legally required to appoint a company secretary since the Companies Act 2006 came into force. This surprises a lot of business owners, since the role sounds mandatory, but for a private company it's now optional.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Public limited companies are different. A PLC is still required by law to appoint a qualified company secretary. Private companies can appoint one voluntarily if they want someone formally responsible for governance and filings, but the underlying duties themselves, confirmation statements, statutory registers, keeping Companies House records accurate, still have to be done regardless of whether anyone holds the job title. In practice, that responsibility usually falls to a director or gets outsourced to an accountant or <Link to="/services/company-secretarial-services" className="text-amber-700 underline hover:text-amber-900">company secretarial</Link> specialist.
              </p>

              {/* Section 2: What Company Secretarial Services Typically Cover */}
              <h2 id="services-covered" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Company Secretarial Services Typically Cover
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Even without a formally appointed company secretary, someone has to handle a consistent set of statutory duties. Company secretarial firms typically manage:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Confirmation statements</strong>, filed with Companies House at least once every 12 months</li>
                <li><strong>Statutory registers</strong>, including registers of directors, members and people with significant control</li>
                <li><strong>Registered office address</strong>, providing a compliant address for official correspondence if you don't want to use your home or trading address</li>
                <li><strong>Board and shareholder meeting minutes</strong>, keeping a proper record of key company decisions</li>
                <li><strong>Share allotments and transfers</strong>, updating records whenever share ownership changes</li>
                <li><strong>PSC register updates</strong>, reflecting changes in who has significant control over the company</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                Some firms handle this as a standalone service. Others bundle it into a wider <Link to="/services/contractor-accountants" className="text-amber-700 underline hover:text-amber-900">accountancy</Link> or legal relationship, which can make sense if you're already working with them on tax or corporate matters.
              </p>

              {/* Section 3: Quick Comparison */}
              <h2 id="quick-comparison" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Quick Comparison of Bristol Company Secretarial Firms
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-900 font-bold border-b border-gray-200">
                      <th className="p-4 border-r border-gray-200">Firm</th>
                      <th className="p-4 border-r border-gray-200">Type</th>
                      <th className="p-4">Known For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-gray-200 transition-colors ${
                          row.isHenleaze ? "bg-amber-50/70 font-medium" : "hover:bg-gray-50"
                        }`}
                      >
                        <td className="p-4 border-r border-gray-200 font-semibold text-gray-900">
                          {row.firm}
                          {row.isHenleaze && (
                            <span className="ml-2 inline-block px-2 py-0.5 text-xs font-semibold bg-amber-100 text-amber-800 rounded">
                              Our Firm
                            </span>
                          )}
                        </td>
                        <td className="p-4 border-r border-gray-200 text-gray-700">{row.type}</td>
                        <td className="p-4 text-gray-700">{row.knownFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 4: Five Company Secretarial Firms in Bristol */}
              <h2 id="five-firms" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Five Company Secretarial Firms in Bristol
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              {/* Internal Image */}
              <div className="my-8 w-full">
                <img
                  src="/five-company-secretarial-firms-in-bristol.webp"
                  alt="5 company secretarial firms in Bristol: Keller & Co, Cook Corporate Solicitors, TLT LLP, Holdshare & Henleaze Tax Consultancy"
                  className="w-full h-auto object-contain shadow-md rounded-xl"
                />
              </div>

              {/* Firm 1: Keller & Co */}
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                Keller &amp; Co
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Keller &amp; Co is a chartered accountancy practice based in Frampton Cotterell, North Bristol, established in 1986. Alongside taxation, corporate and insolvency work, they offer company secretarial support as a core part of their service range, aimed primarily at local businesses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                <strong>Best suited for:</strong> small and established local businesses wanting routine company secretarial duties handled by the same firm managing their accounts and tax.
              </p>

              {/* Firm 2: Cook Corporate Solicitors */}
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                Cook Corporate Solicitors
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Cook Corporate is an award winning corporate law firm based in Clifton, Bristol, with a second office in London. Their work centres on mergers and acquisitions, private equity and commercial law, with company secretarial offered as part of their wider corporate legal service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                <strong>Best suited for:</strong> businesses with more complex governance needs, ownership changes, or transactions, where legal expertise matters alongside routine filings.
              </p>

              {/* Firm 3: TLT LLP */}
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                TLT LLP
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                TLT is a national law firm actually headquartered in Bristol, with additional offices across the UK including London, Manchester and Edinburgh. They offer full service legal support across several sectors, with corporate governance and company secretarial work forming part of a much broader practice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                <strong>Best suited for:</strong> larger or growing businesses wanting the backing of a substantial national firm that's genuinely rooted in Bristol rather than just operating a satellite office.
              </p>

              {/* Firm 4: Holdshare (HSS Ltd) */}
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                Holdshare (HSS Ltd)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Holdshare is a Bristol based, family run managing agent with more than 25 years of experience, offering company secretarial services specifically for residential management companies through its sister company, HSS Ltd. This covers the particular compliance needs of blocks of flats and estates, rather than general trading businesses.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-amber-500">
                <strong>Best suited for:</strong> residential management companies and blocks of flats needing sector specific company secretarial support most general firms don't specialise in.
              </p>

              {/* Firm 5: Henleaze Tax Consultancy */}
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
                Henleaze Tax Consultancy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We're based in Bristol and work specifically with contractors, sole traders, landlords and <Link to="/services/small-business-accountants" className="text-amber-700 underline hover:text-amber-900">small limited companies.</Link> For many of our clients, <Link to="/services/company-secretarial-services" className="text-amber-700 underline hover:text-amber-900">company secretarial</Link> needs are fairly routine, an annual confirmation statement, keeping director and shareholder details current, rather than complex governance work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Where this connects to the wider picture for contractors is that getting the basics right, accurate company records, a properly filed confirmation statement, matters just as much as <Link to="/what-is-ir35-uk" className="text-amber-700 underline hover:text-amber-900">IR35 status</Link> when it comes to running a compliant limited company. We handle this alongside our standard <Link to="/pricing" className="text-amber-700 underline hover:text-amber-900">fixed fee</Link> accountancy and <Link to="/services/tax-planning" className="text-amber-700 underline hover:text-amber-900">tax support</Link>, rather than treating it as a separate add on service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                <strong>Best suited for:</strong> contractors and small limited company directors wanting straightforward, fixed fee company secretarial support handled alongside their existing tax and accountancy needs.
              </p>

              {/* Section 5: What Happens If You Get This Wrong */}
              <h2 id="what-happens-wrong" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                What Happens If You Get This Wrong
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                Missing company secretarial duties carries real consequences, even though the risks aren't always well understood. A confirmation statement is legally required at least once every 12 months and while there's no automatic financial penalty for filing it late, failing to file at all is a criminal offence and persistent non-compliance can lead to Companies House striking the company off the register entirely. Once struck off, the company's assets can pass to the Crown, and directors lose the ability to trade through it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Annual accounts work differently and do carry automatic financial penalties for late filing:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-900 font-bold border-b border-gray-200">
                      <th className="p-4 border-r border-gray-200">Time after deadline</th>
                      <th className="p-4">Penalty (private limited company)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penaltyData.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="p-4 border-r border-gray-200 font-medium text-gray-900">{row.time}</td>
                        <td className="p-4 text-gray-700 font-semibold text-red-600">{row.penalty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                These penalties double if accounts are filed late in two consecutive years. Beyond the financial risk, inaccurate or outdated statutory records, particularly the PSC register, can create real problems if a business is ever sold, seeks investment or comes under scrutiny, since Companies House and HMRC increasingly cross reference this data against other compliance records.
              </p>

              {/* Section 6: Company Secretarial Needs by Business Type */}
              <h2 id="needs-by-business-type" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Company Secretarial Needs by Business Type
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                What you actually need varies significantly depending on your business structure:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li>
                  <strong>A new startup:</strong> Mainly needs its first confirmation statement filed correctly and accurate initial records, straightforward routine work.
                </li>
                <li>
                  <strong>A holding company with subsidiaries:</strong> Needs more careful record keeping across multiple entities, often benefiting from a firm experienced in group structures.
                </li>
                <li>
                  <strong>A business with several shareholders:</strong> Needs proper documentation for share transfers and allotments, an area where legal expertise, like that offered by Cook Corporate or TLT, adds real value.
                </li>
                <li>
                  <strong>A residential management company:</strong> Has specific compliance needs tied to property management, which is exactly where a specialist like Holdshare fits.
                </li>
                <li>
                  <strong>A contractor operating through a personal service company:</strong> Typically has the simplest ongoing needs, but still can't afford to let a confirmation statement lapse.
                </li>
              </ul>

              {/* Section 7: How to Choose */}
              <h2 id="how-to-choose" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                How to Choose the Right Company Secretarial Provider in Bristol
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-4">
                The right choice depends on how complex your company's structure actually is, not just on firm size. A straightforward small company with one or two directors rarely needs a corporate law firm, while a business planning a share restructure or preparing for investment probably shouldn't rely on basic bookkeeping software alone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                A few practical questions help narrow things down. Ask exactly what's included, some firms only file the confirmation statement, others manage the full set of statutory registers. Ask how they handle PSC register changes throughout the year, not just at the annual filing point. Ask what happens if a deadline is missed and whether that risk sits with them or with you. Finally, if your structure includes multiple shareholders or entities, ask directly whether the firm has genuine experience with that complexity, rather than assuming any accountant can handle it equally well.
              </p>

              {/* CTA Block */}
              <div className="bg-gray-900 text-white rounded-xl p-8 mb-12 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1">Need company secretarial or tax compliance support?</p>
                  <p className="text-gray-400 text-sm">
                    Henleaze Tax Consultancy offers clear, fixed fee company secretarial, accounting and tax services for Bristol businesses and contractors.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold shrink-0"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Section 8: FAQs */}
              <h2 id="faqs" className="scroll-mt-28 text-3xl font-bold text-gray-900 mt-12 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-10 h-0.5 bg-amber-500 mb-6" />

              <div className="space-y-3 mb-10">
                {faqsData.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-150 text-sm"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-amber-500 shrink-0 ml-4 transition-transform duration-200 ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── NEARBY LOCATIONS SECTION ─────── */}
        <NearbyLocationsSection />
      </Layout>
    </>
  );
};

export default CompanySecretarialFirmsBristol;
