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
  Anchor,
  Ship,
  Bot,
  GraduationCap,
  HeartPulse,
  Scale,
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
    tag: "Maritime & Port Expansion",
    description: (
      <>
        Southampton's maritime, marine engineering and logistics sectors support a steady stream
        of contract work, much of it project based and tied to the port's ongoing expansion. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service covers your{" "}
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35 position
        </Link>{" "}
        properly, along with limited company structuring, dividend planning, bookkeeping, VAT,
        payroll and year end filing.
      </>
    ),
    covers: [
      "Rigorous IR35 contract & working practice reviews",
      "Tax-efficient limited company structuring & setup",
      "Strategic dividend planning & salary extraction",
      "Digital bookkeeping, VAT returns & RTI payroll",
      "Statutory annual accounts & Corporation Tax filing",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "City Centre to Shirley & Docks",
    description: (
      <>
        Whether you're running a business near the city centre, out toward Shirley, or supplying
        into the port's supply chain, our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service keeps your bookkeeping, VAT and payroll accurate and current.
      </>
    ),
    covers: [
      "Day-to-day cloud bookkeeping (Xero & QuickBooks)",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Monthly management accounts & cash flow visibility",
      "Statutory annual accounts & CT600 Corporation Tax",
      "Direct accountant access without call center delays",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Student & NHS Rental Market",
    description: (
      <>
        Southampton rents have risen faster than house prices over the past decade, driven by
        consistent demand from students, NHS staff and port economy professionals, and the market
        remains structurally undersupplied. Recent changes under the Renters' Rights Act have also
        added new considerations for landlords to get right. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital Gains Tax planning,
        whether you hold a single let or a wider portfolio.
      </>
    ),
    covers: [
      "Rental income reporting & Self-Assessment filing",
      "Maximising allowable property repair & running costs",
      "Section 24 finance cost & mortgage interest relief",
      "Capital Gains Tax (CGT) advice prior to disposals",
      "HMO & student let portfolio tax structuring",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll and HR Support",
    tag: "On-Time PAYE & Auto-Enrolment",
    description: (
      <>
        A late payroll run or an incorrect PAYE submission causes disproportionate stress for
        something entirely preventable. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        keeps this accurate and on schedule, every cycle.
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
    tag: "Year-Round Advisory",
    description: (
      <>
        Most overpaid tax comes from a decision made too late in the year to actually matter. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service works with you throughout the year, not just in the weeks before a deadline.
      </>
    ),
    covers: [
      "Proactive year-round tax reviews & forecasts",
      "Director dividend timing & profit extraction",
      "Corporation Tax relief & allowance optimisation",
      "Capital allowance timing on equipment & assets",
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
    tag: "Full Fractional Finance",
    description: (
      <>
        For growing Southampton businesses not yet ready to bring finance in house, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service takes on bookkeeping, reporting, payroll and cash flow monitoring, without the
        cost of a permanent hire.
      </>
    ),
    covers: [
      "End-to-end bookkeeping & bank feeds management",
      "Monthly management accounts & KPI dashboards",
      "Cash flow forecasting & working capital monitoring",
      "Seamless Xero / QuickBooks cloud setup",
      "Strategic financial guidance without full-time overhead",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Clean MTD Compliance",
    description: (
      <>
        Clean, current records make VAT filing and funding applications considerably more
        straightforward. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service keeps this side of things tidy throughout the year.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant VAT returns",
      "Regular bank feed reconciliations & transaction coding",
      "Clean records for bank financing & mortgage proof",
      "VAT scheme suitability (Standard vs Flat Rate)",
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
    tag: "Companies House Filings",
    description: (
      <>
        Companies House filings are easy to lose track of precisely because they don't come around
        often. Our{" "}
        <Link
          to="/services/company-secretarial-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          company secretarial
        </Link>{" "}
        service tracks confirmation statements and any changes to directors or shareholders.
      </>
    ),
    covers: [
      "Annual Confirmation Statement filings",
      "Director, PSC & officer appointments / resignations",
      "Share allotments, transfers & reorganisations",
      "Statutory registers maintenance & compliance",
      "Registered office address facility",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Marine Tech, Robotics & Innovation",
    description: (
      <>
        Given Southampton's strength in marine engineering, robotics and maritime technology,
        genuine research and development activity is more common here than many business owners
        realise. Our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit
        </Link>{" "}
        service checks eligibility properly and builds a claim that holds up.
      </>
    ),
    covers: [
      "Marine engineering & robotics R&D eligibility reviews",
      "Staff costs, subcontractor & consumable analysis",
      "HMRC-compliant technical narrative preparation",
      "Corporation Tax reduction or payable cash credit",
      "Comprehensive claim defense & audit-ready records",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Dividends, Property & Gains",
    description: (
      <>
        Dividend income, rental profits and capital gains each affect your personal tax position
        differently. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment
        </Link>{" "}
        service handles the filing and explains how everything connects.
      </>
    ),
    covers: [
      "Self-Assessment tax return preparation & filing",
      "Dividend, rental & capital gains tax calculation",
      "Payment on account scheduling & forecasting",
      "Personal tax allowance & threshold optimisation",
      "Direct HMRC liaison & correspondence handling",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const southamptonClientProfiles = [
  {
    title: "Marine, Logistics & Engineering Contractors",
    badge: "Port & Maritime Supply Chain",
    description:
      "A good number of our Southampton clients are contractors and engineers working into the port's maritime, logistics and marine technology supply chain, often wanting proper IR35 guidance rather than generic freelance advice.",
    icon: Anchor,
    highlight: "Proper IR35 reviews and contract assessments, not generic templates.",
  },
  {
    title: "Student & NHS Landlords",
    badge: "Portswood, Swaythling & HMO Lets",
    description:
      "We also work with landlords holding property near the university in Portswood and Swaythling, many of whom came to us wanting clarity on the recent Renters' Rights Act changes before they took effect.",
    icon: Home,
    highlight: "Renters' Rights Act compliance, allowable expenses and CGT advice.",
  },
  {
    title: "NHS Professionals & Small Businesses",
    badge: "Healthcare & City-Wide Commerce",
    description:
      "A steady group are NHS professionals and small business owners across the wider city who simply wanted their tax affairs handled properly without surprise bills or missed deadlines.",
    icon: HeartPulse,
    highlight: "Transparent fixed fees and year-round proactive tax support.",
  },
];

const faqs = [
  {
    q: "Do you have a physical office in Southampton?",
    a: "No, we work with Southampton clients entirely remotely, in the same way we do everywhere outside Bristol. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring travel on either side.",
  },
  {
    q: "I own rental property near the university in Portswood or Swaythling. How does the Renters' Rights Act affect my tax position?",
    a: "The changes primarily affect tenancy structure and management, but they can have knock-on implications for how income and certain costs are reported, particularly for HMOs. Worth a specific conversation to check your setup is aligned with the new rules.",
  },
  {
    q: "I contract into Southampton's port or maritime sector through my own limited company. Do you understand this kind of work?",
    a: "Yes, this is a common client profile for us given the strength of Southampton's maritime and marine engineering sector. We review your actual contract and working arrangements to assess your IR35 position properly.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant, request your records, and continue from wherever you currently stand, without disrupting any upcoming deadlines.",
  },
  {
    q: "Is your pricing different for Southampton clients compared to other locations?",
    a: "No. Every client gets the same fixed fee structure, based on what your specific situation actually requires, agreed before any work starts.",
  },
];

const AccountantsInSouthampton: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Best Southampton Accountants",
    url: "https://henleazetaxconsultancy.com/best-accountants-in-southampton",
    description:
      "Looking for the best accountants in Southampton? Fixed-fee support for contractors, landlords and small businesses. Free consultation available.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: { "@type": "City", name: "Southampton" },
    serviceType: [
      "Contractor Accounting",
      "IR35 Review",
      "Small Business Accounting",
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
        <title>Best Southampton Accountants for Contractors &amp; SMEs</title>
        <meta
          name="description"
          content="Looking for the best accountants in Southampton? Fixed-fee support for contractors, landlords and small businesses. Free consultation available."
        />
        <meta
          name="keywords"
          content="best accountants in southampton, accountants in southampton, accountant southampton, contractor accountants southampton, landlord accountants southampton, small business accountant southampton, IR35 southampton, tax planning southampton"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/best-accountants-in-southampton"
        />
        <meta
          property="og:title"
          content="Best Southampton Accountants for Contractors &amp; SMEs"
        />
        <meta
          property="og:description"
          content="Looking for the best accountants in Southampton? Fixed-fee support for contractors, landlords and small businesses. Free consultation available."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/best-accountants-in-southampton"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Southampton Accountants for Contractors &amp; SMEs"
        />
        <meta
          name="twitter:description"
          content="Looking for the best accountants in Southampton? Fixed-fee support for contractors, landlords and small businesses. Free consultation available."
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
                <span>Southampton &amp; Solent Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Southampton:{" "}
                <span className="text-gold block sm:inline">
                  Clear Advice, Fixed Fees, No Surprises
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Looking for the best accountants in Southampton? Fixed-fee support for contractors,
                landlords, sole traders and small businesses. Free consultation available.
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
                  "IR35 & Maritime Expertise",
                  "Year-Round Proactive Advice",
                  "100% Cloud & Remote-Ready",
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

        {/* ── INTRO / PHILOSOPHY ────────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Straightforward Accounting
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Accountants in Southampton: Clear Advice, Fixed Fees, No Surprises
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Every accountant claims to offer clear advice and fair pricing. Most people
                    only find out whether that's actually true once they've already signed up, which
                    is a fairly poor way to choose someone responsible for your tax position. It's
                    worth being able to check beforehand instead.
                  </p>
                  <p>
                    Henleaze Tax Consultancy works with contractors, landlords, sole traders and
                    small businesses across Southampton. We're based in Bristol and the distance
                    between the two cities has never actually affected how we work with clients,
                    since everything runs through cloud accounting, phone calls and email rather
                    than office visits.
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

        {/* ── SOUTHAMPTON ECONOMY CONTEXT ───────────────────────────── */}
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
                Southampton's Economy Still Runs on Its Port, But Not Only That
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Southampton's identity is tied closely to its maritime economy, and for good reason.
                The Port of Southampton handles over 40 million tonnes of cargo a year and is the
                UK's busiest cruise port, hosting P&amp;O, Cunard, MSC and Celebrity Cruises, alongside
                a growing Solent Freeport initiative expected to bring significant new investment and
                jobs to the region. That maritime base supports a wide engineering, logistics and
                marine technology sector, including newer arrivals like Ocean Infinity's robotics
                operations.
              </p>
              <p>
                Southampton's economy extends well beyond the docks too, with a large NHS and
                healthcare workforce centred around University Hospital Southampton, and the
                University of Southampton, a Russell Group institution with around 24,000 students,
                driving one of the busiest rental markets on the South Coast.
              </p>
              <div className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                That combination brings us a genuinely mixed set of Southampton clients: marine and
                logistics contractors, engineers working across the port and its supply chain,
                landlords letting to a large student population in areas like Portswood and
                Swaythling, and NHS professionals and small business owners across the wider city.
              </div>
            </div>

            {/* Economy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Ship,
                  title: "Port of Southampton",
                  body: "40M+ tonnes of cargo yearly & UK's leading cruise hub hosting P&O, Cunard, MSC and Celebrity.",
                },
                {
                  Icon: Bot,
                  title: "Marine Tech & Freeport",
                  body: "Solent Freeport initiative, marine engineering and innovative robotics hubs like Ocean Infinity.",
                },
                {
                  Icon: GraduationCap,
                  title: "University & Student Lets",
                  body: "24,000+ students at the Russell Group university driving vibrant lettings in Portswood & Swaythling.",
                },
                {
                  Icon: HeartPulse,
                  title: "NHS & Healthcare",
                  body: "Major regional healthcare workforce centred around University Hospital Southampton.",
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
                Expert Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting and Tax Support for Southampton Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting, bookkeeping and tax planning tailored for
                Southampton's contractors, landlords, and growing businesses.
              </p>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {[
                { key: "all", label: "All Services" },
                { key: "contractor", label: "Contractor Accounting" },
                { key: "business", label: "Small Business & Payroll" },
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

        {/* ── RENTERS' RIGHTS ACT SPOTLIGHT ───────────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-5 border border-gold/30 flex items-center gap-1.5 w-fit">
                  <Scale className="w-3.5 h-3.5 text-gold" />
                  Landlord Regulatory Update
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
                  What the Renters' Rights Act Means for Southampton Landlords
                </h2>

                <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    The Renters' Rights Act, which came into force on 1 May 2026, is the biggest
                    change to the private rented sector since the late 1980s, abolishing Section 21
                    evictions and converting tenancies to a rolling periodic structure with new rules
                    on rent increases.
                  </p>
                  <p>
                    It's a legal and operational shift more than a tax one, but for Southampton{" "}
                    <Link
                      to="/services/landlord-accountants"
                      className="text-gold font-bold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                    >
                      landlords
                    </Link>{" "}
                    managing HMOs or multiple properties, particularly given how tight the local
                    rental market already is, it's worth reviewing tenancy agreements and rent
                    review processes alongside your usual tax reporting, since the two often get
                    updated together.
                  </p>
                  <p>
                    If anything changes in how a property is let or structured as a result, that's
                    the point to flag it with us so your reporting stays accurate too.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all"
                  >
                    <Link to="/calculator">
                      Get a Quick Estimate
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:border-gold/60"
                  >
                    <Link to="/services/landlord-accountants">Explore Landlord Services</Link>
                  </Button>
                </div>
              </div>
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
                Where Our Southampton Clients Tend to Come From
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We work across Southampton's diverse commercial landscape, from maritime engineering
                to academic and healthcare rental sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {southamptonClientProfiles.map((profile, index) => {
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
                  Sound like where you're at?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Get in touch if any of that sounds close to your situation.
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

        {/* ── HOW OUR FEES WORK ────────────────────────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                Transparent Pricing
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                How Our Fees Work
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Every quote is fixed and agreed before any work begins, whether you're based in
                Southampton, Bristol or elsewhere in the UK. There's no hourly billing, and nothing
                changes because a query needed a longer conversation than expected.
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
                Frequently Asked Questions From Southampton Clients
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
        <NearbyLocationsSection currentCity="Southampton" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's Get This Sorted Properly
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you're looking for accountants in Southampton who give you a straight answer and
              stick to it, get in touch. A first conversation is free and doesn't commit you to
              anything further.
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

export default AccountantsInSouthampton;
