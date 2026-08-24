import React, { useState, useEffect } from "react";
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
    Clock,
    Calendar,
    Cloud,
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
        question: "Is it a problem that you're not based in Manchester?",
        answer:
            "Not in practice our clients there get the same turnaround and access as anyone local, just without the need for a face-to-face meeting. Everything runs through video calls, phone, and cloud accounting.",
    },
    {
        question: "Can you register a new business for me in Manchester?",
        answer:
            "Yes. We'll advise on the right structure, register you with HMRC and Companies House if needed, and get your accounting set up correctly from the start.",
    },
    {
        question: "Do you only work with certain industries?",
        answer:
            "No our Manchester clients span construction, tech, retail, consultancy, healthcare and property, among others. The advice is shaped around your business, not a generic industry template.",
    },
    {
        question: "What does it cost to switch accountants?",
        answer:
            "Switching is usually straightforward we handle the handover communication with your previous accountant, and it doesn't typically disrupt your filing deadlines.",
    },
    {
        question: "How do I find out which services I actually need?",
        answer:
            "Best to just talk it through with us. Book a consultation and we'll ask the right questions to figure out what applies to your situation.",
    },
];

const manchesterLocations = [
    "Spinningfields",
    "Ancoats",
    "Salford Quays ",
    "Stockport",
    "Trafford",
    "Harborne",
    ,
];

const AccountancyFirmInManchester: React.FC = () => {
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
                <title> Accountancy Firm in Manchester| Henleaze Tax Consultancy</title>
                <meta
                    name="description"
                    content="Trusted accountancy firm in Manchester for contractors, landlords & SMEs. Fixed fees, cloud accounting, remote support. Book a free consultation today."
                />
                <meta name="keywords" content="accountancy firm in manchester​, contractor accountant manchester, small business accountant manchester, landlord tax manchester" />
                <link rel="canonical" href="https://henleazetaxconsultancy.com/accountancy-firm-in-manchester" />
            </Helmet>

            <Layout>
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
                        <div className="max-w-4xl mx-auto text-center space-y-8">

                            {/* Location Badge - Interactive */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-sm font-medium shadow-lg shadow-amber-500/20 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-400/50 hover:shadow-amber-500/30 cursor-pointer group">
                                <MapPin className="w-4 h-4 text-amber-400 group-hover:animate-bounce" />
                                <span>Accountants in Manchester UK</span>
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            </div>

                            {/* Main H1 Title - Enhanced */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-display">
                                Your Accountancy Firm in Manchester{" "}
                                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 mt-2">
                                    Trusted Tax & Business Advice
                                </span>
                            </h1>

                            {/* Subtitle with Icon */}
                            <div className="flex items-center justify-center gap-3 text-amber-300 text-lg md:text-xl font-medium animate-fade-in">
                                <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
                                <span>An Accountant That Actually Gets Your Business</span>
                                <div className="w-12 h-1 bg-gradient-to-l from-amber-400 to-transparent rounded-full" />
                            </div>

                            {/* Feature Cards Grid - Breaks up text */}
                            <div className="grid md:grid-cols-2 gap-4 text-left mt-8">
                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-amber-500/10 group">
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Users className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Personalized Approach</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        No two clients want the same thing. Whether you're a contractor focused on IR35, a landlord maximizing claims, or a business owner needing accurate numbers—we ask the right questions upfront.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-amber-500/10 group">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Clock className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Fewer Surprises</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        That means fewer surprises at year-end, fewer unanswered emails, and financial decisions made with enough notice to actually act on them—not after the fact.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-amber-500/10 group">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Calendar className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Stay On Top of Deadlines</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        VAT returns, payroll runs, everyday bookkeeping—admin piles up fast. Having an accountant genuinely on top of it means one less thing competing for your attention.
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-amber-500/10 group">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Cloud className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Cloud-First Service</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        Working with contractors, landlords, and businesses across Manchester via cloud accounting, video calls, and same-day digital communication. Nothing gets lost in the post.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-14 text-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                                >
                                    <span>Schedule a Free Consultation</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* Location Tags - Cleaner */}
                            <div className="pt-4">
                                <p className="text-amber-400 font-medium text-sm mb-3">Serving Manchester Areas:</p>
                                <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                                    {manchesterLocations.map((loc, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-amber-400/50 hover:text-amber-300 transition-colors cursor-default"
                                        >
                                            {loc}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── TRUST BAR ──────────────────────────────────────────────────────── */}
                <TrustBar />
                {/* ── ACCOUNTING SERVICES WE PROVIDE (SUPER ELEGANT & COMPACT GRID) ──── */}
                <section className="py-20 bg-slate-950 text-white relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Section Header */}
                        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
                                What We Can Help You With in Manchester
                            </h2>
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
                                                    Manchester Tax
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
                                Who Turns to Us
                            </h2>
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                We work with a broad mix of clients across Manchester, each with different priorities and different definitions of what "good support" looks like. What they have in common is wanting an accountant who understands their situation properly, rather than applying the same advice to everyone.
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
                                    Operating through their own limited company, who'd rather spend their time on client work than on compliance admin.
                                </p>
                            </div>

                            {/* Audience 2: Small Businesses */}
                            <div
                                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
                            >
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white font-display">Small Business Owners</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Who want their finances handled properly and accurately, without the cost of hiring an in-house accountant.
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
                                    Whether newly self-employed or long established, looking to stay ahead of HMRC deadlines rather than scrambling to meet them.
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
                                    That need full-service support annual accounts, tax, payroll and ongoing advice  from one consistent team.
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
                                    From those with a single rental property to those managing a growing multi-property portfolio.
                                </p>
                            </div>

                            {/* Audience 6: Start-ups & Growing Businesses */}
                            <div
                                className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 space-y-3"
                            >
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white font-display">Start-ups</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Looking to build good financial habits from day one, before bad ones have the chance to set in.
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
                                    <span>Trusted Across the North West</span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display leading-tight">
                                    Why Manchester Clients Stick With Us
                                </h2>

                                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                                    <p>
                                        Being based in Bristol doesn't mean being at arm's length. With cloud accounting and a genuinely responsive team behind you, our Manchester clients get answers just as quickly as they would from a firm around the corner whether that's a landlord near Deansgate double-checking an expense before filing a return, or a contractor confirming their IR35 position before signing a new contract.
                                    </p>
                                    <p>
                                        What clients tend to remember isn't the software we use — it's that we pick up the phone, explain things in plain English, and flag potential issues early enough to actually do something about them.</p>
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

                {/* ── WE COVER MANCHESTER AND NEARBY AREAS ─────── */}
                <NearbyLocationsSection currentCity="Manchester" />

                {/* ── GET ACCOUNTING SUPPORT FROM OUR TEAM (FINAL CALL TO ACTION) ─────── */}
                <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-10 sm:p-16 border border-slate-800 shadow-2xl space-y-8 relative">

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="space-y-4">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
                                    Talk to an Accountant Today
                                </h2>
                                <div className="space-y-3 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                                    <p>
                                        If you're looking for a Manchester accountancy firm that's genuinely responsive, easy to reach, and straightforward to deal with, we'd be glad to hear from you. Get in touch and we'll talk through what you actually need  no pressure, no obligation, and no unnecessary jargon along the way.
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
            </Layout >
        </>
    );
};

export default AccountancyFirmInManchester;
