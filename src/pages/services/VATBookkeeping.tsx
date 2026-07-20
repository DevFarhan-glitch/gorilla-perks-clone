import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Receipt,
  BookOpen,
  Cloud,
  RefreshCw,
  ShieldCheck,
  Zap,
  Phone,
  ArrowUpRight,
  Building,
  Users,
  FileText,
  Globe,
  Briefcase,
  Store,
  UserCheck,
  Layers,
  HelpCircle,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Receipt,
    title: "VAT Return Services",
    description:
      "Preparing and submitting an accurate VAT return is an important part of maintaining compliance. We handle the calculations, submissions and reporting requirements, helping ensure your returns are completed correctly and on time.",
    included: [
      "VAT return preparation",
      "HMRC submissions",
      "VAT record reviews",
      "Making Tax Digital support",
    ],
  },
  {
    icon: BookOpen,
    title: "Expert Bookkeeping Services",
    description:
      "Accurate bookkeeping provides a strong foundation for your business finances. Our bookkeeping services help keep your records organised, up to date and ready for reporting, tax returns and day-to-day decision-making.",
    included: [
      "Transaction processing",
      "Expense recording",
      "Financial record maintenance",
      "Bookkeeping reviews",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Accounting Support",
    description:
      "As experienced cloud accountants, we help businesses make the most of modern accounting software, giving you secure access to your financial information from anywhere.",
    included: [
      "Xero support",
      "QuickBooks support",
      "Cloud software setup",
      "Ongoing software assistance",
    ],
  },
  {
    icon: RefreshCw,
    title: "Bank Reconciliation Services",
    description:
      "Regular bank reconciliation helps ensure your financial records accurately reflect your business activity. Our service helps identify discrepancies early and keep your accounts accurate.",
    included: [
      "Bank account reconciliation",
      "Transaction matching",
      "Error identification",
      "Account balancing",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Making Tax Digital (MTD) Compliance",
    description:
      "Understanding the Making Tax Digital reporting requirements can be challenging for many businesses. We help you meet the requirements for Making Tax Digital and stay compliant with current MTD requirements, reducing the risk of reporting errors and penalties.",
    included: [
      "MTD compliance reviews",
      "Digital record keeping guidance",
      "HMRC reporting support",
      "Compliance monitoring",
    ],
  },
  {
    icon: Zap,
    title: "Dext Integration & Support",
    description:
      "We help businesses streamline their bookkeeping processes through Dext accounting software. From setup to ongoing support, we ensure your Dext accounts are configured correctly, making it easier to manage receipts, invoices and financial records.",
    included: [
      "Dext setup and configuration",
      "Receipt automation",
      "Invoice management",
      "Ongoing support and training",
    ],
  },
];

const pillars = [
  {
    num: "01",
    title: "Experienced VAT & Bookkeeping Professionals",
    description:
      "Our team of experienced VAT accountants and bookkeeping professionals provides practical support across a wide range of industries, helping businesses manage their finances more effectively.",
  },
  {
    num: "02",
    title: "Accurate Records & Reliable Reporting",
    description:
      "Good financial records are essential for making informed business decisions. Our services help ensure your records remain organised, accurate and ready whenever you need them.",
  },
  {
    num: "03",
    title: "Keeping You Compliant",
    description:
      "VAT regulations and reporting requirements can change over time. We help businesses meet their obligations, submit returns accurately and avoid unnecessary compliance issues.",
  },
  {
    num: "04",
    title: "Flexible Support for Modern Businesses",
    description:
      "Many businesses now prefer digital accounting solutions that provide greater flexibility and visibility. Our VAT online services, combined with cloud-based bookkeeping support, make it easier to access and manage your financial information.",
  },
  {
    num: "05",
    title: "Local Expertise with UK-Wide Support",
    description:
      "Businesses looking for VAT and bookkeeping services in Bristol value local expertise, but our support extends across the UK — wherever you're based, our team is here to help.",
  },
];

const whoWeWorkWith = [
  {
    icon: Building,
    name: "Start-Ups",
    description:
      "Setting up bookkeeping systems, managing VAT obligations, keeping records organised from day one — we help new businesses get this right from the start.",
  },
  {
    icon: Briefcase,
    name: "Small Businesses",
    description:
      "Bookkeeping, VAT returns, financial admin — we handle it so small business owners can focus on running and growing what they've built.",
  },
  {
    icon: Layers,
    name: "Limited Companies",
    description:
      "From day-to-day bookkeeping to VAT compliance and financial reporting, limited companies rely on us for consistent, reliable support.",
  },
  {
    icon: UserCheck,
    name: "Contractors & Freelancers",
    description:
      "Managing finances while serving clients can be genuinely difficult to juggle. We help contractors and freelancers stay on top of records, tax and VAT responsibilities.",
  },
  {
    icon: Store,
    name: "Retail & E-Commerce Businesses",
    description:
      "High transaction volumes demand accurate record-keeping. We help retail and e-commerce businesses stay organised and compliant despite the volume.",
  },
  {
    icon: Users,
    name: "Professional Service Firms",
    description:
      "Consultants, agencies and professional firms turn to us for dependable bookkeeping and VAT support that keeps their finances running smoothly.",
  },
];

const faqs = [
  {
    q: "How often do I need to submit a VAT return?",
    a: "Most VAT-registered businesses file quarterly, though some are on monthly or annual schemes depending on turnover and the scheme they're registered under.",
  },
  {
    q: "At what turnover do I need to register for VAT?",
    a: "You must register once your taxable turnover passes £90,000 in a rolling 12-month period, though you can register voluntarily below that threshold.",
  },
  {
    q: "Do I need Making Tax Digital software if I run a small business?",
    a: "Yes MTD applies to all VAT-registered businesses, regardless of size, so digital record-keeping and MTD-compatible software are required by law.",
  },
  {
    q: "Can you take over my bookkeeping if it's fallen behind?",
    a: "Yes catching up overdue bookkeeping is one of the most common requests we handle, and we can bring records up to date before your next filing deadline.",
  },
  {
    q: "Do I have to use Xero or QuickBooks, or can you work with what I already use?",
    a: "We work with most major cloud platforms and can usually fit around what you're already using rather than requiring a switch.",
  },
  {
    q: "Is bookkeeping different from accounting?",
    a: "Yes bookkeeping is the ongoing recording of transactions, while accounting covers the reporting, analysis and tax submissions built on top of those records.",
  },
];

const VATBookkeeping = () => {
  return (
    <>
      <Helmet>
        <title>VAT Returns &amp; Bookkeeping Accounting Services in Bristol</title>
        <meta
          name="description"
          content="Professional VAT and bookkeeping accounting services in Bristol. Expert VAT accountants, bookkeeping support, VAT returns, compliance and reporting."
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
                    VAT & Bookkeeping Specialists
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  VAT &amp; Bookkeeping
                  <span className="block text-gold mt-2">Accounting Services in Bristol</span>
                </h1>

                <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                  Keeping your financial records accurate and staying on top of VAT obligations are essential for running a successful business. From maintaining organised accounts to submitting VAT returns on time, having the right support can save time and help you stay compliant.
                </p>

                <p className="mt-4 text-base text-white/75 leading-relaxed max-w-2xl">
                  At Henleaze Tax Consultancy, we provide VAT &amp; bookkeeping accounting services in Bristol and across the UK. Whether you need support from experienced VAT accountants or reliable bookkeeping accounting services to keep your finances organised, our team is here to help.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Speak to a VAT &amp; Bookkeeping Specialist
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

                  <p className="text-xl font-bold text-white mb-6">Expert VAT &amp; Bookkeeping Support</p>

                  <div className="space-y-4">
                    {[
                      { title: "VAT Returns Handled", text: "Accurate preparation & HMRC submission", icon: Receipt },
                      { title: "MTD Compliance Ready", text: "Making Tax Digital guidance & support", icon: ShieldCheck },
                      { title: "Cloud Accounting Setup", text: "Xero, QuickBooks & Dext integration", icon: Cloud },
                      { title: "Bank Reconciliation", text: "Accurate records & error identification", icon: RefreshCw },
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
                    <span className="text-xs">Bristol &amp; UK-Wide Support</span>
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
                <FileText className="h-3.5 w-3.5" />
                VAT &amp; Bookkeeping Services
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight mt-3">
                Our VAT &amp; Bookkeeping Services
              </h2>

              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Keeping your records accurate and your VAT obligations up to date is essential for maintaining compliance and making informed business decisions. Our VAT and bookkeeping accounting services in Bristol help businesses stay organised, reduce administrative pressure and keep their finances running smoothly.
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
                        <span className="text-xs font-semibold text-gray-500">
                          Tailored support
                        </span>

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

            {/* View All Services Button */}
            <div className="mt-14 flex justify-center">
              <Link
                to="/services"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-bold text-navy shadow-lg transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_32px_rgba(212,175,55,0.45)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                <span className="relative">View All Services</span>
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-navy/20 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Henleaze Section */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-navy via-navy-light to-navy-dark">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
          {/* Gold accent top line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          {/* Decorative glow blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy-light/60 blur-3xl rounded-full pointer-events-none" />

          <div className="container relative z-10">
            {/* Section label */}
            <div className="mb-12 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5" />
                Why Choose Henleaze
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
                    Why Choose Henleaze for VAT &amp; Bookkeeping
                    <span className="block text-gold mt-1">Support?</span>
                  </h2>

                  <div className="w-16 h-0.5 bg-gold rounded-full my-6" />

                  <p className="text-base text-white/80 leading-relaxed">
                    Managing VAT and bookkeeping can be time-consuming, particularly when you're focused on running and growing your business. At Henleaze Tax Consultancy, we help businesses stay organised, meet their reporting obligations and maintain accurate financial records with confidence.
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

        {/* Supporting Businesses Across Bristol & the UK */}
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
                <div className="absolute inset-0 opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 border border-gold/25 text-gold">
                    <Globe className="h-8 w-8" />
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
                  Supporting Businesses Across Bristol &amp; the UK
                </h2>

                <div className="w-14 h-0.5 bg-gold rounded-full mb-6" />

                <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                  <p>
                    While many businesses choose us for our local expertise, our services are not limited to Bristol. We support businesses across the UK with reliable VAT and bookkeeping support, helping them maintain accurate records and meet their financial obligations.
                  </p>
                  <p>
                    Whether you need assistance with VAT returns, bookkeeping, cloud accounting software or ongoing compliance support, our team is here to help. We provide practical advice and dependable service that allows business owners to focus on running their business with confidence.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/15 to-gold/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                    <span className="relative">Talk to Our Team</span>
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-24 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                Who We Work With
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We provide VAT and bookkeeping support to businesses of all sizes across a wide range of industries. Whether you're just starting out or managing an established company, our services help keep your finances organised and your reporting obligations under control.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
              {whoWeWorkWith.map((client, index) => {
                const IconComponent = client.icon;
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
                        {client.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/cta-consult.png"
              alt="Professional consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient opacity-95" />
          </div>
          <div className="container max-w-5xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold text-gold bg-gold/10 rounded-full border border-gold/25 tracking-wider uppercase">
                <HelpCircle className="h-3.5 w-3.5" />
                FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-gold/40 hover:bg-white/15 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold text-sm font-bold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:rotate-6 group-hover:scale-105">
                      Q
                    </span>
                    <span className="group-hover:text-gold transition-colors duration-300">
                      {faq.q}
                    </span>
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed pl-11 transition-colors duration-300 group-hover:text-gray-200">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative w-full py-32 overflow-hidden">
          {/* Full-bleed background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/cta-consult.png"
              alt="Professional VAT and bookkeeping consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
          </div>
          {/* Gold accent lines */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight mb-6">
              Need Reliable VAT &amp; Bookkeeping Support?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-white/90 mb-10 leading-relaxed text-base md:text-lg">
              <p>
                Keeping your bookkeeping up to date and managing VAT obligations doesn&apos;t have to be a burden. With the right support, you can stay compliant, maintain accurate financial records and spend more time focusing on your business.
              </p>
              <p className="font-semibold text-white">
                Get in touch with our team today to discuss your requirements and find out how our VAT and bookkeeping accounting services can support your business.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact" className="flex items-center">
                  Book a Consultation
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

export default VATBookkeeping;
