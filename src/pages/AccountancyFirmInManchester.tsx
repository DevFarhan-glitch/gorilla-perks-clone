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
  Receipt,
  Sparkles,
  UserCheck,
  Phone,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "contractor" | "business" | "landlord" | "tax";
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
    id: "contractor-accounting",
    category: "contractor",
    title: "Contractor Accountants in Manchester",
    tag: "Tech, Digital & MediaCityUK",
    description: (
      <>
        Manchester has a strong market for IT, digital, engineering, consulting,
        creative and project-based contractors. If you work through your own
        limited company, we can support you with company formation, IR35 status
        reviews, salary and dividend planning, VAT, bookkeeping, payroll and
        year-end accounts. This is particularly useful for contractors working
        with agencies, end clients or project teams across Manchester city
        centre, Salford Quays, MediaCityUK and the wider North West.
      </>
    ),
    covers: [
      "Rigorous IR35 status & working practices reviews",
      "Limited company formation & PSC setup",
      "Tax-efficient salary vs dividend planning",
      "Quarterly VAT returns & MTD digital records",
      "Statutory annual accounts and Corporation Tax",
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accountants in Manchester",
    tag: "SMEs, Creative & Retail",
    description: (
      <>
        We help small businesses across Manchester maintain accurate
        bookkeeping, prepare VAT returns, manage payroll, understand
        profitability and prepare year-end accounts and corporation tax returns.
        This is suitable for businesses in professional services, retail,
        hospitality, construction, e-commerce, creative industries and local
        service sectors. It is also useful for owners who want clearer monthly
        financial information rather than discovering problems at year end.
      </>
    ),
    covers: [
      "Accurate day-to-day cloud bookkeeping with bank feeds",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Monthly management accounts & cash flow visibility",
      "Annual accounts preparation & Corporation Tax returns",
      "Direct advice without confusing jargon or hidden fees",
    ],
    ctaText: "Small Business Accounting Services",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accountants in Manchester",
    tag: "Apartments, HMOs & Portfolios",
    description: (
      <>
        Manchester’s rental market includes city-centre apartments, student
        accommodation, professional lets and growing property portfolios across
        Greater Manchester. We support landlords with rental income reporting,
        allowable expenses, property bookkeeping, Capital Gains Tax planning and
        portfolio-level reporting. Whether you own one buy-to-let or manage
        several properties, we can help you keep the accounting side organised
        and plan ahead for tax liabilities.
      </>
    ),
    covers: [
      "Rental property accounts & Self Assessment declarations",
      "Maximising allowable property expenditure & repair deductions",
      "Section 24 mortgage interest relief calculations",
      "Capital Gains Tax (CGT) advice before property disposals",
      "HMO, student let and multi-unit portfolio bookkeeping",
    ],
    ctaText: "Landlord Accounting Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping for Manchester Businesses",
    tag: "Cloud Records & MTD Compliance",
    description: (
      <>
        Accurate, current bookkeeping makes VAT returns, cash-flow planning and
        year-end accounts easier. We help Manchester businesses with VAT
        registration, VAT return preparation, digital record-keeping,
        reconciliations and Making Tax Digital compliance.
      </>
    ),
    covers: [
      "Real-time cloud bookkeeping with automated bank feeds",
      "Making Tax Digital (MTD) compliant digital VAT filing",
      "Rolling turnover threshold monitoring",
      "Guidance on Standard, Flat Rate and Margin VAT schemes",
      "Clean financial records ready for year end or audits",
    ],
    ctaText: "VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "payroll-services",
    category: "business",
    title: "Payroll Support for Manchester Employers",
    tag: "PAYE & Auto-Enrolment",
    description: (
      <>
        If you employ staff in Manchester, payroll needs to be accurate every
        pay cycle. We provide payroll support covering payslips, RTI submissions,
        pension auto-enrolment, PAYE compliance and starter or leaver
        processing.
      </>
    ),
    covers: [
      "Accurate weekly, fortnightly, or monthly PAYE pay runs",
      "Itemised digital payslips, P60s, and P45 production",
      "Real-Time Information (RTI) submissions to HMRC",
      "Workplace pension auto-enrolment compliance & reporting",
      "Starter, leaver and statutory payment calculations",
    ],
    ctaText: "Payroll and HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning for Manchester Business Owners",
    tag: "Year-Round Strategic Advisory",
    description: (
      <>
        Good tax planning is not something that should be left until January.
        We work with Manchester business owners throughout the year on profit
        extraction, dividend planning, Capital Gains Tax, business structure,
        cash-flow planning and Corporation Tax strategy.
      </>
    ),
    covers: [
      "Proactive year-round reviews before your year-end passes",
      "Optimised director salary vs dividend extraction mix",
      "Pension contribution allowances & Corporation Tax relief",
      "Capital allowances on plant, machinery, tech & equipment",
      "Clear forward guidance to avoid surprise tax bills",
    ],
    ctaText: "Tax Planning Services",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Relief for Manchester Innovation Businesses",
    tag: "Software, Tech & Engineering",
    description: (
      <>
        Manchester has a growing base of technology, digital, software,
        engineering and innovation-led businesses. If your company is developing
        new products, processes or technical solutions, it may be worth
        reviewing whether R&amp;D tax relief applies. We assess eligibility
        carefully and prepare claims using appropriate technical and financial
        evidence, rather than relying on broad assumptions.
      </>
    ),
    covers: [
      "Rigorous eligibility review before committing client resources",
      "Software, digital platforms & engineering process review",
      "Substantiated HMRC-compliant technical narrative preparation",
      "Apportionment of qualifying staff, subcontractor & consumable costs",
      "Corporation Tax reduction or cash tax credit recovery",
    ],
    ctaText: "R&D Tax Credit Services",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Self Assessment and Personal Tax",
    tag: "Sole Traders & Directors",
    description: (
      <>
        We support Manchester individuals with Self Assessment tax returns,
        rental income, dividends, capital gains, sole trader accounts and
        personal tax planning. This is particularly useful for contractors,
        landlords and company directors with more than one source of income.
      </>
    ),
    covers: [
      "Self Assessment tax return preparation & filing",
      "Multiple income streams reported accurately together",
      "Payment on account scheduling to prevent cash surprises",
      "Claiming all allowable business mileage & expenses",
      "Direct correspondence and liaison with HMRC",
    ],
    ctaText: "Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const whyChooseUsPoints = [
  "Fixed fees agreed before work begins.",
  "Clear, jargon-free advice by phone, email or video call.",
  "Support for contractors, landlords, sole traders and limited companies.",
  "Cloud-based bookkeeping and VAT support.",
  "Proactive tax planning rather than last-minute filing.",
  "Remote accounting support without the need to travel to Bristol.",
];

