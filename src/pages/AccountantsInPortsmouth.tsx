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
  Receipt,
  Sparkles,
  Phone,
  Anchor,
  Clock,
  CalendarCheck,
  ShieldCheck,
  TrendingUp,
  HelpCircle,
  FileSpreadsheet,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
  id: string;
  category: "marine" | "trade" | "landlord" | "growth";
  title: string;
  tag: string;
  description: React.ReactNode;
  covers: (string | React.ReactNode)[];
  ctaText: string;
  ctaLink: string;
  icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
  {
    id: "marine-contractors",
    category: "marine",
    title: "Marine, Defence and Engineering Contractors",
    tag: "Naval Base, Marine & Aerospace",
    description: (
      <>
        Portsmouth’s marine and defence economy includes a broad network of employers,
        suppliers and specialist contractors. The city’s marine sector alone supports more
        than 7,000 jobs across around 250 organisations, while the wider Portsmouth region
        has a substantial defence-related employment base. For contractors working through a
        limited company, we provide full accounting and tax support tailored to your setup.
      </>
    ),
    covers: [
      "IR35 status reviews based on actual contracts & working practices",
      "Tax-efficient limited company formation & accounting setup",
      "Optimal salary vs dividend extraction planning",
      "VAT registration and digital quarterly returns",
      (
        <span>
          Bookkeeping,{" "}
          <Link
            to="/services/payroll-and-hr-services"
            className="text-amber-700 hover:underline font-semibold"
          >
            payroll
          </Link>{" "}
          and year-end statutory accounts
        </span>
      ),
      (
        <Link
          to="/services/personal-tax-and-self-assessment-service"
          className="text-amber-700 hover:underline font-semibold"
        >
          Corporation Tax and Self Assessment support
        </Link>
      ),
    ],
    ctaText: "Contractor Accounting Services",
    ctaLink: "/services/contractor-accountants",
    icon: Anchor,
  },
  {
    id: "trade-visitor",
    category: "trade",
    title: "Cafes, Shops, Trades and Visitor Businesses",
    tag: "Southsea, Gunwharf Quays & The Solent",
    description: (
      <>
        Portsmouth’s visitor economy brings regular demand for hospitality, retail, leisure
        and tourism-related businesses. Seasonal trade can make cash flow uneven, while staffing
        changes can complicate payroll. We help retail and trade business owners stay on top of
        reconciliations, payroll and HMRC requirements.
      </>
    ),
    covers: [
      "Daily bookkeeping and bank feed reconciliations",
      "VAT returns and Making Tax Digital compliance",
      "Payroll, pensions auto-enrolment and RTI submissions",
      "Management information on sales, seasonal costs and margins",
      (
        <span>
          Year-end accounts and{" "}
          <Link
            to="/services/tax-planning"
            className="text-amber-700 hover:underline font-semibold"
          >
            tax planning
          </Link>
        </span>
      ),
    ],
    ctaText: "VAT and Bookkeeping Services",
    ctaLink: "/services/vat-and-bookkeeping-accounting-services",
    icon: Building2,
  },
  {
    id: "landlords-portsmouth",
    category: "landlord",
    title: "Landlords in Southsea, Fratton and Beyond",
    tag: "Southsea Flats, Fratton Terraces & Student HMOs",
    description: (
      <>
        Portsmouth’s student population, employment base and coastal location support rental
        demand across the city. Southsea flats, Fratton terraces, student HMOs and family rentals
        can each create different tax and accounting considerations. We help property owners
        minimise allowable tax and keep clean digital records.
      </>
    ),
    covers: [
      "Rental income and expense digital record-keeping",
      "Self Assessment tax returns with full property schedules",
      "Capital Gains Tax planning on property disposals",
      "Portfolio reporting across multiple Portsmouth properties",
      "Accounting support for HMOs and limited-company property structures",
    ],
    ctaText: "Landlord Accounting Services",
    ctaLink: "/services/landlord-accountants",
    icon: Home,
  },
  {
    id: "growth-businesses",
    category: "growth",
    title: "Growing Businesses Needing Finance Support",
    tag: "SMEs & Commercial Operations",
    description: (
      <>
        Some Portsmouth businesses need more than compliance. They need help understanding
        performance, managing cash flow and preparing for growth. Our{" "}
        <Link
          to="/outsourcing-accounting-firms-in-bristol"
          className="text-amber-700 hover:underline font-semibold"
        >
          outsourced accounting
        </Link>{" "}
        service provides dependable financial leadership without employing a full-time in-house
        finance team.
      </>
    ),
    covers: [
      "Ongoing digital cloud bookkeeping",
      "Monthly management accounts & cash-flow monitoring",
      "Payroll coordination & pension compliance",
      "VAT filing and statutory reporting",
      "Practical finance support without full-time overhead costs",
    ],
    ctaText: "Outsourced Accounting Services",
    ctaLink: "/services/outsourced-accounting-services",
    icon: TrendingUp,
  },
];

