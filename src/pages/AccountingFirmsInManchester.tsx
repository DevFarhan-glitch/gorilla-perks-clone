import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  MapPin,
  CheckCircle2,
  Layers,
  ExternalLink,
  Info,
  ChevronDown,
  Building2,
  Users2,
  Briefcase,
  Award,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "how-we-chose", title: "How We Chose These Accounting Firms in Manchester" },
  { id: "quick-comparison", title: "Quick Comparison Table" },
  { id: "seven-firms-manchester", title: "Seven Accounting Firms With a Manchester Office (1 Serving Remotely)" },
  { id: "forvis-mazars", title: "1. Forvis Mazars" },
  { id: "azets", title: "2. Azets" },
  { id: "xeinadin", title: "3. Xeinadin" },
  { id: "streets", title: "4. Streets" },
  { id: "uhy-williamson-croft", title: "5. UHY Williamson Croft" },
  { id: "mitchell-charlesworth", title: "6. Mitchell Charlesworth" },
  { id: "clearcut-accounting", title: "7. Clearcut Accounting" },
  { id: "henleaze", title: "8. Henleaze Tax Consultancy" },
  { id: "how-to-choose", title: "How to Choose an Accountant in Manchester" },
  { id: "faqs", title: "Frequently Asked Questions" },
  { id: "final-words", title: "Final Words" },
];

const comparisonData = [
  {
    firm: "Forvis Mazars",
    office: "St Peter's Square",
    bestSuited: "Larger, complex businesses needing audit, tax or advisory",
    tag: "International Network",
  },
  {
    firm: "Azets",
    office: "King Street",
    bestSuited: "Owner managed businesses, SMEs and private individuals",
    tag: "National SME Firm",
  },
  {
    firm: "Xeinadin",
    office: "Barbirolli Square",
    bestSuited: "Owner managed businesses, landlords and start ups",
    tag: "Landlords & Start-ups",
  },
  {
    firm: "Streets",
    office: "Spinningfields",
    bestSuited: "Private clients and growing businesses",
    tag: "Private Client & Advisory",
  },
  {
    firm: "UHY Williamson Croft",
    office: "York Street",
    bestSuited: "Growing businesses needing audit and advisory support",
    tag: "Audit & Advisory",
  },
  {
    firm: "Mitchell Charlesworth",
    office: "Peter Street",
    bestSuited: "Owner managed businesses and contractors",
    tag: "Contractor & Regional Firm",
  },
  {
    firm: "Clearcut Accounting",
    office: "Princess Road",
    bestSuited: "Contractors, small companies and healthcare professionals",
    tag: "Contractors & Medical",
  },
  {
    firm: "Henleaze Tax Consultancy",
    office: "Bristol, remote service",
    bestSuited: "Contractors, sole traders, landlords and small limited companies",
    tag: "Fixed Fees & Remote Specialists",
  },
];

const faqsData = [
  {
    question: "How much does an accountant cost in Manchester?",
    answer:
      "Fees vary by firm and by what is included, and most of the firms above do not publish set prices. Ask for a written quote that lists exactly what it covers, such as accounts, tax returns and payroll.",
  },
  {
    question: "Do I need an accountant based in Manchester?",
    answer:
      "No, but a local office helps if you want face to face meetings. Many accountants, including Henleaze, work with clients remotely using online software.",
  },
  {
    question: "Does an accountant need to be qualified?",
    answer:
      "Not legally, because anyone can call themselves a tax agent and HMRC does not regulate agents, but HMRC advises checking for relevant qualifications or professional body membership.",
  },
  {
    question: "When should a small business hire an accountant?",
    answer:
      "Ideally at the start, when you choose a business structure, and certainly before your first year end or tax return deadline. Early advice helps you set up your records properly.",
  },
];

