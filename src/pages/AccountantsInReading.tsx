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
  Laptop,
  Phone,
  Check,
  Wifi,
  Server,
  GraduationCap,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "contractor" | "business" | "landlord" | "tax";
  title: string;
  description: string | React.ReactNode;
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
    tag: "IR35 & Silicon Corridor",
    description: (
      <>
        Given how many contractors in Reading work through or alongside major tech employers,
        IR35 status assessments carry real weight here. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service covers your IR35 position properly, along with limited company setup, dividend
        planning, bookkeeping, VAT, payroll and year end filing.
      </>
    ),
    covers: [
      "Rigorous IR35 contract & working practice reviews",
      "Independent review of blanket client determinations",
      "Tax-efficient limited company & PSC setup",
      "Strategic dividend timing & profit extraction",
      "VAT, bookkeeping & year-end statutory accounts",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Town Centre to Caversham",
    description: (
      <>
        Whether you're running a business from the town centre or out toward Caversham and
        Woodley, our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service keeps your bookkeeping, VAT and payroll current, so your numbers hold up
        whenever you actually need to rely on them.
      </>
    ),
    covers: [
      "Accurate day-to-day cloud bookkeeping",
      "Making Tax Digital (MTD) VAT returns",
      "Monthly management accounts & cash flow",
      "Annual accounts & Corporation Tax filing",
      "Clear updates without chasing for answers",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Commuter & Student Let Market",
    description: (
      <>
        With Reading's strong commuter demand into London and a steady flow of students tied to
        the university, the local rental market stays active year round. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital Gains Tax
        planning, for a single let or a wider portfolio.
      </>
    ),
    covers: [
      "Rental income reporting & self-assessment",
      "Maximising allowable property expenses",
      "Section 24 mortgage interest relief planning",
      "Capital Gains Tax (CGT) advice before disposals",
      "Multi-property & HMO portfolio guidance",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll and HR Support",
    tag: "PAYE & Auto-Enrolment",
    description: (
      <>
        An inaccurate PAYE submission or a late payroll run causes disproportionate stress for
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
      "Itemised digital payslips & P60s / P45s",
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
    tag: "Dividend Timing & Extraction",
    description: (
      <>
        Most overpaid tax comes from a decision made too late to actually matter, not from an
        outright mistake. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service works with you across the year, particularly around dividend timing and profit
        extraction for contractors.
      </>
    ),
    covers: [
      "Year-round tax reviews, not just at deadline",
      "Dividend timing & salary optimisation",
      "Corporation Tax & Personal Tax alignment",
      "Capital allowances & asset investment timing",
      "Proactive advice before decisions are locked in",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Full Finance Function Support",
    description: (
      <>
        For growing Reading businesses not yet ready to bring finance in house, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service takes on bookkeeping, reporting, payroll and cash flow monitoring without the
        cost of a permanent hire.
      </>
    ),
    covers: [
      "End-to-end bookkeeping & bank reconciliations",
      "Monthly KPI dashboards & management packs",
      "Cash flow forecasting & creditor monitoring",
      "Xero / QuickBooks integration & support",
      "Fractional finance expertise at a fixed cost",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Clean MTD-Ready Records",
    description: (
      <>
        Clean, current records make VAT filing and funding applications considerably easier to
        manage. Our{" "}
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
      "Making Tax Digital (MTD) compliant VAT filing",
      "Automated bank feed reconciliation",
      "Clean records for lender & mortgage proof",
      "Flat Rate & partial exemption scheme advice",
      "Zero last-minute receipt scrambles",
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
        Companies House filings are easy to lose track of precisely because they don't come
        around often. Our{" "}
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
      "Annual Confirmation Statement submissions",
      "Director, secretary & PSC change filings",
      "Share allotments, transfers & restructuring",
      "Maintenance of statutory company registers",
      "Registered office address service",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Tech & Software Innovation",
    description: (
      <>
        Given Reading's density of tech, software and engineering businesses, genuine research
        and development activity is common here, often more than business owners realise. Our{" "}
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
      "Tech, software & engineering R&D assessments",
      "Qualifying expenditure & staff cost analysis",
      "HMRC-compliant technical narrative preparation",
      "Corporation Tax reduction or cash repayment",
      "Full claims handling from eligibility to submission",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Dividends, Rentals & Gains",
    description: (
      <>
        Dividend income, rental profits and capital gains each interact with your personal tax
        position differently. Our{" "}
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
      "Self-Assessment tax return filing",
      "Dividend, rental & capital gains interaction",
      "Clear explanation of how each element connects",
      "Payment on account scheduling & advice",
      "Direct HMRC liaison on your behalf",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const readingClientProfiles = [
  {
    title: "IT & Engineering Contractors",
    badge: "Silicon Corridor Professionals",
    description:
      "A significant share of our Reading clients are IT and engineering contractors working across the Thames Valley tech corridor, often coming to us after a previous accountant gave generic advice that didn't hold up to an actual IR35 review.",
    icon: Server,
    highlight: "Proper IR35 reviews, not generic contractor templates.",
  },
  {
    title: "Digital & Creative Freelancers",
    badge: "Dividend & Profit Strategy",
    description:
      "We also work with freelancers in digital and creative fields who want their dividend and profit extraction strategy handled properly rather than as an afterthought in the final weeks before a tax deadline.",
    icon: Laptop,
    highlight: "Tax-efficient extraction handled year-round, not last minute.",
  },
  {
    title: "Reading Landlords",
    badge: "Commuter Belt & Student Lets",
    description:
      "A smaller but steady group are landlords with property in and around Reading who wanted clarity on reporting before a tax year closed, not after — particularly around allowable expenses and CGT planning.",
    icon: Home,
    highlight: "Timely CGT and expense clarity before deadlines arrive.",
  },
];

const faqs = [
  {
    q: "Do you have an office in Reading?",
    a: "No, we work with Reading clients entirely remotely, the same as everywhere outside Bristol. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring travel on either side.",
  },
  {
    q: "My end client has given me a blanket IR35 determination. Can you review it independently?",
    a: "Yes, this comes up often with contractors working into larger Reading employers. We review your actual contract and working practices rather than relying solely on a client's blanket assessment, since the two don't always align.",
  },
  {
    q: "I'm a freelancer, not a contractor through a limited company. Do you still work with me?",
    a: "Yes. Freelancers and sole traders make up a good portion of our Reading client base and the accounting needs are different from a limited company contractor, so we tailor the advice accordingly.",
  },
  {
    q: "Can I switch accountants partway through my tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant, request your records, and continue from wherever you currently stand, without disrupting any upcoming deadlines.",
  },
  {
    q: "Is your pricing different for Reading clients given the higher cost of living in the area?",
    a: "No. Every client gets the same fixed fee structure, based on what your specific situation actually needs, agreed before any work starts.",
  },
];

const AccountantsInReading: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Reading",
    url: "https://henleazetaxconsultancy.com/accountants-in-reading",
    description:
      "Fixed-fee accountants in Reading for contractors, freelancers, landlords and small businesses. Clear advice, fast response. Free consultation.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Reading" },
    serviceType: [
      "Contractor Accounting",
      "IR35 Review",
      "Small Business Accounting",
      "Landlord Accounting",
      "Tax Planning",
      "Payroll Services",
      "VAT and Bookkeeping",
      "R&D Tax Credits",
      "Company Secretarial",
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
        <title>Accountants in Reading | Fixed Fees, Clear Advice</title>
        <meta
          name="description"
          content="Fixed-fee accountants in Reading for contractors, freelancers, landlords and small businesses. Clear advice, fast response. Free consultation."
        />
        <meta
          name="keywords"
          content="accountants in reading, accountant reading, contractor accountant reading, IR35 reading, small business accountant reading, landlord accountant reading, tax planning reading"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-reading"
        />
        <meta
          property="og:title"
          content="Accountants in Reading | Fixed Fees, Clear Advice"
        />
        <meta
          property="og:description"
          content="Fixed-fee accountants in Reading for contractors, freelancers, landlords and small businesses. Clear advice, fast response. Free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-reading"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Reading | Fixed Fees, Clear Advice"
        />
        <meta
          name="twitter:description"
          content="Fixed-fee accountants in Reading for contractors, freelancers, landlords and small businesses. Clear advice, fast response. Free consultation."
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
                <span>Reading &amp; Thames Valley Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Reading —{" "}
                <span className="text-gold block sm:inline">
                  Specialist Support for Contractors &amp; Freelancers
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Fixed-fee accountants in Reading for contractors, freelancers,
                landlords and small businesses. Clear advice, fast response, and
                proactive tax support across the Thames Valley.
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
                  "IR35 Specialists",
                  "Year-Round Advice",
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

        {/* ── PHILOSOPHY / INTRO ───────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Why it Matters Here
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Reading Has One of the Highest Concentrations of Contractors
                  Outside London
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Reading has one of the highest concentrations of contractors
                    and freelancers anywhere outside London, which means the
                    accountant you choose here needs to actually understand{" "}
                    <Link
                      to="/what-is-ir35-uk"
                      className="text-navy font-semibold underline decoration-gold underline-offset-4 hover:text-gold transition-colors"
                    >
                      IR35
                    </Link>
                    , dividend planning and limited company structuring properly,
                    not treat it as a niche add on to general small business
                    work.
                  </p>
                  <p>
                    Henleaze Tax Consultancy works with contractors, freelancers,
                    landlords and small businesses across Reading. We're based in
                    Bristol, though most of our Reading clients never really
                    notice, since everything runs through cloud accounting, phone
                    calls and email in exactly the same way it would with a firm
                    based on the Thames Valley Business Park itself.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold">
                      ✓
                    </div>
                    <span>
                      Direct access to your accountant — not a rotating support
                      desk
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

        {/* ── SILICON CORRIDOR / LOCAL ECONOMY ─────────────────────── */}
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
                Why Reading's Contractor Market Needs a Different Kind of
                Accountant
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Reading sits at the centre of what's often called the UK's
                Silicon Corridor — the stretch of the M4 running from Reading
                through to Newbury and Swindon. Microsoft, Oracle, Cisco,
                Vodafone and Huawei all have a significant presence here and
                that concentration of tech and telecoms employers has created an
                unusually large contractor and freelancer population working
                across IT, engineering and digital roles.
              </p>
              <p>
                Add in the University of Reading's research and innovation output
                through Thames Valley Science Park, and Reading's daytime
                commercial population includes tens of thousands of people who
                commute in rather than out, many of them on contracts rather
                than payroll.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                That means IR35 questions come up constantly here, and they're
                rarely simple. A contractor working inside a large multinational
                at Green Park has very different considerations to a freelancer
                working directly with smaller clients across the town centre. We
                treat those as genuinely separate conversations, because the
                underlying risk and structuring advice is different.
              </p>
            </div>

            {/* Economy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Wifi,
                  title: "Silicon Corridor",
                  body: "Microsoft, Oracle, Cisco, Vodafone & Huawei all based on the M4 corridor.",
                },
                {
                  Icon: Server,
                  title: "Green Park & Thames Valley Park",
                  body: "Major business park campuses generating high contractor populations.",
                },
                {
                  Icon: GraduationCap,
                  title: "University of Reading",
                  body: "Thames Valley Science Park drives innovation and freelance R&D activity.",
                },
                {
                  Icon: Home,
                  title: "Commuter Rental Market",
                  body: "Strong London commuter demand and student lettings keep the market active.",
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
                Tailored Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting and Tax Support for Reading Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and proactive tax advisory
                tailored for Reading's contractor-heavy market.
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
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab.key
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

            {/* Pricing Assurance Banner */}
            <div className="mt-16 text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <p className="text-slate-200 text-sm sm:text-base">
                Every service above is fixed-fee, you can see indicative pricing on our{" "}
                <Link
                  to="/pricing"
                  className="text-gold font-bold underline hover:text-gold-light transition-colors"
                >
                  pricing page
                </Link>{" "}
                before you even get in touch.
              </p>
            </div>
          </div>
        </section>

        {/* ── TECH MULTINATIONAL IR35 INSIGHT ──────────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-5 border border-gold/30">
                  IR35 Insight
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
                  What Working Alongside a Tech Multinational Actually Means for
                  Your Tax Position
                </h2>

                <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    Contracting into a large employer like Microsoft, Oracle or
                    Vodafone through Thames Valley Park or Green Park often comes
                    with more scrutiny around IR35 than working with a smaller
                    local client, partly because these organisations tend to
                    apply blanket status determinations across large contractor
                    populations.
                  </p>
                  <p>
                    That doesn't mean the determination is always correct for
                    your specific working arrangement. It's worth having your
                    contract and actual working practices reviewed independently
                    rather than assuming a client's assessment is the final word.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all"
                  >
                    <Link to="/contact">
                      Request an IR35 Review
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:border-gold/60"
                  >
                    <Link to="/calculator">Get a Quick Estimate</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE WORK WITH ─────────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Client Profiles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                The Reading Clients We Work With Most Often
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We understand the specific pressures and opportunities that
                Reading's tech-heavy market creates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {readingClientProfiles.map((profile, index) => {
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
                  Get in touch if any of that resonates. First conversation is
                  free and commits you to nothing.
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

        {/* ── FIXED FEES SECTION ───────────────────────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                Transparent Pricing
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                Fixed Fees, Explained Properly
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Every quote is fixed and agreed before any work begins, regardless
                of whether you're based in Reading, Bristol or elsewhere in the
                UK. There's no hourly billing, and nothing changes because your
                IR35 review took a longer conversation than expected.
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
                Frequently Asked Questions From Reading Clients
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
                        className={`h-5 w-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
        <NearbyLocationsSection currentCity="Reading" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's Talk About Your Contract Position
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you're looking for accountants in Reading who genuinely
              understand contracting and IR35, not just general small business
              accounting, get in touch. A first conversation is free and doesn't
              commit you to anything.
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

export default AccountantsInReading;
