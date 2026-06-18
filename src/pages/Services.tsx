import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Building2,
  Home,
  Users,
  Calculator,
  FileText,
  Scale,
  Zap,
  UserCheck,
  ArrowRight,
  ShieldCheck,
  Award,
  HelpCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";

function useCountUp(target: number, duration = 2000, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * p);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return value;
}

function StatCard({
  value,
  suffix,
  label,
  sublabel,
  started,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  started: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2000, started);
  return (
    <div
      className="relative flex flex-col items-center text-center p-6 rounded-2xl group transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] bg-white border border-border hover:border-gold/50 shadow-md hover:shadow-[0_20px_40px_rgba(202,169,87,0.12)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="flex items-baseline gap-0.5 mb-1.5 transition-transform duration-500 group-hover:scale-110">
        <span
          className="font-display font-extrabold leading-none tabular-nums"
          style={{ fontSize: "clamp(2rem,3vw,2.6rem)", color: "hsl(222,47%,15%)" }}
        >
          {count}
        </span>
        <span
          className="font-display font-bold leading-none animate-pulse"
          style={{ fontSize: "clamp(1.1rem,1.8vw,1.5rem)", color: "hsl(43,74%,49%)" }}
        >
          {suffix}
        </span>
      </div>
      <p className="font-semibold text-sm leading-tight transition-colors duration-300 group-hover:text-gold" style={{ color: "hsl(222,47%,15%)" }}>
        {label}
      </p>
      <p className="text-xs mt-0.5 text-muted-foreground transition-colors duration-300 group-hover:text-navy/70">{sublabel}</p>
    </div>
  );
}

