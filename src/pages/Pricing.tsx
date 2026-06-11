import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Check, X, ArrowRight, PoundSterling, Sparkles, HelpCircle, FileText, CheckCircle2, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "£70",
    description: "Ideal for small limited companies with simple needs",
    highlight: false,
    delay: "delay-100",
    features: [
      { label: "Statutory Accounts", value: true },
      { label: "Corporation Tax Return (CT600)", value: true },
      { label: "Confirmation Statement", value: true },
      { label: "Free Meetings", value: "2" },
      { label: "Payroll", value: "Director + up to 2 employees" },
      { label: "Pension Assessment & Enrolment", value: true },
      { label: "Director Personal Tax Return (Salary & Dividend)", value: true },
      { label: "Director Personal Tax Return (Other Income)", value: "£150 extra per director" },
      { label: "HMRC Investigation", value: "Up to 3 hours free" },
      { label: "Tax Planning", value: false },
      { label: "Bookkeeping", value: false },
      { label: "VAT Preparation & Filing", value: false },
      { label: "Advisory Services", value: false },
      { label: "Quarterly Management Accounts", value: false },
    ],
  },
  {
    name: "Essentials",
    price: "£125",
    description: "Perfect for growing businesses",
    highlight: true,
    delay: "delay-200",
    features: [
      { label: "Statutory Accounts", value: true },
      { label: "Corporation Tax Return (CT600)", value: true },
      { label: "Confirmation Statement", value: true },
      { label: "Free Meetings", value: "5" },
      { label: "Payroll", value: "Up to 5 employees free + £72/employee/year" },
      { label: "Pension Assessment & Enrolment", value: true },
      { label: "Director Personal Tax Return (Salary & Dividend)", value: true },
      { label: "Director Personal Tax Return (Other Income)", value: "£150 extra per director" },
      { label: "HMRC Investigation", value: "Up to 10 hours free" },
      { label: "Tax Planning", value: true },
      { label: "Bookkeeping", value: true },
      { label: "VAT Preparation & Filing", value: true },
      { label: "Advisory Services", value: false },
      { label: "Quarterly Management Accounts", value: false },
    ],
  },
  {
    name: "Advanced",
    price: "£199",
    description: "Comprehensive support and advisory",
    highlight: false,
    delay: "delay-300",
    features: [
      { label: "Statutory Accounts", value: true },
      { label: "Corporation Tax Return (CT600)", value: true },
      { label: "Confirmation Statement", value: true },
      { label: "Free Meetings", value: "Unlimited" },
      { label: "Payroll", value: "Up to 10 employees free + £72/employee/year" },
      { label: "Pension Assessment & Enrolment", value: true },
      { label: "Director Personal Tax Return (Salary & Dividend)", value: true },
      { label: "Director Personal Tax Return (Other Income)", value: "£150 extra per director" },
      { label: "HMRC Investigation", value: "Included" },
      { label: "Tax Planning", value: true },
      { label: "Bookkeeping", value: true },
      { label: "VAT Preparation & Filing", value: true },
      { label: "Advisory Services", value: true },
      { label: "Quarterly Management Accounts", value: true },
    ],
  },
];

