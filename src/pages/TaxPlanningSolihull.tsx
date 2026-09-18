import React, { useState, useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
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
    Phone,
    TrendingUp,
    PiggyBank,
    Clock,
    Landmark,
    Shield,
    Layers,
    Target,
    BarChart3,
} from "lucide-react";

/* ─────────── scroll-reveal hook ─────────── */
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, visible };
}

/* ─────────── data ─────────── */
interface ServiceItem {
    id: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    icon: React.ElementType;
    accent?: string;
}

const servicesData: ServiceItem[] = [
    {
        id: "contractor-accounting",
        title: "Contractor Accounting",
        description:
            "IR35 assessments, limited company setup, bookkeeping, VAT, payroll and year end filing, for contractors working across Solihull and the wider UK Central Hub.",
        ctaText: "Explore Contractor Accounting",
        ctaLink: "/services/contractor-accountants",
        icon: Briefcase,
        accent: "from-blue-500 to-indigo-600",
    },
    {
        id: "small-business-accounting",
        title: "Small Business Accounting",
        description:
            "Bookkeeping, VAT and payroll kept accurate and current, the foundation that makes any real planning possible.",
        ctaText: "Discover Small Business Support",
        ctaLink: "/services/small-business-accountants",
        icon: Building2,
        accent: "from-emerald-500 to-teal-600",
    },
    {
        id: "landlord-accounting",
        title: "Landlord Accounting",
        description:
            "Rental income reporting and Capital Gains Tax planning for business owners who also hold investment property.",
        ctaText: "View Landlord Services",
        ctaLink: "/services/landlord-accountants",
        icon: Home,
        accent: "from-amber-500 to-orange-600",
    },
    {
        id: "payroll-hr",
        title: "Payroll and HR Support",
        description:
            "PAYE, pension auto enrolment and HMRC submissions, run accurately for your own salary and any employees.",
        ctaText: "See Payroll & HR Services",
        ctaLink: "/services/payroll-and-hr-services",
        icon: Users,
        accent: "from-rose-500 to-pink-600",
    },
    {
        id: "outsourced-finance",
        title: "Outsourced Accounting",
        description:
            "A full finance function for growing Solihull businesses not yet ready to bring this in house.",
        ctaText: "Learn About Outsourced Accounting",
        ctaLink: "/services/outsourced-accounting-services",
        icon: Laptop,
        accent: "from-violet-500 to-purple-600",
    },
    {
        id: "vat-bookkeeping",
        title: "VAT and Bookkeeping",
        description:
            "Clean, current records that make VAT filing and any funding conversation considerably easier.",
        ctaText: "View VAT & Bookkeeping Services",
        ctaLink: "/services/vat-and-bookkeeping-accounting-services",
        icon: Receipt,
        accent: "from-cyan-500 to-blue-600",
    },
    {
        id: "company-secretarial",
        title: "Company Secretarial Services",
        description:
            "Confirmation statements, Companies House filings and director or shareholder changes, tracked so nothing gets missed.",
        ctaText: "Explore Company Secretarial",
        ctaLink: "/services/company-secretarial-services",
        icon: FileText,
        accent: "from-slate-400 to-slate-600",
    },
    {
        id: "rd-tax-relief",
        title: "R&D Tax Credit Claims",
        description:
            "Eligibility review and claim preparation for genuinely innovative development work, relevant given Solihull's advanced engineering and future mobility sector.",
        ctaText: "Find Out About R&D Claims",
        ctaLink: "/services/rd-tax-credit-claim",
        icon: Sparkles,
        accent: "from-yellow-500 to-amber-600",
    },
    {
        id: "personal-tax",
        title: "Personal Tax and Self Assessment",
        description:
            "Self assessment filing for dividend income, rental profits and capital gains, explained clearly alongside your business accounts.",
        ctaText: "View Personal Tax Services",
        ctaLink: "/services/personal-tax-and-self-assessment-service",
        icon: Calculator,
        accent: "from-lime-500 to-green-600",
    },
];