const Services = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 500, suffix: "+", label: "Happy Clients", sublabel: "Across Bristol & the UK", delay: 0 },
    { value: 15, suffix: "+", label: "Years Experience", sublabel: "Trusted expertise since 2009", delay: 80 },
    { value: 98, suffix: "%", label: "Client Retention", sublabel: "Long-term relationships first", delay: 160 },
    { value: 2, suffix: "M+", label: "Tax Saved (£)", sublabel: "Recovered for clients last year", delay: 240 },
  ];

  const servicesList = [
    {
      title: "Contractor Accounting",
      description:
        "Specialist accounting and tax support for contractors and freelancers across Bristol, including company formation, IR35 guidance, payroll and tax-efficient planning.",
      features: ["Company Formation", "IR35 Compliance", "Tax Planning", "Payroll Services"],
      path: "/services/contractor-accountants",
      icon: Briefcase,
      image: "landlord-guide.png",
    },
    {
      title: "Small Business Accounting",
      description:
        "Reliable accounting services for Bristol businesses, covering bookkeeping, VAT returns, year-end accounts and practical financial advice to support growth.",
      features: ["Bookkeeping", "VAT Returns", "Year-End Accounts", "Business Advisory"],
      path: "/services/small-business-accountants",
      icon: Building2,
      image: "cta-consult.png",
    },
    {
      title: "Landlord Services",
      description:
        "Dedicated accounting and tax consultation services for landlords and property investors, helping manage rental income, tax obligations and property portfolios efficiently.",
      features: ["Rental Income Tax", "Property Portfolios", "Capital Gains Tax", "Expense Tracking"],
      path: "/services/landlord-accountants",
      icon: Home,
      image: "cgt-guide.png",
    },
    {
      title: "Payroll & HR",
      description:
        "Professional payroll and compliance support for businesses, ensuring accurate payroll processing, RTI submissions and pension obligations are handled correctly.",
      features: ["Monthly Payroll", "Pension Auto-Enrolment", "RTI Submissions", "P60s & P45s"],
      path: "/services/payroll-and-hr-services",
      icon: Users,
      image: "R&D Tax Credits.jpg",
    },
    {
      title: "Tax Planning",
      description:
        "Strategic tax consultation services for individuals and businesses, helping minimise tax liabilities, maximise available reliefs and navigate complex tax legislation with confidence.",
      features: ["Corporation Tax Planning", "Capital Gains Tax Advice", "Inheritance Tax Planning", "Strategic Tax Guidance"],
      path: "/services/tax-planning",
      icon: Calculator,
      image: "small-business-guide.png",
    },
    {
      title: "VAT & Bookkeeping",
      description:
        "Accurate bookkeeping and VAT support in Bristol that helps keep financial records organised, up to date and compliant with Making Tax Digital requirements.",
      features: ["VAT Returns", "Dext & Xero Support", "Bank Reconciliation", "MTD Compliance"],
      path: "/services/vat-and-bookkeeping-accounting-services",
      icon: FileText,
      image: "office-bg.png",
    },
    {
      title: "Company Secretarial",
      description:
        "Comprehensive company secretarial services to help businesses meet Companies House obligations and maintain ongoing statutory compliance.",
      features: ["Registered Office Services", "Confirmation Statements", "Share Management", "Statutory Registers"],
      path: "/services/company-secretarial-services",
      icon: Scale,
      image: "Company Secretarial.jpg",
    },
    {
      title: "R&D Tax Credits",
      description:
        "Specialist support for businesses seeking to maximise available R&D tax relief through accurate claim preparation and HMRC-compliant submissions.",
      features: ["Technical Reports", "Cost Identification", "HMRC Submission Support", "Expert Review"],
      path: "/services/rd-tax-credit-claim",
      icon: Zap,
      image: "tax-saving-guide.jpg",
    },
    {
      title: "Personal Tax",
      description:
        "Personal tax services tailored to individuals, including self-assessment tax returns, rental income reporting, investment income declarations and tax-efficient planning.",
      features: ["Self-Assessment Returns", "Rental Income Tax", "Investment Income Reporting", "Tax Optimisation"],
      path: "/services/personal-tax-and-self-assessment-service",
      icon: UserCheck,
      image: "personal tax.jpg",
    },
    {
      title: "Outsourced Accounting",
      description:
        "Flexible outsourced accounting solutions for businesses looking for expert financial management, reporting and compliance support without the cost of an in-house team.",
      features: ["Dedicated Accountant", "Bookkeeping & Reporting", "Payroll Management", "Full Compliance Support"],
      path: "/services/outsourced-accounting-services",
      icon: Users,
      image: "outsourced accounting.jpg",
    },
  ];

  const whoWeHelpList = [
    {
      title: "Contractors & Freelancers",
      description: "Accounting, tax planning and IR35 support designed for contractors and self-employed professionals.",
      icon: Briefcase,
    },
    {
      title: "Small Businesses",
      description:
        "Reliable accounting services in Bristol to help businesses manage bookkeeping, VAT, payroll and financial reporting.",
      icon: Building2,
    },
    {
      title: "Landlords & Property Investors",
      description: "Specialist support with rental income, property taxation and portfolio management.",
      icon: Home,
    },
    {
      title: "Limited Companies & Startups",
      description: "Comprehensive accounting and compliance services to support growing companies at every stage.",
      icon: UserCheck,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Accounting & Tax Expertise",
      description:
        "Access professional support across accounting, tax planning, bookkeeping, payroll, compliance and financial reporting through a single trusted provider.",
    },
    {
      title: "HMRC Compliance Support",
      description:
        "Stay on top of tax obligations and reporting requirements with reliable support that helps reduce risk and avoid costly mistakes.",
    },
    {
      title: "Flexible Support for Every Client",
      description:
        "Whether you're an individual, contractor, landlord, startup or established business, services are tailored to suit your specific requirements.",
    },
    {
      title: "Local Knowledge, Nationwide Service",
      description:
        "Based in Bristol, the firm supports clients locally and across the UK through both in-person and remote accounting services.",
    },
    {
      title: "Transparent Fixed-Fee Pricing",
      description:
        "Clear and straightforward pricing provides certainty and value, with no unexpected costs or hidden charges.",
    },
  ];

  const howItWorksList = [
    {
      step: "Step 1",
      title: "Free Initial Consultation",
      description:
        "We start with a simple conversation to understand your business, your goals and your current financial situation. This helps us identify the right accounting and tax support for you.",
    },
    {
      step: "Step 2",
      title: "Tailored Setup & Onboarding",
      description:
        "Once we understand your needs, we set everything up for you, from bookkeeping systems to tax planning structure, ensuring everything is organised from day one.",
    },
    {
      step: "Step 3",
      title: "Ongoing Accounting & Support",
      description:
        "We take care of your ongoing accounting, tax filings and financial reporting while keeping you updated and supported whenever you need advice.",
    },
  ];

  const faqs = [
    {
      question: "What does a tax consultant do?",
      answer:
        "A tax consultant provides expert tax advice, ensures HMRC compliance, assists with tax planning, and helps individuals and businesses minimize their tax liabilities legally.",
    },
    {
      question: "Do you offer tax consultancy services in Bristol?",
      answer:
        "Yes, Henleaze Tax Consultancy offers professional tax consultancy services in Bristol, Henleaze, and across the UK for businesses, landlords, and individuals.",
    },
    {
      question: "Can you help with HMRC tax issues?",
      answer:
        "Our experienced tax consultants provide full HMRC tax help, including correspondence handling, investigations, and compliance support.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Accountancy Services in Bristol | Financial & Tax Advice</title>
        <meta
          name="description"
          content="Professional accountancy services in Bristol, including accounting advisory, tax consultation, bookkeeping and payroll for individuals and businesses."
          key="description"
        />
      </Helmet>
      <Layout>
        <section className="relative overflow-hidden hero-gradient py-24 md:py-32 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
                Accountancy Services in Bristol
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display animate-fade-in [animation-delay:150ms]">
                Accountancy Services in Bristol &amp; Tax Support
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in [animation-delay:300ms]">
                Henleaze Tax Consultancy provides professional accountancy and tax support for individuals, contractors, landlords and businesses across Bristol. Whether you need help with day-to-day accounting, financial guidance, tax planning or compliance requirements, practical solutions and expert advice are tailored to your needs, helping you stay organised, make informed decisions and focus on what matters most.
              </p>
              <div className="animate-fade-in [animation-delay:450ms]">
                <Button
                  size="lg"
                  asChild
                  className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8 rounded-xl shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section ref={statsRef} className="bg-white border-y border-border py-12 md:py-16">
          <div className="container">
            <p className="text-center text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-8">
              Trusted by Hundreds of Local Businesses
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} started={statsStarted} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden hero-gradient py-20 md:py-28">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Our Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Our Accountancy &amp; Tax Services in Bristol
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Henleaze Tax Consultancy provides professional accountancy services in Bristol for individuals, contractors, landlords and businesses. Our experienced tax consultation services provide reliable HMRC tax help, compliance support and strategic tax advice to help you manage your finances efficiently and stay focused on your goals.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {servicesList.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group overflow-hidden relative flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-dark/40"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                      <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 backdrop-blur-md text-gold border border-gold/20 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-gold/30">
                        <IconComponent className="h-6 w-6 transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-sm text-white/75 leading-relaxed mb-5">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-white/90 font-medium rounded-lg bg-white/5 border border-white/10 px-3 py-2"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-gold shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-4 border-t border-white/10">
                        <Link
                          to={service.path}
                          className="inline-flex items-center text-sm font-bold text-gold group/link transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Audience
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">Who We Help in Bristol</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Henleaze Tax Consultancy provides accountancy and tax consultation services for a wide range of clients across Bristol, delivering practical financial support tailored to individual and business needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whoWeHelpList.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-border hover:border-gold/50 hover:shadow-[0_20px_40px_rgba(202,169,87,0.12)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
                  >
                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy mb-5 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-[360deg]">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-gold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-navy-light/95">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* -- SECTION 5: WHY CHOOSE US (Blue Background) -- */}
        <section className="relative overflow-hidden hero-gradient py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0aHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjerhQGx33k9SyAm9WSnoPeJ6PHatirAMiAxMi01LjM3MyAxMi0xMi0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Core Benefits
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Henleaze Tax Consultancy
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Choosing the right accountancy services in Bristol is about more than meeting deadlines. Henleaze Tax
                Consultancy provides practical accounting, tax and advisory support designed to help individuals and businesses
                stay compliant, improve financial efficiency and make informed decisions with confidence.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-6 max-w-7xl mx-auto mb-16">
              {whyChooseUsList.map((item, index) => (
                <div
                  key={index}
                  className={`
            group relative h-full p-6 rounded-2xl bg-white/5 border border-white/10
            hover:border-gold/30 hover:bg-white/10 transition-all duration-500
            hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(202,169,87,0.12)]
            ${index < 3 ? "xl:col-span-2" : "xl:col-span-2"}
            ${index === 3 ? "xl:col-start-2" : ""}
            ${index === 4 ? "xl:col-start-4" : ""}
          `}
                >
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-5 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:rotate-[360deg]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-3 transition-colors duration-300 group-hover:text-gold group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/95">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8 rounded-xl shadow-lg hover:shadow-gold/25 transition-all duration-300"
              >
                <Link to="/about" className="inline-flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">How We Support You</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Getting started with us is straightforward. We keep the process clear and hassle-free so you can focus on your business while we take care of your accounting and tax needs.
              </p>
            </div>

            <div className="relative grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16 px-4">
              <div className="hidden md:block absolute top-[90px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gold/50 via-gold/10 to-gold/50 z-0 animate-pulse"></div>

              {howItWorksList.map((item, index) => (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center group bg-white border border-border p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-gold/50 hover:shadow-[0_20px_40px_rgba(202,169,87,0.12)]"
                >
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold border-2 border-gold font-bold text-sm shadow-md mb-6 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-115">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs transition-colors duration-300 group-hover:text-navy-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto text-center border-t border-border pt-12 animate-fade-in">
              <p className="text-lg font-medium text-navy mb-8 leading-relaxed">
                That&rsquo;s it, no complicated processes, no confusion. Just straightforward support from experienced accountants in Bristol who take care of everything for you.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-navy hover:bg-navy-light text-white font-bold h-14 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Link to="/pricing">View Our Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* -- SECTION 7: FAQ (Blue Background) -- */}
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
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase">
                <HelpCircle className="w-4 h-4 text-gold" />
                FAQ
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "What accounting and tax services do you offer?",
                  answer:
                    "We offer a comprehensive range of accounting and tax services for individuals and businesses, including bookkeeping, payroll, VAT returns, tax planning, annual accounts, contractor accounting, landlord accounting and business advisory support.",
                },
                {
                  question: "Do I need an accountant for my business?",
                  answer:
                    "An accountant can help you manage your finances more effectively, stay compliant with HMRC requirements, meet important deadlines and identify opportunities to improve tax efficiency, giving you more time to focus on running your business.",
                },
                {
                  question: "Can your services be tailored to my needs?",
                  answer:
                    "Yes. Every client is different, which is why we tailor our services to suit your circumstances. Whether you need support with a specific task or ongoing accounting and tax advice, we'll provide a solution that works for you.",
                },
                {
                  question: "Do you work with clients outside Bristol?",
                  answer:
                    "Absolutely. While we're based in Bristol, we work with individuals and businesses across the UK, providing flexible support both remotely and in person where required.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-gold/50 hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(202,169,87,0.2)] transition-all duration-300 ease-out cursor-default animate-fade-in"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold text-sm font-bold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-105 group-hover:rotate-6">
                      Q
                    </span>
                    <span className="group-hover:text-gold transition-colors duration-300">
                      {faq.question}
                    </span>
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed pl-11 transition-colors duration-300 group-hover:text-white/95">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden bg-white">
          {/* Background Image */}
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl animate-fade-in">
                Professional Accountancy & Tax Support Starts Here
              </h2>
              <p className="mt-4 text-lg text-gray-600 animate-fade-in [animation-delay:100ms]">
                Take the stress out of managing your finances with expert accountancy services in Bristol, tax and advisory services tailored to your needs. Whether you're an individual, contractor, landlord or business owner, Henleaze Tax Consultancy provides the support and guidance needed to help you stay compliant, improve tax efficiency and focus on what matters most.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in [animation-delay:200ms]">
                <Button size="lg" asChild className="bg-gold hover:bg-gold-light text-navy font-semibold shadow-lg hover:shadow-gold/30 transition-all duration-300">
                  <Link to="/contact" className="flex items-center">
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white bg-navy hover:bg-white/10 hover:text-gold hover:border-gold">
                  <a href="tel:+44 7949 956279">
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

export default Services;