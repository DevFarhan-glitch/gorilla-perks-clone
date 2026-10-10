import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Building2,
  MapPin,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Receipt,
  FileSpreadsheet,
  Users,
  Briefcase,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Search,
  Scale,
  Award,
  Clock,
  PhoneCall,
  Laptop,
  Check,
  ArrowUpRight,
  Filter,
  FileCheck,
  Copy,
  ChevronRight,
  CheckCheck,
  Building,
  Table as TableIcon
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";

interface FirmData {
  id: string;
  rank: number;
  name: string;
  tagline: string;
  category: "city-centre" | "corporate" | "specialist" | "family" | "remote";
  categoryLabel: string;
  districtBadge: string;
  address: string;
  postcode: string;
  mainSupport: string;
  servicesList: string[];
  websiteUrl: string;
  websiteLabel: string;
  isRemote?: boolean;
  isFeatured?: boolean;
  paragraphs: string[];
  advisoryTip: string;
  established?: string;
  credentials?: string[];
}

const FIRMS: FirmData[] = [
  {
    id: "prime-accountants",
    rank: 1,
    name: "Prime Accountants",
    tagline: "Accounting, tax and business advisory with regional West Midlands reach",
    category: "corporate",
    categoryLabel: "Regional Advisory Practice",
    districtBadge: "Newhall Street",
    address: "Charter House, 161 Newhall Street, Birmingham, B3 1SW",
    postcode: "B3 1SW",
    mainSupport: "Accounting, tax and business advisory",
    servicesList: ["Routine Accounts Preparation", "Business Advisory", "Tax Planning", "Specialist Financial Services"],
    websiteUrl: "https://www.primeaccountants.co.uk/",
    websiteLabel: "Prime Accountants",
    paragraphs: [
      "Prime Accountants provides accounting and business advisory services through its Birmingham office at Charter House, 161 Newhall Street, Birmingham, B3 1SW. Its wider offering includes tax and specialist financial services, making it worth considering for businesses seeking support beyond routine accounts preparation.",
      "The firm also has offices in Coventry and Solihull. Before choosing a package, ask which services are included, who will manage your account and whether ongoing advice is covered by the quoted fee."
    ],
    advisoryTip: "Ask which services are included, who will manage your account and whether ongoing advice is covered by the quoted fee."
  },
  {
    id: "seventy-six-chartered-accountants",
    rank: 2,
    name: "Seventy Six Chartered Accountants",
    tagline: "Colmore Row chartered specialists in HMRC investigations and forensic tax",
    category: "specialist",
    categoryLabel: "Specialist & Investigations",
    districtBadge: "Colmore Row",
    address: "55 Colmore Row, Birmingham, B3 2AA",
    postcode: "B3 2AA",
    mainSupport: "Tax, audit and specialist investigations",
    servicesList: ["Tax Compliance", "Statutory Audit", "HMRC Investigations", "Forensic Accounting", "Fraud Investigations"],
    websiteUrl: "https://seventysix.co.uk/",
    websiteLabel: "Seventy Six Chartered Accountants",
    paragraphs: [
      "Seventy Six is a Birmingham based chartered accountancy firm at 55 Colmore Row, Birmingham, B3 2AA. Its published specialisms include tax compliance, audit, HMRC investigations, forensic accounting and fraud investigations.",
      "This firm may be particularly relevant to businesses or individuals dealing with a complex tax enquiry or requiring specialist investigation support. Its services are more specialised than those of a traditional bookkeeping focused practice, so check that its offering matches your requirements."
    ],
    advisoryTip: "Check that its investigation-focused offering matches your requirements if day-to-day bookkeeping is your priority."
  },
  {
    id: "dains",
    rank: 3,
    name: "Dains",
    tagline: "Chamberlain Square headquarters offering corporate finance, audit and growth consultancy",
    category: "city-centre",
    categoryLabel: "City Centre Head Office",
    districtBadge: "Chamberlain Square",
    address: "2 Chamberlain Square, Birmingham, B3 3AX",
    postcode: "B3 3AX",
    mainSupport: "Accounting, audit, tax and corporate finance",
    servicesList: ["Financial Reporting", "Statutory Audit", "Tax Advisory", "Corporate Finance", "Business Development Consultancy"],
    websiteUrl: "https://www.dains.com/",
    websiteLabel: "Dains",
    paragraphs: [
      "Dains has its head office at 2 Chamberlain Square, Birmingham, B3 3AX. The firm provides accounting, audit, tax and consultancy services, alongside corporate finance and broader business support.",
      "Its range of services makes it a potential option for established businesses and organisations that need advice on financial reporting, tax obligations or business development. Ask about the experience of the team that would handle your work and whether its services suit your business size."
    ],
    advisoryTip: "Ask about the experience of the team that would handle your work and confirm whether its services suit your business size."
  },
  {
    id: "azets",
    rank: 4,
    name: "Azets",
    tagline: "Bank House practice delivering comprehensive SME accountancy, payroll and audit",
    category: "corporate",
    categoryLabel: "National Network Firm",
    districtBadge: "Cherry Street / Bank House",
    address: "Sixth Floor of Bank House, Cherry Street, Birmingham, B2 5AL",
    postcode: "B2 5AL",
    mainSupport: "Accounting, tax, audit and business advisory",
    servicesList: ["Accountancy", "Corporate Tax", "Independent Audit", "Payroll Services", "Business Advisory"],
    websiteUrl: "https://www.azets.co.uk/offices/birmingham/",
    websiteLabel: "Azets Birmingham",
    paragraphs: [
      "Azets has a Birmingham office on the sixth floor of Bank House, Cherry Street, Birmingham, B2 5AL. Its services include accountancy, tax, audit and business advisory support.",
      "Businesses looking for a provider with a wider professional services offering may want to consider Azets. When comparing firms, establish whether you will have a dedicated contact and how the firm's accounting services fit with your reporting, payroll and tax requirements."
    ],
    advisoryTip: "Establish whether you will have a dedicated contact and confirm how services fit with your reporting, payroll and tax requirements."
  },
  {
    id: "bdo",
    rank: 5,
    name: "BDO",
    tagline: "Snowhill powerhouse advising start-ups, family businesses and large corporate groups",
    category: "city-centre",
    categoryLabel: "Major International Practice",
    districtBadge: "Two Snowhill",
    address: "Two Snowhill, Birmingham, B4 6GA",
    postcode: "B4 6GA",
    mainSupport: "Audit, tax and business advisory",
    servicesList: ["Statutory Audit", "Accounting Services", "Corporate & Personal Tax", "Strategic Advisory", "Family Business Support"],
    websiteUrl: "https://www.bdo.co.uk/en-gb/locations/birmingham",
    websiteLabel: "BDO Birmingham",
    paragraphs: [
      "BDO operates from Two Snowhill, Birmingham, B4 6GA, providing audit, accounting, tax and business advisory services. Its Birmingham team works with organisations at different stages of development, from start-ups and family businesses to larger groups.",
      "BDO may be worth considering when a business needs specialist advice or support for more complex operations. Smaller businesses should confirm the service scope, expected level of contact and fees before deciding whether the firm's offering is appropriate."
    ],
    advisoryTip: "Smaller businesses should confirm the service scope, expected level of contact and fees before committing."
  },
  {
    id: "mha",
    rank: 6,
    name: "MHA",
    tagline: "Professional accounting, audit and governance specialists for growing organisations",
    category: "corporate",
    categoryLabel: "National Accounting Firm",
    districtBadge: "Central Birmingham",
    address: "Birmingham Office, West Midlands",
    postcode: "Birmingham",
    mainSupport: "Accounting, audit and tax services",
    servicesList: ["Financial Reporting", "Audit & Assurance", "Direct & Indirect Tax", "Compliance Services", "Specialist Advisory"],
    websiteUrl: "https://www.mha.co.uk/",
    websiteLabel: "MHA",
    paragraphs: [
      "MHA is another firm to consider when comparing professional accounting and tax providers in Birmingham. Its broader service offering includes audit, tax and business advisory work, alongside other specialist services.",
      "It may suit organisations looking for support with financial reporting, compliance or more complex business requirements. Confirm the current Birmingham office details and discuss the specific services available to your organisation before proceeding."
    ],
    advisoryTip: "Confirm the current Birmingham office details directly and discuss the specific services available to your organisation."
  },
  {
    id: "m-a-edwards-accountants",
    rank: 7,
    name: "M A Edwards Accountants",
    tagline: "Established in 1980, family run practice serving sole traders and limited companies",
    category: "family",
    categoryLabel: "Family-Run Practice (Est. 1980)",
    districtBadge: "Kings Norton",
    address: "26 The Green, Kings Norton, Birmingham, B38 8SD",
    postcode: "B38 8SD",
    mainSupport: "Accounts, VAT, payroll and tax",
    servicesList: ["Accounts", "Tax Preparation", "VAT Returns", "Payroll", "Business Start-Up Support"],
    websiteUrl: "https://www.maedwards.co.uk/",
    websiteLabel: "M A Edwards Accountants",
    established: "1980",
    paragraphs: [
      "M A Edwards Accountants is a family run accountancy practice established in 1980. Its office is at 26 The Green, Kings Norton, Birmingham, B38 8SD.",
      "The firm supports businesses ranging from sole traders to limited companies and larger organisations. Its published services include accounts, tax, VAT, payroll and business start-up support.",
      "This may be a useful option for business owners who value continuity and want help with recurring accounting responsibilities. Ask how the firm handles bookkeeping, year-end accounts and tax planning, and whether these can be combined into one package."
    ],
    advisoryTip: "Ask how the firm handles bookkeeping, year-end accounts and tax planning, and whether these can be combined into one package."
  },
  {
    id: "thames-williams",
    rank: 8,
    name: "Thames Williams",
    tagline: "Accounting, tax returns and tailored business support for West Midlands businesses",
    category: "family",
    categoryLabel: "Local Accounting Practice",
    districtBadge: "Greater Birmingham",
    address: "Birmingham",
    postcode: "Birmingham",
    mainSupport: "Accounting, tax returns and business support",
    servicesList: ["Accounting", "Tax Returns", "Self Assessment", "Business Support"],
    websiteUrl: "https://www.thameswilliams.co.uk/",
    websiteLabel: "Thames Williams",
    paragraphs: [
      "Thames Williams is another candidate to investigate when comparing accounting firms serving Birmingham. Its published website provides information about accounting, tax returns and business support.",
      "Before adding the firm to your final shortlist, verify its current Birmingham office address directly with the business and confirm which accounting services it provides. This is particularly important if you want a firm you can visit in person rather than one offering remote support only."
    ],
    advisoryTip: "Verify its current Birmingham office address directly with the business and confirm which accounting services it provides."
  },
  {
    id: "alif-and-co-chartered-accountants",
    rank: 9,
    name: "Alif & Co Chartered Accountants",
    tagline: "ICAEW & ACCA dual-registered practice on Coventry Road supporting clients since 2012",
    category: "specialist",
    categoryLabel: "ICAEW & ACCA Registered",
    districtBadge: "Coventry Road",
    address: "Office 3, Heath Court, 489 to 493 Coventry Road, Birmingham, B10 0JS",
    postcode: "B10 0JS",
    mainSupport: "Accounts, taxation and business advisory",
    servicesList: ["Statutory Accounts", "Taxation", "Investigation Support", "Business Advisory", "SME Compliance"],
    websiteUrl: "https://www.alif.co.uk/",
    websiteLabel: "Alif & Co Chartered Accountants",
    established: "2012",
    credentials: ["ICAEW Registered", "ACCA Registered"],
    paragraphs: [
      "Alif & Co Chartered Accountants operates from Office 3, Heath Court, 489 to 493 Coventry Road, Birmingham, B10 0JS. The firm was established in 2012 and provides accounting, taxation, investigation and business advisory services.",
      "Its published information also identifies registrations with ICAEW and ACCA. Businesses and individuals can consider the firm for accounting and tax support, while those needing specialist advice should discuss their requirements directly."
    ],
    advisoryTip: "Dual registrations with ICAEW and ACCA provide verified professional credentials for tax and business advisory."
  },
  {
    id: "henleaze-tax-consultancy",
    rank: 10,
    name: "Henleaze Tax Consultancy",
    tagline: "Nationwide remote specialist with clear, transparent fixed fees for contractors, landlords & SMEs",
    category: "remote",
    categoryLabel: "Featured UK Remote Alternative",
    districtBadge: "Nationwide Remote UK",
    address: "Bristol HQ with dedicated remote accounting support across Birmingham and the UK",
    postcode: "BS9 (UK Remote)",
    mainSupport: "Remote accounting, bookkeeping and tax support",
    servicesList: [
      "Bookkeeping",
      "VAT Returns",
      "Payroll",
      "Year-End Statutory Accounts",
      "Contractor Accounting",
      "Landlord Taxation",
      "Tax Planning"
    ],
    websiteUrl: "https://henleazetaxconsultancy.com/",
    websiteLabel: "Henleaze Tax Consultancy",
    isRemote: true,
    isFeatured: true,
    paragraphs: [
      "Henleaze Tax Consultancy is based in Bristol rather than Birmingham, but provides accounting and tax services to clients throughout the UK through remote support. It is included here as an alternative for readers who are comfortable working online and prefer a firm with a clear fixed fee approach.",
      "Its services cover bookkeeping, VAT returns, payroll, year-end accounts, contractor accounting, landlord taxation and tax planning. The firm works with individuals, freelancers, contractors, landlords and limited companies.",
      "Henleaze may suit business owners who want ongoing accounting support alongside practical tax advice. Its published pricing information sets out fixed fee options, with tailored quotations available for more complex requirements.",
      "The firm is not a substitute for a Birmingham office if face to face local support is essential. However, remote accounting can be a practical option when the service, communication and pricing meet your needs."
    ],
    advisoryTip: "A practical, cost-transparent option for owners seeking dedicated accounting support alongside proactive tax advice."
  }
];

