import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import NearbyLocationsSection from "@/components/common/NearbyLocationsSection";
import LatestBlogsSection from "@/components/common/LatestBlogsSection";
import TrustBar from "@/components/home/TrustBar";
import { Button } from "@/components/ui/button";
import {
    MapPin,
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
    Laptop,
    Clock,
    PiggyBank,
    ShieldAlert,
    Code2,
    Phone,
    CheckCircle2,
    Coins,
    BarChart3,
    Zap,
    Scale,
} from "lucide-react";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    icon: React.ElementType;
    badge?: string;
}

const servicesData: ServiceItem[] = [
    {
        id: "contractor-accounting",
        title: "Contractor Accounting",
        description:
            "IR35 assessments, limited company setup and structuring, bookkeeping, VAT, payroll and year end filing, all handled in one place alongside your tax planning.",
        ctaText: "Explore Contractor Accounting",
        ctaLink: "/services/contractor-accountants",
        icon: Briefcase,
        badge: "Specialist",
    },
    {
        id: "small-business-accounting",
        title: "Small Business Accounting",
        description:
            "Bookkeeping, VAT and payroll kept accurate and current, the foundation that makes proper planning possible in the first place.",
        ctaText: "Discover Small Business Support",
        ctaLink: "/services/small-business-accountants",
        icon: Building2,
    },
    {
        id: "landlord-accounting",
        title: "Landlord Accounting",
        description:
            "Rental income reporting and Capital Gains Tax planning, for directors who also hold property alongside their company.",
        ctaText: "View Landlord Services",
        ctaLink: "/services/landlord-accountants",
        icon: Home,
    },
    {
        id: "payroll-hr",
        title: "Payroll and HR Support",
        description:
            "PAYE, pension auto enrolment and HMRC submissions, run accurately for your own salary and any employees.",
        ctaText: "See Payroll & HR Services",
        ctaLink: "/services/payroll-and-hr-services",
        icon: Users,
    },
    {
        id: "outsourced-finance",
        title: "Outsourced Accounting",
        description:
            "A full finance function for growing companies not yet ready to bring this in house.",
        ctaText: "Learn About Outsourced Finance",
        ctaLink: "/services/outsourced-accounting-services",
        icon: Laptop,
        badge: "Growth",
    },
    {
        id: "vat-bookkeeping",
        title: "VAT and Bookkeeping",
        description:
            "Clean, current records that make VAT filing and any funding conversation considerably easier.",
        ctaText: "View VAT & Bookkeeping",
        ctaLink: "/services/vat-and-bookkeeping-accounting-services",
        icon: Receipt,
    },
    {
        id: "company-secretarial",
        title: "Company Secretarial Services",
        description:
            "Confirmation statements, Companies House filings and director or shareholder changes, tracked so nothing gets missed.",
        ctaText: "Explore Company Secretarial",
        ctaLink: "/services/company-secretarial-services",
        icon: FileText,
    },
    {
        id: "rd-tax-relief",
        title: "R&D Tax Credit Claims",
        description:
            "Eligibility review and claim preparation for genuinely innovative development work.",
        ctaText: "Find Out About R&D Claims",
        ctaLink: "/services/rd-tax-credit-claim",
        icon: Sparkles,
        badge: "Tech & Fintech",
    },
    {
        id: "personal-tax",
        title: "Personal Tax and Self Assessment",
        description:
            "Self assessment filing for dividend income, rental profits and capital gains, explained clearly alongside your company accounts.",
        ctaText: "View Personal Tax Services",
        ctaLink: "/services/personal-tax-and-self-assessment-service",
        icon: Calculator,
    },
];

const faqs = [
    {
        q: "I contract through an umbrella company. Do the new April 2026 rules mean I'm personally liable for unpaid tax?",
        a: "No, the new joint and several liability rules place responsibility on the recruitment agency or end client in the supply chain, not on you as the worker. That said, it's a good moment to review whether operating through your own limited company might now suit you better.",
    },
    {
        q: "What's the actual benefit of reviewing my salary and dividend split rather than just leaving it as it is?",
        a: "Thresholds and tax rates change most years, and your company's profits change too, so a split that made sense two years ago may not be the most efficient one now. A short review can catch that before it costs you anything.",
    },
    {
        q: "I run a small software or digital company in Manchester. Could I actually qualify for R&D relief?",
        a: "Quite possibly. A lot of directors assume R&D relief is only for larger, dedicated research businesses, but genuine technical development work, including for smaller SaaS or fintech companies, frequently qualifies.",
    },
    {
        q: "When should I have this conversation, relative to my company's year end?",
        a: "Ideally a few months before, while there's still time to adjust dividend timing, capital spend or pension contributions. Once the year has closed, most of the planning options have already gone.",
    },
    {
        q: "Is this a one off review or an ongoing service?",
        a: "Either. Some directors want a single review ahead of a specific decision, others prefer revisiting their position every year as the company grows.",
    },
];

