import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Home,
  PoundSterling,
  BarChart2,
  FileText,
  TrendingUp,
  Building,
  Users,
  Shield,
  Coins,
  ShieldCheck,
  Clock,
  Phone,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: PoundSterling,
    title: "Rental Income Tax Services for Landlords",
    description:
      "Understanding and reporting tax on rental income can be complex, particularly if you own multiple properties or have different sources of rental income. We help landlords accurately report earnings, calculate rental income tax and meet their tax obligations with confidence. Our team provides practical guidance on landlord tax on rental income and assists with calculating landlords income tax to ensure compliance and accuracy.",
    included: [
      "Rental income reporting",
      "Tax calculations and submissions",
      "HMRC compliance support",
      "Rental property tax guidance",
    ],
  },
  {
    icon: Home,
    title: "Property Portfolio Accounting for Landlords",
    description:
      "Managing multiple properties requires clear financial oversight and accurate record-keeping. We provide accounting support for landlords with growing portfolios, helping you monitor income, expenses and overall property performance. Whether you work with a property management company, use property management services or manage properties independently as a landlord, we can help keep your finances organised.",
    included: [
      "Portfolio income tracking",
      "Property performance reporting",
      "Financial record management",
      "Portfolio accounting support",
    ],
  },
  {
    icon: TrendingUp,
    title: "Capital Gains Tax Services for Landlords",
    description:
      "Selling a property can create significant tax implications. Our team provides capital gains tax advice for landlords, helping you understand potential liabilities before a sale takes place. We also assist with capital gains tax reporting and provide guidance on capital gains tax for landlords to help you manage your obligations effectively.",
    included: [
      "Capital gains tax calculations",
      "Property disposal planning",
      "Tax reporting assistance",
      "CGT compliance support",
    ],
  },
  {
    icon: FileText,
    title: "Expense Tracking Services for Landlords",
    description:
      "Keeping accurate records of property-related expenses is essential for maximising allowable deductions and maintaining accurate financial records. Our expense tracking for landlords service helps ensure costs are properly recorded and reported, making landlord expense tracking simpler and more efficient throughout the year.",
    included: [
      "Expense categorisation",
      "Rental property cost tracking",
      "Deduction identification",
      "Financial record organisation",
    ],
  },
  {
    icon: BarChart2,
    title: "Investment Analysis for Landlords",
    description:
      "Making informed investment decisions requires a clear understanding of property performance. Through detailed investment analysis, we help landlords assess profitability, review cash flow and understand long-term returns. Our insights support better decision-making and provide valuable return on investment analysis for both existing and prospective property investments.",
    included: [
      "Property performance reviews",
      "Profitability analysis",
      "Return on investment assessments",
      "Investment planning support",
    ],
  },
  {
    icon: Building,
    title: "Structure Advice for Landlords",
    description:
      "Choosing the right ownership structure can have a significant impact on tax efficiency and long-term investment goals. We provide practical structure advice for landlords, helping you understand whether holding properties personally or through a limited company may be more suitable for your circumstances.",
    included: [
      "Ownership structure reviews",
      "Limited company considerations",
      "Tax efficiency guidance",
      "Long-term planning support",
    ],
  },
];

const pillars = [
  {
    num: "01",
    title: "Specialist Support for Landlords",
    description:
      "Unlike general accountants, we understand the unique financial and tax considerations that come with property ownership. As experienced accountants for landlords in Bristol, we provide tailored advice based on your property portfolio, investment goals and reporting requirements.",
  },
  {
    num: "02",
    title: "Clear Tax & Compliance Guidance",
    description:
      "Property taxation can be complex, particularly when managing multiple properties or planning future sales. Our team helps landlords stay compliant with HMRC requirements while providing practical guidance on rental income, allowable expenses and long-term tax planning.",
  },
  {
    num: "03",
    title: "Support for Smarter Property Decisions",
    description:
      "Good accounting is about more than compliance. From cash flow management and profitability reviews to investment planning, we help landlords make informed decisions that support the growth and performance of their property portfolios.",
  },
  {
    num: "04",
    title: "A Long-Term Partner for Property Investors",
    description:
      "As your portfolio grows, your accounting and tax requirements may become more complex. We provide ongoing support and proactive advice to help landlords navigate new opportunities, manage risks and plan confidently for the future.",
  },
];

