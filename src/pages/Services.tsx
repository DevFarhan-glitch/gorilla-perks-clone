import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import ServiceCards from "@/components/home/ServiceCards";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Henleaze Tax Consultancy</title>
        <meta
          name="description"
          content="Explore our comprehensive range of accounting and tax services. From bookkeeping to complex tax planning, we have the expertise to support you."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Our Professional Accounting Services
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed">
                Expert tax and accounting solutions tailored for contractors, small businesses, and landlords in Bristol and across the UK. 
                We combine technical excellence with a personal approach to help you manage your finances efficiently and stay compliant.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Comprehensive Financial Support for Every Stage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Henleaze Tax Consultancy, we understand that every business journey is unique. Whether you are just starting your career as an independent contractor, managing a growing small business, or building a property portfolio as a landlord, our team of dedicated accountants is here to provide the support and guidance you need. We go beyond simple numbers; we provide strategic insights that help you grow with confidence.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Tailored Solutions</h3>
                  <p className="text-muted-foreground">We don't believe in one-size-fits-all. Our services are customized to match your specific industry requirements and personal financial goals, ensuring you only pay for what you truly need.</p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/30 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground">We leverage the latest cloud accounting software like Xero, QuickBooks, and Dext to provide real-time visibility into your finances and automate tedious bookkeeping tasks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCards />

        {/* How We Work Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground">Our Process: Simple & Transparent</h2>
              <p className="mt-4 text-muted-foreground">We've streamlined our onboarding and delivery process to make accounting as stress-free as possible for you.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 px-4">
              {[
                { step: "01", title: "Free Consultation", desc: "We discuss your business needs and financial goals to determine the best approach." },
                { step: "02", title: "Tailored Quote", desc: "Receive a clear, fixed-fee quote based on the specific services your business requires." },
                { step: "03", title: "Seamless Onboarding", desc: "We handle the switch from your previous accountant and set up your digital systems." },
                { step: "04", title: "Ongoing Support", desc: "Your dedicated accountant provides year-round support and proactive tax advice." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 bg-background rounded-xl shadow-sm border border-border">
                  <span className="text-4xl font-black text-gold/20 absolute top-2 right-4">{item.step}</span>
                  <h4 className="text-lg font-bold text-foreground mb-2 mt-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview or Bonus Content */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl bg-primary rounded-3xl p-10 text-white">
              <h2 className="text-2xl font-bold mb-6">Choosing the Right Service</h2>
              <p className="mb-6 opacity-90 leading-relaxed">
                Not sure which accounting package or service is right for you? Our team is expert at identifying the optimal tax structure and compliance requirements for your specific situation. We can help you decide between sole trader vs. limited company status, advise on VAT registration thresholds, and ensure you're utilizing all available allowances for property income.
              </p>
              <p className="opacity-90 leading-relaxed">
                Our goal is to maximize your take-home pay while keeping you fully compliant with HMRC regulations. With Henleaze Tax Consultancy, you're not just getting a service; you're getting a dedicated financial partner.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>

    </>
  );
};

export default Services;
