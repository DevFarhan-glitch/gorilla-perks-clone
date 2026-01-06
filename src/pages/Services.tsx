import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ServiceCards from "@/components/home/ServiceCards";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>
          Tax Consultancy Services in Bristol & UK | Henleaze Tax Consultants
        </title>
        <meta
          name="description"
          content="Henleaze Tax Consultancy provides expert tax consultancy services in Bristol and across the UK. Trusted tax consultants offering HMRC tax help, tax planning, and accounting support for businesses and individuals."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-24 md:py-32 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center animate-fade-in">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                Expert Tax Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Professional Tax Consultancy Services in Bristol & Across the UK
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Expert tax consultancy and accounting solutions tailored for
                contractors, small businesses, and landlords in Bristol and
                across the UK. Our experienced tax consultants provide reliable
                HMRC tax help, compliance support, and strategic tax advice to
                help you manage your finances efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-24 bg-background relative">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block">
                  Comprehensive Tax Consultancy & Accounting Support for Every
                  Stage
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full"></span>
                </h2>

                <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
                  At Henleaze Tax Consultancy, we understand that every business
                  journey is unique. Whether you are just starting your career as
                  an independent contractor, managing a growing small business, or
                  building a property portfolio as a landlord, our team of
                  dedicated accountants is here to provide the support and
                  guidance you need. We go beyond simple numbers; we provide
                  strategic insights that help you grow with confidence.
                </p>
              </div>
              
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Trusted Tax Consultants in Bristol & Henleaze
                </h2>
                <p className="text-lg text-muted-foreground">
                  As experienced tax consultants in Bristol, Henleaze Tax
                  Consultancy supports individuals and businesses with tailored
                  taxation consultancy services. Whether you need ongoing tax
                  advice, HMRC correspondence support, or proactive tax planning,
                  our tax advisors are here to help.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Tailored Solutions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't believe in one-size-fits-all. Our services are
                    customized to match your specific industry requirements and
                    personal financial goals, ensuring you only pay for what you
                    truly need.
                  </p>
                </div>
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Cutting-Edge Technology
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We leverage the latest cloud accounting software like Xero,
                    QuickBooks, and Dext to provide real-time visibility into
                    your finances and automate tedious bookkeeping tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCards />

        {/* How We Work Section */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-muted/30 to-muted/60 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                How It Works
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Our Process: Simple & Transparent
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We've streamlined our onboarding and delivery process to make
                accounting as stress-free as possible for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  desc: "We discuss your business needs and financial goals to determine the best approach.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                },
                {
                  step: "02",
                  title: "Tailored Quote",
                  desc: "Receive a clear, fixed-fee quote based on the specific services your business requires.",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                },
                {
                  step: "03",
                  title: "Seamless Onboarding",
                  desc: "We handle the switch from your previous accountant and set up your digital systems.",
                  icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  desc: "Your dedicated accountant provides year-round support and proactive tax advice.",
                  icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 bg-background rounded-2xl shadow-lg border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-navy">{item.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                    <svg className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Connector line (hidden on last item and mobile) */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gold/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview or Bonus Content */}
        <section className="py-20 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy rounded-3xl transform -rotate-1"></div>
              <div className="relative bg-gradient-to-br from-primary to-navy-light rounded-3xl p-10 md:p-14 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      Choosing the Right Service
                    </h2>
                  </div>
                  <p className="mb-6 text-white/90 leading-relaxed text-lg">
                    Not sure which accounting package or service is right for you?
                    Our team is expert at identifying the optimal tax structure and
                    compliance requirements for your specific situation. We can help
                    you decide between sole trader vs. limited company status,
                    advise on VAT registration thresholds, and ensure you're
                    utilizing all available allowances for property income.
                  </p>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Our goal is to maximize your take-home pay while keeping you
                    fully compliant with HMRC regulations. With Henleaze Tax
                    Consultancy, you're not just getting a service; you're getting a
                    dedicated financial partner.
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gold/30 border-2 border-white/20"></div>
                      <div className="w-10 h-10 rounded-full bg-gold/40 border-2 border-white/20"></div>
                      <div className="w-10 h-10 rounded-full bg-gold/50 border-2 border-white/20"></div>
                    </div>
                    <p className="text-sm text-white/70">Join 500+ satisfied clients across Bristol & UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Tax Consultancy – Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="group bg-background rounded-2xl border border-border p-6 md:p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">Q</span>
                  What does a tax consultant do?
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-11">
                  A tax consultant provides expert tax advice, ensures HMRC
                  compliance, assists with tax planning, and helps individuals and
                  businesses minimize their tax liabilities legally.
                </p>
              </div>

              <div className="group bg-background rounded-2xl border border-border p-6 md:p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">Q</span>
                  Do you offer tax consultancy services in Bristol?
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-11">
                  Yes, Henleaze Tax Consultancy offers professional tax consultancy
                  services in Bristol, Henleaze, and across the UK for businesses,
                  landlords, and individuals.
                </p>
              </div>

              <div className="group bg-background rounded-2xl border border-border p-6 md:p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">Q</span>
                  Can you help with HMRC tax issues?
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-11">
                  Our experienced tax consultants provide full HMRC tax help,
                  including correspondence handling, investigations, and compliance
                  support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </Layout>
    </>
  );
};

export default Services;