const whoWeHelpList = [
  "Limited company contractors in tech, digital, engineering and consulting.",
  "Landlords with city-centre flats, HMOs or growing portfolios.",
  "Sole traders and freelancers across creative, professional and trade sectors.",
  "Small businesses needing bookkeeping, VAT, payroll and year-end support.",
  "Startups building accounting processes from the beginning.",
  "Established companies that need clearer management reporting and tax planning.",
];

const areasServedList = [
  {
    title: "Manchester City Centre, Spinningfields & Deansgate",
    desc: "Commercial practices, tech firms, financial consultancies, and hospitality venues.",
  },
  {
    title: "Ancoats, Northern Quarter & Piccadilly",
    desc: "Creative studios, digital agencies, independent retailers, and freelancers.",
  },
  {
    title: "Salford Quays & MediaCityUK",
    desc: "Broadcasting, media, digital content creators, and engineering contractors.",
  },
  {
    title: "Didsbury, Chorlton & Withington",
    desc: "Local trades, professional consultants, buy-to-let landlords, and retail shops.",
  },
  {
    title: "Stockport, Cheadle & Marple",
    desc: "Manufacturing subcontractors, growing SME teams, and commercial businesses.",
  },
  {
    title: "Trafford, Altrincham & Sale",
    desc: "Logistics, professional services, retail businesses, and corporate consultancies.",
  },
  {
    title: "Oldham, Rochdale & Bury",
    desc: "Trade contractors, industrial suppliers, distribution firms, and sole traders.",
  },
  {
    title: "Bolton, Wigan & Greater Manchester",
    desc: "Comprehensive remote accounting for regional businesses, contractors, and landlords.",
  },
];