const SERVICES_GUIDE = [
  {
    title: "Bookkeeping",
    icon: FileSpreadsheet,
    desc: "Maintaining accurate financial records and reconciling transactions.",
    badge: "Core Records"
  },
  {
    title: "Tax returns",
    icon: Receipt,
    desc: "Preparing Self Assessment and company tax returns where required.",
    badge: "HMRC Filings"
  },
  {
    title: "VAT services",
    icon: Scale,
    desc: "Helping with VAT registration, calculations and returns.",
    badge: "MTD Compliant"
  },
  {
    title: "Payroll",
    icon: Users,
    desc: "Processing wages, payslips and relevant payroll submissions.",
    badge: "PAYE & Auto-Enrolment"
  },
  {
    title: "Year end accounts",
    icon: Building2,
    desc: "Preparing statutory accounts and supporting reporting obligations.",
    badge: "Statutory Reporting"
  },
  {
    title: "Tax planning",
    icon: TrendingUp,
    desc: "Reviewing financial decisions and applicable reliefs to help manage tax liabilities.",
    badge: "Strategic Advisory"
  },
  {
    title: "Business advisory",
    icon: Briefcase,
    desc: "Providing financial information and advice to support business decisions.",
    badge: "Commercial Growth"
  }
];

const SELECTION_CRITERIA = [
  {
    num: "01",
    title: "Confirm relevant experience",
    desc: "Ask whether the firm regularly works with clients in your situation, such as contractors, landlords or limited companies.",
    icon: CheckCircle2
  },
  {
    num: "02",
    title: "Compare the full fee",
    desc: "Check whether bookkeeping, payroll, tax returns and advice are included or charged separately.",
    icon: Calculator
  },
  {
    num: "03",
    title: "Check qualifications and regulations",
    desc: "Verify relevant professional memberships and any required authorisations.",
    icon: ShieldCheck
  },
  {
    num: "04",
    title: "Understand communication arrangements",
    desc: "Establish who your main contact will be and how quickly you can expect responses.",
    icon: PhoneCall
  },
  {
    num: "05",
    title: "Ask about software and reporting",
    desc: "If you use cloud accounting software, confirm whether the firm supports it.",
    icon: Laptop
  },
  {
    num: "06",
    title: "Review the engagement terms",
    desc: "Understand what the accountant will do, what you must provide and how additional work is charged.",
    icon: FileCheck
  }
];

