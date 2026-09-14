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
    Briefcase,
    Building2,
    Home,
    Users,
    Calculator,
    FileText,
    Receipt,
    Sparkles,
    Laptop,
    ChevronRight,
    Phone,
    TrendingUp,
    PiggyBank,
    Clock,
    Landmark,
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
    {
        id: "contractor-accounting",
        title: "Contractor Accounting",
        description:
            "IR35 assessments, limited company setup, bookkeeping, VAT, payroll and year end filing, all handled in one place.",
        ctaText: "Explore Contractor Accounting",
        ctaLink: "/services/contractor-accountants",
        icon: Briefcase,
    },
    {
        id: "small-business-accounting",
        title: "Small Business Accounting",
        description:
            "Bookkeeping, VAT returns, payroll and annual accounts, kept accurate and current throughout the year.",
        ctaText: "Discover Small Business Support",
        ctaLink: "/services/small-business-accountants",
        icon: Building2,
    },
    {
        id: "landlord-accounting",
        title: "Landlord Accounting",
        description:
            "Rental income reporting, allowable expenses and portfolio support for a single let or a growing collection of properties.",
        ctaText: "View Landlord Services",
        ctaLink: "/services/landlord-accountants",
        icon: Home,
    },
    {
        id: "payroll-hr",
        title: "Payroll and HR Support",
        description:
            "PAYE, pension auto enrolment and HMRC submissions, run accurately and on schedule every cycle.",
        ctaText: "See Payroll & HR Services",
        ctaLink: "/services/payroll-and-hr-services",
        icon: Users,
    },
    {
        id: "outsourced-finance",
        title: "Outsourced Accounting",
        description:
            "A full finance function for growing businesses not yet ready to hire in house, covering bookkeeping, reporting and cash flow monitoring.",
        ctaText: "Learn About Outsourced Accounting",
        ctaLink: "/services/outsourced-accounting-services",
        icon: Laptop,
    },
    {
        id: "vat-bookkeeping",
        title: "VAT and Bookkeeping",
        description:
            "Clean, current records that make VAT filing and funding applications considerably easier to manage.",
        ctaText: "View VAT & Bookkeeping Services",
        ctaLink: "/services/vat-and-bookkeeping-accounting-services",
        icon: Receipt,
    },
    {
        id: "company-secretarial",
        title: "Company Secretarial Services",
        description:
            "Confirmation statements, Companies House filings and changes to directors or shareholders, tracked so nothing gets missed.",
        ctaText: "Explore Company Secretarial",
        ctaLink: "/services/company-secretarial-services",
        icon: FileText,
    },
    {
        id: "rd-tax-relief",
        title: "R&D Tax Credit Claims",
        description:
            "Eligibility reviews and claim preparation for businesses genuinely investing in innovation.",
        ctaText: "Find Out About R&D Claims",
        ctaLink: "/services/rd-tax-credit-claim",
        icon: Sparkles,
    },
    {
        id: "personal-tax",
        title: "Personal Tax and Self Assessment",
        description:
            "Self assessment filing for dividend income, rental profits and capital gains, explained clearly, not just submitted.",
        ctaText: "View Personal Tax Services",
        ctaLink: "/services/personal-tax-and-self-assessment-service",
        icon: Calculator,
    },
];

const faqs = [
    {
        q: "What's the actual difference between tax planning and just filing my return?",
        a: "A return reports what already happened in a tax year that's now closed. Tax planning looks ahead, while there's still time to make decisions that legitimately change what you'll owe, rather than accepting the outcome after the fact.",
    },
    {
        q: "When's the best time to have a tax planning conversation?",
        a: "Ideally a few months before your tax year or company year end, while decisions like dividend timing, pension contributions or asset disposals can still be adjusted. Leaving it until the return is due removes most of the actual options.",
    },
    {
        q: "I'm a freelancer with irregular income. Is tax planning worth it for someone like me?",
        a: "Often more so than for someone with fixed income, since irregular earnings across dividends, invoices and other sources tend to leave more room for planning around timing and structure.",
    },
    {
        q: "I've got a couple of rental properties in Liverpool and I'm considering selling one. Should I speak to you before or after agreeing to a sale?",
        a: "Before, if at all possible. Once a sale is agreed, most of the Capital Gains Tax planning options have already narrowed considerably.",
    },
    {
        q: "Is this a one off service or an ongoing one?",
        a: "Either, depending on what suits you. Some clients want a single review ahead of a specific decision, others prefer revisiting their position annually as income and circumstances change.",
    },
];