const propertyOwners = [
  {
    icon: Home,
    name: "Buy-to-Let Landlords",
    description:
      "We help buy-to-let landlords manage rental income, track expenses and meet their ongoing tax obligations with confidence.",
  },
  {
    icon: Building,
    name: "Portfolio Landlords",
    description:
      "For landlords with multiple properties, we provide structured accounting support, financial reporting and tax planning tailored to larger property portfolios.",
  },
  {
    icon: Users,
    name: "First-Time Landlords",
    description:
      "If you're new to property investment, we can help you understand your tax responsibilities and establish effective financial processes from the outset.",
  },
  {
    icon: Briefcase,
    name: "Limited Company Property Investors",
    description:
      "We support landlords who own investment properties through limited companies, providing accounting, tax and compliance guidance tailored to corporate property ownership.",
  },
  {
    icon: TrendingUp,
    name: "Residential Property Investors",
    description:
      "From single-property investors to those expanding their holdings, we provide practical financial support designed to help maximise returns and maintain compliance.",
  },
  {
    icon: BarChart2,
    name: "Property Developers",
    description:
      "We also assist property developers with accounting, tax planning and financial reporting to support successful project management and long-term growth.",
  },
];

const Landlords = () => {
  return (
    <>
      <Helmet>
        <title>Landlord Accountants in Bristol | Tax &amp; Accounting Services</title>
        <meta
          name="description"
          content="Looking for landlord accountants in Bristol? Get expert support with rental income tax, property portfolios, capital gains tax & landlord accounting services."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-24 md:py-32 flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

          {/* Decorative Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-navy-light/40 blur-3xl rounded-full" />

          {/* Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              {/* Hero Content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="mb-6 flex items-center justify-center lg:justify-start">
                  <div className="h-8 w-1 bg-gold rounded-full mr-3" />
                  <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">
                    Specialist Landlord Advice
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Landlord Accountants
                  <span className="block text-gold mt-2">in Bristol</span>
                </h1>

                <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                  Managing rental properties comes with ongoing financial and tax responsibilities, from tracking rental
                  income and expenses to filing accurate tax returns and planning for future investments. Working with
                  experienced landlord accountants in Bristol can help you stay compliant, reduce stress and make more
                  informed financial decisions.
                </p>

                <p className="mt-4 text-base text-white/75 leading-relaxed max-w-2xl">
                  At Henleaze Tax Consultancy, we provide tailored support for landlords, property investors and
                  buy-to-let owners across Bristol and the wider UK. Whether you need help with bookkeeping, rental
                  income reporting, annual tax returns or long-term tax planning, our team offers practical advice
                  designed around the needs of landlords.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Speak to a Landlord Accountant
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white bg-white/5 hover:bg-navy hover:text-white rounded-full px-8 py-6 transition-all duration-300"
                    asChild
                  >
                    <Link to="/pricing">View Our Pricing</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Right Visual Column */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Top glowing edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                  <p className="text-xl font-bold text-white mb-6">Expert Landlord Tax Support</p>

                  <div className="space-y-4">
                    {[
                      { title: "Rental Income Tax", text: "Accurate reporting & HMRC submissions", icon: PoundSterling },
                      { title: "Capital Gains Tax", text: "Planning & compliance for property sales", icon: TrendingUp },
                      { title: "Portfolio Accounting", text: "Multi-property tracking & reporting", icon: Home },
                      { title: "Structure Advice", text: "Personal vs limited company guidance", icon: ShieldCheck },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white leading-tight">{item.title}</p>
                          <p className="text-xs text-white/60 mt-1">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust indicator line */}
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-white/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">HMRC Compliant</span>
                    <span className="text-xs">Tailored to Landlords &amp; Investors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="absolute top-24 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-24 right-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <Home className="h-3.5 w-3.5" />
                Services &amp; Tax Support
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight mt-3">
                Our Landlord Accounting Services in Bristol
              </h2>

              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                As experienced landlord accountants in Bristol, we provide specialist accounting and tax support for
                landlords, buy-to-let investors and property owners. Our services are designed to help you manage your
                rental income efficiently, remain compliant with HMRC requirements and make informed decisions about
                your property investments.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden rounded-[2rem] border border-gold/15 bg-gradient-to-br from-slate-50 via-white to-gold/10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] hover:border-gold/35"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,169,87,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_42%)] pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 opacity-90" />
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/15 blur-3xl transition-all duration-500 group-hover:bg-gold/25" />
                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/15" />

                    <CardHeader className="p-8 pb-0 relative z-10">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                          Specialist
                        </div>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/5 via-white to-gold/10 text-gold ring-1 ring-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold group-hover:text-navy group-hover:ring-gold/40">
                          <IconComponent className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>

                      <CardTitle className="font-display text-2xl font-bold text-navy leading-snug transition-colors duration-300 group-hover:text-gold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-8 pt-5">
                      <CardDescription className="text-gray-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </CardDescription>

                      <div className="mb-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-navy mb-3">
                          What&apos;s included
                        </p>
                        <ul className="space-y-2.5">
                          {service.included.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <div className="mt-1 h-4 w-4 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 text-gold">
                                <Check className="h-2.5 w-2.5 stroke-[3px]" />
                              </div>
                              <span className="text-sm text-gray-700 leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-semibold text-gray-500">Tailored support</span>

                        <Link
                          to="/contact"
                          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/20 to-gold/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                          <span className="relative">Enquire Now</span>
                          <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Henleaze Section */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-navy via-navy-light to-navy-dark">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMiAxMi01LjM3MyAxMiAxMiAxMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
          {/* Gold accent top line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          {/* Decorative glow blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy-light/60 blur-3xl rounded-full pointer-events-none" />

          <div className="container relative z-10">
            {/* Section label */}
            <div className="mb-12 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <Shield className="h-3.5 w-3.5" />
                Why Choose Specialist Support
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 items-start">

              {/* ── LEFT SIDEBAR ── */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
                {/* Glass card */}
                <div className="relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 overflow-hidden group hover:border-gold/30 transition-all duration-500">
                  {/* Top shimmer line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    Why Choose Henleaze as Your Landlord Accountant
                    <span className="block text-gold mt-1">in Bristol?</span>
                  </h2>

                  <div className="w-16 h-0.5 bg-gold rounded-full my-6" />

                  <p className="text-base text-white/80 leading-relaxed">
                    At Henleaze Tax Consultancy, we provide practical accounting and tax support designed specifically
                    for landlords, helping you manage your property finances with confidence.
                  </p>

                  <div className="mt-8">
                    <Link
                      to="/pricing"
                      className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy shadow-lg transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-120%] transition-transform duration-700 group/btn-hover:translate-x-[120%]" />
                      <span className="relative">View Our Pricing</span>
                      <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-navy/20 transition-all duration-300 group-hover/btn:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: PILLAR CARDS ── */}
              <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[1.75rem] bg-white/5 border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                  >
                    {/* Top accent on hover */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Glow blob */}
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Number badge */}
                      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-gold font-display font-extrabold text-sm tracking-tight transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-6 group-hover:border-gold">
                        {pillar.num}
                      </div>

                      <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug transition-colors duration-300 group-hover:text-gold">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>
        {/* Supporting Landlords Across Bristol & the UK */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10">
            {/* Two-column sidebox card */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gold/15 shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex flex-col lg:flex-row">
              {/* Gold left stripe */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold/40 via-gold to-gold/40 rounded-l-[2.5rem]" />

              {/* LEFT - icon + label */}
              <div className="relative flex-shrink-0 flex flex-col items-center justify-center gap-6 px-10 py-12 lg:py-16 bg-gradient-to-br from-navy via-navy-light to-navy-dark lg:w-72 xl:w-80">
                {/* Dot pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1Lji3X133QqstvUSBBpiYbKy4nFL22koGMiAxMi01LjM3MyAxMiAxMi01LjM3MyAxMiAxMiAxMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 border border-gold/25 text-gold">
                    <Building className="h-8 w-8" />
                  </div>
                  <div className="h-px w-12 bg-gold/40 rounded-full" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Reach</p>
                  <p className="text-white/70 text-sm leading-relaxed">Bristol &amp; across the UK</p>
                </div>
              </div>

              {/* RIGHT - text content */}
              <div className="flex-1 px-8 py-12 lg:px-12 lg:py-14 xl:px-16 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider w-fit">
                  <Users className="h-3.5 w-3.5" />
                  Nationwide Support
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-navy leading-tight mb-4">
                  Supporting Landlords Across Bristol &amp; the UK
                </h2>

                <div className="w-14 h-0.5 bg-gold rounded-full mb-6" />

                <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                  <p>
                    While we work closely with property owners seeking experienced landlord accountants in Bristol, our
                    services are not limited to the local area. We support landlords throughout the UK, providing
                    specialist accounting, tax and financial guidance tailored to the needs of property investors and
                    buy-to-let owners.
                  </p>
                  <p>
                    Whether you&apos;re looking for a trusted landlord accountant in Bristol, require support from
                    online landlord accountants in the UK or need experienced landlord tax accountants to help manage
                    your property finances, our team is here to provide reliable advice and ongoing support wherever
                    you&apos;re based.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/15 to-gold/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                    <span className="relative">Speak to a Landlord Accountant</span>
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Owners We Support Section */}
        <section className="py-24 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                Property Owners We Support in Bristol
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We work with a wide range of landlords and property investors, providing tailored accounting and tax
                support based on their individual circumstances. Whether you own a single rental property or manage a
                growing portfolio, our team can help you stay compliant and make informed financial decisions.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
              {propertyOwners.map((owner, index) => {
                const IconComponent = owner.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-gold/10 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] hover:border-gold/30"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(202,169,87,0.16),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_45%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 opacity-80" />
                    <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition-all duration-500 group-hover:bg-gold/20" />

                    <div className="relative z-10">
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy/5 via-white to-gold/10 text-navy ring-1 ring-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold group-hover:text-navy group-hover:ring-gold/40">
                        <IconComponent className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                      </div>

                      <h3 className="font-display text-xl font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-gold">
                        {owner.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">{owner.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* Bottom CTA Section */}
        <section className="relative w-full py-32 overflow-hidden">
          {/* Full-bleed background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/cta-consult.png"
              alt="Professional landlord tax consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
          </div>
          {/* Gold accent lines top & bottom */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight mb-6">
              Looking for Reliable Accounting Support for Your Property Portfolio?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-white/90 mb-10 leading-relaxed text-base md:text-lg">
              <p>
                Whether you own a single rental property or manage a growing portfolio, having the right accounting
                support can help you stay compliant, improve tax efficiency and make confident financial decisions. At
                Henleaze Tax Consultancy, we provide practical advice and ongoing support tailored to the needs of
                landlords and property investors across Bristol and the UK.
              </p>
              <p className="font-semibold text-white">
                Get in touch today to discuss your requirements and discover how we can help you manage your property
                finances more effectively.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:text-gold hover:border-gold rounded-full px-8 py-6 backdrop-blur-sm"
              >
                <a href="tel:+447949956279" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +44 7949 956279
                </a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Landlords;
