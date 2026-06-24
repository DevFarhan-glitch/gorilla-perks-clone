import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Shield,
  Users,
  Clock,
  Phone,
  ArrowUpRight,
  Building2,
  Scale,
  ClipboardCheck,
  ClipboardList,
  UserCheck,
  Coins,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Laptop,
  Settings,
  Building,
  FileText,
  Lightbulb,
  Calculator,
  PiggyBank,
  Landmark
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: ClipboardCheck,
    title: "Self-Assessment Tax Returns",
    description:
      "Completing a tax return accurately and on time is essential for avoiding penalties and unnecessary stress. Our self assessment tax return services provide professional support for individuals, sole traders and company directors, ensuring every return is prepared correctly and submitted before the deadline.",
    included: [
      "Self-assessment tax return preparation",
      "Income and expense review",
      "HMRC submission",
      "Filing deadline management"
    ]
  },
  {
    icon: Calculator,
    title: "Income Evaluation",
    description:
      "Understanding all sources of income is the first step towards effective personal tax planning. We review employment income, dividends, rental income and other earnings to ensure your tax position is accurate and complete.",
    included: [
      "Employment income review",
      "Dividend and investment income assessment",
      "Rental income analysis",
      "Tax liability calculation"
    ]
  },
  {
    icon: PiggyBank,
    title: "Tax Optimisation",
    description:
      "Making full use of available allowances and reliefs can significantly reduce your tax liability. Our tax optimisation services help ensure you pay the correct amount of tax while remaining fully compliant with HMRC requirements.",
    included: [
      "Allowance reviews",
      "Relief identification",
      "Tax efficiency planning",
      "Ongoing tax guidance"
    ]
  },
  {
    icon: Landmark,
    title: "Capital Gains Tax Support",
    description:
      "Selling property, investments or other assets can create Capital Gains Tax obligations. We provide accurate capital gains tax reporting and help clients manage HMRC capital gains tax reporting requirements with confidence.",
    included: [
      "Capital gains calculations",
      "Asset disposal reviews",
      "HMRC reporting support",
      "Tax liability guidance"
    ]
  },
  {
    icon: Shield,
    title: "HMRC Investigation Support",
    description:
      "If HMRC opens an enquiry into your tax affairs, professional advice can make the process much easier. Our tax investigation accountants provide practical support and representation throughout the investigation.",
    included: [
      "HMRC correspondence",
      "Investigation support",
      "Document preparation",
      "Professional representation"
    ]
  },
  {
    icon: UserCheck,
    title: "Dedicated Personal Tax Advisor",
    description:
      "Having a single point of contact makes managing your tax affairs simpler throughout the year. Your personal tax advisor is available to provide clear guidance, answer questions and help you make informed financial decisions whenever you need support.",
    included: [
      "Year-round tax advice",
      "Personal tax planning support",
      "Ongoing compliance guidance",
      "Dedicated client assistance"
    ]
  }
];

const pillars = [
  {
    num: "01",
    title: "Experienced Personal Tax Professionals",
    description:
      "Whether you need help with an annual tax return or ongoing tax planning, our personal tax accountants work closely with you to ensure your affairs are managed accurately and efficiently."
  },
  {
    num: "02",
    title: "Practical Advice You Can Rely On",
    description:
      "Every client has different financial circumstances. As your personal tax advisor, we provide straightforward guidance that helps you understand your responsibilities and make informed decisions throughout the year."
  },
  {
    num: "03",
    title: "Accurate Returns & Timely Filing",
    description:
      "Missing deadlines or submitting incorrect information can lead to unnecessary penalties. Our self assessment service helps ensure your tax returns are prepared accurately, submitted on time and fully compliant with HMRC requirements."
  },
  {
    num: "04",
    title: "Support Beyond Self-Assessment",
    description:
      "From capital gains tax to tax planning and HMRC enquiries, we provide ongoing assistance whenever you need it. Our team is here to offer practical advice and long-term support as your circumstances evolve."
  },
  {
    num: "05",
    title: "Local Expertise with UK-Wide Support",
    description:
      "Businesses and individuals looking for personal tax advice in Bristol value local expertise, but our support extends across the UK. Whether you need a personal tax consultant for a one-off return or ongoing tax guidance, we're here to help."
  }
];

const audience = [
  {
    icon: Briefcase,
    name: "Sole Traders",
    description:
      "We help sole traders prepare accurate self-assessment tax returns, manage business income and meet HMRC filing deadlines."
  },
  {
    icon: Building,
    name: "Landlords & Property Owners",
    description:
      "From rental income reporting to capital gains tax guidance, we support landlords in managing their personal tax responsibilities efficiently."
  },
  {
    icon: Users,
    name: "Company Directors",
    description:
      "Directors often receive income from multiple sources, including salaries and dividends. We help ensure everything is reported correctly while providing ongoing tax guidance."
  },
  {
    icon: Laptop,
    name: "Contractors & Freelancers",
    description:
      "We work with contractors and freelancers to simplify self-assessment, organise financial records and provide support throughout the tax year."
  },
  {
    icon: Coins,
    name: "High-Net-Worth Individuals",
    description:
      "For individuals with more complex financial affairs, we provide clear advice on personal tax planning, investments and capital gains reporting."
  },
  {
    icon: TrendingUp,
    name: "Retirees & Investors",
    description:
      "Whether you're receiving pension income, investment returns or other sources of income, we help you understand your tax position and meet your reporting obligations with confidence."
  }
];