const FAQS = [
  {
    question: "How do I choose the best accounting firm in Birmingham?",
    answer:
      "Start by evaluating your business type, complexity, and whether you require in-person meetings in Birmingham or prefer remote efficiency. Check relevant experience (such as with contractors, landlords, or owner-managed businesses), verify professional qualifications (ICAEW or ACCA), confirm whether cloud software like Xero or QuickBooks is supported, and always get a full written breakdown of included services and pricing."
  },
  {
    question: "How much do accountants in Birmingham cost?",
    answer:
      "Accounting fees vary according to the work required, the complexity of your finances and the level of ongoing support. A sole trader who needs an annual tax return will usually require a different service package from a limited company that needs bookkeeping, VAT returns, payroll and statutory accounts. Always ask each firm to specify whether ongoing advice is included or charged as an extra."
  },
  {
    question: "Do I need an accountant with a physical office in Birmingham?",
    answer:
      "Not necessarily. A physical Birmingham office (such as in Colmore Row or Chamberlain Square) is useful if face-to-face meetings are essential. However, remote accounting is a practical option when the service, communication and pricing meet your needs, giving you fast digital response times and transparent fixed fees without city centre overheads."
  },
  {
    question: "What core services should I look for in an accountant?",
    answer:
      "Essential services include bookkeeping, Self Assessment and company tax returns, VAT services, payroll processing, year-end accounts, tax planning, and business advisory. Not every firm provides every service, so always ask for a clear itemised schedule before signing an engagement letter."
  }
];