const deadlineRoutine = [
  {
    task: "Monthly bookkeeping",
    support: "Keeping income, expenses and receipts organised",
  },
  {
    task: "VAT return",
    support: "Preparing and reviewing VAT records and returns",
  },
  {
    task: "Payroll cycle",
    support: "Payslips, RTI submissions, pensions and PAYE",
  },
  {
    task: "Quarterly review",
    support: "Cash flow, profitability and tax planning",
  },
  {
    task: "Year-end accounts",
    support: "Statutory accounts and Corporation Tax preparation",
  },
  {
    task: "Self Assessment",
    support: "Personal tax returns for landlords, directors and sole traders",
  },
];

const areasSupported = [
  {
    area: "Portsmouth City Centre, Gunwharf Quays & The Hard",
    desc: "Commercial operations, maritime services, consultancies, and waterfront retail.",
  },
  {
    area: "Southsea, Southsea Seafront & Fratton",
    desc: "Independent shops, cafés, hospitality businesses, buy-to-let landlords, and student lets.",
  },
  {
    area: "Cosham, Drayton, Hilsea & Copnor",
    desc: "Trade professionals, local services, contractors, and growing family businesses.",
  },
  {
    area: "Waterlooville, Horndean & Purbrook",
    desc: "Suburban small businesses, trade suppliers, and limited company contractors.",
  },
  {
    area: "Havant, Leigh Park & Emsworth",
    desc: "Light manufacturing, tech enterprises, coastal tourism, and engineering firms.",
  },
  {
    area: "Gosport, Fareham & Stubbington",
    desc: "Marine subcontractors, naval defence specialists, and local commercial services.",
  },
  {
    area: "Hayling Island & the wider Solent area",
    desc: "Visitor trade, marine leisure, property investments, and regional sole traders.",
  },
];

const faqs = [
  {
    q: "Do I need an accountant if I run a small business in Portsmouth?",
    a: "Not always, but an accountant can help if you want accurate bookkeeping, help with VAT or payroll, support with year-end accounts, or advice on tax planning. The right support depends on your business structure, turnover, staff numbers and how much financial admin you want to manage yourself.",
  },
  {
    q: "Can you help a marine or defence contractor in Portsmouth?",
    a: "Yes. We work with limited company contractors and can help with IR35 reviews, company formation, VAT, payroll, dividend planning, bookkeeping and year-end accounts.",
  },
  {
    q: "Do you support hospitality businesses with seasonal staff?",
    a: "Yes. We can help cafés, restaurants, visitor attractions and retail businesses manage payroll, pension auto-enrolment, RTI submissions, VAT and cash-flow planning around seasonal demand.",
  },
  {
    q: "I rent out a flat in Southsea. Do I need to file a Self Assessment return?",
    a: "If you receive rental income, you may need to report it through Self Assessment, depending on your total income and circumstances. We can review your position, prepare the return and help identify allowable expenses.",
  },
  {
    q: "Can you take over bookkeeping from another accountant?",
    a: "Yes. We can contact your previous accountant, request professional clearance and obtain the records needed to continue without disrupting your deadlines.",
  },
  {
    q: "Do you charge by the hour?",
    a: "No. Our fees are fixed and agreed before work begins. If the scope of work changes, we explain the revised cost before carrying out additional work.",
  },
];