const PersonalTax = () => {
  return (
    <>
      <Helmet>
        <title>Personal Tax & Self-Assessment Service in Bristol</title>
        <meta
          name="description"
          content="Personal Tax & Self-Assessment service in Bristol for individuals, landlords and sole traders. Expert tax advice, accurate returns and reliable support."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative overflow-hidden hero-gradient py-24 md:py-32 flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAxIiBoZWlnaHQ9IjYwMSIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMThjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6bTAgMThjLTMuMzE0IDAtNi0yLjY4Ni02LTZzMi42ODYtNiA2LTYgNiAyLjY4NiA2IDYtMi42ODYgNi0yLTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

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
                    Specialist Personal Tax Advice
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Personal Tax & Self-Assessment
                  <span className="block text-gold mt-2">Service in Bristol</span>
                </h1>

                <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-2xl">
                  Managing your personal tax affairs can be challenging, especially when tax rules and reporting
                  requirements change over time. Whether you're self-employed, a landlord, a company director or simply
                  need help completing your annual tax return, having professional support can save time and provide
                  peace of mind.
                </p>

                <p className="mt-4 text-base text-white/75 leading-relaxed max-w-2xl">
                  At Henleaze Tax Consultancy, we provide a reliable Personal Tax & Self-Assessment service in Bristol and
                  across the UK, helping individuals meet their tax obligations accurately and on time. From preparing
                  self-assessment tax returns to providing practical tax advice, our team helps make the process
                  straightforward, giving you confidence that your tax affairs are handled accurately and on time.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Speak to a Tax Specialist
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

                  <p className="text-xl font-bold text-white mb-6">Expert Tax Support</p>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Self-Assessment Tax Returns",
                        text: "Accurate preparation & timely filing",
                        icon: ClipboardCheck
                      },
                      {
                        title: "Income Evaluation",
                        text: "Employment, dividends & rental assessment",
                        icon: Calculator
                      },
                      {
                        title: "Tax Optimisation",
                        text: "Allowance reviews & efficiency planning",
                        icon: PiggyBank
                      },
                      {
                        title: "Capital Gains Tax Support",
                        text: "Asset disposal review & CGT calculations",
                        icon: Landmark
                      }
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
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                      HMRC Guidelines Compliant
                    </span>
                    <span className="text-xs">Bristol &amp; Nationwide Support</span>
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
                Services &amp; Tax Support
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy leading-tight mt-3">
                Our Personal Tax &amp; Self-Assessment Services
              </h2>

              <div className="w-20 h-1 bg-gold mx-auto my-6 rounded-full" />

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Managing your personal tax affairs involves more than completing an annual tax return. Our personal tax
                services help you stay compliant, understand your obligations and make the most of the allowances and
                reliefs available to you.
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

        {/* Why Choose Section */}
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
                    Why Choose Henleaze for Personal Tax Support?
                  </h2>

                  <div className="w-16 h-0.5 bg-gold rounded-full my-6" />

                  <p className="text-base text-white/80 leading-relaxed">
                    Managing your personal tax affairs can be time-consuming, particularly when your income comes from
                    multiple sources or your circumstances change over time. At Henleaze Tax Consultancy, we provide clear
                    advice and reliable support, helping you meet your obligations while making the tax process as
                    straightforward as possible.
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

        {/* Supporting Individuals Section */}
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
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAxIiBoZWlnaHQ9IjYwMSIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMThjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6bTAgMThjLTMuMzE0IDAtNi0yLjY4Ni02LTZzMi42ODYtNiA2LTYgNiAyLjY4NiA2IDYtMi42ODYgNi0yLTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 border border-gold/25 text-gold">
                    <Building2 className="h-8 w-8" />
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
                  Supporting Individuals Across Bristol &amp; the UK
                </h2>

                <div className="w-14 h-0.5 bg-gold rounded-full mb-6" />

                <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                  <p>
                    While many of our clients are based in Bristol, we also support individuals across the UK with reliable
                    personal tax and self-assessment services.
                  </p>
                  <p>
                    Whether you need help preparing your annual tax return, managing income from multiple sources, reporting
                    capital gains or understanding your tax obligations, our team provides practical advice and dependable
                    support every step of the way.
                  </p>
                  <p>
                    From straightforward self-assessment returns to more complex personal tax matters, we provide practical
                    support that gives you confidence in your tax affairs throughout the year.
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/15 to-gold/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
                    <span className="relative">Speak to Our Team</span>
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
                We provide personal tax and self-assessment support to individuals with a wide range of financial
                circumstances. Whether your tax affairs are straightforward or more complex, we're here to help you stay
                compliant and manage your obligations with confidence.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
              {audience.map((item, index) => {
                const IconComponent = item.icon;
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
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ready to Explore Section (Bottom CTA) */}
        <section className="relative w-full py-32 overflow-hidden">
          {/* Full-bleed background */}
          <div className="absolute inset-0 -z-10">
            <img src="/cta-consult.png" alt="Professional tax consultation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-navy/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
          </div>
          {/* Gold accent lines top & bottom */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl leading-tight mb-6">
              Take the Stress Out of Personal Tax
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-white/90 mb-10 leading-relaxed text-base md:text-lg">
              <p>
                Managing your personal tax affairs doesn't have to be complicated. Whether you need help with your
                self-assessment tax return, capital gains reporting or ongoing tax advice, our team is here to provide
                clear guidance and dependable support.
              </p>
              <p className="font-semibold text-white">
                Get in touch today to discuss your circumstances and find out how our personal tax services can help you
                stay compliant, avoid unnecessary stress and manage your tax affairs with confidence.
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

export default PersonalTax;