export default function Top10AccountingFirmsInBirmingham() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredFirms = useMemo(() => {
    return FIRMS.filter((firm) => {
      const matchesFilter =
        selectedFilter === "all" ||
        firm.category === selectedFilter ||
        (selectedFilter === "local" && !firm.isRemote);

      const matchesSearch =
        searchQuery.trim() === "" ||
        firm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        firm.mainSupport.toLowerCase().includes(searchQuery.toLowerCase()) ||
        firm.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        firm.districtBadge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        firm.servicesList.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [selectedFilter, searchQuery]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const copyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 10 Accounting Firms in Birmingham: Compare & Choose",
    description:
      "Compare 10 accounting firms in Birmingham, explore their services and fees, and find the right accountant for your business or personal finances.",
    image: "https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham.jpg",
    author: {
      "@type": "Organization",
      name: "Henleaze Tax Consultancy"
    },
    publisher: {
      "@type": "Organization",
      name: "Henleaze Tax Consultancy",
      logo: {
        "@type": "ImageObject",
        url: "https://henleazetaxconsultancy.com/logo.jpg"
      }
    },
    datePublished: "2026-10-10",
    dateModified: "2026-10-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 10 Accounting Firms in Birmingham",
    description: "Directory of 10 accounting firms serving Birmingham businesses, landlords, and individuals.",
    itemListElement: FIRMS.map((firm, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: firm.name,
      description: firm.mainSupport,
      url: firm.websiteUrl
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Top 10 Accounting Firms in Birmingham: Compare & Choose</title>
        <meta
          name="description"
          content="Compare 10 accounting firms in Birmingham, explore their services and fees, and find the right accountant for your business or personal finances."
        />
        <meta
          name="keywords"
          content="top 10 accounting firms in birmingham, accountants in birmingham, birmingham accounting firms, chartered accountants birmingham, compare birmingham accountants"
        />
        <link rel="canonical" href="https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham" />
        <meta property="og:title" content="Top 10 Accounting Firms in Birmingham: Compare & Choose" />
        <meta
          property="og:description"
          content="Compare 10 accounting firms in Birmingham, explore their services and fees, and find the right accountant for your business or personal finances."
        />
        <meta property="og:url" content="https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham" />
        <meta property="og:image" content="https://henleazetaxconsultancy.com/top-10-accounting-firms-in-birmingham.jpg" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Layout>
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 0 [BLUE BG]: HERO SECTION WITH LUXURY LIGHTING & CARDS
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative bg-gradient-to-b from-[#050B16] via-[#091122] to-[#070F1E] text-white overflow-hidden pt-28 sm:pt-36 pb-20 lg:pb-28 border-b border-amber-500/25">
          {/* Radial Ambient Glow Spheres */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70rem] h-[35rem] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),rgba(15,23,42,0)_70%)] pointer-events-none" />
          <div className="absolute top-1/4 right-5 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

          {/* Architectural Blueprint Mesh Grid */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 50%, transparent 95%)"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation Pill */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300/80 font-medium mb-8">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              <Link to="/accountants-in-birmingham-uk" className="hover:text-white transition-colors">
                Birmingham
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              <span className="text-amber-400 font-semibold">Top 10 Accounting Firms</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Headlines & Editorial Intro */}
              <div className="lg:col-span-7 space-y-6">
                {/* Live Audit Pill Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-semibold shadow-[0_0_20px_rgba(212,175,55,0.15)] backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="tracking-wide">WEST MIDLANDS ACCOUNTING INTELLIGENCE • 2026 AUDIT</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>

                {/* Main H1 Title */}
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Top 10 Accounting Firms in Birmingham:{" "}
                  <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent font-display italic mt-1">
                    A Guide to Choosing the Right Accountant
                  </span>
                </h1>

                {/* Editorial Lead Card with Gold Trim */}
                <div className="relative rounded-2xl p-6 sm:p-7 bg-slate-900/75 border border-amber-500/30 backdrop-blur-md shadow-2xl space-y-4">
                  <div className="absolute -left-0.5 top-6 bottom-6 w-1 rounded-r bg-gradient-to-b from-amber-300 to-amber-500" />
                  
                  <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                    Choosing an accountant involves more than finding someone to prepare your accounts or submit a tax return. The right firm should understand your financial responsibilities, offer the services you need and explain your options clearly.
                  </p>

                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                    <Link
                      to="/accountants-in-birmingham-uk"
                      className="text-amber-400 underline decoration-amber-400/60 hover:decoration-amber-300 font-semibold transition-colors"
                    >
                      Birmingham
                    </Link>{" "}
                    has accountancy firms serving everyone from sole traders and landlords to established companies and larger organisations. This guide compares nine firms with Birmingham offices, followed by Henleaze Tax Consultancy, a{" "}
                    <Link
                      to="/"
                      className="text-amber-400 underline decoration-amber-400/60 hover:decoration-amber-300 font-semibold transition-colors"
                    >
                      Bristol based firm
                    </Link>{" "}
                    that provides remote accounting support across the UK.
                  </p>
                </div>

                {/* Action Buttons with Engaging Hover & Shimmer Effects */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="#comparison-table">
                    <Button
                      size="lg"
                      className="relative overflow-hidden group bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 font-bold px-7 py-6 rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Explore Comparison Table
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                    </Button>
                  </a>

                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-slate-700 bg-slate-900/60 text-slate-200 hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-300 px-6 py-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Book Free Consultation
                    </Button>
                  </Link>

                  <Link to="/pricing">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-slate-300 hover:text-amber-400 hover:bg-slate-800/40 px-5 py-6 rounded-xl transition-all duration-300"
                    >
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Layered Architectural Glass Frame */}
              <div className="lg:col-span-5">
                <div className="relative group">
                  {/* Glowing Backlight */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/40 via-blue-600/30 to-amber-500/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700" />
                  
                  {/* Frame Container */}
                  <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-2.5 border border-amber-400/30 shadow-2xl backdrop-blur-xl">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/top-10-accounting-firms-in-birmingham.jpg"
                        alt="Top 10 accounting firms in Birmingham - executive boardroom overlooking Chamberlain Square and Birmingham commercial district"
                        className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        loading="eager"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-transparent to-transparent opacity-90" />

                      {/* Top-Right Floating Pill */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-lg flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>West Midlands Financial Core</span>
                      </div>

                      {/* Bottom Floating Glass Card */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-white shadow-2xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                            Birmingham Commercial District
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-400 text-slate-950">
                            10 FIRMS
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-200">
                          Colmore Row • Chamberlain Square • Snowhill • Suburbs
                        </p>
                        <div className="mt-2.5 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                          <span>✓ In-Person &amp; Remote Support</span>
                          <span className="text-amber-300 font-medium">Updated for 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Interactive Feature Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-800/80">
              {[
                {
                  icon: Building2,
                  title: "9 Local Offices",
                  desc: "Chamberlain Sq, Colmore Row, Newhall St, Snowhill & Suburbs"
                },
                {
                  icon: Laptop,
                  title: "1 UK Remote Specialist",
                  desc: "Nationwide fixed-fee support via Henleaze Tax Consultancy"
                },
                {
                  icon: Users,
                  title: "All Business Types",
                  desc: "Sole traders, contractors, landlords, SMEs & corporate groups"
                },
                {
                  icon: Scale,
                  title: "Independent Review",
                  desc: "Clear comparison of services, fees and questions to ask"
                }
              ].map((metric, mIdx) => {
                const IconC = metric.icon;
                return (
                  <div
                    key={mIdx}
                    className="group p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-850/80 transition-all duration-300 shadow-sm hover:shadow-[0_10px_25px_rgba(212,175,55,0.1)] hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400/20 transition-all duration-300 shrink-0">
                        <IconC className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {metric.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-snug mt-0.5">
                          {metric.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 [WHITE BG]: STUNNING INTERACTIVE COMPARISON MATRIX
            ═══════════════════════════════════════════════════════════════ */}
        <section id="comparison-table" className="py-20 bg-white scroll-mt-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-300 px-3.5 py-1 rounded-md mb-3 shadow-xs">
                Interactive Directory
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Top 10 Accounting Firms in Birmingham
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                The right accounting firm depends on your circumstances, the services you require and the level of support you expect. The following providers offer different combinations of accounting, tax, audit and business advisory services. They are presented as options to investigate, rather than an independently verified ranking of the ten best firms.
              </p>
            </div>

            {/* Filter and Search Controller Bar */}
            <div className="bg-slate-50 p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                {/* Search Box */}
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search firm name, service or district..."
                    className="w-full pl-11 pr-10 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white shadow-xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700 px-1"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {[
                    { id: "all", label: "All 10 Firms" },
                    { id: "city-centre", label: "City Centre" },
                    { id: "corporate", label: "Regional/Network" },
                    { id: "family", label: "Family/SME" },
                    { id: "specialist", label: "Specialist" },
                    { id: "remote", label: "Remote Fixed-Fee" }
                  ].map((tab) => {
                    const isActive = selectedFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedFilter(tab.id)}
                        className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all duration-200 transform hover:-translate-y-0.5 ${
                          isActive
                            ? "bg-[#091122] text-amber-300 shadow-md ring-2 ring-amber-400/40"
                            : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── DESKTOP & TABLET MATRIX: BESPOKE HIGH-END DESIGN ── */}
            <div className="hidden md:block overflow-hidden rounded-3xl border-2 border-slate-200/90 shadow-xl bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr
                    style={{
                      background: "linear-gradient(135deg, #060e1b 0%, #0f1e3a 40%, #1a2f55 60%, #0a1628 100%)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.35)"
                    }}
                  >
                    {/* Rank */}
                    <th
                      style={{ width: "80px", minWidth: "70px" }}
                      className="py-5 px-4 text-center border-r border-white/10 last:border-0"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span
                          style={{
                            background: "linear-gradient(135deg, #f59e0b, #d97706)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          }}
                          className="text-xs font-extrabold uppercase tracking-[0.18em] leading-none"
                        >
                          Rank
                        </span>
                        <div className="w-6 h-0.5 rounded-full bg-amber-400/40 mt-0.5" />
                      </div>
                    </th>

                    {/* Firm & District */}
                    <th className="py-5 px-6 border-r border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white leading-none">
                          Firm &amp; District
                        </span>
                        <div className="w-8 h-0.5 rounded-full bg-blue-400/40 mt-0.5" />
                      </div>
                    </th>

                    {/* Main Support */}
                    <th className="py-5 px-6 border-r border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white leading-none">
                          Main Areas of Support
                        </span>
                        <div className="w-8 h-0.5 rounded-full bg-emerald-400/40 mt-0.5" />
                      </div>
                    </th>

                    {/* Address */}
                    <th className="py-5 px-6 border-r border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white leading-none">
                          Birmingham Address
                        </span>
                        <div className="w-8 h-0.5 rounded-full bg-purple-400/40 mt-0.5" />
                      </div>
                    </th>

                    {/* Explore */}
                    <th className="py-5 px-6 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white leading-none">
                          Explore
                        </span>
                        <div className="w-6 h-0.5 rounded-full bg-amber-400/40 mt-0.5" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredFirms.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-500">
                        <p className="font-bold text-base text-slate-700">No matching firms found</p>
                        <p className="text-xs text-slate-500 mt-1">Try resetting your filter or search keywords.</p>
                      </td>
                    </tr>
                  ) : (
                    filteredFirms.map((firm) => (
                      <tr
                        key={firm.id}
                        className={`group transition-all duration-200 hover:bg-amber-50/50 ${
                          firm.isFeatured
                            ? "bg-gradient-to-r from-amber-50/70 via-amber-50/30 to-amber-50/70 font-medium"
                            : ""
                        }`}
                      >
                        {/* Rank Badge */}
                        <td className="py-5 px-6 text-center align-middle">
                          <span
                            className={`inline-flex items-center justify-center w-9 h-9 rounded-2xl text-xs font-extrabold shadow-xs transition-transform duration-200 group-hover:scale-110 ${
                              firm.isFeatured
                                ? "bg-amber-400 text-slate-950 shadow-md ring-2 ring-amber-300"
                                : "bg-slate-100 text-slate-800 group-hover:bg-[#091122] group-hover:text-amber-300"
                            }`}
                          >
                            #{firm.rank}
                          </span>
                        </td>

                        {/* Firm Identity & District Tag */}
                        <td className="py-5 px-6 align-middle">
                          <div className="flex flex-col">
                            <span className="text-base font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                              {firm.name}
                            </span>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                                <Building className="w-3 h-3 text-slate-400" />
                                {firm.districtBadge}
                              </span>
                              {firm.isFeatured && (
                                <span className="inline-flex items-center text-[10px] font-bold text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-md">
                                  ★ Remote Specialist
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Main Areas of Support & Tags */}
                        <td className="py-5 px-6 align-middle">
                          <span className="font-semibold text-slate-800 text-sm block mb-1.5">
                            {firm.mainSupport}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {firm.servicesList.slice(0, 3).map((svc, i) => (
                              <span
                                key={i}
                                className="text-[11px] font-medium bg-white border border-slate-200 text-slate-700 px-2.5 py-0.5 rounded-lg shadow-2xs group-hover:border-amber-200"
                              >
                                {svc}
                              </span>
                            ))}
                            {firm.servicesList.length > 3 && (
                              <span className="text-[11px] text-slate-400 self-center">
                                +{firm.servicesList.length - 3} more
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Address */}
                        <td className="py-5 px-6 align-middle text-xs text-slate-600 max-w-xs">
                          <div className="flex items-start gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed line-clamp-2">{firm.address}</span>
                          </div>
                        </td>

                        {/* Action Link Button */}
                        <td className="py-5 px-6 align-middle text-right">
                          <a
                            href={`#${firm.id}`}
                            className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                              firm.isFeatured
                                ? "bg-amber-400 text-slate-950 hover:bg-amber-500 font-extrabold"
                                : "bg-slate-100 group-hover:bg-[#091122] group-hover:text-white text-slate-800"
                            }`}
                          >
                            <span>View Profile</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* ── MOBILE TOUCH MATRIX: RESPONSIVE CARDS ── */}
            <div className="md:hidden space-y-4">
              {filteredFirms.map((firm) => (
                <div
                  key={firm.id}
                  className={`p-5 rounded-2xl border shadow-sm transition-all ${
                    firm.isFeatured
                      ? "bg-amber-50/60 border-amber-400"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-[#091122] text-amber-300 font-bold text-xs flex items-center justify-center">
                      #{firm.rank}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {firm.districtBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">{firm.name}</h3>
                  <p className="text-xs text-amber-700 font-semibold mb-2">{firm.mainSupport}</p>

                  <div className="flex items-start gap-1.5 text-xs text-slate-600 mb-4 bg-slate-50 p-2.5 rounded-xl">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{firm.address}</span>
                  </div>

                  <a
                    href={`#${firm.id}`}
                    className="w-full py-2.5 rounded-xl bg-[#091122] text-amber-300 hover:bg-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
                  >
                    View Complete Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 [BLUE BG]: DETAILED PROFILES OF ALL 10 FIRMS
            ═══════════════════════════════════════════════════════════════ */}
        <section id="firm-profiles" className="py-24 bg-gradient-to-b from-[#060D1A] via-[#0A1326] to-[#070F1E] text-white scroll-mt-24 border-b border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 rounded-md mb-3 shadow-sm">
                Detailed Firm Analysis
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                In-Depth Review of the 10 Accounting Firms
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                Examine verified addresses, service scopes, client considerations, and key questions to ask before appointing an accountant.
              </p>
            </div>

            {/* Profile Cards Grid with Luxury Dark Glass & Gold Accents */}
            <div className="space-y-12">
              {FIRMS.map((firm) => (
                <article
                  key={firm.id}
                  id={firm.id}
                  className={`group relative rounded-3xl border transition-all duration-300 scroll-mt-28 ${
                    firm.isFeatured
                      ? "bg-gradient-to-br from-slate-900/95 via-slate-950/90 to-amber-950/20 border-amber-400 shadow-[0_0_40px_rgba(212,175,55,0.2)] ring-2 ring-amber-400/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                      : "bg-slate-900/80 border-slate-800/90 shadow-xl hover:border-amber-400/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1"
                  }`}
                >
                  {/* Card Header Strip */}
                  <div
                    className={`px-6 sm:px-8 py-5.5 border-b flex flex-wrap items-center justify-between gap-4 rounded-t-3xl ${
                      firm.isFeatured
                        ? "bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/10 border-amber-500/40 text-white"
                        : "bg-slate-950/70 border-slate-800 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl font-bold text-sm shadow-md transition-transform group-hover:scale-105 ${
                          firm.isFeatured
                            ? "bg-amber-400 text-slate-950 font-extrabold shadow-amber-400/30"
                            : "bg-[#050B16] text-amber-300 border border-slate-700"
                        }`}
                      >
                        {String(firm.rank).padStart(2, "0")}
                      </span>
                      <div>
                        <h3
                          className="text-xl sm:text-2xl font-bold text-white"
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                          {firm.name}
                        </h3>
                        <p className="text-xs sm:text-sm mt-0.5 text-slate-300">
                          {firm.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                          firm.isFeatured
                            ? "bg-amber-500/20 text-amber-300 border-amber-400/50"
                            : "bg-slate-800 text-slate-300 border-slate-700"
                        }`}
                      >
                        {firm.categoryLabel}
                      </span>
                      {firm.established && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-medium hidden sm:inline-block border border-slate-700">
                          Est. {firm.established}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    {/* Address & Interactive Copy Button */}
                    <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 mb-6">
                      <div className="flex items-center gap-2 font-medium text-slate-200">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{firm.address}</span>
                      </div>
                      <button
                        onClick={() => copyAddress(firm.id, firm.address)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-300 transition-colors bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-amber-400/50 shadow-xs"
                        title="Copy address"
                      >
                        {copiedId === firm.id ? (
                          <>
                            <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Exact Narrative Content Preserved Word-for-Word */}
                    <div className="prose prose-invert max-w-none text-slate-200 leading-relaxed text-base space-y-4 mb-6">
                      {firm.paragraphs.map((para, pIdx) => {
                        if (firm.isFeatured) {
                          if (pIdx === 0) {
                            return (
                              <p key={pIdx}>
                                Henleaze Tax Consultancy is based in Bristol rather than Birmingham, but provides accounting and{" "}
                                <Link
                                  to="/services/tax-planning"
                                  className="text-amber-400 underline font-semibold hover:text-amber-300 transition-colors"
                                >
                                  tax services
                                </Link>{" "}
                                to clients throughout the UK through remote support. It is included here as an alternative for readers who are comfortable working online and prefer a firm with a clear fixed fee approach.
                              </p>
                            );
                          }
                          if (pIdx === 1) {
                            return (
                              <p key={pIdx}>
                                Its services cover bookkeeping, VAT returns, payroll, year-end accounts,{" "}
                                <Link
                                  to="/services/contractor-accountants"
                                  className="text-amber-400 underline font-semibold hover:text-amber-300 transition-colors"
                                >
                                  contractor accounting
                                </Link>
                                ,{" "}
                                <Link
                                  to="/services/landlord-accountants"
                                  className="text-amber-400 underline font-semibold hover:text-amber-300 transition-colors"
                                >
                                  landlord taxation
                                </Link>{" "}
                                and{" "}
                                <Link
                                  to="/services/personal-tax-and-self-assessment-service"
                                  className="text-amber-400 underline font-semibold hover:text-amber-300 transition-colors"
                                >
                                  tax planning
                                </Link>
                                . The firm works with individuals, freelancers, contractors, landlords and limited companies.
                              </p>
                            );
                          }
                        }
                        return <p key={pIdx}>{para}</p>;
                      })}
                    </div>

                    {/* Services Pill Cloud */}
                    <div className="mb-6">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Published Services &amp; Specialisms
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {firm.servicesList.map((svc, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-xs px-3 py-1.5 rounded-xl font-medium border transition-all duration-200 ${
                              firm.isFeatured
                                ? "bg-amber-400/15 text-amber-200 border-amber-400/40"
                                : "bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-500"
                            }`}
                          >
                            ✓ {svc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Due Diligence Advisory Callout Box */}
                    <div
                      className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 mb-6 ${
                        firm.isFeatured
                          ? "bg-amber-400/10 border-amber-400/50 text-amber-100"
                          : "bg-slate-950/60 border-slate-800 text-slate-300"
                      }`}
                    >
                      <HelpCircle
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          firm.isFeatured ? "text-amber-400" : "text-amber-500"
                        }`}
                      />
                      <div className="text-sm">
                        <span className="font-bold block mb-1 text-white">Due Diligence Checklist:</span>
                        <span className="text-slate-300 leading-relaxed">{firm.advisoryTip}</span>
                      </div>
                    </div>

                    {/* Card Action Row */}
                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="font-semibold text-white">Website:</span>
                        {firm.isFeatured ? (
                          <Link
                            to="/"
                            className="font-bold text-amber-400 hover:text-amber-300 underline flex items-center gap-1 transition-colors"
                          >
                            {firm.websiteLabel}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        ) : (
                          <a
                            href={firm.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-slate-200 hover:text-amber-300 underline flex items-center gap-1 transition-colors"
                          >
                            {firm.websiteLabel}
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                          </a>
                        )}
                      </div>

                      {firm.isFeatured ? (
                        <div className="flex flex-wrap items-center gap-3">
                          <Link to="/pricing">
                            <Button
                              variant="outline"
                              className="border-amber-400 text-amber-300 hover:bg-amber-400/10 font-bold rounded-xl transition-all hover:-translate-y-0.5"
                            >
                              Explore Fixed Fees
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold rounded-xl shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                              Book Free Consultation
                              <ArrowRight className="w-4 h-4 ml-1.5" />
                            </Button>
                          </Link>
                        </div>
                      ) : (
                        <a
                          href={firm.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn text-xs font-bold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-200 inline-flex items-center gap-1.5 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
                        >
                          <span>Visit Official Website</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-slate-950 transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 [WHITE BG]: WHAT ACCOUNTING SERVICES TO LOOK FOR?
            ═══════════════════════════════════════════════════════════════ */}
        <section id="services-to-look-for" className="py-20 bg-white border-b border-slate-200 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-300 px-3.5 py-1 rounded-md mb-3 shadow-xs">
                Service Scope Guide
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                What Accounting Services Should You Look For?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                The{" "}
                <Link
                  to="/services"
                  className="text-amber-700 underline font-semibold hover:text-amber-900 transition-colors"
                >
                  service
                </Link>{" "}
                you need depends on whether you are managing personal tax affairs, running a{" "}
                <Link
                  to="/services/small-business-accountants"
                  className="text-amber-700 underline font-semibold hover:text-amber-900 transition-colors"
                >
                  small business
                </Link>{" "}
                or operating a limited company. Before comparing quotes, identify the work you want your accountant to handle.
              </p>
              <p className="text-slate-600 text-sm">
                Common accounting services include the seven core areas below:
              </p>
            </div>

            {/* 7 Services Grid in Crisp White with Golden Hover Accents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {SERVICES_GUIDE.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={idx}
                    className="group p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-amber-400 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-300 flex items-center justify-center text-amber-800 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-2xs">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 group-hover:bg-amber-100 group-hover:text-amber-900 px-3 py-1 rounded-full transition-colors">
                          {service.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-900 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Important Caveat Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#091122] border border-amber-400/40 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-white">Itemise Your Service Schedule</h4>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    Not every accountancy firm offers every service. Request a written breakdown of what is included before agreeing to an engagement.
                  </p>
                </div>
              </div>
              <Link to="/services" className="shrink-0">
                <Button className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-6 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5">
                  Browse All Services
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 [BLUE BG]: HOW TO CHOOSE THE RIGHT ACCOUNTANT
            ═══════════════════════════════════════════════════════════════ */}
        <section id="how-to-choose" className="py-24 bg-gradient-to-b from-[#060D1A] via-[#091122] to-[#070F1E] text-white border-b border-amber-500/20 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 rounded-md mb-3 shadow-sm">
                Due Diligence Checklist
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                How Do You Choose the Right Accountant in Birmingham?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                The best accountant is one whose expertise, services and working arrangements fit your needs. A well known firm is not automatically the right choice for every individual or business.
              </p>
              <p className="text-slate-400 text-sm mt-3">
                Use these checks when comparing providers:
              </p>
            </div>

            {/* 6 Step Roadmap Cards on Dark Blue Backdrop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SELECTION_CRITERIA.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.num}
                    className="group relative p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-400 hover:bg-slate-850 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Glowing Top Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-amber-500 rounded-t-2xl transition-all duration-300" />

                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-amber-300 bg-amber-500/20 border border-amber-400/30 px-3 py-1 rounded-lg">
                        Check {item.num}
                      </span>
                      <IconComp className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 [WHITE BG]: HOW MUCH DO ACCOUNTANTS COST?
            ═══════════════════════════════════════════════════════════════ */}
        <section id="pricing-guide" className="py-20 bg-white border-b border-slate-200 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-300 px-3.5 py-1 rounded-md mb-3 shadow-xs">
                Fee Guide &amp; Value Analysis
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                How Much Do Accountants in Birmingham Cost?
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                <Link
                  to="/pricing"
                  className="text-amber-700 underline font-semibold hover:text-amber-900 transition-colors"
                >
                  Accounting fees
                </Link>{" "}
                vary according to the work required, the complexity of your finances and the level of ongoing support. There is no single fee that applies to every business or individual.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                For example, a sole trader who needs an annual tax return will usually require a different service package from a limited company that needs bookkeeping, VAT returns, payroll and statutory accounts.
              </p>
            </div>

            {/* Quote Specification Checklist Card in Crisp White */}
            <div className="bg-slate-50 rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-md mb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-amber-600" />
                When requesting quotes, ask each firm to specify:
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-8">
                Demand written transparency across these four fundamental quote criteria before signing an engagement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  {
                    title: "The services included in the fee.",
                    detail: "Confirm the exact items covered — such as bookkeeping volume, VAT submissions, and payroll runs."
                  },
                  {
                    title: "Any additional charges for tax advice or out of scope work.",
                    detail: "Ask whether routine tax planning, phone check-ins, or HMRC correspondence incur separate hourly fees."
                  },
                  {
                    title: "Whether the price is monthly, annual or a one off fee.",
                    detail: "Establish if payments are spread evenly on a fixed monthly retainer or billed as lump sums."
                  },
                  {
                    title: "How fees may change if your business grows or your circumstances become more complex.",
                    detail: "Clarify fee escalation triggers, such as turnover brackets, staff counts, or transaction volumes."
                  }
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 hover:border-amber-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-700 font-bold" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-900">{point.title}</p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{point.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-sm leading-relaxed">
                <strong>Key Benchmark:</strong> Comparing like for like packages will give you a clearer idea of value than choosing solely on the lowest headline price.
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 6 [BLUE BG]: FINAL WORDS & EXECUTIVE CALL TO ACTION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-b from-[#050B16] via-[#091122] to-[#060D1A] text-white relative overflow-hidden border-b border-amber-500/30">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 rounded-md mb-4 shadow-sm">
                Executive Conclusion
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Final Words
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                Finding the right{" "}
                <Link
                  to="/accountants-in-birmingham-uk"
                  className="text-amber-400 underline font-semibold hover:text-white transition-colors"
                >
                  accountant in Birmingham
                </Link>{" "}
                starts with understanding the support you need, checking each firm's credentials and comparing fees on a like for like basis. Some businesses benefit from a broad accountancy service, while others need specialist tax advice or a more flexible remote arrangement.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                If you are comfortable working online and want clear pricing alongside accounting and tax support,{" "}
                <Link
                  to="/services"
                  className="text-amber-400 underline font-semibold hover:text-white transition-colors"
                >
                  Henleaze Tax Consultancy's accounting services
                </Link>{" "}
                are worth exploring. Although based in Bristol, the firm supports clients across the UK and offers remote consultations to help businesses and individuals discuss their requirements.
              </p>
            </div>

            {/* Luxury Consultation Banner */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-amber-400/50 shadow-2xl text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to Discuss Your Birmingham Accounting Requirements?
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
                Receive a transparent, fixed-fee quotation and speak directly with a dedicated UK tax specialist. Direct communication, no jargon, no unexpected hourly fees.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button className="relative overflow-hidden group/btn bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950 font-bold px-9 py-6 text-sm rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] transition-all hover:-translate-y-0.5">
                    <span className="relative z-10 flex items-center gap-2">
                      Schedule a Consultation
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button
                    variant="outline"
                    className="border-slate-600 bg-slate-900/60 text-slate-200 hover:border-amber-400 hover:bg-slate-800 hover:text-white px-8 py-6 text-sm rounded-xl transition-all hover:-translate-y-0.5"
                  >
                    View Fixed Pricing Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 7 [WHITE BG]: FREQUENTLY ASKED QUESTIONS (FAQS)
            ═══════════════════════════════════════════════════════════════ */}
        <section id="faqs" className="py-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 border border-amber-300 px-3.5 py-1 rounded-md mb-3 shadow-xs">
                Common Enquiries
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base">
                Everything you need to know when comparing accounting providers across Birmingham and the UK.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-xs ${
                      isOpen ? "border-amber-400 ring-2 ring-amber-400/20" : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-base sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-amber-600 transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NEARBY LOCATIONS ARCHITECTURE ── */}
        <NearbyLocationsSection
          currentCity="Birmingham"
          title="Accountancy Services Across Major UK Cities"
          subtitle="Explore our nationwide reach and tailored accounting solutions for businesses across the United Kingdom."
        />
      </Layout>
    </>
  );
}