const TaxPlanningLiverpool: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const scrollToServices = () => {
        const servicesElement = document.getElementById("services");
        if (servicesElement) {
            servicesElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: "Henleaze Tax Consultancy - Tax Planning Liverpool",
        url: "https://henleazetaxconsultancy.com/tax-planning-liverpool",
        logo: "https://henleazetaxconsultancy.com/logo.jpg",
        description:
            "Proactive tax planning for contractors, landlords and small businesses in Liverpool. Dividend timing, CGT, pensions and more. Free consultation.",
        priceRange: "££",
        areaServed: {
            "@type": "City",
            name: "Liverpool",
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Merseyside",
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
                <title>Tax Planning in Liverpool | Reduce Your Tax Bill</title>
                <meta
                    name="description"
                    content="Proactive tax planning for contractors, landlords and small businesses in Liverpool. Dividend timing, CGT, pensions and more. Free consultation."
                />
                <link
                    rel="canonical"
                    href="https://henleazetaxconsultancy.com/tax-planning-liverpool"
                />
                <meta
                    property="og:title"
                    content="Tax Planning in Liverpool | Reduce Your Tax Bill"
                />
                <meta
                    property="og:description"
                    content="Proactive tax planning for contractors, landlords and small businesses in Liverpool. Dividend timing, CGT, pensions and more. Free consultation."
                />
                <meta
                    property="og:url"
                    content="https://henleazetaxconsultancy.com/tax-planning-liverpool"
                />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-navy text-white">

                {/* Background Effects */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-gold/20 rounded-full blur-3xl"></div>

                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>

                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ================= HERO ================= */}

                    <div className="max-w-4xl mx-auto text-center">

                        {/* Location Badge */}

                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-sm font-semibold mb-6 shadow-lg">

                            <MapPin className="h-4 w-4 text-gold" />

                            <span>Tax Planning in Liverpool</span>

                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">

                            <span className="bg-gradient-to-r from-white via-slate-100 to-gold bg-clip-text text-transparent">

                                Tax Planning in Liverpool

                            </span>

                            <br />

                            <span className="text-white">
                                Reduce Your Tax Bill the Right Way
                            </span>

                        </h1>

                        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-8 text-slate-300">

                            <p>
                                Filing a tax return tells HMRC what happened. <Link to="/what-is-tax-planning-uk-guide" className="text-gold hover:underline font-semibold">Tax planning</Link> is the part that happens before that, when there's still time to change the outcome. The distinction matters more than most people realise, because once a tax year closes, most of your options close with it.
                            </p>

                            <p>
                                Henleaze Tax Consultancy provides tax planning for contractors, freelancers, landlords and small business owners across Liverpool. We're based in Bristol and for this particular service that barely registers, since the work is a conversation about your numbers and your plans, conducted over video call or phone, not something that needs an office visit either way.
                            </p>

                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">

                            <Button
                                asChild
                                size="lg"
                                className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
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
                                className="border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-8 py-6 rounded-full transition-all duration-300"
                            >
                                Explore Services
                                <ChevronDown className="ml-2 h-5 w-5 text-gold" />
                            </Button>

                        </div>

                    </div>

                    {/* ================= WHY HENLEAZE SECTION ================= */}

                    <div className="relative mt-24 max-w-6xl mx-auto">

                        {/* Decorative Glow */}

                        <div className="absolute -top-10 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>

                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

                            {/* Gold Accent */}

                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-yellow-400 to-gold"></div>

                            <div className="p-8 md:p-12 lg:p-16">

                                <div className="mb-10">

                                    <div className="flex items-center gap-4 mb-5">

                                        <div className="w-16 h-[2px] bg-gold"></div>

                                        <span className="uppercase tracking-[0.35em] text-xs font-semibold text-gold">
                                            Where Liverpool Clients Save the Most
                                        </span>

                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">

                                        The Four Areas Where Liverpool Clients Usually Save the Most

                                    </h2>

                                </div>

                                <div className="grid lg:grid-cols-2 gap-10 text-slate-300 text-lg leading-9">

                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
                                                    <TrendingUp className="h-5 w-5" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white">Salary Versus Dividend Planning</h3>
                                            </div>
                                            <p>
                                                If you run a limited company, how you split income between salary and dividends changes what you owe, and the right balance shifts depending on your other income, your company's profits, and changes to tax thresholds each year. We review this properly rather than defaulting to the same split every year regardless of circumstances.
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
                                                    <Landmark className="h-5 w-5" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white">Capital Gains Tax on Property and Business Assets</h3>
                                            </div>
                                            <p>
                                                Liverpool's rental market has drawn in a steady number of landlords building small portfolios over recent years and CGT planning matters most before a sale happens, not after. The same applies to business owners planning an eventual sale or restructure. Once a disposal is underway, most of the planning options have already narrowed.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
                                                    <Clock className="h-5 w-5" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white">Corporation Tax and Timing of Expenditure</h3>
                                            </div>
                                            <p>
                                                Beyond simply calculating what's owed, decisions around when to invest in equipment, how profit is retained versus extracted and how capital allowances are used can genuinely change a company's tax bill but only if they're made before the year end, not after.
                                            </p>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
                                                    <PiggyBank className="h-5 w-5" />
                                                </div>
                                                <h3 className="text-xl font-bold text-white">Pension Contributions</h3>
                                            </div>
                                            <p>
                                                Company and personal pension contributions remain one of the most reliable ways to reduce a tax bill while building long term value and the annual allowance rules catch people out more often than they should, particularly for anyone with variable or higher than usual income in a given year.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-10 pt-8 border-t border-white/10">
                                    <p className="text-slate-400 text-base">
                                        Full detail on how this works sits on our{" "}
                                        <Link to="/services/tax-planning" className="text-gold hover:underline font-semibold">
                                            tax planning
                                        </Link>{" "}
                                        service page.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* TRUST BAR */}
            <TrustBar />


            {/* OTHER WAYS WE CAN HELP LIVERPOOL CLIENTS */}
            <section id="services" className="py-24 bg-gradient-to-b from-blue-950 via-slate-900 to-navy text-white relative overflow-hidden">
                {/* Subtle Glow Background Effects */}
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full inline-block mb-3 shadow-sm">
                            Full Spectrum Support
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                            Other Ways We Can Help Liverpool Clients
                        </h2>
                        <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                            Tax planning tends to work best alongside the rest of your accounting, so here's a quick look at what else we cover.
                        </p>
                        <div className="w-24 h-1.5 bg-gold mx-auto mt-5 rounded-full shadow-lg shadow-gold/30" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {servicesData.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 hover:border-gold/60 shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.18)] transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
                                >
                                    {/* Subtle Card Accent Light */}
                                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-gold/20 transition-all duration-500" />

                                    <div>
                                        <div className="h-14 w-14 rounded-2xl bg-blue-600/20 group-hover:bg-gold flex items-center justify-center text-blue-400 group-hover:text-navy transition-all duration-300 mb-6 shadow-inner">
                                            <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
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

                    {/* View All Services CTA */}
                    <div className="text-center mt-12">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 font-bold px-10 py-6 rounded-full transition-all duration-300 hover:scale-105"
                        >
                            <Link to="/services">
                                View All Services
                                <ArrowRight className="ml-2 h-5 w-5 text-gold" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* YEAR END TIMING & WHAT THIS LOOKS LIKE FOR LIVERPOOL CLIENTS */}
            <section className="relative overflow-hidden py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white">

                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Badge */}

                    <div className="text-center mb-20">
                        <span className="inline-flex items-center rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.35em] text-gold">
                            Why Timing Matters
                        </span>
                    </div>

                    {/* ========================= CARD 1 ========================= */}

                    <div className="relative max-w-6xl mx-auto mb-14">

                        <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-gold via-yellow-300 to-gold"></div>

                        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_50px_rgba(212,175,55,.08)]">

                            <div className="absolute right-10 top-6 text-7xl md:text-8xl font-black text-gold/10 select-none">
                                01
                            </div>

                            <div className="max-w-4xl">

                                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                                    Why Year End Timing Matters More Than People Expect
                                </h2>

                                <p className="text-slate-300 text-lg leading-9">
                                    Most of the value in tax planning comes from decisions made in the months before your tax year closes, not the weeks after. A dividend taken in March instead of April, a pension contribution made before rather than after year end, an asset sold in one tax year instead of the next, these can each change what you owe by a meaningful amount. Once the year has closed, the return simply reports what already happened. That's why we'd rather have this conversation with you in good time, not as a rushed add on to filing your return.
                                </p>

                                <div className="mt-8">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-gold hover:bg-gold-light text-navy font-bold px-8 py-5 rounded-full shadow-xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
                                    >
                                        <Link to="/calculator">
                                            Get a Quick Estimate
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ========================= CARD 2 ========================= */}

                    <div className="relative max-w-6xl mx-auto mb-14 flex justify-end">

                        <div className="w-full lg:w-[90%]">

                            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_50px_rgba(212,175,55,.08)]">

                                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-gold via-yellow-300 to-gold"></div>

                                <div className="absolute right-10 top-6 text-7xl md:text-8xl font-black text-gold/10 select-none">
                                    02
                                </div>

                                <div className="max-w-4xl">

                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                                        What This Tends to Look Like for Liverpool Clients
                                    </h2>

                                    <p className="text-slate-300 text-lg leading-9">
                                        A fair share of the Liverpool clients who come to us for tax planning are limited company contractors and freelancers who'd never had their{" "}
                                        <Link to="/dividend-tax-rates-2026-27" className="text-gold hover:underline font-semibold">
                                            salary and dividend
                                        </Link>{" "}
                                        split properly reviewed, often in the city's growing digital and creative sector. Others are landlords with a small but growing portfolio, wanting a proper look at their Capital Gains Tax position before deciding whether to sell or hold. A steady group are small business owners who've been consistently profitable but had never sat down to plan around it, rather than just accepting whatever the year end bill happened to be.
                                    </p>

                                    <div className="mt-8">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-5 rounded-full transition-all duration-300 hover:scale-105"
                                        >
                                            <Link to="/contact">
                                                Get in Touch
                                                <ArrowRight className="ml-2 h-5 w-5 text-gold" />
                                            </Link>
                                        </Button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ========================= CARD 3 ========================= */}

                    <div className="relative max-w-6xl mx-auto mb-20">

                        <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-gold via-yellow-300 to-gold"></div>

                        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_50px_rgba(212,175,55,.08)]">

                            <div className="absolute right-10 top-6 text-7xl md:text-8xl font-black text-gold/10 select-none">
                                03
                            </div>

                            <div className="max-w-4xl">

                                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                                    How the Fee Works
                                </h2>

                                <p className="text-slate-300 text-lg leading-9">
                                    Every tax planning review is agreed on a fixed fee before we start, based on the complexity of your income and structure. There's no hourly billing, so the cost reflects the actual work involved, not how long the conversation runs.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* CTA */}

                    <div className="text-center">

                        <Button
                            asChild
                            size="lg"
                            className="bg-gold hover:bg-gold-light text-navy font-bold px-10 py-6 rounded-full shadow-xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
                        >
                            <Link to="/pricing">
                                See Our Pricing
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                    </div>

                </div>

            </section>



            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                            Frequently Asked Questions About Tax Planning in Liverpool
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
                                        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50/80 transition-colors"
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

            {/* WE COVER LIVERPOOL AND NEARBY AREAS */}
            <NearbyLocationsSection currentCity="Liverpool" />

            {/* LATEST BLOGS & GUIDES */}
            <LatestBlogsSection />

            {/* FINAL CTA - HAVE A PROPER CONVERSATION */}
            <section className="py-24 bg-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Have a Proper Conversation About Your Tax Position
                    </h2>

                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        If you're in Liverpool and want a genuine look at whether you're paying more than you need to, get in touch. A first conversation is free and doesn't commit you to anything further.
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

export default TaxPlanningLiverpool;
