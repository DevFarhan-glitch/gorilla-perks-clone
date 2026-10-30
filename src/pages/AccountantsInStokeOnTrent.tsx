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
  Shield,
  Landmark,
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
    tag: "IR35 & Limited Company Setup",
    description: (
      <>
        Engineers and project specialists contracting into the city's
        manufacturing and logistics sites often find the end client has already
        decided their IR35 status. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service tests that decision against your real working arrangement, then
        looks after your limited company, including dividends, VAT, payroll and
        annual accounts.
      </>
    ),
    covers: [
      "Limited company formation & PSC setup",
      "Thorough IR35 contract & working practice reviews",
      "Tax-efficient dividend timing & profit extraction",
      "VAT registration & quarterly returns",
      "Year-end statutory accounts & Corporation Tax",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Burslem to Fenton",
    description: (
      <>
        From a decorating studio in Burslem to a haulage firm in Fenton, the
        right books answer one question quickly: are we making money this month?
        Our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting
        </Link>{" "}
        service delivers regular bookkeeping, VAT, payroll and annual accounts
        built to answer it.
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
    tag: "Buy-to-Let & Yield Tracking",
    description: (
      <>
        Lower purchase prices put Stoke-on-Trent on many buy to let shortlists,
        and one investor guide citing 2023 Zoopla data puts average yields at
        around 6.6 percent. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service makes sure the tax side keeps pace, covering rental income,
        allowable costs, the mortgage interest rules and Capital Gains Tax.
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
        Factories, warehouses and hospitality venues run on shift patterns,
        overtime and agency staff, and every variation still has to land
        correctly in PAYE. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        service handles pay runs, auto enrolment pensions and HMRC reporting
        however your rota works.
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
    tag: "Salary, Dividends & Pension",
    description: (
      <>
        A profitable owner manager usually has several levers to pull: salary,
        dividends, pension contributions and the timing of equipment purchases.
        Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service works through them before your year end, while each one can
        still change the result.
      </>
    ),
    covers: [
      "Year-round tax reviews, not just at deadline",
      "Dividend timing & salary optimisation",
      "Corporation Tax & Personal Tax alignment",
      "Pension contribution planning & timing",
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
        If the owner is still doing the books after the last shift, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting
        </Link>{" "}
        service takes over bookkeeping, management figures, payroll and cash
        flow tracking.
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
    tag: "Exports & MTD Records",
    description: (
      <>
        Exporters of tableware, tiles and technical ceramics deal with overseas
        customers where VAT treatment depends on what is sold and where it goes.
        Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service registers you, files returns and keeps digital records that HMRC
        accepts.
      </>
    ),
    covers: [
      "Making Tax Digital (MTD) compliant VAT filing",
      "Automated bank feed reconciliation",
      "VAT registration at the correct threshold",
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
        Family firms handed down through generations can carry old share
        structures and out of date registers. Our{" "}
        <Link
          to="/services/company-secretarial-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          company secretarial
        </Link>{" "}
        service tidies the records and manages confirmation statements and
        shareholder changes.
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
    tag: "Hydrogen Kilns & New Materials",
    description: (
      <>
        Work on hydrogen fired kilns and new materials shows how much genuine
        development is happening in the city's industries. Our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit
        </Link>{" "}
        service tests eligibility candidly and prepares the claim.
      </>
    ),
    covers: [
      "Ceramics, materials & hydrogen technology assessments",
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
    tag: "Self-Employment, Rent & Dividends",
    description: (
      <>
        Self employment profit, rent from a terraced house and dividends all end
        up on one return. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment
        </Link>{" "}
        service prepares it and explains what each figure means.
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

const stokeClientProfiles = [
  {
    title: "Ceramics & Advanced Materials Firms",
    badge: "Kiln Equipment & Capital Allowances",
    description:
      "A significant share of our Stoke-on-Trent enquiries come from ceramics or advanced materials businesses weighing up new kiln equipment or manufacturing upgrades. We make sure capital allowances are claimed correctly and set up bookkeeping to track stock, moulds and equipment properly.",
    icon: Factory,
    highlight: "Full expensing and capital allowance reviews before major equipment purchases.",
  },
  {
    title: "Contractors at Logistics & Engineering Sites",
    badge: "Manufacturing & Logistics Sector",
    description:
      "Engineers and project specialists placed at the city's manufacturing plants, logistics hubs and construction sites often need IR35 reviewed and a limited company set up properly from day one. We handle the structure, payroll and annual accounts.",
    icon: Briefcase,
    highlight: "IR35 reviews and limited company setup done properly from day one.",
  },
  {
    title: "Stoke-on-Trent Landlords",
    badge: "Terraced Portfolio Growth",
    description:
      "With lower purchase prices and strong yields, Stoke-on-Trent attracts buy-to-let investors building portfolios of terraced houses. We handle rental income reporting, allowable expenses, mortgage interest rules and Capital Gains Tax planning before decisions are locked in.",
    icon: Home,
    highlight: "Timely CGT and expense clarity before deadlines arrive.",
  },
];

const faqs = [
  {
    q: "Do I need to visit an office to work with you?",
    a: "No. We have no Stoke-on-Trent office and none of the work needs one. We are based in Bristol and work with clients online by video, phone, email and cloud software.",
  },
  {
    q: "I run a small pottery or ceramics business. How do you handle stock, moulds and kilns?",
    a: "Those three shape a ceramics business's numbers, so we set up bookkeeping that values stock properly and records equipment for capital allowances.",
  },
  {
    q: "Can my company claim relief on a new kiln or machinery?",
    a: "Often, yes. Companies can usually claim full expensing on qualifying plant and machinery, and sole traders can use the Annual Investment Allowance. We check what counts as plant before you commit to the purchase.",
  },
  {
    q: "My business operates across more than one of the six towns. Does that complicate anything?",
    a: "Not for income tax, VAT or payroll, which do not change with where a site sits in the city. Multiple sites can affect business rates, insurance and your bookkeeping, so we set up your records to show each site's costs.",
  },
  {
    q: "Is your pricing different based on location?",
    a: "No. Every client gets the same fixed fee structure, based on what your specific situation actually needs, agreed before any work starts. There is no premium for Stoke-on-Trent, Bristol or anywhere else.",
  },
];

const AccountantsInStokeOnTrent: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Stoke-on-Trent",
    url: "https://henleazetaxconsultancy.com/accountants-in-stoke-on-trent",
    description:
      "Looking for accountants in Stoke-on-Trent? We handle tax, VAT, payroll and bookkeeping online for a fixed fee agreed upfront. Free first consultation.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Stoke-on-Trent" },
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

  return (
    <>
      <Helmet>
        <title>Accountants in Stoke-on-Trent | Fixed Fee Support</title>
        <meta
          name="description"
          content="Looking for accountants in Stoke-on-Trent? We handle tax, VAT, payroll and bookkeeping online for a fixed fee agreed upfront. Free first consultation."
        />
        <meta
          name="keywords"
          content="accountants in stoke on trent, accountant stoke on trent, contractor accountant stoke on trent, IR35 stoke on trent, small business accountant stoke on trent, landlord accountant stoke on trent, ceramics accountant stoke on trent, tax planning stoke on trent, self assessment stoke on trent"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-stoke-on-trent"
        />
        <meta
          property="og:title"
          content="Accountants in Stoke-on-Trent | Fixed Fee Support"
        />
        <meta
          property="og:description"
          content="Looking for accountants in Stoke-on-Trent? We handle tax, VAT, payroll and bookkeeping online for a fixed fee agreed upfront. Free first consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-stoke-on-trent"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Stoke-on-Trent | Fixed Fee Support"
        />
        <meta
          name="twitter:description"
          content="Looking for accountants in Stoke-on-Trent? We handle tax, VAT, payroll and bookkeeping online for a fixed fee agreed upfront. Free first consultation."
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
                <span>Stoke-on-Trent &amp; Staffordshire Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Stoke-on-Trent &mdash;{" "}
                <span className="text-gold block sm:inline">
                  Clear Advice, Fixed Fees, No Surprises
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Fixed-fee accountants in Stoke-on-Trent for contractors,
                landlords, sole traders and small businesses. Remote support
                across the six towns and wider Staffordshire.
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
                  "No Office Visits",
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
                  One City, Six Towns and a Lot of Making Things
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Stoke-on-Trent is one city made of six towns, which is a
                    handy reminder that no two businesses here work quite the
                    same way. A potter in Burslem, a start up in Hanley and a
                    haulier in Fenton all need their accounts done, but not in
                    the same way, and not on the same budget.
                  </p>
                  <p>
                    Henleaze Tax Consultancy is a Bristol firm that supports
                    contractors, landlords, sole traders and small businesses
                    across Stoke-on-Trent, from Longton and Tunstall to
                    Newcastle-under-Lyme and the wider Staffordshire area. We
                    work with clients entirely online, using video calls, phone,
                    email and cloud software, and we quote a fixed fee before
                    any work begins.
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

        {/* ── LOCAL ECONOMY SECTION ─────────────────────────────────── */}
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
                From Ceramic Capital to Enterprise Zone Growth
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Ceramics still define Stoke-on-Trent. The UK industry
                contributes over £2 billion a year and employs around 20,000
                people, and Stoke remains its most important centre. A 2026
                council report notes that ceramics now underpins supply chains
                in construction, energy, defence, healthcare and advanced
                manufacturing, with pilot hydrogen fired kilns showing where
                the sector is heading.
              </p>
              <p>
                Next to that sits the Ceramic Valley Enterprise Zone, where
                more than 50 businesses have created over 2,000 jobs and the
                new Etruria Valley Link Road is opening up more sites. Bet365
                has its headquarters in the city, Royal Stoke University
                Hospital is a major employer, and the Home Office has set up in
                the Smithfield business quarter in Hanley, with over 500 staff
                expected.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                Logistics firms trade on the A500 and M6, JCB is developing
                hydrogen combustion technology in nearby Staffordshire, and the
                Goods Yard scheme is reshaping the area around the station.
                Stoke even holds World Craft City status.
              </p>
            </div>

            {/* Economy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Factory,
                  title: "Ceramics & Advanced Manufacturing",
                  body: "UK ceramics contributes over £2 billion annually with 20,000 jobs. Stoke remains the sector's most important centre.",
                },
                {
                  Icon: Building2,
                  title: "Ceramic Valley Enterprise Zone",
                  body: "Over 50 businesses, 2,000+ jobs created, with Etruria Valley Link Road opening new sites.",
                },
                {
                  Icon: Landmark,
                  title: "Major Employers",
                  body: "Bet365 headquarters, Royal Stoke University Hospital, and the Home Office's Smithfield quarter with 500+ staff.",
                },
                {
                  Icon: Home,
                  title: "Buy-to-Let Market",
                  body: "Lower purchase prices and average yields around 6.6% (2023 Zoopla data) put Stoke on many investor shortlists.",
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
                Tailored Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting and Tax Support for Stoke-on-Trent Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and proactive tax advisory
                tailored for Stoke-on-Trent's varied contractor, landlord and
                business client base.
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
                Every service above is fixed-fee — you can see indicative pricing on our{" "}
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

        {/* ── R&D / CERAMICS & HYDROGEN INSIGHT ───────────────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-5 border border-gold/30">
                  R&amp;D Tax Relief Insight
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
                  Does Your Stoke-on-Trent Business Qualify for R&amp;D Tax
                  Relief?
                </h2>

                <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    Work on hydrogen fired kilns and new materials shows how
                    much genuine development is happening in the city's
                    industries. A ceramics manufacturer testing new firing
                    processes, or an engineering firm developing advanced
                    materials, may well have qualifying R&amp;D activity — even
                    if the work feels like ordinary day-to-day problem solving.
                  </p>
                  <p>
                    Eligibility depends on whether you are resolving genuine
                    technical uncertainty, not on whether you have a formal
                    R&amp;D department or a large budget. We assess this
                    honestly and will tell you plainly if a claim would not hold
                    up under HMRC scrutiny.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all"
                  >
                    <Link to="/contact">
                      Check Your R&amp;D Eligibility
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:border-gold/60"
                  >
                    <Link to="/services/rd-tax-credit-claim">
                      Learn About R&amp;D Claims
                    </Link>
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
                Everyday Situations in the Six Towns
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                The Stoke-on-Trent Clients We Work With Most Often
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                We understand the specific pressures and opportunities that
                Stoke-on-Trent's varied economy creates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stokeClientProfiles.map((profile, index) => {
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
                  Recognise yours? Tell us where you are at.
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
                Your Quote Stays Your Quote
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                We give you a single fixed price for the work agreed, before it
                starts. If the scope grows, we say so and agree it first, so the
                invoice never surprises you.
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
                Questions From Stoke-on-Trent Clients
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
                        className={`h-5 w-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
        <NearbyLocationsSection currentCity="Stoke-on-Trent" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Let's Take the Guesswork Out of Your Accounts
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you want accountants in Stoke-on-Trent who give clear advice
              and a fixed price, send us a message. We will tell you plainly
              what you need and what it costs, and the first conversation is
              free.
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

export default AccountantsInStokeOnTrent;

