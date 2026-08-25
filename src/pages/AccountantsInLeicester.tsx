import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";
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
  Rocket,
  Truck,
  Factory,
  ShieldCheck,
  Coins,
  Shield,
  Layers,
  Clock,
  HelpCircle,
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
    tag: "Logistics, Engineering & Space Tech",
    description: (
      <>
        Leicester's logistics, engineering and manufacturing sectors support a
        steady flow of contractor work and increasingly the space and technology
        cluster around Pioneer Park does too. Our{" "}
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
          IR35
        </Link>{" "}
        position, limited company structure and dividend planning, so
        contracting stays financially efficient rather than becoming a compliance
        headache.
      </>
    ),
    covers: [
      "Rigorous IR35 status & working practice reviews",
      "Limited company setup & PSC dividend planning",
      "Strategic salary vs dividend extraction advice",
      "Cloud bookkeeping integration & VAT management",
      "Statutory annual accounts & Corporation Tax returns",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Manufacturing, Retail & Food Production",
    description: (
      <>
        Whether you're running a manufacturing business, a food producer or a
        shop trading out of the city centre, our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service keeps your bookkeeping, VAT and payroll accurate and current,
        giving you a real picture of the business rather than a rough guess.
      </>
    ),
    covers: [
      "Real-time cloud bookkeeping & bank feeds",
      "Making Tax Digital (MTD) VAT returns",
      "Monthly management accounts & cash flow monitoring",
      "Year-end statutory accounts & CT600 filing",
      "Dedicated accountant advice throughout the year",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "LE Postcodes, Student Lets & HMOs",
    description: (
      <>
        With two universities and strong demand across LE postcodes including
        areas near Stoneygate and the wider city centre, Leicester's rental
        market has stayed active and undersupplied for years. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital
        Gains Tax planning, whether you hold a single property or a growing
        portfolio.
      </>
    ),
    covers: [
      "Rental income reporting & Self Assessment filing",
      "HMO & student let expense maximisation",
      "Section 24 mortgage interest relief planning",
      "Capital Gains Tax (CGT) advice prior to sales",
      "Property portfolio limited company structuring",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll and HR Support",
    tag: "PAYE, RTI & Pension Auto-Enrolment",
    description: (
      <>
        An inaccurate payroll run tends to cause disproportionate stress for
        something entirely avoidable. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        keeps this accurate and on schedule, covering PAYE, pension auto
        enrolment and HMRC submissions.
      </>
    ),
    covers: [
      "Accurate & timely monthly PAYE payroll runs",
      "Workplace pension auto-enrolment compliance",
      "Real-Time Information (RTI) submissions to HMRC",
      "Digital employee payslips & P60/P45 generation",
      "Director salary structuring & HR admin support",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Year-Round Proactive Optimisation",
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
        service works with you across the year, not just in the run up to a
        deadline.
      </>
    ),
    covers: [
      "Year-round corporation & personal tax planning",
      "Dividend timing & tax-efficient profit extraction",
      "Capital allowances & business asset investment reviews",
      "Capital Gains Tax & restructuring advice",
      "Proactive reviews before tax year-end deadlines",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Complete Fractional Finance Team",
    description: (
      <>
        For growing Leicester businesses not yet ready to bring finance in
        house, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service manages bookkeeping, reporting, payroll and cash flow
        monitoring, without the cost or commitment of a permanent hire.
      </>
    ),
    covers: [
      "End-to-end cloud bookkeeping & bank reconciliations",
      "Monthly management KPI reporting & dashboards",
      "Cash flow forecasting & creditor/debtor control",
      "Integrated payroll & VAT return submissions",
      "Virtual financial controller advisory support",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "MTD Compliant & Clean Records",
    description: (
      <>
        Clean, current records make VAT filing, funding applications and general
        decision making considerably easier. Our{" "}
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
      "Automated receipt & invoice management",
      "Clean financial records for bank loans & tenders",
      "Standard, Flat Rate & Partial Exemption schemes",
      "Zero year-end panic or missing receipts",
    ],
    ctaText: "View VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "company-secretarial",
    category: "business",
    title: "Company Secretarial Services",
    tag: "Companies House Filings & Governance",
    description: (
      <>
        Companies House filings are easy to lose track of precisely because they
        don't come around often. Our{" "}
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
      "Annual Confirmation Statement submissions",
      "Director appointments, resignations & PSC updates",
      "Share allotments, transfers & dividend resolutions",
      "Maintenance of statutory company books & registers",
      "Registered office address services",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-credit-claims",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Manufacturing, Space Tech & Food Innovation",
    description: (
      <>
        Between Leicester's manufacturing base, its growing space and Earth
        observation sector and ongoing food production innovation, genuine
        research and development activity is more common here than many business
        owners assume. Our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit
        </Link>{" "}
        service checks eligibility properly and prepares a claim that holds up
        under scrutiny.
      </>
    ),
    covers: [
      "Manufacturing & food production process R&D assessments",
      "Space science & software development project checks",
      "Qualifying expenditure & staff cost calculations",
      "Robust HMRC-compliant technical claim documentation",
      "Corporation Tax relief or direct cash tax credit",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax-self-assessment",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Dividends, Rental Income & CGT",
    description: (
      <>
        Rental income, dividends and capital gains each affect your personal tax
        position differently. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment
        </Link>{" "}
        service handles the filing and explains how everything fits together.
      </>
    ),
    covers: [
      "Comprehensive Self Assessment return preparation & filing",
      "Dividend, rental income & capital gains reconciliation",
      "Plain-English explanation of tax liability & bands",
      "Payments on account calculation & future forecasting",
      "Direct representation with HMRC on personal tax matters",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const leicesterClientProfiles = [
  {
    title: "Logistics & Engineering Contractors",
    badge: "M1 / M69 Corridor & Pioneer Park",
    description:
      "Contractors working across the city's logistics and distribution corridor make up a fair share of our Leicester client base, often looking for clearer IR35 guidance than they'd previously had, alongside engineering and space tech specialists.",
    icon: Truck,
    highlight: "Clear IR35 assessments & tax-efficient PSC contractor setups.",
  },
  {
    title: "LE Postcode & University Landlords",
    badge: "LE3, LE4, LE5 & Stoneygate",
    description:
      "Landlords with properties spread across LE postcodes are another common group, generally wanting more certainty around what they can claim before a return goes in, not after.",
    icon: Home,
    highlight: "Student HMO expense maximisation, Section 24 & CGT planning.",
  },
  {
    title: "Small Manufacturers & Food Producers",
    badge: "Industrial Heritage & Golden Mile",
    description:
      "We also work with a number of small manufacturers and food producers, sectors where Leicester has genuine depth, who wanted an accountant that understood their business rather than treated it as a generic small business admin.",
    icon: Factory,
    highlight: "Industry-specific bookkeeping, stock accounting & R&D claims.",
  },
  {
    title: "Tech & Space Sector Innovators",
    badge: "Space Park Leicester & Research Spinouts",
    description:
      "A growing number of tech and research-focused businesses connected to Space Park Leicester and the city's university research ecosystem who need proactive financial guidance and R&D support.",
    icon: Rocket,
    highlight: "Qualifying R&D relief, grant tracking & outsourced finance.",
  },
];

const faqs = [
  {
    q: "Do you have a physical office in Leicester?",
    a: "No, we work with Leicester clients entirely remotely, in the same way we do everywhere outside Bristol. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring travel on either side.",
  },
  {
    q: "I run a manufacturing or food production business in Leicester. Do you understand the sector well enough to advise properly?",
    a: "Yes, this is one of the areas we work in regularly given how much of Leicester's economy sits in manufacturing and food production. It's also a sector where R&D tax relief is frequently under-claimed, so it's worth a conversation even if you're not sure your work would qualify.",
  },
  {
    q: "I own rental property in Leicester near one of the universities. What should I know about reporting income correctly?",
    a: "Student focused rental income can involve different expense treatment depending on how the property is let and structured, particularly for HMOs. It's worth a specific conversation rather than assuming standard buy to let rules apply without checking your setup.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant directly, request your records and continue from wherever you currently stand, without disrupting any upcoming filing deadlines.",
  },
  {
    q: "Is your pricing different for Leicester clients compared to other locations?",
    a: "No. Every client gets the same fixed fee structure, based on what your specific situation requires, agreed before any work starts.",
  },
];

const AccountantsInLeicester: React.FC = () => {
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
      : servicesData.filter((service) => service.category === activeTab);

  // Schema.org Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Henleaze Tax Consultancy - Accountants in Leicester",
    url: "https://henleazetaxconsultancy.com/accountants-in-leicester",
    description:
      "Fixed-fee accountants in Leicester for contractors, landlords and small businesses. Clear pricing, honest advice. Book a free consultation today.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: {
      "@type": "City",
      name: "Leicester",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Leicestershire",
      },
    },
    serviceType: [
      "Contractor Accounting",
      "Small Business Accounting",
      "Landlord Accounting",
      "Tax Planning",
      "Payroll and HR Services",
      "VAT and Bookkeeping",
      "Company Secretarial",
      "R&D Tax Credits",
      "Personal Tax and Self Assessment",
      "Outsourced Accounting",
    ],
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
    ],
  };

  const faqSchema = {
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
        <title>Accountants in Leicester | Fixed-Fee, No Surprises</title>
        <meta
          name="description"
          content="Fixed-fee accountants in Leicester for contractors, landlords and small businesses. Clear pricing, honest advice. Book a free consultation today."
        />
        <meta
          name="keywords"
          content="accountants in leicester, accountant leicester, tax consultant leicester, small business accountant leicester, contractor accountant leicester, landlord accountant leicester, fixed fee accountant leicester"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-leicester"
        />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="Accountants in Leicester | Fixed-Fee, No Surprises"
        />
        <meta
          property="og:description"
          content="Fixed-fee accountants in Leicester for contractors, landlords and small businesses. Clear pricing, honest advice. Book a free consultation today."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-leicester"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Leicester | Fixed-Fee, No Surprises"
        />
        <meta
          name="twitter:description"
          content="Fixed-fee accountants in Leicester for contractors, landlords and small businesses. Clear pricing, honest advice. Book a free consultation today."
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Layout>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy via-navy to-slate-900 text-white overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-sm font-semibold mb-6 shadow-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Serving Leicester &amp; Leicestershire</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              {/* H1 Heading */}
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Leicester —{" "}
                <span className="text-gold block sm:inline">
                  Fixed-Fee Tax &amp; Accounting Support
                </span>
              </h1>

              {/* Subtitle / Intro Description */}
              <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10 text-left sm:text-center">
                <p>
                  Choosing an accountant often comes down to trust built on very
                  little actual evidence: a recommendation, a nice looking
                  website, a fee that seemed reasonable. It's only once you're a
                  client that you find out whether they actually respond
                  promptly, catch things before they become problems and explain
                  their reasoning rather than just handing you a number.
                </p>
                <p>
                  Henleaze Tax Consultancy works with contractors, landlords,
                  sole traders and small businesses across Leicester. We're based
                  in Bristol and the practical reality is that this makes very
                  little difference to how the relationship works day to day.
                  Bookkeeping, filing, payroll and advice all run through cloud
                  accounting, phone calls and email, in exactly the same way
                  they would with a firm based five minutes from your office.
                </p>
              </div>

              {/* CTA Group */}
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

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Fixed Agreed Fees</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Prompt Response Time</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Proactive Advice</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Cloud &amp; Remote Ease</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <TrustBar />

        {/* ── LEICESTER ECONOMY & BUSINESS BASE SECTION ────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/30 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                Local Economic Context
              </span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Leicester's Business Base is Broader Than Its Reputation Suggests
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-xl space-y-5">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                  <Factory className="w-6 h-6 text-gold" />
                  Heritage &amp; New Economic Drivers
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Leicester has long been known for textiles and manufacturing and
                  that industrial heritage still underpins a meaningful part of the
                  local economy, particularly around the Golden Mile and the wider
                  garment and food production sector. But the city has diversified
                  considerably in recent years.
                </p>
                <p className="text-slate-300 text-base leading-relaxed">
                  Space Park Leicester at Pioneer Park has become a genuine centre
                  for space technology and Earth observation research, tied to the
                  University of Leicester's research strength. Leicester also sits
                  at the heart of one of the UK's busiest logistics corridors, with
                  the M1 and M69 connecting major distribution employers across the
                  area.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-xl space-y-5">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-gold" />
                  Regeneration, Property &amp; Modern Sectors
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Add two universities driving consistent rental demand and the
                  Waterside regeneration project reshaping a large stretch of the
                  city centre and Leicester's economy looks considerably more
                  varied than its textile trade reputation alone suggests.
                </p>
                <p className="text-slate-300 text-base leading-relaxed">
                  That range shows up directly in the clients we work with:
                  contractors tied to logistics and distribution work, small
                  manufacturers and food producers, landlords with properties across
                  LE3, LE4 and LE5, and a growing number of tech and research
                  focused businesses connected to the city's space sector.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gold/10 via-slate-800 to-gold/10 border border-gold/30 rounded-2xl p-6 text-center max-w-3xl mx-auto">
              <p className="text-slate-200 text-sm sm:text-base font-medium">
                Whether you're operating out of Pioneer Park, manufacturing in LE postcodes, or managing student accommodation, we tailor our support directly to your sector.
              </p>
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION ──────────────────────────────────────── */}
        <section id="services" className="py-24 bg-slate-950 text-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                Complete Support
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Accounting and Tax Support for Leicester Clients
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                Select a category below to explore how we support Leicester's
                contractors, landlords, growing enterprises and sole traders.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
              {[
                { key: "all", label: "All Services" },
                { key: "contractor", label: "Contractor Accounting" },
                { key: "business", label: "Small Business & Payroll" },
                { key: "landlord", label: "Landlord Accounting" },
                { key: "tax", label: "Tax Planning & R&D" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() =>
                    setActiveTab(
                      tab.key as
                        | "all"
                        | "contractor"
                        | "business"
                        | "landlord"
                        | "tax"
                    )
                  }
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === tab.key
                      ? "bg-gold text-navy shadow-lg shadow-gold/20 scale-105"
                      : "bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-gold/40 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-slate-900/90 border border-slate-800 hover:border-gold/50 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1.5 group"
                  >
                    <div>
                      {/* Top Row: Icon & Tag */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300 shadow-md">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full uppercase tracking-wider text-right">
                          {service.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <div className="text-slate-300 text-sm leading-relaxed mb-6">
                        {service.description}
                      </div>

                      {/* What's Covered */}
                      <div className="border-t border-slate-800/80 pt-5 mb-6">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                          What We Handle:
                        </span>
                        <ul className="space-y-2.5">
                          {service.covers.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                            >
                              <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-slate-700 bg-slate-800/50 hover:bg-gold hover:text-navy text-white font-semibold text-xs sm:text-sm py-5 rounded-xl transition-all duration-300 group-hover:border-gold/60"
                      >
                        <Link
                          to={service.ctaLink}
                          className="flex items-center justify-center gap-2"
                        >
                          {service.ctaText}
                          <ChevronRight className="w-4 h-4" />
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
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/services" className="inline-flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── LEICESTER REGENERATION SECTION ──────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  City Growth &amp; Development
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  What Leicester's Regeneration Means for Local Landlords and Businesses
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    The Waterside scheme, delivering new homes and office space along
                    a former industrial stretch of the River Soar, is one of the
                    larger regeneration projects in the East Midlands outside
                    Nottingham.
                  </p>
                  <p>
                    For landlords and small business owners in Leicester, that kind
                    of development tends to shift local demand gradually over several
                    years, affecting everything from rental yields to the value of
                    holding commercial premises nearby. It's the sort of change worth
                    factoring into longer term tax and investment planning rather
                    than reacting to after the fact.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-navy hover:bg-navy/90 text-white font-bold text-base px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Link to="/calculator" className="inline-flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-gold" />
                      Get a Quick Estimate
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-navy font-bold text-sm hover:text-gold transition-colors gap-1 group"
                  >
                    Discuss your property tax position
                    <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT PROFILES SECTION ──────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                Leicester Clients
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                The Kind of Clients Leicester Tends to Send Our Way
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-300 text-base sm:text-lg">
                Contractors working across the city's logistics and distribution
                corridor make up a fair share of our Leicester client base, often
                looking for clearer IR35 guidance than they'd previously had.
                Landlords with properties spread across LE postcodes are another
                common group, generally wanting more certainty around what they can
                claim before a return goes in, not after. We also work with a
                number of small manufacturers and food producers, sectors where
                Leicester has genuine depth, who wanted an accountant that
                understood their business rather than treated it as a generic
                small business admin.
              </p>
            </div>

            {/* Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {leicesterClientProfiles.map((profile, idx) => {
                const IconComp = profile.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-800/80 border border-slate-700/80 hover:border-gold/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-4">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-gold uppercase tracking-wider block mb-1">
                        {profile.badge}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {profile.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {profile.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-700/60 text-xs text-gold font-medium">
                      ✓ {profile.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get in touch if any of that sounds close to your situation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── HOW FEES ACTUALLY WORK ────────────────────────────────── */}
        <section className="py-20 bg-slate-950 text-white border-t border-slate-800 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-gradient-to-br from-slate-900 to-navy border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Clear &amp; Transparent
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                  How Fees Actually Work
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                  Every quote is fixed and agreed before any work begins,
                  regardless of whether you're based in Leicester, Bristol or
                  elsewhere in the UK. There's no hourly billing and no invoice
                  that grows because a query needed a longer conversation than
                  expected.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-gold mb-2" />
                    <span className="font-bold text-sm text-white block">
                      100% Fixed Quotes
                    </span>
                    <span className="text-xs text-slate-400">
                      No surprise charges or hidden extras
                    </span>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-gold mb-2" />
                    <span className="font-bold text-sm text-white block">
                      No Hourly Invoicing
                    </span>
                    <span className="text-xs text-slate-400">
                      Unlimited advice &amp; routine queries
                    </span>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-gold mb-2" />
                    <span className="font-bold text-sm text-white block">
                      Predictable Cash Flow
                    </span>
                    <span className="text-xs text-slate-400">
                      Monthly direct debit options available
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/pricing" className="inline-flex items-center gap-2">
                    See Our Pricing
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQS SECTION ──────────────────────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                Got Questions?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Frequently Asked Questions From Leicester Clients
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800 transition-colors"
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-200 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-700/50">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA BANNER ──────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-b from-navy via-navy to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/15 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Your Business Deserves More Than a Template
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              If you're looking for accountants in Leicester who take the time to
              actually understand your business, rather than applying the same
              generic advice to everyone, get in touch. A first conversation is
              free and doesn't commit you to anything further.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-10 py-6 rounded-full shadow-2xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 uppercase tracking-wider"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-black hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer"
              >
                <a href="tel:+447949956279" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  +44 7949 956279
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ── NEARBY LOCATIONS ─────────────────────────────────────── */}
        <NearbyLocationsSection currentCity="Leicester" />
      </Layout>
    </>
  );
};

export default AccountantsInLeicester;
