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
  Cpu,
  Train,
  Car,
  Rocket,
  Wrench,
  Store,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "contractor" | "business" | "landlord" | "tax";
  title: string;
  description: React.ReactNode;
  covers: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
  tag: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "contractor-accounting",
    category: "contractor",
    title: "Contractor Accounting",
    tag: "Aerospace, Rail & Automotive",
    description: (
      <>
        Engineering and technical contractors supplying Derby's aerospace, rail and
        automotive sectors need their{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        handled properly,{" "}
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35 status
        </Link>
        , limited company structuring, dividend planning, bookkeeping, VAT, payroll
        and year end filing, all covered under one fixed fee.
      </>
    ),
    covers: [
      "Rigorous IR35 status & contract reviews",
      "Tax-efficient limited company structuring",
      "Strategic salary vs dividend planning",
      "Digital bookkeeping, VAT & RTI payroll",
      "Statutory accounts & Corporation Tax filing",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Sole Traders & Small Companies",
    description: (
      <>
        For sole traders and small companies across Derby, our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service keeps bookkeeping, VAT and payroll current and accurate, without
        charging you for services sized for a much bigger business.
      </>
    ),
    covers: [
      "Day-to-day cloud bookkeeping (Xero & QuickBooks)",
      "Making Tax Digital (MTD) VAT returns",
      "Monthly management accounts & cash flow visibility",
      "Year-end statutory accounts & CT600 filing",
      "Direct accountant access without call-centre queues",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Single Lets & Portfolios",
    description: (
      <>
        Derby's stable, well paid workforce keeps rental demand consistent across
        the city. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital
        Gains Tax planning for a single property or a growing portfolio.
      </>
    ),
    covers: [
      "Rental income reporting & Self Assessment filing",
      "Maximising allowable property repairs & running costs",
      "Section 24 mortgage interest relief planning",
      "Capital Gains Tax (CGT) advice prior to disposals",
      "Property portfolio limited company structuring",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll and HR Support",
    tag: "Accurate PAYE & Auto-Enrolment",
    description: (
      <>
        Payroll mistakes are noticed immediately by the people they affect. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        runs PAYE, pension auto enrolment and HMRC submissions accurately, every
        cycle.
      </>
    ),
    covers: [
      "Accurate & timely PAYE calculations",
      "Workplace pension auto-enrolment compliance",
      "Real-Time Information (RTI) HMRC submissions",
      "Digital payslips, P60s & P45 production",
      "Director & employee payroll handled properly",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Proactive Year-Round Advice",
    description: (
      <>
        Overpaying tax is usually the result of a decision made too late to matter,
        not an actual mistake. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service works with you throughout the year, so opportunities aren't missed
        at the last minute.
      </>
    ),
    covers: [
      "Proactive year-round tax reviews & forecasts",
      "Director dividend timing & profit extraction",
      "Corporation Tax relief & allowance optimisation",
      "Capital allowance timing on machinery & equipment",
      "Structuring advice before locking in commercial decisions",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Fractional Finance Department",
    description: (
      <>
        If bringing finance in house isn't the right move yet, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service covers bookkeeping, reporting, payroll and cash flow monitoring,
        without the overhead of a salaried position.
      </>
    ),
    covers: [
      "End-to-end bookkeeping & automated bank feeds",
      "Monthly management accounts & KPI dashboards",
      "Cash flow forecasting & working capital tracking",
      "Seamless cloud setup (Xero / QuickBooks)",
      "Strategic financial oversight without full-time overhead",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Tidy & MTD Compliant",
    description: (
      <>
        Accurate, current records make VAT filing and any funding application
        considerably easier. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service keeps this tidy year round.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant VAT returns",
      "Regular bank reconciliations & transaction categorization",
      "Clean records for lenders, investors & grant bodies",
      "VAT scheme reviews (Standard vs Flat Rate)",
      "Elimination of year-end receipt scrambles",
    ],
    ctaText: "View VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "company-secretarial",
    category: "business",
    title: "Company Secretarial Services",
    tag: "Companies House Compliance",
    description: (
      <>
        Companies House deadlines are easy to lose track of precisely because they
        don't come around often. Our{" "}
        <Link
          to="/services/company-secretarial-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          company secretarial
        </Link>{" "}
        service tracks filings, confirmation statements and any changes to directors
        or shareholders.
      </>
    ),
    covers: [
      "Annual Confirmation Statement filings",
      "Director, PSC & officer appointments / updates",
      "Share allotments, transfers & reorganisations",
      "Statutory registers maintenance & compliance",
      "Registered office address support",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Engineering, Rail & Tech Innovation",
    description: (
      <>
        Given how much of Derby's economy sits in advanced engineering, aerospace
        and rail manufacturing, genuine research and development activity is more
        common among smaller suppliers than most realise. Our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit
        </Link>{" "}
        service checks eligibility properly and prepares a claim that holds up.
      </>
    ),
    covers: [
      "Engineering, tooling & manufacturing R&D checks",
      "Staff costs, subcontractor & consumable expenditure audits",
      "HMRC-compliant technical narrative preparation",
      "Corporation Tax reduction or payable cash tax credits",
      "Full claim defense & audit-ready documentation",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Sole Traders, Dividends & Gains",
    description: (
      <>
        Self employment income, rental profits and the occasional capital gain each
        affect your tax position differently. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment
        </Link>{" "}
        service handles the filing and explains how it all connects.
      </>
    ),
    covers: [
      "Self Assessment tax return preparation & filing",
      "Sole trader profit & allowable expense calculations",
      "Dividend, rental & capital gains tax computations",
      "Payment on account scheduling & cash forecasting",
      "Direct HMRC liaison & correspondence handling",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const derbyClientProfiles = [
  {
    title: "Engineering, Aerospace & Rail Supply Chain",
    badge: "Advanced Manufacturing & Subcontractors",
    description:
      "Sole traders and small suppliers connected to Derby's aerospace, rail and automotive manufacturing base make up a meaningful part of our client base, often people who'd been managing their own books for years and finally wanted it done properly.",
    icon: Cpu,
    highlight: "IR35 compliance, R&D tax relief, and accurate supply chain accounting.",
  },
  {
    title: "Tradespeople & Independent Retailers",
    badge: "Local Services & City Centre Commerce",
    description:
      "We also work with tradespeople and independent retailers who wanted a fixed monthly cost they could actually plan around, without worrying about surprise bills or hidden fees.",
    icon: Wrench,
    highlight: "Predictable monthly cash flow and clear, fixed-fee bookkeeping.",
  },
  {
    title: "Derby Property Landlords",
    badge: "Single Lets, HMOs & Growing Portfolios",
    description:
      "A steady group of landlords with property across the city who wanted their returns handled without paying for services built for a much larger portfolio.",
    icon: Home,
    highlight: "Allowable expenses, Section 24 advice, and prompt Self Assessment filing.",
  },
];

const faqs = [
  {
    q: "Do you have an office in Derby?",
    a: "No, we work with Derby clients entirely remotely, the same way we do across the rest of the UK. Video calls, phone, email and cloud accounting cover everything an office visit would.",
  },
  {
    q: "I'm a sole trader, not a limited company. Is your pricing actually suited to someone my size?",
    a: "Yes. Our fixed fees are based on what your specific situation needs, so a sole trader isn't paying for services built around a much larger company.",
  },
  {
    q: "Could a small supplier to Rolls-Royce, Alstom or Toyota's supply chain actually qualify for R&D relief?",
    a: "It's worth checking. Genuine technical problem solving can qualify for R&D relief regardless of how small the business is or how far removed from the larger manufacturer.",
  },
  {
    q: "Can I switch accountants partway through my tax year?",
    a: "Yes, this happens often. We contact your outgoing accountant, request your records, and pick things up from wherever you currently stand.",
  },
  {
    q: "Is Derby pricing any different from your other locations?",
    a: "No. Every client gets the same fixed fee approach, based on what they actually need, agreed before any work begins.",
  },
];

const AccountantsInDerby: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "contractor" | "business" | "landlord" | "tax"
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
    email: "info@henleazetaxconsultancy.com",
    areaServed: { "@type": "City", name: "Derby" },
    serviceType: [
      "Contractor Accounting",
      "IR35 Review",
      "Small Business Accounting",
      "Sole Trader Accounting",
      "Landlord Accounting",
      "Tax Planning",
      "Payroll Services",
      "Outsourced Accounting",
      "VAT and Bookkeeping",
      "Company Secretarial",
      "R&D Tax Credit Claims",
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
        <title>Affordable Accountants in Derby | Sole Traders & SMEs</title>
        <meta
          name="description"
          content="Fixed-fee, affordable accountants in Derby for sole traders and small companies. No hidden costs, clear advice. Book a free consultation today."
        />
        <meta
          name="keywords"
          content="affordable accountants in derby, accountants in derby, accountant derby, contractor accountants derby, small business accountant derby, sole trader accountant derby, tax planning derby, fixed fee accountants derby"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/affordable-accountants-in-derby"
        />
        <meta
          property="og:title"
          content="Affordable Accountants in Derby | Sole Traders & SMEs"
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
          content="Affordable Accountants in Derby | Sole Traders & SMEs"
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-sm font-semibold mb-6 shadow-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Derby &amp; Derbyshire Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Affordable Accountants in Derby for{" "}
                <span className="text-gold block sm:inline">
                  Sole Traders and Small Companies
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Cost is usually the first thing people ask about when looking for an
                accountant, and it's the wrong first question. The right one is whether
                the fee you're paying actually reflects the value you're getting.
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
                  "Sole Trader & SME Focus",
                  "Supply Chain & R&D Support",
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

        {/* ── INTRO / PHILOSOPHY ────────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Fair Pricing &amp; True Value
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Affordable Accountants in Derby for Sole Traders and Small Companies
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Cost is usually the first thing people ask about when looking for an
                    accountant, and it's the wrong first question. The right one is
                    whether the fee you're paying actually reflects the value you're
                    getting, since a cheap accountant who misses deductions or files late
                    can end up costing far more than a properly priced one who gets
                    things right.
                  </p>
                  <p>
                    Henleaze Tax Consultancy works with sole traders, small companies,
                    landlords and contractors across Derby. We're based in Bristol, and
                    that's rarely mattered to anyone we've worked with here, since
                    everything runs through cloud accounting, phone calls and email.
                    Every quote is fixed and agreed before we start, so you always know
                    exactly what you're paying for.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold">
                      ✓
                    </div>
                    <span>
                      Direct contact with your dedicated accountant — no call-centre runarounds
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-navy font-bold text-sm hover:text-gold transition-colors gap-1 group"
                  >
                    Speak with an accountant
                    <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DERBY ECONOMY CONTEXT ─────────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/30 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/30">
                Local Economic Context
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Derby's Engineering Base Shapes the Kind of Support We Provide
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Rolls-Royce's civil aerospace headquarters, Alstom's Litchurch Lane rail
                works, and Toyota's plant at Burnaston between them anchor a large share of
                Derby's economy, and that concentration of advanced manufacturing supports a
                wide supply chain of smaller businesses and sole traders working alongside
                them. Add a growing digital and startup scene backed by schemes like Connect
                Derby, and city centre regeneration through the Becketwell and Castleward
                projects, and Derby's business base is broader and more active than its
                engineering reputation alone suggests.
              </p>
              <p>
                For sole traders and small companies working within or alongside that
                ecosystem, we focus on what actually matters day to day: bookkeeping that's
                kept accurate rather than reconstructed at year end, expense claims that
                aren't missed, and fees that stay fixed as your business grows rather than
                climbing with it.
              </p>
            </div>

            {/* Economy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Cpu,
                  title: "Aerospace & Engineering",
                  body: "Rolls-Royce civil aerospace headquarters and its expansive tier-1 and tier-2 precision engineering supply network.",
                },
                {
                  Icon: Train,
                  title: "Rail & Transport",
                  body: "Alstom's historic Litchurch Lane rolling stock works anchoring the UK's railway manufacturing hub.",
                },
                {
                  Icon: Car,
                  title: "Automotive Manufacturing",
                  body: "Toyota's flagship vehicle manufacturing facility at Burnaston driving local specialist automotive engineering.",
                },
                {
                  Icon: Rocket,
                  title: "Digital & Regeneration",
                  body: "Connect Derby startup hubs, Becketwell & Castleward urban regeneration broadening the commercial base.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all"
                >
                  <Icon className="w-8 h-8 text-gold mb-3" />
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION ─────────────────────────────────────── */}
        <section
          id="services"
          className="py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-navy text-white relative overflow-hidden"
        >
          {/* Glow Effects */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                Tailored Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                How We Support Sole Traders and Small Companies in Derby
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting, bookkeeping and tax planning built for
                sole traders, contractors, landlords and small businesses across Derby.
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
                { key: "tax", label: "Tax & Advisory" },
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

            {/* View All Services Link Button */}
            <div className="mt-14 text-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-10 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── CLIENT PROFILES ───────────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Client Profiles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                The Kind of Businesses We Tend to Work With Here
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We work across Derby's vibrant economy, from advanced engineering suppliers and
                sole traders to independent retail and residential landlords.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {derbyClientProfiles.map((profile, index) => {
                const ProfileIcon = profile.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex flex-col justify-between hover:border-gold/50 transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-navy mb-5 group-hover:bg-gold group-hover:scale-105 transition-all">
                        <ProfileIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-2">
                        {profile.badge}
                      </span>
                      <h3 className="font-display text-xl font-bold text-navy mb-4">
                        {profile.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {profile.description}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs text-navy font-semibold">
                      💡 {profile.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Sound like where you are?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Get in touch if that sounds like where you are and let's get your numbers sorted.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shrink-0 shadow-lg hover:scale-105 transition-all"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── FIXED FEES, NO GUESSING ──────────────────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                Transparent Pricing
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                Fixed Fees, No Guessing
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Every quote is fixed and agreed before any work starts, whether you're in
                Derby, Bristol or anywhere else in the UK. Nothing changes because a question
                took a longer conversation than expected, and there's no hourly clock running
                in the background.
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

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Clear Answers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Frequently Asked Questions From Derby Clients
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
              Ready to Get Your Numbers Sorted?
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you're a sole trader or small company in Derby looking for accounting that's
              genuinely affordable and properly explained, get in touch. A first conversation
              is free and doesn't commit you to anything.
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