const valuePillars = [
    {
        icon: Coins,
        number: "01",
        title: "Salary and dividend planning",
        description:
            "The split between salary and dividends changes what you owe overall and the right balance shifts depending on your company's profits, your other income and tax thresholds that move most years. We review this ahead of your company's year end, not as an afterthought.",
        tag: "Profit Extraction",
    },
    {
        icon: Clock,
        number: "02",
        title: "Corporation tax and capital allowances",
        description:
            "Timing of equipment purchases, software investment and other capital spend can meaningfully change what your company owes, but only if the decision is made before your accounting year closes.",
        tag: "Timing Strategy",
    },
    {
        icon: PiggyBank,
        number: "03",
        title: "Profit extraction beyond salary and dividends",
        description:
            "Pension contributions made by the company, for example, can reduce corporation tax while building personal wealth tax efficiently, often overlooked by directors focused only on the salary versus dividend question.",
        tag: "Long-Term Wealth",
    },
    {
        icon: Scale,
        number: "04",
        title: "Umbrella versus limited company structuring",
        description:
            "With new liability rules affecting umbrella arrangements from April 2026, it's worth a proper conversation about whether your current setup, or a change to it, still makes sense given how you actually work.",
        tag: "April 2026 Ready",
    },
    {
        icon: Code2,
        number: "05",
        title: "R&D tax relief for software and technical development",
        description:
            "Given how much of Manchester's growth sits in fintech, SaaS and digital media, genuine software development work often qualifies for R&D relief, even for smaller limited companies that don't think of themselves as an innovation focused business.",
        tag: "Innovation Relief",
    },
];

const marketStats = [
    {
        stat: "3,200+",
        label: "New Tech Companies",
        sub: "Registered in Greater Manchester in 2024 alone",
    },
    {
        stat: "240+",
        label: "Fintech Enterprises",
        sub: "Supporting close to 10,000 regional sector jobs",
    },
    {
        stat: "MediaCityUK",
        label: "Digital & Broadcast Hub",
        sub: "Salford Quays cluster driving freelance & contract talent",
    },
    {
        stat: "April 2026",
        label: "Supply Chain Tax Reform",
        sub: "Joint & several liability transforming umbrella setups",
    },
];

