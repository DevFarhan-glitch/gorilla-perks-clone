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
  Phone,
  Clock,
  MessageSquare,
  ChevronRight,
  Zap,
  TrendingUp,
  Search,
  Check,
  Building,
  Award,
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
}

const servicesData: ServiceItem[] = [
  {
    id: "contractor-accounting",
    category: "contractor",
    title: "Contractor Accounting",
    tag: "IR35 & Tech/Engineering",
    description:
      "Sheffield has a solid base of contractors working in engineering, manufacturing and increasingly digital and tech roles. Whichever sector you're in, the core questions are usually the same: is your IR35 position sound and is your limited company structured to actually be tax-efficient. We handle both, plus the ongoing bookkeeping, VAT, payroll and year-end filing.",
    covers: [
      "IR35 position assessments",
      "Tax-efficient limited company setup",
      "Ongoing cloud bookkeeping",
      "VAT & Year-end statutory filings",
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
    tag: "Ecclesall Rd to South Yorkshire",
    description:
      "From independent shops around Ecclesall Road to trades businesses working across South Yorkshire, we keep your books accurate and current, manage VAT and payroll, and prepare your annual accounts without you having to chase for updates.",
    covers: [
      "Accurate day-to-day bookkeeping",
      "VAT management & filings",
      "Payroll & employee administration",
      "Annual accounts preparation",
      "No chasing required updates",
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
      "Sheffield's student population and its two universities mean a lot of local landlords are dealing with HMO regulations alongside the usual rental income and expense questions. We help you report correctly, claim what you're entitled to, and think ahead about Capital Gains Tax before a sale, not after.",
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
    title: "Payroll Support",
    tag: "PAYE & Auto-Enrolment",
    description:
      "We run payroll accurately and on schedule, PAYE, pension auto-enrolment, HMRC submissions — so it's one less thing competing for your attention on a Friday afternoon.",
    covers: [
      "Timely & accurate PAYE processing",
      "Workplace pension auto-enrolment",
      "Real-Time Information (RTI) HMRC filings",
      "Payslips & end-of-year P60s",
      "Hassle-free Friday payrolls",
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
      "Most overpaid tax comes down to timing, not mistakes. A short conversation in spring can meaningfully change what you owe the following January.",
    covers: [
      "Strategic tax timing reviews",
      "Dividend & salary optimization",
      "Corporation & personal tax strategy",
      "Capital gains & exit planning",
      "Forward-looking Spring consultations",
    ],
    ctaText: "Explore Tax Planning",
    ctaLink: "/services/tax-planning",
    icon: Calculator,
  },
  {
    id: "vat-bookkeeping",
    category: "business",
    title: "VAT and Bookkeeping",
    tag: "Clean Digital Records",
    description:
      "Clean records make everything downstream easier, from VAT filing to a mortgage application. We keep this tidy so it's never a source of last-minute stress.",
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
    title: "Company Secretarial Support",
    tag: "Companies House Compliance",
    description:
      "Confirmation statements, filings, director and shareholder changes we track the dates so a missed Companies House deadline never becomes your problem.",
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
    title: "R&D Tax Relief",
    tag: "Manufacturing & Engineering R&D",
    description:
      "Sheffield's manufacturing and engineering base means genuine R&D activity is more common here than business owners often realise. If you've worked through a technical problem without a ready-made solution, it's worth checking whether that spend qualifies.",
    covers: [
      "Engineering & manufacturing R&D checks",
      "Technical problem spend assessment",
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
    title: "Personal Tax",
    tag: "Self-Assessment & Context",
    description:
      "Dividends, rental income, the occasional capital gain these interact with each other more than most people expect. We file accurately and explain what's actually going on, rather than handing over a number with no context.",
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

const sheffieldClientStories = [
  {
    title: "Engineering & Tech Contractors",
    badge: "IR35 & Take-Home Clarity",
    description:
      "A fair number of our Sheffield clients are contractors who got tired of an accountant who only surfaced once a year, at deadline time. We provide proactive IR35 guidance and tax-efficient limited company structuring throughout the year.",
    icon: Laptop,
    highlight: "No more annual ghosting — year-round contractor support.",
  },
  {
    title: "Student Housing & HMO Landlords",
    badge: "HMO & Property Expenses",
    description:
      "Others are landlords managing HMOs across Sheffield's university districts who wanted more clarity on what they could actually claim as allowable expenses and how to plan for Capital Gains Tax before selling.",
    icon: Home,
    highlight: "Tailored HMO expense claiming & CGT foresight.",
  },
  {
    title: "Growing Small Businesses",
    badge: "Ecclesall Rd & Trades",
    description:
      "A few are small business owners rom shops around Ecclesall Road to trades across South Yorkshire who'd simply outgrown a spreadsheet and wanted someone they could trust with the numbers without chasing for updates.",
    icon: Building2,
    highlight: "Clear, current books without chasing for answers.",
  },
];

const faqs = [
  {
    q: "Do you have any physical presence in Sheffield?",
    a: "No, we work with Sheffield clients entirely remotely, the same way we do everywhere outside Bristol. Video calls, phone, email and cloud accounting cover everything a face-to-face meeting would, without the scheduling hassle.",
  },
  {
    q: "I manage an HMO in Sheffield does that change how I should report income?",
    a: "Often, yes. HMOs can affect what counts as an allowable expense and how income should be structured for reporting. It's worth a specific conversation rather than assuming standard buy-to-let rules apply without adjustment.",
  },
  {
    q: "Can you take over partway through my accounting year?",
    a: "Yes. We request your records from your outgoing accountant, get up to speed on where things stand, and carry on without disrupting your filing deadlines.",
  },
  {
    q: "Do you understand manufacturing and engineering businesses, given how common they are in Sheffield?",
    a: "We do, and it's actually one of the areas where R&D tax relief comes up most often. If your business has genuinely solved a technical problem, it's worth checking whether any of that work qualifies.",
  },
  {
    q: "Is Sheffield pricing any different from your other locations?",
    a: "No. Every client, wherever they're based, gets the same fixed-fee approach, a quote based on what you actually need, agreed before any work begins.",
  },
];

const sheffieldAreas = [
  "Ecclesall Road",
  "Kelham Island",
  "City Centre",
  "Broomhill",
  "Crookes",
  "Hillsborough",
  "Meadowhall",
  "South Yorkshire",
];

const AccountantsInSheffield: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Accountants in Sheffield",
    url: "https://henleazetaxconsultancy.com/accountants-in-sheffield",
    logo: "https://henleazetaxconsultancy.com/logo.jpg",
    description:
      "Straightforward accounting for contractors, landlords and small businesses in Sheffield. Clear pricing, honest advice. Get a free consultation.",
    priceRange: "££",
    areaServed: {
      "@type": "City",
      name: "Sheffield",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "South Yorkshire",
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
        <title>Accountants in Sheffield | Fixed-Fee Tax &amp; Advisory</title>
        <meta
          name="description"
          content="Straightforward accounting for contractors, landlords and small businesses in Sheffield. Clear pricing, honest advice. Get a free consultation."
        />
        <meta name="keywords" content="accountants in sheffield, accountant sheffield, contractor accountant sheffield, landlord tax sheffield, small business accountant sheffield" />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-sheffield"
        />
        <meta
          property="og:title"
          content="Accountants in Sheffield | Fixed-Fee Tax & Advisory"
        />
        <meta
          property="og:description"
          content="Straightforward accounting for contractors, landlords and small businesses in Sheffield. Clear pricing, honest advice. Get a free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-sheffield"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-navy text-white">
        {/* Decorative background glow */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-blue-600/40 via-indigo-600/20 to-gold/30 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs sm:text-sm font-semibold mb-6 shadow-md animate-fade-in">
              <MapPin className="h-4 w-4 text-gold animate-bounce" />
              <span>Serving Sheffield &amp; South Yorkshire</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Accountants in Sheffield{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-200 to-white">
                Straightforward Tax &amp; Accounting Services
              </span>
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
              <p>
                Most people don't switch accountants because the numbers were wrong. They switch because nobody ever explained them. A return arrives, a bill's attached and the reasoning behind it is anyone's guess. If that sounds familiar, it's probably worth a different approach.
              </p>
              <p>
                Henleaze Tax Consultancy works with contractors, landlords, sole traders and small businesses across Sheffield. We're based in Bristol, but the work itself bookkeeping, tax returns, payroll, accounting advice has never needed us to be in the same city as our clients, and Sheffield is no exception.
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

            {/* Sheffield Area Badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-2">Supporting clients in:</span>
              {sheffieldAreas.map((area, idx) => (
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

      {/* WHERE THE REAL VALUE ACTUALLY SITS */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Our Accounting Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Where the Real Value Actually Sits
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed relative z-10">
              <p>
                An accountant's job isn't just filing paperwork on time, though that matters. It's spotting the dividend that should've been timed differently, the expense that was missed, the IR35 contract that needs a second look before it's signed. That's the part that actually saves or costs you money and it's where a lot of accounting firms fall short not because they're incompetent, but because they're too stretched to look closely at any one client.
              </p>
              <p>
                We keep our client numbers manageable specifically so that doesn't happen. Before recommending anything, we take the time to understand what you're actually trying to do, grow a business, keep a rental portfolio ticking over cleanly or just get through a tax year without a nasty surprise in January.
              </p>
            </div>

            {/* Tax Calculator Teaser Banner */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-50/60 p-6 rounded-2xl border border-blue-100/80">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-navy shrink-0">
                  <Calculator className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-base">Curious what you might owe?</h4>
                  <p className="text-slate-600 text-sm">Our tax calculator gives you a quick starting estimate before you speak to us.</p>
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
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                Strategic Dividend Timing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Structuring income withdrawals and dividend timing to optimize personal tax thresholds and avoid unnecessary higher-rate hits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                Proactive Contract Reviews
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Evaluating IR35 status and allowable business expense opportunities before contracts are signed, ensuring robust HMRC defense.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                Manageable Client Numbers
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We purposefully limit client load per advisor so your finances receive dedicated, focused attention instead of rushed automated filings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES FOR SHEFFIELD CLIENTS */}
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
              Services for Sheffield Clients
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

          {/* Pricing Assurance Banner */}
          <div className="mt-16 text-center max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <p className="text-slate-200 text-sm sm:text-base">
              Every service above is fixed-fee you can see indicative pricing on our  {" "}
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

      {/* SHEFFIELD CLIENTS IN THEIR OWN WORDS */}
      <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Real Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Sheffield Clients, in Their Own Words
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              What our Sheffield clients have in common isn't industry or income level — it's wanting an accounting service that actually pays attention to their specific situation, not a one-size-fits-all package.
            </p>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {sheffieldClientStories.map((story, idx) => {
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

          <div className="text-center">
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
          </div>
        </div>
      </section>

      {/* QUESTIONS SHEFFIELD CLIENTS OFTEN ASK (FAQ) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Questions Sheffield Clients Often Ask
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

      {/* LET'S GET YOUR NUMBERS SORTED (FINAL CTA) */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Let's Get Your Numbers Sorted
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            If you're looking for accountants in Sheffield who explain the reasoning, not just hand you the result, get in touch. The first conversation is free, and there's no obligation to take it further.
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

export default AccountantsInSheffield;
