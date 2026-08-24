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
} from "lucide-react";
import TrustBar from "@/components/home/TrustBar";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    covers: string[];
    ctaText: string;
    ctaLink: string;
    icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
    {
        id: "contractor-accounting",
        title: "Contractor Accounting",
        description:
            "A limited company only works in your favour if it's structured and managed correctly — get it wrong and you're either overpaying tax or exposed on IR35. We keep contractors compliant and efficient without the admin burden landing on you.",
        covers: [
            "IR35 assessments",
            "Cloud bookkeeping",
            "VAT",
            "Payroll & director pay",
            "Year-end accounts",
            "Corporation tax",
            "Self-assessment",
        ],
        ctaText: "Explore Contractor Accounting",
        ctaLink: "/services/contractor-accountants",
        icon: Briefcase,
    },
    {
        id: "small-business-accounting",
        title: "Small Business Accounting",
        description:
            "Most business owners don't need more financial data — they need it to actually be right, and available without asking twice. We keep your books current so you always know where you stand.",
        covers: [
            "Bookkeeping",
            "Statutory accounts",
            "VAT",
            "Payroll",
            "Management reporting",
            "Corporation tax",
            "General advice",
        ],
        ctaText: "Discover Small Business Support",
        ctaLink: "/services/small-business-accountants",
        icon: Building2,
    },
    {
        id: "landlord-accounting",
        title: "Landlord Accounting",
        description:
            "Mortgage interest relief changed the maths for a lot of landlords, and it's still one of the most commonly misunderstood parts of rental accounting. Add allowable expenses and CGT into the mix, and it's easy to either overpay or get flagged by HMRC for underpaying. We help Leeds landlords get it right either way.",
        covers: [
            "Rental income declarations",
            "Self-assessment",
            "CGT guidance",
            "Portfolio reporting",
            "Expense advice",
        ],
        ctaText: "View Landlord Services",
        ctaLink: "/services/landlord-accountants",
        icon: Home,
    },
    {
        id: "payroll-hr",
        title: "Payroll & HR Support",
        description:
            "Nobody notices payroll when it works. They notice immediately when it doesn't. We run it accurately, on time, every pay cycle.",
        covers: [
            "Payroll processing",
            "PAYE",
            "Auto-enrolment pensions",
            "HMRC RTI submissions",
            "HR admin support",
        ],
        ctaText: "See Payroll & HR Services",
        ctaLink: "/services/payroll-and-hr-services",
        icon: Users,
    },
    {
        id: "tax-planning",
        title: "Tax Planning",
        description:
            "Most of the tax people overpay isn't from doing anything wrong — it's from not planning ahead. A conversation in the spring can change what you owe the following January.",
        covers: [
            "Corporation & personal tax strategy",
            "Dividend timing",
            "CGT planning",
            "Profit extraction",
            "Business structuring",
        ],
        ctaText: "Explore Tax Planning",
        ctaLink: "/services/tax-planning",
        icon: Calculator,
    },
    {
        id: "outsourced-finance",
        title: "Outsourced Finance Function",
        description:
            "If you're not yet at the point of hiring a finance person but have outgrown doing it yourself, this fills the gap — full financial management without adding to headcount.",
        covers: [
            "Ongoing bookkeeping",
            "Management accounts",
            "Payroll",
            "VAT",
            "Cash flow monitoring",
        ],
        ctaText: "Learn About Outsourced Accounting",
        ctaLink: "/services/outsourced-accounting-services",
        icon: Laptop,
    },
    {
        id: "vat-bookkeeping",
        title: "VAT & Bookkeeping",
        description:
            "A surprising number of VAT penalties come down to timing or record-keeping issues rather than actual errors in the numbers. Tidy books largely solve this on their own.",
        covers: [
            "VAT registration & returns",
            "Digital bookkeeping",
            "Reconciliations",
            "Making Tax Digital compliance",
        ],
        ctaText: "View VAT & Bookkeeping Services",
        ctaLink: "/services/vat-and-bookkeeping-accounting-services",
        icon: Receipt,
    },
    {
        id: "company-secretarial",
        title: "Company Secretarial",
        description:
            "Companies House filings are easy to forget precisely because they don't come up often. We track the dates so you don't have to.",
        covers: [
            "Incorporations",
            "Confirmation statements",
            "Statutory filings",
            "Director & shareholder updates",
        ],
        ctaText: "Explore Company Secretarial",
        ctaLink: "/services/company-secretarial-services",
        icon: FileText,
    },
    {
        id: "rd-tax-relief",
        title: "R&D Tax Relief",
        description:
            "If your business has spent money solving a technical problem that didn't have an obvious answer, there's a reasonable chance some of that spend qualifies for relief — even if it doesn't feel like 'research' in the traditional sense.",
        covers: [
            "Eligibility review",
            "Claim preparation",
            "Technical documentation",
            "HMRC liaison",
        ],
        ctaText: "Find Out About R&D Claims",
        ctaLink: "/services/rd-tax-credit-claim",
        icon: Sparkles,
    },
];