const TaxPlanningManchester: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: "Henleaze Tax Consultancy - Tax Planning Manchester",
        url: "https://henleazetaxconsultancy.com/tax-planning-manchester",
        logo: "https://henleazetaxconsultancy.com/logo.jpg",
        description:
            "Specialist tax planning for contractors and limited company directors in Manchester. Dividend timing, corporation tax, R&D relief. Free consultation.",
        priceRange: "££",
        areaServed: {
            "@type": "City",
            name: "Manchester",
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Greater Manchester",
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
                <title>Tax Planning for Manchester Contractors & Directors</title>
                <meta
                    name="description"
                    content="Specialist tax planning for contractors and limited company directors in Manchester. Dividend timing, corporation tax, R&D relief. Free consultation."
                />
                <link
                    rel="canonical"
                    href="https://henleazetaxconsultancy.com/tax-planning-manchester"
                />
                <meta
                    property="og:title"
                    content="Tax Planning for Manchester Contractors & Directors"
                />
                <meta
                    property="og:description"
                    content="Specialist tax planning for contractors and limited company directors in Manchester. Dividend timing, corporation tax, R&D relief. Free consultation."
                />
                <meta
                    property="og:url"
                    content="https://henleazetaxconsultancy.com/tax-planning-manchester"
                />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* =========================================================================
                HERO SECTION - BESPOKE MODERN DARK GRADIENT WITH MESH GLOW & TECH ACCENTS
               ========================================================================= */}
            <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-950 text-white">
                {/* Dynamic Ambient Background Glows */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-gold/20 rounded-full blur-[140px]" />
                    <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -left-20 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
                    {/* Subtle Grid Lines for modern tech aesthetic */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Location & Focus Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 via-white/10 to-gold/15 backdrop-blur-md border border-white/20 text-gold text-xs sm:text-sm font-semibold mb-8 shadow-xl hover:border-gold/50 transition-all duration-300">
                            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
                            <MapPin className="h-4 w-4 text-gold" />
                            <span>Manchester & Greater Manchester</span>
                            <span className="text-slate-400">|</span>
                            <span className="text-slate-200">Contractors & Directors</span>
                        </div>

                        {/* H1 Heading */}
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-8 tracking-tight">
                            <span className="text-white">Tax Planning in Manchester for </span>
                            <span className="bg-gradient-to-r from-gold via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                                Contractors and Limited Company Directors
                            </span>
                        </h1>

                        {/* SEO Hero Paragraphs */}
                        <div className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
                            <p>
                                Running your own limited company gives you far more control over your tax position than working PAYE ever would, but only if that control actually gets used. A lot of limited company directors pay more tax than they need to simply because nobody ever sat down with them to plan the year properly, rather than just filing whatever the numbers happened to be at year end.
                            </p>
                            <p>
                                Henleaze Tax Consultancy provides{" "}
                                <Link
                                    to="/services/tax-planning"
                                    className="text-gold hover:text-amber-300 underline decoration-gold/50 underline-offset-4 hover:decoration-gold font-semibold transition-colors"
                                >
                                    tax planning
                                </Link>{" "}
                                for contractors and limited company directors across Manchester. We're based in Bristol, and for this kind of work that's genuinely irrelevant, since it's a conversation about your numbers and your options, conducted over video call or phone rather than requiring anyone to travel.
                            </p>
                        </div>

                        {/* Hero CTAs */}
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto bg-gradient-to-r from-gold via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-gold text-slate-950 font-bold px-8 py-6 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] hover:scale-105 transition-all duration-300"
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
                                className="w-full sm:w-auto border-white/25 bg-slate-900/60 backdrop-blur-md hover:bg-white/10 hover:text-gold text-white px-8 py-6 rounded-full transition-all duration-300 hover:border-gold/50"
                            >
                                <Link to="/calculator">
                                    <Calculator className="mr-2 h-5 w-5 text-gold" />
                                    Get a Quick Estimate
                                </Link>
                            </Button>
                        </div>

                        {/* Key Pillars Highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
                            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                                <span className="text-xs text-slate-400 block font-medium">Core Focus</span>
                                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                                    <Coins className="h-4 w-4 text-gold" /> Dividend Timing
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                                <span className="text-xs text-slate-400 block font-medium">Corporation Tax</span>
                                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                                    <BarChart3 className="h-4 w-4 text-gold" /> Capital Allowances
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                                <span className="text-xs text-slate-400 block font-medium">Innovation</span>
                                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                                    <Sparkles className="h-4 w-4 text-gold" /> R&D Tax Relief
                                </span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                                <span className="text-xs text-slate-400 block font-medium">April 2026 Setup</span>
                                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                                    <Scale className="h-4 w-4 text-gold" /> Umbrella vs Ltd
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <TrustBar />

            {/* =========================================================================
                MANCHESTER CONTRACTOR MARKET & APRIL 2026 COMPLEXITY
               ========================================================================= */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-navy text-white relative overflow-hidden">
                <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                            <Zap className="h-3.5 w-3.5 text-gold" />
                            Market Intelligence
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Manchester's Contractor Market is Growing Fast, and So is the Complexity
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5" />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
                        {marketStats.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-2xl p-6 bg-slate-900/80 backdrop-blur-md border border-white/10 hover:border-gold/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
                            >
                                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent mb-2">
                                    {item.stat}
                                </div>
                                <div className="text-base font-bold text-white mb-1.5 group-hover:text-gold transition-colors">
                                    {item.label}
                                </div>
                                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                    {item.sub}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Editorial Content Split Cards */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Narrative Block 1 */}
                        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-900/90 to-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-gold/40 transition-all duration-500">
                            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-gold/20 group-hover:text-gold transition-all duration-300">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Tech, Fintech & MediaCityUK Hub
                            </h3>
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                Greater Manchester registered over 3,200 new tech companies in 2024 alone, and its fintech sector now supports around 240 firms and close to 10,000 jobs, one of the largest concentrations outside London. Add MediaCityUK at Salford Quays, home to the BBC, ITV and a growing cluster of production and digital media companies, and Manchester has one of the most active contractor and limited company director populations in the North of England.
                            </p>
                        </div>

                        {/* Narrative Block 2 - April 2026 Focus */}
                        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-blue-950/40 border border-amber-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-gold/60 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />
                            <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-slate-950 transition-all duration-300">
                                <ShieldAlert className="h-6 w-6" />
                            </div>
                            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
                                April 2026 Supply Chain Rule Change
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-4">
                                Rising Stakes for Profit Extraction & Setup
                            </h3>
                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                                That growth comes with genuine tax complexity. New rules taking effect from 6 April 2026 make recruitment agencies and end clients jointly and severally liable for unpaid PAYE where a contractor works through an umbrella company, a change that's already pushing more contractors to reconsider whether operating through their own limited company is the better long term structure. For directors already working this way, that only raises the stakes on getting dividend and profit extraction planning right.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                WHERE LIMITED COMPANY DIRECTORS IN MANCHESTER FIND VALUE (5 PILLARS)
               ========================================================================= */}
            <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-gold bg-gold/10 border border-gold/20 px-4 py-1.5 rounded-full inline-block mb-4">
                            Strategic Tax Pillars
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Where Limited Company Directors in Manchester Usually Find the Most Value
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                            Proactive steps tailored to high-growth tech contractors, creative media directors, and limited companies across Greater Manchester.
                        </p>
                        <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
                    </div>

                    {/* 5 Pillar Modern Card Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {valuePillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            const isSpanTwo = index === 3 || index === 4;
                            return (
                                <div
                                    key={pillar.number}
                                    className={`group rounded-3xl p-8 bg-slate-900/70 border border-white/10 hover:border-gold/60 backdrop-blur-xl shadow-xl hover:shadow-[0_15px_40px_rgba(212,175,55,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden ${isSpanTwo && index === 3 ? "lg:col-span-1 md:col-span-1" : ""
                                        } ${index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                                        }`}
                                >
                                    {/* Ambient Hover Accent */}
                                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/25 transition-all duration-500" />

                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-gold flex items-center justify-center text-gold group-hover:text-slate-950 transition-all duration-300 shadow-inner">
                                                <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:border-gold/40 group-hover:text-gold transition-colors">
                                                    {pillar.tag}
                                                </span>
                                                <span className="text-2xl font-black text-white/20 group-hover:text-gold/40 transition-colors">
                                                    {pillar.number}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                                            {pillar.title}
                                        </h3>

                                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-gold group-hover:translate-x-1 transition-transform">
                                        <span>Covered in comprehensive tax review</span>
                                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* View All Services Link */}
                    <div className="text-center mt-12">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:border-gold/60"
                        >
                            <Link to="/services">
                                View All Services
                                <ArrowRight className="ml-2 h-5 w-5 text-gold" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                WHY THIS MATTERS MORE FOR MANCHESTER CONTRACTORS (SPOTLIGHT)
               ========================================================================= */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-navy via-slate-900 to-slate-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-navy/80 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                            {/* Decorative Gold Border Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-amber-300 to-yellow-500" />
                            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-[2px] bg-gold" />
                                        <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold">
                                            Tailored Regional Insight
                                        </span>
                                    </div>

                                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
                                        Why This Matters More for Manchester's Contractor Population Specifically
                                    </h2>

                                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                                        A city with this many limited company contractors and fintech or media focused directors tends to have more genuinely complex tax positions than most, dividend income sitting alongside freelance invoices, R&D eligible development work sitting alongside standard trading activity, and company structures that made sense a few years ago but haven't been reviewed since. None of that resolves itself by simply filing accurately each year. It needs an actual conversation, ideally before your company year ends, not after.
                                    </p>
                                </div>

                                <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300 text-center"
                                    >
                                        <Link to="/calculator">
                                            Get a Quick Estimate
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>

                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-white/20 hover:bg-white/10 text-black hover:text-white font-bold px-8 py-6 rounded-full transition-all duration-300 text-center"
                                    >
                                        <Link to="/contact">
                                            Book Free Call
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                HOW TAX PLANNING CONNECTS TO THE REST OF YOUR ACCOUNTING
               ========================================================================= */}
            <section id="services" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
                            Connected Accounting
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                            How Tax Planning Connects to the Rest of Your Accounting
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                            Tax planning is most powerful when joined up with your ongoing bookkeeping, payroll, VAT and annual filings.
                        </p>
                        <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {servicesData.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-7 border border-white/10 hover:border-gold/60 shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.16)] transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
                                >
                                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-gold/20 transition-all duration-500" />

                                    <div>
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="h-12 w-12 rounded-xl bg-blue-600/20 group-hover:bg-gold flex items-center justify-center text-blue-400 group-hover:text-slate-950 transition-all duration-300 shadow-inner">
                                                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                                            </div>
                                            {service.badge && (
                                                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                                                    {service.badge}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <Button
                                            asChild
                                            className="w-full justify-between bg-gold hover:bg-gold-light text-navy font-bold rounded-xl shadow-md hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300 text-sm"
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
                </div>
            </section>

            {/* =========================================================================
                PRACTICE & FEE SECTION (MODERN DUAL FEATURE CARDS)
               ========================================================================= */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-navy text-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-14">
                        {/* What This Tends to Look Like in Practice */}
                        <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_10px_40px_rgba(212,175,55,0.1)] flex flex-col justify-between">
                            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="h-10 w-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gold">
                                        Client Scenarios
                                    </span>
                                </div>

                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
                                    What This Tends to Look Like in Practice
                                </h2>

                                <p className="text-slate-300 text-base leading-relaxed mb-6">
                                    Most of the Manchester directors who come to us for tax planning run limited companies in tech, fintech or media production, often contracting into or alongside the businesses clustered around MediaCityUK and the city's growing SaaS scene. A good number came to us specifically after hearing about the umbrella company liability changes and wanting to understand whether their current setup still made sense. Others have simply been running a profitable company for years without ever having the salary, dividend and pension question properly reviewed together.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-5 rounded-full transition-all duration-300 hover:border-gold/60"
                                >
                                    <Link to="/contact">
                                        Get in touch if any of that sounds close to your situation
                                        <ArrowRight className="ml-2 h-4 w-4 text-gold" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* How the Fee Works */}
                        <div className="relative rounded-3xl border border-gold/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-950/50 backdrop-blur-xl p-8 sm:p-10 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] flex flex-col justify-between">
                            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                            <div>
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                                        <Receipt className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gold">
                                        Transparent Pricing
                                    </span>
                                </div>

                                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
                                    How the Fee Works
                                </h2>

                                <p className="text-slate-300 text-base leading-relaxed mb-6">
                                    Every tax planning review is agreed on a fixed fee before we start, based on the complexity of your company structure and income. There's no hourly billing, so the cost reflects the actual work involved.
                                </p>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 text-gold mr-2.5 shrink-0" />
                                        Clear fixed fee agreed upfront before any work begins
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 text-gold mr-2.5 shrink-0" />
                                        No hidden charges, surprise bills, or hourly timers
                                    </li>
                                    <li className="flex items-center text-sm text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 text-gold mr-2.5 shrink-0" />
                                        Priced according to your exact structure and income streams
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold px-8 py-5 rounded-full shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
                                >
                                    <Link to="/pricing">
                                        See Our Pricing
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================================
                FREQUENTLY ASKED QUESTIONS SECTION
               ========================================================================= */}
            <section className="py-20 lg:py-24 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block mb-3">
                            Direct Answers
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy">
                            Frequently Asked Questions About Tax Planning in Manchester
                        </h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
                                        ? "border-gold/70 shadow-md bg-amber-50/20"
                                        : "border-slate-200/90 hover:border-slate-300 bg-white"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/70 transition-colors"
                                    >
                                        <span className="font-display font-bold text-lg text-navy pr-4">
                                            {faq.q}
                                        </span>
                                        <div
                                            className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                                                ? "bg-gold text-slate-950"
                                                : "bg-slate-100 text-slate-500"
                                                }`}
                                        >
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""
                                                    }`}
                                            />
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6 pt-1 text-slate-700 text-base leading-relaxed border-t border-slate-100/80">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WE COVER MANCHESTER AND NEARBY AREAS */}
            {/* <NearbyLocationsSection currentCity="Manchester" /> */}

            {/* LATEST BLOGS & GUIDES */}
            {/* <LatestBlogsSection /> */}

            {/* =========================================================================
                FINAL HERO CTA SECTION
               ========================================================================= */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                {/* Glow lights */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-gold/15 via-blue-600/20 to-indigo-600/15 rounded-full blur-[140px]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles className="h-3.5 w-3.5" />
                        Complimentary Initial Discovery
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Let's Review Your Company's Tax Position Properly
                    </h2>

                    <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        If you're a contractor or limited company director in Manchester and want a genuine look at whether your current structure is still working for you, get in touch. A first conversation is free and doesn't commit you to anything further.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-gradient-to-r from-gold via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-gold text-slate-950 font-bold text-base px-10 py-6 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_45px_rgba(212,175,55,0.55)] hover:scale-105 transition-all duration-300"
                        >
                            <Link to="/contact">
                                Book a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <a
                            href="tel:+447949956279"
                            className="w-full sm:w-auto inline-flex items-center justify-center text-white hover:text-gold font-bold text-base transition-all py-3.5 px-8 rounded-full border border-white/20 hover:border-gold/50 bg-slate-900/60 backdrop-blur-sm shadow-sm"
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

export default TaxPlanningManchester;
