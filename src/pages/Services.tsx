import React from "react";
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
  Phone,
  CheckCircle2,
} from "lucide-react";

import TrustBar from "@/components/home/TrustBar";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import BlogSection from "@/components/home/BlogSection";

const Services = () => {
  const servicesList = [
    {
      title: "Contractor Accounting",
      description:
        "Specialist accounting services in Bristol for contractors and freelancers, including IR35 support, company formation, salary-dividend optimisation and ongoing tax-efficient financial planning.",
      features: ["IR35 Support", "Company Formation", "Salary-Dividend Optimisation", "Tax-Efficient Planning"],
      path: "/services/contractor-accountants",
      icon: Briefcase,
      image: "landlord-guide.png",
      alt: "Contractor Accountants in Bristol",
    },
    {
      title: "Small Business Accounting",
      description:
        "Complete accounting support for small and growing businesses in Bristol, covering bookkeeping, VAT returns, year-end accounts and practical business advisory services.",
      features: ["Bookkeeping", "VAT Returns", "Year-End Accounts", "Business Advisory"],
      path: "/services/small-business-accountants",
      icon: Building2,
      image: "cta-consult.png",
      alt: "Small Business Accountants in Bristol",
    },
    {
      title: "Landlord Services",
      description:
        "Tailored accounting and tax solutions in Bristol for property investors, including rental income reporting, capital gains tax planning and full buy-to-let portfolio support.",
      features: ["Rental Income Reporting", "Capital Gains Tax Planning", "Portfolio Support", "Tailored Solutions"],
      path: "/services/landlord-accountants",
      icon: Home,
      image: "cgt-guide.png",
      alt: "Landlord Accountants in Bristol",
    },
    {
      title: "Payroll & HR Services",
      description:
        "Fully managed payroll solutions in Bristol including RTI submissions, pension auto-enrolment, payslips and ongoing HR compliance support for your team.",
      features: ["RTI Submissions", "Pension Auto-Enrolment", "Payslips", "HR Compliance"],
      path: "/services/payroll-and-hr-services",
      icon: Users,
      image: "R&D Tax Credits.jpg",
      alt: "Payroll and HR Services in Bristol",
    },
    {
      title: "Tax Planning",
      description:
        "Strategic tax advisory services in Bristol designed to minimise liabilities and improve financial efficiency, including corporation tax, capital gains and long-term planning.",
      features: ["Corporation Tax", "Capital Gains", "Long-term Planning", "Minimise Liabilities"],
      path: "/services/tax-planning",
      icon: Calculator,
      image: "small-business-guide.png",
      alt: "Tax Planning in Bristol",
    },
    {
      title: "VAT & Bookkeeping",
      description:
        "Accurate bookkeeping and VAT return services in Bristol using modern cloud systems, ensuring compliance with Making Tax Digital (MTD) requirements.",
      features: ["VAT Return Services", "Cloud Systems", "MTD Requirements", "Accurate Bookkeeping"],
      path: "/services/vat-and-bookkeeping-accounting-services",
      icon: FileText,
      image: "office-bg.png",
      alt: "VAT & Bookkeeping Accounting Services in Bristol",
    },
    {
      title: "Company Secretarial",
      description:
        "Full company compliance support including Companies House filings, confirmation statements, registered office services and statutory record maintenance.",
      features: ["Companies House Filings", "Confirmation Statements", "Registered Office Services", "Statutory Maintenance"],
      path: "/services/company-secretarial-services",
      icon: Scale,
      image: "Company Secretarial.jpg",
      alt: "Company Secretarial Services in Bristol",
    },
    {
      title: "R&D Tax Credits",
      description:
        "Specialist support to help businesses claim eligible R&D tax relief, including technical report preparation, cost analysis and HMRC submission handling.",
      features: ["R&D Tax Relief", "Technical Reports", "Cost Analysis", "HMRC Submission"],
      path: "/services/rd-tax-credit-claim",
      icon: Zap,
      image: "tax-saving-guide.jpg",
      alt: "R&D Tax Credit Claim in Bristol",
    },
    {
      title: "Personal Tax Services",
      description:
        "Hassle-free self-assessment tax return services in Bristol for individuals, including income, rental and investment tax reporting with full compliance support.",
      features: ["Self-Assessment", "Income Tax Reporting", "Rental Tax", "Compliance Support"],
      path: "/services/personal-tax-and-self-assessment-service",
      icon: UserCheck,
      image: "personal tax.jpg",
      alt: "Personal Tax & Self-Assessment Service in Bristol",
    },
    {
      title: "Outsourced Accounting",
      description:
        "Complete outsourced finance department services for businesses needing reliable, cost-effective accounting support without in-house staff.",
      features: ["Outsourced Finance", "Cost-Effective", "No In-House Staff Needed", "Reliable Support"],
      path: "/services/outsourced-accounting-services",
      icon: Users,
      image: "outsourced accounting.jpg",
      alt: "Outsourced Accounting Services in Bristol",
    },
  ];

  const whoWeHelpList = [
    {
      title: "Contractors & Freelancers",
      description: "As a reliable financial advisor in Bristol, we support contractors and freelancers with efficient accounting, tax planning and IR35 guidance.",
      icon: Briefcase,
    },
    {
      title: "Small Businesses",
      description: "We work closely with small and growing businesses to manage day-to-day accounting, VAT, payroll and year-end reporting.",
      icon: Building2,
    },
    {
      title: "Landlords & Property Investors",
      description: "Our specialist tax services for landlords cover rental income, capital gains and portfolio structuring.",
      icon: Home,
    },
    {
      title: "Limited Companies & Startups",
      description: "We provide full accounting support for limited companies, including bookkeeping, statutory accounts and tax compliance.",
      icon: UserCheck,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Clear, Fixed Pricing",
      description: "We keep things simple with fixed fees and no hidden charges, so you always know what your accounting costs will be each month.",
    },
    {
      title: "Local Chartered Accountants You Can Rely On",
      description: "You’ll work directly with experienced chartered accountants in Bristol who understand your business and give you consistent, practical support.",
    },
    {
      title: "Practical Tax Advice (Not Just Compliance)",
      description: "We don’t just complete your returns, we help you make better tax decisions throughout the year to avoid unnecessary costs.",
    },
    {
      title: "Fast, Responsive Support",
      description: "When you need help or have a question, we respond quickly so you’re never left waiting during important financial moments.",
    },
    {
      title: "Fully HMRC Compliant",
      description: "We make sure your accounts, tax filings and reports are always accurate and fully compliant with HMRC requirements.",
    },
    {
      title: "Straightforward Financial Guidance",
      description: "Think of us as your financial advisor in Bristol, helping you understand your numbers and make confident business decisions.",
    },
  ];

  const howItWorksList = [
    {
      step: "Step 1",
      title: "Free Initial Consultation",
      description: "We start with a simple conversation to understand your business, your goals and your current financial situation. This helps us identify the right accounting and tax support for you.",
    },
    {
      step: "Step 2",
      title: "Tailored Setup & Onboarding",
      description: "Once we understand your needs, we set everything up for you, from bookkeeping systems to tax planning structure, ensuring everything is organised from day one.",
    },
    {
      step: "Step 3",
      title: "Ongoing Accounting & Support",
      description: "We take care of your ongoing accounting, tax filings and financial reporting while keeping you updated and supported whenever you need advice.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Accountants in Bristol | Expert Tax & Accounting Support</title>
        <meta
          name="description"
          content="Looking for accountants in Bristol? Henleaze Tax Consultancy provides tax & accounting services for individuals & businesses with fixed fees & clear advice."
          key="description"
        />
      </Helmet>
      <Layout>
        {/* -- Hero Section -- */}
        <section className="relative overflow-hidden hero-gradient py-24 md:py-32 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
                Accountants in Bristol
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display animate-fade-in [animation-delay:150ms]">
                Accountants in Bristol Providing Tax and Accounting Support
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in [animation-delay:300ms]">
                We are a trusted Bristol-based accountancy firm providing clear, reliable and proactive financial support. From day-to-day accounting to strategic tax planning, we help contractors, landlords and small businesses stay compliant, tax-efficient and financially confident.
              </p>

              {/* Bullet points */}
              <div className="max-w-2xl mx-auto mb-10 text-left animate-fade-in [animation-delay:350ms]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-sm md:text-base font-medium">Fixed-fee, transparent pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-sm md:text-base font-medium">Dedicated chartered accountants in Bristol</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-sm md:text-base font-medium">Support for businesses, contractors &amp; landlords</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-sm md:text-base font-medium">Proactive tax planning &amp; compliance</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:400ms]">
                <Button
                  size="lg"
                  asChild
                  className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8 rounded-xl shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <Link to="/contact">Speak to a Bristol Accountant</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-white bg-navy hover:bg-white/10 hover:text-gold hover:border-gold h-14 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <Link to="/calculator">Try Our Tax Calculator</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* -- Trust Bar -- */}
        <TrustBar />

        {/* -- Who We Help Section -- */}
        <section className="py-20 md:py-28 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Audience
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">Who We Help in Bristol</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a trusted accountancy firm in Bristol, we work with a wide range of clients who need reliable financial guidance and proactive tax support.
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

            <div className="text-center mt-12">
              <p className="text-base text-navy font-medium mb-6">
                No matter your industry, our chartered accountants in Bristol deliver clear, practical advice designed to simplify your finances and reduce your tax burden.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-navy hover:bg-navy-light text-white font-bold h-14 px-8 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link to="/about" className="inline-flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* -- Services Overview Section -- */}
        <section className="relative overflow-hidden hero-gradient py-20 md:py-28">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Our Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Our Accounting &amp; Tax Services in Bristol
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                We provide a complete range of accounting and tax services in Bristol designed to support businesses, contractors, landlords and individuals. From everyday bookkeeping to advanced tax planning, our expert accountants in Bristol ensure your finances are accurate, compliant and tax-efficient.
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

            <div className="text-center mt-12">
              <Button
                size="lg"
                asChild
                className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8 rounded-xl shadow-lg hover:shadow-gold/25 transition-all duration-300"
              >
                <Link to="/contact">View Our Full Range of Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* -- Why Choose Us Section -- */}
        <section className="py-20 md:py-28 bg-white relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Core Benefits
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
                Why Choose Henleaze Tax Consultancy in Bristol
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finding the right accountant is about more than just handling your books. It’s about having someone you can rely on for clear advice, accurate work and support when you need it. Here at Henleaze Tax Consultancy, we focus on making your finances simpler and easier to manage, while helping you stay tax-efficient and compliant.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-12">
              {whyChooseUsList.map((item, index) => (
                <div
                  key={index}
                  className="group relative h-full p-6 rounded-2xl bg-white border border-border hover:border-gold/50 hover:shadow-[0_20px_40px_rgba(202,169,87,0.12)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy mb-5 transition-all duration-500 group-hover:bg-gold group-hover:text-navy group-hover:scale-110">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-navy hover:bg-navy-light text-white font-bold h-14 px-8 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link to="/pricing">See Our Transparent Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* -- How It Works Section -- */}
        <section className="py-20 md:py-28 bg-muted/30 relative">
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">How Our Process Works</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Getting started with us is straightforward. We keep the process clear and hassle-free so you can focus on your business while we take care of your accounting and tax needs.
              </p>
            </div>

            <div className="relative grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16 px-4">
              <div className="hidden md:block absolute top-[90px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-gold/50 via-gold/10 to-gold/50 z-0"></div>

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

            <div className="max-w-2xl mx-auto text-center border-t border-border pt-12">
              <p className="text-lg font-medium text-navy mb-8 leading-relaxed">
                That’s it, no complicated processes, no confusion. Just straightforward support from experienced accountants in Bristol who take care of everything for you.
              </p>
            </div>
          </div>
        </section>

        {/* -- Latest Insights -- */}
        <BlogSection />

        {/* -- Testimonials -- */}
        <Testimonials />

        {/* -- FAQ -- */}
        <FAQ />

        {/* -- Final CTA Section -- */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl">
                Speak to Experienced Accountants in Bristol Today
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Whether you need help with accounting, tax planning or ongoing financial support, our team is here to make things simple. Get clear advice from trusted accountants in Bristol and find the right solution for your business or personal finances.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="bg-gold hover:bg-gold-light text-navy font-semibold shadow-lg hover:shadow-gold/30 transition-all duration-300 w-full sm:w-auto">
                  <Link to="/contact" className="flex items-center">
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white/30 text-white bg-navy hover:bg-navy-light h-12 transition-all duration-300 w-full sm:w-auto">
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

export default Services;