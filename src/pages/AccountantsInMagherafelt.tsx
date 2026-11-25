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
  Tractor,
  HardHat,
  ShieldCheck,
  Layers,
  Laptop,
  Check,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "all" | "manufacturing" | "contractor" | "farming" | "landlord" | "business" | "tax";
  title: string;
  tag: string;
  description: React.ReactNode;
  covers: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
}

const businessPriorityMatrix = [
  {
    type: "Manufacturer or trades business",
    priority: "Stock, WIP, margins and payroll",
    howWeHelp:
      "Bookkeeping, management reporting, VAT, payroll and year-end accounts",
    icon: Factory,
  },
  {
    type: "Construction contractor or subcontractor",
    priority: "CIS, tax status and project costs",
    howWeHelp:
      "CIS support, contractor accounting, IR35 reviews and tax planning",
    icon: HardHat,
  },
  {
    type: "Farm or agri-business",
    priority: "Income timing, capital allowances and diversification",
    howWeHelp:
      "Bookkeeping, Self Assessment, capital allowances and tax planning",
    icon: Tractor,
  },
  {
    type: "Landlord",
    priority: "Rental income, expenses and Capital Gains Tax",
    howWeHelp:
      "Property bookkeeping, Self Assessment and portfolio reporting",
    icon: Home,
  },
  {
    type: "Growing SME",
    priority: "Cash flow, VAT, payroll and management information",
    howWeHelp:
      "Bookkeeping, VAT, payroll, management accounts and year-end support",
    icon: Building2,
  },
];

