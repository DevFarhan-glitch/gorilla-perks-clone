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
  Phone,
  ChevronRight,
  Zap,
  TrendingUp,
  Check,
  GraduationCap,
  Wind,
  Building,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

/* ─── SERVICE DATA ─────────────────────────────────────────── */

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
}

const servicesData: ServiceItem[] = [
  {
    id: "contractor-accounting",
    category: "contractor",
    title: "Contractor Accounting",
    tag: "IR35 & Tech/Engineering",
    description:
      "Newcastle's tech and engineering contractor market has grown steadily, particularly around public sector and offshore wind supply chain work. Getting your contractor accounting sorted properly from the start — IR35 position, limited company structure, dividend planning — tends to save far more than it costs.",
    covers: [
      "IR35 position assessments",
      "Tax-efficient limited company setup",
      "Ongoing cloud bookkeeping",
      "VAT & year-end statutory filings",
      "Director payroll & dividend timing",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    category: "business",
    title: "Small Business Accounting",
    tag: "Grainger Quarter to Gosforth",
    description:
      "Whether you're running a business from the Grainger Quarter or out toward Gosforth, our small business accounting service keeps your bookkeeping, VAT and payroll current, so your numbers are accurate whenever you actually need to look at them.",
    covers: [
      "Accurate day-to-day bookkeeping",
      "VAT management & filings",
      "Payroll & employee administration",
      "Annual accounts preparation",
      "Numbers ready when you need them",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-accounting",
    category: "landlord",
    title: "Landlord Accounting",
    tag: "HMO & Student Let Specialist",
    description:
      "Newcastle has an unusually large student rental market, and areas like Jesmond, Sandyford, Heaton and Fenham see some of the highest concentrations of HMO landlords in the city. Our landlord accounting service covers rental income reporting, allowable expenses, HMO considerations and Capital Gains Tax planning for portfolios of any size.",
    covers: [
      "HMO & buy-to-let tax reporting",
      "Allowable expense maximisation",
      "Proactive Capital Gains Tax (CGT) advice",
      "Self-Assessment tax returns",
      "Multi-property portfolio guidance",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-support",
    category: "business",
    title: "Payroll & HR Support",
    tag: "PAYE & Auto-Enrolment",
    description:
      "A missed payroll run or an incorrect PAYE submission causes disproportionate stress for something so avoidable. Our payroll and HR support keeps this accurate and on schedule, every cycle, without you needing to think about it.",
    covers: [
      "Timely & accurate PAYE processing",
      "Workplace pension auto-enrolment",
      "Real-Time Information (RTI) HMRC filings",
      "Payslips & end-of-year P60s",
      "Hassle-free payroll every cycle",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    tag: "Strategic Timing & Advice",
    description:
      "The tax people overpay most often isn't down to errors — it's down to decisions made too late to change anything. Our tax planning service works with you across the year, not just in the weeks before a deadline.",
    covers: [
      "Strategic tax timing reviews",
      "Dividend & salary optimisation",
      "Corporation & personal tax strategy",
      "Capital gains & exit planning",
      "Forward-looking consultations year-round",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    category: "business",
    title: "Outsourced Accounting",
    tag: "Finance Team Without the Hire",
    description:
      "For growing Newcastle businesses that aren't ready to hire a finance team, our outsourced accounting service takes on bookkeeping, reporting, payroll and cash flow monitoring — without the cost or commitment of bringing someone on permanently.",
    covers: [
      "Full bookkeeping & bank reconciliations",
      "Management reporting & cash flow",
      "Payroll processing",
      "Month-end & year-end preparation",
      "Scalable support as you grow",
    ],
    ctaText: "View Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: Building,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Clean Digital Records",
    description:
      "Accurate records underpin almost everything else — from a smooth VAT return to a straightforward funding application. Our VAT and bookkeeping service keeps this tidy year round.",
    covers: [
      "Making Tax Digital (MTD) VAT returns",
      "Digital cloud bookkeeping",
      "Bank reconciliations",
      "Clean records for mortgage/lender proof",
      "Stress-free deadline management",
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
      "Confirmation statements and Companies House filings are easy to lose track of exactly because they're infrequent. Our company secretarial service tracks these dates so nothing gets missed.",
    covers: [
      "Annual Confirmation Statement filings",
      "Director & shareholder change updates",
      "Registered office support",
      "Companies House deadline tracking",
      "Statutory registers maintenance",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-tax-relief",
    category: "tax",
    title: "R&D Tax Credit Claims",
    tag: "Offshore Wind, Digital & Manufacturing",
    description:
      "Between the offshore wind sector, digital businesses at Newcastle Helix and the region's manufacturing base, genuine research and development activity is more common in Newcastle than many business owners assume. Our R&D tax credit service checks eligibility properly and builds a claim that holds up.",
    covers: [
      "Offshore wind & engineering R&D checks",
      "Digital & life sciences spend assessment",
      "HMRC-compliant R&D claim preparation",
      "Corporation tax reduction / cash credits",
      "Expert claim documentation",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkles,
  },
  {
    id: "personal-tax",
    category: "tax",
    title: "Personal Tax & Self Assessment",
    tag: "Self-Assessment & Context",
    description:
      "Rental income, dividends and capital gains each interact with your personal tax position differently. Our personal tax and self assessment service handles the filing and actually explains the reasoning behind it.",
    covers: [
      "Self-Assessment tax return filing",
      "Dividend, rental & gain interaction",
      "Clear explanation of calculation reasoning",
      "HMRC liaison & tax position reviews",
      "No mystery numbers or unexpected bills",
    ],
    ctaText: "View Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

/* ─── CLIENT STORIES ───────────────────────────────────────── */

const newcastleClientStories = [
  {
    title: "HMO Landlords in Jesmond & Heaton",
    badge: "Student Lets & Licensing",
    description:
      "A meaningful share of our Newcastle clients are landlords managing HMOs in areas like Jesmond and Heaton, who wanted a clearer understanding of licensing and reporting requirements before committing to a purchase or expanding a portfolio.",
    icon: Home,
    highlight: "Tailored HMO expense claiming & CGT foresight.",
  },
  {
    title: "Offshore Wind & Public Sector Contractors",
    badge: "IR35 & Supply Chain",
    description:
      "Others are contractors tied to the region's offshore wind and public sector supply chains, who needed proper IR35 guidance rather than a generic template.",
    icon: Laptop,
    highlight: "Year-round IR35 support, not annual guesswork.",
  },
  {
    title: "Growing Small Businesses",
    badge: "Professional Services & Retail",
    description:
      "A good number are also small business owners across professional services and retail who simply wanted their books handled properly without the cost of hiring in-house.",
    icon: Building2,
    highlight: "Clear, current books without chasing for answers.",
  },
];

/* ─── FAQ DATA ─────────────────────────────────────────────── */

const faqs = [
  {
    q: "Do you have an office anywhere in Newcastle?",
    a: "No, we work with all our Newcastle clients remotely — the same way we do across the rest of the UK. Video calls, phone, email and cloud accounting cover what an office visit would, without requiring anyone to travel.",
  },
  {
    q: "I own an HMO in Jesmond or Heaton. Do you handle licensing considerations alongside accounting?",
    a: "We focus on the accounting and tax side of HMO ownership — rental income reporting, allowable expenses and how licensing costs and requirements affect your figures. We're happy to work alongside your existing licensing or letting agent contacts where relevant.",
  },
  {
    q: "Can you help with IR35 for contractors working in the offshore wind or public sector supply chain?",
    a: "Yes, this is a common area for our Newcastle contractor clients. We review your contract and working arrangements to help determine your IR35 status properly, rather than applying a blanket assumption.",
  },
  {
    q: "What happens if I want to switch accountants partway through my tax year?",
    a: "We handle the transition directly with your outgoing accountant, request your records, and pick things up from wherever you currently stand — without disrupting any upcoming deadlines.",
  },
  {
    q: "Is your pricing different for clients in Newcastle compared to other parts of the country?",
    a: "No. Every client gets the same fixed fee structure, based on what your situation actually requires, agreed before any work begins.",
  },
];

/* ─── NEWCASTLE AREA BADGES ────────────────────────────────── */

const newcastleAreas = [
  "Jesmond",
  "Heaton",
  "Gosforth",
  "Sandyford",
  "Fenham",
  "Grainger Quarter",
  "Newcastle Helix",
  "Tyne Riverside",
];

/* ─── COMPONENT ────────────────────────────────────────────── */

const AccountantsInNewcastle: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Newcastle",
    url: "https://henleazetaxconsultancy.com/accountants-in-newcastle",
    logo: "https://henleazetaxconsultancy.com/logo.jpg",
    description:
      "Fixed-fee accountants in Newcastle for contractors, landlords and SMEs. Clear advice, fast response times, no hidden costs. Free consultation.",
    priceRange: "££",
    areaServed: {
      "@type": "City",
      name: "Newcastle upon Tyne",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Tyne and Wear",
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
        <title>Accountants in Newcastle | Fixed-Fee Tax Specialists</title>
        <meta
          name="description"
          content="Fixed-fee accountants in Newcastle for contractors, landlords and SMEs. Clear advice, fast response times, no hidden costs. Free consultation."
        />
        <meta
          name="keywords"
          content="accountants in newcastle, accountant newcastle, contractor accountant newcastle, landlord tax newcastle, small business accountant newcastle, HMO accountant newcastle"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-newcastle"
        />
        <meta
          property="og:title"
          content="Accountants in Newcastle | Fixed-Fee Tax Specialists"
        />
        <meta
          property="og:description"
          content="Fixed-fee accountants in Newcastle for contractors, landlords and SMEs. Clear advice, fast response times, no hidden costs. Free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-newcastle"
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
              <span>Serving Newcastle &amp; Tyne and Wear</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Accountants in Newcastle{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-200 to-white">
                Contractor, SME &amp; Landlord Tax Specialists
              </span>
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
              <p>
                Plenty of business owners only think about their accountant twice a year: once when the bill arrives and once when the tax return needs signing. The rest of the time, whether the advice was actually any good barely gets tested. It usually takes a missed deadline or an unexpected HMRC letter before anyone stops to ask if they're getting proper value.
              </p>
              <p>
                Henleaze Tax Consultancy works with contractors, landlords, sole traders and small businesses across Newcastle. We're a Bristol based firm, though our Newcastle clients rarely think of that as relevant once they're actually working with us. Bookkeeping, filing, payroll and advice all run through cloud accounting, phone calls and email — and the response times don't change depending on which end of the country you're in.
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

            {/* Newcastle Area Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-2">
                Supporting clients in:
              </span>
              {newcastleAreas.map((area, idx) => (
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

      {/* ═══════════════════ NEWCASTLE'S ECONOMY ═══════════════════ */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Local Insight
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Newcastle's Economy is More Layered Than Most People Assume
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed relative z-10">
              <p>
                Newcastle carries a reputation built partly on its industrial past — and that heritage is still visible along the Tyne, where shipbuilding sites have gradually shifted toward offshore wind manufacturing and light industrial use. But that's only part of the picture now. Newcastle Helix has become a genuine hub for life sciences and digital businesses, professional and technical services make up one of the city's largest employment sectors, and two universities — Newcastle University and Northumbria — support one of the busiest student rental markets in the North East.
              </p>
              <p>
                That combination means our Newcastle clients cover a wide spread: contractors working through the region's tech sector, engineers picking up work tied to the offshore wind supply chain, landlords with HMOs in Jesmond or Heaton and small business owners running everything from independent shops to professional practices. Each of those situations needs slightly different advice, so we don't try to give the same answer to all of them.
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

          {/* 3 Core Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <Wind className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                Offshore Wind &amp; Tech Sector Expertise
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Newcastle's energy and digital sectors create specific contractor and R&D situations. We understand the supply chain and IR35 dynamics that come with them.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                Student Landlord Specialists
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Two large universities mean one of the UK's busiest student rental markets. HMO licensing, expense treatment and MTD compliance all need getting right from the outset.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                Fixed Fees, No Surprises
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every quote is agreed before work starts. No hourly billing, and nothing changes because a query took a longer conversation than expected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES FOR NEWCASTLE CLIENTS ════════════ */}
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
              Accounting and Tax Support for Newcastle Clients
            </h2>
            <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              Every service is delivered on a fixed-fee basis. Clear upfront pricing with zero hidden surprises.
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
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

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

          {/* View All Services + Pricing Banner */}
          <div className="mt-16 text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <p className="text-slate-200 text-sm sm:text-base">
              Every service above is fixed-fee. You can see indicative pricing on our{" "}
              <Link
                to="/pricing"
                className="text-gold font-bold underline hover:text-gold-light transition-colors"
              >
                pricing page
              </Link>{" "}
              before you even get in touch, or{" "}
              <Link
                to="/services"
                className="text-gold font-bold underline hover:text-gold-light transition-colors"
              >
                view all services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ════════════ A CLOSER LOOK: STUDENT LANDLORD MARKET ══════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-gold/5 via-blue-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Newcastle Landlords
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              A Closer Look at Newcastle's Student Landlord Market
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed relative z-10">
                <p>
                  With two large universities and a growing international student population, Newcastle's rental market leans more heavily on HMOs than most comparable UK cities. That brings genuine advantages in terms of demand, but it also means licensing requirements, joint ownership arrangements and expense treatment can get complicated quickly — particularly for landlords managing several properties at once or navigating changes under Making Tax Digital for landlords.
                </p>
                <p>
                  Getting this right from the outset avoids a far more time-consuming correction later.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-navy shrink-0">
                    <GraduationCap className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base">
                      HMO portfolio? Get a quick estimate
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Use our tax calculator to see a starting figure for your rental income.
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-gold hover:bg-gold-light text-navy font-bold rounded-xl shrink-0 shadow-md hover:scale-105 transition-all duration-300"
                >
                  <Link to="/calculator">
                    Get a Quick Estimate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHERE OUR NEWCASTLE CLIENTS COME FROM ═════════ */}
      <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Real Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Where Our Newcastle Clients Tend to Come From
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              Get in touch if any of this sounds familiar, and we can talk through your specific situation.
            </p>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {newcastleClientStories.map((story, idx) => {
              const StoryIcon = story.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-gold/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <StoryIcon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                        {story.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {story.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {story.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 text-xs font-semibold text-gold flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-gold" />
                    <span>{story.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing CTA */}
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
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
              size="lg"
              variant="outline"
              className="border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 hover:border-gold/60"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT YOU'LL BE CHARGED, EXPLAINED SIMPLY ═════════ */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Transparent Pricing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              What You'll Be Charged, Explained Simply
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed relative z-10 mb-6">
              Every quote is fixed and agreed before we start any work, whether you're based in Newcastle, Bristol or anywhere else in the country. There's no hourly billing, and nothing changes because a query took a longer conversation than expected.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-navy hover:bg-navy-light text-white font-bold text-base px-10 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link to="/pricing">
                See Our Pricing
                <ArrowRight className="ml-2 h-5 w-5 text-gold" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════════════ FAQ SECTION ══════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Frequently Asked Questions From Newcastle Clients
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

      {/* ════════════════ WE COVER NEWCASTLE AND NEARBY AREAS ═══════════════════════ */}
      <NearbyLocationsSection currentCity="Newcastle" />

      {/* ════════════════ FINAL CTA SECTION ═══════════════════════ */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Speak to Someone Who'll Actually Explain It
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            If you're looking for accountants in Newcastle who take the time to explain their reasoning rather than just handing you a number, get in touch. A first conversation is free and doesn't commit you to anything.
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

export default AccountantsInNewcastle;
