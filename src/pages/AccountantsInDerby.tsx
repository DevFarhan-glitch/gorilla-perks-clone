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
  ChevronRight,
  Briefcase,
  Building2,
  Home,
  Users,
  Calculator,
  FileText,
  Receipt,
  Sparkles,
  UserCheck,
  TrendingUp,
  Phone,
  Clock,
  Shield,
  HelpCircle,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "business" | "contractor" | "landlord" | "tax";
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
    id: "sole-trader-accounting",
    category: "business",
    title: "Sole Trader Accountants in Derby",
    tag: "Self-Employed & Freelance",
    description: (
      <>
        If you are a self-employed tradesperson, consultant, retailer,
        freelancer or small supplier, we can handle your Self Assessment tax
        return, bookkeeping, expense records, VAT registration and ongoing tax
        planning. Our sole trader support is suitable for businesses that want a
        simple monthly cost rather than paying separately for each return, phone
        call or piece of advice.
      </>
    ),
    covers: [
      "Self Assessment tax return preparation & filing",
      "Digital bookkeeping & expense categorisation",
      "Allowable expense maximisation to reduce tax",
      "Making Tax Digital (MTD) guidance & readiness",
      "Unlimited routine support without extra charges",
    ],
    ctaText: "Personal Tax & Self Assessment Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accountants in Derby",
    tag: "SMEs & Growing Teams",
    description: (
      <>
        We support small companies across Derby with bookkeeping, VAT returns,
        payroll, management accounts, year-end accounts, corporation tax and
        Companies House compliance. This is useful for businesses supplying
        larger manufacturers, operating in professional services, running a
        local trade business or growing from a one-person operation into a small
        team.
      </>
    ),
    covers: [
      "Accurate day-to-day cloud bookkeeping",
      "Quarterly VAT return preparation & submission",
      "Year-end statutory accounts & Corporation Tax",
      "Companies House confirmation statements & compliance",
      "Periodic management figures to track monthly profit",
    ],
    ctaText: "Small Business Accounting",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "contractor-accounting",
    category: "contractor",
    title: "Contractor Accountants in Derby",
    tag: "Aerospace, Rail & Automotive",
    description: (
      <>
        Derby’s aerospace, rail and automotive sectors create demand for
        engineering, technical, IT and project-based contractors. If you work
        through a limited company, we can support you with IR35 reviews,
        company formation, salary and dividend planning, VAT, bookkeeping,
        payroll and annual accounts.
      </>
    ),
    covers: [
      "Comprehensive IR35 contract & working practices reviews",
      "Limited company formation & PSC setup",
      "Tax-efficient dividend and salary optimisation",
      "Quarterly VAT returns & MTD digital records",
      "Annual accounts and Corporation Tax filing",
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accountants in Derby",
    tag: "Single Lets, HMOs & Portfolios",
    description: (
      <>
        Derby’s employment base and transport links support steady rental
        demand across the city and surrounding areas. We help landlords with
        rental income reporting, allowable expenses, property bookkeeping,
        Capital Gains Tax planning and portfolio reporting. This applies whether
        you let one property, manage an HMO or are building a buy-to-let
        portfolio.
      </>
    ),
    covers: [
      "Rental property accounts & Self Assessment declarations",
      "Maximising allowable repair, maintenance & running costs",
      "Section 24 mortgage interest relief calculations",
      "Capital Gains Tax (CGT) advice before property disposals",
      "HMO and multi-unit portfolio bookkeeping",
    ],
    ctaText: "Landlord Accounting Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping for Derby Businesses",
    tag: "Making Tax Digital Compliant",
    description: (
      <>
        Accurate bookkeeping makes VAT returns, cash-flow planning and year-end
        accounts easier. We help Derby businesses maintain cloud-based records,
        prepare VAT returns, reconcile transactions and meet Making Tax Digital
        requirements.
      </>
    ),
    covers: [
      "Real-time cloud bookkeeping with automated bank feeds",
      "Making Tax Digital (MTD) compliant digital VAT filing",
      "VAT registration monitoring against rolling turnover",
      "Guidance on Flat Rate, Standard and Margin VAT schemes",
      "Clean financial ledgers that withstand HMRC checks",
    ],
    ctaText: "VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "payroll-services",
    category: "business",
    title: "Payroll for Small Derby Employers",
    tag: "PAYE & Auto-Enrolment",
    description: (
      <>
        If you employ staff in Derby, payroll needs to be accurate every pay
        cycle. We provide payroll support covering payslips, RTI submissions,
        pension auto-enrolment, PAYE compliance and starter or leaver
        processing.
      </>
    ),
    covers: [
      "Accurate weekly, fortnightly, or monthly pay runs",
      "Itemised digital payslips, P60s, and P45 generation",
      "Real-Time Information (RTI) submissions to HMRC",
      "Workplace pension auto-enrolment & contribution reports",
      "Hassle-free starter and leaver onboarding compliance",
    ],
    ctaText: "Payroll and HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Relief for Derby Suppliers",
    tag: "Engineering & Technical Problem Solving",
    description: (
      <>
        Derby’s engineering and manufacturing base means smaller suppliers,
        subcontractors and technical businesses may carry out qualifying
        research and development work—even when they are not the main
        manufacturer. We assess eligibility carefully and prepare R&amp;D tax
        relief claims using appropriate technical and financial evidence. This
        is relevant for businesses involved in product development, process
        improvement, engineering problem-solving, software development or
        technical testing.
      </>
    ),
    covers: [
      "Honest eligibility assessment before spending time on a claim",
      "Engineering, manufacturing & technical process review",
      "Detailed technical narrative preparation aligned to HMRC guidelines",
      "Apportionment of qualifying staff, subcontractor & material costs",
      "Corporation Tax reduction or payable cash credit claim",
    ],
    ctaText: "R&D Tax Credit Services",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Finance for Growing Derby Companies",
    tag: "Complete Finance Function",
    description: (
      <>
        For businesses that need better financial control but are not ready to
        hire a full-time accountant, our outsourced accounting service can cover
        bookkeeping, management reporting, payroll coordination, cash-flow
        monitoring and month-end reporting.
      </>
    ),
    covers: [
      "Full month-end bookkeeping & bank reconciliations",
      "Periodic management accounts & performance KPIs",
      "Cash-flow forecasting & working capital tracking",
      "Payroll coordination & supplier payment runs",
      "Senior finance expertise at a fraction of full-time cost",
    ],
    ctaText: "Outsourced Accounting Services",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
];

