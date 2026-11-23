import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";
import LatestBlogsSection from "@/components/common/LatestBlogsSection";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Briefcase,
  Building2,
  Home,
  Users,
  Calculator,
  Receipt,
  Sparkles,
  Phone,
  Film,
  Cpu,
  Layers,
  CalendarCheck,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "creative" | "contractor" | "landlord" | "sme";
  title: string;
  tag: string;
  description: React.ReactNode;
  covers: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
  {
    id: "creative-freelancers",
    category: "creative",
    title: "Creative Freelancer Accountants in Cardiff",
    tag: "Media, Film, TV & Design",
    description: (
      <>
        Cardiff has a significant creative and production sector, with freelancers often working
        across several projects in a tax year. Income may arrive from different production
        companies, agencies or clients, while expenses can include equipment, travel, software,
        training and home-working costs.
      </>
    ),
    covers: [
      "Organising income from multiple projects & production contracts",
      "Recording allowable business expenses, equipment & travel",
      "Preparing Self Assessment tax returns accurately and on time",
      "VAT registration advice where turnover nears the threshold",
      "Tax planning for irregular project-based income",
      "Digital bookkeeping and ongoing record-keeping support",
    ],
    ctaText: "Creative Freelancer Support",
    ctaLink: "/contact",
    icon: Film,
  },
  {
    id: "film-tv-production",
    category: "creative",
    title: "Film and TV Production Accountants in Cardiff",
    tag: "Production Crews & Broadcasters",
    description: (
      <>
        If you move between production projects, your accounting needs may be more complex than a
        typical sole trader’s. You may need to separate project income, track equipment or travel
        costs, manage invoices and plan for periods when work is less regular.
      </>
    ),
    covers: [
      "Project-based income tracking across multiple production firms",
      "Strict expense categorisation for allowable deductions",
      "Self Assessment and personal tax guidance",
      "VAT advice and Making Tax Digital compliance",
      "Cash-flow planning and budgeting between project gaps",
      "Limited company setup when scaling up contracts",
    ],
    ctaText: "Production Accounting Support",
    ctaLink: "/contact",
    icon: Film,
  },
  {
    id: "tech-contractors",
    category: "contractor",
    title: "Technology and Cyber-Security Contractors",
    tag: "Fintech, Cyber & IT Contractors",
    description: (
      <>
        Cardiff’s technology and cyber-security ecosystem includes contractors working with larger
        employers, public-sector bodies and specialist suppliers. If you work through your own
        limited company, the right structure and IR35 position matter before you sign an engagement.
      </>
    ),
    covers: [
      "IR35 status reviews based on actual contracts & working practices",
      "Limited company formation & PSC accounting setup",
      "Optimal salary vs dividend extraction planning",
      "VAT registration and digital quarterly returns",
      "Bookkeeping, payroll and year-end statutory accounts",
      "Corporation Tax and Self Assessment support",
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: Cpu,
  },
  {
    id: "public-sector-contractors",
    category: "contractor",
    title: "Public-Sector Contractors in Cardiff",
    tag: "Welsh Government & NHS Wales",
    description: (
      <>
        Cardiff is home to the Welsh Government and has a substantial NHS Wales presence.
        Contractors working with public-sector bodies or their supply chains may face different
        IR35 considerations from private-sector clients.
      </>
    ),
    covers: [
      "Contract and working arrangement review beyond blanket determinations",
      "Limited company accounting and PSC compliance",
      "Payroll & PAYE integration where deemed employment applies",
      "Quarterly VAT preparation and MTD digital filings",
      "Dividend planning & statutory year-end compliance",
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "student-landlords",
    category: "landlord",
    title: "Student Landlord Accountants in Cardiff",
    tag: "Cathays, Roath & Student HMOs",
    description: (
      <>
        Cardiff University and Cardiff Metropolitan University bring a large student population into
        areas such as Cathays, Roath, Heath and Grangetown. Student lets, HMOs and multi-property
        portfolios can create different accounting and tax considerations from a standard single buy-to-let.
      </>
    ),
    covers: [
      "Rental income and allowable expense record-keeping",
      "Self Assessment tax returns with full property schedules",
      "Property digital bookkeeping and cash-flow monitoring",
      "Capital Gains Tax planning on property disposals",
      "Portfolio reporting across multiple Cardiff properties",
      "Accounting support for HMOs and limited-company property structures",
    ],
    ctaText: "Landlord Accounting Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "small-business-cardiff",
    category: "sme",
    title: "Small Business Accountants in Cardiff",
    tag: "Cardiff Bay to Pontcanna & Canton",
    description: (
      <>
        We support small businesses across Cardiff with bookkeeping, VAT returns, payroll, management
        reporting, year-end accounts and corporation tax. This includes businesses in Cardiff Bay, the
        city centre, Pontcanna, Canton, Whitchurch and the wider Cardiff Capital Region.
      </>
    ),
    covers: [
      "Accurate day-to-day cloud bookkeeping with live bank feeds",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Monthly management accounts & profit margin monitoring",
      "Year-end statutory accounts preparation & Corporation Tax filing",
      "Clear monthly financial visibility without year-end surprises",
    ],
    ctaText: "Small Business Accounting Services",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "vat-bookkeeping-cardiff",
    category: "sme",
    title: "VAT and Bookkeeping for Cardiff Businesses",
    tag: "Cloud Records & Digital Compliance",
    description: (
      <>
        Accurate records make VAT returns, funding applications and year-end accounts easier. We
        help Cardiff businesses maintain cloud-based bookkeeping, reconcile transactions, prepare VAT
        returns and meet Making Tax Digital requirements.
      </>
    ),
    covers: [
      "Real-time cloud bookkeeping setup and bank feeds",
      "Quarterly VAT return preparation and MTD submission",
      "Rolling turnover threshold monitoring",
      "Guidance on Standard, Flat Rate and Margin schemes",
      "Reconciliation of sales, costs and merchant feeds",
    ],
    ctaText: "VAT and Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "payroll-employers-cardiff",
    category: "sme",
    title: "Payroll for Cardiff Employers",
    tag: "Staff Payslips, RTI & Workplace Pensions",
    description: (
      <>
        If you employ staff in Cardiff, payroll needs to be accurate every pay cycle. We provide
        payroll support covering payslips, RTI submissions, pension auto-enrolment, PAYE compliance
        and starter or leaver processing.
      </>
    ),
    covers: [
      "Weekly, bi-weekly or monthly digital payslip generation",
      "Real Time Information (RTI) submissions to HMRC",
      "Workplace pension auto-enrolment and pension contributions",
      "P45, P60 and starter/leaver administrative processing",
      "PAYE and National Insurance calculations & liability reminders",
    ],
    ctaText: "Payroll and HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "rd-tax-cardiff",
    category: "sme",
    title: "R&D Tax Relief for Cardiff Innovation Businesses",
    tag: "Cyber, Semiconductors & Tech",
    description: (
      <>
        Cardiff has strengths in cyber security, compound semiconductors, life sciences and
        technology. Businesses involved in product development, software, engineering, research or
        technical problem-solving may be eligible for R&D tax relief.
      </>
    ),
    covers: [
      "Careful technical eligibility and project scope assessment",
      "Detailed qualifying expenditure calculations (staff, subcontractors, consumables)",
      "Preparation of robust technical and financial evidence",
      "Corporation Tax CT600 amendment and submission",
      "Ongoing defensible advice avoiding broad, risky assumptions",
    ],
    ctaText: "Explore R&D Tax Relief",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
];

const challengesTable = [
  {
    role: "A creative freelancer",
    concern: "Irregular income, expenses and Self Assessment",
    solution: "Bookkeeping, expense records, Self Assessment and tax planning",
  },
  {
    role: "A tech or cyber contractor",
    concern: "IR35, limited company tax and dividends",
    solution: "IR35 review, company accounts, VAT, payroll and dividend planning",
  },
  {
    role: "A film or TV production freelancer",
    concern: "Multiple short engagements and income tracking",
    solution: "Income organisation, expense claims, Self Assessment and tax planning",
  },
  {
    role: "A landlord",
    concern: "Rental income, allowable costs and Capital Gains Tax",
    solution: "Property bookkeeping, rental tax returns and portfolio reporting",
  },
  {
    role: "A growing SME",
    concern: "VAT, payroll, cash flow and management information",
    solution: "Bookkeeping, VAT, payroll, management accounts and year-end support",
  },
];

const fixedFeeIncludes = [
  "Bookkeeping and reconciliations.",
  "VAT return preparation.",
  "Payroll and pension administration.",
  "Year-end accounts and Corporation Tax.",
  "Self Assessment tax returns.",
  "IR35 reviews for contractors.",
  "Rental income and property tax support.",
  "Management reporting and cash-flow monitoring.",
  "Tax planning advice.",
];

const areasServedList = [
  {
    area: "Cardiff City Centre & Cardiff Bay",
    desc: "Commercial consultancies, tech companies, waterfront businesses, and creative studios.",
  },
  {
    area: "Pontcanna, Canton & Grangetown",
    desc: "Independent media professionals, freelancers, cafés, and local trade operations.",
  },
  {
    area: "Cathays, Roath, Splott & Adamsdown",
    desc: "Student landlords, HMO operators, creative workers, and local retailers.",
  },
  {
    area: "Heath, Llandaff & Whitchurch",
    desc: "Healthcare professionals, established family businesses, and limited company directors.",
  },
  {
    area: "Penarth, Dinas Powys & Vale of Glamorgan",
    desc: "Residential landlords, business founders, independent contractors, and consultants.",
  },
  {
    area: "Newport, Caerphilly & Cardiff Capital Region",
    desc: "Manufacturing suppliers, technology firms, and regional contracting teams.",
  },
];

const faqs = [
  {
    q: "Who are the best accountants in Cardiff?",
    a: "The best accountants in Cardiff depend on your needs. Look for transparent fixed fees, relevant experience with your business type, clear communication, reliable deadline management and proactive tax advice. Henleaze Tax Consultancy provides fixed-fee accounting and tax support for Cardiff creative freelancers, contractors, landlords and SMEs remotely from Bristol.",
  },
  {
    q: "Do you have an office in Cardiff?",
    a: "No. Henleaze Tax Consultancy is based in Bristol and supports Cardiff clients remotely. We use cloud accounting, secure document sharing, phone, email and video calls, so clients do not need to attend an office in person.",
  },
  {
    q: "Can I switch accountants during the tax year?",
    a: "Yes. We can contact your previous accountant, request professional clearance and obtain the records needed to continue without disrupting your deadlines. This is a common process and can usually be handled smoothly.",
  },
];

const AccountantsInCardiff: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "creative" | "contractor" | "landlord" | "sme">("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeTab);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Henleaze Tax Consultancy - Accountants in Cardiff",
    url: "https://henleazetaxconsultancy.com/accountants-in-cardiff",
    description:
      "Best accountants in Cardiff for creative freelancers, tech contractors, landlords & SMEs. Fixed-fee IR35, VAT, payroll, rental tax & Self Assessment support.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: [
      { "@type": "City", name: "Cardiff" },
      { "@type": "AdministrativeArea", name: "Cardiff Bay" },
      { "@type": "AdministrativeArea", name: "Pontcanna" },
      { "@type": "AdministrativeArea", name: "Cathays" },
      { "@type": "AdministrativeArea", name: "Roath" },
      { "@type": "AdministrativeArea", name: "Whitchurch" },
      { "@type": "AdministrativeArea", name: "Penarth" },
      { "@type": "AdministrativeArea", name: "Cardiff Capital Region" },
    ],
    serviceType: [
      "Creative Freelancer Accounting",
      "Film and TV Production Accounting",
      "Technology & Cyber Contractor Accounting",
      "IR35 Status Reviews",
      "Public-Sector Contractor Accounting",
      "Student Landlord & HMO Accounting",
      "Small Business Accounting",
      "VAT and Bookkeeping",
      "Payroll Services",
      "R&D Tax Relief Claims",
    ],
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
    ],
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Best Accountants in Cardiff | Creative &amp; SME Tax Support</title>
        <meta
          name="description"
          content="Best accountants in Cardiff for creative freelancers, tech contractors, landlords & SMEs. Fixed-fee IR35, VAT, payroll, rental tax & Self Assessment support."
        />
        <meta
          name="keywords"
          content="best accountants in cardiff, accountants in cardiff, cardiff accountants, creative freelancer accountant cardiff, tech contractor accountant cardiff, small business accountants cardiff"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-cardiff"
        />
        <meta
          property="og:title"
          content="Best Accountants in Cardiff | Creative &amp; SME Tax Support"
        />
        <meta
          property="og:description"
          content="Best accountants in Cardiff for creative freelancers, tech contractors, landlords & SMEs. Fixed-fee IR35, VAT, payroll, rental tax & Self Assessment support."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-cardiff"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://henleazetaxconsultancy.com/cardiff.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Accountants in Cardiff | Creative &amp; SME Tax Support"
        />
        <meta
          name="twitter:description"
          content="Best accountants in Cardiff for creative freelancers, tech contractors, landlords & SMEs. Fixed-fee IR35, VAT, payroll, rental tax & Self Assessment support."
        />
        <meta name="twitter:image" content="https://henleazetaxconsultancy.com/cardiff.jpeg" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
      </Helmet>

      <Layout>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy via-navy to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Featured Hero Image on Top */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="/cardiff.jpeg"
                  alt="Accountants in Cardiff - Henleaze Tax Consultancy"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={600}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-semibold shadow-md">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Cardiff &amp; Capital Region &bull; Fixed-Fee Remote Support</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Cardiff:{" "}
                <span className="text-gold block sm:inline">
                  Fixed Fee Support for Contractors and Small Businesses
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Cardiff has a growing mix of creative freelancers, technology contractors,
                public-sector suppliers, small businesses and landlords. That mix creates
                accounting questions that do not always fit a standard monthly package: irregular
                project income, IR35 status, multiple engagements, VAT registration, payroll and rental tax.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Henleaze Tax Consultancy provides fixed-fee accounting and tax support for Cardiff
                clients remotely from Bristol. We work with contractors, freelancers, landlords,
                sole traders and limited companies through cloud accounting, secure document
                sharing, phone and video calls.
              </p>

              <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                We support clients across Cardiff city centre, Cardiff Bay, Pontcanna, Canton,
                Cathays, Roath, Heath, Grangetown, Splott, Whitchurch, Llandaff, Penarth and the wider
                Cardiff Capital Region.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact">
                    Request a Fixed-Fee Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:border-gold/60"
                >
                  <a href="#services">
                    Explore Services
                    <ChevronDown className="ml-2 h-5 w-5 text-gold" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                {[
                  "Agreed Fixed Fees",
                  "Creative & Tech Specialists",
                  "IR35 & Landlord Support",
                  "100% Cloud & Remote-Ready",
                ].map((t) => (
                  <div key={t} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────────────── */}
        <TrustBar />

        {/* ── SECTION 1: CARDIFF'S ACCOUNTING CHALLENGES ────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Local Sector Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Cardiff’s Accounting Challenges
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Cardiff’s economy is not built around one type of client. It includes technology and
                cyber-security businesses, film and television production, public-sector contracting,
                professional services, retail, hospitality and a large student-rental market.
              </p>
              <p className="text-base text-gray-600 mt-2 font-medium">
                That means the accounting priority changes depending on how you work:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-amber-50/80 border-b border-amber-200 text-gray-900">
                    <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/4">
                      If you are…
                    </th>
                    <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/3">
                      Your main accounting concern
                    </th>
                    <th className="py-4 px-6 font-bold text-sm sm:text-base">
                      How we help
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                  {challengesTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60 hover:bg-slate-50"}
                    >
                      <td className="py-4 px-6 font-bold text-gray-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{row.role}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-700 font-medium">{row.concern}</td>
                      <td className="py-4 px-6 text-gray-600">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-5 text-center max-w-3xl mx-auto">
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed m-0">
                Rather than treating every Cardiff client the same, we start by understanding how you
                earn, when income arrives, what costs recur and which deadlines matter most.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ACCOUNTING & TAX SUPPORT FOR CARDIFF CLIENTS ─ */}
        <section id="services" className="py-16 md:py-24 bg-slate-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Tailored Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Accounting and Tax Support for Cardiff Clients
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-gray-700 text-base sm:text-lg">
                Comprehensive accounting solutions shaped around freelancers, tech contractors,
                landlords and growing businesses across Cardiff.
              </p>

              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {[
                  { id: "all", label: "All Services" },
                  { id: "creative", label: "Creative & Film/TV" },
                  { id: "contractor", label: "Tech & Public Sector" },
                  { id: "landlord", label: "Student Landlords" },
                  { id: "sme", label: "SMEs & Payroll" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-navy text-gold shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border-2 border-gray-100 hover:border-amber-300 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.covers.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                          <span className="text-gray-800 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-3 rounded-xl border-none shadow-sm hover:shadow-md"
                  >
                    <Link to={service.ctaLink} className="flex items-center justify-center gap-2">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-gold" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
              >
                <Link to="/services">View All Accounting Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: WHAT YOUR FIXED FEE CAN INCLUDE ───────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                What Your Fixed Fee Can Include
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Our pricing is fixed and agreed before work begins. You will know what is included,
                what is excluded and when the fee applies.
              </p>
              <p className="text-gray-600 text-sm sm:text-base font-semibold">
                Depending on your needs, a fixed-fee package can include:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {fixedFeeIncludes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl border border-gray-200 p-5 flex items-start gap-3 hover:bg-amber-50/40 hover:border-amber-300 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm sm:text-base font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto mb-8">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed m-0">
                We do not charge hourly for routine questions, and we do not increase the fee simply
                because a conversation took longer than expected. If your requirements change, we
                explain the revised scope before any change is made.
              </p>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-bold px-8 py-4 rounded-full text-base shadow-md"
              >
                <Link to="/pricing">See Our Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: AREAS WE SERVE ACROSS CARDIFF ──────────────── */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 rounded px-3 py-1 mb-3">
                Regional Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Areas We Serve Across Cardiff
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                We provide remote accounting and tax support across Cardiff and surrounding areas, including:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {areasServedList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white text-base mb-1">{item.area}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm m-0 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 border border-white/15 rounded-xl p-4 text-center max-w-2xl mx-auto">
              <p className="text-slate-300 text-xs sm:text-sm m-0">
                This means we support clients in these areas remotely; it does not mean we have a physical
                office in each location.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: FAQS ───────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Cardiff Accountant FAQs
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
            </div>

            <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-amber-600 font-bold text-2xl leading-none mt-0.5">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed bg-gray-50/50 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEARBY LOCATIONS & LATEST BLOGS ───────────────────────── */}
        <NearbyLocationsSection currentCity="Cardiff" />
        <LatestBlogsSection />

        {/* ── FINAL CTA: SPEAK TO A CARDIFF ACCOUNTANT ─────────────── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-navy via-slate-900 to-navy text-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Speak to a Cardiff Accountant
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              If you are looking for the best accountants in Cardiff who understand the needs of
              creative freelancers, contractors, landlords and growing businesses, request a fixed-fee
              quote. We will review your situation, explain what support you need and set out the cost
              before any work begins.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Request a Fixed-Fee Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300"
              >
                <a href="tel:+447949956279" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call +44 7949 956279</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AccountantsInCardiff;
