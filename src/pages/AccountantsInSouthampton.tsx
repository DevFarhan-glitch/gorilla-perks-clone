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
  Shield,
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
    title: "Contractor Accountants in Southampton",
    tag: "Port, Marine & Tech Contractors",
    description: (
      <>
        Southampton’s port, logistics, marine engineering and technology
        sectors create regular project-based contract work. If you work through
        your own limited company, we can help with company formation,
        bookkeeping, VAT, payroll, dividend planning, annual accounts and IR35
        status reviews. Our contractor accounting support is designed for
        engineers, IT contractors, consultants and project professionals
        working with employers or agencies in Southampton and across the Solent
        region.
      </>
    ),
    covers: [
      "Rigorous IR35 contract & working practices reviews",
      "Tax-efficient limited company formation & PSC setup",
      "Strategic salary vs dividend timing & profit extraction",
      "Quarterly VAT returns & MTD digital record-keeping",
      "Statutory annual accounts & Corporation Tax filing",
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accountants in Southampton",
    tag: "SMEs & Local Traders",
    description: (
      <>
        We support small businesses across Southampton with day-to-day
        bookkeeping, VAT returns, management reporting, payroll, year-end
        accounts and practical advice on cash flow and profitability. This is
        useful whether you run a business in the city centre, operate from
        home, supply the port economy, work in professional services or are
        building a local service business.
      </>
    ),
    covers: [
      "Accurate day-to-day cloud bookkeeping with bank feeds",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Monthly management accounts & cash flow visibility",
      "Annual accounts preparation & Corporation Tax returns",
      "Direct advice without confusing jargon or hidden fees",
    ],
    ctaText: "Small Business Accountants",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Portswood, HMOs & Portfolios",
    description: (
      <>
        Southampton’s rental market is shaped by students, NHS staff, port
        workers and young professionals. Areas such as Portswood and Swaythling
        remain particularly relevant for student and professional lets, while
        landlords elsewhere in the city may hold single buy-to-lets, HMOs or
        growing portfolios. We help with rental income reporting, allowable
        expenses, property bookkeeping, Capital Gains Tax planning, portfolio
        reporting and the tax side of ownership-structure decisions.
      </>
    ),
    covers: [
      "Rental income reporting & Self Assessment submissions",
      "Maximising allowable property expenditure & repair deductions",
      "Section 24 mortgage interest relief calculations",
      "Capital Gains Tax (CGT) advice prior to property sales",
      "Student let, HMO & multi-unit portfolio guidance",
    ],
    ctaText: "Landlord Accounting Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll Support for Southampton Employers",
    tag: "PAYE & Auto-Enrolment",
    description: (
      <>
        If you employ staff in Southampton, payroll needs to be accurate every
        cycle. We provide payroll support covering payslips, RTI submissions,
        pension auto-enrolment, starter and leaver processing, and PAYE
        compliance.
      </>
    ),
    covers: [
      "Accurate weekly, fortnightly, or monthly PAYE pay runs",
      "Workplace pension auto-enrolment compliance & reporting",
      "Real-Time Information (RTI) submissions to HMRC",
      "Digital payslips, P60s, and P45 generation",
      "Director and employee payroll handled smoothly",
    ],
    ctaText: "Payroll and HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Year-Round Proactive Planning",
    description: (
      <>
        Most overpaid tax comes from a decision made too late in the year to
        actually matter. Our tax planning service works with you throughout the
        year, not just in the weeks before a deadline.
      </>
    ),
    covers: [
      "Proactive year-round reviews before your year-end passes",
      "Optimised director salary vs dividend extraction mix",
      "Pension contribution allowances & Corporation Tax relief",
      "Capital allowances timing on equipment & business assets",
      "Clear forward guidance to avoid surprise tax bills",
    ],
    ctaText: "Tax Planning Services",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Complete Finance Function",
    description: (
      <>
        For growing Southampton businesses not yet ready to bring finance in
        house, our outsourced accounting service takes on bookkeeping,
        reporting, payroll and cash flow monitoring, without the cost of a
        permanent hire.
      </>
    ),
    covers: [
      "End-to-end cloud bookkeeping & bank reconciliations",
      "Monthly KPI dashboards & management reporting packs",
      "Cash flow forecasting & supplier payment tracking",
      "Xero / QuickBooks integration & accounting oversight",
      "Senior finance expertise at a fraction of full-time cost",
    ],
    ctaText: "Outsourced Accounting Services",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Cloud Records & MTD",
    description: (
      <>
        Accurate records make VAT returns, funding applications and year-end
        accounts much easier. We help Southampton businesses maintain
        cloud-based bookkeeping, reconcile transactions, prepare VAT returns
        and stay organised for Making Tax Digital requirements.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant VAT filing",
      "Rolling 12-month turnover threshold monitoring",
      "Standard, Flat Rate and Margin VAT scheme advice",
      "Automated bank feed reconciliation & digital receipts",
      "Zero last-minute receipt scrambles or late filing fines",
    ],
    ctaText: "VAT & Bookkeeping Services",
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
        Companies House filings are easy to lose track of precisely because they
        don't come around often. Our company secretarial service tracks
        confirmation statements and any changes to directors or shareholders.
      </>
    ),
    covers: [
      "Annual Confirmation Statement submissions",
      "Director, secretary & PSC change filings",
      "Share allotments, transfers & restructuring",
      "Maintenance of statutory company registers",
      "Registered office address support",
    ],
    ctaText: "Company Secretarial Services",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Relief for Southampton Innovation Businesses",
    tag: "Marine Tech & Software Innovation",
    description: (
      <>
        Southampton has strengths in marine technology, engineering, robotics,
        software and research-led businesses. If your company is developing new
        products, processes or technical solutions, it may be worth reviewing
        whether R&amp;D tax relief applies. We assess eligibility carefully and
        prepare claims based on the actual technical and financial evidence,
        rather than making broad assumptions.
      </>
    ),
    covers: [
      "Rigorous eligibility review before committing client resources",
      "Marine technology, robotics & software expenditure analysis",
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
    title: "Personal Tax and Self Assessment",
    tag: "Multi-Source Income & Directors",
    description: (
      <>
        We help Southampton individuals with Self Assessment tax returns,
        dividend income, rental profits, capital gains, sole trader accounts and
        personal tax planning. This is particularly useful for contractors,
        landlords and company directors who have more than one source of
        income.
      </>
    ),
    covers: [
      "Self Assessment tax return preparation & filing",
      "Combining trade profit, rental yields & company dividends",
      "Payments on account scheduling to prevent cash surprises",
      "Claiming all allowable business mileage & expenses",
      "Direct correspondence and liaison with HMRC",
    ],
    ctaText: "Personal Tax and Self Assessment",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const whyChooseUsPoints = [
  "Fixed monthly fees agreed in advance.",
  "A named point of contact rather than a call-centre experience.",
  "Support with bookkeeping, VAT, payroll, year-end accounts and tax planning.",
  "Clear guidance for contractors on IR35, limited company setup and salary-dividend planning.",
  "Landlord accounting for single lets, HMOs and property portfolios.",
  "Remote accounting support without travelling to an office.",
];

const areasServedList = [
  {
    title: "Southampton City Centre & Ocean Village",
    desc: "Supporting maritime professionals, tech start-ups, hospitality venues, and consultancies.",
  },
  {
    title: "Shirley, Shirley Warren & Lordshill",
    desc: "Fixed-fee support for local trades, healthcare workers, sole traders, and retail businesses.",
  },
  {
    title: "Portswood, Highfield & Swaythling",
    desc: "Specialist landlord tax services for student HMOs and professional buy-to-let properties.",
  },
  {
    title: "Bitterne, Woolston & Sholing",
    desc: "Accounting, bookkeeping, and payroll for small service businesses and sole traders.",
  },
  {
    title: "Totton, Hythe & the Waterside",
    desc: "Serving marine engineering contractors, logistics firms, and industrial supply specialists.",
  },
  {
    title: "Eastleigh, Chandler’s Ford & Hedge End",
    desc: "Comprehensive remote accounting for transport, retail, commercial hubs, and growing SMEs.",
  },
  {
    title: "Romsey & the Wider Test Valley Area",
    desc: "Tax planning, director dividend strategies, and business accounting for local owners.",
  },
  {
    title: "Fareham, Gosport & the Solent Region",
    desc: "Cross-Solent contractor support, VAT compliance, and corporate finance assistance.",
  },
];

const faqs = [
  {
    q: "Who are the best accountants in Southampton?",
    a: "The best accountant for you depends on your needs, not just the firm’s location. Look for transparent fixed fees, relevant experience with your client type, clear communication, strong tax-planning support and a process for handling VAT, payroll, year-end accounts and HMRC deadlines. Henleaze Tax Consultancy provides fixed-fee accounting and tax support for Southampton contractors, landlords and small businesses remotely from Bristol.",
  },
  {
    q: "Do you have accountants based in Southampton?",
    a: "No. Henleaze Tax Consultancy is based in Bristol and supports Southampton clients remotely. We use cloud accounting software, secure document sharing, phone calls, email and video meetings, so clients do not need to attend an office in person.",
  },
  {
    q: "Can you help contractors in Southampton with IR35?",
    a: "Yes. We review contracts and working arrangements to help contractors understand their IR35 position. We also support limited company contractors with company formation, bookkeeping, VAT, payroll, salary and dividend planning, and year-end accounts.",
  },
  {
    q: "Can I switch accountants during the tax year?",
    a: "Yes. We can contact your previous accountant, request professional clearance and obtain the records needed to continue without disrupting your deadlines. This is a common process and can usually be handled smoothly.",
  },
  {
    q: "Do Southampton clients pay different fees?",
    a: "No. Fees are based on the work required, not the client’s location. Every quotation is fixed and agreed before work starts, whether you are in Southampton, Bristol or elsewhere in the UK.",
  },
  {
    q: "Can you help a new business in Southampton?",
    a: "Yes. We can help with choosing between sole trader and limited company status, company formation, VAT registration, bookkeeping setup, payroll, tax registration and ongoing compliance.",
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
    name: "Henleaze Tax Consultancy - Best Accountants in Southampton",
    url: "https://henleazetaxconsultancy.com/best-accountants-in-southampton",
    description:
      "Looking for best accountants in Southampton? Henleaze Tax Consultancy provides fixed-fee accounting, tax planning & landlord tax support across Southampton.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Southampton" },
    serviceType: [
      "Contractor Accounting",
      "IR35 Review",
      "Small Business Accounting",
      "Landlord Accounting",
      "Payroll Services",
      "Tax Planning",
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
        <title>Best Accountants in Southampton | Fixed-Fee Tax &amp; Accounting</title>
        <meta
          name="description"
          content="Looking for best accountants in Southampton? Henleaze Tax Consultancy provides fixed-fee accounting, tax planning &amp; landlord tax support across Southampton."
        />
        <meta
          name="keywords"
          content="best accountants in southampton, accountants in southampton, accountant southampton, contractor accountants southampton, landlord accounting southampton, small business accountant southampton, ir35 southampton, fixed fee accountant southampton"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/best-accountants-in-southampton"
        />
        <meta
          property="og:title"
          content="Best Accountants in Southampton | Fixed-Fee Tax &amp; Accounting"
        />
        <meta
          property="og:description"
          content="Looking for best accountants in Southampton? Henleaze Tax Consultancy provides fixed-fee accounting, tax planning &amp; landlord tax support across Southampton."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/best-accountants-in-southampton"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Accountants in Southampton | Fixed-Fee Tax &amp; Accounting"
        />
        <meta
          name="twitter:description"
          content="Looking for best accountants in Southampton? Henleaze Tax Consultancy provides fixed-fee accounting, tax planning &amp; landlord tax support across Southampton."
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
                  src="/southampton.png"
                  alt="Accountants in Southampton providing fixed-fee tax and accounting support remotely"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={600}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-semibold shadow-md">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Southampton &amp; Solent &bull; Fixed-Fee Remote Support</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Best Accountants in Southampton for{" "}
                <span className="text-gold block sm:inline">
                  Contractors, Landlords &amp; SMEs
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Henleaze Tax Consultancy provides fixed-fee accounting and tax
                support for contractors, landlords, sole traders and small
                businesses across{" "}
                <Link
                  to="/accounting-firms-in-southampton"
                  className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                >
                  Southampton
                </Link>
                . We are based in Bristol and work with Southampton clients
                remotely through cloud accounting, secure document sharing, phone
                and video calls.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Choosing an accountant should not depend on hoping the advice is
                good after you have signed up. Our approach is straightforward:
                agree the scope and fee before work begins, keep records organised
                throughout the year, and give practical tax advice rather than
                only filing returns at the deadline.
              </p>

              <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                We support clients across Southampton, including the city
                centre, Shirley, Portswood, Swaythling, Bitterne, Woolston,
                Totton, Eastleigh and the wider Solent area.
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
                  "Fixed Monthly Fees",
                  "Named Point of Contact",
                  "IR35 & Landlord Focus",
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

        {/* ── WHY SOUTHAMPTON CLIENTS CHOOSE US ────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Value &amp; Certainty
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Why Southampton Clients Choose Us
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Southampton has a diverse business base: port and logistics
                    work, marine engineering, healthcare, professional
                    services, hospitality, student rentals and growing technology
                    businesses. That mix creates different accounting needs,
                    from{" "}
                    <Link
                      to="/what-is-ir35-uk"
                      className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                    >
                      IR35
                    </Link>{" "}
                    reviews for{" "}
                    <Link
                      to="/what-is-a-contractor-accountant"
                      className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
                    >
                      contractors
                    </Link>{" "}
                    to rental income reporting for landlords and VAT support for
                    growing SMEs.
                  </p>
                  <p>We work with Southampton clients who want:</p>
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
                Accounting Support for Southampton Businesses
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

        {/* ── AREAS WE SERVE AROUND SOUTHAMPTON ────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Solent Coverage
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Areas We Serve Around Southampton
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We provide remote accounting and tax support across Southampton
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
              💡 <strong>Please note:</strong> This does not mean we have an
              office in every area. It means we support clients in these
              locations remotely, using cloud accounting and online meetings.
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
              <p className="mt-4 text-slate-300 text-sm sm:text-base">
                Clear answers to common questions from Southampton clients
              </p>
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
              Speak to a Southampton Accountant
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you want clear advice, fixed fees and practical support with
              your accounts and tax, book a free consultation. We will review
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

export default AccountantsInSouthampton;