const whoWeHelpList = [
  "Sole traders and self-employed tradespeople.",
  "Small suppliers and subcontractors in engineering, rail, automotive and construction.",
  "Contractors working through limited companies.",
  "Landlords with single lets, HMOs or property portfolios.",
  "Retailers, hospitality businesses and local service providers.",
  "Startups and growing limited companies needing structured accounting support.",
];

const areasServedList = [
  {
    title: "Derby City Centre & Cathedral Quarter",
    desc: "Supporting independent shops, professional practices, hospitality venues, and consultancies.",
  },
  {
    title: "Littleover, Mickleover & Sunnyhill",
    desc: "Fixed-fee accounts for local trades, service firms, contractors, and buy-to-let landlords.",
  },
  {
    title: "Alvaston, Boulton & Shelton Lock",
    desc: "Sole trader, SME, and payroll support across residential and light commercial hubs.",
  },
  {
    title: "Chaddesden, Spondon & Oakwood",
    desc: "Cloud bookkeeping, Self Assessment, and limited company accounting for local businesses.",
  },
  {
    title: "Allestree, Darley Abbey & Quarndon",
    desc: "Tax planning, director dividend strategies, and property accounts for local owners.",
  },
  {
    title: "Belper, Ripley & Amber Valley",
    desc: "Supporting manufacturing subcontractors, independent businesses, and sole traders.",
  },
  {
    title: "Ilkeston, Long Eaton & Erewash",
    desc: "Comprehensive remote accounting for transport, logistics, engineering, and trade firms.",
  },
  {
    title: "Burton upon Trent & South Derbyshire",
    desc: "VAT, bookkeeping, payroll, and corporate compliance for cross-border businesses.",
  },
];

const remoteProcessSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We discuss your business structure, income, bookkeeping setup and accounting needs to understand what you require.",
  },
  {
    step: "02",
    title: "Onboarding",
    desc: "We collect records, connect cloud accounting software and identify any urgent deadlines so everything is under control.",
  },
  {
    step: "03",
    title: "Ongoing Support",
    desc: "We manage bookkeeping, VAT, payroll, accounts and tax filings as agreed, keeping your records current and compliant.",
  },
  {
    step: "04",
    title: "Advice When Needed",
    desc: "You can contact us by email, phone or video call for practical guidance without worrying about an hourly clock.",
  },
];

const faqs = [
  {
    q: "Who are the most affordable accountants in Derby?",
    a: "The most affordable accountant is not necessarily the one with the lowest headline price. Look for a fixed fee, a clear list of included services, accurate bookkeeping, timely filings and proactive tax advice. Henleaze Tax Consultancy offers fixed-fee accounting for Derby sole traders, contractors, landlords and small companies, with costs agreed before work begins.",
  },
  {
    q: "How much does an accountant cost in Derby?",
    a: "Accountant costs in Derby depend on the services required, business structure, transaction volume, payroll needs and whether VAT or multiple income sources are involved. A basic sole trader arrangement usually costs less than a limited company package that includes bookkeeping, VAT, payroll, year-end accounts and corporation tax.",
  },
  {
    q: "Do you have an office in Derby?",
    a: "No. Henleaze Tax Consultancy is based in Bristol and supports Derby clients remotely. We use cloud accounting, secure document sharing, phone, email and video calls, so clients do not need to visit an office.",
  },
  {
    q: "Is a fixed-fee accountant better for a small business?",
    a: "For many small businesses, yes. Fixed-fee accounting makes monthly costs predictable and avoids hourly charges for routine advice. The most important point is to confirm exactly what the fee includes before signing up.",
  },
  {
    q: "Is your Derby pricing different from other locations?",
    a: "No. Fees are based on the level of support required, not the client’s location. Derby clients receive the same fixed-fee approach as clients elsewhere in the UK.",
  },
];