const remoteProcessSteps = [
  {
    step: "01",
    title: "Introductory Call",
    desc: "A free introductory call to discuss your business, income sources, bookkeeping setup and accounting needs.",
  },
  {
    step: "02",
    title: "Secure Onboarding",
    desc: "Secure onboarding to collect records, connect cloud software and identify any urgent deadlines.",
  },
  {
    step: "03",
    title: "Ongoing Support",
    desc: "Ongoing support with bookkeeping, VAT, payroll, accounts and tax filings as agreed.",
  },
  {
    step: "04",
    title: "Clear Communication",
    desc: "Clear communication by email, phone or video call whenever advice is needed — no unexpected hourly billing.",
  },
];

const faqs = [
  {
    q: "What is the best accountancy firm in Manchester?",
    a: "The best accountancy firm depends on your needs. Look for transparent fixed fees, relevant experience with your business type, clear communication, reliable deadline management and proactive tax advice. Henleaze Tax Consultancy provides fixed-fee accounting and tax support for Manchester contractors, landlords, sole traders and small businesses remotely from Bristol.",
  },
  {
    q: "Do you have an office in Manchester?",
    a: "No. Henleaze Tax Consultancy is based in Bristol and supports Manchester clients remotely. We use cloud accounting, secure document sharing, phone, email and video calls, so clients do not need to attend an office in person.",
  },
  {
    q: "Can you help Manchester contractors with IR35?",
    a: "Yes. We review contracts and working arrangements to help contractors understand their IR35 position. We also support limited company contractors with company formation, VAT, payroll, salary and dividend planning, and year-end accounts.",
  },
  {
    q: "Can you help a new business in Manchester?",
    a: "Yes. We can help with choosing between sole trader and limited company status, company formation, VAT registration, bookkeeping setup, payroll, tax registration and ongoing compliance.",
  },
];