const valuePillars = [
    {
        icon: BarChart3,
        title: "Corporation Tax and Capital Allowances",
        description:
            "With the corporation tax rate now split between the small profits rate and the main rate, with marginal relief in between, timing of capital expenditure and how profit is structured can genuinely change which band you fall into. This matters more than most owners realise.",
    },
    {
        icon: TrendingUp,
        title: "Salary and Dividend Planning",
        description:
            "For owner-managed limited companies, the split between salary and dividends changes what you personally take home and the right balance shifts as your company's profits and personal circumstances change year to year.",
    },
    {
        icon: PiggyBank,
        title: "Profit Extraction Through Pensions",
        description:
            "Company pension contributions remain one of the more reliable ways to reduce a corporation tax bill while building long term personal wealth and they're frequently underused by owners focused only on salary and dividends.",
    },
    {
        icon: Landmark,
        title: "Capital Gains Tax Planning",
        description:
            "Whether you're planning an eventual sale, bringing in investment or restructuring how the business is owned, CGT planning works best well before any of that happens, not once a deal is already underway.",
    },
    {
        icon: Layers,
        title: "Business Structure Reviews",
        description:
            "As a business grows, whether it's still structured the right way, sole trader, single company or a group structure, is worth revisiting rather than assuming the original setup still fits.",
    },
];

const faqs = [
    {
        q: "I run a small business that supplies into a larger company nearby. Does that change how tax planning works for me?",
        a: "It can. Steadier, more predictable income from a small number of larger clients often opens up more planning options than owners expect, particularly around timing of expenditure and profit extraction, compared to a business with genuinely unpredictable income.",
    },
    {
        q: "When's the right time to have this conversation relative to my company's year end?",
        a: "Ideally a few months before, while there's still time to adjust dividend timing, capital spend or pension contributions. Once your accounting year has closed, most of the options have already gone.",
    },
    {
        q: "I'm thinking about eventually selling my business. Should I speak to you now, or wait until I have an actual offer?",
        a: "Now, ideally, or at least well before any offer arrives. Capital Gains Tax planning options narrow considerably once a sale process has already started.",
    },
    {
        q: "Could a small engineering or manufacturing supplier in Solihull actually qualify for R&D relief?",
        a: "It's worth checking. A lot of owners assume R&D relief is only for larger, dedicated research and development businesses, but genuine technical problem solving, even as a smaller supplier, often qualifies.",
    },
    {
        q: "Is this a one off service or something I'd come back to each year?",
        a: "Either, depending on what suits you. Some owners want a single review ahead of a specific decision, others prefer revisiting their position annually as the business grows.",
    },
];

const solihullStats = [
    { value: "97.4%", label: "Micro or Small Businesses", sub: "One of the highest proportions in the UK" },
    { value: "High", label: "Job Density", sub: "Well above England & West Midlands averages" },
    { value: "JLR · RR", label: "Major Employers Nearby", sub: "Jaguar Land Rover, Rolls-Royce, Gymshark" },
    { value: "UK Central", label: "Strategic Hub", sub: "Birmingham Airport, NEC & HS2 corridor" },
];