const AccountantsInDerby: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "business" | "contractor" | "landlord" | "tax"
  >("all");
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
    name: "Henleaze Tax Consultancy - Affordable Accountants in Derby",
    url: "https://henleazetaxconsultancy.com/affordable-accountants-in-derby",
    description:
      "Fixed-fee, affordable accountants in Derby for sole traders and small companies. No hidden costs, clear advice. Book a free consultation today.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Derby" },
    serviceType: [
      "Sole Trader Accounting",
      "Small Business Accounting",
      "Contractor Accounting",
      "Landlord Accounting",
      "VAT and Bookkeeping",
      "Payroll Services",
      "R&D Tax Relief Claims",
      "Outsourced Finance",
      "Personal Tax and Self Assessment",
    ],
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:30",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Affordable Accountants in Derby For SMEs &amp; Sole Traders</title>
        <meta
          name="description"
          content="Fixed-fee, affordable accountants in Derby for sole traders and small companies. No hidden costs, clear advice. Book a free consultation today."
        />
        <meta
          name="keywords"
          content="affordable accountants in derby, accountants in derby, accountant derby, sole trader accountants derby, small business accountants derby, fixed fee accountants derby, contractor accountants derby, landlord accountants derby"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/affordable-accountants-in-derby"
        />
        <meta
          property="og:title"
          content="Affordable Accountants in Derby For SMEs &amp; Sole Traders"
        />
        <meta
          property="og:description"
          content="Fixed-fee, affordable accountants in Derby for sole traders and small companies. No hidden costs, clear advice. Book a free consultation today."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/affordable-accountants-in-derby"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Affordable Accountants in Derby For SMEs &amp; Sole Traders"
        />
        <meta
          name="twitter:description"
          content="Fixed-fee, affordable accountants in Derby for sole traders and small companies. No hidden costs, clear advice. Book a free consultation today."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Layout>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy via-navy to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Featured Image on Top */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="/derby.png"
                  alt="Affordable Accountants in Derby - Henleaze Tax Consultancy"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={600}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-semibold shadow-md">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Derby &amp; Derbyshire &bull; Fixed-Fee Remote Support</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Affordable Accountants in Derby for{" "}
                <span className="text-gold block sm:inline">
                  Sole Traders and Small Companies
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Henleaze Tax Consultancy provides affordable, fixed-fee
                accounting and tax support for sole traders, contractors,
                landlords and small companies across Derby. We are based in
                Bristol and work with Derby clients remotely through cloud
                accounting, secure document sharing, phone and video calls.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Affordable does not mean cutting corners. A low monthly fee is
                only good value if your bookkeeping is accurate, allowable
                expenses are claimed correctly, deadlines are met and you
                understand the tax position before it becomes a problem. Our
                fees are agreed before work begins, so you know what support you
                are paying for each month.
              </p>

              <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                We support businesses and individuals across Derby, Littleover,
                Mickleover, Alvaston, Chaddesden, Spondon, Oakwood, Allestree,
                Darley Abbey and nearby areas including Belper, Ilkeston and
                Burton upon Trent.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact">
                    Book a Free Consultation
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
                  "Fixed Agreed Fees",
                  "No Hidden Costs",
                  "Sole Trader & SME Focus",
                  "100% Remote-Ready",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center justify-center gap-2"
                  >
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

        {/* ── WHY DERBY BUSINESSES CHOOSE FIXED-FEE ────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Predictable &amp; Practical
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Why Derby Businesses Choose Fixed-fee Accounting
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    <Link
                      to="/accounting-firms-in-derby"
                      className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                    >
                      Derby
                    </Link>{" "}
                    has a strong base of engineering, advanced manufacturing,
                    rail, automotive, construction, professional services and
                    small supply-chain businesses. Many sole traders and SMEs in
                    the city need dependable accounting without paying for a
                    large in-house finance team.
                  </p>
                  <p>
                    Our fixed-fee approach is designed for businesses that want
                    predictable costs and practical advice:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 mt-6 mb-8">
                  {[
                    "No hourly billing or unexpected charges for routine questions.",
                    "A clear monthly cost based on the services your business actually needs.",
                    "Bookkeeping, VAT, payroll and year-end support handled in one place.",
                    "Support for sole traders, limited companies, contractors and landlords.",
                    "Remote accounting support, so there is no need to travel to Bristol.",
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-slate-800 text-sm sm:text-base font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-slate-600 text-sm">
                    Ready to discuss your fixed-fee plan?
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-navy font-bold text-sm hover:text-gold transition-colors gap-1 group"
                  >
                    Book a free consultation
                    <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION ─────────────────────────────────────── */}
        <section
          id="services"
          className="py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-navy text-white relative overflow-hidden"
        >
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                Tailored Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting Support for Derby’s SME Economy
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and practical tax advice
                tailored for sole traders, SMEs, contractors and landlords.
              </p>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {[
                { key: "all", label: "All Services" },
                { key: "business", label: "Sole Traders & SMEs" },
                { key: "contractor", label: "Contractor Accounting" },
                { key: "landlord", label: "Landlord Accounting" },
                { key: "tax", label: "R&D & Tax Planning" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeTab === tab.key
                      ? "bg-gold text-navy shadow-lg shadow-gold/30 font-bold scale-105"
                      : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-gold/60 shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.18)] transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
                  >
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-gold/20 transition-all duration-500" />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="h-14 w-14 rounded-2xl bg-blue-600/20 group-hover:bg-gold flex items-center justify-center text-blue-400 group-hover:text-navy transition-all duration-300 shadow-inner">
                          <IconComponent className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>

                      <div className="text-slate-300 text-sm leading-relaxed mb-6">
                        {service.description}
                      </div>

                      <div className="border-t border-white/10 pt-5 mb-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                          Key Features &amp; Support:
                        </p>
                        <ul className="space-y-2.5">
                          {service.covers.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-xs sm:text-sm text-slate-200 font-medium"
                            >
                              <CheckCircle2 className="h-4 w-4 text-gold mr-2.5 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button
                        asChild
                        className="w-full justify-between bg-gold hover:bg-gold-light text-navy font-bold rounded-xl shadow-md hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
                      >
                        <Link to={service.ctaLink}>
                          <span>{service.ctaText}</span>
                          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* See All Services Banner */}
            <div className="mt-16 text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <p className="text-slate-200 text-sm sm:text-base mb-4">
                Looking for our complete range of tax planning, secretarial, and
                business advisory solutions?
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-5 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                <Link to="/services">
                  See All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP IN DERBY ─────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Derby Client Base
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Who We Help in Derby
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We work with a range of Derby clients across multiple sectors
                and setups.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {whoWeHelpList.map((client, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:border-gold/60 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-gold/20 text-navy font-bold flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-800 text-sm sm:text-base font-medium">
                    {client}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-navy to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="max-w-2xl">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  Tired of Reconstructing Records at Year End?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  If you have been managing your own books but want a clearer,
                  more reliable process, a fixed-fee accountant can often be
                  more cost-effective than trying to reconstruct records at year
                  end.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-5 rounded-full shadow-lg hover:scale-105 transition-all"
                >
                  <Link to="/contact">
                    Speak to an Accountant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW OUR DERBY ACCOUNTING FEES WORK ───────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                Transparent Pricing
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                How Our Derby Accounting Fees Work
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                Our pricing is fixed and agreed before work starts. You will know
                what is included, what is excluded and when the fee applies.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                We do not charge by the hour for routine questions, and we do
                not increase a fee simply because a conversation took longer
                than expected. Where your requirements change—for example, you
                take on employees, register for VAT or add a new company—we will
                explain the revised scope before any change is made.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-10 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/pricing">
                    See Our Pricing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:border-gold/60"
                >
                  <Link to="/contact">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── AREAS WE SERVE AROUND DERBY ──────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Local Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Areas We Serve Around Derby
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We provide remote accounting and tax support across Derby and
                the surrounding area, including:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {areasServedList.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-gold/60 hover:-translate-y-1 transition-all"
                >
                  <MapPin className="w-6 h-6 text-gold mb-3" />
                  <h3 className="font-display font-bold text-navy text-lg mb-2">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center max-w-2xl mx-auto p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs sm:text-sm text-navy font-medium">
              💡 <strong>Please note:</strong> This means we support clients in
              these areas remotely; it does not mean we have a physical office in
              each location.
            </div>
          </div>
        </section>

        {/* ── HOW REMOTE ACCOUNTING WORKS ──────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/30">
                Simple Online Workflow
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                How Remote Accounting Works
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                Working with an online accountant does not need to be
                complicated. Most Derby clients follow a simple process:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {remoteProcessSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-display text-3xl font-extrabold text-gold block mb-3">
                      {step.step}
                    </span>
                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
                This model suits Derby business owners who want responsive
                support without arranging office meetings.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-5 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                <Link to="/contact">
                  Start with a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Clear Answers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Derby Accountant FAQs
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-white/15 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold/60 shadow-sm bg-white/5 backdrop-blur-md"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="font-display font-bold text-base sm:text-lg text-white pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gold shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/10">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NEARBY LOCATIONS ─────────────────────────────────────── */}
        <NearbyLocationsSection currentCity="Derby" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Speak to an Affordable Derby Accountant
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you are looking for affordable accountants in Derby who offer
              clear fixed fees, practical advice and reliable support, book a
              free consultation. We will review your situation, explain the
              support you need and provide a quote before any work begins.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-10 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <a
                href="tel:+447949956279"
                className="inline-flex items-center text-white hover:text-gold font-bold text-lg transition-colors py-3 px-6 rounded-full border border-white/20 hover:border-gold/40 shadow-sm"
              >
                <Phone className="mr-3 h-5 w-5 text-gold" />
                +44 7949 956279
              </a>
            </div>

            <div className="pt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> Free Initial Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> Fixed Fees Agreed Upfront
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> No Long-Term Contract Lock-in
              </span>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AccountantsInDerby;
