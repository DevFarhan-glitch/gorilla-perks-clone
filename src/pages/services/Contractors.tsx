import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Briefcase,
  FileCheck,
  Calculator,
  Shield,
  Users,
  Clock,
  Laptop,
  Settings,
  TrendingUp,
  Palette,
  HardHat,
  UserCheck,
  Building,
  Coins,
  ShieldCheck,
  Phone,
  ArrowUpRight
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building,
    title: "Company Formation for Contractors in Bristol",
    description: "Starting a limited company is one of the first steps many contractors take. As experienced company formation accountants, we provide a complete company formation service to help contractors establish their business correctly from day one. Whether you're new to contracting or transitioning from employment, we'll guide you through the process and ensure your company is set up efficiently and in line with UK requirements.",
    included: [
      "Limited company registration",
      "Companies House filings",
      "Corporation Tax registration",
      "Guidance on business structure"
    ]
  },
  {
    icon: Shield,
    title: "IR35 Compliance for Contractors in Bristol",
    description: "IR35 rules can be challenging to navigate, particularly for contractors working on long-term or high-value assignments. Our team helps contractors understand their IR35 position, review contracts and ensure they are meeting HMRC requirements. If you're looking for an experienced IR35 accountant in Bristol, we provide practical advice tailored to your working arrangements.",
    included: [
      "Contract reviews",
      "Working practice assessments",
      "IR35 status guidance",
      "Ongoing compliance support"
    ]
  },
  {
    icon: Coins,
    title: "Tax-Efficient Planning for Contractors in Bristol",
    description: "Effective tax planning can help contractors retain more of their hard-earned income while remaining fully compliant with UK tax regulations. We work closely with contractors to identify tax-saving opportunities, optimise remuneration strategies, and ensure their finances are structured as efficiently as possible.",
    included: [
      "Efficient tax planning for contractors",
      "Salary and dividend planning",
      "Advice on allowable business expenses",
      "Ongoing tax efficiency reviews"
    ]
  },
  {
    icon: FileCheck,
    title: "Annual Accounts & Tax Returns for Contractors in Bristol",
    description: "Keeping your accounts accurate and up to date is essential for maintaining compliance and avoiding unnecessary penalties. Our team prepares annual accounts, corporation tax returns and personal tax returns, ensuring all submissions are completed accurately and on time.",
    included: [
      "Preparation of annual accounts for contractors",
      "Detailed annual accounts report for contractors",
      "Submission of annual accounts and tax returns",
      "Support with tax return throughout UK for contractors"
    ]
  },
  {
    icon: Users,
    title: "Payroll Services for Contractors in Bristol",
    description: "Running payroll correctly is essential when operating through a limited company. Our dedicated payroll support helps ensure your salary is processed accurately and on time. Whether you're paying yourself as a director or managing additional employees, we ensure payroll is handled accurately and in line with HMRC requirements.",
    included: [
      "Monthly payroll services for contractors",
      "Payslip preparation and payroll processing",
      "RTI submissions to HMRC"
    ]
  },
  {
    icon: Clock,
    title: "Real-Time Support for Contractors",
    description: "Contractors often need quick answers to financial and tax questions. That's why we provide responsive, ongoing support whenever you need it.",
    included: [
      "Fast responses by phone and email",
      "Practical guidance from contractor specialists",
      "Ongoing accounting and tax assistance",
      "Support tailored to your business circumstances"
    ]
  }
];

const pillars = [
  {
    num: "01",
    title: "Contractor-Focused Expertise",
    description: "Unlike general accountants, specialist contractor accountants understand the unique challenges of contract work. From company finances and director remuneration to sector-specific tax requirements, tailored advice helps you make informed financial decisions."
  },
  {
    num: "02",
    title: "Tax Efficiency & Compliance",
    description: "Keeping up with changing tax regulations can be time-consuming. Specialist contractor accountants help ensure your accounts, tax returns and statutory filings are completed accurately and on time."
  },
  {
    num: "03",
    title: "More Time to Focus on Your Work",
    description: "Managing bookkeeping, payroll and tax obligations can take valuable time away from running your business. By working with experienced contractor accountants, you can focus on delivering your services while knowing your financial responsibilities are being handled professionally."
  },
  {
    num: "04",
    title: "Ongoing Support as Your Business Grows",
    description: "Your accounting needs may change as your contracting business develops. Whether you're taking on larger contracts or reviewing your business structure, specialist support can help you plan confidently."
  }
];