const clientProfiles = [
    {
        title: "Contractors & Freelancers",
        description:
            "If you're a contractor, you're probably less interested in accounting theory and more interested in whether you're inside or outside IR35, and what that means for your take-home pay. We keep that conversation practical.",
        icon: Laptop,
        badge: "IR35 & Take-Home",
    },
    {
        title: "Small Business Owners",
        description:
            "If you're a small business owner, you likely want your numbers to just be correct, on time, without you having to check the accountant's work. That's the baseline we work to.",
        icon: Building2,
        badge: "SMEs & Growth",
    },
    {
        title: "Sole Traders",
        description:
            "If you're a sole trader, deadlines probably feel like they sneak up on you. We build in enough lead time that they don't.",
        icon: UserCheck,
        badge: "Self-Employed",
    },
    {
        title: "Property Landlords",
        description:
            "If you're a landlord, whether it's one property or several, the goal is straightforward: know what you owe, know what you can legitimately claim, and don't get caught out by a rule change you didn't hear about.",
        icon: Home,
        badge: "Buy-to-Let & Portfolios",
    },
    {
        title: "New Business Starters",
        description:
            "If you're starting a business, the decisions you make about structure and setup now tend to matter more later than people expect. Worth getting right from day one.",
        icon: Rocket,
        badge: "Startup Setup",
    },
];

function Rocket(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.26-1.54 1.62-2.43C7.22 16.52 5.86 15.65 4.5 16.5z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z" />
            <path d="M9 18c-1.5 1.5-3.5 2-4.5 1s-.5-3 1-4.5" />
        </svg>
    );
}

const faqs = [
    {
        q: "Is it a problem that you're not physically located in Liverpool?",
        a: "In practice, no. Everything we do runs through video calls, phone and secure cloud accounting, so nothing depends on being in the same building. Clients who've worked with local firms before usually tell us the response times are actually faster this way, not slower.",
    },
    {
        q: "I have a rental property let to students in Liverpool, does that change anything tax-wise?",
        a: "It can. Student lets sometimes come with different considerations around furnished holiday letting rules and expense claims compared to standard residential tenancies. Worth a proper conversation rather than assuming the general rules apply exactly as they would elsewhere.",
    },
    {
        q: "Can you take over mid-way through my current accounting year?",
        a: "Yes, this happens often. We contact your outgoing accountant, request your records, and continue from wherever you're at. Most clients don't experience any gap in service or miss a deadline during the switch.",
    },
    {
        q: "Do you deal with businesses outside typical office hours, given many trades and retail businesses in Liverpool work unusual hours?",
        a: "We try to be flexible with scheduling calls where we can, and most queries are handled just as well over email, which doesn't depend on either of us being available at the same moment.",
    },
    {
        q: "How is pricing worked out for Liverpool clients?",
        a: "The same way it is everywhere we work a fixed quote based on what your business or personal situation actually needs, agreed before we start. No hourly billing and no surprises later..",
    },
];

