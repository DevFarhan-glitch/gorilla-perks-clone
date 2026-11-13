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
  Factory,
  Truck,
  Rocket,
  Shield,
  Layers,
  Clock,
  HelpCircle,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "manufacturing" | "contractor" | "landlord" | "business" | "tax";
  title: string;
  tag: string;
  description: React.ReactNode;
  covers: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
}

const sectorMatrix = [
  {
    type: "Manufacturer or food producer",
    priority: "Stock, margins, payroll and R&D eligibility",
    howWeHelp:
      "Bookkeeping, management reporting, VAT, payroll and R&D tax relief review",
    icon: Factory,
  },
  {
    type: "Logistics or distribution business",
    priority: "Cash flow, vehicle costs, subcontractors and VAT",
    howWeHelp:
      "Bookkeeping, VAT, management accounts and cash-flow support",
    icon: Truck,
  },
  {
    type: "Contractor or consultant",
    priority: (
      <>
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35
        </Link>
        , salary/dividend planning and compliance
      </>
    ),
    howWeHelp:
      "IR35 review, limited company accounts, payroll and tax planning",
    icon: Briefcase,
  },
  {
    type: "Landlord",
    priority:
      "Rental income, expenses, portfolio reporting and Capital Gains Tax",
    howWeHelp: "Property bookkeeping, Self Assessment and CGT planning",
    icon: Home,
  },
  {
    type: "Startup or tech business",
    priority: "Clean records, funding readiness and R&D support",
    howWeHelp:
      "Cloud accounting setup, management reporting and R&D tax relief",
    icon: Rocket,
  },
];