const industries = [
  {
    icon: Laptop,
    name: "IT Contractors",
    description: "From software developers and engineers to IT consultants and project managers, we help technology professionals stay compliant and tax-efficient while focusing on delivering successful projects."
  },
  {
    icon: Settings,
    name: "Engineering Contractors",
    description: "We work with contractors across various engineering disciplines, providing support with company accounts, tax planning, payroll and ongoing compliance requirements."
  },
  {
    icon: TrendingUp,
    name: "Management Consultants",
    description: "Our team helps management consultants manage their finances effectively, ensuring their accounting and tax obligations are handled accurately and on time."
  },
  {
    icon: Palette,
    name: "Marketing & Creative Professionals",
    description: "We support marketing consultants, designers, content specialists and other creative professionals with practical accounting solutions tailored to their way of working."
  },
  {
    icon: HardHat,
    name: "Construction Contractors",
    description: "From independent tradespeople to specialist contractors, we provide accounting and tax support designed to meet the needs of those working in the construction sector."
  },
  {
    icon: UserCheck,
    name: "Freelancers & Independent Professionals",
    description: "We help freelancers and self-employed professionals across a variety of industries manage their accounts, meet HMRC requirements and focus on growing their businesses."
  }
];

const Contractors = () => {
  return (
    <>
      <Helmet>
        <title>Contractor Accountants in Bristol | Contractor Tax Support</title>
        <meta
          name="description"
          content="Looking for contractor accountants in Bristol? Get expert accounting, tax planning, payroll, and compliance support tailored to contractors and freelancers."
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
                    Specialist Contractor Advice
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Contractor Accountants
                  <span className="block text-gold mt-2">in Bristol</span>
                </h1>

                <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                  Contracting offers flexibility and independence, but it also comes with additional financial and tax responsibilities. From managing limited company accounts and payroll to staying compliant with HMRC requirements, having the right support can save you valuable time and help you avoid costly mistakes.
                </p>

                <p className="mt-4 text-base text-white/75 leading-relaxed max-w-2xl">
                  At Henleaze Tax Consultancy, our contractor accountants in Bristol provide practical, tailored support for contractors, freelancers and consultants across a wide range of industries. We help you stay on top of your accounts, meet important deadlines and make informed decisions that support the long-term success of your business.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Speak to a Contractor Accountant
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

              {/* Hero Right Visual Column */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Top glowing edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

                  <h3 className="text-xl font-bold text-white mb-6">Expert Contractor Tax Support</h3>

                  <div className="space-y-4">
                    {[
                      { title: "IR35 Compliance Assured", text: "Specialist review & status guidance", icon: ShieldCheck },
                      { title: "Tax-Efficient Structuring", text: "Optimal salary vs. dividend mix", icon: Coins },
                      { title: "Statutory Filings Sorted", text: "Annual accounts & tax returns", icon: FileCheck },
                      { title: "Real-Time Support", text: "Responsive phone & email support", icon: Clock },
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
                    <span className="text-xs">Tailored to Freelancers & Limited Co's</span>
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
                <Briefcase className="h-3.5 w-3.5" />
                Services & Tax Support
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight mt-3">
                Our Contractor Accounting Services &amp; Tax Support in Bristol
              </h2>

              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                As experienced accountants for contractors in Bristol, we provide tailored support for freelancers, consultants and
                limited company contractors across a wide range of industries. Our accounting services for contractors are designed
                to simplify compliance, improve tax efficiency and give you more time to focus on your work.
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
          </div>
        </section>

        {/* Industries We Work With Section */}
        <section className="py-24 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                Industries We Work With in Bristol
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We support contractors across a wide range of industries, providing tailored accounting and tax advice based on the unique requirements of each sector.
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

        {/* Ready to Simplify Section (Bottom CTA) */}
        <section className="w-full relative py-32 overflow-hidden bg-gray-50 w-full">
          <div className="w-full relative z-10 px-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden p-10 md:p-16 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-white/10">
              {/* Background overlay images and gradient */}
              <div className="absolute inset-0 -z-10">
                <img
                  src="/cta-consult.png"
                  alt="Professional tax consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/85" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
              </div>

              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight mb-6">
                Ready to Simplify Your Contractor Accounting?
              </h2>

              <div className="max-w-3xl mx-auto space-y-4 text-white/90 mb-10 leading-relaxed text-base md:text-lg">
                <p>
                  Whether you're just starting out as a contractor or already running an established limited company, having the right accounting support can make a real difference. At Henleaze Tax Consultancy, we provide practical advice, proactive guidance and reliable support to help you stay compliant and focused on growing your business.
                </p>
                <p className="font-semibold text-white">
                  Speak with our team today to discuss your requirements and discover how we can support your contracting journey.
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
                  className="border-white/30 text-white bg-navy hover:bg-white/10 hover:text-gold hover:border-gold rounded-full px-8 py-6"
                >
                  <a href="tel:+447949956279">
                    <Phone className="mr-2 h-4 w-4" />
                    +44 7949 956279
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contractors;

