import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
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
  Building,
  Award,
  Phone,
  Clock,
  MessageSquare,
  TrendingUp,
  FileCheck,
  ChevronRight,
  Compass,
  Zap,
  Check,
  SlidersHorizontal,
  Coins,
  Shield,
  Layers,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "all" | "contractor" | "business" | "landlord" | "tax";
  title: string;
  description: string;
  covers: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
  badge: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "contractor-accounting",
    category: "contractor",
    title: "Contractor Accounting",
    badge: "Tech, Creative & Engineering",
    description:
      "If you're contracting into Nottingham's tech, creative or engineering sectors, get your limited company set up properly through our contractor accounting service, which covers your IR35 position, bookkeeping, VAT, payroll and year end filing in one place.",
    covers: [
      "IR35 position & review",
      "Limited company setup & admin",
      "Cloud bookkeeping integration",
      "VAT management & filings",
      "Payroll & director salary",
      "Year-end statutory accounts",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    badge: "Day-to-Day Financial Control",
    description:
      "For small business owners across the city, our small business accounting service keeps your books current, manages VAT and payroll, and prepares accounts that actually reflect what's happening day to day, rather than a rough reconstruction pulled together at year end.",
    covers: [
      "Real-time bookkeeping",
      "VAT returns & MTD compliance",
      "Payroll administration",
      "Year-end accounts preparation",
      "Management financial reports",
      "Ongoing proactive advice",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    badge: "HMO & Student Let Specialist",
    description:
      "Given how many landlords in Nottingham are managing HMOs or purpose built student accommodation, our landlord accounting service is built around exactly that. It covers rental income reporting, allowable expenses and Capital Gains Tax planning, whether you hold one property or several.",
    covers: [
      "Rental income & expenditure reporting",
      "HMO & student let expense claims",
      "Capital Gains Tax (CGT) planning",
      "Self-Assessment return filing",
      "Property portfolio tax structure",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-hr",
    category: "business",
    title: "Payroll and HR Support",
    badge: "Accurate & On Time Every Cycle",
    description:
      "Payroll mistakes tend to get noticed fast by the people they affect. Our payroll and HR support handles PAYE, pension auto enrolment and HMRC submissions accurately and on time, every cycle.",
    covers: [
      "Complete PAYE management",
      "Workplace pension auto-enrolment",
      "Real-Time Information (RTI) HMRC returns",
      "Digital payslips & P60 issuance",
      "HR administrative assistance",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    badge: "Year-Round Proactive Advice",
    description:
      "Most overpaid tax comes down to timing rather than mistakes. Our tax planning service works with clients throughout the year, so decisions get made early enough to actually matter, not scrambled together the following January.",
    covers: [
      "Corporation & personal tax strategy",
      "Dividend timing & profit extraction",
      "Capital Gains Tax optimisation",
      "Director remuneration structure",
      "Forward-looking tax reviews",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    badge: "Complete Finance Function",
    description:
      "If you're not quite ready to bring finance in house, our outsourced accounting service effectively becomes your finance function, covering bookkeeping, reporting, payroll and cash flow monitoring without the cost of a salaried hire.",
    covers: [
      "End-to-end cloud bookkeeping",
      "Monthly management reporting",
      "Payroll & VAT execution",
      "Cash flow monitoring & forecasts",
      "Dedicated finance controller liaison",
    ],
    ctaText: "Learn About Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: Laptop,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    badge: "MTD Compliant & Tidy",
    description:
      "Clean records make everything else easier. Our VAT and bookkeeping service keeps this side of things tidy, from VAT filing to Making Tax Digital compliance.",
    covers: [
      "Making Tax Digital (MTD) VAT filing",
      "Digital receipt & invoice logging",
      "Monthly bank reconciliations",
      "VAT scheme evaluation & advice",
    ],
    ctaText: "View VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "company-secretarial",
    category: "business",
    title: "Company Secretarial Services",
    badge: "Companies House Compliance",
    description:
      "Companies House deadlines are easy to lose track of precisely because they don't come around often. Our company secretarial service tracks confirmation statements, filings and any changes to directors or shareholders.",
    covers: [
      "Company incorporations & updates",
      "Annual Confirmation Statement filings",
      "Director & shareholder filings",
      "Statutory register maintenance",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-credit-claims",
    category: "tax",
    title: "R&D Tax Credit Claims",
    badge: "Manufacturing, Tech & Life Sciences",
    description:
      "Nottingham's manufacturing, engineering and life sciences base means genuine research and development activity is more common than a lot of business owners realise. Our R&D tax credit service assesses whether your work qualifies and builds the claim properly.",
    covers: [
      "Qualifying R&D eligibility review",
      "Technical narrative preparation",
      "Qualifying cost calculations",
      "Direct HMRC claim submission",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax-self-assessment",
    category: "tax",
    title: "Personal Tax and Self Assessment",
    badge: "Connected Income Tax Advice",
    description:
      "Dividends, rental income and capital gains rarely sit in isolation from each other. Our personal tax and self assessment service handles the filing and explains how everything connects, rather than handing you a number with no context.",
    covers: [
      "Personal tax return filing",
      "Dividend, rental & CGT alignment",
      "HMRC tax code reviews",
      "Plain-English liability breakdown",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: ShieldCheck,
  },
];

const clientProfiles = [
  {
    title: "Student Let & HMO Landlords",
    description:
      "Landlords with student lets or HMOs, who'd rather understand the reporting rules properly upfront than find out they got something wrong after the fact.",
    icon: Home,
    tag: "Student Accommodation",
    accent: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
  },
  {
    title: "Creative & Digital Contractors",
    description:
      "Contractors in Nottingham's creative and digital sector, who wanted an accountant that actually understood how their industry works, not just generic tax advice applied to any freelancer.",
    icon: Laptop,
    tag: "Lace Market & Tech",
    accent: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
  },
  {
    title: "Growing Small Businesses",
    description:
      "Small business owners who'd outgrown spreadsheets, and reached the point where guessing at the numbers wasn't good enough anymore.",
    icon: Building2,
    tag: "Post-Spreadsheet Scale",
    accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
  },
  {
    title: "Independent Sole Traders",
    description:
      "Sole traders juggling deadlines alone, looking for someone to take that mental load off rather than reminding themselves every quarter.",
    icon: UserCheck,
    tag: "Stress-Free Filing",
    accent: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
  },
  {
    title: "Engineering & Manufacturing Contractors",
    description:
      "Engineering and manufacturing contractors, drawn to the city by projects around Sherwood Business Park and the wider East Midlands industrial base.",
    icon: Briefcase,
    tag: "East Midlands Industry",
    accent: "from-amber-600/20 to-yellow-500/10 border-amber-600/30",
  },
];

const faqs = [
  {
    q: "Do you have a physical office in Nottingham?",
    a: "No. We work with Nottingham clients entirely remotely, in the same way we do everywhere outside Bristol. Video calls, phone, email and cloud accounting cover what an in person meeting would, without the need to schedule around travel.",
  },
  {
    q: "I let a property to students near one of the universities. Does that change how I should report income?",
    a: "Often, yes. Student lets and HMOs can involve different expense treatment and reporting requirements compared to a standard residential tenancy. It's worth a proper conversation rather than assuming general buy to let rules apply without checking.",
  },
  {
    q: "Can I switch accountants partway through my current tax year?",
    a: "Yes, and it happens regularly. We contact your outgoing accountant, request your records, and continue from wherever you currently stand, without disrupting your filing deadlines.",
  },
  {
    q: "Do you understand creative and digital businesses, given how much of that sector is based in Nottingham?",
    a: "We do, and it's actually one of the areas where R&D tax relief comes up most often, particularly for businesses developing new products, software or processes.",
  },
  {
    q: "Is pricing any different for clients based in Nottingham?",
    a: "No. Every client gets the same fixed fee approach, based on what their specific situation actually needs, agreed before any work starts.",
  },
];

const AccountantInNottingham: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "contractor" | "business" | "landlord" | "tax"
  >("all");

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
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Henleaze Tax Consultancy - Nottingham Accounting Services",
    url: "https://henleazetaxconsultancy.com/accountant-in-nottingham",
    logo: "https://henleazetaxconsultancy.com/logo.jpg",
    description:
      "Reliable accounting and tax planning for contractors, landlords and small businesses in Nottingham. Fixed fees, remote support. Free consultation.",
    priceRange: "££",
    areaServed: {
      "@type": "City",
      name: "Nottingham",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Nottinghamshire",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+447949956279",
      contactType: "customer service",
      availableLanguage: "en",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>Accountant in Nottingham | Fixed Fees, Clear Advice</title>
        <meta
          name="description"
          content="Reliable accounting and tax planning for contractors, landlords and small businesses in Nottingham. Fixed fees, remote support. Free consultation."
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountant-in-nottingham"
        />
        <meta
          property="og:title"
          content="Accountant in Nottingham | Fixed Fees, Clear Advice"
        />
        <meta
          property="og:description"
          content="Reliable accounting and tax planning for contractors, landlords and small businesses in Nottingham. Fixed fees, remote support. Free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountant-in-nottingham"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="accountant in nottingham, contractor accountant nottingham, landlord accountant nottingham, small business accounting nottingham, tax planning nottingham"
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-blue-600/40 via-indigo-600/20 to-gold/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gold/10 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs sm:text-sm font-semibold mb-6 shadow-md animate-fade-in">
              <MapPin className="h-4 w-4 text-gold animate-bounce" />
              <span>Serving Nottingham &amp; Nottinghamshire</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Accountant in Nottingham {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-gold">
                Reliable Tax Planning &amp; Bookkeeping
              </span>
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
              <p>
                A lot of people don't actually know if their accountant is any
                good until something goes wrong. The returns get filed, the fees
                get paid and everything seems fine, right up until an expense gets
                missed or an IR35 review lands with no warning. By then it's too
                late to ask for better advice.
              </p>
              <p>
                Henleaze Tax Consultancy works with contractors, landlords, sole
                traders and small businesses across Nottingham. We're based in
                Bristol and in practice that's rarely mattered to anyone we work
                with. Everything runs through cloud accounting, phone calls and
                email, which covers pretty much everything an in person meeting
                would, minus the travel.
              </p>
            </div>

            {/* Quick Benefits Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span>Fixed Transparent Fees</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span>Remote &amp; Cloud Accounting</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span>Free Initial Consultation</span>
              </div>
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
                className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300"
              >
                Explore Nottingham Services
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* WHAT MAKES NOTTINGHAM DIFFERENT */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="h-3.5 w-3.5" />
              <span>Local Economic Insight</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              What Makes Nottingham Different From Most Cities We Work With
            </h2>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                Nottingham has a genuinely mixed economy and that shapes the kind of
                clients we work with here. The city's Creative Quarter has become a
                real hub for digital agencies, gaming studios and design firms.
                There's a long manufacturing and engineering heritage that still
                supports a solid contractor base. Professional services, healthcare
                and life sciences all have a strong presence too, alongside two major
                universities that keep the rental market unusually active.
              </p>
              <p>
                That mix means the questions we get asked vary a lot. A contractor
                working for a creative studio near the Lace Market has different
                priorities to someone landing engineering contracts through Sherwood
                Business Park and a landlord letting to students near the University
                of Nottingham has different concerns again to one with a family let
                out toward West Bridgford. We treat those as genuinely different
                conversations.
              </p>
            </div>

            {/* Visual Hub Grid for Nottingham Sectors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1">
                <div className="h-10 w-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Laptop className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Lace Market &amp; Creative Quarter
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Digital agencies, gaming studios &amp; design firms with specific
                  R&amp;D credit opportunities and IR35 clarity needs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1">
                <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Sherwood Business Park &amp; Engineering
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Manufacturing, life sciences &amp; engineering contractors requiring
                  tax-efficient limited company setups.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Home className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Univ. of Nottingham &amp; West Bridgford
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Active HMO student lets &amp; residential portfolio landlords requiring
                  careful expense &amp; CGT planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP NOTTINGHAM CLIENTS (SERVICES) */}
      <section id="services" className="py-24 bg-slate-950 text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
              <Zap className="h-3.5 w-3.5" />
              <span>Tailored Accounting Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              How We Help Nottingham Clients
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Comprehensive fixed-fee services designed specifically around your
              sector and business needs.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Services (10)" },
                { id: "contractor", label: "Contractors" },
                { id: "business", label: "Small Business & HR" },
                { id: "landlord", label: "Landlords" },
                { id: "tax", label: "Tax & R&D" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${activeCategory === tab.id
                      ? "bg-gold text-navy shadow-md shadow-gold/20"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-navy/60 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300 shrink-0">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gold/80 tracking-wide uppercase">
                            0{index + 1}. {service.badge}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Covers list */}
                    <div className="mb-6 pt-4 border-t border-white/10">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        What's Included:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.covers.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300"
                          >
                            <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA link */}
                  <div className="pt-4 border-t border-white/5">
                    <Link
                      to={service.ctaLink}
                      className="inline-flex items-center text-sm font-bold text-gold hover:text-gold-light group/link transition-colors"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Callout Box */}
          <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-r from-navy via-slate-900 to-navy border border-gold/30 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider">
                  <Coins className="h-4 w-4" />
                  <span>Fixed Fee Promise</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Transparent Pricing Without Hidden Surprises
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                  Every service above runs on a fixed fee. If you want a rough idea of what you might owe before speaking to us, try our tax calculator, or check typical costs on our pricing page.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button
                  asChild
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-navy font-bold rounded-full text-sm px-6"
                >
                  <Link to="/calculator">Tax Calculator</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full text-sm px-6 shadow-md"
                >
                  <Link to="/pricing">Pricing Page</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PEOPLE WHO TEND TO REACH OUT */}
      <section className="py-24 bg-navy text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
              <Users className="h-3.5 w-3.5" />
              <span>Nottingham Client Profiles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              The People Who Tend to Reach Out
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Nottingham's client base is more varied than most cities we work with,
              largely down to how mixed the local economy is. A few patterns come up
              often enough to be worth mentioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {clientProfiles.map((profile, idx) => {
              const Icon = profile.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-slate-900/80 border ${profile.accent} backdrop-blur-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white/10 text-gold">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {profile.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3">
                      {profile.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {profile.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-gold hover:text-gold-light inline-flex items-center group"
                    >
                      <span>Discuss Your Position</span>
                      <ChevronRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Custom CTA Card within Grid */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gold/20 via-navy to-slate-900 border border-gold/40 flex flex-col justify-between shadow-xl">
              <div>
                <div className="p-3 rounded-xl bg-gold text-navy w-fit mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Sound Like Your Situation?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Get in touch and we can talk through where you currently stand. No sales pressure, just practical advice tailored to Nottingham.
                </p>
              </div>

              <Button
                asChild
                className="w-full bg-gold hover:bg-gold-light text-navy font-bold rounded-full py-5 text-sm"
              >
                <Link to="/contact">Get In Touch Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOTTINGHAM'S RENTAL MARKET TAKES A BIT MORE CARE */}
      <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-navy via-slate-900 to-slate-950 border border-gold/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-gold pointer-events-none">
              <Home className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 me-auto py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Shield className="h-3.5 w-3.5" />
                <span>Specialist Landlord Focus</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Why Nottingham's Rental Market Takes a Bit More Care
              </h2>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                <p>
                  Nottingham has one of the more active and consistent student
                  rental markets in the country, with gross yields on student
                  accommodation commonly sitting between five and eight percent.
                </p>
                <p>
                  That's a real advantage if you're a landlord, but it also means
                  HMO conversions, licensing rules and shifting expense treatment
                  come up more often here than in a typical residential letting
                  market. Getting the reporting right from the start avoids a much
                  bigger correction later on.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-gold font-extrabold text-2xl block mb-1">
                    5% – 8%
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Typical gross yields on Nottingham student lets
                  </span>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-gold font-extrabold text-2xl block mb-1">
                    HMO Rules
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Specific licensing &amp; allowable expense claims
                  </span>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <span className="text-gold font-extrabold text-2xl block mb-1">
                    CGT Planning
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Proactive tax structuring prior to property exits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-navy text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Clear Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Questions We Get Asked by Nottingham Clients
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Straightforward answers to the most common queries from local business owners, contractors, and landlords.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? "bg-slate-900 border-gold/50 shadow-lg"
                      : "bg-slate-900/50 border-white/10 hover:border-white/20"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-gold transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-gold text-navy" : "bg-white/10 text-slate-300"
                        }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gold/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a Conversation Before You Decide Anything
            </h2>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              You don't need to have your accounts in order, your questions
              perfectly framed, or even a firm decision to switch. A short call
              is usually enough to work out whether we're the right fit for what
              you actually need in Nottingham, and it costs nothing to find out
              either way.
            </p>

            <div className="pt-6">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" />
                <span>No Commitment Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                <span>15-Min Initial Call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span>Fixed Pricing Quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AccountantInNottingham;
