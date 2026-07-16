import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Users,
  Clock,
  Shield,
  FileCheck,
  PiggyBank,
  Briefcase,
  Star,
  TrendingUp,
  Building,
  Rocket,
  Store,
  Wrench,
  Coffee,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  BarChart3,
  Coins,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* ─────────────────────────── DATA ─────────────────────────── */

const services = [
  {
    icon: Clock,
    title: "Monthly Payroll Services",
    description:
      "Accurate payroll processing is essential for maintaining employee trust and ensuring compliance with HMRC requirements. Our monthly payroll services are tailored to businesses of all sizes, helping you manage salaries, deductions and employee payments efficiently. Whether you have a small team or a growing workforce, we provide reliable monthly payroll support that keeps your payroll running smoothly.",
    included: [
      "Salary and wage processing",
      "Payslip generation",
      "Tax and National Insurance calculations",
      "Payroll record management",
    ],
  },
  {
    icon: Shield,
    title: "RTI Submission Services",
    description:
      "HMRC requires employers to report payroll information in real time. We handle HMRC RTI submissions accurately and on time, helping your business remain compliant with reporting requirements. Whether you require support with RTI submission online or ongoing payroll compliance, our team ensures your submissions are completed correctly every pay period.",
    included: [
      "RTI reporting to HMRC",
      "Payroll data submissions",
      "Compliance monitoring",
      "Submission error support",
    ],
  },
  {
    icon: PiggyBank,
    title: "Pension Auto-Enrolment Services",
    description:
      "Meeting workplace pension obligations is an important responsibility for employers. Our pension auto-enrolment services help businesses manage assessments, enrolment duties and ongoing compliance. We work with a range of auto enrolment pension providers and provide auto enrolment pension services tailored to your workforce requirements.",
    included: [
      "Employee eligibility assessments",
      "Pension scheme setup support",
      "Employer compliance reporting",
      "Ongoing pension administration",
    ],
  },
  {
    icon: FileCheck,
    title: "P60 & P45 Management Services",
    description:
      "Preparing employee documentation accurately and on time is essential for maintaining compliance and supporting your workforce. We generate and distribute P60s and P45s electronically, ensuring employees receive the information they need promptly.",
    included: [
      "P60 preparation and distribution",
      "P45 processing for leavers",
      "Year-end payroll documentation",
      "Employee record updates",
    ],
  },
  {
    icon: Users,
    title: "HR Support Services",
    description:
      "Managing employees involves more than payroll. Our HR support services provide practical guidance on employment matters, helping businesses navigate workplace challenges with confidence. From contracts and policies to employee relations, we help you implement effective HR practices that support your business.",
    included: [
      "Employment contract guidance",
      "HR policies and procedures",
      "Employee relations support",
      "Workplace compliance advice",
    ],
  },
  {
    icon: Coins,
    title: "Employee Benefits Management",
    description:
      "Employee benefits can play an important role in attracting and retaining talent. We provide support with benefits administration, including P11D reporting and salary sacrifice arrangements, helping your business manage benefits efficiently and remain compliant.",
    included: [
      "P11D reporting",
      "Salary sacrifice guidance",
      "Benefits administration support",
      "Compliance assistance",
    ],
  },
];

const pillars = [
  {
    num: "01",
    title: "Reliable Payroll Management",
    description:
      "Payroll mistakes can be costly and time-consuming. Our team ensures your payroll is managed accurately and on time, giving you peace of mind and allowing you to focus on running your business.",
  },
  {
    num: "02",
    title: "Practical HR Advice",
    description:
      "Employment matters can be complex, especially as your business grows. Our experienced team provides clear guidance on contracts, policies and employee relations, helping you make confident decisions when workplace issues arise. As a trusted human resources management company, we deliver practical human resource solutions tailored to businesses of all sizes.",
  },
  {
    num: "03",
    title: "Support That Grows With Your Business",
    description:
      "As your business evolves, your payroll and HR requirements may change. We provide flexible support that adapts to your needs, whether you're hiring your first employee or managing an expanding team.",
  },
  {
    num: "04",
    title: "Local Expertise with UK-Wide Support",
    description:
      "Businesses looking for payroll and HR services in Bristol value local expertise, but our support extends far beyond the city. We work with organisations across the UK, providing tailored payroll and human resources solutions designed around their individual requirements.",
  },
  {
    num: "05",
    title: "A Trusted Partner for Employers",
    description:
      "From day-to-day administration to long-term workforce planning, we aim to become a trusted extension of your business. Our payroll and HR services Bristol businesses rely on are built around reliability, responsiveness and practical advice.",
  },
];