const servicesData: ServiceItem[] = [
  {
    id: "manufacturers-food-producers",
    category: "manufacturing",
    title: "Manufacturers and Food Producers",
    tag: "Textiles, Food & Production",
    description: (
      <>
        Leicester has long-standing strengths in textiles, manufacturing and
        food production. Businesses in these sectors often need more than a
        basic year-end filing service: they need visibility of margins, stock
        movements, labour costs, supplier payments and project profitability.
      </>
    ),
    covers: [
      "Bookkeeping and reconciliations",
      "VAT returns and Making Tax Digital support",
      "Payroll and pension administration",
      "Management accounts and margin reporting",
      "Corporation Tax and year-end accounts",
      "R&D tax relief eligibility reviews",
    ],
    ctaText: "Small Business Accounting Services",
    ctaLink: "/services/small-business-accountants",
    icon: Factory,
  },
  {
    id: "contractors-leicester",
    category: "contractor",
    title: "Contractors in Leicester",
    tag: "Logistics, Engineering & Tech",
    description: (
      <>
        Leicester’s logistics, engineering, manufacturing and technology
        sectors create demand for contractors, consultants and project
        specialists. If you work through a limited company, we can support you
        with IR35 reviews, company formation, salary and dividend planning,
        VAT, payroll and annual accounts. IR35 status depends on the actual
        working relationship, not just the contract wording. We review the
        arrangements and provide practical guidance based on the relevant
        factors.
      </>
    ),
    covers: [
      "IR35 status & working practice reviews",
      "Limited company formation & PSC setup",
      "Tax-efficient salary & dividend extraction planning",
      "Quarterly VAT returns & digital records",
      "Statutory annual accounts and Corporation Tax",
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "landlords-leicester",
    category: "landlord",
    title: "Landlords in Leicester",
    tag: "Student HMOs & LE Portfolios",
    description: (
      <>
        Leicester’s two universities and large student population support
        rental demand across the city. Landlords may hold student HMOs,
        professional lets, family homes or a growing portfolio across different
        LE postcodes.
      </>
    ),
    covers: [
      "Rental income and expense records",
      "Self Assessment tax returns",
      "Property bookkeeping",
      "Capital Gains Tax planning",
      "Portfolio reporting",
      "Accounting support for HMOs and limited-company property structures",
    ],
    ctaText: "Landlord Accounting Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "startups-research-businesses",
    category: "tax",
    title: "Startups and Research-Led Businesses",
    tag: "Space Park & Innovation",
    description: (
      <>
        Businesses connected to Space Park Leicester, research, software,
        engineering and product development may have different accounting needs
        from a traditional local business. They may need clean financial
        records for funding discussions, clear project-cost tracking and
        support with R&amp;D tax relief.
      </>
    ),
    covers: [
      "Cloud accounting setup",
      "Bookkeeping and management reporting",
      "VAT registration and returns",
      "Payroll and contractor payments",
      "R&D tax relief eligibility reviews",
      "Year-end accounts and Corporation Tax",
    ],
    ctaText: "R&D Tax Credit Services",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Cloud Ledgers & MTD",
    description: (
      <>
        Accurate records make VAT returns, funding applications and year-end
        accounts easier. We help Leicester businesses maintain cloud-based
        bookkeeping, reconcile transactions, prepare VAT returns and meet
        Making Tax Digital requirements.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant VAT filing",
      "Rolling turnover threshold monitoring",
      "Automated bank feed reconciliations",
      "Standard, Flat Rate and Margin VAT guidance",
      "Clean digital records ready for year end or audits",
    ],
    ctaText: "VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "payroll-leicester",
    category: "business",
    title: "Payroll for Leicester Employers",
    tag: "PAYE & Auto-Enrolment",
    description: (
      <>
        If you employ staff in Leicester, payroll needs to be accurate every
        pay cycle. We provide payroll support covering payslips, RTI submissions,
        pension auto-enrolment, PAYE compliance and starter or leaver
        processing.
      </>
    ),
    covers: [
      "Accurate weekly, fortnightly, or monthly PAYE pay runs",
      "Itemised digital payslips, P60s, and P45 production",
      "Real-Time Information (RTI) submissions to HMRC",
      "Workplace pension auto-enrolment administration",
      "Starter, leaver and statutory payment calculations",
    ],
    ctaText: "Payroll and HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning-leicester",
    category: "tax",
    title: "Tax Planning for Leicester Business Owners",
    tag: "Proactive Pre-Year-End Advice",
    description: (
      <>
        Tax planning should happen before the tax year closes, not after the
        deadline. We help Leicester business owners consider salary and dividend
        planning, pension contributions, Corporation Tax, Capital Gains Tax,
        business structure and cash-flow decisions while there is still time to
        act.
      </>
    ),
    covers: [
      "Proactive year-round reviews before deadline",
      "Optimised director salary vs dividend extraction",
      "Pension contribution timing & Corporation Tax relief",
      "Capital allowances on plant, machinery & vehicles",
      "Structure advice for growing partnerships & limited companies",
    ],
    ctaText: "Tax Planning Services",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "self-assessment-personal-tax",
    category: "business",
    title: "Self Assessment and Personal Tax",
    tag: "Directors, Landlords & Sole Traders",
    description: (
      <>
        We support Leicester individuals with Self Assessment tax returns,
        rental income, dividends, capital gains, sole trader accounts and
        personal tax planning. This is useful for contractors, landlords and
        company directors with more than one source of income.
      </>
    ),
    covers: [
      "Self Assessment tax return preparation & filing",
      "Multiple income streams reported accurately together",
      "Payment on account planning to prevent surprises",
      "Allowable business expenses and mileage claims",
      "Direct liaison with HMRC on your behalf",
    ],
    ctaText: "Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const areasServedList = [
  {
    title: "Leicester City Centre & Waterside",
    desc: "Commercial practices, retailers, hospitality venues, and creative consultancies.",
  },
  {
    title: "Stoneygate, Clarendon Park & Knighton",
    desc: "Professional practices, residential landlords, and self-employed consultants.",
  },
  {
    title: "Evington, Spinney Hills & Highfields",
    desc: "Independent retailers, trade businesses, logistics operators, and local suppliers.",
  },
  {
    title: "Oadby, Wigston & South Leicester",
    desc: "Engineering subcontractors, manufacturing workshops, and growing SME teams.",
  },
  {
    title: "Braunstone, Aylestone & Narborough",
    desc: "Distribution hubs, contractors, logistics specialists, and family-owned businesses.",
  },
  {
    title: "Loughborough, Hinckley & Market Harborough",
    desc: "Tech startups, university spinoffs, precision engineering, and rural enterprises.",
  },
  {
    title: "Melton Mowbray & Wider Leicestershire",
    desc: "Food producers, manufacturing facilities, transport firms, and agricultural businesses.",
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
    desc: "Secure onboarding to collect records, connect cloud software and identify urgent deadlines.",
  },
  {
    step: "03",
    title: "Ongoing Support",
    desc: "Ongoing support with bookkeeping, VAT, payroll, accounts and tax filings without administrative friction.",
  },
  {
    step: "04",
    title: "Clear Communication",
    desc: "Clear communication by email, phone or video call whenever advice is needed — no unexpected hourly fees.",
  },
];

const faqs = [
  {
    q: "Who are the best accountants in Leicester?",
    a: "The best accountant depends on your needs. Look for transparent fixed fees, relevant sector experience, clear communication, reliable deadline management and proactive tax advice. Henleaze Tax Consultancy provides fixed-fee accounting and tax support for Leicester manufacturers, contractors, landlords and small businesses remotely from Bristol.",
  },
  {
    q: "Do you have an office in Leicester?",
    a: "No. Henleaze Tax Consultancy is based in Bristol and supports Leicester clients remotely. We use cloud accounting, secure document sharing, phone, email and video calls, so clients do not need to attend an office in person.",
  },
  {
    q: "Can you help Leicester manufacturers with accounting?",
    a: "Yes. We support manufacturers and food producers with bookkeeping, VAT, payroll, management reporting, year-end accounts, Corporation Tax and R&D tax relief reviews.",
  },
  {
    q: "Can I switch accountants during the tax year?",
    a: "Yes. We can contact your previous accountant, request professional clearance and obtain the records needed to continue without disrupting your deadlines. This is a common process and can usually be handled smoothly.",
  },
  {
    q: "Is your Leicester pricing different from other locations?",
    a: "No. Fees are based on the level of support required, not the client’s location. Leicester clients receive the same fixed-fee approach as clients elsewhere in the UK.",
  },
];

const AccountantsInLeicester: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "manufacturing" | "contractor" | "landlord" | "business" | "tax"
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
    name: "Henleaze Tax Consultancy - Accountants in Leicester",
    url: "https://henleazetaxconsultancy.com/accountants-in-leicester",
    description:
      "Accountants in Leicester for manufacturers, logistics firms, contractors, landlords & growing SMEs. Fixed-fee bookkeeping, VAT, payroll, R&D & tax support.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Leicester" },
    serviceType: [
      "Manufacturing Accounting",
      "Contractor Accounting",
      "IR35 Review",
      "Small Business Accounting",
      "Landlord Accounting",
      "Payroll Services",
      "VAT and Bookkeeping",
      "R&D Tax Credit Claims",
      "Tax Planning",
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
        <title>Accountants in Leicester for Manufacturers, Landlords &amp; SMEs</title>
        <meta
          name="description"
          content="Accountants in Leicester for manufacturers, logistics firms, contractors, landlords &amp; growing SMEs. Fixed-fee bookkeeping, VAT, payroll, R&amp;D &amp; tax support."
        />
        <meta
          name="keywords"
          content="accountants in leicester, accountant leicester, manufacturing accountants leicester, contractor accountants leicester, landlord accountants leicester, small business accountant leicester, ir35 leicester, fixed fee accountants leicester"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-leicester"
        />
        <meta
          property="og:title"
          content="Accountants in Leicester for Manufacturers, Landlords &amp; SMEs"
        />
        <meta
          property="og:description"
          content="Accountants in Leicester for manufacturers, logistics firms, contractors, landlords &amp; growing SMEs. Fixed-fee bookkeeping, VAT, payroll, R&amp;D &amp; tax support."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-leicester"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Leicester for Manufacturers, Landlords &amp; SMEs"
        />
        <meta
          name="twitter:description"
          content="Accountants in Leicester for manufacturers, logistics firms, contractors, landlords &amp; growing SMEs. Fixed-fee bookkeeping, VAT, payroll, R&amp;D &amp; tax support."
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
                  src="/leicester.jpg"
                  alt="Accountants in Leicester for Manufacturers, Landlords & SMEs - Henleaze Tax Consultancy"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={600}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-semibold shadow-md">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Leicester &amp; Leicestershire &bull; Fixed-Fee Remote Support</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Leicester for{" "}
                <span className="text-gold block sm:inline">
                  Manufacturing, Logistics &amp; Growing Businesses
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Leicester businesses often face a different financial challenge
                from office-based firms: stock, margins, project costs, payroll,
                seasonal demand and cash tied up in work in progress. Henleaze
                Tax Consultancy provides fixed-fee accounting and tax support
                for manufacturers, logistics businesses, contractors, landlords
                and growing SMEs across Leicester.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                We are based in Bristol and support Leicester clients remotely
                through cloud accounting, secure document sharing, phone and
                video calls. That means you can access practical accounting
                support without needing to travel for a meeting, while still
                having someone who understands your business and responds when
                you need advice.
              </p>

              <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                We work with clients across Leicester city centre, Stoneygate,
                Clarendon Park, Evington, Knighton, Oadby, Wigston,
                Loughborough, Hinckley, Market Harborough and the wider
                Leicestershire area.
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
                  "Manufacturing & Stock Focus",
                  "IR35 & R&D Relief Support",
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

        {/* ── WHAT LEICESTER BUSINESSES NEED FROM AN ACCOUNTANT ─────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Sector Priorities
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                What Leicester Businesses Need From an Accountant
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                Leicester’s economy combines traditional manufacturing and food
                production with logistics, distribution, space technology,
                research, retail, hospitality and a substantial rental market.
                Space Park Leicester and the city’s research base add a growing
                technology and innovation element, while the wider logistics
                network around the M1 and M69 supports a large number of
                distribution and supply-chain businesses.
              </p>
              <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
                These sectors create different accounting priorities:
              </p>
            </div>

            {/* Sector Matrix Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {sectorMatrix.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-gold/60 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-navy mb-4">
                        <IconComponent className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-display font-bold text-navy text-lg mb-2">
                        {item.type}
                      </h3>
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          Financial Priority:
                        </span>
                        <p className="text-slate-700 text-sm font-medium">
                          {item.priority}
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-navy block mb-1">
                        How We Help:
                      </span>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        {item.howWeHelp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  No Standard Packages &mdash; Tailored to How You Earn
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  This is why we do not start with a standard package. We start
                  by understanding how the business earns money, where costs
                  arise and which deadlines or decisions need attention.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shrink-0 shadow-lg hover:scale-105 transition-all"
              >
                <Link to="/contact">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
                Practical Support
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting Support by Business Type
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and proactive tax advisory
                tailored for Leicester's diverse manufacturing, logistics, and
                commercial sectors.
              </p>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {[
                { key: "all", label: "All Services" },
                { key: "manufacturing", label: "Manufacturing & Production" },
                { key: "contractor", label: "Contractor Accounting" },
                { key: "landlord", label: "Landlord Accounting" },
                { key: "tax", label: "Startups & Tax Planning" },
                { key: "business", label: "VAT & Payroll" },
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

        {/* ── AREAS WE SERVE AROUND LEICESTER ──────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                County Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Areas We Serve Around Leicester
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We provide remote accounting and tax support across Leicester
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
                You do not need to visit our Bristol office to work with us.
                Most Leicester clients use:
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
                This approach suits busy manufacturers, contractors, landlords
                and business owners who want responsive support without
                arranging in-person meetings.
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

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Clear Answers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Leicester Accountant FAQs
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
        <NearbyLocationsSection currentCity="Leicester" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Speak to a Leicester Accountant
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you are looking for accountants in Leicester who understand the
              practical needs of manufacturing, logistics, contracting, property
              and growing businesses, book a free consultation. We will review
              your situation, explain what support you need and set out the
              cost before any work begins.
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

export default AccountantsInLeicester;
