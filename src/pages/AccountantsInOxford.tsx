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
  FlaskConical,
  Atom,
  Dna,
  Car,
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
    tag: "Science Parks & Harwell",
    description: (
      <>
        Lab specialists, software engineers and project managers moving between
        the science parks, Harwell and Culham often work on fixed term
        engagements. Where your end client is a public body, which can include
        universities and research organisations, the client rather than you
        decides your IR35 status, so it pays to check the result. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service does that review and runs your limited company, covering
        dividends, VAT, payroll and annual accounts.
      </>
    ),
    covers: [
      "IR35 status checks against actual working practices",
      "Public sector & university off-payroll compliance",
      "Limited company formation & PSC management",
      "Tax-efficient dividend planning & timing",
      "Statutory annual accounts & Corporation Tax",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Cowley Rd, Summertown & Jericho",
    description: (
      <>
        Cafés on the Cowley Road, practices in Summertown and agencies in
        Jericho all need figures that are ready when decisions are. Our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service provides regular bookkeeping, VAT, payroll and annual accounts.
      </>
    ),
    covers: [
      "Real-time bookkeeping & bank reconciliations",
      "Quarterly VAT returns & MTD compliance",
      "Director payroll & monthly payslip delivery",
      "Year-end statutory accounts & Corporation Tax",
      "Regular financial health checks & forecasting",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "OX4 & Student/NHS Rental Yields",
    description: (
      <>
        Postgraduate students, young professionals and NHS staff keep rental
        demand steady, and one local agent quotes gross yields of around 5 to
        6.5 percent in OX4. Yield figures say little about tax, though. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service reports your rental income, claims the costs you are entitled
        to, applies the mortgage interest rules and plans for Capital Gains Tax.
      </>
    ),
    covers: [
      "Rental profit calculation & Self Assessment reporting",
      "Section 24 mortgage interest relief planning",
      "Maximising allowable repairs, costs and expenses",
      "Capital Gains Tax (CGT) advice prior to disposals",
      "Student lets, HMOs & residential buy-to-let guidance",
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
        Your first hire brings pay runs, pension contributions and monthly
        reports to HMRC. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        service takes them on, including auto enrolment duties.
      </>
    ),
    covers: [
      "Timely & compliant monthly PAYE pay runs",
      "Workplace pension auto-enrolment management",
      "Real-Time Information (RTI) HMRC submissions",
      "P45, P60 and digital payslip delivery",
      "Statutory sick pay, maternity & holiday tracking",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Pre-Year-End Optimisation",
    description: (
      <>
        A well paid contractor or director has the most room to adjust. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service reviews salary, dividends and pension contributions before your
        year end, while changes still count.
      </>
    ),
    covers: [
      "Pre-year-end strategic tax reviews",
      "Optimal salary vs. dividend distributions",
      "Tax-efficient pension contributions & allowances",
      "Corporation Tax mitigation strategies",
      "Personal and corporate wealth alignment",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Part-Time Finance Function",
    description: (
      <>
        When the books have outgrown the founder's evenings, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service becomes a part time finance team, producing management
        figures, payroll and cash flow forecasts.
      </>
    ),
    covers: [
      "Full finance department takeover at fixed fees",
      "Monthly management accounts & key performance metrics",
      "Rolling cash flow forecasting & burn rate control",
      "Supplier ledger handling & debtor collection",
      "Strategic financial guidance for scaling ventures",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Overseas Supply & Cloud Records",
    description: (
      <>
        Selling services to customers overseas, common in research and
        software, raises place of supply questions that a plain return does
        not. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service registers you, files returns and keeps digital records
        compliant.
      </>
    ),
    covers: [
      "International place-of-supply cross-border VAT",
      "MTD-compliant digital bookkeeping in Xero & QuickBooks",
      "Timely VAT registrations, returns and reversals",
      "Reverse charge mechanism & overseas customer billing",
      "Audit-ready digital transaction trail",
    ],
    ctaText: "View VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "company-secretarial",
    category: "business",
    title: "Company Secretarial Services",
    tag: "Research Spinouts & Share Registers",
    description: (
      <>
        New companies formed around a research idea need accurate Companies
        House records from incorporation, including changes in shareholders as
        investors arrive. Our{" "}
        <Link
          to="/services/company-secretarial-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          company secretarial
        </Link>{" "}
        service keeps the register and your confirmation statements in order.
      </>
    ),
    covers: [
      "Statutory registers maintained to Companies Act standards",
      "Annual Confirmation Statement filings with Companies House",
      "Share allotments, transfers and cap table restructuring",
      "Director, secretary and PSC notifications",
      "Compliant registered office address handling",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Oxford Science & Biotech Spinouts",
    description: (
      <>
        With research intensity this high, many Oxford firms have claimable work
        and many more assume they do not. Our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit
        </Link>{" "}
        service tests eligibility honestly and prepares the technical and
        financial case.
      </>
    ),
    covers: [
      "Rigorous scientific & technological uncertainty checks",
      "Advance notification and claim notification handling",
      "Staff costs, consumables and subcontractor expenditure",
      "Robust technical reports built to HMRC standards",
      "Corporation Tax reductions or payable cash credits",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Multiple Income Streams On One Return",
    description: (
      <>
        Dividends, rental profit, share sales and a day rate all end up on one
        return. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment
        </Link>{" "}
        service prepares it and explains each figure.
      </>
    ),
    covers: [
      "Comprehensive Self Assessment return completion",
      "Complex dividend, contract day-rate & rental combinations",
      "Capital Gains Tax calculations on shares and property",
      "Payments on account calculations and adjustments",
      "Direct communication with HMRC on your behalf",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const oxfordClientProfiles = [
  {
    title: "Scientists, Engineers & Project Contractors",
    badge: "Science Parks, Culham & Harwell",
    description:
      "Specialists moving between Oxford Science Park, Begbroke, Harwell Campus and Culham often work on high-value fixed-term contracts. Because public bodies and universities determine IR35 status for off-payroll engagements, we ensure contracts and working practices stand up to scrutiny, while managing company accounts and dividend extractions.",
    icon: FlaskConical,
    highlight: "Independent IR35 checks and frictionless limited company accounting.",
  },
  {
    title: "Spinout Founders & Start-Up Leaders",
    badge: "Research Commercialisation",
    description:
      "Turning university research or software breakthroughs into a viable commercial enterprise demands tight control over share registers, investor updates, cross-border VAT on software sales, and R&D tax credit documentation from day one.",
    icon: Atom,
    highlight: "Company secretarial, investor cap table advice and R&D claim preparation.",
  },
  {
    title: "Local Shops, Practices & Consultancies",
    badge: "Jericho, Cowley Road & Summertown",
    description:
      "From busy cafés and restaurants along Cowley Road to medical and dental practices in Summertown and marketing agencies in Jericho, independent businesses need month-to-month visibility on cash flow, VAT and payroll without losing evenings to bookkeeping.",
    icon: Building2,
    highlight: "Proactive bookkeeping, MTD VAT filing and reliable monthly management figures.",
  },
  {
    title: "Oxford Property Landlords",
    badge: "OX4, Headington & Student Lets",
    description:
      "With ongoing demand from postgraduate students, researchers and NHS workers across Oxford, rental yields in OX4 remain healthy. We guide landlords through Section 24 mortgage restrictions, allowable repair costs and Capital Gains Tax planning.",
    icon: Home,
    highlight: "Clear mortgage interest relief handling and proactive CGT disposal guidance.",
  },
];

const faqs = [
  {
    q: "Do I need to travel to meet you?",
    a: "No. We are based in Bristol and everything happens online through video calls, phone, email and secure document sharing.",
  },
  {
    q: "I am a contractor at a university or research institute in Oxford. Who decides my IR35 status?",
    a: "Where the end client is a public body, the client makes the status decision, and universities and research organisations can fall into that group. You can still ask how they reached it, and we compare it with your contract and real working practices.",
  },
  {
    q: "Can a university spinout claim R&D tax relief?",
    a: "Often, yes, if the work seeks to resolve genuine scientific or technological uncertainty. First time claims need advance notification to HMRC, so it is worth speaking to us early.",
  },
  {
    q: "I rent out a house in East Oxford. How is the income taxed?",
    a: "Your rental profit after allowable costs is added to your other income and reported on a Self Assessment return. Mortgage interest is relieved through a basic rate tax credit rather than as a deduction.",
  },
  {
    q: "What happens to a fixed fee if my situation changes?",
    a: "We quote for an agreed scope. If something material changes, such as registering for VAT or hiring staff, we agree a revised price with you before doing any extra work.",
  },
];

const AccountantsInOxford: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Oxford",
    url: "https://henleazetaxconsultancy.com/accountants-in-oxford",
    description:
      "Fixed fee accountants in Oxford for contractors, small businesses and landlords. IR35, R&D tax relief and bookkeeping, all online. Free consultation.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Oxford" },
    serviceType: [
      "Contractor Accounting",
      "IR35 Review",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
        <title>Accountants in Oxford | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Fixed fee accountants in Oxford for contractors, small businesses and landlords. IR35, R&D tax relief and bookkeeping, all online. Free consultation."
        />
        <meta
          name="keywords"
          content="accountants in oxford, accountant oxford, contractor accountant oxford, IR35 oxford, small business accountant oxford, landlord accountant oxford, tax planning oxford, R&D tax relief oxford, self assessment oxford"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-oxford"
        />
        <meta
          property="og:title"
          content="Accountants in Oxford | Henleaze Tax Consultancy"
        />
        <meta
          property="og:description"
          content="Fixed fee accountants in Oxford for contractors, small businesses and landlords. IR35, R&D tax relief and bookkeeping, all online. Free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-oxford"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Oxford | Henleaze Tax Consultancy"
        />
        <meta
          name="twitter:description"
          content="Fixed fee accountants in Oxford for contractors, small businesses and landlords. IR35, R&D tax relief and bookkeeping, all online. Free consultation."
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
                <span>Oxford &amp; Oxfordshire Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Oxford &mdash;{" "}
                <span className="text-gold block sm:inline">
                  Fixed Fee Support for Contractors and Small Businesses
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Few places in Britain are as dense with specialist work as Oxford.
                The number of people working in research and development across
                Oxfordshire is more than four times the national average, and that
                knowledge economy throws off a steady stream of contractors,
                consultants and start up companies who each need accounts that
                keep pace with them.
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
                  "100% Online Service",
                  "Year-Round Advice",
                  "Zero Running Meter",
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
                  Distance is No Part of Our Service
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Fixed Fee Remote Accounting for Oxford&apos;s Knowledge Economy
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Distance is no part of our service. From our base in Bristol,
                    Henleaze Tax Consultancy looks after contractors and small
                    businesses across Oxford, Headington, Summertown, Cowley and
                    Kidlington by video call, phone, email and cloud software,
                    always for a fixed fee agreed up front.
                  </p>
                  <p>
                    Whether you are developing biotech patents at Begbroke,
                    contracting at Culham, or serving local customers along the
                    Cowley Road, you get direct access to dedicated accounting
                    professionals who understand the tax intricacies of your
                    sector.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold">
                      ✓
                    </div>
                    <span>
                      Direct access to your accountant &mdash; not a call centre
                      or rotating desk
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

        {/* ── RESEARCH ECONOMY CONTEXT SECTION ─────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/30 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/30">
                Oxford Economic Context
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                What Oxford&apos;s Research Economy Means for Contractors and Small Businesses
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Oxford Science Park is home to more than 100 businesses, Begbroke
                Science Park adds university research and spinout space, and
                Harwell Campus, south of the city, hosts the Diamond Light Source,
                with the UK Atomic Energy Authority nearby at Culham. Moderna
                completed an Innovation and Technology Centre at Harwell in
                February 2025, and the campus sits inside a designated Life
                Sciences Opportunity Zone until 2030.
              </p>
              <p>
                Meanwhile BMW&apos;s MINI Plant Oxford continues to anchor
                manufacturing at Cowley, and Oxford North is adding laboratory
                space and homes. For contractors, that spread of sites means a
                steady supply of short project work. For founders and small
                businesses, it means a constant flow of new companies that need
                their accounts set up properly from the start.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                That spread of innovation hubs &mdash; science parks, nuclear
                fusion research, pharmaceutical campuses and advanced
                automotive manufacturing &mdash; generates unique tax, IR35,
                and bookkeeping demands. We provide the fixed-fee certainty that
                keeps your business focused on innovation.
              </p>
            </div>

            {/* Economy Clusters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: FlaskConical,
                  title: "Oxford Science Parks",
                  body: "Over 100 high-growth companies at Oxford Science Park, complemented by university spinouts at Begbroke and new labs at Oxford North.",
                },
                {
                  Icon: Atom,
                  title: "Harwell & Culham",
                  body: "National research facilities hosting Diamond Light Source and the UK Atomic Energy Authority, drawing world-class contract talent.",
                },
                {
                  Icon: Dna,
                  title: "Life Sciences Zone",
                  body: "Moderna Innovation & Technology Centre and designated Life Sciences Opportunity Zone status running through 2030.",
                },
                {
                  Icon: Car,
                  title: "Cowley Manufacturing",
                  body: "BMW MINI Plant Oxford anchoring high-spec manufacturing, engineering suppliers and a resilient local supply chain.",
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
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                Tailored Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Fixed Fee Accounting and Tax Support Across Oxford
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and proactive tax advisory
                built specifically for Oxford&apos;s contractors, spinouts,
                landlords and independent businesses.
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

            {/* View All Services Button */}
            <div className="mt-14 text-center">
              <Button
                asChild
                size="lg"
                className="bg-white/10 hover:bg-gold hover:text-navy text-white border border-white/20 font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-lg"
              >
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── WHO THIS SERVICE IS FOR ──────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Client Profiles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Who This Service Is For
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                The Oxford service fits a few typical profiles: a scientist or
                engineer taking contract work between institutions, a founder
                turning research into a company, a shop or practice owner who
                needs reliable monthly figures, and a landlord with a room or a
                few houses in East Oxford.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {oxfordClientProfiles.map((profile, index) => {
                const ProfileIcon = profile.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-7 border border-slate-200 shadow-lg flex flex-col justify-between hover:border-gold/50 transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-navy mb-5 group-hover:bg-gold group-hover:scale-105 transition-all">
                        <ProfileIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-2">
                        {profile.badge}
                      </span>
                      <h3 className="font-display text-lg font-bold text-navy mb-3">
                        {profile.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {profile.description}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs text-navy font-semibold">
                      💡 {profile.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Recognise your own situation here?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Send us the outline and we will take it from there. First
                  conversation is completely free.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shrink-0 shadow-lg hover:scale-105 transition-all"
              >
                <Link to="/contact">
                  Contact Us
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
                A Fixed Quote, Not a Running Meter
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Tell us what you need and we quote one price. Nothing is billed
                by the hour, and extra questions do not change it.
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
                Questions From Oxford Clients
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
        <NearbyLocationsSection currentCity="Oxford" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA: BRING US THE MESSY VERSION ────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Bring Us the Messy Version
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you want accountants in Oxford who quote a fixed price and
              explain what they are doing, bring us the messy version of your
              finances. We will tell you what needs doing, what it costs and
              whether we are the right fit, and you decide what happens next.
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

export default AccountantsInOxford;