const servicesData: ServiceItem[] = [
  {
    id: "manufacturing-trades",
    category: "manufacturing",
    title: "Manufacturing and Trades Accountants in Magherafelt",
    tag: "Stock, WIP & Margins",
    description: (
      <>
        Businesses holding stock or work in progress need records that show more
        than annual turnover. Whether you run a building-products business,
        joinery firm, workshop or local trade business, we help track income,
        costs, stock movements and profitability so you can make decisions with
        clearer information.
      </>
    ),
    covers: [
      "Cloud bookkeeping and reconciliations",
      "Stock and work-in-progress reporting",
      "VAT returns and Making Tax Digital support",
      "Payroll for hourly-paid or seasonal staff",
      "Management accounts and year-end accounts",
      "Corporation Tax and Companies House filings",
    ],
    ctaText: "Small Business Accounting Services",
    ctaLink: "/services/small-business-accountants",
    icon: Factory,
  },
  {
    id: "cis-construction",
    category: "contractor",
    title: "CIS and Construction Subcontractors",
    tag: "CIS & Tax Status",
    description: (
      <>
        Construction contractors and subcontractors across Mid Ulster may need
        support with CIS registration, deduction statements, subcontractor
        payments, project costs and tax planning.
      </>
    ),
    covers: [
      "CIS registration and monthly returns",
      "CIS deduction statements and reconciliation",
      "Contractor accounting and IR35 reviews where relevant",
      "Limited company accounts and Corporation Tax",
      "Bookkeeping, VAT and payroll",
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: HardHat,
  },
  {
    id: "farm-agri",
    category: "farming",
    title: "Farm Accountants in Mid Ulster",
    tag: "Farming & Agri-Business",
    description: (
      <>
        Farm and agricultural businesses may need to account for farming
        income, diversification income, machinery, buildings, capital
        allowances and longer-term planning. These businesses often have income
        and costs that do not follow a simple monthly pattern.
      </>
    ),
    covers: [
      "Farm and agri-business bookkeeping",
      "Self Assessment tax returns",
      "Capital allowance reviews",
      "Diversification income reporting",
      "Tax planning and record-keeping support",
    ],
    ctaText: "Explore Tax Planning Services",
    ctaLink: "/services/tax-planning",
    icon: Tractor,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accountants in Magherafelt",
    tag: "Rental Portfolios & CGT",
    description: (
      <>
        Landlords across Magherafelt and Mid Ulster may hold a single rental, an
        HMO or a growing portfolio. We help with rental income reporting,
        allowable expenses, property bookkeeping, Capital Gains Tax planning and
        portfolio reporting.
      </>
    ),
    covers: [
      "Rental property income reporting and Self Assessment filing",
      "Allowable expense maximisation and repair deduction advice",
      "Capital Gains Tax planning and 60-day residential reporting",
      "Single buy-to-let and multi-property portfolio support",
      "Finance cost relief and tax-efficient property structuring",
    ],
    ctaText: "Landlord Accounting Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "MTD & Windsor Framework",
    description: (
      <>
        Accurate records make VAT returns, funding applications and year-end
        accounts easier. We help Magherafelt businesses maintain cloud-based
        bookkeeping, reconcile transactions, prepare VAT returns and meet
        Making Tax Digital requirements. For Northern Ireland businesses trading
        goods with Great Britain, VAT treatment can involve additional
        considerations under the Windsor Framework. We can help you keep records
        organised and flag areas that may need review.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant VAT return preparation",
      "Windsor Framework & GB-NI movement record-keeping guidance",
      "Real-time cloud bookkeeping and transaction reconciliation",
      "Clean financial books for bank finance, grants and year-end accounts",
    ],
    ctaText: "VAT and Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "payroll-employers",
    category: "business",
    title: "Payroll for Magherafelt Employers",
    tag: "Weekly & Monthly PAYE",
    description: (
      <>
        If you employ staff in Magherafelt, payroll needs to be accurate every
        pay cycle. We provide payroll support covering payslips, RTI
        submissions, pension auto-enrolment, PAYE compliance and starter or
        leaver processing.
      </>
    ),
    covers: [
      "Weekly and monthly employee payroll processing",
      "Digital payslips, P45 and P60 production",
      "Real Time Information (RTI) submissions to HMRC",
      "Workplace pension auto-enrolment administration",
      "Starter, leaver, statutory sick pay and maternity management",
    ],
    ctaText: "Payroll and HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning for Mid Ulster Business Owners",
    tag: "Proactive Profit Extraction",
    description: (
      <>
        Tax planning should happen before the tax year closes, not after the
        deadline. We help Magherafelt business owners consider salary and
        dividend planning, pension contributions, Corporation Tax, Capital
        Gains Tax, business structure and cash-flow decisions while there is
        still time to act.
      </>
    ),
    covers: [
      "Director salary and dividend extraction strategies",
      "Corporation Tax and capital allowance optimisation",
      "Pension contribution planning and tax relief",
      "Capital Gains Tax planning on asset and property sales",
      "Business structure reviews (Sole Trader vs Limited Company)",
    ],
    ctaText: "Tax Planning Services",
    ctaLink: "/services/tax-planning",
    icon: TrendingUp,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Relief for Magherafelt Businesses",
    tag: "Innovation & Product Development",
    description: (
      <>
        Businesses involved in manufacturing, construction products, joinery,
        engineering, software or product development may be eligible for R&amp;D
        tax relief. A business does not need to be a large manufacturer to
        qualify; smaller suppliers and specialist firms may also carry out
        qualifying research and development work. We assess eligibility
        carefully and prepare claims using appropriate technical and financial
        evidence.
      </>
    ),
    covers: [
      "Eligibility review for manufacturing, joinery & engineering development",
      "Qualifying expenditure calculation (subcontractor, staff, consumables)",
      "Technical project narrative in line with HMRC guidelines",
      "Corporation Tax liability reduction or cash credit reclaim",
    ],
    ctaText: "R&D Tax Credit Services",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "self-assessment-personal-tax",
    category: "tax",
    title: "Self Assessment and Personal Tax",
    tag: "Multi-Source Income",
    description: (
      <>
        We support Magherafelt individuals with Self Assessment tax returns,
        rental income, dividends, capital gains, sole trader accounts and
        personal tax planning. This is useful for contractors, landlords,
        farmers and company directors with more than one source of income.
      </>
    ),
    covers: [
      "Self Assessment tax return preparation and HMRC submission",
      "Sole trader accounts and business expense claims",
      "Farming, dividend and rental income reconciliation",
      "Payment on account and future tax liability forecasting",
    ],
    ctaText: "Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const areasServedList = [
  {
    title: "Magherafelt Town Centre",
    desc: "Retailers, hospitality, trade workshops, property owners and professional practices across the town.",
  },
  {
    title: "Tobermore & Castledawson",
    desc: "Building product manufacturers, joinery companies, transport operators and local trades.",
  },
  {
    title: "Maghera & Desertmartin",
    desc: "Agricultural holdings, specialist engineering, contractors and independent family businesses.",
  },
  {
    title: "Draperstown & the Sperrins",
    desc: "Farms, rural enterprises, tourism, forestry and construction trades across the foot of the Sperrins.",
  },
  {
    title: "Cookstown & Dungannon",
    desc: "Mid Ulster's extensive industrial, food processing and heavy engineering manufacturing corridor.",
  },
  {
    title: "Coalisland & Stewartstown",
    desc: "Fabrication businesses, sub-contractors, sole traders and growing commercial enterprises.",
  },
  {
    title: "The Wider Mid Ulster Area",
    desc: "Complete digital accounting and tax advisory support across all rural and commercial districts of Mid Ulster.",
  },
];

const faqs = [
  {
    q: "Who are the best accountants in Magherafelt?",
    a: "The best accountants in Magherafelt depend on your needs. Look for transparent fixed fees, relevant experience with your business type, clear communication, reliable deadline management and proactive tax advice. Henleaze Tax Consultancy provides fixed-fee accounting and tax support for Magherafelt manufacturers, contractors, landlords, farms and small businesses remotely from Bristol.",
  },
  {
    q: "Do you have an office in Magherafelt?",
    a: "No. Henleaze Tax Consultancy is based in Bristol and supports Magherafelt clients remotely. We use cloud accounting, secure document sharing, phone, email and video calls, so clients do not need to attend an office in person.",
  },
  {
    q: "I run a small manufacturing business in Magherafelt that holds stock and work in progress. Can you handle that properly?",
    a: "Yes. We can help you maintain bookkeeping and management reporting that reflects stock, work in progress and business performance. The exact support depends on your stock system, production process and reporting needs.",
  },
  {
    q: "Can I switch accountants during the tax year?",
    a: "Yes. We can contact your previous accountant, request professional clearance and obtain the records needed to continue without disrupting your deadlines. This is a common process and can usually be handled smoothly.",
  },
  {
    q: "Is your pricing different for Magherafelt clients compared with other locations?",
    a: "No. Fees are based on the level of support required, not the client's location. Magherafelt clients receive the same fixed-fee approach as clients elsewhere in the UK.",
  },
];

const fixedFeeFeatures = [
  "Bookkeeping and reconciliations.",
  "VAT return preparation.",
  "Payroll and pension administration.",
  "Year-end accounts and Corporation Tax.",
  "Self Assessment tax returns.",
  "CIS support for construction subcontractors.",
  "IR35 reviews for contractors.",
  "Rental income and property tax support.",
  "Management reporting and cash-flow monitoring.",
  "Tax planning advice.",
];

const AccountantsInMagherafelt: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "manufacturing" | "contractor" | "farming" | "landlord" | "business" | "tax"
  >("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter(
          (s) => s.category === activeTab || (activeTab === "business" && s.category === "manufacturing")
        );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Henleaze Tax Consultancy - Accountants in Magherafelt",
    image: "https://henleazetaxconsultancy.com/Magherafelt.jpg",
    url: "https://henleazetaxconsultancy.com/accountants-in-magherafelt",
    description:
      "Reliable accounting for Magherafelt manufacturers, farms, tradespeople and small businesses. Fixed fees, clear advice. Free consultation.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: [
      { "@type": "City", name: "Magherafelt" },
      { "@type": "AdministrativeArea", name: "Mid Ulster" },
      { "@type": "AdministrativeArea", name: "County Londonderry" },
      { "@type": "AdministrativeArea", name: "Northern Ireland" },
    ],
    serviceType: [
      "Manufacturing Accounting",
      "Farm and Agricultural Accounting",
      "Contractor Accounting & CIS",
      "Small Business Accounting",
      "Landlord Accounting",
      "Payroll and HR Support",
      "Tax Planning",
      "VAT and Bookkeeping",
      "R&D Tax Credit Claims",
      "Self Assessment and Personal Tax",
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

  const breadcrumbSchemaData = {
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
        name: "Accountants in Magherafelt",
        item: "https://henleazetaxconsultancy.com/accountants-in-magherafelt",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accountants in Magherafelt | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Reliable accounting for Magherafelt manufacturers, farms, tradespeople and small businesses. Fixed fees, clear advice. Free consultation."
        />
        <meta
          name="keywords"
          content="accountants in magherafelt, magherafelt accountants, accountant in magherafelt, manufacturing accountants mid ulster, farm accountants mid ulster, cis contractors magherafelt, landlord accountants magherafelt, fixed fee accountants northern ireland"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-magherafelt"
        />
        <meta
          property="og:title"
          content="Accountants in Magherafelt | Henleaze Tax Consultancy"
        />
        <meta
          property="og:description"
          content="Reliable accounting for Magherafelt manufacturers, farms, tradespeople and small businesses. Fixed fees, clear advice. Free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-magherafelt"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://henleazetaxconsultancy.com/Magherafelt.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Magherafelt | Henleaze Tax Consultancy"
        />
        <meta
          name="twitter:description"
          content="Reliable accounting for Magherafelt manufacturers, farms, tradespeople and small businesses. Fixed fees, clear advice. Free consultation."
        />
        <meta
          name="twitter:image"
          content="https://henleazetaxconsultancy.com/Magherafelt.jpg"
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchemaData)}</script>
      </Helmet>

      <Layout>
        {/* ── HERO SECTION ─────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy via-navy to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="/Magherafelt.jpg"
                  alt="Accountants in Magherafelt for Manufacturers, Farms, Trades & Landlords - Henleaze Tax Consultancy"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={600}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-semibold shadow-md">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Magherafelt &bull; Mid Ulster &bull; Fixed-Fee Remote Support</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Magherafelt for{" "}
                <span className="text-gold block sm:inline">
                  Manufacturers, Farms, Trades &amp; Landlords
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Magherafelt and the wider Mid Ulster area have a business base
                shaped by manufacturing, construction, agriculture and local
                trades. That creates accounting needs that differ from a typical
                office-based business: stock and work in progress, CIS
                deductions, machinery and capital allowances, seasonal income,
                rental portfolios and long-term tax planning.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Henleaze Tax Consultancy provides fixed-fee accounting and tax
                support for sole traders, contractors, landlords, small companies
                and agricultural businesses across Magherafelt and Mid Ulster.
                We are based in Bristol and work remotely through cloud
                accounting, secure document sharing, phone and video calls.
              </p>

              <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                We support clients across Magherafelt, Cookstown, Dungannon,
                Maghera, Tobermore, Castledawson, Desertmartin, Draperstown and
                the wider Mid Ulster area.
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
                  <a href="#priorities">
                    Explore Support
                    <ChevronDown className="ml-2 h-5 w-5 text-gold" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                {[
                  "100% Agreed Fixed Fees",
                  "Stock & WIP Valuation",
                  "Farming Capital Allowances",
                  "CIS & Contractor Support",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────────────── */}
        <TrustBar />

        {/* ── WHAT MAGHERAFELT BUSINESSES NEED FROM AN ACCOUNTANT ───── */}
        <section id="priorities" className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Mid Ulster Priorities
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                What Magherafelt Businesses Need from an Accountant
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                Businesses in Mid Ulster often need more than a basic year-end
                filing service. A manufacturer may need to understand stock,
                margins and payroll; a contractor may need clarity on CIS and tax
                status; a farm may need help organising income, expenses and
                capital allowances; a landlord may need support with rental
                income and Capital Gains Tax.
              </p>
              <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
                Rather than treating every client the same, we start by
                understanding how the business operates, when income arrives,
                what costs recur and which deadlines or decisions need attention.
              </p>
            </div>

            {/* Business Priority Table / Matrix Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {businessPriorityMatrix.map((item, index) => {
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
                          Accounting Priority:
                        </span>
                        <p className="text-slate-800 text-sm font-semibold">
                          {item.priority}
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-navy block mb-1">
                        How We Help:
                      </span>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.howWeHelp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Callout */}
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Clear, Proactive Advice for Mid Ulster Businesses
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  From stock valuations and CIS filings to agricultural capital
                  allowances, we tailor our support to your exact operating model.
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
                Specialist Practice
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Our Accounting Services in Magherafelt
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Fixed-fee accounting, CIS compliance, agricultural support and
                tax advisory tailored for Magherafelt and Mid Ulster businesses.
              </p>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {[
                { key: "all", label: "All Services" },
                { key: "manufacturing", label: "Manufacturing & Trades" },
                { key: "contractor", label: "CIS & Contractors" },
                { key: "farming", label: "Farming & Agri" },
                { key: "landlord", label: "Landlords" },
                { key: "business", label: "VAT & Payroll" },
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
                          What We Help With:
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

        {/* ── WHAT YOUR FIXED FEE CAN INCLUDE ──────────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center mb-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                  Transparent Pricing
                </span>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                  What Your Fixed Fee Can Include
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
                  Our pricing is fixed and agreed before work begins. You will
                  know what is included, what is excluded and when the fee
                  applies.
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto mb-6">
                  Depending on your needs, a fixed-fee package can include:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto mb-10">
                {fixedFeeFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200"
                  >
                    <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto text-center mb-8">
                We do not charge hourly for routine questions, and we do not
                increase the fee simply because a conversation took longer than
                expected. If your requirements change, we explain the revised
                scope before any change is made.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-10 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
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
                  <Link to="/contact">Request a Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── AREAS WE SERVE AROUND MAGHERAFELT ────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Mid Ulster Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Areas We Serve Around Magherafelt
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We provide remote accounting and tax support across Magherafelt
                and nearby areas, including:
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
                Seamless Collaboration
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                How Remote Accounting Works
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                You do not need to visit an office in person to receive proactive
                accounting and tax support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  step: "01",
                  title: "Introductory Review",
                  desc: "We discuss your business structure, turnover, stock, payroll and filing deadlines via phone or video call.",
                },
                {
                  step: "02",
                  title: "Agreed Scope & Fee",
                  desc: "You receive an itemised proposal with a clear monthly fixed fee covering all routine filings and advice.",
                },
                {
                  step: "03",
                  title: "Cloud Connection",
                  desc: "We connect to Xero, QuickBooks or FreeAgent with automated bank feeds and secure receipt capture.",
                },
                {
                  step: "04",
                  title: "Year-Round Advisory",
                  desc: "Timely VAT submissions, payroll runs, management figures and proactive tax reviews throughout the year.",
                },
              ].map((step, idx) => (
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
                This approach suits busy manufacturers, contractors, landlords,
                farmers and business owners who want responsive support without
                arranging travel for in-person meetings.
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

        {/* ── MAGHERAFELT ACCOUNTANT FAQS ──────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Clear Answers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Magherafelt Accountant FAQs
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
        <NearbyLocationsSection currentCity="Magherafelt" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── SPEAK TO A MAGHERAFELT ACCOUNTANT (FINAL CTA) ────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Speak to a Magherafelt Accountant
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you are looking for accountants in Magherafelt who understand the
              practical needs of manufacturing, construction, farming, property
              and growing businesses, book a free consultation. We will review
              your situation, explain what support you need and set out the cost
              before any work begins.
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

export default AccountantsInMagherafelt;