/* ─────────── inline CSS keyframes ─────────── */
const pageStyles = `
@keyframes solihull-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
@keyframes solihull-pulse-ring {
  0% { transform: scale(0.85); opacity: 0.5; }
  50% { transform: scale(1.15); opacity: 0; }
  100% { transform: scale(0.85); opacity: 0; }
}
@keyframes solihull-gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes solihull-slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes solihull-slide-right {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes solihull-scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.solihull-float { animation: solihull-float 6s ease-in-out infinite; }
.solihull-float-delay { animation: solihull-float 6s ease-in-out 1.5s infinite; }
.solihull-float-delay-2 { animation: solihull-float 6s ease-in-out 3s infinite; }
.solihull-gradient-shift {
  background-size: 200% 200%;
  animation: solihull-gradient-shift 8s ease-in-out infinite;
}
.solihull-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.solihull-reveal.visible { opacity: 1; transform: translateY(0); }
.solihull-reveal-right { opacity: 0; transform: translateX(-40px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.solihull-reveal-right.visible { opacity: 1; transform: translateX(0); }
.solihull-reveal-scale { opacity: 0; transform: scale(0.92); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
.solihull-reveal-scale.visible { opacity: 1; transform: scale(1); }

/* diagonal clip section */
.solihull-clip-top {
  clip-path: polygon(0 4vw, 100% 0, 100% 100%, 0 100%);
}
@media (max-width: 768px) {
  .solihull-clip-top {
    clip-path: polygon(0 2vw, 100% 0, 100% 100%, 0 100%);
  }
}

/* stagger children */
.solihull-stagger > * { opacity: 0; transform: translateY(30px); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.solihull-stagger.visible > *:nth-child(1) { transition-delay: 0s; }
.solihull-stagger.visible > *:nth-child(2) { transition-delay: 0.1s; }
.solihull-stagger.visible > *:nth-child(3) { transition-delay: 0.2s; }
.solihull-stagger.visible > *:nth-child(4) { transition-delay: 0.3s; }
.solihull-stagger.visible > *:nth-child(5) { transition-delay: 0.4s; }
.solihull-stagger.visible > *:nth-child(6) { transition-delay: 0.5s; }
.solihull-stagger.visible > *:nth-child(7) { transition-delay: 0.6s; }
.solihull-stagger.visible > *:nth-child(8) { transition-delay: 0.7s; }
.solihull-stagger.visible > *:nth-child(9) { transition-delay: 0.8s; }
.solihull-stagger.visible > * { opacity: 1; transform: translateY(0); }

/* FAQ transition */
.solihull-faq-body {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, padding 0.4s ease;
  padding-top: 0;
  padding-bottom: 0;
}
.solihull-faq-body.open {
  max-height: 300px;
  opacity: 1;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
}
`;