const AccountantInLiverpool: React.FC = () => {
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
        name: "Henleaze Tax Consultancy - Accountant in Liverpool",
        url: "https://henleazetaxconsultancy.com/accountant-in-liverpool",
        logo: "https://henleazetaxconsultancy.com/logo.jpg",
        description:
            "Fixed-fee accounting support for contractors, small businesses and landlords in Liverpool. Clear advice, fast response times, and transparent pricing.",
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

    return (
        <Layout>
            <Helmet>
                <title>Trusted Accountant in Liverpool | Henleaze Tax Consultancy</title>
                <meta
                    name="description"
                    content="Fixed-fee accountant in Liverpool for contractors, landlords and small businesses. Clear advice, fast responses. Book a free consultation today."
                />
                <link
                    rel="canonical"
                    href="https://henleazetaxconsultancy.com/accountant-in-liverpool"
                />
                <meta
                    property="og:title"
                    content="Accountant in Liverpool for Contractors, SMEs & Landlords"
                />
                <meta
                    property="og:description"
                    content="Fixed-fee accountant in Liverpool for contractors, landlords and small businesses. Clear advice, fast responses. Book a free consultation today."
                />
                <meta
                    property="og:url"
                    content="https://henleazetaxconsultancy.com/accountant-in-liverpool"
                />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
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

                            <span>Serving Liverpool</span>

                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">

                            <span className="bg-gradient-to-r from-white via-slate-100 to-gold bg-clip-text text-transparent">

                                Accountant in Liverpool

                            </span>

                            <br />

                            <span className="text-white">
                                Personal & Business Tax Support
                            </span>

                        </h1>

                        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-8 text-slate-300">

                            <p>
                                Ask ten business owners in Liverpool what they actually want from an accountant and most won't mention software,
                                qualifications or turnaround times. They'll say something closer to "someone who just gets it right and doesn't
                                make me chase them".It sounds simple, but it's surprisingly rare and it's the whole reason Henleaze Tax Consultancy exists.
                            </p>

                            <p>
                                We're based in Bristol, but that's never really mattered to the contractors,
                                landlords, sole traders and small business owners we work with in Liverpool.
                                Everything runs through cloud accounting, phone calls and email, and honestly,
                                most clients forget after the first few weeks that we're not just down the road from them.
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

                    {/* ================= SECOND SECTION ================= */}

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
                                            Why Choose Henleaze
                                        </span>

                                    </div>

                                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">

                                        Why Location Stops Mattering Once the Numbers Are Right

                                    </h2>

                                </div>

                                <div className="grid lg:grid-cols-2 gap-10 text-slate-300 text-lg leading-9">

                                    <p>
                                        There's an old assumption that a good accountant needs to be local someone you can pop
                                        in and see, who knows the area. That made more sense before cloud accounting existed.
                                        Now, the thing that actually determines whether an accountant is any good is whether
                                        they answer your questions properly, catch problems early and get your figures right
                                        the first time. None of that depends on the postcode.
                                    </p>

                                    <p>
                                        That said, we do understand what makes Liverpool's business landscape a bit different a
                                        strong mix of independent retail, creative and digital businesses, contractors moving
                                        between projects across the North West and a sizeable rental market feeding off the city's
                                        student population and ongoing regeneration. It shapes the kind of questions we get asked
                                        and the advice we give.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* TRUST BAR */}
            <TrustBar />


            {/* ACCOUNTING & TAX SUPPORT FOR LEEDS CLIENTS (VIBRANT ELEGANT BLUE SECTION) */}
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
                            What We Help Liverpool Clients With
                        </h2>
                        <p className="text-blue-100/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                            Comprehensive, fixed-fee accountancy solutions tailored to your specific setup.
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

                                        <div className="border-t border-white/10 pt-5 mb-6">
                                            <p className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                                                Covers:
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
                </div>
            </section>

            {/* THE PEOPLE WE WORK WITH IN LEEDS */}
            {/* THE PEOPLE WE WORK WITH */}
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
                            Targeted Advice
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
                                    The Kind of Clients We Work With
                                </h2>

                                <p className="text-slate-300 text-lg leading-9">
                                    Some of our Liverpool clients are contractors who came to us after a bad experience with an accountant
                                    who never explained anything. Others are small business owners who'd outgrown doing their own books on
                                    a spreadsheet. A fair few are landlords with one or two properties who just wanted to be certain they weren't
                                    missing a claim, or overclaiming and risking a problem down the line later.
                                    What ties them together isn't the size of the business or the type of income it's wanting an accountant who treats
                                    their situation as specific to them, not a template to be filled in.
                                </p>

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
                                        A Recent Example
                                    </h2>

                                    <p className="text-slate-300 text-lg leading-9">
                                        A Liverpool-based contractor came to us mid-tax-year after their previous accountant had gone quiet
                                        for weeks at a time. We picked up their records, reviewed their IR35 position and flagged that their
                                        dividend timing could be adjusted before the year-end to reduce their tax bill. Small change, real
                                        difference and the kind of thing that only happens if someone's actually paying attention.
                                    </p>

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
                                    What It Costs, Upfront
                                </h2>

                                <p className="text-slate-300 text-lg leading-9">
                                    You'll always get a fixed fee agreed before any work starts, so there's no guessing what a return or a set
                                    of accounts is going to cost you. No hourly billing, no invoices that creep up because a phone call ran long.
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



            {/* COMMON QUESTIONS FROM LEEDS CLIENTS */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
                            Questions Liverpool Clients Often Ask
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

            {/* READY WHEN YOU ARE (FINAL CTA) */}
            <section className="py-24 bg-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-gold via-blue-600 to-navy rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Ready When You Are
                    </h2>

                    <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        If you're looking for an accountant in Liverpool who explains things
                        properly and answers when you actually need them to, get in touch. A
                        first conversation costs nothing and commits you to nothing.
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
        </Layout >
    );
};

export default AccountantInLiverpool;
