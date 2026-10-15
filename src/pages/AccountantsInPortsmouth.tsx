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
  Plane,
  GraduationCap,
  Store,
  ShieldCheck,
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
    title: "Contractor Accounting",
    tag: "Naval Base, Marine & Aerospace",
    description: (
      <>
        Engineers, technicians and project specialists working through their own company need more
        than a year end filing. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service sets the company up properly, checks your{" "}
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35 position
        </Link>{" "}
        against how you really work, and manages dividends, VAT, payroll and annual accounts.
      </>
    ),
    covers: [
      "Real-world IR35 contract & working practices assessment",
      "Tax-efficient limited company formation & structuring",
      "Optimal salary vs dividend profit extraction strategies",
      "Making Tax Digital (MTD) VAT returns & digital bookkeeping",
      "Full statutory annual accounts & CT600 Corporation Tax filing",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Southsea, Cosham & Creative Studios",
    description: (
      <>
        Whether you run a shop in Southsea, a van out of Cosham or a studio in the creative scene,
        your books should tell you where you stand every month, not only at year end. Our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service keeps bookkeeping, VAT and payroll up to date.
      </>
    ),
    covers: [
      "Month-to-month cloud bookkeeping (Xero, QuickBooks & FreeAgent)",
      "Accurate MTD VAT return submissions on schedule",
      "Monthly management accounts & cash flow visibility",
      "Statutory year-end accounts & Corporation Tax compliance",
      "Direct accountant access without call-centre hold times",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Fratton Terraces & Southsea Flats",
    description: (
      <>
        A Fratton terrace and a Southsea flat can produce very different tax results. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service sorts rental income, allowable costs, the mortgage interest restrictions and
        Capital Gains Tax, whether you own one property or many.
      </>
    ),
    covers: [
      "Rental income reporting & Self Assessment filing",
      "Section 24 mortgage interest relief optimisation",
      "Maximising allowable repair, maintenance & running costs",
      "Capital Gains Tax (CGT) planning and 60-day reporting",
      "Student HMOs & multi-unit property portfolio structuring",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll and HR Support",
    tag: "Ferry, Hospitality & Visitor Trades",
    description: (
      <>
        Seasonal and shift based staff are a fact of life in ferry, hospitality and visitor trades.
        Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        keeps pay runs, pensions and HMRC reporting accurate however your rota shifts.
      </>
    ),
    covers: [
      "Timely, error-free weekly and monthly PAYE pay runs",
      "Full RTI reporting submitted directly to HMRC",
      "Workplace pension auto-enrolment & contribution compliance",
      "Digital payslips, P45s, P60s & year-end filings",
      "Flexible payroll handling for seasonal & shift workers",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Salary, Dividends & Pensions",
    description: (
      <>
        The best conversation about tax happens before the tax year closes, not after. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service looks at salary, dividends and pension contributions while the choices can still
        change your bill.
      </>
    ),
    covers: [
      "Proactive pre-year-end tax position reviews & forecasting",
      "Director salary, dividend & pension contribution balancing",
      "Corporation Tax allowances & capital expenditure timing",
      "Personal allowance preservation & higher-rate threshold planning",
      "Commercial structuring advice before locking in major decisions",
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
        If the books are eating your evenings, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service takes over the routine work of bookkeeping, reporting, payroll and cash flow
        tracking without the cost of a full time hire.
      </>
    ),
    covers: [
      "Complete day-to-day bookkeeping & automated bank reconciliation",
      "Monthly management accounts & actionable financial reports",
      "Working capital tracking & real-time cash flow forecasting",
      "Credit control support & supplier invoice processing",
      "Fractional finance director insight without salaried overheads",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Making Tax Digital (MTD)",
    description: (
      <>
        Tidy records and on time returns keep HMRC letters away. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service covers registration, returns and Making Tax Digital for VAT.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant VAT return submissions",
      "Standard, Flat Rate & Cash Accounting scheme advisory",
      "Routine bank reconciliations & paperless receipt management",
      "Clean financial books for lender audits & mortgage applications",
      "Zero last-minute scrambles when VAT deadlines arrive",
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
        Limited companies carry legal filing duties that are easy to forget. Our{" "}
        <Link
          to="/services/company-secretarial-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          company secretarial
        </Link>{" "}
        service handles incorporations, confirmation statements and director or shareholder
        changes.
      </>
    ),
    covers: [
      "Annual Confirmation Statement preparation & filing",
      "Director, secretary & PSC appointment or resignation filings",
      "Share allotments, transfers & restructuring documentation",
      "Statutory registers maintenance & board resolution records",
      "Registered office address & Companies House correspondence",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Engineering & Technical Problem Solving",
    description: (
      <>
        Some of the cleverest engineering on the south coast happens inside small Portsmouth firms
        that do not think of themselves as research businesses. If yours solves real technical
        problems, our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit
        </Link>{" "}
        service will tell you honestly whether a claim is worth making.
      </>
    ),
    covers: [
      "Objective eligibility assessment for marine & engineering firms",
      "Detailed qualifying expenditure breakdown (staff, subs, consumables)",
      "Robust HMRC-compliant technical narratives and justifications",
      "Corporation Tax reduction or direct payable cash credits",
      "Audit-proof claim documentation and defense with HMRC",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Wages, Rent, Dividends & Gains",
    description: (
      <>
        Wages, rent, dividends and the occasional gain all end up on one return. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment
        </Link>{" "}
        service files it accurately and explains what each figure means.
      </>
    ),
    covers: [
      "Comprehensive Self Assessment tax return preparation & filing",
      "Multi-stream income reconciliation (employment, dividends, property)",
      "Capital Gains Tax calculations on property & asset disposals",
      "Payment on account scheduling and future tax liability projections",
      "Direct representation and liaison with HMRC on your behalf",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const portsmouthClientProfiles = [
  {
    title: "Defence, Marine & Aerospace Contractors",
    badge: "Naval Base & Airport Industrial Estate",
    description:
      "Contractors, engineers, technicians and company directors working across Portsmouth's naval base, maritime organisations, and aerospace manufacturing hubs who need accurate IR35 checks, tax-efficient dividend structuring, and PSC compliance.",
    icon: Anchor,
    highlight: "Real-world IR35 position checks, dividend planning, and limited company compliance.",
  },
  {
    title: "Southsea & Fratton Landlords",
    badge: "Flats, Terraces & Student HMOs",
    description:
      "Property owners with Southsea flats, Fratton terraces, or HMO portfolios catering to University of Portsmouth students and coastal professionals, needing clear guidance on Section 24 restrictions, allowable costs, and CGT.",
    icon: Home,
    highlight: "Section 24 mortgage interest relief, allowable running costs, and Capital Gains Tax advice.",
  },
  {
    title: "Shops, Cafes, Trades & Creative Studios",
    badge: "Southsea High Streets to Cosham Vans",
    description:
      "Shops in Southsea, mobile trades running out of Cosham, studios in Portsmouth's creative scene, and seasonal visitor trade owners who want tidy bookkeeping, reliable payroll, and the paperwork completely off their plate.",
    icon: Store,
    highlight: "Fixed agreed fees, seasonal cash flow planning, and stress-free bookkeeping.",
  },
];

const faqs = [
  {
    q: "Are you a local Portsmouth firm?",
    a: "No. We are based in Bristol and work with Portsmouth clients remotely using video calls, phone, email and cloud accounting.",
  },
  {
    q: "Do you work with cafes, shops and other visitor trade businesses?",
    a: "Yes. Seasonal income, staffing and VAT are everyday topics for us, and we plan cash flow and tax around them.",
  },
  {
    q: "I rent out a flat in Southsea. Do I need an accountant?",
    a: "If your rental income is more than a small amount you will usually need to report it through Self Assessment. An accountant makes sure you claim the costs you are allowed and avoid the ones you are not.",
  },
  {
    q: "How do your fixed fees work?",
    a: "We agree on one price for the work before we start, based on what you need. There is no hourly billing and no surprise invoice.",
  },
];

const AccountantsInPortsmouth: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Portsmouth",
    url: "https://henleazetaxconsultancy.com/accountants-in-portsmouth",
    description:
      "Fixed-fee accountants in Portsmouth for contractors, landlords, sole traders and small businesses. Remote support, clear advice. Free consultation.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: [
      { "@type": "City", name: "Portsmouth" },
      { "@type": "AdministrativeArea", name: "Southsea" },
      { "@type": "AdministrativeArea", name: "Fratton" },
      { "@type": "AdministrativeArea", name: "Cosham" },
      { "@type": "AdministrativeArea", name: "Hampshire" },
    ],
    serviceType: [
      "Contractor Accounting",
      "IR35 Position Assessment",
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

  return (
    <>
      <Helmet>
        <title>Portsmouth Accountants for Contractors, Landlords &amp; SMEs</title>
        <meta
          name="description"
          content="Fixed-fee accountants in Portsmouth for contractors, landlords, sole traders and small businesses. Remote support, clear advice. Free consultation."
        />
        <meta
          name="keywords"
          content="accountants in portsmouth, portsmouth accountants, accountant in portsmouth, contractor accountants portsmouth, landlord accountants portsmouth, small business accountant portsmouth, fixed fee accountants portsmouth"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-portsmouth"
        />
        <meta
          property="og:title"
          content="Portsmouth Accountants for Contractors, Landlords &amp; SMEs"
        />
        <meta
          property="og:description"
          content="Fixed-fee accountants in Portsmouth for contractors, landlords, sole traders and small businesses. Remote support, clear advice. Free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-portsmouth"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Portsmouth Accountants for Contractors, Landlords &amp; SMEs"
        />
        <meta
          name="twitter:description"
          content="Fixed-fee accountants in Portsmouth for contractors, landlords, sole traders and small businesses. Remote support, clear advice. Free consultation."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchemaData)}</script>
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
                <span>Portsmouth &amp; Hampshire Coast Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Portsmouth:{" "}
                <span className="text-gold block sm:inline">
                  Fixed-Fee Tax &amp; Accounting Support
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                A lot of Portsmouth's work happens on boats, in hangars and behind shop counters, not at a desk.
                That is exactly why the accounts so often get done last, late and in a hurry. Having someone else
                keep them in order means the business side stops competing with the work itself.
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
                  "Marine & Aerospace Expertise",
                  "IR35 & Landlord Support",
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
                  Straightforward Accounting
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Accountants in Portsmouth Fixed-Fee Tax &amp; Accounting Support
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    A lot of Portsmouth's work happens on boats, in hangars and behind shop counters, not at a desk.
                    That is exactly why the accounts so often get done last, late and in a hurry. Having someone else
                    keep them in order means the business side stops competing with the work itself.
                  </p>
                  <p>
                    Henleaze Tax Consultancy supports contractors, landlords, sole traders and small businesses across
                    Portsmouth, from Southsea and Fratton to Cosham and the wider Hampshire coast. We are a Bristol firm
                    that works with Portsmouth clients entirely online, through cloud accounting, phone calls and email,
                    always on a fixed fee agreed in advance.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold">
                      ✓
                    </div>
                    <span>
                      Direct contact with qualified accountants — fixed pricing agreed upfront
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

        {/* ── PORTSMOUTH ECONOMY CONTEXT ─────────────────────────────── */}
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
                Where Portsmouth's Money is Actually Made
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                The harbour still sets the tone. Around 7,000 people work in the marine sector across some 250
                organisations in the city, with names such as Brittany Ferries, Wightlink, Sunsail and Premier
                Marinas alongside the defence and engineering firms around the naval base.
              </p>
              <p>
                Inland on the Airport Industrial Estate, aerospace manufacturers including Airbus Space and Defence,
                GKN Aerospace and Portsmouth Aviation add a very different kind of skilled work.
              </p>
              <p>
                Public money is also reshaping the waterfront, with a £90 million port upgrade aimed at ferry and cruise
                facilities and the £140 million Southsea Coastal Scheme, the largest seafront defence project in the
                country. Over the top of it all sits the University of Portsmouth, which gives the city a notably young
                population and a steady need for rented homes.
              </p>
            </div>

            {/* Economy Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Ship,
                  title: "Marine & Port Operations",
                  body: "~7,000 marine specialists across 250 firms including Brittany Ferries, Wightlink, Sunsail and Premier Marinas.",
                },
                {
                  Icon: Anchor,
                  title: "Naval Base & Defence",
                  body: "Engineers, technicians and defence contractors supporting critical naval and commercial maritime infrastructure.",
                },
                {
                  Icon: Plane,
                  title: "Aerospace & Engineering",
                  body: "High-value manufacturing on the Airport Industrial Estate with Airbus Space and Defence, GKN Aerospace and Portsmouth Aviation.",
                },
                {
                  Icon: GraduationCap,
                  title: "Waterfront & University",
                  body: "£90m port upgrade, £140m Southsea Coastal Scheme, and a high-demand student rental market from the University of Portsmouth.",
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
                How We Can Help Across Portsmouth
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee tax, payroll and accounting support tailored for contractors,
                landlords and small businesses across Portsmouth.
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

        {/* ── CLIENT PROFILES ───────────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Portsmouth Community
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                The Clients We Look After Here
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Our Portsmouth clients are a mixed group. Some are contractors and directors working
                around the defence, marine and aerospace sectors. Others are landlords with Southsea or
                Fratton lets, and many are shop, cafe and trades owners who want the paperwork off their plate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {portsmouthClientProfiles.map((profile, index) => {
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
                  Get in touch if that sounds like you.
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

        {/* ── PRICING SECTION ───────────────────────────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                Transparent Pricing
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                A Price You Can Plan Around
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Every quote is fixed and agreed before work starts, whether you are in Portsmouth,
                Bristol or anywhere else in the UK. There is no hourly clock running, and nothing
                changes because a question took longer than expected.
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

        {/* ── FAQ SECTION ───────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Clear Answers
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Portsmouth Questions, Straight Answers
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
        <NearbyLocationsSection currentCity="Portsmouth" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Start With One Honest Conversation
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you want accountants in Portsmouth who explain things plainly and quote a fixed price, get
              in touch. The first chat is free and carries no obligation.
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

export default AccountantsInPortsmouth;
