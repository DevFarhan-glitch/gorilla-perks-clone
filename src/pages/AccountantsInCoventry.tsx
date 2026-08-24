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
  Briefcase,
  Building2,
  Home,
  Users,
  Calculator,
  FileText,
  Receipt,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Laptop,
  HelpCircle,
  Phone,
  Clock,
  MessageSquare,
  ChevronRight,
  Zap,
  TrendingUp,
  Cpu,
  Gamepad2,
  Flame,
  Check,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "contractor" | "business" | "landlord" | "tax";
  title: string;
  description: string;
  covers: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
  tag: string;
  customBody?: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: "contractor-accounting",
    category: "contractor",
    title: "Contractor Accounting",
    tag: "IR35 & Engineering/Gaming",
    description:
      "Coventry's automotive, aerospace and battery technology supply chains support a steady stream of engineering contract work, and the city's growing game development sector adds a different kind of freelance and contractor demand alongside it. Our contractor accounting service covers your IR35 position, limited company structure and dividend planning properly, whichever sector you're contracting into.",
    customBody: (
      <p className="text-slate-300 text-sm leading-relaxed mb-6">
        Coventry's automotive, aerospace and battery technology supply chains support a steady stream of engineering contract work, and the city's growing game development sector adds a different kind of freelance and contractor demand alongside it. Our contractor accounting service covers your{" "}
        <Link to="/what-is-ir35-uk" className="text-gold font-semibold underline decoration-gold/60 underline-offset-4 hover:text-gold-light transition-colors">
          IR35
        </Link>{" "}
        position, limited company structure and dividend planning properly, whichever sector you're contracting into.
      </p>
    ),
    covers: [
      "Rigorous IR35 contract & working practice reviews",
      "Tax-efficient limited company & PSC setup",
      "Strategic salary & dividend drawing guidance",
      "Ongoing cloud bookkeeping & VAT management",
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
    tag: "City Centre to Advanced Supply Chains",
    description:
      "Whether you're running a manufacturing business, a creative studio, or a shop trading from the city centre, our small business accounting service keeps your bookkeeping, VAT and payroll accurate and current, so you're working from real numbers rather than a rough estimate.",
    covers: [
      "Accurate day-to-day cloud bookkeeping",
      "Making Tax Digital (MTD) VAT returns",
      "Monthly management accounts & cash flow",
      "Year-end statutory accounts & Corporation Tax",
      "Clear advice without waiting for deadlines",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "HMO & Student Portfolio Specialist",
    description:
      "With two universities and a persistent shortage of quality rental stock, particularly for HMOs, Coventry's rental market has stayed resilient for landlords. Our landlord accounting service covers rental income reporting, allowable expenses and Capital Gains Tax planning, for a single property or a larger portfolio.",
    covers: [
      "HMO & student let income reporting",
      "Maximising allowable property expenses",
      "Section 24 mortgage interest relief planning",
      "Capital Gains Tax (CGT) advice prior to sales",
      "Incorporation advice for multi-property landlords",
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
    description:
      "An incorrect payroll run or a late PAYE submission causes disproportionate stress for something entirely preventable. Our payroll and HR support keeps this accurate and on schedule, covering PAYE, pension auto enrolment and HMRC submissions.",
    covers: [
      "Accurate & timely PAYE calculations",
      "Workplace pension auto-enrolment compliance",
      "Real-Time Information (RTI) submissions to HMRC",
      "Itemised digital payslips & P60s/P45s",
      "Hassle-free director & employee payroll",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Proactive Year-Round Strategy",
    description:
      "Most overpaid tax comes down to a decision made too late in the year to actually change the outcome. Our tax planning service works with you throughout the year, not just in the final weeks before a deadline.",
    covers: [
      "Strategic tax reviews before year-end",
      "Director remuneration & profit extraction",
      "Capital allowances & asset investment timing",
      "Corporation Tax & Personal Tax synchronisation",
      "Forward-looking advice that prevents tax waste",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Full Finance Department Support",
    description:
      "For growing Coventry businesses not yet ready to bring finance in house, our outsourced accounting service manages bookkeeping, reporting, payroll and cash flow monitoring, without the cost of a permanent hire.",
    covers: [
      "Complete end-to-end bookkeeping & reconciliations",
      "Monthly KPI dashboards & management packs",
      "Cash flow forecasting & creditor control",
      "Seamless software integration (Xero / QuickBooks)",
      "Fractional finance team expertise at a fixed cost",
    ],
    ctaText: "Explore Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Clean Digital Records",
    description:
      "Clean, current records make VAT filing and funding applications considerably more straightforward. Our VAT and bookkeeping service keeps this side of things tidy throughout the year.",
    covers: [
      "Making Tax Digital (MTD) compliant VAT filing",
      "Automated bank feed reconciliation",
      "Clean records for loan/grant & mortgage proof",
      "Partial exemption & Flat Rate scheme advice",
      "Zero last-minute receipt panics",
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
    description:
      "Companies House filings are easy to lose track of precisely because they don't come around often. Our company secretarial service tracks confirmation statements and any changes to directors or shareholders.",
    covers: [
      "Annual Confirmation Statement submissions",
      "Director, secretary & PSC change filings",
      "Share allotments, transfers & restructuring",
      "Maintenance of statutory company registers",
      "Registered office address services",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Manufacturing, Automotive & Tech",
    description:
      "Between Coventry's advanced manufacturing base, its automotive and battery technology R&D activity and its growing games and creative technology sector, genuine research and development work is common here, often more than business owners realise. Our R&D tax credit service checks eligibility properly and prepares a claim that holds up.",
    covers: [
      "Automotive & battery innovation project checks",
      "Game development & software R&D assessments",
      "Qualifying expenditure & staff cost calculations",
      "Robust technical narrative compliant with HMRC",
      "Corporation Tax reduction or cash repayment claim",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    tag: "Self-Assessment & Dividends",
    description:
      "Rental income, dividends and capital gains each affect your personal tax position differently. Our personal tax and self assessment service handles the filing and explains how it all fits together.",
    covers: [
      "Self-Assessment tax return preparation & filing",
      "Dividend, rental & capital gains integration",
      "Clear explanation of calculation reasoning",
      "Payment on account scheduling & advice",
      "Direct representation with HMRC",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

const coventryClientProfiles = [
  {
    title: "Automotive & Battery Tech Contractors",
    badge: "IR35 & Engineering PSCs",
    description:
      "A meaningful portion of our Coventry clients are engineers and technical contractors tied to the automotive and battery technology supply chain, often looking for an accountant who actually understands how PSC contracting works in that sector, rather than generic freelance advice.",
    icon: Cpu,
    highlight: "Specialist understanding of automotive & engineering supply chains.",
  },
  {
    title: "Student Area & HMO Landlords",
    badge: "2 Universities & Student Lets",
    description:
      "We also work with landlords managing HMOs near Coventry University and the University of Warwick who wanted clearer guidance on licensing, allowable repairs, and Capital Gains Tax reporting before expanding a portfolio.",
    icon: Home,
    highlight: "Clear guidance on student HMO licensing, expenses & CGT.",
  },
  {
    title: "Game Studios & Creative Freelancers",
    badge: "Gaming Cluster & Software R&D",
    description:
      "A growing share comes from Coventry's creative and games development scene — a sector that's expanded significantly across the wider Coventry and Warwickshire cluster and doesn't always get the specialist tax and R&D attention it needs.",
    icon: Gamepad2,
    highlight: "Tax-efficient support & R&D relief for studios & digital creatives.",
  },
];

const faqs = [
  {
    q: "Do you have a physical office in Coventry?",
    a: "No, we work with Coventry clients entirely remotely, in the same way we do everywhere outside Bristol. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring travel on either side.",
  },
  {
    q: "I contract into the automotive or battery technology supply chain through my own limited company. Do you understand how this sector works?",
    a: "Yes, this is a common client profile for us given Coventry's automotive and advanced manufacturing base. We review your specific contract and working arrangements to assess your IR35 position properly, rather than applying a generic template.",
  },
  {
    q: "I run a small game development or creative studio in Coventry. Is R&D relief actually relevant to us?",
    a: "Often, yes. Software and game development work frequently qualifies for R&D tax relief, particularly where you're solving genuine technical problems rather than following an established process. Worth a specific conversation to check.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, this happens regularly. We contact your outgoing accountant, request your records and continue from wherever you currently stand, without disrupting any upcoming deadlines.",
  },
  {
    q: "Is your pricing different for Coventry clients compared to other locations?",
    a: "No. Every client gets the same fixed fee structure, based on what your specific situation actually requires, agreed before any work starts.",
  },
];

const AccountantsInCoventry: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "contractor" | "business" | "landlord" | "tax">("all");
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
    name: "Henleaze Tax Consultancy - Accountants in Coventry",
    url: "https://henleazetaxconsultancy.com/accountants-in-coventry",
    description:
      "Practical accountants in Coventry for contractors, landlords and small businesses. Fixed fees, clear advice, fast response. Free consultation.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.co.uk",
    areaServed: {
      "@type": "City",
      name: "Coventry",
    },
    serviceType: [
      "Contractor Accounting",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Accountants in Coventry | Practical Tax Support</title>
        <meta
          name="description"
          content="Practical accountants in Coventry for contractors, landlords and small businesses. Fixed fees, clear advice, fast response. Free consultation."
        />
        <meta name="keywords" content="accountants in coventry, accountant coventry, tax consultant coventry, small business accountant coventry, contractor accountant coventry, landlord accountant coventry" />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/accountants-in-coventry" />

        {/* OpenGraph */}
        <meta property="og:title" content="Accountants in Coventry | Practical Tax Support" />
        <meta
          property="og:description"
          content="Practical accountants in Coventry for contractors, landlords and small businesses. Fixed fees, clear advice, fast response. Free consultation."
        />
        <meta property="og:url" content="https://henleazetaxconsultancy.com/accountants-in-coventry" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accountants in Coventry | Practical Tax Support" />
        <meta
          name="twitter:description"
          content="Practical accountants in Coventry for contractors, landlords and small businesses. Fixed fees, clear advice, fast response. Free consultation."
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Layout>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy via-navy to-slate-900 text-white overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-gold text-sm font-semibold mb-6 shadow-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Coventry &amp; Warwickshire Coverage</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              </div>

              {/* H1 Heading */}
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Accountants in Coventry —{" "}
                <span className="text-gold block sm:inline">Practical Tax &amp; Business Accounting Advice</span>
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                Practical accountants in Coventry for contractors, landlords and small businesses. Fixed fees, clear advice, fast response, and proactive tax support.
              </p>

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
                  <span>Fast Response Time</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>Year-Round Advice</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>100% Cloud Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR LOGOS */}
        <TrustBar />

        {/* ── BASELINE VS VALUE / PHILOSOPHY SECTION ────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                  Our Approach
                </span>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 leading-snug">
                  Filing on Time is the Baseline, Not the Value
                </h2>

                <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
                  <p>
                    A good accountant tends to be judged on the wrong measure. People focus on whether the return got filed on time, when the more useful question is whether anyone actually looked closely enough at your situation to catch something before it became expensive. Filing on time is the baseline, not the value.
                  </p>
                  <p>
                    Henleaze Tax Consultancy works with contractors, landlords, sole traders and small businesses across Coventry. We're based in Bristol and in day to day terms that changes very little, since bookkeeping, tax returns, payroll and advice all run through cloud accounting, phone calls and email, in exactly the same way they would with a firm based around the ring road.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold">
                      ✓
                    </div>
                    <span>Direct access to qualified accountants whenever you need us</span>
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

        {/* ── COVENTRY'S ECONOMY SECTION ───────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-gold/30 to-blue-600/20 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/30">
                Local Economic Landscape
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Coventry's Economy Runs Deeper Than Its Automotive Reputation
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                Coventry's identity has been tied to car manufacturing for well over a century and that heritage remains genuinely significant, with Jaguar Land Rover's technical centre, the UK Battery Industrialisation Centre and a wider automotive and aerospace supply chain anchoring a large share of local employment. But the city has built real strength elsewhere too.
              </p>
              <p>
                Coventry's creative and digital sector now includes around 80 game development studios across the wider Coventry and Warwickshire area, one of the most concentrated gaming clusters in the country, alongside growing activity in software, design and immersive technology. The £700 million City Centre South redevelopment and the long running Friargate scheme are reshaping a significant stretch of the city centre and two universities keep the local rental market consistently active.
              </p>
              <p className="bg-white/5 border-l-4 border-gold p-6 rounded-r-2xl text-white font-medium">
                That spread shows up clearly in who we work with: engineers and contractors tied to automotive and battery technology projects, creative and digital freelancers working across the city's growing game development scene, landlords letting to a large student population and small business owners running everything from manufacturing firms to independent retail.
              </p>
            </div>

            {/* Economic Pillars Highlight Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all">
                <Cpu className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-display font-bold text-white text-lg mb-2">Automotive &amp; Battery Tech</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Jaguar Land Rover &amp; UK Battery Industrialisation Centre supply chains.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all">
                <Gamepad2 className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-display font-bold text-white text-lg mb-2">Gaming &amp; Creative Tech</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Over 80 studios in the Coventry &amp; Warwickshire gaming cluster.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all">
                <Home className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-display font-bold text-white text-lg mb-2">Student &amp; HMO Letting</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Active rental demand backed by Coventry University &amp; Warwick.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all">
                <Building2 className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-display font-bold text-white text-lg mb-2">City Centre &amp; Trades</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  £700m City Centre South and Friargate regeneration projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACCOUNTING & TAX SUPPORT FOR COVENTRY (SERVICES) ─────── */}
        <section
          id="services"
          className="py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-navy text-white relative overflow-hidden"
        >
          {/* Glow Effects */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                Tailored Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Accounting and Tax Support for Coventry Clients
              </h2>
              <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                Comprehensive, fixed-fee accounting and proactive tax advisory tailored to your exact industry.
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
                        {service.customBody ?? service.description}
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


        {/* ── WHERE OUR COVENTRY CLIENTS TEND TO COME FROM ─────────── */}
        <section className="py-20 bg-slate-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
                Client Demographics
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                Where Our Coventry Clients Tend to Come From
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Understanding the unique operational requirements of Coventry professionals and business owners.
              </p>
            </div>

            {/* Client Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {coventryClientProfiles.map((profile, index) => {
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

            {/* Summary Box */}
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Sound close to your situation?
                </h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Get in touch if any of that resonates. We'll give you a clear, honest assessment of what you need.
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

        {/* ── HOW OUR FEES WORK (TRANSPARENT PRICING) ───────────────── */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/15 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/30">
                Clear &amp; Transparent
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                How Our Fees Work
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Every quote is fixed and agreed before any work begins, whether you're based in Coventry, Bristol or elsewhere in the UK. There's no hourly billing and nothing changes because a query needed a longer conversation than expected.
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

        {/* ── FREQUENTLY ASKED QUESTIONS ───────────────────────────── */}
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

        {/* ── WE COVER COVENTRY AND NEARBY AREAS ────────────────────── */}
        <NearbyLocationsSection currentCity="Coventry" />

        {/* ── READY TO TALK IT THROUGH? (FINAL CALL TO ACTION) ─────── */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Talk It Through?
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              If you're looking for accountants in Coventry who understand your industry properly, rather than applying the same generic advice to everyone, get in touch. A first conversation is free and doesn't commit you to anything further.
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
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Free Initial Consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Fixed Fees Agreed Upfront</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> No Long-Term Contract Lock-in</span>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AccountantsInCoventry;
