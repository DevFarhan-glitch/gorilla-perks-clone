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
  Laptop,
  Landmark,
  ShieldCheck,
  FlaskConical,
  Cpu,
  Factory,
  Rocket,
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
    tag: "Engineering & Digital Tech",
    description: (
      <>
        Bradford's advanced manufacturing, engineering and growing digital technology sectors support a steady stream of contract work. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service covers your IR35 position properly, limited company structuring, dividend planning, bookkeeping, VAT, payroll and year end filing.
      </>
    ),
    covers: [
      "IR35 status determination & contract reviews",
      "Limited company incorporation & PSC structure",
      "Dividend planning & optimal director salary",
      "Real-time bookkeeping, VAT & RTI payroll",
      "Statutory year-end accounts & CT600 Corporation Tax",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Startups & Established SMEs",
    description: (
      <>
        With Bradford recognised as one of the best places in the UK to start a business, a lot of our local clients are newer companies that need reliable, straightforward support from the outset. Our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service keeps your bookkeeping, VAT and payroll accurate and current from day one.
      </>
    ),
    covers: [
      "Day-to-day cloud bookkeeping (Xero / QuickBooks)",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Monthly management accounts & cash flow visibility",
      "Annual accounts preparation & Companies House filing",
      "Dedicated accountant access with rapid responses",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Single Lets & High-Yield Portfolios",
    description: (
      <>
        With average property prices in Bradford still over £100,000 below the national average, the district has become a genuine draw for landlords building a portfolio at a lower entry cost. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital Gains Tax planning, for a single let or a growing portfolio.
      </>
    ),
    covers: [
      "Property rental income & Self Assessment filing",
      "Allowable expenses & maintenance deduction maximisation",
      "Capital Gains Tax (CGT) advice & 60-day residential reporting",
      "Limited company SPV vs personal ownership guidance",
      "Mortgage interest relief optimisation (Section 24)",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-hr",
    category: "business",
    title: "Payroll and HR Support",
    tag: "PAYE & Auto-Enrolment",
    description: (
      <>
        A late payroll run or an incorrect PAYE submission causes disproportionate stress for something entirely avoidable. Our{" "}
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
      "Accurate weekly & monthly PAYE processing",
      "Workplace pension auto-enrolment & compliance",
      "Real Time Information (RTI) submissions to HMRC",
      "Digital employee payslips & P45/P60 distribution",
      "Director payroll & salary sacrifice setups",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Year-Round Growth Strategy",
    description: (
      <>
        Most overpaid tax comes down to a decision made too late in the year to actually change anything. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service works with you throughout the year, particularly useful for newer Bradford businesses navigating growth for the first time.
      </>
    ),
    covers: [
      "Proactive year-round tax reduction strategies",
      "Director profit extraction & dividend timing",
      "Capital allowances on plant, machinery & commercial assets",
      "Corporation Tax optimisation and forecasting",
      "Personal vs corporate wealth structuring",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: TrendingUp,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Scalable Finance Function",
    description: (
      <>
        For growing Bradford businesses not yet ready to bring finance in house, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service takes on bookkeeping, reporting, payroll and cash flow monitoring, without the cost of a permanent hire.
      </>
    ),
    covers: [
      "End-to-end finance department management",
      "Monthly management accounts & KPI dashboards",
      "Cash flow forecasting & budget management",
      "Accounts payable, supplier invoices & credit control",
      "Senior accountant advisory without in-house overheads",
    ],
    ctaText: "Discover Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: Laptop,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "MTD Compliant Records",
    description: (
      <>
        Clean, current records make VAT filing and any funding application considerably more straightforward, particularly important for the district's high volume of newly formed businesses. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service keeps this tidy throughout the year.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant bookkeeping",
      "Quarterly VAT returns & scheme selection",
      "Live bank reconciliations & expense categorisation",
      "Clean financial records for lenders & grant funding",
      "Stress-free deadline management with zero late penalties",
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
        Companies House filings are easy to lose track of precisely because they don't come around often. Our{" "}
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
      "Annual Confirmation Statement preparation & filing",
      "Director appointment, resignation & address updates",
      "Share allotments, transfers & PSC register maintenance",
      "Companies House statutory compliance monitoring",
      "Registered office address support",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-credits",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Manufacturing & Space Tech",
    description: (
      <>
        Given Bradford's strength in advanced manufacturing, engineering, chemicals and its growing space and satellite technology cluster around the University of Bradford, genuine research and development activity is more common here than many business owners realise. Our{" "}
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
      "Technical problem solving eligibility assessments",
      "Manufacturing & engineering project documentation",
      "Qualifying R&D expenditure calculations",
      "HMRC compliant technical narrative writing",
      "Corporation Tax relief reduction or cash repayment",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Self-Assessment & Dividends",
    description: (
      <>
        Self employment income, rental profits and the occasional capital gain each affect your personal tax position differently. Our{" "}
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
      "Accurate Self Assessment return preparation & filing",
      "Dividend, self-employed & rental income reconciliation",
      "Capital gains reporting & allowable loss utilisation",
      "High Income Child Benefit Charge & payment on account reviews",
      "Clear explanation of calculations with no surprise liabilities",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const bradfordClientProfiles = [
  {
    badge: "Startups & Entrepreneurs",
    title: "First-Time Business Owners & Startups",
    icon: Rocket,
    description:
      "Ranked the UK's most entrepreneurial city, Bradford is home to ambitious first-time founders who need trustworthy accounting setup from day one—covering company formation, bookkeeping, VAT registration and tax advice without jargon.",
    highlight: "Clear guidance from day one, fixed quotes, and zero confusion.",
  },
  {
    badge: "Food & Advanced Manufacturing",
    title: "Manufacturers, Engineering & Food Producers",
    icon: Factory,
    description:
      "Bradford is the UK's fourth largest manufacturing district. From engineering suppliers to food processors, local firms benefit from our proactive tax planning, capital allowances on machinery, and R&D tax credit expertise.",
    highlight: "Capital allowances, supply chain VAT, and robust R&D tax credit claims.",
  },
  {
    badge: "Digital & Space Tech",
    title: "Contractors & Tech Innovators",
    icon: Cpu,
    description:
      "With growing space, satellite technology and digital health hubs linked to the University of Bradford, specialist contractors need dependable IR35 contract reviews, tax-efficient dividend structures, and automated cloud accounting.",
    highlight: "IR35 reviews, tax-efficient profit extraction, and fast response times.",
  },
  {
    badge: "Property Investment",
    title: "Residential Landlords & HMO Investors",
    icon: Home,
    description:
      "With local property prices over £100,000 below the national average, landlords in Bradford achieve strong yields. We handle rental income reporting, mortgage interest deductions, allowable expenses, and Capital Gains Tax planning.",
    highlight: "Rental property accounts, Section 24 advice, and CGT foresight.",
  },
];

const faqs = [
  {
    q: "Do you have a physical office in Bradford?",
    a: "No, we work with Bradford clients entirely remotely, in the same way we do everywhere outside Bristol. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring travel on either side.",
  },
  {
    q: "I've just started a business in Bradford and I've never used an accountant before. Where do we actually start?",
    a: "With a conversation about what you're doing and how you're structured, sole trader or limited company, so we can set your bookkeeping and reporting up correctly from the beginning. Getting this right early is far easier than untangling it a year or two later.",
  },
  {
    q: "I run a small food manufacturing or engineering supply business in Bradford. Could I actually qualify for R&D relief?",
    a: "Possibly, and it's worth checking. Genuine technical problem solving can qualify for R&D relief regardless of company size, and it's an area Bradford's manufacturing base is well positioned to benefit from.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant, request your records, and continue from wherever you currently stand, without disrupting any upcoming deadlines.",
  },
  {
    q: "Is your pricing different for Bradford clients compared to other locations?",
    a: "No. Every client gets the same fixed fee structure, based on what your specific situation actually requires, agreed before any work starts.",
  },
];

const AccountantsInBradford: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Bradford",
    url: "https://henleazetaxconsultancy.com/accountants-in-bradford",
    description:
      "Fixed-fee accountants in Bradford for contractors, landlords and small businesses. Clear advice, fast response. Book a free consultation today.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: [
      { "@type": "City", name: "Bradford" },
      { "@type": "AdministrativeArea", name: "West Yorkshire" },
      { "@type": "AdministrativeArea", name: "Yorkshire and the Humber" },
    ],
    serviceType: [
      "Contractor Accounting",
      "Small Business Accounting",
      "Landlord Accounting",
      "Payroll and HR Support",
      "Tax Planning",
      "Outsourced Accounting",
      "VAT and Bookkeeping",
      "Company Secretarial Services",
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
        name: "Accountants in Bradford",
        item: "https://henleazetaxconsultancy.com/accountants-in-bradford",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accountants in Bradford | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Fixed-fee accountants in Bradford for contractors, landlords and small businesses. Clear advice, fast response. Book a free consultation today."
        />
        <meta
          name="keywords"
          content="accountants in bradford, accountant in bradford, small business accountant bradford, contractor accountant bradford, landlord accountant bradford, tax planning bradford, bradford accounting services"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-bradford"
        />
        <meta
          property="og:title"
          content="Accountants in Bradford | Henleaze Tax Consultancy"
        />
        <meta
          property="og:description"
          content="Fixed-fee accountants in Bradford for contractors, landlords and small businesses. Clear advice, fast response. Book a free consultation today."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-bradford"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Bradford | Henleaze Tax Consultancy"
        />
        <meta
          name="twitter:description"
          content="Fixed-fee accountants in Bradford for contractors, landlords and small businesses. Clear advice, fast response. Book a free consultation today."
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-sm font-semibold mb-6 shadow-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Bradford & West Yorkshire</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Bradford:{" "}
                <span className="text-gold block sm:inline">
                  Clear Advice, Fixed Fees, Local Expertise
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Bradford was named the best place in Britain to start a business by Barclays and ranked the UK's most entrepreneurial city in 2024. That reputation brings a genuine upside for local business owners, but it also means more people than ever are starting something new without necessarily having the accounting support to match the ambition behind it.
              </p>

              <p className="text-base sm:text-lg text-slate-300/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Henleaze Tax Consultancy provides accounting and tax support to contractors, landlords, sole traders and small businesses across Bradford. We're based in Bristol and for day to day work that changes very little, since everything runs through cloud accounting, phone calls and email rather than office visits.
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
                  "100% Fixed Agreed Fees",
                  "Fast & Responsive Support",
                  "R&D & Proactive Tax Strategy",
                  "Seamless Cloud Delivery",
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

        {/* ── BRADFORD ECONOMY CONTEXT ───────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/30 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/30">
                Bradford Economy &amp; Regeneration
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Bradford's Economy is Bigger and More Varied Than Its Reputation Suggests
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Bradford's district economy is worth more than £13 billion and the city ranks fourth in the UK for manufacturing employment, behind only London,{" "}
                <Link
                  to="/accountants-in-birmingham-uk"
                  className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                >
                  Birmingham
                </Link>{" "}
                and{" "}
                <Link
                  to="/accountant-in-leeds"
                  className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                >
                  Leeds
                </Link>
                , with strength across food manufacturing, engineering, chemicals and advanced manufacturing. That heritage sits alongside a genuinely modern growth story. Bradford held UK City of Culture status in 2025, and the momentum from that year has carried into an ongoing £2 billion Southern Gateway regeneration scheme, a new hydrogen refuelling development, and a growing space, satellite technology and digital health cluster tied to the University of Bradford. The city is also home to major headquarters including Morrisons, Yorkshire Building Society and Yorkshire Water.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                That mix shows up clearly in who we work with: sole traders and small manufacturers connected to Bradford's food production and engineering base, contractors working across the growing digital and space technology sector, landlords benefiting from property prices still well below the national average and a genuinely high number of first time business owners starting something new in one of the most entrepreneurial cities in the country.
              </p>
            </div>

            {/* Economy Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Factory,
                  title: "4th in UK Manufacturing",
                  body: "A powerhouse £13bn economy with deep roots in food manufacturing, engineering, and chemical production.",
                },
                {
                  Icon: Landmark,
                  title: "Major UK Headquarters",
                  body: "Home to national corporate headquarters including Morrisons, Yorkshire Building Society, and Yorkshire Water.",
                },
                {
                  Icon: Rocket,
                  title: "Space & Digital Clusters",
                  body: "Emerging space, satellite technology, and digital health clusters tied directly to the University of Bradford.",
                },
                {
                  Icon: TrendingUp,
                  title: "£2bn Regeneration",
                  body: "UK City of Culture 2025 momentum driving the Southern Gateway scheme and innovative hydrogen developments.",
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-gold mb-3" />
                  <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
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
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                Tailored Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting and Tax Support for Bradford Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accountancy, tax strategy and compliance designed for Bradford's entrepreneurs, manufacturers, contractors and landlords.
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

            {/* View All Services Link */}
            <div className="mt-14 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gold/50 text-gold hover:bg-gold hover:text-navy font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-lg"
              >
                <Link to="/services" className="inline-flex items-center gap-2">
                  View All Accounting &amp; Tax Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── WHERE OUR CLIENTS TEND TO COME FROM ──────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Bradford Client Profiles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Where Our Bradford Clients Tend to Come From
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                A good number of our Bradford clients are newer business owners who started up during or after the city's City of Culture year, drawn by the same regeneration momentum and entrepreneurial support that's put Bradford on the map nationally. Others are sole traders and small suppliers connected to the district's food manufacturing and engineering base, one of the largest in the country outside London, Birmingham and Leeds. A steady group are landlords who've been drawn to Bradford specifically because property here remains considerably more affordable than most comparable UK cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {bradfordClientProfiles.map((profile, index) => {
                const ProfileIcon = profile.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between hover:border-gold/60 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-navy group-hover:bg-gold group-hover:scale-105 transition-all">
                          <ProfileIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gold uppercase tracking-wider block">
                            {profile.badge}
                          </span>
                          <h3 className="font-display text-xl font-bold text-navy">
                            {profile.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        {profile.description}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/60 text-xs sm:text-sm text-navy font-semibold">
                      💡 {profile.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Get in touch if any of that sounds close to your situation.
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  First conversation is free and doesn't commit you to anything further.
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
                Every quote is fixed and agreed before any work begins, whether you're based in Bradford, Bristol or elsewhere in the UK. There's no hourly billing, and nothing changes because a query needs a longer conversation than expected, which matters particularly for newer businesses working with a tighter budget.
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
                  <Link to="/contact">Request a Fixed Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ──────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Clear Answers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Frequently Asked Questions From Bradford Clients
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
        <NearbyLocationsSection currentCity="Bradford" />

        {/* ── LATEST BLOGS & INSIGHTS ──────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA SECTION ────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's Get Your Business Started Properly
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you're looking for accountants in Bradford who understand what it takes to build something new, or who can simply give you clear advice and a fixed fee, get in touch. A first conversation is free and doesn't commit you to anything further.
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
                <CheckCircle2 className="w-4 h-4 text-gold" /> No Long-Term Lock-in
              </span>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AccountantsInBradford;