const faqs = [
  {
    q: "How much do accounting services cost in Bristol?",
    a: "The cost of an accountant can vary depending on the type of support required, the size of your business and the complexity of your financial affairs.",
  },
  {
    q: "Do you offer fixed-fee pricing?",
    a: "Yes. All packages are offered with clear, fixed-fee pricing, helping clients budget confidently without worrying about unexpected costs or hidden charges.",
  },
  {
    q: "What factors affect accountant fees?",
    a: "Accountant fees can vary depending on the services required, such as bookkeeping, payroll, tax planning, VAT returns, company accounts or personal tax support. More complex requirements may require a tailored quotation.",
  },
  {
    q: "Are there any hidden costs?",
    a: "No. Pricing is discussed upfront, and all costs are clearly outlined before work begins, ensuring complete transparency from the start.",
  },
  {
    q: "Does your pricing include tax services?",
    a: "Many packages include tax-related support, such as tax returns, compliance assistance and tax planning. The exact services included will depend on the package selected.",
  },
  {
    q: "Do you work with clients outside Bristol?",
    a: "Yes. While Henleaze Tax Consultancy is based in Bristol, we provide accounting and tax services to clients throughout the UK using secure digital systems and remote support.",
  },
  {
    q: "Can I switch from my current accountant?",
    a: "Absolutely. We can assist with the transition process and liaise with your existing accountant to make the switch as smooth and hassle-free as possible.",
  },
  {
    q: "How is your tax service pricing calculated?",
    a: "Tax service pricing is based on the level of support required, the complexity of your tax affairs and the services included within your package. A tailored quote can be provided for more specialised requirements.",
  },
  {
    q: "Why do accountant prices vary between firms?",
    a: "Accountant prices can vary depending on the experience of the firm, the services provided and the level of ongoing support included. Fixed-fee pricing helps provide greater clarity and value.",
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Accounting Services Pricing in Bristol | Tax Service Costs</title>
        <meta
          name="description"
          content="View transparent accounting services pricing in Bristol. Fixed-fee accounting and tax solutions with no hidden costs for individuals and businesses."
          key="description"
        />
      </Helmet>

      <Layout>
        {/* Section 1: Hero (Blue background) */}
        <section className="relative hero-gradient pt-36 pb-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70 z-0"></div>
          {/* Decorative Glow elements */}
          <div className="absolute top-1/2 left-10 w-96 h-96 bg-gold/10 blur-3xl rounded-full -z-10 animate-pulse duration-5000"></div>
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold/5 blur-3xl rounded-full -z-10"></div>
          
          <div className="container relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-spin" />
              Transparent Rates
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto drop-shadow-lg">
              Accounting & Tax Services Pricing in Bristol
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Explore transparent pricing for professional accounting and tax services tailored to individuals, contractors, landlords and businesses. With fixed-fee packages and no hidden charges, Henleaze Tax Consultancy makes it easy to find the right level of support for your needs.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-10 py-7 text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] group"
                onClick={() => navigate("/contact")}
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Section 2: Pricing Packages (White background) */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative abstract curves/shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl -z-10"></div>

          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4 relative inline-block">
                Choose the Right Package for Your Needs
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full"></span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Flexible options designed to provide the right level of accounting and tax support for individuals, landlords, contractors and businesses.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 items-stretch">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 ease-out animate-fade-up ${plan.delay} ${
                    plan.highlight
                      ? "bg-navy text-white border-2 border-gold/60 shadow-[0_20px_50px_rgba(15,23,42,0.15)] scale-100 md:scale-[1.03] lg:scale-[1.05] hover:scale-[1.05] md:hover:scale-[1.08] hover:border-gold hover:shadow-[0_25px_60px_-15px_rgba(202,169,87,0.35)] group z-20"
                      : "bg-white text-navy border border-slate-200/80 shadow-[0_10px_35px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.12)] group z-10"
                  }`}
                >
                  {/* Decorative top accent line for non-highlighted cards */}
                  {!plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-200 group-hover:bg-gold transition-colors duration-500 rounded-t-3xl" />
                  )}
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold to-gold-light rounded-t-3xl" />
                  )}

                  {plan.highlight && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-black uppercase tracking-widest text-navy shadow-[0_4px_15px_rgba(202,169,87,0.4)] animate-pulse">
                      Most Popular
                    </span>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`font-display text-2xl font-black tracking-tight ${plan.highlight ? "text-gold" : "text-navy"}`}>
                        {plan.name}
                      </h3>
                      {plan.highlight && <Sparkles className="w-5 h-5 text-gold animate-pulse" />}
                    </div>

                    <p className={`text-sm min-h-[40px] leading-relaxed ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>

                    {/* Price display */}
                    <div className="mt-8 mb-6 pb-6 border-b border-dashed border-current/10 flex items-baseline">
                      <span className={`text-5xl font-extrabold tracking-tight ${plan.highlight ? "text-white" : "text-navy"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ml-2 ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                         / month
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          {feature.value === false ? (
                            <X className={`h-5 w-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white/20" : "text-muted-foreground/30"}`} />
                          ) : (
                            <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${plan.highlight ? "text-gold" : "text-gold"}`} />
                          )}

                          <span className={plan.highlight ? "text-white/90" : "text-muted-foreground"}>
                            <strong className={`font-semibold ${plan.highlight ? "text-white" : "text-navy"}`}>
                              {feature.label}:
                            </strong>{" "}
                            {typeof feature.value === "string" ? feature.value : ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <Button
                    size="lg"
                    className={`mt-10 w-full rounded-full py-6 font-bold shadow-md transition-all duration-300 ${
                      plan.highlight
                        ? "bg-gold hover:bg-gold-light text-navy border-none shadow-[0_5px_20px_rgba(202,169,87,0.3)] hover:scale-[1.02]"
                        : "bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white hover:scale-[1.02]"
                    }`}
                    onClick={() =>
                      navigate(`/contact?plan=${encodeURIComponent(plan.name)}`)
                    }
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: What's Included With Every Package (Blue background) */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark opacity-95"></div>
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-gold/5 blur-3xl rounded-full z-0"></div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  Our Commitment
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                  What's Included With Every Package
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  At Henleaze Tax Consultancy, every client receives the same commitment to professional service, transparent pricing and reliable support. Our fixed-fee approach provides clarity and value, helping you understand exactly what is included while avoiding unexpected accountant fees or hidden charges.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Fixed-Fee Pricing",
                  "No Hidden Charges",
                  "Dedicated Client Support",
                  "HMRC Compliance Assistance",
                  "Secure Digital Communication",
                  "Ongoing Professional Advice"
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    <div className="flex-shrink-0 h-11 w-11 bg-gold/10 rounded-full flex items-center justify-center text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:rotate-6">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-white text-base md:text-lg group-hover:text-gold transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Bespoke Pricing / Custom Quote (White background - Enhanced) */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-slate-50 rounded-full blur-3xl -z-10"></div>
          <div className="container max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase">
                Bespoke Services
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
                Pricing Tailored to Your Requirements
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/80 rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-navy mb-4">
                    Why choose a customized quotation?
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Every client has different accounting and tax requirements, which means pricing can vary depending on the level of support needed. While our standard packages cover the needs of many businesses, some clients require a more tailored solution.
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Whether you're looking for ongoing accounting support, specialist tax advice, payroll services or a combination of services, we'll provide a clear, personalised quote based on your requirements. Our transparent approach ensures you understand the costs involved from the outset, with clear pricing and no hidden fees.
                  </p>
                  
                  {/* Elegant features list inside tailored section */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Dedicated Specialist Advice",
                      "Complex Corporation Planning",
                      "Custom Payroll Schedules",
                      "Multi-Entity Portfolios",
                    ].map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-navy font-semibold">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highly elevated call-out card on the right */}
                <div className="relative group bg-navy text-white rounded-[2rem] p-8 md:p-10 shadow-2xl border-2 border-gold/40 flex flex-col items-center text-center overflow-hidden hover:scale-[1.03] hover:border-gold hover:shadow-[0_25px_60px_-15px_rgba(202,169,87,0.3)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy-dark opacity-90 -z-10"></div>
                  
                  <div className="h-16 w-16 bg-gold rounded-2xl flex items-center justify-center text-navy mb-6 shadow-lg shadow-gold/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <PoundSterling className="h-8 w-8 text-navy" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Custom Pricing</h4>
                  <p className="text-sm text-white/70 leading-relaxed mb-8">
                    Get an instant custom quote structured explicitly around your unique operational activities.
                  </p>
                  
                  <Button
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-light text-navy font-extrabold rounded-full py-6 text-base transition-all duration-300 shadow-[0_5px_15px_rgba(202,169,87,0.3)] hover:scale-105 group"
                    onClick={() => navigate("/contact?subject=Custom%20Quote")}
                  >
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs (Blue background - Enhanced cards) */}
        <section className="py-24 bg-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark via-navy to-navy-light opacity-95"></div>
          {/* Glowing blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-light/25 rounded-full blur-3xl -z-10"></div>
          
          <div className="container max-w-5xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase">
                <HelpCircle className="w-4 h-4 text-gold" />
                Pricing FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-gold/50 hover:bg-white/10 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(202,169,87,0.2)] transition-all duration-300 cursor-default"
                >
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold text-sm font-bold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:rotate-6 group-hover:scale-105">
                      Q
                    </span>
                    <span className="group-hover:text-gold transition-colors duration-300">
                      {faq.q}
                    </span>
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed pl-11 transition-colors duration-300 group-hover:text-white/95">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA (White background) */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10"></div>
          <div className="container max-w-4xl text-center relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 tracking-wider uppercase">
              <FileText className="w-4 h-4 text-gold" />
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
              Transparent Pricing. Professional Support. No Surprises.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Take the next step with confidence. From accounting and bookkeeping to tax planning and compliance support, Henleaze Tax Consultancy provides clear pricing and reliable expertise tailored to your needs. Get in touch today to discuss your requirements and receive a personalised quote.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold rounded-full px-12 py-8 text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-[0_10px_35px_rgba(202,169,87,0.35)] hover:shadow-[0_15px_45px_rgba(202,169,87,0.5)] group"
                onClick={() => navigate("/contact")}
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
