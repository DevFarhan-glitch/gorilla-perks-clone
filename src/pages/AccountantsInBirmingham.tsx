import React, { useState, useEffect } from "react";
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
  Sparkle,
  ChevronRight
} from "lucide-react";

import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  birminghamNote?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
  {
    id: "contractor-accounting",
    title: "Contractor Accounting",
    description:
      "Contractors have unique accounting responsibilities, and staying on top of them can quickly become time-consuming. We provide practical support that keeps your finances organised and ensures your business meets its tax obligations while allowing you to focus on your contracts.",
    birminghamNote:
      "We provide practical support that keeps your finances organised and ensures your business meets its tax obligations — whether you're contracting into Birmingham's construction and engineering projects or working remotely for clients further afield.",
    features: [
      "IR35 guidance & compliance",
      "Bookkeeping & cloud accounting",
      "VAT returns",
      "Payroll & director salary",
      "Year-end accounts",
      "Corporation tax",
      "Self-assessment tax returns",
    ],
    ctaText: "Explore Contractor Accounting",
    ctaLink: "/services/contractor-accountants",
    icon: Briefcase,
  },
  {
    id: "small-business-accounting",
    title: "Small Business Accounting",
    description:
      "Running a business means keeping track of far more than income and expenses. We help small businesses manage their finances efficiently, providing ongoing support that allows business owners to spend more time growing their company.",
    features: [
      "Bookkeeping",
      "Annual accounts",
      "VAT returns",
      "Payroll services",
      "Management accounts",
      "Corporation tax",
      "Business advice",
    ],
    ctaText: "Discover Small Business Support",
    ctaLink: "/services/small-business-accountants",
    icon: Building2,
  },
  {
    id: "landlord-services",
    title: "Landlord Services",
    description:
      "Managing rental property comes with important tax responsibilities. We help landlords keep accurate records, meet reporting requirements and make informed decisions that support their property investments.",
    birminghamNote:
      "We help Birmingham landlords keep accurate records, meet reporting requirements, and make informed decisions that support their property investments — whether that's a single buy-to-let or a growing portfolio.",
    features: [
      "Rental income reporting",
      "Self-assessment tax returns",
      "Capital Gains Tax guidance",
      "Property portfolio support",
      "Allowable expense advice",
      "Tax planning",
      "Financial reporting",
    ],
    ctaText: "View Landlord Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "payroll-hr",
    title: "Payroll & HR",
    description:
      "Accurate payroll is essential for both employers and employees. We manage payroll efficiently while helping businesses stay compliant with HMRC requirements and workplace obligations.",
    features: [
      "Payroll processing",
      "PAYE management",
      "Workplace pensions",
      "HMRC submissions",
      "Employee payroll support",
      "Payroll reporting",
      "HR administration support",
    ],
    ctaText: "See Payroll & HR Services",
    ctaLink: "/services/payroll-and-hr-services",
    icon: Users,
  },
  {
    id: "tax-planning",
    title: "Tax Planning",
    description:
      "Good tax planning helps you make informed financial decisions throughout the year, not just at tax return time. We provide practical advice to help reduce unnecessary tax liabilities while keeping you fully compliant.",
    features: [
      "Corporation tax planning",
      "Personal tax planning",
      "Dividend planning",
      "Capital Gains Tax advice",
      "Business structure guidance",
      "Profit extraction strategies",
      "Year-round tax advice",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "outsourced-accounting",
    title: "Outsourced Accounting",
    description:
      "Many growing businesses benefit from professional accounting support without the cost of employing an in-house finance team. Our outsourced accounting service provides reliable financial management whenever you need it.",
    features: [
      "Day-to-day bookkeeping",
      "Financial reporting",
      "Payroll management",
      "VAT returns",
      "Management accounts",
      "Cash flow support",
      "Ongoing financial advice",
    ],
    ctaText: "Learn About Outsourced Accounting",
    ctaLink: "/services/outsourced-accounting-services",
    icon: Building,
  },
  {
    id: "vat-bookkeeping",
    title: "VAT & Bookkeeping",
    description:
      "Well-maintained financial records make running a business much easier. We help businesses keep accurate accounts, prepare VAT returns and stay organised throughout the financial year.",
    features: [
      "Bookkeeping",
      "VAT registration",
      "VAT returns",
      "Digital record keeping",
      "Bank reconciliations",
      "Financial record management",
      "HMRC compliance support",
    ],
    ctaText: "View VAT & Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Receipt,
  },
  {
    id: "company-secretarial",
    title: "Company Secretarial",
    description:
      "Meeting your legal responsibilities as a company involves more than filing annual accounts. We help businesses stay compliant with Companies House requirements and keep important company records up to date.",
    features: [
      "Company formation",
      "Confirmation statements",
      "Companies House filings",
      "Statutory registers",
      "Director changes",
      "Shareholder updates",
      "Compliance support",
    ],
    ctaText: "Explore Company Secretarial",
    ctaLink: "/services/company-secretarial-services",
    icon: FileText,
  },
  {
    id: "rd-claims",
    title: "R&D Claims",
    description:
      "Businesses investing in innovation may be entitled to valuable tax relief. We help identify qualifying activities and prepare accurate claims, giving you the best opportunity to maximise available relief.",
    features: [
      "Eligibility assessments",
      "Claim preparation",
      "Supporting documentation",
      "HMRC guidance",
      "Technical collaboration",
      "Tax relief calculations",
      "Ongoing advice",
    ],
    ctaText: "Find Out About R&D Claims",
    ctaLink: "/services/rd-tax-credit-claim",
    icon: Sparkle,
  },
  {
    id: "personal-tax",
    title: "Personal Tax",
    description:
      "Managing your personal tax affairs doesn't need to be complicated. We provide straightforward advice and practical support, helping individuals meet their tax obligations while planning their finances more effectively.",
    features: [
      "Self-assessment tax returns",
      "Capital Gains Tax",
      "Dividend income",
      "Rental income",
      "Tax planning",
      "HMRC correspondence",
      "Personal tax advice",
    ],
    ctaText: "Explore Personal Tax Services",
    ctaLink: "/services/personal-tax-and-self-assessment-service",
    icon: UserCheck,
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you provide accounting services for businesses across Birmingham?",
    answer:
      "Yes. We work with contractors, sole traders, landlords, limited companies and small businesses throughout Birmingham. Our digital accounting systems allow us to provide the same responsive support wherever you're based in the city.",
  },
  {
    question: "Can I use your services if I'm based outside Birmingham?",
    answer:
      "We're a Bristol-based firm and we work with Birmingham clients entirely remotely — through cloud accounting, video calls, and digital document sharing. In practice, this means you get the same level of attentive, responsive service you'd expect from a local firm, without being limited to accountants physically based in the city.",
  },
  {
    question: "Can you help if I'm starting a new business in Birmingham?",
    answer:
      "Yes. If you're setting up a new business, we can help you choose the right business structure, register with HMRC, organise your accounting records and understand your ongoing tax responsibilities from the beginning.",
  },
  {
    question: "Do you work with businesses from different industries?",
    answer:
      "Yes. We support clients from a wide range of industries, including construction, consultancy, property, retail, healthcare, technology and other professional services. Our advice is tailored to your business and financial goals.",
  },
  {
    question: "How can I speak to an accountant about my requirements?",
    answer:
      "Simply get in touch with our team to discuss your circumstances. We'll take the time to understand what you need, answer your questions and recommend the most suitable accounting services for your business or personal tax affairs.",
  },
];

