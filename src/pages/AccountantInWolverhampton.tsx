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
    tag: "i54 & Manufacturing Sites",
    description: (
      <>
        Skilled engineers and technicians often take contract work at i54 and the
        manufacturing sites around it, and many of them use a limited company.
        Our{" "}
        <Link
          to="/whats-included-in-contractor-accounting"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting service
        </Link>{" "}
        sets it up properly, checks your{" "}
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35 position
        </Link>{" "}
        against how you really work, and manages dividends, VAT,{" "}
        <Link
          to="/payroll-consulting-firms-in-bristol"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll
        </Link>{" "}
        and annual accounts.
      </>
    ),
    covers: [
      "Limited company setup & PSC formation",
      "Thorough IR35 contract & working practices reviews",
      "Tax-efficient dividend timing & salary extraction",
      "Quarterly VAT returns & MTD compliance",
      "Statutory accounts & Corporation Tax filing",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Workshops to Shop Fronts",
    description: (
      <>
        A van, a workshop or a shop front gives you a business but not
        necessarily a clear view of it. Our{" "}
        <Link
          to="/services/small-business-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          small business accounting service
        </Link>{" "}
        provides regular bookkeeping, VAT, payroll and annual accounts, so you
        can see what the business is earning as you go.
      </>
    ),
    covers: [
      "Regular bookkeeping tailored for sole traders & SMEs",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Monthly or quarterly management visibility",
      "Year-end annual accounts & tax return submissions",
      "Direct accountant support without hourly billing",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Hospital Lets & Commuter Demand",
    description: (
      <>
        A local letting guide points to demand from hospital staff and from
        commuters priced out of{" "}
        <Link
          to="/accountants-in-birmingham-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          Birmingham
        </Link>
        , helped by trains that reach New Street in under 30 minutes. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting service
        </Link>{" "}
        handles rental income, allowable costs, the mortgage interest rules and
        Capital Gains Tax, whether you own one house or several.
      </>
    ),
    covers: [
      "Rental income reporting & Self Assessment",
      "Maximising allowable property expenditure & repairs",
      "Section 24 mortgage interest relief calculations",
      "Capital Gains Tax (CGT) planning before disposals",
      "Single buy-to-let & multi-property portfolio support",
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
        Taking on your first employee means payslips, pension contributions and
        HMRC reports every month. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support service
        </Link>{" "}
        handles each pay run and the paperwork around it.
      </>
    ),
    covers: [
      "Accurate monthly & weekly PAYE calculations",
      "Workplace pension auto-enrolment compliance",
      "Real-Time Information (RTI) submissions to HMRC",
      "Digital payslips, P60s, and P45 production",
      "Director and staff payroll handled without friction",
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
        Small company owners decide how much to take as salary, how much as
        dividends and when. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning service
        </Link>{" "}
        works through those choices, along with pension contributions, before
        your year ends.
      </>
    ),
    covers: [
      "Year-round tax reviews before your year-end passes",
      "Optimised salary vs dividend extraction mix",
      "Pension contribution allowances & Corporation Tax relief",
      "Capital allowances timing on vans & equipment",
      "Clear forward guidance to avoid surprise tax bills",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Full Bookkeeping Relief",
    description: (
      <>
        If the books are still done at the kitchen table on a Sunday night, our{" "}
        <Link
          to="/services/outsourced-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          outsourced accounting service
        </Link>{" "}
        takes the work off you, with bookkeeping, management reports and cash
        flow tracking.
      </>
    ),
    covers: [
      "Complete day-to-day bookkeeping & reconciliations",
      "Receipt capture & cloud software management",
      "Monthly cash flow tracking & profitability reports",
      "Credit control support & supplier payment tracking",
      "Peace of mind so you can focus on running the business",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Threshold Monitoring & MTD",
    description: (
      <>
        Registering for VAT too late, or too early, costs money either way. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping service
        </Link>{" "}
        watches your turnover, registers you when it makes sense and files
        accurate returns.
      </>
    ),
    covers: [
      "Rolling 12-month turnover threshold tracking",
      "Making Tax Digital (MTD) digital record-keeping",
      "Quarterly VAT calculations & timely submissions",
      "Guidance on standard, flat rate, and margin schemes",
      "Zero last-minute receipt panics or late filing fines",
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
        Setting up a limited company is quick, but keeping it in order takes
        steady attention. Our{" "}
        <Link
          to="/services/company-secretarial-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          company secretarial service
        </Link>{" "}
        handles incorporation, confirmation statements and changes to
        directors or shareholders.
      </>
    ),
    covers: [
      "Limited company formation & PSC register setup",
      "Annual Confirmation Statement filing",
      "Director appointments, resignations & address updates",
      "Share transfers, allotments & dividend documentation",
      "Statutory register maintenance & registered office",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Engineering & Fabrication",
    description: (
      <>
        Engineering suppliers and fabricators working around the i54 occupiers
        sometimes solve technical problems without realising the work
        qualifies. Our{" "}
        <Link
          to="/services/rd-tax-credit-claim"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          R&D tax credit service
        </Link>{" "}
        checks eligibility honestly and prepares the claim.
      </>
    ),
    covers: [
      "Honest eligibility assessment before investing time",
      "Advanced manufacturing & technical fabrication analysis",
      "Substantiated HMRC-compliant narrative preparation",
      "Qualifying staff, subcontractor & materials expenditure",
      "Corporation Tax reduction or cash credit recovery",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Sole Traders, Landlords & Directors",
    description: (
      <>
        Profit from your business, rent from a house and dividends from a company
        all meet on one return. Our{" "}
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          personal tax and self assessment service
        </Link>{" "}
        prepares it and explains what you owe and why.
      </>
    ),
    covers: [
      "Self Assessment return preparation & filing",
      "Combining trade profit, rental yields & company dividends",
      "Payments on account planning to prevent cash surprises",
      "Claiming all allowable business mileage & expenses",
      "Direct HMRC correspondence handled on your behalf",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const wolverhamptonClientProfiles = [
  {
    title: "Tradespeople & Sole Traders",
    badge: "Making Tax Digital Ready",
    description:
      "A joiner, electrician, or builder who suspects their turnover will cross the £30,000 threshold next April. We review gross receipts before expenses, set up straightforward digital software, and make sure Making Tax Digital requirements are handled with zero fuss.",
    icon: Briefcase,
    highlight: "Clear guidance on gross income thresholds and April 2027 digital compliance.",
  },
  {
    title: "Hauliers & Workshop Operators",
    badge: "Tight Margin Management",
    description:
      "Hauliers running vehicles across the Black Country on tight margins, needing certainty on simplified mileage rates (45p/25p) versus actual vehicle running costs and capital allowances. We work out which method suits you best.",
    icon: Factory,
    highlight: "Accurate vehicle expense optimisation and running margin visibility.",
  },
  {
    title: "Shop Owners & Company Directors",
    badge: "Paperwork Relief & Tax Efficiency",
    description:
      "A shop owner whose receipts live in a carrier bag, or a limited company director unsure of how to balance salary, dividends, and pension contributions. We replace kitchen-table bookkeeping with clean cloud accounts.",
    icon: Building2,
    highlight: "Stress-free digital accounts and proactive salary vs dividend planning.",
  },
  {
    title: "Wolverhampton Landlords",
    badge: "Hospital Staff Lets & Commuters",
    description:
      "Landlords with terraced houses near New Cross Hospital or let to commuters using the sub-30-minute train to Birmingham New Street. We handle rental income reporting, mortgage interest rules under Section 24, and Capital Gains Tax planning.",
    icon: Home,
    highlight: "Section 24 mortgage interest clarity and proactive CGT support.",
  },
];

const faqs = [
  {
    q: "Is there an office I can pop into?",
    a: "No. We are based in Bristol and have no Wolverhampton office. Everything runs online through video calls, phone, email and secure cloud storage.",
  },
  {
    q: "I am a sole trader earning around £35,000. Does Making Tax Digital affect me?",
    a: "From April 2027 it probably does, if your gross trading and property income for 2025 to 2026 is over £30,000. The test counts income before expenses, not profit. We check your figures and set you up with compatible software.",
  },
  {
    q: "I run a limited company. Do I need to worry about Making Tax Digital?",
    a: "Making Tax Digital for Income Tax does not apply to the company or to your dividends. It can apply to any personal rental or self employment income you also have. If your company is VAT registered, it already keeps digital records for VAT.",
  },
  {
    q: "Can I claim for my van and my mileage?",
    a: "Yes, if you use it for business. You can usually choose between actual running costs and simplified mileage rates of 45p per mile for the first 10,000 business miles and 25p after, but if you have claimed capital allowances on a vehicle you cannot use the mileage rates for it. We work out which method suits you.",
  },
  {
    q: "I am unhappy with my current accountant. How hard is it to switch?",
    a: "It is usually straightforward. We ask your previous accountant for your records, review where things stand and carry on without missing a deadline.",
  },
];

const AccountantInWolverhampton: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountant in Wolverhampton",
    url: "https://henleazetaxconsultancy.com/accountant-in-wolverhampton",
    description:
      "Need an accountant in Wolverhampton? Bookkeeping, VAT, tax returns and Making Tax Digital for sole traders and small companies, online, on a fixed fee.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: { "@type": "City", name: "Wolverhampton" },
    serviceType: [
      "Sole Trader Accounting",
      "Small Business Accounting",
      "Contractor Accounting",
      "Making Tax Digital Compliance",
      "Landlord Accounting",
      "Tax Planning",
      "Payroll and HR Support",
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

  return (
    <>
      <Helmet>
        <title>Accountant in Wolverhampton for Sole Traders &amp; SMEs</title>
        <meta
          name="description"
          content="Need an accountant in Wolverhampton? Bookkeeping, VAT, tax returns and Making Tax Digital for sole traders and small companies, online, on a fixed fee."
        />
        <meta
          name="keywords"
          content="accountant in wolverhampton, accountants in wolverhampton, sole trader accountant wolverhampton, small business accountant wolverhampton, contractor accountant wolverhampton, making tax digital wolverhampton, vat returns wolverhampton, bookkeeping wolverhampton"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountant-in-wolverhampton"
        />
        <meta
          property="og:title"
          content="Accountant in Wolverhampton for Sole Traders &amp; SMEs"
        />
        <meta
          property="og:description"
          content="Need an accountant in Wolverhampton? Bookkeeping, VAT, tax returns and Making Tax Digital for sole traders and small companies, online, on a fixed fee."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountant-in-wolverhampton"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountant in Wolverhampton for Sole Traders &amp; SMEs"
        />
        <meta
          name="twitter:description"
          content="Need an accountant in Wolverhampton? Bookkeeping, VAT, tax returns and Making Tax Digital for sole traders and small companies, online, on a fixed fee."
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
                <span>Wolverhampton &amp; Black Country Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Wolverhampton &mdash;{" "}
                <span className="text-gold block sm:inline">
                  Reliable Support for Sole Traders &amp; Small Companies
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Fixed-fee online accounting, bookkeeping, VAT, and Making Tax
                Digital compliance for sole traders, contractors, landlords, and
                growing SMEs across Wolverhampton and the West Midlands.
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
                  "Making Tax Digital Ready",
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
                  Reliable Support for Sole Traders and Small Companies
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    Look along almost any Wolverhampton street and you will find
                    the same pattern: someone who has built a living on their
                    own account, with a van, a workshop, a shop front or a spare
                    room turned into an office. These sole traders and small
                    companies keep the city running, and the accounts they need
                    are rarely complicated, as long as someone does them
                    regularly.
                  </p>
                  <p>
                    Henleaze Tax Consultancy supports sole traders, small
                    companies, contractors and landlords across Wolverhampton,
                    from the city centre to Tettenhall, Bilston, Wednesfield and
                    Penn. We are based in Bristol and work entirely online, by
                    video call, phone, email and cloud software, for a fixed
                    fee. If you are looking for an accountant in Wolverhampton
                    who keeps things simple, that is the job.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold">
                      ✓
                    </div>
                    <span>
                      Direct access to your qualified accountant — not a call
                      centre or rotating support desk
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
                Engineering Roots, Electric Futures and a Rebuilt City Centre
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Wolverhampton’s economy, worth around £4.7 billion, grew out of
                coal, steel and the making of cars and motorcycles. Its newest
                chapter sits at i54, the enterprise zone just north of the city,
                where Jaguar Land Rover’s engine and electric propulsion
                manufacturing operations anchor a business park that has
                attracted more than £1 billion of investment and over 2,700
                jobs, alongside Moog, Eurofins and Atlas Copco.
              </p>
              <p>
                In the city centre, the £150 million Interchange has brought a
                new railway station, bus station and tram extension together,
                and the Springfield Brewery site is adding more than 500 homes.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                The Royal Wolverhampton NHS Trust, Marston’s and ENGIE are among
                the largest employers, and council monitoring lists construction,
                manufacturing and transport as the city’s key industries across
                the Black Country and West Midlands.
              </p>
            </div>

            {/* Economy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              {[
                {
                  Icon: Factory,
                  title: "i54 Enterprise Zone",
                  body: "JLR's electric propulsion operations anchor over £1B in investment and 2,700+ jobs alongside Moog and Atlas Copco.",
                },
                {
                  Icon: Building2,
                  title: "£150m Interchange",
                  body: "Modern railway, bus station, and tram extension connecting the city centre, plus 500+ homes at Springfield Brewery.",
                },
                {
                  Icon: Landmark,
                  title: "Major Employers",
                  body: "The Royal Wolverhampton NHS Trust, Marston's brewery HQ, and ENGIE supporting thousands of skilled jobs.",
                },
                {
                  Icon: Briefcase,
                  title: "Construction & Transport",
                  body: "The backbone of the Black Country economy, with haulage, fabrication, building trades, and specialist logistics.",
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
                Accounting and Tax Support for Wolverhampton Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and proactive tax advisory
                tailored for Wolverhampton's sole traders, SMEs, contractors and
                landlords.
              </p>
              <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {[
                { key: "all", label: "All Services" },
                { key: "business", label: "Sole Trader & SME" },
                { key: "contractor", label: "Contractor Accounting" },
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

            {/* Pricing Assurance Banner */}
            <div className="mt-16 text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <p className="text-slate-200 text-sm sm:text-base mb-3">
                Every service above is fixed-fee — you can see indicative pricing on our{" "}
                <Link
                  to="/pricing"
                  className="text-gold font-bold underline hover:text-gold-light transition-colors"
                >
                  pricing page
                </Link>{" "}
                before you even get in touch.
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-gold hover:text-navy font-bold rounded-full transition-all"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── R&D / ENGINEERING & ADVANCED MANUFACTURING INSIGHT ───── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-5 border border-gold/30">
                  R&amp;D Tax Relief Insight
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
                  Does Your Wolverhampton Engineering or Fabricating Business
                  Qualify for R&amp;D Tax Relief?
                </h2>

                <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    Engineering suppliers and fabricators working around the
                    i54 occupiers sometimes solve technical problems without
                    realising the work qualifies. An engineering workshop
                    testing new propulsion components, or a fabricator resolving
                    manufacturing uncertainty, may well have qualifying R&amp;D
                    activity — even if the work feels like ordinary day-to-day
                    problem solving.
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
                Everyday Wolverhampton Situations
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                The Wolverhampton Clients We Work With Most Often
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Typical cases include a joiner or electrician who suspects they
                will cross the £30,000 line next April, a haulier running
                vehicles on a tight margin, a shop owner whose books live in a
                carrier bag, a company director unsure how to pay themselves,
                and a landlord with two terraced houses near the hospital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {wolverhamptonClientProfiles.map((profile, index) => {
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
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
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
                  Does one sound familiar? Send us the details.
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
                What It Costs and When You Find Out
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                You hear the price before we start, and it stays fixed for the
                work we agree. No hourly rate sits behind it, and a quick call
                never adds to the bill.
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
                Questions From Wolverhampton Clients
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
        <NearbyLocationsSection currentCity="Wolverhampton" />

        {/* ── LATEST BLOGS & GUIDES ─────────────────────────────────── */}
        <LatestBlogsSection />

        {/* ── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Get Ahead of April 2027
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you are looking for an accountant in Wolverhampton who quotes a
              fixed price and explains each step, get in touch. The first
              conversation is free, and there is no obligation to continue.
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

export default AccountantInWolverhampton;