const AccountingFirmsInManchester = () => {
  const [activeSection, setActiveSection] = useState("how-we-chose");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;
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
    headline: "Accounting Firms in Manchester: Offices and Best Fit",
    description:
      "Compare eight accounting firms in Manchester, with office addresses, services and who each suits best, for businesses, contractors and individuals.",
    image: "https://henleazetaxconsultancy.com/manchester-accounting-firms.png",
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
    datePublished: "2026-11-13",
    dateModified: "2026-11-13",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://henleazetaxconsultancy.com/accounting-firms-in-manchester-8-firms-for-businesses-and-contractors",
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
        name: "Accounting Firms in Manchester: 8 Firms for Businesses and Contractors",
        item:
          "https://henleazetaxconsultancy.com/accounting-firms-in-manchester-8-firms-for-businesses-and-contractors",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accounting Firms in Manchester: Offices and Best Fit</title>
        <meta
          name="description"
          content="Compare eight accounting firms in Manchester, with office addresses, services and who each suits best, for businesses, contractors and individuals."
        />
        <meta
          name="keywords"
          content="accounting firms in manchester, accountants in manchester, manchester accountants, chartered accountants manchester, accounting services manchester, contractor accountants manchester"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accounting-firms-in-manchester-8-firms-for-businesses-and-contractors"
        />
        <meta
          property="og:title"
          content="Accounting Firms in Manchester: Offices and Best Fit"
        />
        <meta
          property="og:description"
          content="Compare eight accounting firms in Manchester, with office addresses, services and who each suits best, for businesses, contractors and individuals."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accounting-firms-in-manchester-8-firms-for-businesses-and-contractors"
        />
        <meta
          property="og:image"
          content="https://henleazetaxconsultancy.com/manchester-accounting-firms.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accounting Firms in Manchester: Offices and Best Fit"
        />
        <meta
          name="twitter:description"
          content="Compare eight accounting firms in Manchester, with office addresses, services and who each suits best, for businesses, contractors and individuals."
        />
        <meta
          name="twitter:image"
          content="https://henleazetaxconsultancy.com/manchester-accounting-firms.png"
        />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Layout>
        {/* ── FEATURED IMAGE ─────────────────────────────────────────── */}
        <div className="w-full shadow-inner bg-gray-50" style={{ paddingTop: "72px" }}>
          <img
            src="/manchester-accounting-firms.png"
            alt="Accounting Firms in Manchester: 8 Firms for Businesses and Contractors"
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
                Manchester Accountancy Guide
              </span>
            </div>

            {/* Title (H1) */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Accounting Firms in Manchester: 8 Firms for Businesses and Contractors
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 border-b border-gray-200 pb-6 mb-8">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-amber-600" />
                Henleaze Team
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-600" />
                November 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                9 min read
              </span>
            </div>

            {/* Opening paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                The right{" "}
                <Link
                  to="/tax-planning-manchester"
                  className="text-amber-700 hover:underline font-semibold"
                >
                  accounting firm in Manchester
                </Link>{" "}
                depends on whether you run a company, work as a contractor or need personal tax help, and on how much support you expect. The city has large international firms in the centre, regional groups and smaller practices that work closely with contractors and owner managed businesses.
              </p>
              <p>
                This guide compares eight firms. Seven have a Manchester office, and the eighth is Henleaze Tax Consultancy, a Bristol firm that supports clients remotely. We have not ranked them, because the best fit depends on your circumstances.
              </p>
            </div>

            {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers className="h-4 w-4 text-amber-600" />
                In This Guide
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
                            activeSection === section.id
                              ? "text-amber-600 font-bold"
                              : "text-gray-400"
                          }`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:underline underline-offset-2">
                          {section.title}
                        </span>
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
              {/* Section 1: How We Chose These Accounting Firms in Manchester */}
              <section id="how-we-chose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How We Chose These Accounting Firms in Manchester
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  We chose firms with a verified Manchester address, a clear list of services and recognised professional credentials, rather than ranking by online reviews. Addresses were checked against each firm's own site wherever it published one.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most of these firms do not publish their fees, so ask each one for a written quote before you decide.
                </p>
                <div className="not-prose bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-5 my-6 flex items-start gap-3">
                  <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed m-0">
                    <strong>Tip before enquiring:</strong> Request a written, itemised quote detailing what is covered (annual accounts, corporation tax, personal tax returns, payroll, software subscriptions) so you can make a like-for-like comparison.
                  </p>
                </div>
              </section>

              {/* Section 2: Quick Comparison Table */}
              <section id="quick-comparison" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Quick Comparison Table
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  The table shows where each firm is based and who it suits best.
                </p>

                <div className="overflow-x-auto not-prose my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200 text-gray-900">
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Firm</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Office</th>
                        <th className="py-3.5 px-4 font-bold text-sm sm:text-base">Best suited to</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                      {comparisonData.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            row.firm.includes("Henleaze")
                              ? "bg-amber-50/40 hover:bg-amber-50/60 font-medium"
                              : index % 2 === 0
                                ? "bg-white hover:bg-gray-50/80"
                                : "bg-gray-50/40 hover:bg-gray-50"
                          }
                        >
                          <td className="py-3 px-4 font-bold text-gray-900">
                            {row.firm.includes("Henleaze") ? (
                              <span className="text-amber-800 flex items-center gap-1.5">
                                {row.firm}
                                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">
                                  Remote
                                </span>
                              </span>
                            ) : (
                              row.firm
                            )}
                          </td>
                          <td className="py-3 px-4 text-gray-700">{row.office}</td>
                          <td className="py-3 px-4 text-gray-600">{row.bestSuited}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: Seven Accounting Firms With a Manchester Office */}
              <section id="seven-firms-manchester" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Seven Accounting Firms With a Manchester Office (1 Serving Remotely)
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  These firms all have a Manchester office, from international networks in the city centre to a practice that focuses on contractors.
                </p>

                {/* Secondary Image: manchester-office.png */}
                <div className="not-prose my-8 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-50">
                  <img
                    src="/manchester-office.png"
                    alt="Seven Accounting Firms With a Manchester Office"
                    className="w-full h-auto max-h-[460px] object-contain mx-auto"
                  />
                  <div className="p-3 bg-gray-100 text-center text-xs sm:text-sm text-gray-600 font-medium">
                    Seven accounting firms operating with a Manchester office and one serving remotely.
                  </div>
                </div>
              </section>

              {/* Firm 1: Forvis Mazars */}
              <section id="forvis-mazars" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      1. Forvis Mazars
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      International Network
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Forvis Mazars suits larger and more complex businesses that want audit, tax and advisory work from an international network. Its Manchester office is at One St Peter's Square, M2 3DE, a short walk from Oxford Road and Piccadilly stations.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>One St Peter's Square, Manchester, M2 3DE</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    The firm describes Manchester as its largest office outside London, offering accounting, tax and advisory services.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> its scale and focus make it a stretch for sole traders, contractors and very small companies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 2: Azets */}
              <section id="azets" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      2. Azets
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full">
                      National SME Firm
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Azets suits owner managed businesses, SMEs and larger companies that want a broad range of services from one office. The Manchester team is at Ship Canal House, 98 King Street, M2 4WU, and has around 100 colleagues.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Ship Canal House, 98 King Street, Manchester, M2 4WU</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    It works with family owned businesses, private equity backed firms, international businesses and private individuals. Services include audit, accounting, tax, corporate finance, VAT, employment taxes and restructuring.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> the range is wide, so confirm who will handle your account if your needs are simple.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 3: Xeinadin */}
              <section id="xeinadin" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      3. Xeinadin
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      Landlords &amp; Start-ups
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Xeinadin suits owner managed businesses, landlords and start ups that want accounting, tax and payroll from a large group. Its Manchester office is at 100 Barbirolli Square, and the group has more than 135 offices across the UK and Ireland.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>100 Barbirolli Square, Manchester</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Services include accounts, bookkeeping, cloud accounting, payroll, tax planning, audit and corporate finance, with dedicated pages for landlords and start ups.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> with more than 2,500 team members, it is worth asking which local team will look after your work.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 4: Streets */}
              <section id="streets" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      4. Streets
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                      Private Client &amp; Advisory
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Streets suits private clients and growing businesses that want accounting, tax and advice from an established firm. The Manchester office is at 3 Hardman Square, Spinningfields, M3 3EB.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>3 Hardman Square, Spinningfields, Manchester, M3 3EB</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    The firm has operated for over 100 years and offers accountancy, audit, tax, business advice, corporate finance and financial planning. Private client work covers tax compliance, wealth management, inheritance tax and probate.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> with offices across the UK, ask whether your work will be handled in Manchester.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 5: UHY Williamson Croft */}
              <section id="uhy-williamson-croft" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      5. UHY Williamson Croft
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                      Audit &amp; Advisory
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    UHY Williamson Croft suits growing businesses and individuals that want a mid sized firm with audit and advisory strength. It is at York House, 20 York Street, M2 3BB, and is part of the UHY Hacker Young network.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>York House, 20 York Street, Manchester, M2 3BB</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Services include accountancy, audit and assurance, transaction services, forensic accounting, R&amp;D tax credits and tax advice for companies and individuals. Payroll and cloud accounting are also offered.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> its listed services lean towards audit and advisory work, so a contractor needing straightforward accounts may prefer a smaller practice.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 6: Mitchell Charlesworth */}
              <section id="mitchell-charlesworth" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      6. Mitchell Charlesworth
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full">
                      Contractor &amp; Regional Firm
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Mitchell Charlesworth suits owner managed businesses and contractors who want accounts, tax and payroll from a regional firm. Its Manchester office is on the third floor of 44 Peter Street, M2 5GP, between St Peter's Square and Spinningfields.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Third Floor, 44 Peter Street, Manchester, M2 5GP</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Services include accounting, audit, payroll, tax, VAT, trusts and estates, wealth management and Xero cloud accounting. Warr &amp; Co, a practice that has specialised in contractor accounting since 1994, merged with the firm in October 2025.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> the merger is recent, so ask which team would handle contractor work.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 7: Clearcut Accounting */}
              <section id="clearcut-accounting" className="scroll-mt-28">
                <div className="not-prose bg-white rounded-xl border border-gray-200 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      7. Clearcut Accounting
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full">
                      Contractors &amp; Medical
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Clearcut Accounting suits contractors, small companies and healthcare professionals that want a Manchester practice with contractor services. It is at Parkway 5, 300 Princess Road, M14 7HR, and is open Monday to Friday from 9am to 6pm.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Parkway 5, 300 Princess Road, Manchester, M14 7HR</span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Services include accounting and compliance, tax planning, payroll, umbrella services, R&amp;D tax relief and IR35 advice, plus medical accountancy for GPs, dentists and pharmacies.
                  </p>

                  <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> the office is south of the city centre, so check your travel before visiting.
                    </p>
                  </div>
                </div>
              </section>

              {/* Firm 8: Henleaze Tax Consultancy */}
              <section id="henleaze" className="scroll-mt-28">
                <div className="not-prose bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 rounded-xl border-2 border-amber-300 p-6 sm:p-7 shadow-sm mb-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      8. Henleaze Tax Consultancy, a Remote Option from Bristol
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                      Fixed-Fee Specialist
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <Link to="/" className="text-amber-700 hover:underline font-semibold">
                      Henleaze Tax Consultancy
                    </Link>{" "}
                    suits{" "}
                    <Link
                      to="/services/contractor-accountants"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      contractors
                    </Link>
                    , sole traders, landlords and{" "}
                    <Link
                      to="/services/small-business-accountants"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      small limited companies
                    </Link>{" "}
                    that want clear advice at a fixed fee. Its office is in Bristol, so it has no Manchester address, and support for{" "}
                    <Link
                      to="/accountancy-firm-in-manchester"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      Manchester clients
                    </Link>{" "}
                    is remote.
                  </p>

                  <div className="flex items-start gap-2 text-sm text-gray-600 bg-white/80 p-3 rounded-lg border border-amber-200 mb-4">
                    <MapPin className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Bristol Office (Remote service for Manchester &amp; UK clients via cloud software)
                    </span>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <Link to="/pricing" className="text-amber-700 hover:underline font-semibold">
                      Fixed fees
                    </Link>{" "}
                    mean you know the cost before any work starts. If you are weighing up accountants as a contractor, our guide to{" "}
                    <Link
                      to="/how-to-choose-contractor-accountant"
                      className="text-amber-700 hover:underline font-semibold"
                    >
                      how to choose a contractor accountant
                    </Link>{" "}
                    explains what to look for.
                  </p>

                  <div className="bg-amber-100/70 border-l-4 border-amber-600 p-4 rounded-r-lg mb-6">
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Worth knowing:</strong> if you want face to face meetings in Manchester, one of the seven local firms above will suit you better.
                    </p>
                  </div>

                  {/* Consultation Card */}
                  <div className="bg-gray-900 text-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                      <p className="font-bold text-lg text-white mb-1">
                        Looking for transparent fixed fees with zero surprises?
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Speak directly with Henleaze Tax Consultancy about your contractor, landlord or small business accounting requirements.
                      </p>
                    </div>
                    <Button
                      asChild
                      className="shrink-0 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-2.5 rounded-lg border-none"
                    >
                      <Link to="/contact">Book Free Consultation</Link>
                    </Button>
                  </div>
                </div>
              </section>

              {/* Section 4: How to Choose an Accountant in Manchester */}
              <section id="how-to-choose" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  How to Choose an Accountant in Manchester
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Check their professional qualifications, confirm they handle your type of work and get fees in writing. HMRC's guidance on{" "}
                  <a
                    href="https://www.gov.uk/guidance/how-to-choose-a-tax-agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    choosing a tax agent
                    <ExternalLink className="h-3.5 w-3.5 inline" />
                  </a>{" "}
                  points out that anyone can call themselves a tax agent and that HMRC does not regulate agents, so professional body membership matters.
                </p>

                <p className="text-gray-700 font-medium mb-3">Use this checklist:</p>

                <div className="not-prose bg-gray-50 rounded-xl border border-gray-200 p-6 space-y-3.5 my-6">
                  {[
                    <span>Membership of a recognised body such as ICAEW, ACCA or AAT</span>,
                    <span>
                      Experience with clients like you, such as{" "}
                      <Link
                        to="/services/contractor-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        contractors
                      </Link>
                      ,{" "}
                      <Link
                        to="/services/landlord-accountants"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        landlords
                      </Link>{" "}
                      or directors
                    </span>,
                    <span>Experience with IR35 if you work through a limited company</span>,
                    <span>A named person who will handle your account</span>,
                    <span>Whether fees are fixed or hourly, and what is included</span>,
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm sm:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Ask for a few quotes and compare what each one covers, not only the price. Large firms suit complex needs, while a smaller practice may suit a contractor or sole trader better.
                </p>
              </section>

              {/* Section 5: FAQs */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-8 not-prose bg-white shadow-sm">
                  {faqsData.map((faq, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-base leading-snug">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-amber-600 font-bold text-xl leading-none mt-0.5">
                          {openFaq === idx ? "−" : "+"}
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed bg-gray-50/60 border-t border-gray-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6: Final Words */}
              <section id="final-words" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Final Words
                </h2>
                <div className="w-12 h-1 bg-amber-500 mb-6 rounded" />
                <p className="text-gray-700 leading-relaxed mb-4">
                  When comparing accounting firms in Manchester, the right choice depends on your size, your sector and whether you need business, contractor or personal tax support. Forvis Mazars, Azets and UHY Williamson Croft suit larger needs, while Mitchell Charlesworth and Clearcut Accounting work with contractors. Larger firms also feature in our{" "}
                  <Link
                    to="/top-10-accounting-firms-uk"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    top 10 accounting firms in the UK
                  </Link>{" "}
                  comparison.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whatever you choose, check qualifications, ask for fees in writing and be clear about what you need. If you are a contractor, sole trader, landlord or small limited company and want clear advice at a fixed fee, take a look at{" "}
                  <Link
                    to="/services"
                    className="text-amber-700 hover:underline font-semibold"
                  >
                    Henleaze Tax Consultancy accounting services page
                  </Link>
                  .
                </p>

                {/* Final Banner */}
                <div className="not-prose bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 my-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Ready to speak with a tax and accounting specialist?
                    </h3>
                    <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
                      Discover our transparent, fixed-fee accountancy solutions designed for contractors, freelancers, landlords and growing companies across Manchester and the UK.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Button
                      asChild
                      className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-lg border-none"
                    >
                      <Link to="/contact">Contact Us Today</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-gray-600 text-black hover:bg-gray-800 hover:text-white font-semibold px-5 py-3 rounded-lg"
                    >
                      <Link to="/services">View Services</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AccountingFirmsInManchester;