const AccountantsInPortsmouth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "marine" | "trade" | "landlord" | "growth">("all");
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
    name: "Henleaze Tax Consultancy - Accountants in Portsmouth",
    url: "https://henleazetaxconsultancy.com/accountants-in-portsmouth",
    description:
      "Portsmouth accountants for marine, defence, hospitality & trade businesses. Fixed-fee bookkeeping, VAT, payroll, IR35, rental tax & Self Assessment support.",
    telephone: "+447949956279",
    email: "info@henleazetaxconsultancy.com",
    areaServed: [
      { "@type": "City", name: "Portsmouth" },
      { "@type": "AdministrativeArea", name: "Southsea" },
      { "@type": "AdministrativeArea", name: "Fratton" },
      { "@type": "AdministrativeArea", name: "Cosham" },
      { "@type": "AdministrativeArea", name: "Havant" },
      { "@type": "AdministrativeArea", name: "Gosport" },
      { "@type": "AdministrativeArea", name: "Solent" },
    ],
    serviceType: [
      "Marine & Defence Contractor Accounting",
      "IR35 Reviews",
      "Small Business & Trade Accounting",
      "Hospitality & Visitor Trade Accounting",
      "Landlord & Property Tax Accounting",
      "Outsourced Finance Support",
      "VAT & Bookkeeping Services",
      "Payroll & Pensions Auto-Enrolment",
      "Self Assessment & Personal Tax",
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
        <title>Accountants in Portsmouth | Fixed-Fee Tax &amp; Accounting Help</title>
        <meta
          name="description"
          content="Portsmouth accountants for marine, defence, hospitality & trade businesses. Fixed-fee bookkeeping, VAT, payroll, IR35, rental tax & Self Assessment support."
        />
        <meta
          name="keywords"
          content="accountants in portsmouth, portsmouth accountants, marine accountants portsmouth, contractor accountant portsmouth, landlord accountant southsea, small business accountant portsmouth"
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountants-in-portsmouth"
        />
        <meta
          property="og:title"
          content="Accountants in Portsmouth | Fixed-Fee Tax &amp; Accounting Help"
        />
        <meta
          property="og:description"
          content="Portsmouth accountants for marine, defence, hospitality & trade businesses. Fixed-fee bookkeeping, VAT, payroll, IR35, rental tax & Self Assessment support."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountants-in-portsmouth"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://henleazetaxconsultancy.com/portsmouth.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accountants in Portsmouth | Fixed-Fee Tax &amp; Accounting Help"
        />
        <meta
          name="twitter:description"
          content="Portsmouth accountants for marine, defence, hospitality & trade businesses. Fixed-fee bookkeeping, VAT, payroll, IR35, rental tax & Self Assessment support."
        />
        <meta name="twitter:image" content="https://henleazetaxconsultancy.com/portsmouth.png" />
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
            {/* Featured Hero Image on Top */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="/portsmouth.png"
                  alt="Accountants in Portsmouth - Henleaze Tax Consultancy"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  width={1200}
                  height={600}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex items-end p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-gold text-xs sm:text-sm font-semibold shadow-md">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>Portsmouth, Southsea &amp; Solent &bull; Fixed-Fee Remote Support</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Portsmouth Accountants for Marine, Trade &amp;{" "}
                <span className="text-gold block sm:inline">Growing Businesses</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                Henleaze Tax Consultancy helps Portsmouth business owners keep their accounts, VAT,
                payroll and tax planning under control without turning financial admin into a second
                job. We work remotely from Bristol with contractors, landlords, sole traders and limited
                companies across Portsmouth, Southsea, Fratton, Cosham, Havant, Gosport and the wider
                Solent area.
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Our support is designed for businesses that need practical financial clarity—not just
                a set of year-end accounts. Whether you run a marine supply business, work on defence
                or engineering contracts, operate a café or shop, or manage rental property, we help
                you understand what is due, when it is due and what decisions may affect your tax position.
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
                  "Agreed Fixed Fees",
                  "Marine & Defence Specialists",
                  "Landlord & HMO Tax Support",
                  "100% Remote & Cloud-Ready",
                ].map((t) => (
                  <div key={t} className="flex items-center justify-center gap-2">
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

        {/* ── SECTION 1: PORTSMOUTH'S BUSINESS MIX ─────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Local Economic Context
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Portsmouth’s Business Mix
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Portsmouth is more than a port city. It combines a major naval and defence presence
                with marine services, aerospace, advanced manufacturing, tourism, hospitality,
                retail and a large student population.
              </p>
            </div>

            <p className="text-base sm:text-lg font-semibold text-gray-800 mb-6 text-center">
              That mix creates accounting needs that differ from a typical office-based city:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {[
                {
                  title: "Marine & Defence Contractors",
                  desc: (
                    <>
                      Marine and defence contractors may need{" "}
                      <Link
                        to="/what-is-ir35-uk"
                        className="text-amber-700 hover:underline font-semibold"
                      >
                        IR35 reviews
                      </Link>
                      , limited company accounts, VAT and dividend planning.
                    </>
                  ),
                  icon: Anchor,
                },
                {
                  title: "Visitor & Hospitality Businesses",
                  desc: "Ferry, hospitality and visitor-trade businesses often deal with seasonal income, changing staffing levels and cash-flow pressure.",
                  icon: Users,
                },
                {
                  title: "Retailers, Cafés & Tradespeople",
                  desc: "Retailers, cafés and tradespeople need simple, reliable bookkeeping and clear VAT support without complicated administrative overhead.",
                  icon: Building2,
                },
                {
                  title: "Landlords & Property Portfolios",
                  desc: "Landlords need help with rental income, allowable expenses, property portfolios and Capital Gains Tax planning.",
                  icon: Home,
                },
                {
                  title: "Engineering & Innovation Firms",
                  desc: "Engineering and technology firms may need to assess whether R&D tax relief applies to their technical development work.",
                  icon: Sparkles,
                },
                {
                  title: "Tailored Operational Assessment",
                  desc: "Rather than treating every client the same, we start by understanding how your business operates, when income arrives, what costs recur and which deadlines matter most.",
                  icon: ShieldCheck,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="p-3 bg-amber-100 text-amber-800 rounded-xl shrink-0 mt-1">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed m-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: START WITH THE NUMBERS THAT MATTER ─────────── */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Practical Financial Control
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Start With the Numbers That Matter
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Many small businesses do not need more reports—they need the right information at the
                right time. For a Portsmouth business, that may mean knowing whether a seasonal period
                was profitable, whether a project is still within budget, or whether there is enough
                cash to cover VAT, payroll and tax.
              </p>
            </div>

            <p className="text-center font-medium text-gray-800 text-base sm:text-lg mb-8">
              We help clients focus on practical questions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {[
                "Is the business profitable after all costs?",
                "How much cash is available before the next VAT or tax payment?",
                "Are invoices being raised and collected on time?",
                "Are payroll and pension obligations being met?",
                "Are allowable expenses being recorded correctly?",
                "Is there a tax liability building up that should be planned for?",
              ].map((q, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex items-start gap-3 hover:border-amber-400 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm sm:text-base font-semibold leading-snug">
                    {q}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-6 text-center max-w-3xl mx-auto">
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed m-0">
                This approach is particularly useful for businesses with seasonal income,
                project-based work or variable staffing across Portsmouth and the Solent area.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: SERVICES SHAPED AROUND PORTSMOUTH WORK ─────── */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Tailored Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Services Shaped Around Portsmouth Work
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-gray-700 text-base sm:text-lg">
                Practical, fixed-fee accounting support tailored to contractors, local businesses,
                landlords and growing enterprises.
              </p>

              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {[
                  { id: "all", label: "All Services" },
                  { id: "marine", label: "Marine & Defence" },
                  { id: "trade", label: "Cafes & Trades" },
                  { id: "landlord", label: "Landlords" },
                  { id: "growth", label: "Growing Businesses" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-navy text-gold shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border-2 border-gray-100 hover:border-amber-300 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-3 bg-amber-50 text-amber-700 rounded-xl">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.covers.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-1" />
                          <span className="text-gray-800 text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-3 rounded-xl border-none shadow-sm hover:shadow-md"
                  >
                    <Link to={service.ctaLink} className="flex items-center justify-center gap-2">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-gold" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
              >
                <Link to="/services">View All Accounting Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: A SIMPLER WAY TO HANDLE DEADLINES ──────────── */}
        <section className="py-16 md:py-24 bg-slate-50 border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Structured Routine
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                A Simpler Way to Handle Deadlines
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Rather than leaving everything until the deadline, we build a clear routine around the
                dates that matter:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-amber-50/80 border-b border-amber-200 text-gray-900">
                    <th className="py-4 px-6 font-bold text-sm sm:text-base w-1/3">
                      Deadline or task
                    </th>
                    <th className="py-4 px-6 font-bold text-sm sm:text-base">
                      What we help with
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                  {deadlineRoutine.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60 hover:bg-slate-50"}
                    >
                      <td className="py-3.5 px-6 font-bold text-gray-900 flex items-center gap-2">
                        <CalendarCheck className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{item.task}</span>
                      </td>
                      <td className="py-3.5 px-6 text-gray-700">{item.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-center">
              <p className="text-gray-700 text-sm sm:text-base m-0 leading-relaxed">
                This structure helps businesses avoid last-minute document requests and gives them
                time to make informed decisions before tax payments are due.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: AREAS WE SUPPORT ───────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Areas We Support Across Portsmouth &amp; Solent
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
              <p className="text-gray-700 text-base sm:text-lg">
                We work remotely with clients across Portsmouth and surrounding regional centres:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {areasSupported.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:bg-amber-50/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">{area.area}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm m-0 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-center">
              <p className="text-gray-700 text-sm m-0">
                <strong>Please note:</strong> We are a Bristol-based firm, so these are service areas
                supported remotely via cloud accounting and video calls rather than physical office
                locations.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FIXED FEES WITHOUT SURPRISE INVOICES ──────── */}
        <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 rounded px-3 py-1 mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Fixed Fees Without Surprise Invoices
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Our pricing is agreed before work begins. You will know what is included, what is not
              included and when the fee applies.
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              We do not charge by the hour for routine questions, and we do not increase the fee
              simply because a conversation took longer than expected. If your requirements
              change—for example, you register for VAT, employ staff or add a new company—we will
              explain the revised scope before any change is made.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full text-base shadow-xl"
            >
              <Link to="/pricing">See Our Pricing</Link>
            </Button>
          </div>
        </section>

        {/* ── SECTION 7: FAQS ───────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded px-3 py-1 mb-3">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Portsmouth Accountant FAQs
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-6 rounded" />
            </div>

            <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 px-6 py-5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-amber-600 font-bold text-2xl leading-none mt-0.5">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed bg-gray-50/50 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEARBY LOCATIONS & LATEST BLOGS ───────────────────────── */}
        <NearbyLocationsSection currentCity="Portsmouth" />
        <LatestBlogsSection />

        {/* ── FINAL CTA: CONTACT A PORTSMOUTH ACCOUNTANT ───────────── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-navy via-slate-900 to-navy text-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Contact a Portsmouth Accountant
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              If you want an accountant who understands the practical pressures of running a
              business in Portsmouth, book a free consultation. We will discuss your situation,
              explain the support you need and provide a fixed quote before any work begins.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                className="w-full sm:w-auto border-white/40 text-black hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300"
              >
                <a href="tel:+447949956279" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call +44 7949 956279</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AccountantsInPortsmouth;