const AccountancyFirmInManchester: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountancy Firm in Manchester",
    url: "https://henleazetaxconsultancy.com/accountancy-firm-in-manchester",
    description:
      "Looking for an accountancy firm in Manchester? We provide fixed-fee accounting & Self Assessment support remotely across Greater Manchester.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Manchester" },
    serviceType: [
      "Contractor Accounting",
      "IR35 Review",
      "Small Business Accounting",
      "Landlord Accounting",
      "VAT and Bookkeeping",
      "Payroll Services",
      "Tax Planning",
      "R&D Tax Relief Claims",
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
        <title>Accountancy Firm in Manchester | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Looking for an accountancy firm in Manchester? We provide fixed-fee accounting & Self Assessment support remotely across Greater Manchester."
        />
        <meta
          name="keywords"
          content="accountancy firm in manchester, accountants in manchester, accountant manchester, contractor accountants manchester, small business accountant manchester, landlord accountant manchester, fixed fee accountant manchester"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountancy-firm-in-manchester"
        />
        <meta
          property="og:title"
          content="Accountancy Firm in Manchester | Henleaze Tax Consultancy"
        />
        <meta
          property="og:description"
          content="Looking for an accountancy firm in Manchester? We provide fixed-fee accounting & Self Assessment support remotely across Greater Manchester."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountancy-firm-in-manchester"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountancy Firm in Manchester | Henleaze Tax Consultancy"
        />
        <meta
          name="twitter:description"
          content="Looking for an accountancy firm in Manchester? We provide fixed-fee accounting & Self Assessment support remotely across Greater Manchester."
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
            {/* Featured Hero Image on Top */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="/manchester.jpg"
                  alt="Accountancy Firm in Manchester - Henleaze Tax Consultancy"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={600}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-semibold shadow-md">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Manchester &amp; Greater Manchester &bull; Fixed-Fee Remote Support</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Your Accountancy Firm in Manchester &mdash;{" "}
                <span className="text-gold block sm:inline">
                  Trusted Tax &amp; Business Advice
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Henleaze Tax Consultancy is a Bristol-based accountancy firm
                supporting contractors, landlords, sole traders and limited
                companies across Manchester and Greater Manchester. We provide
                fixed-fee accounting, tax planning, VAT, payroll, bookkeeping
                and Self Assessment support remotely through cloud accounting,
                secure document sharing, phone and video calls.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Manchester businesses do not all need the same accounting
                support. A contractor may need an IR35 review and dividend
                planning; a landlord may need rental income reporting and
                Capital Gains Tax advice; a growing SME may need reliable
                bookkeeping, VAT and management reporting. We tailor the support
                around your situation rather than applying the same package to
                every client.
              </p>

              <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                We work with clients across{" "}
                <Link
                  to="/accounting-firms-in-manchester-8-firms-for-businesses-and-contractors"
                  className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                >
                  Manchester city centre
                </Link>
                , Spinningfields, Ancoats, Northern Quarter, Deansgate, Salford
                Quays, MediaCityUK, Stockport, Trafford, Didsbury, Chorlton and
                the wider Greater Manchester area.
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
                  "Tailored Support",
                  "Proactive Tax Planning",
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

        {/* ── WHY MANCHESTER CLIENTS CHOOSE US ─────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Value &amp; Practical Guidance
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Why Manchester Clients Choose Henleaze Tax Consultancy
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Manchester has one of the UK’s most varied regional
                    economies. It combines a large professional-services and
                    technology base with construction, retail, hospitality,
                    healthcare, property investment, creative businesses and a
                    substantial contractor market.
                  </p>
                  <p>
                    That mix means business owners often need more than a basic
                    year-end filing service. They need someone who can explain
                    tax decisions in plain English, keep records current, flag
                    issues early and provide practical support when their
                    circumstances change.
                  </p>
                  <p className="font-semibold text-navy">
                    Our Manchester clients typically value:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5 mt-6 mb-8">
                  {whyChooseUsPoints.map((point, index) => (
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
                    Ready to speak with an experienced accountant?
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
                Accounting Support for Manchester Businesses
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and practical tax advice
                tailored for contractors, small businesses, landlords and growing
                enterprises.
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
                { key: "tax", label: "Tax Planning & R&D" },
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

            {/* View All Services Banner */}
            <div className="mt-16 text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <p className="text-slate-200 text-sm sm:text-base mb-4">
                Explore our full suite of personal tax, secretarial, and business
                accounting solutions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-5 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── WHO WE HELP IN MANCHESTER ─────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Diverse Client Base
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Who We Help in Manchester
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We work with a wide range of Manchester clients across multiple
                sectors and setups.
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
                  Accounting Support Without Unnecessary Admin
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  The common requirement is not the industry—it is the need for
                  reliable, understandable accounting support that does not
                  create unnecessary admin.
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
                You do not need to visit our Bristol office to work with us.
                Most Manchester clients use:
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
                This approach suits busy contractors, landlords and business
                owners who want responsive support without arranging in-person
                meetings.
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

        {/* ── FIXED FEES, AGREED BEFORE WE START ───────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                Transparent Pricing
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                Fixed Fees, Agreed Before We Start
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                Our fees are fixed and agreed before work begins. You will know
                what is included, what is excluded and when the fee applies.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                We do not charge hourly for routine questions, and we do not
                increase the fee simply because a conversation took longer than
                expected. If your requirements change—for example, you register
                for VAT, employ staff or add a new company—we will explain the
                revised scope before any change is made.
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

        {/* ── AREAS WE SERVE ACROSS GREATER MANCHESTER ──────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Regional Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Areas We Serve Across Greater Manchester
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We provide remote accounting and tax support across Manchester
                and surrounding areas, including:
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
              these locations remotely; it does not mean we have a physical
              office in each area.
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
                Frequently Asked Questions
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
        <NearbyLocationsSection currentCity="Manchester" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Speak to a Manchester Accountant
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you are looking for an accountancy firm in Manchester that
              provides clear advice, fixed fees and reliable remote support,
              book a free consultation. We will review your situation, explain
              what support you need and set out the cost before any work begins.
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

export default AccountancyFirmInManchester;