const birminghamLocations = [
  "Jewellery Quarter",
  "Digbeth",
  "Solihull",
  "Edgbaston",
  "City Centre",
  "Harborne",
  "Sutton Coldfield",
  "Moseley",
];

const AccountantsInBirmingham: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleExpandCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Accountants in Birmingham UK | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Fixed-fee accountants for contractors, SMEs & landlords in Birmingham. Remote-first support from a UK tax specialist. Get a free consultation."
        />
        <meta name="keywords" content="accountants in birmingham UK, birmingham accountants, contractor accountant birmingham, small business accountant birmingham, landlord tax birmingham" />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/accountants-in-birmingham-uk" />
      </Helmet>

      <Layout>
        {/* ── HERO SECTION (SUPER FRESH DARK NAVY & AMBER GLOW DESIGN) ──────── */}
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-950 text-white">
          {/* Animated Background Gradients & Glow Spots */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle Grid Pattern Backdrop */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">

              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-sm font-medium shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-105 animate-fade-in [animation-delay:100ms]">
                <MapPin className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>Accountants in Birmingham UK</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block ml-1" />
              </div>

              {/* Main H1 Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display animate-slide-up [animation-delay:200ms]">
                Accountants in Birmingham{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  Tax &amp; Business Support
                </span>{" "}
                for Contractors, SMEs &amp; Landlords
              </h1>

              {/* Hero Paragraph 1 & 2 */}
              <div className="space-y-4 text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal text-left sm:text-center animate-fade-in [animation-delay:350ms]">
                <p>
                  Keeping your finances in order takes time, and it's not always easy to stay on top of changing tax rules, filing deadlines and day-to-day bookkeeping while running a business. Having an accountant you can rely on means less time spent worrying about paperwork and more time focusing on what you do best.
                </p>
                <p className="text-slate-400 text-sm sm:text-base md:text-lg">
                  Henleaze Tax Consultancy is based in Bristol, but we work with contractors, small businesses, landlords, sole traders and limited companies across Birmingham entirely remotely — through secure cloud accounting, video calls and fast digital turnaround. No office visit required, no compromise on the level of support you'd expect from a local firm. From the Jewellery Quarter to Digbeth, Solihull to Edgbaston, we support Birmingham-based clients the same way we support our Bristol ones: with clear, practical advice tailored to your situation.
                </p>
              </div>

              {/* Location Tag Pills */}
              <div className="pt-2 flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-slate-400 animate-fade-in [animation-delay:500ms]">
                <span className="text-amber-400 font-medium">Serving:</span>
                {birminghamLocations.map((loc) => (
                  <span key={loc} className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 transition-colors hover:border-amber-400/50 hover:text-amber-300">
                    📍 {loc}
                  </span>
                ))}
              </div>

              {/* Hero Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:650ms]">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto border border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <Link to="/contact">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white px-8 py-6 rounded-xl transition-all duration-300 text-base"
                >
                  <Link to="/pricing">
                    View Fixed Pricing
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUST BAR ──────────────────────────────────────────────────────── */}
        <TrustBar />

        {/* ── EXPERT ACCOUNTANTS SUPPORTING BIRMINGHAM (SPLIT DESIGN) ────────── */}
        <section className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Remote-First Accounting Specialist</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display leading-tight">
                  Expert Accountants Supporting Birmingham Businesses &amp; Individuals
                </h2>

                <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                  <p>
                    No two clients have the same accounting needs. A contractor has different priorities from a landlord, and a growing business will face different challenges from a sole trader. That's why we take the time to understand your circumstances before recommending the right approach.
                  </p>
                  <p>
                    Our team provides straightforward accounting and tax support that helps you stay organised, meet your obligations and make informed financial decisions throughout the year. From keeping your records up to date and preparing accounts to answering tax questions as they arise, we're here to provide practical advice you can rely on.
                  </p>
                  <p>
                    Working with Henleaze Tax Consultancy also means you'll benefit from modern, cloud-based accounting, making it easy to share documents securely, keep track of your finances and receive support without unnecessary delays. It's a simple, efficient way to access professional accounting services, wherever you are in Birmingham.
                  </p>
                </div>
              </div>

              {/* Right Column Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-8 border border-slate-700/80 shadow-2xl space-y-6 transform transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <Laptop className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    Why Remote-First Works Best for Birmingham Clients
                  </h3>

                  <ul className="space-y-4 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Zero Travel Needed:</strong> Manage everything from your desk in Birmingham via digital portal &amp; video call.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Fast Digital Turnaround:</strong> Direct access to senior specialists with prompt responses.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Fixed Monthly Fees:</strong> Transparent pricing with no hidden surprises or hourly billing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Full HMRC Compliance:</strong> Proactive tax advice ensuring you claim every allowable relief.</span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                    <span>UK Tax &amp; Accounting Specialist</span>
                    <span className="text-amber-400 font-semibold">100% Remote Support</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ACCOUNTING SERVICES WE PROVIDE (SUPER ELEGANT & COMPACT GRID) ──── */}
        <section className="py-20 bg-slate-950 text-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
                Accounting Services We Provide
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Every client has different accounting and tax requirements, so our services are designed to provide support that fits your circumstances. From managing everyday finances to planning for future growth, we help contractors, landlords, individuals and businesses across Birmingham stay organised, compliant and financially confident.
              </p>
            </div>

            {/* Ultra Elegant & Compact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                const isExpanded = expandedCard === service.id;
                const visibleFeatures = isExpanded ? service.features : service.features.slice(0, 4);

                return (
                  <div
                    key={service.id}
                    className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div className="space-y-4">

                      {/* Top Bar: Icon + Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase bg-slate-950/80 border border-slate-800 px-2.5 py-1 rounded-full">
                          Birmingham Tax
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>

                      {/* Primary Description */}
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Optional Birmingham Note Callout (if available) */}
                      {service.birminghamNote && (
                        <div className="border-l-2 border-amber-500/50 bg-slate-950/50 p-3 rounded-r-xl text-slate-300 text-xs italic leading-relaxed">
                          {service.birminghamNote}
                        </div>
                      )}

                      {/* Compact Chips Grid for Features */}
                      <div className="pt-1 space-y-2">
                        <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                          Includes:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {visibleFeatures.map((feat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 transition-colors group-hover:border-slate-700/80"
                            >
                              <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Toggle button for extra features if more than 4 */}
                        {service.features.length > 4 && (
                          <button
                            onClick={() => toggleExpandCard(service.id)}
                            className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 pt-1 focus:outline-none transition-colors"
                          >
                            {isExpanded ? "Show fewer features" : `+ ${service.features.length - 4} more included features`}
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>

                    </div>

                    {/* Card Action Link / Button */}
                    <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                      <Link
                        to={service.ctaLink}
                        className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-amber-500 hover:text-slate-950 px-4 py-2.5 rounded-xl transition-all duration-300 group/btn"
                      >
                        <span>{service.ctaText}</span>
                        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Quick Link Banner to All Services */}
            <div className="mt-14 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <span>Browse All Henleaze Tax Consultancy Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHO WE WORK WITH (BENTO GRID DESIGN) ────────────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
                Who We Work With
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Every client has different priorities, which is why we tailor our accounting and tax support to suit the way they work. We work with individuals, business owners and growing organisations across Birmingham, providing practical advice that fits their goals and circumstances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

              {/* Audience 1: Contractors */}
              <div
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Contractors</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  From managing company finances and IR35 obligations to payroll and tax planning, we help contractors stay compliant while keeping their accounting straightforward.
                </p>
              </div>

              {/* Audience 2: Small Businesses */}
              <div
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Small Businesses</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We support small businesses with day-to-day accounting, financial reporting and tax compliance, giving owners more time to focus on running and growing their business.
                </p>
              </div>

              {/* Audience 3: Sole Traders */}
              <div
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Sole Traders</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Whether you're newly self-employed or have been trading for years, we can help you manage your accounts, meet HMRC deadlines and plan your finances with confidence.
                </p>
              </div>

              {/* Audience 4: Limited Companies */}
              <div
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Limited Companies</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our team supports limited companies with annual accounts, corporation tax, payroll, VAT and ongoing financial advice throughout the year.
                </p>
              </div>

              {/* Audience 5: Landlords */}
              <div
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Landlords</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We work with landlords managing single properties and growing portfolios, helping them stay on top of tax obligations and maximise available allowances.
                </p>
              </div>

              {/* Audience 6: Start-ups & Growing Businesses */}
              <div
                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Start-ups &amp; Growing Businesses</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Launching a new business comes with plenty of financial decisions. We provide the accounting support and practical guidance needed to build a strong financial foundation from the start.
                </p>
              </div>

            </div>

            {/* Pricing Callout */}
            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                className="border border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold px-8 py-6 rounded-lg transition-all duration-300"
              >
                <Link to="/pricing">
                  See Our Pricing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

          </div>
        </section>

        {/* ── WHY BIRMINGHAM CLIENTS CHOOSE HENLEAZE TAX CONSULTANCY ─────────── */}
        <section className="py-20 bg-slate-950 text-white relative border-t border-b border-slate-800/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">

              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Trusted Across the West Midlands</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display leading-tight">
                  Why Birmingham Clients Choose Henleaze Tax Consultancy
                </h2>

                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    Choosing an accountant is about more than preparing accounts or submitting tax returns. You want advice that's easy to understand, support that's available when you need it, and a team that takes the time to understand your business or personal circumstances — whether you're a sole trader in Solihull, a landlord with a portfolio near the city centre, or a contractor working on-site at one of Birmingham's major regeneration projects.
                  </p>
                  <p>
                    We combine personal service with modern, cloud-based accounting, so distance is never a barrier to a genuinely close working relationship. Transparent communication and a proactive approach to tax and accounting mean our Birmingham clients get the same responsiveness as if we were down the road.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="border border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold px-8 py-6 rounded-lg transition-all duration-300"
                  >
                    <Link to="/contact">
                      Contact us
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS (ACCORDION DESIGN) ─────────────────── */}
        <section className="py-20 bg-slate-900 text-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 text-sm font-medium">
                  <HelpCircle className="w-4 h-4" />
                  <span>Clear Answers</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              {/* Accordion Items */}
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                        ? "bg-slate-950 border-amber-500/50 shadow-xl"
                        : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
                        }`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 font-semibold text-lg text-white focus:outline-none"
                      >
                        <span className="font-display">{faq.question}</span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-amber-500 text-slate-950" : "bg-slate-800 text-slate-400"
                            }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-300 leading-relaxed text-base border-t border-slate-800/80 pt-4">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ── GET ACCOUNTING SUPPORT FROM OUR TEAM (FINAL CALL TO ACTION) ─────── */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-10 sm:p-16 border border-slate-800 shadow-2xl space-y-8 relative">

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
                  Get Accounting Support from Our Team
                </h2>
                <div className="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  <p>
                    Looking for professional accounting and tax support in Birmingham? Whether you need help with your business finances, personal tax or specialist accounting services, our team is here to provide clear advice and practical solutions tailored to your needs.
                  </p>
                  <p className="text-slate-400">
                    Get in touch with Henleaze Tax Consultancy today to discuss your requirements, and we'll help you find the right accounting support for you or your business.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto border border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-semibold px-10 py-7 rounded-lg transition-all duration-300 text-lg"
                >
                  <Link to="/contact">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
              </div>

              <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Free Initial Consultation</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> No Fixed Contract</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Fast Digital Onboarding</span>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AccountantsInBirmingham;