const industries = [
  {
    icon: Rocket,
    name: "Start-Ups & Growing Businesses",
    description:
      "As your business grows, so do your responsibilities as an employer. We help start-ups establish compliant payroll processes and effective HR practices from the outset.",
  },
  {
    icon: Briefcase,
    name: "Small & Medium-Sized Businesses",
    description:
      "From payroll processing to employee support, we work closely with SMEs to simplify administration and help them manage their workforce with confidence.",
  },
  {
    icon: Star,
    name: "Professional Services Firms",
    description:
      "We support consultants, agencies and professional service providers with reliable payroll and HR solutions tailored to their operational needs.",
  },
  {
    icon: Store,
    name: "Retail & Hospitality Businesses",
    description:
      "Managing shift patterns, seasonal staff and payroll can be challenging. Our team helps businesses in the retail and hospitality sectors stay organised and compliant.",
  },
  {
    icon: Wrench,
    name: "Construction & Trade Businesses",
    description:
      "We provide payroll and HR support to construction companies and trade businesses, helping them manage employees and meet their employer obligations.",
  },
  {
    icon: Building,
    name: "Property & Real Estate Businesses",
    description:
      "From property management companies to real estate professionals, we provide payroll and HR support tailored to the specific needs of the property sector.",
  },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

const PayrollHR = () => {
  return (
    <>
      <Helmet>
        <title>Payroll &amp; HR Services in Bristol for Growing Businesses</title>
        <meta
          name="description"
          content="Looking for payroll and HR services in Bristol? We provide payroll, HR support, compliance and advisory services to businesses of all sizes across the UK."
        />
      </Helmet>
      <Layout>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden hero-gradient py-24 md:py-32 flex items-center">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-navy-light/40 blur-3xl rounded-full" />
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 items-center">

              {/* Hero content */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="mb-6 flex items-center justify-center lg:justify-start">
                  <div className="h-8 w-1 bg-gold rounded-full mr-3" />
                  <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs">
                    Specialist Payroll &amp; HR Support
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Payroll and HR Services
                  <span className="block text-gold mt-2">in Bristol</span>
                </h1>

                <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                  Managing payroll and people can be time-consuming, especially as your business grows. From processing salaries and staying compliant with employment regulations to handling day-to-day HR matters, having the right support in place can save time and reduce administrative pressure.
                </p>

                <p className="mt-4 text-base text-white/75 leading-relaxed max-w-2xl">
                  At Henleaze Tax Consultancy, we provide reliable payroll and HR services in Bristol &amp; across the UK, tailored to businesses of all sizes. Whether you need ongoing payroll services, practical HR services in Bristol or specialist guidance from experienced HR professionals, our team is here to help.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Speak to a Payroll &amp; HR Specialist
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white bg-white/5 hover:bg-navy hover:text-white rounded-full px-8 py-6 transition-all duration-300"
                    asChild
                  >
                    <Link to="/calculator">Try Our Calculator</Link>
                  </Button>
                </div>
              </div>

              {/* Hero right panel */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                  <p className="text-xl font-bold text-white mb-6">Expert Payroll &amp; HR Solutions</p>

                  <div className="space-y-4">
                    {[
                      { title: "Monthly Payroll", text: "Accurate payroll, on time every pay period", icon: Clock },
                      { title: "RTI Submissions", text: "HMRC compliant real-time reporting", icon: Shield },
                      { title: "Pension Auto-Enrolment", text: "Full workplace pension management", icon: PiggyBank },
                      { title: "HR Support", text: "Contracts, policies & employee relations", icon: Users },
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

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-white/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">HMRC Compliant</span>
                    <span className="text-xs">Tailored to All Business Sizes</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="absolute top-24 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-24 right-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <Briefcase className="h-3.5 w-3.5" />
                Payroll &amp; HR Solutions
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight mt-3">
                Our Payroll &amp; HR Solutions for Businesses
              </h2>

              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Managing payroll and HR responsibilities can be complex, particularly as your business grows. Our payroll and HR solutions are designed to help businesses stay compliant, reduce administrative burdens and support their employees effectively.
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

        {/* ── WHY CHOOSE ── */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-navy via-navy-light to-navy-dark">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-navy-light/60 blur-3xl rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="mb-12 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-wider">
                <Shield className="h-3.5 w-3.5" />
                Why Choose Henleaze
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 items-start">

              {/* Left sticky sidebar */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
                <div className="relative rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 overflow-hidden group hover:border-gold/30 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    Why Choose Henleaze for Payroll &amp; HR
                    <span className="block text-gold mt-1">Support?</span>
                  </h2>

                  <div className="w-16 h-0.5 bg-gold rounded-full my-6" />

                  <p className="text-base text-white/80 leading-relaxed">
                    Managing employees comes with a range of responsibilities, from processing payroll accurately to keeping up with changing employment regulations. At Henleaze Tax Consultancy, we provide practical support that helps businesses save time, remain compliant and create efficient workplace processes.
                  </p>

                  <div className="mt-8">
                    <Link
                      to="/pricing"
                      className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy shadow-lg transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]"
                    >
                      <span className="relative">View Our Pricing</span>
                      <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-navy/20 transition-all duration-300 group-hover/btn:translate-x-1">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right pillar cards */}
              <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[1.75rem] bg-white/5 border border-white/10 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10">
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

        {/* ── SUPPORTING BUSINESSES SIDEBOX ── */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gold/15 shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex flex-col lg:flex-row">
              {/* Gold left stripe */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold/40 via-gold to-gold/40 rounded-l-[2.5rem]" />

              {/* Left - navy icon panel */}
              <div className="relative flex-shrink-0 flex flex-col items-center justify-center gap-6 px-10 py-12 lg:py-16 bg-gradient-to-br from-navy via-navy-light to-navy-dark lg:w-72 xl:w-80">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMiAxMi01LjM3MyAxMiAxMiAxMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 border border-gold/25 text-gold">
                    <Building className="h-8 w-8" />
                  </div>
                  <div className="h-px w-12 bg-gold/40 rounded-full" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Reach</p>
                  <p className="text-white/70 text-sm leading-relaxed">Bristol &amp; across the UK</p>
                </div>
              </div>

              {/* Right - text content */}
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
                    While many businesses choose us for our local expertise in Bristol, our services are not limited to the area. We support businesses across the UK, providing reliable payroll and HR solutions tailored to their size, industry and workforce requirements.
                  </p>
                  <p>
                    Whether you need reliable payroll support or ongoing HR guidance, our team is here to help your business stay compliant and grow with confidence.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/15 to-gold/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                    <span className="relative">Speak to a Payroll &amp; HR Specialist</span>
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE WORK WITH ── */}
        <section className="py-24 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                Who We Work With
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We provide payroll and HR support to businesses of all sizes across a wide range of industries. Whether you&apos;re employing your first team member or managing a growing workforce, our services are tailored to meet the needs of your business.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
              {industries.map((ind, index) => {
                const IconComponent = ind.icon;
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
                        {ind.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FULL-BLEED CTA ── */}
        <section className="relative w-full py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img
              src="/cta-consult.png"
              alt="Payroll and HR services consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
          </div>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight mb-6">
              Ready to Simplify Your Payroll &amp; HR Management?
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-white/90 mb-10 leading-relaxed text-base md:text-lg">
              <p>
                Managing payroll and HR doesn&apos;t have to take time away from running your business. At Henleaze Tax Consultancy, we provide reliable support that helps businesses stay compliant, support their employees and operate more efficiently. Whether you need ongoing payroll management or practical HR advice, our team is here to help.
              </p>
              <p className="font-semibold text-white">
                Get in touch today to discuss your requirements and discover how our payroll and HR services can support your business.
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

export default PayrollHR;
