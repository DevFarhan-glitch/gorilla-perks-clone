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
  ShieldCheck,
  Dna,
  Train,
  Building,
  UtensilsCrossed,
  Check,
  HelpCircle,
  Clock,
  Landmark,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

/* ─── SERVICE DATA ─────────────────────────────────────────── */

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
    tag: "Rail Engineering & Insurance IR35",
    description: (
      <>
        York's rail engineering and insurance sectors both rely heavily on contractors, and{" "}
        <Link
          to="/what-is-ir35-uk"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          IR35 reviews
        </Link>{" "}
        here tend to be thorough given how structured those industries' engagement processes are. Our{" "}
        <Link
          to="/services/contractor-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          contractor accounting
        </Link>{" "}
        service reviews your actual working arrangement properly, covering limited company structuring, dividend planning, bookkeeping, VAT, payroll and year end filing.
      </>
    ),
    covers: [
      "Contract-specific IR35 & off-payroll status reviews",
      "Limited company formation & PSC share structuring",
      "Optimised director salary & dividend planning",
      "Real-time Making Tax Digital VAT & RTI payroll",
      "Statutory annual accounts & Corporation Tax CT600",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "City Centre, Food & Tourism Trade",
    description: (
      <>
        Whether you're trading in York's city centre, supplying into the food and drink sector, or running a business built around the tourism trade, our{" "}
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
      "Accurate day-to-day cloud bookkeeping (Xero / QuickBooks)",
      "Making Tax Digital (MTD) compliant VAT filing",
      "Management accounts & proactive cash flow reporting",
      "Statutory year-end accounts & Companies House submissions",
      "Direct advice from qualified accountants when you need it",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "Holiday Lets & Residential Portfolios",
    description: (
      <>
        A lot of York landlords let short term to the city's visitor economy, and the recent end of furnished holiday lettings relief has changed how that income is taxed. Our{" "}
        <Link
          to="/services/landlord-accountants"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          landlord accounting
        </Link>{" "}
        service covers rental income reporting, allowable expenses and Capital Gains Tax planning, whatever type of letting you run.
      </>
    ),
    covers: [
      "Tax rules post-Furnished Holiday Lettings (FHL) abolition",
      "Allowable expense & refurbishment cost maximisation",
      "Section 24 mortgage interest relief calculations",
      "Capital Gains Tax (CGT) advice & 60-day property disposal reporting",
      "Buy-to-let limited company holding company structuring",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll and HR Support",
    tag: "Hospitality & Seasonal Staffing",
    description: (
      <>
        Hospitality and tourism businesses in York often deal with more variable staffing patterns than most, and getting payroll wrong is noticed immediately by the people it affects. Our{" "}
        <Link
          to="/services/payroll-and-hr-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          payroll and HR support
        </Link>{" "}
        keeps this accurate and on schedule regardless of how your staffing changes through the year.
      </>
    ),
    covers: [
      "Weekly, fortnightly & monthly PAYE processing",
      "Variable hours, overtime & seasonal hospitality staff management",
      "Workplace pension auto-enrolment compliance",
      "Real-Time Information (RTI) submissions to HMRC",
      "Digital payslips, P45, P60 and annual PAYE returns",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Rail, Insurance & Bioscience Structuring",
    description: (
      <>
        With so much of York's economy built on structured professional work in rail, insurance and bioscience, the gap between a properly reviewed salary and dividend position and one left on autopilot tends to be larger than average. Our{" "}
        <Link
          to="/services/tax-planning"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          tax planning
        </Link>{" "}
        service works with you throughout the year to close that gap.
      </>
    ),
    covers: [
      "Bespoke salary vs. dividend optimization models",
      "Director pension contributions & Corporation Tax mitigation",
      "Capital allowances and pre-year-end investment planning",
      "Higher-rate tax threshold navigation & dividend allowance preservation",
      "Proactive, year-round strategic tax consultations",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Virtual Finance Team",
    description: (
      <>
        For growing York businesses not yet ready to bring finance in house, our{" "}
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
      "Complete day-to-day bookkeeping & supplier invoice processing",
      "Monthly management accounts & KPI executive dashboards",
      "Cash flow forecasting & working capital monitoring",
      "End-to-end payroll & VAT administration",
      "Senior financial expertise without permanent executive overhead",
    ],
    ctaText: "View Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Standard vs. Exempt & Hospitality Rates",
    description: (
      <>
        VAT treatment for York's tourism and hospitality businesses isn't always straightforward, particularly around what counts as standard rated versus exempt. Our{" "}
        <Link
          to="/services/vat-and-bookkeeping-accounting-services"
          className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors"
        >
          VAT and bookkeeping
        </Link>{" "}
        service keeps this correctly managed throughout the year.
      </>
    ),
    covers: [
      "Hospitality & accommodation VAT rate accuracy",
      "Standard rated, zero-rated and exempt supply reconciliation",
      "Making Tax Digital (MTD) VAT returns submitted directly to HMRC",
      "Automated bank feeds & receipt reconciliation",
      "Audit-ready digital accounts maintained year-round",
    ],
    ctaText: "View VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "company-secretarial",
    category: "business",
    title: "Company Secretarial Services",
    tag: "Companies House Governance",
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
      "Annual Confirmation Statement (CS01) preparation & filing",
      "Director appointments, resignations & PSC register updates",
      "Share allotments, transfers & restructuring documentation",
      "Registered office address & Companies House compliance",
      "Automated tracking to prevent late filing penalties",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Bioscience & Rail Tech Engineering",
    description: (
      <>
        Given the University of York's bioscience research strength and the city's rail technology and engineering cluster, genuine R&D eligible activity is more common here than many business owners realise. Our{" "}
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
      "Bioscience, lab research & scientific advancement assessments",
      "Rail engineering, signalling & hardware innovation audits",
      "Qualifying software, staffing & consumable cost calculation",
      "Robust HMRC Additional Information Form (AIF) documentation",
      "Substantial Corporation Tax reductions or cash payable credits",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Dividends, Rental & Freelance Mix",
    description: (
      <>
        Combining dividend income with rental profits or freelance invoicing is common across York's mixed economy, and each interacts with your tax position differently. Our{" "}
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
      "Self Assessment tax returns for directors, landlords & sole traders",
      "Multi-income stream reconciliation (dividends, property & freelance)",
      "Allowable personal deductions & tax relief claims",
      "Payments on account calculation & clear January payment forecasting",
      "Direct representation and liaison with HMRC",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

/* ─── CLIENT PROFILES / STORIES ────────────────────────────── */

const yorkClientProfiles = [
  {
    title: "Rail Engineering & Insurance Contractors",
    badge: "IR35 & Take-Home Efficiency",
    description:
      "A good number of our York clients are contractors working across the city's rail engineering and insurance sectors, wanting proper IR35 guidance rather than a generic freelance template. We review actual working arrangements and optimize profit extraction through disciplined salary and dividend structures.",
    icon: Train,
    highlight: "Rigorous contract reviews & tailored PSC tax advice.",
  },
  {
    title: "Holiday Let & Residential Landlords",
    badge: "Visitor Economy & FHL Changes",
    description:
      "We work with landlords adjusting to the end of furnished holiday lettings relief who need clear calculations on how their tax burden has shifted. From short-term tourist lets to student accommodation and standard ASTs, we maximize allowable costs and manage Capital Gains Tax.",
    icon: Home,
    highlight: "Post-FHL transition guidance & allowable expense optimization.",
  },
  {
    title: "Hospitality, Retail & Food Suppliers",
    badge: "City Centre & Supply Chain",
    description:
      "Small businesses across York's hospitality, retail and food supply sectors who wanted their numbers handled properly. We keep day-to-day bookkeeping tidy, tackle tricky hospitality VAT rules, and run reliable payroll that accommodates seasonal shifts in staffing.",
    icon: UtensilsCrossed,
    highlight: "Accurate books, seasonal payroll & zero VAT surprises.",
  },
];

/* ─── FAQ DATA ─────────────────────────────────────────────── */

const faqs = [
  {
    q: "Do you have a physical office in York?",
    a: "No, we work with York clients entirely remotely, the same way we do everywhere outside Bristol. Video calls, phone, email and cloud accounting cover what an office visit would.",
  },
  {
    q: "I let a property short term to visitors in York. How has the end of furnished holiday lettings relief actually affected me?",
    a: "Your income is now taxed broadly the same as a standard rental, which for most landlords means less favourable mortgage interest relief and fewer capital allowance options than before. Worth a specific review of your numbers under the new rules.",
  },
  {
    q: "I contract into York's rail or insurance sector through my own limited company. Do you understand IR35 in these industries?",
    a: "Yes, this is a common client profile for us. We review your actual contract and working arrangements properly, rather than relying solely on a blanket client determination.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant, request your records, and continue from wherever you currently stand.",
  },
  {
    q: "Is your pricing different for York clients compared to other locations?",
    a: "No. Every client gets the same fixed fee structure, based on what their specific situation actually requires, agreed before any work starts.",
  },
];

/* ─── YORK AREA BADGES ─────────────────────────────────────── */

const yorkAreas = [
  "York City Centre",
  "Clifton",
  "Fulford",
  "Heslington",
  "Bishopthorpe",
  "Dringhouses",
  "Rawcliffe",
  "Heworth",
  "Acomb",
  "North Yorkshire",
];

/* ─── COMPONENT ────────────────────────────────────────────── */

const AccountantsInYorkUK: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Henleaze Tax Consultancy - Accountants in York UK",
    url: "https://henleazetaxconsultancy.com/accountants-in-york-uk",
    logo: "https://henleazetaxconsultancy.com/logo.jpg",
    description:
      "Looking for accountants in York UK? Get fixed-fee accounting and tax support for contractors, small businesses, landlords and sole traders.",
    priceRange: "££",
    areaServed: {
      "@type": "City",
      name: "York",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "North Yorkshire",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+447949956279",
      contactType: "customer service",
      availableLanguage: "en",
    },
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
    <Layout>
      <Helmet>
        <title>Accountants in York UK | Fixed-Fee Tax &amp; Accounting Services</title>
        <meta
          name="description"
          content="Looking for accountants in York UK? Get fixed-fee accounting and tax support for contractors, small businesses, landlords and sole traders."
        />
        <meta
          name="keywords"
          content="accountants in york uk, accountant york, contractor accountant york, landlord tax york, small business accountant york, rail contractor ir35 york"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-york-uk"
        />
        <meta
          property="og:title"
          content="Accountants in York UK | Fixed-Fee Tax & Accounting Services"
        />
        <meta
          property="og:description"
          content="Looking for accountants in York UK? Get fixed-fee accounting and tax support for contractors, small businesses, landlords and sole traders."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-york-uk"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-navy text-white">
        {/* Decorative background glow */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-blue-600/40 via-indigo-600/20 to-gold/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-gold/20 via-amber-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs sm:text-sm font-semibold mb-6 shadow-md animate-fade-in">
              <MapPin className="h-4 w-4 text-gold animate-bounce" />
              <span>Serving York &amp; North Yorkshire</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Accountants in York UK{" "}
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-200 to-white">
                Contractor, SME &amp; Landlord Tax Specialists
              </span>
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
              <p>
                York's economy carries far more weight than its postcard reputation suggests. Beneath the Minster and the medieval streets sits one of the UK's largest rail engineering clusters, a genuine bioscience research hub and a cluster of national insurers, alongside the tourism trade most people associate with the city first. That mix brings tax questions that a generic small business template doesn't always answer well.
              </p>
              <p>
                Henleaze Tax Consultancy provides accounting and tax support to contractors, landlords, sole traders and small businesses across York. We're based in Bristol, and for day to day work that makes little practical difference, since everything runs through cloud accounting, phone calls and email.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:border-gold/60"
              >
                Explore Services
                <ChevronDown className="ml-2 h-5 w-5 text-gold animate-pulse" />
              </Button>
            </div>

            {/* York Area Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-2">
                Supporting clients in:
              </span>
              {yorkAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-gold/50 hover:text-gold transition-colors duration-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* ═══════════════════ YORK'S ECONOMY ═══════════════════ */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Local Economic Insight
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              York's Economy Rests on Four Pillars, Not Just Tourism
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed relative z-10">
              <p>
                York sits at the centre of the UK's largest rail cluster, with over 5,500 people employed across rail and related companies including Network Rail, LNER, Siemens and Arup, and the city accounts for a notable share of all UK rail industry jobs. Alongside that, York has built a genuine reputation in bioscience, anchored by the University of York and the BioYork initiative, and is home to a well established insurance hub, with Aviva, Hiscox and NFU Mutual all employing significant numbers locally. Tourism remains hugely important too, worth over £765 million to the local economy and supporting more than 24,000 jobs, with over 8 million visitors a year. York also carries genuine food manufacturing heritage, Nestlé's confectionery operations among them, a legacy that still supports a wider supply chain of local suppliers and contractors.
              </p>
            </div>

            {/* Tax Calculator Teaser Banner */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-50/60 p-6 rounded-2xl border border-blue-100/80">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-navy shrink-0">
                  <Calculator className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-base">
                    Curious what you might owe?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Our tax calculator gives you a quick starting estimate before you speak to us.
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="sm"
                className="bg-navy hover:bg-navy-light text-white font-bold rounded-xl shrink-0 shadow-md hover:scale-105 transition-all duration-300"
              >
                <Link to="/calculator">
                  Try Tax Calculator
                  <ArrowRight className="ml-2 h-4 w-4 text-gold" />
                </Link>
              </Button>
            </div>
          </div>

          {/* 4 Core Economic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between">
              <div>
                <div className="h-13 w-13 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                  <Train className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  Rail Engineering Cluster
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Home to 5,500+ professionals across Network Rail, LNER, Siemens and Arup, creating heavy demand for contract and IR35 precision.
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-700 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-100/60">
                UK's largest rail network cluster
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between">
              <div>
                <div className="h-13 w-13 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                  <Dna className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  Bioscience Research Hub
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Anchored by the University of York and the BioYork initiative, where genuine R&D tax credit opportunities frequently go unclaimed.
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-700 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-100/60">
                University &amp; BioYork innovation
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between">
              <div>
                <div className="h-13 w-13 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  Major Insurance Sector
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Aviva, Hiscox and NFU Mutual employ significant local talent, with complex contractor engagement processes and dividend questions.
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-700 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-100/60">
                National insurance headquarters
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between">
              <div>
                <div className="h-13 w-13 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-5 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                  <UtensilsCrossed className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  Tourism &amp; Food Heritage
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Over £765m visitor economy with 8m+ annual visitors and Nestlé food manufacturing heritage supporting local suppliers.
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-700 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-100/60">
                24,000+ local hospitality jobs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES FOR YORK CLIENTS ═══════════════ */}
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
              Comprehensive Coverage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Accounting and Tax Support for York Clients
            </h2>
            <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              Fixed-fee accounting, clear upfront quotes, and zero hidden charges for York's contractors, small businesses, landlords and sole traders.
            </p>
            <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {[
              { id: "all", label: "All Services" },
              { id: "contractor", label: "Contractor Accounting" },
              { id: "business", label: "Small Business & Payroll" },
              { id: "landlord", label: "Landlord Accounting" },
              { id: "tax", label: "Tax & Advisory" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${selectedCategory === tab.id
                  ? "bg-gold text-navy shadow-lg shadow-gold/30 font-bold scale-105"
                  : "bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/10"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-gold/60 shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.18)] transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-gold/20 transition-all duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-14 w-14 rounded-2xl bg-blue-600/20 group-hover:bg-gold flex items-center justify-center text-blue-400 group-hover:text-navy transition-all duration-300 shadow-inner">
                        <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-right">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>

                    <div className="text-slate-300 text-sm leading-relaxed mb-6 space-y-2">
                      <p>{service.description}</p>
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

          {/* View All Services Link & Pricing Assurance Banner */}
          <div className="mt-16 text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <p className="text-slate-200 text-base sm:text-lg mb-4">
              Looking for a specific service or full advisory support?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-3 shadow-md hover:scale-105 transition-all duration-300"
              >
                <Link to="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-black hover:text-white hover:bg-white/10 rounded-full px-8 py-3 transition-colors"
              >
                <Link to="/pricing">
                  See Our Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHERE OUR YORK CLIENTS COME FROM ═══════════════ */}
      <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Client Profiles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Where Our York Clients Tend to Come From
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              A good number of our York clients are contractors working across the city's rail engineering and insurance sectors, wanting proper IR35 guidance rather than a generic freelance template. We also work with landlords adjusting to the end of furnished holiday lettings relief, and with small businesses across York's hospitality, retail and food supply sectors who wanted their numbers handled properly.
            </p>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {yorkClientProfiles.map((profile, idx) => {
              const ProfileIcon = profile.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-gold/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <ProfileIcon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                        {profile.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {profile.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {profile.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 text-xs font-semibold text-gold flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-gold" />
                    <span>{profile.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-10 py-6 rounded-full shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">
                Get in touch if any of that sounds close to your situation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW OUR FEES WORK ═══════════════ */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Clear &amp; Predictable
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              How Our Fees Work
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 text-center">
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-8">
              Every quote is fixed and agreed before any work begins, whether you're based in York, Bristol or anywhere else in the UK. There's no hourly billing, and nothing changes because a query needed a longer conversation than expected.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold text-base px-10 py-6 rounded-full shadow-lg hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
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
                className="border-navy/20 text-navy hover:bg-navy/5 font-semibold text-base px-8 py-6 rounded-full transition-all duration-300"
              >
                <Link to="/contact">
                  Request a Fixed Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FREQUENTLY ASKED QUESTIONS ═══════════════ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Frequently Asked Questions From York Clients
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold/60 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <span className="font-display font-bold text-lg text-navy pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-base leading-relaxed bg-slate-50/50 border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ NEARBY LOCATIONS ═══════════════ */}
      <NearbyLocationsSection currentCity="York" />

      {/* ═══════════════ LATEST BLOGS & GUIDES ═══════════════ */}
      <LatestBlogsSection />

      {/* ═══════════════ FINAL CTA SECTION ═══════════════ */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Let's Talk About Your Tax Position
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            If you're looking for accountants in York who understand rail, insurance, bioscience and tourism properly, not just generic small business advice, get in touch. A first conversation is free and doesn't commit you to anything further.
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
        </div>
      </section>
    </Layout>
  );
};

export default AccountantsInYorkUK;
