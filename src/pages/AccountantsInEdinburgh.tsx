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
    tag: "Finance, Fintech & Tech",
    description: (
      <>
        Edinburgh's financial services and fintech sectors support a steady
        stream of contract work, and{" "}
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35
        </Link>{" "}
        status assessments carry real weight given how many contractors work
        through or alongside major financial institutions. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service covers your IR35 position properly, along with limited company
        structuring, dividend planning, bookkeeping, VAT, payroll and year end
        filing.
      </>
    ),
    covers: [
      "IR35 status determinations & compliance",
      "Limited company setup & PSC dividend planning",
      "Salary vs dividend optimisation for Scottish taxpayers",
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
    tag: "New Town, Leith & Morningside",
    description: (
      <>
        Whether you're running a business from the New Town, Leith or out
        toward Morningside, our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service keeps your bookkeeping, VAT and payroll accurate and current, so
        your numbers hold up whenever you actually need to rely on them.
      </>
    ),
    covers: [
      "Accurate day-to-day cloud bookkeeping (Xero / QuickBooks)",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Monthly management accounts & cash flow visibility",
      "Year-end statutory accounts & CT600 Corporation Tax",
      "Proactive advice without waiting on hold or chasing",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Student Lets & HMO Portfolios",
    description: (
      <>
        With Edinburgh's rents and house prices sitting well above the Scottish
        average and a large, consistent student population, the local rental
        market stays active year round. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital
        Gains Tax planning.
      </>
    ),
    covers: [
      "Rental income & Self Assessment filing",
      "Allowable expenses & repairs maximisation",
      "UK-wide Capital Gains Tax (CGT) planning",
      "Student let & HMO portfolio guidance",
      "Mortgage interest relief optimisation",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-hr",
    category: "business",
    title: "Payroll & HR Support",
    tag: "Scottish Tax Codes & Auto-Enrolment",
    description: (
      <>
        Payroll for Edinburgh employers needs to correctly apply Scottish Income
        Tax codes for Scottish resident employees alongside standard PAYE for
        anyone based elsewhere. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        handles this accurately, covering PAYE, pension auto-enrolment and HMRC
        submissions.
      </>
    ),
    covers: [
      "Scottish Income Tax code applications (S-codes)",
      "Cross-border PAYE & National Insurance",
      "Workplace pension auto-enrolment",
      "Real Time Information (RTI) submissions",
      "Employee payslips & P60/P45 generation",
    ],
    ctaText: "View Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Scottish vs UK Tax Harmonisation",
    description: (
      <>
        Most overpaid tax comes down to a decision made too late to matter, and
        in Edinburgh that's often compounded by not accounting for how Scottish
        rates interact with salary, dividends and pension contributions
        differently. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning service
        </Link>{" "}
        works with you throughout the year with that specifically in mind.
      </>
    ),
    covers: [
      "Proactive year-round tax mitigation",
      "Scottish income tax vs UK dividend optimisation",
      "Pension contribution tax relief strategies",
      "Corporation Tax allowances & reliefs",
      "Director profit extraction planning",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: TrendingUp,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Complete Financial Function",
    description: (
      <>
        For growing Edinburgh businesses not yet ready to bring finance in
        house, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting service
        </Link>{" "}
        takes on bookkeeping, reporting, payroll and cash flow monitoring,
        without the cost of a permanent hire.
      </>
    ),
    covers: [
      "End-to-end finance department management",
      "Monthly management accounts & KPI reports",
      "Cash flow forecasting & budgeting",
      "Supplier payments & invoice processing",
      "Direct senior accountant advisory",
    ],
    ctaText: "Discover Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: Laptop,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT & Bookkeeping",
    tag: "Making Tax Digital Compliant",
    description: (
      <>
        VAT registration and reporting rules are identical across the UK, so
        this side of things stays straightforward regardless of where you're
        based. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping service
        </Link>{" "}
        keeps your records tidy throughout the year.
      </>
    ),
    covers: [
      "MTD-compliant digital bookkeeping",
      "Quarterly VAT return preparation & filing",
      "VAT scheme selection (Standard, Flat Rate)",
      "Cross-border and EU VAT compliance",
      "Real-time expense & bank reconciliation",
    ],
    ctaText: "Explore VAT & Bookkeeping",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "rd-tax-credits",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Fintech, Life Sciences & Tech",
    description: (
      <>
        Given Edinburgh's strength in fintech, life sciences and technology,
        genuine R&D activity is common here, and R&D relief is a UK-wide scheme
        unaffected by Scottish tax rules. Our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit service
        </Link>{" "}
        checks eligibility properly and builds a claim that holds up.
      </>
    ),
    covers: [
      "Qualifying project eligibility assessments",
      "Technical narrative preparation",
      "Qualifying cost calculations (SME & RDEC)",
      "HMRC compliance & audit-proof claim packs",
      "Corporation Tax reduction or cash credit",
    ],
    ctaText: "Explore R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax & Self Assessment",
    tag: "Scottish Bands & UK Dividend Tax",
    description: (
      <>
        If you're a Scottish taxpayer, your Self Assessment return needs to
        correctly apply Scottish Income Tax bands to earned income, while
        dividend and savings income are still taxed at UK-wide rates. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax service
        </Link>{" "}
        handles this properly and explains exactly how the two systems interact.
      </>
    ),
    covers: [
      "Scottish Income Tax band computations",
      "UK dividend & savings tax reconciliation",
      "High Income Child Benefit Charge reporting",
      "Capital gains & property income schedules",
      "Timely, error-free Self Assessment filing",
    ],
    ctaText: "Discover Personal Tax Support",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const edinburghClientProfiles = [
  {
    badge: "Finance & Fintech",
    title: "Contractors in Financial Services",
    icon: Calculator,
    description:
      "Edinburgh's position as the UK's second largest financial centre brings a steady flow of contract work within banking, investment management and fintech. Most of our Edinburgh contractor clients need IR35 guidance alongside the usual limited company and tax work.",
    highlight:
      "IR35 assessments, limited company setup, and tax-efficient profit extraction.",
  },
  {
    badge: "Life Sciences & Tech",
    title: "Life Sciences & Technology Businesses",
    icon: FlaskConical,
    description:
      "Edinburgh's life sciences cluster and growing technology sector produce clients who often have R&D activity that qualifies for HMRC relief, alongside the standard accounting and corporation tax obligations for a growing SME.",
    highlight:
      "R&D tax credits, cloud bookkeeping, and Corporation Tax management.",
  },
  {
    badge: "Property & Lettings",
    title: "Landlords Across Edinburgh",
    icon: Home,
    description:
      "With high student demand in Marchmont and Newington, and a consistent professional rental market across the city, Edinburgh landlords typically have more complex rental income positions than most. Scottish Land and Buildings Transaction Tax also adds a local wrinkle on property purchases.",
    highlight:
      "Rental income reporting, CGT planning, and HMO portfolio accounting.",
  },
  {
    badge: "Tourism & Hospitality",
    title: "Tourism & Hospitality Operators",
    icon: Building2,
    description:
      "Whether running accommodation, food and beverage, or event services around the Fringe season and beyond, Edinburgh's hospitality businesses often face fluctuating revenue and seasonal payroll complexity that requires accurate, responsive bookkeeping.",
    highlight:
      "Seasonal payroll, VAT management, and real-time financial reporting.",
  },
];

const faqs = [
  {
    q: "Do you have a physical office in Edinburgh?",
    a: "No, we work with Edinburgh clients entirely remotely, the same way we do across the rest of the UK. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring travel on either side.",
  },
  {
    q: "Does being based in Bristol mean you don't properly understand Scottish tax rules?",
    a: "No. Scottish Income Tax is a well-defined, published system, and applying it correctly is a standard part of preparing an accurate Self Assessment return or payroll for a Scottish taxpayer. We handle this as a matter of course, not as a specialism we need to learn on the job.",
  },
  {
    q: "I'm a limited company director living in Edinburgh. Does Scottish Income Tax affect my dividends?",
    a: "No, and this is a common misunderstanding. Scottish rates apply only to earned income like salary and self-employment profits. Dividend tax rates are set UK-wide and stay the same wherever in the UK you live, which is exactly why the salary and dividend balance is worth reviewing properly if you're a Scottish taxpayer.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant, request your records, and continue from wherever you currently stand, without disrupting any upcoming deadlines.",
  },
  {
    q: "Is your pricing different for Edinburgh clients compared to other locations?",
    a: "No. Every client gets the same fixed fee structure, based on what your specific situation actually requires, agreed before any work starts.",
  },
];

const AccountantsInEdinburgh: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Edinburgh",
    url: "https://henleazetaxconsultancy.com/accountants-in-edinburgh",
    description:
      "Fixed-fee accountants in Edinburgh for contractors, landlords and small businesses. IR35 reviews, Scottish tax expertise. Free consultation.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: [
      { "@type": "City", name: "Edinburgh" },
      { "@type": "AdministrativeArea", name: "City of Edinburgh" },
      { "@type": "AdministrativeArea", name: "Scotland" },
    ],
    serviceType: [
      "Contractor Accounting",
      "IR35 Review",
      "Small Business Accounting",
      "Landlord Accounting",
      "Tax Planning",
      "Payroll & HR Services",
      "VAT and Bookkeeping",
      "R&D Tax Credits",
      "Company Secretarial",
      "Personal Tax & Self Assessment",
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
        name: "Accountants in Edinburgh",
        item: "https://henleazetaxconsultancy.com/accountants-in-edinburgh",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accountants in Edinburgh | Fixed Fees, IR35 Experts</title>
        <meta
          name="description"
          content="Fixed-fee accountants in Edinburgh for contractors, landlords and small businesses. IR35 reviews, Scottish tax expertise. Free consultation."
        />
        <meta
          name="keywords"
          content="accountants in edinburgh, accountant in edinburgh, scottish tax accountants, edinburgh contractor accountants, IR35 edinburgh, landlord accountant edinburgh, tax planning edinburgh"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-edinburgh"
        />
        <meta
          property="og:title"
          content="Accountants in Edinburgh | Fixed Fees, IR35 Experts"
        />
        <meta
          property="og:description"
          content="Fixed-fee accountants in Edinburgh for contractors, landlords and small businesses. IR35 reviews, Scottish tax expertise. Free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-edinburgh"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Edinburgh | Fixed Fees, IR35 Experts"
        />
        <meta
          name="twitter:description"
          content="Fixed-fee accountants in Edinburgh for contractors, landlords and small businesses. IR35 reviews, Scottish tax expertise. Free consultation."
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
                <span>Edinburgh & Across Scotland</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Edinburgh:{" "}
                <span className="text-gold block sm:inline">
                  Fixed Fee Support for Contractors, SMEs & Landlords
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Choosing an accountant in Edinburgh comes with a genuine
                complication unique to Scotland: your income tax isn't
                calculated the same way as in the rest of the UK. Fixed fees,
                Scottish tax expertise, IR35 reviews. Clear answers, zero
                surprises.
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
                  "Scottish Tax Specialists",
                  "Proactive Year-Round Tax",
                  "Complete Cloud Delivery",
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

        {/* ── PHILOSOPHY / INTRO ───────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Scottish Tax Nuance
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Edinburgh Isn't Just Another English City with a Different Postcode
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Choosing an accountant in Edinburgh comes with one genuine complication
                    that doesn't exist anywhere else in the UK outside Scotland: your income
                    tax isn't calculated the same way it would be in{" "}
                    <Link
                      to="/accountancy-firm-in-manchester"
                      className="text-navy font-semibold underline underline-offset-4 hover:text-gold transition-colors"
                    >
                      Manchester
                    </Link>
                    ,{" "}
                    <Link
                      to="/accountants-in-birmingham-uk"
                      className="text-navy font-semibold underline underline-offset-4 hover:text-gold transition-colors"
                    >
                      Birmingham
                    </Link>{" "}
                    or London. Getting that overlooked — and even accurate-looking — advice
                    can leave you paying more than you should.
                  </p>
                  <p>
                    Henleaze Tax Consultancy works with contractors, landlords, sole traders
                    and small businesses across Edinburgh. We're based in Bristol, and in
                    practice everything runs through cloud accounting, phone calls and email.
                    What does matter is understanding how Scottish tax rules apply to your
                    specific situation — and building that in from the outset.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold">
                      ✓
                    </div>
                    <span>
                      Direct partner contact — responsive advice with no hidden fees
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

        {/* ── EDINBURGH ECONOMY CONTEXT ─────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/30 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/30">
                Edinburgh Economy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Scotland's Capital Has a Quietly Diverse Economy
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Edinburgh's identity as Scotland's financial capital is well established —
                it's home to major banking operations, investment management and a fintech
                sector that has grown substantially over the last decade. That financial
                services base creates a consistent demand for contractor accounting work,
                where IR35 considerations are often central.
              </p>
              <p>
                Beyond finance, the city has real strength in life sciences, particularly
                around the Edinburgh BioQuarter, and a technology sector anchored by the
                university and a number of established spin-outs. Edinburgh's tourism and
                hospitality economy, meanwhile, is one of the largest in the UK on a
                per-capita basis, creating a steady need for seasonal payroll and VAT support.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                That mix brings us a varied set of Edinburgh clients: contractors in financial
                services and fintech, life sciences businesses with genuine R&D activity,
                landlords managing student and professional let portfolios around Marchmont,
                Newington and Leith, and small businesses across hospitality, retail and
                professional services.
              </p>
            </div>

            {/* Economy Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Calculator,
                  title: "Financial Services & Fintech",
                  body: "Major banking operations, investment management and a growing fintech hub creating consistent contract work.",
                },
                {
                  Icon: FlaskConical,
                  title: "Life Sciences & BioTech",
                  body: "Edinburgh BioQuarter and university spin-outs driving R&D-rich SME activity with tax credit potential.",
                },
                {
                  Icon: Cpu,
                  title: "Technology & Software",
                  body: "A strong university tech ecosystem and established scale-ups supporting developer and consultant contracting.",
                },
                {
                  Icon: Landmark,
                  title: "Tourism & Hospitality",
                  body: "One of the UK's largest per-capita visitor economies, with Fringe season peaks creating payroll complexity.",
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
          {/* Glow Effects */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                Tailored Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting and Tax Support for Edinburgh Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accountancy, tax strategy and compliance designed
                for Edinburgh's contractors, landlords and ambitious businesses.
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

        {/* ── WHERE CLIENTS COME FROM ──────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Edinburgh Client Profiles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Where Our Edinburgh Clients Tend to Come From
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We understand the specific commercial patterns and tax requirements of
                Edinburgh's key industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {edinburghClientProfiles.map((profile, index) => {
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
                  Sound like where you're at?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Get in touch if any of that sounds close to your situation. First
                  conversation is free and commits you to nothing.
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
                Every quote is fixed and agreed before any work begins, whether you're based
                in Edinburgh, Bristol or anywhere else in the UK. There's no hourly billing,
                and nothing changes because a query needed a longer conversation than expected.
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
                Frequently Asked Questions From Edinburgh Clients
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
        <NearbyLocationsSection currentCity="Edinburgh" />

        {/* ── LATEST BLOGS & INSIGHTS ──────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA SECTION ────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's See What You Actually Need
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you're looking for accountants in Edinburgh who understand Scottish tax and
              give you a straight answer, get in touch. A first conversation is free and
              doesn't commit you to anything further.
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

export default AccountantsInEdinburgh;
