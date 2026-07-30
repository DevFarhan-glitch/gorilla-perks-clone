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
    q: "Do I need to visit an office in Leeds to work with you?",
    a: "No. None of our Leeds clients visit an office — everything from bookkeeping to tax filing to advice calls happens over video, phone or email. If in-person meetings matter to you specifically, we're upfront that this isn't that kind of service, but for the vast majority of Leeds clients it's never actually come up as an issue.",
  },
  {
    q: "Are there specific tax reliefs relevant to Leeds-based businesses?",
    a: "Nothing unique to Leeds itself, but the city's mix of manufacturing, engineering, tech and professional services means R&D tax relief comes up more often than clients expect. If your business has solved a technical problem without an obvious off-the-shelf answer, it's worth a conversation — we'll tell you honestly if it's not a fit rather than push a claim that won't hold up.",
  },
  {
    q: "I'm currently with a Leeds-based accountant — how disruptive is switching?",
    a: "Less than most people expect. We contact your current accountant directly to request your records, get up to speed on your position, and continue from wherever you are in the tax year. Most clients switching from a local Leeds firm don't notice any gap in service or miss a deadline in the process.",
  },
  {
    q: "Do you understand the kind of businesses common in Leeds — construction, retail, professional services?",
    a: "Yes. We work with clients across all of these sectors in Leeds and shape our advice around how your specific business actually operates, not a generic industry template. If a term or a rule is specific to your sector, we'll explain it rather than assume you already know it.",
  },
  {
    q: "How much will it cost me as a Leeds-based client — is it different from your Bristol pricing?",
    a: "No difference. You'll get a fixed quote before any work starts, based on what you actually need, regardless of whether you're in Leeds, Bristol, or anywhere else in the UK. No hourly billing, no surprise invoices for a phone call.",
  },
];

const AccountantInLeeds: React.FC = () => {
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
    name: "Henleaze Tax Consultancy - Leeds Accounting Services",
    url: "https://henleazetaxconsultancy.com/accountant-in-leeds",
    logo: "https://henleazetaxconsultancy.com/logo.jpg",
    description:
      "Fixed-fee accounting support for contractors, small businesses and landlords in Leeds. Clear advice, fast response times, and transparent pricing.",
    priceRange: "££",
    areaServed: {
      "@type": "City",
      name: "Leeds",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "West Yorkshire",
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
        <title>Leeds Accountants for Contractors, SMEs &amp; Landlords</title>
        <meta
          name="description"
          content="Fixed-fee accounting support for contractors, small businesses and landlords in Leeds. Clear advice, fast response times. Book a free consultation."
        />
        <link
          rel="canonical"
          href="https://henleazetaxconsultancy.com/accountant-in-leeds"
        />
        <meta
          property="og:title"
          content="Leeds Accountants for Contractors, SMEs & Landlords"
        />
        <meta
          property="og:description"
          content="Fixed-fee accounting support for contractors, small businesses and landlords in Leeds. Clear advice, fast response times. Book a free consultation."
        />
        <meta
          property="og:url"
          content="https://henleazetaxconsultancy.com/accountant-in-leeds"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-blue-600/40 via-indigo-600/20 to-gold/30 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs sm:text-sm font-semibold mb-6 shadow-md animate-fade-in">
              <MapPin className="h-4 w-4 text-gold animate-bounce" />
              <span>Serving Leeds &amp; West Yorkshire</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-gold">
                Accountant in Leeds
              </span>{" "}
              Clear Advice, Fixed Fees, Local Expertise
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10">
              <p>
                There's a particular kind of stress that comes from not being
                entirely sure your tax return is right. Maybe you've filed it
                yourself for years and it's always felt like guesswork. Maybe
                your current accountant takes two weeks to answer a simple
                question. Either way, the fix is usually the same: work with
                someone who actually explains what they're doing and why.
              </p>
              <p>
                That's the basis of how we work with clients in Leeds. Henleaze
                Tax Consultancy is based in Bristol, but geography stops
                mattering once everything runs through cloud software, video calls
                and email — which, for accounting, it has for years now. Our
                Leeds clients get the same response times, the same attention to
                detail, and the same plain-English explanations as anyone we
                work with locally.
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
                className="w-full sm:w-auto border-white/40 text-black  hover:bg-navy hover:text-white font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:border-gold/60"
              >
                Explore Services
                <ChevronDown className="ml-2 h-5 w-5 text-gold animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* WHAT MAKES A GOOD ACCOUNTANT */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Our Core Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              What Makes a Good Accountant, Really
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed relative z-10">
              <p>
                Ask most people what they want from an accountant and you'll hear
                some version of{" "}
                <strong className="text-navy font-bold">
                  "someone who sorts it out and doesn't overcharge me."
                </strong>{" "}
                Fair enough — but the accountants people actually stick with tend
                to do three things well: they respond quickly, they explain
                decisions rather than just making them, and they flag problems
                before they become expensive ones.
              </p>
              <p>
                We built our process around exactly that. Before we recommend
                anything, we take the time to understand whether you're a
                contractor weighing up IR35 status, a landlord trying to work out
                what's actually deductible, or a business owner who just wants
                accurate numbers without chasing for them. The advice that
                follows is shaped by your answer, not a template.
              </p>
            </div>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                1. Fast Responses
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No waiting 2 weeks for a simple question. We respond quickly so
                your decisions aren't put on hold.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                2. Plain-English Explanations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We explain the 'why' behind tax decisions without hiding behind
                confusing accounting jargon.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 group">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                3. Proactive Problem-Flagging
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We spot compliance issues and tax opportunities early — before they
                turn into costly surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              Accounting &amp; Tax Support for Leeds Clients
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
      <section className="py-24 bg-gradient-to-b from-navy via-slate-900 to-navy text-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-white/10 border border-gold/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Targeted Advice
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              The People We Work With in Leeds
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-4">
              We shape our advice around how your specific setup operates, not a generic industry template.
            </p>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {clientProfiles.map((profile, idx) => {
              const ProfileIcon = profile.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-gold/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <ProfileIcon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                        {profile.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                      {profile.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {profile.description}
                    </p>
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

      {/* WHY LEEDS CLIENTS ACTUALLY STAY */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl border border-slate-200/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-4 border border-gold/20">
                Long-Term Trust
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mb-6">
                Why Leeds Clients Actually Stay
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                We could tell you cloud accounting means distance doesn't matter —
                and it's true, but it's also what every remote accountant says.
                What actually keeps clients with us long-term is simpler: emails
                get answered, questions get real answers instead of jargon and we
                tell you about a problem before it becomes one, not after.
              </p>

              {/* Real Story Callout */}
              <div className="bg-blue-50/70 border-l-4 border-gold p-6 sm:p-8 rounded-r-2xl mb-10 shadow-sm">
                <p className="text-navy font-semibold text-base sm:text-lg italic leading-relaxed">
                  "A Leeds-based landlord recently asked us to double-check an
                  expense claim before submitting — a two-minute email exchange
                  that avoided a much bigger headache later. That's fairly typical
                  of how the relationship tends to work day to day."
                </p>
              </div>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-navy hover:bg-navy-light text-white font-bold text-base px-8 py-6 rounded-full shadow-md transition-all duration-300 hover:scale-105"
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 text-gold" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMON QUESTIONS FROM LEEDS CLIENTS */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-gold/20">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Common Questions From Leeds Clients
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
            If you're looking for an accountant in Leeds who explains things
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
    </Layout>
  );
};

export default AccountantInLeeds;