/* ──────────────────────────────── COMPONENT ──────────────────────────────── */
const TaxPlanningSolihull: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const toggleFaq = useCallback(
        (i: number) => setOpenFaq((prev) => (prev === i ? null : i)),
        []
    );

    /* reveal refs */
    const heroR = useReveal(0.1);
    const statsR = useReveal(0.12);
    const contextR = useReveal(0.12);
    const valueR = useReveal(0.1);
    const supplyR = useReveal(0.12);
    const servicesR = useReveal(0.08);
    const clientsR = useReveal(0.12);
    const feeR = useReveal(0.12);
    const faqR = useReveal(0.08);
    const ctaR = useReveal(0.12);

    /* schema */
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "AccountingService",
        name: "Henleaze Tax Consultancy - Tax Planning Solihull",
        url: "https://henleazetaxconsultancy.com/tax-planning-solihull",
        logo: "https://henleazetaxconsultancy.com/logo.jpg",
        description:
            "Practical tax planning for business owners, contractors and directors in Solihull. Dividend timing, corporation tax, CGT. Free consultation.",
        priceRange: "££",
        areaServed: {
            "@type": "City",
            name: "Solihull",
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: "West Midlands",
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
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <Layout>
            <style>{pageStyles}</style>
            <Helmet>
                <title>Tax Planning in Solihull | Henleaze Tax Consultancy</title>
                <meta
                    name="description"
                    content="Practical tax planning for business owners, contractors and directors in Solihull. Dividend timing, corporation tax, CGT. Free consultation."
                />
                <link
                    rel="canonical"
                    href="https://henleazetaxconsultancy.com/tax-planning-solihull"
                />
                <meta
                    property="og:title"
                    content="Tax Planning in Solihull | Henleaze Tax Consultancy"
                />
                <meta
                    property="og:description"
                    content="Practical tax planning for business owners, contractors and directors in Solihull. Dividend timing, corporation tax, CGT. Free consultation."
                />
                <meta
                    property="og:url"
                    content="https://henleazetaxconsultancy.com/tax-planning-solihull"
                />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  HERO — full-bleed gradient with floating orbs             ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="relative pt-32 pb-28 lg:pt-40 lg:pb-36 overflow-hidden bg-navy text-white">
                {/* Animated background orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gold/25 via-amber-400/10 to-transparent blur-[100px] solihull-float" />
                    <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-blue-600/20 via-indigo-500/10 to-transparent blur-[120px] solihull-float-delay" />
                    <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-t from-gold/15 via-yellow-500/5 to-transparent blur-[100px] solihull-float-delay-2" />
                    {/* Grid overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                            backgroundSize: "64px 64px",
                        }}
                    />
                </div>

                <div
                    ref={heroR.ref}
                    className={`container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl solihull-reveal ${heroR.visible ? "visible" : ""}`}
                >
                    <div className="text-center">
                        {/* Location pill */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 text-gold text-sm font-semibold mb-8 shadow-lg shadow-gold/5">
                            <MapPin className="h-4 w-4" />
                            <span>Solihull, West Midlands</span>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
                            <span className="bg-gradient-to-r from-white via-slate-100 to-gold/90 bg-clip-text text-transparent solihull-gradient-shift">
                                Tax Planning in Solihull
                            </span>
                            <br />
                            <span className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold mt-2 block">
                                Practical Advice for Business Owners
                            </span>
                        </h1>

                        <div className="max-w-3xl mx-auto space-y-5 text-lg md:text-xl leading-relaxed text-slate-300/90">
                            <p>
                                Solihull has one of the highest concentrations of small business owners anywhere in the country and yet a lot of them still treat tax planning as something to think about only once a year, usually in the weeks before a return is due. By then, most of the decisions that would have actually reduced the bill have already passed.
                            </p>
                            <p>
                                Henleaze Tax Consultancy provides{" "}
                                <Link to="/what-is-tax-planning-uk-guide" className="text-gold hover:text-gold-light underline decoration-gold/40 hover:decoration-gold transition-colors font-semibold">
                                    tax planning
                                </Link>{" "}
                                for business owners, contractors and limited company directors across Solihull. We're based in Bristol and for this kind of work that makes very little practical difference, since it's a conversation about your numbers and your options, held over video call or phone rather than requiring anyone to travel.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                            <Button
                                asChild
                                size="lg"
                                className="bg-gold hover:bg-gold-light text-navy font-bold px-10 py-6 rounded-full shadow-2xl shadow-gold/25 hover:shadow-gold/40 hover:scale-[1.04] transition-all duration-300 text-base"
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
                                className="border-white/25 bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.12] text-white hover:text-gold px-10 py-6 rounded-full transition-all duration-300 text-base"
                            >
                                <Link to="/services">
                                    View All Services
                                    <ChevronRight className="ml-2 h-5 w-5 text-gold" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom wave divider */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
                        <path d="M0 60V20C240 45 480 5 720 20C960 35 1200 0 1440 20V60H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  SOLIHULL STATS — floating cards with stagger               ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="py-16 md:py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />
                <div
                    ref={statsR.ref}
                    className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl solihull-stagger ${statsR.visible ? "visible" : ""}`}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {solihullStats.map((s, i) => (
                            <div
                                key={i}
                                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 hover:border-gold/50 shadow-sm hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-1"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-gold via-amber-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="text-2xl md:text-3xl font-extrabold text-navy mb-1 font-display">
                                    {s.value}
                                </div>
                                <div className="text-sm font-bold text-navy/80 mb-1">{s.label}</div>
                                <div className="text-xs text-slate-500 leading-relaxed">{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <TrustBar />

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  SOLIHULL BUSINESS CONTEXT — diagonal-clipped dark section  ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="relative bg-navy text-white solihull-clip-top -mt-4 pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-[5%] w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
                </div>

                <div
                    ref={contextR.ref}
                    className={`container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl solihull-reveal ${contextR.visible ? "visible" : ""}`}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-[2px] bg-gold" />
                        <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold">
                            Local Market Insight
                        </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10 max-w-4xl">
                        Solihull's Business Base is Small by Design — and That Changes the Advice That Works
                    </h2>

                    <div className="grid lg:grid-cols-5 gap-10 items-start">
                        <div className="lg:col-span-3 space-y-6 text-slate-300 text-lg leading-relaxed">
                            <p>
                                Across Solihull, 97.4 percent of private sector businesses are classed as micro or small, one of the highest proportions anywhere in the country, despite the borough also being home to major employers like Jaguar Land Rover, Rolls Royce and Gymshark, all clustered around the UK Central Hub near Birmingham Airport and the NEC. That combination matters. A huge share of Solihull's economy runs through owner managed businesses, many of them supplying into or working alongside the larger names based here and the tax planning that actually helps them looks quite different from generic advice aimed at a much larger company.
                            </p>
                            <p>
                                With Solihull's job density running well above both the England and West Midlands averages, and a workforce that's unusually skilled for the size of the borough, a lot of our Solihull clients are business owners who've built something genuinely profitable but have never had a proper conversation about what to do with that profit beyond paying what's owed each year.
                            </p>
                        </div>

                        {/* Floating accent card */}
                        <div className="lg:col-span-2 relative">
                            <div className="absolute -inset-3 bg-gradient-to-br from-gold/20 via-amber-400/10 to-blue-500/10 rounded-3xl blur-xl" />
                            <div className="relative rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-8 shadow-2xl">
                                <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold mb-5">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="font-display text-xl font-bold text-white mb-3">
                                    Why This Matters for You
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Owner managed businesses need tax advice built around how they actually work — not one-size-fits-all guidance designed for corporates. That's the difference we focus on.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  VALUE PILLARS — where Solihull owners find the most value  ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-[#0b1120] via-navy to-[#0c1527] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-10 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div
                        ref={valueR.ref}
                        className={`text-center mb-16 solihull-reveal ${valueR.visible ? "visible" : ""}`}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15 text-gold text-xs font-bold uppercase tracking-widest mb-5">
                            <Shield className="h-3.5 w-3.5" />
                            Key Planning Areas
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-3xl mx-auto">
                            Where Solihull Business Owners Usually Find the Most Value
                        </h2>
                        <div className="w-20 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
                    </div>

                    <div className={`space-y-6 solihull-stagger ${valueR.visible ? "visible" : ""}`}>
                        {valuePillars.map((p, i) => {
                            const Icon = p.icon;
                            const isEven = i % 2 === 1;
                            return (
                                <div
                                    key={i}
                                    className={`group relative flex flex-col lg:flex-row items-start gap-6 p-8 md:p-10 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-gold/50 backdrop-blur-md shadow-xl hover:shadow-2xl hover:shadow-gold/[0.08] transition-all duration-500 hover:-translate-y-1 ${isEven ? "lg:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Number & icon */}
                                    <div className="flex items-center gap-4 shrink-0">
                                        <span className="text-5xl md:text-6xl font-black text-white/10 select-none font-display">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div className="h-14 w-14 rounded-2xl bg-white/10 group-hover:bg-gold flex items-center justify-center text-gold group-hover:text-navy transition-all duration-300">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                                            {p.title}
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                                            {p.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`mt-12 text-center solihull-reveal ${valueR.visible ? "visible" : ""}`} style={{ transitionDelay: "0.5s" }}>
                        <p className="text-slate-300 text-base mb-6">
                            Full detail sits on our{" "}
                            <Link to="/services/tax-planning" className="text-gold hover:text-white font-semibold underline decoration-gold/50 hover:decoration-white transition-colors">
                                tax planning
                            </Link>{" "}
                            service page.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gold hover:bg-gold-light text-navy font-bold px-10 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                        >
                            <Link to="/services">
                                View All Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  SUPPLY CHAIN CONTEXT — why large employers change things   ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy via-slate-900 to-navy-dark text-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-gold/10 via-transparent to-blue-600/10 rounded-full blur-[150px]" />
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div
                        ref={supplyR.ref}
                        className={`solihull-reveal ${supplyR.visible ? "visible" : ""}`}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-[2px] bg-gold" />
                            <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold">
                                Supply Chain Dynamics
                            </span>
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10 max-w-4xl">
                            Why Being Close to Larger Employers Changes the Conversation
                        </h2>

                        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12 lg:p-14">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl bg-gradient-to-b from-gold via-amber-400 to-gold" />

                            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                                A meaningful number of Solihull's small businesses and contractors work directly in the supply chain around Jaguar Land Rover,{" "}
                                <Link to="/accountants-in-birmingham-uk" className="text-gold hover:text-gold-light underline decoration-gold/40 hover:decoration-gold transition-colors font-semibold">
                                    Birmingham
                                </Link>{" "}
                                Business Park, or the wider UK Central Hub. Supplying into or contracting alongside a large employer often brings steadier income than working with smaller, more varied clients, but it can also mean less flexibility in how and when that income arrives. Planning around that pattern, rather than treating income as unpredictable when it's actually fairly consistent, tends to open up more genuine tax planning options than owners expect.
                            </p>

                            <Button
                                asChild
                                size="lg"
                                className="bg-gold hover:bg-gold-light text-navy font-bold px-10 py-6 rounded-full shadow-xl shadow-gold/20 hover:shadow-gold/40 hover:scale-[1.04] transition-all duration-300"
                            >
                                <Link to="/calculator">
                                    Get a Quick Estimate
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  SERVICES BENTO GRID                                        ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div
                        ref={servicesR.ref}
                        className={`text-center mb-16 solihull-reveal ${servicesR.visible ? "visible" : ""}`}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/[0.06] border border-navy/10 text-navy text-xs font-bold uppercase tracking-widest mb-5">
                            Connected Services
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy">
                            How Tax Planning Connects to the Rest of Your Accounting
                        </h2>
                        <div className="w-20 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 solihull-stagger ${servicesR.visible ? "visible" : ""}`}>
                        {servicesData.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 hover:border-gold/40 p-7 shadow-sm hover:shadow-xl hover:shadow-gold/[0.06] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Hover gradient accent */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.accent || "from-gold to-amber-500"} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                                    <div className="relative z-10">
                                        <div className="h-12 w-12 rounded-xl bg-navy/[0.06] group-hover:bg-gold flex items-center justify-center text-navy/50 group-hover:text-navy transition-all duration-300 mb-5">
                                            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                                        </div>

                                        <h3 className="font-display text-lg font-bold text-navy mb-2 group-hover:text-navy transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-5">
                                            {service.description}
                                        </p>
                                    </div>

                                    <Link
                                        to={service.ctaLink}
                                        className="relative z-10 inline-flex items-center text-sm font-bold text-gold hover:text-navy transition-colors duration-300 group/link"
                                    >
                                        {service.ctaText}
                                        <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  WHO WE WORK WITH — client profile section                  ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="relative py-24 md:py-32 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute -top-20 right-[10%] w-80 h-80 bg-gold/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-[5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div
                        ref={clientsR.ref}
                        className={`solihull-reveal ${clientsR.visible ? "visible" : ""}`}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-[2px] bg-gold" />
                            <span className="uppercase tracking-[0.3em] text-xs font-bold text-gold">
                                Typical Clients
                            </span>
                        </div>

                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10 max-w-4xl">
                            The Kind of Business Owners We Tend to Work With in Solihull
                        </h2>

                        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12">
                            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
                                A good number of our Solihull clients run small manufacturing or engineering firms supplying into the automotive and aerospace supply chain around Jaguar Land Rover and Birmingham Business Park. Others are contractors and consultants working across the UK Central Hub who wanted their salary and dividend structure properly reviewed rather than left on autopilot. A steady group are owners of well established, genuinely profitable businesses who'd simply never had a proper conversation about what to do with that profit beyond the annual return.
                            </p>

                            <Button
                                asChild
                                size="lg"
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 font-bold px-10 py-6 rounded-full transition-all duration-300 hover:scale-[1.03]"
                            >
                                <Link to="/contact">
                                    Get in Touch if Any of That Sounds Close
                                    <ArrowRight className="ml-2 h-5 w-5 text-gold" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  FEE SECTION                                                ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="py-20 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div
                        ref={feeR.ref}
                        className={`text-center solihull-reveal ${feeR.visible ? "visible" : ""}`}
                    >
                        <div className="relative inline-block">
                            <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 via-amber-300/5 to-gold/10 rounded-3xl blur-xl" />
                            <div className="relative bg-white border border-slate-200/80 rounded-3xl p-10 md:p-14 shadow-lg">
                                <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-6">
                                    <Receipt className="h-7 w-7" />
                                </div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-5">
                                    How the Fee Works
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                                    Every tax planning review is agreed on a fixed fee before we start, based on the complexity of your business and income. There's no hourly billing, so the cost reflects the actual work involved.
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-navy hover:bg-navy-dark text-white font-bold px-10 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
                                >
                                    <Link to="/pricing">
                                        See Our Pricing
                                        <ArrowRight className="ml-2 h-5 w-5 text-gold" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  FAQ SECTION                                                ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div
                        ref={faqR.ref}
                        className={`solihull-reveal ${faqR.visible ? "visible" : ""}`}
                    >
                        <div className="text-center mb-14">
                            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy">
                                Frequently Asked Questions About Tax Planning in Solihull
                            </h2>
                            <div className="w-20 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;
                                return (
                                    <div
                                        key={index}
                                        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${isOpen
                                            ? "border-gold/50 shadow-lg shadow-gold/[0.06] bg-white"
                                            : "border-slate-200/80 bg-white hover:border-gold/30 shadow-sm"
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
                                        >
                                            <span className="font-display font-bold text-lg text-navy pr-6">
                                                {faq.q}
                                            </span>
                                            <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-gold text-navy rotate-180" : "bg-slate-100 text-slate-500"}`}>
                                                <ChevronDown className="h-4 w-4" />
                                            </div>
                                        </button>
                                        <div className={`solihull-faq-body px-6 ${isOpen ? "open" : ""}`}>
                                            <div className="border-t border-slate-100 pt-4 text-slate-600 text-base leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ╔══════════════════════════════════════════════════════════════╗
                ║  FINAL CTA — immersive gradient                             ║
                ╚══════════════════════════════════════════════════════════════╝ */}
            <section className="relative py-28 md:py-36 overflow-hidden bg-navy text-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-gold/20 via-transparent to-blue-600/15 rounded-full blur-[180px] solihull-float" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />
                </div>

                <div
                    ref={ctaR.ref}
                    className={`container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center solihull-reveal ${ctaR.visible ? "visible" : ""}`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 text-gold text-sm font-semibold mb-8">
                        <Phone className="h-4 w-4" />
                        Free Initial Conversation
                    </div>

                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
                        Let's Have a Proper Conversation About Your Business
                    </h2>

                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                        If you're a business owner, contractor or limited company director in Solihull and want a genuine look at whether you're paying more tax than you need to, get in touch. A first conversation is free and doesn't commit you to anything further.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-bold text-base px-12 py-7 rounded-full shadow-2xl shadow-gold/25 hover:shadow-gold/40 hover:scale-[1.04] transition-all duration-300"
                        >
                            <Link to="/contact">
                                Book a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <a
                            href="tel:+447949956279"
                            className="inline-flex items-center text-white hover:text-gold font-bold text-lg transition-all duration-300 py-4 px-8 rounded-full border border-white/20 hover:border-gold/40 hover:bg-white/[0.06] shadow-sm"
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

export default TaxPlanningSolihull;
