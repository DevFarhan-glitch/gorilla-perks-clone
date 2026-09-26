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
  TrendingUp,
  Phone,
  Laptop,
  Landmark,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Receipt,
  FileText,
  Cpu,
  Plane,
  Film,
  Globe2,
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
    tag: "Cyber Security, Fintech & Aerospace",
    description: (
      <>
        Belfast's cyber security, fintech and aerospace sectors support a steady
        stream of contract work, and{" "}
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35
        </Link>{" "}
        status assessments carry real weight given how many contractors here
        work through or alongside major employers. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service covers your IR35 position properly, limited company
        structuring, dividend planning, bookkeeping, VAT, payroll and year end
        filing.
      </>
    ),
    covers: [
      "IR35 status assessments & bespoke contract reviews",
      "Limited company setup & PSC tax-efficient structuring",
      "Optimised director salary & dividend planning",
      "Real-time cloud bookkeeping, VAT & RTI payroll",
      "Statutory annual accounts & CT600 Corporation Tax",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "City Centre, Lisburn & Newtownabbey",
    description: (
      <>
        Whether you're running a business from the city centre or trading
        further out toward Lisburn or Newtownabbey, our{" "}
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
      "Day-to-day cloud bookkeeping (Xero / QuickBooks / FreeAgent)",
      "Making Tax Digital (MTD) compliant VAT management",
      "Monthly management reporting & cash flow oversight",
      "Statutory year-end accounts & Companies House submissions",
      "Dedicated accountant support with fast response times",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Queen's, Ulster Univ & Student Lets",
    description: (
      <>
        With two major universities driving consistent student demand and a
        rental market that's stayed comparatively tight, Belfast's landlords
        have a lot to manage. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital
        Gains Tax planning, which follows the same rules as the rest of the UK
        regardless of your Northern Ireland address.
      </>
    ),
    covers: [
      "Rental property income reporting & Self Assessment filing",
      "Allowable expense maximisation & repair deduction advice",
      "UK Capital Gains Tax (CGT) advice & 60-day residential reporting",
      "HMO & student let tax compliance",
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
    tag: "UK-Wide PAYE & Auto-Enrolment",
    description: (
      <>
        A late payroll run or an incorrect PAYE submission causes
        disproportionate stress for something entirely avoidable. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        keeps this accurate and on schedule, using the same UK-wide PAYE system
        that applies in Belfast as anywhere else.
      </>
    ),
    covers: [
      "Timely weekly and monthly PAYE payroll processing",
      "Workplace pension auto-enrolment & compliance",
      "Real Time Information (RTI) submissions to HMRC",
      "Digital employee payslips, P45 & P60 distribution",
      "Director payroll & salary sacrifice optimisation",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Profit Extraction & Corporation Tax",
    description: (
      <>
        Most overpaid tax comes down to a decision made too late in the year to
        actually change anything. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service works with you throughout the year, covering dividend timing,
        corporation tax and profit extraction.
      </>
    ),
    covers: [
      "Year-round proactive tax reduction strategies",
      "Dividend timing & director profit extraction planning",
      "Corporation Tax relief & capital allowances utilisation",
      "Loss relief and group tax structuring",
      "Personal & corporate wealth alignment",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: TrendingUp,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Full-Function Finance Team",
    description: (
      <>
        For growing Belfast businesses not yet ready to bring finance in house,
        our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service takes on bookkeeping, reporting, payroll and cash flow
        monitoring, without the cost of a permanent hire.
      </>
    ),
    covers: [
      "End-to-end management of your finance function",
      "Monthly management accounts & tailored KPI reporting",
      "Cash flow forecasting, budgeting & scenario modelling",
      "Accounts payable, supplier invoices & credit control",
      "Direct access to senior accountants without in-house overheads",
    ],
    ctaText: "Discover Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: Laptop,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Windsor Framework & GB-NI Trade",
    description: (
      <>
        VAT can get genuinely more complicated for Belfast businesses trading
        goods with Great Britain, given Northern Ireland's dual position inside
        both the UK's VAT system and, for goods specifically, EU VAT rules under
        the Windsor Framework. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service keeps this properly managed, whether your business is affected by
        that complexity or not.
      </>
    ),
    covers: [
      "Windsor Framework & GB-NI goods movement VAT support",
      "Making Tax Digital (MTD) compliant VAT return submissions",
      "Real-time cloud bank reconciliation & transaction tagging",
      "Cross-border EU VAT treatment and reverse charge rules",
      "Clean financial books for audit, lenders and grant schemes",
    ],
    ctaText: "View VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "company-secretarial",
    category: "business",
    title: "Company Secretarial Services",
    tag: "Companies House NI Compliance",
    description: (
      <>
        Companies House filings work the same way for companies registered in
        Northern Ireland as anywhere else in the UK. Our{" "}
        <Link
          to="/services/company-secretarial-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          company secretarial
        </Link>{" "}
        service tracks confirmation statements and any changes to directors or
        shareholders.
      </>
    ),
    covers: [
      "Annual Confirmation Statement preparation & filing",
      "Director appointments, resignations & PSC register updates",
      "Share allotments, transfers & restructuring documentation",
      "Companies House statutory register maintenance",
      "Registered office address services",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-credits",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Cyber, Fintech & Aerospace Tech",
    description: (
      <>
        Given Belfast's strength in cyber security, fintech and aerospace
        engineering, genuine research and development activity is common here,
        and R&D relief is a UK-wide scheme available to Northern Ireland
        businesses on exactly the same terms. Our{" "}
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
      "Eligibility assessment across software, engineering & aerospace",
      "Qualifying expenditure calculation (staff, subcontractors, software)",
      "Technical narrative preparation aligned with HMRC guidelines",
      "Corporation Tax reduction or cash credit repayment",
      "Defensible claim structures prepared by tax professionals",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "UK Rates & Self-Assessment",
    description: (
      <>
        Income tax rules for Belfast residents are identical to the rest of the
        UK, unlike in Scotland, so your Self Assessment return follows the same
        rates and bands as anywhere in England, Wales or Northern Ireland. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment
        </Link>{" "}
        service handles the filing properly and explains anything that's
        genuinely specific to your situation.
      </>
    ),
    covers: [
      "Self Assessment tax return preparation and HMRC submission",
      "Director dividend, self-employed & rental income reconciliation",
      "Capital Gains Tax calculations and allowable deductions",
      "High Income Child Benefit Charge & payment on account planning",
      "Transparent calculations with clear liability timelines",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const belfastClientProfiles = [
  {
    badge: "Cyber Security & Tech",
    title: "Cyber Security & Technology Contractors",
    icon: Cpu,
    description:
      "A good number of our Belfast clients work in cyber security or technology, contracting through their own limited companies alongside firms in the city's growing tech cluster and wanted proper IR35 guidance rather than a generic freelance template.",
    highlight: "IR35 reviews, PSC tax optimisation, and fast direct communication.",
    ir35Link: true,
  },
  {
    badge: "Cross-Border & GB-NI Trade",
    title: "Trading Businesses & Importers/Exporters",
    icon: Globe2,
    description:
      "A steady group are small businesses trading goods across the Irish Sea who need clearer guidance on how VAT actually applies to them under current Windsor Framework rules.",
    highlight: "Windsor Framework VAT clarity, customs bookkeeping, and MTD filing.",
    ir35Link: false,
  },
  {
    badge: "Film & Television",
    title: "Freelancers in Film & Television Production",
    icon: Film,
    description:
      "With Belfast's world-class studio facilities supporting a thriving creative cluster, we work with freelancers across film, television production, design, and digital media who require flexible, accurate tax returns.",
    highlight: "Sole trader & Ltd company reporting, expense claims, and dividend planning.",
    ir35Link: false,
  },
  {
    badge: "Property Investment",
    title: "Landlords & Student Accommodation Investors",
    icon: Home,
    description:
      "We work with landlords holding property near Queen's University and Ulster University who wanted their rental reporting handled properly, with full visibility over allowable deductions and Capital Gains Tax.",
    highlight: "Section 24 interest relief, CGT calculations, and portfolio reporting.",
    ir35Link: false,
  },
];

const faqs = [
  {
    q: "Do you have a physical office in Belfast?",
    a: "No, we work with Belfast clients entirely remotely, the same way we do across the rest of the UK. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring travel on either side.",
  },
  {
    q: "Is my income tax different because I'm based in Northern Ireland?",
    a: "No. Unlike Scotland, Northern Ireland uses exactly the same income tax rates and bands as England and Wales. Where Northern Ireland genuinely differs is in VAT treatment for goods trade under the Windsor Framework, not personal or company tax rates.",
  },
  {
    q: "I contract into Belfast's cyber security or fintech sector through my own limited company. Do you understand IR35 for this kind of work?",
    a: "Yes, this is a common client profile for us. We review your actual contract and working arrangements to assess your IR35 position properly, rather than relying on a blanket determination.",
  },
  {
    q: "My business sells goods between Northern Ireland and Great Britain. Does that change my VAT position?",
    a: "It can. Goods movement between GB and NI falls under different rules to standard UK VAT because of the Windsor Framework, while services are unaffected. Worth a specific conversation to check if your setup is correct.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant, request your records, and continue from wherever you currently stand, without disrupting any upcoming deadlines.",
  },
];

const AccountantsInBelfast: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Belfast",
    url: "https://henleazetaxconsultancy.com/accountants-in-belfast",
    description:
      "Fixed-fee accountants in Belfast for contractors, landlords and small businesses. VAT, IR35 and tax support. Book a free consultation today.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: [
      { "@type": "City", name: "Belfast" },
      { "@type": "AdministrativeArea", name: "County Antrim" },
      { "@type": "AdministrativeArea", name: "County Down" },
      { "@type": "AdministrativeArea", name: "Northern Ireland" },
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
        name: "Accountants in Belfast",
        item: "https://henleazetaxconsultancy.com/accountants-in-belfast",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accountants in Belfast | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Fixed-fee accountants in Belfast for contractors, landlords and small businesses. VAT, IR35 and tax support. Book a free consultation today."
        />
        <meta
          name="keywords"
          content="belfast accountants, accountants in belfast, accountant in belfast, contractor accountant belfast, small business accountant belfast, landlord accountant belfast, ir35 belfast, vat northern ireland windsor framework, tax planning belfast"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-belfast"
        />
        <meta
          property="og:title"
          content="Accountants in Belfast | Henleaze Tax Consultancy"
        />
        <meta
          property="og:description"
          content="Fixed-fee accountants in Belfast for contractors, landlords and small businesses. VAT, IR35 and tax support. Book a free consultation today."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-belfast"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Belfast | Henleaze Tax Consultancy"
        />
        <meta
          name="twitter:description"
          content="Fixed-fee accountants in Belfast for contractors, landlords and small businesses. VAT, IR35 and tax support. Book a free consultation today."
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
                <span>Belfast &amp; Northern Ireland</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Belfast:{" "}
                <span className="text-gold block sm:inline">
                  Personal &amp; Business Tax Support
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Northern Ireland shares the same income tax system as the rest of the UK, so a lot of people assume that's the end of the story when it comes to what makes Belfast different for an accountant to work in. It isn't. Between VAT complexities tied to trading goods between Great Britain and Northern Ireland, and a genuinely distinct local economy built around fintech, cyber security and aerospace, Belfast has its own set of considerations worth understanding properly.
              </p>

              <p className="text-base sm:text-lg text-slate-300/90 max-w-3xl mx-auto leading-relaxed mb-10">
                Henleaze Tax Consultancy provides accounting and tax support to contractors, landlords, sole traders and small businesses across Belfast. We're based in Bristol and for day to day work that changes very little, since everything runs through cloud accounting, phone calls and email rather than office visits.
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
                  "Windsor Framework VAT Support",
                  "IR35 & Contractor Focus",
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

        {/* ── BELFAST ECONOMY CONTEXT ───────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/30 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/30">
                Belfast Economic Landscape
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Belfast Has Quietly Become a Genuine Business Services Hub
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Belfast's economy has shifted substantially over the past two decades. The city is now home to a significant financial and professional services cluster, with global names including Citi, Allstate, Deloitte and PwC all running major operations here, and business services are currently forecast to be one of the strongest growth sectors in Northern Ireland through 2026. Alongside that sits a genuinely large cyber security and technology sector, built around firms like Kainos and Rapid7, and an aerospace and advanced manufacturing base with decades of heritage that continues to contribute close to a billion pounds a year to the local economy. Belfast's film and television production industry has also grown considerably, with major studio facilities supporting a steady flow of freelance and contract work across production, design and digital media.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                That mix shows up clearly in who we work with: cyber security and technology contractors working through their own limited companies, professionals in financial and legal services, freelancers in film and television production, and landlords letting to a large student population around Queen's University and Ulster University.
              </p>
            </div>

            {/* Economy Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Landmark,
                  title: "Financial & Professional Hub",
                  body: "A thriving business services sector featuring global leaders like Citi, Allstate, Deloitte and PwC driving rapid growth.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Cyber Security & Tech",
                  body: "World-class cyber security and software ecosystem anchored by innovators including Kainos and Rapid7.",
                },
                {
                  Icon: Plane,
                  title: "Aerospace & Engineering",
                  body: "Deep manufacturing heritage contributing close to £1 billion annually to Northern Ireland's regional economy.",
                },
                {
                  Icon: Film,
                  title: "Film & TV Production",
                  body: "Major studio facilities and creative infrastructure powering an expanding freelance media workforce.",
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
                Accounting and Tax Support for Belfast Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accountancy, tax strategy and compliance designed for Belfast's contractors, growing businesses, cross-border traders and landlords.
              </p>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {[
                { key: "all", label: "All Services" },
                { key: "contractor", label: "Contractor Accounting" },
                { key: "business", label: "Small Business & VAT" },
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
                Belfast Client Profiles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Where Our Belfast Clients Tend to Come From
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                A good number of our Belfast clients work in cyber security or technology, contracting through their own limited companies alongside firms in the city's growing tech cluster and wanted proper{" "}
                <Link
                  to="/what-is-ir35-uk"
                  className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                >
                  IR35 guidance
                </Link>{" "}
                rather than a generic freelance template. We also work with freelancers in film and television production, and with landlords holding property near Belfast's universities who wanted their reporting handled properly. A steady group are small businesses trading goods across the Irish Sea who need clearer guidance on how VAT actually applies to them under current rules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {belfastClientProfiles.map((profile, index) => {
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
                Every quote is fixed and agreed before any work begins, whether you're based in Belfast, Bristol or anywhere else in the UK. There's no hourly billing, and nothing changes because your situation involves a bit more VAT complexity than most.
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
                Frequently Asked Questions From Belfast Clients
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
        <NearbyLocationsSection currentCity="Belfast" />

        {/* ── LATEST BLOGS & INSIGHTS ──────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA SECTION ────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's Get Your Tax Position Sorted
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you're looking for accountants in Belfast who understand what's genuinely different about doing business here, and what isn't, get in touch. A first conversation is free and doesn't commit you to anything further.
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

export default AccountantsInBelfast;
